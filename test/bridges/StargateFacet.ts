import {
  BigNumber,
  Contract,
  ContractReceipt,
  ContractTransaction,
  utils,
} from "ethers";
import {
  deployContract,
  checkEvent,
  multiCallCheckLastEventEmitted,
} from "../shared";
import { addFacets, getSelectors } from "../../utils/diamond";
import { StargateFacet, Diamond, DiamondCutFacet } from "../../typings";
import { ethers, deployments, network } from "hardhat";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";
import { expectRevert } from "@openzeppelin/test-helpers";
import USDC_ABI from "./abi/USDC_ABI.js";

const MAINNET_STARGATE_ROUTER_ADDRESS =
  "0x8731d54E9D02c286767d56ac03e8037C07e01e98";
const MAINNET_USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const POLYGON_STARGATE_ROUTER_ADDRESS =
  "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd";
const ETH_CHAIN_ID = 1;
const POLYGON_CHAIN_ID = 9;
const ZERO_ADDRESS = ethers.constants.AddressZero;
const AMOUNT = utils.parseUnits("1000", 10);

describe("StargateFacet", () => {
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;
  let stargateFacet: StargateFacet;
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let dummy: SignerWithAddress;
  let usdc, StargateData;

  let messageFee = ethers.utils.parseEther("0.025");

  /* eslint-enable @typescript-eslint/no-explicit-any */
  const setupTest = deployments.createFixture(
    async ({ deployments, ethers }) => {
      await deployments.fixture("DeployStargateFacet");

      accounts = await ethers.getSigners();
      owner = accounts[0];
      bob = accounts[1];
      dummy = accounts[2];

      // Set up diamond contract
      diamondCutFacet = await deployContract("DiamondCutFacet");
      diamond = await deployContract("Diamond", [
        owner.address,
        diamondCutFacet.address,
      ]);

      // Deploy StargateFacet contract from Diamond
      stargateFacet = await ethers.getContractAt(
        "StargateFacet",
        diamond.address,
      );

      // Add StargateFacet as facet
      const facetsToAdd = ["StargateFacet"];
      const cut = {
        [stargateFacet.address]: getSelectors(stargateFacet),
      };

      for (const facet of facetsToAdd) {
        const facetContract = await deployContract(facet);
        cut[facetContract.address] = getSelectors(facetContract);
        await addFacets([facetContract], diamond.address);
      }

      // Impersonate Binance Peg Tokens account
      await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: ["0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503"],
      });

      // Assign to alice
      alice = await ethers.getSigner(
        "0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503",
      );

      // Initialize StargateFacet contract with Stargate Router address and chain id
      stargateFacet
        .connect(owner)
        .sgInitialize(MAINNET_STARGATE_ROUTER_ADDRESS, ETH_CHAIN_ID, {
          gasLimit: 500000,
        });

      // get USDC contract instance
      usdc = new ethers.Contract(MAINNET_USDC_ADDRESS, USDC_ABI);

      // Alice approve CBridgeFacet to use ERC20 tokens
      await usdc
        .connect(alice)
        .approve(stargateFacet.address, utils.parseUnits("1000000", 10));

      // send some eth to contract and alice
      await owner.sendTransaction({
        to: stargateFacet.address,
        value: ethers.utils.parseEther("5"),
      });

      await owner.sendTransaction({
        to: alice.address,
        value: ethers.utils.parseEther("5"),
      });
    },
  );

  before(async function() {
    this.timeout(0);
    await network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
            // blockNumber: 13798171,
            blockNumber: 15000000,
          },
        },
      ],
    });
  });

  beforeEach(async function() {
    this.timeout(0);
    await setupTest();
  });

  it("should revert if stargate router address is address(0)", async function() {
    await expectRevert(
      stargateFacet.sgInitialize(ZERO_ADDRESS, ETH_CHAIN_ID),
      "InvalidConfig",
    );
  });

  it("should initialize the stargate router address and chain id", async function() {
    const tx: ContractTransaction = await stargateFacet
      .connect(owner)
      .sgInitialize(MAINNET_STARGATE_ROUTER_ADDRESS, ETH_CHAIN_ID, {
        gasLimit: 500000,
      });
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("SGInitialized");
    expect(result[1]).toEqual(MAINNET_STARGATE_ROUTER_ADDRESS);
    expect(result[2]).toEqual(ETH_CHAIN_ID);
  });

  it("should start a token bridge transaction on the sending chain", async function() {
    const StargateData = {
      qty: AMOUNT,
      token: MAINNET_USDC_ADDRESS,
      dstChainId: POLYGON_CHAIN_ID,
      srcPoolId: 1,
      dstPoolId: 1,
      to: bob.address,
      destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
    };
    const feeWei = await stargateFacet.sgCalculateFees(
      POLYGON_CHAIN_ID,
      bob.address,
      MAINNET_STARGATE_ROUTER_ADDRESS,
    );
    const tx: ContractTransaction = await stargateFacet
      .connect(alice)
      .sgBridgeTokens(
        StargateData, // TODO: Not sure if this receiver contract can be used
        {
          value: feeWei,
        },
      );
    const receipt: ContractReceipt = await tx.wait();
    const result = multiCallCheckLastEventEmitted(receipt);
    expect(result[0]).toEqual("TransferStarted");
    expect(result[1]).toEqual("cBridge");
    expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
    expect(result[3]).toEqual(alice.address);
    expect(result[4]).toEqual(alice.address);
    expect(result[5]).toEqual(AMOUNT);
    expect(result[6]).toEqual(POLYGON_CHAIN_ID);
  });

  it("should get calculate fee amount in wei for making swap", async function() {
    const feeWei = await stargateFacet.sgCalculateFees(
      POLYGON_CHAIN_ID,
      bob.address,
      MAINNET_STARGATE_ROUTER_ADDRESS,
    );
    expect(feeWei).toBeGreaterThanBN(BigNumber.from(10000000));
  });

  it("should revert if updating stargate router address and not owner", async function() {
    await expectRevert(
      stargateFacet.connect(bob).sgUpdateRouter(bob.address),
      "LibDiamond: Must be contract owner",
    );
  });

  it("should revert if updating stargate router address with zero address", async function() {
    await expectRevert(
      stargateFacet.connect(owner).sgUpdateRouter(ZERO_ADDRESS),
      "StargateRouterAddressZero()",
    );
  });

  it("should update stargate router address", async function() {
    const tx: ContractTransaction = await stargateFacet.sgUpdateRouter(
      dummy.address,
    );
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("SGUpdatedRouter");
    expect(result[1]).toEqual(dummy.address);
  });

  it("should revert if updating slippage tolerance amount and not owner", async function() {
    await expectRevert(
      stargateFacet.connect(bob).sgUpdateSlippageTolerance(200),
      "LibDiamond: Must be contract owner",
    );
  });

  it("should update slippage tolerance amount", async function() {
    const tx: ContractTransaction = await stargateFacet.sgUpdateSlippageTolerance(
      200,
    );
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("SGUpdatedSlippageTolerance");
    expect(result[1]).toEqual(BigNumber.from(200));
  });

  it("should return 0.5% of amount for default minimum slippage", async function() {
    const minAmount: BigNumber = await stargateFacet.sgMinAmountOut(1000);
    const expectAmountOut: number = (1000 * (10000 - 50)) / 10000;
    expect(BigNumber.from(minAmount)).toEqual(BigNumber.from(expectAmountOut));
  });

  it("should return 2% of amount for minimum slippage after slippage updated", async function() {
    // perform slippage calc for default 0.5% tolerance
    let minAmount: BigNumber = await stargateFacet.sgMinAmountOut(1000);
    let expectAmountOut: number = (1000 * (10000 - 50)) / 10000;
    expect(BigNumber.from(minAmount)).toEqual(BigNumber.from(expectAmountOut));

    // change slippage tolerance to 2%
    await stargateFacet.sgUpdateSlippageTolerance(200);

    // perform slippage calc for default 2% tolerance
    minAmount = await stargateFacet.sgMinAmountOut(1000);
    expectAmountOut = (1000 * (10000 - 200)) / 10000;
    expect(BigNumber.from(minAmount)).toEqual(BigNumber.from(expectAmountOut));
  });

  it("should revert trying to withdraw stuck tokens in the contract if not the owner", async function() {
    await expectRevert(
      stargateFacet
        .connect(bob)
        .sgWithdraw(MAINNET_USDC_ADDRESS, bob.address, 10),
      "LibDiamond: Must be contract owner",
    );
  });

  it("should withdraw stuck tokens in the contract", async function() {
    // check pre-test balance of USDC for dummy and stargate facet accounts
    let dummyUSDCBalance = await usdc.connect(dummy).balanceOf(dummy.address);
    let sgFacetUSDCBalance = await usdc
      .connect(dummy)
      .balanceOf(stargateFacet.address);
    expect(dummyUSDCBalance).toEqual(BigNumber.from(0));
    expect(sgFacetUSDCBalance).toEqual(BigNumber.from(0));

    // transfer USDC from alice to stargate facet and check balance of stargate facet
    await usdc.connect(alice).transfer(stargateFacet.address, 20);
    sgFacetUSDCBalance = await usdc
      .connect(dummy)
      .balanceOf(stargateFacet.address);
    expect(sgFacetUSDCBalance).toEqual(BigNumber.from(20));

    // check post-withdraw balance of USDC for dummy and stargate facet accounts
    await stargateFacet.sgWithdraw(MAINNET_USDC_ADDRESS, dummy.address, 20);
    dummyUSDCBalance = await usdc.connect(dummy).balanceOf(dummy.address);
    sgFacetUSDCBalance = await usdc
      .connect(dummy)
      .balanceOf(stargateFacet.address);
    expect(dummyUSDCBalance).toEqual(BigNumber.from(20));
    expect(sgFacetUSDCBalance).toEqual(BigNumber.from(0));
  });
});
