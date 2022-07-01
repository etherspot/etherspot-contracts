"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalAccountRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
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
                name: "beneficiary",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "AccountCallRefunded",
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
                name: "accountImplementation",
                type: "address",
            },
        ],
        name: "AccountDeployed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "accountImplementation",
                type: "address",
            },
        ],
        name: "AccountImplementationUpdated",
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
                name: "accountRegistry",
                type: "address",
            },
        ],
        name: "AccountRegistryUpdated",
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
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "response",
                type: "bytes",
            },
        ],
        name: "AccountTransactionExecuted",
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
                name: "accountImplementation",
                type: "address",
            },
        ],
        name: "AccountUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "GuardianAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "GuardianRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "initializer",
                type: "address",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [],
        name: "accountImplementation",
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
    {
        inputs: [],
        name: "accountRegistry",
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
        name: "addAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "addGuardian",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__0ffe16b4",
                type: "bytes8",
            },
        ],
        name: "c_0ffe16b4",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__19d98a43",
                type: "bytes8",
            },
        ],
        name: "c_19d98a43",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__203cf0ac",
                type: "bytes8",
            },
        ],
        name: "c_203cf0ac",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__9b6befd1",
                type: "bytes8",
            },
        ],
        name: "c_9b6befd1",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_c0828b70",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_d5c463c2",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__0ffe16b4",
                type: "bytes8",
            },
        ],
        name: "c_false0ffe16b4",
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
                name: "c__19d98a43",
                type: "bytes8",
            },
        ],
        name: "c_false19d98a43",
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
                name: "c__203cf0ac",
                type: "bytes8",
            },
        ],
        name: "c_false203cf0ac",
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
                name: "c__9b6befd1",
                type: "bytes8",
            },
        ],
        name: "c_false9b6befd1",
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
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_falsec0828b70",
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
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_falsed5c463c2",
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
                name: "c__0ffe16b4",
                type: "bytes8",
            },
        ],
        name: "c_true0ffe16b4",
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
                name: "c__19d98a43",
                type: "bytes8",
            },
        ],
        name: "c_true19d98a43",
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
                name: "c__203cf0ac",
                type: "bytes8",
            },
        ],
        name: "c_true203cf0ac",
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
                name: "c__9b6befd1",
                type: "bytes8",
            },
        ],
        name: "c_true9b6befd1",
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
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_truec0828b70",
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
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_trued5c463c2",
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
                internalType: "address",
                name: "saltOwner",
                type: "address",
            },
        ],
        name: "computeAccountAddress",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "deployAccount",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "executeAccountTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gateway",
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
    {
        inputs: [
            {
                internalType: "address[]",
                name: "guardians_",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "accountImplementation_",
                type: "address",
            },
            {
                internalType: "address",
                name: "gateway_",
                type: "address",
            },
        ],
        name: "initialize",
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
        ],
        name: "isAccountDeployed",
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
                name: "guardian",
                type: "address",
            },
        ],
        name: "isGuardian",
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
        name: "isInitialized",
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
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "isValidAccountSignature",
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
                name: "messageHash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "isValidAccountSignature",
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
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "refundAccountCall",
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
        name: "removeAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "removeGuardian",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "accountImplementation_",
                type: "address",
            },
        ],
        name: "upgrade",
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
        ],
        name: "upgradeAccount",
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
                internalType: "bytes32",
                name: "messageHash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verifyGuardianSignature",
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
const _bytecode = "0x60806040523480156200001157600080fd5b506200002e676ed90a7f5cb15c7560c01b6200010160201b60201c565b6200004a6716199243b9d4db2560c01b6200010460201b60201c565b62000066675e592fe27197979c60c01b6200010760201b60201c565b6200008267eca2e4778f3efef360c01b6200010760201b60201c565b32600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000df67db84cf13641fc64d60c01b6200010a60201b60201c565b620000fb678a3d97f4ff6270f860c01b6200010d60201b60201c565b62000110565b50565b50565b50565b50565b50565b617d4980620001206000396000f3fe60806040523480156200001157600080fd5b5060043610620002805760003560e01c80635967b7ac1162000159578063cade6a5d11620000c9578063da9fc1ae1162000087578063da9fc1ae1462000fd0578063db63f5821462001017578063e1e382ce146200107e578063e5c7278f146200113d578063f4876c7414620012065762000280565b8063cade6a5d1462000ddc578063d089e11a1462000e4d578063d0f710d61462000e83578063d53641231462000f22578063d628d0861462000f845762000280565b8063a4db4b6b1162000117578063a4db4b6b1462000bf2578063a526d83b1462000c54578063bb890d3f1462000c9b578063c1cad69e1462000d18578063c369d5fe1462000d7a5762000280565b80635967b7ac14620009dc578063714041561462000a3e5780637663f44c1462000a8557806390482d721462000ad1578063a23441e71462000b905762000280565b80631a84140311620001f557806334d323a411620001b357806334d323a4146200083e578063392e53cd14620008c557806343013c2414620008e75780634623ec77146200092e5780635405622e14620009905762000280565b80631a841403146200064a5780631dccb78714620006bb57806321a5f5da146200071d5780632e6afd6e146200077f5780633164b5e114620007e15762000280565b806311464fbe116200024357806311464fbe1462000423578063116191b61462000459578063124e9eb3146200048f5780631262ed1c146200059c5780631812164614620005fe5762000280565b806301883a24146200028557806305ae19e614620002d15780630900f01014620003335780630c4b1a17146200037a5780630c68ba2114620003c6575b600080fd5b620002cf600480360360208110156200029d57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506200126d565b005b6200031b60048036036020811015620002e957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001270565b60405180821515815260200191505060405180910390f35b62000378600480360360208110156200034b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506200127b565b005b620003c4600480360360208110156200039257600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001420565b005b6200040b60048036036020811015620003de57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001423565b60405180821515815260200191505060405180910390f35b6200042d620014ba565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b62000463620014e0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6200058460048036036060811015620004a757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115620004e557600080fd5b820183602082011115620004f857600080fd5b803590602001918460018302840111640100000000831117156200051b57600080fd5b9091929391929390803590602001906401000000008111156200053d57600080fd5b8201836020820111156200055057600080fd5b803590602001918460018302840111640100000000831117156200057357600080fd5b909192939192939050505062001506565b60405180821515815260200191505060405180910390f35b620005e660048036036020811015620005b457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001607565b60405180821515815260200191505060405180910390f35b62000648600480360360208110156200061657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001612565b005b620006b9600480360360608110156200066257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505062001615565b005b6200070560048036036020811015620006d357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001a90565b60405180821515815260200191505060405180910390f35b62000767600480360360208110156200073557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001a97565b60405180821515815260200191505060405180910390f35b620007c9600480360360208110156200079757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001aa2565b60405180821515815260200191505060405180910390f35b6200082660048036036020811015620007f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001aa9565b60405180821515815260200191505060405180910390f35b620008ad600480360360608110156200085657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505062001b44565b60405180821515815260200191505060405180910390f35b620008cf62001d27565b60405180821515815260200191505060405180910390f35b6200092c60048036036020811015620008ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001dc2565b005b62000978600480360360208110156200094657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001e4c565b60405180821515815260200191505060405180910390f35b620009da60048036036020811015620009a857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001e57565b005b62000a2660048036036020811015620009f457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062001e5a565b60405180821515815260200191505060405180910390f35b62000a836004803603602081101562000a5657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062001e61565b005b62000acf6004803603602081101562000a9d57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050620022e3565b005b62000b8e6004803603606081101562000ae957600080fd5b810190808035906020019064010000000081111562000b0757600080fd5b82018360208201111562000b1a57600080fd5b8035906020019184602083028401116401000000008311171562000b3d57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620022e6565b005b62000bda6004803603602081101562000ba857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062002612565b60405180821515815260200191505060405180910390f35b62000c3c6004803603602081101562000c0a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062002619565b60405180821515815260200191505060405180910390f35b62000c996004803603602081101562000c6c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062002624565b005b62000d006004803603604081101562000cb357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620027c7565b60405180821515815260200191505060405180910390f35b62000d626004803603602081101562000d3057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506200281f565b60405180821515815260200191505060405180910390f35b62000dc46004803603602081101562000d9257600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062002826565b60405180821515815260200191505060405180910390f35b62000e216004803603602081101562000df457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506200282d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b62000e5762002883565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b62000f0a6004803603604081101562000e9b57600080fd5b81019080803590602001909291908035906020019064010000000081111562000ec357600080fd5b82018360208201111562000ed657600080fd5b8035906020019184600183028401116401000000008311171562000ef957600080fd5b9091929391929390505050620028a9565b60405180821515815260200191505060405180910390f35b62000f6c6004803603602081101562000f3a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062002946565b60405180821515815260200191505060405180910390f35b62000fce6004803603602081101562000f9c57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062002951565b005b620010156004803603602081101562000fe857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062002954565b005b6200107c600480360360408110156200102f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620029dc565b005b62001125600480360360608110156200109657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115620010de57600080fd5b820183602082011115620010f157600080fd5b803590602001918460018302840111640100000000831117156200111457600080fd5b909192939192939050505062002dad565b60405180821515815260200191505060405180910390f35b62001204600480360360808110156200115557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115620011bd57600080fd5b820183602082011115620011d057600080fd5b80359060200191846001830284011164010000000083111715620011f357600080fd5b909192939192939050505062002e5f565b005b6200126b600480360360408110156200121e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062002f6c565b005b50565b600060019050919050565b620012916754a94b41112a5ad160c01b6200126d565b620012a7677e48a4752a028e1460c01b62001e57565b620012bd6754e2f8cd8fda0cfe60c01b62001e57565b620012d3671b1abbc8110e006760c01b62001e57565b620012e9677621c15edc08840a60c01b62001e57565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166200138c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062007c5c6026913960400191505060405180910390fd5b620013a2671978b446280e03b660c01b62001e57565b620013b867bc99b99e8c2c7a2260c01b62001e57565b620013ce67e1c0388b3599041b60c01b6200126d565b620013e467b9274d0c04643b1c60c01b6200126d565b620013fa67aeb462cbaf19eb2b60c01b6200126d565b62001410671a6e1b90aaa718b060c01b6200126d565b6200141d816001620033ed565b50565b50565b60006200143b67d9e99bddfebda2f060c01b62001e57565b62001451676401fd9fc2105e0160c01b62001e57565b620014676733760aa820b07e2a60c01b62001e57565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006200151e6791a6df43dbc9e35160c01b6200126d565b6200153467542e91cab1b3959f60c01b6200126d565b6200154a67c16820893afe542560c01b6200126d565b620015fc86620015f685858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050620015e789898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506200363f565b620037f290919063ffffffff16565b62003b51565b905095945050505050565b600060019050919050565b50565b6200162b6791b72b30fc06da6160c01b6200126d565b62001641671813bc58da934b9760c01b6200126d565b62001657670bb0a84d15b88ab660c01b6200126d565b620016628362003e48565b506200167967192ead767e0b426d60c01b6200126d565b6200168f67c49d61359e3bbd7b60c01b6200126d565b6200169a83620044ee565b620016b06718def0e9d596a22960c01b6200126d565b620016c667577729cbc87e65c360c01b6200126d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620017a25762001712678c80f84aaeabedeb60c01b6200126d565b620017286789186e2b1c6751f960c01b6200126d565b6200173e6752ebed5195a6127860c01b6200126d565b6200179b833283600067ffffffffffffffff811180156200175e57600080fd5b506040519080825280601f01601f191660200182016040528015620017925781602001600182028036833780820191505090505b506000620046a8565b50620019ce565b620017b867e53a5fc2508d9d1360c01b6200126d565b620017ce6765383383f6acd6d860c01b6200126d565b620017e467aadb0dd2d6a4318160c01b6200126d565b60606200188a8484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000620046a8565b9050620018a267d11c2ab2624bd9b860c01b6200126d565b620018b8672cbe18415362a3b460c01b6200126d565b600081511115620019b557620018d967897c81ba5765a56e60c01b6200126d565b620018ef67b61079bde7aae4a960c01b6200126d565b6200190567ba1b477618236ab960c01b6200126d565b6200191b67f3987bffc80604c860c01b6200126d565b8080602001905160208110156200193157600080fd5b810190808051906020019092919050505062001999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018062007c826035913960400191505060405180910390fd5b620019af67926cf9d8fbf8088c60c01b6200126d565b620019cc565b620019cb6728a54db3b55ec06a60c01b6200126d565b5b505b620019e46730cd3b1bf7ea854460c01b6200126d565b620019fa6702cf38c5dccf169060c01b6200126d565b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000919050565b600060019050919050565b6000919050565b600062001ac167f99ada48de50c7cf60c01b6200126d565b62001ad76778102406ebbfe33f60c01b6200126d565b62001aed67681f7ab1e8ba294a60c01b6200126d565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b600062001b5c6793a39e2c9f7ee9ba60c01b6200126d565b62001b72673c97afc8ecfead0560c01b6200126d565b62001b88676acdb8d58ef6346660c01b6200126d565b600062001ba0674e80aa82dfed6db160c01b6200126d565b62001bb66702ab7d633dd730ee60c01b6200126d565b62001bc2858562003b51565b1562001bfe5762001bde6778226c994dcbf9a360c01b6200126d565b62001bf46703140093de95238560c01b6200126d565b6001905062001cf0565b62001c14679adf213db50d225060c01b6200126d565b62001c2a67076837ed1b1c119460c01b6200126d565b62001ced83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505062004d8f90919063ffffffff16565b90505b62001d0667e9e38f04d4f808bb60c01b6200126d565b62001d1c6781c8150efac1d5ad60c01b6200126d565b809150509392505050565b600062001d3f6726ed6cc6ca12515c60c01b62001612565b62001d5567f3fc49482028cbb860c01b62001612565b62001d6b6740317a79cae6a3ff60c01b62001612565b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b62001dd867f5a44943e88d339060c01b6200126d565b62001dee6722f63d5bd060bbe460c01b6200126d565b62001e0467e8676f911de306ac60c01b6200126d565b62001e0f8162003e48565b5062001e2667d95317d1b0cdf90460c01b6200126d565b62001e3c676f173d95227f79c460c01b6200126d565b62001e4981600162004f88565b50565b600060019050919050565b50565b6000919050565b62001e7767f772222a3366273960c01b62001e57565b62001e8d677e48a4752a028e1460c01b62001e57565b62001ea36754e2f8cd8fda0cfe60c01b62001e57565b62001eb9671b1abbc8110e006760c01b62001e57565b62001ecf677621c15edc08840a60c01b62001e57565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1662001f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062007c5c6026913960400191505060405180910390fd5b62001f88671978b446280e03b660c01b62001e57565b62001f9e67bc99b99e8c2c7a2260c01b62001e57565b62001fb467afd0aa94ba119c4e60c01b62001e57565b62001fca670fe65c577fbdf81160c01b62001e57565b62001fe067e175d6b24c96a59a60c01b62001e57565b62001ff667514f675749914bc160c01b62001e57565b6200200c67fed39a5b1d24bceb60c01b62001e57565b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415620020af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b620020c567325d0391dd900ca560c01b62001e57565b620020db67f494ac4bc126e05760c01b62001e57565b620020f167a8a2f5acd805e41c60c01b62001e57565b62002107679f1149f801dce85b60c01b62001e57565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16620021c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b620021dc67e767f88c374b22f760c01b62001e57565b620021f2679a8eb2ad91b01fb960c01b62001e57565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200225f675f52f4e3c8e1709960c01b62001e57565b6200227567b8b235546176405e60c01b62001e57565b7fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b50565b620022fc6769e37de4b7a8c6db60c01b6200126d565b6200231267b2266613e068a5ae60c01b62001612565b62002328676a66a63870f964f960c01b62001612565b6200233e6772f22eca890742ba60c01b62001612565b6200235467c8ab57d60023f99860c01b62001612565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614620023fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018062007b90602f913960400191505060405180910390fd5b6200241267d31dec9098d614f660c01b62001612565b6200242867a184879381a9c67460c01b62001612565b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062002480675e44e6e1c885710560c01b62001612565b62002496677c725e0e9d21290b60c01b6200126d565b620024ac67d70eb0fbd8c587fd60c01b6200126d565b620024c267dede73f89e94490c60c01b6200126d565b620024d86715731c365df53ffa60c01b6200126d565b62002524848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505062005315565b6200253a67fb7bfb057c4bd97560c01b6200126d565b620025506735feea27802efcef60c01b6200126d565b6200255c308362005494565b6200257267b5e8f96e156f1bc560c01b6200126d565b62002588674c8c76316743ceb260c01b6200126d565b620025938162005520565b620025a96732ca1833e9907bb960c01b62001612565b620025bf672942130a5b94b82160c01b62001612565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000919050565b600060019050919050565b6200263a67b59862a5cb01d1d860c01b62001e57565b62002650677e48a4752a028e1460c01b62001e57565b620026666754e2f8cd8fda0cfe60c01b62001e57565b6200267c671b1abbc8110e006760c01b62001e57565b62002692677621c15edc08840a60c01b62001e57565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1662002735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062007c5c6026913960400191505060405180910390fd5b6200274b671978b446280e03b660c01b62001e57565b6200276167bc99b99e8c2c7a2260c01b62001e57565b6200277767e0409d61ef95483b60c01b62001e57565b6200278d67acb2c628a7cbdba860c01b62001e57565b620027a3677f6b80ac4f415fbe60c01b62001e57565b620027b967c7dcdfc4bd89af4960c01b62001e57565b620027c48162005590565b50565b6000620027df67b9a62806a5aac64560c01b6200126d565b620027f56742a98292c69e6ed760c01b6200126d565b6200280b678a9ee5d10ccc3ed860c01b6200126d565b62002817838362003b51565b905092915050565b6000919050565b6000919050565b60006200284567fdf339f1effa493f60c01b6200126d565b6200285b67b0819f27545d8ba860c01b6200126d565b62002871673b6d20211f4fbf3960c01b6200126d565b6200287c82620058c0565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000620028c16746d5f36e497b280d60c01b62001e57565b620028d7677077a4665ef04d8360c01b62001e57565b620028ed6788288bf71f1972a760c01b62001e57565b6200293d8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505062005986565b90509392505050565b600060019050919050565b50565b6200296a67b0c22330b325e16860c01b6200126d565b6200298067314eff398ce1d91360c01b6200126d565b62002996670eb8f87657af427760c01b6200126d565b620029a18162003e48565b50620029b86726bd12ff2de0d51460c01b6200126d565b620029ce67b34a67d458ff31ae60c01b6200126d565b620029d981620044ee565b50565b620029f267926a1c5ba0f7822960c01b6200126d565b62002a0867bdbe2d22e80196f760c01b6200126d565b62002a1e67d2ef2385457bb49c60c01b6200126d565b600062002a2b8362003e48565b905062002a436746d2b04003be993560c01b6200126d565b62002a5967515d4314fe5509d860c01b6200126d565b62002a6f67a1f43c6393bae7d960c01b6200126d565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562002af6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018062007c31602b913960400191505060405180910390fd5b62002b0c67f0e83eebd30a3eb860c01b6200126d565b62002b226747538f56d841b53a60c01b6200126d565b62002b3867fd3d505e34aa133c60c01b6200126d565b62002b4e6704a7dc5ab485862d60c01b6200126d565b62002c07600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505062005a64565b62002c5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018062007b2f602c913960400191505060405180910390fd5b62002c7467c426f4b79e74889e60c01b6200126d565b62002c8a67e213077cf4ae202d60c01b6200126d565b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555062002d27670d0fef597ce030c460c01b6200126d565b62002d3d674bf2c671b0a6478660c01b6200126d565b7f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b600062002dc56741030c2972d6e34f60c01b6200126d565b62002ddb6742bd540d958de81e60c01b6200126d565b62002df167b0440667352e718860c01b6200126d565b62002e558562002e4f85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087620037f290919063ffffffff16565b62003b51565b9050949350505050565b62002e7567364c7f3f88c09e6f60c01b6200126d565b62002e8b67ebb573595f25095c60c01b6200126d565b62002ea167e590352c1a2702ea60c01b6200126d565b62002eac8562003e48565b5062002ec367fb0737d76cdd370f60c01b6200126d565b62002ed967987d775282fac11360c01b6200126d565b62002ee485620044ee565b62002efa67a4eb73f96731bc0e60c01b6200126d565b62002f1067a1c04e5b5645157d60c01b6200126d565b62002f6485858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001620046a8565b505050505050565b62002f82673a80f36de3a3614760c01b6200126d565b62002f9867f68b672a5ec3af7160c01b6200126d565b62002fae674a9088d7d425154260c01b6200126d565b62002fb98262003e48565b5062002fd0670cd4838ff272421160c01b6200126d565b62002fe667b86c1c5cd898ecdd60c01b6200126d565b62002ffc678af24ae56013df8a60c01b6200126d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562003084576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018062007d10602d913960400191505060405180910390fd5b6200309a6788d7f01b7455142d60c01b6200126d565b620030b06704bceefd079fca5160c01b6200126d565b620030c667a3403c226087073760c01b6200126d565b620030dc672d0c5e3310f0eaaa60c01b6200126d565b62003195600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505062005a64565b15620031ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018062007ce3602d913960400191505060405180910390fd5b62003203671826b86dc6571f6160c01b6200126d565b6200321967d1dd0c83140c51a660c01b6200126d565b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff021916908315150217905550620032ca6721e789db4fa579d860c01b6200126d565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506200336867e913e41e2decf46f60c01b6200126d565b6200337e670bd891d39b172f5960c01b6200126d565b7f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b6200340367778d2c4844cb57c860c01b620022e3565b62003419672e46345dd30446f560c01b620022e3565b6200342f674b01c1a412029cf960c01b620022e3565b6200344567b5ba0ed84140968960c01b620022e3565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620034cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018062007a96603b913960400191505060405180910390fd5b620034e36712934e542bfcaae260c01b620022e3565b620034f9676ab5a434897f3fa460c01b620022e3565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062003550671440edfeaa98b7c160c01b620022e3565b62003566671da8e35e0bfd87a360c01b620022e3565b801562003624576200358367f166ead2d805373960c01b620022e3565b620035996738487a6c4bc99ca160c01b620022e3565b620035af677be1bddbe5c5292160c01b620022e3565b7f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16200363b565b6200363a6777dc91dc63848bbe60c01b620022e3565b5b5050565b60006200365767957e7830bbd813a160c01b62005abb565b6200366d6777388b439e4c706660c01b62005abb565b62003683678c0dad3efcfc1e3260c01b62005abb565b6200368f825162005abe565b826040516020018082805190602001908083835b60208310620036c85780518252602082019150602081019050602083039250620036a3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b602083106200375c578051825260208201915060208101905060208303925062003737565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310620037af57805182526020820191506020810190506020830392506200378a565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b60006200380a67610b12321a07a31960c01b62005e4d565b62003820670f66a519ee9137b960c01b62005e4d565b6200383667140d9f9935e2385360c01b62005e4d565b60006200384e670bfea895a9f81bec60c01b62005e4d565b6200386467a8c715ec3b9d89c160c01b62005e4d565b60418351141562003b04576200388567101129654a82afeb60c01b62005e4d565b6200389b67a44405322c11578a60c01b62005e4d565b620038b1673ae09945b2f5082360c01b62005e4d565b6000620038c967900a30e48d0fc7bd60c01b62005e4d565b620038df677d193483635abe1860c01b62005e4d565b6000620038f767f24e14d594e9077960c01b62005e4d565b6200390d67a847d7edacf7e00c60c01b62005e4d565b600062003925670bcc457b0963bc0f60c01b62005e4d565b6020860151925060408601519150606086015160001a9050620039536730650d5e99574f3560c01b62005e4d565b62003969675197804ca644c8a460c01b62005e4d565b601b8160ff161015620039ae576200398c6781206cb7a1d9cec760c01b62005e4d565b620039a2679d0aaefe9954d7fb60c01b62005e4d565b601b81019050620039c5565b620039c467091b6422f681fe5560c01b62005e4d565b5b620039db677849785c6ede9b0e60c01b62005e4d565b620039f16732075f7517db825b60c01b62005e4d565b601b8160ff1614801562003a17575062003a1667638a38da6bf5bb4360c01b62005e50565b5b8062003a455750601c8160ff1614801562003a44575062003a43671d94865be2a4ed5560c01b62005e50565b5b5b1562003ae45762003a6167657d88528f4e396b60c01b62005e4d565b62003a77675469679748b05cfe60c01b62005e4d565b60018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801562003ad2573d6000803e3d6000fd5b50505060206040510351935062003afb565b62003afa67539b701a1f57136860c01b62005e4d565b5b50505062003b1b565b62003b1a67f3927173995ed52360c01b62005e4d565b5b62003b3167303f1b174284648060c01b62005e4d565b62003b4767c60031985823124160c01b62005e4d565b8091505092915050565b600062003b6967c354c8450bcd34cf60c01b6200126d565b62003b7f67cd0742fe4e99483360c01b6200126d565b62003b95677f418a800c9b82c060c01b6200126d565b600062003bad67b04d72f6a417485060c01b6200126d565b62003bc36738d65856eaee29dc60c01b6200126d565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff161562003d135762003c6f67f5f005ee48c1870760c01b6200126d565b62003c85675a1d48884d5da9cf60c01b6200126d565b6000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015414905062003e12565b62003d296756bb552a06669d0160c01b6200126d565b62003d3f676753146f02c0ecc560c01b6200126d565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141562003dfa5762003da36726683adc01e2cd1a60c01b6200126d565b62003db967a6ef75a43a66e93a60c01b6200126d565b62003dc483620058c0565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614905062003e11565b62003e1067cb15a9b78ba067e360c01b6200126d565b5b5b62003e28675b6d76a1ab8462e060c01b6200126d565b62003e3e673432615ddef5022060c01b6200126d565b8091505092915050565b600062003e60671c06bc1c16c1f77c60c01b6200126d565b62003e7667ce75fb64a17437c960c01b6200126d565b62003e8c677a3a2ae35660ac0360c01b6200126d565b600062003e9862005e5b565b905062003eb0674320e171edc92c9760c01b6200126d565b62003ec6677b54aad621e001e060c01b6200126d565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615620040ad5762003f72675b9196a79da8eee960c01b6200126d565b62003f88676f6a423ac6ff1ffe60c01b6200126d565b62003f9e672c5e03296536439f60c01b6200126d565b62003fb467b770e11113162d0c60c01b6200126d565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541462004091576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018062007ad16038913960400191505060405180910390fd5b620040a7677a9ead63ef6ae64e60c01b6200126d565b620044b9565b620040c367275560e0a21b70fc60c01b6200126d565b620040d9678e13bff009acfa7e60c01b6200126d565b620040ef67151fa54bc9999fbd60c01b6200126d565b6200410567da81c3129081711a60c01b6200126d565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015414620041a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018062007ad16038913960400191505060405180910390fd5b620041ba67870b738b3012751160c01b6200126d565b620041d0673d47daa55862f60360c01b6200126d565b620041e66735eaa3f4bee1b6b760c01b6200126d565b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905062004240672742dad7d55a86e660c01b6200126d565b62004256678d56020a3f743a6260c01b6200126d565b6200426c67cf4cdf4a622a45c860c01b6200126d565b620042778162005eb0565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614620042fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018062007ad16038913960400191505060405180910390fd5b620043126771a41025a0bcc88360c01b6200126d565b6200432867d06d00b914125f0360c01b6200126d565b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506200438567f3c966cb89981dc860c01b6200126d565b6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506200443667f248b723bf97dcfb60c01b6200126d565b6200444c67538ed3731eca3a7f60c01b6200126d565b7f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b620044cf678aa2f1b631fb753160c01b6200126d565b620044e567458da016e938a2b460c01b6200126d565b80915050919050565b6200450467e981b1a97547bc6b60c01b6200126d565b6200451a674e4c5d840a3c552560c01b6200126d565b6200453067bcbac04197efe07a60c01b6200126d565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166200468e576200459b677dec6119996f769b60c01b6200126d565b620045b1676abc8513cc8fded060c01b6200126d565b620045c7672419eb1c541c35c560c01b6200126d565b62004616600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600162006144565b506200462d67b4ccac91e45e279760c01b6200126d565b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff021916908315150217905550620046a5565b620046a467f3896eb17910a82160c01b6200126d565b5b50565b6060620046c0678d67538b3de9ea8660c01b620022e3565b620046d667bc1200b36b6e2d3c60c01b620022e3565b620046ec67c08742122c92f63360c01b620022e3565b620047026768a892c68abc618c60c01b620022e3565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156200478a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062007bbf6025913960400191505060405180910390fd5b620047a06746a5066e72f755d060c01b620022e3565b620047b667995fefea0bfe104660c01b620022e3565b620047cc67853adc48141afd7560c01b620022e3565b620047e267c99e3f9de858fe5760c01b620022e3565b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141562004869576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018062007cb7602c913960400191505060405180910390fd5b6200487f673ed4d87e03ce069460c01b620022e3565b6200489567815137a12ebef0bf60c01b620022e3565b620048ab6733bcca643a99e8bd60c01b620022e3565b620048c1675bddd7f4a96eae8760c01b620022e3565b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141562004948576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062007b096026913960400191505060405180910390fd5b6200495e672c537727fdea5c3460c01b620022e3565b6200497467140c547275665b9e60c01b620022e3565b6200498a6714a7aab557083ab060c01b620022e3565b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101562004a1e57808201518184015260208101905062004a01565b50505050905090810190601f16801562004a4c5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801562004a6e57600080fd5b505af115801562004a83573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101562004aae57600080fd5b810190808051604051939291908464010000000082111562004acf57600080fd5b8382019150602082018581111562004ae657600080fd5b825186600182028301116401000000008211171562004b0457600080fd5b8083526020830192505050908051906020019080838360005b8381101562004b3a57808201518184015260208101905062004b1d565b50505050905090810190601f16801562004b685780820380516001836020036101000a031916815260200191505b50604052505050905062004b8767b9a8e776cf83f1c260c01b620022e3565b62004b9d67e7ceb79e5abc2c9160c01b620022e3565b821562004d3f5762004bba67e14033206c8f1d6f60c01b620022e3565b62004bd067eb528105fe589a6760c01b620022e3565b62004be6675a92b172873d9fd860c01b620022e3565b7f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101562004c9057808201518184015260208101905062004c73565b50505050905090810190601f16801562004cbe5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101562004cf957808201518184015260208101905062004cdc565b50505050905090810190601f16801562004d275780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a162004d56565b62004d5567ad2a18c0580626ae60c01b620022e3565b5b62004d6c673b173602e1a7471660c01b620022e3565b62004d8267ca5084af2c310ee960c01b620022e3565b8091505095945050505050565b600062004da767b93cca31d93a2da060c01b62006395565b62004dbd679b3366ff5586cbcb60c01b62006395565b62004dd3670a6c1d6e66d9b12860c01b62006395565b600062004deb674c0130c069ab77bb60c01b62006395565b62004e016790c91fcf571f955b60c01b62006395565b83600001511562004f3b5762004e2267e7011bc29dbcc53d60c01b62006395565b62004e3867326b8da8148cf64b60c01b62006395565b62004e4e67955b6006d18a31f860c01b62006395565b60008460200151141562004e925762004e72670aa7911fc928619860c01b62006395565b62004e88679af8a90d24ea0b9a60c01b62006395565b6001905062004f35565b62004ea8671d61c7bbbc41b4a460c01b62006395565b62004ebe67163e427f8e2dad7960c01b62006395565b600083141562004efe5762004ede67b5ef86ed02b8943660c01b62006395565b62004ef467a12424a58a27066860c01b62006395565b6001905062004f34565b62004f1467f20b97e6b687869260c01b62006395565b62004f2a67069e2da21e7ce91360c01b62006395565b8284602001511190505b5b62004f52565b62004f5167bc5bb55bea0c32fc60c01b62006395565b5b62004f68675d4f0e0e7d41a81f60c01b62006395565b62004f7e670fb7d742fb4b185760c01b62006395565b8091505092915050565b62004f9e67081823c987234e9d60c01b620022e3565b62004fb46760c354164930797d60c01b620022e3565b62004fca67accf73d6a8ae294e60c01b620022e3565b62004fe067b19b8a65e686f89c60c01b620022e3565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200506057600080fd5b505afa15801562005075573d6000803e3d6000fd5b505050506040513d60208110156200508c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614156200510c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018062007c06602b913960400191505060405180910390fd5b62005122674a209ed55ed71bfa60c01b620022e3565b6200513766e8f614a9f2909a60c01b620022e3565b6200514d673bd80329fed2f8e860c01b620022e3565b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015620051d957600080fd5b505af1158015620051ee573d6000803e3d6000fd5b505050506200520867b46710374855f2fe60c01b620022e3565b6200521e67d4b3203fae218bc960c01b620022e3565b8015620052fa576200523b67308bce54015cf44160c01b620022e3565b620052516757203c00802916d160c01b620022e3565b6200526767fa0f90e590f54e6460c01b620022e3565b7feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a162005311565b620053106793389340e33679c160c01b620022e3565b5b5050565b6200532b672da1cbb2c8b712bf60c01b62001e57565b6200534167a22c42eaa986a7b160c01b62001e57565b6200535767161aa01e34b61d0a60c01b62001e57565b600081511415620053b5576200537867c00dbd5b52865bb760c01b62001e57565b6200538e678a5faf951795361260c01b62001e57565b620053a46745413064a2aacfc660c01b62001e57565b620053af3262005590565b62005491565b620053cb67d4fad28aec7c156d60c01b62001e57565b620053e167a88c23ab9e9dede660c01b62001e57565b620053f7675a0d1bd87812f63460c01b62001e57565b6000815190506200541367a97ff88e96ad9c4460c01b62001e57565b62005429672ebda776213b4a1860c01b62001e57565b60005b818110156200548e576200544b67197b6470f65d698160c01b62001e57565b62005461678e0c2e8e0183d04a60c01b62001e57565b620054808382815181106200547257fe5b602002602001015162005590565b80806001019150506200542c565b50505b50565b620054aa6741fc0c62d014a3fe60c01b620022e3565b620054c067dc028465461785ee60c01b620022e3565b620054d6673f0b21804d61a81660c01b620022e3565b620054e382600062006398565b620054f967f371f0641cafc6fc60c01b620022e3565b6200550f675928ff3c537c054060c01b620022e3565b6200551c816000620033ed565b5050565b6200553667b69be6bf736d8c1a60c01b62001420565b6200554c67e18b25fd36211d0160c01b62001420565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620055a66715e658c0f6e292b160c01b62001e57565b620055bc672c431971dc3f178360c01b62001e57565b620055d267ea35c52bf51c28f760c01b62001e57565b620055e8676c0120f97757204260c01b62001e57565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200568c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b620056a26768a59374672fe76a60c01b62001e57565b620056b8676aacc0e4664894f760c01b62001e57565b620056ce67eacfbaa68e55918960c01b62001e57565b620056e467b14b9b00bd32573160c01b62001e57565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615620057a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b620057ba67b43b7e075756508e60c01b62001e57565b620057cf663a0e15b185871360c01b62001e57565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200583c6719a12fa44495bf1260c01b62001e57565b62005852676a185bb7ec86ed3260c01b62001e57565b7fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6000620058d8677b59acf8ddaef66c60c01b6200126d565b620058ee679a812734380aa10b60c01b6200126d565b620059036622369a6cb4aeb260c01b6200126d565b600082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506200595d67ddc9721a3416b6e160c01b6200126d565b62005973679201b0d69a10132760c01b6200126d565b6200597e8162005eb0565b915050919050565b60006200599e67bec4827058d1d27d60c01b62001e57565b620059b4672f274b74d16058ba60c01b62001e57565b620059ca670dd4bedb64e2a2d160c01b62001e57565b6000620059e18385620037f290919063ffffffff16565b9050620059f96748284973b654d0c360c01b62001e57565b62005a0f67af16bd1d5a57497b60c01b62001e57565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b600062005a7c67983085a61ff08a3a60c01b62006395565b62005a9267f957f33d43cb511360c01b62006395565b62005aa867cd826c96bcb7be1860c01b62006395565b62005ab4824362004d8f565b9050919050565b50565b606062005ad667944f62c49d2211d360c01b620065ea565b62005aec67cf066073523ad27260c01b620065ea565b62005b02675e91f9b63d948d5860c01b620065ea565b600082141562005b8c5762005b22677b0ce46c12188bc160c01b620065ea565b62005b38678aeefffae0d7fd7960c01b620065ea565b62005b4e67632899c3b9762aa260c01b620065ea565b6040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905062005e48565b62005ba267d4ac009e6f062aa760c01b620065ea565b62005bb86717428562d9cc82ca60c01b620065ea565b62005bce67883259cc94c7ab0260c01b620065ea565b600082905062005be96714aaf87bc406f85b60c01b620065ea565b62005bff675a17c5ce53d95b1e60c01b620065ea565b600062005c176747fbe7876372bb7760c01b620065ea565b62005c2d6703d91880b80ba81160c01b620065ea565b5b6000821462005c7f5762005c4d674c9b174d7e669b1660c01b620065ea565b808060010191505062005c6b674fcccc4aeaffba3360c01b620065ea565b600a828162005c7657fe5b04915062005c2e565b62005c9567c58fa74478d42bcd60c01b620065ea565b62005cab670bc924b9eeb265b760c01b620065ea565b60608167ffffffffffffffff8111801562005cc557600080fd5b506040519080825280601f01601f19166020018201604052801562005cf95781602001600182028036833780820191505090505b50905062005d12679dc5195730eeab1760c01b620065ea565b62005d2867d095aa12c047f17860c01b620065ea565b600060018303905062005d46671a0d585c82f26b7560c01b620065ea565b85935062005d5f67623c941e41d0650160c01b620065ea565b62005d7567b73f896d5bae614060c01b620065ea565b5b6000841462005e145762005d956773b20ed61aea105760c01b620065ea565b600a848162005da057fe5b0660300160f81b8282806001900393508151811062005dbb57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535062005e00679d6afb48f5a4141e60c01b620065ea565b600a848162005e0b57fe5b04935062005d76565b62005e2a67c95e90ced64cb5d060c01b620065ea565b62005e40673e3baead90f807de60c01b620065ea565b819450505050505b919050565b50565b600060019050919050565b600062005e736796610338700568e460c01b62001420565b62005e896736abbbfc9ea4e0bf60c01b62001420565b62005e9f675d0cc2962515b7bc60c01b62001420565b62005eab6014620065ed565b905090565b600062005ec86748cdc253ccc1e67560c01b620022e3565b62005ede6780d8fe77ddc420f260c01b620022e3565b62005ef467593ae66617589b4360c01b620022e3565b60606040518060200162005f089062006b20565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b6020831062005fa4578051825260208201915060208101905060208303925062005f7f565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019550505050505060405160208183030381529060405290506200606c670748b7c1eb60cfe660c01b620022e3565b62006082678d27efcb42cc3e1360c01b620022e3565b600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090506200612167c4f8fa250f8a60ca60c01b620022e3565b62006137672f91b1c834bef2d060c01b620022e3565b8060001c92505050919050565b60006200615c67c87ffb0412cac78260c01b620022e3565b6200617267a3cda0ec8e20174b60c01b620022e3565b620061886759407cee0be0ea2b60c01b620022e3565b600083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051620061df9062006b20565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f59050801580156200623d573d6000803e3d6000fd5b50905062006256678c20abd98a5c4f8a60c01b620022e3565b6200626c67a5694f9ca3e134a760c01b620022e3565b821562006348576200628967d9808b1bdccba98b60c01b620022e3565b6200629f678562204049a5cf4760c01b620022e3565b620062b567f3f1d7e23629e16060c01b620022e3565b7f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16200635f565b6200635e671671bc1ea802d86a60c01b620022e3565b5b6200637567add800985aa0244060c01b620022e3565b6200638b6723c279dc5d3430fd60c01b620022e3565b8091505092915050565b50565b620063ae670870459f2167c8dd60c01b620022e3565b620063c467159ba22e371895b260c01b620022e3565b620063da676a3b49e785b9a8bb60c01b620022e3565b620063f067a63d48928d370c9b60c01b620022e3565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562006478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018062007b5b6035913960400191505060405180910390fd5b6200648e67819fe19bb91397a160c01b620022e3565b620064a46704616cf5be820b7c60c01b620022e3565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620064fb678dd1e865a5f141ff60c01b620022e3565b620065116701616eb5f7d1ca9b60c01b620022e3565b8015620065cf576200652e67308412b87d226ceb60c01b620022e3565b6200654467e53fecce275a7d6360c01b620022e3565b6200655a67ea9a81daefd74f9e60c01b620022e3565b7f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1620065e6565b620065e56786e883f2cdbdcb4760c01b620022e3565b5b5050565b50565b60006200660567ef0225287ba17ba060c01b62001420565b6200661b6795958667c898951b60c01b62001420565b6200663167ec06b0be9f42607760c01b62001420565b60006200664967b7cd17d69da836b660c01b62001420565b6200665f671b7ac62a98e22a5460c01b62001420565b62006669620067a5565b15620067405762006685674b9fe2d527bba60760c01b62001420565b6200669b6737f58d18ef197c9060c01b62001420565b620066b1679e0c2e494127333d60c01b62001420565b6000836000369050039050620066d2678767fa9e72b3efac60c01b62001420565b6200673760003683906014850192620066ee9392919062006b2e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050620069a6565b91505062006770565b6200675667531fb14624ef4c0060c01b62001420565b6200676c67365aa35b4857b9d560c01b62001420565b3390505b6200678667bb664b7abb1efcc160c01b62001420565b6200679c67c66db900ff1468ad60c01b62001420565b80915050919050565b6000620067bd6718d82ab5ae60310f60c01b62001420565b620067d367b1091fd4002007a760c01b62001420565b620067e967e754ffc9cc3865c960c01b62001420565b600062006801677ed152cd4162d4dd60c01b62001420565b6200681767d897cf3d19cf81cd60c01b62001420565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156200695c5762006884677fe0037509e467e160c01b62001420565b6200689a67d0b1c04b10d8098a60c01b62001420565b620068b0670b92e025f4debba760c01b62001420565b620068c66739792e98f7fbfdea60c01b62001420565b602c6000369050101562006926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062007be46022913960400191505060405180910390fd5b6200693c6755c879b00c45b69f60c01b62001420565b62006952679a100b07747e893d60c01b62001420565b6001905062006973565b620069726757b90b57dc0a6a0160c01b62001420565b5b6200698967cc41edf636370ef460c01b62001420565b6200699f67ff5a153bde944b0360c01b62001420565b8091505090565b6000620069be67e937c30ee854c6f460c01b62006b1d565b620069d467ae40a839349e539460c01b62006b1d565b620069ea6779ff25ce2e3aef5860c01b62006b1d565b600062006a0267471a531a4d41d03a60c01b62006b1d565b62006a1867dbf5cb870bd2bda760c01b62006b1d565b62006a2e6715ee1c447c585eff60c01b62006b1d565b601483511462006aa6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b62006abc67595b08e56ca2004360c01b62006b1d565b62006ad267658f3d9a047d9b2b60c01b62006b1d565b6c01000000000000000000000000602084015104905062006afe670a7d36500000fb3860c01b62006b1d565b62006b14678f46d49d645b8e7560c01b62006b1d565b80915050919050565b50565b610f328062006b6483390190565b6000808585111562006b3f57600080fd5b8386111562006b4d57600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b50604051610f32380380610f328339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050610068679894797dc84081af60c01b61019960201b60201c565b610082674e0f327275f95bf160c01b61019960201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100dc6794e469383b340c9160c01b61019c60201b60201c565b6100f66786f2a31597afd57a60c01b61019c60201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101516788e2a6c2eb66825d60c01b61019c60201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061019f565b50565b50565b610d84806101ae6000396000f3fe6080604052600436106100e15760003560e01c80637b1039991161007f578063b49762a111610059578063b49762a114610664578063d784d426146106d0578063dd54622814610721578063f77c479114610777576100e8565b80637b103999146105775780638f27e6b6146105b8578063abe124f61461060e576100e8565b806334d23875116100bb57806334d23875146103355780633f579f42146103a15780635c60da1b146104ca5780636480a27b1461050b576100e8565b8063062e4f9c146101f15780631454d4701461025d5780632486e26f146102c9576100e8565b366100e857005b3480156100f457600080fd5b5061010967267be5c007ba493660c01b6107b8565b61011d67c98405188afd4dab60c01b6107b8565b610131676a933c5d83132d2460c01b6107b8565b600080369050146101db5761015067b3d07c93e15dcc6960c01b6107b8565b610164670848f5b7587f259a60c01b6107b8565b610178677607056d4b83e95960c01b6107b8565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506101b367b7ff281b6713313460c01b6107b8565b368060008037600080826000855af43d806000803e81600081146101d657816000f35b816000fd5b6101ef6707d26d689f0268c060c01b6107b8565b005b3480156101fd57600080fd5b506102456004803603602081101561021457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107bb565b60405180821515815260200191505060405180910390f35b34801561026957600080fd5b506102b16004803603602081101561028057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c2565b60405180821515815260200191505060405180910390f35b3480156102d557600080fd5b5061031d600480360360208110156102ec57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c9565b60405180821515815260200191505060405180910390f35b34801561034157600080fd5b506103896004803603602081101561035857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107d4565b60405180821515815260200191505060405180910390f35b3480156103ad57600080fd5b5061044f600480360360608110156103c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561040b57600080fd5b82018360208201111561041d57600080fd5b8035906020019184600183028401116401000000008311171561043f57600080fd5b90919293919293905050506107df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104d657600080fd5b506104df610b13565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561051757600080fd5b5061055f6004803603602081101561052e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b39565b60405180821515815260200191505060405180910390f35b34801561058357600080fd5b5061058c610b44565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105c457600080fd5b5061060c600480360360208110156105db57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6a565b005b34801561061a57600080fd5b506106626004803603602081101561063157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6d565b005b34801561067057600080fd5b506106b86004803603602081101561068757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b70565b60405180821515815260200191505060405180910390f35b3480156106dc57600080fd5b5061071f600480360360208110156106f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b77565b005b34801561072d57600080fd5b506107756004803603602081101561074457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107b8565b005b34801561078357600080fd5b5061078c610d27565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b50565b6000919050565b6000919050565b600060019050919050565b600060019050919050565b60606107f5675aa5d179f54cb87d60c01b6107b8565b61080967a226552386468aff60c01b610b6d565b61081d67bb06267d15cafc8560c01b610b6d565b61083167d0eb72184d8e714c60c01b610b6d565b61084567f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b6108fd6787dbbb5ffe0583c160c01b610b6d565b61091167f3741b7d431227a560c01b610b6d565b6109256737f078ab60df830760c01b6107b8565b61093967e4de2ba80b3b44d560c01b6107b8565b61094d675abe6251e319bc7c60c01b6107b8565b6109616726cc190ece09b7db60c01b6107b8565b6060610977676002c94a45713e1f60c01b6107b8565b61098b678d82d94b1795aafc60c01b6107b8565b60006109a167df08c3b5e2fa54f560c01b6107b8565b8673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610a0d576040519150601f19603f3d011682016040523d82523d6000602084013e610a12565b606091505b508093508192505050610a2f67f28a312aa9cfaa7160c01b6107b8565b610a4367162325a0fb69618f60c01b6107b8565b610a576711f6077f17c7465a60c01b6107b8565b80610aca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b610ade6780640c61604c38b060c01b6107b8565b610af267157aa11e3950a2a260c01b6107b8565b610b06671a32fc353aeb8d2f60c01b6107b8565b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b50565b6000919050565b610b8b67c3094137b7a928f360c01b6107b8565b610b9f67a226552386468aff60c01b610b6d565b610bb367bb06267d15cafc8560c01b610b6d565b610bc767d0eb72184d8e714c60c01b610b6d565b610bdb67f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b610c936787dbbb5ffe0583c160c01b610b6d565b610ca767f3741b7d431227a560c01b610b6d565b610cbb6710c6caed8159651f60c01b6107b8565b610ccf67ac6d8f9c43d3285d60c01b6107b8565b610ce3679d4a82d94581f52860c01b6107b8565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class PersonalAccountRegistry__factory extends ethers_1.ContractFactory {
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
exports.PersonalAccountRegistry__factory = PersonalAccountRegistry__factory;
PersonalAccountRegistry__factory.bytecode = _bytecode;
PersonalAccountRegistry__factory.abi = _abi;
