import { DeployFunction } from 'hardhat-deploy/types';
import { utils } from 'ethers';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    config: { typedData },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('Gateway', 'isInitialized')) {
    log('Gateway already initialized');
  } else {
    const externalAccountRegistry = await get('ExternalAccountRegistry');
    const personalAccountRegistry = await get('PersonalAccountRegistry');

    await execute(
      'Gateway',
      {
        from,
        log: true,
      },
      'initialize',
      externalAccountRegistry.address,
      personalAccountRegistry.address,
      utils.id(typedData.domains.Gateway.name),
      utils.id(typedData.domains.Gateway.version),
      typedData.domainSalt,
    );
  }
};

func.tags = ['setup', 'gateway'];

module.exports = func;
