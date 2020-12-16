"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { get, log, execute, read }, ethers: { constants, utils }, network: { name }, config: { knownContracts, typedData, ens }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    if (await read('ENSController', 'isInitialized')) {
        log('ENSController already initialized');
        return;
    }
    const ensController = await get('ENSController');
    const gateway = await get('Gateway');
    let ensRegistry;
    let ensAddress = knownContracts[name].ENSRegistry;
    if (!ensAddress) {
        ensRegistry = await get('ENSRegistry');
        ({ address: ensAddress } = ensRegistry);
    }
    await execute('ENSController', {
        from,
        log: true,
    }, 'initialize', ensAddress, [], gateway.address, utils.id(typedData.domains.ENSController.name), utils.id(typedData.domains.ENSController.version), typedData.domainSalt);
    if (ensRegistry) {
        for (const name of ens.internalTopLevelDomains) {
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
module.exports = func;
