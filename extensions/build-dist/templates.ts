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
        result = `${result}| [${address}](${getScanUrl(
          network.name,
          address,
          'Address',
        )}) `;

        result = `${result}| [${transaction.hash}](${getScanUrl(
          network.name,
          transaction.hash,
          'Transaction',
        )}) `;
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
