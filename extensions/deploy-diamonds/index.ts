import { task } from 'hardhat/config';

const TASK_DEPLOY_DIAMOND = 'deploy-diamonds';

task(
  TASK_DEPLOY_DIAMOND,
  'Deploy diamond contract and facets'
)
  .setAction(async (args, hre) => {
  const {
    run
  } = hre;

  await run('deploy', {
    tags: 'bridges',
  });
});
