// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/access/Guarded.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../gateway/GatewayRecipient.sol";
import "./resolvers/ENSAddressResolver.sol";
import "./resolvers/ENSNameResolver.sol";
import "./resolvers/ENSPubKeyResolver.sol";
import "./resolvers/ENSTextResolver.sol";
import "./ENSRegistry.sol";


/**
 * @title ENS controller
 *
 * @notice ENS subnode registrar
 *
 * @dev The process of adding root node consists of 3 steps:
 * 1. `submitNode` - should be called from ENS node owner,
 * 2. Change ENS node owner in ENS registry to ENS controller,
 * 3. `verifyNode` - should be called from previous ENS node owner,
 *
 * To register sub node, `msg.sender` need to send valid signature from one of guardian key.
 * Once registration is complete `msg.sender` becoming both node owner and `addr` record value.
 *
 * After registration sub node cannot be replaced.
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract ENSController is Guarded, Initializable, TypedDataContainer, GatewayRecipient, ENSAddressResolver, ENSNameResolver, ENSPubKeyResolver, ENSTextResolver {
  struct SubNodeRegistration {
    address account;
    bytes32 node;
    bytes32 label;
  }

  bytes4 private constant INTERFACE_META_ID = bytes4(keccak256(abi.encodePacked("supportsInterface(bytes4)")));

  bytes32 private constant SUB_NODE_REGISTRATION_TYPE_HASH = keccak256(
    "SubNodeRegistration(address account,bytes32 node,bytes32 label)"
  );

  ENSRegistry public registry;

  mapping(bytes32 => address) public nodeOwners;

  // events

  /**
   * @dev Emitted when new node is submitted
   * @param node node name hash
   * @param owner owner address
   */
  event NodeSubmitted(
    bytes32 node,
    address owner
  );

  /**
   * @dev Emitted when the existing owner is verified
   * @param node node name hash
   */
  event NodeVerified(
    bytes32 node
  );

  /**
   * @dev Emitted when new node is released
   * @param node node name hash
   * @param owner owner address
   */
  event NodeReleased(
    bytes32 node,
    address owner
  );

  /**
   * @dev Emitted when ENS registry address is changed
   * @param registry registry address
   */
  event RegistryChanged(
    address registry
  );

  /**
   * @dev Public constructor
   */
  constructor() public Guarded() Initializable() {}

  // external functions

  /**
   * @notice Initializes `ENSController` contract
   * @param registry_ ENS registry address
   * @param gateway_ gateway address
   * @param typedDataDomainNameHash hash of a typed data domain name
   * @param typedDataDomainVersionHash hash of a typed data domain version
   * @param typedDataDomainSalt typed data salt
   */
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

  /**
   * @notice Sets registry
   * @param registry_ registry address
   */
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

  /**
   * @notice Submits node
   * @dev Should be called from the current ENS node owner
   * @param node node name hash
   */
  function submitNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      _addr(node) == address(0),
      "ENSController: node already exists"
    );

    require(
      nodeOwners[node] == address(0),
      "ENSController: node already submitted"
    );

    require(
      registry.owner(node) == owner,
      "ENSController: invalid ens node owner"
    );

    nodeOwners[node] = owner;

    emit NodeSubmitted(node, owner);
  }

  /**
   * @notice Verifies node
   * @dev Should be called from the previous ENS node owner
   * @param node node name hash
   */
  function verifyNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      _addr(node) == address(0),
      "ENSController: node already exists"
    );

    require(
      nodeOwners[node] == owner,
      "ENSController: invalid node owner"
    );

    require(
      registry.owner(node) == address(this),
      "ENSController: invalid ens node owner"
    );

    _setAddr(node, address(this));

    registry.setResolver(node, address(this));

    emit NodeVerified(node);
  }

  /**
   * @notice Releases node
   * @dev Should be called from the previous ENS node owner
   * @param node node name hash
   */
  function releaseNode(
    bytes32 node
  )
    external
  {
    address owner = _getContextAccount();

    require(
      _addr(node) == address(this),
      "ENSController: node doesn't exist"
    );

    require(
      nodeOwners[node] == owner,
      "ENSController: invalid node owner"
    );

    registry.setOwner(node, owner);

    delete nodeOwners[node];

    emit NodeReleased(node, owner);
  }

  /**
   * @notice Sync address
   * @param node node name hash
   */
  function syncAddr(
    bytes32 node
  )
    external
  {
    address account = _getContextAccount();

    require(
      account == registry.owner(node),
      "ENSController: caller is not the node owner"
    );

    require(
      registry.resolver(node) == address(this),
      "ENSController: invalid node resolver"
    );

    require(
      _addr(node) == address(0),
      "ENSController: node already in sync"
    );

    _setAddr(node, account);
  }

  /**
   * @notice Registers sub node
   * @param node node name hash
   * @param label label hash
   * @param guardianSignature guardian signature
   */
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
      _addr(node) == address(this),
      "ENSController: invalid node"
    );

    require(
      _addr(subNode) == address(0),
      "ENSController: label already taken"
    );

    registry.setSubnodeRecord(node, label, address(this), address(this), 0);
    registry.setOwner(subNode, account);

    _setAddr(subNode, account);
  }

  // external functions (pure)
  function supportsInterface(
    bytes4 interfaceID
  )
    external
    pure
    returns(bool)
  {
    return interfaceID == INTERFACE_META_ID ||
    interfaceID == INTERFACE_ADDR_ID ||
    interfaceID == INTERFACE_ADDRESS_ID ||
    interfaceID == INTERFACE_NAME_ID ||
    interfaceID == INTERFACE_PUB_KEY_ID ||
    interfaceID == INTERFACE_TEXT_ID;
  }

  // public functions (views)

  /**
   * @notice Hashes `SubNodeRegistration` typed data
   * @param subNodeRegistration struct
   * @return hash
   */
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

  // internal functions (views)

  function _isNodeOwner(
    bytes32 node
  )
    internal
    override
    view
    returns (bool)
  {
    return registry.owner(node) == _getContextAccount();
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
