"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("../../shared");
const sdk_core_1 = require("@superfluid-finance/sdk-core");
const fDAIABI_1 = __importDefault(require("./abi/fDAIABI"));
const hardhat_1 = require("hardhat");
const test_helpers_1 = require("@openzeppelin/test-helpers");
const deploy_framework_1 = __importDefault(require("@superfluid-finance/ethereum-contracts/scripts/deploy-framework"));
const deploy_test_token_1 = __importDefault(require("@superfluid-finance/ethereum-contracts/scripts/deploy-test-token"));
const deploy_super_token_1 = __importDefault(require("@superfluid-finance/ethereum-contracts/scripts/deploy-super-token"));
const provider = hardhat_1.web3;
let sf;
let balancesHelperV2;
let wrappedWeiToken;
let dai;
let daix;
let daiAddress;
let owner;
let alice;
let bob;
let charlie;
let dead;
const errorHandler = (err) => {
    if (err)
        throw err;
};
describe("BalancesHelperV2", () => {
    before(async () => {
        [owner, alice, bob, charlie, dead] = await hardhat_1.ethers.getSigners();
        balancesHelperV2 = await (0, shared_1.deployContract)("BalancesHelperV2");
        wrappedWeiToken = await (0, shared_1.deployContract)("WrappedWeiToken");
        await (0, deploy_framework_1.default)(errorHandler, { web3: hardhat_1.web3, from: owner.address });
        await (0, shared_1.processTx)(owner.sendTransaction({
            to: wrappedWeiToken.address,
            value: 1000,
        }));
    });
    beforeEach(async () => {
        await (0, deploy_test_token_1.default)(errorHandler, [":", "fDAI"], {
            web3: hardhat_1.web3,
            from: owner.address,
        });
        await (0, deploy_super_token_1.default)(errorHandler, [":", "fDAI"], {
            web3: hardhat_1.web3,
            from: owner.address,
        });
        sf = await sdk_core_1.Framework.create({
            networkName: "custom",
            provider,
            dataMode: "WEB3_ONLY",
            resolverAddress: process.env.RESOLVER_ADDRESS,
            protocolReleaseVersion: "test",
        });
        daix = await sf.loadSuperToken("fDAIx");
        const daiAddress = daix.underlyingToken.address;
        dai = new hardhat_1.ethers.Contract(daiAddress, fDAIABI_1.default, owner);
    });
    describe("ERC20 Token", () => {
        it("Should be able to read user balance", async () => {
            const balance = await balancesHelperV2.getBalances([owner.address, alice.address, bob.address], [wrappedWeiToken.address]);
            console.log("Owner ERC20 Token Balance: ", balance[0].toString());
            expect(balance[0]).toBeBN(1000);
            expect(balance[1]).toBeBN(0);
            expect(balance[2]).toBeBN(0);
        });
    });
    describe("Pure SuperToken", () => {
        it("Should be able to read user balance", async () => {
            daiAddress = daix.underlyingToken.address;
            let balance = await balancesHelperV2.getBalances([owner.address], [daiAddress]);
            expect(balance[0]).toBeBN(0);
            await dai
                .connect(owner)
                .mint(owner.address, hardhat_1.ethers.utils.parseEther("100"));
            balance = await balancesHelperV2.getBalances([owner.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("100"));
            await dai
                .connect(owner)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("100"));
        });
        it("Should be able to read multiple user balances", async () => {
            daiAddress = daix.underlyingToken.address;
            let balance = await balancesHelperV2.getBalances([owner.address, alice.address, bob.address, charlie.address], [daiAddress]);
            expect(balance[0]).toBeBN(0);
            expect(balance[1]).toBeBN(0);
            expect(balance[2]).toBeBN(0);
            expect(balance[3]).toBeBN(0);
            await dai
                .connect(owner)
                .mint(owner.address, hardhat_1.ethers.utils.parseEther("100"));
            await dai
                .connect(owner)
                .mint(alice.address, hardhat_1.ethers.utils.parseEther("10"));
            await dai.connect(owner).mint(bob.address, hardhat_1.ethers.utils.parseEther("20"));
            await dai
                .connect(owner)
                .mint(charlie.address, hardhat_1.ethers.utils.parseEther("30"));
            balance = await balancesHelperV2.getBalances([owner.address, alice.address, bob.address, charlie.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("100"));
            expect(balance[1]).toBeBN(hardhat_1.ethers.utils.parseEther("10"));
            expect(balance[2]).toBeBN(hardhat_1.ethers.utils.parseEther("20"));
            expect(balance[3]).toBeBN(hardhat_1.ethers.utils.parseEther("30"));
            await dai
                .connect(owner)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("100"));
            await dai
                .connect(alice)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("10"));
            await dai
                .connect(bob)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("20"));
            await dai
                .connect(charlie)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("30"));
        });
        it("Should revert if the account address is the zero address", async () => {
            daiAddress = daix.underlyingToken.address;
            await (0, test_helpers_1.expectRevert)(balancesHelperV2.getBalances([hardhat_1.ethers.constants.AddressZero], [daiAddress]), `AccountZeroAddress("${hardhat_1.ethers.constants.AddressZero}", "${daiAddress}")`);
        });
        it("Should revert if the token address is the zero address", async () => {
            await (0, test_helpers_1.expectRevert)(balancesHelperV2.getBalances([owner.address], [hardhat_1.ethers.constants.AddressZero]), `TokenZeroAddress("${owner.address}", "${hardhat_1.ethers.constants.AddressZero}")`);
        });
    });
    describe("Wrapped/Native SuperToken", () => {
        it("Should be able to read user balance (upgraded tokens)", async () => {
            daiAddress = daix.underlyingToken.address;
            await dai
                .connect(owner)
                .mint(owner.address, hardhat_1.ethers.utils.parseEther("100"));
            await dai
                .connect(owner)
                .approve(daix.address, hardhat_1.ethers.utils.parseEther("50"));
            let balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances([owner.address], [daix.address]);
            expect(balance[0]).toBeBN(0);
            const daixUpgradeOperation = daix.upgrade({
                amount: hardhat_1.ethers.utils.parseEther("50"),
            });
            await daixUpgradeOperation.exec(owner);
            balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances([owner.address], [daix.address]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("50"));
            balance = await balancesHelperV2.getBalances([owner.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("50"));
            const daixDowngradeOperation = daix.downgrade({
                amount: hardhat_1.ethers.utils.parseEther("50"),
            });
            await daixDowngradeOperation.exec(owner);
            await dai
                .connect(owner)
                .transfer(dead.address, hardhat_1.ethers.utils.parseEther("100"));
        });
        it("Should be able to read user balance (downgraded tokens)", async () => {
            daiAddress = daix.underlyingToken.address;
            await dai
                .connect(owner)
                .mint(owner.address, hardhat_1.ethers.utils.parseEther("100"));
            await dai
                .connect(owner)
                .approve(daix.address, hardhat_1.ethers.utils.parseEther("50"));
            const daixUpgradeOperation = daix.upgrade({
                amount: hardhat_1.ethers.utils.parseEther("50"),
            });
            await daixUpgradeOperation.exec(owner);
            let balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances([owner.address], [daix.address]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("50"));
            balance = await balancesHelperV2.getBalances([owner.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("50"));
            const daixDowngradeOperation = daix.downgrade({
                amount: hardhat_1.ethers.utils.parseEther("25"),
            });
            await daixDowngradeOperation.exec(owner);
            balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances([owner.address], [daix.address]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("25"));
            balance = await balancesHelperV2.getBalances([owner.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("75"));
        });
        it("Should be able to read multiple user balances (upgraded tokens)", async () => {
            await dai
                .connect(owner)
                .mint(alice.address, hardhat_1.ethers.utils.parseEther("21"));
            await dai.connect(owner).mint(bob.address, hardhat_1.ethers.utils.parseEther("28"));
            await dai
                .connect(owner)
                .mint(charlie.address, hardhat_1.ethers.utils.parseEther("35"));
            await dai
                .connect(alice)
                .approve(daix.address, hardhat_1.ethers.utils.parseEther("7"));
            await dai
                .connect(bob)
                .approve(daix.address, hardhat_1.ethers.utils.parseEther("14"));
            await dai
                .connect(charlie)
                .approve(daix.address, hardhat_1.ethers.utils.parseEther("21"));
            const aliceUpgradeOperation = daix.upgrade({
                amount: hardhat_1.ethers.utils.parseEther("7"),
            });
            await aliceUpgradeOperation.exec(alice);
            const bobUpgradeOperation = daix.upgrade({
                amount: hardhat_1.ethers.utils.parseEther("14"),
            });
            await bobUpgradeOperation.exec(bob);
            const charlieUpgradeOperation = daix.upgrade({
                amount: hardhat_1.ethers.utils.parseEther("21"),
            });
            await charlieUpgradeOperation.exec(charlie);
            let balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances([alice.address, bob.address, charlie.address], [daix.address]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("7"));
            expect(balance[1]).toBeBN(hardhat_1.ethers.utils.parseEther("14"));
            expect(balance[2]).toBeBN(hardhat_1.ethers.utils.parseEther("21"));
            balance = await balancesHelperV2.getBalances([alice.address, bob.address, charlie.address], [daiAddress]);
            expect(balance[0]).toBeBN(hardhat_1.ethers.utils.parseEther("14"));
            expect(balance[1]).toBeBN(hardhat_1.ethers.utils.parseEther("14"));
            expect(balance[2]).toBeBN(hardhat_1.ethers.utils.parseEther("14"));
        });
        it("Should revert if the account address is the zero address", async () => {
            await (0, test_helpers_1.expectRevert)(balancesHelperV2.getSuperfluidWrappedTokenBalances([hardhat_1.ethers.constants.AddressZero], [daix.address]), `AccountZeroAddress("${hardhat_1.ethers.constants.AddressZero}", "${daix.address}")`);
        });
        it("Should revert if the token address is the zero address", async () => {
            await (0, test_helpers_1.expectRevert)(balancesHelperV2.getSuperfluidWrappedTokenBalances([owner.address], [hardhat_1.ethers.constants.AddressZero]), `TokenZeroAddress("${owner.address}", "${hardhat_1.ethers.constants.AddressZero}")`);
        });
    });
});
