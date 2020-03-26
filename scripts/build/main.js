const { resolve, join, basename } = require('path');
const { readdir, readJSON, writeFile } = require('fs-extra');
const { utils: { soliditySha3 } } = require('web3');
const logger = require('../shared/logger');
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

  logger.info('preparing files');

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

  {
    const filePath = `${CONTRACTS_BUILD_PATH}.js`;
    logger.info(`saving ${basename(filePath)}`);

    await writeFile(
      filePath,
      templates.contractsJs(
        contracts
          .reduce((result, { name, ...rest }) => ({
            ...result,
            [name]: rest,
          }), {}),
      ),
    );
  }

  {
    const filePath = `${CONSTANTS_BUILD_PATH}.js`;
    logger.info(`saving ${basename(filePath)}`);

    await writeFile(
      filePath,
      templates.constantsJs(contractNames),
    );
  }

  {
    const filePath = `${CONSTANTS_BUILD_PATH}.d.ts`;
    logger.info(`saving ${basename(filePath)}`);

    await writeFile(
      filePath,
      templates.constantsDts(contractNames),
    );
  }
}

module.exports = main;
