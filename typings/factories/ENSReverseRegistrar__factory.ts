/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ENSReverseRegistrar,
  ENSReverseRegistrarInterface,
} from "../ENSReverseRegistrar";

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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b676f8209dd9a63129460c01b6100a460201b60201c565b610045675c69c8f577e02d3d60c01b6100a460201b60201c565b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061009f67c2a3594044fd8abd60c01b6100a760201b60201c565b6100aa565b50565b50565b6115e4806100b96000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80633a4442ed1161009757806398f4a9411161006657806398f4a94114610424578063bde481af14610483578063bffbe61c146104e2578063c47f00271461053a576100f5565b80633a4442ed14610325578063485cc9551461036e5780637b103999146103d25780637cf8a2eb14610406576100f5565b806318121646116100d357806318121646146102055780631e83409a1461024e5780632e6afd6e146102a6578063392e53cd14610305576100f5565b806304f3bcec146100fa5780630f5a54661461012e5780631262ed1c146101a6575b600080fd5b610102610609565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101906004803603604081101561014457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062f565b6040518082815260200191505060405180910390f35b6101ed600480360360208110156101bc57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061067f565b60405180821515815260200191505060405180910390f35b61024c6004803603602081101561021b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061068a565b005b6102906004803603602081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061068d565b6040518082815260200191505060405180910390f35b6102ed600480360360208110156102bc57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506106dd565b60405180821515815260200191505060405180910390f35b61030d6106e4565b60405180821515815260200191505060405180910390f35b61036c6004803603602081101561033b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610777565b005b6103d06004803603604081101561038457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077a565b005b6103da610a4a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61040e610a70565b6040518082815260200191505060405180910390f35b61046b6004803603602081101561043a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a97565b60405180821515815260200191505060405180910390f35b6104ca6004803603602081101561049957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610aa2565b60405180821515815260200191505060405180910390f35b610524600480360360208110156104f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa9565b6040518082815260200191505060405180910390f35b6105f36004803603602081101561055057600080fd5b810190808035906020019064010000000081111561056d57600080fd5b82018360208201111561057f57600080fd5b803590602001918460018302840111640100000000831117156105a157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b5e565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061064567d2960d2d4ccf641260c01b610777565b610659674dde54fedfa0a1fb60c01b610777565b61066d671195dbea4a45b62a60c01b610777565b6106778383610d1f565b905092915050565b600060019050919050565b50565b60006106a367e73e74dc1cde4c6660c01b610777565b6106b767493bc77c72a67cee60c01b610777565b6106cb671a80053592aef62260c01b610777565b6106d6826000610d1f565b9050919050565b6000919050565b60006106fa6740898dd11e0e3e1060c01b61068a565b61070e67730b1b0a3e6f252b60c01b61068a565b610722670e31b01a086623bd60c01b61068a565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b50565b61078e67528f8db0eff0fe0560c01b610777565b6107a2676c8c9b71ba9d910f60c01b61068a565b6107b667f602580a42808a9160c01b61068a565b6107ca6707611d848241fec060c01b61068a565b6107de6709ab29cd8b2d771d60c01b61068a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806115a9602f913960400191505060405180910390fd5b6108966786eee1b275e13e0e60c01b61068a565b6108aa6715362633e8a83eba60c01b61068a565b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108ff6738479f0480704ee560c01b61068a565b610913675a8e12226ca6688e60c01b610777565b61092767d2b3f9b5f962653c60c01b610777565b61093b67d805942413e78c0e60c01b610777565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610990677b2f45ba2ffc9a4760c01b610777565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506109e5675d2d15dcccb96a8860c01b61068a565b6109f96763708511b840b29260c01b61068a565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b81565b600060019050919050565b6000919050565b6000610abf67ddf4d47a0113320660c01b610777565b610ad3674d56a30118a6ca6c60c01b610777565b610ae7675cb17e03e62b306f60c01b610777565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b610b2a8373ffffffffffffffffffffffffffffffffffffffff166114bd565b6040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b6000610b7467f9f8b32029cf16f860c01b610777565b610b88676f09f58c3964057460c01b610777565b610b9c67df466dff93131bb360c01b610777565b6000610bca30600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610d1f565b9050610be067c68f2ac3bb69512960c01b610777565b610bf467304534a756e90ba560c01b610777565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637737221382856040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c89578082015181840152602081019050610c6e565b50505050905090810190601f168015610cb65780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015610cd657600080fd5b505af1158015610cea573d6000803e3d6000fd5b50505050610d02678bd330f8f9c7c09760c01b610777565b610d1667f003529dd94d0b6f60c01b610777565b80915050919050565b6000610d35672cf093615aba54e560c01b610777565b610d4967450e2d1ddd11833f60c01b610777565b610d5d678ca4deef9a617ce260c01b610777565b6000610d7e3373ffffffffffffffffffffffffffffffffffffffff166114bd565b9050610d9467a4008bb37bbc025f60c01b610777565b610da867936c7932d84c586960c01b610777565b60007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050610e1267d262b4294732a53460c01b610777565b610e2667fa4379c873c1e59660c01b610777565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610e9b57600080fd5b505afa158015610eaf573d6000803e3d6000fd5b505050506040513d6020811015610ec557600080fd5b81019080805190602001909291905050509050610eec67ffc895db000866c460c01b610777565b610f006717c7daa8ed33d01560c01b610777565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141580156110165750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fab57600080fd5b505afa158015610fbf573d6000803e3d6000fd5b505050506040513d6020811015610fd557600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156112c95761102f67fc9120fbbeef6bba60c01b610777565b6110436758e5d941daf01ec860c01b610777565b61105767c37abb70c0c438dc60c01b610777565b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111dc5761109e678a7d457a263bc95b60c01b610777565b6110b267e7c25e0abff3506360c01b610777565b6110c667e203e65c0b9fa95960c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85306040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b15801561118457600080fd5b505af1158015611198573d6000803e3d6000fd5b505050506040513d60208110156111ae57600080fd5b8101908080519060200190929190505050506111d46707e7ed03a35680bf60c01b610777565b3090506111f1565b6111f0679ad17ce5a0585e1260c01b610777565b5b611205670ae208f652e6c12f60c01b610777565b611219674dc4254c38db46dc60c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156112ac57600080fd5b505af11580156112c0573d6000803e3d6000fd5b505050506112de565b6112dd67d543d407e6fd112a60c01b610777565b5b6112f267aef9602430b6adff60c01b610777565b6113066717d0f38a4eb4a0d160c01b610777565b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114745761134d67ea8e17d360e22ea760c01b610777565b611361675e8b153b5e0b52b260c01b610777565b61137567baed924eb8c66f3260c01b610777565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85896040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b15801561143357600080fd5b505af1158015611447573d6000803e3d6000fd5b505050506040513d602081101561145d57600080fd5b810190808051906020019092919050505050611489565b61148867ae1d608257f3cfd060c01b610777565b5b61149d6747c0e75969bba29260c01b610777565b6114b16782bc0fdbc1b7eed260c01b610777565b81935050505092915050565b60006114d36730ffd5821ec39f5c60c01b6115a5565b6114e76734f99536fee0073f60c01b6115a5565b6114fb677217e7ade9b6f09460c01b6115a5565b6000611511677fdd709bff0c78a060c01b6115a5565b7f303132333435363738396162636465660000000000000000000000000000000060285b600081111561156b5760018103905081600f86161a815360108504945060018103905081600f86161a8153601085049450611535565b506028600020915050611588679e92a89f4439b28460c01b6115a5565b61159c670235268b4e7f923b60c01b6115a5565b80915050919050565b5056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a";

type ENSReverseRegistrarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ENSReverseRegistrarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ENSReverseRegistrar__factory extends ContractFactory {
  constructor(...args: ENSReverseRegistrarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ENSReverseRegistrar> {
    return super.deploy(overrides || {}) as Promise<ENSReverseRegistrar>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ENSReverseRegistrar {
    return super.attach(address) as ENSReverseRegistrar;
  }
  connect(signer: Signer): ENSReverseRegistrar__factory {
    return super.connect(signer) as ENSReverseRegistrar__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ENSReverseRegistrarInterface {
    return new utils.Interface(_abi) as ENSReverseRegistrarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSReverseRegistrar {
    return new Contract(address, _abi, signerOrProvider) as ENSReverseRegistrar;
  }
}
