pragma solidity 0.5.15;

/**
 * @title TypedData
 */
contract TypedData {
  string private constant TYPED_DATA_PREFIX = "\x19\x01";
  bytes32 private constant TYPED_DATA_DOMAIN_VERSION_HASH = keccak256("4");
  bytes32 private constant TYPED_DATA_DOMAIN_TYPE_HASH = keccak256(
    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract,bytes32 salt)"
  );

  bytes32 public typedDataDomainSeparator;

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    //
  }

  // internal functions

  function initializeTypedData(
    bytes32 domainNameHash,
    bytes32 domainSalt
  )
    internal
  {
    uint256 chainId;

    assembly {
      chainId := chainid
    }

    typedDataDomainSeparator = keccak256(abi.encode(
        TYPED_DATA_DOMAIN_TYPE_HASH,
        domainNameHash,
        TYPED_DATA_DOMAIN_VERSION_HASH,
        chainId,
        address(this),
        domainSalt
    ));
  }

  // internal functions (views)

  function hashPrimaryTypedData(
    bytes32 dataHash
  )
    internal
    view
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(
      TYPED_DATA_PREFIX,
      typedDataDomainSeparator,
      dataHash
    ));
  }
}
