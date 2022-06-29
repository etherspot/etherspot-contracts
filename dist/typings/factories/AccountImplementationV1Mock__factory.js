"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountImplementationV1Mock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "registry_",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
        inputs: [
            {
                internalType: "bytes8",
                name: "c__274649f2",
                type: "bytes8",
            },
        ],
        name: "c_274649f2",
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
        name: "c_305923d6",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__3add61c5",
                type: "bytes8",
            },
        ],
        name: "c_3add61c5",
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
                name: "c__274649f2",
                type: "bytes8",
            },
        ],
        name: "c_false274649f2",
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
                name: "c__3add61c5",
                type: "bytes8",
            },
        ],
        name: "c_false3add61c5",
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
                name: "c__274649f2",
                type: "bytes8",
            },
        ],
        name: "c_true274649f2",
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
        inputs: [
            {
                internalType: "bytes8",
                name: "c__3add61c5",
                type: "bytes8",
            },
        ],
        name: "c_true3add61c5",
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
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
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
        inputs: [
            {
                internalType: "address",
                name: "registry_",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
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
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "tokensReceived",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620016b4380380620016b4833981810160405260208110156200003757600080fd5b810190808051906020019092919050505062000064675e592fe27197979c60c01b6200015c60201b60201c565b6200008067eca2e4778f3efef360c01b6200015c60201b60201c565b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000dc6709bbddebe144bcac60c01b6200015f60201b60201c565b620000f8676ade43bdb8e559bf60c01b6200016260201b60201c565b620001146721a8bb2f8620330d60c01b6200016260201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000165565b50565b50565b50565b61153f80620001756000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063392e53cd116100b85780638f27e6b61161007c5780638f27e6b6146108a2578063b49762a1146108eb578063c4d66de81461094a578063ef1ea9581461098e578063f23a6e61146109d7578063fdec3f2914610ad757610136565b8063392e53cd1461073157806345ebf7af1461075157806377dbbbcf146107b05780637b1039991461080f5780638c0b5ab11461084357610136565b806318121646116100ff57806318121646146104c757806320c13b0b14610510578063249cb3fa146106115780632e6afd6e1461067357806334d23875146106d257610136565b806223de291461013b57806302f64b7c146102735780631262ed1c146102bc578063150b7a021461031b5780631626ba7e14610411575b600080fd5b610271600480360360c081101561015157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156101d857600080fd5b8201836020820111156101ea57600080fd5b8035906020019184600183028401116401000000008311171561020c57600080fd5b90919293919293908035906020019064010000000081111561022d57600080fd5b82018360208201111561023f57600080fd5b8035906020019184600183028401116401000000008311171561026157600080fd5b9091929391929390505050610b36565b005b6102ba6004803603602081101561028957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b54565b005b610303600480360360208110156102d257600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b57565b60405180821515815260200191505060405180910390f35b6103dc6004803603608081101561033157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561039857600080fd5b8201836020820111156103aa57600080fd5b803590602001918460018302840111640100000000831117156103cc57600080fd5b9091929391929390505050610b62565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104926004803603604081101561042757600080fd5b81019080803590602001909291908035906020019064010000000081111561044e57600080fd5b82018360208201111561046057600080fd5b8035906020019184600183028401116401000000008311171561048257600080fd5b9091929391929390505050610bb3565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61050e600480360360208110156104dd57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d8a565b005b6105dc6004803603604081101561052657600080fd5b810190808035906020019064010000000081111561054357600080fd5b82018360208201111561055557600080fd5b8035906020019184600183028401116401000000008311171561057757600080fd5b90919293919293908035906020019064010000000081111561059857600080fd5b8201836020820111156105aa57600080fd5b803590602001918460018302840111640100000000831117156105cc57600080fd5b9091929391929390505050610d8d565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61065d6004803603604081101561062757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f91565b6040518082815260200191505060405180910390f35b6106ba6004803603602081101561068957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061113b565b60405180821515815260200191505060405180910390f35b610719600480360360208110156106e857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611142565b60405180821515815260200191505060405180910390f35b61073961114d565b60405180821515815260200191505060405180910390f35b6107986004803603602081101561076757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506111e0565b60405180821515815260200191505060405180910390f35b6107f7600480360360208110156107c657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506111e7565b60405180821515815260200191505060405180910390f35b6108176111f2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61088a6004803603602081101561085957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611218565b60405180821515815260200191505060405180910390f35b6108e9600480360360208110156108b857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061121f565b005b6109326004803603602081101561090157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611222565b60405180821515815260200191505060405180910390f35b61098c6004803603602081101561096057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611229565b005b6109d5600480360360208110156109a457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506114a3565b005b610aa2600480360360a08110156109ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610a5e57600080fd5b820183602082011115610a7057600080fd5b80359060200191846001830284011164010000000083111715610a9257600080fd5b90919293919293905050506114a6565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610b1e60048036036020811015610aed57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506114f8565b60405180821515815260200191505060405180910390f35b610b4a67017df31b87810c5460c01b610b54565b5050505050505050565b50565b600060019050919050565b6000610b7867b98303ad269413cc60c01b610b54565b610b8c67d918383005e5446f60c01b610b54565b610ba0674f2f4cdbd8cfb29560c01b610b54565b63150b7a0260e01b905095945050505050565b6000610bc967b5797d6b0e7178f460c01b610b54565b610bdd6746f24b4f5fdfa5b960c01b610b54565b610bf167e0b2abc1e853224260c01b610b54565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1e382ce308686866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b158015610cb657600080fd5b505afa158015610cca573d6000803e3d6000fd5b505050506040513d6020811015610ce057600080fd5b81019080805190602001909291905050508015610d0d5750610d0c678166bab12740c46b60c01b6111e7565b5b80610d285750610d2767c9993a938969404a60c01b6111e0565b5b610d395763ffffffff60e01b610d81565b60405160200180807f697356616c69645369676e617475726528627974657333322c62797465732900815250601f019050604051602081830303815290604052805190602001205b90509392505050565b50565b6000610da3673366cc666f8f6ecb60c01b610b54565b610db767652c29ed636ab5f860c01b610b54565b610dcb676f4f2b259049e42b60c01b610b54565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663124e9eb330878787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060206040518083038186803b158015610ebc57600080fd5b505afa158015610ed0573d6000803e3d6000fd5b505050506040513d6020811015610ee657600080fd5b81019080805190602001909291905050508015610f135750610f1267a42e2906e3e8a15c60c01b6111e7565b5b80610f2e5750610f2d672a01fa3e9fa5e5a260c01b6111e0565b5b610f3f5763ffffffff60e01b610f87565b60405160200180807f697356616c69645369676e61747572652862797465732c627974657329000000815250601d019050604051602081830303815290604052805190602001205b9050949350505050565b6000610fa767ca3ee0fe51202e0160c01b610b54565b610fbb67b4a80b43620676ca60c01b610b54565b610fcf67534936d0977ddc7160c01b610b54565b6000610fe567d1e0b5335b68fd6060c01b610b54565b610ff967363fb22d296acca360c01b610b54565b60405160200180807f455243373737546f6b656e73526563697069656e7400000000000000000000008152506015019050604051602081830303815290604052805190602001208414801561107957503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156110f45761109267074a18f7e88ecc1060c01b610b54565b6110a667263b3f1d731623f560c01b610b54565b60405160200180807f455243313832305f4143434550545f4d414749430000000000000000000000008152506014019050604051602081830303815290604052805190602001209050611109565b61110867a481020f1e3f0a9860c01b610b54565b5b61111d6759eee593d0b7818e60c01b610b54565b61113167d8e2a5e8436cb2b960c01b610b54565b8091505092915050565b6000919050565b600060019050919050565b60006111636726ed6cc6ca12515c60c01b610d8a565b61117767f3fc49482028cbb860c01b610d8a565b61118b6740317a79cae6a3ff60c01b610d8a565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000919050565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000919050565b50565b6000919050565b61123d67396904bfaa4b979260c01b610b54565b61125167b2266613e068a5ae60c01b610d8a565b611265676a66a63870f964f960c01b610d8a565b6112796772f22eca890742ba60c01b610d8a565b61128d67c8ab57d60023f99860c01b610d8a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611504602f913960400191505060405180910390fd5b61134567d31dec9098d614f660c01b610d8a565b61135967a184879381a9c67460c01b610d8a565b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113ae675e44e6e1c885710560c01b610d8a565b6113c267ff494a582c3fbf5c60c01b610b54565b6113d66729192f1db3add72f60c01b610b54565b6113ea67fc42a1175b48bb9960c01b610b54565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061143f6732ca1833e9907bb960c01b610d8a565b611453672942130a5b94b82160c01b610d8a565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b50565b60006114bc679d34bdca53bef64660c01b610b54565b6114d06734111326528019b960c01b610b54565b6114e46755f10e9de860303160c01b610b54565b63f23a6e6160e01b90509695505050505050565b60006001905091905056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class AccountImplementationV1Mock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(registry_, overrides) {
        return super.deploy(registry_, overrides || {});
    }
    getDeployTransaction(registry_, overrides) {
        return super.getDeployTransaction(registry_, overrides || {});
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
exports.AccountImplementationV1Mock__factory = AccountImplementationV1Mock__factory;
AccountImplementationV1Mock__factory.bytecode = _bytecode;
AccountImplementationV1Mock__factory.abi = _abi;
