import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('PersonalAccountImplementationV1', {
    from,
    log: true,
  });

  await deploy('PersonalAccountRegistry', {
    from,
    log: true,
  });
};

func.tags = ['create', 'personal'];

module.exports = func;
