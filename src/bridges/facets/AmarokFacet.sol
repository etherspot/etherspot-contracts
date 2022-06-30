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
contract ConnextFacet {
  // storage
  
  bytes32 internal constant NAMESPACE = hex"a4cabcf91d6212ba2873e2f19de6e26ae65fd3280b9eaa6d8bc38c5fba52ec9d"; //keccak256("io.etherspot.facets.connext");
  struct Storage {
    address connext;
    uint32 domainId;
  }

  // events

  /**
   * @dev Emitted when facet initializes
   * @param _connext connext handler address
   */
  event ConnextInitialized(address _connext);

  /**
   * @dev Emitted on erc20 token swap
   * @param _destination destination domain
   * @param _recipient recipient
   * @param _asset address of the asset
   * @param _amount amount of assets
   * @param _relayerFee fee
   * @param _transferId transfer ID of created crosschain transfer
   */
  event ConnextTokenSwap(
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
  event ConnextNativeSwap(
    uint32 indexed _destination,
    address indexed _recipient,
    uint256 _amount,
    uint256 _relayerFee,
    bytes32 _transferId
  );

  /**
   * @dev Emitted on connext crosschain call
   * @param _destination destination domain
   * @param _recipient recipient of a call
   * @param _asset asset being sent / traded
   * @param _amount amount of asset
   * @param _callData call data
   * @param _relayerFee fee
   * @param _transferId transfer ID of created crosschain transfer
   */
  event ConnextXCall(
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
   * @notice Initializes local variables for the Connext facet
   * @param _connext connext handler address
   */
  function initConnext(address _connext, uint32 _domainId) external {
    LibDiamond.enforceIsContractOwner();
    require(
      _connext != address(0),
      "Connext: invalid address"
    );
    Storage storage s = getStorage();
    s.connext = _connext;
    s.domainId = _domainId;
    emit ConnextInitialized(_connext);
  }

  /**
    * @notice Transfer ERC20 tokens
    * @param _asset - The asset the caller sent with the transfer
    * @param _to - The address you are sending funds (and potentially data) to
    * @param _destinationDomain - The final domain (i.e. where `execute` / `reconcile` are called)
    * @param _amount - The amount of transferring asset the tx called xcall with
    * @param _relayerFee - The amount of relayer fee the tx called xcall with
    */
  function connextTokenTransfer(
    address _asset,
    address _to,
    uint32 _destinationDomain,
    uint256 _amount,
    uint256 _relayerFee
  ) external payable {
    bytes32 transferId = xcall(
      _to,
      "",
      getDomainId(),
      _destinationDomain,
      _asset,
      _amount,
      _relayerFee,
      msg.sender,
      address(0),
      0,
      false
    );
    emit ConnextTokenSwap(
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
  function connextNativeAssetTransfer(
    address _to,
    uint32 _destinationDomain,
    uint256 _relayerFee
  ) external payable {
    bytes32 transferId = xcall(
      _to,
      "",
      getDomainId(),
      _destinationDomain,
      address(0),
      msg.value,
      _relayerFee,
      msg.sender,
      address(0),
      0,
      false
    );
    emit ConnextNativeSwap(
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
  function connextCall(
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
    bytes32 transferId = xcall(
      _to,
      _callData,
      getDomainId(),
      _destinationDomain,
      _asset,
      _amount,
      _relayerFee,
      _recovery,
      _callback,
      _callbackFee,
      false
    );
    emit ConnextXCall(
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
    depositAssetAndFees(_asset, _amount, _relayerFee, _callbackFee);
    if (_asset != address(0)) {
      IERC20(_asset).approve(getConnext(), _amount);
    }
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
    transferId = connext.xcall{value: msg.value}(xcallArgs);
  }

  /**
   * @dev handles asset deposit
   * @param _asset asset address, 0 for native asset
   * @param _amount amount of asset
   */
  function depositAssetAndFees(
    address _asset,
    uint256 _amount,
    uint256 _relayerFee,
    uint256 _callbackFee
  )
    private
  {
    if (_asset == address(0)) {
      require(msg.value == _amount + _relayerFee + _callbackFee, "Connext: Invalid value");
    } else {
      require(msg.value == _relayerFee + _callbackFee, "Connext: Invalid value");
      uint256 _tokenBalanceBefore = IERC20(_asset).balanceOf(address(this));
      IERC20(_asset).transferFrom(msg.sender, address(this), _amount);
      uint256 _tokenBalanceAfter = IERC20(_asset).balanceOf(address(this));
      require(_tokenBalanceAfter - _tokenBalanceBefore == _amount, "Connext: Invalid value");
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
  function getDomainId() private view returns (uint32) {
    Storage storage s = getStorage();
    return s.domainId;
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
