"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypedMemView__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "NULL",
        outputs: [
            {
                internalType: "bytes29",
                name: "",
                type: "bytes29",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60d5610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6052565b6040516049919060af565b60405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000081565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082169050919050565b60a9816076565b82525050565b600060208201905060c2600083018460a2565b9291505056fea164736f6c634300080b000a";
const isSuperArgs = (xs) => xs.length > 1;
class TypedMemView__factory extends ethers_1.ContractFactory {
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
exports.TypedMemView__factory = TypedMemView__factory;
TypedMemView__factory.bytecode = _bytecode;
TypedMemView__factory.abi = _abi;
