const PrivateKeyProvider = require('truffle-privatekey-provider');

function getEnv(name) {
  const upperCasedName = name.toUpperCase();
  const result = process.env[upperCasedName] || null;

  if (!result) {
    throw new Error(`Undefined ${upperCasedName} env.`);
  }

  return result;
}

function createProvider(networkName) {
  const providerPrivateKey = getEnv(`${networkName}_PROVIDER_PRIVATE_KEY`);
  const providerEndpoint = getEnv(`${networkName}_PROVIDER_ENDPOINT`);

  return new PrivateKeyProvider(
    providerPrivateKey.startsWith('0x')
      ? providerPrivateKey.substr(2)
      : providerPrivateKey,
    providerEndpoint,
  );
}

module.exports = {
  createProvider,
};
