const Web3 = require('web3');
const { resolve, join } = require('path');
const { readJSON } = require('fs-extra');
const { getContractAbi, getContractAddress, ContractNames } = require('../..');
const { createProvider } = require('../../shared');

const CONTRACTS_BUILD_PATH = resolve(__dirname, '../../build/contracts');

async function readContractAddress(contractName, networkId) {
  let result;

  try {
    const { networks } = await readJSON(join(CONTRACTS_BUILD_PATH, `${contractName}.json`));
    result = networks[`${networkId}`].address;
  } catch (err) {
    result = null;
  }

  if (!result) {
    result = getContractAddress(contractName, networkId);
  }

  if (!result) {
    throw new Error(`${contractName} address not found`);
  }

  return result;
}

async function main() {
  const web3 = new Web3(createProvider());
  const networkId = await web3.eth.net.getId();
  const [from] = await web3.eth.getAccounts();
  web3.eth.defaultAccount = from;

  const accountRegistry = {
    address: await readContractAddress(ContractNames.AccountRegistry, networkId),
    abi: getContractAbi(ContractNames.AccountRegistry),
  };

  const metaTxRelay = {
    address: await readContractAddress(ContractNames.MetaTxRelay, networkId),
  };

  const paymentRegistry = {
    address: await readContractAddress(ContractNames.PaymentRegistry, networkId),
    abi: getContractAbi(ContractNames.PaymentRegistry),
  };

  const signatureValidator = {
    address: await readContractAddress(ContractNames.SignatureValidator, networkId),
    abi: getContractAbi(ContractNames.SignatureValidator),
  };

  const signedMessageRegistry = {
    address: await readContractAddress(ContractNames.SignedMessageRegistry, networkId),
  };

  // account registry
  {
    const contract = new web3.eth.Contract(
      accountRegistry.abi,
      accountRegistry.address,
    );

    if (await contract.methods.isInitialized().call()) {
      console.log('account registry already initialized');
    } else {
      console.log('initializing account registry');

      const request = contract.methods.initialize(
        metaTxRelay.address,
      );

      const gas = await request.estimateGas();

      await request.send({
        gas,
        from,
      });
    }
  }

  // signature validator
  {
    const contract = new web3.eth.Contract(
      signatureValidator.abi,
      signatureValidator.address,
    );

    if (await contract.methods.isInitialized().call()) {
      console.log('signature validator already initialized');
    } else {
      console.log('initializing signature validator');

      const request = contract.methods.initialize(
        accountRegistry.address,
        signedMessageRegistry.address,
      );

      const gas = await request.estimateGas();

      await request.send({
        gas,
        from,
      });
    }
  }

  // payment registry
  {
    const contract = new web3.eth.Contract(
      paymentRegistry.abi,
      paymentRegistry.address,
    );

    if (await contract.methods.isInitialized().call()) {
      console.log('payment registry already initialized');
    } else {
      console.log('initializing payment registry');

      const request = contract.methods.initialize(
        0,
        signatureValidator.address,
      );

      const gas = await request.estimateGas();

      await request.send({
        gas,
        from,
      });
    }
  }
}

module.exports = main;
