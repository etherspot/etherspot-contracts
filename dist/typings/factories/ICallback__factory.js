"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICallback__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "callback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ICallback__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICallback__factory = ICallback__factory;
ICallback__factory.abi = _abi;
