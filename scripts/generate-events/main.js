const { ContractNames } = require('../..');
const {
  ZERO_ADDRESS,
  logger,
  utils,
  getContracts,
  sendTransaction,
  executeRequest,
  createRandomWallet,
  processEvents,
} = require('../shared');

async function main() {
  switch (process.argv[2]) {
    // AccountOwnerRegistry
    case ContractNames.AccountOwnerRegistry: {
      logger.info(`contract ${ContractNames.AccountOwnerRegistry}`);

      const [contract] = await getContracts(ContractNames.AccountOwnerRegistry);

      {
        const owner = createRandomWallet().address;

        processEvents(
          await executeRequest(
            contract.methods.addAccountOwner(owner),
          ),
        );
      }

      {
        const owner = createRandomWallet().address;

        processEvents(
          await executeRequest(
            contract.methods.addAccountOwner(owner),
          ),
        );

        processEvents(
          await executeRequest(
            contract.methods.removeAccountOwner(owner),
          ),
        );
      }
      break;
    }

    // AccountProofRegistry
    case ContractNames.AccountProofRegistry: {
      logger.info(`contract ${ContractNames.AccountProofRegistry}`);

      const [contract] = await getContracts(ContractNames.AccountProofRegistry);

      {
        const hash = utils.randomHex(32);

        processEvents(
          await executeRequest(
            contract.methods.addAccountProof(hash),
          ),
        );
      }

      {
        const hash = utils.randomHex(32);

        processEvents(
          await executeRequest(
            contract.methods.addAccountProof(hash),
          ),
        );

        processEvents(
          await executeRequest(
            contract.methods.removeAccountProof(hash),
          ),
        );
      }
      break;
    }

    // PersonalAccountRegistry
    case ContractNames.PersonalAccountRegistry: {
      logger.info(`contract ${ContractNames.PersonalAccountRegistry}`);

      const [contract] = await getContracts(ContractNames.PersonalAccountRegistry);
      const saltOwner = createRandomWallet(true);
      const owner = createRandomWallet();
      const to = createRandomWallet();

      const account = await contract.methods.computeAccountAddress(
        saltOwner.address,
      ).call();

      await sendTransaction({
        to: saltOwner,
        value: '0.5',
      });

      await sendTransaction({
        to: account,
        value: '0.5',
      });

      processEvents(
        await executeRequest(
          contract.methods.addAccountOwner(
            account,
            owner.address,
          ), {
            from: saltOwner,
          },
        ),
      );

      processEvents(
        await executeRequest(
          contract.methods.removeAccountOwner(
            account,
            owner.address,
          ), {
            from: saltOwner,
          },
        ),
      );

      processEvents(
        await executeRequest(
          contract.methods.executeAccountTransaction(
            account,
            to.address,
            10,
            '0x01',
          ), {
            from: saltOwner,
          },
        ),
      );

      processEvents(
        await executeRequest(
          contract.methods.refundAccountCall(
            account,
            ZERO_ADDRESS,
            10,
          ), {
            from: saltOwner,
          },
        ),
      );
      break;
    }

    default:
  }
}

module.exports = main;
