// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Typed data container
 *
 * @dev EIP-712 is used across whole repository.
 *
 * Use `_initializeTypedDataContainer` to initialize the contract
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
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

  /**
   * @notice Initializes `TypedDataContainer` contract
   * @param domainNameHash hash of a domain name
   * @param domainVersionHash hash of a domain version
   * @param domainSalt domain salt
   */
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

  /**
   * @notice Hashes primary typed data
   * @param dataHash hash of the data
   */
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
