/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { WrappedWeiToken } from "../WrappedWeiToken";

export class WrappedWeiToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: PayableOverrides): Promise<WrappedWeiToken> {
    return super.deploy(overrides || {}) as Promise<WrappedWeiToken>;
  }
  getDeployTransaction(overrides?: PayableOverrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WrappedWeiToken {
    return super.attach(address) as WrappedWeiToken;
  }
  connect(signer: Signer): WrappedWeiToken__factory {
    return super.connect(signer) as WrappedWeiToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedWeiToken {
    return new Contract(address, _abi, signerOrProvider) as WrappedWeiToken;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    ],
    name: "depositTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "consumers_",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "isConsumer",
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
    inputs: [],
    name: "isInitialized",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startConsuming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopConsuming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawAllTo",
    outputs: [],
    stateMutability: "nonpayable",
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
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x600080546001600160a01b0319163317905560c0604052600b60808190526a577261707065642057656960a81b60a090815262000040916001919062000176565b50604080518082019091526004808252635757454960e01b60209092019182526200006e9160029162000176565b503415620000825762000082333462000088565b62000212565b6001600160a01b0382166200009c57600080fd5b60008111620000aa57600080fd5b6001600160a01b038216600090815260056020908152604090912054620000dc918390620009726200015c821b17901c565b6001600160a01b03831660009081526005602090815260409091209190915560045462000114918390620009726200015c821b17901c565b6004556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6000828201838110156200016f57600080fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b957805160ff1916838001178555620001e9565b82800160010185558215620001e9579182015b82811115620001e9578251825591602001919060010190620001cc565b50620001f7929150620001fb565b5090565b5b80821115620001f75760008155600101620001fc565b610cdd80620002226000396000f3fe6080604052600436106101485760003560e01c806370a08231116100c0578063a9059cbb11610074578063ca9add8f11610059578063ca9add8f146104c3578063dd62ed3e146104f6578063f55647e01461053157610159565b8063a9059cbb14610464578063b760faf91461049d57610159565b8063853828b6116100a5578063853828b6146103bd57806395d89b41146103d2578063a224cee7146103e757610159565b806370a0823114610357578063834ff7391461038a57610159565b806323b872dd11610117578063313ce567116100fc578063313ce56714610302578063392e53cd1461032d57806356a3b64b1461034257610159565b806323b872dd146102955780632e1a7d4d146102d857610159565b806306fdde031461015e578063095ea7b3146101e857806318160ddd14610235578063205c28781461025c57610159565b36610159576101573334610546565b005b600080fd5b34801561016a57600080fd5b506101736105f7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ad578181015183820152602001610195565b50505050905090810190601f1680156101da5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f457600080fd5b506102216004803603604081101561020b57600080fd5b506001600160a01b038135169060200135610684565b604080519115158252519081900360200190f35b34801561024157600080fd5b5061024a61069a565b60408051918252519081900360200190f35b34801561026857600080fd5b506101576004803603604081101561027f57600080fd5b506001600160a01b0381351690602001356106a0565b3480156102a157600080fd5b50610221600480360360608110156102b857600080fd5b506001600160a01b038135811691602081013590911690604001356106af565b3480156102e457600080fd5b50610157600480360360208110156102fb57600080fd5b5035610700565b34801561030e57600080fd5b5061031761070e565b6040805160ff9092168252519081900360200190f35b34801561033957600080fd5b50610221610717565b34801561034e57600080fd5b50610157610727565b34801561036357600080fd5b5061024a6004803603602081101561037a57600080fd5b50356001600160a01b0316610732565b34801561039657600080fd5b50610221600480360360208110156103ad57600080fd5b50356001600160a01b031661074d565b3480156103c957600080fd5b5061015761076b565b3480156103de57600080fd5b50610173610787565b3480156103f357600080fd5b506101576004803603602081101561040a57600080fd5b81019060208101813564010000000081111561042557600080fd5b82018360208201111561043757600080fd5b8035906020019184602083028401116401000000008311171561045957600080fd5b5090925090506107df565b34801561047057600080fd5b506102216004803603604081101561048757600080fd5b506001600160a01b0381351690602001356108aa565b610157600480360360208110156104b357600080fd5b50356001600160a01b03166108b7565b3480156104cf57600080fd5b50610157600480360360208110156104e657600080fd5b50356001600160a01b03166108c1565b34801561050257600080fd5b5061024a6004803603604081101561051957600080fd5b506001600160a01b03813581169160200135166108dd565b34801561053d57600080fd5b50610157610908565b6001600160a01b03821661055957600080fd5b6000811161056657600080fd5b6001600160a01b0382166000908152600560205260409020546105899082610972565b6001600160a01b0383166000908152600560205260409020556004546105af9082610972565b6004556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561067c5780601f106106515761010080835404028352916020019161067c565b820191906000526020600020905b81548152906001019060200180831161065f57829003601f168201915b505050505081565b600061069133848461098b565b50600192915050565b60045481565b6106ab338383610a13565b5050565b60006106bc848484610a50565b6001600160a01b0384166000908152600660209081526040808320338085529252909120546106f69186916106f19086610a8c565b61098b565b5060019392505050565b61070b333383610a13565b50565b60035460ff1681565b6000546001600160a01b03161590565b61073033610aa1565b565b6001600160a01b031660009081526005602052604090205490565b6001600160a01b031660009081526007602052604090205460ff1690565b3360008181526005602052604090205461073091908190610a13565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561067c5780601f106106515761010080835404028352916020019161067c565b6000546001600160a01b031633146107f657600080fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690558061084257336000908152600760205260409020805460ff1916600117905561087d565b8060005b8181101561087a5761087284848381811061085d57fe5b905060200201356001600160a01b0316610aa1565b600101610846565b50505b6040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a15050565b6000610691338484610a50565b61070b8134610546565b3360008181526005602052604090205461070b91908390610a13565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3360009081526007602052604090205460ff1661092457600080fd5b33600081815260076020908152604091829020805460ff19169055815192835290517fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f0989281900390910190a1565b60008282018381101561098457600080fd5b9392505050565b6001600160a01b03831661099e57600080fd5b6001600160a01b0382166109b157600080fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b610a1d8382610b22565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050610a4b57600080fd5b505050565b6001600160a01b03821660009081526007602052604090205460ff1615610a8157610a7c838383610a13565b610a4b565b610a4b838383610bd3565b600082821115610a9b57600080fd5b50900390565b6001600160a01b03811660009081526007602052604090205460ff1615610ac757600080fd5b6001600160a01b038116600081815260076020908152604091829020805460ff19166001179055815192835290517f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee071429281900390910190a150565b6001600160a01b038216610b3557600080fd5b60008111610b4257600080fd5b6001600160a01b038216600090815260056020526040902054610b659082610a8c565b6001600160a01b038316600090815260056020526040902055600454610b8b9082610a8c565b6004556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038316610be657600080fd5b6001600160a01b038216610bf957600080fd5b6001600160a01b038316600090815260056020526040902054610c1c9082610a8c565b6001600160a01b038085166000908152600560205260408082209390935590841681522054610c4b9082610972565b6001600160a01b0380841660008181526005602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350505056fea2646970667358221220a6abb2b19ad476467912c55ba9d507f4bb60645f4a497f4d634cc5a5c0c1fad264736f6c634300060c0033";
