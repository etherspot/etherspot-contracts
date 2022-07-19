// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

/// @title CBridgeFacet
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice cBridge intergration for bridging tokens

import {ICBridge} from "../interfaces/ICBridge.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "../helpers/ReentrancyGuard.sol";
import {CannotBridgeToSameNetwork, InvalidAmount, InvalidConfig} from "../errors/GenericErrors.sol";
import {CBSlippageTooLow} from "../errors/CBridgeErrors.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";

contract CBridgeFacet is ReentrancyGuard {
    using SafeERC20 for IERC20;
    //////////////////////////////////////////////////////////////
    /////////////////////////// Events ///////////////////////////
    //////////////////////////////////////////////////////////////
    event CBInitialized(address cBridge, uint256 chainId);
    event CBTransferStarted(
        string bridgeUsed,
        address token,
        address from,
        address to,
        uint256 qty,
        uint256 chainIdTo
    );
    event CBUpdatedBridge(address newAddress);
    event CBUpdatedSlippageTolerance(uint256 newSlippage);
    //////////////////////////////////////////////////////////////
    ////////////////////////// Storage ///////////////////////////
    //////////////////////////////////////////////////////////////

    bytes32 internal constant NAMESPACE =
        keccak256("io.etherspot.facets.cbridge");
    struct Storage {
        address cbBridge;
        uint256 cbChainId;
        uint32 cbSlippage;
    }

    //////////////////////////////////////////////////////////////
    ////////////////////////// Structs ///////////////////////////
    //////////////////////////////////////////////////////////////

    struct CBridgeData {
        uint64 dstChainId;
        uint64 nonce;
        uint256 qty;
        address to;
        address token;
    }

    /// @notice initializes state variables for the cBridge facet
    /// @param _cbBridge address of the CBridge router contract
    function cbInitialize(address _cbBridge) external {
        LibDiamond.enforceIsContractOwner();
        if (_cbBridge == address(0)) revert InvalidConfig();
        Storage storage s = getStorage();
        s.cbBridge = _cbBridge;
        s.cbChainId = block.chainid;
        s.cbSlippage = 10000; // equates to 1% - has to be > 0.5% (slippage * 1M)
        emit CBInitialized(_cbBridge, block.chainid);
    }

    /// @notice initiates token bridging
    /// @param _cbData: provides necessary data for cBridge transfer

    function cbBridgeTokens(CBridgeData calldata _cbData)
        external
        payable
        nonReentrant
    {
        if (block.chainid == _cbData.dstChainId)
            revert CannotBridgeToSameNetwork();
        Storage storage s = getStorage();
        address bridge = s.cbBridge;

        // this contract calls stargate swap()
        IERC20(_cbData.token).safeTransferFrom(
            msg.sender,
            address(this),
            _cbData.qty
        );
        IERC20(_cbData.token).safeApprove(address(bridge), _cbData.qty);

        ICBridge(bridge).send(
            _cbData.to,
            _cbData.token,
            _cbData.qty,
            _cbData.dstChainId,
            _cbData.nonce,
            s.cbSlippage
        );

        emit CBTransferStarted(
            "cbridge",
            _cbData.token,
            msg.sender,
            _cbData.to,
            _cbData.qty,
            _cbData.dstChainId
        );
    }

    function cbUpdateSlippageTolerance(uint32 _newSlippage) external {
        // should be > 0.5% (5000)
        if (_newSlippage <= 5000) revert CBSlippageTooLow();
        LibDiamond.enforceIsContractOwner();
        Storage storage s = getStorage();
        s.cbSlippage = _newSlippage;
        emit CBUpdatedSlippageTolerance(_newSlippage);
    }

    function cbUpdateBridge(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        if (_newAddress == address(0)) revert InvalidConfig();
        Storage storage s = getStorage();
        s.cbBridge = _newAddress;
        emit CBUpdatedBridge(_newAddress);
    }

    function cbWithdraw(
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
