"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async function (hre) {
    const { deployments: { deploy }, getNamedAccounts, ethers, } = hre;
    const { from } = await getNamedAccounts();
    const diamondCutFacet = await ethers.getContract('DiamondCutFacet');
    await deploy('Diamond', {
        from,
        args: [from, diamondCutFacet.address],
        log: true,
        deterministicDeployment: true,
    });
};
func.tags = ['bridges', 'diamond'];
exports.default = func;
