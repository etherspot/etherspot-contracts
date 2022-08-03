"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuperTokenFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
        ],
        name: "CustomSuperTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
        ],
        name: "SuperTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "tokenLogic",
                type: "address",
            },
        ],
        name: "SuperTokenLogicCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20WithTokenInfo",
                name: "underlyingToken",
                type: "address",
            },
            {
                internalType: "enum ISuperTokenFactory.Upgradability",
                name: "upgradability",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "createERC20Wrapper",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "underlyingToken",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "underlyingDecimals",
                type: "uint8",
            },
            {
                internalType: "enum ISuperTokenFactory.Upgradability",
                name: "upgradability",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "createERC20Wrapper",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getHost",
        outputs: [
            {
                internalType: "address",
                name: "host",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSuperTokenLogic",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "customSuperTokenProxy",
                type: "address",
            },
        ],
        name: "initializeCustomSuperToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ISuperTokenFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISuperTokenFactory__factory = ISuperTokenFactory__factory;
ISuperTokenFactory__factory.abi = _abi;
