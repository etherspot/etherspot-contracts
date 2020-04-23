pragma solidity 0.5.15;
pragma experimental ABIEncoderV2;

import "../shared/initializable/Initializable.sol";
import "../shared/noFallback/NoFallback.sol";
import "../shared/typedData/TypedData.sol";
import "../signature/SignatureValidator.sol";


/**
 * @title MetaTxRelay
 */
contract MetaTxRelay is Initializable, NoFallback, TypedData {
  struct RelayedCall {
    address[] to;
    bytes[] data;
    uint256 gasPrice;
  }

  bytes32 private constant RELAYED_CALL_TYPE_HASH = keccak256(
    "RelayedCall(address[] to,bytes[] data,uint256 gasPrice)"
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

  function relayCall(
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
    require(
      to.length > 0
    );
    require(
      data.length == to.length
    );

    bytes32 messageHash = hashPrimaryTypedData(
      hashTypedData(
        to,
        data,
        tx.gasprice
      )
    );

    address originalSigner = signatureValidator.recoverOriginalSigner(
      messageHash,
      senderSignature,
      sender
    );

    require(
      originalSigner != address(0)
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

  // public functions (views)

  function hashRelayedCall(
    RelayedCall memory relayedCall
  )
    public
    view
    afterInitialization
    returns (bytes32)
  {
    return hashPrimaryTypedData(
      hashTypedData(
        relayedCall.to,
        relayedCall.data,
        relayedCall.gasPrice
      )
    );
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
      RELAYED_CALL_TYPE_HASH,
      keccak256(abi.encodePacked(to)),
      keccak256(abi.encodePacked(dataHashes)),
      gasPrice
    ));
  }
}
