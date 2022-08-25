"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopConfig = void 0;
const constants_1 = require("../extensions/constants");
const L1 = [
    constants_1.NetworkNames.Rinkeby,
    constants_1.NetworkNames.Goerli,
    constants_1.NetworkNames.Kovan,
];
const L2 = [
    constants_1.NetworkNames.Xdai,
    constants_1.NetworkNames.Optimism,
    constants_1.NetworkNames.Arbitrum,
    constants_1.NetworkNames.Matic,
    constants_1.NetworkNames.Mumbai,
];
exports.HopConfig = Object.values(constants_1.NetworkNames).reduce((obj, name) => {
    if (L1.some(n => n === name)) {
        obj[name] = 1;
    }
    else if (L2.some(n => n === name)) {
        obj[name] = 2;
    }
    return obj;
}, {});
exports.HopConfig['hardhat'] = 1;
