"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("@typechain/hardhat");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-tracer");
const ethers_1 = require("ethers");
const extensions_1 = require("./extensions");
const { HARDHAT_MNEMONIC, ETHERSCAN_API_KEY } = process.env;
const config = {
    namedAccounts: {
        from: 0,
    },
    networks: Object.assign({ hardhat: {
            forking: {
                enabled: false,
                url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
                blockNumber: 13798171,
            },
            accounts: {
                mnemonic: HARDHAT_MNEMONIC ||
                    "test test test test test test test test test test test junk",
                count: 20,
            },
            chainId: 3333,
            gasPrice: 100 * 1000000000,
        } }, (0, extensions_1.createConfigNetworks)()),
    solidity: {
        compilers: [
            {
                version: "0.6.12",
                settings: {
                    evmVersion: "istanbul",
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
            {
                version: "0.8.4",
                settings: {
                    evmVersion: "istanbul",
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
            {
                version: "0.8.11",
                settings: {
                    evmVersion: "istanbul",
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
            {
                version: "0.8.15",
                settings: {
                    evmVersion: "istanbul",
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
        ],
    },
    paths: {
        sources: "src",
        cache: ".hardhat/cache",
        artifacts: ".hardhat/artifacts",
        deploy: "deploy",
        deployments: "deployments",
    },
    buildPaths: {
        artifacts: "artifacts",
        dist: "dist",
    },
    typechain: {
        outDir: "typings",
        target: "ethers-v5",
    },
    gasReporter: {
        enabled: false,
    },
    ens: {
        internalTopLevelDomains: ["pillar", "etherspot", "dank"],
    },
    knownContracts: {
        [extensions_1.NetworkNames.Mainnet]: {
            [extensions_1.ContractNames.ENSRegistry]: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        },
    },
    create2Salts: {
        default: ethers_1.utils.id("ETHERspot"),
        [extensions_1.ContractNames.ENSHelper]: ethers_1.utils.id("ETHERspot@1.2.0"),
        [extensions_1.ContractNames.ENSRegistry]: ethers_1.utils.id("ETHERspot@1.2.0"),
        [extensions_1.ContractNames.ENSReverseRegistrar]: ethers_1.utils.id("ETHERspot@1.2.0"),
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
module.exports = config;
