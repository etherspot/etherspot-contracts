import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { addOrReplaceFacets } from "../utils/diamond";
import { ConnextConfig } from "../config/connext";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, log },
    getNamedAccounts,
    ethers,
    network,
  } = hre;
  const { from } = await getNamedAccounts();

  if (!ConnextConfig[network.name]) {
    return log("No connext config for this network available: " + network.name);
  }

  await deploy("ConnextFacet", {
    from,
    log: true,
  });

  const diamond = await ethers.getContract("Diamond");
  const connextFacet = await ethers.getContract("ConnextFacet");

  const ABI = ["function initConnext(address, uint32, address)"];
  const iface = new hre.ethers.utils.Interface(ABI);

  const initData = iface.encodeFunctionData("initConnext", [
    ConnextConfig[network.name].connext,
    ConnextConfig[network.name].domainId,
    ConnextConfig[network.name].weth,
  ]);

  await addOrReplaceFacets(
    [connextFacet],
    diamond.address,
    connextFacet.address,
    initData,
  );
};

func.tags = ["bridges", "connext"];
func.dependencies = ["init-facets"];

export default func;
