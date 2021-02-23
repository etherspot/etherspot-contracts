import { ethers } from 'hardhat';
import {
  Account,
  AccountRegistryMock,
  AccountControllerMock,
  AccountImplementationV1,
  Account__factory as AccountFactory,
} from '../../../typings';
import {
  processTx,
  deployContract,
  isContract,
  randomAddress,
  randomHex32,
  SignerWithAddress,
  computeAccountAddress,
} from '../../shared';

const { getSigners, provider } = ethers;

describe('AccountController (using mock)', () => {
  let signers: SignerWithAddress[];
  let accountController: AccountControllerMock;
  let accountRegistry: AccountRegistryMock;
  let accountImplementation: AccountImplementationV1;

  before(async () => {
    signers = await getSigners();

    accountRegistry = await deployContract('AccountRegistryMock');

    accountImplementation = await deployContract(
      'AccountImplementationV1Mock',
      [accountRegistry.address],
    );

    accountController = await deployContract('AccountControllerMock', [
      accountRegistry.address,
      accountImplementation.address,
    ]);
  });

  const useTempAccountController = () => {
    let accountControllerTemp: AccountControllerMock;

    before(async () => {
      accountControllerTemp = accountController;
      accountController = await deployContract('AccountControllerMock', [
        accountRegistry.address,
        accountImplementation.address,
      ]);
    });

    after(() => {
      accountController = accountControllerTemp;
    });
  };

  context('accountRegistry()', () => {
    it('expect to return account registry', async () => {
      await expect(accountController.accountRegistry()).resolves.toBe(
        accountRegistry.address,
      );
    });
  });

  context('accountImplementation()', () => {
    it('expect to return account implementation', async () => {
      await expect(accountController.accountImplementation()).resolves.toBe(
        accountImplementation.address,
      );
    });
  });

  context('setAccountRegistry()', () => {
    useTempAccountController();

    it('expect to set account registry', async () => {
      const accountRegistry = randomAddress();

      const { events } = await processTx(
        accountController.setAccountRegistry(accountRegistry),
      );

      expect(events[0].event).toBe('AccountRegistryUpdated');
      expect(events[0].args.accountRegistry).toBe(accountRegistry);

      await expect(accountController.accountRegistry()).resolves.toBe(
        accountRegistry,
      );
    });
  });

  context('setAccountImplementation()', () => {
    useTempAccountController();

    it('expect to set account implementation', async () => {
      const accountImplementation = randomAddress();

      const { events } = await processTx(
        accountController.setAccountImplementation(accountImplementation),
      );

      expect(events[0].event).toBe('AccountImplementationUpdated');
      expect(events[0].args.accountImplementation).toBe(accountImplementation);

      await expect(accountController.accountImplementation()).resolves.toBe(
        accountImplementation,
      );
    });
  });

  context('deployAccount()', () => {
    it('expect to deploy account', async () => {
      const salt = randomHex32();
      const accountAddress = await computeAccountAddress(
        accountController,
        'Account',
        salt,
        accountRegistry.address,
        accountImplementation.address,
      );

      await expect(isContract(accountAddress)).resolves.toBeFalsy();

      const { events } = await processTx(accountController.deployAccount(salt));

      expect(events[0].event).toBe('AccountDeployed');
      expect(events[0].args.account).toBe(accountAddress);
      expect(events[0].args.accountImplementation).toBe(
        accountImplementation.address,
      );

      await expect(isContract(accountAddress)).resolves.toBeTruthy();
    });
  });

  context('upgradeAccount()', () => {
    useTempAccountController();

    const newAccountImplementation = randomAddress();
    let account: Account;

    before(async () => {
      const salt = randomHex32();
      const { events } = await processTx(accountController.deployAccount(salt));

      account = AccountFactory.connect(events[0].args.account, signers.pop());

      await processTx(
        accountController.setAccountImplementation(newAccountImplementation),
      );
    });

    it('expect to upgrade account', async () => {
      const { events } = await processTx(
        accountController.upgradeAccount(account.address),
      );

      expect(events[0].event).toBe('AccountUpgraded');
      expect(events[0].args.account).toBe(account.address);
      expect(events[0].args.accountImplementation).toBe(
        newAccountImplementation,
      );

      await expect(account.implementation()).resolves.toBe(
        newAccountImplementation,
      );
    });
  });

  context('executeAccountTransaction()', () => {
    const value = 1000;
    let account: string;

    before(async () => {
      const salt = randomHex32();
      const { events } = await processTx(accountController.deployAccount(salt));

      ({ account } = events[0].args);

      await processTx(
        signers.pop().sendTransaction({
          to: account,
          value,
        }),
      );
    });

    it('expect to execute account transaction', async () => {
      const to = randomAddress();
      const data = '0x';

      const { events } = await processTx(
        accountController.executeAccountTransaction(account, to, value, data),
      );

      expect(events[0].event).toBe('AccountTransactionExecuted');
      expect(events[0].args.account).toBe(account);
      expect(events[0].args.to).toBe(to);
      expect(events[0].args.value).toBeBN(value);

      await expect(provider.getBalance(to)).resolves.toBeBN(value);
    });
  });

  context('computeAccountAddress()', () => {
    it('expect to compute account address', async () => {
      const salt = randomHex32();
      const expected = await computeAccountAddress(
        accountController,
        'Account',
        salt,
        accountRegistry.address,
        accountImplementation.address,
      );

      await expect(accountController.computeAccountAddress(salt)).resolves.toBe(
        expected,
      );
    });
  });
});
