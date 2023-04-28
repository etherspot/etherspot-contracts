/* import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { addOrReplaceFacets } from '../utils/diamond';
import { HopConfig } from '../config/hop';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, log },
    getNamedAccounts,
    ethers,
    network
  } = hre;
  const { from } = await getNamedAccounts();

  if (!HopConfig[network.name]) {
    return log("No Hop config for this network available: " + network.name);
  }

  await deploy('HopFacet', {
    from,
    log: true,
  });

  const diamond = await ethers.getContract('Diamond');
  const hopFacet = await ethers.getContract("HopFacet");

  const ABI = ['function initHop(uint256)'];
  const iface = new hre.ethers.utils.Interface(ABI);

  const initData = iface.encodeFunctionData('initHop', [
    HopConfig[network.name]
  ]);

  await addOrReplaceFacets(
    [hopFacet],
    diamond.address,
    hopFacet.address,
    initData
  );
}

func.tags = ['bridges', 'hop'];
func.dependencies = ['init-facets'];

export default func;
 */