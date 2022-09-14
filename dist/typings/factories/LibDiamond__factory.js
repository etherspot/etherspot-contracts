"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibDiamond__factory = void 0;
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
];
const _bytecode = "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a";
const isSuperArgs = (xs) => xs.length > 1;
class LibDiamond__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.LibDiamond__factory = LibDiamond__factory;
LibDiamond__factory.bytecode = _bytecode;
LibDiamond__factory.abi = _abi;
