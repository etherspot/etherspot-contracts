"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayRecipientMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "gateway_",
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
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "Context",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__7fd4d25d",
                type: "bytes8",
            },
        ],
        name: "c_7fd4d25d",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_d5c463c2",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__7fd4d25d",
                type: "bytes8",
            },
        ],
        name: "c_false7fd4d25d",
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
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_falsed5c463c2",
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
                name: "c__7fd4d25d",
                type: "bytes8",
            },
        ],
        name: "c_true7fd4d25d",
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
                name: "c__d5c463c2",
                type: "bytes8",
            },
        ],
        name: "c_trued5c463c2",
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
        inputs: [],
        name: "emitContext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "gateway",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610c62380380610c628339818101604052602081101561003357600080fd5b810190808051906020019092919050505061005e67db84cf13641fc64d60c01b6100c160201b60201c565b61007867d348dcbb9c0cd92f60c01b6100c460201b60201c565b61009267a6589e60a19c054760c01b6100c460201b60201c565b6100ac67e21a8bd3b2ddf20c60c01b6100c460201b60201c565b6100bb816100c760201b60201c565b5061013e565b50565b50565b6100e167b69be6bf736d8c1a60c01b6100c160201b60201c565b6100fb67e18b25fd36211d0160c01b6100c160201b60201c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610b158061014d6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80633ca3acf51161005b5780633ca3acf5146101b257806350aa3dff146102115780636d0e778014610270578063c369d5fe1461027a57610088565b80630c4b1a171461008d5780630dacdff0146100d6578063116191b61461011f57806321a5f5da14610153575b600080fd5b6100d4600480360360208110156100a357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506102d9565b005b61011d600480360360208110156100ec57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506102dc565b005b6101276102df565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019a6004803603602081101561016957600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610303565b60405180821515815260200191505060405180910390f35b6101f9600480360360208110156101c857600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061030e565b60405180821515815260200191505060405180910390f35b6102586004803603602081101561022757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610319565b60405180821515815260200191505060405180910390f35b610278610320565b005b6102c16004803603602081101561029057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610411565b60405180821515815260200191505060405180910390f35b50565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019050919050565b600060019050919050565b6000919050565b61033467c8f11858cc988cef60c01b6102dc565b61034867d940f86af9f49a7260c01b6102dc565b61035c67ba7cb6b8bfe7a9d660c01b6102dc565b7f1b86fe2ccdffbf1a2c71e8eca215369d319e2c66c438a84d666fb2536ffbfb3a610385610418565b61038d610465565b6103956104b2565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060405180910390a1565b6000919050565b600061042e67cfc35b626608c6f260c01b6102d9565b610442677e4f9863b1e00bcc60c01b6102d9565b61045667e01fbdbc1b0ec7df60c01b6102d9565b61046060286105d9565b905090565b600061047b6796610338700568e460c01b6102d9565b61048f6736abbbfc9ea4e0bf60c01b6102d9565b6104a3675d0cc2962515b7bc60c01b6102d9565b6104ad60146105d9565b905090565b3660006104c967999df1ebdfac33ae60c01b6102d9565b6104dd6705ff84a8c54035ba60c01b6102d9565b6104f167f3ca01e4e4beffb960c01b6102d9565b36600061050867e933d788eba18b4760c01b6102d9565b61051c6746bb1589faef1d9760c01b6102d9565b61052461076f565b156105755761053d67ffcebb5c797921ae60c01b6102d9565b61055167a80d3e91ff11dbfd60c01b6102d9565b60003660009060286000369050039261056c93929190610ab3565b915091506105a5565b6105896706d79d606ee7be7760c01b6102d9565b61059d676369acbfd1bb4f2660c01b6102d9565b600036915091505b6105b9674369eba1cfe4155560c01b6102d9565b6105cd67e2cad94467be8e9f60c01b6102d9565b81819350935050509091565b60006105ef67ef0225287ba17ba060c01b6102d9565b6106036795958667c898951b60c01b6102d9565b61061767ec06b0be9f42607760c01b6102d9565b600061062d67b7cd17d69da836b660c01b6102d9565b610641671b7ac62a98e22a5460c01b6102d9565b61064961076f565b1561071257610662674b9fe2d527bba60760c01b6102d9565b6106766737f58d18ef197c9060c01b6102d9565b61068a679e0c2e494127333d60c01b6102d9565b60008360003690500390506106a9678767fa9e72b3efac60c01b6102d9565b61070a600036839060148501926106c293929190610ab3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061094e565b91505061073e565b61072667531fb14624ef4c0060c01b6102d9565b61073a67365aa35b4857b9d560c01b6102d9565b3390505b61075267bb664b7abb1efcc160c01b6102d9565b61076667c66db900ff1468ad60c01b6102d9565b80915050919050565b60006107856718d82ab5ae60310f60c01b6102d9565b61079967b1091fd4002007a760c01b6102d9565b6107ad67e754ffc9cc3865c960c01b6102d9565b60006107c3677ed152cd4162d4dd60c01b6102d9565b6107d767d897cf3d19cf81cd60c01b6102d9565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561090a5761083f677fe0037509e467e160c01b6102d9565b61085367d0b1c04b10d8098a60c01b6102d9565b610867670b92e025f4debba760c01b6102d9565b61087b6739792e98f7fbfdea60c01b6102d9565b602c600036905010156108d9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610ae76022913960400191505060405180910390fd5b6108ed6755c879b00c45b69f60c01b6102d9565b610901679a100b07747e893d60c01b6102d9565b6001905061091f565b61091e6757b90b57dc0a6a0160c01b6102d9565b5b61093367cc41edf636370ef460c01b6102d9565b61094767ff5a153bde944b0360c01b6102d9565b8091505090565b600061096467e937c30ee854c6f460c01b610ab0565b61097867ae40a839349e539460c01b610ab0565b61098c6779ff25ce2e3aef5860c01b610ab0565b60006109a267471a531a4d41d03a60c01b610ab0565b6109b667dbf5cb870bd2bda760c01b610ab0565b6109ca6715ee1c447c585eff60c01b610ab0565b6014835114610a41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b610a5567595b08e56ca2004360c01b610ab0565b610a6967658f3d9a047d9b2b60c01b610ab0565b6c010000000000000000000000006020840151049050610a93670a7d36500000fb3860c01b610ab0565b610aa7678f46d49d645b8e7560c01b610ab0565b80915050919050565b50565b60008085851115610ac357600080fd5b83861115610ad057600080fd5b600185028301915084860390509450949250505056fe47617465776179526563697069656e743a20696e76616c6964206d73672e64617461a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class GatewayRecipientMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(gateway_, overrides) {
        return super.deploy(gateway_, overrides || {});
    }
    getDeployTransaction(gateway_, overrides) {
        return super.getDeployTransaction(gateway_, overrides || {});
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
exports.GatewayRecipientMock__factory = GatewayRecipientMock__factory;
GatewayRecipientMock__factory.bytecode = _bytecode;
GatewayRecipientMock__factory.abi = _abi;
