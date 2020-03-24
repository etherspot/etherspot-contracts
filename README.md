# EtherSpot contracts

[![NPM version][npm-image]][npm-url]
[![MIT licensed][license-image]][license-url]

## Installation

```bash
$ npm i @etherspot/contracts -S
```

## Usage 

### Javascript

```javascript
import { 
  ContractNames, 
  getContractAddress, 
  getContractAbi, 
  getContractByteCodeHash, 
} from '@etherspot/contracts'; 

console.log(
  'AccountRegistry mainnet address:', 
  getContractAddress(ContractNames.AccountRegistry),
);
console.log(
  'AccountRegistry görli address:', 
  getContractAddress(ContractNames.AccountRegistry, '5'),
);
console.log(
  'SignatureValidator abi:', 
  getContractAbi(ContractNames.SignatureValidator),
);
console.log(
  'ControlledAccount byte code hash:',
  getContractByteCodeHash(ContractNames.ControlledAccount),
);
```

### Solidity

```Solidity
pragma solidity 0.5.12;

import {AccountRegistry} from "@etherspot/contracts/src/account/AccountRegistry.sol";

// ...
```

## License

[MIT](./LICENSE)

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: ./LICENSE

