const contracts = require('./contracts');

function getContractAbi(contractName) {
  return contracts[contractName] ? contracts[contractName].abi || null : null;
}

function getContractAddress(contractName, networkId = 1) {
  return contracts[contractName]
    ? contracts[contractName].addresses[`${networkId}`] || null
    : null;
}

function getContractByteCode(contractName) {
  return contracts[contractName]
    ? contracts[contractName].byteCode || null
    : null;
}

module.exports = {
  getContractAbi,
  getContractAddress,
  getContractByteCode,
};
