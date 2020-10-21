const PrivateKeyProvider = require('truffle-privatekey-provider');

function getNetworkEnv(networkName, envName, defaultValue = null) {
  const name = `${networkName.toUpperCase()}_${envName}`;
  const result = process.env[name] || defaultValue;

  if (result === null) {
    throw new Error(`Undefined ${name} env.`);
  }

  return result;
}

function getNetworkEnvAsArray(networkName, envName) {
  return getNetworkEnv(networkName, envName, '')
    .split(',')
    .filter((value) => !!value);
}

function createProvider(networkName) {
  const providerPrivateKey = getNetworkEnv(networkName, 'PROVIDER_PRIVATE_KEY');
  const providerEndpoint = getNetworkEnv(networkName, 'PROVIDER_ENDPOINT');

  return new PrivateKeyProvider(
    providerPrivateKey.startsWith('0x')
      ? providerPrivateKey.substr(2)
      : providerPrivateKey,
    providerEndpoint,
  );
}

module.exports = {
  getNetworkEnv,
  getNetworkEnvAsArray,
  createProvider,
};
