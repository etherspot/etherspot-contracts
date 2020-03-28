/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
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

    before(async () => {
      await messageRegistry.addMessage(message);
      await messageRegistry.addMessageHash(messageHash);
    });

    describe('verifyMessage()', () => {
      it('expect to return true when message was added by sender', async () => {
        await expect(messageRegistry.verifyMessage(
          message,
          sender,
        )).resolves.toBeTruthy();
      });

      it('expect to return false when message wasn\'t added by sender', async () => {
        await expect(messageRegistry.verifyMessage(
          message,
          randomAddress(),
        )).resolves.toBeFalsy();
      });
    });

    describe('verifyMessageHash()', () => {
      it('expect to return true when message has was added by sender', async () => {
        await expect(messageRegistry.verifyMessageHash(
          messageHash,
          sender,
        )).resolves.toBeTruthy();
      });

      it('expect to return false when message hash wasn\'t added by sender', async () => {
        await expect(messageRegistry.verifyMessageHash(
          messageHash,
          randomAddress(),
        )).resolves.toBeFalsy();
      });
    });
  });

  context('methods', () => {
    describe('addMessage()', () => {
      it('expect to add message', async () => {
        const message = randomHex(64);
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
        const messageHash = randomBytes32();
        const output = await messageRegistry.addMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashAdded');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });
  });
});
