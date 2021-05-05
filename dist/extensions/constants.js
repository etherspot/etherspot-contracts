"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractNames = exports.NETWORK_CONFIGS = exports.NetworkNames = void 0;
var NetworkNames;
(function (NetworkNames) {
    NetworkNames["Mainnet"] = "mainnet";
    NetworkNames["Ropsten"] = "ropsten";
    NetworkNames["Rinkeby"] = "rinkeby";
    NetworkNames["Goerli"] = "goerli";
    NetworkNames["Kovan"] = "kovan";
    NetworkNames["Xdai"] = "xdai";
    NetworkNames["Sokol"] = "sokol";
    NetworkNames["Bsc"] = "bsc";
    NetworkNames["BscTest"] = "bscTest";
    NetworkNames["Fantom"] = "fantom";
    NetworkNames["FantomTest"] = "fantomTest";
    NetworkNames["Matic"] = "matic";
    NetworkNames["Mumbai"] = "mumbai";
    NetworkNames["Avalanche"] = "avalanche";
    NetworkNames["Fuji"] = "fuji";
    NetworkNames["LocalA"] = "localA";
    NetworkNames["LocalB"] = "localB";
})(NetworkNames = exports.NetworkNames || (exports.NetworkNames = {}));
exports.NETWORK_CONFIGS = {
    [NetworkNames.Mainnet]: {
        chainId: 1,
        defaultProviderUrl: 'infura',
        explorer: 'https://etherscan.io',
    },
    [NetworkNames.Ropsten]: {
        chainId: 3,
        defaultProviderUrl: 'infura',
        defaultGasPrice: 1,
        explorer: 'https://ropsten.etherscan.io',
    },
    [NetworkNames.Rinkeby]: {
        chainId: 4,
        defaultProviderUrl: 'infura',
        defaultGasPrice: 1,
        explorer: 'https://rinkeby.etherscan.io',
    },
    [NetworkNames.Goerli]: {
        chainId: 5,
        defaultProviderUrl: 'infura',
        defaultGasPrice: 1,
        explorer: 'https://goerli.etherscan.io',
    },
    [NetworkNames.Kovan]: {
        chainId: 42,
        defaultProviderUrl: 'infura',
        defaultGasPrice: 1,
        explorer: 'https://kovan.etherscan.io',
    },
    [NetworkNames.Xdai]: {
        chainId: 100,
        defaultProviderUrl: 'https://rpc.xdaichain.com',
        defaultGasPrice: 1,
        explorer: 'https://blockscout.com/poa/xdai',
    },
    [NetworkNames.Sokol]: {
        chainId: 77,
        defaultProviderUrl: 'https://sokol.poa.network',
        defaultGasPrice: 1,
        explorer: 'https://blockscout.com/poa/sokol',
    },
    [NetworkNames.Bsc]: {
        chainId: 56,
        defaultProviderUrl: 'https://bsc-dataseed1.binance.org',
        defaultGasPrice: 20,
        explorer: 'https://bscscan.com',
    },
    [NetworkNames.BscTest]: {
        chainId: 97,
        defaultProviderUrl: 'https://data-seed-prebsc-1-s2.binance.org:8545',
        defaultGasPrice: 20,
        explorer: 'https://testnet.bscscan.com',
    },
    [NetworkNames.Fantom]: {
        chainId: 250,
        defaultProviderUrl: 'https://rpcapi.fantom.network',
        defaultGasPrice: 22,
        explorer: 'https://ftmscan.com',
    },
    [NetworkNames.FantomTest]: {
        chainId: 4002,
        defaultProviderUrl: 'https://rpc.testnet.fantom.network',
        defaultGasPrice: 22,
        explorer: {
            address: 'https://explorer.testnet.fantom.network/address',
            transaction: 'https://explorer.testnet.fantom.network/transactions',
        },
    },
    [NetworkNames.Matic]: {
        chainId: 137,
        defaultProviderUrl: 'https://rpc-mainnet.maticvigil.com',
        explorer: 'https://explorer-mainnet.maticvigil.com',
    },
    [NetworkNames.Mumbai]: {
        chainId: 80001,
        defaultProviderUrl: 'https://rpc-mumbai.maticvigil.com',
        defaultGasPrice: 5,
        explorer: 'https://explorer-mumbai.maticvigil.com',
    },
    [NetworkNames.Avalanche]: {
        chainId: 43114,
        defaultProviderUrl: 'https://api.avax.network/ext/bc/C/rpc',
        explorer: 'https://cchain.explorer.avax.network',
    },
    [NetworkNames.Fuji]: {
        chainId: 43113,
        defaultProviderUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
        explorer: 'https://cchain.explorer.avax-test.network',
        defaultGasPrice: 470,
    },
    [NetworkNames.LocalA]: {
        chainId: 9999,
        defaultProviderUrl: 'http://localhost:8545',
        defaultGasPrice: 20,
    },
    [NetworkNames.LocalB]: {
        chainId: 6666,
        defaultProviderUrl: 'http://localhost:9545',
        defaultGasPrice: 20,
    },
};
var ContractNames;
(function (ContractNames) {
    ContractNames["BalancesHelper"] = "BalancesHelper";
    ContractNames["ENSController"] = "ENSController";
    ContractNames["ENSHelper"] = "ENSHelper";
    ContractNames["ENSRegistry"] = "ENSRegistry";
    ContractNames["ENSReverseRegistrar"] = "ENSReverseRegistrar";
    ContractNames["ExternalAccountRegistry"] = "ExternalAccountRegistry";
    ContractNames["Gateway"] = "Gateway";
    ContractNames["PaymentRegistry"] = "PaymentRegistry";
    ContractNames["PersonalAccountImplementationV1"] = "PersonalAccountImplementationV1";
    ContractNames["PersonalAccountRegistry"] = "PersonalAccountRegistry";
    ContractNames["WrappedWeiToken"] = "WrappedWeiToken";
})(ContractNames = exports.ContractNames || (exports.ContractNames = {}));
