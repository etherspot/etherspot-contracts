"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('BalanceChecker', {
        from,
        log: true,
    });
};
func.tags = ['create', 'utils'];
module.exports = func;
