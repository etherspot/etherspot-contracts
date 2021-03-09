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

  const ensController = await get('ENSController');
  const gateway = await get('Gateway');

  let ensRegistryAddress = knownContracts?.[name]?.ENSRegistry;
  let ensRegistry: Deployment;

  if (!ensRegistryAddress) {
    ensRegistry = await get('ENSRegistry');
    ({ address: ensRegistryAddress } = ensRegistry);
  }

  if (await read('ENSController', 'isInitialized')) {
    log('ENSController already initialized');
  } else {
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
  }

  if (await read('ENSHelper', 'isInitialized')) {
    log('ENSHelper already initialized');
  } else {
    await execute(
      'ENSHelper',
      {
        from,
        log: true,
      },
      'initialize',
      ensRegistryAddress,
    );
  }

  if (ensRegistry && ens && Array.isArray(ens.internalTopLevelDomains)) {
    if (await read('ENSReverseRegistrar', 'isInitialized')) {
      log('ENSReverseRegistrar already initialized');
    } else {
      await execute(
        'ENSReverseRegistrar',
        {
          from,
          log: true,
        },
        'initialize',
        ensRegistry.address,
        ensController.address,
      );
    }

    // adds `addr.reverse` name to reverse registrar
    {
      const ensReverseRegistrar = await get('ENSReverseRegistrar');
      const tld = 'reverse';
      const label = 'addr';
      const name = `${label}.${tld}`;

      let owner = await read('ENSRegistry', 'owner', utils.namehash(tld));

      if (owner === constants.AddressZero) {
        await execute(
          'ENSRegistry',
          {
            from,
            log: true,
          },
          'setSubnodeOwner',
          constants.HashZero,
          utils.id(tld),
          from,
        );
      }

      owner = await read('ENSRegistry', 'owner', utils.namehash(name));

      if (owner === constants.AddressZero) {
        await execute(
          'ENSRegistry',
          {
            from,
            log: true,
          },
          'setSubnodeOwner',
          utils.namehash(tld),
          utils.id(label),
          ensReverseRegistrar.address,
        );
      }
    }

    // adds and verifies controller root nodes

    for (const name of ens.internalTopLevelDomains) {
      const nameHash = utils.namehash(name);
      const labelHash = utils.id(name);

      let owner: string = await read('ENSRegistry', 'owner', nameHash);

      if (owner === constants.AddressZero) {
        await execute(
          'ENSRegistry',
          {
            from,
            log: true,
          },
          'setSubnodeOwner',
          constants.HashZero,
          labelHash,
          from,
        );
      }

      const nodeOwner: string = await read(
        'ENSController',
        'nodeOwners',
        nameHash,
      );

      if (nodeOwner === constants.AddressZero) {
        await execute(
          'ENSController',
          {
            from,
            log: true,
          },
          'submitNode',
          nameHash,
        );
      }

      owner = await read('ENSRegistry', 'owner', nameHash);

      if (owner === from) {
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
      }

      const addr = await read('ENSController', 'addr(bytes32)', nameHash);

      if (addr === constants.AddressZero) {
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
  }
};

func.tags = ['setup', 'ens'];

module.exports = func;
