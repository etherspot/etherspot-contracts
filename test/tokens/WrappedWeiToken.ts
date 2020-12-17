import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';
import { WrappedWeiToken } from '../../typings';
import { SignerWithAddress, randomAddress, processTx } from '../shared';

const { getSigners, provider } = ethers;

describe('WrappedWeiToken', () => {
  let signers: SignerWithAddress[];
  let wrappedWeiToken: WrappedWeiToken;

  before(async () => {
    signers = await getSigners();

    wrappedWeiToken = (await ethers
      .getContractFactory('WrappedWeiToken')
      .then(factory => factory.deploy())) as WrappedWeiToken;
  });

  context('fallback()', () => {
    let owner: SignerWithAddress;

    before(() => {
      owner = signers.pop();
    });

    it('expect to mint tokens', async () => {
      const amount = 1000;
      await processTx(
        owner.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );

      await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(
        amount,
      );
    });
  });

  context('depositTo()', () => {
    let sender: SignerWithAddress;

    before(() => {
      sender = signers.pop();
      wrappedWeiToken = wrappedWeiToken.connect(sender);
    });

    it('expect to mint tokens to holder', async () => {
      const owner = randomAddress();
      const amount = 1000;

      const {
        events: [event],
      } = await processTx(
        wrappedWeiToken.depositTo(owner, {
          value: amount,
        }),
      );

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBeZeroAddress();
      expect(event.args.to).toBe(owner);
      expect(event.args.value).toBeBN(amount);

      await expect(wrappedWeiToken.balanceOf(owner)).resolves.toBeBN(amount);
    });
  });

  context('withdraw()', () => {
    let owner: SignerWithAddress;
    let amount = 1000;

    before(async () => {
      owner = signers.pop();
      wrappedWeiToken = wrappedWeiToken.connect(owner);

      await processTx(
        owner.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );
    });

    it('expect to withdraw amount of wei', async () => {
      const value = 400;
      const balance = await owner.getBalance();

      const {
        totalCost,
        events: [event],
      } = await processTx(wrappedWeiToken.withdraw(value));

      amount -= value;

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(owner.address);
      expect(event.args.to).toBeZeroAddress();
      expect(event.args.value).toBeBN(value);

      await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(
        amount,
      );

      await expect(owner.getBalance()).resolves.toBeBN(
        balance.sub(totalCost).add(value),
      );
    });
  });

  context('withdrawTo()', () => {
    let sender: SignerWithAddress;
    let amount = 1000;

    before(async () => {
      sender = signers.pop();
      wrappedWeiToken = wrappedWeiToken.connect(sender);

      await processTx(
        sender.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );
    });

    it('expect to withdraw amount of wei to address', async () => {
      const owner = randomAddress();
      const value = 400;

      const {
        events: [event],
      } = await processTx(wrappedWeiToken.withdrawTo(owner, value));

      amount -= value;

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(sender.address);
      expect(event.args.to).toBeZeroAddress();
      expect(event.args.value).toBeBN(value);

      await expect(wrappedWeiToken.balanceOf(sender.address)).resolves.toBeBN(
        amount,
      );

      await expect(provider.getBalance(owner)).resolves.toBeBN(value);
    });
  });

  context('withdrawAll()', () => {
    const amount = 1000;
    let owner: SignerWithAddress;

    before(async () => {
      owner = signers.pop();
      wrappedWeiToken = wrappedWeiToken.connect(owner);

      await processTx(
        owner.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );
    });

    it('expect to withdraw all wei', async () => {
      const balance = await owner.getBalance();
      const {
        totalCost,
        events: [event],
      } = await processTx(wrappedWeiToken.withdrawAll());

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(owner.address);
      expect(event.args.to).toBeZeroAddress();
      expect(event.args.value).toBeBN(amount);

      await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(0);

      await expect(owner.getBalance()).resolves.toBeBN(
        balance.sub(totalCost).add(amount),
      );
    });
  });

  context('withdrawAllTo()', () => {
    let sender: SignerWithAddress;
    const amount = 1000;

    before(async () => {
      sender = signers.pop();
      wrappedWeiToken = wrappedWeiToken.connect(sender);

      await processTx(
        sender.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );
    });

    it('expect to withdraw all wei to address', async () => {
      const owner = randomAddress();

      const {
        events: [event],
      } = await processTx(wrappedWeiToken.withdrawAllTo(owner));

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(sender.address);
      expect(event.args.to).toBeZeroAddress();
      expect(event.args.value).toBeBN(amount);

      await expect(wrappedWeiToken.balanceOf(sender.address)).resolves.toBeBN(
        0,
      );

      await expect(provider.getBalance(owner)).resolves.toBeBN(amount);
    });
  });

  context('transfer()', () => {
    const amount = 1000;
    let senderA: SignerWithAddress;
    let senderB: SignerWithAddress;
    let consumer: SignerWithAddress;
    let consumerBalance: BigNumber;

    before(async () => {
      senderA = signers.pop();
      senderB = signers.pop();
      consumer = signers.pop();

      await processTx(
        senderA.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );

      await processTx(
        senderB.sendTransaction({
          to: wrappedWeiToken.address,
          value: amount,
        }),
      );

      await processTx(wrappedWeiToken.connect(consumer).startConsuming());

      consumerBalance = await consumer.getBalance();
    });

    it('expect to transfer tokens to recipient', async () => {
      const recipient = randomAddress();

      const {
        events: [event],
      } = await processTx(
        wrappedWeiToken.connect(senderA).transfer(recipient, amount),
      );

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(senderA.address);
      expect(event.args.to).toBe(recipient);
      expect(event.args.value).toBeBN(amount);

      await expect(wrappedWeiToken.balanceOf(senderA.address)).resolves.toBeBN(
        0,
      );

      await expect(wrappedWeiToken.balanceOf(recipient)).resolves.toBeBN(
        amount,
      );
    });

    it('expect to withdraw when transfer to consumer', async () => {
      const {
        events: [event],
      } = await processTx(
        wrappedWeiToken.connect(senderB).transfer(consumer.address, amount),
      );

      expect(event.event).toBe('Transfer');
      expect(event.args.from).toBe(senderB.address);
      expect(event.args.to).toBeZeroAddress();
      expect(event.args.value).toBeBN(amount);

      await expect(wrappedWeiToken.balanceOf(senderB.address)).resolves.toBeBN(
        0,
      );

      await expect(consumer.getBalance()).resolves.toBeBN(
        consumerBalance.add(amount),
      );
    });
  });
});
