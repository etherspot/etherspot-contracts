// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../common/libs/BlockLib.sol";


/**
 * @title AccountProofRegistry
 */
contract AccountProofRegistry {
  using BlockLib for BlockLib.BlockRelated;

  mapping(address => mapping(bytes32 => BlockLib.BlockRelated)) private accountProofs;

  // events

  event AccountProofAdded(
    address account,
    bytes32 hash
  );

  event AccountProofRemoved(
    address account,
    bytes32 hash
  );

  // external functions

  function addAccountProof(
    bytes32 hash
  )
    external
  {
    require(
      !accountProofs[msg.sender][hash].verifyAtCurrentBlock()
    );

    accountProofs[msg.sender][hash].added = true;
    accountProofs[msg.sender][hash].removedAtBlockNumber = 0;

    emit AccountProofAdded(
      msg.sender,
      hash
    );
  }

  function removeAccountProof(
    bytes32 hash
  )
    external
  {
    require(
      accountProofs[msg.sender][hash].verifyAtCurrentBlock()
    );

    accountProofs[msg.sender][hash].removedAtBlockNumber = block.number;

    emit AccountProofRemoved(
      msg.sender,
      hash
    );
  }

  // external functions (views)

  function verifyAccountProof(
    address account,
    bytes32 hash
  )
    external
    view
    returns (bool)
  {
    return accountProofs[account][hash].verifyAtCurrentBlock();
  }

  function verifyAccountProofAtBlock(
    address account,
    bytes32 hash,
    uint256 blockNumber
  )
    external
    view
    returns (bool)
  {
    return accountProofs[account][hash].verifyAtBlock(blockNumber);
  }
}
