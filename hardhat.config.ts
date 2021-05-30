import '@nomiclabs/hardhat-etherscan';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import { HardhatUserConfig } from 'hardhat/config';
import { utils } from 'ethers';
import {
  NetworkNames,
  ContractNames,
  createConfigNetworks,
} from './extensions';

const { HARDHAT_MNEMONIC, ETHERSCAN_API_KEY } = process.env;

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
      chainId: 3333,
      gasPrice: 20 * 1000000000,
    },
    ...createConfigNetworks(),
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
  create2Salts: {
    default: utils.id('ETHERspot'),
    [ContractNames.ENSHelper]: utils.id('ETHERspot@1.2.0'),
    [ContractNames.ENSRegistry]: utils.id('ETHERspot@1.2.0'),
    [ContractNames.ENSReverseRegistrar]: utils.id('ETHERspot@1.2.0'),
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

module.exports = config;
