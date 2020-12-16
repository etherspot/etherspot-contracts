import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import { task } from 'hardhat/config';
import { resolve, join, basename } from 'path';
import { mkdirp, copyFile, pathExists, readdir, remove } from 'fs-extra';

const TASK_BUILD_ARTIFACTS = 'build-artifacts';

task(TASK_BUILD_ARTIFACTS, 'Build artifacts').setAction(async (args, hre) => {
  const { config, artifacts } = hre;

  let { buildPaths } = config;

  buildPaths = {
    artifacts: 'artifacts',
    ...(buildPaths || {}),
  };

  const buildPath = resolve(process.cwd(), buildPaths.artifacts);
  const artifactPaths = await artifacts.getArtifactPaths();

  await mkdirp(buildPath);

  const artifactsFileNames = new Set<string>();

  for (const artifactPath of artifactPaths) {
    if (artifactPath.endsWith('.json')) {
      const contractName = basename(artifactPath, '.json');
      const fileName = `${contractName}.json`;

      if (!contractName.endsWith('Lib') && !contractName.endsWith('Mock')) {
        const filePath = join(buildPath, fileName);

        if (!(await pathExists(filePath))) {
          await copyFile(artifactPath, filePath);
        }

        artifactsFileNames.add(fileName);
      }
    }
  }

  const fileNames = await readdir(buildPath);

  for (const fileName of fileNames) {
    if (!artifactsFileNames.has(fileName)) {
      await remove(join(buildPath, fileName));
    }
  }

  console.log('Artifacts built successfully');
});

task(TASK_COMPILE)
  .addFlag('noArtifactsBuild', 'Skip artifacts build')
  .setAction(
    async (
      args: { global: boolean; noArtifactsBuild?: boolean },
      hre,
      runSuper,
    ) => {
      const { global, noArtifactsBuild } = args;

      if (global) {
        return;
      }

      await runSuper();

      if (!noArtifactsBuild) {
        const { run } = hre;

        await run(TASK_BUILD_ARTIFACTS);
      }
    },
  );
