const MetaTxRelay = artifacts.require('MetaTxRelay');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(MetaTxRelay);
};
