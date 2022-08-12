/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ENSRegistry, ENSRegistryInterface } from "../ENSRegistry";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "NewResolver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "ttl",
        type: "uint64",
      },
    ],
    name: "NewTTL",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "recordExists",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "resolver",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "ttl_",
        type: "uint64",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "setSubnodeOwner",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "resolver_",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "ttl_",
        type: "uint64",
      },
    ],
    name: "setSubnodeRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "ttl_",
        type: "uint64",
      },
    ],
    name: "setTTL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "ttl",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002b676c7634f3872f41a360c01b6100a160201b60201c565b61004567fa2d56945a4271ee60c01b6100a160201b60201c565b326000808060001b815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100a4565b50565b611d5c806100b36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063563940ec11610097578063b446aebb11610066578063b446aebb146104c4578063cf40882314610523578063e985e9c5146105a5578063f79fe5381461061f576100f5565b8063563940ec1461033b5780635b0fc9c31461039a5780635ef2c7f0146103e8578063a22cb46514610474576100f5565b806314ab9038116100d357806314ab90381461021657806316a25cbd146102585780631896f70a146102a45780633a285d49146102f2576100f5565b80630178b8bf146100fa57806302571be31461015257806306ab5923146101aa575b600080fd5b6101266004803603602081101561011057600080fd5b8101908080359060200190929190505050610663565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61017e6004803603602081101561016857600080fd5b81019080803590602001909291905050506106de565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610200600480360360608110156101c057600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061083e565b6040518082815260200191505060405180910390f35b6102566004803603604081101561022c57600080fd5b8101908080359060200190929190803567ffffffffffffffff169060200190929190505050610c13565b005b6102846004803603602081101561026e57600080fd5b8101908080359060200190929190505050610f37565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102f0600480360360408110156102ba57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fa6565b005b6103396004803603602081101561030857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112ee565b005b6103826004803603602081101561035157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112f1565b60405180821515815260200191505060405180910390f35b6103e6600480360360408110156103b057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112f8565b005b610472600480360360a08110156103fe57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050611640565b005b6104c26004803603604081101561048a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506116c6565b005b61050b600480360360208110156104da57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611815565b60405180821515815260200191505060405180910390f35b6105a36004803603608081101561053957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050611820565b005b610607600480360360408110156105bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061189f565b60405180821515815260200191505060405180910390f35b61064b6004803603602081101561063557600080fd5b810190808035906020019092919050505061196f565b60405180821515815260200191505060405180910390f35b6000610679674fad887662ffa78b60c01b6112ee565b61068d678a3007f19ca3c7b160c01b6112ee565b6106a167260edd9f524d055e60c01b6112ee565b60008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106f4671a5ff7819f40ff6a60c01b6112ee565b610708673649473defae2cc460c01b6112ee565b61071c675e34a50cdc7180b760c01b6112ee565b600080600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061076a6760ed96ddf1b9744860c01b6112ee565b61077e67bd00341c467d643760c01b6112ee565b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f8576107c667645dc8387ae5ad0a60c01b6112ee565b6107da672e37217f964da03460c01b6112ee565b6107ee678c14dc74efa1241f60c01b6112ee565b6000915050610839565b61080c67120c66f850fa727660c01b6112ee565b61082067d0346cae93eac4cf60c01b6112ee565b6108346711a0cf9ac0b71dd960c01b6112ee565b809150505b919050565b600061085467b1024741c601249d60c01b6112ee565b8361086967f2e05442a842d85e60c01b6112ee565b61087d67b346a842240dc7df60c01b6112ee565b6108916749d1d77d97db04fd60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108df672b42856bfc6d392760c01b6112ee565b6108f367b43e6b69b5a5746760c01b6112ee565b61090767d01d3247de3e965860c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480156109525750610951670884a672b52ecf3460c01b611815565b5b806109ff5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156109fe57506109fd675ea2d583236c555360c01b611815565b5b5b610a54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b610a6867c9f1d8ad9b5c1c3e60c01b6112ee565b610a7c6723a1f38005e6953f60c01b6112ee565b610a9067deea4954a7d0d6b560c01b6112ee565b610aa467e764da7200c36f2a60c01b6112ee565b610ab8676c1dd18d052c8b9260c01b6112ee565b610acc678f6a4861c9f960d560c01b6112ee565b600086866040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050610b1367e86b7a841c62546f60c01b6112ee565b8460008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7b677b3e262ebcbe7e7760c01b6112ee565b610b8f6727c6d31e85f681cf60c01b6112ee565b85877fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8287604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3610bf2672b1a2416abb7cb4560c01b6112ee565b610c0667157dfc85375f973560c01b6112ee565b8093505050509392505050565b610c2767464f7974193d514460c01b6112ee565b81610c3c67f2e05442a842d85e60c01b6112ee565b610c5067b346a842240dc7df60c01b6112ee565b610c646749d1d77d97db04fd60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610cb2672b42856bfc6d392760c01b6112ee565b610cc667b43e6b69b5a5746760c01b6112ee565b610cda67d01d3247de3e965860c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148015610d255750610d24670884a672b52ecf3460c01b611815565b5b80610dd25750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015610dd15750610dd0675ea2d583236c555360c01b611815565b5b5b610e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b610e3b67c9f1d8ad9b5c1c3e60c01b6112ee565b610e4f6723a1f38005e6953f60c01b6112ee565b610e6367e5f398de2e37066760c01b6112ee565b610e776712823f93a07767bb60c01b6112ee565b610e8b672387747f6ab7967360c01b6112ee565b8260008086815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550610edb67801511b1587fb20660c01b6112ee565b610eef67fae26ded0bb3888360c01b6112ee565b837f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6884604051808267ffffffffffffffff16815260200191505060405180910390a250505050565b6000610f4d677c775b67e33df76d60c01b6112ee565b610f6167fa8f747286268cf960c01b6112ee565b610f75678e7658e47864ac0860c01b6112ee565b60008083815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b610fba67fee2d11618a3058a60c01b6112ee565b81610fcf67f2e05442a842d85e60c01b6112ee565b610fe367b346a842240dc7df60c01b6112ee565b610ff76749d1d77d97db04fd60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050611045672b42856bfc6d392760c01b6112ee565b61105967b43e6b69b5a5746760c01b6112ee565b61106d67d01d3247de3e965860c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480156110b857506110b7670884a672b52ecf3460c01b611815565b5b806111655750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156111645750611163675ea2d583236c555360c01b611815565b5b5b6111ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b6111ce67c9f1d8ad9b5c1c3e60c01b6112ee565b6111e26723a1f38005e6953f60c01b6112ee565b6111f667fba45d723f2e238760c01b6112ee565b61120a67683404bca7f0441e60c01b6112ee565b61121e67d87553461d6ea3f160c01b6112ee565b8260008086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506112866772a854ab4c00b89f60c01b6112ee565b61129a679dfcc41b26b8213660c01b6112ee565b837f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a084604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b50565b6000919050565b61130c678542a673ac44984060c01b6112ee565b8161132167f2e05442a842d85e60c01b6112ee565b61133567b346a842240dc7df60c01b6112ee565b6113496749d1d77d97db04fd60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050611397672b42856bfc6d392760c01b6112ee565b6113ab67b43e6b69b5a5746760c01b6112ee565b6113bf67d01d3247de3e965860c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614801561140a5750611409670884a672b52ecf3460c01b611815565b5b806114b75750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114b657506114b5675ea2d583236c555360c01b611815565b5b5b61150c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b61152067c9f1d8ad9b5c1c3e60c01b6112ee565b6115346723a1f38005e6953f60c01b6112ee565b61154867245b8061fa19855360c01b6112ee565b61155c6774bc6362dbe94b7c60c01b6112ee565b611570678e2562eb85cb501c60c01b6112ee565b8260008086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506115d867323af7969406a2d060c01b6112ee565b6115ec677815af3e2ca9e3ec60c01b6112ee565b837fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26684604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b61165467cf9bb00ff14c0bd260c01b6112ee565b611668676206e1bdb064983f60c01b6112ee565b61167c674e8db4017b34c3e560c01b6112ee565b600061168986868661083e565b905061169f67627ea721139b316260c01b6112ee565b6116b367885219e221a22ba760c01b6112ee565b6116be818484611a1a565b505050505050565b6116da674616d9822a61eafc60c01b6112ee565b6116ee672e6717ca8684117e60c01b6112ee565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611796679ab2bb26683da15060c01b6112ee565b6117aa67b3d0c002340092db60c01b6112ee565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b600060019050919050565b6118346742ffc5a993b839e060c01b6112ee565b611848671dea19a4fe67bbec60c01b6112ee565b61185c67ef267694c93da6af60c01b6112ee565b61186684846112f8565b61187a6799ad92248753a3b560c01b6112ee565b61188e670bd135a2a79eadd560c01b6112ee565b611899848383611a1a565b50505050565b60006118b56771d88cba393aee0f60c01b6112ee565b6118c967fd7e4d74e045ddd260c01b6112ee565b6118dd6748a06bc834d22c3e60c01b6112ee565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006119856741b526d79bdcde7e60c01b6112ee565b61199967746382272988d10860c01b6112ee565b6119ad67b9f056b0eb40862b60c01b6112ee565b600073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611a2e6732e75cb255e2005060c01b6112ee565b611a42671f00e7cfa97977ad60c01b6112ee565b611a56673854a5104f94498660c01b6112ee565b60008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611bb557611ad26729c4e4aebdd7152760c01b6112ee565b611ae667c8d27a38f865dffe60c01b6112ee565b8160008085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611b4e676106bfd15134c4ff60c01b6112ee565b611b6267edde3e39c43fa69060c01b6112ee565b827f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2611bca565b611bc96787cc6c9f194c186060c01b6112ee565b5b611bde67bcccd178e79f3de360c01b6112ee565b611bf26776558e60ee27534260c01b6112ee565b60008084815260200190815260200160002060010160149054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff1614611d0957611c4a679df69417d61cb94660c01b6112ee565b611c5e6737ac8755e5ff7e4a60c01b6112ee565b8060008085815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550611cae67448382f92caf7f7360c01b6112ee565b611cc267e08fd3a2088949de60c01b6112ee565b827f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6882604051808267ffffffffffffffff16815260200191505060405180910390a2611d1e565b611d1d67b2e453b8f1625b6560c01b6112ee565b5b50505056fe454e5352656769737472793a20726576657274656420627920617574686f7269736564206d6f646966696572a164736f6c634300060c000a";

type ENSRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ENSRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ENSRegistry__factory extends ContractFactory {
  constructor(...args: ENSRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ENSRegistry> {
    return super.deploy(overrides || {}) as Promise<ENSRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ENSRegistry {
    return super.attach(address) as ENSRegistry;
  }
  connect(signer: Signer): ENSRegistry__factory {
    return super.connect(signer) as ENSRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ENSRegistryInterface {
    return new utils.Interface(_abi) as ENSRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSRegistry {
    return new Contract(address, _abi, signerOrProvider) as ENSRegistry;
  }
}
