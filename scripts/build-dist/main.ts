import { ethers, artifacts } from 'hardhat';
import { readdir, readJSON, writeFile } from 'fs-extra';
import { resolve, join } from 'path';
import {
  NETWORKS,
  TYPED_DATA_DOMAINS,
  TYPED_DATA_DOMAIN_SALT,
  KNOWN_CONTRACT_ADDRESSES,
} from '../../settings';
import templates from './templates';

const ROOT_PATH = resolve(__dirname, '../..');
const DIST_PATH = join(ROOT_PATH, 'dist');
const DEPLOYMENTS_PATH = join(ROOT_PATH, 'deployments');

export async function main() {
  const networkNames = Object.entries(NETWORKS);

  const contractNames: string[] = [];
  const contracts: {
    [key: string]: {
      abi: any;
      addresses: { [key: string]: string };
      byteCodeHash: string;
      typedDataDomainName: string;
      typedDataDomainVersion: string;
    };
  } = {};

  for (const [networkName, { chainId }] of networkNames) {
    const currentPath = join(DEPLOYMENTS_PATH, networkName);
    try {
      const fileNames = await readdir(currentPath);

      for (const fileName of fileNames) {
        if (fileName.endsWith('.json')) {
          const contractName = fileName.slice(0, -5);

          const {
            address,
            abi,
            bytecode,
          }: { address: string; abi: any; bytecode: string } = await readJSON(
            join(currentPath, fileName),
          );

          if (!contracts[contractName]) {
            const byteCodeHash = ethers.utils.solidityKeccak256(
              ['bytes'],
              [bytecode],
            );
            const typedDataDomain = TYPED_DATA_DOMAINS[contractName];
            const typedDataDomainName = typedDataDomain
              ? typedDataDomain.name
              : null;
            const typedDataDomainVersion = typedDataDomain
              ? typedDataDomain.version
              : null;

            contracts[contractName] = {
              abi,
              addresses: {},
              byteCodeHash,
              typedDataDomainName,
              typedDataDomainVersion,
            };

            contractNames.push(contractName);
          }

          contracts[contractName].addresses[chainId] =
            KNOWN_CONTRACT_ADDRESSES[contractName] &&
            KNOWN_CONTRACT_ADDRESSES[contractName][networkName]
              ? KNOWN_CONTRACT_ADDRESSES[contractName][networkName]
              : address;
        }
      }
    } catch (err) {
      //
    }
  }

  const artifactsNames = await artifacts.getAllFullyQualifiedNames();

  for (const artifactsName of artifactsNames) {
    if (!artifactsName.endsWith('Lib') && !artifactsName.endsWith('Mock')) {
      const { contractName, abi, bytecode } = await artifacts.readArtifact(
        artifactsName,
      );

      if (!contracts[contractName]) {
        const byteCodeHash = ethers.utils.solidityKeccak256(
          ['bytes'],
          [bytecode],
        );

        contracts[contractName] = {
          abi,
          addresses: {},
          byteCodeHash,
          typedDataDomainName: null,
          typedDataDomainVersion: null,
        };

        contractNames.push(contractName);
      }
    }
  }

  await writeFile(
    join(DIST_PATH, 'contracts.js'),
    templates.contractsJs(contracts),
  );

  await writeFile(
    join(DIST_PATH, 'constants.js'),
    templates.constantsJs(TYPED_DATA_DOMAIN_SALT, contractNames),
  );

  await writeFile(
    join(DIST_PATH, 'constants.d.ts'),
    templates.constantsDts(contractNames),
  );

  console.log('Dist saved');
}
