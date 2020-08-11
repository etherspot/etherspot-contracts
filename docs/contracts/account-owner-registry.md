# Account Owner Registry

## Simple Summary

A registry for account owner management.

## Motivation

Creating a global owners registry for key and external (outside of the platform) contract based wallets.

## Definitions

* account - contract or key based wallet,
* owner -  account added by another account as an owner,

## Specification

`AccountOwnerRegistry` has the following interface:

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

### Account owner management

An account can call the registry to add (`addAccountOwner`) or remove (`removeAccountOwner`) its own owners. 
When the owner has been added, information about that fact will live in the registry forever.
Removing an owner only affects the future blocks (until the owner is re-added).

### Account owner verification

The account owner can be verified in a current block (`verifyAccountOwner`) or in previous (`verifyAccountOwnerAtBlock`) 
using `blockNumber` argument. 

## Implementation

[account/AccountOwnerRegistry.sol](../../src/account/AccountOwnerRegistry.sol)
