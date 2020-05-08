pragma solidity 0.5.15;
pragma experimental ABIEncoderV2;

import "../shared/initializable/Initializable.sol";
import "../shared/noFallback/NoFallback.sol";
import "../shared/typedData/TypedData.sol";
import "../signature/SignatureValidator.sol";


/**
 * @title Relay
 */
contract Relay is Initializable, NoFallback, TypedData {
  struct DelegatedBatch {
    address[] to;
    bytes[] data;
    uint256 gasPrice;
  }

  bytes32 private constant DELEGATED_BATCH_TYPE_HASH = keccak256(
    "DelegatedBatch(address[] to,bytes[] data,uint256 gasPrice)"
  );

  SignatureValidator private signatureValidator;

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    SignatureValidator signatureValidator_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    signatureValidator = signatureValidator_;

    // TypedData
    initializeTypedData(
      typedDataDomainNameHash,
      typedDataDomainSalt
    );
  }

  // public functions

  function sendBatch(
    address[] memory to,
    bytes[] memory data
  )
    public
    afterInitialization
  {
    privatelySendBatch(
      msg.sender,
      msg.sender,
      to,
      data
    );
  }

  function delegateBatch(
    address sender,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public
    afterInitialization
  {
    require(
      sender != address(0)
    );

    bytes32 messageHash = hashPrimaryTypedData(
      hashTypedData(
        to,
        data,
        tx.gasprice
      )
    );

    address originalSigner = signatureValidator.recoverAndVerifyOriginalSigner(
      messageHash,
      senderSignature,
      sender
    );

    require(
      originalSigner != address(0)
    );

    privatelySendBatch(
      sender,
      originalSigner,
      to,
      data
    );
  }

  // public functions (views)

  function hashDelegatedBatch(
    DelegatedBatch memory delegatedBatch
  )
    public
    view
    afterInitialization
    returns (bytes32)
  {
    return hashPrimaryTypedData(
      hashTypedData(
        delegatedBatch.to,
        delegatedBatch.data,
        delegatedBatch.gasPrice
      )
    );
  }

  // private functions

  function privatelySendBatch(
    address sender,
    address originalSigner,
    address[] memory to,
    bytes[] memory data
  )
    private
  {
    require(
      to.length > 0
    );
    require(
      data.length == to.length
    );

    bool succeeded;

    for (uint256 i = 0; i < data.length; i++) {
      require(
        to[i] != address(0)
      );

      // solhint-disable-next-line avoid-low-level-calls
      (succeeded,) = to[i].call(abi.encodePacked(data[i], sender, originalSigner));

      require(
        succeeded
      );
    }
  }

  // private functions (pure)

  function hashTypedData(
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
      DELEGATED_BATCH_TYPE_HASH,
      keccak256(abi.encodePacked(to)),
      keccak256(abi.encodePacked(dataHashes)),
      gasPrice
    ));
  }
}
