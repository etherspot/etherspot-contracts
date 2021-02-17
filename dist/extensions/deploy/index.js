"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
config_1.extendEnvironment(hre => {
    const { config: { create2Salts }, deployments, } = hre;
    const { deploy, deterministic } = deployments;
    deployments.deploy = async (name, options) => {
        let result;
        const salt = create2Salts[name] || create2Salts['default'];
        if (salt) {
            const { deploy } = await deterministic(name, Object.assign(Object.assign({}, options), { salt }));
            result = await deploy();
        }
        else {
            result = await deploy(name, options);
        }
        return result;
    };
});
