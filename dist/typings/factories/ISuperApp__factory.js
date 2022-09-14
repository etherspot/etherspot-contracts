"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuperApp__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementCreated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementTerminated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementUpdated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "beforeAgreementCreated",
        outputs: [
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "beforeAgreementTerminated",
        outputs: [
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "beforeAgreementUpdated",
        outputs: [
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ISuperApp__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISuperApp__factory = ISuperApp__factory;
ISuperApp__factory.abi = _abi;
