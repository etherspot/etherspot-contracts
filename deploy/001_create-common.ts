import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async hre => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { from } = await getNamedAccounts();

  await deploy("BalancesHelper", {
    from,
    log: true,
  });

  await deploy("BalancesHelperV2", {
    from,
    log: true,
  });
};

func.tags = ["create", "common", "balanceHelpers"];

module.exports = func;
