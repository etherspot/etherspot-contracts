import { task } from 'hardhat/config';
import { utils } from 'ethers';
import {
  readdir,
  readFile,
  readJSON,
  writeFile,
  pathExists,
  mkdirp,
} from 'fs-extra';
import { resolve, join } from 'path';
import templates from './templates';

const TASK_BUILD_DIST = 'build-dist';

task(TASK_BUILD_DIST, 'Build dist', async (args, hre) => {
  const {
    config: { buildPaths, paths, typedData, knownContracts },
  } = hre;

  let { artifacts: artifactsPath, dist: distPath } = {
    artifacts: 'artifacts',
    dist: 'dist',
    ...(buildPaths || {}),
  };

  let { deployments: deploymentsPath } = {
    ...paths,
    deployments: 'deployments',
  };

  const cwd = process.cwd();

  artifactsPath = resolve(cwd, artifactsPath);
  distPath = resolve(cwd, distPath);
  deploymentsPath = resolve(cwd, deploymentsPath);

  if ((await pathExists(artifactsPath)) && (await pathExists(distPath))) {
    await mkdirp(distPath);

    const networks: { name: string; chainId: string; path: string }[] = [];

    const dirNames = await readdir(deploymentsPath);

    for (const name of dirNames) {
      const path = join(deploymentsPath, name);
      const chainFilePath = join(path, '.chainId');

      if (await pathExists(chainFilePath)) {
        const chainId = await readFile(chainFilePath, 'utf8');

        networks.push({
          name,
          chainId,
          path,
        });
      }
    }

    const contracts: {
      [key: string]: {
        abi: any;
        addresses: { [key: string]: string };
        byteCodeHash: string;
        typedDataDomainName: string;
        typedDataDomainVersion: string;
      };
    } = {};

    const fileNames = await readdir(artifactsPath);

    for (const fileName of fileNames) {
      if (fileName.endsWith('.json')) {
        const contractName = fileName.slice(0, -5);
        const filePath = join(artifactsPath, fileName);

        const addresses: { [key: string]: string } = {};

        for (const network of networks) {
          const { chainId, path, name } = network;
          let address: string = null;

          if (knownContracts[name] && knownContracts[name][contractName]) {
            address = knownContracts[name][contractName];
          } else {
            try {
              ({ address } = await readJSON(join(path, fileName)));
            } catch (err) {
              address = null;
            }
          }

          addresses[chainId] = address;
        }

        const {
          abi,
          bytecode,
        }: { abi: any; bytecode: string } = await readJSON(filePath);

        const byteCodeHash = utils.solidityKeccak256(['bytes'], [bytecode]);

        let typedDataDomainName: string = null;
        let typedDataDomainVersion: string = null;

        if (typedData.domains[contractName]) {
          ({
            name: typedDataDomainName,
            version: typedDataDomainVersion,
          } = typedData.domains[contractName]);
        }

        contracts[contractName] = {
          abi,
          addresses,
          byteCodeHash,
          typedDataDomainName,
          typedDataDomainVersion,
        };
      }
    }

    const contractNames = Object.keys(contracts);

    await writeFile(
      join(distPath, 'contracts.js'),
      templates.contractsJs(contracts),
    );

    await writeFile(
      join(distPath, 'constants.js'),
      templates.constantsJs(typedData.domainSalt, contractNames),
    );

    await writeFile(
      join(distPath, 'constants.d.ts'),
      templates.constantsDts(contractNames),
    );

    console.log('Dist built successfully');
  }
});
