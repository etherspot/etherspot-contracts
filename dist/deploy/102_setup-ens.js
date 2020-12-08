"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, ethers: { constants, utils }, network: { name }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    console.log(name);
    if (await read('ENSController', 'isInitialized')) {
        log('ENSController already initialized');
        return;
    }
    const ensController = await get('ENSController');
    const gateway = await get('Gateway');
    let ensRegistry;
    let ensAddress = settings_1.KNOWN_CONTRACT_ADDRESSES.ENSRegistry[name];
    if (!ensAddress) {
        ensRegistry = await get('ENSRegistry');
        ({ address: ensAddress } = ensRegistry);
    }
    await execute('ENSController', {
        from,
        log: true,
    }, 'initialize', ensAddress, [], gateway.address, utils.id(settings_1.TYPED_DATA_DOMAINS.ENSController.name), utils.id(settings_1.TYPED_DATA_DOMAINS.ENSController.version), settings_1.TYPED_DATA_DOMAIN_SALT);
    if (ensRegistry) {
        for (const name of settings_1.ENS_TLD) {
            await execute('ENSRegistry', {
                from,
                log: true,
            }, 'setSubnodeOwner', constants.HashZero, utils.id(name), from);
            await execute('ENSRegistry', {
                from,
                log: true,
            }, 'setOwner', utils.namehash(name), ensController.address);
            await execute('ENSController', {
                from,
                log: true,
            }, 'addNode', utils.namehash(name));
        }
    }
};
func.tags = ['setup', 'ens'];
func.runAtTheEnd = true;
module.exports = func;
