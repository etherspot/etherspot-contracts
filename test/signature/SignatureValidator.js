/* eslint-env node, mocha */

const expect = require('expect');
const {
  computeCreate2Address,
  randomAddress,
  randomBytes32,
  createSignedMessageHash,
} = require('../utils');

const Account = artifacts.require('ControlledAccount');
const AccountRegistry = artifacts.require('AccountRegistry');
const MessageRegistry = artifacts.require('MessageRegistry');
const SignatureValidator = artifacts.require('SignatureValidator');

contract('SignatureValidator', (addresses) => {
  const {
    eth: {
      sign,
    },
  } = web3;

  const messageHash = randomBytes32();
  const signedMessageHash = createSignedMessageHash(messageHash);
  const rawSigner = addresses[1];
  const registrySigner = addresses[2];
  const accountOwner = addresses[3];

  let account;
  let messageRegistry;
  let signatureValidator;

  before(async () => {
    const accountRegistry = await AccountRegistry.new();
    messageRegistry = await MessageRegistry.new();
    signatureValidator = await SignatureValidator.new();

    await signatureValidator.initialize(
      accountRegistry.address,
      messageRegistry.address,
    );

    account = computeCreate2Address(
      accountRegistry.address,
      accountOwner,
      Account.bytecode,
    );

    await messageRegistry.addMessageHash(signedMessageHash, {
      from: registrySigner,
    });
  });

  context('methods', () => {
    describe('verifySignature()', () => {
      it('expect to return true when message hash was signed by raw signer', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          await sign(messageHash, rawSigner),
          rawSigner,
        )).resolves.toBeTruthy();
      });

      it('expect to return true when message hash was signed by account owner', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          await sign(messageHash, accountOwner),
          account,
        )).resolves.toBeTruthy();
      });

      it('expect to return true when message hash was signed via registry', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          '0x',
          registrySigner,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on invalid signature', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          await sign(messageHash, rawSigner),
          randomAddress(),
        )).resolves.toBeFalsy();
      });

      it('expect to return false on empty signature', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          '0x',
          rawSigner,
        )).resolves.toBeFalsy();
      });
    });
  });
});
