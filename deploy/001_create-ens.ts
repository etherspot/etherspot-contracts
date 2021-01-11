import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    network: { name },
    config: { knownContracts },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  const ensRegistryAddress = knownContracts?.[name]?.ENSRegistry;

  await deploy('ENSController', {
    from,
    log: true,
  });

  if (!ensRegistryAddress) {
    await deploy('ENSRegistry', {
      from,
      log: true,
    });
  }
};

func.tags = ['create', 'ens'];

module.exports = func;
