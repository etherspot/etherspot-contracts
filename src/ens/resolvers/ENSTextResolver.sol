// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ENSAbstractResolver.sol";


/**
 * @title ENS abstract text resolver
 *
 * @dev Base on https://github.com/ensdomains/resolvers/blob/f7d62ab04bfe1692a4344f6f1d31ff81315a98c3/contracts/profiles/TextResolver.sol
 */
abstract contract ENSTextResolver is ENSAbstractResolver {
  bytes4 internal constant INTERFACE_TEXT_ID = bytes4(keccak256(abi.encodePacked("text(bytes32,string)")));

  mapping(bytes32 => mapping(string => string)) internal resolverTexts;

  // events

  event TextChanged(
    bytes32 indexed node,
    string indexed indexedKey,
    string key
  );

  // external functions (views)

  function setText(
    bytes32 node,
    string calldata key,
    string calldata value
  )
    external
    onlyNodeOwner(node)
  {
    resolverTexts[node][key] = value;

    emit TextChanged(node, key, key);
  }

  // external functions (views)

  function text(
    bytes32 node,
    string calldata key
  )
    external
    view
    returns (string memory)
  {
    return resolverTexts[node][key];
  }
}
