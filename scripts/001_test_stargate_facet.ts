import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { addOrReplaceFacets } from "../utils/diamond";
import config from "../config/stargate";
import { ChainIdConfigStruct } from "typings/StargateFacet";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, log },
    getNamedAccounts,
    ethers,
    network,
  } = hre;
  const { from } = await getNamedAccounts();

  if (!config[network.name]) {
    return log(
      "No stargate config for this network available: " + network.name,
    );
  }

  const chainIdConfigs: ChainIdConfigStruct[] = [];
  for (const networkName in config) {
    if (config.hasOwnProperty(networkName)) {
      const networkConfig = config[networkName];
      const { chainId, lzChainId } = networkConfig;

      const chainIds: ChainIdConfigStruct = {
        chainId,
        layerZeroChainId: lzChainId,
      };

      chainIdConfigs.push(chainIds);
    }
  }

  await deploy("StargateFacet", {
    from,
    log: true,
    deterministicDeployment: true,
  });

  const diamond = await ethers.getContract("Diamond");
  const stargateFacet = await ethers.getContract("StargateFacet");

  const ABI = [
    "function initStargate(address, address, uint16, ChainIdConfig[])",
  ];
  const iface = new hre.ethers.utils.Interface(ABI);

  const initData = iface.encodeFunctionData("initStargate", [
    config[network.name].stargateRouter,
    config[network.name].stargateETHRouter,
    config[network.name].chainId,
    chainIdConfigs,
  ]);

  await addOrReplaceFacets(
    [stargateFacet],
    diamond.address,
    stargateFacet.address,
    initData,
  );

  await hre.run("verify:verify", {
    address: stargateFacet.address,
    contract: "src/bridges/facets/StargateFacet.sol",
    constructorArguments: [],
  });
};
func.id = "stargate_facet_deploy";
func.tags = ["bridges", "stargate"];
func.dependencies = ["init-facets"];

export default func;
