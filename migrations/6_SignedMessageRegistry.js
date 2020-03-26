const SignedMessageRegistry = artifacts.require('SignedMessageRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(SignedMessageRegistry);
};
