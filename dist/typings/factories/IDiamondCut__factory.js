"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDiamondCut__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "facetAddress",
                        type: "address",
                    },
                    {
                        internalType: "enum IDiamondCut.FacetCutAction",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes4[]",
                        name: "functionSelectors",
                        type: "bytes4[]",
                    },
                ],
                indexed: false,
                internalType: "struct IDiamondCut.FacetCut[]",
                name: "_diamondCut",
                type: "tuple[]",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_init",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_calldata",
                type: "bytes",
            },
        ],
        name: "DiamondCut",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "facetAddress",
                        type: "address",
                    },
                    {
                        internalType: "enum IDiamondCut.FacetCutAction",
                        name: "action",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes4[]",
                        name: "functionSelectors",
                        type: "bytes4[]",
                    },
                ],
                internalType: "struct IDiamondCut.FacetCut[]",
                name: "_diamondCut",
                type: "tuple[]",
            },
            {
                internalType: "address",
                name: "_init",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_calldata",
                type: "bytes",
            },
        ],
        name: "diamondCut",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IDiamondCut__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IDiamondCut__factory = IDiamondCut__factory;
IDiamondCut__factory.abi = _abi;
