"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuperfluidGovernance__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperToken[]",
                name: "tokens",
                type: "address[]",
            },
        ],
        name: "batchUpdateSuperTokenLogic",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperfluidToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "clearConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperfluidToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "getConfigAsAddress",
        outputs: [
            {
                internalType: "address",
                name: "value",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperfluidToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
        ],
        name: "getConfigAsUint256",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
        ],
        name: "registerAgreementClass",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "address",
                name: "newGov",
                type: "address",
            },
        ],
        name: "replaceGovernance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperfluidToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "value",
                type: "address",
            },
        ],
        name: "setConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "contract ISuperfluidToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "key",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "setConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
            {
                internalType: "address",
                name: "hostNewLogic",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "agreementClassNewLogics",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "superTokenFactoryNewLogic",
                type: "address",
            },
        ],
        name: "updateContracts",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ISuperfluidGovernance__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISuperfluidGovernance__factory = ISuperfluidGovernance__factory;
ISuperfluidGovernance__factory.abi = _abi;
