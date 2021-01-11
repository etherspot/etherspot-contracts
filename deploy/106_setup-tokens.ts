import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('WrappedWeiToken', 'isInitialized')) {
    log('WrappedWeiToken already initialized');
  } else {
    const gateway = await get('Gateway');

    await execute(
      'WrappedWeiToken',
      {
        from,
        log: true,
      },
      'initialize',
      [],
      gateway.address,
    );
  }
};

func.tags = ['setup', 'tokens'];

module.exports = func;
