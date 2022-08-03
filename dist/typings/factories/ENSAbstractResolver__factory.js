"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSAbstractResolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
];
class ENSAbstractResolver__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ENSAbstractResolver__factory = ENSAbstractResolver__factory;
ENSAbstractResolver__factory.abi = _abi;
