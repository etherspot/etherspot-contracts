const HDWalletProvider = require('@truffle/hdwallet-provider');
const PrivateKeyProvider = require('truffle-privatekey-provider');

const {
  PROVIDER_ENDPOINT,
  PROVIDER_MNEMONIC,
  PROVIDER_PRIVATE_KEY,
} = process.env;

function createProvider() {
  if (
    !PROVIDER_MNEMONIC && !PROVIDER_PRIVATE_KEY
  ) {
    throw new Error(
      'Please setup PROVIDER_MNEMONIC or PROVIDER_PRIVATE_KEY env variable',
    );
  }

  const providerEndpoint = PROVIDER_ENDPOINT || 'http://localhost:8545';

  return PROVIDER_MNEMONIC
    ? new HDWalletProvider(
      PROVIDER_MNEMONIC,
      providerEndpoint,
      0,
      1,
    )
    : new PrivateKeyProvider(
      PROVIDER_PRIVATE_KEY.startsWith('0x')
        ? PROVIDER_PRIVATE_KEY.substr(2)
        : PROVIDER_PRIVATE_KEY,
      providerEndpoint,
    );
}

module.exports = createProvider;
