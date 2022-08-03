"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const typings_1 = require("../../../typings");
const shared_1 = require("../../shared");
const { getSigners, provider } = hardhat_1.ethers;
describe('AccountController (using mock)', () => {
    let signers;
    let accountController;
    let accountRegistry;
    let accountImplementation;
    before(async () => {
        signers = await getSigners();
        accountRegistry = await (0, shared_1.deployContract)('AccountRegistryMock');
        accountImplementation = await (0, shared_1.deployContract)('AccountImplementationV1Mock', [accountRegistry.address]);
        accountController = await (0, shared_1.deployContract)('AccountControllerMock', [
            accountRegistry.address,
            accountImplementation.address,
        ]);
    });
    const useTempAccountController = () => {
        let accountControllerTemp;
        before(async () => {
            accountControllerTemp = accountController;
            accountController = await (0, shared_1.deployContract)('AccountControllerMock', [
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
            await expect(accountController.accountRegistry()).resolves.toBe(accountRegistry.address);
        });
    });
    context('accountImplementation()', () => {
        it('expect to return account implementation', async () => {
            await expect(accountController.accountImplementation()).resolves.toBe(accountImplementation.address);
        });
    });
    context('setAccountRegistry()', () => {
        useTempAccountController();
        it('expect to set account registry', async () => {
            const accountRegistry = (0, shared_1.randomAddress)();
            const { events } = await (0, shared_1.processTx)(accountController.setAccountRegistry(accountRegistry));
            expect(events[0].event).toBe('AccountRegistryUpdated');
            expect(events[0].args.accountRegistry).toBe(accountRegistry);
            await expect(accountController.accountRegistry()).resolves.toBe(accountRegistry);
        });
    });
    context('setAccountImplementation()', () => {
        useTempAccountController();
        it('expect to set account implementation', async () => {
            const accountImplementation = (0, shared_1.randomAddress)();
            const { events } = await (0, shared_1.processTx)(accountController.setAccountImplementation(accountImplementation));
            expect(events[0].event).toBe('AccountImplementationUpdated');
            expect(events[0].args.accountImplementation).toBe(accountImplementation);
            await expect(accountController.accountImplementation()).resolves.toBe(accountImplementation);
        });
    });
    context('deployAccount()', () => {
        it('expect to deploy account', async () => {
            const salt = (0, shared_1.randomHex32)();
            const accountAddress = await (0, shared_1.computeAccountAddress)(accountController, 'Account', salt, accountRegistry.address, accountImplementation.address);
            await expect((0, shared_1.isContract)(accountAddress)).resolves.toBeFalsy();
            const { events } = await (0, shared_1.processTx)(accountController.deployAccount(salt));
            expect(events[0].event).toBe('AccountDeployed');
            expect(events[0].args.account).toBe(accountAddress);
            expect(events[0].args.accountImplementation).toBe(accountImplementation.address);
            await expect((0, shared_1.isContract)(accountAddress)).resolves.toBeTruthy();
        });
    });
    context('upgradeAccount()', () => {
        useTempAccountController();
        const newAccountImplementation = (0, shared_1.randomAddress)();
        let account;
        before(async () => {
            const salt = (0, shared_1.randomHex32)();
            const { events } = await (0, shared_1.processTx)(accountController.deployAccount(salt));
            account = typings_1.Account__factory.connect(events[0].args.account, signers.pop());
            await (0, shared_1.processTx)(accountController.setAccountImplementation(newAccountImplementation));
        });
        it('expect to upgrade account', async () => {
            const { events } = await (0, shared_1.processTx)(accountController.upgradeAccount(account.address));
            expect(events[0].event).toBe('AccountUpgraded');
            expect(events[0].args.account).toBe(account.address);
            expect(events[0].args.accountImplementation).toBe(newAccountImplementation);
            await expect(account.implementation()).resolves.toBe(newAccountImplementation);
        });
    });
    context('executeAccountTransaction()', () => {
        const value = 1000;
        let account;
        before(async () => {
            const salt = (0, shared_1.randomHex32)();
            const { events } = await (0, shared_1.processTx)(accountController.deployAccount(salt));
            ({ account } = events[0].args);
            await (0, shared_1.processTx)(signers.pop().sendTransaction({
                to: account,
                value,
            }));
        });
        it('expect to execute account transaction', async () => {
            const to = (0, shared_1.randomAddress)();
            const data = '0x';
            const { events } = await (0, shared_1.processTx)(accountController.executeAccountTransaction(account, to, value, data));
            expect(events[0].event).toBe('AccountTransactionExecuted');
            expect(events[0].args.account).toBe(account);
            expect(events[0].args.to).toBe(to);
            expect(events[0].args.value).toBeBN(value);
            await expect(provider.getBalance(to)).resolves.toBeBN(value);
        });
    });
    context('computeAccountAddress()', () => {
        it('expect to compute account address', async () => {
            const salt = (0, shared_1.randomHex32)();
            const expected = await (0, shared_1.computeAccountAddress)(accountController, 'Account', salt, accountRegistry.address, accountImplementation.address);
            await expect(accountController.computeAccountAddress(salt)).resolves.toBe(expected);
        });
    });
});
