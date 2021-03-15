"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const constants_1 = require("../constants");
const templates_1 = __importDefault(require("./templates"));
const TASK_BUILD_DIST = 'build-dist';
config_1.task(TASK_BUILD_DIST, 'Build dist', async (args, hre) => {
    const { config: { buildPaths, paths, knownContracts }, } = hre;
    let { artifacts: artifactsPath, dist: distPath } = Object.assign({ artifacts: 'artifacts', dist: 'dist' }, (buildPaths || {}));
    let { deployments: deploymentsPath } = Object.assign(Object.assign({}, paths), { deployments: 'deployments' });
    const cwd = process.cwd();
    artifactsPath = path_1.resolve(cwd, artifactsPath);
    distPath = path_1.resolve(cwd, distPath);
    deploymentsPath = path_1.resolve(cwd, deploymentsPath);
    if ((await fs_extra_1.pathExists(artifactsPath)) && (await fs_extra_1.pathExists(distPath))) {
        await fs_extra_1.mkdirp(distPath);
        const networks = [];
        const dirNames = await fs_extra_1.readdir(deploymentsPath);
        for (const name of dirNames) {
            const path = path_1.join(deploymentsPath, name);
            const chainFilePath = path_1.join(path, '.chainId');
            if (await fs_extra_1.pathExists(chainFilePath)) {
                const chainId = await fs_extra_1.readFile(chainFilePath, 'utf8');
                networks.push({
                    name,
                    chainId,
                    path,
                });
            }
        }
        const contracts = {};
        const contractsMD = {};
        const fileNames = await fs_extra_1.readdir(artifactsPath);
        for (const fileName of fileNames) {
            if (fileName.endsWith('.json')) {
                const contractName = fileName.slice(0, -5);
                const filePath = path_1.join(artifactsPath, fileName);
                const addresses = {};
                for (const network of networks) {
                    const { chainId, path, name } = network;
                    let address = null;
                    let transactionHash = null;
                    if (knownContracts[name] && knownContracts[name][contractName]) {
                        address = knownContracts[name][contractName];
                    }
                    else {
                        try {
                            ({ address, transactionHash } = await fs_extra_1.readJSON(path_1.join(path, fileName)));
                        }
                        catch (err) {
                            address = null;
                        }
                    }
                    addresses[chainId] = address;
                    if (address &&
                        transactionHash &&
                        name !== constants_1.NetworkNames.LocalA &&
                        name !== constants_1.NetworkNames.LocalB) {
                        if (!contractsMD[contractName]) {
                            contractsMD[contractName] = [];
                        }
                        contractsMD[contractName].push({
                            address,
                            network: {
                                name,
                                chainId,
                            },
                            transaction: {
                                hash: transactionHash,
                                url: null,
                            },
                        });
                    }
                }
                const { abi, bytecode: byteCode, } = await fs_extra_1.readJSON(filePath);
                contracts[contractName] = {
                    abi,
                    addresses,
                    byteCode,
                };
            }
        }
        const contractNames = Object.keys(contracts);
        await fs_extra_1.writeFile(path_1.join(distPath, 'contracts.js'), templates_1.default.contractsJs(contracts));
        await fs_extra_1.writeFile(path_1.join(distPath, 'constants.js'), templates_1.default.constantsJs(contractNames));
        await fs_extra_1.writeFile(path_1.join(distPath, 'constants.d.ts'), templates_1.default.constantsDts(contractNames));
        await fs_extra_1.writeFile(path_1.join(cwd, 'DEPLOYMENTS.md'), templates_1.default.deploymentsMd(contractsMD));
        console.log('Dist built successfully');
    }
});
