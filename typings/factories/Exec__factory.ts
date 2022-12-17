/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Exec, ExecInterface } from "../Exec";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__ec895586",
        type: "bytes8",
      },
    ],
    name: "c_ec895586",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__ec895586",
        type: "bytes8",
      },
    ],
    name: "c_falseec895586",
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
        name: "c__ec895586",
        type: "bytes8",
      },
    ],
    name: "c_trueec895586",
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
  "0x6101ae610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806337a288aa1461005057806380eecac414610080578063b936feb51461009c575b600080fd5b61006a6004803603810190610065919061013e565b6100cc565b6040516100779190610186565b60405180910390f35b61009a6004803603810190610095919061013e565b6100d3565b005b6100b660048036038101906100b1919061013e565b6100d6565b6040516100c39190610186565b60405180910390f35b6000919050565b50565b600060019050919050565b600080fd5b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b61011b816100e6565b811461012657600080fd5b50565b60008135905061013881610112565b92915050565b600060208284031215610154576101536100e1565b5b600061016284828501610129565b91505092915050565b60008115159050919050565b6101808161016b565b82525050565b600060208201905061019b6000830184610177565b9291505056fea164736f6c634300080c000a";

type ExecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Exec__factory extends ContractFactory {
  constructor(...args: ExecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Exec> {
    return super.deploy(overrides || {}) as Promise<Exec>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Exec {
    return super.attach(address) as Exec;
  }
  connect(signer: Signer): Exec__factory {
    return super.connect(signer) as Exec__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecInterface {
    return new utils.Interface(_abi) as ExecInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Exec {
    return new Contract(address, _abi, signerOrProvider) as Exec;
  }
}
