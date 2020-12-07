const { deployments } = require('hardhat');
const fsExtra = require('fs-extra');
const { resolve, join } = require('path');

const ROOT_PATH = resolve(__dirname, '../..');
const ARTIFACTS_PATH = join(ROOT_PATH, 'artifacts');

async function main() {
  const all = await deployments.all();
  await fsExtra.remove(ARTIFACTS_PATH);
  await fsExtra.ensureDir(ARTIFACTS_PATH);

  for(const contractName of Object.keys(all)) {
    const artifact = await deployments.getArtifact(contractName);
    const artifactPath = join(ARTIFACTS_PATH, `${contractName}.json`);
    await fsExtra.writeJSON(artifactPath, artifact, {
      spaces: 2,
    });
  }

  console.log('artifacts saved');
}

module.exports = main;
