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
        .initializeStargate(MAINNET_STARGATE_ROUTER_ADDRESS, 3333, {
          gasLimit: 500000,
        });

      // add Polygon router address to mapping
      stargateFacet
        .connect(owner)
        .setCrossChainRouter(POLYGON_CHAIN_ID, POLYGON_STARGATE_ROUTER_ADDRESS);

      // get USDC contract instance
      const usdc = new ethers.Contract(MAINNET_USDC_ADDRESS, USDC_ABI);

      // Alice approve CBridgeFacet to use ERC20 tokens
      await usdc
        .connect(alice)
        .approve(stargateFacet.address, utils.parseUnits("100000", 10));

      // check USDC hooked up correctly
      const sanityCheckUSDC = await usdc
        .connect(alice)
        .allowance(alice.address, stargateFacet.address);
      console.log(
        `Check USDC allowance for StargateFacet: ${sanityCheckUSDC.toString()}`,
      );
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
      stargateFacet.initializeStargate(ZERO_ADDRESS, 3333),
      "InvalidConfig",
    );
  });

  it("should initialize the stargate router address and chain id", async function() {
    const tx: ContractTransaction = await stargateFacet
      .connect(owner)
      .initializeStargate(MAINNET_STARGATE_ROUTER_ADDRESS, 3333, {
        gasLimit: 500000,
      });
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("StargateInitialized");
    expect(result[1]).toEqual(MAINNET_STARGATE_ROUTER_ADDRESS);
    expect(result[2]).toEqual(3333);
  });

  it("should revert if bridging to the same chain", async function() {
    await expectRevert(
      stargateFacet.connect(alice).bridgeTokensStargate(
        MAINNET_USDC_ADDRESS,
        bob.address,
        AMOUNT,
        3333,

        {
          gasLimit: 500000,
        },
      ),
      "CannotBridgeToSameNetwork",
    );
  });

  it("should start a token bridge transaction on the sending chain", async function() {
    const tx: ContractTransaction = await stargateFacet
      .connect(alice)
      .bridgeTokensStargate(
        MAINNET_USDC_ADDRESS,
        bob.address,
        AMOUNT,
        POLYGON_CHAIN_ID,

        {
          gasLimit: 500000,
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

  it("should update stargate router address", async function() {
    const tx: ContractTransaction = await stargateFacet.updateStargateAddress(
      dummy.address,
    );
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("UpdatedStargateAddress");
    expect(result[1]).toEqual(dummy.address);
  });

  it("should update slippage tolerance amount", async function() {
    const tx: ContractTransaction = await stargateFacet.updateSlippageTolerance(
      200,
    );
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("UpdatedSlippageTolerance");
    expect(result[1]).toEqual(BigNumber.from(200));
  });
});
