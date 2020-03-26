const { ContractNames } = require('../..');
const {
  ZERO_ADDRESS,
  logger,
  getContracts,
  sendTransaction,
  executeRequest,
  createRandomWallet,
  processEvents,
} = require('../shared');

async function main() {
  // account registry
  {
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
  }
}

module.exports = main;
