/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnextFacet, ConnextFacetInterface } from "../ConnextFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
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
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "ConnextEthSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connext",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domainId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    name: "ConnextInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
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
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "ConnextTokenSwap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destinationUnwrapper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "connextEthTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "connextTokenTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    name: "initConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611956806100206000396000f3fe6080604052600436106100345760003560e01c80633205dc691461003957806351b401b914610062578063da328d541461007e575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190610fd5565b61009a565b005b61007c6004803603810190610077919061105e565b61029c565b005b6100986004803603810190610093919061105e565b61060d565b005b6100a2610954565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010890611148565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017790611148565b60405180910390fd5b600061018a6109ef565b9050838160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828160000160146101000a81548163ffffffff021916908363ffffffff160217905550818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168363ffffffff168573ffffffffffffffffffffffffffffffffffffffff167fe23ac138025651e2fb684be9a5c635424d4dac7fc73449494c24c4955e79027860405160405180910390a450505050565b60006102a6610a1c565b90506000879050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff160361031c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031390611148565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff160361038b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038290611148565b60405180910390fd5b610393610a54565b63ffffffff168563ffffffff16036103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d7906111da565b60405180910390fd5b868173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161041c929190611209565b602060405180830381865afa158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190611247565b101561049e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610495906112e6565b60405180910390fd5b6104cb3330898473ffffffffffffffffffffffffffffffffffffffff16610a7c909392919063ffffffff16565b6104f682888373ffffffffffffffffffffffffffffffffffffffff16610b059092919063ffffffff16565b60008273ffffffffffffffffffffffffffffffffffffffff16638aac16ba85888a8d338e8c604051806020016040528060008152506040518963ffffffff1660e01b815260040161054d97969594939291906113b4565b60206040518083038185885af115801561056b573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105909190611460565b90508873ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e08b88866040516105fa9392919061149c565b60405180910390a4505050505050505050565b6000610617610a1c565b90506000610623610c54565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1603610694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068b90611148565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa90611148565b60405180910390fd5b61070b610a54565b63ffffffff168563ffffffff1603610758576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074f906111da565b60405180910390fd5b60008190508073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0896040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107a557600080fd5b505af11580156107b9573d6000803e3d6000fd5b50505050508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3848a6040518363ffffffff1660e01b81526004016107f99291906114d3565b6020604051808303816000875af1158015610818573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083c9190611534565b50506000866040516020016108519190611561565b604051602081830303815290604052905060008373ffffffffffffffffffffffffffffffffffffffff16638aac16ba86898d87338f8d8a6040518963ffffffff1660e01b81526004016108aa97969594939291906113b4565b60206040518083038185885af11580156108c8573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906108ed9190611460565b90508773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167fe16c7dcc828782adcdd94aaeb1d07c3ae5a6d593a6b851ab5e023f9c961436873488856040516109409392919061149c565b60405180910390a350505050505050505050565b61095c610c8c565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e4906115ee565b60405180910390fd5b565b6000807ffa2e9c22c7fe2104814a1d7e2c66c58d10a2d7989d5bcf01173a2564aa59c04d90508091505090565b600080610a276109ef565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b600080610a5f6109ef565b90508060000160149054906101000a900463ffffffff1691505090565b610aff846323b872dd60e01b858585604051602401610a9d9392919061160e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cb9565b50505050565b6000811480610b8f575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610b4c929190611209565b602060405180830381865afa158015610b69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8d9190611247565b145b610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc5906116b7565b60405180910390fd5b610c4f8363095ea7b360e01b8484604051602401610bed9291906114d3565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cb9565b505050565b600080610c5f6109ef565b90508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610d1b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d809092919063ffffffff16565b9050600081511115610d7b5780806020019051810190610d3b9190611534565b610d7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7190611749565b60405180910390fd5b5b505050565b6060610d8f8484600085610d98565b90509392505050565b606082471015610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd4906117db565b60405180910390fd5b610de685610eac565b610e25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1c90611847565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610e4e91906118a3565b60006040518083038185875af1925050503d8060008114610e8b576040519150601f19603f3d011682016040523d82523d6000602084013e610e90565b606091505b5091509150610ea0828286610ecf565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610edf57829050610f2f565b600083511115610ef25782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2691906118fe565b60405180910390fd5b9392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f6682610f3b565b9050919050565b610f7681610f5b565b8114610f8157600080fd5b50565b600081359050610f9381610f6d565b92915050565b600063ffffffff82169050919050565b610fb281610f99565b8114610fbd57600080fd5b50565b600081359050610fcf81610fa9565b92915050565b600080600060608486031215610fee57610fed610f36565b5b6000610ffc86828701610f84565b935050602061100d86828701610fc0565b925050604061101e86828701610f84565b9150509250925092565b6000819050919050565b61103b81611028565b811461104657600080fd5b50565b60008135905061105881611032565b92915050565b60008060008060008060c0878903121561107b5761107a610f36565b5b600061108989828a01610f84565b965050602061109a89828a01611049565b95505060406110ab89828a01610f84565b94505060606110bc89828a01610fc0565b93505060806110cd89828a01611049565b92505060a06110de89828a01611049565b9150509295509295509295565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b60006111326018836110eb565b915061113d826110fc565b602082019050919050565b6000602082019050818103600083015261116181611125565b9050919050565b7f436f6e6e6578743a2043616e6e6f742062726964676520746f2073616d65206460008201527f6f6d61696e000000000000000000000000000000000000000000000000000000602082015250565b60006111c46025836110eb565b91506111cf82611168565b604082019050919050565b600060208201905081810360008301526111f3816111b7565b9050919050565b61120381610f5b565b82525050565b600060408201905061121e60008301856111fa565b61122b60208301846111fa565b9392505050565b60008151905061124181611032565b92915050565b60006020828403121561125d5761125c610f36565b5b600061126b84828501611232565b91505092915050565b7f436f6e6e6578743a2055736572206d75737420617070726f766520616d6f756e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006112d06021836110eb565b91506112db82611274565b604082019050919050565b600060208201905081810360008301526112ff816112c3565b9050919050565b61130f81610f99565b82525050565b61131e81611028565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561135e578082015181840152602081019050611343565b60008484015250505050565b6000601f19601f8301169050919050565b600061138682611324565b611390818561132f565b93506113a0818560208601611340565b6113a98161136a565b840191505092915050565b600060e0820190506113c9600083018a611306565b6113d660208301896111fa565b6113e360408301886111fa565b6113f060608301876111fa565b6113fd6080830186611315565b61140a60a0830185611315565b81810360c083015261141c818461137b565b905098975050505050505050565b6000819050919050565b61143d8161142a565b811461144857600080fd5b50565b60008151905061145a81611434565b92915050565b60006020828403121561147657611475610f36565b5b60006114848482850161144b565b91505092915050565b6114968161142a565b82525050565b60006060820190506114b16000830186611315565b6114be6020830185611315565b6114cb604083018461148d565b949350505050565b60006040820190506114e860008301856111fa565b6114f56020830184611315565b9392505050565b60008115159050919050565b611511816114fc565b811461151c57600080fd5b50565b60008151905061152e81611508565b92915050565b60006020828403121561154a57611549610f36565b5b60006115588482850161151f565b91505092915050565b600060208201905061157660008301846111fa565b92915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006115d86022836110eb565b91506115e38261157c565b604082019050919050565b60006020820190508181036000830152611607816115cb565b9050919050565b600060608201905061162360008301866111fa565b61163060208301856111fa565b61163d6040830184611315565b949350505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b60006116a16036836110eb565b91506116ac82611645565b604082019050919050565b600060208201905081810360008301526116d081611694565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611733602a836110eb565b915061173e826116d7565b604082019050919050565b6000602082019050818103600083015261176281611726565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006117c56026836110eb565b91506117d082611769565b604082019050919050565b600060208201905081810360008301526117f4816117b8565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611831601d836110eb565b915061183c826117fb565b602082019050919050565b6000602082019050818103600083015261186081611824565b9050919050565b600081905092915050565b600061187d82611324565b6118878185611867565b9350611897818560208601611340565b80840191505092915050565b60006118af8284611872565b915081905092915050565b600081519050919050565b60006118d0826118ba565b6118da81856110eb565b93506118ea818560208601611340565b6118f38161136a565b840191505092915050565b6000602082019050818103600083015261191881846118c5565b90509291505056fea2646970667358221220a5ed21c6a6f11cdf67300b3ccd2b6887d8a346d9ece8e38d72a424301c8c737964736f6c63430008110033";

type ConnextFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnextFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnextFacet__factory extends ContractFactory {
  constructor(...args: ConnextFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnextFacet> {
    return super.deploy(overrides || {}) as Promise<ConnextFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnextFacet {
    return super.attach(address) as ConnextFacet;
  }
  connect(signer: Signer): ConnextFacet__factory {
    return super.connect(signer) as ConnextFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextFacetInterface {
    return new utils.Interface(_abi) as ConnextFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnextFacet {
    return new Contract(address, _abi, signerOrProvider) as ConnextFacet;
  }
}
