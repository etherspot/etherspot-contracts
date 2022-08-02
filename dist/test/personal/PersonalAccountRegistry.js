"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const { getSigners, provider } = hardhat_1.ethers;
describe('PersonalAccountRegistryV1', () => {
    let signers;
    let personalAccountImplementation;
    let personalAccountRegistry;
    let wrappedWeiToken;
    before(async () => {
        signers = await getSigners();
        personalAccountImplementation = await (0, shared_1.deployContract)('PersonalAccountImplementationV1');
        personalAccountRegistry = await (0, shared_1.deployContract)('PersonalAccountRegistry');
        wrappedWeiToken = await (0, shared_1.deployContract)('WrappedWeiToken');
        await (0, shared_1.processTx)(personalAccountImplementation.initialize(personalAccountRegistry.address));
        await (0, shared_1.processTx)(personalAccountRegistry.initialize([], personalAccountImplementation.address, (0, shared_1.randomAddress)()));
    });
    context('deployAccount()', () => {
        let saltOwner;
        let account;
        before(async () => {
            saltOwner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
            await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, (0, shared_1.randomAddress)()));
        });
        it('expect to deploy account', async () => {
            const { events } = await (0, shared_1.processTx)(personalAccountRegistry.connect(saltOwner).deployAccount(account));
            expect(events[0].event).toBe('AccountDeployed');
            expect(events[0].args.account).toBe(account);
        });
    });
    context('addAccountOwner()', () => {
        let saltOwner;
        let owner;
        let account;
        before(async () => {
            saltOwner = signers.pop();
            owner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
        });
        it('expect to account owner by salt owner', async () => {
            const { events } = await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, owner.address));
            expect(events[0].event).toBe('AccountOwnerAdded');
            expect(events[0].args.account).toBe(account);
            expect(events[0].args.owner).toBe(saltOwner.address);
            expect(events[1].event).toBe('AccountOwnerAdded');
            expect(events[1].args.account).toBe(account);
            expect(events[1].args.owner).toBe(owner.address);
        });
        it('expect to account owner by owner', async () => {
            const newOwner = (0, shared_1.randomAddress)();
            const { events: [event], } = await (0, shared_1.processTx)(personalAccountRegistry
                .connect(owner)
                .addAccountOwner(account, newOwner));
            expect(event.event).toBe('AccountOwnerAdded');
            expect(event.args.account).toBe(account);
            expect(event.args.owner).toBe(newOwner);
        });
        it('expect to revert when owner exists', async () => {
            await expect(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, owner.address)).rejects.toThrow(/revert/);
        });
        it('expect to revert when sender is not an owner exists', async () => {
            await expect(personalAccountRegistry
                .connect(signers.pop())
                .addAccountOwner(account, (0, shared_1.randomAddress)())).rejects.toThrow(/revert/);
        });
    });
    context('removeAccountOwner()', () => {
        let saltOwner;
        let owner1;
        let owner2;
        let account;
        before(async () => {
            saltOwner = signers.pop();
            owner1 = signers.pop();
            owner2 = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
            await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, owner1.address));
            await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, owner2.address));
        });
        it('expect to remove account owner', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .removeAccountOwner(account, owner1.address));
            expect(event.event).toBe('AccountOwnerRemoved');
            expect(event.args.account).toBe(account);
            expect(event.args.owner).toBe(owner1.address);
        });
        it("expect to revert when owner doesn't exist", async () => {
            await expect(personalAccountRegistry
                .connect(saltOwner)
                .removeAccountOwner(account, (0, shared_1.randomAddress)())).rejects.toThrow(/revert/);
        });
        it('expect to revert when sender is not an owner exists', async () => {
            await expect(personalAccountRegistry
                .connect(signers.pop())
                .removeAccountOwner(account, owner2.address)).rejects.toThrow(/revert/);
        });
    });
    context('executeAccountTransaction()', () => {
        let owner;
        let account;
        let balance = 1000;
        before(async () => {
            owner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(owner.address);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: account,
                value: balance,
            }));
        });
        it('expect to execute first transaction', async () => {
            const to = (0, shared_1.randomAddress)();
            const value = 100;
            const data = '0x';
            const { events } = await (0, shared_1.processTx)(personalAccountRegistry
                .connect(owner)
                .executeAccountTransaction(account, to, value, data));
            balance -= value;
            expect(events[0].event).toBe('AccountOwnerAdded');
            expect(events[0].args.account).toBe(account);
            expect(events[0].args.owner).toBe(owner.address);
            expect(events[1].event).toBe('AccountDeployed');
            expect(events[1].args.account).toBe(account);
            expect(events[2].event).toBe('AccountTransactionExecuted');
            expect(events[2].args.account).toBe(account);
            expect(events[2].args.to).toBe(to);
            expect(events[2].args.value).toBeBN(value);
            expect(events[2].args.data).toBe(data);
            await expect(provider.getBalance(account)).resolves.toBeBN(balance);
        });
        it('expect to execute second transaction (with data)', async () => {
            const to = (0, shared_1.randomAddress)();
            const value = 200;
            const data = '0x010203';
            const { events: [event], } = await (0, shared_1.processTx)(personalAccountRegistry
                .connect(owner)
                .executeAccountTransaction(account, to, value, data));
            balance -= value;
            expect(event.event).toBe('AccountTransactionExecuted');
            expect(event.args.account).toBe(account);
            expect(event.args.to).toBe(to);
            expect(event.args.value).toBeBN(value);
            expect(event.args.data).toBe(data);
            await expect(provider.getBalance(account)).resolves.toBeBN(balance);
        });
        it('expect to revert when sender is not an account owner', async () => {
            const to = (0, shared_1.randomAddress)();
            const value = 200;
            const data = '0x010203';
            await expect(personalAccountRegistry
                .connect(owner)
                .executeAccountTransaction((0, shared_1.randomAddress)(), to, value, data)).rejects.toThrow(/revert/);
        });
    });
    context('refundAccountCall()', () => {
        let owner;
        let account;
        before(async () => {
            owner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(owner.address);
        });
        context('# with wei', () => {
            let balance = 1000;
            before(async () => {
                await (0, shared_1.processTx)(owner.sendTransaction({
                    to: account,
                    value: balance,
                }));
            });
            it('expect to do first refund', async () => {
                const value = 100;
                const ownerBalance = await owner.getBalance();
                const { events, totalCost } = await (0, shared_1.processTx)(personalAccountRegistry
                    .connect(owner)
                    .refundAccountCall(account, ethers_1.constants.AddressZero, value));
                balance -= value;
                expect(events[0].event).toBe('AccountOwnerAdded');
                expect(events[1].event).toBe('AccountDeployed');
                expect(events[2].event).toBe('AccountCallRefunded');
                expect(events[2].args.account).toBe(account);
                expect(events[2].args.beneficiary).toBe(owner.address);
                expect(events[2].args.token).toBeZeroAddress();
                expect(events[2].args.value).toBeBN(value);
                await expect(owner.getBalance()).resolves.toBeBN(ownerBalance.sub(totalCost).add(value));
                await expect(provider.getBalance(account)).resolves.toBeBN(balance);
            });
            it('expect to do second refund', async () => {
                const value = 50;
                const ownerBalance = await owner.getBalance();
                const { events: [event], totalCost, } = await (0, shared_1.processTx)(personalAccountRegistry
                    .connect(owner)
                    .refundAccountCall(account, ethers_1.constants.AddressZero, value));
                balance -= value;
                expect(event.event).toBe('AccountCallRefunded');
                expect(event.args.account).toBe(account);
                expect(event.args.beneficiary).toBe(owner.address);
                expect(event.args.token).toBeZeroAddress();
                expect(event.args.value).toBeBN(value);
                await expect(owner.getBalance()).resolves.toBeBN(ownerBalance.sub(totalCost).add(value));
                await expect(provider.getBalance(account)).resolves.toBeBN(balance);
            });
        });
        context('# with token', () => {
            let balance = 1000;
            before(async () => {
                await (0, shared_1.processTx)(wrappedWeiToken.connect(owner).depositTo(account, {
                    value: balance,
                }));
            });
            it('expect to do first refund', async () => {
                const value = 100;
                const ownerBalance = await wrappedWeiToken.balanceOf(owner.address);
                const { events } = await (0, shared_1.processTx)(personalAccountRegistry
                    .connect(owner)
                    .refundAccountCall(account, wrappedWeiToken.address, value));
                balance -= value;
                const event = events.find(({ event }) => event === 'AccountCallRefunded');
                expect(event.args.account).toBe(account);
                expect(event.args.beneficiary).toBe(owner.address);
                expect(event.args.token).toBe(wrappedWeiToken.address);
                expect(event.args.value).toBeBN(value);
                await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(ownerBalance.add(value));
                await expect(wrappedWeiToken.balanceOf(account)).resolves.toBeBN(balance);
            });
            it('expect to do second refund', async () => {
                const value = 50;
                const ownerBalance = await wrappedWeiToken.balanceOf(owner.address);
                const { events } = await (0, shared_1.processTx)(personalAccountRegistry
                    .connect(owner)
                    .refundAccountCall(account, wrappedWeiToken.address, value));
                balance -= value;
                const event = events.find(({ event }) => event === 'AccountCallRefunded');
                expect(event.event).toBe('AccountCallRefunded');
                expect(event.args.account).toBe(account);
                expect(event.args.beneficiary).toBe(owner.address);
                expect(event.args.token).toBe(wrappedWeiToken.address);
                expect(event.args.value).toBeBN(value);
                await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(ownerBalance.add(value));
                await expect(wrappedWeiToken.balanceOf(account)).resolves.toBeBN(balance);
            });
        });
    });
    context('computeAccountAddress()', () => {
        it('expect to return correct account address', async () => {
            const owner = (0, shared_1.randomAddress)();
            const account = await (0, shared_1.computeAccountAddress)(personalAccountRegistry, 'Account', owner, personalAccountRegistry.address, personalAccountImplementation.address);
            await expect(personalAccountRegistry.computeAccountAddress(owner)).resolves.toBe(account);
        });
    });
    context('isAccountDeployed()', () => {
        let account;
        before(async () => {
            const owner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(owner.address);
            await (0, shared_1.processTx)(personalAccountRegistry
                .connect(owner)
                .executeAccountTransaction(account, (0, shared_1.randomAddress)(), 0, '0x010203'));
        });
        it('expect to return true when account is deployed', async () => {
            await expect(personalAccountRegistry.isAccountDeployed(account)).resolves.toBeTruthy();
        });
        it('expect to return false when account is not deployed', async () => {
            await expect(personalAccountRegistry.isAccountDeployed((0, shared_1.randomAddress)())).resolves.toBeFalsy();
        });
    });
    context('verifyAccountOwner()', () => {
        const addedOwner = (0, shared_1.randomAddress)();
        const removedOwner = (0, shared_1.randomAddress)();
        let saltOwner;
        let account;
        before(async () => {
            saltOwner = signers.pop();
            personalAccountRegistry = personalAccountRegistry.connect(saltOwner);
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
            await (0, shared_1.processTx)(personalAccountRegistry
                .connect(saltOwner)
                .addAccountOwner(account, addedOwner));
            await (0, shared_1.processTx)(personalAccountRegistry.addAccountOwner(account, removedOwner));
            await (0, shared_1.processTx)(personalAccountRegistry.removeAccountOwner(account, removedOwner));
        });
        it('expect to return true for salt owner', async () => {
            await expect(personalAccountRegistry.verifyAccountOwner(account, saltOwner.address)).resolves.toBeTruthy();
        });
        it('expect to return true for added owner', async () => {
            await expect(personalAccountRegistry.verifyAccountOwner(account, addedOwner)).resolves.toBeTruthy();
        });
        it('expect to return false for removed owner', async () => {
            await expect(personalAccountRegistry.verifyAccountOwner(account, removedOwner)).resolves.toBeFalsy();
        });
        it('expect to return false for unknown owner', async () => {
            await expect(personalAccountRegistry.verifyAccountOwner(account, (0, shared_1.randomAddress)())).resolves.toBeFalsy();
        });
    });
    context('verifyAccountOwnerAtBlock()', () => {
        const addedOwner = (0, shared_1.randomAddress)();
        const removedOwner = (0, shared_1.randomAddress)();
        let saltOwner;
        let account;
        let removedAt;
        before(async () => {
            saltOwner = signers.pop();
            personalAccountRegistry = personalAccountRegistry.connect(saltOwner);
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
            await (0, shared_1.processTx)(personalAccountRegistry.addAccountOwner(account, addedOwner));
            await (0, shared_1.processTx)(personalAccountRegistry.addAccountOwner(account, removedOwner));
            ({ blockNumber: removedAt } = await (0, shared_1.processTx)(personalAccountRegistry.removeAccountOwner(account, removedOwner)));
        });
        it('expect to return true for salt owner at any block', async () => {
            await expect(personalAccountRegistry.verifyAccountOwnerAtBlock(account, saltOwner.address, removedAt)).resolves.toBeTruthy();
        });
        it('expect to return true for added owner at any block', async () => {
            await expect(personalAccountRegistry.verifyAccountOwnerAtBlock(account, addedOwner, removedAt)).resolves.toBeTruthy();
        });
        it('expect to return true for removed owner before removing block', async () => {
            await expect(personalAccountRegistry.verifyAccountOwnerAtBlock(account, removedOwner, removedAt - 1)).resolves.toBeTruthy();
        });
        it('expect to return false for removed owner after removing block', async () => {
            await expect(personalAccountRegistry.verifyAccountOwnerAtBlock(account, removedOwner, removedAt)).resolves.toBeFalsy();
        });
        it('expect to return false for unknown owner at any block', async () => {
            await expect(personalAccountRegistry.verifyAccountOwnerAtBlock(account, (0, shared_1.randomAddress)(), removedAt)).resolves.toBeFalsy();
        });
    });
    context('isValidAccountSignature()', () => {
        let saltOwner;
        let unknownOwner;
        let account;
        before(async () => {
            saltOwner = signers.pop();
            unknownOwner = signers.pop();
            account = await personalAccountRegistry.computeAccountAddress(saltOwner.address);
        });
        it('expect to return true for valid signature', async () => {
            const message = 'test message';
            const signature = await saltOwner.signMessage(message);
            await expect(personalAccountRegistry['isValidAccountSignature(address,bytes32,bytes)'](account, ethers_1.utils.hashMessage(message), signature)).resolves.toBeTruthy();
            await expect(personalAccountRegistry['isValidAccountSignature(address,bytes,bytes)'](account, ethers_1.utils.hexlify(ethers_1.utils.toUtf8Bytes(message)), signature)).resolves.toBeTruthy();
        });
        it('expect to return false for invalid signature', async () => {
            const message = 'test message';
            const signature = await unknownOwner.signMessage(message);
            await expect(personalAccountRegistry['isValidAccountSignature(address,bytes32,bytes)'](account, ethers_1.utils.hashMessage(message), signature)).resolves.toBeFalsy();
            await expect(personalAccountRegistry['isValidAccountSignature(address,bytes,bytes)'](account, ethers_1.utils.hexlify(ethers_1.utils.toUtf8Bytes(message)), signature)).resolves.toBeFalsy();
        });
    });
});
