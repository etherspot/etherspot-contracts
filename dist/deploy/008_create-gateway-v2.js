"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async (hre) => {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('GatewayV2', {
        from,
        log: true,
    });
};
func.tags = ['create', 'gateway-v2'];
module.exports = func;
