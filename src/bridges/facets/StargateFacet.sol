// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {IStargateRouter} from "../interfaces/IStargateRouter.sol";
import {IStargateReceiver} from "../interfaces/IStargateReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../helpers/ReentrancyGuard.sol";
import {CannotBridgeToSameNetwork, InvalidAmount, InvalidConfig} from "../errors/GenericErrors.sol";
import {SenderNotStargateRouter, NoMsgValueForCrossChainMessage, StargateRouterAddressZero, InvalidSourcePoolId, InvalidDestinationPoolId} from "../errors/StargateErrors.sol";
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
        address fromToken,
        address toToken,
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );
    event SGReceivedOnDestination(address token, uint256 amount);
    event SGUpdatedRouter(address newAddress);
    event SGUpdatedSlippageTolerance(uint256 newSlippage);
    event SGAddedPool(uint16 chainId, address token, uint16 poolId);

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
        mapping(uint16 => mapping(address => uint16)) poolIds;
    }

    //////////////////////////////////////////////////////////////
    ////////////////////////// Structs ///////////////////////////
    //////////////////////////////////////////////////////////////

    struct StargateData {
        uint256 qty;
        address fromToken;
        address toToken;
        uint16 dstChainId;
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
        // Adding pre-existing pools => USDC: 1, USDT: 2, BUSD: 5
        sgAddPool(1, 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48, 1);
        sgAddPool(1, 0xdAC17F958D2ee523a2206206994597C13D831ec7, 2);
        sgAddPool(2, 0x55d398326f99059fF775485246999027B3197955, 2);
        sgAddPool(2, 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56, 5);
        sgAddPool(6, 0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E, 1);
        sgAddPool(6, 0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7, 2);
        sgAddPool(9, 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174, 1);
        sgAddPool(9, 0xc2132D05D31c914a87C6611C10748AEb04B58e8F, 2);
        sgAddPool(10, 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8, 1);
        sgAddPool(10, 0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9, 2);
        sgAddPool(11, 0x7F5c764cBc14f9669B88837ca1490cCa17c31607, 1);
        sgAddPool(12, 0x04068DA6C83AFCFA0e13ba15A6696662335D5B75, 1);
        emit SGInitialized(_stargateRouter, _chainId);
    }

    /// @notice initializes state variables for the stargate facet
    /// @param _sgData - struct containing information required to execute bridge
    function sgBridgeTokens(StargateData memory _sgData)
        external
        payable
        nonReentrant
    {
        if (msg.value <= 0) revert NoMsgValueForCrossChainMessage();
        if (_sgData.qty <= 0) revert InvalidAmount();
        if (
            _sgData.fromToken == address(0) ||
            _sgData.toToken == address(0) ||
            _sgData.to == address(0) ||
            _sgData.destStargateComposed == address(0)
        ) revert InvalidConfig();

        // access storage
        Storage storage s = getStorage();
        uint16 srcPoolId = sgRetrievePoolId(s.chainId, _sgData.fromToken);
        if (srcPoolId == 0) revert InvalidSourcePoolId();
        uint16 dstPoolId = sgRetrievePoolId(
            _sgData.dstChainId,
            _sgData.toToken
        );

        // calculate slippage
        uint256 minAmountOut = sgMinAmountOut(_sgData.qty);

        // encode sgReceive implemented
        bytes memory destination = abi.encodePacked(
            _sgData.destStargateComposed
        );

        // encode payload data to send to destination contract, which it will handle with sgReceive()
        bytes memory payload = abi.encode(_sgData.to);

        // this contract calls stargate swap()
        IERC20(_sgData.fromToken).safeTransferFrom(
            msg.sender,
            address(this),
            _sgData.qty
        );

        IERC20(_sgData.fromToken).safeApprove(
            address(s.stargateRouter),
            _sgData.qty
        );

        // Stargate's Router.swap() function sends the tokens to the destination chain.
        IStargateRouter(s.stargateRouter).swap{value: msg.value}(
            _sgData.dstChainId, // the destination chain id
            srcPoolId, // the source Stargate poolId
            dstPoolId, // the destination Stargate poolId
            payable(msg.sender), // refund adddress. if msg.sender pays too much gas, return extra eth
            _sgData.qty, // total tokens to send to destination chain
            minAmountOut, // min amount allowed out
            IStargateRouter.lzTxObj(200000, 0, "0x"), // default lzTxObj
            destination, // destination address, the sgReceive() implementer
            payload // bytes payload
        );

        emit SGTransferStarted(
            "stargate",
            _sgData.fromToken,
            _sgData.toToken,
            msg.sender,
            _sgData.to,
            _sgData.qty,
            _sgData.dstChainId
        );
    }

    /// @notice required to receive tokens on destination chain
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
        if (msg.sender != address(s.stargateRouter))
            revert SenderNotStargateRouter();

        address _toAddr = abi.decode(_payload, (address));
        IERC20(_token).transfer(_toAddr, amountLD);
        emit SGReceivedOnDestination(_token, amountLD);
    }

    /// @notice Calculates cross chain fee
    /// @param _destChain Destination chain id
    /// @param _receiver Receiver on destination chain
    /// @param _router Address of stargate router
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

    /// @notice Calculates the minimum amount out using slippage tolerance
    /// @param _amount Transfer amount
    function sgMinAmountOut(uint256 _amount) public view returns (uint256) {
        Storage storage s = getStorage();
        // equates to 0.5% slippage
        return (_amount * (10000 - s.slippage)) / (10000);
    }

    /// @notice Updates stargate router address for deployed chain
    /// @param _newAddress Address of the new router
    function sgUpdateRouter(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        if (_newAddress == address(0)) revert StargateRouterAddressZero();
        Storage storage s = getStorage();
        s.stargateRouter = address(_newAddress);
        emit SGUpdatedRouter(_newAddress);
    }

    /// @notice Updates slippage tolerance amount
    /// @param _newSlippage New slippage amount
    function sgUpdateSlippageTolerance(uint256 _newSlippage) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.slippage = _newSlippage;
        emit SGUpdatedSlippageTolerance(_newSlippage);
    }

    /// @notice Withdraws tokens on contract
    /// @param _token Address of token
    /// @param _user Address of receiver of tokens
    /// @param _amount Amount to withdraw
    function sgWithdraw(
        address _token,
        address _user,
        uint256 _amount
    ) external payable nonReentrant {
        LibDiamond.enforceIsContractOwner();
        IERC20(_token).safeApprove(address(this), _amount);
        IERC20(_token).safeTransferFrom(address(this), _user, _amount);
    }

    /// @notice Adds a new pool for a specific token and chain
    /// @param _chainId Chain id of new pool (NOT actual chain id - check stargate pool ids docs)
    /// @param _token Address of token
    /// @param _poolId Pool id (check stargate pool ids docs)
    function sgAddPool(
        uint16 _chainId,
        address _token,
        uint16 _poolId
    ) public {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.poolIds[_chainId][_token] = _poolId;
        emit SGAddedPool(_chainId, _token, _poolId);
    }

    /// @notice Checks for a valid token pool on specific chain
    /// @param _chainId Chain id of new pool (NOT actual chain id - check stargate pool ids docs)
    /// @param _token Address of token
    /// @param _poolId Pool id (check stargate pool ids docs)
    function sgCheckPoolId(
        uint16 _chainId,
        address _token,
        uint16 _poolId
    ) public view returns (bool) {
        Storage storage s = getStorage();
        return s.poolIds[_chainId][_token] == _poolId ? true : false;
    }

    /// @notice Retrieves pool id for a token on a specified chain
    /// @param _chainId Chain id of new pool (NOT actual chain id - check stargate pool ids docs)
    /// @param _token Address of token
    function sgRetrievePoolId(uint16 _chainId, address _token)
        public
        view
        returns (uint16)
    {
        Storage storage s = getStorage();
        return s.poolIds[_chainId][_token];
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
