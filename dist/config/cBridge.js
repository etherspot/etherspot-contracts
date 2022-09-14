"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBridgeConfig = void 0;
const constants_1 = require("../extensions/constants");
exports.CBridgeConfig = {
    [constants_1.NetworkNames.Xdai]: {
        cBridge: "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
        chainId: 100,
    },
    [constants_1.NetworkNames.Mainnet]: {
        cBridge: "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820",
        chainId: 1,
    },
    [constants_1.NetworkNames.Optimism]: {
        cBridge: "0x9D39Fc627A6d9d9F8C831c16995b209548cc3401",
        chainId: 10,
    },
    [constants_1.NetworkNames.Bsc]: {
        cBridge: "0xdd90E5E87A2081Dcf0391920868eBc2FFB81a1aF",
        chainId: 56,
    },
    [constants_1.NetworkNames.Matic]: {
        cBridge: "0x88DCDC47D2f83a99CF0000FDF667A468bB958a78",
        chainId: 137,
    },
    [constants_1.NetworkNames.Fantom]: {
        cBridge: "0x374B8a9f3eC5eB2D97ECA84Ea27aCa45aa1C57EF",
        chainId: 250,
    },
    [constants_1.NetworkNames.Moonbeam]: {
        cBridge: "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",
        chainId: 1284,
    },
    [constants_1.NetworkNames.Arbitrum]: {
        cBridge: "0x1619DE6B6B20eD217a58d00f37B9d47C7663feca",
        chainId: 42161,
    },
    [constants_1.NetworkNames.Avalanche]: {
        cBridge: "0xef3c714c9425a8F3697A9C969Dc1af30ba82e5d4",
        chainId: 43114,
    },
    [constants_1.NetworkNames.Celo]: {
        cBridge: "0xBB7684Cc5408F4DD0921E5c2Cadd547b8f1AD573",
        chainId: 42220,
    },
    [constants_1.NetworkNames.Goerli]: {
        cBridge: "0xd9145CCE52D386f254917e481eB44e9943F39138",
        chainId: 5,
    },
    [constants_1.NetworkNames.OptimismKovan]: {
        cBridge: "0x6D5862a18C6a169D44d02a8B726a02A5B707B484",
        chainId: 69,
    },
    [constants_1.NetworkNames.ArbitrumTest]: {
        cBridge: "0x8314Af54080dF4d05768c5D3f097f59f170d9564",
        chainId: 421611,
    },
};
