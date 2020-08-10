# Personal Account Registry

## Simple Summary

(TODO)

## Motivation

(TODO)

## Specification

`PersonalAccountRegistry` has the following interface:

```solidity
interface PersonalAccountRegistry {
  // events

  event AccountDeployed(
    address account
  );

  event AccountOwnerAdded(
    address account,
    address owner
  );

  event AccountOwnerRemoved(
    address account,
    address owner
  );

  event AccountTransactionExecuted(
    address account,
    address to,
    uint256 value,
    bytes data
  );

  event AccountCallRefunded(
    address account,
    address beneficiary,
    address token,
    uint256 value
  );

  // external functions

  function addAccountOwner(
    address account,
    address owner
  )
    external;

  function removeAccountOwner(
    address account,
    address owner
  )
    external;

  function executeAccountTransaction(
    address payable account,
    address payable to,
    uint256 value,
    bytes calldata data
  )
    external;

  function refundAccountCall(
    address payable account,
    address payable token,
    uint256 value
  )
    external;

  // external functions (views)

  function computeAccountAddress(
    address saltOwner
  )
    external
    view
    returns (address);

  function isAccountDeployed(
    address account
  )
    external
    view
    returns (bool);

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

## Implementation

[personal/PersonalAccountRegistry.sol](../../src/personal/PersonalAccountRegistry.sol)
