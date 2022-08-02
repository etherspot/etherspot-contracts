"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConnextHandler__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "LIQUIDITY_FEE_DENOMINATOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "LIQUIDITY_FEE_NUMERATOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "acceptProposedOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
        ],
        name: "acceptProposedRouterOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_relayer",
                type: "address",
            },
        ],
        name: "addRelayer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
        ],
        name: "addRouterLiquidity",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "addRouterLiquidityFor",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "domain",
                        type: "uint32",
                    },
                    {
                        internalType: "bytes32",
                        name: "id",
                        type: "bytes32",
                    },
                ],
                internalType: "struct ConnextMessage.TokenId",
                name: "_canonical",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "_stableSwapPool",
                type: "address",
            },
        ],
        name: "addStableSwapPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "minToMint",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "addSwapLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_adopted",
                type: "address",
            },
        ],
        name: "adoptedToCanonical",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "domain",
                        type: "uint32",
                    },
                    {
                        internalType: "bytes32",
                        name: "id",
                        type: "bytes32",
                    },
                ],
                internalType: "struct ConnextMessage.TokenId",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_adopted",
                type: "bytes32",
            },
        ],
        name: "adoptedToLocalPools",
        outputs: [
            {
                internalType: "contract IStableSwap",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_asset",
                type: "bytes32",
            },
        ],
        name: "approvedAssets",
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
                name: "_relayer",
                type: "address",
            },
        ],
        name: "approvedRelayers",
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
        name: "assetOwnershipRenounced",
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
        name: "assetOwnershipTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "bumpTransfer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "calculateRemoveSwapLiquidity",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "tokenIndex",
                type: "uint8",
            },
        ],
        name: "calculateRemoveSwapLiquidityOneToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "tokenIndexFrom",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "tokenIndexTo",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
        ],
        name: "calculateSwap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "bool",
                name: "deposit",
                type: "bool",
            },
        ],
        name: "calculateSwapTokenAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_canonicalId",
                type: "bytes32",
            },
        ],
        name: "canonicalToAdopted",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "_transferIds",
                type: "bytes32[]",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "delay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "domain",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_router",
                type: "bytes32",
            },
        ],
        name: "enrollRemoteRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "to",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes",
                            },
                            {
                                internalType: "uint32",
                                name: "originDomain",
                                type: "uint32",
                            },
                            {
                                internalType: "uint32",
                                name: "destinationDomain",
                                type: "uint32",
                            },
                            {
                                internalType: "address",
                                name: "recovery",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "callback",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "callbackFee",
                                type: "uint256",
                            },
                            {
                                internalType: "bool",
                                name: "forceSlow",
                                type: "bool",
                            },
                            {
                                internalType: "bool",
                                name: "receiveLocal",
                                type: "bool",
                            },
                        ],
                        internalType: "struct CallParams",
                        name: "params",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "local",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "routers",
                        type: "address[]",
                    },
                    {
                        internalType: "bytes[]",
                        name: "routerSignatures",
                        type: "bytes[]",
                    },
                    {
                        internalType: "uint256",
                        name: "relayerFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "originSender",
                        type: "address",
                    },
                ],
                internalType: "struct ExecuteArgs",
                name: "_args",
                type: "tuple",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "executor",
        outputs: [
            {
                internalType: "contract IExecutor",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "getProposedRouterOwner",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "getProposedRouterOwnerTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "getRouterApproval",
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
                name: "_router",
                type: "address",
            },
        ],
        name: "getRouterOwner",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "getRouterRecipient",
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
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "getSwapA",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "getSwapAPrecise",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getSwapAdminBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "getSwapLPToken",
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
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "getSwapStorage",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "initialA",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "futureA",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "initialATime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "futureATime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "swapFee",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "adminFee",
                        type: "uint256",
                    },
                    {
                        internalType: "contract LPToken",
                        name: "lpToken",
                        type: "address",
                    },
                    {
                        internalType: "contract IERC20[]",
                        name: "pooledTokens",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "tokenPrecisionMultipliers",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint256[]",
                        name: "balances",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct SwapUtils.Swap",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "index",
                type: "uint8",
            },
        ],
        name: "getSwapToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "index",
                type: "uint8",
            },
        ],
        name: "getSwapTokenBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
        ],
        name: "getSwapTokenIndex",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "getSwapVirtualPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_origin",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_nonce",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "_sender",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "_message",
                type: "bytes",
            },
        ],
        name: "handle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_canonicalId",
                type: "bytes32",
            },
            {
                internalType: "contract IERC20[]",
                name: "_pooledTokens",
                type: "address[]",
            },
            {
                internalType: "uint8[]",
                name: "decimals",
                type: "uint8[]",
            },
            {
                internalType: "string",
                name: "lpTokenName",
                type: "string",
            },
            {
                internalType: "string",
                name: "lpTokenSymbol",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_a",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_adminFee",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "lpTokenTargetAddress",
                type: "address",
            },
        ],
        name: "initializeSwap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
            {
                internalType: "address",
                name: "_recipient",
                type: "address",
            },
            {
                internalType: "bytes32[]",
                name: "_transferIds",
                type: "bytes32[]",
            },
        ],
        name: "initiateClaim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isAssetOwnershipRenounced",
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
        name: "isRouterOwnershipRenounced",
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
        name: "maxRoutersPerTransfer",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "nonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "promiseRouter",
        outputs: [
            {
                internalType: "contract PromiseRouter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proposeAssetOwnershipRenunciation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newlyProposed",
                type: "address",
            },
        ],
        name: "proposeNewOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
            {
                internalType: "address",
                name: "proposed",
                type: "address",
            },
        ],
        name: "proposeRouterOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "proposeRouterOwnershipRenunciation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "proposed",
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
    {
        inputs: [],
        name: "proposedOwnableOwner",
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
    {
        inputs: [],
        name: "proposedTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "futureA",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "futureTime",
                type: "uint256",
            },
        ],
        name: "rampA",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "reconciledTransfers",
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
        name: "relayerFeeRouer",
        outputs: [
            {
                internalType: "contract RelayerFeeRouter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "relayerFeeRouter",
        outputs: [
            {
                internalType: "contract RelayerFeeRouter",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "relayerFees",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "_domain",
                type: "uint32",
            },
        ],
        name: "remotes",
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
                internalType: "bytes32",
                name: "_canonicalId",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "_adoptedAssetId",
                type: "address",
            },
        ],
        name: "removeAssetId",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_relayer",
                type: "address",
            },
        ],
        name: "removeRelayer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
        ],
        name: "removeRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "_to",
                type: "address",
            },
        ],
        name: "removeRouterLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_local",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "_to",
                type: "address",
            },
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        name: "removeRouterLiquidityFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256[]",
                name: "minAmounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "removeSwapLiquidity",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "maxBurnAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "removeSwapLiquidityImbalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "tokenIndex",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "minAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "removeSwapLiquidityOneToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceAssetOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceRouterOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounced",
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
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "routedTransfers",
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
                internalType: "address",
                name: "_router",
                type: "address",
            },
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
        ],
        name: "routerBalances",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "routerOwnershipRenounced",
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
        name: "routerOwnershipTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_executor",
                type: "address",
            },
        ],
        name: "setExecutor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_numerator",
                type: "uint256",
            },
        ],
        name: "setLiquidityFeeNumerator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_newMaxRouters",
                type: "uint256",
            },
        ],
        name: "setMaxRoutersPerTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "_promiseRouter",
                type: "address",
            },
        ],
        name: "setPromiseRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_relayerFeeRouter",
                type: "address",
            },
        ],
        name: "setRelayerFeeRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "setRouterRecipient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_sponsorVault",
                type: "address",
            },
        ],
        name: "setSponsorVault",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "newAdminFee",
                type: "uint256",
            },
        ],
        name: "setSwapAdminFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "newSwapFee",
                type: "uint256",
            },
        ],
        name: "setSwapFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenRegistry",
                type: "address",
            },
        ],
        name: "setTokenRegistry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_wrapper",
                type: "address",
            },
        ],
        name: "setWrapper",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_xAppConnectionManager",
                type: "address",
            },
        ],
        name: "setXAppConnectionManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint32",
                        name: "domain",
                        type: "uint32",
                    },
                    {
                        internalType: "bytes32",
                        name: "id",
                        type: "bytes32",
                    },
                ],
                internalType: "struct ConnextMessage.TokenId",
                name: "_canonical",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "_adoptedAssetId",
                type: "address",
            },
            {
                internalType: "address",
                name: "_stableSwapPool",
                type: "address",
            },
        ],
        name: "setupAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "router",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "setupRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "sponsorVault",
        outputs: [
            {
                internalType: "contract ISponsorVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "stopRampA",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint8",
                name: "tokenIndexFrom",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "tokenIndexTo",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minDy",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "assetIn",
                type: "address",
            },
            {
                internalType: "address",
                name: "assetOut",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swapExact",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenRegistry",
        outputs: [
            {
                internalType: "contract ITokenRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_transferId",
                type: "bytes32",
            },
        ],
        name: "transferRelayer",
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
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
            },
        ],
        name: "withdrawSwapAdminFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "wrapper",
        outputs: [
            {
                internalType: "contract IWrapped",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "xAppConnectionManager",
        outputs: [
            {
                internalType: "contract XAppConnectionManager",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "to",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes",
                            },
                            {
                                internalType: "uint32",
                                name: "originDomain",
                                type: "uint32",
                            },
                            {
                                internalType: "uint32",
                                name: "destinationDomain",
                                type: "uint32",
                            },
                            {
                                internalType: "address",
                                name: "recovery",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "callback",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "callbackFee",
                                type: "uint256",
                            },
                            {
                                internalType: "bool",
                                name: "forceSlow",
                                type: "bool",
                            },
                            {
                                internalType: "bool",
                                name: "receiveLocal",
                                type: "bool",
                            },
                        ],
                        internalType: "struct CallParams",
                        name: "params",
                        type: "tuple",
                    },
                    {
                        internalType: "address",
                        name: "transactingAssetId",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "relayerFee",
                        type: "uint256",
                    },
                ],
                internalType: "struct XCallArgs",
                name: "_args",
                type: "tuple",
            },
        ],
        name: "xcall",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class IConnextHandler__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IConnextHandler__factory = IConnextHandler__factory;
IConnextHandler__factory.abi = _abi;