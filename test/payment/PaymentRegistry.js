/* eslint-env node, mocha */

const expect = require('expect');
const { CHAIN_ID, ZERO_ADDRESS } = require('../constants');
const {
  computeCreate2Address,
  randomAddress,
  randomBytes32,
  logGasUsed,
} = require('../utils');

const Account = artifacts.require('ControlledAccount');
const AccountRegistry = artifacts.require('AccountRegistry');
const PaymentRegistry = artifacts.require('PaymentRegistry');
const SignatureValidator = artifacts.require('SignatureValidator');
const SignedMessageRegistry = artifacts.require('SignedMessageRegistry');

contract.only('PaymentRegistry', (addresses) => {
  const {
    eth: {
      sign,
      sendTransaction,
    },
    utils: {
      soliditySha3,
    },
  } = web3;

  const depositWithdrawalLockPeriod = 5;
  const guardian = addresses[0];
  let paymentRegistry;
  let signatureValidator;
  let signedMessageRegistry;

  const resetAccountRegistry = async () => {
    const accountRegistry = await AccountRegistry.new();

    paymentRegistry = await PaymentRegistry.new();
    signatureValidator = await SignatureValidator.new();
    signedMessageRegistry = await SignedMessageRegistry.new();

    await signatureValidator.initialize(
      accountRegistry.address,
      signedMessageRegistry.address,
    );

    await paymentRegistry.initialize(
      [guardian],
      depositWithdrawalLockPeriod,
      signatureValidator.address,
    );
  };

  context('views', () => {
    before(resetAccountRegistry);

    describe('computeDepositAccountAddress()', () => {
      it('expect to return correct address', async () => {
        const owner = randomAddress();
        const ownerDeposit = computeCreate2Address(
          paymentRegistry.address,
          owner,
          Account.bytecode,
        );

        await expect(paymentRegistry.computeDepositAccountAddress(
          owner,
        )).resolves.toBe(ownerDeposit);
      });
    });

    describe('computePaymentChannelHash()', () => {
      it('expect to return correct hash', async () => {
        const sender = randomAddress();
        const recipient = randomAddress();
        const token = randomAddress();
        const uid = randomBytes32();
        const hash = soliditySha3(
          sender,
          recipient,
          token,
          uid,
        );

        await expect(paymentRegistry.computePaymentChannelHash(
          sender,
          recipient,
          token,
          uid,
        )).resolves.toBe(hash);
      });
    });

    describe('isDepositAccountDeployed()', () => {
      it('expect to return false when account is not deployed', async () => {
        const owner = randomAddress();
        await expect(paymentRegistry.isDepositAccountDeployed(
          owner,
        )).resolves.toBeFalsy();
      });

      it('expect to return true when account is deployed', async () => {
        const owner = randomAddress();

        await paymentRegistry.deployDepositAccount(owner);

        await expect(paymentRegistry.isDepositAccountDeployed(
          owner,
        )).resolves.toBeTruthy();
      });
    });

    describe('getDepositWithdrawalLockedUntil()', () => {
      it('expect to return 0 when withdrawal not started', async () => {
        const owner = randomAddress();
        const token = randomAddress();
        await expect(paymentRegistry.getDepositWithdrawalLockedUntil(
          owner,
          token,
        )).resolves.toBeBN(0);
      });

      it('expect to return non 0 when withdrawal started', async () => {
        const owner = addresses[0];
        const token = randomAddress();

        await paymentRegistry.withdrawDeposit(
          token, {
            from: owner,
          },
        );

        await expect(paymentRegistry.getDepositWithdrawalLockedUntil(
          owner,
          token,
        )).resolves.toBeGreaterThanBN(0);
      });
    });

    describe('getPaymentChannelCommittedAmount()', () => {
      it('expect to return 0 when there was no commits in channel', async () => {
        const hash = randomBytes32();
        await expect(paymentRegistry.getPaymentChannelCommittedAmount(
          hash,
        )).resolves.toBeBN(0);
      });

      it('expect to return correct committed amount', async () => {
        const sender = addresses[0];
        const senderDeposit = computeCreate2Address(
          paymentRegistry.address,
          sender,
          Account.bytecode,
        );
        const recipient = addresses[1];
        const token = ZERO_ADDRESS;
        const uid = randomBytes32();
        const amount = 1000;
        const hash = soliditySha3(
          sender,
          recipient,
          token,
          uid,
        );
        const messageHash = soliditySha3(
          CHAIN_ID,
          paymentRegistry.address,
          sender,
          recipient,
          token,
          uid,
          amount,
        );
        const senderSignature = await sign(messageHash, sender);
        const guardianSignature = await sign(messageHash, guardian);

        await sendTransaction({
          from: sender,
          to: senderDeposit,
          value: amount,
        });

        await paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          token,
          uid,
          amount,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        await expect(paymentRegistry.getPaymentChannelCommittedAmount(
          hash,
        )).resolves.toBeBN(amount);
      });
    });
  });

  context.only('methods', () => {
    const sender = addresses[1];
    const recipient = addresses[2];
    let senderDeposit;
    let weiAmount;

    const resetAccountRegistryAndDeposit = async () => {
      await resetAccountRegistry();

      weiAmount = 1000;

      senderDeposit = computeCreate2Address(
        paymentRegistry.address,
        sender,
        Account.bytecode,
      );

      await sendTransaction({
        from: sender,
        to: senderDeposit,
        value: weiAmount,
      });
    };

    describe('commitPaymentChannelAndWithdraw()', () => {
      before(resetAccountRegistryAndDeposit);

      const commitPaymentChannelAndWithdraw = async () => {
        const token = ZERO_ADDRESS;
        const uid = randomBytes32();
        const amount = 250;
        const hash = soliditySha3(
          sender,
          recipient,
          token,
          uid,
        );
        const messageHash = soliditySha3(
          CHAIN_ID,
          paymentRegistry.address,
          sender,
          recipient,
          token,
          uid,
          amount,
        );
        const senderSignature = await sign(messageHash, sender);
        const guardianSignature = await sign(messageHash, guardian);

        const output = await paymentRegistry.commitPaymentChannelAndWithdraw(
          sender,
          token,
          uid,
          amount,
          senderSignature,
          guardianSignature, {
            from: recipient,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        return {
          hash,
          uid,
          logs,
        };
      };

      it('expect to commit channel and withdraw', async () => {
        const { hash, uid, logs } = await commitPaymentChannelAndWithdraw();

        expect(logs[0].event).toBe('DepositAccountDeployed');
        expect(logs[0].args.account).toBe(senderDeposit);
        expect(logs[0].args.owner).toBe(sender);

        expect(logs[1].event).toBe('PaymentChannelCommitted');
        expect(logs[1].args.hash).toBe(hash);
        expect(logs[1].args.sender).toBe(sender);
        expect(logs[1].args.recipient).toBe(recipient);
        expect(logs[1].args.token).toBeZeroAddress();
        expect(logs[1].args.uid).toBe(uid);
        expect(logs[1].args.amount).toBeBN(250);

        expect(logs[2].event).toBe('PaymentWithdrawn');
        expect(logs[2].args.channelHash).toBe(hash);
        expect(logs[2].args.value).toBeBN(250);
      });

      it('expect to commit channel and withdraw', async () => {
        const { hash, uid, logs } = await commitPaymentChannelAndWithdraw();

        expect(logs[0].event).toBe('PaymentChannelCommitted');
        expect(logs[0].args.hash).toBe(hash);
        expect(logs[0].args.sender).toBe(sender);
        expect(logs[0].args.recipient).toBe(recipient);
        expect(logs[0].args.token).toBeZeroAddress();
        expect(logs[0].args.uid).toBe(uid);
        expect(logs[0].args.amount).toBeBN(250);

        expect(logs[1].event).toBe('PaymentWithdrawn');
        expect(logs[1].args.channelHash).toBe(hash);
        expect(logs[1].args.value).toBeBN(250);
      });
    });
  });
});
