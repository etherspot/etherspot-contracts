// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/access/Guarded.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../gateway/GatewayRecipient.sol";
import "./ENSRegistry.sol";

/**
 * @title ENS controller
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract ENSController is Guarded, Initializable, TypedDataContainer, GatewayRecipient {
  struct Node {
    address addr;
    address owner;
  }

  struct SubNodeRegistration {
    address account;
    bytes32 node;
    bytes32 label;
  }

  bytes32 private constant SUB_NODE_REGISTRATION_TYPE_HASH = keccak256(
    "SubNodeRegistration(address account,bytes32 node,bytes32 label)"
  );

  bytes4 private constant INTERFACE_META_ID = 0x01ffc9a7;
  bytes4 private constant INTERFACE_ADDR_ID = 0x3b3b57de;

  ENSRegistry public registry;

  mapping(bytes32 => Node) private nodes;

  // events

  event AddrChanged(
    bytes32 indexed node,
    address addr
  );

  event NodeSubmitted(
    bytes32 node,
    address owner
  );

  event NodeVerified(
    bytes32 node
  );

  event NodeReleased(
    bytes32 node,
    address owner
  );

  event RegistryChanged(
    address registry
  );

  /**
   * @dev public constructor
   */
  constructor() public Guarded() Initializable() {}

  // external functions

  function initialize(
    ENSRegistry registry_,
    address[] calldata guardians_,
    address gateway_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainVersionHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    require(
      address(registry_) != address(0),
      "ENSController: cannot set 0x0 registry"
    );

    registry = registry_;

    // Guarded
    _initializeGuarded(guardians_);

    // GatewayRecipient
    _initializeGatewayRecipient(gateway_);

    // TypedDataContainer
    _initializeTypedDataContainer(
      typedDataDomainNameHash,
      typedDataDomainVersionHash,
      typedDataDomainSalt
    );
  }

  function setRegistry(
    ENSRegistry registry_
  )
    external
    onlyGuardian
  {
    require(
      address(registry_) != address(0),
      "ENSController: cannot set 0x0 registry"
    );

    require(
      registry_ != registry,
      "ENSController: registry already set"
    );

    registry = registry_;

    emit RegistryChanged(
      address(registry)
    );
  }

  function submitNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      nodes[node].addr == address(0),
      "ENSController: node already exists"
    );

    require(
      nodes[node].owner == address(0),
      "ENSController: node already submitted"
    );

    require(
      registry.owner(node) == owner,
      "ENSController: invalid ens node owner"
    );

    nodes[node].owner = owner;

    emit NodeSubmitted(node, owner);
  }

  function verifyNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      nodes[node].addr == address(0),
      "ENSController: node already exists"
    );

    require(
      nodes[node].owner == owner,
      "ENSController: invalid node owner"
    );

    require(
      registry.owner(node) == address(this),
      "ENSController: invalid ens node owner"
    );

    nodes[node].addr = address(this);

    registry.setResolver(node, address(this));

    emit NodeVerified(node);
  }

  function releaseNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      nodes[node].addr == address(this),
      "ENSController: node doesn't exist"
    );

    require(
      nodes[node].owner == owner,
      "ENSController: invalid node owner"
    );

    registry.setOwner(node, owner);

    delete nodes[node].addr;
    delete nodes[node].owner;

    emit NodeReleased(node, owner);
  }

  function setAddr(
    bytes32 node,
    address addr
  )
    external
  {
    require(
      nodes[node].addr == _getContextAccount(),
      "ENSController: caller is not the node owner"
    );

    nodes[node].addr = addr;

    emit AddrChanged(node, addr);
  }

  function registerSubNode(
    bytes32 node,
    bytes32 label,
    bytes calldata guardianSignature
  )
    external
  {
    address account = _getContextAccount();

    bytes32 messageHash = _hashPrimaryTypedData(
      _hashTypedData(
        account,
        node,
        label
      )
    );

    require(
      _verifyGuardianSignature(messageHash, guardianSignature),
      "ENSController: invalid guardian signature"
    );

    bytes32 subNode = keccak256(
      abi.encodePacked(
        node,
        label
      )
    );

    require(
      nodes[node].addr == address(this),
      "ENSController: invalid node"
    );

    require(
      nodes[subNode].addr == address(0),
      "ENSController: label already taken"
    );

    nodes[subNode].addr = account;

    registry.setSubnodeOwner(node, label, address(this));
    registry.setResolver(subNode, address(this));
    registry.setOwner(subNode, account);

    emit AddrChanged(subNode, account);
  }

  // external functions (views)

  function addr(
    bytes32 node
  )
    external
    view
    returns (address)
  {
    return nodes[node].addr;
  }

  // external functions (pure)

  function supportsInterface(
    bytes4 interfaceID
  )
    external
    pure
    returns (bool)
  {
    return (
      interfaceID == INTERFACE_META_ID ||
      interfaceID == INTERFACE_ADDR_ID
    );
  }

  // public functions (views)

  function hashSubNodeRegistration(
    SubNodeRegistration memory subNodeRegistration
  )
    public
    view
    returns (bytes32)
  {
    return _hashPrimaryTypedData(
      _hashTypedData(
        subNodeRegistration.account,
        subNodeRegistration.node,
        subNodeRegistration.label
      )
    );
  }

  // private functions (pure)

  function _hashTypedData(
    address account,
    bytes32 node,
    bytes32 label
  )
    private
    pure
    returns (bytes32)
  {
    return keccak256(abi.encode(
      SUB_NODE_REGISTRATION_TYPE_HASH,
      account,
      node,
      label
    ));
  }
}
