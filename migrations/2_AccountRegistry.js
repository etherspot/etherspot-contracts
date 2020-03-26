const AccountRegistry = artifacts.require('AccountRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(AccountRegistry);
};
