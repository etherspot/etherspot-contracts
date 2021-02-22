"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const func = async (hre) => {
    var _a;
    const { deployments: { get, log, execute, read }, network: { name }, config: { typedData, ens, knownContracts }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    const ensController = await get('ENSController');
    const gateway = await get('Gateway');
    let ensRegistryAddress = (_a = knownContracts === null || knownContracts === void 0 ? void 0 : knownContracts[name]) === null || _a === void 0 ? void 0 : _a.ENSRegistry;
    let ensRegistry;
    if (!ensRegistryAddress) {
        ensRegistry = await get('ENSRegistry');
        ({ address: ensRegistryAddress } = ensRegistry);
    }
    if (await read('ENSController', 'isInitialized')) {
        log('ENSController already initialized');
    }
    else {
        await execute('ENSController', {
            from,
            log: true,
        }, 'initialize', ensRegistryAddress, [], gateway.address, ethers_1.utils.id(typedData.domains.ENSController.name), ethers_1.utils.id(typedData.domains.ENSController.version), typedData.domainSalt);
    }
    if (ensRegistry && ens && Array.isArray(ens.internalTopLevelDomains)) {
        for (const name of ens.internalTopLevelDomains) {
            const nameHash = ethers_1.utils.namehash(name);
            const labelHash = ethers_1.utils.id(name);
            let ensOwner = await read('ENSRegistry', 'owner', nameHash);
            if (ensOwner === ethers_1.constants.AddressZero) {
                await execute('ENSRegistry', {
                    from,
                    log: true,
                }, 'setSubnodeOwner', ethers_1.constants.HashZero, labelHash, from);
            }
            const { nodeAddr, nodeOwner, } = await read('ENSController', 'getNode', nameHash);
            if (nodeOwner === ethers_1.constants.AddressZero) {
                await execute('ENSController', {
                    from,
                    log: true,
                }, 'submitNode', nameHash);
            }
            ensOwner = await read('ENSRegistry', 'owner', nameHash);
            if (ensOwner === from) {
                await execute('ENSRegistry', {
                    from,
                    log: true,
                }, 'setOwner', nameHash, ensController.address);
            }
            if (nodeAddr === ethers_1.constants.AddressZero) {
                await execute('ENSController', {
                    from,
                    log: true,
                }, 'verifyNode', nameHash);
            }
        }
    }
};
func.tags = ['setup', 'ens'];
module.exports = func;
