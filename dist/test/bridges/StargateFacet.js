"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const diamond_1 = require("../../utils/diamond");
const hardhat_1 = require("hardhat");
const test_helpers_1 = require("@openzeppelin/test-helpers");
const USDC_ABI_js_1 = __importDefault(require("./abi/USDC_ABI.js"));
const ETH_CHAIN_ID = 1;
const POLYGON_CHAIN_ID = 9;
const ARBITRUM_CHAIN_ID = 10;
const MAINNET_STARGATE_ROUTER_ADDRESS = "0x8731d54E9D02c286767d56ac03e8037C07e01e98";
const POLYGON_STARGATE_ROUTER_ADDRESS = "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd";
const ARBITRUM_STARGATE_ROUTER_ADDRESS = "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614";
const MAINNET_USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const POLYGON_USDC_ADDRESS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const ARBITRUM_USDC_ADDRESS = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
const ZERO_ADDRESS = hardhat_1.ethers.constants.AddressZero;
const AMOUNT = ethers_1.utils.parseUnits("100", 6);
describe("StargateFacet", () => {
    let diamond;
    let diamondCutFacet;
    let stargateFacet;
    let accounts;
    let owner;
    let alice;
    let bob;
    let dummy;
    let usdc, StargateData;
    const setupTest = hardhat_1.deployments.createFixture(async ({ deployments, ethers }) => {
        await deployments.fixture("DeployStargateFacet");
        accounts = await ethers.getSigners();
        owner = accounts[0];
        bob = accounts[1];
        dummy = accounts[2];
        diamondCutFacet = await (0, shared_1.deployContract)("DiamondCutFacet");
        diamond = await (0, shared_1.deployContract)("Diamond", [
            owner.address,
            diamondCutFacet.address,
        ]);
        stargateFacet = await ethers.getContractAt("StargateFacet", diamond.address);
        const facetsToAdd = ["StargateFacet"];
        const cut = {
            [stargateFacet.address]: (0, diamond_1.getSelectors)(stargateFacet),
        };
        for (const facet of facetsToAdd) {
            const facetContract = await (0, shared_1.deployContract)(facet);
            cut[facetContract.address] = (0, diamond_1.getSelectors)(facetContract);
            await (0, diamond_1.addFacets)([facetContract], diamond.address);
        }
        await hardhat_1.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: ["0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503"],
        });
        alice = await ethers.getSigner("0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503");
        stargateFacet
            .connect(owner)
            .sgInitialize(MAINNET_STARGATE_ROUTER_ADDRESS, ETH_CHAIN_ID, {
            gasLimit: 500000,
        });
        usdc = new ethers.Contract(MAINNET_USDC_ADDRESS, USDC_ABI_js_1.default);
        await usdc
            .connect(alice)
            .approve(stargateFacet.address, ethers_1.utils.parseUnits("1000000", 10));
        await owner.sendTransaction({
            to: stargateFacet.address,
            value: ethers.utils.parseEther("5"),
        });
        await owner.sendTransaction({
            to: alice.address,
            value: ethers.utils.parseEther("5"),
        });
    });
    before(async function () {
        this.timeout(0);
        await hardhat_1.network.provider.request({
            method: "hardhat_reset",
            params: [
                {
                    forking: {
                        jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
                        blockNumber: 15000000,
                    },
                },
            ],
        });
    });
    beforeEach(async function () {
        this.timeout(0);
        await setupTest();
    });
    describe("sgInitialize()", async function () {
        it("should revert if stargate router address is address(0)", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet.sgInitialize(ZERO_ADDRESS, ETH_CHAIN_ID), "InvalidConfig");
        });
        it("should initialize the stargate router address and chain id", async function () {
            const tx = await stargateFacet
                .connect(owner)
                .sgInitialize(MAINNET_STARGATE_ROUTER_ADDRESS, ETH_CHAIN_ID, {
                gasLimit: 500000,
            });
            const receipt = await tx.wait();
            const result = (0, shared_1.multiCallCheckLastEventEmitted)(receipt);
            expect(result[0]).toEqual("SGInitialized");
            expect(result[1]).toEqual(MAINNET_STARGATE_ROUTER_ADDRESS);
            expect(result[2]).toEqual(ETH_CHAIN_ID);
        });
    });
    describe("sgBridgeTokens()", async function () {
        it("should revert if starting a token bridge transaction and not enough tokens in pool to complete tx", async function () {
            StargateData = {
                qty: ethers_1.utils.parseUnits("1000", 10),
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "Stargate: not enough balance");
        });
        it("should revert if starting a token bridge transaction and no msg.value", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: 0,
            }), "NoMsgValueForCrossChainMessage()");
        });
        it("should revert if starting a token bridge transaction and no amount", async function () {
            StargateData = {
                qty: 0,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidAmount()");
        });
        it("should revert if starting a token bridge transaction and fromToken is address(0)", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: ZERO_ADDRESS,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidConfig()");
        });
        it("should revert if starting a token bridge transaction and toToken is address(0)", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: ZERO_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidConfig()");
        });
        it("should revert if starting a token bridge transaction and source pool id is invalid", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 0,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidSourcePoolId()");
        });
        it("should revert if starting a token bridge transaction and source token is invalid", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidSourcePoolId()");
        });
        it("should revert if starting a token bridge transaction and destination pool id is invalid", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 0,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidDestinationPoolId()");
        });
        it("should revert if starting a token bridge transaction and destination token is invalid", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: "0x0000000000000000000000000000000000001010",
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidDestinationPoolId()");
        });
        it("should revert if starting a token bridge transaction and receiver is address(0)", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: ZERO_ADDRESS,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidConfig()");
        });
        it("should revert if starting a token bridge transaction and destStargateComposed is address(0)", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: ZERO_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            }), "InvalidConfig()");
        });
        it("should start a token bridge transaction on the sending chain - Polygon", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: POLYGON_USDC_ADDRESS,
                dstChainId: POLYGON_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            const tx = await stargateFacet
                .connect(alice)
                .sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            });
            const receipt = await tx.wait();
            const result = (0, shared_1.multiCallCheckLastEventEmitted)(receipt);
            expect(result[0]).toEqual("SGTransferStarted");
            expect(result[1]).toEqual("stargate");
            expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
            expect(result[3]).toEqual(POLYGON_USDC_ADDRESS);
            expect(result[4]).toEqual(alice.address);
            expect(result[5]).toEqual(bob.address);
            expect(result[6]).toEqual(ethers_1.BigNumber.from(AMOUNT));
            expect(result[7]).toEqual(POLYGON_CHAIN_ID);
        });
        it("should start a token bridge transaction on the sending chain - Arbitrum", async function () {
            StargateData = {
                qty: AMOUNT,
                fromToken: usdc.address,
                toToken: ARBITRUM_USDC_ADDRESS,
                dstChainId: ARBITRUM_CHAIN_ID,
                srcPoolId: 1,
                dstPoolId: 1,
                to: bob.address,
                destStargateComposed: ARBITRUM_STARGATE_ROUTER_ADDRESS,
            };
            const feeWei = await stargateFacet.sgCalculateFees(ARBITRUM_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS);
            const tx = await stargateFacet
                .connect(alice)
                .sgBridgeTokens(StargateData, {
                gasLimit: hardhat_1.ethers.utils.hexlify(2000000),
                value: feeWei,
            });
            const receipt = await tx.wait();
            const result = (0, shared_1.multiCallCheckLastEventEmitted)(receipt);
            expect(result[0]).toEqual("SGTransferStarted");
            expect(result[1]).toEqual("stargate");
            expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
            expect(result[3]).toEqual(ARBITRUM_USDC_ADDRESS);
            expect(result[4]).toEqual(alice.address);
            expect(result[5]).toEqual(bob.address);
            expect(result[6]).toEqual(ethers_1.BigNumber.from(AMOUNT));
            expect(result[7]).toEqual(ARBITRUM_CHAIN_ID);
        });
    });
    describe("sgUpdateRouter()", async function () {
        it("should revert if updating stargate router address and not owner", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(bob).sgUpdateRouter(bob.address), "LibDiamond: Must be contract owner");
        });
        it("should revert if updating stargate router address with zero address", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(owner).sgUpdateRouter(ZERO_ADDRESS), "StargateRouterAddressZero()");
        });
        it("should update stargate router address", async function () {
            const tx = await stargateFacet.sgUpdateRouter(dummy.address);
            const receipt = await tx.wait();
            const result = (0, shared_1.checkEvent)(receipt);
            expect(result[0]).toEqual("SGUpdatedRouter");
            expect(result[1]).toEqual(dummy.address);
        });
    });
    describe("sgCalculateFees()", async function () {
        it("should return calculated fee amount in wei for making swap", async function () {
            const feeWei = await stargateFacet.sgCalculateFees(POLYGON_CHAIN_ID, bob.address, MAINNET_STARGATE_ROUTER_ADDRESS, { gasLimit: hardhat_1.ethers.utils.hexlify(2000000) });
            expect(feeWei).toBeGreaterThanBN(ethers_1.BigNumber.from(10000000));
        });
    });
    describe("sgUpdateSlippageTolerance()", async function () {
        it("should revert if updating slippage tolerance amount and not owner", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(bob).sgUpdateSlippageTolerance(200), "LibDiamond: Must be contract owner");
        });
        it("should update slippage tolerance amount", async function () {
            const tx = await stargateFacet.sgUpdateSlippageTolerance(200);
            const receipt = await tx.wait();
            const result = (0, shared_1.checkEvent)(receipt);
            expect(result[0]).toEqual("SGUpdatedSlippageTolerance");
            expect(result[1]).toEqual(ethers_1.BigNumber.from(200));
        });
        it("should return 0.5% of amount for default minimum slippage", async function () {
            const minAmount = await stargateFacet.sgMinAmountOut(1000);
            const expectAmountOut = (1000 * (10000 - 50)) / 10000;
            expect(ethers_1.BigNumber.from(minAmount)).toEqual(ethers_1.BigNumber.from(expectAmountOut));
        });
        it("should return 2% of amount for minimum slippage after slippage updated", async function () {
            let minAmount = await stargateFacet.sgMinAmountOut(1000);
            let expectAmountOut = (1000 * (10000 - 50)) / 10000;
            expect(ethers_1.BigNumber.from(minAmount)).toEqual(ethers_1.BigNumber.from(expectAmountOut));
            await stargateFacet.sgUpdateSlippageTolerance(200);
            minAmount = await stargateFacet.sgMinAmountOut(1000);
            expectAmountOut = (1000 * (10000 - 200)) / 10000;
            expect(ethers_1.BigNumber.from(minAmount)).toEqual(ethers_1.BigNumber.from(expectAmountOut));
        });
    });
    describe("sgWithdraw()", async function () {
        it("should revert trying to withdraw stuck tokens in the contract if not the owner", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet
                .connect(bob)
                .sgWithdraw(MAINNET_USDC_ADDRESS, bob.address, 10), "LibDiamond: Must be contract owner");
        });
        it("should withdraw stuck tokens in the contract", async function () {
            let dummyUSDCBalance = await usdc.connect(dummy).balanceOf(dummy.address);
            let sgFacetUSDCBalance = await usdc
                .connect(dummy)
                .balanceOf(stargateFacet.address);
            expect(dummyUSDCBalance).toEqual(ethers_1.BigNumber.from(0));
            expect(sgFacetUSDCBalance).toEqual(ethers_1.BigNumber.from(0));
            await usdc.connect(alice).transfer(stargateFacet.address, 20);
            sgFacetUSDCBalance = await usdc
                .connect(dummy)
                .balanceOf(stargateFacet.address);
            expect(sgFacetUSDCBalance).toEqual(ethers_1.BigNumber.from(20));
            await stargateFacet.sgWithdraw(MAINNET_USDC_ADDRESS, dummy.address, 20);
            dummyUSDCBalance = await usdc.connect(dummy).balanceOf(dummy.address);
            sgFacetUSDCBalance = await usdc
                .connect(dummy)
                .balanceOf(stargateFacet.address);
            expect(dummyUSDCBalance).toEqual(ethers_1.BigNumber.from(20));
            expect(sgFacetUSDCBalance).toEqual(ethers_1.BigNumber.from(0));
        });
    });
    describe("sgAddPool()", async function () {
        it("should revert if adding pool to mapping and not owner", async function () {
            await (0, test_helpers_1.expectRevert)(stargateFacet.connect(bob).sgAddPool(1, MAINNET_USDC_ADDRESS, 3), "LibDiamond: Must be contract owner");
        });
        it("should add a new pool id to mapping", async function () {
            await stargateFacet.connect(owner).sgAddPool(15, MAINNET_USDC_ADDRESS, 3);
            const isAdded = await stargateFacet.sgCheckPoolId(15, MAINNET_USDC_ADDRESS, 3);
            expect(isAdded).toEqual(true);
        });
        it("should emit a SGAddedPool event", async function () {
            const tx = await stargateFacet
                .connect(owner)
                .sgAddPool(15, MAINNET_USDC_ADDRESS, 3);
            const receipt = await tx.wait();
            const result = (0, shared_1.checkEvent)(receipt);
            expect(result[0]).toEqual("SGAddedPool");
            expect(result[1]).toEqual(15);
            expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
            expect(result[3]).toEqual(ethers_1.BigNumber.from(3));
        });
    });
    describe("sgCheckPoolId()", async function () {
        it("should check pool exists in mapping - true", async function () {
            const isValidPool = await stargateFacet.sgCheckPoolId(ETH_CHAIN_ID, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 1);
            expect(isValidPool).toEqual(true);
        });
        it("should check pool exists in mapping - false", async function () {
            const isValidPool = await stargateFacet.sgCheckPoolId(18, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 1);
            expect(isValidPool).toEqual(false);
        });
    });
});
