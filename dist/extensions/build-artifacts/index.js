"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_names_1 = require("hardhat/builtin-tasks/task-names");
const config_1 = require("hardhat/config");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const TASK_BUILD_ARTIFACTS = 'build-artifacts';
config_1.task(TASK_BUILD_ARTIFACTS, 'Build artifacts').setAction(async (args, hre) => {
    const { config, artifacts } = hre;
    let { buildPaths } = config;
    buildPaths = Object.assign({ artifacts: 'artifacts' }, (buildPaths || {}));
    const buildPath = path_1.resolve(process.cwd(), buildPaths.artifacts);
    const artifactPaths = await artifacts.getArtifactPaths();
    await fs_extra_1.mkdirp(buildPath);
    const artifactsFileNames = new Set();
    for (const artifactPath of artifactPaths) {
        if (artifactPath.endsWith('.json')) {
            const contractName = path_1.basename(artifactPath, '.json');
            const fileName = `${contractName}.json`;
            if (!contractName.endsWith('Lib') && !contractName.endsWith('Mock')) {
                const filePath = path_1.join(buildPath, fileName);
                if (!(await fs_extra_1.pathExists(filePath))) {
                    await fs_extra_1.copyFile(artifactPath, filePath);
                }
                artifactsFileNames.add(fileName);
            }
        }
    }
    const fileNames = await fs_extra_1.readdir(buildPath);
    for (const fileName of fileNames) {
        if (!artifactsFileNames.has(fileName)) {
            await fs_extra_1.remove(path_1.join(buildPath, fileName));
        }
    }
    console.log('Artifacts built successfully');
});
config_1.task(task_names_1.TASK_COMPILE)
    .addFlag('noArtifactsBuild', 'Skip artifacts build')
    .setAction(async (args, hre, runSuper) => {
    const { global, noArtifactsBuild } = args;
    if (global) {
        return;
    }
    await runSuper();
    if (!noArtifactsBuild) {
        const { run } = hre;
        await run(TASK_BUILD_ARTIFACTS);
    }
});
