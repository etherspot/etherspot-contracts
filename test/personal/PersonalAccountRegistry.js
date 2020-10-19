/* eslint-env node, mocha */

const expect = require('expect');
const {
  randomAddress,
  logGasUsage,
  getBalance,
  calcCost,
  computeCreate2Address,
  parseBlockNumber,
} = require('../utils');
const { ZERO_ADDRESS } = require('../constants');

const Account = artifacts.require('Account');
const PersonalAccountRegistry = artifacts.require('PersonalAccountRegistry');
const WrappedWeiToken = artifacts.require('WrappedWeiToken');

contract('PersonalAccountRegistry', (addresses) => {
  const {
    eth: {
      sendTransaction,
    },
  } = web3;

  const gateway = addresses.pop();

  /**
   * @type Contract
   */
  let accountRegistry;

  /**
   * @type Contract
   */
  let token;

  before(async () => {
    accountRegistry = await PersonalAccountRegistry.new();
    token = await WrappedWeiToken.new();

    await accountRegistry.initialize(gateway);
  });

  context('addAccountOwner()', () => {
    const saltOwner = addresses.pop();
    const owner = addresses.pop();
    let account;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(saltOwner);
    });

    it('expect to account owner by salt owner', async () => {
      const output = await accountRegistry.addAccountOwner(
        account,
        owner, {
          from: saltOwner,
        },
      );

      logGasUsage(output);

      const { logs } = output;

      expect(logs[0].event)
        .toBe('AccountOwnerAdded');
      expect(logs[0].args.account)
        .toBe(account);
      expect(logs[0].args.owner)
        .toBe(saltOwner);

      expect(logs[1].event)
        .toBe('AccountOwnerAdded');
      expect(logs[1].args.account)
        .toBe(account);
      expect(logs[1].args.owner)
        .toBe(owner);
    });

    it('expect to account owner by owner', async () => {
      const newOwner = randomAddress();
      const output = await accountRegistry.addAccountOwner(
        account,
        newOwner, {
          from: owner,
        },
      );

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AccountOwnerAdded');
      expect(log.args.account)
        .toBe(account);
      expect(log.args.owner)
        .toBe(newOwner);
    });

    it('expect to revert when owner exists', async () => {
      await expect(accountRegistry.addAccountOwner(
        account,
        owner, {
          from: saltOwner,
        },
      ))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert when sender is not an owner exists', async () => {
      const from = addresses.pop();
      await expect(accountRegistry.addAccountOwner(
        account,
        owner, {
          from,
        },
      ))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    const saltOwner = addresses.pop();
    const owner1 = addresses.pop();
    const owner2 = addresses.pop();
    let account;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(saltOwner);

      await accountRegistry.addAccountOwner(
        account,
        owner1, {
          from: saltOwner,
        },
      );

      await accountRegistry.addAccountOwner(
        account,
        owner2, {
          from: saltOwner,
        },
      );
    });

    it('expect to remove account owner', async () => {
      const output = await accountRegistry.removeAccountOwner(
        account,
        owner1, {
          from: saltOwner,
        },
      );

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AccountOwnerRemoved');
      expect(log.args.account)
        .toBe(account);
      expect(log.args.owner)
        .toBe(owner1);
    });

    it('expect to revert when owner does\'t exist', async () => {
      await expect(accountRegistry.removeAccountOwner(
        account,
        randomAddress(), {
          from: saltOwner,
        },
      ))
        .rejects
        .toThrow(/revert/);
    });

    it('expect to revert when sender is not an owner exists', async () => {
      const from = addresses.pop();
      await expect(accountRegistry.removeAccountOwner(
        account,
        owner2, {
          from,
        },
      ))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('executeAccountTransaction()', () => {
    const owner = addresses.pop();
    let account;
    let balance = 1000;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(owner);

      await sendTransaction({
        from: owner,
        to: account,
        value: balance,
      });
    });

    it('expect to execute first transaction', async () => {
      const to = randomAddress();
      const value = 100;
      const data = '0x';

      const output = await accountRegistry.executeAccountTransaction(
        account,
        to,
        value,
        data, {
          from: owner,
        },
      );

      balance -= value;

      logGasUsage(output);

      const { logs } = output;

      expect(logs[0].event)
        .toBe('AccountOwnerAdded');
      expect(logs[0].args.account)
        .toBe(account);
      expect(logs[0].args.owner)
        .toBe(owner);

      expect(logs[1].event)
        .toBe('AccountDeployed');
      expect(logs[1].args.account)
        .toBe(account);

      expect(logs[2].event)
        .toBe('AccountTransactionExecuted');
      expect(logs[2].args.account)
        .toBe(account);
      expect(logs[2].args.to)
        .toBe(to);
      expect(logs[2].args.value)
        .toBeBN(value);
      expect(logs[2].args.data)
        .toBeNull();

      await expect(getBalance(account))
        .resolves
        .toBeBN(balance);
    });

    it('expect to execute second transaction (with data)', async () => {
      const to = randomAddress();
      const value = 200;
      const data = '0x010203';

      const output = await accountRegistry.executeAccountTransaction(
        account,
        to,
        value,
        data, {
          from: owner,
        },
      );

      balance -= value;

      logGasUsage(output);

      const { logs: [log] } = output;

      expect(log.event)
        .toBe('AccountTransactionExecuted');
      expect(log.args.account)
        .toBe(account);
      expect(log.args.to)
        .toBe(to);
      expect(log.args.value)
        .toBeBN(value);
      expect(log.args.data)
        .toBe(data);

      await expect(getBalance(account))
        .resolves
        .toBeBN(balance);
    });

    it('expect to revert when sender is not an account owner', async () => {
      const to = randomAddress();
      const value = 200;
      const data = '0x010203';

      await expect(accountRegistry.executeAccountTransaction(
        randomAddress(),
        to,
        value,
        data, {
          from: owner,
        },
      ))
        .rejects
        .toThrow(/revert/);
    });
  });

  context('refundAccountCall()', () => {
    const owner = addresses.pop();
    let account;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(owner);
    });

    context('# with wei', () => {
      let balance = 1000;

      before(async () => {
        await sendTransaction({
          from: owner,
          to: account,
          value: balance,
        });
      });

      it('expect to do first refund', async () => {
        const value = 100;
        const ownerBalance = await getBalance(owner);

        const output = await accountRegistry.refundAccountCall(
          account,
          ZERO_ADDRESS,
          value, {
            from: owner,
          },
        );

        balance -= value;

        logGasUsage(output);

        const cost = calcCost(output);

        const { logs } = output;

        expect(logs[0].event)
          .toBe('AccountOwnerAdded');
        expect(logs[1].event)
          .toBe('AccountDeployed');
        expect(logs[2].event)
          .toBe('AccountCallRefunded');
        expect(logs[2].args.account)
          .toBe(account);
        expect(logs[2].args.beneficiary)
          .toBe(owner);
        expect(logs[2].args.token)
          .toBeZeroAddress();
        expect(logs[2].args.value)
          .toBeBN(value);

        await expect(getBalance(owner))
          .resolves
          .toBeBN(ownerBalance.sub(cost)
            .addn(value));

        await expect(getBalance(account))
          .resolves
          .toBeBN(balance);
      });

      it('expect to do second refund', async () => {
        const value = 50;
        const ownerBalance = await getBalance(owner);

        const output = await accountRegistry.refundAccountCall(
          account,
          ZERO_ADDRESS,
          value, {
            from: owner,
          },
        );

        balance -= value;

        logGasUsage(output);

        const cost = calcCost(output);

        const { logs: [log] } = output;

        expect(log.event)
          .toBe('AccountCallRefunded');
        expect(log.args.account)
          .toBe(account);
        expect(log.args.beneficiary)
          .toBe(owner);
        expect(log.args.token)
          .toBeZeroAddress();
        expect(log.args.value)
          .toBeBN(value);

        await expect(getBalance(owner))
          .resolves
          .toBeBN(ownerBalance.sub(cost)
            .addn(value));

        await expect(getBalance(account))
          .resolves
          .toBeBN(balance);
      });
    });

    context('# with token', () => {
      let balance = 1000;

      before(async () => {
        await token.depositTo(account, {
          from: owner,
          value: balance,
        });
      });

      it('expect to do first refund', async () => {
        const value = 100;
        const ownerBalance = await token.balanceOf(owner);

        const output = await accountRegistry.refundAccountCall(
          account,
          token.address,
          value, {
            from: owner,
          },
        );

        balance -= value;

        logGasUsage(output);

        const { logs: [log] } = output;

        expect(log.event)
          .toBe('AccountCallRefunded');
        expect(log.args.account)
          .toBe(account);
        expect(log.args.beneficiary)
          .toBe(owner);
        expect(log.args.token)
          .toBe(token.address);
        expect(log.args.value)
          .toBeBN(value);

        await expect(token.balanceOf(owner))
          .resolves
          .toBeBN(ownerBalance.addn(value));

        await expect(token.balanceOf(account))
          .resolves
          .toBeBN(balance);
      });

      it('expect to do second refund', async () => {
        const value = 50;
        const ownerBalance = await token.balanceOf(owner);

        const output = await accountRegistry.refundAccountCall(
          account,
          token.address,
          value, {
            from: owner,
          },
        );

        balance -= value;

        logGasUsage(output);

        const { logs: [log] } = output;

        expect(log.event)
          .toBe('AccountCallRefunded');
        expect(log.args.account)
          .toBe(account);
        expect(log.args.beneficiary)
          .toBe(owner);
        expect(log.args.token)
          .toBe(token.address);
        expect(log.args.value)
          .toBeBN(value);

        await expect(token.balanceOf(owner))
          .resolves
          .toBeBN(ownerBalance.addn(value));

        await expect(token.balanceOf(account))
          .resolves
          .toBeBN(balance);
      });
    });
  });

  context('computeAccountAddress()', () => {
    it('expect to return correct account address', async () => {
      const owner = randomAddress();

      await expect(accountRegistry.computeAccountAddress(owner))
        .resolves
        .toBe(
          computeCreate2Address(accountRegistry, owner, Account.bytecode),
        );
    });
  });

  context('isAccountDeployed()', () => {
    const owner = addresses.pop();
    let account;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(owner);

      // account deployment is a part of executing first account transaction
      await accountRegistry.executeAccountTransaction(
        account,
        randomAddress(),
        0,
        '0x010203', {
          from: owner,
        },
      );
    });

    it('expect to return true when account is deployed', async () => {
      await expect(accountRegistry.isAccountDeployed(account))
        .resolves
        .toBeTruthy();
    });

    it('expect to return false when account is not deployed', async () => {
      await expect(accountRegistry.isAccountDeployed(randomAddress()))
        .resolves
        .toBeFalsy();
    });
  });

  context('verifyAccountOwner()', () => {
    const saltOwner = addresses.pop();
    const addedOwner = randomAddress();
    const removedOwner = randomAddress();
    let account;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(saltOwner);

      await accountRegistry.addAccountOwner(
        account,
        addedOwner, {
          from: saltOwner,
        },
      );
      await accountRegistry.addAccountOwner(
        account,
        removedOwner, {
          from: saltOwner,
        },
      );
      await accountRegistry.removeAccountOwner(
        account,
        removedOwner, {
          from: saltOwner,
        },
      );
    });

    it('expect to return true for salt owner', async () => {
      await expect(accountRegistry.verifyAccountOwner(account, saltOwner))
        .resolves
        .toBeTruthy();
    });

    it('expect to return true for added owner', async () => {
      await expect(accountRegistry.verifyAccountOwner(account, addedOwner))
        .resolves
        .toBeTruthy();
    });

    it('expect to return false for removed owner', async () => {
      await expect(accountRegistry.verifyAccountOwner(account, removedOwner))
        .resolves
        .toBeFalsy();
    });

    it('expect to return false for unknown owner', async () => {
      await expect(accountRegistry.verifyAccountOwner(account, randomAddress()))
        .resolves
        .toBeFalsy();
    });
  });

  context('verifyAccountOwnerAtBlock()', () => {
    const saltOwner = addresses.pop();
    const addedOwner = randomAddress();
    const removedOwner = randomAddress();
    let account;
    let removedAt;

    before(async () => {
      account = await accountRegistry.computeAccountAddress(saltOwner);

      await accountRegistry.addAccountOwner(
        account,
        addedOwner, {
          from: saltOwner,
        },
      );
      await accountRegistry.addAccountOwner(
        account,
        removedOwner, {
          from: saltOwner,
        },
      );
      removedAt = parseBlockNumber(await accountRegistry.removeAccountOwner(
        account,
        removedOwner, {
          from: saltOwner,
        },
      ));
    });

    it('expect to return true for salt owner at any block', async () => {
      await expect(accountRegistry.verifyAccountOwnerAtBlock(account, saltOwner, removedAt))
        .resolves
        .toBeTruthy();
    });

    it('expect to return true for added owner at any block', async () => {
      await expect(accountRegistry.verifyAccountOwnerAtBlock(account, addedOwner, removedAt))
        .resolves
        .toBeTruthy();
    });

    it('expect to return true for removed owner before removing block', async () => {
      await expect(accountRegistry.verifyAccountOwnerAtBlock(account, removedOwner, removedAt - 1))
        .resolves
        .toBeTruthy();
    });

    it('expect to return false for removed owner after removing block', async () => {
      await expect(accountRegistry.verifyAccountOwnerAtBlock(account, removedOwner, removedAt))
        .resolves
        .toBeFalsy();
    });

    it('expect to return false for unknown owner at any block', async () => {
      await expect(accountRegistry.verifyAccountOwnerAtBlock(account, randomAddress(), removedAt))
        .resolves
        .toBeFalsy();
    });
  });
});
