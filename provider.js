const HDWalletProvider = require('@truffle/hdwallet-provider');
const PrivateKeyProvider = require('truffle-privatekey-provider');

const {
  PROVIDER_ENDPOINT,
  PROVIDER_MNEMONIC,
  PROVIDER_PRIVATE_KEY,
} = process.env;

function createProvider() {
  const providerPrivateKey = PROVIDER_PRIVATE_KEY || '5504956d5f39cbe19c7303d5df78dc43599ba661afe67fec14eafd044e162bd6'; // local
  const providerEndpoint = PROVIDER_ENDPOINT || 'http://localhost:8545';

  return PROVIDER_MNEMONIC
    ? new HDWalletProvider(
      PROVIDER_MNEMONIC,
      providerEndpoint,
      0,
      1,
    )
    : new PrivateKeyProvider(
      providerPrivateKey.startsWith('0x')
        ? providerPrivateKey.substr(2)
        : providerPrivateKey,
      providerEndpoint,
    );
}

module.exports = createProvider;
