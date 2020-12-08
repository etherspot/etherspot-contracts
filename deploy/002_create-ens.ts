import { DeployFunction } from 'hardhat-deploy/types';
import { KNOWN_CONTRACT_ADDRESSES } from '../constants';

const func: DeployFunction = async hre => {
  const {
    deployments: { deploy },
    network: { name },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('ENSController', {
    from,
    log: true,
  });

  if (!KNOWN_CONTRACT_ADDRESSES.ENSRegistry[name]) {
    await deploy('ENSRegistry', {
      from,
      log: true,
    });
  }
};

func.tags = ['create', 'ens'];

module.exports = func;
