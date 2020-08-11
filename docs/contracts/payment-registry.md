# Payment Registry

## Simple Summary

A registry for payment and payment channels.

## Specification

`PaymentRegistry` has the following interface:

```solidity
interface PaymentRegistry {
 // events

  event DepositAccountDeployed(
    address depositAccount,
    address owner
  );

  event DepositWithdrawalRequested(
    address depositAccount,
    address owner,
    address token,
    uint256 lockedUntil
  );

  event DepositWithdrawalRejected(
    address depositAccount,
    address owner,
    address token
  );

  event DepositWithdrawn(
    address depositAccount,
    address owner,
    address token,
    uint256 amount
  );

  event PaymentChannelCommitted(
    bytes32 hash,
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 amount
  );

  event PaymentWithdrawn(
    bytes32 channelHash,
    uint256 value
  );

  event PaymentDeposited(
    bytes32 channelHash,
    uint256 value
  );

  event PaymentSplitted(
    bytes32 channelHash,
    uint256 totalValue,
    uint256 depositValue
  );

  // external functions

  function deployDepositAccount(
    address owner
  )
    external;

  function withdrawDeposit(
    address token
  )
    external;

  function commitPaymentChannelAndWithdraw(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external;

  function commitPaymentChannelAndDeposit(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external;

  function commitPaymentChannelAndSplit(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    uint256 depositPaymentValue,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external;

  // external functions (views)

  function computeDepositAccountAddress(
    address owner
  )
    external
    view
    returns (address);

  function isDepositAccountDeployed(
    address owner
  )
    external
    view
    returns (bool);

  function getDepositWithdrawalLockedUntil(
    address owner,
    address token
  )
    external
    view
    returns (uint256);

  function getPaymentChannelCommittedAmount(
    bytes32 hash
  )
    external
    view
    returns (uint256);

  // external functions (pure)

  function computePaymentChannelHash(
    address sender,
    address recipient,
    address token,
    bytes32 uid
  )
    external
    pure
    returns (bytes32);
}

```

## Implementation

[payment/PaymentRegistry.sol](../../src/payment/PaymentRegistry.sol)
