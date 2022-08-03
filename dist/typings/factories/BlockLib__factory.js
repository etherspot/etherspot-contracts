"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockLib__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__69b78653",
                type: "bytes8",
            },
        ],
        name: "c_69b78653",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__69b78653",
                type: "bytes8",
            },
        ],
        name: "c_false69b78653",
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
                name: "c__69b78653",
                type: "bytes8",
            },
        ],
        name: "c_true69b78653",
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
const _bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806391e6a20314610050578063a7a41f0f146100af578063c70d6afe1461010e575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610162565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610169565b005b600060019050919050565b6000919050565b5056fea164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class BlockLib__factory extends ethers_1.ContractFactory {
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
exports.BlockLib__factory = BlockLib__factory;
BlockLib__factory.bytecode = _bytecode;
BlockLib__factory.abi = _abi;
