/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancesHelperV2,
  BalancesHelperV2Interface,
} from "../BalancesHelperV2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "AccountZeroAddress",
    type: "error",
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
        name: "token",
        type: "address",
      },
    ],
    name: "TokenZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__5ef3a5e5",
        type: "bytes8",
      },
    ],
    name: "c_5ef3a5e5",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__5ef3a5e5",
        type: "bytes8",
      },
    ],
    name: "c_false5ef3a5e5",
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
        name: "c__5ef3a5e5",
        type: "bytes8",
      },
    ],
    name: "c_true5ef3a5e5",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getSuperfluidWrappedTokenBalances",
    outputs: [
      {
        internalType: "int256[]",
        name: "",
        type: "int256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b67b7ef8068c44bcf9960c01b61003060201b60201c565b610033565b50565b611605806100426000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632d76fa671461005c57806350c5a7101461008c578063a192a8a6146100bc578063bfbe3209146100ec578063ef5bfc3714610108575b600080fd5b61007660048036038101906100719190610f34565b610138565b604051610083919061123d565b60405180910390f35b6100a660048036038101906100a19190610ebf565b61013f565b6040516100b391906111f9565b60405180910390f35b6100d660048036038101906100d19190610f34565b61040d565b6040516100e3919061123d565b60405180910390f35b61010660048036038101906101019190610f34565b610418565b005b610122600480360381019061011d9190610ebf565b61041b565b60405161012f919061121b565b60405180910390f35b6000919050565b60606101556723c86c46fcd2d41760c01b610418565b610169671b18abf8ae72ef4f60c01b610418565b61017d674ddd1ba983c107ad60c01b610418565b600083839050868690506101919190611394565b67ffffffffffffffff8111156101d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101fe5781602001602082028036833780820191505090505b509050610215677ea9a50f90b705a960c01b610418565b61022967f2a60f9b8dc23cda60c01b610418565b60005b868690508110156103d85761024b67b653c21706a04dd660c01b610418565b61025f6713cc076f241af84760c01b610418565b60005b858590508110156103c457610281675fbb2dd13efb71fb60c01b610418565b610295678f7050a912804f8460c01b610418565b600082878790506102a69190611394565b826102b1919061133e565b90506102c767059cf47fa456edbc60c01b610418565b61036b898985818110610303577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906103189190610e96565b888885818110610351577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906103669190610e96565b6106e9565b8482815181106103a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505080806103bc9061149f565b915050610262565b5080806103d09061149f565b91505061022c565b506103ed67df4fb25a45e759c360c01b610418565b6104016779e108aa2c4cd42560c01b610418565b80915050949350505050565b600060019050919050565b50565b606061043167caef9f8e1e4d7e6e60c01b610418565b6104456765d619f8b696e0f560c01b610418565b61045967c8da6aca75a77e4460c01b610418565b6000838390508686905061046d9190611394565b67ffffffffffffffff8111156104ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156104da5781602001602082028036833780820191505090505b5090506104f1671ae3392d2afb5c6160c01b610418565b61050567ce86a566b3c8894960c01b610418565b60005b868690508110156106b45761052767879cf4b05ae2d74260c01b610418565b61053b672342070b196ebe4760c01b610418565b60005b858590508110156106a05761055d6789c110937e22547160c01b610418565b61057167ec5eb99f89df002960c01b610418565b600082878790506105829190611394565b8261058d919061133e565b90506105a3679a557c85dc79f87b60c01b610418565b6106478989858181106105df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906105f49190610e96565b88888581811061062d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906106429190610e96565b6109c7565b848281518110610680577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505080806106989061149f565b91505061053e565b5080806106ac9061149f565b915050610508565b506106c967b4df56ed5f16e20060c01b610418565b6106dd67c389dad3b564116c60c01b610418565b80915050949350505050565b60006106ff67c5f75642799e143660c01b610418565b610713676d6453f42b6621dd60c01b610418565b610727678220036c01af2d0960c01b610418565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107af57610770671adbacc212117ac460c01b610418565b82826040517f484305ff0000000000000000000000000000000000000000000000000000000081526004016107a69291906111d0565b60405180910390fd5b6107c367c64d5cae439007bd60c01b610418565b6107d767522906f813ace93a60c01b610418565b6107eb67b5cf1cb84220ad2660c01b610418565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561087357610834678d6dc49eb1206e0a60c01b610418565b82826040517f41f93bdf00000000000000000000000000000000000000000000000000000000815260040161086a9291906111d0565b60405180910390fd5b6108876737ed514d091b983660c01b610418565b61089b676f0f4990a642a70960c01b610418565b6108af673cbac387b6e36f9460c01b610418565b600061094f632ec8eec760e01b856040516024016108cd91906111b5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508473ffffffffffffffffffffffffffffffffffffffff16610c7490919063ffffffff16565b905061096567e0c41ff43a1e2a7b60c01b610418565b610979671454b67fd1ca943a60c01b610418565b60008180602001905181019061098f9190610f5d565b50505090506109a86779bfef2287bfa3fc60c01b610418565b6109bc677b0154294677786f60c01b610418565b809250505092915050565b60006109dd67ec4c9a7baf3ef84960c01b610418565b6109f167d3901f2e83dd32d960c01b610418565b610a0567db9eeef42191c6bf60c01b610418565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a8d57610a4e677510c5b51f14a02f60c01b610418565b82826040517f484305ff000000000000000000000000000000000000000000000000000000008152600401610a849291906111d0565b60405180910390fd5b610aa16790772946905e759360c01b610418565b610ab5678d753aab63c3cd7860c01b610418565b610ac96727e022a3ad08bce160c01b610418565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b5157610b12679add4f379160512860c01b610418565b82826040517f41f93bdf000000000000000000000000000000000000000000000000000000008152600401610b489291906111d0565b60405180910390fd5b610b65675f6d686e8daa082860c01b610418565b610b79675ba1369d1159e62760c01b610418565b610b8d67326e13e9e49f8f7360c01b610418565b6000610c2d6370a0823160e01b85604051602401610bab91906111b5565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508473ffffffffffffffffffffffffffffffffffffffff16610c7490919063ffffffff16565b9050610c436709ccb7aca445e59860c01b610418565b610c576778d056371b0e68d460c01b610418565b80806020019051810190610c6b9190610fc0565b91505092915050565b6060610c9983836040518060600160405280602581526020016115d460259139610ca1565b905092915050565b6060610cac84610d6e565b610ceb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce29061127a565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1685604051610d13919061119e565b600060405180830381855afa9150503d8060008114610d4e576040519150601f19603f3d011682016040523d82523d6000602084013e610d53565b606091505b5091509150610d63828286610d91565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610da157829050610df1565b600083511115610db45782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de89190611258565b60405180910390fd5b9392505050565b600081359050610e0781611577565b92915050565b60008083601f840112610e1f57600080fd5b8235905067ffffffffffffffff811115610e3857600080fd5b602083019150836020820283011115610e5057600080fd5b9250929050565b600081359050610e668161158e565b92915050565b600081519050610e7b816115a5565b92915050565b600081519050610e90816115bc565b92915050565b600060208284031215610ea857600080fd5b6000610eb684828501610df8565b91505092915050565b60008060008060408587031215610ed557600080fd5b600085013567ffffffffffffffff811115610eef57600080fd5b610efb87828801610e0d565b9450945050602085013567ffffffffffffffff811115610f1a57600080fd5b610f2687828801610e0d565b925092505092959194509250565b600060208284031215610f4657600080fd5b6000610f5484828501610e57565b91505092915050565b60008060008060808587031215610f7357600080fd5b6000610f8187828801610e6c565b9450506020610f9287828801610e81565b9350506040610fa387828801610e81565b9250506060610fb487828801610e81565b91505092959194509250565b600060208284031215610fd257600080fd5b6000610fe084828501610e81565b91505092915050565b6000610ff58383611124565b60208301905092915050565b600061100d838361118f565b60208301905092915050565b611022816113ee565b82525050565b6000611033826112ba565b61103d8185611300565b93506110488361129a565b8060005b838110156110795781516110608882610fe9565b975061106b836112e6565b92505060018101905061104c565b5085935050505092915050565b6000611091826112c5565b61109b8185611311565b93506110a6836112aa565b8060005b838110156110d75781516110be8882611001565b97506110c9836112f3565b9250506001810190506110aa565b5085935050505092915050565b6110ed81611400565b82525050565b60006110fe826112d0565b6111088185611322565b935061111881856020860161146c565b80840191505092915050565b61112d81611438565b82525050565b600061113e826112db565b611148818561132d565b935061115881856020860161146c565b61116181611517565b840191505092915050565b600061117960248361132d565b915061118482611528565b604082019050919050565b61119881611462565b82525050565b60006111aa82846110f3565b915081905092915050565b60006020820190506111ca6000830184611019565b92915050565b60006040820190506111e56000830185611019565b6111f26020830184611019565b9392505050565b600060208201905081810360008301526112138184611028565b905092915050565b600060208201905081810360008301526112358184611086565b905092915050565b600060208201905061125260008301846110e4565b92915050565b600060208201905081810360008301526112728184611133565b905092915050565b600060208201905081810360008301526112938161116c565b9050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061134982611462565b915061135483611462565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611389576113886114e8565b5b828201905092915050565b600061139f82611462565b91506113aa83611462565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113e3576113e26114e8565b5b828202905092915050565b60006113f982611442565b9050919050565b60008115159050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561148a57808201518184015260208101905061146f565b83811115611499576000848401525b50505050565b60006114aa82611462565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156114dd576114dc6114e8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b611580816113ee565b811461158b57600080fd5b50565b6115978161140c565b81146115a257600080fd5b50565b6115ae81611438565b81146115b957600080fd5b50565b6115c581611462565b81146115d057600080fd5b5056fe416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564a164736f6c6343000804000a";

type BalancesHelperV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancesHelperV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancesHelperV2__factory extends ContractFactory {
  constructor(...args: BalancesHelperV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancesHelperV2> {
    return super.deploy(overrides || {}) as Promise<BalancesHelperV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancesHelperV2 {
    return super.attach(address) as BalancesHelperV2;
  }
  connect(signer: Signer): BalancesHelperV2__factory {
    return super.connect(signer) as BalancesHelperV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancesHelperV2Interface {
    return new utils.Interface(_abi) as BalancesHelperV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancesHelperV2 {
    return new Contract(address, _abi, signerOrProvider) as BalancesHelperV2;
  }
}
