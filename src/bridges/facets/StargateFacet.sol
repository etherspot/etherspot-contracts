// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {IStargateRouter} from "../interfaces/IStargateRouter.sol";
import {IStargateReceiver} from "../interfaces/IStargateReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../helpers/ReentrancyGuard.sol";
import {CannotBridgeToSameNetwork, InvalidAmount, InvalidConfig} from "../errors/GenericErrors.sol";
import {SenderNotStargateRouter, NoMsgValueForCrossChainMessage, StargateRouterAddressZero} from "../errors/StargateErrors.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";
import "hardhat/console.sol";

/// @title StargateFacet
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice Stargate/LayerZero intergration for bridging tokens

contract StargateFacet is IStargateReceiver, ReentrancyGuard {
    using SafeERC20 for IERC20;
    //////////////////////////////////////////////////////////////
    /////////////////////////// Events ///////////////////////////
    //////////////////////////////////////////////////////////////
    event SGInitialized(address stargate, uint16 chainId);
    event SGTransferStarted(
        string bridgeUsed,
        address tokenAddress,
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );
    event SGReceivedOnDestination(address token, uint256 amount);
    event SGUpdatedRouter(address newAddress);
    event SGUpdatedSlippageTolerance(uint256 newSlippage);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Storage ///////////////////////////
    //////////////////////////////////////////////////////////////

    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.stargate");
    struct Storage {
        address stargateRouter;
        uint16 chainId;
        uint256 dstGas;
        uint256 slippage;
    }

    //////////////////////////////////////////////////////////////
    ////////////////////////// Structs ///////////////////////////
    //////////////////////////////////////////////////////////////

    struct StargateData {
        uint256 qty;
        address token;
        uint16 dstChainId;
        uint16 srcPoolId;
        uint16 dstPoolId;
        address payable to;
        address destStargateComposed;
    }

    /// @notice initializes state variables for the Stargate facet
    /// @param _stargateRouter - address of the Stargate router contract
    /// @param _chainId - current chain id

    function sgInitialize(address _stargateRouter, uint16 _chainId) external {
        if (_stargateRouter == address(0)) revert InvalidConfig();
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.stargateRouter = address(_stargateRouter);
        s.chainId = _chainId;
        s.slippage = 50; // equates to 0.5%
        emit SGInitialized(_stargateRouter, _chainId);
    }

    /// @param _sgData - struct containing information required to execute bridge
    function sgBridgeTokens(StargateData memory _sgData)
        external
        payable
        nonReentrant
        returns (bool)
    {
        if (msg.value > 0) revert NoMsgValueForCrossChainMessage();
        if (_sgData.qty > 0) revert InvalidAmount();
        if (_sgData.token == address(0) || _sgData.to == address(0))
            revert InvalidConfig();

        // access storage
        Storage storage s = getStorage();

        // calculate slippage
        uint256 minAmountOut = sgMinAmountOut(_sgData.qty);

        // encode payload data to send to destination contract, which it will handle with sgReceive()
        bytes memory data = abi.encode(_sgData.to);

        // this contract calls stargate swap()
        IERC20(_sgData.token).safeTransferFrom(
            msg.sender,
            address(this),
            _sgData.qty
        );
        IERC20(_sgData.token).safeApprove(
            address(s.stargateRouter),
            _sgData.qty
        );

        // Stargate's Router.swap() function sends the tokens to the destination chain.
        IStargateRouter(s.stargateRouter).swap{value: msg.value}(
            _sgData.dstChainId, // the destination chain id
            _sgData.srcPoolId, // the source Stargate poolId
            _sgData.dstPoolId, // the destination Stargate poolId
            payable(msg.sender), // refund adddress. if msg.sender pays too much gas, return extra eth
            _sgData.qty, // total tokens to send to destination chain
            minAmountOut, // min amount allowed out
            IStargateRouter.lzTxObj(200000, 0, "0x"), // default lzTxObj
            abi.encodePacked(_sgData.destStargateComposed), // destination address, the sgReceive() implementer
            data // bytes payload
        );

        emit SGTransferStarted(
            "stargate",
            _sgData.token,
            msg.sender,
            _sgData.to,
            _sgData.qty,
            _sgData.dstChainId
        );

        return true;
    }

    /// @param _chainId The remote chainId sending the tokens
    /// @param _srcAddress The remote Bridge address
    /// @param _nonce The message ordering nonce
    /// @param _token The token contract on the local chain
    /// @param amountLD The qty of local _token contract tokens
    /// @param _payload The bytes containing the toAddress
    function sgReceive(
        uint16 _chainId,
        bytes memory _srcAddress,
        uint256 _nonce,
        address _token,
        uint256 amountLD,
        bytes memory _payload
    ) external override {
        Storage storage s = getStorage();
        if (msg.sender == address(s.stargateRouter))
            revert SenderNotStargateRouter();

        address _toAddr = abi.decode(_payload, (address));
        IERC20(_token).transfer(_toAddr, amountLD);
        emit SGReceivedOnDestination(_token, amountLD);
    }

    function sgCalculateFees(
        uint16 _destChain,
        address _receiver,
        address _router
    ) public view returns (uint256) {
        (uint256 nativeFee, ) = IStargateRouter(_router).quoteLayerZeroFee(
            _destChain, // destination chain id
            1, // 1 = swap
            abi.encodePacked(_receiver), // receiver on destination chain
            "0x", // payload, using abi.encode()
            IStargateRouter.lzTxObj(200000, 0, "0x")
        );
        return nativeFee;
    }

    function sgMinAmountOut(uint256 _amount) public view returns (uint256) {
        Storage storage s = getStorage();
        // equates to 0.5% slippage
        return (_amount * (10000 - s.slippage)) / (10000);
    }

    function sgUpdateRouter(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        if (_newAddress == address(0)) revert StargateRouterAddressZero();
        Storage storage s = getStorage();
        s.stargateRouter = address(_newAddress);
        emit SGUpdatedRouter(_newAddress);
    }

    function sgUpdateSlippageTolerance(uint256 _newSlippage) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.slippage = _newSlippage;
        emit SGUpdatedSlippageTolerance(_newSlippage);
    }

    function sgWithdraw(
        address _token,
        address _user,
        uint256 _amount
    ) external payable nonReentrant {
        LibDiamond.enforceIsContractOwner();
        IERC20(_token).safeApprove(address(this), _amount);
        IERC20(_token).safeTransferFrom(address(this), _user, _amount);
    }

    receive() external payable {}

    //////////////////////////////////////////////////////////////
    ////////////////////// Private Functions /////////////////////
    //////////////////////////////////////////////////////////////

    /// @dev fetch local storage
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}
