import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';
import { utils } from 'ethers';
import { NetworkNames, ContractNames, createConfigNetwork } from './extensions';

const { HARDHAT_MNEMONIC } = process.env;

const config: HardhatUserConfig = {
  namedAccounts: {
    from: 0,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          HARDHAT_MNEMONIC ||
          'test test test test test test test test test test test junk',
        count: 256,
      },
      chainId: 192,
      gasPrice: 20 * 1000000000,
    },
    ...createConfigNetwork(NetworkNames.Mainnet, 1, 'infura'),
    ...createConfigNetwork(NetworkNames.Ropsten, 3, 'infura'),
    ...createConfigNetwork(NetworkNames.Rinkeby, 4, 'infura'),
    ...createConfigNetwork(NetworkNames.Goerli, 5, 'infura', 1),
    ...createConfigNetwork(NetworkNames.Kovan, 42, 'infura'),
    ...createConfigNetwork(
      NetworkNames.Xdai,
      100,
      'https://rpc.xdaichain.com',
      1,
    ),
    ...createConfigNetwork(
      NetworkNames.Sokol,
      77,
      'https://sokol.poa.network',
      1,
    ),
    ...createConfigNetwork(
      NetworkNames.Bsc,
      56,
      'https://bsc-dataseed1.binance.org',
    ),
    ...createConfigNetwork(
      NetworkNames.BscTest,
      97,
      'https://data-seed-prebsc-1-s2.binance.org:8545',
    ),
    ...createConfigNetwork(
      NetworkNames.LocalA,
      9999,
      'http://localhost:8545',
      20,
    ),
    ...createConfigNetwork(
      NetworkNames.LocalB,
      6666,
      'http://localhost:9545',
      20,
    ),
  },
  solidity: {
    version: '0.6.12',
    settings: {
      evmVersion: 'istanbul',
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
  paths: {
    sources: 'src',
    cache: '.hardhat/cache',
    artifacts: '.hardhat/artifacts',
    deploy: 'deploy',
    deployments: 'deployments',
  },
  buildPaths: {
    artifacts: 'artifacts',
    dist: 'dist',
    typings: 'typings',
  },
  gasReporter: {
    enabled: false,
  },
  ens: {
    internalTopLevelDomains: ['pillar', 'etherspot', 'dank'],
  },
  knownContracts: {
    [NetworkNames.Mainnet]: {
      [ContractNames.ENSRegistry]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
  },
  typedData: {
    domains: {
      Gateway: {
        name: 'ETHERspot Gateway',
        version: '1',
      },
      ENSController: {
        name: 'ETHERspot ENS Controller',
        version: '1',
      },
      PaymentRegistry: {
        name: 'ETHERspot Payment Registry',
        version: '1',
      },
    },
    domainSalt: utils.id('ETHERspot'),
  },
  create2Salts: {
    default: utils.id('ETHERspot'),
  },
};

module.exports = config;
