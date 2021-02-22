"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('PaymentRegistry', {
        from,
        log: true,
    });
};
func.tags = ['create', 'payments'];
module.exports = func;
