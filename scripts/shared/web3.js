const Web3 = require('web3');
const createProvider = require('../../provider');

module.exports = new Web3(createProvider());
