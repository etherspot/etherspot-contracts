"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("hardhat-typechain");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
const expect = require("expect");
const config_1 = require("hardhat/config");
config_1.extendEnvironment((env) => {
    env.expect = expect;
});
