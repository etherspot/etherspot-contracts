"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBase__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "registry",
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
];
const _bytecode = "0x6080604052348015600f57600080fd5b5060908061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637b10399914602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class AccountBase__factory extends ethers_1.ContractFactory {
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
exports.AccountBase__factory = AccountBase__factory;
AccountBase__factory.bytecode = _bytecode;
AccountBase__factory.abi = _abi;
