import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  // get EntryPoint contract
  const entryPoint = await ethers.getContract("EntryPoint");

  await deploy("EtherspotAccountFactory", {
    from,
    args: [entryPoint.address],
    log: true,
    deterministicDeployment: true,
  });
};

func.tags = ["aa-4337", "etherspot-account-factory"];

export default func;
