const ERC20O2OToken = artifacts.require('ERC20O2OToken');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(ERC20O2OToken);
};
