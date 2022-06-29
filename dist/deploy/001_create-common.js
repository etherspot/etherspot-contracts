"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy("BalancesHelper", {
        from,
        log: true,
    });
    await deploy("BalancesHelperV2", {
        from,
        log: true,
    });
};
func.tags = ["create", "common"];
module.exports = func;
