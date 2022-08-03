"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConstantFlowAgreementV1__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "flowOperator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "permissions",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "int96",
                name: "flowRateAllowance",
                type: "int96",
            },
        ],
        name: "FlowOperatorUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "totalSenderFlowRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "totalReceiverFlowRate",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "FlowUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "flowOperator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "deposit",
                type: "uint256",
            },
        ],
        name: "FlowUpdatedExtension",
        type: "event",
    },
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
        stateMutability: "pure",
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
                name: "flowOperator",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "authorizeFlowOperatorWithFullControl",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "createFlow",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "createFlowByOperator",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "deleteFlow",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "deleteFlowByOperator",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAccountFlowInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
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
    {
        inputs: [
            {
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
        ],
        name: "getDepositRequiredForFlowRate",
        outputs: [
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256",
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
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "getFlow",
        outputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
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
    {
        inputs: [
            {
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "agreementId",
                type: "bytes32",
            },
        ],
        name: "getFlowByID",
        outputs: [
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
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
    {
        inputs: [
            {
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "flowOperator",
                type: "address",
            },
        ],
        name: "getFlowOperatorData",
        outputs: [
            {
                internalType: "bytes32",
                name: "flowOperatorId",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "permissions",
                type: "uint8",
            },
            {
                internalType: "int96",
                name: "flowRateAllowance",
                type: "int96",
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
                internalType: "bytes32",
                name: "flowOperatorId",
                type: "bytes32",
            },
        ],
        name: "getFlowOperatorDataByID",
        outputs: [
            {
                internalType: "uint8",
                name: "permissions",
                type: "uint8",
            },
            {
                internalType: "int96",
                name: "flowRateAllowance",
                type: "int96",
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
                internalType: "uint256",
                name: "deposit",
                type: "uint256",
            },
        ],
        name: "getMaximumFlowRateFromDeposit",
        outputs: [
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
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
        ],
        name: "getNetFlow",
        outputs: [
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
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
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "isPatricianPeriod",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isPatricianPeriodNow",
        outputs: [
            {
                internalType: "bool",
                name: "isCurrentlyPatricianPeriod",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
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
    {
        inputs: [
            {
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "flowOperator",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "revokeFlowOperatorWithFullControl",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "updateFlow",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "updateFlowByOperator",
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
                internalType: "contract ISuperfluidToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "flowOperator",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "permissions",
                type: "uint8",
            },
            {
                internalType: "int96",
                name: "flowRateAllowance",
                type: "int96",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "updateFlowOperatorPermissions",
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
];
class IConstantFlowAgreementV1__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IConstantFlowAgreementV1__factory = IConstantFlowAgreementV1__factory;
IConstantFlowAgreementV1__factory.abi = _abi;
