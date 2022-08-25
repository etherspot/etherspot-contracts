"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapUtils__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "fees",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "invariant",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
            },
        ],
        name: "AddLiquidity",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newAdminFee",
                type: "uint256",
            },
        ],
        name: "NewAdminFee",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newSwapFee",
                type: "uint256",
            },
        ],
        name: "NewSwapFee",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
            },
        ],
        name: "RemoveLiquidity",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "tokenAmounts",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "fees",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "invariant",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
            },
        ],
        name: "RemoveLiquidityImbalance",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lpTokenAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "lpTokenSupply",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "boughtId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokensBought",
                type: "uint256",
            },
        ],
        name: "RemoveLiquidityOne",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokensSold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokensBought",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "soldId",
                type: "uint128",
            },
            {
                indexed: false,
                internalType: "uint128",
                name: "boughtId",
                type: "uint128",
            },
        ],
        name: "TokenSwap",
        type: "event",
    },
];
const _bytecode = "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a";
const isSuperArgs = (xs) => xs.length > 1;
class SwapUtils__factory extends ethers_1.ContractFactory {
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
exports.SwapUtils__factory = SwapUtils__factory;
SwapUtils__factory.bytecode = _bytecode;
SwapUtils__factory.abi = _abi;
