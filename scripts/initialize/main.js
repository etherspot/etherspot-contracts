const { hash: hashName } = require('eth-ens-namehash');
const {
  TYPED_DATA_DOMAIN_SALT,
  ContractNames,
  getContractTypedDataDomainName,
} = require('../..');
const {
  logger,
  getDefaultAccount,
  getNetworkId,
  getContracts,
  processEvents,
  executeRequest,
  utils,
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
  ] = getContracts(
    networkId,
    ContractNames.AccountOwnerRegistry,
    ContractNames.AccountProofRegistry,
    ContractNames.ENSController,
    ContractNames.ENSRegistry,
    ContractNames.Gateway,
    ContractNames.PaymentRegistry,
    ContractNames.PersonalAccountRegistry,
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
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.Gateway),
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
            utils.soliditySha3(
              getContractTypedDataDomainName(ContractNames.ENSController),
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );

      // add pillar.dev ens name
      if (networkId !== 1) { // testnets only
        processEvents(
          await executeRequest(
            ensRegistry.methods.setSubnodeOwner(
              '0x',
              utils.soliditySha3('dev'),
              sender,
            ),
          ),
        );

        processEvents(
          await executeRequest(
            ensRegistry.methods.setSubnodeOwner(
              hashName('dev'),
              utils.soliditySha3('pillar'),
              ensController.address,
            ),
          ),
        );

        processEvents(
          await executeRequest(
            ensController.methods.addNode(hashName('pillar.dev')),
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
}

module.exports = main;
