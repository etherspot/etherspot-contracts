import { ethers } from 'hardhat';
import { BigNumber, BigNumberish, constants } from 'ethers';
import { PaymentRegistry, WrappedWeiToken } from '../../typings';
import {
  SignerWithAddress,
  createMessagePayloadFactory,
  processTx,
  randomAddress,
  MessagePayloadFactory,
  getNow,
  increaseTime,
  randomHex32,
  computeAccountAddress,
  deployContract,
} from '../shared';
import { computeChannelHash } from './utils';

const { getSigners, provider } = ethers;

describe('PaymentRegistry', () => {
  const depositExitLockPeriod = BigNumber.from(3); // 3 sec.
  let signers: SignerWithAddress[];
  let guardian: SignerWithAddress;
  let paymentRegistry: PaymentRegistry;
  let wrappedWeiToken: WrappedWeiToken;

  let depositWithdrawalMessagePayloadFactory: MessagePayloadFactory<{
    owner: string;
    token: string;
    amount: BigNumberish;
  }>;

  let paymentChannelCommitMessagePayloadFactory: MessagePayloadFactory<{
    sender: string;
    recipient: string;
    token: string;
    uid: string;
    blockNumber: BigNumberish;
    amount: BigNumberish;
  }>;

  before(async () => {
    signers = await getSigners();
    guardian = signers.pop();

    paymentRegistry = await deployContract('PaymentRegistry');
    wrappedWeiToken = await deployContract('WrappedWeiToken');

    await processTx(
      paymentRegistry.initialize(
        constants.AddressZero,
        constants.AddressZero,
        depositExitLockPeriod,
        [guardian.address],
        randomAddress(),
      ),
    );

    depositWithdrawalMessagePayloadFactory = createMessagePayloadFactory(
      paymentRegistry,
      'DepositWithdrawal',
      [
        {
          name: 'owner',
          type: 'address',
        },
        {
          name: 'token',
          type: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
        },
      ],
    );

    paymentChannelCommitMessagePayloadFactory = createMessagePayloadFactory(
      paymentRegistry,
      'PaymentChannelCommit',
      [
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
      ],
    );
  });

  context('deployDepositAccount()', () => {
    const owner = randomAddress();

    let ownerDeposit;

    before(async () => {
      ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner);
    });

    it('expect to deploy owner account', async () => {
      const {
        events: [event],
      } = await processTx(paymentRegistry.deployDepositAccount(owner));

      expect(event.event).toBe('DepositAccountDeployed');
      expect(event.args.depositAccount).toBe(ownerDeposit);
      expect(event.args.owner).toBe(owner);
    });
  });

  context('deposit exit', () => {
    const amount = 100;
    let owner: SignerWithAddress;
    let ownerDeposit: string;

    before(async () => {
      owner = signers.pop();
      ownerDeposit = await paymentRegistry.computeDepositAccountAddress(
        owner.address,
      );
      paymentRegistry = paymentRegistry.connect(owner);

      await processTx(
        owner.sendTransaction({
          to: ownerDeposit,
          value: amount,
        }),
      );
    });

    context('requestDepositExit()', () => {
      it('expect to request deposit exit', async () => {
        const now = getNow();
        const { events } = await processTx(
          paymentRegistry.requestDepositExit(constants.AddressZero),
        );

        expect(events[0].event).toBe('DepositAccountDeployed');
        expect(events[0].args.depositAccount).toBe(ownerDeposit);
        expect(events[0].args.owner).toBe(owner.address);

        expect(events[1].event).toBe('DepositExitRequested');
        expect(events[1].args.depositAccount).toBe(ownerDeposit);
        expect(events[1].args.owner).toBe(owner.address);
        expect(events[1].args.token).toBeZeroAddress();
        expect(events[1].args.lockedUntil).toBeGreaterThanOrEqualBN(now);
      });

      it('expect to revert when exit was requested', async () => {
        await expect(
          paymentRegistry.requestDepositExit(constants.AddressZero),
        ).rejects.toThrow(/revert/);
      });
    });

    context('processDepositExit()', () => {
      it('expect to revert before lockedUntil time', async () => {
        await expect(
          paymentRegistry.processDepositExit(constants.AddressZero),
        ).rejects.toThrow(/revert/);
      });

      it('expect to exit after lockedUntil time', async () => {
        await increaseTime(depositExitLockPeriod);

        const ownerBalance = await owner.getBalance();

        const {
          events: [event],
          totalCost,
        } = await processTx(
          paymentRegistry.processDepositExit(constants.AddressZero),
        );

        expect(event.event).toBe('DepositExitCompleted');
        expect(event.args.depositAccount).toBe(ownerDeposit);
        expect(event.args.owner).toBe(owner.address);
        expect(event.args.token).toBeZeroAddress();
        expect(event.args.amount).toBeBN(amount);

        await expect(owner.getBalance()).resolves.toBeBN(
          ownerBalance.sub(totalCost).add(amount),
        );
      });
    });
  });

  context('withdrawDeposit()', () => {
    const totalAmount = 200;
    let owner: SignerWithAddress;
    let ownerDeposit: string;
    let amount = 0;

    before(async () => {
      owner = signers.pop();
      ownerDeposit = await paymentRegistry.computeDepositAccountAddress(
        owner.address,
      );
      paymentRegistry = paymentRegistry.connect(owner);

      await processTx(
        owner.sendTransaction({
          to: ownerDeposit,
          value: totalAmount,
        }),
      );
    });

    it('expect to withdraw - #1 call', async () => {
      const value = 75;
      const ownerBalance = await owner.getBalance();

      amount += value;

      const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(
        guardian,
        {
          owner: owner.address,
          token: constants.AddressZero,
          amount,
        },
      );

      const { events, totalCost } = await processTx(
        paymentRegistry.withdrawDeposit(
          constants.AddressZero,
          amount,
          guardianSignature,
        ),
      );

      expect(events[0].event).toBe('DepositAccountDeployed');
      expect(events[0].args.depositAccount).toBe(ownerDeposit);
      expect(events[0].args.owner).toBe(owner.address);

      expect(events[1].event).toBe('DepositWithdrawn');
      expect(events[1].args.depositAccount).toBe(ownerDeposit);
      expect(events[1].args.owner).toBe(owner.address);
      expect(events[1].args.token).toBeZeroAddress();
      expect(events[1].args.amount).toBeBN(amount);

      await expect(owner.getBalance()).resolves.toBeBN(
        ownerBalance.sub(totalCost).add(value),
      );
    });

    it('expect to withdraw - #2 call', async () => {
      const value = 55;
      const ownerBalance = await owner.getBalance();

      amount += value;

      const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(
        guardian,
        {
          owner: owner.address,
          token: constants.AddressZero,
          amount,
        },
      );

      const {
        events: [event],
        totalCost,
      } = await processTx(
        paymentRegistry.withdrawDeposit(
          constants.AddressZero,
          amount,
          guardianSignature,
        ),
      );

      expect(event.event).toBe('DepositWithdrawn');
      expect(event.args.depositAccount).toBe(ownerDeposit);
      expect(event.args.owner).toBe(owner.address);
      expect(event.args.token).toBeZeroAddress();
      expect(event.args.amount).toBeBN(amount);

      await expect(owner.getBalance()).resolves.toBeBN(
        ownerBalance.sub(totalCost).add(value),
      );
    });

    it('expect to revert on invalid guardian signature', async () => {
      const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(
        guardian,
        {
          owner: owner.address,
          token: constants.AddressZero,
          amount: 1,
        },
      );

      await expect(
        paymentRegistry.withdrawDeposit(
          constants.AddressZero,
          totalAmount,
          guardianSignature,
        ),
      ).rejects.toThrow(/revert/);
    });

    it('expect to revert on invalid amount', async () => {
      const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(
        guardian,
        {
          owner: owner.address,
          token: constants.AddressZero,
          amount: totalAmount + 1,
        },
      );

      await expect(
        paymentRegistry.withdrawDeposit(
          constants.AddressZero,
          totalAmount,
          guardianSignature,
        ),
      ).rejects.toThrow(/revert/);
    });
  });

  context('commitPaymentChannelAndWithdraw()', () => {
    const blockNumber = 0;
    let sender: SignerWithAddress;
    let senderDeposit;
    let recipient: SignerWithAddress;

    before(async () => {
      sender = signers.pop();
      recipient = signers.pop();

      senderDeposit = await paymentRegistry.computeDepositAccountAddress(
        sender.address,
      );
    });

    context('# using wei', () => {
      const uid = randomHex32();
      const amount1 = 50;
      const amount2 = 100;
      let channelHash: string;

      before(async () => {
        channelHash = computeChannelHash(
          sender.address,
          recipient.address,
          null,
          uid,
        );

        await processTx(
          sender.sendTransaction({
            to: senderDeposit,
            value: amount2,
          }),
        );
      });

      it('expect to commit channel and withdraw - #1 commit', async () => {
        const recipientBalance = await recipient.getBalance();
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: constants.AddressZero,
          uid,
          blockNumber,
          amount: amount1,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        const { events, totalCost } = await processTx(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndWithdraw(
              sender.address,
              constants.AddressZero,
              uid,
              0,
              amount1,
              senderSignature,
              guardianSignature,
            ),
        );

        expect(events[0].event).toBe('DepositAccountDeployed');
        expect(events[0].args.depositAccount).toBe(senderDeposit);
        expect(events[0].args.owner).toBe(sender.address);

        expect(events[1].event).toBe('PaymentChannelCommitted');
        expect(events[1].args.hash).toBe(channelHash);
        expect(events[1].args.sender).toBe(sender.address);
        expect(events[1].args.recipient).toBe(recipient.address);
        expect(events[1].args.token).toBeZeroAddress();
        expect(events[1].args.uid).toBe(uid);

        expect(events[2].event).toBe('PaymentWithdrawn');
        expect(events[2].args.channelHash).toBe(channelHash);
        expect(events[2].args.value).toBeBN(amount1);

        await expect(recipient.getBalance()).resolves.toBeBN(
          recipientBalance.sub(totalCost).add(amount1),
        );
      });

      it('expect to commit channel and withdraw - #2 commit', async () => {
        const recipientBalance = await recipient.getBalance();
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: constants.AddressZero,
          uid,
          blockNumber,
          amount: amount2,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        const { events, totalCost } = await processTx(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndWithdraw(
              sender.address,
              constants.AddressZero,
              uid,
              0,
              amount2,
              senderSignature,
              guardianSignature,
            ),
        );

        expect(events[1].event).toBe('PaymentWithdrawn');
        expect(events[1].args.channelHash).toBe(channelHash);
        expect(events[1].args.value).toBeBN(amount2 - amount1);

        await expect(recipient.getBalance()).resolves.toBeBN(
          recipientBalance.sub(totalCost).add(amount2 - amount1),
        );
      });

      it('expect to revert when channel was committed', async () => {
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: constants.AddressZero,
          uid,
          blockNumber,
          amount: amount2,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        await expect(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndWithdraw(
              sender.address,
              constants.AddressZero,
              uid,
              0,
              amount2,
              senderSignature,
              guardianSignature,
            ),
        ).rejects.toThrow(/revert/);
      });
    });

    context('# using token', () => {
      const amount = 200;

      before(async () => {
        await processTx(
          sender.sendTransaction({
            to: wrappedWeiToken.address,
            value: amount,
          }),
        );

        await processTx(
          wrappedWeiToken.connect(sender).transfer(senderDeposit, amount),
        );
      });

      it('expect to commit channel and withdraw', async () => {
        const uid = randomHex32();
        const channelHash = computeChannelHash(
          sender.address,
          recipient.address,
          wrappedWeiToken.address,
          uid,
        );
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: wrappedWeiToken.address,
          uid,
          blockNumber,
          amount,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        const { events } = await processTx(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndWithdraw(
              sender.address,
              wrappedWeiToken.address,
              uid,
              0,
              amount,
              senderSignature,
              guardianSignature,
            ),
        );

        expect(events[0].event).toBe('PaymentChannelCommitted');
        expect(events[0].args.hash).toBe(channelHash);
        expect(events[0].args.token).toBe(wrappedWeiToken.address);

        expect(events[2].event).toBe('PaymentWithdrawn');
        expect(events[2].args.channelHash).toBe(channelHash);

        await expect(
          wrappedWeiToken.balanceOf(recipient.address),
        ).resolves.toBeBN(amount);
      });
    });
  });

  context('commitPaymentChannelAndDeposit()', () => {
    const blockNumber = 0;
    const uid = randomHex32();
    let sender: SignerWithAddress;
    let senderDeposit;
    let recipient: SignerWithAddress;
    let recipientDeposit;

    before(async () => {
      sender = signers.pop();
      senderDeposit = await paymentRegistry.computeDepositAccountAddress(
        sender.address,
      );

      recipient = signers.pop();
      recipientDeposit = await paymentRegistry.computeDepositAccountAddress(
        recipient.address,
      );
    });

    context('# using wei', () => {
      const amount = 200;

      before(async () => {
        await processTx(
          sender.sendTransaction({
            to: senderDeposit,
            value: amount,
          }),
        );
      });

      it('expect to commit channel and deposit', async () => {
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: constants.AddressZero,
          uid,
          blockNumber,
          amount,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        const { events } = await processTx(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndDeposit(
              sender.address,
              constants.AddressZero,
              uid,
              0,
              amount,
              senderSignature,
              guardianSignature,
            ),
        );

        expect(events[2].event).toBe('PaymentDeposited');
        expect(events[2].args.value).toBeBN(amount);

        await expect(provider.getBalance(recipientDeposit)).resolves.toBeBN(
          amount,
        );
      });
    });

    context('# using token', () => {
      const amount = 200;

      before(async () => {
        await processTx(
          sender.sendTransaction({
            to: wrappedWeiToken.address,
            value: amount,
          }),
        );

        await processTx(
          wrappedWeiToken.connect(sender).transfer(senderDeposit, amount),
        );
      });

      it('expect to commit channel and deposit', async () => {
        const uid = randomHex32();
        const message = {
          sender: sender.address,
          recipient: recipient.address,
          token: wrappedWeiToken.address,
          uid,
          blockNumber,
          amount,
        };

        const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          sender,
          message,
        );
        const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
          guardian,
          message,
        );

        const { events } = await processTx(
          paymentRegistry
            .connect(recipient)
            .commitPaymentChannelAndDeposit(
              sender.address,
              wrappedWeiToken.address,
              uid,
              0,
              amount,
              senderSignature,
              guardianSignature,
            ),
        );

        expect(events[2].event).toBe('PaymentDeposited');
        expect(events[2].args.value).toBeBN(amount);

        await expect(
          wrappedWeiToken.balanceOf(recipientDeposit),
        ).resolves.toBeBN(amount);
      });
    });
  });

  context('commitPaymentChannelAndSplit()', () => {
    const blockNumber = 0;
    const uid = randomHex32();
    const amount = 200;
    const depositPaymentValue = 50;
    let sender: SignerWithAddress;
    let recipient: SignerWithAddress;

    before(async () => {
      sender = signers.pop();
      recipient = signers.pop();

      const senderDeposit = await paymentRegistry.computeDepositAccountAddress(
        sender.address,
      );

      await processTx(
        sender.sendTransaction({
          to: senderDeposit,
          value: amount,
        }),
      );
    });

    it('expect to commit channel and split', async () => {
      const message = {
        sender: sender.address,
        recipient: recipient.address,
        token: constants.AddressZero,
        uid,
        blockNumber,
        amount,
      };

      const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
        sender,
        message,
      );
      const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
        guardian,
        message,
      );

      const { events } = await processTx(
        paymentRegistry
          .connect(recipient)
          .commitPaymentChannelAndSplit(
            sender.address,
            constants.AddressZero,
            uid,
            0,
            amount,
            depositPaymentValue,
            senderSignature,
            guardianSignature,
          ),
      );

      expect(events[2].event).toBe('PaymentSplit');
      expect(events[2].args.totalValue).toBeBN(amount);
      expect(events[2].args.depositValue).toBeBN(depositPaymentValue);
    });
  });

  context('computeDepositAccountAddress()', () => {
    const owner = randomAddress();

    it('expect to return correct deposit address', async () => {
      const deposit = await computeAccountAddress(
        paymentRegistry,
        'PaymentDepositAccount',
        owner,
      );

      await expect(
        paymentRegistry.computeDepositAccountAddress(owner),
      ).resolves.toBe(deposit);
    });
  });

  context('isDepositAccountDeployed()', () => {
    const owner = randomAddress();

    before(async () => {
      await paymentRegistry.deployDepositAccount(owner);
    });

    it('expect to return true when deposit is deployed', async () => {
      await expect(
        paymentRegistry.isDepositAccountDeployed(owner),
      ).resolves.toBeTruthy();
    });

    it('expect to return false when deposit is not deployed', async () => {
      await expect(
        paymentRegistry.isDepositAccountDeployed(randomAddress()),
      ).resolves.toBeFalsy();
    });
  });

  context('getDepositExitLockedUntil()', () => {
    let owner: SignerWithAddress;

    before(async () => {
      owner = signers.pop();

      await paymentRegistry
        .connect(owner)
        .requestDepositExit(constants.AddressZero);
    });

    it('expect to return positive lockedUntil time when withdraw was requested', async () => {
      await expect(
        paymentRegistry.getDepositExitLockedUntil(
          owner.address,
          constants.AddressZero,
        ),
      ).resolves.toBeGreaterThanBN(0);
    });

    it("expect to return zero lockedUntil time when withdraw wasn't requested", async () => {
      await expect(
        paymentRegistry.getDepositExitLockedUntil(
          randomAddress(),
          constants.AddressZero,
        ),
      ).resolves.toBeBN(0);
    });
  });

  context('getDepositWithdrawnAmount()', () => {
    const amount = 200;
    let owner: SignerWithAddress;

    before(async () => {
      owner = signers.pop();
      const ownerDeposit = await paymentRegistry.computeDepositAccountAddress(
        owner.address,
      );
      paymentRegistry = paymentRegistry.connect(owner);

      await processTx(
        owner.sendTransaction({
          to: ownerDeposit,
          value: amount,
        }),
      );

      const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(
        guardian,
        {
          owner: owner.address,
          token: constants.AddressZero,
          amount,
        },
      );

      await processTx(
        paymentRegistry.withdrawDeposit(
          constants.AddressZero,
          amount,
          guardianSignature,
        ),
      );
    });

    it('expect to return correct amount', async () => {
      await expect(
        paymentRegistry.getDepositWithdrawnAmount(
          owner.address,
          constants.AddressZero,
        ),
      ).resolves.toBeBN(amount);
    });

    it('expect to return 0 for random account', async () => {
      await expect(
        paymentRegistry.getDepositWithdrawnAmount(
          randomAddress(),
          constants.AddressZero,
        ),
      ).resolves.toBeBN(0);
    });
  });

  context('getPaymentChannelCommittedAmount()', () => {
    const amount = 1000;
    const uid = randomHex32();
    let sender: SignerWithAddress;
    let channelHash: string;

    before(async () => {
      sender = signers.pop();
      const recipient = signers.pop();
      channelHash = computeChannelHash(
        sender.address,
        recipient.address,
        constants.AddressZero,
        uid,
      );
      const blockNumber = 0;
      const senderDeposit = await paymentRegistry.computeDepositAccountAddress(
        sender.address,
      );

      await processTx(
        sender.sendTransaction({
          to: senderDeposit,
          value: amount,
        }),
      );

      const message = {
        sender: sender.address,
        recipient: recipient.address,
        token: constants.AddressZero,
        uid,
        blockNumber,
        amount,
      };

      const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(
        sender,
        message,
      );
      const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(
        guardian,
        message,
      );

      await processTx(
        paymentRegistry
          .connect(recipient)
          .commitPaymentChannelAndWithdraw(
            sender.address,
            constants.AddressZero,
            uid,
            blockNumber,
            amount,
            senderSignature,
            guardianSignature,
          ),
      );
    });

    it('expect to return correct amount from committed channel', async () => {
      await expect(
        paymentRegistry.getPaymentChannelCommittedAmount(channelHash),
      ).resolves.toBeBN(amount);
    });

    it('expect to return zero when channel is not committed', async () => {
      const channelHash = computeChannelHash(
        sender.address,
        randomAddress(),
        constants.AddressZero,
        uid,
      );

      await expect(
        paymentRegistry.getPaymentChannelCommittedAmount(channelHash),
      ).resolves.toBeBN(0);
    });
  });

  context('computePaymentChannelHash()', () => {
    it('expect to return correct hash', async () => {
      const sender = randomAddress();
      const recipient = randomAddress();
      const token = randomAddress();
      const uid = randomHex32();

      await expect(
        paymentRegistry.computePaymentChannelHash(
          sender,
          recipient,
          token,
          uid,
        ),
      ).resolves.toBe(computeChannelHash(sender, recipient, token, uid));
    });
  });

  context('hashDepositWithdrawal()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        owner: randomAddress(),
        token: randomAddress(),
        amount: 200,
      };

      const expected = depositWithdrawalMessagePayloadFactory.hash(message);

      await expect(
        paymentRegistry.hashDepositWithdrawal(message),
      ).resolves.toBe(expected);
    });
  });

  context('hashPaymentChannelCommit()', () => {
    it('expect to return correct hash', async () => {
      const message = {
        sender: randomAddress(),
        recipient: randomAddress(),
        token: randomAddress(),
        uid: randomHex32(),
        blockNumber: 1,
        amount: 200,
      };

      const expected = paymentChannelCommitMessagePayloadFactory.hash(message);

      await expect(
        paymentRegistry.hashPaymentChannelCommit(message),
      ).resolves.toBe(expected);
    });
  });
});
