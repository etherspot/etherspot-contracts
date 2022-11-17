"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('GatewayV2', 'isInitialized')) {
        log('GatewayV2 already initialized');
    }
    else {
        const externalAccountRegistry = await get('ExternalAccountRegistry');
        const personalAccountRegistry = await get('PersonalAccountRegistry');
        await execute('GatewayV2', {
            from,
            log: true,
        }, 'initialize', externalAccountRegistry.address, personalAccountRegistry.address);
    }
};
func.tags = ['setup', 'gateway-v2'];
module.exports = func;
