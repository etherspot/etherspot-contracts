// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ENSAbstractResolver.sol";


/**
 * @title ENS abstract name resolver
 *
 * @dev Base on https://github.com/ensdomains/resolvers/blob/f7d62ab04bfe1692a4344f6f1d31ff81315a98c3/contracts/profiles/NameResolver.sol
 */
abstract contract ENSNameResolver is ENSAbstractResolver {
  bytes4 internal constant INTERFACE_NAME_ID = bytes4(keccak256(abi.encodePacked("name(bytes32)")));

  mapping(bytes32 => string) internal resolverNames;

  // events

  event NameChanged(
    bytes32 indexed node,
    string name
  );

  // external functions

  function setName(
    bytes32 node,
    string calldata name
  )
    external
    onlyNodeOwner(node)
  {
    resolverNames[node] = name;

    emit NameChanged(node, name);
  }

  // external functions (views)

  function name(
    bytes32 node
  )
    external
    view
    returns (string memory)
  {
    return resolverNames[node];
  }
}
