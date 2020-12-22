/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ENSController } from "../ENSController";

export class ENSController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ENSController> {
    return super.deploy(overrides || {}) as Promise<ENSController>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ENSController {
    return super.attach(address) as ENSController;
  }
  connect(signer: Signer): ENSController__factory {
    return super.connect(signer) as ENSController__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSController {
    return new Contract(address, _abi, signerOrProvider) as ENSController;
  }
}

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
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "AddrChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "guardian",
        type: "address",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "NodeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "RegistryChanged",
    type: "event",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "addNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "addr",
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
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "node",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "label",
            type: "bytes32",
          },
        ],
        internalType: "struct ENSController.SubNodeRegistration",
        name: "subNodeRegistration",
        type: "tuple",
      },
    ],
    name: "hashSubNodeRegistration",
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
        internalType: "contract ENSRegistry",
        name: "registry_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "guardians_",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "gateway_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainNameHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainVersionHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainSalt",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "guardianSignature",
        type: "bytes",
      },
    ],
    name: "registerSubNode",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "setAddr",
    outputs: [],
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
    ],
    name: "setRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "typedDataDomainSeparator",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916321790556116bc806100326000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636df0cf4211610097578063a91ee0dc11610066578063a91ee0dc146101fa578063bd106a021461020d578063d0f710d614610215578063d5fa2b001461022857610100565b80636df0cf42146101ac57806371404156146101cc5780637b103999146101df578063a526d83b146101e757610100565b80633b3b57de116100d35780633b3b57de1461015e57806346386f73146101715780635773fd1d1461018657806361fc6d1f1461019957610100565b806301ffc9a7146101055780630c68ba211461012e578063116191b614610141578063392e53cd14610156575b600080fd5b61011861011336600461101c565b61023b565b60405161012591906111b6565b60405180910390f35b61011861013c366004610f02565b610272565b610149610290565b60405161012591906111a2565b61011861029f565b61014961016c366004610f3a565b6102af565b61018461017f366004610f81565b6102ca565b005b610184610194366004611044565b61057d565b6101846101a7366004610f3a565b610677565b6101bf6101ba3660046110f3565b6107ac565b60405161012591906111c1565b6101846101da366004610f02565b6107c8565b6101496108a8565b6101846101f5366004610f02565b6108b7565b610184610208366004610f02565b6108f2565b6101bf6109c6565b610118610223366004610fd2565b6109cc565b610184610236366004610f52565b610a16565b60006001600160e01b031982166301ffc9a760e01b148061026c57506001600160e01b03198216631d9dabef60e11b145b92915050565b6001600160a01b031660009081526020819052604090205460ff1690565b6003546001600160a01b031681565b6001546001600160a01b03161590565b6000908152600560205260409020546001600160a01b031690565b60006102d4610abc565b905060006102eb6102e6838888610acd565b610b25565b905061032d8185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b7592505050565b6103525760405162461bcd60e51b8152600401610349906112b4565b60405180910390fd5b60008686604051602001610367929190611150565b60408051601f19818403018152918152815160209283012060008a815260059093529120549091506001600160a01b031630146103b65760405162461bcd60e51b8152600401610349906113c3565b6000818152600560205260409020546001600160a01b0316156103eb5760405162461bcd60e51b8152600401610349906112fd565b6000818152600560205260409081902080546001600160a01b0319166001600160a01b03868116919091179091556004805492516306ab592360e01b815292909116916306ab592391610444918b918b91309101611205565b600060405180830381600087803b15801561045e57600080fd5b505af1158015610472573d6000803e3d6000fd5b505060048054604051630c4b7b8560e11b81526001600160a01b039091169350631896f70a92506104a79185913091016111ca565b600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505060048054604051635b0fc9c360e01b81526001600160a01b039091169350635b0fc9c3925061050a9185918891016111ca565b600060405180830381600087803b15801561052457600080fd5b505af1158015610538573d6000803e3d6000fd5b50505050807f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd28460405161056c91906111a2565b60405180910390a250505050505050565b6001546001600160a01b031632146105a75760405162461bcd60e51b815260040161034990611374565b600180546001600160a01b03191690556001600160a01b0387166105dd5760405162461bcd60e51b8152600401610349906114cd565b600480546001600160a01b0319166001600160a01b038916179055604080516020878102808301820190935287825261063192899189918291850190849080828437600092019190915250610ba592505050565b61063a84610bef565b610645838383610c11565b6040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a150505050505050565b6000818152600560205260409020546001600160a01b0316156106ac5760405162461bcd60e51b815260040161034990611513565b600480546040516302571be360e01b815230926001600160a01b03909216916302571be3916106dd918691016111c1565b60206040518083038186803b1580156106f557600080fd5b505afa158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d9190610f1e565b6001600160a01b0316146107535760405162461bcd60e51b815260040161034990611273565b6000818152600560205260409081902080546001600160a01b03191630179055517f9789a7ebab1e3d4a74f1c22b0ae2a212125ac931a6227e44d5a5a7aaf30dda75906107a19083906111c1565b60405180910390a150565b600061026c6102e6836000015184602001518560400151610acd565b3260009081526020819052604090205460ff166107f75760405162461bcd60e51b815260040161034990611487565b326001600160a01b03821614156108205760405162461bcd60e51b8152600401610349906115c1565b6001600160a01b03811660009081526020819052604090205460ff166108585760405162461bcd60e51b815260040161034990611555565b6001600160a01b03811660009081526020819052604090819020805460ff19169055517fb8107d0c6b40be480ce3172ee66ba6d64b71f6b1685a851340036e6e2e3e3c52906107a19083906111a2565b6004546001600160a01b031681565b3260009081526020819052604090205460ff166108e65760405162461bcd60e51b815260040161034990611487565b6108ef81610c6f565b50565b3260009081526020819052604090205460ff166109215760405162461bcd60e51b815260040161034990611487565b6001600160a01b0381166109475760405162461bcd60e51b8152600401610349906114cd565b6004546001600160a01b03828116911614156109755760405162461bcd60e51b81526004016103499061162f565b600480546001600160a01b0319166001600160a01b0383811691909117918290556040517fdb0239c63d4033dcdd21bd44f8dd479a03efbae12f6bbe27c0a5f923d26514cc926107a19216906111a2565b60025481565b6000610a0e8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b7592505050565b949350505050565b610a1e610abc565b6000838152600560205260409020546001600160a01b03908116911614610a575760405162461bcd60e51b81526004016103499061143c565b6000828152600560205260409081902080546001600160a01b0319166001600160a01b0384161790555182907f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd290610ab09084906111a2565b60405180910390a25050565b6000610ac86028610d21565b905090565b60007f621363c539a3aa1024c8837ca1dc095db03b7f9512b3a95ecb429aae7fd953ed848484604051602001610b0694939291906111e1565b6040516020818303038152906040528051906020012090509392505050565b600060405180604001604052806002815260200161190160f01b81525060025483604051602001610b589392919061115e565b604051602081830303815290604052805190602001209050919050565b600080610b828484610d96565b6001600160a01b031660009081526020819052604090205460ff16949350505050565b8051610bb957610bb432610c6f565b6108ef565b805160005b81811015610bea57610be2838281518110610bd557fe5b6020026020010151610c6f565b600101610bbe565b505050565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6040514690610c4e907fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac564729086908690859030908890602001611224565b60408051601f19818403018152919052805160209091012060025550505050565b6001600160a01b038116610c955760405162461bcd60e51b81526004016103499061133f565b6001600160a01b03811660009081526020819052604090205460ff1615610cce5760405162461bcd60e51b81526004016103499061158c565b6001600160a01b03811660009081526020819052604090819020805460ff19166001179055517f038596bb31e2e7d3d9f184d4c98b310103f6d7f5830e5eec32bffe6f1728f969906107a19083906111a2565b600080610d2c610e3b565b15610d8e573683810390610d8690610d4c90601484019084906000611672565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e7c92505050565b91505061026c565b503392915050565b8051600090819060411415610e345760208301516040840151606085015160001a601b811015610dc457601b015b8060ff16601b1480610dd957508060ff16601c145b15610e305760018782858560405160008152602001604052604051610e019493929190611255565b6020604051602081039080840390855afa158015610e23573d6000803e3d6000fd5b5050506020604051035193505b5050505b9392505050565b60035460009081906001600160a01b0316331415610ac857602c361015610e745760405162461bcd60e51b8152600401610349906113fa565b506001905090565b6000808251601414610ea05760405162461bcd60e51b8152600401610349906115f8565b505060200151600160601b900490565b803561026c8161169a565b60008083601f840112610ecc578182fd5b50813567ffffffffffffffff811115610ee3578182fd5b602083019150836020828501011115610efb57600080fd5b9250929050565b600060208284031215610f13578081fd5b8135610e348161169a565b600060208284031215610f2f578081fd5b8151610e348161169a565b600060208284031215610f4b578081fd5b5035919050565b60008060408385031215610f64578081fd5b823591506020830135610f768161169a565b809150509250929050565b60008060008060608587031215610f96578182fd5b8435935060208501359250604085013567ffffffffffffffff811115610fba578283fd5b610fc687828801610ebb565b95989497509550505050565b600080600060408486031215610fe6578283fd5b83359250602084013567ffffffffffffffff811115611003578283fd5b61100f86828701610ebb565b9497909650939450505050565b60006020828403121561102d578081fd5b81356001600160e01b031981168114610e34578182fd5b600080600080600080600060c0888a03121561105e578283fd5b87356110698161169a565b9650602088013567ffffffffffffffff80821115611085578485fd5b818a0191508a601f830112611098578485fd5b8135818111156110a6578586fd5b8b602080830285010111156110b9578586fd5b6020830198508097505050506110d28960408a01610eb0565b969995985093966060810135956080820135955060a0909101359350915050565b600060608284031215611104578081fd5b6040516060810181811067ffffffffffffffff82111715611123578283fd5b60405282356111318161169a565b8152602083810135908201526040928301359281019290925250919050565b918252602082015260400190565b60008451815b8181101561117e5760208188018101518583015201611164565b8181111561118c5782828501525b5091909101928352506020820152604001919050565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9182526001600160a01b0316602082015260400190565b9384526001600160a01b039290921660208401526040830152606082015260800190565b92835260208301919091526001600160a01b0316604082015260600190565b9586526020860194909452604085019290925260608401526001600160a01b0316608083015260a082015260c00190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526021908201527f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465206f776e656040820152603960f91b606082015260800190565b60208082526029908201527f454e53436f6e74726f6c6c65723a20696e76616c696420677561726469616e206040820152687369676e617475726560b81b606082015260800190565b60208082526022908201527f454e53436f6e74726f6c6c65723a206c6162656c20616c72656164792074616b60408201526132b760f11b606082015260800190565b6020808252818101527f477561726465643a2063616e6e6f74206164642030783020677561726469616e604082015260600190565b6020808252602f908201527f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060408201526e3a34329034b734ba34b0b634bd32b960891b606082015260800190565b6020808252601b908201527f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f64650000000000604082015260600190565b60208082526022908201527f47617465776179526563697069656e743a20696e76616c6964206d73672e6461604082015261746160f01b606082015260800190565b6020808252602b908201527f454e53436f6e74726f6c6c65723a2063616c6c6572206973206e6f742074686560408201526a103737b2329037bbb732b960a91b606082015260800190565b60208082526026908201527f477561726465643a2074782e6f726967696e206973206e6f742074686520677560408201526530b93234b0b760d11b606082015260800190565b60208082526026908201527f454e53436f6e74726f6c6c65723a2063616e6e6f74207365742030783020726560408201526567697374727960d01b606082015260800190565b60208082526022908201527f454e53436f6e74726f6c6c65723a206e6f646520616c72656164792065786973604082015261747360f01b606082015260800190565b6020808252601f908201527f477561726465643a20677561726469616e20646f65736e277420657869737400604082015260600190565b6020808252818101527f477561726465643a20677561726469616e20616c726561647920657869737473604082015260600190565b6020808252601b908201527f477561726465643a2063616e6e6f742072656d6f76652073656c660000000000604082015260600190565b6020808252601d908201527f42797465734c69623a20696e76616c69642064617461206c656e677468000000604082015260600190565b60208082526023908201527f454e53436f6e74726f6c6c65723a20726567697374727920616c7265616479206040820152621cd95d60ea1b606082015260800190565b60008085851115611681578182fd5b8386111561168d578182fd5b5050820193919092039150565b6001600160a01b03811681146108ef57600080fdfea164736f6c634300060c000a";
