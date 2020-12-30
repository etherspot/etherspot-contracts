// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/libs/BlockLib.sol";


/**
 * @title External account owner registry
 *
 * @notice Global owners registry for key and external (outside of the platform) contract based wallets.
 *
 * @dev An account can call the registry to add (`addAccountOwner`) or remove (`removeAccountOwner`) its own owners.
 * When the owner has been added, information about that fact will live in the registry forever.
 * Removing an owner only affects the future blocks (until the owner is re-added).
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract ExternalAccountOwnerRegistry {
  using BlockLib for BlockLib.BlockRelated;

  mapping(address => mapping(address => BlockLib.BlockRelated)) private accountOwners;

  // events

  /**
   * @dev Emitted when the new owner is added
   * @param account account address
   * @param owner owner address
   */
  event AccountOwnerAdded(
    address account,
    address owner
  );

  /**
   * @dev Emitted when the existing owner is removed
   * @param account account address
   * @param owner owner address
   */
  event AccountOwnerRemoved(
    address account,
    address owner
  );

  // external functions

  /**
   * @notice Adds a new account owner
   * @param owner owner address
   */
  function addAccountOwner(
    address owner
  )
    external
  {
    require(
      owner != address(0),
      "AccountOwnerRegistry: cannot add 0x0 owner"
    );

    require(
      !accountOwners[msg.sender][owner].verifyAtCurrentBlock(),
      "AccountOwnerRegistry: owner already exists"
    );

    accountOwners[msg.sender][owner].added = true;
    accountOwners[msg.sender][owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      msg.sender,
      owner
    );
  }

  /**
   * @notice Removes existing account owner
   * @param owner owner address
   */
  function removeAccountOwner(
    address owner
  )
    external
  {
    require(
      accountOwners[msg.sender][owner].verifyAtCurrentBlock(),
      "AccountOwnerRegistry: owner doesn't exist"
    );

    accountOwners[msg.sender][owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      msg.sender,
      owner
    );
  }

  // external functions (views)

  /**
   * @notice Verifies the owner of the account at current block
   * @param account account address
   * @param owner owner address
   * @return true on correct account owner
   */
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

  /**
   * @notice Verifies the owner of the account at specific block
   * @param account account address
   * @param owner owner address
   * @param blockNumber block number to verify
   * @return true on correct account owner
   */
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
