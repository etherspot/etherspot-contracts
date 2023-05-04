import { ethers, deployments, network } from "hardhat";
import {
  BigNumber,
  Contract,
  ContractReceipt,
  ContractTransaction,
} from "ethers";
import { expectRevert } from "@openzeppelin/test-helpers";
import { ConnextFacet, Diamond, DiamondCutFacet } from "../../typings";
import { checkEvent, deployContract, SignerWithAddress } from "../shared";
import { addFacets, getSelectors } from "../../utils/diamond";
import USDC_ABI from "./abi/USDC_ABI.js";

const JSON_RPC = `https://eth-mainnet.alchemyapi.io/v2/${process.env.MAINNET_ALCHEMY_API_KEY}`;
const CONNEXT_ADDRESS = "0x8898B472C54c31894e3B9bb83cEA802a5d0e63C6";
const WETH_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const DESTINATION_WETH_UNWRAPPER = "0x7E8F8B2dA3dc5Ad9c9Dfd1A832331A039d4f3f74";
const DOMAIN_ID = 6648936; // Ethereum mainnet
const DESTINATION_DOMAIN_ID = 1886350457; // Matic mainnet
const ZERO_ADDRESS = ethers.constants.AddressZero;
const ETH_AMOUNT = ethers.utils.parseEther("1");
const USDC_AMOUNT = ethers.utils.parseUnits("1", 6);
const RELAYER_FEE = ethers.utils.parseEther("0.05");
const ETH_AMOUNT_PLUS_RELAYER_FEE = ethers.utils.parseEther("1.05");
const SLIPPAGE = 30;

describe("ConnextFacet", () => {
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;
  let connextFacet: ConnextFacet;
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let recipient: SignerWithAddress;
  let alice: SignerWithAddress;
  let usdcToken: Contract;

  /* eslint-enable @typescript-eslint/no-explicit-any */
  const setupTest = deployments.createFixture(
    async ({ deployments, ethers }) => {
      await deployments.fixture("DeployConnextFacet");

      const provider = new ethers.providers.JsonRpcProvider(JSON_RPC);
      accounts = await ethers.getSigners();
      owner = accounts[0];
      recipient = accounts[1];

      // Set up diamond contract
      diamondCutFacet = await deployContract("DiamondCutFacet");
      diamond = await deployContract("Diamond", [
        owner.address,
        diamondCutFacet.address,
      ]);

      // Deploy ConnextFacet contract from Diamond
      connextFacet = await ethers.getContractAt(
        "ConnextFacet",
        diamond.address,
      );

      // Add ConnextFacet as facet
      const facetsToAdd = ["ConnextFacet"];
      const cut = {
        [connextFacet.address]: getSelectors(connextFacet),
      };

      for (const facet of facetsToAdd) {
        const facetContract = await deployContract(facet);
        cut[facetContract.address] = getSelectors(facetContract);
        await addFacets([facetContract], diamond.address);
      }

      // Impersonate Vitalik account
      await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"],
      });

      // Assign to alice
      alice = await ethers.getSigner(
        "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      );

      // Connect to token instances
      usdcToken = new ethers.Contract(USDC_ADDRESS, USDC_ABI, provider);

      // Initialize Connext contract with Connext address, chain id and WETH address
      connextFacet
        .connect(owner)
        .initConnext(CONNEXT_ADDRESS, DOMAIN_ID, WETH_ADDRESS, {
          gasLimit: 500000,
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
            jsonRpcUrl: JSON_RPC,
            blockNumber: 16453057,
          },
        },
      ],
    });
  });

  beforeEach(async function() {
    this.timeout(0);
    await setupTest();
  });

  describe("#initConnext", async () => {
    it("should revert if Connext address is zero address)", async () => {
      await expectRevert(
        connextFacet.initConnext(ZERO_ADDRESS, DOMAIN_ID, WETH_ADDRESS),
        "Connext: invalid address",
      );
    });

    it("should revert if WETH address is zero address)", async () => {
      await expectRevert(
        connextFacet.initConnext(CONNEXT_ADDRESS, DOMAIN_ID, ZERO_ADDRESS),
        "Connext: invalid address",
      );
    });

    it("should initialize the connext address, chain id and WETH address", async () => {
      const tx: ContractTransaction = await connextFacet
        .connect(owner)
        .initConnext(CONNEXT_ADDRESS, DOMAIN_ID, WETH_ADDRESS, {
          gasLimit: 500000,
        });
      const receipt: ContractReceipt = await tx.wait();
      const result = checkEvent(receipt);
      expect(result[0]).toEqual("ConnextInitialized");
      expect(result[1]).toEqual(CONNEXT_ADDRESS);
      expect(BigNumber.from(result[2])).toEqual(BigNumber.from(DOMAIN_ID));
      expect(result[3]).toEqual(WETH_ADDRESS);
    });
  });

  describe("#connextTokenTransfer", async () => {
    it("should revert if token is zero address", async () => {
      await expectRevert(
        connextFacet.connextTokenTransfer(
          ZERO_ADDRESS,
          USDC_AMOUNT,
          recipient.address,
          DESTINATION_DOMAIN_ID,
          ethers.BigNumber.from(0),
          ethers.BigNumber.from(0),
        ),
        "Connext: invalid address",
      );
    });

    it("should revert if recipient is zero address", async () => {
      await expectRevert(
        connextFacet.connextTokenTransfer(
          USDC_ADDRESS,
          USDC_AMOUNT,
          ZERO_ADDRESS,
          DESTINATION_DOMAIN_ID,
          ethers.BigNumber.from(0),
          ethers.BigNumber.from(0),
        ),
        "Connext: invalid address",
      );
    });

    it("should revert if domain id and destination id are the same", async () => {
      await expectRevert(
        connextFacet.connextTokenTransfer(
          USDC_ADDRESS,
          USDC_AMOUNT,
          recipient.address,
          DOMAIN_ID,
          ethers.BigNumber.from(0),
          ethers.BigNumber.from(0),
        ),
        "Connext: Cannot bridge to same domain",
      );
    });

    it("should revert if approval not given to facet", async () => {
      await expectRevert(
        connextFacet.connextTokenTransfer(
          USDC_ADDRESS,
          USDC_AMOUNT,
          recipient.address,
          DESTINATION_DOMAIN_ID,
          ethers.BigNumber.from(0),
          ethers.BigNumber.from(0),
        ),
        "Connext: User must approve amount",
      );
    });

    beforeEach(async () => {
      // Alice approve ConnextFacet to use ERC20 tokens
      await usdcToken.connect(alice).approve(connextFacet.address, USDC_AMOUNT);
    });

    it("should perform ERC20 token swap (MAINNET => MATIC)", async () => {
      const tx = await connextFacet
        .connect(alice)
        .connextTokenTransfer(
          USDC_ADDRESS,
          USDC_AMOUNT,
          recipient.address,
          DESTINATION_DOMAIN_ID,
          SLIPPAGE,
          ethers.BigNumber.from(0),
        );
      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "ConnextTokenSwap";
      });

      expect(event[0].args.destination).toEqual(DESTINATION_DOMAIN_ID);
      expect(event[0].args.recipient).toEqual(recipient.address);
      expect(event[0].args.asset).toEqual(USDC_ADDRESS);
      expect(event[0].args.amount).toEqual(USDC_AMOUNT);
      expect(event[0].args.relayerFee).toEqual(ethers.BigNumber.from(0));
      expect(event[0].args.transferId).toBeDefined();
    });

    it("should perform ERC20 token swap with relayer fee (MAINNET => MATIC)", async () => {
      const tx = await connextFacet
        .connect(alice)
        .connextTokenTransfer(
          USDC_ADDRESS,
          USDC_AMOUNT,
          recipient.address,
          DESTINATION_DOMAIN_ID,
          SLIPPAGE,
          RELAYER_FEE,
          {
            value: RELAYER_FEE,
          },
        );

      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "ConnextTokenSwap";
      });

      expect(event[0].args.destination).toEqual(DESTINATION_DOMAIN_ID);
      expect(event[0].args.recipient).toEqual(recipient.address);
      expect(event[0].args.asset).toEqual(USDC_ADDRESS);
      expect(event[0].args.amount).toEqual(USDC_AMOUNT);
      expect(event[0].args.relayerFee).toEqual(RELAYER_FEE);
      expect(event[0].args.transferId).toBeDefined();
    });

    it("should revert on call with incorrect relayer fee", async () => {
      await expectRevert.unspecified(
        connextFacet
          .connect(alice)
          .connextTokenTransfer(
            USDC_ADDRESS,
            USDC_AMOUNT,
            recipient.address,
            DESTINATION_DOMAIN_ID,
            SLIPPAGE,
            RELAYER_FEE,
            {
              value: ethers.utils.parseEther("0.04"),
            },
          ),
      );
    });
  });

  describe("#connextEthTransfer", async () => {
    it("should revert if destination unwrapper is zero address", async () => {
      await expectRevert(
        connextFacet.connextEthTransfer(
          ZERO_ADDRESS,
          ETH_AMOUNT,
          recipient.address,
          DESTINATION_DOMAIN_ID,
          SLIPPAGE,
          ethers.BigNumber.from(0),
          {
            value: ETH_AMOUNT,
          },
        ),
        "Connext: invalid address",
      );
    });

    it("should revert if recipient is zero address", async () => {
      await expectRevert(
        connextFacet.connextEthTransfer(
          DESTINATION_WETH_UNWRAPPER,
          ETH_AMOUNT,
          ZERO_ADDRESS,
          DESTINATION_DOMAIN_ID,
          SLIPPAGE,
          ethers.BigNumber.from(0),
          {
            value: ETH_AMOUNT,
          },
        ),
        "Connext: invalid address",
      );
    });

    it("should revert if domain id and destination id are the same", async () => {
      await expectRevert(
        connextFacet.connextEthTransfer(
          DESTINATION_WETH_UNWRAPPER,
          ETH_AMOUNT,
          recipient.address,
          DOMAIN_ID,
          SLIPPAGE,
          ethers.BigNumber.from(0),
          {
            value: ETH_AMOUNT,
          },
        ),
        "Connext: Cannot bridge to same domain",
      );
    });

    it("should perform Ethereum swap (MAINNET => MATIC)", async () => {
      const tx = await connextFacet.connextEthTransfer(
        DESTINATION_WETH_UNWRAPPER,
        ETH_AMOUNT,
        recipient.address,
        DESTINATION_DOMAIN_ID,
        ethers.BigNumber.from(0),
        ethers.BigNumber.from(0),
        {
          value: ETH_AMOUNT,
        },
      );
      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "ConnextEthSwap";
      });

      expect(event[0].args.destination).toEqual(DESTINATION_DOMAIN_ID);
      expect(event[0].args.recipient).toEqual(recipient.address);
      expect(event[0].args.amount).toEqual(ETH_AMOUNT);
      expect(event[0].args.relayerFee).toEqual(ethers.BigNumber.from(0));
      expect(event[0].args.transferId).toBeDefined();
    });

    it("should perform Ethereum swap with relayer fee (MAINNET => MATIC)", async () => {
      const tx = await connextFacet.connextEthTransfer(
        DESTINATION_WETH_UNWRAPPER,
        ETH_AMOUNT,
        recipient.address,
        DESTINATION_DOMAIN_ID,
        SLIPPAGE,
        RELAYER_FEE,
        {
          value: ETH_AMOUNT_PLUS_RELAYER_FEE,
        },
      );
      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "ConnextEthSwap";
      });

      expect(event[0].args.destination).toEqual(DESTINATION_DOMAIN_ID);
      expect(event[0].args.recipient).toEqual(recipient.address);
      expect(event[0].args.amount).toEqual(ETH_AMOUNT_PLUS_RELAYER_FEE);
      expect(event[0].args.relayerFee).toEqual(RELAYER_FEE);
      expect(event[0].args.transferId).toBeDefined();
    });

    it("should revert on call with incorrect relayer fee", async () => {
      await expectRevert.unspecified(
        connextFacet
          .connect(alice)
          .connextEthTransfer(
            DESTINATION_WETH_UNWRAPPER,
            ETH_AMOUNT,
            recipient.address,
            DESTINATION_DOMAIN_ID,
            SLIPPAGE,
            RELAYER_FEE,
            {
              value: ethers.utils.parseEther("1.04"),
            },
          ),
      );
    });
  });
});
