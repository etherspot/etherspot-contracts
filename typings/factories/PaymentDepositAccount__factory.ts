/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PaymentDepositAccount,
  PaymentDepositAccountInterface,
} from "../PaymentDepositAccount";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a";

type PaymentDepositAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentDepositAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentDepositAccount__factory extends ContractFactory {
  constructor(...args: PaymentDepositAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<PaymentDepositAccount> {
    return super.deploy(overrides || {}) as Promise<PaymentDepositAccount>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PaymentDepositAccount {
    return super.attach(address) as PaymentDepositAccount;
  }
  connect(signer: Signer): PaymentDepositAccount__factory {
    return super.connect(signer) as PaymentDepositAccount__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentDepositAccountInterface {
    return new utils.Interface(_abi) as PaymentDepositAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentDepositAccount {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PaymentDepositAccount;
  }
}
