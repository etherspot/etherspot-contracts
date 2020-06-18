const ENSController = artifacts.require('ENSController');
const ENSRegistry = artifacts.require('ENSRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(ENSController);
  await deployer.deploy(ENSRegistry);
};
