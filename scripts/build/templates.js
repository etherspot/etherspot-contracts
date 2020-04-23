const contractsJs = (data) => `/* eslint-disable */

module.exports = ${JSON.stringify(data, null, 2)};
`;

const constantsJs = (salt, data) => `/* eslint-disable */

module.exports = {
  TYPED_DATA_DOMAIN_SALT: '${salt}',
  ContractNames: {${data.map((name) => `\n    ${name}: '${name}',`).join('')}
  },
};
`;

const constantsDts = (data) => `export declare const TYPED_DATA_DOMAIN_SALT: string;

export declare enum ContractNames {${data.map((name) => `\n  ${name} = '${name}',`).join('')}
}
`;

module.exports = {
  contractsJs,
  constantsJs,
  constantsDts,
};
