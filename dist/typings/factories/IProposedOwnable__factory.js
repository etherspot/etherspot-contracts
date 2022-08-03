"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProposedOwnable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "proposedOwner",
                type: "address",
            },
        ],
        name: "OwnershipProposed",
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
        inputs: [],
        name: "acceptProposedOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "owner_",
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
                name: "newlyProposed",
                type: "address",
            },
        ],
        name: "proposeNewOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "proposed",
        outputs: [
            {
                internalType: "address",
                name: "proposed_",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IProposedOwnable__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IProposedOwnable__factory = IProposedOwnable__factory;
IProposedOwnable__factory.abi = _abi;
