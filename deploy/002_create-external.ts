import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('ExternalAccountOwnerRegistry', {
    from,
    log: true,
  });

  await deploy('ExternalAccountProofRegistry', {
    from,
    log: true,
  });
};

func.tags = ['create', 'external'];

module.exports = func;
