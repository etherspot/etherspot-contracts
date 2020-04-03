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
    // account registry
    case 'account-registry': {
      logger.info(`contract ${ContractNames.AccountRegistry}`);

      const [contract] = await getContracts(ContractNames.AccountRegistry);
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

      let nonce = 0;

      processEvents(
        await executeRequest(
          contract.methods.addAccountOwner(
            account,
            nonce,
            owner.address,
          ), {
            from: saltOwner,
          },
        ),
      );

      nonce += 1;

      processEvents(
        await executeRequest(
          contract.methods.removeAccountOwner(
            account,
            nonce,
            owner.address,
          ), {
            from: saltOwner,
          },
        ),
      );

      nonce += 1;

      processEvents(
        await executeRequest(
          contract.methods.executeAccountTransaction(
            account,
            nonce,
            to.address,
            10,
            '0x01',
          ), {
            from: saltOwner,
          },
        ),
      );

      nonce += 1;

      processEvents(
        await executeRequest(
          contract.methods.refundAccountCall(
            account,
            nonce,
            ZERO_ADDRESS,
            10,
          ), {
            from: saltOwner,
          },
        ),
      );
      break;
    }

    // message registry
    case 'message-registry': {
      logger.info(`contract ${ContractNames.MessageRegistry}`);

      const [contract] = await getContracts(ContractNames.MessageRegistry);

      {
        const messageHash = utils.randomHex(32);

        processEvents(
          await executeRequest(
            contract.methods.addMessageHash(messageHash),
          ),
        );
      }

      {
        const messageHash = utils.randomHex(32);

        processEvents(
          await executeRequest(
            contract.methods.addMessageHash(messageHash),
          ),
        );

        processEvents(
          await executeRequest(
            contract.methods.removeMessageHash(messageHash),
          ),
        );
      }
      break;
    }

    default:
  }
}

module.exports = main;
