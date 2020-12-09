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
| `testnets` | Binance Smart Chain (testnet) | `BSC_TEST` | `bscTest` |
| `localnets` | Localnet (instance A) | `LOCAL_A` | `localA` |
| `localnets` | Localnet (instance B) | `LOCAL_B` | `localA` |

## Configuration

via `env` variables:

| name | note |
| --- | --- |
| `<network config prefix>_PROVIDER_ENDPOINT` | |
| `<network config prefix>_PROVIDER_PRIVATE_KEY` | |

## Test

```bash
$ npm run test
```

## Deployment

```bash
$ # npm run deploy:<network script alias>
$ # example:
$ npm run deploy:mainnet
```

## Build `./dist` files

```bash
$ npm run build
```

