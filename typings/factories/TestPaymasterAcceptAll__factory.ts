/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestPaymasterAcceptAll,
  TestPaymasterAcceptAllInterface,
} from "../TestPaymasterAcceptAll";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017e2380380620017e28339818101604052810190620000379190620002fd565b80620000586200004c620000b760201b60201c565b620000bf60201b60201c565b62000069816200018360201b60201c565b503373ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614620000b057620000af32620000bf60201b60201c565b5b50620003b2565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b62000193620000b760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001b96200025660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000212576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002099062000390565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002b18262000284565b9050919050565b6000620002c582620002a4565b9050919050565b620002d781620002b8565b8114620002e357600080fd5b50565b600081519050620002f781620002cc565b92915050565b6000602082840312156200031657620003156200027f565b5b60006200032684828501620002e6565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620003786020836200032f565b9150620003858262000340565b602082019050919050565b60006020820190508181036000830152620003ab8162000369565b9050919050565b61142080620003c26000396000f3fe6080604052600436106100c25760003560e01c8063b0d691fe1161007f578063c399ec8811610059578063c399ec881461020b578063d0e30db014610236578063f2fde38b14610240578063f465c77e14610269576100c2565b8063b0d691fe146101a0578063bb9fe6bf146101cb578063c23a5cea146101e2576100c2565b80630396cb60146100c7578063205c2878146100e3578063584465f21461010c578063715018a6146101355780638da5cb5b1461014c578063a9a2340914610177575b600080fd5b6100e160048036038101906100dc9190610c76565b6102a7565b005b3480156100ef57600080fd5b5061010a60048036038101906101059190610d37565b6103b4565b005b34801561011857600080fd5b50610133600480360381019061012e9190610dc7565b6104c3565b005b34801561014157600080fd5b5061014a610583565b005b34801561015857600080fd5b5061016161060b565b60405161016e9190610e03565b60405180910390f35b34801561018357600080fd5b5061019e60048036038101906101999190610ea8565b610634565b005b3480156101ac57600080fd5b506101b561064e565b6040516101c29190610f7b565b60405180910390f35b3480156101d757600080fd5b506101e0610674565b005b3480156101ee57600080fd5b5061020960048036038101906102049190610f96565b610774565b005b34801561021757600080fd5b50610220610880565b60405161022d9190610fd2565b60405180910390f35b61023e610923565b005b34801561024c57600080fd5b5061026760048036038101906102629190611019565b6109b3565b005b34801561027557600080fd5b50610290600480360381019061028b91906110a1565b610aab565b60405161029e9291906111a9565b60405180910390f35b6102af610acd565b73ffffffffffffffffffffffffffffffffffffffff166102cd61060b565b73ffffffffffffffffffffffffffffffffffffffff1614610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031a90611236565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b815260040161037f9190611265565b6000604051808303818588803b15801561039857600080fd5b505af11580156103ac573d6000803e3d6000fd5b505050505050565b6103bc610acd565b73ffffffffffffffffffffffffffffffffffffffff166103da61060b565b73ffffffffffffffffffffffffffffffffffffffff1614610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042790611236565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161048d92919061128f565b600060405180830381600087803b1580156104a757600080fd5b505af11580156104bb573d6000803e3d6000fd5b505050505050565b6104cb610acd565b73ffffffffffffffffffffffffffffffffffffffff166104e961060b565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690611236565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61058b610acd565b73ffffffffffffffffffffffffffffffffffffffff166105a961060b565b73ffffffffffffffffffffffffffffffffffffffff16146105ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f690611236565b60405180910390fd5b6106096000610ad5565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61063c610b99565b61064884848484610bf5565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61067c610acd565b73ffffffffffffffffffffffffffffffffffffffff1661069a61060b565b73ffffffffffffffffffffffffffffffffffffffff16146106f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e790611236565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561075a57600080fd5b505af115801561076e573d6000803e3d6000fd5b50505050565b61077c610acd565b73ffffffffffffffffffffffffffffffffffffffff1661079a61060b565b73ffffffffffffffffffffffffffffffffffffffff16146107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790611236565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b815260040161084b91906112b8565b600060405180830381600087803b15801561086557600080fd5b505af1158015610879573d6000803e3d6000fd5b5050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108dd9190610e03565b602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e91906112e8565b905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b815260040161097f9190610e03565b6000604051808303818588803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b5050505050565b6109bb610acd565b73ffffffffffffffffffffffffffffffffffffffff166109d961060b565b73ffffffffffffffffffffffffffffffffffffffff1614610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2690611236565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690611387565b60405180910390fd5b610aa881610ad5565b50565b6060600080604051806020016040528060008152509091509150935093915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bf357600080fd5b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c27906113f3565b60405180910390fd5b600080fd5b600080fd5b600063ffffffff82169050919050565b610c5381610c3a565b8114610c5e57600080fd5b50565b600081359050610c7081610c4a565b92915050565b600060208284031215610c8c57610c8b610c30565b5b6000610c9a84828501610c61565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cce82610ca3565b9050919050565b610cde81610cc3565b8114610ce957600080fd5b50565b600081359050610cfb81610cd5565b92915050565b6000819050919050565b610d1481610d01565b8114610d1f57600080fd5b50565b600081359050610d3181610d0b565b92915050565b60008060408385031215610d4e57610d4d610c30565b5b6000610d5c85828601610cec565b9250506020610d6d85828601610d22565b9150509250929050565b6000610d8282610ca3565b9050919050565b6000610d9482610d77565b9050919050565b610da481610d89565b8114610daf57600080fd5b50565b600081359050610dc181610d9b565b92915050565b600060208284031215610ddd57610ddc610c30565b5b6000610deb84828501610db2565b91505092915050565b610dfd81610d77565b82525050565b6000602082019050610e186000830184610df4565b92915050565b60038110610e2b57600080fd5b50565b600081359050610e3d81610e1e565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610e6857610e67610e43565b5b8235905067ffffffffffffffff811115610e8557610e84610e48565b5b602083019150836001820283011115610ea157610ea0610e4d565b5b9250929050565b60008060008060608587031215610ec257610ec1610c30565b5b6000610ed087828801610e2e565b945050602085013567ffffffffffffffff811115610ef157610ef0610c35565b5b610efd87828801610e52565b93509350506040610f1087828801610d22565b91505092959194509250565b6000819050919050565b6000610f41610f3c610f3784610ca3565b610f1c565b610ca3565b9050919050565b6000610f5382610f26565b9050919050565b6000610f6582610f48565b9050919050565b610f7581610f5a565b82525050565b6000602082019050610f906000830184610f6c565b92915050565b600060208284031215610fac57610fab610c30565b5b6000610fba84828501610cec565b91505092915050565b610fcc81610d01565b82525050565b6000602082019050610fe76000830184610fc3565b92915050565b610ff681610d77565b811461100157600080fd5b50565b60008135905061101381610fed565b92915050565b60006020828403121561102f5761102e610c30565b5b600061103d84828501611004565b91505092915050565b600080fd5b6000610160828403121561106257611061611046565b5b81905092915050565b6000819050919050565b61107e8161106b565b811461108957600080fd5b50565b60008135905061109b81611075565b92915050565b6000806000606084860312156110ba576110b9610c30565b5b600084013567ffffffffffffffff8111156110d8576110d7610c35565b5b6110e48682870161104b565b93505060206110f58682870161108c565b925050604061110686828701610d22565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b8381101561114a57808201518184015260208101905061112f565b83811115611159576000848401525b50505050565b6000601f19601f8301169050919050565b600061117b82611110565b611185818561111b565b935061119581856020860161112c565b61119e8161115f565b840191505092915050565b600060408201905081810360008301526111c38185611170565b90506111d26020830184610fc3565b9392505050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006112206020836111d9565b915061122b826111ea565b602082019050919050565b6000602082019050818103600083015261124f81611213565b9050919050565b61125f81610c3a565b82525050565b600060208201905061127a6000830184611256565b92915050565b61128981610cc3565b82525050565b60006040820190506112a46000830185611280565b6112b16020830184610fc3565b9392505050565b60006020820190506112cd6000830184611280565b92915050565b6000815190506112e281610d0b565b92915050565b6000602082840312156112fe576112fd610c30565b5b600061130c848285016112d3565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006113716026836111d9565b915061137c82611315565b604082019050919050565b600060208201905081810360008301526113a081611364565b9050919050565b7f6d757374206f7665727269646500000000000000000000000000000000000000600082015250565b60006113dd600d836111d9565b91506113e8826113a7565b602082019050919050565b6000602082019050818103600083015261140c816113d0565b905091905056fea164736f6c634300080c000a";

type TestPaymasterAcceptAllConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPaymasterAcceptAllConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPaymasterAcceptAll__factory extends ContractFactory {
  constructor(...args: TestPaymasterAcceptAllConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _entryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestPaymasterAcceptAll> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestPaymasterAcceptAll>;
  }
  getDeployTransaction(
    _entryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  attach(address: string): TestPaymasterAcceptAll {
    return super.attach(address) as TestPaymasterAcceptAll;
  }
  connect(signer: Signer): TestPaymasterAcceptAll__factory {
    return super.connect(signer) as TestPaymasterAcceptAll__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPaymasterAcceptAllInterface {
    return new utils.Interface(_abi) as TestPaymasterAcceptAllInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestPaymasterAcceptAll {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestPaymasterAcceptAll;
  }
}
