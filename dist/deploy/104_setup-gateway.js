"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, config: { typedData }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('Gateway', 'isInitialized')) {
        log('Gateway already initialized');
    }
    else {
        const externalAccountRegistry = await get('ExternalAccountRegistry');
        const personalAccountRegistry = await get('PersonalAccountRegistry');
        await execute('Gateway', {
            from,
            log: true,
        }, 'initialize', externalAccountRegistry.address, personalAccountRegistry.address, ethers_1.utils.id(typedData.domains.Gateway.name), ethers_1.utils.id(typedData.domains.Gateway.version), typedData.domainSalt);
    }
};
func.tags = ['setup', 'gateway'];
module.exports = func;
