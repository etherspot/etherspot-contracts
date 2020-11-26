# Gateway and Gateway Recipients

## Simple Summary

[GSN](https://www.opengsn.org/) replacement.

## Motivation

Creating more developer friendly [GSN](https://www.opengsn.org/) with support for:
* batch transactions
* [Account Owner Registry](./account-owner-registry.md)
* [Personal Account Registry](./personal-account-registry.md)

## Definitions

* sender - `msg.sender` or key used for sign delegate call,
* account - contract or key based wallet,
* batch - structure of target addresses `address[] to` and target data `bytes[] data`

## Specification

`Gateway` has the following interface:

```solidity
interface Gateway {
 // events

  event BatchDelegated(
    address sender,
    bytes batch,
    bool succeeded
  );

  // public functions

  function sendBatch(
    address[] memory to,
    bytes[] memory data
  )
    external;

  function sendBatchFromAccount(
    address account,
    address[] memory to,
    bytes[] memory data
  )
    external;

  function delegateBatch(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public;

  function delegateBatchWithGasPrice(
    address account,
    uint256 nonce,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    public;

  function delegateBatches(
    bytes[] memory batches,
    bool revertOnFailure
  )
    public;
}
```

Target contracts should inherit from `GatewayRecipient` contract:

```solidity
contract GatewayRecipient {
  address public gateway;

  // internal functions (views)

  function _getContextAccount()
    internal
    view
    returns (address);

  function _getContextSender()
    internal
    view
    returns (address);

  function _getContextData()
    internal
    view
    returns (bytes calldata);
}

```

There are several options for batch sending.

* `sendBatch()` - send direct batch
* `sendBatchFromAccount()` - send direct batch from account
* `delegateBatch()` - send a batch from account using different account (eg. relayer)
* `delegateBatchWithGasPrice()` - similar to `delegateBatch` but also verifies transaction gas price

`delegateBatch` and `delegateBatchWithGasPrice()` - recovers address from sender signature. 

Sender delegate batch message data structure:

```solidity
// for delegateBatch
bytes32 TYPE_HASH = keccak256("DelegatedBatch(uint256 nonce,address[] to,bytes[] data)");

// for delegateBatchWithGasPrice
bytes32 TYPE_HASH = keccak256("DelegatedBatchWithGasPrice(uint256 nonce,address[] to,bytes[] data,uint256 gasPrice)");
```
*See: [signing data section](../signing-data.md)* 

In `sendBatchFromAccount`, `delegateBatch`, `delegateBatchWithGasPrice` and sender need to be an owner of the account.

Account owner verification diagram: 

```mermaid
graph TD
    A{Is sender equal account}
    A -->|Yes| B[set context account as sender]
    A -->|No| C[PersonalAccountRegistry#verifyAccountOwner] 
    C --> D{Is sender account owner}
    D -->|Yes| E[set context account as account]
    D -->|No| F[AccountOwnerRegistry#verifyAccountOwner] 
    F --> G{Is sender account owner}
    G -->|Yes| E[set context account as account]
    G -->|No| H[revert] 
```

Target contract context addresses:

| gateway method | `_getContextSender` | `_getContextSender` |
| --- | --- | --- |
| `sendBatch()` | `msg.sender` | `msg.sender` | 
| `sendBatchFromAccount()` | `msg.sender` | `account` argument | 
| `delegateBatch()` | recover from `senderSignature` | `account` argument | 
| `delegateBatchWithGasPrice()` | recover from `senderSignature` | `account` argument | 


## Implementation

[gateway/Gateway.sol](../../src/gateway/Gateway.sol)

[gateway/GatewayRecipient.sol](../../src/gateway/GatewayRecipient.sol)
