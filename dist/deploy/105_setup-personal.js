"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('PersonalAccountRegistry', 'isInitialized')) {
        log('PersonalAccountRegistry already initialized');
    }
    else {
        const gateway = await get('Gateway');
        const personalAccountImplementation = await get('PersonalAccountImplementationV1');
        await execute('PersonalAccountRegistry', {
            from,
            log: true,
        }, 'initialize', [], personalAccountImplementation.address, gateway.address);
    }
    if (await read('PersonalAccountImplementationV1', 'isInitialized')) {
        log('PersonalAccountImplementationV1 already initialized');
    }
    else {
        const personalAccountRegistry = await get('PersonalAccountRegistry');
        await execute('PersonalAccountImplementationV1', {
            from,
            log: true,
        }, 'initialize', personalAccountRegistry.address);
    }
};
func.tags = ['setup', 'personal'];
module.exports = func;
