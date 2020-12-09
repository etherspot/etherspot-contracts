const contractsJs = (data: any) => `/* eslint-disable */

module.exports = ${JSON.stringify(data, null, 2)};
`;

const constantsJs = (salt: string, data: string[]) => `/* eslint-disable */

module.exports = {
  TYPED_DATA_DOMAIN_SALT: '${salt}',
  ContractNames: {${data.map(name => `\n    ${name}: '${name}',`).join('')}
  },
};
`;

const constantsDts = (
  data: string[],
) => `export declare const TYPED_DATA_DOMAIN_SALT: string;

export declare enum ContractNames {${data
  .map(name => `\n  ${name} = '${name}',`)
  .join('')}
}
`;

export default {
  contractsJs,
  constantsJs,
  constantsDts,
};
