const Migrations = artifacts.require('Migrations');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(Migrations);
};
