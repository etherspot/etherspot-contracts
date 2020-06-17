const provider = require('./provider');

module.exports = {
  contracts_directory: './src',
  contracts_build_directory: './compiled',
  networks: {
    default: {
      provider,
      gas: 2000000,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 8555,
      gasPrice: 20000000000,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.5.15',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: 'istanbul',
      },
    },
  },
};
