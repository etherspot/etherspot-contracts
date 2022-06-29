"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSRegistry__factory = void 0;
const ethers_1 = require("ethers");
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
                internalType: "bytes8",
                name: "c__18e7c73b",
                type: "bytes8",
            },
        ],
        name: "c_18e7c73b",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__18e7c73b",
                type: "bytes8",
            },
        ],
        name: "c_false18e7c73b",
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
                name: "c__18e7c73b",
                type: "bytes8",
            },
        ],
        name: "c_true18e7c73b",
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
const _bytecode = "0x608060405234801561001057600080fd5b5061002b673cc203e54093179c60c01b6100a160201b60201c565b6100456717dcf093ac318c6260c01b6100a160201b60201c565b326000808060001b815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100a4565b50565b611d5c806100b36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063563940ec11610097578063b446aebb11610066578063b446aebb146104c4578063cf40882314610523578063e985e9c5146105a5578063f79fe5381461061f576100f5565b8063563940ec1461033b5780635b0fc9c31461039a5780635ef2c7f0146103e8578063a22cb46514610474576100f5565b806314ab9038116100d357806314ab90381461021657806316a25cbd146102585780631896f70a146102a45780633a285d49146102f2576100f5565b80630178b8bf146100fa57806302571be31461015257806306ab5923146101aa575b600080fd5b6101266004803603602081101561011057600080fd5b8101908080359060200190929190505050610663565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61017e6004803603602081101561016857600080fd5b81019080803590602001909291905050506106de565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610200600480360360608110156101c057600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061083e565b6040518082815260200191505060405180910390f35b6102566004803603604081101561022c57600080fd5b8101908080359060200190929190803567ffffffffffffffff169060200190929190505050610c13565b005b6102846004803603602081101561026e57600080fd5b8101908080359060200190929190505050610f37565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102f0600480360360408110156102ba57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fa6565b005b6103396004803603602081101561030857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112ee565b005b6103826004803603602081101561035157600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112f1565b60405180821515815260200191505060405180910390f35b6103e6600480360360408110156103b057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112f8565b005b610472600480360360a08110156103fe57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050611640565b005b6104c26004803603604081101561048a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506116c6565b005b61050b600480360360208110156104da57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050611815565b60405180821515815260200191505060405180910390f35b6105a36004803603608081101561053957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050611820565b005b610607600480360360408110156105bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061189f565b60405180821515815260200191505060405180910390f35b61064b6004803603602081101561063557600080fd5b810190808035906020019092919050505061196f565b60405180821515815260200191505060405180910390f35b600061067967eca157517099742d60c01b6112ee565b61068d679d653dc44efe131c60c01b6112ee565b6106a16780779279c8a41ae760c01b6112ee565b60008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106f467384a3bd8792f375360c01b6112ee565b61070867e8f0ea32d50bac1960c01b6112ee565b61071c67e5906e7b2ac8244e60c01b6112ee565b600080600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061076a6792e0ad965500a7fa60c01b6112ee565b61077e67d36dfeeced9ada5460c01b6112ee565b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f8576107c66720c1a15c6b40065760c01b6112ee565b6107da6792db8efeae2b5a5760c01b6112ee565b6107ee67b52eef4d55c217db60c01b6112ee565b6000915050610839565b61080c67c9555c1ed049941160c01b6112ee565b610820672007fc3e417877f860c01b6112ee565b610834673fb75fd1e9f7129460c01b6112ee565b809150505b919050565b60006108546753b854ce8503d86d60c01b6112ee565b8361086967ae4d34559648283a60c01b6112ee565b61087d6727fa76608231909860c01b6112ee565b61089167e76ecf7696d24d4b60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506108df67fa20791bdebe2e8660c01b6112ee565b6108f3679c258c8d76da35f860c01b6112ee565b610907676de623b1fa73da3d60c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148015610952575061095167f6a48d9f2388c41260c01b611815565b5b806109ff5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156109fe57506109fd67fa0aca4573cd080160c01b611815565b5b5b610a54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b610a68673f8a07559ccae65460c01b6112ee565b610a7c675dc29edd3cdba7bd60c01b6112ee565b610a90678c53f26a9d813f3760c01b6112ee565b610aa4678254b191cb7e5dee60c01b6112ee565b610ab86786eb85866ac6004760c01b6112ee565b610acc6719155cc9a22d1fb460c01b6112ee565b600086866040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050610b136717ad0a6e71d0674e60c01b6112ee565b8460008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7b673a06394a886e785260c01b6112ee565b610b8f673743d3ddaa41b82e60c01b6112ee565b85877fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8287604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a3610bf2678079ae8cb89e291260c01b6112ee565b610c0667997dfeb745224e0c60c01b6112ee565b8093505050509392505050565b610c2767397dd781daa1a76360c01b6112ee565b81610c3c67ae4d34559648283a60c01b6112ee565b610c506727fa76608231909860c01b6112ee565b610c6467e76ecf7696d24d4b60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610cb267fa20791bdebe2e8660c01b6112ee565b610cc6679c258c8d76da35f860c01b6112ee565b610cda676de623b1fa73da3d60c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148015610d255750610d2467f6a48d9f2388c41260c01b611815565b5b80610dd25750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015610dd15750610dd067fa0aca4573cd080160c01b611815565b5b5b610e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b610e3b673f8a07559ccae65460c01b6112ee565b610e4f675dc29edd3cdba7bd60c01b6112ee565b610e63676fe0a58a4dd21f8660c01b6112ee565b610e77672e679c49748c7f0760c01b6112ee565b610e8b67a2bf75e3952a5a4360c01b6112ee565b8260008086815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550610edb67a7ec980af9d33e1960c01b6112ee565b610eef67c2c4b67905cc97f860c01b6112ee565b837f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6884604051808267ffffffffffffffff16815260200191505060405180910390a250505050565b6000610f4d67864eaf761278559d60c01b6112ee565b610f6167e60e0ccef8f953a760c01b6112ee565b610f7567859952db8669d5d960c01b6112ee565b60008083815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b610fba67805708a845e0b2d160c01b6112ee565b81610fcf67ae4d34559648283a60c01b6112ee565b610fe36727fa76608231909860c01b6112ee565b610ff767e76ecf7696d24d4b60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061104567fa20791bdebe2e8660c01b6112ee565b611059679c258c8d76da35f860c01b6112ee565b61106d676de623b1fa73da3d60c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480156110b857506110b767f6a48d9f2388c41260c01b611815565b5b806111655750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168015611164575061116367fa0aca4573cd080160c01b611815565b5b5b6111ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b6111ce673f8a07559ccae65460c01b6112ee565b6111e2675dc29edd3cdba7bd60c01b6112ee565b6111f667040a0a548705718d60c01b6112ee565b61120a671d5d4bfa835d4ccb60c01b6112ee565b61121e67a59f345953c9adf560c01b6112ee565b8260008086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506112866722ce4fff93d84f7460c01b6112ee565b61129a67129c0e77932643e760c01b6112ee565b837f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a084604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b50565b6000919050565b61130c67a5292e13b669b2eb60c01b6112ee565b8161132167ae4d34559648283a60c01b6112ee565b6113356727fa76608231909860c01b6112ee565b61134967e76ecf7696d24d4b60c01b6112ee565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061139767fa20791bdebe2e8660c01b6112ee565b6113ab679c258c8d76da35f860c01b6112ee565b6113bf676de623b1fa73da3d60c01b6112ee565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614801561140a575061140967f6a48d9f2388c41260c01b611815565b5b806114b75750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114b657506114b567fa0aca4573cd080160c01b611815565b5b5b61150c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611d24602c913960400191505060405180910390fd5b611520673f8a07559ccae65460c01b6112ee565b611534675dc29edd3cdba7bd60c01b6112ee565b61154867d2d7e0c86f3b4ab460c01b6112ee565b61155c67bced6297afc4096360c01b6112ee565b611570672774e29caa033f4760c01b6112ee565b8260008086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506115d867a8cbeea826f0c20d60c01b6112ee565b6115ec6774c73891e1b8e87960c01b6112ee565b837fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26684604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b61165467c6c86a43a36f81d060c01b6112ee565b61166867b56234552a487c3760c01b6112ee565b61167c67164f2dd238e5c68e60c01b6112ee565b600061168986868661083e565b905061169f67cd599cd7c522e5e860c01b6112ee565b6116b367565345668340fd7160c01b6112ee565b6116be818484611a1a565b505050505050565b6116da67f9bc5be3538e2f8460c01b6112ee565b6116ee67df8752e3a07ff93160c01b6112ee565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611796671fcd2847e9b54e4460c01b6112ee565b6117aa67ead0a5571223dc1660c01b6112ee565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b600060019050919050565b6118346715909a040f3def2960c01b6112ee565b61184867ef20cff9401eed6c60c01b6112ee565b61185c67c18f3f14a9757c6060c01b6112ee565b61186684846112f8565b61187a670dd560f0ccad952160c01b6112ee565b61188e67c9aee63ad76ad21460c01b6112ee565b611899848383611a1a565b50505050565b60006118b567f2d699bbcddca45760c01b6112ee565b6118c967e330ba59c16d0bc360c01b6112ee565b6118dd6743a7fd2323f0b86060c01b6112ee565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061198567fd81ae25c0ab767a60c01b6112ee565b6119996723007af3aa29dd4160c01b6112ee565b6119ad67285ea3dfe9e0b78b60c01b6112ee565b600073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611a2e67c1a0e6a707be19cb60c01b6112ee565b611a42676910669555cf407060c01b6112ee565b611a5667c5376103363d27a160c01b6112ee565b60008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611bb557611ad267a90d580023207d7060c01b6112ee565b611ae667d649c271901761fb60c01b6112ee565b8160008085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611b4e679f5cfc3c2893e46d60c01b6112ee565b611b62677ea8a76fb6527ccb60c01b6112ee565b827f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2611bca565b611bc967382b4fe9653714e360c01b6112ee565b5b611bde670752c708a41f6d9060c01b6112ee565b611bf267cbad71a062b7c52b60c01b6112ee565b60008084815260200190815260200160002060010160149054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff1614611d0957611c4a67c3e23000ecb83aed60c01b6112ee565b611c5e675f8abdbd14de3f0260c01b6112ee565b8060008085815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550611cae67cf3450aed0c852ed60c01b6112ee565b611cc2671a1a4331391f727660c01b6112ee565b827f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6882604051808267ffffffffffffffff16815260200191505060405180910390a2611d1e565b611d1d678fb2e383e5c17d9160c01b6112ee565b5b50505056fe454e5352656769737472793a20726576657274656420627920617574686f7269736564206d6f646966696572a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSRegistry__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ENSRegistry__factory = ENSRegistry__factory;
ENSRegistry__factory.bytecode = _bytecode;
ENSRegistry__factory.abi = _abi;
