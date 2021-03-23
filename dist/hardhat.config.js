"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");
const ethers_1 = require("ethers");
const extensions_1 = require("./extensions");
const { HARDHAT_MNEMONIC, ETHERSCAN_API_KEY } = process.env;
const config = {
    namedAccounts: {
        from: 0,
    },
    networks: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ hardhat: {
            accounts: {
                mnemonic: HARDHAT_MNEMONIC ||
                    'test test test test test test test test test test test junk',
                count: 256,
            },
            chainId: 192,
            gasPrice: 20 * 1000000000,
        } }, extensions_1.createConfigNetwork(extensions_1.NetworkNames.Mainnet, 1, 'infura')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Ropsten, 3, 'infura', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Rinkeby, 4, 'infura', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Goerli, 5, 'infura', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Kovan, 42, 'infura', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Xdai, 100, 'https://rpc.xdaichain.com', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Sokol, 77, 'https://sokol.poa.network', 1)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Bsc, 56, 'https://bsc-dataseed1.binance.org', 20)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.BscTest, 97, 'https://data-seed-prebsc-1-s2.binance.org:8545', 20)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Fantom, 250, 'https://rpcapi.fantom.network', 22)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.FantomTest, 4002, 'https://rpc.testnet.fantom.network', 22)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Matic, 137, 'https://rpc-mainnet.maticvigil.com')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Mumbai, 80001, 'https://rpc-mumbai.maticvigil.com', 5)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.LocalA, 9999, 'http://localhost:8545', 20)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.LocalB, 6666, 'http://localhost:9545', 20)),
    solidity: {
        version: '0.6.12',
        settings: {
            evmVersion: 'istanbul',
            metadata: {
                bytecodeHash: 'none',
            },
        },
    },
    paths: {
        sources: 'src',
        cache: '.hardhat/cache',
        artifacts: '.hardhat/artifacts',
        deploy: 'deploy',
        deployments: 'deployments',
    },
    buildPaths: {
        artifacts: 'artifacts',
        dist: 'dist',
        typings: 'typings',
    },
    gasReporter: {
        enabled: false,
    },
    ens: {
        internalTopLevelDomains: ['pillar', 'etherspot', 'dank'],
    },
    knownContracts: {
        [extensions_1.NetworkNames.Mainnet]: {
            [extensions_1.ContractNames.ENSRegistry]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
    },
    create2Salts: {
        default: ethers_1.utils.id('ETHERspot'),
        [extensions_1.ContractNames.ENSHelper]: ethers_1.utils.id('ETHERspot@1.2.0'),
        [extensions_1.ContractNames.ENSRegistry]: ethers_1.utils.id('ETHERspot@1.2.0'),
        [extensions_1.ContractNames.ENSReverseRegistrar]: ethers_1.utils.id('ETHERspot@1.2.0'),
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
module.exports = config;
