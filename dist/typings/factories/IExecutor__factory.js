"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IExecutor__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "recovery",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "assetId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_properties",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "callData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "returnData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        name: "Executed",
        type: "event",
    },
    {
        inputs: [],
        name: "amount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "transferId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recovery",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "assetId",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "properties",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct IExecutor.ExecutorArgs",
                name: "_args",
                type: "tuple",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bool",
                name: "success",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "returnData",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getConnext",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "origin",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "originSender",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IExecutor__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IExecutor__factory = IExecutor__factory;
IExecutor__factory.abi = _abi;
