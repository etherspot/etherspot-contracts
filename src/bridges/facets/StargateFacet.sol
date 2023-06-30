// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../../common/helpers/DiamondReentrancyGuard.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";
import {IStargateRouter} from "../interfaces/stargate/IStargateRouter.sol";
import {IStargateRouterETH} from "../interfaces/stargate/IStargateRouterETH.sol";
import {IStargateReceiver} from "../interfaces/stargate/IStargateReceiver.sol";

/**
 * @title StargateFacet
 * @notice Stargate/LayerZero intergration for bridging tokens
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
        mapping(uint256 => uint16) lzChainIds;
    }

    /**
     * @notice maps chain ids to layer zero chain ids
     * @param chainId - actual chain id
     * @param lzChainId - layer zero chain id that corresponds to chain id
     */
    struct ChainIdConfig {
        uint256 chainId;
        uint16 layerZeroChainId;
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
    struct StargateData {
        uint256 amount;
        address bridgeToken;
        uint16 dstChainId;
        uint16 srcPoolId;
        uint16 dstPoolId;
        address to;
        uint16 slippage;
        address destStargateComposed;
    }

    /**
     * @notice ETH transfer data object
     * @param amount - amount to swap
     * @param dstChainId - stargate/layerzero chainId
     * @param to - address to send the destination tokens to
     * @param slippage - slippage tolerance on _qty (eg 50 == 0.5%)
     */
    struct StargateETHData {
        uint256 amount;
        uint16 dstChainId;
        address to;
        uint16 slippage;
    }

    ///// VARIABLES /////
    uint256 immutable BPS = 10000;

    ///// EVENTS /////
    /**
     * @dev emitted when facet initializes
     * @param stargateRouter - stargate router address
     * @param stargateETHRouter - stargate ETH router address
     * @param chainId - chain id
     */
    event StargateInitialized(
        address stargateRouter,
        address stargateETHRouter,
        uint16 chainId
    );

    /**
     * @dev emitted on ERC20 token swap
     * @param fromToken - from token
     * @param from - from address
     * @param to - to address
     * @param amount - amount swapping
     * @param chainIdTo - receiving chain id
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
     * @param from - from address
     * @param to - to address
     * @param amount - amount swapping
     * @param chainIdTo - receiving chain id
     */
    event StargateETHSwap(
        address from,
        address to,
        uint256 amount,
        uint16 chainIdTo
    );

    /**
     * @dev emitted when received on destination chain
     * @param token - token address
     * @param amount - amount swapping
     */
    event StargateReceivedOnDestination(address token, uint256 amount);

    /**
     * @dev emitted when layer zero chain id is set to chain id
     * @param chainId - chain id
     * @param lzChainId - layer zero chain id
     */
    event LzChainIdSet(uint256 chainId, uint16 lzChainId);

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
        uint16 _chainId,
        ChainIdConfig[] calldata _chainIdConfigs
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

        for (uint256 i; i < _chainIdConfigs.length; ++i) {
            s.lzChainIds[_chainIdConfigs[i].chainId] = _chainIdConfigs[i]
                .layerZeroChainId;
        }
        emit StargateInitialized(_stargateRouter, _stargateETHRouter, _chainId);
    }

    /**
     * @notice initiates token bridge transfer
     * @param _data StargateData object
     */
    function stargateTokenTransfer(
        StargateData calldata _data
    ) external payable nonReentrant {
        require(msg.value > 0, "Stargate:: msg.value required to pay message");
        require(_data.amount > 0, "Stargate:: invalid quantity");
        IStargateRouter router = getStargateRouter();

        // get stargate fees
        uint256 lzFee = stargateFees(_data, router);

        // calc minimum amount out
        uint256 minAmountOut = (_data.amount * (BPS - _data.slippage)) / BPS;

        bytes memory to = abi.encodePacked(_data.destStargateComposed);

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
        router.swap{value: lzFee}(
            getLzChainId(_data.dstChainId), // the destination lz chain id
            _data.srcPoolId, // the source Stargate poolId
            _data.dstPoolId, // the destination Stargate poolId
            payable(msg.sender), // refund adddress. if msg.sender pays too much gas, return extra eth
            _data.amount, // total tokens to send to destination chain
            minAmountOut, // min amount allowed out
            IStargateRouter.lzTxObj(500000, 0, "0x"), // default lzTxObj
            to, // destination address, the sgReceive() implementer
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
     * @param _data StargateETHData object
     * @dev only available between mainnet, arbitrum and optimism
     */
    function stargateETHTransfer(
        StargateETHData calldata _data
    ) external payable nonReentrant {
        uint256 curChain = getChainId();
        require(
            curChain == 1 || curChain == 42161 || curChain == 10,
            "Stargate:: Cannot directly bridge ETH from this chain"
        );
        require(
            _data.dstChainId == 1 ||
                _data.dstChainId == 42161 ||
                _data.dstChainId == 10,
            "Stargate:: Cannot directly bridge ETH to this chain"
        );

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

        uint256 minAmountOut = (_data.amount * (BPS - _data.slippage)) / BPS;

        // value is amount of ETH to swap + stargate/lz fees
        ethRouter.swapETH{value: msg.value}(
            getLzChainId(_data.dstChainId),
            payable(msg.sender),
            receiver,
            _data.amount,
            minAmountOut
        );

        emit StargateETHSwap(
            msg.sender,
            _data.to,
            _data.amount,
            _data.dstChainId
        );
    }

    /**
     * @notice Calculates cross chain fee
     * @param _data StargateData object
     * @param _router Address of stargate router
     */
    function stargateFees(
        StargateData calldata _data,
        IStargateRouter _router
    ) public view returns (uint256) {
        (uint256 nativeFee, ) = _router.quoteLayerZeroFee(
            getLzChainId(_data.dstChainId), // destination chain id
            1, // 1 = swap
            abi.encodePacked(_data.destStargateComposed), // receiver on destination chain
            abi.encode(_data.to), // payload, using abi.encode()
            IStargateRouter.lzTxObj(500000, 0, abi.encodePacked(address(0)))
        );
        return nativeFee;
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
     * @notice gets layer zero chain id for specified chain
     * @param _chainId - chain id
     * @return layzer zero chain id
     */
    function getLzChainId(uint256 _chainId) public view returns (uint16) {
        Storage storage s = getStorage();
        uint16 chainId = s.lzChainIds[_chainId];
        require(
            chainId != 0,
            "Stargate:: chain not assigned layer zero chain id"
        );
        return chainId;
    }

    /**
     * @notice sets layer zero chain id for specified chain
     * @param _chainId - chain id
     * @param _lzChainId - layzer zero chain id
     */
    function setLzChainId(uint256 _chainId, uint16 _lzChainId) external {
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();

        s.lzChainIds[_chainId] = _lzChainId;
        emit LzChainIdSet(_chainId, _lzChainId);
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
