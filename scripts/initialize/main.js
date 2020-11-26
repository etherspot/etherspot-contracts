const { hash: hashName } = require('eth-ens-namehash');
const {
  TYPED_DATA_DOMAIN_SALT,
  ContractNames,
  getContractTypedDataDomainName,
  getContractTypedDataDomainVersion,
} = require('../..');
const {
  logger,
  getDefaultAccount,
  getNetworkId,
  getContracts,
  processEvents,
  executeRequest,
  sha3String,
  getEnvAsArray,
} = require('../shared');

async function main() {
  const sender = await getDefaultAccount();
  const networkId = await getNetworkId();

  const [
    accountOwnerRegistry,
    accountProofRegistry,
    ensController,
    ensRegistry,
    gateway,
    paymentRegistry,
    personalAccountRegistry,
    wrappedWeiToken,
  ] = getContracts(
    networkId,
    ContractNames.AccountOwnerRegistry,
    ContractNames.AccountProofRegistry,
    ContractNames.ENSController,
    ContractNames.ENSRegistry,
    ContractNames.Gateway,
    ContractNames.PaymentRegistry,
    ContractNames.PersonalAccountRegistry,
    ContractNames.WrappedWeiToken,
  );

  // Gateway
  {
    logger.info(`contract ${ContractNames.Gateway}`);

    if (await gateway.methods.isInitialized()
      .call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          gateway.methods.initialize(
            accountOwnerRegistry.address,
            personalAccountRegistry.address,
            sha3String(
              getContractTypedDataDomainName(ContractNames.Gateway),
            ),
            sha3String(
              getContractTypedDataDomainVersion(ContractNames.Gateway),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // ENSController
  {
    logger.info(`contract ${ContractNames.ENSController}`);

    if (await ensController.methods.isInitialized()
      .call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          ensController.methods.initialize(
            ensRegistry.address,
            [],
            gateway.address,
            sha3String(
              getContractTypedDataDomainName(ContractNames.ENSController),
            ),
            sha3String(
              getContractTypedDataDomainVersion(ContractNames.ENSController),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );

      // add pillar ens name
      if (networkId !== 1) {
        processEvents(
          await executeRequest(
            ensRegistry.methods.setSubnodeOwner(
              '0x',
              sha3String('pillar'),
              sender,
            ),
          ),
        );

        processEvents(
          await executeRequest(
            ensRegistry.methods.setOwner(
              hashName('pillar'),
              ensController.address,
            ),
          ),
        );

        processEvents(
          await executeRequest(
            ensController.methods.addNode(hashName('pillar')),
          ),
        );
      }
    }
  }

  // PaymentRegistry
  {
    logger.info(`contract ${ContractNames.PaymentRegistry}`);

    if (await paymentRegistry.methods.isInitialized()
      .call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          paymentRegistry.methods.initialize(
            accountOwnerRegistry.address,
            accountProofRegistry.address,
            personalAccountRegistry.address,
            0,
            [],
            gateway.address,
            sha3String(
              getContractTypedDataDomainName(ContractNames.PaymentRegistry),
            ),
            sha3String(
              getContractTypedDataDomainVersion(ContractNames.PaymentRegistry),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // PersonalAccountRegistry
  {
    logger.info(`contract ${ContractNames.PersonalAccountRegistry}`);

    if (await personalAccountRegistry.methods.isInitialized()
      .call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          personalAccountRegistry.methods.initialize(
            gateway.address,
          ),
        ),
      );
    }
  }

  // WrappedWeiToken
  {
    logger.info(`contract ${ContractNames.WrappedWeiToken}`);

    if (await wrappedWeiToken.methods.isInitialized()
      .call()) {
      logger.info('already initialized');
    } else {
      const consumers = getEnvAsArray('WRAPPED_WEI_TOKEN_CONSUMERS');

      processEvents(
        await executeRequest(
          wrappedWeiToken.methods.initialize(
            consumers,
          ),
        ),
      );
    }
  }
}

module.exports = main;
