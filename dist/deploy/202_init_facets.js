"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const diamond_1 = require("../utils/diamond");
const func = async function () {
    const diamondLoupeFacet = await hardhat_1.ethers.getContract('DiamondLoupeFacet');
    const ownershipFacet = await hardhat_1.ethers.getContract('OwnershipFacet');
    const diamond = await hardhat_1.ethers.getContract('Diamond');
    const loupe = await hardhat_1.ethers.getContractAt('IDiamondLoupe', diamond.address);
    try {
        await loupe.facets();
    }
    catch (e) {
        await (0, diamond_1.addFacets)([diamondLoupeFacet], diamond.address);
    }
    await (0, diamond_1.addOrReplaceFacets)([diamondLoupeFacet, ownershipFacet], diamond.address);
};
func.tags = ['bridges', 'init-facets'];
func.dependencies = ['initial-facets', 'diamond'];
exports.default = func;
