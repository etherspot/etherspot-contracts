const Web3 = require('web3');
const { getContractAbi, getContractAddress } = require('../..');
const createProvider = require('../../provider');
const logger = require('./logger');

const { eth, utils } = new Web3(createProvider());

function getNetworkId() {
  return eth.net.getId();
}

function getContracts(networkId, ...names) {
  return names
    .map((name) => {
      const address = getContractAddress(name, networkId);
      const abi = getContractAbi(name);
      const result = new eth.Contract(
        abi,
        address,
      );
      // eslint-disable-next-line no-underscore-dangle
      result.address = result._address;

      return result;
    });
}

async function getDefaultAccount() {
  if (!eth.defaultAccount) {
    const accounts = await eth.getAccounts();

    const [from] = accounts;
    eth.defaultAccount = from;
  }

  return eth.defaultAccount;
}

async function prepareTransactionOptions(options = {}) {
  const result = options;

  if (!options.from) {
    result.from = await getDefaultAccount();
  } else if (typeof options.from === 'object') {
    result.from = options.from.address;
  }

  if (typeof options.to === 'object') {
    result.to = options.to.address;
  }

  if (options.value && typeof options.value === 'string') {
    result.value = utils.toWei(options.value);
  }

  return result;
}

async function sendTransaction(opts) {
  const options = await prepareTransactionOptions(opts);
  const gas = await eth.estimateGas(options);
  return eth.sendTransaction({
    ...options,
    gas,
  });
}

async function executeRequest(request, opts = {}) {
  const options = await prepareTransactionOptions(opts);
  const gas = await request.estimateGas(options);
  return request.send({
    ...options,
    gas,
  });
}

function createRandomWallet(attach = false) {
  const result = eth.accounts.create();
  return attach
    ? eth.accounts.wallet.add(result)
    : result;
}

function processEvents(output) {
  const result = {};

  const data = output && output.events
    ? Object.values(output.events)
    : [];

  const items = Object
    .values(data)
    .reduce((result, item) => [
      ...result,
      ...(Array.isArray(item) ? item : [item]),
    ], []);

  for (const item of items) {
    const event = item.event || 'unknown';
    const returnValues = item.returnValues || {};
    const args = {};
    const keys = Object.keys(item.returnValues);

    for (const key of keys) {
      if (key !== '0' && !(parseInt(key, 10) > 0)) {
        args[key] = returnValues[key];
      }
    }

    if (!result[event]) {
      result[event] = [];
    }

    result[event].push(args);

    logger.debug(`event ${event} emitted`, args);
  }

  return result;
}

module.exports = {
  getDefaultAccount,
  getNetworkId,
  ZERO_ADDRESS: `0x${'0'.repeat(40)}`,
  logger,
  utils,
  getContracts,
  sendTransaction,
  executeRequest,
  createRandomWallet,
  processEvents,
};
