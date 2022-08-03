"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_custom",
                type: "address",
            },
        ],
        name: "enrollCustom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "ensureLocalToken",
        outputs: [
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "getLocalAddress",
        outputs: [
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "getTokenId",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "isLocalOrigin",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "mustHaveLocalToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_oldRepr",
                type: "address",
            },
        ],
        name: "oldReprToCurrentRepr",
        outputs: [
            {
                internalType: "address",
                name: "_currentRepr",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ITokenRegistry__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITokenRegistry__factory = ITokenRegistry__factory;
ITokenRegistry__factory.abi = _abi;
