const BalanceChecker = artifacts.require('BalanceChecker');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(BalanceChecker);
};
