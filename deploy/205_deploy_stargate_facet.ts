import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { addOrReplaceFacets } from "../utils/diamond";
import config from "../config/stargate";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, log },
    getNamedAccounts,
    ethers,
    network,
  } = hre;
  const { from } = await getNamedAccounts();

  if (!config[network.name]) {
    return log("No stargate config for this network available: " + network.name);
  }

  await deploy("StargateFacet", {
    from,
    log: true,
    deterministicDeployment: true,
  });

  const diamond = await ethers.getContract("Diamond");
  const stargateFacet = await ethers.getContract("StargateFacet");

  const ABI = ["function sgInitialize(address, uint16)"];
  const iface = new hre.ethers.utils.Interface(ABI);

  const initData = iface.encodeFunctionData("sgInitialize", [
    config[network.name].stargateRouter,
    config[network.name].chainId,
  ]);

  await addOrReplaceFacets(
    [stargateFacet],
    diamond.address,
    stargateFacet.address,
    initData,
  );
};
func.id = "stargate_facet_deploy";
func.tags = ["bridges", "stargate"];
func.dependencies = ["init-facets"];

export default func;
