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
  ContractNames, 
  getContractAbi, 
  getContractAddress,
  getContractByteCode, 
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
  'Account byte code:',
  getContractByteCode(ContractNames.Account),
);
```

### Solidity

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@etherspot/contracts/src/gateway/GatewayRecipient.sol";

// ...
```

## License

MIT

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts

