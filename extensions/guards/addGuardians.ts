import { task } from "hardhat/config";
import { GatewayV2 } from "typings/GatewayV2";
import { fetchJson } from "ethers/lib/utils";

/**
 * USAGE
 * npx hardhat add-guards --network [network] (--env [testnet|mainnet]) (--estimator estimator address)
 * --env is optional, testnet by default
 * --estimator is optional
 * 
 * Example:
 * npx hardhat add-guards --network goerli --env testnet --estimator 0x0408ff3B0A2cE1a0D5c25a0D4a387332f814Bd72
 */

interface IRelayer {
  address: string;
}

enum EtherspotEnv {
  testnet = "testnet",
  mainnet = "mainnet",
}

interface TaskArgs {
  env: EtherspotEnv;
  estimator: string;
}

const EtherspotEnvUrls = {
  [EtherspotEnv.testnet]: "https://qa-etherspot.pillarproject.io",
  [EtherspotEnv.mainnet]: "https://etherspot.pillarproject.io",
};

const TASK_ADD_GUARDS = "add-guards";

task(TASK_ADD_GUARDS, "Add gw2 guardians")
  .addParam("env", "Environment", EtherspotEnv.testnet)
  .addOptionalParam("estimator", "Estimator adderss for the chain")
  .setAction(async (args: TaskArgs, hre) => {
    if (!EtherspotEnvUrls[args.env]) {
      return console.error('Invalid env');
    }
    if (args.estimator && !hre.ethers.utils.isAddress(args.estimator)) {
      return console.error('Invalid estimator');
    }

    const { network, ethers } = hre;
    const gw2: GatewayV2 = await ethers.getContract("GatewayV2");

    const relayers: IRelayer[] = await fetchJson(
      EtherspotEnvUrls[args.env],
      JSON.stringify({
        operationName: null,
        variables: {},
        query: `{
        gatewaySenders(chainId: ${network.config.chainId}) {
          items {
            address,
          }
        }
      }`,
      }),
    ).then(({ data }: any) => {
      return data?.gatewaySenders?.items;
    });

    if (!relayers || !relayers.length) {
      console.log("Relayers are empty");
      return;
    }
    if (args.estimator) {
      relayers.push({
        address: args.estimator,
      });
    }

    for (const relayer of relayers) {
      const isGuardian = await gw2.isGuardian(relayer.address);
      console.log(
        `Relayer ${relayer.address} ${isGuardian ? "is" : "is not"} a guardian`,
      );

      if (!isGuardian) {
        try {
          console.log(`Adding a guardian...`);
          const tx = await gw2.addGuardian(relayer.address);
          console.log(`Waiting for the tx to settle`);
          await tx.wait();
          const isGuardian = await gw2.isGuardian(relayer.address);
          console.log(
            `Relayer ${relayer.address} ${
              isGuardian ? "is" : "is not"
            } a guardian`,
          );
        } catch (err) {
          console.log("Tx failed", err);
          return;
        }
      }
    }
  });
