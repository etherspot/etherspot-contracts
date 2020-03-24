const { resolve, join } = require('path');
const { readdir, readJSON, writeFile } = require('fs-extra');
const { utils: { soliditySha3 } } = require('web3');
const templates = require('./templates');

const BUILD_ROOT_PATH = resolve(__dirname, '../../build');
const CONTRACTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'contracts');
const CONSTANTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'constants');

async function main() {
  const files = await readdir(CONTRACTS_BUILD_PATH);
  let contractsOldMap;

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    contractsOldMap = require(`${CONTRACTS_BUILD_PATH}.js`);
  } catch (err) {
    contractsOldMap = {};
  }

  const contracts = (
    await Promise.all(
      files
        .filter((file) => (
          file !== 'Migrations.json'
          && !file.endsWith('Mock.json')
          && !file.endsWith('Lib.json')
        ))
        .map((file) => (async () => {
          const {
            abi,
            networks,
            bytecode,
            contractName: name,
          } = await readJSON(join(CONTRACTS_BUILD_PATH, file));

          const addressesOld = contractsOldMap[name]
            ? contractsOldMap[name].addresses
            : {};

          return {
            name,
            abi,
            byteCodeHash: soliditySha3(bytecode),
            addresses: {
              ...addressesOld,
              ...Object
                .entries(networks)
                .reduce((result, [id, { address }]) => ({
                  ...result,
                  [id]: address,
                }), {}),
            },
          };
        })()),
    )
  );

  const contractNames = contracts.map(({ name }) => name);

  await writeFile(
    `${CONTRACTS_BUILD_PATH}.js`,
    templates.contractsJs(
      contracts
        .reduce((result, { name, ...rest }) => ({
          ...result,
          [name]: rest,
        }), {}),
    ),
  );

  await writeFile(
    `${CONSTANTS_BUILD_PATH}.js`,
    templates.constantsJs(contractNames),
  );

  await writeFile(
    `${CONSTANTS_BUILD_PATH}.d.ts`,
    templates.constantsDts(contractNames),
  );
}

module.exports = main;
