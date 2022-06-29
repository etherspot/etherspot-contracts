// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import { IConnextHandler } from "@connext/nxtp-contracts/contracts/core/connext/interfaces/IConnextHandler.sol";
import { CallParams, XCallArgs } from "@connext/nxtp-contracts/contracts/core/connext/libraries/LibConnextStorage.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { LibDiamond } from "../libs/LibDiamond.sol";

/**
 * @title Connext Amarok Integration
 *
 * @notice Contract which provides bridging functionality through Connext
 *
 */
contract AmarokFacet {
  // storage

  bytes32 internal constant NAMESPACE = hex"a4cabcf91d6212ba2873e2f19de6e26ae65fd3280b9eaa6d8bc38c5fba52ec9d"; //keccak256("io.etherspot.facets.amarok");
  struct Storage {
    address connext;
    uint32 chainId;
  }

  // types

  // events

  /**
   * @dev Emitted when facet initializes
   * @param _connext connext handler address
   */
  event AmarokInitialized(address _connext);

  /**
   * @dev Emitted on erc20 token swap
   * @param _destination destination domain
   * @param _recipient recipient
   * @param _asset address of the asset
   * @param _amount amount of assets
   * @param _relayerFee fee
   * @param _transferId transfer ID of created crosschain transfer
   */
  event AmarokTokenSwap(
    uint32 indexed _destination,
    address indexed _recipient,
    address indexed _asset,
    uint256 _amount,
    uint256 _relayerFee,
    bytes32 _transferId
  );

  /**
   * @dev Emitted on native asset swap
   * @param _destination destination domain
   * @param _recipient recipient
   * @param _amount amount of assets
   * @param _relayerFee fee
   * @param _transferId transfer ID of created crosschain transfer
   */
  event AmarokNativeSwap(
    uint32 indexed _destination,
    address indexed _recipient,
    uint256 _amount,
    uint256 _relayerFee,
    bytes32 _transferId
  );

  /**
   * @dev Emitted on amarok crosschain call
   * @param _destination destination domain
   * @param _recipient recipient of a call
   * @param _asset asset being sent / traded
   * @param _amount amount of asset
   * @param _callData call data
   * @param _relayerFee fee
   * @param _transferId transfer ID of created crosschain transfer
   */
  event AmarokXCall(
    uint32 indexed _destination,
    address indexed _recipient,
    address _asset,
    uint256 _amount,
    bytes _callData,
    uint256 _relayerFee,
    bytes32 _transferId
  );



  // init

  /**
   * @notice Initializes local variables for the Amarok facet
   * @param _connext connext handler address
   */
  function initAmarok(address _connext, uint32 _chainId) external {
    LibDiamond.enforceIsContractOwner();
    require(
      _connext != address(0),
      "Amarok: invalid address"
    );
    Storage storage s = getStorage();
    s.connext = _connext;
    s.chainId = _chainId;
    emit AmarokInitialized(_connext);
  }

  /**
    * @notice Transfer ERC20 tokens
    * @param _asset - The asset the caller sent with the transfer
    * @param _to - The address you are sending funds (and potentially data) to
    * @param _destinationDomain - The final domain (i.e. where `execute` / `reconcile` are called)
    * @param _amount - The amount of transferring asset the tx called xcall with
    * @param _relayerFee - The amount of relayer fee the tx called xcall with
    */
  function amarokTokenTransfer(
    address _asset,
    address _to,
    uint32 _destinationDomain,
    uint256 _amount,
    uint256 _relayerFee
  ) external payable {
    depositAsset(_asset, _amount);
    IERC20(_asset).approve(getConnext(), _amount);
    bytes32 transferId = xcall(
      _to,
      "",
      getChainId(),
      _destinationDomain,
      _asset,
      _amount,
      _relayerFee,
      msg.sender,
      address(0),
      0,
      false
    );
    emit AmarokTokenSwap(
      _destinationDomain,
      _to,
      _asset,
      _amount,
      _relayerFee,
      transferId
    );
  }

  /**
    * @notice Transfer native asset
    * @param _to - The address you are sending funds (and potentially data) to
    * @param _destinationDomain - The final domain (i.e. where `execute` / `reconcile` are called)
    * @param _relayerFee - The amount of relayer fee the tx called xcall with
    */
  function amarokNativeAssetTransfer(
    address _to,
    uint32 _destinationDomain,
    uint256 _relayerFee
  ) external payable {
    bytes32 transferId = xcall(
      _to,
      "",
      getChainId(),
      _destinationDomain,
      address(0),
      msg.value,
      _relayerFee,
      msg.sender,
      address(0),
      0,
      false
    );
    emit AmarokNativeSwap(
      _destinationDomain,
      _to,
      msg.value,
      _relayerFee,
      transferId
    );
  }

  /**
    * @notice Crosschain function call
    * @param _to - The address you are sending funds (and potentially data) to
    * @param _callData - The data to execute on the receiving chain. If no crosschain call is needed, then leave empty
    * @param _destinationDomain - The final domain (i.e. where `execute` / `reconcile` are called)
    * @param _asset - The asset the caller sent with the transfer
    * @param _amount - The amount of transferring asset the tx called xcall with
    * @param _relayerFee - The amount of relayer fee the tx called xcall with
    * @param _recovery - The address to send funds to if your `Executor.execute call` fails
    * @param _callback - The address on the origin domain of the callback contract
    * @param _callbackFee - The relayer fee to execute the callback
    */
  function amarokCall(
    address _to,
    bytes memory _callData,
    uint32 _destinationDomain,
    address _asset,
    uint256 _amount,
    uint256 _relayerFee,
    address _recovery,
    address _callback,
    uint256 _callbackFee
  ) external payable {
    depositAsset(_asset, _amount);
    if (_asset != address(0)) {
      IERC20(_asset).approve(getConnext(), _amount);
    }
    bytes32 transferId = xcall(
      _to,
      _callData,
      getChainId(),
      _destinationDomain,
      _asset,
      _amount,
      _relayerFee,
      _recovery,
      _callback,
      _callbackFee,
      false
    );
    emit AmarokXCall(
      _destinationDomain,
      _to,
      _asset,
      _amount,
      _callData,
      _relayerFee,
      transferId
    );
  }


  /**
    * @notice Wrapper over connext.call
    * @param _to - The address you are sending funds (and potentially data) to
    * @param _callData - The data to execute on the receiving chain. If no crosschain call is needed, then leave empty
    * @param _originDomain - The originating domain (i.e. where `xcall` is called)
    * @param _destinationDomain - The final domain (i.e. where `execute` / `reconcile` are called)
    * @param _asset - The asset the caller sent with the transfer
    * @param _amount - The amount of transferring asset the tx called xcall with
    * @param _relayerFee - The amount of relayer fee the tx called xcall with
    * @param _recovery - The address to send funds to if your `Executor.execute call` fails
    * @param _callback - The address on the origin domain of the callback contract
    * @param _callbackFee - The relayer fee to execute the callback
    * @param _forceSlow - If true, will take slow liquidity path even if it is not a permissioned call
    */
  function xcall(
    address _to,
    bytes memory _callData,
    uint32 _originDomain,
    uint32 _destinationDomain, 
    address _asset,
    uint256 _amount,
    uint256 _relayerFee,
    address _recovery,
    address _callback,
    uint256 _callbackFee,
    bool _forceSlow
  ) internal returns (bytes32 transferId) {
    IConnextHandler connext = IConnextHandler(getConnext());
    CallParams memory callParams = CallParams({
      to: _to,
      callData: _callData,
      originDomain: _originDomain,
      destinationDomain: _destinationDomain,
      recovery: _recovery,
      callback: _callback,
      callbackFee: _callbackFee,
      forceSlow: _forceSlow,
      receiveLocal: false
    });
    XCallArgs memory xcallArgs = XCallArgs({
      params: callParams,
      transactingAssetId: _asset,
      amount: _amount,
      relayerFee: _relayerFee
    });
    uint256 value = _asset == address(0) ? msg.value : 0;
    transferId = connext.xcall{value: value}(xcallArgs);
  }

  /**
   * @dev handles asset deposit
   * @param _asset asset address, 0 for native asset
   * @param _amount amount of asset
   */
  function depositAsset(
    address _asset,
    uint256 _amount
  )
    private
  {
    if (_amount == 0) {
      return;
    }
    if (_asset == address(0)) {
      require(msg.value == _amount, "Amarok: Invalid value");
    } else {
      uint256 _tokenBalanceBefore = IERC20(_asset).balanceOf(address(this));
      IERC20(_asset).transferFrom(msg.sender, address(this), _amount);
      uint256 _tokenBalanceAfter = IERC20(_asset).balanceOf(address(this));
      require(_tokenBalanceAfter - _tokenBalanceBefore == _amount, "Amarok: Invalid value");
    }
  }


  /**
   * @dev returns connext handler
   * @return IConnextHandler connext handler
   */
  function getConnext() private view returns (address) {
    Storage storage s = getStorage();
    return s.connext;
  }

  /**
   * @dev returns chain id
   * @return uint32 chain id
   */
  function getChainId() private view returns (uint32) {
    Storage storage s = getStorage();
    return s.chainId;
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
