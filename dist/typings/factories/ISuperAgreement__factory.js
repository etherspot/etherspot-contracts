"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuperAgreement__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "agreementType",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "time",
                type: "uint256",
            },
        ],
        name: "realtimeBalanceOf",
        outputs: [
            {
                internalType: "int256",
                name: "dynamicBalance",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "owedDeposit",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ISuperAgreement__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISuperAgreement__factory = ISuperAgreement__factory;
ISuperAgreement__factory.abi = _abi;
