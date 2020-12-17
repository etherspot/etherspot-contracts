"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigNetwork = void 0;
function createConfigNetwork(networkName, chainId, defaultProvider) {
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
        ? {
            [networkName]: {
                chainId,
                url,
                accounts,
            },
        }
        : {};
}
exports.createConfigNetwork = createConfigNetwork;
