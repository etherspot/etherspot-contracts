// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title TypedDataContainer
 */
contract TypedDataContainer {
  string private constant TYPED_DATA_PREFIX = "\x19\x01";
  bytes32 private constant TYPED_DATA_DOMAIN_TYPE_HASH = keccak256(
    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract,bytes32 salt)"
  );

  bytes32 public typedDataDomainSeparator;

  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function _initializeTypedDataContainer(
    bytes32 domainNameHash,
    bytes32 domainVersionHash,
    bytes32 domainSalt
  )
    internal
  {
    uint256 chainId;

    // solhint-disable-next-line no-inline-assembly
    assembly {
      chainId := chainid()
    }

    typedDataDomainSeparator = keccak256(abi.encode(
        TYPED_DATA_DOMAIN_TYPE_HASH,
        domainNameHash,
        domainVersionHash,
        chainId,
        address(this),
        domainSalt
    ));
  }

  // internal functions (views)

  function _hashPrimaryTypedData(
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
