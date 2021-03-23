"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const constants_1 = require("../constants");
const TASK_VERIFY = 'verify';
const TASK_VERIFY_ALL = 'verify-all';
config_1.task(TASK_VERIFY_ALL, 'Verify all contracts').setAction(async (args, hre) => {
    const { run, network: { name: networkName }, deployments, } = hre;
    const contracts = await deployments.all();
    const entries = Object.entries(contracts);
    switch (networkName) {
        case constants_1.NetworkNames.Mainnet:
        case constants_1.NetworkNames.Ropsten:
        case constants_1.NetworkNames.Rinkeby:
        case constants_1.NetworkNames.Goerli:
        case constants_1.NetworkNames.Kovan: {
            for (const [name, { address }] of entries) {
                const verifyArgs = {
                    address,
                    constructorArgsParams: [],
                };
                if (name === 'PersonalAccountImplementationV1') {
                    verifyArgs.contract =
                        'src/personal/PersonalAccountImplementationV1.sol:PersonalAccountImplementationV1';
                }
                try {
                    await run(TASK_VERIFY, verifyArgs);
                }
                catch (err) {
                    console.warn(`${name} verification error:`, err.toString());
                }
            }
            break;
        }
    }
});
