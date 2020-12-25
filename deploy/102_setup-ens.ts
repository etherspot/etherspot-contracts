import { DeployFunction, Deployment } from 'hardhat-deploy/types';
import { constants, utils } from 'ethers';

const func: DeployFunction = async hre => {
  const {
    deployments: { get, log, execute, read },
    network: { name },
    config: { typedData, ens, knownContracts },
    getNamedAccounts,
  } = hre;
  const { from } = await getNamedAccounts();

  if (await read('ENSController', 'isInitialized')) {
    log('ENSController already initialized');
    return;
  }

  const ensController = await get('ENSController');
  const gateway = await get('Gateway');

  let ensRegistryAddress = knownContracts?.[name]?.ENSRegistry;
  let ensRegistry: Deployment;

  if (!ensRegistryAddress) {
    ensRegistry = await get('ENSRegistry');
    ({ address: ensRegistryAddress } = ensRegistry);
  }

  await execute(
    'ENSController',
    {
      from,
      log: true,
    },
    'initialize',
    ensRegistryAddress,
    [],
    gateway.address,
    utils.id(typedData.domains.ENSController.name),
    utils.id(typedData.domains.ENSController.version),
    typedData.domainSalt,
  );

  if (ensRegistry && ens && Array.isArray(ens.internalTopLevelDomains)) {
    for (const name of ens.internalTopLevelDomains) {
      const nameHash = utils.id(name);

      await execute(
        'ENSRegistry',
        {
          from,
          log: true,
        },
        'setSubnodeOwner',
        constants.HashZero,
        nameHash,
        from,
      );

      await execute(
        'ENSController',
        {
          from,
          log: true,
        },
        'submitNode',
        nameHash,
      );

      await execute(
        'ENSRegistry',
        {
          from,
          log: true,
        },
        'setOwner',
        nameHash,
        ensController.address,
      );

      await execute(
        'ENSController',
        {
          from,
          log: true,
        },
        'verifyNode',
        nameHash,
      );
    }
  }
};

func.tags = ['setup', 'ens'];

module.exports = func;
