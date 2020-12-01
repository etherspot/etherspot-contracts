const { deployments } = require('hardhat');
const fsExtra = require('fs-extra');
const path = require('path');

const artifactsPath = 'artifacts';

async function main() {
  const all = await deployments.all();
  await fsExtra.remove(artifactsPath);
  await fsExtra.ensureDir(artifactsPath);

  for(const contractName of Object.keys(all)) {
    const artifact = await deployments.getArtifact(contractName);
    const artifactPath = path.join(artifactsPath, `${contractName}.json`);
    await fsExtra.writeJSON(artifactPath, artifact, {
      spaces: 2,
    });
  }

  console.log('artifacts saved');
}

module.exports = main;
