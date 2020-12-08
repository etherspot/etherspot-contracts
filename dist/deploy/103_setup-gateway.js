"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, ethers: { utils }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('Gateway', 'isInitialized')) {
        log('Gateway already initialized');
        return;
    }
    const accountOwnerRegistry = await get('AccountOwnerRegistry');
    const personalAccountRegistry = await get('PersonalAccountRegistry');
    await execute('Gateway', {
        from,
        log: true,
    }, 'initialize', accountOwnerRegistry.address, personalAccountRegistry.address, utils.id(settings_1.TYPED_DATA_DOMAINS.Gateway.name), utils.id(settings_1.TYPED_DATA_DOMAINS.Gateway.version), settings_1.TYPED_DATA_DOMAIN_SALT);
};
func.tags = ['setup', 'gateway'];
func.runAtTheEnd = true;
module.exports = func;
