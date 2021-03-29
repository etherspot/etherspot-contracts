import { ContractsMD } from './interfaces';
import { getScanUrl } from './utils';

const contractsJs = (data: any) => `/* eslint-disable */

module.exports = ${JSON.stringify(data, null, 2)};
`;

const constantsJs = (data: string[]) => `/* eslint-disable */

module.exports = {
  ContractNames: {${data.map(name => `\n    ${name}: '${name}',`).join('')}
  },
};
`;

const constantsDts = (
  data: string[],
) => `export declare enum ContractNames {${data
  .map(name => `\n  ${name} = '${name}',`)
  .join('')}
}
`;

const deploymentsMd = (data: ContractsMD) => `# Deployments

| contract name | network | contract address | transaction hash |  
| --- | --- | --- |  --- | 
${Object.entries(data)
  .map(([name, deployments]) => {
    let result = '';

    for (const { address, network, transaction } of deployments) {
      if (address) {
        result = `${result}| \`${name}\` `;
        result = `${result}| \`${network.name}\` `;

        {
          const url = getScanUrl(network.name, address, 'address');

          result = url
            ? `${result}| [${address}](${url}) `
            : `${result}| ${address} `;
        }

        {
          const url = getScanUrl(network.name, transaction.hash, 'transaction');

          result = url
            ? `${result}| [${transaction.hash}](${url}) `
            : `${result}| ${transaction.hash} `;
        }
        result = `${result}| \n`;
      }
    }

    return result;
  })
  .filter(value => !!value)
  .join('')}
`;

export default {
  contractsJs,
  constantsJs,
  constantsDts,
  deploymentsMd,
};
