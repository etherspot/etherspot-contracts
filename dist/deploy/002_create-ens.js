"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    var _a;
    const { deployments: { deploy }, network: { name }, config: { knownContracts }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    const ensRegistryAddress = (_a = knownContracts === null || knownContracts === void 0 ? void 0 : knownContracts[name]) === null || _a === void 0 ? void 0 : _a.ENSRegistry;
    await deploy('ENSController', {
        from,
        log: true,
    });
    await deploy('ENSHelper', {
        from,
        log: true,
    });
    if (!ensRegistryAddress) {
        await deploy('ENSRegistry', {
            from,
            log: true,
        });
        await deploy('ENSReverseRegistrar', {
            from,
            log: true,
        });
    }
};
func.tags = ['create', 'ens'];
module.exports = func;
