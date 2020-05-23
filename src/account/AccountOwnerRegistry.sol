pragma solidity 0.5.15;

import "../common/libs/BlockLib.sol";


/**
 * @title AccountOwnerRegistry
 */
contract AccountOwnerRegistry {
  using BlockLib for BlockLib.BlockRelated;

  mapping(address => mapping(address => BlockLib.BlockRelated)) private accountOwners;

  // events

  event AccountOwnerAdded(
    address account,
    address owner
  );

  event AccountOwnerRemoved(
    address account,
    address owner
  );

  // external functions

  function addAccountOwner(
    address owner
  )
    external
  {
    require(
      !accountOwners[msg.sender][owner].verifyAtCurrentBlock()
    );

    accountOwners[msg.sender][owner].added = true;
    accountOwners[msg.sender][owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      msg.sender,
      owner
    );
  }

  function removeAccountOwner(
    address owner
  )
    external
  {
    require(
      accountOwners[msg.sender][owner].verifyAtCurrentBlock()
    );

    accountOwners[msg.sender][owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      msg.sender,
      owner
    );
  }

  // external functions (views)

  function verifyAccountOwner(
    address account,
    address owner
  )
    external
    view
    returns (bool)
  {
    return accountOwners[account][owner].verifyAtCurrentBlock();
  }

  function verifyAccountOwnerAtBlock(
    address account,
    address owner,
    uint256 blockNumber
  )
    external
    view
    returns (bool)
  {
    return accountOwners[account][owner].verifyAtBlock(blockNumber);
  }
}
