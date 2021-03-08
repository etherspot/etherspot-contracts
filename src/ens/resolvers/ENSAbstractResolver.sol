// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title ENS abstract resolver
 *
 * @dev Base on https://github.com/ensdomains/resolvers/blob/f7d62ab04bfe1692a4344f6f1d31ff81315a98c3/contracts/ResolverBase.sol
 */
abstract contract ENSAbstractResolver {
  // modifiers

  modifier onlyNodeOwner(bytes32 node)
  {
    require(
      _isNodeOwner(node),
      "ENSAbstractResolver: reverted by onlyNodeOwner modifier"
    );

    _;
  }

  // internal functions (views)

  function _isNodeOwner(
    bytes32 node
  )
    internal
    virtual
    view
    returns (bool);
}
