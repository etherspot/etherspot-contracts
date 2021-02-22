"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_names_1 = require("hardhat/builtin-tasks/task-names");
const config_1 = require("hardhat/config");
const ts_generator_1 = require("ts-generator");
const TypeChain_1 = require("typechain/dist/TypeChain");
const path_1 = require("path");
const TASK_BUILD_TYPINGS = 'build-typings';
config_1.task(TASK_BUILD_TYPINGS, 'Build typings').setAction(async (args, hre) => {
    const { run, config } = hre;
    let { buildPaths } = config;
    buildPaths = Object.assign({ typings: 'typings' }, (buildPaths || {}));
    const sourcePaths = await run(task_names_1.TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS);
    const sourceNames = await run(task_names_1.TASK_COMPILE_SOLIDITY_GET_SOURCE_NAMES, {
        sourcePaths,
    });
    const glob = `{${sourceNames.join(',')}}`;
    const cwd = process.cwd();
    const outDir = path_1.resolve(cwd, buildPaths.typings);
    const files = `${config.paths.artifacts}/${glob}/+([a-zA-Z0-9]).json`;
    await ts_generator_1.tsGenerator({ cwd }, new TypeChain_1.TypeChain({
        cwd,
        rawConfig: {
            outDir,
            files,
            target: 'ethers-v5',
        },
    }));
    console.log('Typings built successfully');
});
config_1.task(task_names_1.TASK_COMPILE)
    .addFlag('noTypingsBuild', 'Skip typings build')
    .setAction(async (args, hre, runSuper) => {
    const { global, noTypingsBuild } = args;
    if (global) {
        return;
    }
    await runSuper(args);
    if (!noTypingsBuild) {
        const { run } = hre;
        await run(TASK_BUILD_TYPINGS);
    }
});
