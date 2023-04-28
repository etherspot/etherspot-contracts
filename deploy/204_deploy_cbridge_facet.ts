import { utils } from "ethers";
import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { addOrReplaceFacets } from "../utils/diamond";
import { CBridgeConfig } from "../config/cBridge";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, log },
    getNamedAccounts,
    ethers,
  } = hre;
  const { from } = await getNamedAccounts();

  if (!CBridgeConfig[network.name]) {
    return log("No cbridge config for this network available: " + network.name);
  }

  let bridgeAddr = "0xc578cbaf5a411dfa9f0d227f97dadaa4074ad062";

  await deploy("CBridgeFacet", {
    from,
    log: true,
    deterministicDeployment: true,
  });

  const cBridgeFacet = await ethers.getContract("CBridgeFacet");
  const diamond = await ethers.getContract("Diamond");

  const ABI = ["function cbInitialize(address)"];
  const iface = new utils.Interface(ABI);

  if (CBridgeConfig[network.name].cBridge != "") {
    bridgeAddr = CBridgeConfig[network.name].cBridge;
  }

  const initData = iface.encodeFunctionData("cbInitialize", [bridgeAddr]);

  await addOrReplaceFacets(
    [cBridgeFacet],
    diamond.address,
    cBridgeFacet.address,
    initData,
  );
};
export default func;
func.id = "cbridge_facet_deploy";
func.tags = ["bridges", "cbridge"];
func.dependencies = ["init-facets"];
