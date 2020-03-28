const MessageRegistry = artifacts.require('MessageRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(MessageRegistry);
};
