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

  if (ensRegistry && ens && Array.isArray(ens.internalTopLevelDomains)) {
    for (const name of ens.internalTopLevelDomains) {
      const nameHash = utils.namehash(name);
      const labelHash = utils.id(name);

      let ensOwner = await read('ENSRegistry', 'owner', nameHash);

      if (ensOwner === constants.AddressZero) {
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

      const {
        nodeAddr,
        nodeOwner,
      }: {
        nodeAddr: string;
        nodeOwner: string;
      } = await read('ENSController', 'getNode', nameHash);

      if (nodeOwner === constants.HashZero) {
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

      ensOwner = await read('ENSRegistry', 'owner', nameHash);

      if (ensOwner !== ensController.address) {
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

      if (nodeAddr === constants.HashZero) {
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
