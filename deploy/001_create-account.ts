import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('AccountOwnerRegistry', {
    from,
    log: true,
  });

  await deploy('AccountProofRegistry', {
    from,
    log: true,
  });
};

func.tags = ['create', 'account'];

module.exports = func;
