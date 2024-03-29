"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplificationUtils__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldA",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newA",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "initialTime",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "futureTime",
                type: "uint256",
            },
        ],
        name: "RampA",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "currentA",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "StopRampA",
        type: "event",
    },
    {
        inputs: [],
        name: "A_PRECISION",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_A",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60bf610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806339698415146042578063d011f91814605c575b600080fd5b60486076565b604051605391906099565b60405180910390f35b6062607d565b604051606d91906099565b60405180910390f35b620f424081565b606481565b6000819050919050565b6093816082565b82525050565b600060208201905060ac6000830184608c565b9291505056fea164736f6c634300080f000a";
const isSuperArgs = (xs) => xs.length > 1;
class AmplificationUtils__factory extends ethers_1.ContractFactory {
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
exports.AmplificationUtils__factory = AmplificationUtils__factory;
AmplificationUtils__factory.bytecode = _bytecode;
AmplificationUtils__factory.abi = _abi;
