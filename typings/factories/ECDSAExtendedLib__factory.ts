/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ECDSAExtendedLib,
  ECDSAExtendedLibInterface,
} from "../ECDSAExtendedLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__81f5e90e",
        type: "bytes8",
      },
    ],
    name: "c_81f5e90e",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__81f5e90e",
        type: "bytes8",
      },
    ],
    name: "c_false81f5e90e",
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
        name: "c__81f5e90e",
        type: "bytes8",
      },
    ],
    name: "c_true81f5e90e",
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
  "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80635a207af81461005057806369f277fb146100af578063d05ee1701461010e575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015e565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610169565b005b6000919050565b600060019050919050565b5056fea164736f6c634300060c000a";

type ECDSAExtendedLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ECDSAExtendedLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ECDSAExtendedLib__factory extends ContractFactory {
  constructor(...args: ECDSAExtendedLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ECDSAExtendedLib> {
    return super.deploy(overrides || {}) as Promise<ECDSAExtendedLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ECDSAExtendedLib {
    return super.attach(address) as ECDSAExtendedLib;
  }
  connect(signer: Signer): ECDSAExtendedLib__factory {
    return super.connect(signer) as ECDSAExtendedLib__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ECDSAExtendedLibInterface {
    return new utils.Interface(_abi) as ECDSAExtendedLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ECDSAExtendedLib {
    return new Contract(address, _abi, signerOrProvider) as ECDSAExtendedLib;
  }
}