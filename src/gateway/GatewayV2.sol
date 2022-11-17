// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/access/Guarded.sol";
import "../common/libs/ECDSALib.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/signature/SignatureValidator.sol";
import "../external/ExternalAccountRegistry.sol";
import "../personal/PersonalAccountRegistry.sol";

/**
 * @title Gateway V2 with guarded batching functions
 *
 * @notice GSN replacement
 *
 * @author Utkir Sobirov <sobirovutkir@gmail.io>
 */
contract GatewayV2 is Initializable, SignatureValidator, Guarded {
  using ECDSALib for bytes32;
  using SafeMathLib for uint256;

  struct DelegatedBatch {
    address account;
    uint256 nonce;
    address[] to;
    bytes[] data;
  }

  struct DelegatedBatchWithGasPrice {
    address account;
    uint256 nonce;
    address[] to;
    bytes[] data;
    uint256 gasPrice;
  }

  bytes32 private constant HASH_PREFIX_DELEGATED_BATCH = keccak256(
    "DelegatedBatch(address account,uint256 nonce,address[] to,bytes[] data)"
  );

  bytes32 private constant HASH_PREFIX_DELEGATED_BATCH_WITH_GAS_PRICE = keccak256(
    "DelegatedBatchWithGasPrice(address account,uint256 nonce,address[] to,bytes[] data,uint256 gasPrice)"
  );

  ExternalAccountRegistry public externalAccountRegistry;
  PersonalAccountRegistry public personalAccountRegistry;

  mapping(address => uint256) private accountNonce;

  // events

  /**
   * @dev Emitted when the single batch is delegated
   * @param sender sender address
   * @param batch batch
   * @param succeeded if succeeded
   */
  event BatchDelegated(
    address sender,
    bytes batch,
    bool succeeded
  );

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() SignatureValidator() {}

  // external functions

  /**
   * @notice Initializes `Gateway` contract
   * @param externalAccountRegistry_ `ExternalAccountRegistry` contract address
   * @param personalAccountRegistry_ `PersonalAccountRegistry` contract address
   */
  function initialize(
    ExternalAccountRegistry externalAccountRegistry_,
    PersonalAccountRegistry personalAccountRegistry_
  )
    external
    onlyInitializer
  {
    externalAccountRegistry = externalAccountRegistry_;
    personalAccountRegistry = personalAccountRegistry_;

    address[] memory guardians;
    _initializeGuarded(guardians); // adds tx.origin to guardians list
  }

  // public functions

  /**
   * @notice Sends batch
   * @dev `GatewayRecipient` context api:
   * `_getContextAccount` will return `msg.sender`
   * `_getContextSender` will return `msg.sender`
   *
   * @param to array of batch recipients contracts
   * @param data array of batch data
   */
  function sendBatch(
    address[] memory to,
    bytes[] memory data
  )
    public
  {
    _sendBatch(
      msg.sender,
      msg.sender,
      to,
      data
    );
  }

  /**
   * @notice Sends guarded batch
   * @dev `GatewayRecipient` context api:
   * `_getContextAccount` will return `msg.sender`
   * `_getContextSender` will return `msg.sender`
   *
   * @param to array of batch recipients contracts
   * @param data array of batch data
   */
  function sendBatchGuarded(
    address[] memory to,
    bytes[] memory data
  )
    public
    onlyGuardian
  {
    sendBatch(to, data);
  }

  /**
   * @notice Sends batch from the account
   * @dev `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return `msg.sender`
   *
   * @param account account address
   * @param to array of batch recipients contracts
   * @param data array of batch data
   */
  function sendBatchFromAccount(
    address account,
    address[] memory to,
    bytes[] memory data
  )
    public
  {
    _sendBatch(
      account,
      msg.sender,
      to,
      data
    );
  }

  /**
   * @notice Sends guarded batch from the account
   * @dev `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return `msg.sender`
   *
   * @param account account address
   * @param to array of batch recipients contracts
   * @param data array of batch data
   */
  function sendBatchFromAccountGuarded(
    address account,
    address[] memory to,
    bytes[] memory data
  )
    public
    onlyGuardian
  {
    sendBatchFromAccount(account, to, data);
  }

  /**
   * @notice Delegates batch from the account
   * @dev Use `hashDelegatedBatch` to create sender message payload.
   *
   * `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return recovered address from `senderSignature` arg
   *
   * @param account account address
   * @param nonce next account nonce
   * @param to array of batch recipients contracts
   * @param data array of batch data
   * @param senderSignature sender signature
   */
  function delegateBatch(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
  {
    require(
      nonce > accountNonce[account],
      "Gateway: nonce is lower than current account nonce"
    );

    address sender = _hashDelegatedBatch(
      account,
      nonce,
      to,
      data
    ).recoverAddress(senderSignature);

    accountNonce[account] = nonce;

    _sendBatch(
      account,
      sender,
      to,
      data
    );
  }

  /**
   * @notice Delegates guarded batch from the account
   * @dev Use `hashDelegatedBatch` to create sender message payload.
   *
   * `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return recovered address from `senderSignature` arg
   *
   * @param account account address
   * @param nonce next account nonce
   * @param to array of batch recipients contracts
   * @param data array of batch data
   * @param senderSignature sender signature
   */
  function delegateBatchGuarded(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
    onlyGuardian
  {
    delegateBatch(account, nonce, to, data, senderSignature);
  }

  /**
   * @notice Delegates batch from the account (with gas price)
   *
   * @dev Use `hashDelegatedBatchWithGasPrice` to create sender message payload (tx.gasprice as gasPrice)
   *
   * `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return recovered address from `senderSignature` arg
   *
   * @param account account address
   * @param nonce next account nonce
   * @param to array of batch recipients contracts
   * @param data array of batch data
   * @param senderSignature sender signature
   */
  function delegateBatchWithGasPrice(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
  {
    require(
      nonce > accountNonce[account],
      "Gateway: nonce is lower than current account nonce"
    );

    address sender = _hashDelegatedBatchWithGasPrice(
      account,
      nonce,
      to,
      data,
      tx.gasprice
    ).recoverAddress(senderSignature);

    accountNonce[account] = nonce;

    _sendBatch(
      account,
      sender,
      to,
      data
    );
  }

  /**
   * @notice Delegates guarded batch from the account (with gas price)
   *
   * @dev Use `hashDelegatedBatchWithGasPrice` to create sender message payload (tx.gasprice as gasPrice)
   *
   * `GatewayRecipient` context api:
   * `_getContextAccount` will return `account` arg
   * `_getContextSender` will return recovered address from `senderSignature` arg
   *
   * @param account account address
   * @param nonce next account nonce
   * @param to array of batch recipients contracts
   * @param data array of batch data
   * @param senderSignature sender signature
   */
  function delegateBatchWithGasPriceGuarded(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
    onlyGuardian
  {
    delegateBatchWithGasPrice(account, nonce, to, data, senderSignature);
  }

  /**
   * @notice Delegates multiple batches
   * @dev It will revert when all batches fail
   * @param batches array of batches
   * @param revertOnFailure reverts on any error
   */
  function delegateBatches(
    bytes[] memory batches,
    bool revertOnFailure
  )
    public
  {
    require(
      batches.length > 0,
      "Gateway: cannot delegate empty batches"
    );

    bool anySucceeded;

    for (uint256 i = 0; i < batches.length; i++) {
      // solhint-disable-next-line avoid-low-level-calls
      (bool succeeded,) = address(this).call(batches[i]);

      if (revertOnFailure) {
        require(
          succeeded,
          "Gateway: batch reverted"
        );
      } else if (succeeded && !anySucceeded) {
        anySucceeded = true;
      }

      emit BatchDelegated(
        msg.sender,
        batches[i],
        succeeded
      );
    }

    if (!anySucceeded) {
      revert("Gateway: all batches reverted");
    }
  }

  /**
   * @notice Delegates multiple guarded batches
   * @dev It will revert when all batches fail
   * @param batches array of batches
   * @param revertOnFailure reverts on any error
   */
  function delegateBatchesGuarded(
    bytes[] memory batches,
    bool revertOnFailure
  )
    public
    onlyGuardian
  {
    delegateBatches(batches, revertOnFailure);
  }

  // public functions (views)

  /**
   * @notice Hashes `DelegatedBatch` message payload
   * @param delegatedBatch struct
   * @return hash
   */
  function hashDelegatedBatch(
    DelegatedBatch memory delegatedBatch
  )
    public
    view
    returns (bytes32)
  {
    return _hashDelegatedBatch(
      delegatedBatch.account,
      delegatedBatch.nonce,
      delegatedBatch.to,
      delegatedBatch.data
    );
  }

  /**
   * @notice Hashes `DelegatedBatchWithGasPrice` message payload
   * @param delegatedBatch struct
   * @return hash
   */
  function hashDelegatedBatchWithGasPrice(
    DelegatedBatchWithGasPrice memory delegatedBatch
  )
    public
    view
    returns (bytes32)
  {
    return _hashDelegatedBatchWithGasPrice(
      delegatedBatch.account,
      delegatedBatch.nonce,
      delegatedBatch.to,
      delegatedBatch.data,
      delegatedBatch.gasPrice
    );
  }

  // external functions (views)

  /**
   * @notice Gets next account nonce
   * @param account account address
   * @return next nonce
   */
  function getAccountNextNonce(
    address account
  )
    external
    view
    returns (uint256)
  {
    return accountNonce[account].add(1);
  }

  // private functions

  function _sendBatch(
    address account,
    address sender,
    address[] memory to,
    bytes[] memory data
  )
    private
  {
    require(
      account != address(0),
      "Gateway: cannot send from 0x0 account"
    );
    require(
      to.length > 0,
      "Gateway: cannot send empty batch"
    );
    require(
      data.length == to.length,
      "Gateway: invalid batch"
    );

    if (account != sender) {
      require(
        personalAccountRegistry.verifyAccountOwner(account, sender) ||
        externalAccountRegistry.verifyAccountOwner(account, sender),
        "Gateway: sender is not the account owner"
      );
    }

    bool succeeded;

    for (uint256 i = 0; i < data.length; i++) {
      require(
        to[i] != address(0),
        "Gateway: cannot send to 0x0"
      );

      // solhint-disable-next-line avoid-low-level-calls
      (succeeded,) = to[i].call(abi.encodePacked(data[i], account, sender));

      require(
        succeeded,
        "Gateway: batch transaction reverted"
      );
    }
  }

  // private functions (views)

  function _hashDelegatedBatch(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data
  )
    private
    view
    returns (bytes32)
  {
    return _hashMessagePayload(HASH_PREFIX_DELEGATED_BATCH, abi.encodePacked(
      account,
      nonce,
      to,
      _concatBytes(data)
    ));
  }

  function _hashDelegatedBatchWithGasPrice(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    uint256 gasPrice
  )
    private
    view
    returns (bytes32)
  {
    return _hashMessagePayload(HASH_PREFIX_DELEGATED_BATCH_WITH_GAS_PRICE, abi.encodePacked(
      account,
      nonce,
      to,
      _concatBytes(data),
      gasPrice
    ));
  }

// private functions (pure)

  function _concatBytes(bytes[] memory data)
    private
    pure
    returns (bytes memory)
  {
    bytes memory result;
    uint dataLen = data.length;

    for (uint i = 0 ; i < dataLen ; i++) {
      result = abi.encodePacked(result, data[i]);
    }

    return result;
  }
}
