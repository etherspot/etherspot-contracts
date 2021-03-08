// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/lifecycle/Initializable.sol";
import "./resolvers/ENSNameResolver.sol";
import "./ENSRegistry.sol";

/**
 * @title ENS reverse registrar
 *
 * @dev Base on https://github.com/ensdomains/ens/blob/ff0f41747c05f1598973b0fe7ad0d9e09565dfcd/contracts/ReverseRegistrar.sol
 */
contract ENSReverseRegistrar is Initializable {
  bytes32 public constant ADDR_REVERSE_NODE = 0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2;

  ENSRegistry public registry;
  ENSNameResolver public resolver;

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `ENSReverseRegistrar` contract
   * @param registry_ ENS registry address
   * @param resolver_ ENS name resolver address
   */
  function initialize(
    ENSRegistry registry_,
    ENSNameResolver resolver_
  )
    external
    onlyInitializer
  {
    registry = registry_;
    resolver = resolver_;
  }

  // external functions

  function claim(
    address owner
  )
    public
    returns (bytes32)
  {
    return _claimWithResolver(owner, address(0));
  }

  function claimWithResolver(
    address owner,
    address resolver_
  )
    public
    returns (bytes32)
  {
    return _claimWithResolver(owner, resolver_);
  }

  function setName(
    string memory name
  )
    public
    returns (bytes32)
  {
    bytes32 node = _claimWithResolver(address(this), address(resolver));

    resolver.setName(node, name);

    return node;
  }

  // external functions (pure)

  function node(
    address addr_
  )
    external
    pure
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(ADDR_REVERSE_NODE, _sha3HexAddress(addr_)));
  }

  // private functions

  function _claimWithResolver(
    address owner,
    address resolver_
  )
    private
    returns (bytes32)
  {
    bytes32 label = _sha3HexAddress(msg.sender);
    bytes32 node_ = keccak256(abi.encodePacked(ADDR_REVERSE_NODE, label));
    address currentOwner = registry.owner(node_);

    if (resolver_ != address(0x0) && resolver_ != registry.resolver(node_)) {
      if (currentOwner != address(this)) {
        registry.setSubnodeOwner(ADDR_REVERSE_NODE, label, address(this));
        currentOwner = address(this);
      }

      registry.setResolver(node_, resolver_);
    }

    // Update the owner if required
    if (currentOwner != owner) {
      registry.setSubnodeOwner(ADDR_REVERSE_NODE, label, owner);
    }

    return node_;
  }

  // private functions (pure)

  function _sha3HexAddress(
    address addr_
  )
    private
    pure
    returns (bytes32)
  {
    bytes32 result;

    assembly {
      let lookup := 0x3031323334353637383961626364656600000000000000000000000000000000

      for { let i := 40 } gt(i, 0) { } {
        i := sub(i, 1)
        mstore8(i, byte(and(addr_, 0xf), lookup))
        addr_ := div(addr_, 0x10)
        i := sub(i, 1)
        mstore8(i, byte(and(addr_, 0xf), lookup))
        addr_ := div(addr_, 0x10)
      }

      result := keccak256(0, 40)
    }

    return result;
  }
}
