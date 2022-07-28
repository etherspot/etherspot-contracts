/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PersonalAccountImplementationV1,
  PersonalAccountImplementationV1Interface,
} from "../PersonalAccountImplementationV1";

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
        name: "c__d5fdf5ee",
        type: "bytes8",
      },
    ],
    name: "c_d5fdf5ee",
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
        name: "c__d5fdf5ee",
        type: "bytes8",
      },
    ],
    name: "c_falsed5fdf5ee",
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
        internalType: "bytes8",
        name: "c__d5fdf5ee",
        type: "bytes8",
      },
    ],
    name: "c_trued5fdf5ee",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b67a79944efae3efdb160c01b6100be60201b60201c565b610045676842a75f5077f4b960c01b6100be60201b60201c565b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061009f674007e6a61dbcd7f160c01b6100c160201b60201c565b6100b967abc627493615471e60c01b6100c460201b60201c565b6100c7565b50565b50565b50565b61153f806100d66000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063392e53cd116100b85780638f27e6b61161007c5780638f27e6b6146108a2578063aec6b680146108eb578063b49762a114610934578063c4d66de814610993578063ddd007be146109d7578063f23a6e6114610a3657610136565b8063392e53cd1461073157806345ebf7af146107515780634f952741146107b057806377dbbbcf1461080f5780637b1039991461086e57610136565b806318121646116100ff57806318121646146104c757806320c13b0b14610510578063249cb3fa146106115780632e6afd6e1461067357806334d23875146106d257610136565b806223de291461013b57806302f64b7c146102735780631262ed1c146102bc578063150b7a021461031b5780631626ba7e14610411575b600080fd5b610271600480360360c081101561015157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156101d857600080fd5b8201836020820111156101ea57600080fd5b8035906020019184600183028401116401000000008311171561020c57600080fd5b90919293919293908035906020019064010000000081111561022d57600080fd5b82018360208201111561023f57600080fd5b8035906020019184600183028401116401000000008311171561026157600080fd5b9091929391929390505050610b36565b005b6102ba6004803603602081101561028957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b54565b005b610303600480360360208110156102d257600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b57565b60405180821515815260200191505060405180910390f35b6103dc6004803603608081101561033157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561039857600080fd5b8201836020820111156103aa57600080fd5b803590602001918460018302840111640100000000831117156103cc57600080fd5b9091929391929390505050610b62565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104926004803603604081101561042757600080fd5b81019080803590602001909291908035906020019064010000000081111561044e57600080fd5b82018360208201111561046057600080fd5b8035906020019184600183028401116401000000008311171561048257600080fd5b9091929391929390505050610bb3565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61050e600480360360208110156104dd57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d8a565b005b6105dc6004803603604081101561052657600080fd5b810190808035906020019064010000000081111561054357600080fd5b82018360208201111561055557600080fd5b8035906020019184600183028401116401000000008311171561057757600080fd5b90919293919293908035906020019064010000000081111561059857600080fd5b8201836020820111156105aa57600080fd5b803590602001918460018302840111640100000000831117156105cc57600080fd5b9091929391929390505050610d8d565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b61065d6004803603604081101561062757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f91565b6040518082815260200191505060405180910390f35b6106ba6004803603602081101561068957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061113b565b60405180821515815260200191505060405180910390f35b610719600480360360208110156106e857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611142565b60405180821515815260200191505060405180910390f35b61073961114d565b60405180821515815260200191505060405180910390f35b6107986004803603602081101561076757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506111e0565b60405180821515815260200191505060405180910390f35b6107f7600480360360208110156107c657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506111e7565b60405180821515815260200191505060405180910390f35b6108566004803603602081101561082557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506111ee565b60405180821515815260200191505060405180910390f35b6108766111f9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108e9600480360360208110156108b857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061121f565b005b6109326004803603602081101561090157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611222565b005b61097b6004803603602081101561094a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611225565b60405180821515815260200191505060405180910390f35b6109d5600480360360208110156109a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061122c565b005b610a1e600480360360208110156109ed57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506114a6565b60405180821515815260200191505060405180910390f35b610b01600480360360a0811015610a4c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610abd57600080fd5b820183602082011115610acf57600080fd5b80359060200191846001830284011164010000000083111715610af157600080fd5b90919293919293905050506114b1565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610b4a674866bcfec8e3cd6a60c01b610b54565b5050505050505050565b50565b600060019050919050565b6000610b7867f3b833c99cc5d2f960c01b610b54565b610b8c678d358e36407b7c9e60c01b610b54565b610ba067766daa0438dcfdd960c01b610b54565b63150b7a0260e01b905095945050505050565b6000610bc96740443210a420a75b60c01b610b54565b610bdd678510cf7f2e00c14b60c01b610b54565b610bf1674d8c62d9dc16f6df60c01b610b54565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1e382ce308686866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b158015610cb657600080fd5b505afa158015610cca573d6000803e3d6000fd5b505050506040513d6020811015610ce057600080fd5b81019080805190602001909291905050508015610d0d5750610d0c672a1ee134eefdd02760c01b6111ee565b5b80610d285750610d27675fe62d16ec301a8e60c01b6111e0565b5b610d395763ffffffff60e01b610d81565b60405160200180807f697356616c69645369676e617475726528627974657333322c62797465732900815250601f019050604051602081830303815290604052805190602001205b90509392505050565b50565b6000610da3679a503bb6ab4f5fc460c01b610b54565b610db76746b595dc4e01aa2460c01b610b54565b610dcb6747731c7784da1ef860c01b610b54565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663124e9eb330878787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060206040518083038186803b158015610ebc57600080fd5b505afa158015610ed0573d6000803e3d6000fd5b505050506040513d6020811015610ee657600080fd5b81019080805190602001909291905050508015610f135750610f12672fc4e7099fb5e16d60c01b6111ee565b5b80610f2e5750610f2d6796bfc52e5444adcf60c01b6111e0565b5b610f3f5763ffffffff60e01b610f87565b60405160200180807f697356616c69645369676e61747572652862797465732c627974657329000000815250601d019050604051602081830303815290604052805190602001205b9050949350505050565b6000610fa76736585a23f69c9f4560c01b610b54565b610fbb67169fe154793ac09e60c01b610b54565b610fcf675f78f58a8cced1ee60c01b610b54565b6000610fe567ef6fa97f9cf7089060c01b610b54565b610ff9672b0a8243d47443e960c01b610b54565b60405160200180807f455243373737546f6b656e73526563697069656e7400000000000000000000008152506015019050604051602081830303815290604052805190602001208414801561107957503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156110f45761109267f052e81b99f6009360c01b610b54565b6110a6673567d6e9fa99f09b60c01b610b54565b60405160200180807f455243313832305f4143434550545f4d414749430000000000000000000000008152506014019050604051602081830303815290604052805190602001209050611109565b611108670f39455cbb31709b60c01b610b54565b5b61111d67a79396ad809f89e760c01b610b54565b61113167955d025d9fb84c9e60c01b610b54565b8091505092915050565b6000919050565b600060019050919050565b6000611163675611340c75798f9d60c01b610d8a565b611177672f64a7e0e1844bee60c01b610d8a565b61118b677c1a6d31ef190d7560c01b610d8a565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000919050565b6000919050565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b50565b6000919050565b611240675bd3a7e7b18ba8fb60c01b610b54565b611254672d06730e86d3c85660c01b610d8a565b61126867d597201330834cbf60c01b610d8a565b61127c675505e0a48812ca6460c01b610d8a565b61129067c60476dd5e6a171060c01b610d8a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611504602f913960400191505060405180910390fd5b61134867a668ad6df6cee05760c01b610d8a565b61135c6767fae2475bebd9d260c01b610d8a565b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113b16750e66fb25893dbc160c01b610d8a565b6113c567db655c891321017460c01b610b54565b6113d967d71ea861486681f460c01b610b54565b6113ed678492541ecd66ea9860c01b610b54565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611442673bff2d399a469bf760c01b610d8a565b611456679efe014cf6ff001660c01b610d8a565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600060019050919050565b60006114c7672ff6525fda0f4f4e60c01b610b54565b6114db67e5f991543de7e1d060c01b610b54565b6114ef678d407f8e4294cc0660c01b610b54565b63f23a6e6160e01b9050969550505050505056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a";

type PersonalAccountImplementationV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PersonalAccountImplementationV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PersonalAccountImplementationV1__factory extends ContractFactory {
  constructor(...args: PersonalAccountImplementationV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PersonalAccountImplementationV1> {
    return super.deploy(
      overrides || {}
    ) as Promise<PersonalAccountImplementationV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PersonalAccountImplementationV1 {
    return super.attach(address) as PersonalAccountImplementationV1;
  }
  connect(signer: Signer): PersonalAccountImplementationV1__factory {
    return super.connect(signer) as PersonalAccountImplementationV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PersonalAccountImplementationV1Interface {
    return new utils.Interface(
      _abi
    ) as PersonalAccountImplementationV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PersonalAccountImplementationV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PersonalAccountImplementationV1;
  }
}
