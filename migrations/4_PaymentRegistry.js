const PaymentRegistry = artifacts.require('PaymentRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(PaymentRegistry);
};
