const MessageHashRegistry = artifacts.require('MessageHashRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(MessageHashRegistry);
};
