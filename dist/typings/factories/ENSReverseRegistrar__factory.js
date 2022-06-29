"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSReverseRegistrar__factory = void 0;
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
                name: "initializer",
                type: "address",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [],
        name: "ADDR_REVERSE_NODE",
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
                internalType: "bytes8",
                name: "c__29e7a9c7",
                type: "bytes8",
            },
        ],
        name: "c_29e7a9c7",
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
                name: "c__29e7a9c7",
                type: "bytes8",
            },
        ],
        name: "c_false29e7a9c7",
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
                name: "c__29e7a9c7",
                type: "bytes8",
            },
        ],
        name: "c_true29e7a9c7",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "claim",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
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
            {
                internalType: "address",
                name: "resolver_",
                type: "address",
            },
        ],
        name: "claimWithResolver",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ENSRegistry",
                name: "registry_",
                type: "address",
            },
            {
                internalType: "contract ENSNameResolver",
                name: "resolver_",
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
                internalType: "address",
                name: "addr_",
                type: "address",
            },
        ],
        name: "node",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                internalType: "contract ENSRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "resolver",
        outputs: [
            {
                internalType: "contract ENSNameResolver",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "setName",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061002b675e592fe27197979c60c01b6100a460201b60201c565b61004567eca2e4778f3efef360c01b6100a460201b60201c565b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061009f672881dd3a1d75b6e160c01b6100a760201b60201c565b6100aa565b50565b50565b6115e4806100b96000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80633a4442ed1161009757806398f4a9411161006657806398f4a94114610424578063bde481af14610483578063bffbe61c146104e2578063c47f00271461053a576100f5565b80633a4442ed14610325578063485cc9551461036e5780637b103999146103d25780637cf8a2eb14610406576100f5565b806318121646116100d357806318121646146102055780631e83409a1461024e5780632e6afd6e146102a6578063392e53cd14610305576100f5565b806304f3bcec146100fa5780630f5a54661461012e5780631262ed1c146101a6575b600080fd5b610102610609565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101906004803603604081101561014457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062f565b6040518082815260200191505060405180910390f35b6101ed600480360360208110156101bc57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061067f565b60405180821515815260200191505060405180910390f35b61024c6004803603602081101561021b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061068a565b005b6102906004803603602081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061068d565b6040518082815260200191505060405180910390f35b6102ed600480360360208110156102bc57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506106dd565b60405180821515815260200191505060405180910390f35b61030d6106e4565b60405180821515815260200191505060405180910390f35b61036c6004803603602081101561033b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610777565b005b6103d06004803603604081101561038457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077a565b005b6103da610a4a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040e610a70565b6040518082815260200191505060405180910390f35b61046b6004803603602081101561043a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a97565b60405180821515815260200191505060405180910390f35b6104ca6004803603602081101561049957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610aa2565b60405180821515815260200191505060405180910390f35b610524600480360360208110156104f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa9565b6040518082815260200191505060405180910390f35b6105f36004803603602081101561055057600080fd5b810190808035906020019064010000000081111561056d57600080fd5b82018360208201111561057f57600080fd5b803590602001918460018302840111640100000000831117156105a157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b5e565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006106456766215c18a365c9c560c01b610777565b61065967ff9c8324359387d860c01b610777565b61066d675cda4055a6a93da160c01b610777565b6106778383610d1f565b905092915050565b600060019050919050565b50565b60006106a36746ca7fae323bdd0e60c01b610777565b6106b767046ff7d5be837b3160c01b610777565b6106cb672b9765f688075e1b60c01b610777565b6106d6826000610d1f565b9050919050565b6000919050565b60006106fa6726ed6cc6ca12515c60c01b61068a565b61070e67f3fc49482028cbb860c01b61068a565b6107226740317a79cae6a3ff60c01b61068a565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b50565b61078e67e539342b0ae7f28c60c01b610777565b6107a267b2266613e068a5ae60c01b61068a565b6107b6676a66a63870f964f960c01b61068a565b6107ca6772f22eca890742ba60c01b61068a565b6107de67c8ab57d60023f99860c01b61068a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806115a9602f913960400191505060405180910390fd5b61089667d31dec9098d614f660c01b61068a565b6108aa67a184879381a9c67460c01b61068a565b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108ff675e44e6e1c885710560c01b61068a565b61091367c627f7fd501e0b5160c01b610777565b610927670d6ff072c181214560c01b610777565b61093b67aa1438c046ab10c960c01b610777565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061099067bc458f9e17b5ec7e60c01b610777565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506109e56732ca1833e9907bb960c01b61068a565b6109f9672942130a5b94b82160c01b61068a565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b81565b600060019050919050565b6000919050565b6000610abf67bcf814991273788560c01b610777565b610ad367344b09aa890ac87960c01b610777565b610ae76702c597c75fc8de5860c01b610777565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b610b2a8373ffffffffffffffffffffffffffffffffffffffff166114bd565b6040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b6000610b746798da84a4ab1962b660c01b610777565b610b88671b16f3d335b6e47660c01b610777565b610b9c67d76e40928d20283d60c01b610777565b6000610bca30600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610d1f565b9050610be067879e943436cc66b960c01b610777565b610bf467369b96312ee447b960c01b610777565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637737221382856040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c89578082015181840152602081019050610c6e565b50505050905090810190601f168015610cb65780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610cd657600080fd5b505af1158015610cea573d6000803e3d6000fd5b50505050610d02674fbb5285401f983c60c01b610777565b610d16675f75a63c3fbfa6a360c01b610777565b80915050919050565b6000610d3567cbd291c61c1fed8a60c01b610777565b610d4967e13ab3067701b2c160c01b610777565b610d5d67b8bfb8754307d1bf60c01b610777565b6000610d7e3373ffffffffffffffffffffffffffffffffffffffff166114bd565b9050610d94678bf2f6e1023cff9a60c01b610777565b610da867573d7f8b4e7d104260c01b610777565b60007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050610e12671508e9c1dc7eb26660c01b610777565b610e2667f769b1764bb9c26260c01b610777565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610e9b57600080fd5b505afa158015610eaf573d6000803e3d6000fd5b505050506040513d6020811015610ec557600080fd5b81019080805190602001909291905050509050610eec673e81217cedb7e53960c01b610777565b610f0067a8a1ffe21d6c086160c01b610777565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141580156110165750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fab57600080fd5b505afa158015610fbf573d6000803e3d6000fd5b505050506040513d6020811015610fd557600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156112c95761102f6726d17378b4b7a59a60c01b610777565b6110436718d37d0437f4c86660c01b610777565b61105767b856ee14e2c142f760c01b610777565b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111dc5761109e671b33fe493236a4fc60c01b610777565b6110b26759a6fed70f4da4f360c01b610777565b6110c667dd71181abe755d9860c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85306040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b15801561118457600080fd5b505af1158015611198573d6000803e3d6000fd5b505050506040513d60208110156111ae57600080fd5b8101908080519060200190929190505050506111d4675006325aa799a98b60c01b610777565b3090506111f1565b6111f0678c0d74a9ba0fbc2660c01b610777565b5b61120567c67d9103334a355660c01b610777565b61121967ffb5e9aa08f8c75f60c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156112ac57600080fd5b505af11580156112c0573d6000803e3d6000fd5b505050506112de565b6112dd67903442241e2eec9060c01b610777565b5b6112f2674b605d35a056ac9460c01b610777565b61130667912abbd721a0261a60c01b610777565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114745761134d673110383992fe9e8660c01b610777565b61136167c2af4834795e6f1c60c01b610777565b61137567c83116539ea0813260c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85896040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b15801561143357600080fd5b505af1158015611447573d6000803e3d6000fd5b505050506040513d602081101561145d57600080fd5b810190808051906020019092919050505050611489565b611488676067c5ce00f313d260c01b610777565b5b61149d6743ca19565f27759f60c01b610777565b6114b167eea6109e6afbaaed60c01b610777565b81935050505092915050565b60006114d3672c144eb663cdf4f860c01b6115a5565b6114e767ada98ff3757496c060c01b6115a5565b6114fb672ba36b39e8cc107a60c01b6115a5565b60006115116736defab92616d2bf60c01b6115a5565b7f303132333435363738396162636465660000000000000000000000000000000060285b600081111561156b5760018103905081600f86161a815360108504945060018103905081600f86161a8153601085049450611535565b50602860002091505061158867bcad0247232d1c4960c01b6115a5565b61159c677824e78d495d1c9b60c01b6115a5565b80915050919050565b5056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSReverseRegistrar__factory extends ethers_1.ContractFactory {
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
exports.ENSReverseRegistrar__factory = ENSReverseRegistrar__factory;
ENSReverseRegistrar__factory.bytecode = _bytecode;
ENSReverseRegistrar__factory.abi = _abi;
