"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const diamond_1 = require("../../utils/diamond");
const shared_1 = require("../shared");
const { getSigners } = hardhat_1.ethers;
describe('Diamond', () => {
    let signers;
    let diamond;
    let diamondCutFacet;
    before(async () => {
        signers = await getSigners();
        diamondCutFacet = await (0, shared_1.deployContract)('DiamondCutFacet');
        diamond = await (0, shared_1.deployContract)('Diamond', [signers[0].address, diamondCutFacet.address]);
    });
    it('should add facets', async () => {
        const facetsToAdd = [
            'DiamondLoupeFacet',
            'OwnershipFacet'
        ];
        const cut = {
            [diamondCutFacet.address]: (0, diamond_1.getSelectors)(diamondCutFacet),
        };
        for (const facet of facetsToAdd) {
            const facetContract = await (0, shared_1.deployContract)(facet);
            cut[facetContract.address] = (0, diamond_1.getSelectors)(facetContract);
            await (0, diamond_1.addFacets)([facetContract], diamond.address);
        }
        const diamondLoupe = await hardhat_1.ethers.getContractAt("DiamondLoupeFacet", diamond.address);
        const facets = await diamondLoupe.facets();
        for (const facet of facets) {
            expect(cut[facet.facetAddress]).toBeDefined();
            expect(facet.functionSelectors).toEqual(cut[facet.facetAddress]);
        }
    });
});
