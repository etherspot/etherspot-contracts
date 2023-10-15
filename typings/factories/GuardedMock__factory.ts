/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GuardedMock, GuardedMockInterface } from "../GuardedMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "guardians_",
        type: "address[]",
      },
    ],
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
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "GuardianAdded",
    type: "event",
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
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "addGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__0b6945c4",
        type: "bytes8",
      },
    ],
    name: "c_0b6945c4",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__d64e18df",
        type: "bytes8",
      },
    ],
    name: "c_d64e18df",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__0b6945c4",
        type: "bytes8",
      },
    ],
    name: "c_false0b6945c4",
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
        name: "c__d64e18df",
        type: "bytes8",
      },
    ],
    name: "c_falsed64e18df",
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
        name: "c__0b6945c4",
        type: "bytes8",
      },
    ],
    name: "c_true0b6945c4",
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
        name: "c__d64e18df",
        type: "bytes8",
      },
    ],
    name: "c_trued64e18df",
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
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "isGuardian",
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
    inputs: [
      {
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "removeGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verifyGuardianSignature",
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
  "0x60806040523480156200001157600080fd5b506040516200196538038062001965833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660208202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015620000c6578082015181840152602081019050620000a9565b50505050905001604052505050620000ef67e6ad6dd6ee73072860c01b6200015b60201b60201c565b6200010b679c6d41472e0ebf9760c01b6200015e60201b60201c565b620001276734640e767a3e803060c01b6200015e60201b60201c565b6200014367e6e5ab40fefb047160c01b6200015e60201b60201c565b62000154816200016160201b60201c565b50620006b3565b50565b50565b6200017d67f4de5e8e73d6ad8760c01b6200015b60201b60201c565b6200019967db1ce0981035d84760c01b6200015b60201b60201c565b620001b567e97a0a25809a3f0960c01b6200015b60201b60201c565b6000815114156200022b57620001dc67de11b839232da49160c01b6200015b60201b60201c565b620001f867b59bd2ea0c1c89a260c01b6200015b60201b60201c565b6200021467652fe2786000e62060c01b6200015b60201b60201c565b62000225326200033a60201b60201c565b62000337565b6200024767ad5f6f13dddc2ad960c01b6200015b60201b60201c565b62000263672af46088979bcb2160c01b6200015b60201b60201c565b6200027f6796cb81cf0bf6606d60c01b6200015b60201b60201c565b600081519050620002a1672f4c11881b8dca8c60c01b6200015b60201b60201c565b620002bd67cec4e8db5057edad60c01b6200015b60201b60201c565b60005b818110156200033457620002e5671a5cc94c8b734dd960c01b6200015b60201b60201c565b6200030167e437d14e98e20b2f60c01b6200015b60201b60201c565b620003268382815181106200031257fe5b60200260200101516200033a60201b60201c565b8080600101915050620002c0565b50505b50565b620003566703611a9e4063d8ea60c01b6200015b60201b60201c565b6200037267ee1baacaa033494260c01b6200015b60201b60201c565b6200038e6751e5840de998a97760c01b6200015b60201b60201c565b620003aa676f82de74e2e2e03560c01b6200015b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200044e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6200046a6717cb80dba7a8a0ea60c01b6200015b60201b60201c565b6200048667e2f8fabe2a63d8b660c01b6200015b60201b60201c565b620004a2677550a657f22d30dc60c01b6200015b60201b60201c565b620004be673c81d7073dbe6f3060c01b6200015b60201b60201c565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156200057e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b6200059a67bc5a1f0994a7f54e60c01b6200015b60201b60201c565b620005b6679a7f014629c7374960c01b6200015b60201b60201c565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200062967d71c83e9f3188e9d60c01b6200015b60201b60201c565b6200064567e4bfbd26cb5c77e660c01b6200015b60201b60201c565b7fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6112a280620006c36000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063bccb31c611610066578063bccb31c614610243578063d0f710d61461028c578063db57b3d214610325578063e7446c3a14610384578063fd929834146103e35761009e565b80630c68ba21146100a357806329fbd957146100fd578063714041561461015c578063a3561e69146101a0578063a526d83b146101ff575b600080fd5b6100e5600480360360208110156100b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042c565b60405180821515815260200191505060405180910390f35b6101446004803603602081101561011357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506104bd565b60405180821515815260200191505060405180910390f35b61019e6004803603602081101561017257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104c8565b005b6101e7600480360360208110156101b657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061091e565b60405180821515815260200191505060405180910390f35b6102416004803603602081101561021557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610925565b005b61028a6004803603602081101561025957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610aae565b005b61030d600480360360408110156102a257600080fd5b8101908080359060200190929190803590602001906401000000008111156102c957600080fd5b8201836020820111156102db57600080fd5b803590602001918460018302840111640100000000831117156102fd57600080fd5b9091929391929390505050610ab1565b60405180821515815260200191505060405180910390f35b61036c6004803603602081101561033b57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b46565b60405180821515815260200191505060405180910390f35b6103cb6004803603602081101561039a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b51565b60405180821515815260200191505060405180910390f35b61042a600480360360208110156103f957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b58565b005b6000610442677ab52c65f999e01f60c01b610aae565b6104566710268b7b424a1bd560c01b610aae565b61046a6713a157f311059a7b60c01b610aae565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600060019050919050565b6104dc6747dd6d4e27a092d260c01b610aae565b6104f067e0600b94c13d066760c01b610aae565b6105046755e8cedcdd449e2360c01b610aae565b61051867ab821ba7fedab67160c01b610aae565b61052c67c540fbd78e0e2a4960c01b610aae565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112706026913960400191505060405180910390fd5b6105e167d014260b312542b460c01b610aae565b6105f5674e25985d1c99d1f260c01b610aae565b61060967736984febec5fd2560c01b610aae565b61061d67cbb923c66996310360c01b610aae565b610631672c114aff1103564b60c01b610aae565b61064567a76a63e34be2bddb60c01b610aae565b61065967a220bc889ca09d2360c01b610aae565b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156106fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b61070f679467d7af09c5944d60c01b610aae565b61072367c28a58b1b15ad6de60c01b610aae565b61073767c70b0fecc7c6d3b160c01b610aae565b61074b67e7892f9392d41a6760c01b610aae565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b61081d675a0de441d13969aa60c01b610aae565b610831674e473b0a29064fba60c01b610aae565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061089c67e398e5606400274660c01b610aae565b6108b06738c3bd156a3471c260c01b610aae565b7fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6000919050565b61093967c17b66a0b198af7b60c01b610aae565b61094d67e0600b94c13d066760c01b610aae565b6109616755e8cedcdd449e2360c01b610aae565b61097567ab821ba7fedab67160c01b610aae565b61098967c540fbd78e0e2a4960c01b610aae565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112706026913960400191505060405180910390fd5b610a3e67d014260b312542b460c01b610aae565b610a52674e25985d1c99d1f260c01b610aae565b610a6667dfa24a8cc198350160c01b610aae565b610a7a67f9907d82cd18ee0760c01b610aae565b610a8e67dd37ee49f553c5a760c01b610aae565b610aa2679ad66b1d98f77fdf60c01b610aae565b610aab81610b5b565b50565b50565b6000610ac7670fa739e07c029f9060c01b610aae565b610adb67406100042e7653bd60c01b610aae565b610aef6784104632bda8198f60c01b610aae565b610b3d8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610e72565b90509392505050565b600060019050919050565b6000919050565b50565b610b6f6703611a9e4063d8ea60c01b610aae565b610b8367ee1baacaa033494260c01b610aae565b610b976751e5840de998a97760c01b610aae565b610bab676f82de74e2e2e03560c01b610aae565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b610c626717cb80dba7a8a0ea60c01b610aae565b610c7667e2f8fabe2a63d8b660c01b610aae565b610c8a677550a657f22d30dc60c01b610aae565b610c9e673c81d7073dbe6f3060c01b610aae565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b610d7167bc5a1f0994a7f54e60c01b610aae565b610d85679a7f014629c7374960c01b610aae565b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610df067d71c83e9f3188e9d60c01b610aae565b610e0467e4bfbd26cb5c77e660c01b610aae565b7fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6000610e8867fbe9af14abc78ca860c01b610aae565b610e9c67bd3616cf00f8ad2b60c01b610aae565b610eb0670aad941719c9b69b60c01b610aae565b6000610ec58385610f4490919063ffffffff16565b9050610edb6706f556c4601e7cd060c01b610aae565b610eef67344e7bee2db8345860c01b610aae565b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000610f5a670d75db982ec4597160c01b611261565b610f6e6725c2c60ab754182560c01b611261565b610f82673eb64a254569ed0660c01b611261565b6000610f9867fb2a2286066e15e460c01b611261565b610fac67a440db11ec9e986d60c01b611261565b60418351141561121a57610fca6704a5aada48e2763260c01b611261565b610fde674b98cf1796e5c26660c01b611261565b610ff267d2dfec7b159385fc60c01b611261565b60006110086772c2a840621b4aa760c01b611261565b61101c67bfd411e6ba4d07c460c01b611261565b600061103267145d23f82764ba9960c01b611261565b61104667acdff958a9c6c5dd60c01b611261565b600061105c673b79e3a80932a6a160c01b611261565b6020860151925060408601519150606086015160001a9050611088679b0cdee01a57ea2f60c01b611261565b61109c675dbf88583373227960c01b611261565b601b8160ff1610156110db576110bc670dc9a1836eb51c3260c01b611261565b6110d0677097d8456a6c3e1560c01b611261565b601b810190506110f0565b6110ef6708b39c61216869e760c01b611261565b5b611104672ea4d6db7d2138c560c01b611261565b611118679ad3f461195a5eee60c01b611261565b601b8160ff1614801561113b575061113a67a24e972b59dc7d0560c01b611264565b5b806111655750601c8160ff16148015611164575061116367934bee4849491d9560c01b611264565b5b5b156111fd5761117e676d6a491fc6e072fa60c01b611261565b61119267aecd1690d1de9f1c60c01b611261565b60018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156111ec573d6000803e3d6000fd5b505050602060405103519350611212565b61121167513fbc3b3a0ad1c060c01b611261565b5b50505061122f565b61122e6723d6d78de386c96660c01b611261565b5b6112436707d0c4f11e72cfc960c01b611261565b61125767b9689b22f403636c60c01b611261565b8091505092915050565b50565b60006001905091905056fe477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616ea164736f6c634300060c000a";

type GuardedMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GuardedMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GuardedMock__factory extends ContractFactory {
  constructor(...args: GuardedMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    guardians_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GuardedMock> {
    return super.deploy(guardians_, overrides || {}) as Promise<GuardedMock>;
  }
  getDeployTransaction(
    guardians_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(guardians_, overrides || {});
  }
  attach(address: string): GuardedMock {
    return super.attach(address) as GuardedMock;
  }
  connect(signer: Signer): GuardedMock__factory {
    return super.connect(signer) as GuardedMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GuardedMockInterface {
    return new utils.Interface(_abi) as GuardedMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GuardedMock {
    return new Contract(address, _abi, signerOrProvider) as GuardedMock;
  }
}
