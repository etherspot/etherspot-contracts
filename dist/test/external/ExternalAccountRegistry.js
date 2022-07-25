"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const shared_1 = require("../shared");
const { getSigners, provider } = hardhat_1.ethers;
describe('ExternalAccountRegistry', () => {
    let signers;
    let externalAccountRegistry;
    before(async () => {
        signers = await getSigners();
        externalAccountRegistry = await (0, shared_1.deployContract)('ExternalAccountRegistry');
    });
    context('addAccountOwner()', () => {
        let account;
        const owner = (0, shared_1.randomAddress)();
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
        });
        it('expect to add account owner', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(owner));
            expect(event.event).toBe('AccountOwnerAdded');
            expect(event.args.account).toBe(account.address);
            expect(event.args.owner).toBe(owner);
        });
        it('expect to revert when account owner exists', async () => {
            await expect(externalAccountRegistry.addAccountOwner(owner)).rejects.toThrow(/revert/);
        });
    });
    context('removeAccountOwner()', () => {
        const owner = (0, shared_1.randomAddress)();
        let account;
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(owner));
        });
        it("expect to revert when account owner doesn't exist", async () => {
            await expect(externalAccountRegistry.removeAccountOwner((0, shared_1.randomAddress)())).rejects.toThrow(/revert/);
        });
        it('expect to remove account owner', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(externalAccountRegistry.removeAccountOwner(owner));
            expect(event.event).toBe('AccountOwnerRemoved');
            expect(event.args.account).toBe(account.address);
            expect(event.args.owner).toBe(owner);
        });
    });
    context('addAccountProof()', () => {
        let account;
        const hash = (0, shared_1.randomHex32)();
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
        });
        it('expect to add account proof', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(externalAccountRegistry.addAccountProof(hash));
            expect(event.event).toBe('AccountProofAdded');
            expect(event.args.account).toBe(account.address);
            expect(event.args.hash).toBe(hash);
        });
        it('expect to revert when account proof exists', async () => {
            await expect(externalAccountRegistry.addAccountProof(hash)).rejects.toThrow(/revert/);
        });
    });
    context('removeAccountProof()', () => {
        let account;
        const hash = (0, shared_1.randomHex32)();
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountProof(hash));
        });
        it("expect to revert when account proof doesn't exist", async () => {
            await expect(externalAccountRegistry.removeAccountProof((0, shared_1.randomHex32)())).rejects.toThrow(/revert/);
        });
        it('expect to remove account proof', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(externalAccountRegistry.removeAccountProof(hash));
            expect(event.event).toBe('AccountProofRemoved');
            expect(event.args.account).toBe(account.address);
            expect(event.args.hash).toBe(hash);
        });
    });
    context('verifyAccountOwner()', () => {
        const ownerAdded = (0, shared_1.randomAddress)();
        const ownerRemoved = (0, shared_1.randomAddress)();
        let account;
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(ownerAdded));
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(ownerRemoved));
            await (0, shared_1.processTx)(externalAccountRegistry.removeAccountOwner(ownerRemoved));
        });
        it('expect to return true when account owner exists', async () => {
            await expect(externalAccountRegistry.verifyAccountOwner(account.address, ownerAdded)).resolves.toBeTruthy();
        });
        it("expect to return false when account owner doesn't exist", async () => {
            await expect(externalAccountRegistry.verifyAccountOwner(account.address, (0, shared_1.randomAddress)())).resolves.toBeFalsy();
        });
        it('expect to return false when account owner was removed', async () => {
            await expect(externalAccountRegistry.verifyAccountOwner(account.address, ownerRemoved)).resolves.toBeFalsy();
        });
    });
    context('verifyAccountOwnerAtBlock()', () => {
        const ownerAdded = (0, shared_1.randomAddress)();
        const ownerRemoved = (0, shared_1.randomAddress)();
        let account;
        let ownerRemovedAt;
        let blockNumber;
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
            blockNumber = await provider.getBlockNumber();
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(ownerAdded));
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountOwner(ownerRemoved));
            ({ blockNumber: ownerRemovedAt } = await (0, shared_1.processTx)(externalAccountRegistry.removeAccountOwner(ownerRemoved)));
        });
        it('expect to return true when account owner exists', async () => {
            await expect(externalAccountRegistry.verifyAccountOwnerAtBlock(account.address, ownerAdded, blockNumber)).resolves.toBeTruthy();
        });
        it('expect to return true when account owner exists at block', async () => {
            await expect(externalAccountRegistry.verifyAccountOwnerAtBlock(account.address, ownerRemoved, ownerRemovedAt - 1)).resolves.toBeTruthy();
        });
        it("expect to return false when account owner doesn't exist", async () => {
            await expect(externalAccountRegistry.verifyAccountOwnerAtBlock(account.address, (0, shared_1.randomAddress)(), blockNumber)).resolves.toBeFalsy();
        });
        it("expect to return false when account owner doesn't exist at block", async () => {
            await expect(externalAccountRegistry.verifyAccountOwnerAtBlock(account.address, ownerRemoved, ownerRemovedAt + 1)).resolves.toBeFalsy();
        });
    });
    context('verifyAccountProofAtBlock()', () => {
        let account;
        const hashAdded = (0, shared_1.randomHex32)();
        const hashRemoved = (0, shared_1.randomHex32)();
        let hashRemovedAt;
        let blockNumber;
        before(async () => {
            account = signers.pop();
            externalAccountRegistry = externalAccountRegistry.connect(account);
            blockNumber = await provider.getBlockNumber();
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountProof(hashAdded));
            await (0, shared_1.processTx)(externalAccountRegistry.addAccountProof(hashRemoved));
            ({ blockNumber: hashRemovedAt } = await (0, shared_1.processTx)(externalAccountRegistry.removeAccountProof(hashRemoved)));
        });
        it('expect to return true when account proof exists', async () => {
            await expect(externalAccountRegistry.verifyAccountProofAtBlock(account.address, hashAdded, blockNumber)).resolves.toBeTruthy();
        });
        it('expect to return true when account proof exists at block', async () => {
            await expect(externalAccountRegistry.verifyAccountProofAtBlock(account.address, hashRemoved, hashRemovedAt - 1)).resolves.toBeTruthy();
        });
        it("expect to return false when account proof doesn't exist", async () => {
            await expect(externalAccountRegistry.verifyAccountProofAtBlock(account.address, (0, shared_1.randomHex32)(), blockNumber)).resolves.toBeFalsy();
        });
        it("expect to return false when account proof doesn't exist at block", async () => {
            await expect(externalAccountRegistry.verifyAccountProofAtBlock(account.address, hashRemoved, hashRemovedAt + 1)).resolves.toBeFalsy();
        });
    });
});
