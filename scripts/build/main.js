const { resolve, join, basename } = require('path');
const { readdir, readFile, stat, readJSON, writeFile } = require('fs-extra');
const { utils: { soliditySha3 } } = require('web3');
const logger = require('../shared/logger');
const templates = require('./templates');
const { TYPED_DATA_DOMAIN_NAMES, TYPED_DATA_DOMAIN_VERSIONS } = require('../../settings/contracts');
const { getTypedDomainSalt } = require('../../shared');

const ROOT_PATH = resolve(__dirname, '../..');
const BUILD_ROOT_PATH = join(ROOT_PATH, 'build');
const ARTIFACTS_ROOT_PATH = join(ROOT_PATH, 'artifacts');
const DEPLOYMENTS_ROOT_PATH = join(ROOT_PATH, 'deployments');
const CONTRACTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'contracts');
const CONSTANTS_BUILD_PATH = join(BUILD_ROOT_PATH, 'constants');
const CHAIN_ID_FILE = '.chainId';

// see: https://docs.ens.domains/ens-deployments
const MAINNET_ENS_REGISTRY_ADDRESS = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';

async function main() {
  logger.info('preparing salt');
  const salt = await getTypedDomainSalt();

  logger.info('loading artifacts');
  const files = await readdir(ARTIFACTS_ROOT_PATH);
  let contracts = (
    await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map((file) => (async () => {
          const {
            abi,
            bytecode,
            contractName: name,
          } = await readJSON(join(ARTIFACTS_ROOT_PATH, file));

          const byteCodeHash = soliditySha3(bytecode);
          const typedDataDomainName = TYPED_DATA_DOMAIN_NAMES[name] || null;
          const typedDataDomainVersion = TYPED_DATA_DOMAIN_VERSIONS[name] || null;

          return {
            name,
            abi,
            byteCodeHash,
            typedDataDomainName,
            typedDataDomainVersion,
          };
        })()),
    )
  );

  logger.info('collecting addresses');
  const deployedAddresses = {};

  const dirs = await readdir(DEPLOYMENTS_ROOT_PATH);
  for (const dir of dirs) {
    const stats = await stat(join(DEPLOYMENTS_ROOT_PATH, dir));
    if (!stats.isDirectory()) {
      continue;
    }

    let chainId;
    try {
      chainId = await readFile(join(DEPLOYMENTS_ROOT_PATH, dir, CHAIN_ID_FILE)).then(Number);
    } catch (_) {
      continue;
    }

    for (const contract of contracts) {
     if (!deployedAddresses[contract.name]) {
       deployedAddresses[contract.name] = [];
     }

     try {
       const { address } = await readJSON(join(DEPLOYMENTS_ROOT_PATH, dir, `${contract.name}.json`));
       if (address) {
         deployedAddresses[contract.name].push({
           [chainId.toString()]: address,
         })
       }
     } catch (_) {
       //
     }
    }
  }

  contracts = contracts.map(contract => {
    const addresses = deployedAddresses[contract.name] || [];

    if (contract.name === 'ENSRegistry') {
      addresses['1'] = MAINNET_ENS_REGISTRY_ADDRESS;
    }

    return {
      ...contract,
      addresses,
    };
  });

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
