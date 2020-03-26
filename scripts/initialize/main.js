const { ContractNames } = require('../..');
const {
  logger,
  getContracts,
  processEvents,
  executeRequest,
} = require('../shared');

async function main() {
  const [
    accountRegistry,
    metaTxRelay,
    paymentRegistry,
    signedMessageRegistry,
    signatureValidator,
  ] = await getContracts(
    ContractNames.AccountRegistry,
    ContractNames.MetaTxRelay,
    ContractNames.PaymentRegistry,
    ContractNames.SignedMessageRegistry,
    ContractNames.SignatureValidator,
  );

  // account registry
  {
    logger.info(`contract ${ContractNames.AccountRegistry}`);

    if (await accountRegistry.methods.isInitialized().call()) {
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

  // signature validator
  {
    logger.info(`contract ${ContractNames.SignatureValidator}`);

    if (await signatureValidator.methods.isInitialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          signatureValidator.methods.initialize(
            accountRegistry.address,
            signedMessageRegistry.address,
          ),
        ),
      );
    }
  }

  // payment registry
  {
    logger.info(`contract ${ContractNames.PaymentRegistry}`);

    if (await paymentRegistry.methods.isInitialized().call()) {
      logger.info('already initialized');
    } else {
      processEvents(
        await executeRequest(
          paymentRegistry.methods.initialize(
            0,
            signatureValidator.address,
          ),
        ),
      );
    }
  }
}

module.exports = main;
