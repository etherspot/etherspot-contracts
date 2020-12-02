require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@nomiclabs/hardhat-truffle5');

const mnemonic = process.env.MNEMONIC || 'test test test test test test test test test test test junk';
const accounts = mnemonic ? { mnemonic } : undefined;

const infuraProvider = (networkName) => `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;

const setupNetwork = (networkName, chainId, defaultProvider = '') => ({
  [networkName]: {
    url: process.env[`PROVIDER_ENDPOINT_${networkName.toUpperCase()}`] || defaultProvider,
    chainId,
    accounts,
  }
});

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
    ...setupNetwork('local_a', 9999, 'http://localhost:8545'),
    ...setupNetwork('local_b', 6666, 'http://localhost:8445'),
    ...setupNetwork('mainnet', 1, infuraProvider('mainnet')),
    ...setupNetwork('ropsten', 3, infuraProvider('ropsten')),
    ...setupNetwork('rinkeby', 4, infuraProvider('rinkeby')),
    ...setupNetwork('goerli', 5, infuraProvider('goerli')),
    ...setupNetwork('kovan', 42, infuraProvider('kovan')),
    ...setupNetwork('xdai', 100),
    ...setupNetwork('sokol', 77),
    ...setupNetwork('bsc_testnet', 97, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
    ...setupNetwork('bsc', 56, 'https://bsc-dataseed1.binance.org'),
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
