# Gateway and Gateway Recipients

## Simple Summary

(TODO)

## Motivation

(TODO)

## Specification

`Gateway` has the following interface:

```solidity
interface Gateway {
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

  function delegateBatchFromAccount(
    address account,
    address[] memory to,
    bytes[] memory data,
    bytes memory senderSignature
  )
    external;

  // external functions (views)

  function getAccountNonce(
    address account
  )
    external
    view
    returns (uint256);
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
}

```

## Implementation

[gateway/Gateway.sol](../../src/gateway/Gateway.sol)

[gateway/GatewayRecipient.sol](../../src/gateway/GatewayRecipient.sol)
