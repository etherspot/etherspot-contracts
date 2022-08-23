"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
class Proxy__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Proxy__factory = Proxy__factory;
Proxy__factory.abi = _abi;
