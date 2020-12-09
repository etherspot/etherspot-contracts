import { deployments } from 'hardhat';
import { resolve, join } from 'path';
import { remove, ensureDir, writeJSON } from 'fs-extra';

const ROOT_PATH = resolve(__dirname, '../..');
const ARTIFACTS_PATH = join(ROOT_PATH, 'artifacts');

export async function main() {
  const { all, getArtifact } = deployments;

  const contractNames = Object.keys(await all());

  await remove(ARTIFACTS_PATH);
  await ensureDir(ARTIFACTS_PATH);

  for (const contractName of contractNames) {
    const artifact = await getArtifact(contractName);
    const artifactPath = join(ARTIFACTS_PATH, `${contractName}.json`);

    await writeJSON(artifactPath, artifact, {
      spaces: 2,
    });
  }

  console.log('Artifacts saved');
}
