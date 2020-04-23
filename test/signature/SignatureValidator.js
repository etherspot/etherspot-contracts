/* eslint-env node, mocha */

const expect = require('expect');
const {
  TYPED_DATA_DOMAIN_HASH,
  TYPED_DATA_SALT,
  ZERO_ADDRESS,
} = require('../constants');
const {
  computeCreate2Address,
  createSignedMessageHash,
  randomAddress,
  randomBytes32,
  buildTypedData,
  hashTypedData,
} = require('../utils');

const Account = artifacts.require('ControlledAccount');
const AccountRegistry = artifacts.require('AccountRegistry');
const MessageHashRegistry = artifacts.require('MessageHashRegistry');
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
  const authorizedSigner = addresses[3];
  const accountOwner = addresses[4];

  let account;
  let messageHashRegistry;
  let signatureValidator;
  let typedData;
  let typedDataHash;

  before(async () => {
    const accountRegistry = await AccountRegistry.new();
    messageHashRegistry = await MessageHashRegistry.new();
    signatureValidator = await SignatureValidator.new();

    await accountRegistry.initialize(
      ZERO_ADDRESS,
    );

    await messageHashRegistry.initialize(
      ZERO_ADDRESS,
    );

    await signatureValidator.initialize(
      accountRegistry.address,
      messageHashRegistry.address,
      TYPED_DATA_DOMAIN_HASH,
      TYPED_DATA_SALT,
    );

    account = computeCreate2Address(
      accountRegistry.address,
      accountOwner,
      Account.bytecode,
    );

    typedData = buildTypedData(
      signatureValidator.address,
      'AuthorizeAccountKey', [
        {
          name: 'account',
          type: 'address',
        },
        {
          name: 'key',
          type: 'address',
        },
      ], {
        account: rawSigner,
        key: authorizedSigner,
      },
    );

    typedDataHash = hashTypedData(typedData);

    await messageHashRegistry.submitMessageHash(typedDataHash, {
      from: rawSigner,
    });

    await messageHashRegistry.submitMessageHash(signedMessageHash, {
      from: registrySigner,
    });
  });

  context('views', () => {
    describe('hashAuthorizeAccountKey', () => {
      it('expect to return correct hash', async () => {
        const output = await signatureValidator.hashAuthorizeAccountKey(typedData.message);

        expect(output).toBe(typedDataHash);
      });
    });

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

      it('expect to return true when message hash was signed by authorized key', async () => {
        await expect(signatureValidator.verifySignature(
          signedMessageHash,
          await sign(messageHash, authorizedSigner),
          rawSigner,
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
