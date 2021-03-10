// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/lifecycle/Initializable.sol";
import "./resolvers/ENSAddressResolver.sol";
import "./resolvers/ENSNameResolver.sol";
import "./ENSRegistry.sol";

/**
 * @title ENS helper
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract ENSHelper is Initializable {
  ENSRegistry public registry;

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `ENSLookupHelper` contract
   * @param registry_ ENS registry address
   */
  function initialize(
    ENSRegistry registry_
  )
    external
    onlyInitializer
  {
    registry = registry_;
  }

  // external functions (views)

  /**
   * @notice Gets nodes addresses
   * @param nodes array of nodes
   * @return nodes addresses
   */
  function getAddresses(
    bytes32[] memory nodes
  )
    external
    view
    returns (address[] memory)
  {
    uint nodesLen = nodes.length;
    address[] memory result = new address[](nodesLen);

    for (uint i = 0; i < nodesLen; i++) {
      result[i] = _getAddress(nodes[i]);
    }

    return result;
  }

  /**
   * @notice Gets nodes names
   * @param nodes array of nodes
   * @return nodes names
   */
  function getNames(
    bytes32[] memory nodes
  )
    external
    view
    returns (string[] memory)
  {
    uint nodesLen = nodes.length;
    string[] memory result = new string[](nodesLen);

    for (uint i = 0; i < nodesLen; i++) {
      result[i] = _getName(nodes[i]);
    }

    return result;
  }

  // private functions (views)

  function _getAddress(
    bytes32 node
  )
    private
    view
    returns (address)
  {
    address result;
    address resolver = registry.resolver(node);

    if (resolver != address(0)) {
      try ENSAddressResolver(resolver).addr(node) returns (address addr) {
        result = addr;
      } catch {
        //
      }
    }

    return result;
  }

  function _getName(
    bytes32 node
  )
    private
    view
    returns (string memory)
  {
    string memory result;
    address resolver = registry.resolver(node);

    if (resolver != address(0)) {
      try ENSNameResolver(resolver).name(node) returns (string memory name) {
        result = name;
      } catch {
        //
      }
    }

    return result;
  }
}
