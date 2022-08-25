"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diamond_1 = require("../utils/diamond");
const hop_1 = require("../config/hop");
const func = async function (hre) {
    const { deployments: { deploy, log }, getNamedAccounts, ethers, network } = hre;
    const { from } = await getNamedAccounts();
    if (!hop_1.HopConfig[network.name]) {
        return log("No Hop config for this network available: " + network.name);
    }
    await deploy('HopFacet', {
        from,
        log: true,
    });
    const diamond = await ethers.getContract('Diamond');
    const hopFacet = await ethers.getContract("HopFacet");
    const ABI = ['function initHop(uint256)'];
    const iface = new hre.ethers.utils.Interface(ABI);
    const initData = iface.encodeFunctionData('initHop', [
        hop_1.HopConfig[network.name]
    ]);
    await (0, diamond_1.addOrReplaceFacets)([hopFacet], diamond.address, hopFacet.address, initData);
};
func.tags = ['bridges', 'hop'];
func.dependencies = ['init-facets'];
exports.default = func;
