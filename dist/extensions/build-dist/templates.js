"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const contractsJs = (data) => `/* eslint-disable */

module.exports = ${JSON.stringify(data, null, 2)};
`;
const constantsJs = (salt, data) => `/* eslint-disable */

module.exports = {
  TYPED_DATA_DOMAIN_SALT: '${salt}',
  ContractNames: {${data.map(name => `\n    ${name}: '${name}',`).join('')}
  },
};
`;
const constantsDts = (data) => `export declare const TYPED_DATA_DOMAIN_SALT: string;

export declare enum ContractNames {${data
    .map(name => `\n  ${name} = '${name}',`)
    .join('')}
}
`;
const deploymentsMd = (data) => `# Deployments

| contract name | network | contract address | transaction hash |  
| --- | --- | --- |  --- | 
${Object.entries(data)
    .map(([name, deployments]) => {
    let result = '';
    for (const { address, network, transaction } of deployments) {
        if (address) {
            result = `${result}| \`${name}\` `;
            result = `${result}| \`${network.name}\` `;
            result = `${result}| [${address}](${utils_1.getScanUrl(network.name, address, 'Address')}) `;
            result = `${result}| [${transaction.hash}](${utils_1.getScanUrl(network.name, transaction.hash, 'Transaction')}) `;
            result = `${result}| \n`;
        }
    }
    return result;
})
    .filter(value => !!value)
    .join('')}
`;
exports.default = {
    contractsJs,
    constantsJs,
    constantsDts,
    deploymentsMd,
};
