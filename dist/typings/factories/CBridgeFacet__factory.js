"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBridgeFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "CannotBridgeToSameNetwork",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidConfig",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeValueWithERC",
        type: "error",
    },
    {
        inputs: [],
        name: "NoTransferToNullAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAValidSpender",
        type: "error",
    },
    {
        inputs: [],
        name: "NullAddrIsNotAnERC20Token",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "cBridge",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "CBridgeInitialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "bridgeUsed",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "from",
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
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "chainIdTo",
                type: "uint256",
            },
        ],
        name: "TransferStarted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
        ],
        name: "UpdatedCBridgeAddress",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "maxSlippage",
                        type: "uint32",
                    },
                    {
                        internalType: "uint64",
                        name: "dstChainId",
                        type: "uint64",
                    },
                    {
                        internalType: "uint64",
                        name: "nonce",
                        type: "uint64",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "receiver",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                ],
                internalType: "struct CBridgeFacet.CBridgeData",
                name: "_cBridgeData",
                type: "tuple",
            },
        ],
        name: "bridgeTokensCBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "cBridge",
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
        name: "chainId",
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
        inputs: [
            {
                internalType: "address",
                name: "_cBridge",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_chainId",
                type: "uint256",
            },
        ],
        name: "initializeCBridge",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newAddress",
                type: "address",
            },
        ],
        name: "updateBridgeAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506001600081905550611842806100286000396000f3fe60806040526004361061004a5760003560e01c806336d4b75f1461004f5780635277cbc71461007a578063645c8a4b146100965780639a8a0592146100bf578063fc613675146100ea575b600080fd5b34801561005b57600080fd5b50610064610113565b6040516100719190611236565b60405180910390f35b610094600480360381019061008f9190610ff4565b610139565b005b3480156100a257600080fd5b506100bd60048036038101906100b89190610f66565b610244565b005b3480156100cb57600080fd5b506100d4610326565b6040516100e19190611463565b60405180910390f35b3480156100f657600080fd5b50610111600480360381019061010c9190610f8f565b61032c565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002600054141561017f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017690611423565b60405180910390fd5b60026000819055506101a78160a001602081019061019d9190610f66565b8260600135610423565b6101c0818036038101906101bb919061101d565b610461565b7f83bd4b75444b26482a091d91d32e43a65722f9fd8267a590beadccd9e61539e88160a00160208101906101f49190610f66565b338360800160208101906102089190610f66565b8460600135856020016020810190610220919061106f565b60405161023195949392919061137d565b60405180910390a1600160008190555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102ab576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fef1a021f4afad10827a9f886313f92d00348a53d0b0df8d0aa270a0ac3379bc58160405161031b9190611236565b60405180910390a150565b60025481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806103675750600081145b1561039e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806002819055507f5b114a545b5a08e3628017ac6e1af1f29e3f593dde50a4a93ab76f2a2220cd388282604051610417929190611312565b60405180910390a15050565b61045d8282600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610592565b5050565b806020015167ffffffffffffffff1660025414156104ab576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e08160a00151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683606001516106b6565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a5977fbb82608001518360a0015184606001518560200151866040015187600001516040518763ffffffff1660e01b815260040161055d969594939291906112b1565b600060405180830381600087803b15801561057757600080fd5b505af115801561058b573d6000803e3d6000fd5b5050505050565b60008214156105cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106115781341461060c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b1565b6000341461064a576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061065584610821565b9050610663843330866108ed565b828161066e86610821565b61067891906114d5565b146106af576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106f05761081c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610757576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610794929190611251565b60206040518083038186803b1580156107ac57600080fd5b505afa1580156107c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e49190611046565b90508181101561081a5761081984847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6109cd565b5b505b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146108e4578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161088f9190611236565b60206040518083038186803b1580156108a757600080fd5b505afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190611046565b6108e6565b475b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610954576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109bb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c784848484610b2b565b50505050565b6000811480610a66575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610a14929190611251565b60206040518083038186803b158015610a2c57600080fd5b505afa158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611046565b145b610aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9c90611443565b60405180910390fd5b610b268363095ea7b360e01b8484604051602401610ac4929190611312565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bb4565b505050565b610bae846323b872dd60e01b858585604051602401610b4c9392919061127a565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bb4565b50505050565b6000610c16826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c7b9092919063ffffffff16565b9050600081511115610c765780806020019051810190610c369190610fcb565b610c75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6c90611403565b60405180910390fd5b5b505050565b6060610c8a8484600085610c93565b90509392505050565b606082471015610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf9061135d565b60405180910390fd5b610ce185610da7565b610d20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d17906113e3565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610d49919061121f565b60006040518083038185875af1925050503d8060008114610d86576040519150601f19603f3d011682016040523d82523d6000602084013e610d8b565b606091505b5091509150610d9b828286610dca565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610dda57829050610e2a565b600083511115610ded5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e21919061133b565b60405180910390fd5b9392505050565b600081359050610e40816117c2565b92915050565b600081519050610e55816117d9565b92915050565b600060c08284031215610e6d57600080fd5b81905092915050565b600060c08284031215610e8857600080fd5b610e9260c061147e565b90506000610ea284828501610f3c565b6000830152506020610eb684828501610f51565b6020830152506040610eca84828501610f51565b6040830152506060610ede84828501610f12565b6060830152506080610ef284828501610e31565b60808301525060a0610f0684828501610e31565b60a08301525092915050565b600081359050610f21816117f0565b92915050565b600081519050610f36816117f0565b92915050565b600081359050610f4b81611807565b92915050565b600081359050610f608161181e565b92915050565b600060208284031215610f7857600080fd5b6000610f8684828501610e31565b91505092915050565b60008060408385031215610fa257600080fd5b6000610fb085828601610e31565b9250506020610fc185828601610f12565b9150509250929050565b600060208284031215610fdd57600080fd5b6000610feb84828501610e46565b91505092915050565b600060c0828403121561100657600080fd5b600061101484828501610e5b565b91505092915050565b600060c0828403121561102f57600080fd5b600061103d84828501610e76565b91505092915050565b60006020828403121561105857600080fd5b600061106684828501610f27565b91505092915050565b60006020828403121561108157600080fd5b600061108f84828501610f51565b91505092915050565b6110a181611509565b82525050565b60006110b2826114a3565b6110bc81856114b9565b93506110cc818560208601611587565b80840191505092915050565b60006110e3826114ae565b6110ed81856114c4565b93506110fd818560208601611587565b61110681611649565b840191505092915050565b600061111e6026836114c4565b91506111298261165a565b604082019050919050565b60006111416007836114c4565b915061114c826116a9565b602082019050919050565b6000611164601d836114c4565b915061116f826116d2565b602082019050919050565b6000611187602a836114c4565b9150611192826116fb565b604082019050919050565b60006111aa601f836114c4565b91506111b58261174a565b602082019050919050565b60006111cd6036836114c4565b91506111d882611773565b604082019050919050565b6111ec81611547565b82525050565b6111fb81611551565b82525050565b61120a81611575565b82525050565b61121981611561565b82525050565b600061122b82846110a7565b915081905092915050565b600060208201905061124b6000830184611098565b92915050565b60006040820190506112666000830185611098565b6112736020830184611098565b9392505050565b600060608201905061128f6000830186611098565b61129c6020830185611098565b6112a960408301846111e3565b949350505050565b600060c0820190506112c66000830189611098565b6112d36020830188611098565b6112e060408301876111e3565b6112ed6060830186611210565b6112fa6080830185611210565b61130760a08301846111f2565b979650505050505050565b60006040820190506113276000830185611098565b61133460208301846111e3565b9392505050565b6000602082019050818103600083015261135581846110d8565b905092915050565b6000602082019050818103600083015261137681611111565b9050919050565b600060c082019050818103600083015261139681611134565b90506113a56020830188611098565b6113b26040830187611098565b6113bf6060830186611098565b6113cc60808301856111e3565b6113d960a0830184611201565b9695505050505050565b600060208201905081810360008301526113fc81611157565b9050919050565b6000602082019050818103600083015261141c8161117a565b9050919050565b6000602082019050818103600083015261143c8161119d565b9050919050565b6000602082019050818103600083015261145c816111c0565b9050919050565b600060208201905061147860008301846111e3565b92915050565b6000611488611499565b905061149482826115ba565b919050565b6000604051905090565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006114e082611547565b91506114eb83611547565b9250828210156114fe576114fd6115eb565b5b828203905092915050565b600061151482611527565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600061158082611561565b9050919050565b60005b838110156115a557808201518184015260208101905061158a565b838111156115b4576000848401525b50505050565b6115c382611649565b810181811067ffffffffffffffff821117156115e2576115e161161a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6342726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6117cb81611509565b81146117d657600080fd5b50565b6117e28161151b565b81146117ed57600080fd5b50565b6117f981611547565b811461180457600080fd5b50565b61181081611551565b811461181b57600080fd5b50565b61182781611561565b811461183257600080fd5b5056fea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class CBridgeFacet__factory extends ethers_1.ContractFactory {
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
exports.CBridgeFacet__factory = CBridgeFacet__factory;
CBridgeFacet__factory.bytecode = _bytecode;
CBridgeFacet__factory.abi = _abi;