import { BigNumber, ContractReceipt, ContractTransaction, utils } from "ethers";
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

const ETH_CHAIN_ID = 1;
const POLYGON_CHAIN_ID = 9; // Specified in (https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/mainnet) - Chain ID normally 137
const ARBITRUM_CHAIN_ID = 10; // Same as POLYGON_CHAIN_ID comments
const MAINNET_STARGATE_ROUTER_ADDRESS =
  "0x8731d54E9D02c286767d56ac03e8037C07e01e98";
const POLYGON_STARGATE_ROUTER_ADDRESS =
  "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd";
const ARBITRUM_STARGATE_ROUTER_ADDRESS =
  "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614";
const MAINNET_USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const POLYGON_USDC_ADDRESS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const ARBITRUM_USDC_ADDRESS = "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8";
const ZERO_ADDRESS = ethers.constants.AddressZero;
const AMOUNT = utils.parseUnits("100", 6);

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

  describe("sgInitialize()", async function() {
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
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("SGInitialized");
      expect(result[1]).toEqual(MAINNET_STARGATE_ROUTER_ADDRESS);
      expect(result[2]).toEqual(ETH_CHAIN_ID);
    });
  });

  describe("sgBridgeTokens()", async function() {
    it("should revert if starting a token bridge transaction and not enough tokens in pool to complete tx", async function() {
      StargateData = {
        qty: utils.parseUnits("1000", 10),
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "Stargate: not enough balance",
      );
    });

    it("should revert if starting a token bridge transaction and no amount", async function() {
      StargateData = {
        qty: 0,
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidAmount()",
      );
    });

    it("should revert if starting a token bridge transaction and fromToken is address(0)", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: ZERO_ADDRESS,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidConfig()",
      );
    });

    it("should revert if starting a token bridge transaction and toToken is address(0)", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: ZERO_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidConfig()",
      );
    });

    it("should revert if starting a token bridge transaction and source token is invalid", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI address
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidSourcePoolId()",
      );
    });

    it("should revert if starting a token bridge transaction and destination token is invalid", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: "0x0000000000000000000000000000000000001010", // MATIC address
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "Stargate: local chainPath does not exist",
      );
    });

    it("should revert if starting a token bridge transaction and receiver is address(0)", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: ZERO_ADDRESS,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidConfig()",
      );
    });

    it("should revert if starting a token bridge transaction and destStargateComposed is address(0)", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: ZERO_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        }),
        "InvalidConfig()",
      );
    });

    it("should start a token bridge transaction on the sending chain - Polygon", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      const tx: ContractTransaction = await stargateFacet
        .connect(alice)
        .sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        });

      const receipt: ContractReceipt = await tx.wait();
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("SGTransferStarted");
      expect(result[1]).toEqual("stargate");
      expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
      expect(result[3]).toEqual(POLYGON_USDC_ADDRESS);
      expect(result[4]).toEqual(alice.address);
      expect(result[5]).toEqual(bob.address);
      expect(result[6]).toEqual(BigNumber.from(AMOUNT));
      expect(result[7]).toEqual(POLYGON_CHAIN_ID);
    });

    it("should start a token bridge transaction on the sending chain - Arbitrum", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: ARBITRUM_USDC_ADDRESS,
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        destStargateComposed: ARBITRUM_STARGATE_ROUTER_ADDRESS,
      };

      const tx: ContractTransaction = await stargateFacet
        .connect(alice)
        .sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        });

      const receipt: ContractReceipt = await tx.wait();
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("SGTransferStarted");
      expect(result[1]).toEqual("stargate");
      expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
      expect(result[3]).toEqual(ARBITRUM_USDC_ADDRESS);
      expect(result[4]).toEqual(alice.address);
      expect(result[5]).toEqual(bob.address);
      expect(result[6]).toEqual(BigNumber.from(AMOUNT));
      expect(result[7]).toEqual(ARBITRUM_CHAIN_ID);
    });

    it("should deduct users tokens from balance on successful bridge", async function() {
      StargateData = {
        qty: AMOUNT,
        fromToken: usdc.address,
        toToken: POLYGON_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      const preBalance = await usdc.connect(alice).balanceOf(alice.address);

      const tx = await stargateFacet
        .connect(alice)
        .sgBridgeTokens(StargateData, {
          gasLimit: ethers.utils.hexlify(2000000),
        });

      await tx.wait();

      const postBalance = await usdc.connect(alice).balanceOf(alice.address);
      expect(postBalance.toNumber()).toEqual(preBalance.toNumber() - 100000000);
    });
  });

  describe("sgUpdateRouter()", async function() {
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
  });

  describe("sgCalculateFees()", async function() {
    it("should return calculated fee amount in wei for making swap", async function() {
      const feeWei = await stargateFacet.sgCalculateFees(
        POLYGON_CHAIN_ID,
        bob.address,
        MAINNET_STARGATE_ROUTER_ADDRESS,
        { gasLimit: ethers.utils.hexlify(2000000) },
      );
      expect(feeWei).toBeGreaterThanBN(BigNumber.from(10000000));
    });
  });

  describe("sgUpdateSlippageTolerance()", async function() {
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
      expect(BigNumber.from(minAmount)).toEqual(
        BigNumber.from(expectAmountOut),
      );
    });

    it("should return 2% of amount for minimum slippage after slippage updated", async function() {
      // perform slippage calc for default 0.5% tolerance
      let minAmount: BigNumber = await stargateFacet.sgMinAmountOut(1000);
      let expectAmountOut: number = (1000 * (10000 - 50)) / 10000;
      expect(BigNumber.from(minAmount)).toEqual(
        BigNumber.from(expectAmountOut),
      );

      // change slippage tolerance to 2%
      await stargateFacet.sgUpdateSlippageTolerance(200);

      // perform slippage calc for default 2% tolerance
      minAmount = await stargateFacet.sgMinAmountOut(1000);
      expectAmountOut = (1000 * (10000 - 200)) / 10000;
      expect(BigNumber.from(minAmount)).toEqual(
        BigNumber.from(expectAmountOut),
      );
    });
  });

  describe("sgWithdraw()", async function() {
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

  describe("sgAddPool()", async function() {
    it("should revert if adding pool to mapping and not owner", async function() {
      await expectRevert(
        stargateFacet.connect(bob).sgAddPool(1, MAINNET_USDC_ADDRESS, 3),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should add a new pool id to mapping", async function() {
      await stargateFacet.connect(owner).sgAddPool(15, MAINNET_USDC_ADDRESS, 3);
      const isAdded = await stargateFacet.sgCheckPoolId(
        15,
        MAINNET_USDC_ADDRESS,
        3,
      );
      expect(isAdded).toEqual(true);
    });

    it("should emit a SGAddedPool event", async function() {
      const tx: ContractTransaction = await stargateFacet
        .connect(owner)
        .sgAddPool(15, MAINNET_USDC_ADDRESS, 3);
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("SGAddedPool");
      expect(result[1]).toEqual(15);
      expect(result[2]).toEqual(MAINNET_USDC_ADDRESS);
      expect(result[3]).toEqual(3);
    });
  });

  describe("sgCheckPoolId()", async function() {
    it("should check pool exists in mapping - true", async function() {
      const isValidPool = await stargateFacet.sgCheckPoolId(
        ETH_CHAIN_ID,
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        1,
      );
      expect(isValidPool).toEqual(true);
    });

    it("should check pool exists in mapping - false", async function() {
      const isValidPool = await stargateFacet.sgCheckPoolId(
        18,
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        1,
      );
      expect(isValidPool).toEqual(false);
    });
  });

  describe("sgRetrievePoolId()", async function() {
    it("should retrieve pool for a valid token in mapping", async function() {
      const poolId = await stargateFacet.sgRetrievePoolId(
        2, // BSC
        "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", //BUSD address
      );
      expect(poolId).toEqual(5);
    });

    it("should return zero if token is not in mapping", async function() {
      const poolId = await stargateFacet.sgRetrievePoolId(
        ETH_CHAIN_ID,
        "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI address
      );
      expect(poolId).toEqual(0);
    });
  });
});
