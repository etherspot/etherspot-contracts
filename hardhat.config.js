require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@nomiclabs/hardhat-truffle5');

const mnemonic = process.env.MNEMONIC || 'test test test test test test test test test test test junk';
const accounts = mnemonic ? { mnemonic } : undefined;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
  // defaultNetwork: 'local_a',
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      accounts,
      chainId: 9999,
      gasPrice: 20000000000
    },
    local_a: {
      url: 'http://localhost:8545',
      accounts,
    },
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
};

module.exports = config;
