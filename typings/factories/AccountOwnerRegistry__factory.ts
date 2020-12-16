/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AccountOwnerRegistry } from "../AccountOwnerRegistry";

export class AccountOwnerRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AccountOwnerRegistry> {
    return super.deploy(overrides || {}) as Promise<AccountOwnerRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccountOwnerRegistry {
    return super.attach(address) as AccountOwnerRegistry;
  }
  connect(signer: Signer): AccountOwnerRegistry__factory {
    return super.connect(signer) as AccountOwnerRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountOwnerRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccountOwnerRegistry;
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AccountOwnerAdded",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AccountOwnerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "addAccountOwner",
    outputs: [],
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
    ],
    name: "removeAccountOwner",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "verifyAccountOwner",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "verifyAccountOwnerAtBlock",
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
  "0x608060405234801561001057600080fd5b5061037d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806334d323a4146100515780638ecc13651461009b578063bb890d3f146100c3578063e278cfc6146100f1575b600080fd5b6100876004803603606081101561006757600080fd5b506001600160a01b03813581169160208101359091169060400135610117565b604080519115158252519081900360200190f35b6100c1600480360360208110156100b157600080fd5b50356001600160a01b0316610168565b005b610087600480360360408110156100d957600080fd5b506001600160a01b0381358116916020013516610226565b6100c16004803603602081101561010757600080fd5b50356001600160a01b0316610275565b6001600160a01b0380841660009081526020818152604080832093861683529281528282208351808501909452805460ff16151584526001015490830152906101609083610328565b949350505050565b336000908152602081815260408083206001600160a01b03851684528252918290208251808401909352805460ff161515835260010154908201526101ac9061035e565b156101b657600080fd5b336000818152602081815260408083206001600160a01b038616808552908352818420805460ff191660019081178255019390935580519384529083019190915280517f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644689281900390910190a150565b6001600160a01b0380831660009081526020818152604080832093851683529281528282208351808501909452805460ff161515845260010154908301529061026e9061035e565b9392505050565b336000908152602081815260408083206001600160a01b03851684528252918290208251808401909352805460ff161515835260010154908201526102b99061035e565b6102c257600080fd5b336000818152602081815260408083206001600160a01b038616808552908352928190204360019091015580519384529083019190915280517f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb9281900390910190a150565b815160009081901561026e5760208401516103455750600161026e565b826103525750600161026e565b50506020909101511190565b600061036a8243610328565b9291505056fea164736f6c634300060c000a";