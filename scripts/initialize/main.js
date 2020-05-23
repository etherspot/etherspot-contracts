const {
  TYPED_DATA_DOMAIN_SALT,
  ContractNames,
  getContractTypedDataDomainName,
} = require('../..');
const {
  logger,
  getContracts,
  processEvents,
  executeRequest,
  utils,
} = require('../shared');

async function main() {
  const [
    accountOwnerRegistry,
    accountProofRegistry,
    gateway,
    paymentRegistry,
    personalAccountRegistry,
  ] = await getContracts(
    ContractNames.AccountOwnerRegistry,
    ContractNames.AccountProofRegistry,
    ContractNames.Gateway,
    ContractNames.PaymentRegistry,
    ContractNames.PersonalAccountRegistry,
  );

  // Gateway
  {
    logger.info(`contract ${ContractNames.Gateway}`);

    if (await gateway.methods.isInitialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          gateway.methods.initialize(
            accountOwnerRegistry.address,
            personalAccountRegistry.address,
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.Gateway),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // PaymentRegistry
  {
    logger.info(`contract ${ContractNames.PaymentRegistry}`);

    if (await paymentRegistry.methods.isInitialized().call()) {
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
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.PaymentRegistry),
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

    if (await personalAccountRegistry.methods.isInitialized().call()) {
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
}

module.exports = main;
