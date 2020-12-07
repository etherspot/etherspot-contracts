/* eslint-env node, mocha */

const expect = require('expect');
const {
  randomAddress,
  logGasUsage,
  getBalance,
  calcCost,
} = require('../utils');

const WrappedWeiToken = artifacts.require('WrappedWeiToken');

contract('WrappedWeiToken', ([...addresses]) => {
  /**
   * @type Contract
   */
  let token;

  before(async () => {
    token = await WrappedWeiToken.new();
  });

  context('fallback()', () => {
    it('expect to mint tokens', async () => {
      const owner = addresses.pop();
      const amount = 1000;
      const output = await token.sendTransaction({
        from: owner,
        value: amount,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBeZeroAddress();
      expect(log.args.to)
        .toBe(owner);
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(owner))
        .resolves
        .toBeBN(amount);
    });
  });

  context('depositTo()', () => {
    it('expect to mint tokens to holder', async () => {
      const sender = addresses.pop();
      const owner = randomAddress();
      const amount = 1000;
      const output = await token.depositTo(owner, {
        from: sender,
        value: amount,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBeZeroAddress();
      expect(log.args.to)
        .toBe(owner);
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(owner))
        .resolves
        .toBeBN(amount);
    });
  });

  context('withdraw()', () => {
    const owner = addresses.pop();
    let amount = 1000;

    before(async () => {
      await token.sendTransaction({
        from: owner,
        value: amount,
      });
    });

    it('expect to withdraw amount of wei', async () => {
      const value = 400;
      const balance = await getBalance(owner);
      const output = await token.withdraw(value, {
        from: owner,
      });

      amount -= value;

      logGasUsage(output);

      const cost = calcCost(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(owner);
      expect(log.args.to)
        .toBeZeroAddress();
      expect(log.args.value)
        .toBeBN(value);

      await expect(token.balanceOf(owner))
        .resolves
        .toBeBN(amount);

      await expect(getBalance(owner))
        .resolves
        .toBeBN(balance.sub(cost)
          .addn(value));
    });
  });

  context('withdrawTo()', () => {
    const sender = addresses.pop();
    let amount = 1000;

    before(async () => {
      await token.sendTransaction({
        from: sender,
        value: amount,
      });
    });

    it('expect to withdraw amount of wei to address', async () => {
      const owner = randomAddress();
      const value = 400;
      const output = await token.withdrawTo(owner, value, {
        from: sender,
      });

      amount -= value;

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(sender);
      expect(log.args.to)
        .toBeZeroAddress();
      expect(log.args.value)
        .toBeBN(value);

      await expect(token.balanceOf(sender))
        .resolves
        .toBeBN(amount);

      await expect(getBalance(owner))
        .resolves
        .toBeBN(value);
    });
  });

  context('withdrawAll()', () => {
    const owner = addresses.pop();
    const amount = 1000;

    before(async () => {
      await token.sendTransaction({
        from: owner,
        value: amount,
      });
    });

    it('expect to withdraw all wei', async () => {
      const balance = await getBalance(owner);
      const output = await token.withdrawAll({
        from: owner,
      });

      logGasUsage(output);

      const cost = calcCost(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(owner);
      expect(log.args.to)
        .toBeZeroAddress();
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(owner))
        .resolves
        .toBeBN(0);

      await expect(getBalance(owner))
        .resolves
        .toBeBN(balance.sub(cost)
          .addn(amount));
    });
  });

  context('withdrawAllTo()', () => {
    const sender = addresses.pop();
    const owner = randomAddress();
    const amount = 1000;

    before(async () => {
      await token.sendTransaction({
        from: sender,
        value: amount,
      });
    });

    it('expect to withdraw all wei to address', async () => {
      const output = await token.withdrawAllTo(owner, {
        from: sender,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(sender);
      expect(log.args.to)
        .toBeZeroAddress();
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(sender))
        .resolves
        .toBeBN(0);

      await expect(getBalance(owner))
        .resolves
        .toBeBN(amount);
    });
  });

  context('transfer()', () => {
    const senderA = addresses.pop();
    const senderB = addresses.pop();
    const consumer = addresses.pop();
    const amount = 1000;

    let consumerBalance;

    before(async () => {
      await token.sendTransaction({
        from: senderA,
        value: amount,
      });

      await token.sendTransaction({
        from: senderB,
        value: amount,
      });

      await token.startConsuming({
        from: consumer,
      });

      consumerBalance = await getBalance(consumer);
    });

    it('expect to transfer tokens to recipient', async () => {
      const recipient = randomAddress();
      const output = await token.transfer(recipient, amount, {
        from: senderA,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(senderA);
      expect(log.args.to)
        .toBe(recipient);
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(senderA))
        .resolves
        .toBeBN(0);

      await expect(token.balanceOf(recipient))
        .resolves
        .toBeBN(amount);
    });

    it('expect to withdraw when transfer to consumer', async () => {
      const output = await token.transfer(consumer, amount, {
        from: senderB,
      });

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('Transfer');

      expect(log.args.from)
        .toBe(senderB);
      expect(log.args.to)
        .toBeZeroAddress();
      expect(log.args.value)
        .toBeBN(amount);

      await expect(token.balanceOf(senderB))
        .resolves
        .toBeBN(0);

      await expect(getBalance(consumer))
        .resolves
        .toBeBN(consumerBalance.addn(amount));
    });
  });
});
