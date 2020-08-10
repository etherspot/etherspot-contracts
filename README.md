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

## Documentation

* [Account Owner Registry](./docs/account-owner-registry.md)
* [Account Proof Registry](./docs/account-proof-registry.md)
* [ENS Controller](./docs/ens-controller.md)
* [Gateway](./docs/gateway.md)
* [Payment Registry](./docs/payment-registry.md)
* [Personal Account Registry](./docs/personal-account-registry.md)


## Development

### Configuration

via `env` variables:

| name | default value | note |
| --- | --- | --- |
| `PROVIDER_ENDPOINT` | `http://localhost:8545` | |
| `PROVIDER_MNEMONIC` | `(empty)` | |
| `PROVIDER_PRIVATE_KEY` | `0x5504956d5...` | uses first private key from local infra by default |
| `LOG_GAS_USAGE` | `(empty)` | log gas usage in tests |

### Scripts

```bash
$ npm run test        # run tests
$ npm run migrate     # migrate contracts 
$ npm run build       # build dist files
$ npm run initialize  # initialize contracts
```

## License

MIT

[npm-image]: https://badge.fury.io/js/%40etherspot%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@etherspot/contracts

