"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDiamondLoupe__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_functionSelector",
                type: "bytes4",
            },
        ],
        name: "facetAddress",
        outputs: [
            {
                internalType: "address",
                name: "facetAddress_",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "facetAddresses",
        outputs: [
            {
                internalType: "address[]",
                name: "facetAddresses_",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_facet",
                type: "address",
            },
        ],
        name: "facetFunctionSelectors",
        outputs: [
            {
                internalType: "bytes4[]",
                name: "facetFunctionSelectors_",
                type: "bytes4[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "facets",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "facetAddress",
                        type: "address",
                    },
                    {
                        internalType: "bytes4[]",
                        name: "functionSelectors",
                        type: "bytes4[]",
                    },
                ],
                internalType: "struct IDiamondLoupe.Facet[]",
                name: "facets_",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IDiamondLoupe__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDiamondLoupe__factory = IDiamondLoupe__factory;
IDiamondLoupe__factory.abi = _abi;
