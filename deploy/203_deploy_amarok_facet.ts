import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { addOrReplaceFacets } from '../utils/diamond';
import { ConnextConfig } from '../extensions/bridges-config';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
    ethers,
    network
  } = hre;
  const { from } = await getNamedAccounts();

  if (!ConnextConfig[network.name]) {
    throw new Error("No connext config for this network available: " + network.name);
  }

  await deploy('AmarokFacet', {
    from,
    log: true,
  });

  const diamond = await ethers.getContract('Diamond');
  const amarokFacet = await ethers.getContract("AmarokFacet");

  const ABI = ['function initAmarok(address, uint32)'];
  const iface = new hre.ethers.utils.Interface(ABI)

  const initData = iface.encodeFunctionData('initAmarok', [
    ConnextConfig[network.name].handler,
    ConnextConfig[network.name].domainId
  ]);

  await addOrReplaceFacets(
    [amarokFacet],
    diamond.address,
    amarokFacet.address,
    initData
  );
}

func.tags = ['bridges', 'amarok'];
func.dependencies = ['init-facets'];

export default func;
