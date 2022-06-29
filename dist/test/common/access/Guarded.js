"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const shared_1 = require("../../shared");
const { getSigners } = hardhat_1.ethers;
describe('Guarded (using mock)', () => {
    const guardians = [];
    let signers;
    let guardedMock;
    before(async () => {
        signers = await getSigners();
        for (let i = 0; i < 5; i += 1) {
            guardians.push(signers.pop());
        }
        guardedMock = await (0, shared_1.deployContract)('GuardedMock', [
            guardians.map(({ address }) => address),
        ]);
    });
    context('addGuardian()', () => {
        let guardian;
        before(() => {
            guardian = signers.pop();
        });
        it('expect to add guardian', async () => {
            const sender = guardians[0];
            const { events: [event], } = await (0, shared_1.processTx)(guardedMock.connect(sender).addGuardian(guardian.address));
            expect(event.event).toBe('GuardianAdded');
            expect(event.args.sender).toBe(sender.address);
            expect(event.args.guardian).toBe(guardian.address);
            guardians.push(guardian);
        });
        it('expect to revert when guardian already exists', async () => {
            await expect(guardedMock.connect(guardians[0]).addGuardian(guardians[1].address)).rejects.toThrow(/revert/);
        });
    });
    context('removeGuardian()', () => {
        let guardian;
        before(() => {
            guardian = guardians.pop();
        });
        it('expect to remove guardian', async () => {
            const sender = guardians[0];
            const { events: [event], } = await (0, shared_1.processTx)(guardedMock.connect(sender).removeGuardian(guardian.address));
            expect(event.event).toBe('GuardianRemoved');
            expect(event.args.sender).toBe(sender.address);
            expect(event.args.guardian).toBe(guardian.address);
            guardians.push(guardian);
        });
        it("expect to revert when guardian doesn't exist", async () => {
            await expect(guardedMock.connect(guardians[0]).removeGuardian((0, shared_1.randomAddress)())).rejects.toThrow(/revert/);
        });
    });
    context('isGuardian()', () => {
        it('expect to return true when guardian exists', async () => {
            await expect(guardedMock.isGuardian(guardians[0].address)).resolves.toBeTruthy();
        });
        it("expect to return false when guardian doesn't exist", async () => {
            await expect(guardedMock.isGuardian((0, shared_1.randomAddress)())).resolves.toBeFalsy();
        });
    });
    context('isGuardian()', () => {
        const message = 'a b c';
        const messageHash = ethers_1.utils.hashMessage(message);
        it('expect to return true on correct signature', async () => {
            const signature = await guardians[0].signMessage(message);
            await expect(guardedMock.verifyGuardianSignature(messageHash, signature)).resolves.toBeTruthy();
        });
        it('expect to return false on invalid signature', async () => {
            await expect(guardedMock.verifyGuardianSignature(messageHash, (0, shared_1.randomHex32)())).resolves.toBeFalsy();
        });
    });
});
