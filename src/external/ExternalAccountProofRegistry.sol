// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/libs/BlockLib.sol";


/**
 * @title External account proof registry
 *
 * @notice Global proofs registry for key and external (outside of the platform) contract based wallets.
 *
 * @dev Given the fact, there is no way to sign the data using a contract based wallet,
 * we created a registry to store signed by the key wallet proofs.
 * ERC-1271 allows removing a signer after the signature was created. Thus store the signature for the later use
 * doesn't guarantee the signer is still has access to that smart account.
 * Because of that, the ERC1271's `isValidSignature()` cannot be used in e.g. `PaymentRegistry`.*
 *
 * An account can call the registry to add (`addAccountProof`) or remove (`removeAccountProof`) proof hash.
 * When the proof has been added, information about that fact will live in the registry forever.
 * Removing a proof only affects the future blocks (until the proof is re-added).
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract ExternalAccountProofRegistry {
  using BlockLib for BlockLib.BlockRelated;

  mapping(address => mapping(bytes32 => BlockLib.BlockRelated)) private accountProofs;

  // events

  /**
   * @dev Emitted when the new proof is added
   * @param account account address
   * @param hash proof hash
   */
  event AccountProofAdded(
    address account,
    bytes32 hash
  );

  /**
   * @dev Emitted when the existing proof is removed
   * @param account account address
   * @param hash proof hash
   */
  event AccountProofRemoved(
    address account,
    bytes32 hash
  );

  // external functions

  /**
   * @notice Adds a new account proof
   * @param hash proof hash
   */
  function addAccountProof(
    bytes32 hash
  )
    external
  {
    require(
      !accountProofs[msg.sender][hash].verifyAtCurrentBlock(),
      "AccountProofRegistry: proof already exists"
    );

    accountProofs[msg.sender][hash].added = true;
    accountProofs[msg.sender][hash].removedAtBlockNumber = 0;

    emit AccountProofAdded(
      msg.sender,
      hash
    );
  }

  /**
   * @notice Removes existing account proof
   * @param hash proof hash
   */
  function removeAccountProof(
    bytes32 hash
  )
    external
  {
    require(
      accountProofs[msg.sender][hash].verifyAtCurrentBlock(),
      "AccountProofRegistry: proof doesn't exist"
    );

    accountProofs[msg.sender][hash].removedAtBlockNumber = block.number;

    emit AccountProofRemoved(
      msg.sender,
      hash
    );
  }

  // external functions (views)

  /**
   * @notice Verifies the proof of the account at current block
   * @param account account address
   * @param hash proof hash
   * @return true on correct account proof
   */
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

  /**
   * @notice Verifies the proof of the account at specific block
   * @param account account address
   * @param hash proof hash
   * @param blockNumber block number to verify
   * @return true on correct account proof
   */
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
