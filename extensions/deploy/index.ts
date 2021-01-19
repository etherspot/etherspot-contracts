import { extendEnvironment } from 'hardhat/config';
import { DeployResult } from 'hardhat-deploy/types';

extendEnvironment(hre => {
  const {
    config: { create2Salts },
    deployments,
  } = hre;

  const { deploy, deterministic } = deployments;

  deployments.deploy = async (name, options) => {
    let result: DeployResult;

    const salt = create2Salts[name];

    if (salt) {
      const { deploy } = await deterministic(name, {
        ...options,
        salt,
      });

      result = await deploy();
    } else {
      result = await deploy(name, options);
    }

    return result;
  };
});
