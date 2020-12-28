/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Gateway } from "../Gateway";

export class Gateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Gateway> {
    return super.deploy(overrides || {}) as Promise<Gateway>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Gateway {
    return super.attach(address) as Gateway;
  }
  connect(signer: Signer): Gateway__factory {
    return super.connect(signer) as Gateway__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Gateway {
    return new Contract(address, _abi, signerOrProvider) as Gateway;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "batch",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "succeeded",
        type: "bool",
      },
    ],
    name: "BatchDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "accountOwnerRegistry",
    outputs: [
      {
        internalType: "contract AccountOwnerRegistry",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "senderSignature",
        type: "bytes",
      },
    ],
    name: "delegateBatch",
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
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "senderSignature",
        type: "bytes",
      },
    ],
    name: "delegateBatchWithGasPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "batches",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFailure",
        type: "bool",
      },
    ],
    name: "delegateBatches",
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
    ],
    name: "getAccountNextNonce",
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
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "to",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "data",
            type: "bytes[]",
          },
        ],
        internalType: "struct Gateway.DelegatedBatch",
        name: "delegatedBatch",
        type: "tuple",
      },
    ],
    name: "hashDelegatedBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "to",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "data",
            type: "bytes[]",
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256",
          },
        ],
        internalType: "struct Gateway.DelegatedBatchWithGasPrice",
        name: "delegatedBatch",
        type: "tuple",
      },
    ],
    name: "hashDelegatedBatchWithGasPrice",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AccountOwnerRegistry",
        name: "accountOwnerRegistry_",
        type: "address",
      },
      {
        internalType: "contract PersonalAccountRegistry",
        name: "personalAccountRegistry_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainNameHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainVersionHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "typedDataDomainSalt",
        type: "bytes32",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "personalAccountRegistry",
    outputs: [
      {
        internalType: "contract PersonalAccountRegistry",
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
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "sendBatch",
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
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "sendBatchFromAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "typedDataDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916321790556115c3806100326000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806387d313131161008c578063b5021b1611610066578063b5021b161461019b578063bd106a02146101ae578063e372b55f146101b6578063f92c5f7c146101be576100cf565b806387d3131314610160578063984bd28f146101755780639f25562614610188576100cf565b8063231badaf146100d4578063235f8a44146100e9578063392e53cd146101125780635afaa7bb146101275780636d482cfb1461013a578063867519c61461014d575b600080fd5b6100e76100e2366004610d8e565b6101d1565b005b6100fc6100f7366004610f4c565b610261565b60405161010991906111e5565b60405180910390f35b61011a610288565b60405161010991906111da565b6100e7610135366004610e90565b610298565b6100fc610148366004610ff1565b6103b7565b6100e761015b366004610d1b565b6103d3565b6101686103df565b604051610109919061127b565b6100e7610183366004610efc565b6103ee565b6100e7610196366004610e2f565b61048b565b6100e76101a9366004610d8e565b61049b565b6100fc6104e7565b6101686104ed565b6100fc6101cc366004610cff565b6104fc565b6001600160a01b03851660009081526004602052604090205484116102115760405162461bcd60e51b815260040161020890611315565b60405180910390fd5b60006102308261022a610225888888610520565b610653565b906106a3565b6001600160a01b0387166000908152600460205260409020869055905061025986828686610748565b505050505050565b60006102826102258360000151846020015185604001518660600151610a0e565b92915050565b6000546001600160a01b03161590565b60008251116102b95760405162461bcd60e51b8152600401610208906113ac565b60005b82518110156103b2576000306001600160a01b03168483815181106102dd57fe5b60200260200101516040516102f291906110f2565b6000604051808303816000865af19150503d806000811461032f576040519150601f19603f3d011682016040523d82523d6000602084013e610334565b606091505b50509050821561035b578061035b5760405162461bcd60e51b81526004016102089061146a565b7f361c14722cc344132c73396113f7164232448b09c544a149f09048648b43d8723385848151811061038957fe5b6020026020010151836040516103a193929190611176565b60405180910390a1506001016102bc565b505050565b6000610282610225836000015184602001518560400151610520565b6103b283338484610748565b6003546001600160a01b031681565b6000546001600160a01b031632146104185760405162461bcd60e51b8152600401610208906112c6565b600080546001600160a01b03199081169091556002805482166001600160a01b03888116919091179091556003805490921690861617905561045b838383610b44565b6040517f5daa87a0e9463431830481fd4b6e3403442dfb9a12b9c07597e9f61d50b633c890600090a15050505050565b61049733338484610748565b5050565b6001600160a01b03851660009081526004602052604090205484116104d25760405162461bcd60e51b815260040161020890611315565b60006102308261022a6102258888883a610a0e565b60015481565b6002546001600160a01b031681565b6001600160a01b038116600090815260046020526040812054610282906001610ba2565b60006060825167ffffffffffffffff8111801561053c57600080fd5b50604051908082528060200260200182016040528015610566578160200160208202803683370190505b50905060005b83518110156105af5783818151811061058157fe5b60200260200101518051906020012082828151811061059c57fe5b602090810291909101015260010161056c565b507f4dc0a39234edc20669002d7daeb6a39b3af6a6a56073618b70893384c405c84985856040516020016105e39190611089565b604051602081830303815290604052805190602001208360405160200161060a91906110c8565b60405160208183030381529060405280519060200120604051602001610633949392919061121f565b604051602081830303815290604052805190602001209150509392505050565b600060405180604001604052806002815260200161190160f01b815250600154836040516020016106869392919061114f565b604051602081830303815290604052805190602001209050919050565b80516000908190604114156107415760208301516040840151606085015160001a601b8110156106d157601b015b8060ff16601b14806106e657508060ff16601c145b1561073d576001878285856040516000815260200160405260405161070e949392919061125d565b6020604051602081039080840390855afa158015610730573d6000803e3d6000fd5b5050506020604051035193505b5050505b9392505050565b6001600160a01b03841661076e5760405162461bcd60e51b815260040161020890611367565b600082511161078f5760405162461bcd60e51b8152600401610208906114e4565b81518151146107b05760405162461bcd60e51b81526004016102089061143a565b826001600160a01b0316846001600160a01b0316146108ef5760035460405163bb890d3f60e01b81526001600160a01b039091169063bb890d3f906107fb90879087906004016111c0565b60206040518083038186803b15801561081357600080fd5b505afa158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b9190610ee0565b806108d3575060025460405163bb890d3f60e01b81526001600160a01b039091169063bb890d3f9061088390879087906004016111c0565b60206040518083038186803b15801561089b57600080fd5b505afa1580156108af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d39190610ee0565b6108ef5760405162461bcd60e51b8152600401610208906113f2565b6000805b82518110156102595760006001600160a01b031684828151811061091357fe5b60200260200101516001600160a01b031614156109425760405162461bcd60e51b81526004016102089061128f565b83818151811061094e57fe5b60200260200101516001600160a01b031683828151811061096b57fe5b602002602001015187876040516020016109879392919061110e565b60408051601f19818403018152908290526109a1916110f2565b6000604051808303816000865af19150503d80600081146109de576040519150601f19603f3d011682016040523d82523d6000602084013e6109e3565b606091505b50508092505081610a065760405162461bcd60e51b81526004016102089061146a565b6001016108f3565b60006060835167ffffffffffffffff81118015610a2a57600080fd5b50604051908082528060200260200182016040528015610a54578160200160208202803683370190505b50905060005b8451811015610a9d57848181518110610a6f57fe5b602002602001015180519060200120828281518110610a8a57fe5b6020908102919091010152600101610a5a565b507f75a27a7ebaa6d94f2ad4eecbc98a424b9a0516c245c680308385c79d2ad6af2a8686604051602001610ad19190611089565b6040516020818303038152906040528051906020012083604051602001610af891906110c8565b6040516020818303038152906040528051906020012086604051602001610b2395949392919061123a565b60405160208183030381529060405280519060200120915050949350505050565b6040514690610b81907fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac5647290869086908590309088906020016111ee565b60408051601f19818403018152919052805160209091012060015550505050565b6000828201838110156107415760405162461bcd60e51b8152600401610208906114ad565b600082601f830112610bd7578081fd5b8135610bea610be582611540565b611519565b818152915060208083019084810181840286018201871015610c0b57600080fd5b60005b84811015610c33578135610c2181611590565b84529282019290820190600101610c0e565b505050505092915050565b600082601f830112610c4e578081fd5b8135610c5c610be582611540565b818152915060208083019084810160005b84811015610c3357610c84888484358a0101610c96565b84529282019290820190600101610c6d565b600082601f830112610ca6578081fd5b813567ffffffffffffffff811115610cbc578182fd5b610ccf601f8201601f1916602001611519565b9150808252836020828501011115610ce657600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610d10578081fd5b813561074181611590565b600080600060608486031215610d2f578182fd5b8335610d3a81611590565b9250602084013567ffffffffffffffff80821115610d56578384fd5b610d6287838801610bc7565b93506040860135915080821115610d77578283fd5b50610d8486828701610c3e565b9150509250925092565b600080600080600060a08688031215610da5578081fd5b8535610db081611590565b945060208601359350604086013567ffffffffffffffff80821115610dd3578283fd5b610ddf89838a01610bc7565b94506060880135915080821115610df4578283fd5b610e0089838a01610c3e565b93506080880135915080821115610e15578283fd5b50610e2288828901610c96565b9150509295509295909350565b60008060408385031215610e41578182fd5b823567ffffffffffffffff80821115610e58578384fd5b610e6486838701610bc7565b93506020850135915080821115610e79578283fd5b50610e8685828601610c3e565b9150509250929050565b60008060408385031215610ea2578182fd5b823567ffffffffffffffff811115610eb8578283fd5b610ec485828601610c3e565b9250506020830135610ed5816115a8565b809150509250929050565b600060208284031215610ef1578081fd5b8151610741816115a8565b600080600080600060a08688031215610f13578081fd5b8535610f1e81611590565b94506020860135610f2e81611590565b94979496505050506040830135926060810135926080909101359150565b600060208284031215610f5d578081fd5b813567ffffffffffffffff80821115610f74578283fd5b9083019060808286031215610f87578283fd5b610f916080611519565b82358152602083013582811115610fa6578485fd5b610fb287828601610bc7565b602083015250604083013582811115610fc9578485fd5b610fd587828601610c3e565b6040830152506060830135606082015280935050505092915050565b600060208284031215611002578081fd5b813567ffffffffffffffff80821115611019578283fd5b908301906060828603121561102c578283fd5b6110366060611519565b8235815260208301358281111561104b578485fd5b61105787828601610bc7565b60208301525060408301358281111561106e578485fd5b61107a87828601610c3e565b60408301525095945050505050565b815160009082906020808601845b838110156110bc5781516001600160a01b031685529382019390820190600101611097565b50929695505050505050565b815160009082906020808601845b838110156110bc578151855293820193908201906001016110d6565b60008251611104818460208701611560565b9190910192915050565b60008451611120818460208901611560565b6bffffffffffffffffffffffff19606095861b8116919093019081529290931b16601482015260280192915050565b60008451611161818460208901611560565b91909101928352506020820152604001919050565b600060018060a01b03851682526060602083015283518060608401526111a3816080850160208801611560565b921515604083015250601f91909101601f19160160800192915050565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b90815260200190565b9586526020860194909452604085019290925260608401526001600160a01b0316608083015260a082015260c00190565b93845260208401929092526040830152606082015260800190565b948552602085019390935260408401919091526060830152608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6001600160a01b0391909116815260200190565b6020808252601b908201527f476174657761793a2063616e6e6f742073656e6420746f203078300000000000604082015260600190565b6020808252602f908201527f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060408201526e3a34329034b734ba34b0b634bd32b960891b606082015260800190565b60208082526032908201527f476174657761793a206e6f6e6365206973206c6f776572207468616e2063757260408201527172656e74206163636f756e74206e6f6e636560701b606082015260800190565b60208082526025908201527f476174657761793a2063616e6e6f742073656e642066726f6d2030783020616360408201526418dbdd5b9d60da1b606082015260800190565b60208082526026908201527f476174657761793a2063616e6e6f742064656c656761746520656d707479206260408201526561746368657360d01b606082015260800190565b60208082526028908201527f476174657761793a2073656e646572206973206e6f7420746865206163636f75604082015267373a1037bbb732b960c11b606082015260800190565b60208082526016908201527508ec2e8caeec2f27440d2dcecc2d8d2c840c4c2e8c6d60531b604082015260600190565b60208082526023908201527f476174657761793a206261746368207472616e73616374696f6e2072657665726040820152621d195960ea1b606082015260800190565b6020808252601e908201527f536166654d6174684c69623a206164646974696f6e206f766572666c6f770000604082015260600190565b6020808252818101527f476174657761793a2063616e6e6f742073656e6420656d707479206261746368604082015260600190565b60405181810167ffffffffffffffff8111828210171561153857600080fd5b604052919050565b600067ffffffffffffffff821115611556578081fd5b5060209081020190565b60005b8381101561157b578181015183820152602001611563565b8381111561158a576000848401525b50505050565b6001600160a01b03811681146115a557600080fd5b50565b80151581146115a557600080fdfea164736f6c634300060c000a";
