/* eslint-env node, mocha */

const expect = require('expect');
const { ZERO_ADDRESS } = require('../constants');
const {
  logGasUsed,
  randomAddress,
  randomBytes32,
  computeCreate2Address,
  getBalance,
} = require('../utils');

const Account = artifacts.require('ControlledAccount');
const AccountRegistry = artifacts.require('AccountRegistry');
const Token = artifacts.require('ERC20TokenMock');

contract('AccountRegistry', (addresses) => {
  const {
    eth: {
      sendTransaction,
    },
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

    describe('isAccountDeployed()', () => {
      before(resetAccount);

      it('expect to return false when account is not deployed', async () => {
        await expect(accountRegistry.isAccountDeployed(
          account,
        )).resolves.toBeFalsy();
      });

      it('expect to return true when account is deployed', async () => {
        await accountRegistry.executeAccountTransaction(
          account,
          0,
          randomAddress(),
          0,
          '0x', {
            from: saltOwner,
          },
        );

        await expect(accountRegistry.isAccountDeployed(
          account,
        )).resolves.toBeTruthy();
      });
    });

    describe('getAccountNonce()', () => {
      before(resetAccount);

      it('expect to return false when account is not deployed', async () => {
        await expect(accountRegistry.getAccountNonce(
          account,
        )).resolves.toBeBN(0);
      });

      it('expect to return true when account is deployed', async () => {
        await accountRegistry.executeAccountTransaction(
          account,
          0,
          randomAddress(),
          0,
          '0x', {
            from: saltOwner,
          },
        );

        await expect(accountRegistry.getAccountNonce(
          account,
        )).resolves.toBeBN(1);
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

    describe('verifyAccountOwnerAtBlock()', () => {
      const newOwner = addresses[2];

      before(resetAccount);

      it('expect to return true on salt owner', async () => {
        await expect(accountRegistry.verifyAccountOwnerAtBlock(
          account,
          saltOwner,
          0,
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

        await expect(accountRegistry.verifyAccountOwnerAtBlock(
          account,
          newOwner,
          0,
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

        await expect(accountRegistry.verifyAccountOwnerAtBlock(
          account,
          newOwner,
          0,
        )).resolves.toBeTruthy();
      });

      it('expect to return false on invalid owner', async () => {
        await expect(accountRegistry.verifyAccountOwnerAtBlock(
          account,
          randomAddress(),
          0,
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

        await expect(accountRegistry.verifyAccountOwnerAtBlock(
          account,
          saltOwner,
          0,
        )).resolves.toBeTruthy();
      });
    });
  });

  context('methods', () => {
    describe('addAccountOwner()', () => {
      const owner1 = addresses[2];
      const owner2 = addresses[3];

      before(resetAccount);

      it('expect to add first owner', async () => {
        const output = await accountRegistry.addAccountOwner(
          account,
          nonce,
          owner1, {
            from: saltOwner,
          },
        );

        nonce += 1;

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountOwnerAdded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.owner).toBe(saltOwner);

        expect(logs[1].event).toBe('AccountOwnerAdded');
        expect(logs[1].args.account).toBe(account);
        expect(logs[1].args.owner).toBe(owner1);
      });

      it('expect to add second owner', async () => {
        const output = await accountRegistry.addAccountOwner(
          account,
          nonce,
          owner2, {
            from: saltOwner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountOwnerAdded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.owner).toBe(owner2);
      });
    });

    describe('removeAccountOwner()', () => {
      const owner = addresses[2];

      before(async () => {
        await resetAccount();
        await accountRegistry.addAccountOwner(
          account,
          nonce,
          owner, {
            from: saltOwner,
          },
        );

        nonce += 1;
      });

      it('expect to remove owner', async () => {
        const output = await accountRegistry.removeAccountOwner(
          account,
          nonce,
          owner, {
            from: saltOwner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountOwnerRemoved');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.owner).toBe(owner);
      });
    });

    describe('executeAccountTransaction()', () => {
      beforeEach(resetAccount);

      it('expect to send first transaction by salt owner', async () => {
        const to = randomAddress();
        const value = 100;
        const data = randomBytes32();

        await sendTransaction({
          value,
          to: account,
          from: addresses[0],
        });

        const output = await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          to,
          value,
          data, {
            from: saltOwner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountOwnerAdded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.owner).toBe(saltOwner);

        expect(logs[1].event).toBe('AccountDeployed');
        expect(logs[1].args.account).toBe(account);

        expect(logs[2].event).toBe('AccountTransactionExecuted');
        expect(logs[2].args.account).toBe(account);
        expect(logs[2].args.to).toBe(to);
        expect(logs[2].args.value).toBeBN(value);
        expect(logs[2].args.data).toBe(data);
      });

      it('expect to send first empty transaction by salt owner', async () => {
        const to = randomAddress();
        const value = 0;

        const output = await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          to,
          value,
          '0x', {
            from: saltOwner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountOwnerAdded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.owner).toBe(saltOwner);

        expect(logs[1].event).toBe('AccountDeployed');
        expect(logs[1].args.account).toBe(account);

        expect(logs[2].event).toBe('AccountTransactionExecuted');
        expect(logs[2].args.account).toBe(account);
        expect(logs[2].args.to).toBe(to);
        expect(logs[2].args.value).toBeBN(value);
        expect(logs[2].args.data).toBeNull();
      });

      it('expect to send first empty transaction by owner', async () => {
        const owner = addresses[2];
        const to = randomAddress();
        const value = 0;

        await accountRegistry.addAccountOwner(
          account,
          nonce,
          owner, {
            from: saltOwner,
          },
        );

        nonce += 1;

        const output = await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          to,
          value,
          '0x', {
            from: owner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountDeployed');
        expect(logs[0].args.account).toBe(account);

        expect(logs[1].event).toBe('AccountTransactionExecuted');
        expect(logs[1].args.account).toBe(account);
        expect(logs[1].args.to).toBe(to);
        expect(logs[1].args.value).toBeBN(value);
        expect(logs[1].args.data).toBeNull();
      });

      it('expect to send second empty transaction by salt owner', async () => {
        const to = randomAddress();
        const value = 0;

        await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          randomAddress(),
          value,
          '0x', {
            from: saltOwner,
          },
        );

        nonce += 1;

        const output = await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          to,
          value,
          '0x', {
            from: saltOwner,
          },
        );

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountTransactionExecuted');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.to).toBe(to);
        expect(logs[0].args.value).toBeBN(value);
        expect(logs[0].args.data).toBeNull();
      });
    });

    describe('refundAccountCall()', () => {
      let token;

      before(async () => {
        await resetAccount();

        await accountRegistry.executeAccountTransaction(
          account,
          nonce,
          randomAddress(),
          0,
          '0x', {
            from: saltOwner,
          },
        );

        nonce += 1;

        token = await Token.new();
      });

      it('expect to refund in wei', async () => {
        const value = 100;
        await sendTransaction({
          value,
          to: account,
          from: addresses[0],
        });

        const output = await accountRegistry.refundAccountCall(
          account,
          nonce,
          ZERO_ADDRESS,
          value, {
            from: saltOwner,
          },
        );

        nonce += 1;

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountCallRefunded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.beneficiary).toBe(saltOwner);
        expect(logs[0].args.refundAmount).toBeBN(value);
        expect(logs[0].args.refundToken).toBeZeroAddress();

        await expect(getBalance(account)).resolves.toBe('0');
      });

      it('expect to refund in token', async () => {
        const value = 200;

        await token.mint(account, value);

        const output = await accountRegistry.refundAccountCall(
          account,
          nonce,
          token.address,
          value, {
            from: saltOwner,
          },
        );

        nonce += 1;

        logGasUsed(output);

        const { logs } = output;

        expect(logs[0].event).toBe('AccountCallRefunded');
        expect(logs[0].args.account).toBe(account);
        expect(logs[0].args.beneficiary).toBe(saltOwner);
        expect(logs[0].args.refundAmount).toBeBN(value);
        expect(logs[0].args.refundToken).toBe(token.address);

        await expect(token.balanceOf(account)).resolves.toBeBN(0);
        await expect(token.balanceOf(saltOwner)).resolves.toBeBN(value);
      });
    });
  });
});
