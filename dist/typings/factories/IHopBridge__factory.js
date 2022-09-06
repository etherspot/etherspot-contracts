"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHopBridge__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "relayer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "relayerFee",
                type: "uint256",
            },
        ],
        name: "sendToL2",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "bonderFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "destinationAmountOutMin",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "destinationDeadline",
                type: "uint256",
            },
        ],
        name: "swapAndSend",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
class IHopBridge__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IHopBridge__factory = IHopBridge__factory;
IHopBridge__factory.abi = _abi;
