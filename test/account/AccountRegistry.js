/* eslint-env node, mocha */

const expect = require('expect');
const {
  randomAddress,
  computeCreate2Address,
} = require('../utils');

const Account = artifacts.require('ControlledAccount');
const AccountRegistry = artifacts.require('AccountRegistry');

contract.only('AccountRegistry', (addresses) => {
  const {
    utils: {
      soliditySha3,
    },
  } = web3;

  const saltOwner = addresses[1];
  let accountRegistry;
  let account;
  let nonce;

  const resetAccount = async () => {
    nonce = 0;
    accountRegistry = await AccountRegistry.new();

    account = computeCreate2Address(
      accountRegistry.address,
      soliditySha3(saltOwner),
      Account.bytecode,
    );
  };

  context('views', () => {
    describe('computeAccountAddress()', () => {
      before(resetAccount);

      it('expect to return account address', async () => {
        await expect(accountRegistry.computeAccountAddress(
          saltOwner,
        )).resolves.toBe(account);
      });
    });

    describe('isAccountOwner()', () => {
      const newOwner = addresses[2];

      before(resetAccount);

      it('expect to return true on salt owner', async () => {
        await expect(accountRegistry.isAccountOwner(
          account,
          saltOwner,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on added owner', async () => {
        await accountRegistry.addAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await expect(accountRegistry.isAccountOwner(
          account,
          newOwner,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on removed owner', async () => {
        await accountRegistry.removeAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await expect(accountRegistry.isAccountOwner(
          account,
          newOwner,
        )).resolves.toBeFalsy();
      });

      it('expect to return false on invalid owner', async () => {
        await expect(accountRegistry.isAccountOwner(
          account,
          randomAddress(),
        )).resolves.toBeFalsy();
      });

      it('expect to return false on removed salt owner', async () => {
        await accountRegistry.addAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await accountRegistry.removeAccountOwner(
          account,
          nonce,
          saltOwner, {
            from: newOwner,
          },
        );

        await expect(accountRegistry.isAccountOwner(
          account,
          saltOwner,
        )).resolves.toBeFalsy();
      });
    });

    describe('hasEverBeenAccountOwner()', () => {
      const newOwner = addresses[2];

      before(resetAccount);

      it('expect to return true on salt owner', async () => {
        await expect(accountRegistry.hasEverBeenAccountOwner(
          account,
          saltOwner,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on added owner', async () => {
        await accountRegistry.addAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await expect(accountRegistry.hasEverBeenAccountOwner(
          account,
          newOwner,
        )).resolves.toBeTruthy();
      });

      it('expect to return true on removed owner', async () => {
        await accountRegistry.removeAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await expect(accountRegistry.hasEverBeenAccountOwner(
          account,
          newOwner,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on invalid owner', async () => {
        await expect(accountRegistry.hasEverBeenAccountOwner(
          account,
          randomAddress(),
        )).resolves.toBeFalsy();
      });

      it('expect to return true on removed salt owner', async () => {
        await accountRegistry.addAccountOwner(
          account,
          nonce,
          newOwner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        await accountRegistry.removeAccountOwner(
          account,
          nonce,
          saltOwner, {
            from: newOwner,
          },
        );

        await expect(accountRegistry.hasEverBeenAccountOwner(
          account,
          saltOwner,
        )).resolves.toBeTruthy();
      });
    });
  });
});
