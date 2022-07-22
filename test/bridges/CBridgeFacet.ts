// IMPORTANT: To run tests go to hardhat.config and change forking enabled to true
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
import { CBridgeFacet, Diamond, DiamondCutFacet } from "../../typings";
import { ethers, deployments, network } from "hardhat";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";
import { expectRevert } from "@openzeppelin/test-helpers";
import DAI_ABI from "./abi/DAI_ABI.js";

const CBRIDGE_ADDRESS = "0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820";
const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const ZERO_ADDRESS = ethers.constants.AddressZero;

describe("CBridgeFacet", () => {
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;
  let cBridgeFacet: CBridgeFacet;
  let CBridgeData: any;
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let dummy: SignerWithAddress;

  const daiContract: Contract = new ethers.Contract(
    DAI_ADDRESS,
    DAI_ABI,
    alice,
  );

  /* eslint-enable @typescript-eslint/no-explicit-any */
  const setupTest = deployments.createFixture(
    async ({ deployments, ethers }) => {
      await deployments.fixture("DeployCBridgeFacet");

      accounts = await ethers.getSigners();
      owner = accounts[0];
      dummy = accounts[1];

      // Set up diamond contract
      diamondCutFacet = await deployContract("DiamondCutFacet");
      diamond = await deployContract("Diamond", [
        owner.address,
        diamondCutFacet.address,
      ]);

      // Deploy CBridgeFacet contract from Diamond
      cBridgeFacet = await ethers.getContractAt(
        "CBridgeFacet",
        diamond.address,
      );

      // Add CBridgeFacet as facet
      const facetsToAdd = ["CBridgeFacet"];
      const cut = {
        [cBridgeFacet.address]: getSelectors(cBridgeFacet),
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

      // Initialize CBridge contract with CBridge address and chain id
      cBridgeFacet.connect(owner).cbInitialize(CBRIDGE_ADDRESS, {
        gasLimit: 500000,
      });

      // Alice approve CBridgeFacet to use ERC20 tokens
      await daiContract
        .connect(alice)
        .approve(cBridgeFacet.address, utils.parseUnits("100000", 10));
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
            blockNumber: 13798171,
          },
        },
      ],
    });
  });

  beforeEach(async function() {
    this.timeout(0);
    await setupTest();
  });

  describe("cbInitialize()", async function() {
    it("should revert if cBridge address is zero address)", async function() {
      await expectRevert(
        cBridgeFacet.cbInitialize(ZERO_ADDRESS),
        "ZeroAddressProvided()",
      );
    });

    it("should initialize the cBridge address and chain Id", async function() {
      const tx: ContractTransaction = await cBridgeFacet
        .connect(owner)
        .cbInitialize(CBRIDGE_ADDRESS, {
          gasLimit: 500000,
        });
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("CBInitialized");
      expect(result[1]).toEqual(CBRIDGE_ADDRESS);
      expect(result[2]).toEqual(BigNumber.from(3333));
    });
  });

  describe("cbBridgeTokens()", async function() {
    it("should revert if bridging to the same chain", async function() {
      CBridgeData = {
        to: alice.address,
        token: DAI_ADDRESS,
        qty: utils.parseUnits("100000", 10),
        dstChainId: 3333,
        nonce: 1,
      };
      await expectRevert(
        cBridgeFacet.connect(alice).cbBridgeTokens(CBridgeData, {
          gasLimit: 500000,
        }),
        "CannotBridgeToSameNetwork",
      );
    });

    it("should revert if bridging tokens and token is zero address)", async function() {
      CBridgeData = {
        to: alice.address,
        token: ZERO_ADDRESS,
        qty: utils.parseUnits("100000", 10),
        dstChainId: 137,
        nonce: 1,
      };
      await expectRevert(
        cBridgeFacet.connect(alice).cbBridgeTokens(CBridgeData, {
          gasLimit: 500000,
        }),
        "TokenAddressIsZero()",
      );
    });

    it("should revert if bridging tokens and amount is zero)", async function() {
      CBridgeData = {
        to: alice.address,
        token: DAI_ADDRESS,
        qty: 0,
        dstChainId: 137,
        nonce: 1,
      };
      await expectRevert(
        cBridgeFacet.connect(alice).cbBridgeTokens(CBridgeData, {
          gasLimit: 500000,
        }),
        "InvalidAmount()",
      );
    });

    it("should revert if bridging tokens and receiver of tokens is zero address)", async function() {
      CBridgeData = {
        to: ZERO_ADDRESS,
        token: DAI_ADDRESS,
        qty: utils.parseUnits("100000", 10),
        dstChainId: 137,
        nonce: 1,
      };
      await expectRevert(
        cBridgeFacet.connect(alice).cbBridgeTokens(CBridgeData, {
          gasLimit: 500000,
        }),
        "ZeroAddressProvided()",
      );
    });

    it("should start a token bridge transaction on the sending chain", async function() {
      CBridgeData = {
        to: alice.address,
        token: DAI_ADDRESS,
        qty: utils.parseUnits("100000", 10),
        dstChainId: 137,
        nonce: 1,
      };
      const tx: ContractTransaction = await cBridgeFacet
        .connect(alice)
        .cbBridgeTokens(CBridgeData, {
          gasLimit: 500000,
        });
      const receipt: ContractReceipt = await tx.wait();
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("CBTransferStarted");
      expect(result[1]).toEqual("cbridge");
      expect(result[2]).toEqual(DAI_ADDRESS);
      expect(result[3]).toEqual(alice.address);
      expect(result[4]).toEqual(alice.address);
      expect(result[5]).toEqual(utils.parseUnits("100000", 10));
      expect(result[6]).toEqual(BigNumber.from(137));
    });
  });

  describe("cbUpdateBridge()", async function() {
    it("should revert if updating cBridge address and not owner", async function() {
      await expectRevert(
        cBridgeFacet.connect(dummy).cbUpdateBridge(dummy.address),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should revert if updating cBridge address to zero address)", async function() {
      await expectRevert(
        cBridgeFacet.cbUpdateBridge(ZERO_ADDRESS),
        "ZeroAddressProvided()",
      );
    });

    it("should update cBridge address", async function() {
      const tx: ContractTransaction = await cBridgeFacet.cbUpdateBridge(
        dummy.address,
      );
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("CBUpdatedBridge");
      expect(result[1]).toEqual(dummy.address);
    });
  });

  describe("cbUpdateSlippageTolerance()", async function() {
    it("should revert if updating slippage tolerance and not owner", async function() {
      await expectRevert(
        cBridgeFacet.connect(dummy).cbUpdateSlippageTolerance(6000),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should revert if updating slippage tolerance to <= 0.5%", async function() {
      await expectRevert(
        cBridgeFacet.cbUpdateSlippageTolerance(5000),
        "CBSlippageTooLow",
      );
    });

    it("should update slippage tolerance", async function() {
      const tx: ContractTransaction = await cBridgeFacet.cbUpdateSlippageTolerance(
        15000,
      );
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("CBUpdatedSlippageTolerance");
      expect(result[1]).toEqual(BigNumber.from(15000));
    });
  });

  describe("cbWithdraw()", async function() {
    it("should revert trying to withdraw stuck tokens in the contract if not the owner", async function() {
      await expectRevert(
        cBridgeFacet.connect(dummy).cbWithdraw(DAI_ADDRESS, dummy.address, 10),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should withdraw stuck tokens in the contract", async function() {
      // check pre-test balance of DAI for dummy and cbridge facet accounts
      let dummyDAIBalance = await daiContract
        .connect(dummy)
        .balanceOf(dummy.address);
      let cbFacetDAIBalance = await daiContract
        .connect(dummy)
        .balanceOf(cBridgeFacet.address);
      expect(dummyDAIBalance).toEqual(BigNumber.from(0));
      expect(cbFacetDAIBalance).toEqual(BigNumber.from(0));

      // transfer DAI from alice to cbridge facet and check balance of stargate facet
      await daiContract.connect(alice).transfer(cBridgeFacet.address, 20);
      cbFacetDAIBalance = await daiContract
        .connect(dummy)
        .balanceOf(cBridgeFacet.address);
      expect(cbFacetDAIBalance).toEqual(BigNumber.from(20));

      // check post-withdraw balance of USDC for dummy and stargate facet accounts
      await cBridgeFacet.cbWithdraw(DAI_ADDRESS, dummy.address, 20);
      dummyDAIBalance = await daiContract
        .connect(dummy)
        .balanceOf(dummy.address);
      cbFacetDAIBalance = await daiContract
        .connect(dummy)
        .balanceOf(cBridgeFacet.address);
      expect(dummyDAIBalance).toEqual(BigNumber.from(20));
      expect(cbFacetDAIBalance).toEqual(BigNumber.from(0));
    });
  });
});
