"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('AccountOwnerRegistry', {
        from,
        log: true,
    });
    await deploy('AccountProofRegistry', {
        from,
        log: true,
    });
};
func.tags = ['create', 'account'];
module.exports = func;
