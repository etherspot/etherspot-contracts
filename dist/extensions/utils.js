"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigNetworks = exports.createConfigNetwork = void 0;
const constants_1 = require("./constants");
function createConfigNetwork(networkName) {
    let result = null;
    if (constants_1.NETWORK_CONFIGS[networkName]) {
        const { chainId, defaultGas, defaultGasPrice, defaultProviderUrl, } = constants_1.NETWORK_CONFIGS[networkName];
        const envPrefix = networkName.replace(/([A-Z])+/, '_$1').toUpperCase();
        let url = process.env[`${envPrefix}_PROVIDER_ENDPOINT`];
        if (!url) {
            switch (defaultProviderUrl) {
                case 'infura':
                    url = `https://${networkName}.infura.io/v3/${process.env.INFURA_TOKEN}`;
                    break;
                default:
                    url = defaultProviderUrl;
            }
        }
        if (url) {
            let gas = parseInt(process.env[`${envPrefix}_PROVIDER_GAS`], 10) || undefined;
            if (!gas && defaultGas) {
                gas = defaultGas;
            }
            let gasPrice = parseInt(process.env[`${envPrefix}_PROVIDER_GAS_PRICE`], 10) ||
                undefined;
            if (!gasPrice && defaultGasPrice) {
                gasPrice = defaultGasPrice;
            }
            if (gasPrice) {
                gasPrice *= 1000000000;
            }
            const privateKey = process.env[`${envPrefix}_PROVIDER_PRIVATE_KEY`];
            const accounts = privateKey ? [privateKey] : [];
            result = {
                [networkName]: {
                    chainId,
                    url,
                    accounts,
                    gas,
                    gasPrice,
                },
            };
        }
    }
    return result;
}
exports.createConfigNetwork = createConfigNetwork;
function createConfigNetworks() {
    return Object.values(constants_1.NetworkNames).reduce((result, networkName) => (Object.assign(Object.assign({}, result), createConfigNetwork(networkName))), {});
}
exports.createConfigNetworks = createConfigNetworks;
