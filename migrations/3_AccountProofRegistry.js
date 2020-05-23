const AccountProofRegistry = artifacts.require('AccountProofRegistry');

module.exports = async (deployer, network) => {
  if (network === 'test') {
    return;
  }

  await deployer.deploy(AccountProofRegistry);
};
