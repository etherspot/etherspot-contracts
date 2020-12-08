"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("../settings");
const func = async (hre) => {
    const { deployments: { deploy }, network: { name }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('ENSController', {
        from,
        log: true,
    });
    if (!settings_1.KNOWN_CONTRACT_ADDRESSES.ENSRegistry[name]) {
        await deploy('ENSRegistry', {
            from,
            log: true,
        });
    }
};
func.tags = ['create', 'ens'];
module.exports = func;
