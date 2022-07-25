"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const shared_1 = require("../../shared");
const { getSigners, constants } = hardhat_1.ethers;
describe('BalancesHelper', () => {
    let signers;
    let balancesHelper;
    let wrappedWeiToken;
    before(async () => {
        signers = await getSigners();
        balancesHelper = await (0, shared_1.deployContract)('BalancesHelper');
        wrappedWeiToken = await (0, shared_1.deployContract)('WrappedWeiToken');
    });
    context('getBalances()', () => {
        const amount = 1000;
        let owner;
        let balance;
        before(async () => {
            owner = signers.pop();
            await (0, shared_1.processTx)(owner.sendTransaction({
                to: wrappedWeiToken.address,
                value: amount,
            }));
            balance = await owner.getBalance();
        });
        it('expect to return correct balance list', async () => {
            const randomOwner = (0, shared_1.randomAddress)();
            const randomToken = (0, shared_1.randomAddress)();
            const output = await balancesHelper.getBalances([owner.address, randomOwner], [wrappedWeiToken.address, randomToken, constants.AddressZero]);
            expect(output[0]).toBeBN(amount);
            expect(output[1]).toBeBN(0);
            expect(output[2]).toBeBN(balance);
            expect(output[3]).toBeBN(0);
            expect(output[4]).toBeBN(0);
            expect(output[5]).toBeBN(0);
        });
    });
});
