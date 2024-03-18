"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceFacet = exports.removeFacet = exports.addFacets = exports.addOrReplaceFacets = exports.FacetCutAction = exports.getSelectors = void 0;
const ethers_1 = require("ethers");
const hardhat_1 = require("hardhat");
function getSelectors(contract) {
    const selectors = contract.interface.fragments.reduce((acc, val) => {
        if (val.type === "function") {
            const sig = contract.interface.getSighash(val);
            acc.push(sig);
            return acc;
        }
        else {
            return acc;
        }
    }, []);
    return selectors;
}
exports.getSelectors = getSelectors;
exports.FacetCutAction = {
    Add: 0,
    Replace: 1,
    Remove: 2,
};
async function addOrReplaceFacets(facets, diamondAddress, initContract = ethers_1.constants.AddressZero, initData = "0x") {
    const loupe = (await hardhat_1.ethers.getContractAt("IDiamondLoupe", diamondAddress));
    const cut = [];
    for (const f of facets) {
        const replaceSelectors = [];
        const addSelectors = [];
        const selectors = getSelectors(f);
        for (const s of selectors) {
            const addr = await loupe.facetAddress(s);
            if (addr === ethers_1.constants.AddressZero) {
                addSelectors.push(s);
                continue;
            }
            if (addr.toLowerCase() !== f.address.toLowerCase()) {
                replaceSelectors.push(s);
            }
        }
        if (replaceSelectors.length) {
            cut.push({
                facetAddress: f.address,
                action: exports.FacetCutAction.Replace,
                functionSelectors: replaceSelectors,
            });
        }
        if (addSelectors.length) {
            cut.push({
                facetAddress: f.address,
                action: exports.FacetCutAction.Add,
                functionSelectors: addSelectors,
            });
        }
    }
    if (!cut.length) {
        console.log("No facets to add or replace.");
        return;
    }
    const cutter = (await hardhat_1.ethers.getContractAt("DiamondCutFacet", diamondAddress));
    console.log("Adding/Replacing facets...");
    const tx = await cutter.diamondCut(cut, initContract, initData, {});
    console.log("Diamond cut tx: ", tx.hash);
    const receipt = await tx.wait();
    if (!receipt.status) {
        throw Error(`Diamond upgrade failed: ${tx.hash}`);
    }
    console.log("Done.");
}
exports.addOrReplaceFacets = addOrReplaceFacets;
async function addFacets(facets, diamondAddress, initContract = ethers_1.constants.AddressZero, initData = "0x") {
    const cut = [];
    for (const f of facets) {
        const selectors = getSelectors(f);
        cut.push({
            facetAddress: f.address,
            action: exports.FacetCutAction.Add,
            functionSelectors: selectors,
        });
    }
    if (!cut.length) {
        console.log("No facets to add or replace.");
        return;
    }
    const cutter = (await hardhat_1.ethers.getContractAt("DiamondCutFacet", diamondAddress));
    console.log("Adding facets...");
    const tx = await cutter.diamondCut(cut, initContract, initData, {});
    console.log("Diamond cut tx: ", tx.hash);
    const receipt = await tx.wait();
    if (!receipt.status) {
        throw Error(`Diamond upgrade failed: ${tx.hash}`);
    }
    console.log("Done.");
}
exports.addFacets = addFacets;
async function removeFacet(selectors, diamondAddress) {
    const cut = [
        {
            facetAddress: ethers_1.constants.AddressZero,
            action: exports.FacetCutAction.Remove,
            functionSelectors: selectors,
        },
    ];
    const cutter = (await hardhat_1.ethers.getContractAt("DiamondCutFacet", diamondAddress));
    console.log("Removing facet...");
    const tx = await cutter.diamondCut(cut, ethers_1.constants.AddressZero, "0x", {});
    console.log("Diamond cut tx: ", tx.hash);
    const receipt = await tx.wait();
    if (!receipt.status) {
        throw Error(`Diamond upgrade failed: ${tx.hash}`);
    }
    console.log("Done.");
}
exports.removeFacet = removeFacet;
async function replaceFacet(facet, diamondAddress, initContract = ethers_1.constants.AddressZero, initData = "0x") {
    const selectors = getSelectors(facet);
    const cut = [
        {
            facetAddress: facet.address,
            action: exports.FacetCutAction.Replace,
            functionSelectors: selectors,
        },
    ];
    const cutter = (await hardhat_1.ethers.getContractAt("DiamondCutFacet", diamondAddress));
    console.log("Replacing facet...");
    const tx = await cutter.diamondCut(cut, initContract, initData, {});
    console.log("Diamond cut tx: ", tx.hash);
    const receipt = await tx.wait();
    if (!receipt.status) {
        throw Error(`Diamond upgrade failed: ${tx.hash}`);
    }
    console.log("Done.");
}
exports.replaceFacet = replaceFacet;
