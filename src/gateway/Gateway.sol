// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/libs/SafeMathLib.sol";
import "../common/libs/SignatureLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../external/ExternalAccountRegistry.sol";
import "../personal/PersonalAccountRegistry.sol";


/**
 * @title Gateway
 *
 * @notice GSN replacement
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract Gateway is Initializable, TypedDataContainer {
  using SafeMathLib for uint256;
  using SignatureLib for bytes32;

  struct DelegatedBatch {
    uint256 nonce;
    address[] to;
    bytes[] data;
  }

  struct DelegatedBatchWithGasPrice {
    uint256 nonce;
    address[] to;
    bytes[] data;
    uint256 gasPrice;
  }

  bytes32 private constant DELEGATED_BATCH_TYPE_HASH = keccak256(
    "DelegatedBatch(uint256 nonce,address[] to,bytes[] data)"
  );

  bytes32 private constant DELEGATED_BATCH_TYPE_HASH_WITH_GAS_PRICE = keccak256(
    "DelegatedBatchWithGasPrice(uint256 nonce,address[] to,bytes[] data,uint256 gasPrice)"
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
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `Gateway` contract
   * @param externalAccountRegistry_ `ExternalAccountRegistry` contract address
   * @param personalAccountRegistry_ `PersonalAccountRegistry` contract address
   * @param typedDataDomainNameHash hash of a typed data domain name
   * @param typedDataDomainVersionHash hash of a typed data domain version
   * @param typedDataDomainSalt typed data salt
   */
  function initialize(
    ExternalAccountRegistry externalAccountRegistry_,
    PersonalAccountRegistry personalAccountRegistry_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainVersionHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    externalAccountRegistry = externalAccountRegistry_;
    personalAccountRegistry = personalAccountRegistry_;

    // TypedDataContainer
    _initializeTypedDataContainer(
      typedDataDomainNameHash,
      typedDataDomainVersionHash,
      typedDataDomainSalt
    );
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

    address sender = _hashPrimaryTypedData(
      _hashTypedData(
        nonce,
        to,
        data
      )
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

    address sender = _hashPrimaryTypedData(
      _hashTypedData(
        nonce,
        to,
        data,
        tx.gasprice
      )
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

  // public functions (views)

  /**
   * @notice Hashes `DelegatedBatch` typed data
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
    return _hashPrimaryTypedData(
      _hashTypedData(
        delegatedBatch.nonce,
        delegatedBatch.to,
        delegatedBatch.data
      )
    );
  }

  /**
   * @notice Hashes `DelegatedBatchWithGasPrice` typed data
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
    return _hashPrimaryTypedData(
      _hashTypedData(
        delegatedBatch.nonce,
        delegatedBatch.to,
        delegatedBatch.data,
        delegatedBatch.gasPrice
      )
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

  // private functions (pure)

  function _hashTypedData(
    uint256 nonce,
    address[] memory to,
    bytes[] memory data
  )
    private
    pure
    returns (bytes32)
  {
    bytes32[] memory dataHashes = new bytes32[](data.length);

    for (uint256 i = 0; i < data.length; i++) {
      dataHashes[i] = keccak256(data[i]);
    }

    return keccak256(abi.encode(
      DELEGATED_BATCH_TYPE_HASH,
      nonce,
      keccak256(abi.encodePacked(to)),
      keccak256(abi.encodePacked(dataHashes))
    ));
  }

  function _hashTypedData(
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    uint256 gasPrice
  )
    private
    pure
    returns (bytes32)
  {
    bytes32[] memory dataHashes = new bytes32[](data.length);

    for (uint256 i = 0; i < data.length; i++) {
      dataHashes[i] = keccak256(data[i]);
    }

    return keccak256(abi.encode(
        DELEGATED_BATCH_TYPE_HASH_WITH_GAS_PRICE,
        nonce,
        keccak256(abi.encodePacked(to)),
        keccak256(abi.encodePacked(dataHashes)),
        gasPrice
      ));
  }
}
