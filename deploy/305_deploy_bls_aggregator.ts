import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('BLSOpen', {
    from,
    log: true,
    deterministicDeployment: true
  });

  const BLSOpenContract = await ethers.getContract('BLSOpen');
  await deploy('BLSSignatureAggregator', {
    from,
    log: true,
    deterministicDeployment: true,
    libraries: {
      'BLSOpen': BLSOpenContract.address
    }
  });
}

func.tags = ['aa-4337', 'bls-aggregator'];

export default func;
