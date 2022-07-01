/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";

const _abi = [
  {
    inputs: [],
    name: "CannotBridgeToSameNetwork",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeValueWithERC",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cBridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "CBridgeInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bridgeUsed",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainIdTo",
        type: "uint256",
      },
    ],
    name: "TransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "UpdatedCBridgeAddress",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "dstChainId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "bridgeTokensCBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cBridge",
        type: "address",
      },
    ],
    name: "initializeCBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "updateCBridgeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506118ba806100206000396000f3fe6080604052600436106100345760003560e01c80631124bcf9146100395780635277cbc714610062578063dae033891461007e575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b919061100f565b6100a7565b005b61007c60048036038101906100779190611061565b6101ab565b005b34801561008a57600080fd5b506100a560048036038101906100a0919061100f565b6102c0565b005b6100af6103b9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610116576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610120610454565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504681600101819055507f5b114a545b5a08e3628017ac6e1af1f29e3f593dde50a4a93ab76f2a2220cd38824660405161019f92919061137f565b60405180910390a15050565b60006101b5610481565b90506001816000015414156101f6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506102208260a0016020810190610216919061100f565b83606001356104ae565b61023982803603810190610234919061108a565b6104ec565b7f83bd4b75444b26482a091d91d32e43a65722f9fd8267a590beadccd9e61539e88260a001602081019061026d919061100f565b33846080016020810190610281919061100f565b856060013586602001602081019061029991906110dc565b6040516102aa95949392919061140a565b60405180910390a1600081600001819055505050565b6102c86103b9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561032f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610339610454565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fef1a021f4afad10827a9f886313f92d00348a53d0b0df8d0aa270a0ac3379bc5826040516103ad91906112a3565b60405180910390a15050565b6103c161060e565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610452576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610449906113ca565b60405180910390fd5b565b6000807f9d7253cc9498e9cc54011bbbe9471a68adbc99d0ac1eef42369f5a452e814c4a90508091505090565b6000807fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b90508091505090565b6104e88282600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461063b565b5050565b60006104f6610454565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050826020015167ffffffffffffffff16461415610569576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057c8360a0015182856060015161075f565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb84608001518560a0015186606001518760200151886040015189600001516040518763ffffffff1660e01b81526004016105d79695949392919061131e565b600060405180830381600087803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b50505050505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000821415610676576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106ba578134146106b5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075a565b600034146106f3576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006106fe846108ca565b905061070c84333086610996565b8281610717866108ca565b6107219190611527565b14610758576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610799576108c5565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610800576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161083d9291906112be565b60206040518083038186803b15801561085557600080fd5b505afa158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d91906110b3565b9050818110156108c3576108c284847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a76565b5b505b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461098d578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161093891906112a3565b60206040518083038186803b15801561095057600080fd5b505afa158015610964573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098891906110b3565b61098f565b475b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156109fd576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a64576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7084848484610bd4565b50505050565b6000811480610b0f575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610abd9291906112be565b60206040518083038186803b158015610ad557600080fd5b505afa158015610ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0d91906110b3565b145b610b4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b45906114b0565b60405180910390fd5b610bcf8363095ea7b360e01b8484604051602401610b6d92919061137f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c5d565b505050565b610c57846323b872dd60e01b858585604051602401610bf5939291906112e7565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610c5d565b50505050565b6000610cbf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d249092919063ffffffff16565b9050600081511115610d1f5780806020019051810190610cdf9190611038565b610d1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1590611490565b60405180910390fd5b5b505050565b6060610d338484600085610d3c565b90509392505050565b606082471015610d81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d78906113ea565b60405180910390fd5b610d8a85610e50565b610dc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc090611470565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610df2919061128c565b60006040518083038185875af1925050503d8060008114610e2f576040519150601f19603f3d011682016040523d82523d6000602084013e610e34565b606091505b5091509150610e44828286610e73565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610e8357829050610ed3565b600083511115610e965782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eca91906113a8565b60405180910390fd5b9392505050565b600081359050610ee98161183a565b92915050565b600081519050610efe81611851565b92915050565b600060c08284031215610f1657600080fd5b81905092915050565b600060c08284031215610f3157600080fd5b610f3b60c06114d0565b90506000610f4b84828501610fe5565b6000830152506020610f5f84828501610ffa565b6020830152506040610f7384828501610ffa565b6040830152506060610f8784828501610fbb565b6060830152506080610f9b84828501610eda565b60808301525060a0610faf84828501610eda565b60a08301525092915050565b600081359050610fca81611868565b92915050565b600081519050610fdf81611868565b92915050565b600081359050610ff48161187f565b92915050565b60008135905061100981611896565b92915050565b60006020828403121561102157600080fd5b600061102f84828501610eda565b91505092915050565b60006020828403121561104a57600080fd5b600061105884828501610eef565b91505092915050565b600060c0828403121561107357600080fd5b600061108184828501610f04565b91505092915050565b600060c0828403121561109c57600080fd5b60006110aa84828501610f1f565b91505092915050565b6000602082840312156110c557600080fd5b60006110d384828501610fd0565b91505092915050565b6000602082840312156110ee57600080fd5b60006110fc84828501610ffa565b91505092915050565b61110e8161155b565b82525050565b600061111f826114f5565b611129818561150b565b93506111398185602086016115d9565b80840191505092915050565b600061115082611500565b61115a8185611516565b935061116a8185602086016115d9565b6111738161169b565b840191505092915050565b600061118b602283611516565b9150611196826116ac565b604082019050919050565b60006111ae602683611516565b91506111b9826116fb565b604082019050919050565b60006111d1600783611516565b91506111dc8261174a565b602082019050919050565b60006111f4601d83611516565b91506111ff82611773565b602082019050919050565b6000611217602a83611516565b91506112228261179c565b604082019050919050565b600061123a603683611516565b9150611245826117eb565b604082019050919050565b61125981611599565b82525050565b611268816115a3565b82525050565b611277816115c7565b82525050565b611286816115b3565b82525050565b60006112988284611114565b915081905092915050565b60006020820190506112b86000830184611105565b92915050565b60006040820190506112d36000830185611105565b6112e06020830184611105565b9392505050565b60006060820190506112fc6000830186611105565b6113096020830185611105565b6113166040830184611250565b949350505050565b600060c0820190506113336000830189611105565b6113406020830188611105565b61134d6040830187611250565b61135a606083018661127d565b611367608083018561127d565b61137460a083018461125f565b979650505050505050565b60006040820190506113946000830185611105565b6113a16020830184611250565b9392505050565b600060208201905081810360008301526113c28184611145565b905092915050565b600060208201905081810360008301526113e38161117e565b9050919050565b60006020820190508181036000830152611403816111a1565b9050919050565b600060c0820190508181036000830152611423816111c4565b90506114326020830188611105565b61143f6040830187611105565b61144c6060830186611105565b6114596080830185611250565b61146660a083018461126e565b9695505050505050565b60006020820190508181036000830152611489816111e7565b9050919050565b600060208201905081810360008301526114a98161120a565b9050919050565b600060208201905081810360008301526114c98161122d565b9050919050565b60006114da6114eb565b90506114e6828261160c565b919050565b6000604051905090565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061153282611599565b915061153d83611599565b9250828210156115505761154f61163d565b5b828203905092915050565b600061156682611579565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b60006115d2826115b3565b9050919050565b60005b838110156115f75780820151818401526020810190506115dc565b83811115611606576000848401525b50505050565b6116158261169b565b810181811067ffffffffffffffff821117156116345761163361166c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6342726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6118438161155b565b811461184e57600080fd5b50565b61185a8161156d565b811461186557600080fd5b50565b61187181611599565b811461187c57600080fd5b50565b611888816115a3565b811461189357600080fd5b50565b61189f816115b3565b81146118aa57600080fd5b5056fea164736f6c6343000804000a";

type CBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBridgeFacet__factory extends ContractFactory {
  constructor(...args: CBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CBridgeFacet> {
    return super.deploy(overrides || {}) as Promise<CBridgeFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CBridgeFacet {
    return super.attach(address) as CBridgeFacet;
  }
  connect(signer: Signer): CBridgeFacet__factory {
    return super.connect(signer) as CBridgeFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBridgeFacetInterface {
    return new utils.Interface(_abi) as CBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as CBridgeFacet;
  }
}