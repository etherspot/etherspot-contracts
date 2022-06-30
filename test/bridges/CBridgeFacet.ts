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
      cBridgeFacet.connect(owner).initializeCBridge(CBRIDGE_ADDRESS, {
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

  it("should revert if cBridge address is address(0)", async function() {
    await expectRevert(
      cBridgeFacet.initializeCBridge(ZERO_ADDRESS),
      "InvalidConfig",
    );
  });

  it("should initialize the cBridge address and chain Id", async function() {
    const tx: ContractTransaction = await cBridgeFacet
      .connect(owner)
      .initializeCBridge(CBRIDGE_ADDRESS, {
        gasLimit: 500000,
      });
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("CBridgeInitialized");
    expect(result[1]).toEqual(CBRIDGE_ADDRESS);
    expect(result[2]).toEqual(BigNumber.from(3333));
  });

  it("should revert if bridging to the same chain", async function() {
    CBridgeData = {
      receiver: alice.address,
      token: DAI_ADDRESS,
      amount: utils.parseUnits("100000", 10),
      dstChainId: 3333,
      nonce: 1,
      maxSlippage: 5000,
    };
    await expectRevert(
      cBridgeFacet.connect(alice).bridgeTokensCBridge(CBridgeData, {
        gasLimit: 500000,
      }),
      "CannotBridgeToSameNetwork",
    );
  });

  it("should start a token bridge transaction on the sending chain", async function() {
    CBridgeData = {
      receiver: alice.address,
      token: DAI_ADDRESS,
      amount: utils.parseUnits("100000", 10),
      dstChainId: 137,
      nonce: 1,
      maxSlippage: 5000,
    };
    const tx: ContractTransaction = await cBridgeFacet
      .connect(alice)
      .bridgeTokensCBridge(CBridgeData, {
        gasLimit: 500000,
      });
    const receipt: ContractReceipt = await tx.wait();
    const result = multiCallCheckLastEventEmitted(receipt);
    expect(result[0]).toEqual("TransferStarted");
    expect(result[1]).toEqual("cBridge");
    expect(result[2]).toEqual(DAI_ADDRESS);
    expect(result[3]).toEqual(alice.address);
    expect(result[4]).toEqual(alice.address);
    expect(result[5]).toEqual(utils.parseUnits("100000", 10));
    expect(result[6]).toEqual(BigNumber.from(137));
  });

  it("should update cBridge address", async function() {
    const tx: ContractTransaction = await cBridgeFacet.updateCBridgeAddress(
      dummy.address,
    );
    const receipt: ContractReceipt = await tx.wait();
    const result = checkEvent(receipt);
    expect(result[0]).toEqual("UpdatedCBridgeAddress");
    expect(result[1]).toEqual(dummy.address);
  });

  it("should revert if updating cBridge address to address(0)", async function() {
    await expectRevert(
      cBridgeFacet.updateCBridgeAddress(ZERO_ADDRESS),
      "InvalidConfig",
    );
  });
});
