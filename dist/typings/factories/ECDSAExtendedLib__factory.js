"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECDSAExtendedLib__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__02b1372d",
                type: "bytes8",
            },
        ],
        name: "c_02b1372d",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__02b1372d",
                type: "bytes8",
            },
        ],
        name: "c_false02b1372d",
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
                name: "c__02b1372d",
                type: "bytes8",
            },
        ],
        name: "c_true02b1372d",
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
const _bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80637a91f84e146100505780639e17a67c14610099578063f2db2a06146100f8575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b005b6100e0600480360360208110156100af57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015a565b60405180821515815260200191505060405180910390f35b61013f6004803603602081101561010e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610165565b60405180821515815260200191505060405180910390f35b50565b600060019050919050565b600091905056fea164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ECDSAExtendedLib__factory extends ethers_1.ContractFactory {
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
exports.ECDSAExtendedLib__factory = ECDSAExtendedLib__factory;
ECDSAExtendedLib__factory.bytecode = _bytecode;
ECDSAExtendedLib__factory.abi = _abi;
