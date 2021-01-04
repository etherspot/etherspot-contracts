# ETHERspot contracts

[![NPM version][npm-image]][npm-url]

## Installation

```bash
$ npm i @etherspot/contracts -S
```

## Usage

### Javascript

```javascript
import {
  TYPED_DATA_DOMAIN_SALT,
  ContractNames, 
  getContractAbi, 
  getContractAddress, 
  getContractByteCodeHash, 
  getContractTypedDataDomainName, 
  getContractTypedDataDomainVersion, 
} from '@etherspot/contracts'; 

console.log(
  'PersonalAccountRegistry mainnet address:', 
  getContractAddress(ContractNames.PersonalAccountRegistry),
);

console.log(
  'PersonalAccountRegistry görli address:', 
  getContractAddress(ContractNames.PersonalAccountRegistry, '5'),
);

console.log(
  'ERC20Token abi:', 
  getContractAbi(ContractNames.ERC20Token),
);

console.log(
  'Account byte code hash:',
  getContractByteCodeHash(ContractNames.Account),
);

// see: https://eips.ethereum.org/EIPS/eip-712

console.log(
  'Typed data domain salt (used in all contracts):',
  TYPED_DATA_DOMAIN_SALT,
);

console.log(
  'PaymentRegistry typed data domain name:',
  getContractTypedDataDomainName(ContractNames.PaymentRegistry),
);

console.log(
  'PaymentRegistry typed data domain version:',
  getContractTypedDataDomainVersion(ContractNames.PaymentRegistry),
);
```

### Solidity

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@etherspot/contracts/src/gateway/GatewayRecipient.sol";

// ...

```

## Deployed contracts

| namespace | file | notice |
| --- | --- | --- |
| `ens` | [ENSController](./src/ens/ENSController.sol) | ENS subnode registrar |
| `external` | [ExternalAccountRegistry](./src/external/ExternalAccountRegistry.sol) | Global registry for keys and external (outside of the platform) contract based wallets |
| `gateway` | [Gateway](./src/gateway/Gateway.sol) | GSN replacement |
| `payment` | [PaymentRegistry](./src/payment/PaymentRegistry.sol) | A registry for payment and payment channels |
| `personal` | [PersonalAccountRegistry](./src/personal/PersonalAccountRegistry.sol) | A registry for personal (controlled by owners) accounts |
| `tokens` | [WrappedWeiToken](./src/tokens/WrappedWeiToken.sol) | One to one wei consumable ERC20 token |
| `utils` | [Utils](./src/utils/Utils.sol) | Utilities |


## License

MIT

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts

