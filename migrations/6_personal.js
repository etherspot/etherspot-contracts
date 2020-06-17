const PersonalAccountRegistry = artifacts.require('PersonalAccountRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(PersonalAccountRegistry);
};
