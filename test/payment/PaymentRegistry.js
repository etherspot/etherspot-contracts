/* eslint-env node, mocha */

const expect = require('expect');
const {
  buildTypedData,
  randomBytes32,
  signTypedData,
  logGasUsage,
  calcCost,
  getBalance,
} = require('../utils');
const {
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_HASH,
  ZERO_ADDRESS,
} = require('../constants');

const PaymentRegistry = artifacts.require('PaymentRegistry');
const WrappedWeiToken = artifacts.require('WrappedWeiToken');

contract('PaymentRegistry', (addresses) => {
  const {
    eth: {
      sendTransaction,
    },
    utils: {
      soliditySha3,
    },
  } = web3;

  const gateway = addresses.pop();
  const guardian = addresses.pop();

  /**
   * @type Contract
   */
  let paymentRegistry;

  /**
   * @type Contract
   */
  let token;

  const buildPaymentChannelCommitTypedData = (
    sender,
    recipient,
    token,
    uid,
    blockNumber,
    amount,
  ) => buildTypedData(
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

  before(async () => {
    paymentRegistry = await PaymentRegistry.new();
    token = await WrappedWeiToken.new();

    await paymentRegistry.initialize(
      ZERO_ADDRESS,
      ZERO_ADDRESS,
      ZERO_ADDRESS,
      0,
      [guardian],
      gateway,
      TYPED_DATA_DOMAIN_HASH,
      TYPED_DATA_SALT,
    );
  });

  context('commitPaymentChannelAndWithdraw()', () => {
    const blockNumber = 0;
    const sender = addresses.pop();
    const recipient = addresses.pop();
    let senderDeposit;

    before(async () => {
      senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender);
    });

    context('# using wei', () => {
      const uid = randomBytes32();
      const channelHash = soliditySha3(sender, recipient, ZERO_ADDRESS, uid);
      const amount1 = 50;
      const amount2 = 100;

      before(async () => {
        await sendTransaction({
          from: sender,
          to: senderDeposit,
          value: amount2,
        });
      });

      it('expect to commit channel and withdraw - #1 commit', async () => {
        const recipientBalance = await getBalance(recipient);
        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          ZERO_ADDRESS,
          uid,
          blockNumber,
          amount1,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          ZERO_ADDRESS,
          uid,
          0,
          amount1,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsage(output);

        const { logs } = output;

        expect(logs[0].event)
          .toBe('DepositAccountDeployed');
        expect(logs[0].args.depositAccount)
          .toBe(senderDeposit);
        expect(logs[0].args.owner)
          .toBe(sender);

        expect(logs[1].event)
          .toBe('PaymentChannelCommitted');
        expect(logs[1].args.hash)
          .toBe(channelHash);
        expect(logs[1].args.sender)
          .toBe(sender);
        expect(logs[1].args.recipient)
          .toBe(recipient);
        expect(logs[1].args.token)
          .toBeZeroAddress();
        expect(logs[1].args.uid)
          .toBe(uid);

        expect(logs[2].event)
          .toBe('PaymentWithdrawn');
        expect(logs[2].args.channelHash)
          .toBe(channelHash);
        expect(logs[2].args.value)
          .toBeBN(amount1);

        const cost = calcCost(output);

        await expect(getBalance(recipient))
          .resolves
          .toBeBN(recipientBalance.sub(cost)
            .addn(amount1));
      });

      it('expect to commit channel and withdraw - #2 commit', async () => {
        const recipientBalance = await getBalance(recipient);
        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          ZERO_ADDRESS,
          uid,
          blockNumber,
          amount2,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          ZERO_ADDRESS,
          uid,
          0,
          amount2,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsage(output);

        const { logs } = output;

        expect(logs[1].event)
          .toBe('PaymentWithdrawn');
        expect(logs[1].args.channelHash)
          .toBe(channelHash);
        expect(logs[1].args.value)
          .toBeBN(amount2 - amount1);

        const cost = calcCost(output);

        await expect(getBalance(recipient))
          .resolves
          .toBeBN(recipientBalance.sub(cost)
            .addn(amount2 - amount1));
      });

      it('expect to revert when channel was committed', async () => {
        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          ZERO_ADDRESS,
          uid,
          blockNumber,
          amount2,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        await expect(paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          ZERO_ADDRESS,
          uid,
          0,
          amount2,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        ))
          .rejects
          .toThrow(/revert/);
      });
    });

    context('# using token', () => {
      const amount = 200;

      before(async () => {
        await token.sendTransaction({
          from: sender,
          value: amount,
        });

        await token.transfer(senderDeposit, amount, {
          from: sender,
        });
      });

      it('expect to commit channel and withdraw', async () => {
        const uid = randomBytes32();
        const channelHash = soliditySha3(sender, recipient, token.address, uid);

        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          token.address,
          uid,
          blockNumber,
          amount,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          token.address,
          uid,
          0,
          amount,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsage(output);

        const { logs } = output;

        expect(logs[0].event)
          .toBe('PaymentChannelCommitted');
        expect(logs[0].args.hash)
          .toBe(channelHash);
        expect(logs[0].args.token)
          .toBe(token.address);

        expect(logs[1].event)
          .toBe('PaymentWithdrawn');
        expect(logs[1].args.channelHash)
          .toBe(channelHash);

        await expect(token.balanceOf(recipient))
          .resolves
          .toBeBN(amount);
      });
    });
  });

  context('commitPaymentChannelAndDeposit()', () => {
    const blockNumber = 0;
    const sender = addresses.pop();
    const recipient = addresses.pop();
    const uid = randomBytes32();
    let senderDeposit;
    let recipientDeposit;

    before(async () => {
      senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender);
      recipientDeposit = await paymentRegistry.computeDepositAccountAddress(recipient);
    });

    context('# using wei', () => {
      const amount = 200;

      before(async () => {
        await sendTransaction({
          from: sender,
          to: senderDeposit,
          value: amount,
        });
      });

      it('expect to commit channel and deposit', async () => {
        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          ZERO_ADDRESS,
          uid,
          blockNumber,
          amount,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndDeposit(
          sender,
          ZERO_ADDRESS,
          uid,
          0,
          amount,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsage(output);

        const { logs } = output;

        expect(logs[2].event)
          .toBe('PaymentDeposited');
        expect(logs[2].args.value)
          .toBeBN(amount);

        await expect(getBalance(recipientDeposit))
          .resolves
          .toBeBN(amount);
      });
    });

    context('# using token', () => {
      const amount = 200;

      before(async () => {
        await token.sendTransaction({
          from: sender,
          value: amount,
        });

        await token.transfer(senderDeposit, amount, {
          from: sender,
        });
      });

      it('expect to commit channel and deposit', async () => {
        const uid = randomBytes32();

        const typedData = buildPaymentChannelCommitTypedData(
          sender,
          recipient,
          token.address,
          uid,
          blockNumber,
          amount,
        );

        const senderSignature = await signTypedData(typedData, sender);
        const guardianSignature = await signTypedData(typedData, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndDeposit(
          sender,
          token.address,
          uid,
          0,
          amount,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsage(output);

        const { logs } = output;

        expect(logs[1].event)
          .toBe('PaymentDeposited');
        expect(logs[1].args.value)
          .toBeBN(amount);

        await expect(token.balanceOf(recipientDeposit))
          .resolves
          .toBeBN(amount);
      });
    });
  });

  context('commitPaymentChannelAndSplit()', () => {
    const blockNumber = 0;
    const sender = addresses.pop();
    const recipient = addresses.pop();
    const uid = randomBytes32();
    const amount = 200;
    const depositPaymentValue = 50;

    before(async () => {
      const senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender);

      await sendTransaction({
        from: sender,
        to: senderDeposit,
        value: amount,
      });
    });


    it('expect to commit channel and split', async () => {
      const typedData = buildPaymentChannelCommitTypedData(
        sender,
        recipient,
        ZERO_ADDRESS,
        uid,
        blockNumber,
        amount,
      );

      const senderSignature = await signTypedData(typedData, sender);
      const guardianSignature = await signTypedData(typedData, guardian);

      const output = await paymentRegistry.commitPaymentChannelAndSplit(
        sender,
        ZERO_ADDRESS,
        uid,
        0,
        amount,
        depositPaymentValue,
        senderSignature,
        guardianSignature, {
          from: recipient,
        },
      );

      logGasUsage(output);

      const { logs } = output;

      expect(logs[2].event)
        .toBe('PaymentSplitted');
      expect(logs[2].args.totalValue)
        .toBeBN(amount);
      expect(logs[2].args.depositValue)
        .toBeBN(depositPaymentValue);
    });
  });
});
