/* eslint-env node, mocha */

const expect = require('expect');
const { ZERO_ADDRESS } = require('../constants');
const {
  logGasUsed,
  parseBlockNumber,
  randomAddress,
  randomBytes32,
} = require('../utils');

const MessageHashRegistry = artifacts.require('MessageHashRegistry');

contract('MessageHashRegistry', (addresses) => {
  const sender = addresses[0];
  let messageRegistry;

  before(async () => {
    messageRegistry = await MessageHashRegistry.new();

    await messageRegistry.initialize(ZERO_ADDRESS);
  });

  context('views', () => {
    const messageHash = randomBytes32();
    let messageHashBlockNumber;

    before(async () => {
      messageHashBlockNumber = parseBlockNumber(await messageRegistry.submitMessageHash(messageHash));
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
    const messageHash = randomBytes32();

    describe('submitMessageHash()', () => {
      it('expect to submit message hash', async () => {
        const output = await messageRegistry.submitMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashSubmitted');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });

    describe('expireMessageHash()', () => {
      it('expect to expire message hash', async () => {
        const output = await messageRegistry.expireMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashExpired');
        expect(log.args.sender).toBe(sender);
        expect(log.args.messageHash).toBe(messageHash);
      });
    });
  });
});
