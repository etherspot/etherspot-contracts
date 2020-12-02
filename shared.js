const { readJSON } = require('fs-extra');
const { join } = require('path');
const { utils: { soliditySha3 } } = require('web3');
const { CHAIN_ID_TO_NETWORK_NAME } = require('./settings/networks');

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

function getChainEnvAsArray(chainId, envName) {
  const networkName = CHAIN_ID_TO_NETWORK_NAME[chainId];
  return getNetworkEnvAsArray(networkName, envName);
}

function sha3String(value) {
  return soliditySha3({
    type: 'string',
    value,
  });
}

async function getTypedDomainSalt() {
  const PACKAGE_PATH = join(__dirname, 'package.json');
  const { name } = await readJSON(PACKAGE_PATH);
  return soliditySha3(name);
}

function processEthersEvents(output) {
  const result = {};

  if (!output || !output.events) {
    return result;
  }

  for (const item of output.events) {
    const event = item.event || 'unknown';
    const eventSignature = item.eventSignature || 'unknown';
    const args = item.args;

    result[event] = args;
    console.log(`emitted event ${eventSignature}`, args);
  }

  return result;
}

function waitForTx(tx) {
  return tx.then(tx => tx.wait());
}

module.exports = {
  getNetworkEnv,
  getNetworkEnvAsArray,
  getChainEnvAsArray,
  getTypedDomainSalt,
  processEthersEvents,
  waitForTx,
  sha3String,
};
