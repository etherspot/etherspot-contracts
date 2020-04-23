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
    accountRegistry,
    messageHashRegistry,
    metaTxRelay,
    paymentRegistry,
    signatureValidator,
  ] = await getContracts(
    ContractNames.AccountRegistry,
    ContractNames.MessageHashRegistry,
    ContractNames.MetaTxRelay,
    ContractNames.PaymentRegistry,
    ContractNames.SignatureValidator,
  );

  // AccountRegistry
  {
    logger.info(`contract ${ContractNames.AccountRegistry}`);

    if (await accountRegistry.methods.initialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          accountRegistry.methods.initialize(
            metaTxRelay.address,
          ),
        ),
      );
    }
  }

  // MessageHashRegistry
  {
    logger.info(`contract ${ContractNames.MessageHashRegistry}`);

    if (await messageHashRegistry.methods.initialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          messageHashRegistry.methods.initialize(
            metaTxRelay.address,
          ),
        ),
      );
    }
  }

  // MetaTxRelay
  {
    logger.info(`contract ${ContractNames.MetaTxRelay}`);

    if (await metaTxRelay.methods.initialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          metaTxRelay.methods.initialize(
            signatureValidator.address,
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.MetaTxRelay),
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

    if (await paymentRegistry.methods.initialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          paymentRegistry.methods.initialize(
            0,
            signatureValidator.address,
            metaTxRelay.address,
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.PaymentRegistry),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // SignatureValidator
  {
    logger.info(`contract ${ContractNames.SignatureValidator}`);

    if (await signatureValidator.methods.initialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          signatureValidator.methods.initialize(
            accountRegistry.address,
            messageHashRegistry.address,
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.SignatureValidator),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }
}

module.exports = main;
