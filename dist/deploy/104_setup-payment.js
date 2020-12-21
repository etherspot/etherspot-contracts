"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, config: { typedData }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('PaymentRegistry', 'isInitialized')) {
        log('PaymentRegistry already initialized');
        return;
    }
    const accountOwnerRegistry = await get('AccountOwnerRegistry');
    const accountProofRegistry = await get('AccountProofRegistry');
    const personalAccountRegistry = await get('PersonalAccountRegistry');
    const gateway = await get('Gateway');
    await execute('PaymentRegistry', {
        from,
        log: true,
    }, 'initialize', accountOwnerRegistry.address, accountProofRegistry.address, personalAccountRegistry.address, 0, [], gateway.address, ethers_1.utils.id(typedData.domains.PaymentRegistry.name), ethers_1.utils.id(typedData.domains.PaymentRegistry.version), typedData.domainSalt);
};
func.tags = ['setup', 'payment'];
module.exports = func;
