# Development

## Supported networks

| env | network | config prefix | script alias |
| --- | --- | --- | --- |
| `mainnets` | Mainnet | `MAINNET` | `mainnet` |
| `testnets` | Ropsten | `ROPSTEN` | `ropsten` |
| `testnets` | Rinkeby | `RINKEBY` | `rinkeby` |
| `testnets` | Görli | `GOERLI` | `goerli` |
| `testnets` | Kovan | `KOVAN` | `kovan` |
| `mainnets` | xDai | `XDAI` | `xdai` |
| `testnets` | Sokol (xDai testnet) | `SOKOL` | `sokol` |
| `mainnets` | Binance Smart Chain | `BSC` | `bsc` |
| `testnets` | Binance Smart Chain (testnet) | `BSC_TEST` | `bsc_test` |
| `localnets` | Localnet (instance A) | `LOCAL_A` | `local_a` |
| `localnets` | Localnet (instance B) | `LOCAL_B` | `local_b` |

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
