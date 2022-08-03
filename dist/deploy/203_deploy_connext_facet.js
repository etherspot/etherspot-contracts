"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diamond_1 = require("../utils/diamond");
const connext_1 = require("../config/connext");
const func = async function (hre) {
    const { deployments: { deploy }, getNamedAccounts, ethers, network } = hre;
    const { from } = await getNamedAccounts();
    if (!connext_1.ConnextConfig[network.name]) {
        throw new Error("No connext config for this network available: " + network.name);
    }
    await deploy('ConnextFacet', {
        from,
        log: true,
    });
    const diamond = await ethers.getContract('Diamond');
    const connextFacet = await ethers.getContract("ConnextFacet");
    const ABI = ['function initConnext(address, uint32)'];
    const iface = new hre.ethers.utils.Interface(ABI);
    const initData = iface.encodeFunctionData('initConnext', [
        connext_1.ConnextConfig[network.name].handler,
        connext_1.ConnextConfig[network.name].domainId
    ]);
    await (0, diamond_1.addOrReplaceFacets)([connextFacet], diamond.address, connextFacet.address, initData);
};
func.tags = ['bridges', 'connext'];
func.dependencies = ['init-facets'];
exports.default = func;
