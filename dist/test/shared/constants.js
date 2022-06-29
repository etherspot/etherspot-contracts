"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENS_REVERSED_NAME = exports.ENS_REVERSED_LABEL = exports.ENS_REVERSED_TLD = exports.GAS_PRICE = exports.CHAIN_ID = void 0;
const hardhat_1 = require("hardhat");
_a = hardhat_1.config.networks.hardhat, exports.CHAIN_ID = _a.chainId, exports.GAS_PRICE = _a.gasPrice;
exports.ENS_REVERSED_TLD = 'reverse';
exports.ENS_REVERSED_LABEL = 'addr';
exports.ENS_REVERSED_NAME = `${exports.ENS_REVERSED_LABEL}.${exports.ENS_REVERSED_TLD}`;
