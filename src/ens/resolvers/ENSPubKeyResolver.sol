// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ENSAbstractResolver.sol";


/**
 * @title ENS abstract pub key resolver
 *
 * @dev Base on https://github.com/ensdomains/resolvers/blob/f7d62ab04bfe1692a4344f6f1d31ff81315a98c3/contracts/profiles/PubkeyResolver.sol
 */
abstract contract ENSPubKeyResolver is ENSAbstractResolver {
  bytes4 internal constant INTERFACE_PUB_KEY_ID = bytes4(keccak256(abi.encodePacked("pubkey(bytes32)")));

  struct PubKey {
    bytes32 x;
    bytes32 y;
  }

  mapping(bytes32 => PubKey) internal resolverPubKeys;

  // events

  event PubkeyChanged(
    bytes32 indexed node,
    bytes32 x,
    bytes32 y
  );

  // external functions (views)

  function setPubkey(
    bytes32 node,
    bytes32 x,
    bytes32 y
  )
    external
    onlyNodeOwner(node)
  {
    resolverPubKeys[node] = PubKey(x, y);

    emit PubkeyChanged(node, x, y);
  }

  // external functions (views)

  function pubkey(
    bytes32 node
  )
    external
    view
    returns (bytes32 x, bytes32 y)
  {
    return (resolverPubKeys[node].x, resolverPubKeys[node].y);
  }
}
