import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('PersonalAccountRegistry', 'isInitialized')) {
    log('PersonalAccountRegistry already initialized');
  } else {
    const gateway = await get('Gateway');

    const personalAccountImplementation = await get(
      'PersonalAccountImplementation',
    );
    const personalAccountRegistry = await get('PersonalAccountRegistry');

    await execute(
      'PersonalAccountImplementation',
      {
        from,
        log: true,
      },
      'initialize',
      personalAccountRegistry.address,
    );

    await execute(
      'PersonalAccountRegistry',
      {
        from,
        log: true,
      },
      'initialize',
      [],
      personalAccountImplementation.address,
      gateway.address,
    );
  }
};

func.tags = ['setup', 'personal'];

module.exports = func;
