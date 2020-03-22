module.exports = {
  contracts_directory: './src',
  networks: {
    test: {
      host: '127.0.0.1',
      port: 8555,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: '0.5.12',
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
