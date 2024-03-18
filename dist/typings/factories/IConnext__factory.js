"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConnext__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_destination",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_delegate",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_slippage",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_callData",
                type: "bytes",
            },
        ],
        name: "xcall",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class IConnext__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IConnext__factory = IConnext__factory;
IConnext__factory.abi = _abi;
