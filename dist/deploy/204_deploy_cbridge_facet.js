"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const hardhat_1 = require("hardhat");
const diamond_1 = require("../utils/diamond");
const cBridge_1 = require("../config/cBridge");
const func = async function (hre) {
    const { deployments: { deploy, log }, getNamedAccounts, ethers, } = hre;
    const { from } = await getNamedAccounts();
    if (!cBridge_1.CBridgeConfig[hardhat_1.network.name]) {
        return log("No cbridge config for this network available: " + hardhat_1.network.name);
    }
    let bridgeAddr = "0xc578cbaf5a411dfa9f0d227f97dadaa4074ad062";
    await deploy("CBridgeFacet", {
        from,
        log: true,
        deterministicDeployment: true,
    });
    const cBridgeFacet = await ethers.getContract("CBridgeFacet");
    const diamond = await ethers.getContract("Diamond");
    const ABI = ["function cbInitialize(address)"];
    const iface = new ethers_1.utils.Interface(ABI);
    if (cBridge_1.CBridgeConfig[hardhat_1.network.name].cBridge != "") {
        bridgeAddr = cBridge_1.CBridgeConfig[hardhat_1.network.name].cBridge;
    }
    const initData = iface.encodeFunctionData("cbInitialize", [bridgeAddr]);
    await (0, diamond_1.addOrReplaceFacets)([cBridgeFacet], diamond.address, cBridgeFacet.address, initData);
};
exports.default = func;
func.id = "cbridge_facet_deploy";
func.tags = ["bridges", "cbridge"];
func.dependencies = ["init-facets"];
