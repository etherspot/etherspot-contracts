/**
 * @type import('hardhat/types').HardhatRuntimeEnvironment
 */
const func = async function (hre) {
  const { deployments: { deploy }, getNamedAccounts, network, getChainId } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy('AccountOwnerRegistry', {
    from: deployer,
    log: true,
  });

  await deploy('AccountProofRegistry', {
    from: deployer,
    log: true,
  });
};
module.exports = func;
module.exports.tags = ['Account'];
