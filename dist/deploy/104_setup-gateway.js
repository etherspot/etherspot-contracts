"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, getNamedAccounts, } = hre;
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
        }, 'initialize', externalAccountRegistry.address, personalAccountRegistry.address);
    }
};
func.tags = ['setup', 'gateway'];
module.exports = func;
