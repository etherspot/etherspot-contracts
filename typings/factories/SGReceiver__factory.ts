/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SGReceiver, SGReceiverInterface } from "../SGReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sgRouter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "StargateReceivedOnDestination",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "sgReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ce2380380610ce28339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b610bd48061010e6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab8236f314610030575b600080fd5b61004a60048036038101906100459190610612565b61004c565b005b60006100566101bf565b9050600181600001541415610097576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012690610861565b60405180910390fd5b60008280602001905181019061014591906105c0565b905061017281858773ffffffffffffffffffffffffffffffffffffffff166101ec9092919063ffffffff16565b7fa99538de04029bcd6cc1a8af32ebefef188052f963f80ab67b7fc49e23d0cd4c85856040516101a39291906107f6565b60405180910390a1506000816000018190555050505050505050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b61026d8363a9059cbb60e01b848460405160240161020b9291906107f6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610272565b505050565b60006102d4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166103399092919063ffffffff16565b905060008151111561033457808060200190518101906102f491906105e9565b610333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032a906108a1565b60405180910390fd5b5b505050565b60606103488484600085610351565b90509392505050565b606082471015610396576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038d90610841565b60405180910390fd5b61039f85610465565b6103de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d590610881565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161040791906107df565b60006040518083038185875af1925050503d8060008114610444576040519150601f19603f3d011682016040523d82523d6000602084013e610449565b606091505b5091509150610459828286610488565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610498578290506104e8565b6000835111156104ab5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104df919061081f565b60405180910390fd5b9392505050565b60006105026104fd846108e6565b6108c1565b90508281526020810184848401111561051a57600080fd5b6105258482856109b1565b509392505050565b60008135905061053c81610b54565b92915050565b60008151905061055181610b6b565b92915050565b60008151905061056681610b82565b92915050565b600082601f83011261057d57600080fd5b813561058d8482602086016104ef565b91505092915050565b6000813590506105a581610b99565b92915050565b6000813590506105ba81610bb0565b92915050565b6000602082840312156105d257600080fd5b60006105e084828501610542565b91505092915050565b6000602082840312156105fb57600080fd5b600061060984828501610557565b91505092915050565b60008060008060008060c0878903121561062b57600080fd5b600061063989828a01610596565b965050602087013567ffffffffffffffff81111561065657600080fd5b61066289828a0161056c565b955050604061067389828a016105ab565b945050606061068489828a0161052d565b935050608061069589828a016105ab565b92505060a087013567ffffffffffffffff8111156106b257600080fd5b6106be89828a0161056c565b9150509295509295509295565b6106d481610949565b82525050565b60006106e582610917565b6106ef818561092d565b93506106ff8185602086016109c0565b80840191505092915050565b600061071682610922565b6107208185610938565b93506107308185602086016109c0565b61073981610a53565b840191505092915050565b6000610751602683610938565b915061075c82610a64565b604082019050919050565b6000610774601f83610938565b915061077f82610ab3565b602082019050919050565b6000610797601d83610938565b91506107a282610adc565b602082019050919050565b60006107ba602a83610938565b91506107c582610b05565b604082019050919050565b6107d9816109a7565b82525050565b60006107eb82846106da565b915081905092915050565b600060408201905061080b60008301856106cb565b61081860208301846107d0565b9392505050565b60006020820190508181036000830152610839818461070b565b905092915050565b6000602082019050818103600083015261085a81610744565b9050919050565b6000602082019050818103600083015261087a81610767565b9050919050565b6000602082019050818103600083015261089a8161078a565b9050919050565b600060208201905081810360008301526108ba816107ad565b9050919050565b60006108cb6108dc565b90506108d782826109f3565b919050565b6000604051905090565b600067ffffffffffffffff82111561090157610900610a24565b5b61090a82610a53565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061095482610987565b9050919050565b600061096682610987565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109de5780820151818401526020810190506109c3565b838111156109ed576000848401525b50505050565b6109fc82610a53565b810181811067ffffffffffffffff82111715610a1b57610a1a610a24565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f53746172676174653a3a206f6e6c7920737461726761746520726f7574657200600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b610b5d81610949565b8114610b6857600080fd5b50565b610b748161095b565b8114610b7f57600080fd5b50565b610b8b8161096d565b8114610b9657600080fd5b50565b610ba281610979565b8114610bad57600080fd5b50565b610bb9816109a7565b8114610bc457600080fd5b5056fea164736f6c6343000804000a";

type SGReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SGReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SGReceiver__factory extends ContractFactory {
  constructor(...args: SGReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _sgRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SGReceiver> {
    return super.deploy(_sgRouter, overrides || {}) as Promise<SGReceiver>;
  }
  getDeployTransaction(
    _sgRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_sgRouter, overrides || {});
  }
  attach(address: string): SGReceiver {
    return super.attach(address) as SGReceiver;
  }
  connect(signer: Signer): SGReceiver__factory {
    return super.connect(signer) as SGReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SGReceiverInterface {
    return new utils.Interface(_abi) as SGReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SGReceiver {
    return new Contract(address, _abi, signerOrProvider) as SGReceiver;
  }
}