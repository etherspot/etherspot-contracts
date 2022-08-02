"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInstantDistributionAgreementV1__factory = void 0;
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "IndexCreated",
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "IndexDistributionClaimed",
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "IndexSubscribed",
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "units",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "IndexUnitsUpdated",
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "IndexUnsubscribed",
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
                name: "publisher",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "oldIndexValue",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "newIndexValue",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "totalUnitsPending",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "totalUnitsApproved",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "IndexUpdated",
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
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "publisher",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "SubscriptionApproved",
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
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "publisher",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SubscriptionDistributionClaimed",
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
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "publisher",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "SubscriptionRevoked",
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
                name: "subscriber",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "publisher",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "units",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "SubscriptionUnitsUpdated",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "approveSubscription",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "calculateDistribution",
        outputs: [
            {
                internalType: "uint256",
                name: "actualAmount",
                type: "uint256",
            },
            {
                internalType: "uint128",
                name: "newIndexValue",
                type: "uint128",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "claim",
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
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "createIndex",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "deleteSubscription",
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
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "distribute",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
        ],
        name: "getIndex",
        outputs: [
            {
                internalType: "bool",
                name: "exist",
                type: "bool",
            },
            {
                internalType: "uint128",
                name: "indexValue",
                type: "uint128",
            },
            {
                internalType: "uint128",
                name: "totalUnitsApproved",
                type: "uint128",
            },
            {
                internalType: "uint128",
                name: "totalUnitsPending",
                type: "uint128",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
        ],
        name: "getSubscription",
        outputs: [
            {
                internalType: "bool",
                name: "exist",
                type: "bool",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
            {
                internalType: "uint128",
                name: "units",
                type: "uint128",
            },
            {
                internalType: "uint256",
                name: "pendingDistribution",
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
        name: "getSubscriptionByID",
        outputs: [
            {
                internalType: "address",
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
            {
                internalType: "uint128",
                name: "units",
                type: "uint128",
            },
            {
                internalType: "uint256",
                name: "pendingDistribution",
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
                name: "subscriber",
                type: "address",
            },
        ],
        name: "listSubscriptions",
        outputs: [
            {
                internalType: "address[]",
                name: "publishers",
                type: "address[]",
            },
            {
                internalType: "uint32[]",
                name: "indexIds",
                type: "uint32[]",
            },
            {
                internalType: "uint128[]",
                name: "unitsList",
                type: "uint128[]",
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
                name: "publisher",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "revokeSubscription",
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
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "uint128",
                name: "indexValue",
                type: "uint128",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "updateIndex",
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
                internalType: "uint32",
                name: "indexId",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "subscriber",
                type: "address",
            },
            {
                internalType: "uint128",
                name: "units",
                type: "uint128",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "updateSubscription",
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
class IInstantDistributionAgreementV1__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IInstantDistributionAgreementV1__factory = IInstantDistributionAgreementV1__factory;
IInstantDistributionAgreementV1__factory.abi = _abi;
