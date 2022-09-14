"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_relayRequest",
                type: "bytes",
            },
            {
                internalType: "bytes[]",
                name: "_sigs",
                type: "bytes[]",
            },
            {
                internalType: "address[]",
                name: "_signers",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "_powers",
                type: "uint256[]",
            },
        ],
        name: "relay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_dstChinId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "_maxSlippage",
                type: "uint32",
            },
        ],
        name: "send",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "_dstChinId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "_maxSlippage",
                type: "uint32",
            },
        ],
        name: "sendNative",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class ICBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICBridge__factory = ICBridge__factory;
ICBridge__factory.abi = _abi;
