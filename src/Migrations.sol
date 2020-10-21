// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

/**
 * @title Migrations
 */
contract Migrations {
  address public owner;
  uint256 public last_completed_migration;

  // modifiers

  modifier restricted() {
    if (msg.sender == owner) {
      _;
    }
  }

  /**
   * @dev public constructor
   */
  constructor()
    public
  {
    owner = msg.sender;
  }

  // external functions

  function setCompleted(
    uint256 completed
  )
    external
    restricted
  {
    last_completed_migration = completed;
  }

  function upgrade(
    address new_address
  )
    external
    restricted
  {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
