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
    deterministicDeployment: {
        [extensions_1.NETWORK_CONFIGS[extensions_1.NetworkNames.Fuji].chainId]: {
            factory: "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7",
            deployer: "0xE1CB04A0fA36DdD16a06ea828007E35e1a3cBC37",
            funding: "10000000000000000",
            signedTx: "0xf8a88085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3830150f6a032b2a806bfc34024c6638848c3798213261304af82de14002ca2b4961a643b95a03c74c13eda5ff6b9b821fbccd1a67f160eb6a0ca50dad04b7a3e564e2599722e",
        },
        [extensions_1.NETWORK_CONFIGS[extensions_1.NetworkNames.Avalanche].chainId]: {
            factory: "0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7",
            deployer: "0xE1CB04A0fA36DdD16a06ea828007E35e1a3cBC37",
            funding: "10000000000000000",
            signedTx: "0xf8a88085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3830150f8a0d69f418f6da8f01fb95d6d87e1f2eabd85884784cd2ba2d306ba066d41b7c5e6a05a2b76982a148ca8ca2803ceac3d39a3f26208b654c473b17b01e7536eeba55e",
        },
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
