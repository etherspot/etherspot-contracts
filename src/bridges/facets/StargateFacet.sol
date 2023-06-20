// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import {IStargateRouter} from "../interfaces/stargate/IStargateRouter.sol";
import {IStargateRouterETH} from "../interfaces/stargate/IStargateRouterETH.sol";
import {IStargateReceiver} from "../interfaces/stargate/IStargateReceiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../../common/helpers/DiamondReentrancyGuard.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";

/**
 * @title StargateFacet
 *
 * @notice Stargate/LayerZero intergration for bridging tokens
 *
 */

contract StargateFacet is IStargateReceiver, ReentrancyGuard {
    using SafeERC20 for IERC20;

    ///// STORAGE AND STRUCTS /////
    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.stargate");
    struct Storage {
        IStargateRouter stargateRouter;
        IStargateRouterETH stargateETHRouter;
        uint16 chainId;
    }

    /**
     * @notice token transfer data object
     * @param amount - amount to swap
     * @param bridgeToken - the address of the native ERC20 to swap() - *must* be the token for the poolId
     * @param dstChainId - stargate/layerzero chainId
     * @param srcPoolId - stargate poolId - *must* be the poolId for the qty asset
     * @param dstPoolId - stargate destination poolId
     * @param to - address to send the destination tokens to
     * @param slippage - slippage tolerance on _qty (eg 50 == 0.5%)
     * @param destStargateComposed - destination contract. it must implement sgReceive()
     */
    struct StargateTransferData {
        uint256 amount;
        address bridgeToken;
        uint16 dstChainId;
        uint16 srcPoolId;
        uint16 dstPoolId;
        address to;
        uint16 slippage;
        uint256 destStargateComposed;
    }

    /**
     * @notice ETH transfer data object
     * @param amount - amount to swap
     * @param dstChainId - stargate/layerzero chainId
     * @param to - address to send the destination tokens to
     * @param slippage - slippage tolerance on _qty (eg 50 == 0.5%)
     */
    struct StargateETHTransferData {
        uint256 amount;
        uint16 dstChainId;
        address to;
        uint16 slippage;
    }

    ///// EVENTS /////
    /**
     * @dev emitted when facet initializes
     * @param stargateRouter stargate router address
     * @param stargateETHRouter stargate ETH router address
     * @param chainId chain id
     */
    event StargateInitialized(
        address stargateRouter,
        address stargateETHRouter,
        uint16 chainId
    );

    /**
     * @dev emitted on ERC20 token swap
     * @param fromToken from token
     * @param from from address
     * @param to to address
     * @param amount amount swapping
     * @param chainIdTo receiving chain id
     */
    event StargateTokenSwap(
        address fromToken,
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );

    /**
     * @dev emitted on ETH swap
     * @param from from address
     * @param to to address
     * @param amount amount swapping
     * @param chainIdTo receiving chain id
     */
    event StargateETHTokenSwap(
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );

    /**
     * @dev emitted when received on destination chain
     * @param token token address
     * @param amount amount swapping
     */
    event StargateReceivedOnDestination(address token, uint256 amount);

    ///// INITIALIZE FACET /////
    /**
     * @notice initializes state variables for the Stargate facet
     * @param _stargateRouter - address of the Stargate router contract
     * @param _stargateETHRouter - address of Stargate ETH router contract
     * @param _chainId - current chain id
     */
    function initStargate(
        address _stargateRouter,
        address _stargateETHRouter,
        uint16 _chainId
    ) external {
        require(
            _stargateRouter != address(0) && _stargateETHRouter != address(0),
            "Stargate:: invalid address"
        );
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.stargateRouter = IStargateRouter(_stargateRouter);
        s.stargateETHRouter = IStargateRouterETH(_stargateETHRouter);
        s.chainId = _chainId;
        emit StargateInitialized(_stargateRouter, _stargateETHRouter, _chainId);
    }

    /**
     * @notice initiates token bridge transfer
     * @param _data StargateTransferData object
     */
    function stargateTokenTransfer(
        StargateTransferData calldata _data
    ) external payable nonReentrant {
        require(msg.value > 0, "Stargate:: msg.value required to pay message");
        require(_data.amount > 0, "Stargate:: invalid quantity");
        IStargateRouter router = getStargateRouter();
        // get stargate fees
        uint256 fee = stargateFees(_data.dstChainId, _data.to, router);
        // calc minimum amount out
        uint256 minAmountOut = (_data.amount * (10000 - _data.slippage)) /
            10000;
        // encode sgReceive implemented
        bytes memory destination = abi.encodePacked(_data.destStargateComposed);
        // encode payload data to send to destination contract, which it will handle with sgReceive()
        bytes memory payload = abi.encode(_data.to);
        // this contract calls stargate swap()
        IERC20(_data.bridgeToken).safeTransferFrom(
            msg.sender,
            address(this),
            _data.amount
        );
        IERC20(_data.bridgeToken).safeApprove(address(router), _data.amount);
        // Stargate's Router.swap() function sends the tokens to the destination chain.
        IStargateRouter(router).swap{value: fee}(
            _data.dstChainId, // the destination chain id
            _data.srcPoolId, // the source Stargate poolId
            _data.dstPoolId, // the destination Stargate poolId
            payable(msg.sender), // refund adddress. if msg.sender pays too much gas, return extra eth
            _data.amount, // total tokens to send to destination chain
            minAmountOut, // min amount allowed out
            IStargateRouter.lzTxObj(500000, 0, "0x"), // default lzTxObj
            destination, // destination address, the sgReceive() implementer
            payload // bytes payload
        );
        emit StargateTokenSwap(
            _data.bridgeToken,
            msg.sender,
            _data.to,
            _data.amount,
            _data.dstChainId
        );
    }

    /**
     * @notice initiates an ETH bridging transfer
     * @param _data StargateETHTransferData object
     */
    function stargateETHTransfer(
        StargateETHTransferData calldata _data
    ) external payable nonReentrant {
        require(msg.value > 0, "Stargate:: msg.value required");
        require(_data.amount > 0, "Stargate:: invalid quantity");
        require(
            msg.value > _data.amount,
            "Stargate: no fees added for ETH transfer"
        );
        IStargateRouterETH ethRouter = getStargateETHRouter();
        require(
            address(ethRouter) != address(0),
            "Stargate:: ETH transfer not available"
        );
        bytes memory receiver = abi.encodePacked(_data.to);
        uint256 minAmountOut = (_data.amount * (10000 - _data.slippage)) /
            10000;

        // value is amount of ETH to swap + stargate/lz fees
        ethRouter.swapETH{value: msg.value}(
            _data.dstChainId,
            payable(msg.sender),
            receiver,
            _data.amount,
            minAmountOut
        );

        emit StargateETHTokenSwap(
            msg.sender,
            _data.to,
            _data.amount,
            _data.dstChainId
        );
    }

    /**
     * @notice required to receive tokens on destination chain
     * @param _token the token contract on the local chain
     * @param _amountLD the qty of local _token contract tokens
     * @param _payload the bytes containing the toAddress
     */
    function sgReceive(
        uint16 /*_chainId*/,
        bytes memory /*_srcAddress*/,
        uint256 /*_nonce*/,
        address _token,
        uint256 _amountLD,
        bytes memory _payload
    ) external override {
        require(
            msg.sender == address(getStargateRouter()),
            "Stargate:: only stargate router"
        );

        address to = abi.decode(_payload, (address));
        IERC20(_token).safeTransfer(to, _amountLD);
        emit StargateReceivedOnDestination(_token, _amountLD);
    }

    /**
     * @notice Calculates cross chain fee
     * @param _destChain Destination chain id
     * @param _receiver Receiver on destination chain
     * @param _router Address of stargate router
     */
    function stargateFees(
        uint16 _destChain,
        address _receiver,
        IStargateRouter _router
    ) public view returns (uint256) {
        (uint256 nativeFee, ) = _router.quoteLayerZeroFee(
            _destChain, // destination chain id
            1, // 1 = swap
            abi.encodePacked(_receiver), // receiver on destination chain
            "0x", // payload, using abi.encode()
            IStargateRouter.lzTxObj(200000, 0, abi.encodePacked(address(0)))
        );
        return nativeFee;
    }

    ///// PRIVATE FUNCTIONS /////

    /**
     * @dev returns stargate router contract
     * @return address stargate router contract
     */
    function getStargateRouter() private view returns (IStargateRouter) {
        return getStorage().stargateRouter;
    }

    /**
     * @dev returns stargate ETH router contract
     * @return address stargate ETH router contract
     */
    function getStargateETHRouter() private view returns (IStargateRouterETH) {
        return getStorage().stargateETHRouter;
    }

    /**
     * @dev returns stargate chainId
     * @return address connext contract
     */
    function getChainId() private view returns (uint16) {
        return getStorage().chainId;
    }

    /**
     * @dev fetch local storage
     */
    function getStorage() private pure returns (Storage storage s) {
        bytes32 namespace = NAMESPACE;
        // solhint-disable-next-line no-inline-assembly
        assembly {
            s.slot := namespace
        }
    }
}
