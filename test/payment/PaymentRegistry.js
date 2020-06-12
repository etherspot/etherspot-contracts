/* eslint-env node, mocha */

const {
  buildTypedData,
  randomBytes32,
  signTypedData,
} = require('../utils');
const {
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_HASH,
  ZERO_ADDRESS,
} = require('../constants');

const PaymentRegistry = artifacts.require('PaymentRegistry');

contract.only('PaymentRegistry', (addresses) => {
  const {
    eth: {
      sendTransaction,
    },
  } = web3;
  const guardian = addresses[0];
  const sender = addresses[1];
  const recipient = addresses[2];
  let paymentRegistry;

  before(async () => {
    paymentRegistry = await PaymentRegistry.new();

    await paymentRegistry.initialize(
      ZERO_ADDRESS,
      ZERO_ADDRESS,
      ZERO_ADDRESS,
      0,
      [],
      ZERO_ADDRESS,
      TYPED_DATA_DOMAIN_HASH,
      TYPED_DATA_SALT,
    );
  });

  context('commitPaymentChannelAndWithdraw()', () => {
    it('expect to commit channel and withdraw', async () => {
      const senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender);
      const amount = '0x01';
      const blockNumber = 0;
      const uid = randomBytes32();
      const token = ZERO_ADDRESS;

      await sendTransaction({
        from: sender,
        to: senderDeposit,
        value: amount,
      });

      const typedData = buildTypedData(
        paymentRegistry.address,
        'PaymentChannelCommit', [
          {
            name: 'sender',
            type: 'address',
          },
          {
            name: 'recipient',
            type: 'address',
          },
          {
            name: 'token',
            type: 'address',
          },
          {
            name: 'uid',
            type: 'bytes32',
          },
          {
            name: 'blockNumber',
            type: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
        ], {
          sender,
          recipient,
          token,
          uid,
          blockNumber,
          amount,
        },
      );

      const senderSignature = await signTypedData(typedData, sender);
      const guardianSignature = await signTypedData(typedData, guardian);

      await paymentRegistry.commitPaymentChannelAndWithdraw(
        sender,
        token,
        uid,
        0,
        amount,
        senderSignature,
        guardianSignature, {
          from: recipient,
        },
      );
    });
  });
});
