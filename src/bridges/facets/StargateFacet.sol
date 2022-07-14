// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {IStargateRouter} from "../interfaces/IStargateRouter.sol";
import {IStargateReceiver} from "../interfaces/IStargateReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "../helpers/ReentrancyGuard.sol";
import {CannotBridgeToSameNetwork, InvalidAmount, InvalidConfig} from "../errors/GenericErrors.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";
import "hardhat/console.sol";

/// @title StargateFacet
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice Stargate/LayerZero intergration for bridging tokens

contract StargateFacet is IStargateReceiver, ReentrancyGuard {
    //////////////////////////////////////////////////////////////
    /////////////////////////// Events ///////////////////////////
    //////////////////////////////////////////////////////////////
    event StargateInitialized(address stargate, uint16 chainId);
    event TransferStarted(
        string bridgeUsed,
        address tokenAddress,
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );
    event ReceivedOnDestination(address token, uint256 amount, uint16 chainId);
    event UpdatedStargateAddress(address newAddress);
    event UpdatedSlippageTolerance(uint256 newSlippage);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Storage ///////////////////////////
    //////////////////////////////////////////////////////////////

    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.stargate");
    struct Storage {
        address stargate;
        uint16 chainId;
        uint256 dstGas;
        uint256 bridgeSlippage;
        mapping(uint16 => address) crossRouters;
        mapping(uint16 => uint256) poolIds;
    }

    /// @notice initializes state variables for the Stargate facet
    /// @param _stargate address of the Stargate router contract
    function initializeStargate(address _stargate, uint16 _chainId) external {
        if (_stargate == address(0)) revert InvalidConfig();

        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.stargate = address(_stargate);
        s.chainId = _chainId;
        s.bridgeSlippage = 100;
        s.poolIds[1] = 1; // ethereum: USDC
        s.poolIds[2] = 2; // BSC: USDT
        s.poolIds[6] = 1; // Avalanche: USDC
        s.poolIds[9] = 1; // Polygon: USDC
        s.poolIds[10] = 1; // Arbitrum: USDC
        s.poolIds[11] = 1; // Optimism: USDC
        s.poolIds[12] = 1; // Fantom: USDC
        s.poolIds[10001] = 1; // rinkeby: USDC
        s.poolIds[10002] = 2; // BSC Testnet ​USDT
        s.poolIds[10009] = 1; // Mumbai: USDC
        emit StargateInitialized(_stargate, _chainId);
    }

    function setCrossChainRouter(uint16 _chainId, address _crossRouter)
        external
    {
        LibDiamond.enforceIsContractOwner();
        if (_crossRouter == address(0)) revert InvalidConfig();
        Storage storage s = getStorage();
        s.crossRouters[_chainId] = _crossRouter;
    }

    function bridgeTokensStargate(
        address _token,
        address _receiver,
        uint256 _amount,
        uint16 _destChain
    ) external payable nonReentrant {
        _activateStartgate(_token, _destChain, _amount, _receiver);

        emit TransferStarted(
            "stargate",
            _token,
            msg.sender,
            _receiver,
            _amount,
            _destChain
        );
    }

    function sgReceive(
        uint16 _chainId, // the remote chainId sending the tokens
        bytes memory _srcAddress, // the remote Bridge address
        uint256 _nonce,
        address _token, // the token contract on the local chain
        uint256 amountLD, // the qty of local _token contract tokens
        bytes memory payload
    ) external override {
        Storage storage s = getStorage();
        address router = s.stargate;
        require(msg.sender == address(router), "Caller not Stargate Router");
        address to = abi.decode(payload, (address));
        IERC20(_token).transfer(to, amountLD);
        emit ReceivedOnDestination(_token, amountLD, _chainId);
    }

    function updateStargateAddress(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.stargate = address(_newAddress);
        emit UpdatedStargateAddress(_newAddress);
    }

    function updateSlippageTolerance(uint256 _newSlippage) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.bridgeSlippage = _newSlippage;
        emit UpdatedSlippageTolerance(_newSlippage);
    }

    //////////////////////////////////////////////////////////////
    ////////////////////// Private Functions /////////////////////
    //////////////////////////////////////////////////////////////

    function _activateStartgate(
        address _token,
        uint16 _destChain,
        uint256 _amount,
        address _receiver
    ) private {
        if (block.chainid == _destChain) revert CannotBridgeToSameNetwork();

        Storage storage s = getStorage();
        address router = s.stargate;
        uint16 toChain = _destChain;
        uint256 amount = _amount;
        bytes memory dstCrossRouter = abi.encodePacked(
            s.crossRouters[_destChain]
        );

        // transfer funds and approve stargate router
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        IERC20(_token).approve(address(router), _amount);

        // calculate slippage
        uint256 minAmountOut = _calculateSlippage(_amount);

        // encode _receiver
        bytes memory encodeReceiver = abi.encodePacked(_receiver);

        // calculate correct fee for tx
        uint256 nativeFee = _calculateFees(_destChain, _receiver, router);
        console.log("Fee for transaction is: ", nativeFee);

        // the msg.value is the "fee" that Stargate needs to pay for the cross chain message
        IStargateRouter(router).swap{value: nativeFee}(
            _destChain, // destination chain id
            s.poolIds[s.chainId], // source pool id
            s.poolIds[toChain], // destination pool id
            payable(msg.sender), // refund adddress. extra gas (if any) is returned to this address
            amount, // amount to swap
            minAmountOut, // minimum amount you would accept on the destination
            IStargateRouter.lzTxObj(200000, 0, "0x"), // 200000 additional gasLimit increase, 0 airdrop, at 0x address
            dstCrossRouter, // the contract to send the tokens to on destination chain
            encodeReceiver // bytes param, if you wish to send additional payload you can abi.encode() them here
        );
    }

    function _calculateFees(
        uint16 _dstChain,
        address _receiver,
        address _router
    ) private view returns (uint256) {
        (uint256 nativeFee, ) = IStargateRouter(_router).quoteLayerZeroFee(
            _dstChain, // destination chain id
            1, // 1 = swap
            abi.encodePacked(_receiver), // receiver on destination chain
            "0x", // payload, using abi.encode()
            IStargateRouter.lzTxObj(200000, 0, "0x")
        );

        return nativeFee;
    }

    function _calculateSlippage(uint256 _amount)
        private
        view
        returns (uint256)
    {
        Storage storage s = getStorage();
        // equates to 1% slippage
        return (_amount * (uint256(10000) - (s.bridgeSlippage))) / (10000);
    }

    /// @dev fetch local storage
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}
