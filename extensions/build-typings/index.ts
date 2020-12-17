import {
  TASK_COMPILE,
  TASK_COMPILE_SOLIDITY_GET_SOURCE_NAMES,
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} from 'hardhat/builtin-tasks/task-names';
import { task } from 'hardhat/config';
import { tsGenerator } from 'ts-generator';
import { TypeChain } from 'typechain/dist/TypeChain';
import { resolve } from 'path';

const TASK_BUILD_TYPINGS = 'build-typings';

task(TASK_BUILD_TYPINGS, 'Build typings').setAction(async (args, hre) => {
  const { run, config } = hre;

  let { buildPaths } = config;

  buildPaths = {
    typings: 'typings',
    ...(buildPaths || {}),
  };

  const sourcePaths = await run(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS);
  const sourceNames = await run(TASK_COMPILE_SOLIDITY_GET_SOURCE_NAMES, {
    sourcePaths,
  });

  const glob = `{${sourceNames.join(',')}}`;
  const cwd = process.cwd();
  const outDir = resolve(cwd, buildPaths.typings);
  const files = `${config.paths.artifacts}/${glob}/+([a-zA-Z0-9]).json`;

  await tsGenerator(
    { cwd },
    new TypeChain({
      cwd,
      rawConfig: {
        outDir,
        files,
        target: 'ethers-v5',
      },
    }),
  );

  console.log('Typings built successfully');
});

task(TASK_COMPILE)
  .addFlag('noTypingsBuild', 'Skip typings build')
  .setAction(
    async (
      args: { global: boolean; noTypingsBuild?: boolean },
      hre,
      runSuper,
    ) => {
      const { global, noTypingsBuild } = args;

      if (global) {
        return;
      }

      await runSuper(args);

      if (!noTypingsBuild) {
        const { run } = hre;

        await run(TASK_BUILD_TYPINGS);
      }
    },
  );
