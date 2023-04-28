"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diamond_1 = require("../utils/diamond");
const stargate_1 = __importDefault(require("../config/stargate"));
const func = async function (hre) {
    const { deployments: { deploy, log }, getNamedAccounts, ethers, network, } = hre;
    const { from } = await getNamedAccounts();
    if (!stargate_1.default[network.name]) {
        return log("No stargate config for this network available: " + network.name);
    }
    await deploy("StargateFacet", {
        from,
        log: true,
        deterministicDeployment: true,
    });
    const diamond = await ethers.getContract("Diamond");
    const stargateFacet = await ethers.getContract("StargateFacet");
    const ABI = ["function sgInitialize(address, uint16)"];
    const iface = new hre.ethers.utils.Interface(ABI);
    const initData = iface.encodeFunctionData("sgInitialize", [
        stargate_1.default[network.name].stargateRouter,
        stargate_1.default[network.name].chainId,
    ]);
    await (0, diamond_1.addOrReplaceFacets)([stargateFacet], diamond.address, stargateFacet.address, initData);
};
func.id = "stargate_facet_deploy";
func.tags = ["bridges", "stargate"];
func.dependencies = ["init-facets"];
exports.default = func;
