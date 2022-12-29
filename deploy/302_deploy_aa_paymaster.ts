import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
    ethers,
  } = hre;
  const { from } = await getNamedAccounts();

  // Get EntryPoint contract
  const entryPoint = await ethers.getContract("EntryPoint");
  console.log(`EntryPoint contract address: ${entryPoint.address}`);

  await deploy("DepositPaymaster", {
    from,
    args: [entryPoint.address],
    log: true,
    deterministicDeployment: true,
  });

  // Get DepositPaymaster contract address for Etherscan verification
  const depositPaymaster = await ethers.getContract("DepositPaymaster");

  console.log(`DepositPaymaster deployed to: ${depositPaymaster.address}`);
};

func.tags = ["aa-4337", "deposit-paymaster"];

export default func;
