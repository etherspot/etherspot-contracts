"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_item",
                type: "bytes32",
            },
        ],
        name: "queueContains",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queueEnd",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "queueLength",
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
const _bytecode = "0x608060405234801561001057600080fd5b506104a1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632bef289214610046578063ab91c7b014610076578063f6d1610214610094575b600080fd5b610060600480360381019061005b91906102c6565b6100b2565b60405161006d919061030e565b60405180910390f35b61007e6100cf565b60405161008b9190610342565b60405180910390f35b61009c6100e0565b6040516100a9919061036c565b60405180910390f35b60006100c88260016100f190919063ffffffff16565b9050919050565b60006100db60016101a8565b905090565b60006100ec6001610206565b905090565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16811161019c578284600101600083815260200190815260200160002054036101895760019150506101a2565b8080610194906103b6565b91505061012a565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506101fd8282610257565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600184610267919061041a565b6102719190610460565b6fffffffffffffffffffffffffffffffff16905092915050565b600080fd5b6000819050919050565b6102a381610290565b81146102ae57600080fd5b50565b6000813590506102c08161029a565b92915050565b6000602082840312156102dc576102db61028b565b5b60006102ea848285016102b1565b91505092915050565b60008115159050919050565b610308816102f3565b82525050565b600060208201905061032360008301846102ff565b92915050565b6000819050919050565b61033c81610329565b82525050565b60006020820190506103576000830184610333565b92915050565b61036681610290565b82525050565b6000602082019050610381600083018461035d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103c182610329565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036103f3576103f2610387565b5b600182019050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6000610425826103fe565b9150610430836103fe565b9250826fffffffffffffffffffffffffffffffff0382111561045557610454610387565b5b828201905092915050565b600061046b826103fe565b9150610476836103fe565b92508282101561048957610488610387565b5b82820390509291505056fea164736f6c634300080f000a";
const isSuperArgs = (xs) => xs.length > 1;
class QueueManager__factory extends ethers_1.ContractFactory {
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
exports.QueueManager__factory = QueueManager__factory;
QueueManager__factory.bytecode = _bytecode;
QueueManager__factory.abi = _abi;
