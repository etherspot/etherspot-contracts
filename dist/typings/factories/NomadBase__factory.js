"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomadBase__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "oldRoot",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32[2]",
                name: "newRoot",
                type: "bytes32[2]",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "signature2",
                type: "bytes",
            },
        ],
        name: "DoubleUpdate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldUpdater",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newUpdater",
                type: "address",
            },
        ],
        name: "NewUpdater",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "homeDomain",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "oldRoot",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newRoot",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "Update",
        type: "event",
    },
    {
        inputs: [],
        name: "committedRoot",
        outputs: [
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
                internalType: "bytes32",
                name: "_oldRoot",
                type: "bytes32",
            },
            {
                internalType: "bytes32[2]",
                name: "_newRoot",
                type: "bytes32[2]",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "_signature2",
                type: "bytes",
            },
        ],
        name: "doubleUpdate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "homeDomainHash",
        outputs: [
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
        inputs: [],
        name: "localDomain",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "state",
        outputs: [
            {
                internalType: "enum NomadBase.States",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updater",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class NomadBase__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NomadBase__factory = NomadBase__factory;
NomadBase__factory.abi = _abi;
