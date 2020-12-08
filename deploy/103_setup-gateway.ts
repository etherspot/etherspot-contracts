import { DeployFunction } from 'hardhat-deploy/types';
import { TYPED_DATA_DOMAINS, TYPED_DATA_DOMAIN_SALT } from '../settings';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    ethers: { utils },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('Gateway', 'isInitialized')) {
    log('Gateway already initialized');
    return;
  }

  const accountOwnerRegistry = await get('AccountOwnerRegistry');
  const personalAccountRegistry = await get('PersonalAccountRegistry');

  await execute(
    'Gateway',
    {
      from,
      log: true,
    },
    'initialize',
    accountOwnerRegistry.address,
    personalAccountRegistry.address,
    utils.id(TYPED_DATA_DOMAINS.Gateway.name),
    utils.id(TYPED_DATA_DOMAINS.Gateway.version),
    TYPED_DATA_DOMAIN_SALT,
  );
};

func.tags = ['setup', 'gateway'];
func.runAtTheEnd = true;

module.exports = func;
