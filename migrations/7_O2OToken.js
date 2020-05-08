const O2OToken = artifacts.require('O2OToken');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(O2OToken);
};
