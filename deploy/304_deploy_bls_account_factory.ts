import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  // Get EntryPoint contract
  const entryPoint = await ethers.getContract("EntryPoint");
  console.log(`EntryPoint contract address: ${entryPoint.address}`);

  // Deploy BLSOpen library
  const blsOpen = await deploy("BLSOpen", {
    from,
    log: true,
    deterministicDeployment: true,
  });
  console.log(`BLSOpen library contract address: ${blsOpen.address}`);

  // Deploy BLSSignatureAggregator
  const blsSigAgg = await deploy("BLSSignatureAggregator", {
    from,
    libraries: {
      BLSOpen: blsOpen.address,
    },
    log: true,
    deterministicDeployment: true,
  });
  console.log(`BLSSignatureAggregator contract address: ${blsSigAgg.address}`);

  // Deploy BLSAccount implementation
  const blsImpl = await deploy("BLSAccount", {
    from,
    args: [entryPoint.address, blsSigAgg.address],
    log: true,
    deterministicDeployment: true,
  });
  console.log(`BLSAccount implementation contract address: ${blsImpl.address}`);

  // Deploy BLSAccountFactory
  const blsFactory = await deploy("BLSAccountFactory", {
    from,
    args: [blsImpl.address],
    log: true,
    deterministicDeployment: true,
  });
  console.log(`BLSAccountFactory contract address: ${blsFactory.address}`);
};

func.tags = ["aa-4337", "bls-account-factory"];

export default func;
