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
import { RainbowBridgeFacet, Diamond, DiamondCutFacet } from "../../typings";
import { ethers, deployments, network } from "hardhat";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";
import { expectRevert } from "@openzeppelin/test-helpers";
import WETH_ABI from "./abi/WETH_ABI.js";

const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const ETH_CUSTODIAN_ADDRESS = "0x6BFaD42cFC4EfC96f529D786D643Ff4A8B89FA52";
const ZERO_ADDRESS = ethers.constants.AddressZero;

describe("RainbowBridgeFacet", () => {
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;
  let rainbowBridgeFacet: RainbowBridgeFacet;
  let RainbowBridgeData: any;
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let dummy: SignerWithAddress;

  const wethContract: Contract = new ethers.Contract(
    WETH_ADDRESS,
    WETH_ABI,
    alice,
  );

  /* eslint-enable @typescript-eslint/no-explicit-any */
  const setupTest = deployments.createFixture(
    async ({ deployments, ethers }) => {
      await deployments.fixture("DeployRainbowBridgeFacet");

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

      // Deploy CBridgeFacet contract from Diamond
      rainbowBridgeFacet = await ethers.getContractAt(
        "RainbowBridgeFacet",
        diamond.address,
      );

      // Add CBridgeFacet as facet
      const facetsToAdd = ["RainbowBridgeFacet"];
      const cut = {
        [rainbowBridgeFacet.address]: getSelectors(rainbowBridgeFacet),
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

      // Initialize RainbowBridgeFacet contract with EthCustodian address
      rainbowBridgeFacet
        .connect(owner)
        .initializeRainbowBridge(ETH_CUSTODIAN_ADDRESS, {
          gasLimit: 500000,
        });
    },
  );

  before(async function() {
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

  describe("initializeRainbowBridge", async function() {
    it("should revert if caller of initializeRainbowBridge is not owner of Diamond", async function() {
      await expectRevert(
        rainbowBridgeFacet.connect(bob).initializeRainbowBridge(dummy.address),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should revert if EthCustodian address is address(0)", async function() {
      await expectRevert(
        rainbowBridgeFacet.initializeRainbowBridge(ZERO_ADDRESS),
        "InvalidConfig",
      );
    });

    it("should emit event upon initialization", async function() {
      const tx: ContractTransaction = await rainbowBridgeFacet
        .connect(owner)
        .initializeRainbowBridge(ETH_CUSTODIAN_ADDRESS, {
          gasLimit: 500000,
        });
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("RainbowBridgeInitialized");
      expect(result[1]).toEqual(ETH_CUSTODIAN_ADDRESS);
    });
  });

  describe("rainbowBridgeTokensToAurora", async function() {
    it("should emit event on bridging of tokens", async function() {
      const txAmount: BigNumber = utils.parseUnits("100000", 10),
        RainbowBridgeData = {
          token: WETH_ADDRESS,
          recipient: bob.address,
          amount: txAmount,
          transferFee: utils.parseUnits("10", 10),
        };
      const tx: ContractTransaction = await rainbowBridgeFacet
        .connect(alice)
        .rainbowBridgeTokensToAurora(RainbowBridgeData, {
          value: txAmount,
          gasLimit: 500000,
        });
      const receipt: ContractReceipt = await tx.wait();
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("TransferStarted");
      expect(result[1]).toEqual("rainbowBridge");
      expect(result[2]).toEqual(WETH_ADDRESS);
      expect(result[3]).toEqual(alice.address);
      expect(result[4]).toEqual(bob.address);
      expect(result[5]).toEqual(utils.parseUnits("100000", 10));
      expect(result[6]).toEqual(utils.parseUnits("10", 10));
    });
  });

  describe("updateEthCustodianAddress", async function() {
    it("should emit event on updating EthCustodian address", async function() {
      const tx: ContractTransaction = await rainbowBridgeFacet.updateEthCustodianAddress(
        dummy.address,
      );
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("UpdatedEthCustodianAddress");
      expect(result[1]).toEqual(dummy.address);
    });

    it("should revert if updating cBridge address to address(0)", async function() {
      await expectRevert(
        rainbowBridgeFacet.updateEthCustodianAddress(ZERO_ADDRESS),
        "InvalidConfig",
      );
    });
  });
});
