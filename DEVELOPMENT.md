# Development

## Configuration

via `env` variables:

| name | note |
| --- | --- |
| `LOG_GAS_USAGE` | log gas usage in tests |
| `LOCAL_A_PROVIDER_ENDPOINT` | |
| `LOCAL_A_PROVIDER_PRIVATE_KEY` | |
| `LOCAL_B_PROVIDER_ENDPOINT` | |
| `LOCAL_B_PROVIDER_PRIVATE_KEY` | |

## Test

```bash
$ npm run test
```

## Migrate

```bash
$ npm run migrate:mainnet
$ npm run migrate:ropsten
$ npm run migrate:rinkeby
$ npm run migrate:goerli
$ npm run migrate:kovan
$ npm run migrate:xdai
$ npm run migrate:local_a
$ npm run migrate:local_b
```

## Build `./dist` files

```bash
$ npm run build
```

## Initialize

```bash
$ npm run initialize:mainnet
$ npm run initialize:ropsten
$ npm run initialize:rinkeby
$ npm run initialize:goerli
$ npm run initialize:kovan
$ npm run initialize:xdai
$ npm run initialize:local_a
$ npm run initialize:local_b
```
