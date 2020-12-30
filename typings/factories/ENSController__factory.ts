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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NodeReleased",
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
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NodeSubmitted",
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
    name: "NodeVerified",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "releaseNode",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "submitNode",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "verifyNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061340b806100616000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806371404156116100a2578063a91ee0dc11610071578063a91ee0dc146102dd578063bd106a02146102f9578063c8cc2aee14610317578063d0f710d614610333578063d5fa2b001461036357610116565b8063714041561461026b5780637b103999146102875780637d0e0e7e146102a5578063a526d83b146102c157610116565b8063392e53cd116100e9578063392e53cd146101b55780633b3b57de146101d357806346386f73146102035780635773fd1d1461021f5780636df0cf421461023b57610116565b806301ffc9a71461011b5780630c68ba211461014b578063116191b61461017b57806329ae6a7e14610199575b600080fd5b610135600480360381019061013091906124a6565b61037f565b6040516101429190612deb565b60405180910390f35b6101656004803603810190610160919061232b565b61041f565b6040516101729190612deb565b60405180910390f35b610183610474565b6040516101909190612d8c565b60405180910390f35b6101b360048036038101906101ae919061237d565b61049a565b005b6101bd61072c565b6040516101ca9190612deb565b60405180910390f35b6101ed60048036038101906101e8919061237d565b610784565b6040516101fa9190612d8c565b60405180910390f35b61021d600480360381019061021891906123e2565b6107c4565b005b610239600480360381019061023491906124f8565b610c2f565b005b6102556004803603810190610250919061259f565b610e50565b6040516102629190612e06565b60405180910390f35b6102856004803603810190610280919061232b565b610e78565b005b61028f611090565b60405161029c9190612f6c565b60405180910390f35b6102bf60048036038101906102ba919061237d565b6110b6565b005b6102db60048036038101906102d6919061232b565b6113b6565b005b6102f760048036038101906102f291906124cf565b61144d565b005b610301611676565b60405161030e9190612e06565b60405180910390f35b610331600480360381019061032c919061237d565b61167c565b005b61034d6004803603810190610348919061244e565b611a08565b60405161035a9190612deb565b60405180910390f35b61037d600480360381019061037891906123a6565b611a61565b005b60006301ffc9a760e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104185750633b3b57de60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006104a4611b9d565b90503073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461054a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054190613047565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590612f87565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c383836040518363ffffffff1660e01b815260040161064b929190612e21565b600060405180830381600087803b15801561066557600080fd5b505af1158015610679573d6000803e3d6000fd5b505050506005600083815260200190815260200160002060000160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005600083815260200190815260200160002060010160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f7803a16d95f9ca635bdec561006625e7444d8a9f8463866643cc03af011779d38282604051610720929190612e21565b60405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60006005600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107ce611b9d565b905060006107e56107e0838888611bae565b611c06565b90506108358185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611c71565b610874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086b90612fa7565b60405180910390fd5b60008686604051602001610889929190612d27565b6040516020818303038152906040528051906020012090503073ffffffffffffffffffffffffffffffffffffffff166005600089815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093c90613027565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e190612fc7565b60405180910390fd5b826005600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59238888306040518463ffffffff1660e01b8152600401610a9e93929190612e8f565b600060405180830381600087803b158015610ab857600080fd5b505af1158015610acc573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a82306040518363ffffffff1660e01b8152600401610b2d929190612e21565b600060405180830381600087803b158015610b4757600080fd5b505af1158015610b5b573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c382856040518363ffffffff1660e01b8152600401610bbc929190612e21565b600060405180830381600087803b158015610bd657600080fd5b505af1158015610bea573d6000803e3d6000fd5b50505050807f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd284604051610c1e9190612d8c565b60405180910390a250505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610cbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb690613007565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610d71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d68906130c7565b60405180910390fd5b86600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610dfc868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050611cde565b610e0584611d36565b610e10838383611d7a565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051610e3f9190612da7565b60405180910390a150505050505050565b6000610e71610e6c836000015184602001518560400151611bae565b611c06565b9050919050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efa906130a7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415610f72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6990613187565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ffd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff490613127565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051611085929190612dc2565b60405180910390a150565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006110c0611b9d565b9050600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e90613107565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461120c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611203906130e7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b815260040161127e9190612e06565b60206040518083038186803b15801561129657600080fd5b505afa1580156112aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ce9190612354565b73ffffffffffffffffffffffffffffffffffffffff1614611324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131b90613147565b60405180910390fd5b806005600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc1e082a8c26f27c26e1bf5d0ce7ddd579ec7f6d7eb3ea90d8abd6c40991bae3682826040516113aa929190612e21565b60405180910390a15050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611441576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611438906130a7565b60405180910390fd5b61144a81611ddc565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166114d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cf906130a7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153f906130c7565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156115d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d0906131c7565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdb0239c63d4033dcdd21bd44f8dd479a03efbae12f6bbe27c0a5f923d26514cc600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161166b9190612d8c565b60405180910390a150565b60025481565b6000611686611b9d565b9050600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461172d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172490613107565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c890612f87565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b81526004016118439190612e06565b60206040518083038186803b15801561185b57600080fd5b505afa15801561186f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118939190612354565b73ffffffffffffffffffffffffffffffffffffffff16146118e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e090613147565b60405180910390fd5b306005600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83306040518363ffffffff1660e01b815260040161199b929190612e21565b600060405180830381600087803b1580156119b557600080fd5b505af11580156119c9573d6000803e3d6000fd5b505050507fcefbe9dbadcf675eef14e23810996ff38541fc26b4dd77cd6724b0eedc96f200826040516119fc9190612e06565b60405180910390a15050565b6000611a588484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611c71565b90509392505050565b611a69611b9d565b73ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0390613087565b60405180910390fd5b806005600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550817f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd282604051611b919190612d8c565b60405180910390a25050565b6000611ba96028611f6b565b905090565b60007f621363c539a3aa1024c8837ca1dc095db03b7f9512b3a95ecb429aae7fd953ed848484604051602001611be79493929190612e4a565b6040516020818303038152906040528051906020012090509392505050565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525060025483604051602001611c5493929190612d53565b604051602081830303815290604052805190602001209050919050565b600080611c87838561200090919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b600081511415611cf657611cf132611ddc565b611d33565b60008151905060005b81811015611d3057611d23838281518110611d1657fe5b6020026020010151611ddc565b8080600101915050611cff565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60004690507fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac564728484833086604051602001611dba96959493929190612ec6565b6040516020818303038152906040528051906020012060028190555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4390612fe7565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ecf90613167565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051611f60929190612dc2565b60405180910390a150565b60008060009050611f7a6120bb565b15611ff3576000836000369050039050611feb60003683906014850192611fa39392919061323b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612168565b915050611ff7565b3390505b80915050919050565b600080600090506041835114156120b15760008060006020860151925060408601519150606086015160001a9050601b8160ff16101561204157601b810190505b601b8160ff1614806120565750601c8160ff16145b156120ad576001878285856040516000815260200160405260405161207e9493929190612f27565b6020604051602081039080840390855afa1580156120a0573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561216157602c6000369050101561215c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215390613067565b60405180910390fd5b600190505b8091505090565b60008060148351146121af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121a6906131a7565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b6000813590506121dd816133a2565b92915050565b6000815190506121f2816133a2565b92915050565b60008083601f84011261220a57600080fd5b8235905067ffffffffffffffff81111561222357600080fd5b60208301915083602082028301111561223b57600080fd5b9250929050565b600081359050612251816133b9565b92915050565b600081359050612266816133d0565b92915050565b60008083601f84011261227e57600080fd5b8235905067ffffffffffffffff81111561229757600080fd5b6020830191508360018202830111156122af57600080fd5b9250929050565b6000813590506122c5816133e7565b92915050565b6000606082840312156122dd57600080fd5b6122e760606131e7565b905060006122f7848285016121ce565b600083015250602061230b84828501612242565b602083015250604061231f84828501612242565b60408301525092915050565b60006020828403121561233d57600080fd5b600061234b848285016121ce565b91505092915050565b60006020828403121561236657600080fd5b6000612374848285016121e3565b91505092915050565b60006020828403121561238f57600080fd5b600061239d84828501612242565b91505092915050565b600080604083850312156123b957600080fd5b60006123c785828601612242565b92505060206123d8858286016121ce565b9150509250929050565b600080600080606085870312156123f857600080fd5b600061240687828801612242565b945050602061241787828801612242565b935050604085013567ffffffffffffffff81111561243457600080fd5b6124408782880161226c565b925092505092959194509250565b60008060006040848603121561246357600080fd5b600061247186828701612242565b935050602084013567ffffffffffffffff81111561248e57600080fd5b61249a8682870161226c565b92509250509250925092565b6000602082840312156124b857600080fd5b60006124c684828501612257565b91505092915050565b6000602082840312156124e157600080fd5b60006124ef848285016122b6565b91505092915050565b600080600080600080600060c0888a03121561251357600080fd5b60006125218a828b016122b6565b975050602088013567ffffffffffffffff81111561253e57600080fd5b61254a8a828b016121f8565b9650965050604061255d8a828b016121ce565b945050606061256e8a828b01612242565b935050608061257f8a828b01612242565b92505060a06125908a828b01612242565b91505092959891949750929550565b6000606082840312156125b157600080fd5b60006125bf848285016122cb565b91505092915050565b6125d18161330b565b82525050565b6125e08161326e565b82525050565b6125ef81613280565b82525050565b6125fe8161328c565b82525050565b6126156126108261328c565b613398565b82525050565b6126248161331d565b82525050565b600061263582613214565b61263f8185613230565b935061264f818560208601613365565b80840191505092915050565b600061266860218361321f565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006126ce60298361321f565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420677561726469616e2060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b600061273460228361321f565b91507f454e53436f6e74726f6c6c65723a206c6162656c20616c72656164792074616b60008301527f656e0000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061279a60208361321f565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b60006127da602f8361321f565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b6000612840601b8361321f565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f646500000000006000830152602082019050919050565b600061288060218361321f565b91507f454e53436f6e74726f6c6c65723a206e6f646520646f65736e2774206578697360008301527f74000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006128e660228361321f565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061294c602b8361321f565b91507f454e53436f6e74726f6c6c65723a2063616c6c6572206973206e6f742074686560008301527f206e6f6465206f776e65720000000000000000000000000000000000000000006020830152604082019050919050565b60006129b260268361321f565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612a1860268361321f565b91507f454e53436f6e74726f6c6c65723a2063616e6e6f74207365742030783020726560008301527f67697374727900000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612a7e60258361321f565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479207375626d60008301527f69747465640000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612ae460228361321f565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479206578697360008301527f74730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612b4a601f8361321f565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000612b8a60258361321f565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420656e73206e6f64652060008301527f6f776e65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612bf060208361321f565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b6000612c30601b8361321f565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b6000612c70601d8361321f565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b6000612cb060238361321f565b91507f454e53436f6e74726f6c6c65723a20726567697374727920616c72656164792060008301527f73657400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b612d12816132f4565b82525050565b612d21816132fe565b82525050565b6000612d338285612604565b602082019150612d438284612604565b6020820191508190509392505050565b6000612d5f828661262a565b9150612d6b8285612604565b602082019150612d7b8284612604565b602082019150819050949350505050565b6000602082019050612da160008301846125d7565b92915050565b6000602082019050612dbc60008301846125c8565b92915050565b6000604082019050612dd760008301856125c8565b612de460208301846125d7565b9392505050565b6000602082019050612e0060008301846125e6565b92915050565b6000602082019050612e1b60008301846125f5565b92915050565b6000604082019050612e3660008301856125f5565b612e4360208301846125d7565b9392505050565b6000608082019050612e5f60008301876125f5565b612e6c60208301866125d7565b612e7960408301856125f5565b612e8660608301846125f5565b95945050505050565b6000606082019050612ea460008301866125f5565b612eb160208301856125f5565b612ebe60408301846125d7565b949350505050565b600060c082019050612edb60008301896125f5565b612ee860208301886125f5565b612ef560408301876125f5565b612f026060830186612d09565b612f0f60808301856125d7565b612f1c60a08301846125f5565b979650505050505050565b6000608082019050612f3c60008301876125f5565b612f496020830186612d18565b612f5660408301856125f5565b612f6360608301846125f5565b95945050505050565b6000602082019050612f81600083018461261b565b92915050565b60006020820190508181036000830152612fa08161265b565b9050919050565b60006020820190508181036000830152612fc0816126c1565b9050919050565b60006020820190508181036000830152612fe081612727565b9050919050565b600060208201905081810360008301526130008161278d565b9050919050565b60006020820190508181036000830152613020816127cd565b9050919050565b6000602082019050818103600083015261304081612833565b9050919050565b6000602082019050818103600083015261306081612873565b9050919050565b60006020820190508181036000830152613080816128d9565b9050919050565b600060208201905081810360008301526130a08161293f565b9050919050565b600060208201905081810360008301526130c0816129a5565b9050919050565b600060208201905081810360008301526130e081612a0b565b9050919050565b6000602082019050818103600083015261310081612a71565b9050919050565b6000602082019050818103600083015261312081612ad7565b9050919050565b6000602082019050818103600083015261314081612b3d565b9050919050565b6000602082019050818103600083015261316081612b7d565b9050919050565b6000602082019050818103600083015261318081612be3565b9050919050565b600060208201905081810360008301526131a081612c23565b9050919050565b600060208201905081810360008301526131c081612c63565b9050919050565b600060208201905081810360008301526131e081612ca3565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171561320a57600080fd5b8060405250919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000808585111561324b57600080fd5b8386111561325857600080fd5b6001850283019150848603905094509492505050565b6000613279826132d4565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60006132cd8261326e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061331682613341565b9050919050565b60006133288261332f565b9050919050565b600061333a826132d4565b9050919050565b600061334c82613353565b9050919050565b600061335e826132d4565b9050919050565b60005b83811015613383578082015181840152602081019050613368565b83811115613392576000848401525b50505050565b6000819050919050565b6133ab8161326e565b81146133b657600080fd5b50565b6133c28161328c565b81146133cd57600080fd5b50565b6133d981613296565b81146133e457600080fd5b50565b6133f0816132c2565b81146133fb57600080fd5b5056fea164736f6c634300060c000a";
