"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScanUrl = void 0;
const constants_1 = require("../constants");
function getScanUrl(network, item, type) {
    let result = null;
    if (constants_1.NETWORK_CONFIGS[network]) {
        const { explorer } = constants_1.NETWORK_CONFIGS[network];
        if (explorer) {
            let address;
            let transaction;
            switch (typeof explorer) {
                case 'string':
                    address = `${explorer}/address`;
                    transaction = `${explorer}/tx`;
                    break;
                case 'object':
                    ({ address, transaction } = explorer);
                    break;
            }
            switch (type) {
                case 'address':
                    result = `${address}/${item}`;
                    break;
                case 'transaction':
                    result = `${transaction}/${item}`;
                    break;
            }
        }
    }
    return result;
}
exports.getScanUrl = getScanUrl;
