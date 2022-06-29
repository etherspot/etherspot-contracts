/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XAppConnectionManager,
  XAppConnectionManagerInterface,
} from "../XAppConnectionManager";

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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaUnenrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "WatcherPermissionSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "domainToReplica",
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
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract Home",
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
        name: "_replica",
        type: "address",
      },
    ],
    name: "isReplica",
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
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "ownerEnrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "ownerUnenrollReplica",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "replicaToDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "_access",
        type: "bool",
      },
    ],
    name: "setWatcherPermission",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_updater",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "unenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "watcherPermission",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61202e806200010e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f5d90e01161008c578063b9cff16211610066578063b9cff16214610237578063e0e7a91314610267578063f2fde38b14610283578063f31faefb1461029f576100ea565b80638f5d90e0146101e1578063916c3470146101fd5780639fa92f9d14610219576100ea565b80636ef0f37f116100c85780636ef0f37f1461017f578063715018a61461019b5780638d3638f4146101a55780638da5cb5b146101c3576100ea565b8063427ebef5146100ef5780635190bc531461011f5780635f8b1dba1461014f575b600080fd5b6101096004803603810190610104919061149c565b6102bb565b60405161011691906114f7565b60405180910390f35b61013960048036038101906101349190611512565b61032f565b60405161014691906114f7565b60405180910390f35b61016960048036038101906101649190611512565b610391565b604051610176919061154e565b60405180910390f35b61019960048036038101906101949190611512565b6103b4565b005b6101a3610474565b005b6101ad6104fc565b6040516101ba919061154e565b60405180910390f35b6101cb610594565b6040516101d89190611578565b60405180910390f35b6101fb60048036038101906101f69190611512565b6105bd565b005b610217600480360381019061021291906115bf565b610645565b005b61022161077a565b60405161022e9190611671565b60405180910390f35b610251600480360381019061024c919061168c565b6107a0565b60405161025e9190611578565b60405180910390f35b610281600480360381019061027c9190611835565b6107d3565b005b61029d60048036038101906102989190611512565b610a3c565b005b6102b960048036038101906102b4919061149c565b610b34565b005b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1663ffffffff1614159050919050565b60026020528060005260406000206000915054906101000a900463ffffffff1681565b6103bc610cb7565b73ffffffffffffffffffffffffffffffffffffffff166103da610594565b73ffffffffffffffffffffffffffffffffffffffff1614610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042790611901565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61047c610cb7565b73ffffffffffffffffffffffffffffffffffffffff1661049a610594565b73ffffffffffffffffffffffffffffffffffffffff16146104f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e790611901565b60405180910390fd5b6104fa6000610cbf565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561056b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058f9190611936565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105c5610cb7565b73ffffffffffffffffffffffffffffffffffffffff166105e3610594565b73ffffffffffffffffffffffffffffffffffffffff1614610639576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063090611901565b60405180910390fd5b61064281610d83565b50565b61064d610cb7565b73ffffffffffffffffffffffffffffffffffffffff1661066b610594565b73ffffffffffffffffffffffffffffffffffffffff16146106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b890611901565b60405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008463ffffffff1663ffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508163ffffffff167f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c848360405161076d929190611963565b60405180910390a2505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610887576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087e906119d8565b60405180910390fd5b61089083610ed7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109159190611a0d565b73ffffffffffffffffffffffffffffffffffffffff161461096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290611a86565b60405180910390fd5b60006109818561097a84610ee4565b8686610f07565b9050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008663ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390611af2565b60405180910390fd5b610a3582610d83565b5050505050565b610a44610cb7565b73ffffffffffffffffffffffffffffffffffffffff16610a62610594565b73ffffffffffffffffffffffffffffffffffffffff1614610ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaf90611901565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1f90611b84565b60405180910390fd5b610b3181610cbf565b50565b610b3c610cb7565b73ffffffffffffffffffffffffffffffffffffffff16610b5a610594565b73ffffffffffffffffffffffffffffffffffffffff1614610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba790611901565b60405180910390fd5b610bb982610d83565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555081600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508063ffffffff167f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a923483604051610cab9190611578565b60405180910390a25050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055508063ffffffff167fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b83604051610ecb9190611578565b60405180910390a25050565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b600080610f1385610ed7565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f819190611bb9565b90506000818786604051602001610f9a93929190611c3d565b604051602081830303815290604052805190602001209050610fbb81610fd3565b9050610fc78185611003565b92505050949350505050565b600081604051602001610fe69190611cd1565b604051602081830303815290604052805190602001209050919050565b6000806000611012858561102a565b9150915061101f816110ad565b819250505092915050565b60008060418351141561106c5760008060006020860151925060408601519150606086015160001a905061106087828585611282565b945094505050506110a6565b60408351141561109d57600080602085015191506040850151905061109286838361138f565b9350935050506110a6565b60006002915091505b9250929050565b600060048111156110c1576110c0611cf7565b5b8160048111156110d4576110d3611cf7565b5b14156110df5761127f565b600160048111156110f3576110f2611cf7565b5b81600481111561110657611105611cf7565b5b1415611147576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113e90611d72565b60405180910390fd5b6002600481111561115b5761115a611cf7565b5b81600481111561116e5761116d611cf7565b5b14156111af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a690611dde565b60405180910390fd5b600360048111156111c3576111c2611cf7565b5b8160048111156111d6576111d5611cf7565b5b1415611217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120e90611e70565b60405180910390fd5b60048081111561122a57611229611cf7565b5b81600481111561123d5761123c611cf7565b5b141561127e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127590611f02565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156112bd576000600391509150611386565b601b8560ff16141580156112d55750601c8560ff1614155b156112e7576000600491509150611386565b60006001878787876040516000815260200160405260405161130c9493929190611f4d565b6020604051602081039080840390855afa15801561132e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561137d57600060019250925050611386565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c6113d29190611fcb565b90506113e087828885611282565b935093505050935093915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061142d82611402565b9050919050565b61143d81611422565b811461144857600080fd5b50565b60008135905061145a81611434565b92915050565b600063ffffffff82169050919050565b61147981611460565b811461148457600080fd5b50565b60008135905061149681611470565b92915050565b600080604083850312156114b3576114b26113f8565b5b60006114c18582860161144b565b92505060206114d285828601611487565b9150509250929050565b60008115159050919050565b6114f1816114dc565b82525050565b600060208201905061150c60008301846114e8565b92915050565b600060208284031215611528576115276113f8565b5b60006115368482850161144b565b91505092915050565b61154881611460565b82525050565b6000602082019050611563600083018461153f565b92915050565b61157281611422565b82525050565b600060208201905061158d6000830184611569565b92915050565b61159c816114dc565b81146115a757600080fd5b50565b6000813590506115b981611593565b92915050565b6000806000606084860312156115d8576115d76113f8565b5b60006115e68682870161144b565b93505060206115f786828701611487565b9250506040611608868287016115aa565b9150509250925092565b6000819050919050565b600061163761163261162d84611402565b611612565b611402565b9050919050565b60006116498261161c565b9050919050565b600061165b8261163e565b9050919050565b61166b81611650565b82525050565b60006020820190506116866000830184611662565b92915050565b6000602082840312156116a2576116a16113f8565b5b60006116b084828501611487565b91505092915050565b6000819050919050565b6116cc816116b9565b81146116d757600080fd5b50565b6000813590506116e9816116c3565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611742826116f9565b810181811067ffffffffffffffff821117156117615761176061170a565b5b80604052505050565b60006117746113ee565b90506117808282611739565b919050565b600067ffffffffffffffff8211156117a05761179f61170a565b5b6117a9826116f9565b9050602081019050919050565b82818337600083830152505050565b60006117d86117d384611785565b61176a565b9050828152602081018484840111156117f4576117f36116f4565b5b6117ff8482856117b6565b509392505050565b600082601f83011261181c5761181b6116ef565b5b813561182c8482602086016117c5565b91505092915050565b60008060006060848603121561184e5761184d6113f8565b5b600061185c86828701611487565b935050602061186d868287016116da565b925050604084013567ffffffffffffffff81111561188e5761188d6113fd565b5b61189a86828701611807565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006118eb6020836118a4565b91506118f6826118b5565b602082019050919050565b6000602082019050818103600083015261191a816118de565b9050919050565b60008151905061193081611470565b92915050565b60006020828403121561194c5761194b6113f8565b5b600061195a84828501611921565b91505092915050565b60006040820190506119786000830185611569565b61198560208301846114e8565b9392505050565b7f217265706c696361206578697374730000000000000000000000000000000000600082015250565b60006119c2600f836118a4565b91506119cd8261198c565b602082019050919050565b600060208201905081810360008301526119f1816119b5565b9050919050565b600081519050611a0781611434565b92915050565b600060208284031215611a2357611a226113f8565b5b6000611a31848285016119f8565b91505092915050565b7f2163757272656e74207570646174657200000000000000000000000000000000600082015250565b6000611a706010836118a4565b9150611a7b82611a3a565b602082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b7f2176616c69642077617463686572000000000000000000000000000000000000600082015250565b6000611adc600e836118a4565b9150611ae782611aa6565b602082019050919050565b60006020820190508181036000830152611b0b81611acf565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b6e6026836118a4565b9150611b7982611b12565b604082019050919050565b60006020820190508181036000830152611b9d81611b61565b9050919050565b600081519050611bb3816116c3565b92915050565b600060208284031215611bcf57611bce6113f8565b5b6000611bdd84828501611ba4565b91505092915050565b6000819050919050565b611c01611bfc826116b9565b611be6565b82525050565b60008160e01b9050919050565b6000611c1f82611c07565b9050919050565b611c37611c3282611460565b611c14565b82525050565b6000611c498286611bf0565b602082019150611c598285611c26565b600482019150611c698284611bf0565b602082019150819050949350505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611cbb601c83611c7a565b9150611cc682611c85565b601c82019050919050565b6000611cdc82611cae565b9150611ce88284611bf0565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611d5c6018836118a4565b9150611d6782611d26565b602082019050919050565b60006020820190508181036000830152611d8b81611d4f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611dc8601f836118a4565b9150611dd382611d92565b602082019050919050565b60006020820190508181036000830152611df781611dbb565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e5a6022836118a4565b9150611e6582611dfe565b604082019050919050565b60006020820190508181036000830152611e8981611e4d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611eec6022836118a4565b9150611ef782611e90565b604082019050919050565b60006020820190508181036000830152611f1b81611edf565b9050919050565b611f2b816116b9565b82525050565b600060ff82169050919050565b611f4781611f31565b82525050565b6000608082019050611f626000830187611f22565b611f6f6020830186611f3e565b611f7c6040830185611f22565b611f896060830184611f22565b95945050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fd682611f92565b9150611fe183611f92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561201657612015611f9c565b5b82820190509291505056fea164736f6c634300080b000a";

type XAppConnectionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XAppConnectionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XAppConnectionManager__factory extends ContractFactory {
  constructor(...args: XAppConnectionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XAppConnectionManager> {
    return super.deploy(overrides || {}) as Promise<XAppConnectionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XAppConnectionManager {
    return super.attach(address) as XAppConnectionManager;
  }
  connect(signer: Signer): XAppConnectionManager__factory {
    return super.connect(signer) as XAppConnectionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XAppConnectionManagerInterface {
    return new utils.Interface(_abi) as XAppConnectionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XAppConnectionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as XAppConnectionManager;
  }
}
