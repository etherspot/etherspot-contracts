/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccountControllerMock,
  AccountControllerMockInterface,
} from "../AccountControllerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "accountRegistry_",
        type: "address",
      },
      {
        internalType: "address",
        name: "accountImplementation_",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "accountRegistry",
        type: "address",
      },
    ],
    name: "AccountRegistryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
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
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "AccountTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountUpgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "accountImplementation",
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
    name: "accountRegistry",
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
        internalType: "bytes8",
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_19d98a43",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__9c0e30ce",
        type: "bytes8",
      },
    ],
    name: "c_9c0e30ce",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_false19d98a43",
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
        name: "c__9c0e30ce",
        type: "bytes8",
      },
    ],
    name: "c_false9c0e30ce",
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
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_true19d98a43",
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
        name: "c__9c0e30ce",
        type: "bytes8",
      },
    ],
    name: "c_true9c0e30ce",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "computeAccountAddress",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deployAccount",
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
    name: "executeAccountTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountImplementation_",
        type: "address",
      },
    ],
    name: "setAccountImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accountRegistry_",
        type: "address",
      },
    ],
    name: "setAccountRegistry",
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
    name: "upgradeAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200340738038062003407833981810160405260408110156200003757600080fd5b8101908080519060200190929190805190602001909291905050506200006e6716199243b9d4db2560c01b620000dc60201b60201c565b6200008a67c7ce2a36ea2465ae60c01b620000df60201b60201c565b620000a667aa64e4e7f212d56160c01b620000df60201b60201c565b620000c2678f74f0cdbde74bdf60c01b620000df60201b60201c565b620000d48282620000e260201b60201c565b5050620006c9565b50565b50565b620000fe6741fc0c62d014a3fe60c01b620000dc60201b60201c565b6200011a67dc028465461785ee60c01b620000dc60201b60201c565b62000136673f0b21804d61a81660c01b620000dc60201b60201c565b620001498260006200019860201b60201c565b6200016567f371f0641cafc6fc60c01b620000dc60201b60201c565b62000181675928ff3c537c054060c01b620000dc60201b60201c565b620001948160006200042f60201b60201c565b5050565b620001b4670870459f2167c8dd60c01b620000dc60201b60201c565b620001d067159ba22e371895b260c01b620000dc60201b60201c565b620001ec676a3b49e785b9a8bb60c01b620000dc60201b60201c565b6200020867a63d48928d370c9b60c01b620000dc60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000290576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526035815260200180620033d26035913960400191505060405180910390fd5b620002ac67819fe19bb91397a160c01b620000dc60201b60201c565b620002c86704616cf5be820b7c60c01b620000dc60201b60201c565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000324678dd1e865a5f141ff60c01b620000dc60201b60201c565b620003406701616eb5f7d1ca9b60c01b620000dc60201b60201c565b80156200040e576200036367308412b87d226ceb60c01b620000dc60201b60201c565b6200037f67e53fecce275a7d6360c01b620000dc60201b60201c565b6200039b67ea9a81daefd74f9e60c01b620000dc60201b60201c565b7f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c1060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16200042b565b6200042a6786e883f2cdbdcb4760c01b620000dc60201b60201c565b5b5050565b6200044b67778d2c4844cb57c860c01b620000dc60201b60201c565b62000467672e46345dd30446f560c01b620000dc60201b60201c565b62000483674b01c1a412029cf960c01b620000dc60201b60201c565b6200049f67b5ba0ed84140968960c01b620000dc60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018062003397603b913960400191505060405180910390fd5b620005436712934e542bfcaae260c01b620000dc60201b60201c565b6200055f676ab5a434897f3fa460c01b620000dc60201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620005bc671440edfeaa98b7c160c01b620000dc60201b60201c565b620005d8671da8e35e0bfd87a360c01b620000dc60201b60201c565b8015620006a857620005fb67f166ead2d805373960c01b620000dc60201b60201c565b620006176738487a6c4bc99ca160c01b620000dc60201b60201c565b62000633677be1bddbe5c5292160c01b620000dc60201b60201c565b7f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1620006c5565b620006c46777dc91dc63848bbe60c01b620000dc60201b60201c565b5b5050565b612cbe80620006d96000396000f3fe60806040523480156200001157600080fd5b5060043610620001005760003560e01c80635967b7ac1162000099578063d01a9cae116200006f578063d01a9cae1462000429578063d089e11a146200045a578063d53641231462000490578063e5c7278f14620004f25762000100565b80635967b7ac14620003345780636661a51e14620003965780637663f44c14620003dd5762000100565b8063264d5cb411620000db578063264d5cb414620001e45780633bdba7ef146200023f57806343013c24146200028b578063575e2c8d14620002d25762000100565b806309766da2146200010557806311464fbe146200014c5780631673f3b71462000182575b600080fd5b6200014a600480360360208110156200011d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620005fd565b005b620001566200064f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620001cc600480360360208110156200019a57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062000675565b60405180821515815260200191505060405180910390f35b6200021360048036036020811015620001fc57600080fd5b810190808035906020019092919050505062000680565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b62000289600480360360208110156200025757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050620006d6565b005b620002d060048036036020811015620002a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050620006d9565b005b6200031c60048036036020811015620002ea57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506200072b565b60405180821515815260200191505060405180910390f35b6200037e600480360360208110156200034c57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062000732565b60405180821515815260200191505060405180910390f35b620003db60048036036020811015620003ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505062000739565b005b6200042760048036036020811015620003f557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506200078b565b005b62000458600480360360208110156200044157600080fd5b81019080803590602001909291905050506200078e565b005b62000464620007e1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b620004da60048036036020811015620004a857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505062000805565b60405180821515815260200191505060405180910390f35b620005fb600480360360808110156200050a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156200057257600080fd5b8201836020820111156200058557600080fd5b80359060200191846001830284011164010000000083111715620005a857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505062000810565b005b62000613675c50e1104f7c324260c01b620006d6565b620006296709fae8244aeb582660c01b620006d6565b6200063f67b620c91c3e2f0fcc60c01b620006d6565b6200064c81600162000869565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b60006200069867f64c9c754bee1c0e60c01b620006d6565b620006ae67a5e9c131e33036ad60c01b620006d6565b620006c46715c1ece7e76606fa60c01b620006d6565b620006cf8262000abb565b9050919050565b50565b620006ef67bcb085cb685f265b60c01b620006d6565b62000705677dcb20ad5f16715060c01b620006d6565b6200071b67091b0164433ae73760c01b620006d6565b6200072881600162000d4d565b50565b6000919050565b6000919050565b6200074f672f1a9eb1b20f8acf60c01b620006d6565b6200076567c7a0254b4fc2db8660c01b620006d6565b6200077b674a86f3235eb8361460c01b620006d6565b62000788816001620010da565b50565b50565b620007a4670772e9cb9485eb5460c01b620006d6565b620007ba67159f08d4ae7aa4d660c01b620006d6565b620007d0675771572aa2bb16ea60c01b620006d6565b620007dd81600162001329565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b6200082667979d847e8d7cd0fa60c01b620006d6565b6200083c67f36a1a94dd92ba6b60c01b620006d6565b62000852670dae790f571ced0e60c01b620006d6565b6200086284848484600162001578565b5050505050565b6200087f67778d2c4844cb57c860c01b6200078b565b62000895672e46345dd30446f560c01b6200078b565b620008ab674b01c1a412029cf960c01b6200078b565b620008c167b5ba0ed84140968960c01b6200078b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018062002ba0603b913960400191505060405180910390fd5b6200095f6712934e542bfcaae260c01b6200078b565b62000975676ab5a434897f3fa460c01b6200078b565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620009cc671440edfeaa98b7c160c01b6200078b565b620009e2671da8e35e0bfd87a360c01b6200078b565b801562000aa057620009ff67f166ead2d805373960c01b6200078b565b62000a156738487a6c4bc99ca160c01b6200078b565b62000a2b677be1bddbe5c5292160c01b6200078b565b7f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a162000ab7565b62000ab66777dc91dc63848bbe60c01b6200078b565b5b5050565b600062000ad36748cdc253ccc1e67560c01b6200078b565b62000ae96780d8fe77ddc420f260c01b6200078b565b62000aff67593ae66617589b4360c01b6200078b565b60606040518060200162000b139062001c5f565b6020820181038252601f19601f82011660405250600060a01b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b6020831062000bad578051825260208201915060208101905060208303925062000b88565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b815260140195505050505050604051602081830303815290604052905062000c75670748b7c1eb60cfe660c01b6200078b565b62000c8b678d27efcb42cc3e1360c01b6200078b565b600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b815260140183815260200182815260200194505050505060405160208183030381529060405280519060200120905062000d2a67c4f8fa250f8a60ca60c01b6200078b565b62000d40672f91b1c834bef2d060c01b6200078b565b8060001c92505050919050565b62000d6367081823c987234e9d60c01b6200078b565b62000d796760c354164930797d60c01b6200078b565b62000d8f67accf73d6a8ae294e60c01b6200078b565b62000da567b19b8a65e686f89c60c01b6200078b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801562000e2557600080fd5b505afa15801562000e3a573d6000803e3d6000fd5b505050506040513d602081101562000e5157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16141562000ed1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018062002c5b602b913960400191505060405180910390fd5b62000ee7674a209ed55ed71bfa60c01b6200078b565b62000efc66e8f614a9f2909a60c01b6200078b565b62000f12673bd80329fed2f8e860c01b6200078b565b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b15801562000f9e57600080fd5b505af115801562000fb3573d6000803e3d6000fd5b5050505062000fcd67b46710374855f2fe60c01b6200078b565b62000fe367d4b3203fae218bc960c01b6200078b565b8015620010bf576200100067308bce54015cf44160c01b6200078b565b620010166757203c00802916d160c01b6200078b565b6200102c67fa0f90e590f54e6460c01b6200078b565b7feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1620010d6565b620010d56793389340e33679c160c01b6200078b565b5b5050565b620010f0670870459f2167c8dd60c01b6200078b565b6200110667159ba22e371895b260c01b6200078b565b6200111c676a3b49e785b9a8bb60c01b6200078b565b6200113267a63d48928d370c9b60c01b6200078b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620011ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018062002c016035913960400191505060405180910390fd5b620011d067819fe19bb91397a160c01b6200078b565b620011e66704616cf5be820b7c60c01b6200078b565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200123c678dd1e865a5f141ff60c01b6200078b565b620012526701616eb5f7d1ca9b60c01b6200078b565b80156200130e576200126f67308412b87d226ceb60c01b6200078b565b6200128567e53fecce275a7d6360c01b6200078b565b6200129b67ea9a81daefd74f9e60c01b6200078b565b7f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c1060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a162001325565b620013246786e883f2cdbdcb4760c01b6200078b565b5b5050565b60006200134167c87ffb0412cac78260c01b6200078b565b6200135767a3cda0ec8e20174b60c01b6200078b565b6200136d6759407cee0be0ea2b60c01b6200078b565b60008360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051620013c29062001c5f565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f590508015801562001420573d6000803e3d6000fd5b50905062001439678c20abd98a5c4f8a60c01b6200078b565b6200144f67a5694f9ca3e134a760c01b6200078b565b82156200152b576200146c67d9808b1bdccba98b60c01b6200078b565b62001482678562204049a5cf4760c01b6200078b565b6200149867f3f1d7e23629e16060c01b6200078b565b7f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a162001542565b62001541671671bc1ea802d86a60c01b6200078b565b5b6200155867add800985aa0244060c01b6200078b565b6200156e6723c279dc5d3430fd60c01b6200078b565b8091505092915050565b606062001590678d67538b3de9ea8660c01b6200078b565b620015a667bc1200b36b6e2d3c60c01b6200078b565b620015bc67c08742122c92f63360c01b6200078b565b620015d26768a892c68abc618c60c01b6200078b565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156200165a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062002c366025913960400191505060405180910390fd5b620016706746a5066e72f755d060c01b6200078b565b6200168667995fefea0bfe104660c01b6200078b565b6200169c67853adc48141afd7560c01b6200078b565b620016b267c99e3f9de858fe5760c01b6200078b565b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141562001739576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018062002c86602c913960400191505060405180910390fd5b6200174f673ed4d87e03ce069460c01b6200078b565b6200176567815137a12ebef0bf60c01b6200078b565b6200177b6733bcca643a99e8bd60c01b6200078b565b62001791675bddd7f4a96eae8760c01b6200078b565b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141562001818576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018062002bdb6026913960400191505060405180910390fd5b6200182e672c537727fdea5c3460c01b6200078b565b6200184467140c547275665b9e60c01b6200078b565b6200185a6714a7aab557083ab060c01b6200078b565b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620018ee578082015181840152602081019050620018d1565b50505050905090810190601f1680156200191c5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156200193e57600080fd5b505af115801562001953573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060208110156200197e57600080fd5b81019080805160405193929190846401000000008211156200199f57600080fd5b83820191506020820185811115620019b657600080fd5b8251866001820283011164010000000082111715620019d457600080fd5b8083526020830192505050908051906020019080838360005b8381101562001a0a578082015181840152602081019050620019ed565b50505050905090810190601f16801562001a385780820380516001836020036101000a031916815260200191505b50604052505050905062001a5767b9a8e776cf83f1c260c01b6200078b565b62001a6d67e7ceb79e5abc2c9160c01b6200078b565b821562001c0f5762001a8a67e14033206c8f1d6f60c01b6200078b565b62001aa067eb528105fe589a6760c01b6200078b565b62001ab6675a92b172873d9fd860c01b6200078b565b7f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101562001b6057808201518184015260208101905062001b43565b50505050905090810190601f16801562001b8e5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101562001bc957808201518184015260208101905062001bac565b50505050905090810190601f16801562001bf75780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a162001c26565b62001c2567ad2a18c0580626ae60c01b6200078b565b5b62001c3c673b173602e1a7471660c01b6200078b565b62001c5267ca5084af2c310ee960c01b6200078b565b8091505095945050505050565b610f328062001c6e8339019056fe608060405234801561001057600080fd5b50604051610f32380380610f328339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050610068679894797dc84081af60c01b61019960201b60201c565b610082674e0f327275f95bf160c01b61019960201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100dc6794e469383b340c9160c01b61019c60201b60201c565b6100f66786f2a31597afd57a60c01b61019c60201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101516788e2a6c2eb66825d60c01b61019c60201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061019f565b50565b50565b610d84806101ae6000396000f3fe6080604052600436106100e15760003560e01c80637b1039991161007f578063b49762a111610059578063b49762a114610664578063d784d426146106d0578063dd54622814610721578063f77c479114610777576100e8565b80637b103999146105775780638f27e6b6146105b8578063abe124f61461060e576100e8565b806334d23875116100bb57806334d23875146103355780633f579f42146103a15780635c60da1b146104ca5780636480a27b1461050b576100e8565b8063062e4f9c146101f15780631454d4701461025d5780632486e26f146102c9576100e8565b366100e857005b3480156100f457600080fd5b5061010967267be5c007ba493660c01b6107b8565b61011d67c98405188afd4dab60c01b6107b8565b610131676a933c5d83132d2460c01b6107b8565b600080369050146101db5761015067b3d07c93e15dcc6960c01b6107b8565b610164670848f5b7587f259a60c01b6107b8565b610178677607056d4b83e95960c01b6107b8565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506101b367b7ff281b6713313460c01b6107b8565b368060008037600080826000855af43d806000803e81600081146101d657816000f35b816000fd5b6101ef6707d26d689f0268c060c01b6107b8565b005b3480156101fd57600080fd5b506102456004803603602081101561021457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107bb565b60405180821515815260200191505060405180910390f35b34801561026957600080fd5b506102b16004803603602081101561028057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c2565b60405180821515815260200191505060405180910390f35b3480156102d557600080fd5b5061031d600480360360208110156102ec57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107c9565b60405180821515815260200191505060405180910390f35b34801561034157600080fd5b506103896004803603602081101561035857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107d4565b60405180821515815260200191505060405180910390f35b3480156103ad57600080fd5b5061044f600480360360608110156103c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561040b57600080fd5b82018360208201111561041d57600080fd5b8035906020019184600183028401116401000000008311171561043f57600080fd5b90919293919293905050506107df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104d657600080fd5b506104df610b13565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561051757600080fd5b5061055f6004803603602081101561052e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b39565b60405180821515815260200191505060405180910390f35b34801561058357600080fd5b5061058c610b44565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105c457600080fd5b5061060c600480360360208110156105db57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6a565b005b34801561061a57600080fd5b506106626004803603602081101561063157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b6d565b005b34801561067057600080fd5b506106b86004803603602081101561068757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b70565b60405180821515815260200191505060405180910390f35b3480156106dc57600080fd5b5061071f600480360360208110156106f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b77565b005b34801561072d57600080fd5b506107756004803603602081101561074457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506107b8565b005b34801561078357600080fd5b5061078c610d27565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b50565b6000919050565b6000919050565b600060019050919050565b600060019050919050565b60606107f5675aa5d179f54cb87d60c01b6107b8565b61080967a226552386468aff60c01b610b6d565b61081d67bb06267d15cafc8560c01b610b6d565b61083167d0eb72184d8e714c60c01b610b6d565b61084567f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b6108fd6787dbbb5ffe0583c160c01b610b6d565b61091167f3741b7d431227a560c01b610b6d565b6109256737f078ab60df830760c01b6107b8565b61093967e4de2ba80b3b44d560c01b6107b8565b61094d675abe6251e319bc7c60c01b6107b8565b6109616726cc190ece09b7db60c01b6107b8565b6060610977676002c94a45713e1f60c01b6107b8565b61098b678d82d94b1795aafc60c01b6107b8565b60006109a167df08c3b5e2fa54f560c01b6107b8565b8673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610a0d576040519150601f19603f3d011682016040523d82523d6000602084013e610a12565b606091505b508093508192505050610a2f67f28a312aa9cfaa7160c01b6107b8565b610a4367162325a0fb69618f60c01b6107b8565b610a576711f6077f17c7465a60c01b6107b8565b80610aca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b610ade6780640c61604c38b060c01b6107b8565b610af267157aa11e3950a2a260c01b6107b8565b610b06671a32fc353aeb8d2f60c01b6107b8565b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b50565b6000919050565b610b8b67c3094137b7a928f360c01b6107b8565b610b9f67a226552386468aff60c01b610b6d565b610bb367bb06267d15cafc8560c01b610b6d565b610bc767d0eb72184d8e714c60c01b610b6d565b610bdb67f128b7cf1088330a60c01b610b6d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d4c602c913960400191505060405180910390fd5b610c936787dbbb5ffe0583c160c01b610b6d565b610ca767f3741b7d431227a560c01b610b6d565b610cbb6710c6caed8159651f60c01b6107b8565b610ccf67ac6d8f9c43d3285d60c01b6107b8565b610ce3679d4a82d94581f52860c01b6107b8565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f203078304163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c664163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f203078304163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f203078304163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c72656164792075706772616465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f203078304163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830";

type AccountControllerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountControllerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountControllerMock__factory extends ContractFactory {
  constructor(...args: AccountControllerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    accountRegistry_: string,
    accountImplementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccountControllerMock> {
    return super.deploy(
      accountRegistry_,
      accountImplementation_,
      overrides || {}
    ) as Promise<AccountControllerMock>;
  }
  getDeployTransaction(
    accountRegistry_: string,
    accountImplementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      accountRegistry_,
      accountImplementation_,
      overrides || {}
    );
  }
  attach(address: string): AccountControllerMock {
    return super.attach(address) as AccountControllerMock;
  }
  connect(signer: Signer): AccountControllerMock__factory {
    return super.connect(signer) as AccountControllerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountControllerMockInterface {
    return new utils.Interface(_abi) as AccountControllerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountControllerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccountControllerMock;
  }
}
