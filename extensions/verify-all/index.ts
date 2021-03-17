import { task } from 'hardhat/config';
import { NetworkNames } from '../constants';

const TASK_VERIFY = 'verify';
const TASK_VERIFY_ALL = 'verify-all';

task(TASK_VERIFY_ALL, 'Verify all contracts').setAction(async (args, hre) => {
  const {
    run,
    network: { name: networkName },
    deployments,
  } = hre;

  const contracts = await deployments.all();
  const entries = Object.entries(contracts);

  switch (networkName) {
    // etherscan
    case NetworkNames.Mainnet:
    case NetworkNames.Ropsten:
    case NetworkNames.Rinkeby:
    case NetworkNames.Goerli:
    case NetworkNames.Kovan: {
      for (const [name, { address }] of entries) {
        const verifyArgs: {
          contract?: string;
          address: string;
          constructorArgsParams: any[];
        } = {
          address,
          constructorArgsParams: [],
        };

        if (name === 'PersonalAccountImplementationV1') {
          verifyArgs.contract =
            'src/personal/PersonalAccountImplementationV1.sol:PersonalAccountImplementationV1';
        }

        try {
          await run(TASK_VERIFY, verifyArgs);
        } catch (err) {
          console.warn(`${name} verification error:`, err.toString());
        }
      }
      break;
    }
  }
});
