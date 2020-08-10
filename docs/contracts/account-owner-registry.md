# Account Owner Registry

## Simple Summary

A registry for account owner management.

## Motivation

Creating global owner registry for key and external (outside platform) contract based wallets.

## Definitions

* account - contract or key based wallet,
* owner -  account added by another account as an owner,

## Specification

The registry has the following interface:

```solidity
interface AccountOwnerRegistry {
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
    external;

  function removeAccountOwner(
    address owner
  )
    external;

  // external functions (views)

  function verifyAccountOwner(
    address account,
    address owner
  )
    external
    view
    returns (bool);

  function verifyAccountOwnerAtBlock(
    address account,
    address owner,
    uint256 blockNumber
  )
    external
    view
    returns (bool);
}
```

### Account proof management

Account can call the registry to add (`addAccountOwner`) or remove (`removeAccountOwner`) own owners. 
When owner has been added, information about that fact will live in registry forever.
Removing owner only affects future blocks (until owner is re-added).

### Account proof verification

Account owner can verify in a current block (`verifyAccountOwner`) or in previous (`verifyAccountOwnerAtBlock`) 
using `blockNumber` argument. 

## Implementation

[account/AccountOwnerRegistry.sol](../../src/account/AccountOwnerRegistry.sol)
