import 'hardhat-typechain';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-waffle';
import { HardhatUserConfig } from 'hardhat/config';
import { NETWORKS } from './constants';

const networks = Object.entries(NETWORKS).reduce(
  (result, [networkName, { chainId, defaultProvider }]) => {
    const envPrefix = networkName.replace(/([A-Z])+/, '_$1').toUpperCase();

    let providerEndpoint = process.env[`${envPrefix}_PROVIDER_ENDPOINT`];

    if (!providerEndpoint) {
      switch (defaultProvider) {
        case 'infura':
          providerEndpoint = `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;
          break;

        default:
          providerEndpoint = defaultProvider;
      }
    }
    const providerPrivateKey = process.env[`${envPrefix}_PROVIDER_PRIVATE_KEY`];

    return providerEndpoint && providerPrivateKey
      ? {
          ...result,
          [networkName]: {
            chainId,
            url: providerEndpoint,
            accounts: [providerPrivateKey],
          },
        }
      : result;
  },
  {},
);

const config: HardhatUserConfig = {
  namedAccounts: {
    from: 0,
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic:
          process.env.HARDHAT_MNEMONIC ||
          'test test test test test test test test test test test junk',
        count: 256,
      },
      chainId: NETWORKS.localA.chainId,
      gasPrice: 20000000000,
    },
    ...networks,
  },
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
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
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
};

module.exports = config;
