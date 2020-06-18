const { resolve, join, basename } = require('path');
const { readdir, readJSON, writeFile } = require('fs-extra');
const { utils: { soliditySha3 } } = require('web3');
const logger = require('../shared/logger');
const templates = require('./templates');

const ROOT_PATH = resolve(__dirname, '../..');
const PACKAGE_PATH = join(ROOT_PATH, 'package.json');
const BUILD_ROOT_PATH = join(ROOT_PATH, 'build');
const COMPILED_ROOT_PATH = join(ROOT_PATH, 'compiled');
const CONTRACTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'contracts');
const CONSTANTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'constants');

const TYPED_DATA_DOMAIN_NAMES = {
  Gateway: 'Pillar Gateway',
  ENSController: 'Pillar ENS Controller',
  PaymentRegistry: 'Pillar Payment Network',
};

// see: https://docs.ens.domains/ens-deployments
const MAINNET_ENS_REGISTRY_ADDRESS = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';

async function main() {
  let salt;

  logger.info('preparing salt');

  {
    const { name } = await readJSON(PACKAGE_PATH);
    salt = soliditySha3(name);
  }

  const files = await readdir(COMPILED_ROOT_PATH);
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
          } = await readJSON(join(COMPILED_ROOT_PATH, file));

          const addressesOld = contractsOldMap[name]
            ? contractsOldMap[name].addresses
            : {};

          const byteCodeHash = soliditySha3(bytecode);

          const typedDataDomainName = TYPED_DATA_DOMAIN_NAMES[name] || null;

          const addresses = {
            ...addressesOld,
            ...Object
              .entries(networks)
              .reduce((result, [id, { address }]) => ({
                ...result,
                [id]: address,
              }), {}),
          };

          if (name === 'ENSRegistry') {
            addresses['1'] = MAINNET_ENS_REGISTRY_ADDRESS;
          }

          return {
            name,
            abi,
            byteCodeHash,
            typedDataDomainName,
            addresses,
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
      templates.constantsJs(salt, contractNames),
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
