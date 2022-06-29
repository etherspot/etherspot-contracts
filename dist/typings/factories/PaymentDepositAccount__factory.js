"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDepositAccount__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__624bed52",
                type: "bytes8",
            },
        ],
        name: "c_624bed52",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__e208e0f4",
                type: "bytes8",
            },
        ],
        name: "c_e208e0f4",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__624bed52",
                type: "bytes8",
            },
        ],
        name: "c_false624bed52",
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
                name: "c__e208e0f4",
                type: "bytes8",
            },
        ],
        name: "c_falsee208e0f4",
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
                name: "c__624bed52",
                type: "bytes8",
            },
        ],
        name: "c_true624bed52",
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
                name: "c__e208e0f4",
                type: "bytes8",
            },
        ],
        name: "c_truee208e0f4",
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
        name: "controller",
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
        name: "executeTransaction",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405261001e679894797dc84081af60c01b61009760201b60201c565b610038674e0f327275f95bf160c01b61009760201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061009267bca2a619426d502460c01b61009a60201b60201c565b61009d565b50565b50565b61080c806100ac6000396000f3fe60806040526004361061007f5760003560e01c8063abe124f61161004e578063abe124f6146102f8578063b719e0571461034e578063c25a4496146103ba578063f77c47911461041057610086565b8063062e4f9c1461008b5780633f579f42146100f75780636480a27b146102205780636c3da61f1461028c57610086565b3661008657005b600080fd5b34801561009757600080fd5b506100df600480360360208110156100ae57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610451565b60405180821515815260200191505060405180910390f35b34801561010357600080fd5b506101a56004803603606081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561016157600080fd5b82018360208201111561017357600080fd5b8035906020019184600183028401116401000000008311171561019557600080fd5b9091929391929390505050610458565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e55780820151818401526020810190506101ca565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022c57600080fd5b506102746004803603602081101561024357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061078c565b60405180821515815260200191505060405180910390f35b34801561029857600080fd5b506102e0600480360360208110156102af57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610797565b60405180821515815260200191505060405180910390f35b34801561030457600080fd5b5061034c6004803603602081101561031b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107a2565b005b34801561035a57600080fd5b506103a26004803603602081101561037157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107a5565b60405180821515815260200191505060405180910390f35b3480156103c657600080fd5b5061040e600480360360208110156103dd57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107ac565b005b34801561041c57600080fd5b506104256107af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000919050565b606061046e67d75916bd4c2e4fad60c01b6107ac565b61048267a226552386468aff60c01b6107a2565b61049667bb06267d15cafc8560c01b6107a2565b6104aa67d0eb72184d8e714c60c01b6107a2565b6104be67f128b7cf1088330a60c01b6107a2565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806107d4602c913960400191505060405180910390fd5b6105766787dbbb5ffe0583c160c01b6107a2565b61058a67f3741b7d431227a560c01b6107a2565b61059e67610428765944746860c01b6107ac565b6105b2676e804da1f05284de60c01b6107ac565b6105c6670a116b54072e078160c01b6107ac565b6105da67fae6e3328ae368d560c01b6107ac565b60606105f067400bca7a996bd4dc60c01b6107ac565b610604678a96bcbb24b128ac60c01b6107ac565b600061061a670c06ccf9e79a56eb60c01b6107ac565b8673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610686576040519150601f19603f3d011682016040523d82523d6000602084013e61068b565b606091505b5080935081925050506106a8676c9308f9612de55060c01b6107ac565b6106bc67b4c2e51df69df26f60c01b6107ac565b6106d067582ecd5a0e7e114b60c01b6107ac565b80610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b610757673a312ec397e2590e60c01b6107ac565b61076b6764b769ece4930ed060c01b6107ac565b61077f67ece725b1dc907d4260c01b6107ac565b8192505050949350505050565b600060019050919050565b600060019050919050565b50565b6000919050565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class PaymentDepositAccount__factory extends ethers_1.ContractFactory {
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
exports.PaymentDepositAccount__factory = PaymentDepositAccount__factory;
PaymentDepositAccount__factory.bytecode = _bytecode;
PaymentDepositAccount__factory.abi = _abi;
