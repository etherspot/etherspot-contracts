# Account Proof Registry

## Simple Summary

A registry for account proof management.

## Motivation

There is no way to sign data using contract based wallet. 
[ERC-1271 (Standard Signature Validation Method for Contracts)](https://github.com/ethereum/EIPs/issues/1271) 
allow removing signer after signature verification. 
Because of that, `isValidSignature()` cannot be used in e.g. `PaymentRegistry`.

## Definitions

* account - contract or key based wallet,
* hash - unique in account scope `bytes32` data,
* proof - information that account added hash,

## Specification

The registry has the following interface:

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

Account proof can verify in a current block (`verifyAccountProof`) or in previous (`verifyAccountProofAtBlock`) 
using `blockNumber` argument. 

## Implementation

[account/AccountProofRegistry.sol](../../src/account/AccountProofRegistry.sol)
