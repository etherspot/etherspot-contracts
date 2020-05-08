const Relay = artifacts.require('Relay');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(Relay);
};
