"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSPubKeyResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "y",
                type: "bytes32",
            },
        ],
        name: "PubkeyChanged",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__ac93193e",
                type: "bytes8",
            },
        ],
        name: "c_ac93193e",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__e1dc25ce",
                type: "bytes8",
            },
        ],
        name: "c_e1dc25ce",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__ac93193e",
                type: "bytes8",
            },
        ],
        name: "c_falseac93193e",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__e1dc25ce",
                type: "bytes8",
            },
        ],
        name: "c_falsee1dc25ce",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__ac93193e",
                type: "bytes8",
            },
        ],
        name: "c_trueac93193e",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__e1dc25ce",
                type: "bytes8",
            },
        ],
        name: "c_truee1dc25ce",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "pubkey",
        outputs: [
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "y",
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
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32",
            },
        ],
        name: "setPubkey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ENSPubKeyResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ENSPubKeyResolver__factory = ENSPubKeyResolver__factory;
ENSPubKeyResolver__factory.abi = _abi;
