/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressLib, AddressLibInterface } from "../AddressLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__6866fc56",
        type: "bytes8",
      },
    ],
    name: "c_6866fc56",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__6866fc56",
        type: "bytes8",
      },
    ],
    name: "c_false6866fc56",
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
        name: "c__6866fc56",
        type: "bytes8",
      },
    ],
    name: "c_true6866fc56",
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
];

const _bytecode =
  "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80636074c36c14610050578063afd9965c14610099578063bdf2f737146100f8575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b005b6100e0600480360360208110156100af57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015a565b60405180821515815260200191505060405180910390f35b61013f6004803603602081101561010e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610165565b60405180821515815260200191505060405180910390f35b50565b600060019050919050565b600091905056fea164736f6c634300060c000a";

type AddressLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressLib__factory extends ContractFactory {
  constructor(...args: AddressLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AddressLib> {
    return super.deploy(overrides || {}) as Promise<AddressLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressLib {
    return super.attach(address) as AddressLib;
  }
  connect(signer: Signer): AddressLib__factory {
    return super.connect(signer) as AddressLib__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressLibInterface {
    return new utils.Interface(_abi) as AddressLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressLib {
    return new Contract(address, _abi, signerOrProvider) as AddressLib;
  }
}
