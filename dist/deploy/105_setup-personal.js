"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('PersonalAccountRegistry', 'isInitialized')) {
        log('PersonalAccountRegistry already initialized');
        return;
    }
    const gateway = await get('Gateway');
    await execute('PersonalAccountRegistry', {
        from,
        log: true,
    }, 'initialize', gateway.address);
};
func.tags = ['setup', 'personal'];
module.exports = func;
