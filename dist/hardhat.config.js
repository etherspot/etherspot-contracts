"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");
const ethers_1 = require("ethers");
const extensions_1 = require("./extensions");
const { HARDHAT_MNEMONIC } = process.env;
const config = {
    namedAccounts: {
        from: 0,
    },
    networks: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ hardhat: {
            accounts: {
                mnemonic: HARDHAT_MNEMONIC ||
                    'test test test test test test test test test test test junk',
                count: 256,
            },
            chainId: 192,
            gasPrice: 20000000000,
        } }, extensions_1.createConfigNetwork(extensions_1.NetworkNames.Mainnet, 1, 'infura', 120000000000)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Ropsten, 3, 'infura')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Rinkeby, 4, 'infura')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Goerli, 5, 'infura')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Kovan, 42, 'infura')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Xdai, 100, 'https://rpc.xdaichain.com')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Sokol, 77, 'https://sokol.poa.network')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.Bsc, 56, 'https://bsc-dataseed1.binance.org')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.BscTest, 97, 'https://data-seed-prebsc-1-s1.binance.org:8545')), extensions_1.createConfigNetwork(extensions_1.NetworkNames.LocalA, 9999, 'http://localhost:8545', 20000000000)), extensions_1.createConfigNetwork(extensions_1.NetworkNames.LocalB, 6666, 'http://localhost:9545', 20000000000)),
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
    typedData: {
        domains: {
            Gateway: {
                name: 'ETHERspot Gateway',
                version: '1',
            },
            ENSController: {
                name: 'ETHERspot ENS Controller',
                version: '1',
            },
            PaymentRegistry: {
                name: 'ETHERspot Payment Registry',
                version: '1',
            },
        },
        domainSalt: ethers_1.utils.id('ETHERspot'),
    },
    create2Salts: {
        default: ethers_1.utils.id('v1'),
    },
};
module.exports = config;
