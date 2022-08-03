"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const utils_1 = require("./utils");
const { getSigners, provider } = hardhat_1.ethers;
describe('PaymentRegistry', () => {
    const depositExitLockPeriod = ethers_1.BigNumber.from(3);
    let signers;
    let guardian;
    let paymentRegistry;
    let wrappedWeiToken;
    let depositWithdrawalMessagePayloadFactory;
    let paymentChannelCommitMessagePayloadFactory;
    before(async () => {
        signers = await getSigners();
        guardian = signers.pop();
        paymentRegistry = await (0, shared_1.deployContract)('PaymentRegistry');
        wrappedWeiToken = await (0, shared_1.deployContract)('WrappedWeiToken');
        await (0, shared_1.processTx)(paymentRegistry.initialize(ethers_1.constants.AddressZero, ethers_1.constants.AddressZero, depositExitLockPeriod, [guardian.address], (0, shared_1.randomAddress)()));
        depositWithdrawalMessagePayloadFactory = (0, shared_1.createMessagePayloadFactory)(paymentRegistry, 'DepositWithdrawal', [
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ]);
        paymentChannelCommitMessagePayloadFactory = (0, shared_1.createMessagePayloadFactory)(paymentRegistry, 'PaymentChannelCommit', [
            {
                name: 'sender',
                type: 'address',
            },
            {
                name: 'recipient',
                type: 'address',
            },
            {
                name: 'token',
                type: 'address',
            },
            {
                name: 'uid',
                type: 'bytes32',
            },
            {
                name: 'blockNumber',
                type: 'uint256',
            },
            {
                name: 'amount',
                type: 'uint256',
            },
        ]);
    });
    context('deployDepositAccount()', () => {
        const owner = (0, shared_1.randomAddress)();
        let ownerDeposit;
        before(async () => {
            ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner);
        });
        it('expect to deploy owner account', async () => {
            const { events: [event], } = await (0, shared_1.processTx)(paymentRegistry.deployDepositAccount(owner));
            expect(event.event).toBe('DepositAccountDeployed');
            expect(event.args.depositAccount).toBe(ownerDeposit);
            expect(event.args.owner).toBe(owner);
        });
    });
    context('deposit exit', () => {
        const amount = 100;
        let owner;
        let ownerDeposit;
        before(async () => {
            owner = signers.pop();
            ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner.address);
            paymentRegistry = paymentRegistry.connect(owner);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: ownerDeposit,
                value: amount,
            }));
        });
        context('requestDepositExit()', () => {
            it('expect to request deposit exit', async () => {
                const now = (0, shared_1.getNow)();
                const { events } = await (0, shared_1.processTx)(paymentRegistry.requestDepositExit(ethers_1.constants.AddressZero));
                expect(events[0].event).toBe('DepositAccountDeployed');
                expect(events[0].args.depositAccount).toBe(ownerDeposit);
                expect(events[0].args.owner).toBe(owner.address);
                expect(events[1].event).toBe('DepositExitRequested');
                expect(events[1].args.depositAccount).toBe(ownerDeposit);
                expect(events[1].args.owner).toBe(owner.address);
                expect(events[1].args.token).toBeZeroAddress();
                expect(events[1].args.lockedUntil).toBeGreaterThanOrEqualBN(now);
            });
            it('expect to revert when exit was requested', async () => {
                await expect(paymentRegistry.requestDepositExit(ethers_1.constants.AddressZero)).rejects.toThrow(/revert/);
            });
        });
        context('processDepositExit()', () => {
            it('expect to revert before lockedUntil time', async () => {
                await expect(paymentRegistry.processDepositExit(ethers_1.constants.AddressZero)).rejects.toThrow(/revert/);
            });
            it('expect to exit after lockedUntil time', async () => {
                await (0, shared_1.increaseTime)(depositExitLockPeriod);
                const ownerBalance = await owner.getBalance();
                const { events: [event], totalCost, } = await (0, shared_1.processTx)(paymentRegistry.processDepositExit(ethers_1.constants.AddressZero));
                expect(event.event).toBe('DepositExitCompleted');
                expect(event.args.depositAccount).toBe(ownerDeposit);
                expect(event.args.owner).toBe(owner.address);
                expect(event.args.token).toBeZeroAddress();
                expect(event.args.amount).toBeBN(amount);
                await expect(owner.getBalance()).resolves.toBeBN(ownerBalance.sub(totalCost).add(amount));
            });
        });
    });
    context('withdrawDeposit()', () => {
        const totalAmount = 200;
        let owner;
        let ownerDeposit;
        let amount = 0;
        before(async () => {
            owner = signers.pop();
            ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner.address);
            paymentRegistry = paymentRegistry.connect(owner);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: ownerDeposit,
                value: totalAmount,
            }));
        });
        it('expect to withdraw - #1 call', async () => {
            const value = 75;
            const ownerBalance = await owner.getBalance();
            amount += value;
            const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(guardian, {
                owner: owner.address,
                token: ethers_1.constants.AddressZero,
                amount,
            });
            const { events, totalCost } = await (0, shared_1.processTx)(paymentRegistry.withdrawDeposit(ethers_1.constants.AddressZero, amount, guardianSignature));
            expect(events[0].event).toBe('DepositAccountDeployed');
            expect(events[0].args.depositAccount).toBe(ownerDeposit);
            expect(events[0].args.owner).toBe(owner.address);
            expect(events[1].event).toBe('DepositWithdrawn');
            expect(events[1].args.depositAccount).toBe(ownerDeposit);
            expect(events[1].args.owner).toBe(owner.address);
            expect(events[1].args.token).toBeZeroAddress();
            expect(events[1].args.amount).toBeBN(amount);
            await expect(owner.getBalance()).resolves.toBeBN(ownerBalance.sub(totalCost).add(value));
        });
        it('expect to withdraw - #2 call', async () => {
            const value = 55;
            const ownerBalance = await owner.getBalance();
            amount += value;
            const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(guardian, {
                owner: owner.address,
                token: ethers_1.constants.AddressZero,
                amount,
            });
            const { events: [event], totalCost, } = await (0, shared_1.processTx)(paymentRegistry.withdrawDeposit(ethers_1.constants.AddressZero, amount, guardianSignature));
            expect(event.event).toBe('DepositWithdrawn');
            expect(event.args.depositAccount).toBe(ownerDeposit);
            expect(event.args.owner).toBe(owner.address);
            expect(event.args.token).toBeZeroAddress();
            expect(event.args.amount).toBeBN(amount);
            await expect(owner.getBalance()).resolves.toBeBN(ownerBalance.sub(totalCost).add(value));
        });
        it('expect to revert on invalid guardian signature', async () => {
            const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(guardian, {
                owner: owner.address,
                token: ethers_1.constants.AddressZero,
                amount: 1,
            });
            await expect(paymentRegistry.withdrawDeposit(ethers_1.constants.AddressZero, totalAmount, guardianSignature)).rejects.toThrow(/revert/);
        });
        it('expect to revert on invalid amount', async () => {
            const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(guardian, {
                owner: owner.address,
                token: ethers_1.constants.AddressZero,
                amount: totalAmount + 1,
            });
            await expect(paymentRegistry.withdrawDeposit(ethers_1.constants.AddressZero, totalAmount, guardianSignature)).rejects.toThrow(/revert/);
        });
    });
    context('commitPaymentChannelAndWithdraw()', () => {
        const blockNumber = 0;
        let sender;
        let senderDeposit;
        let recipient;
        before(async () => {
            sender = signers.pop();
            recipient = signers.pop();
            senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender.address);
        });
        context('# using wei', () => {
            const uid = (0, shared_1.randomHex32)();
            const amount1 = 50;
            const amount2 = 100;
            let channelHash;
            before(async () => {
                channelHash = (0, utils_1.computeChannelHash)(sender.address, recipient.address, null, uid);
                await (0, shared_1.processTx)(sender.sendTransaction({
                    to: senderDeposit,
                    value: amount2,
                }));
            });
            it('expect to commit channel and withdraw - #1 commit', async () => {
                const recipientBalance = await recipient.getBalance();
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: ethers_1.constants.AddressZero,
                    uid,
                    blockNumber,
                    amount: amount1,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                const { events, totalCost } = await (0, shared_1.processTx)(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndWithdraw(sender.address, ethers_1.constants.AddressZero, uid, 0, amount1, senderSignature, guardianSignature));
                expect(events[0].event).toBe('DepositAccountDeployed');
                expect(events[0].args.depositAccount).toBe(senderDeposit);
                expect(events[0].args.owner).toBe(sender.address);
                expect(events[1].event).toBe('PaymentChannelCommitted');
                expect(events[1].args.hash).toBe(channelHash);
                expect(events[1].args.sender).toBe(sender.address);
                expect(events[1].args.recipient).toBe(recipient.address);
                expect(events[1].args.token).toBeZeroAddress();
                expect(events[1].args.uid).toBe(uid);
                expect(events[2].event).toBe('PaymentWithdrawn');
                expect(events[2].args.channelHash).toBe(channelHash);
                expect(events[2].args.value).toBeBN(amount1);
                await expect(recipient.getBalance()).resolves.toBeBN(recipientBalance.sub(totalCost).add(amount1));
            });
            it('expect to commit channel and withdraw - #2 commit', async () => {
                const recipientBalance = await recipient.getBalance();
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: ethers_1.constants.AddressZero,
                    uid,
                    blockNumber,
                    amount: amount2,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                const { events, totalCost } = await (0, shared_1.processTx)(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndWithdraw(sender.address, ethers_1.constants.AddressZero, uid, 0, amount2, senderSignature, guardianSignature));
                expect(events[1].event).toBe('PaymentWithdrawn');
                expect(events[1].args.channelHash).toBe(channelHash);
                expect(events[1].args.value).toBeBN(amount2 - amount1);
                await expect(recipient.getBalance()).resolves.toBeBN(recipientBalance.sub(totalCost).add(amount2 - amount1));
            });
            it('expect to revert when channel was committed', async () => {
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: ethers_1.constants.AddressZero,
                    uid,
                    blockNumber,
                    amount: amount2,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                await expect(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndWithdraw(sender.address, ethers_1.constants.AddressZero, uid, 0, amount2, senderSignature, guardianSignature)).rejects.toThrow(/revert/);
            });
        });
        context('# using token', () => {
            const amount = 200;
            before(async () => {
                await (0, shared_1.processTx)(sender.sendTransaction({
                    to: wrappedWeiToken.address,
                    value: amount,
                }));
                await (0, shared_1.processTx)(wrappedWeiToken.connect(sender).transfer(senderDeposit, amount));
            });
            it('expect to commit channel and withdraw', async () => {
                const uid = (0, shared_1.randomHex32)();
                const channelHash = (0, utils_1.computeChannelHash)(sender.address, recipient.address, wrappedWeiToken.address, uid);
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: wrappedWeiToken.address,
                    uid,
                    blockNumber,
                    amount,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                const { events } = await (0, shared_1.processTx)(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndWithdraw(sender.address, wrappedWeiToken.address, uid, 0, amount, senderSignature, guardianSignature));
                expect(events[0].event).toBe('PaymentChannelCommitted');
                expect(events[0].args.hash).toBe(channelHash);
                expect(events[0].args.token).toBe(wrappedWeiToken.address);
                expect(events[2].event).toBe('PaymentWithdrawn');
                expect(events[2].args.channelHash).toBe(channelHash);
                await expect(wrappedWeiToken.balanceOf(recipient.address)).resolves.toBeBN(amount);
            });
        });
    });
    context('commitPaymentChannelAndDeposit()', () => {
        const blockNumber = 0;
        const uid = (0, shared_1.randomHex32)();
        let sender;
        let senderDeposit;
        let recipient;
        let recipientDeposit;
        before(async () => {
            sender = signers.pop();
            senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender.address);
            recipient = signers.pop();
            recipientDeposit = await paymentRegistry.computeDepositAccountAddress(recipient.address);
        });
        context('# using wei', () => {
            const amount = 200;
            before(async () => {
                await (0, shared_1.processTx)(sender.sendTransaction({
                    to: senderDeposit,
                    value: amount,
                }));
            });
            it('expect to commit channel and deposit', async () => {
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: ethers_1.constants.AddressZero,
                    uid,
                    blockNumber,
                    amount,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                const { events } = await (0, shared_1.processTx)(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndDeposit(sender.address, ethers_1.constants.AddressZero, uid, 0, amount, senderSignature, guardianSignature));
                expect(events[2].event).toBe('PaymentDeposited');
                expect(events[2].args.value).toBeBN(amount);
                await expect(provider.getBalance(recipientDeposit)).resolves.toBeBN(amount);
            });
        });
        context('# using token', () => {
            const amount = 200;
            before(async () => {
                await (0, shared_1.processTx)(sender.sendTransaction({
                    to: wrappedWeiToken.address,
                    value: amount,
                }));
                await (0, shared_1.processTx)(wrappedWeiToken.connect(sender).transfer(senderDeposit, amount));
            });
            it('expect to commit channel and deposit', async () => {
                const uid = (0, shared_1.randomHex32)();
                const message = {
                    sender: sender.address,
                    recipient: recipient.address,
                    token: wrappedWeiToken.address,
                    uid,
                    blockNumber,
                    amount,
                };
                const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
                const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
                const { events } = await (0, shared_1.processTx)(paymentRegistry
                    .connect(recipient)
                    .commitPaymentChannelAndDeposit(sender.address, wrappedWeiToken.address, uid, 0, amount, senderSignature, guardianSignature));
                expect(events[2].event).toBe('PaymentDeposited');
                expect(events[2].args.value).toBeBN(amount);
                await expect(wrappedWeiToken.balanceOf(recipientDeposit)).resolves.toBeBN(amount);
            });
        });
    });
    context('commitPaymentChannelAndSplit()', () => {
        const blockNumber = 0;
        const uid = (0, shared_1.randomHex32)();
        const amount = 200;
        const depositPaymentValue = 50;
        let sender;
        let recipient;
        before(async () => {
            sender = signers.pop();
            recipient = signers.pop();
            const senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender.address);
            await (0, shared_1.processTx)(sender.sendTransaction({
                to: senderDeposit,
                value: amount,
            }));
        });
        it('expect to commit channel and split', async () => {
            const message = {
                sender: sender.address,
                recipient: recipient.address,
                token: ethers_1.constants.AddressZero,
                uid,
                blockNumber,
                amount,
            };
            const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
            const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
            const { events } = await (0, shared_1.processTx)(paymentRegistry
                .connect(recipient)
                .commitPaymentChannelAndSplit(sender.address, ethers_1.constants.AddressZero, uid, 0, amount, depositPaymentValue, senderSignature, guardianSignature));
            expect(events[2].event).toBe('PaymentSplit');
            expect(events[2].args.totalValue).toBeBN(amount);
            expect(events[2].args.depositValue).toBeBN(depositPaymentValue);
        });
    });
    context('computeDepositAccountAddress()', () => {
        const owner = (0, shared_1.randomAddress)();
        it('expect to return correct deposit address', async () => {
            const deposit = await (0, shared_1.computeAccountAddress)(paymentRegistry, 'PaymentDepositAccount', owner);
            await expect(paymentRegistry.computeDepositAccountAddress(owner)).resolves.toBe(deposit);
        });
    });
    context('isDepositAccountDeployed()', () => {
        const owner = (0, shared_1.randomAddress)();
        before(async () => {
            await paymentRegistry.deployDepositAccount(owner);
        });
        it('expect to return true when deposit is deployed', async () => {
            await expect(paymentRegistry.isDepositAccountDeployed(owner)).resolves.toBeTruthy();
        });
        it('expect to return false when deposit is not deployed', async () => {
            await expect(paymentRegistry.isDepositAccountDeployed((0, shared_1.randomAddress)())).resolves.toBeFalsy();
        });
    });
    context('getDepositExitLockedUntil()', () => {
        let owner;
        before(async () => {
            owner = signers.pop();
            await paymentRegistry
                .connect(owner)
                .requestDepositExit(ethers_1.constants.AddressZero);
        });
        it('expect to return positive lockedUntil time when withdraw was requested', async () => {
            await expect(paymentRegistry.getDepositExitLockedUntil(owner.address, ethers_1.constants.AddressZero)).resolves.toBeGreaterThanBN(0);
        });
        it("expect to return zero lockedUntil time when withdraw wasn't requested", async () => {
            await expect(paymentRegistry.getDepositExitLockedUntil((0, shared_1.randomAddress)(), ethers_1.constants.AddressZero)).resolves.toBeBN(0);
        });
    });
    context('getDepositWithdrawnAmount()', () => {
        const amount = 200;
        let owner;
        before(async () => {
            owner = signers.pop();
            const ownerDeposit = await paymentRegistry.computeDepositAccountAddress(owner.address);
            paymentRegistry = paymentRegistry.connect(owner);
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: ownerDeposit,
                value: amount,
            }));
            const guardianSignature = await depositWithdrawalMessagePayloadFactory.sign(guardian, {
                owner: owner.address,
                token: ethers_1.constants.AddressZero,
                amount,
            });
            await (0, shared_1.processTx)(paymentRegistry.withdrawDeposit(ethers_1.constants.AddressZero, amount, guardianSignature));
        });
        it('expect to return correct amount', async () => {
            await expect(paymentRegistry.getDepositWithdrawnAmount(owner.address, ethers_1.constants.AddressZero)).resolves.toBeBN(amount);
        });
        it('expect to return 0 for random account', async () => {
            await expect(paymentRegistry.getDepositWithdrawnAmount((0, shared_1.randomAddress)(), ethers_1.constants.AddressZero)).resolves.toBeBN(0);
        });
    });
    context('getPaymentChannelCommittedAmount()', () => {
        const amount = 1000;
        const uid = (0, shared_1.randomHex32)();
        let sender;
        let channelHash;
        before(async () => {
            sender = signers.pop();
            const recipient = signers.pop();
            channelHash = (0, utils_1.computeChannelHash)(sender.address, recipient.address, ethers_1.constants.AddressZero, uid);
            const blockNumber = 0;
            const senderDeposit = await paymentRegistry.computeDepositAccountAddress(sender.address);
            await (0, shared_1.processTx)(sender.sendTransaction({
                to: senderDeposit,
                value: amount,
            }));
            const message = {
                sender: sender.address,
                recipient: recipient.address,
                token: ethers_1.constants.AddressZero,
                uid,
                blockNumber,
                amount,
            };
            const senderSignature = await paymentChannelCommitMessagePayloadFactory.sign(sender, message);
            const guardianSignature = await paymentChannelCommitMessagePayloadFactory.sign(guardian, message);
            await (0, shared_1.processTx)(paymentRegistry
                .connect(recipient)
                .commitPaymentChannelAndWithdraw(sender.address, ethers_1.constants.AddressZero, uid, blockNumber, amount, senderSignature, guardianSignature));
        });
        it('expect to return correct amount from committed channel', async () => {
            await expect(paymentRegistry.getPaymentChannelCommittedAmount(channelHash)).resolves.toBeBN(amount);
        });
        it('expect to return zero when channel is not committed', async () => {
            const channelHash = (0, utils_1.computeChannelHash)(sender.address, (0, shared_1.randomAddress)(), ethers_1.constants.AddressZero, uid);
            await expect(paymentRegistry.getPaymentChannelCommittedAmount(channelHash)).resolves.toBeBN(0);
        });
    });
    context('computePaymentChannelHash()', () => {
        it('expect to return correct hash', async () => {
            const sender = (0, shared_1.randomAddress)();
            const recipient = (0, shared_1.randomAddress)();
            const token = (0, shared_1.randomAddress)();
            const uid = (0, shared_1.randomHex32)();
            await expect(paymentRegistry.computePaymentChannelHash(sender, recipient, token, uid)).resolves.toBe((0, utils_1.computeChannelHash)(sender, recipient, token, uid));
        });
    });
    context('hashDepositWithdrawal()', () => {
        it('expect to return correct hash', async () => {
            const message = {
                owner: (0, shared_1.randomAddress)(),
                token: (0, shared_1.randomAddress)(),
                amount: 200,
            };
            const expected = depositWithdrawalMessagePayloadFactory.hash(message);
            await expect(paymentRegistry.hashDepositWithdrawal(message)).resolves.toBe(expected);
        });
    });
    context('hashPaymentChannelCommit()', () => {
        it('expect to return correct hash', async () => {
            const message = {
                sender: (0, shared_1.randomAddress)(),
                recipient: (0, shared_1.randomAddress)(),
                token: (0, shared_1.randomAddress)(),
                uid: (0, shared_1.randomHex32)(),
                blockNumber: 1,
                amount: 200,
            };
            const expected = paymentChannelCommitMessagePayloadFactory.hash(message);
            await expect(paymentRegistry.hashPaymentChannelCommit(message)).resolves.toBe(expected);
        });
    });
});
