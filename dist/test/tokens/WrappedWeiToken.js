"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const shared_1 = require("../shared");
const { getSigners, provider } = hardhat_1.ethers;
describe('WrappedWeiToken', () => {
    let signers;
    let wrappedWeiToken;
    before(async () => {
        signers = await getSigners();
        wrappedWeiToken = await (0, shared_1.deployContract)('WrappedWeiToken');
    });
    context('fallback()', () => {
        let owner;
        before(() => {
            owner = signers.pop();
        });
        it('expect to mint tokens', async () => {
            const amount = 1000;
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
            await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(amount);
        });
    });
    context('depositTo()', () => {
        let sender;
        before(() => {
            sender = signers.pop();
            wrappedWeiToken = wrappedWeiToken.connect(sender);
        });
        it('expect to mint tokens to holder', async () => {
            const owner = (0, shared_1.randomAddress)();
            const amount = 1000;
            const { events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.depositTo(owner, {
                value: amount,
            }));
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBeZeroAddress();
            expect(event.args.to).toBe(owner);
            expect(event.args.value).toBeBN(amount);
            await expect(wrappedWeiToken.balanceOf(owner)).resolves.toBeBN(amount);
        });
    });
    context('withdraw()', () => {
        let owner;
        let amount = 1000;
        before(async () => {
            owner = signers.pop();
            wrappedWeiToken = wrappedWeiToken.connect(owner);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
        });
        it('expect to withdraw amount of wei', async () => {
            const value = 400;
            const balance = await owner.getBalance();
            const { totalCost, events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.withdraw(value));
            amount -= value;
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(owner.address);
            expect(event.args.to).toBeZeroAddress();
            expect(event.args.value).toBeBN(value);
            await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(amount);
            await expect(owner.getBalance()).resolves.toBeBN(balance.sub(totalCost).add(value));
        });
    });
    context('withdrawTo()', () => {
        let sender;
        let amount = 1000;
        before(async () => {
            sender = signers.pop();
            wrappedWeiToken = wrappedWeiToken.connect(sender);
            await (0, shared_1.processTx)(sender.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
        });
        it('expect to withdraw amount of wei to address', async () => {
            const owner = (0, shared_1.randomAddress)();
            const value = 400;
            const { events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.withdrawTo(owner, value));
            amount -= value;
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(sender.address);
            expect(event.args.to).toBeZeroAddress();
            expect(event.args.value).toBeBN(value);
            await expect(wrappedWeiToken.balanceOf(sender.address)).resolves.toBeBN(amount);
            await expect(provider.getBalance(owner)).resolves.toBeBN(value);
        });
    });
    context('withdrawAll()', () => {
        const amount = 1000;
        let owner;
        before(async () => {
            owner = signers.pop();
            wrappedWeiToken = wrappedWeiToken.connect(owner);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
        });
        it('expect to withdraw all wei', async () => {
            const balance = await owner.getBalance();
            const { totalCost, events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.withdrawAll());
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(owner.address);
            expect(event.args.to).toBeZeroAddress();
            expect(event.args.value).toBeBN(amount);
            await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(0);
            await expect(owner.getBalance()).resolves.toBeBN(balance.sub(totalCost).add(amount));
        });
    });
    context('withdrawAllTo()', () => {
        let sender;
        const amount = 1000;
        before(async () => {
            sender = signers.pop();
            wrappedWeiToken = wrappedWeiToken.connect(sender);
            await (0, shared_1.processTx)(sender.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
        });
        it('expect to withdraw all wei to address', async () => {
            const owner = (0, shared_1.randomAddress)();
            const { events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.withdrawAllTo(owner));
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(sender.address);
            expect(event.args.to).toBeZeroAddress();
            expect(event.args.value).toBeBN(amount);
            await expect(wrappedWeiToken.balanceOf(sender.address)).resolves.toBeBN(0);
            await expect(provider.getBalance(owner)).resolves.toBeBN(amount);
        });
    });
    context('transfer()', () => {
        const amount = 1000;
        let senderA;
        let senderB;
        let consumer;
        let consumerBalance;
        before(async () => {
            senderA = signers.pop();
            senderB = signers.pop();
            consumer = signers.pop();
            await (0, shared_1.processTx)(senderA.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
            await (0, shared_1.processTx)(senderB.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
            await (0, shared_1.processTx)(wrappedWeiToken.connect(consumer).startConsuming());
            consumerBalance = await consumer.getBalance();
        });
        it('expect to transfer tokens to recipient', async () => {
            const recipient = (0, shared_1.randomAddress)();
            const { events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.connect(senderA).transfer(recipient, amount));
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(senderA.address);
            expect(event.args.to).toBe(recipient);
            expect(event.args.value).toBeBN(amount);
            await expect(wrappedWeiToken.balanceOf(senderA.address)).resolves.toBeBN(0);
            await expect(wrappedWeiToken.balanceOf(recipient)).resolves.toBeBN(amount);
        });
        it('expect to withdraw when transfer to consumer', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(wrappedWeiToken.connect(senderB).transfer(consumer.address, amount));
            expect(event.event).toBe('Transfer');
            expect(event.args.from).toBe(senderB.address);
            expect(event.args.to).toBeZeroAddress();
            expect(event.args.value).toBeBN(amount);
            await expect(wrappedWeiToken.balanceOf(senderB.address)).resolves.toBeBN(0);
            await expect(consumer.getBalance()).resolves.toBeBN(consumerBalance.add(amount));
        });
    });
});
