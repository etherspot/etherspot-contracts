# ENS Controller

## Simple Summary

(TODO)

## Motivation

(TODO)

## Specification

`ENSController` has the following interface:

```solidity
interface ENSController {
  // events

  event NodeAdded(
    bytes32 node
  );

  event RegistryChanged(
    address registry
  );

  // external functions

  function setRegistry(
    ENSRegistry registry_
  )
    external;

  function addNode(
    bytes32 node
  )
    external;

  function registerSubNode(
    bytes32 node,
    bytes32 label,
    bytes calldata guardianSignature
  )
    external;
}

```

## Implementation

[ens/ENSController.sol](../../src/ens/ENSController.sol)
