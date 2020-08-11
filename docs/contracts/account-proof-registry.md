# Account Proof Registry

## Simple Summary

A registry for account proof management.

## Motivation

Given the fact, there is no way to sign the data using a contract based wallet, we created a registry to store signed by the key wallet proofs. 

*Note: [ERC-1271 (Standard Signature Validation Method for Contracts)](https://github.com/ethereum/EIPs/issues/1271) 
allows removing a signer after the signature was created. Thus store the signature for the later use doesn't guarantee the signer is still has access to that smart account.
Because of that, `isValidSignature()` cannot be used in e.g. `PaymentRegistry`.*

## Definitions

* account - contract or key based wallet,
* hash - unique in account scope `bytes32` data,
* proof - information that account added hash,

## Specification

`AccountProofRegistry` has the following interface:

```solidity
interface AccountProofRegistry {
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
    external;

  function removeAccountProof(
    bytes32 hash
  )
    external;

  // external functions (views)

  function verifyAccountProof(
    address account,
    bytes32 hash
  )
    external
    view
    returns (bool);

  function verifyAccountProofAtBlock(
    address account,
    bytes32 hash,
    uint256 blockNumber
  )
    external
    view
    returns (bool);
}
```

### Account proof management

Account can call the registry to add (`addAccountProof`) or remove (`removeAccountProof`) own proofs. 
When proof has been added, information about that fact will live in registry forever.
Removing proof only affects future blocks (until proof is re-added).

### Account proof verification

Account proof can be verified in a current block (`verifyAccountProof`) or in previous (`verifyAccountProofAtBlock`) 
using `blockNumber` argument. 

## Implementation

[account/AccountProofRegistry.sol](../../src/account/AccountProofRegistry.sol)
