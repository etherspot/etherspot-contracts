/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  parseBlockNumber,
  randomAddress,
  randomBytes32,
} = require('../utils');

const MessageRegistry = artifacts.require('MessageRegistry');

contract('MessageRegistry', (addresses) => {
  const {
    utils: {
      randomHex,
    },
  } = web3;

  const sender = addresses[0];
  let messageRegistry;

  before(async () => {
    messageRegistry = await MessageRegistry.new();
  });

  context('views', () => {
    const message = randomHex(64);
    const messageHash = randomBytes32();
    let messageBlockNumber;
    let messageHashBlockNumber;

    before(async () => {
      messageBlockNumber = parseBlockNumber(await messageRegistry.addMessage(message));
      messageHashBlockNumber = parseBlockNumber(await messageRegistry.addMessageHash(messageHash));
    });

    describe('verifySenderMessageAtBlock()', () => {
      it('expect to return true on correct sender', async () => {
        await expect(messageRegistry.verifySenderMessageAtBlock(
          sender,
          message,
          0,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on correct block number', async () => {
        await expect(messageRegistry.verifySenderMessageAtBlock(
          sender,
          message,
          messageBlockNumber - 1,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on wrong sender', async () => {
        await expect(messageRegistry.verifySenderMessageAtBlock(
          randomAddress(),
          message,
          0,
        )).resolves.toBeFalsy();
      });

      it('expect to return false on wrong block number', async () => {
        await expect(messageRegistry.verifySenderMessageAtBlock(
          randomAddress(),
          message,
          messageBlockNumber,
        )).resolves.toBeFalsy();
      });
    });

    describe('verifySenderMessageHashAtBlock()', () => {
      it('expect to return true on correct sender', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          sender,
          messageHash,
          0,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on correct block number', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          sender,
          messageHash,
          messageHashBlockNumber - 1,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on wrong sender', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          randomAddress(),
          messageHash,
          0,
        )).resolves.toBeFalsy();
      });

      it('expect to return false on wrong block number', async () => {
        await expect(messageRegistry.verifySenderMessageHashAtBlock(
          randomAddress(),
          messageHash,
          messageHashBlockNumber,
        )).resolves.toBeFalsy();
      });
    });
  });

  context('methods', () => {
    const message = randomHex(64);
    const messageHash = randomBytes32();

    describe('addMessage()', () => {
      it('expect to add message', async () => {
        const output = await messageRegistry.addMessage(message);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageAdded');
        expect(log.args.sender).toBe(sender);
        expect(log.args.message).toBe(message);
      });
    });

    describe('addMessageHash()', () => {
      it('expect to add message hash', async () => {
        const output = await messageRegistry.addMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashAdded');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });

    describe('removeMessageHash()', () => {
      it('expect to remove message', async () => {
        const output = await messageRegistry.removeMessage(message);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageRemoved');
        expect(log.args.sender).toBe(sender);
        expect(log.args.message).toBe(message);
      });
    });

    describe('removeMessageHash()', () => {
      it('expect to remove message hash', async () => {
        const output = await messageRegistry.removeMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashRemoved');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });
  });
});
