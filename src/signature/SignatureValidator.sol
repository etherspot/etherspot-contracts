pragma solidity 0.5.15;
pragma experimental ABIEncoderV2;

import "../account/AccountRegistry.sol";
import "../messageHash/MessageHashRegistry.sol";
import "../shared/initializable/Initializable.sol";
import "../shared/noFallback/NoFallback.sol";
import "../shared/typedData/TypedData.sol";
import "./SignatureLib.sol";


/**
 * @title SignatureValidator
 */
contract SignatureValidator is Initializable, NoFallback, TypedData {
  using SignatureLib for bytes32;

  struct AuthorizeAccountKey {
    address account;
    address key;
  }

  bytes32 private constant AUTHORIZE_ACCOUNT_KEY_TYPE_HASH = keccak256(
    "AuthorizeAccountKey(address account,address key)"
  );

  AccountRegistry public accountRegistry;
  MessageHashRegistry public messageHashRegistry;

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    AccountRegistry accountRegistry_,
    MessageHashRegistry messageHashRegistry_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    accountRegistry = accountRegistry_;
    messageHashRegistry = messageHashRegistry_;

    // TypedData
    initializeTypedData(
      typedDataDomainNameHash,
      typedDataDomainSalt
    );
  }

  // external functions (views)

  function hashAuthorizeAccountKey(
    AuthorizeAccountKey calldata authorizeAccountKey
  )
    external
    view
    afterInitialization
    returns (bytes32)
  {
    return hashPrimaryTypedData(
      hashTypedData(authorizeAccountKey)
    );
  }

  function recoverAndVerifyOriginalSigner(
    bytes32 messageHash,
    bytes calldata signature,
    address signer
  )
    external
    view
    afterInitialization
    returns (address)
  {
    return privatelyRecoverAndVerifyOriginalSigner(
      messageHash,
      signature,
      signer,
      block.number
    );
  }

  function recoverAndVerifyOriginalSignerAtBlock(
    bytes32 messageHash,
    bytes calldata signature,
    address signer,
    uint256 blockNumber
  )
    external
    view
    afterInitialization
    returns (address)
  {
    return privatelyRecoverAndVerifyOriginalSigner(
      messageHash,
      signature,
      signer,
      blockNumber
    );
  }

  function verifySignature(
    bytes32 messageHash,
    bytes calldata signature,
    address signer
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return privatelyVerifySignature(
      messageHash,
      signature,
      signer,
      block.number
    );
  }

  function verifySignatureAtBlock(
    bytes32 messageHash,
    bytes calldata signature,
    address signer,
    uint256 blockNumber
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return privatelyVerifySignature(
      messageHash,
      signature,
      signer,
      blockNumber
    );
  }

  // private functions (views)

  function privatelyRecoverAndVerifyOriginalSigner(
    bytes32 messageHash,
    bytes memory signature,
    address signer,
    uint256 blockNumber
  )
    private
    view
    returns (address)
  {
    address result = address(0);

    if (signature.length == 0) {
      if (
        messageHashRegistry.verifySenderMessageHashAtBlock(
          signer,
          messageHash,
          blockNumber
        )
      ) {
        result = signer;
      }
    } else {
      address recovered = messageHash.recoverAddress(signature);

      if (recovered != address(0)) {
        if (recovered == signer) {
          result = recovered;
        } else if (
          accountRegistry.isAccountOwnerAtBlock(
            signer,
            recovered,
            blockNumber
          )
        ) {
          result = recovered;
        } else {
          bytes32 authorizedMessageHash = hashPrimaryTypedData(
            hashTypedData(AuthorizeAccountKey(signer, recovered))
          );

          if (
            messageHashRegistry.verifySenderMessageHashAtBlock(
              signer,
              authorizedMessageHash,
              blockNumber
            )
          ) {
            result = recovered;
          }
        }
      }
    }

    return result;
  }

  function privatelyVerifySignature(
    bytes32 messageHash,
    bytes memory signature,
    address signer,
    uint256 blockNumber
  )
    private
    view
    returns (bool)
  {
    address originalSigner = privatelyRecoverAndVerifyOriginalSigner(
      messageHash,
      signature,
      signer,
      blockNumber
    );

    return originalSigner != address(0);
  }

  // private functions (pure)

  function hashTypedData(
    AuthorizeAccountKey memory authorizeAccountKey
  )
    private
    pure
    returns (bytes32)
  {
    return keccak256(abi.encode(
      AUTHORIZE_ACCOUNT_KEY_TYPE_HASH,
      authorizeAccountKey.account,
      authorizeAccountKey.key
    ));
  }
}
