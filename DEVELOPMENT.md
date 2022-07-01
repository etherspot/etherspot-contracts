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
| `mainnets` | Aurora | `AURORA` | `aurora` |
| `testnets` | Aurora Testnet | `AURORA_TEST`| `auroraTest` |
| `mainnets` | Arbitrum | `ARBITRUM` | `arbitrum` |
| `testnets` | Arbitrum Testnet | `ARBITRUM_TEST` | `arbitrumTest` |
| `mainnets` | Optimism | `OPTIMISM` | `optimism` |
| `testnets` | Optimism Kovan | `OPTIMISM_KOVAN` | `optimismKovan` |
| `mainnets` | Fuse | `FUSE` | `fuse` |
| `testnets` | Fuse Sparknet | `FUSE_SPARKNET` | `fuseSparknet` |
| `testnets` | Etherspot | `ETHERSPOT` | `etherspot` |
| `localnets` | Localnet (instance A) | `LOCAL_A` | `localA` |
| `localnets` | Localnet (instance B) | `LOCAL_B` | `localB` |
| `localnets` | Localnet (instance H) | `LOCAL_H` | `localH` |

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

## Contracts verification (ethereum)

```bash
$ npm run verify:mainnet
```

## Contracts verification (non-ethereum)

```bash
$ npx hardhat --network avalanche etherscan-verify --api-key <API_KEY>
```

## Build `./dist` files

```bash
$ npm run build
```
