// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

/// @title CBridgeFacet
/// @author Luke Wickens <luke@pillarproject.io>
/// @notice cBridge intergration for bridging tokens

import {LibAsset} from "../libs/LibAsset.sol";
import {ICBridge} from "../interfaces/ICBridge.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {CannotBridgeToSameNetwork, InvalidAmount, InvalidConfig} from "../errors/GenericErrors.sol";
import {LibDiamond} from "../libs/LibDiamond.sol";

contract CBridgeFacet is ReentrancyGuard {
    //////////////////////////////////////////////////////////////
    /////////////////////////// Events ///////////////////////////
    //////////////////////////////////////////////////////////////
    event CBridgeInitialized(address cBridge, uint256 chainId);
    event TransferStarted(
        string bridgeUsed,
        address tokenAddress,
        address from,
        address to,
        uint256 amount,
        uint256 chainIdTo
    );
    event UpdatedCBridgeAddress(address newAddress);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Structs ///////////////////////////
    //////////////////////////////////////////////////////////////

    struct CBridgeData {
        uint32 maxSlippage;
        uint64 dstChainId;
        uint64 nonce;
        uint256 amount;
        address receiver;
        address token;
    }
    //////////////////////////////////////////////////////////////
    ////////////////////// State Variables ///////////////////////
    //////////////////////////////////////////////////////////////

    address public cBridge;

    /// @notice initializes state variables for the cBridge facet
    /// @param _cBridge address of the CBridge router contract
    function initializeCBridge(address _cBridge) external {
        LibDiamond.enforceIsContractOwner();
        if (_cBridge == address(0)) revert InvalidConfig();
        cBridge = _cBridge;
        emit CBridgeInitialized(_cBridge, block.chainid);
    }

    /// @notice initiates token bridging
    /// @param _cBridgeData: provides necessary data for cBridge transfer

    function bridgeTokensCBridge(CBridgeData calldata _cBridgeData)
        external
        payable
        nonReentrant
    {
        LibAsset.depositAsset(_cBridgeData.token, _cBridgeData.amount);
        _startBridge(_cBridgeData);

        emit TransferStarted(
            "cBridge",
            _cBridgeData.token,
            msg.sender,
            _cBridgeData.receiver,
            _cBridgeData.amount,
            _cBridgeData.dstChainId
        );
    }

    function updateBridgeAddress(address _newAddress) external {
        LibDiamond.enforceIsContractOwner();
        if (_newAddress == address(0)) revert InvalidConfig();
        cBridge = _newAddress;
        emit UpdatedCBridgeAddress(_newAddress);
    }

    //////////////////////////////////////////////////////////////
    ////////////////////// Private Functions /////////////////////
    //////////////////////////////////////////////////////////////

    function _startBridge(CBridgeData memory _cBridgeData) private {
        if (block.chainid == _cBridgeData.dstChainId)
            revert CannotBridgeToSameNetwork();

        LibAsset.maxApproveERC20(
            IERC20(_cBridgeData.token),
            cBridge,
            _cBridgeData.amount
        );
        // solhint-disable check-send-result
        ICBridge(cBridge).send(
            _cBridgeData.receiver,
            _cBridgeData.token,
            _cBridgeData.amount,
            _cBridgeData.dstChainId,
            _cBridgeData.nonce,
            _cBridgeData.maxSlippage
        );
    }
}
