"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAccountRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "AccountOwnerAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "AccountOwnerRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "AccountProofAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "AccountProofRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "addAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "addAccountProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "removeAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "removeAccountProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "verifyAccountOwner",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "verifyAccountOwnerAtBlock",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "verifyAccountProof",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "verifyAccountProofAtBlock",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610fff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394000b021161005b57806394000b0214610227578063bb890d3f14610255578063d543c34a146102cf578063e278cfc6146102fd57610088565b806334d323a41461008d57806359b52ef8146101115780638a3133781461017f5780638ecc1365146101e3575b600080fd5b6100f9600480360360608110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610341565b60405180821515815260200191505060405180910390f35b6101676004803603606081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505061040c565b60405180821515815260200191505060405180910390f35b6101cb6004803603604081101561019557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104ab565b60405180821515815260200191505060405180910390f35b610225600480360360208110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061053f565b005b6102536004803603602081101561023d57600080fd5b8101908080359060200190929190505050610860565b005b6102b76004803603604081101561026b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f1565b60405180821515815260200191505060405180910390f35b6102fb600480360360208110156102e557600080fd5b8101908080359060200190929190505050610ab1565b005b61033f6004803603602081101561031357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb2565b005b6000610403826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006104a2826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006105376000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008481526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f14602d913960400191505060405180910390fd5b61067b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b156106d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f6e602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644683382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6108ea6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b61093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610fc7602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f87dde712783ad4895642c7a875998317a71cf424a2444eb79545ce3795431ff93382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000610aa96000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b610b3b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b15610b91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f41602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f4075b367eed0513a54aa39c287c66d6ae98e5df6f73ac087b26b8f89d05d1aa83382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b610d686000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b610dbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610f9b602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb3382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008060009050836000015115610ef657600084602001511415610ed85760019050610ef5565b6000831415610eea5760019050610ef4565b8284602001511190505b5b5b8091505092915050565b6000610f0c8243610eb1565b905091905056fe45787465726e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e657245787465726e616c4163636f756e7452656769737472793a2070726f6f6620616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220646f65736e277420657869737445787465726e616c4163636f756e7452656769737472793a2070726f6f6620646f65736e2774206578697374a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ExternalAccountRegistry__factory extends ethers_1.ContractFactory {
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
exports.ExternalAccountRegistry__factory = ExternalAccountRegistry__factory;
ExternalAccountRegistry__factory.bytecode = _bytecode;
ExternalAccountRegistry__factory.abi = _abi;
