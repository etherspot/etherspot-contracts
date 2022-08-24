"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnextConfig = void 0;
const constants_1 = require("../extensions/constants");
exports.ConnextConfig = {
    [constants_1.NetworkNames.Rinkeby]: {
        domainId: 1111,
        handler: "0x4cAA6358a3d9d1906B5DABDE60A626AAfD80186F",
    },
    [constants_1.NetworkNames.Goerli]: {
        domainId: 3331,
        handler: "0x6c9a905Ab3f4495E2b47f5cA131ab71281E0546e",
    },
    'hardhat': {
        domainId: 3331,
        handler: "0x6c9a905Ab3f4495E2b47f5cA131ab71281E0546e",
    },
};
