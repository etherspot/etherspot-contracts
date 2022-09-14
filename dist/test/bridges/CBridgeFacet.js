"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const shared_1 = require("../shared");
const hardhat_1 = require("hardhat");
const test_helpers_1 = require("@openzeppelin/test-helpers");
const DAI_ABI_js_1 = __importDefault(require("./abi/DAI_ABI.js"));
const CBRIDGE_ADDRESS = "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820";
const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const ZERO_ADDRESS = hardhat_1.ethers.constants.AddressZero;
describe("CBridgeFacet", () => {
    let cBridgeFacet;
    let CBridgeData;
    let accounts;
    let owner;
    let alice;
    let dummy;
    const daiContract = new hardhat_1.ethers.Contract(DAI_ADDRESS, DAI_ABI_js_1.default, alice);
    const setupTest = hardhat_1.deployments.createFixture(async ({ deployments, ethers }) => {
        await deployments.fixture("DeployCBridgeFacet");
        accounts = await ethers.getSigners();
        owner = accounts[0];
        dummy = accounts[1];
        cBridgeFacet = await (0, shared_1.deployContract)("CBridgeFacet");
        await hardhat_1.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: ["0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503"],
        });
        alice = await ethers.getSigner("0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503");
        cBridgeFacet.connect(owner).initializeCBridge(CBRIDGE_ADDRESS, 1, {
            gasLimit: 500000,
        });
        await daiContract
            .connect(alice)
            .approve(cBridgeFacet.address, ethers_1.utils.parseUnits("100000", 10));
    });
    before(async function () {
        this.timeout(0);
        await hardhat_1.network.provider.request({
            method: "hardhat_reset",
            params: [
                {
                    forking: {
                        jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
                        blockNumber: 13798171,
                    },
                },
            ],
        });
    });
    beforeEach(async function () {
        this.timeout(0);
        await setupTest();
    });
    it("should revert if cBridge address is address(0)", async function () {
        await (0, test_helpers_1.expectRevert)(cBridgeFacet.initializeCBridge(ZERO_ADDRESS, 1), "InvalidConfig");
    });
    it("should revert if chain id is 0", async function () {
        await (0, test_helpers_1.expectRevert)(cBridgeFacet.initializeCBridge(CBRIDGE_ADDRESS, 0), "InvalidConfig");
    });
    it("should initialize the cBridge address and chain Id", async function () {
        const tx = await cBridgeFacet
            .connect(owner)
            .initializeCBridge(CBRIDGE_ADDRESS, 1, {
            gasLimit: 500000,
        });
        const receipt = await tx.wait();
        const result = (0, shared_1.checkEvent)(receipt);
        expect(result[0]).toEqual("CBridgeInitialized");
        expect(result[1]).toEqual(CBRIDGE_ADDRESS);
        expect(result[2]).toEqual(ethers_1.BigNumber.from(1));
    });
    it("should revert if bridging to the same chain", async function () {
        CBridgeData = {
            receiver: alice.address,
            token: DAI_ADDRESS,
            amount: ethers_1.utils.parseUnits("100000", 10),
            dstChainId: 1,
            nonce: 1,
            maxSlippage: 5000,
        };
        await (0, test_helpers_1.expectRevert)(cBridgeFacet.connect(alice).bridgeTokensCBridge(CBridgeData, {
            gasLimit: 500000,
        }), "CannotBridgeToSameNetwork");
    });
    it("should start a token bridge transaction on the sending chain", async function () {
        CBridgeData = {
            receiver: alice.address,
            token: DAI_ADDRESS,
            amount: ethers_1.utils.parseUnits("100000", 10),
            dstChainId: 137,
            nonce: 1,
            maxSlippage: 5000,
        };
        const tx = await cBridgeFacet
            .connect(alice)
            .bridgeTokensCBridge(CBridgeData, {
            gasLimit: 500000,
        });
        const receipt = await tx.wait();
        const result = (0, shared_1.multiCallCheckLastEventEmitted)(receipt);
        expect(result[0]).toEqual("TransferStarted");
        expect(result[1]).toEqual("cBridge");
        expect(result[2]).toEqual(DAI_ADDRESS);
        expect(result[3]).toEqual(alice.address);
        expect(result[4]).toEqual(alice.address);
        expect(result[5]).toEqual(ethers_1.utils.parseUnits("100000", 10));
        expect(result[6]).toEqual(ethers_1.BigNumber.from(137));
    });
    it("should update cBridge address", async function () {
        expect(await cBridgeFacet.cBridge()).toEqual(CBRIDGE_ADDRESS);
        const tx = await cBridgeFacet.updateBridgeAddress(dummy.address);
        const receipt = await tx.wait();
        const result = (0, shared_1.checkEvent)(receipt);
        expect(await cBridgeFacet.cBridge()).toEqual(dummy.address);
        expect(result[0]).toEqual("UpdatedCBridgeAddress");
        expect(result[1]).toEqual(dummy.address);
    });
    it("should revert if updating cBridge address to address(0)", async function () {
        await (0, test_helpers_1.expectRevert)(cBridgeFacet.updateBridgeAddress(ZERO_ADDRESS), "InvalidConfig");
    });
});
