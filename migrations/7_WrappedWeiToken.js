const WrappedWeiToken = artifacts.require('WrappedWeiToken');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(WrappedWeiToken);
};
