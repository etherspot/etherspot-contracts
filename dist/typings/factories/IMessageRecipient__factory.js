"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMessageRecipient__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_origin",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_nonce",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_sender",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_message",
                type: "bytes",
            },
        ],
        name: "handle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IMessageRecipient__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IMessageRecipient__factory = IMessageRecipient__factory;
IMessageRecipient__factory.abi = _abi;
