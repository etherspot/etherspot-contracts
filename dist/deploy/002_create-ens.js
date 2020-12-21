"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    var _a, _b;
    const { deployments: { deploy }, network: { name }, config, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    const ensRegistryAddress = (_b = (_a = config === null || config === void 0 ? void 0 : config.knownContracts) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b.ENSRegistry;
    await deploy('ENSController', {
        from,
        log: true,
    });
    if (!ensRegistryAddress) {
        await deploy('ENSRegistry', {
            from,
            log: true,
        });
    }
};
func.tags = ['create', 'ens'];
module.exports = func;
