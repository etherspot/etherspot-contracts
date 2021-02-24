"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScanUrl = void 0;
const constants_1 = require("../constants");
function getScanUrl(network, item, type) {
    let result = null;
    switch (network) {
        case constants_1.NetworkNames.Mainnet:
            result = 'https://etherscan.io';
            break;
        case constants_1.NetworkNames.Ropsten:
        case constants_1.NetworkNames.Rinkeby:
        case constants_1.NetworkNames.Goerli:
        case constants_1.NetworkNames.Kovan:
            result = `https://${network}.etherscan.io`;
            break;
        case constants_1.NetworkNames.Xdai:
            result = 'https://blockscout.com/poa/xdai';
            break;
        case constants_1.NetworkNames.Sokol:
            result = 'https://blockscout.com/poa/sokol';
            break;
        case constants_1.NetworkNames.Bsc:
            result = 'https://bscscan.com';
            break;
        case constants_1.NetworkNames.BscTest:
            result = 'https://testnet.bscscan.com';
            break;
    }
    if (result) {
        switch (type) {
            case 'Address':
                result = `${result}/address/${item}`;
                break;
            case 'Transaction':
                result = `${result}/tx/${item}`;
                break;
        }
    }
    return result;
}
exports.getScanUrl = getScanUrl;
