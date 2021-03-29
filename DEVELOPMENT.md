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
| `mainnets` | Fantom | `FANTOM` | `fantom` |
| `testnets` | Fantom (testnet) | `FANTOM_TEST` | `fantomTest` |
| `mainnets` | Matic | `MATIC` | `matic` |
| `testnets` | Mumbai (Matic testnet) | `MUMBAI` | `mumbai` |
| `mainnets` | Avalanche | `AVALANCHE` | `avalanche` |
| `testnets` | FUJI (Avalanche testnet) | `FUJI` | `fuji` |
| `localnets` | Localnet (instance A) | `LOCAL_A` | `localA` |
| `localnets` | Localnet (instance B) | `LOCAL_B` | `localA` |

## Configuration

via `env` variables:

| name | note |
| --- | --- |
| `<network config prefix>_PROVIDER_ENDPOINT` | |
| `<network config prefix>_PROVIDER_PRIVATE_KEY` | |
| `<network config prefix>_PROVIDER_GAS` | optional |
| `<network config prefix>_PROVIDER_GAS_PRICE` | optional |

## Test

```bash
$ npm run test     # run unit tests
$ npm run coverage # run coverage
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
