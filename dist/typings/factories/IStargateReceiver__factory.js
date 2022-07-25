"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStargateReceiver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "_nonce",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountLD",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
            },
        ],
        name: "sgReceive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IStargateReceiver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStargateReceiver__factory = IStargateReceiver__factory;
IStargateReceiver__factory.abi = _abi;
