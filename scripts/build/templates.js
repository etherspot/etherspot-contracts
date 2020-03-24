const contractsJs = (data) => `/* eslint-disable */

module.exports = ${JSON.stringify(data, null, 2)};
`;

const constantsJs = (data) => `/* eslint-disable */

module.exports = {
  ContractNames: {${data.map((name) => `\n    ${name}: '${name}',`).join('')}
  },
};
`;

const constantsDts = (data) => `export enum ContractNames {${data.map((name) => `\n  ${name} = '${name}',`).join('')}
}
`;

module.exports = {
  contractsJs,
  constantsJs,
  constantsDts,
};
