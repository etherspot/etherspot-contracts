/* eslint-env node, mocha */

const expect = require('expect');
const BN = require('bn.js');
const {
  buildTypedData,
  randomAddress,
  randomBytes32,
  signTypedData,
  logGasUsage,
  calcCost,
  getBalance,
  getNow,
  increaseTime,
  computeCreate2Address,
  hashTypedData,
} = require('../utils');
const {
  TYPED_DATA_SALT,
  TYPED_DATA_DOMAIN_HASH,
  ZERO_ADDRESS,
} = require('../constants');

const Account = artifacts.require('Account');
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
  const depositWithdrawalLockPeriod = new BN(3); // 3 sec.

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
      depositWithdrawalLockPeriod,
      [guardian],
      gateway,
      TYPED_DATA_DOMAIN_HASH,
      TYPED_DATA_SALT,
    );
  });

  context('deployDepositAccount()', () => {
    const owner = randomAddress();
    const from = addresses.pop();

    let ownerDeposit;

    before(async () => {
      ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner);
    });

    it('expect to deploy owner account', async () => {
      const output = await paymentRegistry.deployDepositAccount(owner, {
        from, // everyone can deploy deposit account
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('DepositAccountDeployed');
      expect(log.args.depositAccount)
        .toBe(ownerDeposit);
      expect(log.args.owner)
        .toBe(owner);
    });
  });

  context('withdrawDeposit()', () => {
    const owner = addresses.pop();
    const amount = 100;

    let ownerDeposit;

    before(async () => {
      ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner);

      await sendTransaction({
        from: owner,
        to: ownerDeposit,
        value: amount,
      });
    });

    it('expect to request deposit withdrawal', async () => {
      const now = getNow();
      const output = await paymentRegistry.withdrawDeposit(ZERO_ADDRESS, {
        from: owner,
      });

      logGasUsage(output);

      const { logs } = output;

      expect(logs[0].event)
        .toBe('DepositAccountDeployed');
      expect(logs[0].args.depositAccount)
        .toBe(ownerDeposit);
      expect(logs[0].args.owner)
        .toBe(owner);

      expect(logs[1].event)
        .toBe('DepositWithdrawalRequested');
      expect(logs[1].args.depositAccount)
        .toBe(ownerDeposit);
      expect(logs[1].args.owner)
        .toBe(owner);
      expect(logs[1].args.token)
        .toBeZeroAddress();
      expect(logs[1].args.lockedUntil)
        .toBeGreaterThanOrEqualBN(now);
    });

    context('# before lockedUntil time', () => {
      it('expect to re-request deposit withdrawal', async () => {
        const now = getNow();
        const output = await paymentRegistry.withdrawDeposit(ZERO_ADDRESS, {
          from: owner,
        });

        logGasUsage(output);

        const { logs } = output;

        expect(logs[0].event)
          .toBe('DepositWithdrawalRequested');
        expect(logs[0].args.depositAccount)
          .toBe(ownerDeposit);
        expect(logs[0].args.owner)
          .toBe(owner);
        expect(logs[0].args.token)
          .toBeZeroAddress();
        expect(logs[0].args.lockedUntil)
          .toBeGreaterThanOrEqualBN(now);
      });
    });

    context('# after lockedUntil time', () => {
      before(async () => {
        await increaseTime(depositWithdrawalLockPeriod);
      });

      it('expect withdraw deposit after lockedUntil time', async () => {
        const ownerBalance = await getBalance(owner);

        const output = await paymentRegistry.withdrawDeposit(ZERO_ADDRESS, {
          from: owner,
        });

        logGasUsage(output);

        const cost = calcCost(output);

        const { logs: [log] } = output;

        expect(log.event)
          .toBe('DepositWithdrawn');
        expect(log.args.depositAccount)
          .toBe(ownerDeposit);
        expect(log.args.owner)
          .toBe(owner);
        expect(log.args.token)
          .toBeZeroAddress();
        expect(log.args.amount)
          .toBeBN(amount);

        await expect(getBalance(owner))
          .resolves
          .toBeBN(ownerBalance.sub(cost)
            .addn(amount));
      });
    });
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

  context('computeDepositAccountAddress()', () => {
    const owner = randomAddress();

    it('expect to return correct deposit address', async () => {
      await expect(paymentRegistry.computeDepositAccountAddress(owner))
        .resolves
        .toBe(
          computeCreate2Address(paymentRegistry.address, owner, Account.bytecode),
        );
    });
  });

  context('isDepositAccountDeployed()', () => {
    const owner = randomAddress();

    before(async () => {
      await paymentRegistry.deployDepositAccount(owner);
    });

    it('expect to return true when deposit is deployed', async () => {
      await expect(paymentRegistry.isDepositAccountDeployed(owner))
        .resolves
        .toBeTruthy();
    });

    it('expect to return false when deposit is not deployed', async () => {
      await expect(paymentRegistry.isDepositAccountDeployed(randomAddress()))
        .resolves
        .toBeFalsy();
    });
  });

  context('getDepositWithdrawalLockedUntil()', () => {
    const owner = addresses.pop();

    before(async () => {
      await paymentRegistry.withdrawDeposit(ZERO_ADDRESS, {
        from: owner,
      });
    });

    it('expect to return positive lockedUntil time when withdraw was requested', async () => {
      await expect(paymentRegistry.getDepositWithdrawalLockedUntil(owner, ZERO_ADDRESS))
        .resolves
        .toBeGreaterThanBN(0);
    });

    it('expect to return zero lockedUntil time when withdraw wasn\'t requested', async () => {
      await expect(paymentRegistry.getDepositWithdrawalLockedUntil(randomAddress(), ZERO_ADDRESS))
        .resolves
        .toBeBN(0);
    });
  });

  context('getPaymentChannelCommittedAmount()', () => {
    const sender = addresses.pop();
    const recipient = addresses.pop();
    const uid = randomBytes32();
    const channelHash = soliditySha3(sender, recipient, ZERO_ADDRESS, uid);
    const amount = 1000;

    before(async () => {
      const blockNumber = 0;
      const senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender);
      await sendTransaction({
        from: sender,
        to: senderDeposit,
        value: amount,
      });

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

      await paymentRegistry.commitPaymentChannelAndWithdraw(
        sender,
        ZERO_ADDRESS,
        uid,
        blockNumber,
        amount,
        senderSignature,
        guardianSignature, {
          from: recipient,
        },
      );
    });

    it('expect to return correct amount from committed channel', async () => {
      await expect(paymentRegistry.getPaymentChannelCommittedAmount(channelHash))
        .resolves
        .toBeBN(amount);
    });

    it('expect to return zero when channel is not committed', async () => {
      const channelHash = soliditySha3(sender, randomAddress(), ZERO_ADDRESS, uid);
      await expect(paymentRegistry.getPaymentChannelCommittedAmount(channelHash))
        .resolves
        .toBeBN(0);
    });
  });

  context('computePaymentChannelHash()', () => {
    it('expect to return correct hash', async () => {
      const sender = randomAddress();
      const recipient = randomAddress();
      const token = randomAddress();
      const uid = randomBytes32();

      await expect(paymentRegistry.computePaymentChannelHash(sender, recipient, token, uid))
        .resolves
        .toBe(soliditySha3(sender, recipient, token, uid));
    });
  });

  context('hashPaymentChannelCommit()', () => {
    it('expect to return correct hash', async () => {
      const sender = randomAddress();
      const recipient = randomAddress();
      const token = randomAddress();
      const uid = randomBytes32();
      const blockNumber = 1;
      const amount = 100;

      const typedData = buildPaymentChannelCommitTypedData(
        sender,
        recipient,
        token,
        uid,
        blockNumber,
        amount,
      );

      await expect(paymentRegistry.hashPaymentChannelCommit({
        sender,
        recipient,
        token,
        uid,
        blockNumber,
        amount,
      }))
        .resolves
        .toBe(hashTypedData(typedData));
    });
  });
});
