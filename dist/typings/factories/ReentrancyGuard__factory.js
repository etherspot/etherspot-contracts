"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReentrancyGuard__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "ReentrancyError",
        type: "error",
    },
];
class ReentrancyGuard__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReentrancyGuard__factory = ReentrancyGuard__factory;
ReentrancyGuard__factory.abi = _abi;
