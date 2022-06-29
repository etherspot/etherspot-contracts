import { utils } from "ethers";
import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { addOrReplaceFacets } from "../utils/diamond";
import config from "../config/cBridge";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
    ethers,
  } = hre;
  const { from } = await getNamedAccounts();

  let bridgeAddr = "0xc578cbaf5a411dfa9f0d227f97dadaa4074ad062";
  let chainId = 1;

  await deploy("CBridgeFacet", {
    from,
    log: true,
    deterministicDeployment: true,
  });

  const cBridgeFacet = await ethers.getContract("CBridgeFacet");
  const diamond = await ethers.getContract("Diamond");

  const ABI = ["function initializeCBridge(address)"];
  const iface = new utils.Interface(ABI);

  if (config[network.name].cBridge != "") {
    bridgeAddr = config[network.name].cBridge;
  }

  const initData = iface.encodeFunctionData("initializeCBridge", [bridgeAddr]);

  await addOrReplaceFacets(
    [cBridgeFacet],
    diamond.address,
    cBridgeFacet.address,
    initData,
  );
};
export default func;
func.id = "cbridge_facet_deploy";
func.tags = ["bridging-facet", "cbridge"];
func.dependencies = ["init-facets"];
