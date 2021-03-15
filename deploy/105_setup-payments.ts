import { DeployFunction } from 'hardhat-deploy/types';
import { utils } from 'ethers';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('PaymentRegistry', 'isInitialized')) {
    log('PaymentRegistry already initialized');
  } else {
    const externalAccountRegistry = await get('ExternalAccountRegistry');
    const personalAccountRegistry = await get('PersonalAccountRegistry');
    const gateway = await get('Gateway');

    await execute(
      'PaymentRegistry',
      {
        from,
        log: true,
      },
      'initialize',
      externalAccountRegistry.address,
      personalAccountRegistry.address,
      0,
      [],
      gateway.address,
    );
  }
};

func.tags = ['setup', 'payments'];

module.exports = func;
