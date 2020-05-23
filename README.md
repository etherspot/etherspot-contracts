# ETHERspot contracts

[![NPM version][npm-image]][npm-url]
![MIT licensed][license-image]

## Installation

```bash
$ npm i @etherspot/contracts -S
```

## Usage 

### Javascript

```javascript
import {
  ContractNames, 
  TYPED_DATA_DOMAIN_SALT,
  getContractAbi, 
  getContractAddress, 
  getContractByteCodeHash, 
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
  'SignatureValidator typed data domain name:',
  getContractTypedDataDomainName(ContractNames.PaymentRegistry),
);
```

## License

MIT

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: ./LICENSE

