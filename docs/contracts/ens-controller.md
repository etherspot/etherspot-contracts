# ENS Controller

## Simple Summary

ENS subnode registrar and [addr resolver](https://eips.ethereum.org/EIPS/eip-137#addr).  

## Motivation

Build a contract that allows you to reserve (off-chain) ENS names.

## Definitions

* root node - ens node attached to controller (controller is node owner),
* sub node - ens sub node created from the root node,
* guardian - key account whose signature is required to register the sub node,

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

### Adding root node

Root node owner need to transfer ownership to controller before it can be added to contract. 
When transferring is done everyone can call `addNode`. 

*Note: This operation cannot be undone.*

### Registering sub node

To register sub node, `msg.sender` need to send valid signature from one of guardian key.
Once registration is complete `msg.sender` becoming both node owner and `addr` record value.
Once a sub node is registered, it cannot be replaced. 

Guardian message data structure:

```solidity
bytes32 TYPE_HASH = keccak256("SubNodeRegistration(address account,bytes32 node,bytes32 label)");
```

*See: [signing data section](../signing-data.md)* 


## Implementation

[ens/ENSController.sol](../../src/ens/ENSController.sol)
