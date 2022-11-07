import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('GatewayV2', {
    from,
    log: true,
  });
};

func.tags = ['create', 'gateway-v2'];

module.exports = func;
