import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async hre => {
  
  const {
    // deployments: { deploy },
    getNamedAccounts,
    ethers,

  } = hre;

  const feeData = await ethers.provider.getFeeData();
  const { from } = await getNamedAccounts();

  const Contract = await ethers.getContractFactory("BalancesHelper");
  await Contract.deploy({
    // from,
    type: 2,
    maxFeePerGas: feeData.maxFeePerGas,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
  })

  // await deploy("BalancesHelper", {
  //   from,
  //   log: true,
  //   maxFeePerGas: feeData.maxFeePerGas,
  //   maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
  // });

  // await deploy("BalancesHelperV2", {
  //   from,
  //   log: true,
  //   maxFeePerGas: feeData.maxFeePerGas,
  //   maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
  // });
};

func.tags = ["create", "common"];

module.exports = func;
