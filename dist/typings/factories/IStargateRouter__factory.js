"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStargateRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_poolId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amountLD",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "addLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_srcPoolId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_amountLP",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
        ],
        name: "instantRedeemLocal",
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
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "uint8",
                name: "_functionType",
                type: "uint8",
            },
            {
                internalType: "bytes",
                name: "_toAddress",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "_transferAndCallPayload",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "dstGasForCall",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dstNativeAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "dstNativeAddr",
                        type: "bytes",
                    },
                ],
                internalType: "struct IStargateRouter.lzTxObj",
                name: "_lzTxParams",
                type: "tuple",
            },
        ],
        name: "quoteLayerZeroFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
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
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_srcPoolId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_dstPoolId",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountLP",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_to",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "dstGasForCall",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dstNativeAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "dstNativeAddr",
                        type: "bytes",
                    },
                ],
                internalType: "struct IStargateRouter.lzTxObj",
                name: "_lzTxParams",
                type: "tuple",
            },
        ],
        name: "redeemLocal",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_srcPoolId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_dstPoolId",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountLP",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_minAmountLD",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_to",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "dstGasForCall",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dstNativeAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "dstNativeAddr",
                        type: "bytes",
                    },
                ],
                internalType: "struct IStargateRouter.lzTxObj",
                name: "_lzTxParams",
                type: "tuple",
            },
        ],
        name: "redeemRemote",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_srcPoolId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_dstPoolId",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address",
            },
        ],
        name: "sendCredits",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_dstChainId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_srcPoolId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_dstPoolId",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "_refundAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountLD",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_minAmountLD",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "dstGasForCall",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dstNativeAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "dstNativeAddr",
                        type: "bytes",
                    },
                ],
                internalType: "struct IStargateRouter.lzTxObj",
                name: "_lzTxParams",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "_to",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "_payload",
                type: "bytes",
            },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class IStargateRouter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStargateRouter__factory = IStargateRouter__factory;
IStargateRouter__factory.abi = _abi;
