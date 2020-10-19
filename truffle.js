const { createProvider } = require('./provider');

function createNetwork(name, id) {
  return {
    [name]: {
      provider: () => createProvider(name),
      gas: 2500000,
      network_id: `${id}`,
    },
  };
}

module.exports = {
  contracts_directory: './src',
  contracts_build_directory: './compiled',
  networks: {
    ...createNetwork('mainnet', 1),
    ...createNetwork('ropsten', 3),
    ...createNetwork('rinkeby', 4),
    ...createNetwork('goerli', 5),
    ...createNetwork('kovan', 42),
    ...createNetwork('xdai', 100),
    ...createNetwork('local_a', 9999),
    ...createNetwork('local_b', 6666),
    test: {
      host: '127.0.0.1',
      port: 8555,
      gasPrice: 20000000000,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.6.12+commit.27d51765',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: 'istanbul',
        metadata: {
          bytecodeHash: 'none',
        },
      },
    },
  },
};
