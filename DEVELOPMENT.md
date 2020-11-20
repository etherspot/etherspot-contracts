# Development

## Supported networks

| network | config prefix | script alias |
| --- | --- | --- |
| Mainnet | `MAINNET` | `mainnet` |
| Ropsten | `ROPSTEN` | `ropsten` |
| Rinkeby | `RINKEBY` | `rinkeby` |
| Goerli | `GOERLI` | `goerli` |
| Kovan | `KOVAN` | `kovan` |
| xDai | `XDAI` | `xdai` |
| Sokol (xDai testnet) | `SOKOL` | `sokol` |
| Binance Smart Chain | `BSC` | `bsc` |
| Binance Smart Chain (testnet) | `BSC_TEST` | `bsc_test` |
| Localnet A | `LOCAL_A` | `local_a` |
| Localnet B | `LOCAL_B` | `local_b` |

## Configuration

via `env` variables:

| name | note |
| --- | --- |
| `LOG_GAS_USAGE` | log gas usage in tests |
| `<network config prefix>_PROVIDER_ENDPOINT` | |
| `<network config prefix>_PROVIDER_PRIVATE_KEY` | |

## Test

```bash
$ npm run test
```

## Migrate

```bash
$ # npm run migrate:<network script alias>
$ # example:
$ npm run migrate:mainnet
```

## Build `./dist` files

```bash
$ npm run build
```

## Initialize

```bash
$ # npm run initialize:<network script alias>
$ # example:
$ npm run initialize:mainnet
```
