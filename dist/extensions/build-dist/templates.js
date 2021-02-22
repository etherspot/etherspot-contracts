"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

| chain id | contract name | contract address |  
| --- | --- | --- | 
${Object.entries(data)
    .map(([name, { addresses }]) => {
    let result = '';
    const entries = Object.entries(addresses);
    for (const [chainId, address] of entries) {
        if (address) {
            result = `${result}| \`${chainId}\` | ${name} | \`${address}\` | \n`;
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
