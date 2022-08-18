// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IHopBridge } from "../interfaces/IHopBridge.sol";
import { LibAsset } from "../libs/LibAsset.sol";
import { LibDiamond } from "../libs/LibDiamond.sol";
import { ReentrancyGuard } from "../../common/helpers/DiamondReentrancyGuard.sol";
import {
  InvalidAmount,
  InvalidBridgeConfigLength,
  CannotBridgeToSameNetwork,
  NativeValueWithERC,
  InvalidConfig
} from "../errors/GenericErrors.sol";

/**
 * @title Hop Protocol Integration
 *
 * @notice Contract which provides bridging functionality through Hop Protocol
 *
 */
contract HopFacet is ReentrancyGuard {
  // storage

  bytes32 internal constant NAMESPACE = keccak256("io.etherspot.facets.hop");
  struct Storage {
    uint256 chainLayerId;
  }

  // types

  struct HopData {
    address bridge;
    address ammWrapper;
    address asset;
    address recipient;
    uint256 chainId;
    uint256 amount;
    uint256 bonderFee;
    uint256 amountOutMin;
    uint256 deadline;
    uint256 destinationAmountOutMin;
    uint256 destinationDeadline;
  }

  // events

  /**
   * @dev Emitted when facet initializes
   * @param chainId current chain id
   * @param chainLayerId current chain layer id
   */
  event HopInitialized(
    uint256 chainId,
    uint256 chainLayerId
  );

  /**
   * @dev Emitted on token swap
   * @param _destination destination chain id
   * @param _bridge address of the bridge on chain _destination,
   * @param _ammWrapper address of the amm wrapper,
   * @param _recipient recipient
   * @param _asset address of the asset
   * @param _amount amount of assets
   * @param _bonderFee fee
   * @param _amountOutMin The minimum amount received after attempting to
   * swap in the destination
   * @param _deadline The deadline for swapping in the destination AMM market.
   * 0 if no * swap is intended.
   * @param _destinationAmountOutMin The minimum amount of tokens to receive after bridging
   * @param _destinationDeadline The time the transaction must be completed
   */
  event HopTokenSwap(
    uint256 indexed _destination,
    address _bridge,
    address _ammWrapper,
    address indexed _recipient,
    address indexed _asset,
    uint256 _amount,
    uint256 _bonderFee,
    uint256 _amountOutMin,
    uint256 _deadline,
    uint256 _destinationAmountOutMin,
    uint256 _destinationDeadline
  );



  // external functions

  /**
   * @notice Initializes local variables for the Connext facet
   */
  function initHop(uint256 _chainLayerId) external {
    LibDiamond.enforceIsContractOwner();

    Storage storage s = getStorage();
    s.chainLayerId = _chainLayerId;

    emit HopInitialized(
      getChainID(),
      _chainLayerId
    );
  }

  /**
   * @notice Bridges tokens via Hop Protocol
   * @param _hopData data specific to Hop Protocol
   */
  function hopTokenTransfer(
    HopData calldata _hopData
  ) external payable nonReentrant {
    LibAsset.depositAsset(_hopData.asset, _hopData.amount);

    address bridge;
    if (getLayerId() == 1) {
      bridge = _hopData.bridge;
    } else {
      bridge = _hopData.ammWrapper;
    }

    if (getChainID() == _hopData.chainId)
      revert CannotBridgeToSameNetwork();

    // Give Hop approval to bridge tokens
    LibAsset.maxApproveERC20(
      IERC20(_hopData.asset),
      bridge,
      _hopData.amount
    );

    uint256 value = LibAsset.isNativeAsset(_hopData.asset)
      ? _hopData.amount
      : 0;

    if (getLayerId() == 1) {
      // Ethereum L1
      IHopBridge(bridge).sendToL2{value: value}(
        _hopData.chainId,
        _hopData.recipient,
        _hopData.amount,
        _hopData.destinationAmountOutMin,
        _hopData.destinationDeadline,
        address(0),
        0
      );
    } else {
      // L2
      IHopBridge(bridge).swapAndSend{value: value}(
        _hopData.chainId,
        _hopData.recipient,
        _hopData.amount,
        _hopData.bonderFee,
        _hopData.amountOutMin,
        _hopData.deadline,
        _hopData.destinationAmountOutMin,
        _hopData.destinationDeadline
      );
    }
    emit HopTokenSwap(
      _hopData.chainId,
      _hopData.bridge,
      _hopData.ammWrapper,
      _hopData.recipient,
      _hopData.asset,
      _hopData.amount,
      _hopData.bonderFee,
      _hopData.amountOutMin,
      _hopData.deadline,
      _hopData.destinationAmountOutMin,
      _hopData.destinationDeadline
    );
  }

  /// private Methods ///

  /**
   * @dev returns local storage
   */
  function getStorage() private pure returns (Storage storage s) {
    bytes32 namespace = NAMESPACE;
    // solhint-disable-next-line no-inline-assembly
    assembly {
      s.slot := namespace
    }
  }

  /**
   * @dev returns current chain layer number
   * @return uint256 layer number
   */
  function getLayerId() private view returns (uint256) {
    return getStorage().chainLayerId;
  }

  /**
   * @dev fetch chain id
   */
  function getChainID() private view returns (uint256) {
    uint256 id;
    // solhint-disable-next-line no-inline-assembly
    assembly {
        id := chainid()
    }
    return id;
  }
}
