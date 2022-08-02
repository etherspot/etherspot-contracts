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
    inputs: [
      {
        internalType: "bytes8",
        name: "c__624bed52",
        type: "bytes8",
      },
    ],
    name: "c_624bed52",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_e208e0f4",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__624bed52",
        type: "bytes8",
      },
    ],
    name: "c_false624bed52",
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
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_falsee208e0f4",
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
        name: "c__624bed52",
        type: "bytes8",
      },
    ],
    name: "c_true624bed52",
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
        name: "c__e208e0f4",
        type: "bytes8",
      },
    ],
    name: "c_truee208e0f4",
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
  "0x608060405261001e67b6012af9acb9264060c01b61009760201b60201c565b6100386727f467a9e7d89ff760c01b61009760201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610092679659be222464ef0a60c01b61009a60201b60201c565b61009d565b50565b50565b61080c806100ac6000396000f3fe60806040526004361061007f5760003560e01c8063abe124f61161004e578063abe124f6146102f8578063b719e0571461034e578063c25a4496146103ba578063f77c47911461041057610086565b8063062e4f9c1461008b5780633f579f42146100f75780636480a27b146102205780636c3da61f1461028c57610086565b3661008657005b600080fd5b34801561009757600080fd5b506100df600480360360208110156100ae57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610451565b60405180821515815260200191505060405180910390f35b34801561010357600080fd5b506101a56004803603606081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561016157600080fd5b82018360208201111561017357600080fd5b8035906020019184600183028401116401000000008311171561019557600080fd5b9091929391929390505050610458565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e55780820151818401526020810190506101ca565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022c57600080fd5b506102746004803603602081101561024357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061078c565b60405180821515815260200191505060405180910390f35b34801561029857600080fd5b506102e0600480360360208110156102af57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610797565b60405180821515815260200191505060405180910390f35b34801561030457600080fd5b5061034c6004803603602081101561031b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107a2565b005b34801561035a57600080fd5b506103a26004803603602081101561037157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107a5565b60405180821515815260200191505060405180910390f35b3480156103c657600080fd5b5061040e600480360360208110156103dd57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107ac565b005b34801561041c57600080fd5b506104256107af565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000919050565b606061046e67908b2c0aed8b72c360c01b6107ac565b6104826784d0485b592a236360c01b6107a2565b6104966732d9e05dbcd2297760c01b6107a2565b6104aa671853580eb63b1ec060c01b6107a2565b6104be67a3f5c255d67cc36460c01b6107a2565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806107d4602c913960400191505060405180910390fd5b61057667eac11ea12abcf59860c01b6107a2565b61058a6792057f91aa5d96c960c01b6107a2565b61059e67cf9ddb7b44654c0960c01b6107ac565b6105b267347d0dae68b764a060c01b6107ac565b6105c667e97edfce8c9f8d2860c01b6107ac565b6105da67cffac49f773743fb60c01b6107ac565b60606105f067e05282a115b9151660c01b6107ac565b61060467ede9303f9ed9e3f560c01b6107ac565b600061061a67e731e58e240d364860c01b6107ac565b8673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610686576040519150601f19603f3d011682016040523d82523d6000602084013e61068b565b606091505b5080935081925050506106a86701c15e000842881f60c01b6107ac565b6106bc67b70f836a33dc9b2360c01b6107ac565b6106d06743db365e5ffa022060c01b6107ac565b80610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b610757676d8bb913195659a260c01b6107ac565b61076b67ec7a5eebb7a9ae4760c01b6107ac565b61077f67cb82a8bfb9168a4560c01b6107ac565b8192505050949350505050565b600060019050919050565b600060019050919050565b50565b6000919050565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a";

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
