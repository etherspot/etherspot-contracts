/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ExternalAccountProofRegistry } from "../ExternalAccountProofRegistry";

export class ExternalAccountProofRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ExternalAccountProofRegistry> {
    return super.deploy(
      overrides || {}
    ) as Promise<ExternalAccountProofRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExternalAccountProofRegistry {
    return super.attach(address) as ExternalAccountProofRegistry;
  }
  connect(signer: Signer): ExternalAccountProofRegistry__factory {
    return super.connect(signer) as ExternalAccountProofRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExternalAccountProofRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExternalAccountProofRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "AccountProofAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "AccountProofRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "addAccountProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "removeAccountProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "verifyAccountProof",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "verifyAccountProofAtBlock",
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
  "0x608060405234801561001057600080fd5b506106f1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806359b52ef8146100515780638a313378146100bf57806394000b0214610123578063d543c34a14610151575b600080fd5b6100a76004803603606081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505061017f565b60405180821515815260200191505060405180910390f35b61010b600480360360408110156100d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061021b565b60405180821515815260200191505060405180910390f35b61014f6004803603602081101561013957600080fd5b81019080803590602001909291905050506102ac565b005b61017d6004803603602081101561016757600080fd5b8101908080359060200190929190505050610437565b005b6000610212826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505061062f90919063ffffffff16565b90509392505050565b60006102a46000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505061067e565b905092915050565b6103336000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505061067e565b610388576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806106bc6029913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600101819055507f87dde712783ad4895642c7a875998317a71cf424a2444eb79545ce3795431ff93382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6104be6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff1615151515815260200160018201548152505061067e565b15610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610692602a913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020600101819055507f4075b367eed0513a54aa39c287c66d6ae98e5df6f73ac087b26b8f89d05d1aa83382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b60008060009050836000015115610674576000846020015114156106565760019050610673565b60008314156106685760019050610672565b8284602001511190505b5b5b8091505092915050565b600061068a824361062f565b905091905056fe4163636f756e7450726f6f6652656769737472793a2070726f6f6620616c7265616479206578697374734163636f756e7450726f6f6652656769737472793a2070726f6f6620646f65736e2774206578697374a164736f6c634300060c000a";