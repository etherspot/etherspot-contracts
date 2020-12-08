import { DeployFunction, Deployment } from 'hardhat-deploy/types';
import {
  TYPED_DATA_DOMAINS,
  TYPED_DATA_DOMAIN_SALT,
  KNOWN_CONTRACT_ADDRESSES,
  ENS_TLD,
} from '../settings';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    ethers: { constants, utils },
    network: { name },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('ENSController', 'isInitialized')) {
    log('ENSController already initialized');
    return;
  }
  const ensController = await get('ENSController');
  const gateway = await get('Gateway');

  let ensRegistry: Deployment;
  let ensAddress = KNOWN_CONTRACT_ADDRESSES.ENSRegistry[name];

  if (!ensAddress) {
    ensRegistry = await get('ENSRegistry');
    ({ address: ensAddress } = ensRegistry);
  }

  await execute(
    'ENSController',
    {
      from,
      log: true,
    },
    'initialize',
    ensAddress,
    [],
    gateway.address,
    utils.id(TYPED_DATA_DOMAINS.ENSController.name),
    utils.id(TYPED_DATA_DOMAINS.ENSController.version),
    TYPED_DATA_DOMAIN_SALT,
  );

  if (ensRegistry) {
    for (const name of ENS_TLD) {
      await execute(
        'ENSRegistry',
        {
          from,
          log: true,
        },
        'setSubnodeOwner',
        constants.HashZero,
        utils.id(name),
        from,
      );

      await execute(
        'ENSRegistry',
        {
          from,
          log: true,
        },
        'setOwner',
        utils.namehash(name),
        ensController.address,
      );

      await execute(
        'ENSController',
        {
          from,
          log: true,
        },
        'addNode',
        utils.namehash(name),
      );
    }
  }
};

func.tags = ['setup', 'ens'];
func.runAtTheEnd = true;

module.exports = func;
