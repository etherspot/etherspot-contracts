import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
    ethers,
  } = hre;
  const { from } = await getNamedAccounts();

  const diamondCutFacet = await ethers.getContract("DiamondCutFacet");

  await deploy("Diamond", {
    from,
    args: [from, diamondCutFacet.address],
    log: true,
    deterministicDeployment: true,
  });
};

func.tags = ["bridges", "diamond"];

export default func;
