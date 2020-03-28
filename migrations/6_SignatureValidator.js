const SignatureValidator = artifacts.require('SignatureValidator');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(SignatureValidator);
};
