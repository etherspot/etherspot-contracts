# ETHERspot contracts

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
  TYPED_DATA_DOMAIN_SALT,
  getContractAbi, 
  getContractAddress, 
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

// see: https://eips.ethereum.org/EIPS/eip-712

console.log(
  'Typed data domain salt (used in all contracts):',
  TYPED_DATA_DOMAIN_SALT,
);

console.log(
  'SignatureValidator typed data domain name:',
  getContractTypedDataDomainName(ContractNames.SignatureValidator),
);
```

## License

MIT

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: ./LICENSE

