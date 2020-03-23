/* eslint-env node, mocha */

const expect = require('expect');
const {
  logGasUsed,
  randomAddress,
  randomBytes32,
  createSignedMessageHash,
} = require('../utils');

const SignedMessageRegistry = artifacts.require('SignedMessageRegistry');

contract.only('SignedMessageRegistry', (addresses) => {
  const {
    utils: {
      randomHex,
    },
  } = web3;

  const signer = addresses[0];
  let signedMessageRegistry;

  before(async () => {
    signedMessageRegistry = await SignedMessageRegistry.new();
  });

  context('views', () => {
    describe('verifySignedMessageHash()', () => {
      const message = randomHex(64);
      const messageHash = randomBytes32();

      before(async () => {
        await signedMessageRegistry.setMessage(message);
        await signedMessageRegistry.setMessageHash(messageHash);
      });

      it('expect to return true when message was signed', async () => {
        await expect(signedMessageRegistry.verifySignedMessageHash(
          createSignedMessageHash(message),
          signer,
        )).resolves.toBeTruthy();
      });

      it('expect to return true when message hash was signed', async () => {
        await expect(signedMessageRegistry.verifySignedMessageHash(
          createSignedMessageHash(messageHash),
          signer,
        )).resolves.toBeTruthy();
      });

      it('expect to return false when message wasn\'t signed', async () => {
        await expect(signedMessageRegistry.verifySignedMessageHash(
          createSignedMessageHash(message),
          randomAddress(),
        )).resolves.toBeFalsy();
      });

      it('expect to return false when message hash wasn\'t signed', async () => {
        await expect(signedMessageRegistry.verifySignedMessageHash(
          createSignedMessageHash(messageHash),
          randomAddress(),
        )).resolves.toBeFalsy();
      });
    });
  });

  context('methods', () => {
    describe('setMessage()', () => {
      it('expect to set message', async () => {
        const message = randomHex(64);
        const output = await signedMessageRegistry.setMessage(message);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageSigned');
        expect(log.args.message).toBe(message);
        expect(log.args.signer).toBe(signer);
      });
    });

    describe('setMessageHash()', () => {
      it('expect to set message hash', async () => {
        const messageHash = randomBytes32();
        const output = await signedMessageRegistry.setMessageHash(messageHash);

        logGasUsed(output);

        const { logs: [log] } = output;

        expect(log.event).toBe('MessageHashSigned');
        expect(log.args.messageHash).toBe(messageHash);
        expect(log.args.signer).toBe(signer);
      });
    });
  });
});
