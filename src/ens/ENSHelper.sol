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
      address resolver = registry.resolver(nodes[i]);

      if (resolver != address(0)) {
        result[i] = ENSAddressResolver(resolver).addr(nodes[i]);
      }
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
      address resolver = registry.resolver(nodes[i]);

      if (resolver != address(0)) {
        result[i] = ENSNameResolver(resolver).name(nodes[i]);
      }
    }

    return result;
  }
}
