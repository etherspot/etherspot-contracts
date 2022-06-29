"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAccountRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
                name: "owner",
                type: "address",
            },
        ],
        name: "AccountOwnerAdded",
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
                name: "owner",
                type: "address",
            },
        ],
        name: "AccountOwnerRemoved",
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
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "AccountProofAdded",
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
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "AccountProofRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "addAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "addAccountProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__67f73f84",
                type: "bytes8",
            },
        ],
        name: "c_67f73f84",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__67f73f84",
                type: "bytes8",
            },
        ],
        name: "c_false67f73f84",
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
                name: "c__67f73f84",
                type: "bytes8",
            },
        ],
        name: "c_true67f73f84",
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
                name: "owner",
                type: "address",
            },
        ],
        name: "removeAccountOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "removeAccountProof",
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
                name: "owner",
                type: "address",
            },
        ],
        name: "verifyAccountOwner",
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
                name: "account",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "verifyAccountOwnerAtBlock",
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
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "verifyAccountProof",
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
                name: "account",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "verifyAccountProofAtBlock",
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
const _bytecode = "0x608060405234801561001057600080fd5b506116e1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638ecc1365116100715780638ecc1365146102c257806394000b0214610306578063bb890d3f14610334578063d0873057146103ae578063d543c34a146103f7578063e278cfc614610425576100a9565b806334d323a4146100ae57806359b52ef8146101325780636c9560ad146101a05780637cd53489146101ff5780638a3133781461025e575b600080fd5b61011a600480360360608110156100c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610469565b60405180821515815260200191505060405180910390f35b6101886004803603606081101561014857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610570565b60405180821515815260200191505060405180910390f35b6101e7600480360360208110156101b657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061064b565b60405180821515815260200191505060405180910390f35b6102466004803603602081101561021557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610652565b60405180821515815260200191505060405180910390f35b6102aa6004803603604081101561027457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065d565b60405180821515815260200191505060405180910390f35b610304600480360360208110156102d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061072d565b005b6103326004803603602081101561031c57600080fd5b8101908080359060200190929190505050610b52565b005b6103966004803603604081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d83565b60405180821515815260200191505060405180910390f35b6103f5600480360360208110156103c457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e7f565b005b6104236004803603602081101561040d57600080fd5b8101908080359060200190929190505050610e82565b005b6104676004803603602081101561043b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611137565b005b600061047f6713d9041a118c344260c01b610e7f565b610493672e24e418dbc275de60c01b610e7f565b6104a76793c6167f84f3118f60c01b610e7f565b610567826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506113d690919063ffffffff16565b90509392505050565b60006105866767d127a37ae2d0cb60c01b610e7f565b61059a679c68a2fe977df37360c01b610e7f565b6105ae67d0b96ffa762936bf60c01b610e7f565b610642826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506113d690919063ffffffff16565b90509392505050565b6000919050565b600060019050919050565b600061067367a7f317030316783e60c01b610e7f565b6106876768e2eee9381ad8bb60c01b610e7f565b61069b6757ad413bbeafb55260c01b610e7f565b6107256000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008481526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b905092915050565b61074167d6c36a8e65aed5db60c01b610e7f565b61075567512102a90eb3854660c01b610e7f565b610769676b1457754c98e8ad60c01b610e7f565b61077d675d3da7137096c93560c01b610e7f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610803576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806115f6602d913960400191505060405180910390fd5b61081767a13cd0a6ff93200b60c01b610e7f565b61082b673107f512f4a5180460c01b610e7f565b61083f675167df5b2600199960c01b610e7f565b61085367e1f19a7246dd81bb60c01b610e7f565b6109096000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b1561095f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611650602d913960400191505060405180910390fd5b61097367779ac343cfccacec60c01b610e7f565b6109876733f964c2ffced8f260c01b610e7f565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff021916908315150217905550610a3567b0a4016a584a98a860c01b610e7f565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550610ad0679b3d87ec1667234960c01b610e7f565b610ae467fb1c5b7067b6500460c01b610e7f565b7f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644683382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b610b6667cb4d40f0e2afef3f60c01b610e7f565b610b7a6709a8a7a3cf206d5760c01b610e7f565b610b8e67396e03f5666b21ff60c01b610e7f565b610ba2678e30cceea218005a60c01b610e7f565b610c2c6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b610c81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806116a9602c913960400191505060405180910390fd5b610c95678fa45804d7562d6b60c01b610e7f565b610ca967028ed1a412c53daf60c01b610e7f565b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002060010181905550610d1767a0977ee469f0b3f060c01b610e7f565b610d2b6706671866d2f278cc60c01b610e7f565b7f87dde712783ad4895642c7a875998317a71cf424a2444eb79545ce3795431ff93382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000610d9967c2653bac4a3d39c460c01b610e7f565b610dad675ef2f76257369dd260c01b610e7f565b610dc167711f45a80d168caa60c01b610e7f565b610e776000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b905092915050565b50565b610e9667576c41e7e7b7208360c01b610e7f565b610eaa67b5dc79c273aab80260c01b610e7f565b610ebe6782206beb1497e4b760c01b610e7f565b610ed26754c563b8f12008ed60c01b610e7f565b610f5c6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b15610fb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611623602d913960400191505060405180910390fd5b610fc6676de3250260736c1d60c01b610e7f565b610fda673ca7b6100481fb4c60c01b610e7f565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002060000160006101000a81548160ff02191690831515021790555061105c676b5d3e75a87a13a360c01b610e7f565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055506110cb6765cb11f91dde54f160c01b610e7f565b6110df675926ebf5b9e5110960c01b610e7f565b7f4075b367eed0513a54aa39c287c66d6ae98e5df6f73ac087b26b8f89d05d1aa83382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b61114b6767530280ca42544560c01b610e7f565b61115f671a5dcb4a4b0f3aef60c01b610e7f565b61117367e95e9216fd0f0fa160c01b610e7f565b6111876776c38618baafc27560c01b610e7f565b61123d6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506115a3565b611292576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061167d602c913960400191505060405180910390fd5b6112a6675000bbf708f3d63c60c01b610e7f565b6112ba67ee410c12d6420e5d60c01b610e7f565b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550611354673dc71e1f91fc026160c01b610e7f565b61136867562da47d1d3ce51560c01b610e7f565b7f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb3382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60006113ec67b93cca31d93a2da060c01b6115f2565b611400679b3366ff5586cbcb60c01b6115f2565b611414670a6c1d6e66d9b12860c01b6115f2565b600061142a674c0130c069ab77bb60c01b6115f2565b61143e6790c91fcf571f955b60c01b6115f2565b83600001511561155c5761145c67e7011bc29dbcc53d60c01b6115f2565b61147067326b8da8148cf64b60c01b6115f2565b61148467955b6006d18a31f860c01b6115f2565b6000846020015114156114c2576114a5670aa7911fc928619860c01b6115f2565b6114b9679af8a90d24ea0b9a60c01b6115f2565b60019050611557565b6114d6671d61c7bbbc41b4a460c01b6115f2565b6114ea67163e427f8e2dad7960c01b6115f2565b60008314156115245761150767b5ef86ed02b8943660c01b6115f2565b61151b67a12424a58a27066860c01b6115f2565b60019050611556565b61153867f20b97e6b687869260c01b6115f2565b61154c67069e2da21e7ce91360c01b6115f2565b8284602001511190505b5b611571565b61157067bc5bb55bea0c32fc60c01b6115f2565b5b611585675d4f0e0e7d41a81f60c01b6115f2565b611599670fb7d742fb4b185760c01b6115f2565b8091505092915050565b60006115b967983085a61ff08a3a60c01b6115f2565b6115cd67f957f33d43cb511360c01b6115f2565b6115e167cd826c96bcb7be1860c01b6115f2565b6115eb82436113d6565b9050919050565b5056fe45787465726e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e657245787465726e616c4163636f756e7452656769737472793a2070726f6f6620616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220646f65736e277420657869737445787465726e616c4163636f756e7452656769737472793a2070726f6f6620646f65736e2774206578697374a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ExternalAccountRegistry__factory extends ethers_1.ContractFactory {
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
exports.ExternalAccountRegistry__factory = ExternalAccountRegistry__factory;
ExternalAccountRegistry__factory.bytecode = _bytecode;
ExternalAccountRegistry__factory.abi = _abi;