"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBase__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__305923d6",
                type: "bytes8",
            },
        ],
        name: "c_305923d6",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__305923d6",
                type: "bytes8",
            },
        ],
        name: "c_false305923d6",
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
                name: "c__305923d6",
                type: "bytes8",
            },
        ],
        name: "c_true305923d6",
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
const _bytecode = "0x608060405234801561001057600080fd5b506101d2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806334d23875146100515780637b103999146100b05780638f27e6b6146100e4578063b49762a11461012d575b600080fd5b6100986004803603602081101561006757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061018c565b60405180821515815260200191505060405180910390f35b6100b8610197565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012b600480360360208110156100fa57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506101bb565b005b6101746004803603602081101561014357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506101be565b60405180821515815260200191505060405180910390f35b600060019050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600091905056fea164736f6c634300060c000a";
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
