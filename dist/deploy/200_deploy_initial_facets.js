"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = async function (hre) {
    const { deployments: { deploy }, getNamedAccounts, } = hre;
    const { from } = await getNamedAccounts();
    await deploy('DiamondCutFacet', {
        from,
        log: true,
    });
    await deploy('DiamondLoupeFacet', {
        from,
        log: true,
    });
    await deploy('OwnershipFacet', {
        from,
        log: true,
    });
};
func.tags = ['bridges', 'initial-facets'];
exports.default = func;
