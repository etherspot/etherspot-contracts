const AccountOwnerRegistry = artifacts.require('AccountOwnerRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(AccountOwnerRegistry);
};
