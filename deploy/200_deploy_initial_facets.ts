/* import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  await deploy('DiamondCutFacet', {
    from,
    log: true,
  });

  await deploy('DiamondLoupeFacet', {
    from,
    log: true,
  });

  await deploy('OwnershipFacet', {
    from,
    log: true,
  });
}

func.tags = ['bridges', 'initial-facets']

export default func;
 */