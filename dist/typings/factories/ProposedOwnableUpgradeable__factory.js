"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposedOwnableUpgradeable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__onlyOwner_notOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__onlyProposed_notProposedOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__proposeNewOwner_invalidProposal",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__renounceOwnership_invalidProposal",
        type: "error",
    },
    {
        inputs: [],
        name: "ProposedOwnable__renounceOwnership_noProposal",
        type: "error",
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
        name: "delay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proposedTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "renounced",
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
];
class ProposedOwnableUpgradeable__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ProposedOwnableUpgradeable__factory = ProposedOwnableUpgradeable__factory;
ProposedOwnableUpgradeable__factory.abi = _abi;
