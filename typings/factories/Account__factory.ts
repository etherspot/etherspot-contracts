/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Account } from "../Account";

export class Account__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(implementation_: string, overrides?: Overrides): Promise<Account> {
    return super.deploy(implementation_, overrides || {}) as Promise<Account>;
  }
  getDeployTransaction(
    implementation_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(implementation_, overrides || {});
  }
  attach(address: string): Account {
    return super.attach(address) as Account;
  }
  connect(signer: Signer): Account__factory {
    return super.connect(signer) as Account__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Account {
    return new Contract(address, _abi, signerOrProvider) as Account;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
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
    inputs: [],
    name: "implementation",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161054f38038061054f8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061047a806100d56000396000f3fe6080604052600436106100385760003560e01c80633f579f42146100a85780635c60da1b146101d1578063f77c4791146102125761003f565b3661003f57005b34801561004b57600080fd5b50600080369050146100a6576000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100a157816000f35b816000fd5b005b3480156100b457600080fd5b50610156600480360360608110156100cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561011257600080fd5b82018360208201111561012457600080fd5b8035906020019184600183028401116401000000008311171561014657600080fd5b9091929391929390505050610253565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019657808201518184015260208101905061017b565b50505050905090810190601f1680156101c35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101dd57600080fd5b506101e66103f7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021e57600080fd5b5061022761041d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610442602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610369576040519150601f19603f3d011682016040523d82523d6000602084013e61036e565b606091505b508093508192505050806103ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a";
