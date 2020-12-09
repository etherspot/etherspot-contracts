import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('BalanceChecker', {
    from,
    log: true,
  });
};

func.tags = ['create', 'utils'];

module.exports = func;
