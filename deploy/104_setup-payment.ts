import { DeployFunction } from 'hardhat-deploy/types';
import { utils } from 'ethers';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    config: { typedData },
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
      utils.id(typedData.domains.PaymentRegistry.name),
      utils.id(typedData.domains.PaymentRegistry.version),
      typedData.domainSalt,
    );
  }
};

func.tags = ['setup', 'payment'];

module.exports = func;
