"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnextFacet__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_connext",
                type: "address",
            },
        ],
        name: "ConnextInitialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "_destination",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "ConnextNativeSwap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "_destination",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "ConnextTokenSwap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "_destination",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_callData",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "ConnextXCall",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_callData",
                type: "bytes",
            },
            {
                internalType: "uint32",
                name: "_destinationDomain",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_recovery",
                type: "address",
            },
            {
                internalType: "address",
                name: "_callback",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_callbackFee",
                type: "uint256",
            },
        ],
        name: "connextCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "_destinationDomain",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
        ],
        name: "connextNativeAssetTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "_destinationDomain",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_relayerFee",
                type: "uint256",
            },
        ],
        name: "connextTokenTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_connext",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "_domainId",
                type: "uint32",
            },
        ],
        name: "initConnext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506114de806100206000396000f3fe60806040526004361061003f5760003560e01c80635fc0e73614610044578063a520f8df14610060578063b5f63d6b1461007c578063d858af20146100a5575b600080fd5b61005e60048036038101906100599190610ac8565b6100c1565b005b61007a60048036038101906100759190610b43565b610168565b005b34801561008857600080fd5b506100a3600480360381019061009e9190610b96565b6101f7565b005b6100bf60048036038101906100ba9190610d1c565b61031d565b005b60006100ee85604051806020016040528060008152506100df6103a5565b878a88883360008060006103cd565b90508573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168563ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e086868660405161015893929190610e2a565b60405180910390a4505050505050565b600061019684604051806020016040528060008152506101866103a5565b86600034883360008060006103cd565b90508373ffffffffffffffffffffffffffffffffffffffff168363ffffffff167fb47dd05ba9e0eb3ec95a42c27945552b2a232180e3b6441c20d4d5bff04ede953485856040516101e993929190610e2a565b60405180910390a350505050565b6101ff610605565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561026f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026690610ebe565b60405180910390fd5b60006102796106a0565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548163ffffffff021916908363ffffffff1602179055507ffcbf7a247efac41495da0df0e3ef60d8f0dd28dc5c86461b56507b29322dd8a0836040516103109190610eed565b60405180910390a1505050565b600061033a8a8a61032c6103a5565b8b8b8b8b8b8b8b60006103cd565b90508973ffffffffffffffffffffffffffffffffffffffff168863ffffffff167f0f54f42e149762e432717bddc67b5ffb97adff1fd377dd688d9747bc8c1aab3d89898d8a87604051610391959493929190610f90565b60405180910390a350505050505050505050565b6000806103b06106a0565b90508060000160149054906101000a900463ffffffff1691505090565b60006103db888888866106cd565b600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610496578773ffffffffffffffffffffffffffffffffffffffff1663095ea7b361043361097f565b896040518363ffffffff1660e01b8152600401610451929190610fea565b6020604051808303816000875af1158015610470573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610494919061104b565b505b60006104a061097f565b905060006040518061012001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020018e81526020018d63ffffffff1681526020018c63ffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018515158152602001600015158152509050600060405180608001604052808381526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a81525090508273ffffffffffffffffffffffffffffffffffffffff16634156a88334836040518363ffffffff1660e01b81526004016105ae9190611226565b60206040518083038185885af11580156105cc573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105f19190611274565b93505050509b9a5050505050505050505050565b61060d6109b7565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461069e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069590611313565b60405180910390fd5b565b6000807fa4cabcf91d6212ba2873e2f19de6e26ae65fd3280b9eaa6d8bc38c5fba52ec9d90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561075f5780828461070f9190611362565b6107199190611362565b341461075a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075190611404565b60405180910390fd5b610979565b808261076b9190611362565b34146107ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a390611404565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107e79190610eed565b602060405180830381865afa158015610804573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108289190611439565b90508473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161086793929190611466565b6020604051808303816000875af1158015610886573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108aa919061104b565b5060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108e69190610eed565b602060405180830381865afa158015610903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109279190611439565b9050848282610936919061149d565b14610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096d90611404565b60405180910390fd5b50505b50505050565b60008061098a6106a0565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a23826109f8565b9050919050565b610a3381610a18565b8114610a3e57600080fd5b50565b600081359050610a5081610a2a565b92915050565b600063ffffffff82169050919050565b610a6f81610a56565b8114610a7a57600080fd5b50565b600081359050610a8c81610a66565b92915050565b6000819050919050565b610aa581610a92565b8114610ab057600080fd5b50565b600081359050610ac281610a9c565b92915050565b600080600080600060a08688031215610ae457610ae36109ee565b5b6000610af288828901610a41565b9550506020610b0388828901610a41565b9450506040610b1488828901610a7d565b9350506060610b2588828901610ab3565b9250506080610b3688828901610ab3565b9150509295509295909350565b600080600060608486031215610b5c57610b5b6109ee565b5b6000610b6a86828701610a41565b9350506020610b7b86828701610a7d565b9250506040610b8c86828701610ab3565b9150509250925092565b60008060408385031215610bad57610bac6109ee565b5b6000610bbb85828601610a41565b9250506020610bcc85828601610a7d565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c2982610be0565b810181811067ffffffffffffffff82111715610c4857610c47610bf1565b5b80604052505050565b6000610c5b6109e4565b9050610c678282610c20565b919050565b600067ffffffffffffffff821115610c8757610c86610bf1565b5b610c9082610be0565b9050602081019050919050565b82818337600083830152505050565b6000610cbf610cba84610c6c565b610c51565b905082815260208101848484011115610cdb57610cda610bdb565b5b610ce6848285610c9d565b509392505050565b600082601f830112610d0357610d02610bd6565b5b8135610d13848260208601610cac565b91505092915050565b60008060008060008060008060006101208a8c031215610d3f57610d3e6109ee565b5b6000610d4d8c828d01610a41565b99505060208a013567ffffffffffffffff811115610d6e57610d6d6109f3565b5b610d7a8c828d01610cee565b9850506040610d8b8c828d01610a7d565b9750506060610d9c8c828d01610a41565b9650506080610dad8c828d01610ab3565b95505060a0610dbe8c828d01610ab3565b94505060c0610dcf8c828d01610a41565b93505060e0610de08c828d01610a41565b925050610100610df28c828d01610ab3565b9150509295985092959850929598565b610e0b81610a92565b82525050565b6000819050919050565b610e2481610e11565b82525050565b6000606082019050610e3f6000830186610e02565b610e4c6020830185610e02565b610e596040830184610e1b565b949350505050565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b6000610ea8601883610e61565b9150610eb382610e72565b602082019050919050565b60006020820190508181036000830152610ed781610e9b565b9050919050565b610ee781610a18565b82525050565b6000602082019050610f026000830184610ede565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f42578082015181840152602081019050610f27565b83811115610f51576000848401525b50505050565b6000610f6282610f08565b610f6c8185610f13565b9350610f7c818560208601610f24565b610f8581610be0565b840191505092915050565b600060a082019050610fa56000830188610ede565b610fb26020830187610e02565b8181036040830152610fc48186610f57565b9050610fd36060830185610e02565b610fe06080830184610e1b565b9695505050505050565b6000604082019050610fff6000830185610ede565b61100c6020830184610e02565b9392505050565b60008115159050919050565b61102881611013565b811461103357600080fd5b50565b6000815190506110458161101f565b92915050565b600060208284031215611061576110606109ee565b5b600061106f84828501611036565b91505092915050565b61108181610a18565b82525050565b600082825260208201905092915050565b60006110a382610f08565b6110ad8185611087565b93506110bd818560208601610f24565b6110c681610be0565b840191505092915050565b6110da81610a56565b82525050565b6110e981610a92565b82525050565b6110f881611013565b82525050565b6000610120830160008301516111176000860182611078565b506020830151848203602086015261112f8282611098565b915050604083015161114460408601826110d1565b50606083015161115760608601826110d1565b50608083015161116a6080860182611078565b5060a083015161117d60a0860182611078565b5060c083015161119060c08601826110e0565b5060e08301516111a360e08601826110ef565b506101008301516111b86101008601826110ef565b508091505092915050565b600060808301600083015184820360008601526111e082826110fe565b91505060208301516111f56020860182611078565b50604083015161120860408601826110e0565b50606083015161121b60608601826110e0565b508091505092915050565b6000602082019050818103600083015261124081846111c3565b905092915050565b61125181610e11565b811461125c57600080fd5b50565b60008151905061126e81611248565b92915050565b60006020828403121561128a576112896109ee565b5b60006112988482850161125f565b91505092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006112fd602283610e61565b9150611308826112a1565b604082019050919050565b6000602082019050818103600083015261132c816112f0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061136d82610a92565b915061137883610a92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113ad576113ac611333565b5b828201905092915050565b7f436f6e6e6578743a20496e76616c69642076616c756500000000000000000000600082015250565b60006113ee601683610e61565b91506113f9826113b8565b602082019050919050565b6000602082019050818103600083015261141d816113e1565b9050919050565b60008151905061143381610a9c565b92915050565b60006020828403121561144f5761144e6109ee565b5b600061145d84828501611424565b91505092915050565b600060608201905061147b6000830186610ede565b6114886020830185610ede565b6114956040830184610e02565b949350505050565b60006114a882610a92565b91506114b383610a92565b9250828210156114c6576114c5611333565b5b82820390509291505056fea164736f6c634300080b000a";
const isSuperArgs = (xs) => xs.length > 1;
class ConnextFacet__factory extends ethers_1.ContractFactory {
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
exports.ConnextFacet__factory = ConnextFacet__factory;
ConnextFacet__factory.bytecode = _bytecode;
ConnextFacet__factory.abi = _abi;
