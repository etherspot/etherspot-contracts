const Gateway = artifacts.require('Gateway');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(Gateway);
};
