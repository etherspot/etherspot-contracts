import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('BLSAccountDeployer', {
    from,
    log: true,
    deterministicDeployment: true,
  });
}

func.tags = ['aa-4337', 'bls-deployer'];

export default func;
