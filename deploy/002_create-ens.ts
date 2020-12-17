import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    network: { name },
    config: { knownContracts },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('ENSController', {
    from,
    log: true,
  });

  if (!knownContracts[name].ENSController) {
    await deploy('ENSRegistry', {
      from,
      log: true,
    });
  }
};

func.tags = ['create', 'ens'];

module.exports = func;
