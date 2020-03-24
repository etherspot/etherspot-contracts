const AccountRegistry = artifacts.require('AccountRegistry');
const MetaTxRelay = artifacts.require('MetaTxRelay');
const PaymentRegistry = artifacts.require('PaymentRegistry');
const SignatureValidator = artifacts.require('SignatureValidator');
const SignedMessageRegistry = artifacts.require('SignedMessageRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(AccountRegistry);
  await deployer.deploy(MetaTxRelay);
  await deployer.deploy(PaymentRegistry);
  await deployer.deploy(SignatureValidator);
  await deployer.deploy(SignedMessageRegistry);
};
