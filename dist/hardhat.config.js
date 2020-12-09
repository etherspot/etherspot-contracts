"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./hardhat.env");
const settings_1 = require("./settings");
const networks = Object.entries(settings_1.NETWORKS).reduce((result, [networkName, { chainId, defaultProvider }]) => {
    const envPrefix = networkName.replace(/([A-Z])+/, '_$1').toUpperCase();
    let url = process.env[`${envPrefix}_PROVIDER_ENDPOINT`];
    if (!url) {
        switch (defaultProvider) {
            case 'infura':
                url = `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;
                break;
            default:
                url = defaultProvider;
        }
    }
    const privateKey = process.env[`${envPrefix}_PROVIDER_PRIVATE_KEY`];
    const accounts = privateKey ? [privateKey] : [];
    return url
        ? Object.assign(Object.assign({}, result), { [networkName]: {
                chainId,
                url,
                accounts,
            } }) : result;
}, {});
const config = {
    namedAccounts: {
        from: 0,
    },
    networks: Object.assign({ hardhat: {
            accounts: {
                mnemonic: process.env.HARDHAT_MNEMONIC ||
                    'test test test test test test test test test test test junk',
                count: 256,
            },
            chainId: settings_1.NETWORKS.localA.chainId,
            gasPrice: 20000000000,
        } }, networks),
    solidity: {
        version: '0.6.12',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
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
    typechain: {
        outDir: 'types',
        target: 'ethers-v5',
    },
};
module.exports = config;
