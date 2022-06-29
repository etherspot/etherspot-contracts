"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSHelper__factory = void 0;
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
                indexed: false,
                internalType: "address",
                name: "initializer",
                type: "address",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_c0828b70",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__ddc59594",
                type: "bytes8",
            },
        ],
        name: "c_ddc59594",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes8",
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_falsec0828b70",
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
                name: "c__ddc59594",
                type: "bytes8",
            },
        ],
        name: "c_falseddc59594",
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
                name: "c__c0828b70",
                type: "bytes8",
            },
        ],
        name: "c_truec0828b70",
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
                name: "c__ddc59594",
                type: "bytes8",
            },
        ],
        name: "c_trueddc59594",
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
                internalType: "bytes32[]",
                name: "nodes",
                type: "bytes32[]",
            },
        ],
        name: "getAddresses",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "nodes",
                type: "bytes32[]",
            },
        ],
        name: "getNames",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ENSRegistry",
                name: "registry_",
                type: "address",
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
        name: "registry",
        outputs: [
            {
                internalType: "contract ENSRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061002b675e592fe27197979c60c01b6100a460201b60201c565b61004567eca2e4778f3efef360c01b6100a460201b60201c565b326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061009f67394751df3a1c14c460c01b6100a760201b60201c565b6100aa565b50565b50565b611576806100b96000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063392e53cd11610071578063392e53cd1461017657806377c14656146101945780637b103999146101c4578063c2ed35f9146101e2578063c4d66de814610212578063dc6008e21461022e576100a9565b80631262ed1c146100ae57806318121646146100de5780631a671dff146100fa5780632e6afd6e1461011657806338bc01b514610146575b600080fd5b6100c860048036038101906100c39190610f7d565b61025e565b6040516100d59190611258565b60405180910390f35b6100f860048036038101906100f39190610f7d565b610269565b005b610114600480360381019061010f9190610f7d565b61026c565b005b610130600480360381019061012b9190610f7d565b61026f565b60405161013d9190611258565b60405180910390f35b610160600480360381019061015b9190610f3c565b610276565b60405161016d9190611214565b60405180910390f35b61017e610416565b60405161018b9190611258565b60405180910390f35b6101ae60048036038101906101a99190610f7d565b6104a9565b6040516101bb9190611258565b60405180910390f35b6101cc6104b4565b6040516101d9919061128e565b60405180910390f35b6101fc60048036038101906101f79190610f7d565b6104da565b6040516102099190611258565b60405180910390f35b61022c60048036038101906102279190610fa6565b6104e1565b005b61024860048036038101906102439190610f3c565b61072f565b6040516102559190611236565b60405180910390f35b600060019050919050565b50565b50565b6000919050565b606061028c67968c5b91faf442fa60c01b61026c565b6102a067da2f5572c06a842f60c01b61026c565b6102b46753e7ceb88321b81060c01b61026c565b6000825190506102ce67646b2bb54e32693260c01b61026c565b6102e267e3d248402ec7bcff60c01b61026c565b60608167ffffffffffffffff811180156102fb57600080fd5b5060405190808252806020026020018201604052801561032a5781602001602082028036833780820191505090505b509050610341674106590d4555f61b60c01b61026c565b61035567fdb8ff02143d0e9c60c01b61026c565b60005b828110156103e35761037467dd8e4bcdb0cd756560c01b61026c565b61039085828151811061038357fe5b60200260200101516108a5565b82828151811061039c57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050610358565b506103f8672d3900363f2a218660c01b61026c565b61040c67b7cd2b9d67f6b5bb60c01b61026c565b8092505050919050565b600061042c6726ed6cc6ca12515c60c01b610269565b61044067f3fc49482028cbb860c01b610269565b6104546740317a79cae6a3ff60c01b610269565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b600060019050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000919050565b6104f567510b4c9be9d3368f60c01b61026c565b61050967b2266613e068a5ae60c01b610269565b61051d676a66a63870f964f960c01b610269565b6105316772f22eca890742ba60c01b610269565b61054567c8ab57d60023f99860c01b610269565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca906112a9565b60405180910390fd5b6105e767d31dec9098d614f660c01b610269565b6105fb67a184879381a9c67460c01b610269565b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610650675e44e6e1c885710560c01b610269565b610664674878f7d472b49b7a60c01b61026c565b610678676e66d9008fa80cac60c01b61026c565b61068c67895e7c8825623ef760c01b61026c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106e16732ca1833e9907bb960c01b610269565b6106f5672942130a5b94b82160c01b610269565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e63260405161072491906111f9565b60405180910390a150565b606061074567f14316bd7e60e6ab60c01b61026c565b61075967242a64e0a13b3c2860c01b61026c565b61076d6759b9e3d9f9eff07060c01b61026c565b60008251905061078767e9fbd92fa4403efb60c01b61026c565b61079b674dca2f5a234cacf160c01b61026c565b60608167ffffffffffffffff811180156107b457600080fd5b506040519080825280602002602001820160405280156107e857816020015b60608152602001906001900390816107d35790505b5090506107ff6710942fd66ff9dcf260c01b61026c565b61081367b10f83b0680b29b660c01b61026c565b60005b82811015610872576108326710da97ff2fa1aa1d60c01b61026c565b61084e85828151811061084157fe5b6020026020010151610b44565b82828151811061085a57fe5b60200260200101819052508080600101915050610816565b5061088767c694597cd636da2560c01b61026c565b61089b670e38d3728112f1f560c01b61026c565b8092505050919050565b60006108bb67b89c295d5cd35aa160c01b61026c565b6108cf675c1df4539f179b1e60c01b61026c565b6108e3672857589b0d7460e560c01b61026c565b60006108f967fd9cfba2a737693360c01b61026c565b61090d67d1d192b73f93d6df60c01b61026c565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf856040518263ffffffff1660e01b815260040161096a9190611273565b60206040518083038186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190610f13565b90506109d0672a95edfcae87182260c01b61026c565b6109e467147c973a980da33c60c01b61026c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610afd57610a2c671ddba76a02b4cb9760c01b61026c565b610a4067ffdb3eeb5c0c579e60c01b61026c565b610a5467174feea2f1afe6f560c01b61026c565b8073ffffffffffffffffffffffffffffffffffffffff16633b3b57de856040518263ffffffff1660e01b8152600401610a8d9190611273565b60206040518083038186803b158015610aa557600080fd5b505afa925050508015610ad657506040513d601f19601f82011682018060405250810190610ad39190610f13565b60015b610adf57610af8565b610af3678cf4ad2a02db4d0f60c01b61026c565b809250505b610b12565b610b11677818ac296e60c84b60c01b61026c565b5b610b26673e24c80370f9fa2460c01b61026c565b610b3a672d02243d289782ce60c01b61026c565b8192505050919050565b6060610b5a67bc3febb59b3e401560c01b61026c565b610b6e6712aa1f19a58b740b60c01b61026c565b610b82676f4c97d30e52432360c01b61026c565b6060610b98675aa045af88498c5560c01b61026c565b610bac67d7645f95c26a2d7d60c01b61026c565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf856040518263ffffffff1660e01b8152600401610c099190611273565b60206040518083038186803b158015610c2157600080fd5b505afa158015610c35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c599190610f13565b9050610c6f67e461f759e461249360c01b61026c565b610c8367c29b2561c981c6bb60c01b61026c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610da157610ccb6784835b99edbabdcb60c01b61026c565b610cdf6720036cb97318381660c01b61026c565b610cf36769d6f6aeb07703f760c01b61026c565b8073ffffffffffffffffffffffffffffffffffffffff1663691f3431856040518263ffffffff1660e01b8152600401610d2c9190611273565b60006040518083038186803b158015610d4457600080fd5b505afa925050508015610d7a57506040513d6000823e3d601f19601f82011682018060405250810190610d779190610fcf565b60015b610d8357610d9c565b610d9767d51f95af0d587ad460c01b61026c565b809250505b610db6565b610db567853a44d4c227790b60c01b61026c565b5b610dca6767a3ae7a392af36f60c01b61026c565b610dde670b2eba75c0e4f38860c01b61026c565b8192505050919050565b600081519050610df78161150d565b92915050565b600082601f830112610e0e57600080fd5b8135610e21610e1c826112f6565b6112c9565b91508181835260208401935060208101905083856020840282011115610e4657600080fd5b60005b83811015610e765781610e5c8882610e80565b845260208401935060208301925050600181019050610e49565b5050505092915050565b600081359050610e8f81611524565b92915050565b600081359050610ea48161153b565b92915050565b600081359050610eb981611552565b92915050565b600082601f830112610ed057600080fd5b8151610ee3610ede8261131e565b6112c9565b91508082526020830160208301858383011115610eff57600080fd5b610f0a8382846114c9565b50505092915050565b600060208284031215610f2557600080fd5b6000610f3384828501610de8565b91505092915050565b600060208284031215610f4e57600080fd5b600082013567ffffffffffffffff811115610f6857600080fd5b610f7484828501610dfd565b91505092915050565b600060208284031215610f8f57600080fd5b6000610f9d84828501610e95565b91505092915050565b600060208284031215610fb857600080fd5b6000610fc684828501610eaa565b91505092915050565b600060208284031215610fe157600080fd5b600082015167ffffffffffffffff811115610ffb57600080fd5b61100784828501610ebf565b91505092915050565b600061101c838361104b565b60208301905092915050565b6000611034838361115a565b905092915050565b6110458161146f565b82525050565b611054816113e9565b82525050565b60006110658261136a565b61106f81856113a5565b935061107a8361134a565b8060005b838110156110ab5781516110928882611010565b975061109d8361138b565b92505060018101905061107e565b5085935050505092915050565b60006110c382611375565b6110cd81856113b6565b9350836020820285016110df8561135a565b8060005b8581101561111b57848403895281516110fc8582611028565b945061110783611398565b925060208a019950506001810190506110e3565b50829750879550505050505092915050565b611136816113fb565b82525050565b61114581611407565b82525050565b61115481611481565b82525050565b600061116582611380565b61116f81856113c7565b935061117f8185602086016114c9565b611188816114fc565b840191505092915050565b60006111a0602f836113d8565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b600060208201905061120e600083018461103c565b92915050565b6000602082019050818103600083015261122e818461105a565b905092915050565b6000602082019050818103600083015261125081846110b8565b905092915050565b600060208201905061126d600083018461112d565b92915050565b6000602082019050611288600083018461113c565b92915050565b60006020820190506112a3600083018461114b565b92915050565b600060208201905081810360008301526112c281611193565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156112ec57600080fd5b8060405250919050565b600067ffffffffffffffff82111561130d57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561133557600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006113f48261144f565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6000611448826113e9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061147a826114a5565b9050919050565b600061148c82611493565b9050919050565b600061149e8261144f565b9050919050565b60006114b0826114b7565b9050919050565b60006114c28261144f565b9050919050565b60005b838110156114e75780820151818401526020810190506114cc565b838111156114f6576000848401525b50505050565b6000601f19601f8301169050919050565b611516816113e9565b811461152157600080fd5b50565b61152d81611407565b811461153857600080fd5b50565b61154481611411565b811461154f57600080fd5b50565b61155b8161143d565b811461156657600080fd5b5056fea164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSHelper__factory extends ethers_1.ContractFactory {
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
exports.ENSHelper__factory = ENSHelper__factory;
ENSHelper__factory.bytecode = _bytecode;
ENSHelper__factory.abi = _abi;