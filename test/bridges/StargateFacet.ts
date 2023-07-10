import { Contract, ContractReceipt, ContractTransaction } from "ethers";
import {
  deployContract,
  multiCallCheckLastEventEmitted,
  SignerWithAddress,
} from "../shared";
import { addFacets, getSelectors } from "../../utils/diamond";
import { Diamond, DiamondCutFacet, StargateFacet } from "../../typings";
import {
  ChainIdConfigStruct,
  StargateDataStruct,
  StargateETHDataStruct,
} from "../../typings/StargateFacet";
import { ethers, network } from "hardhat";
import { expectRevert } from "@openzeppelin/test-helpers";
import USDC_ABI from "./abi/USDC_ABI.js";
// import USDT_ABI from "./abi/USDT_ABI.js";
import { defaultAbiCoder } from "ethers/lib/utils";

const ETH_CHAIN_ID = 1;
const POLYGON_CHAIN_ID = 137;
const ARBITRUM_CHAIN_ID = 42161;
const LZ_ETH_CHAIN_ID = 101;
const LZ_POLYGON_CHAIN_ID = 109;
const LZ_ARBITRUM_CHAIN_ID = 110;
const MAINNET_STARGATE_ROUTER_ADDRESS =
  "0x8731d54E9D02c286767d56ac03e8037C07e01e98";
const MAINNET_STARGATE_ETH_ROUTER_ADDRESS =
  "0x150f94B44927F078737562f0fcF3C95c01Cc2376";
const POLYGON_STARGATE_ROUTER_ADDRESS =
  "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd";
const MAINNET_USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
// const MAINNET_USDT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const CHAIN_IDS_TO_LZ_CHAIN_IDS: ChainIdConfigStruct[] = [
  { chainId: ARBITRUM_CHAIN_ID, layerZeroChainId: LZ_ARBITRUM_CHAIN_ID },
  { chainId: ETH_CHAIN_ID, layerZeroChainId: LZ_ETH_CHAIN_ID },
  { chainId: POLYGON_CHAIN_ID, layerZeroChainId: LZ_POLYGON_CHAIN_ID },
];
const ZERO_ADDRESS = ethers.constants.AddressZero;
const TEN_USDC = ethers.utils.parseUnits("10", 6);
const VITALIK_ACCOUNT = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
const USDC_FUNDER_ACCOUNT = "0x95Ba4cF87D6723ad9C0Db21737D862bE80e93911";
// const BINANCE_PEG_ACCOUNT = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503";

describe("StargateFacet", () => {
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;
  let stargateFacet: StargateFacet;
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let usdcFunder: SignerWithAddress;
  // let usdtFunder: SignerWithAddress;
  let transferData: StargateDataStruct;
  let ethTransferData: StargateETHDataStruct;
  let usdc: Contract;
  // let usdt: Contract;

  async function setup() {
    accounts = await ethers.getSigners();
    owner = accounts[0];
    bob = accounts[1];

    // Impersonate Vitalik account
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [VITALIK_ACCOUNT],
    });

    // Assign to alice
    alice = await ethers.getSigner(VITALIK_ACCOUNT);

    // Impersonate USDC Funder account
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDC_FUNDER_ACCOUNT],
    });

    // Assign to usdcFunder
    usdcFunder = await ethers.getSigner(USDC_FUNDER_ACCOUNT);

    diamondCutFacet = await deployContract("DiamondCutFacet");
    diamond = await deployContract("Diamond", [
      owner.address,
      diamondCutFacet.address,
    ]);
    stargateFacet = await ethers.getContractAt(
      "StargateFacet",
      diamond.address,
    );
    const facetsToAdd = ["StargateFacet"];
    const cut = {
      [stargateFacet.address]: getSelectors(stargateFacet),
    };
    for (const facet of facetsToAdd) {
      const facetContract = await deployContract(facet);
      cut[facetContract.address] = getSelectors(facetContract);
      await addFacets([facetContract], diamond.address);
    }
    usdc = new ethers.Contract(MAINNET_USDC_ADDRESS, USDC_ABI);
    await usdc
      .connect(usdcFunder)
      .transfer(alice.address, ethers.utils.parseUnits("100", 6));
    await usdc
      .connect(alice)
      .approve(stargateFacet.address, ethers.utils.parseUnits("1000000", 6));
    await owner.sendTransaction({
      to: stargateFacet.address,
      value: ethers.utils.parseEther("10"),
    });
    await owner.sendTransaction({
      to: alice.address,
      value: ethers.utils.parseEther("10"),
    });
    await owner.sendTransaction({
      to: usdcFunder.address,
      value: ethers.utils.parseEther("10"),
    });
    stargateFacet
      .connect(owner)
      .initStargate(
        MAINNET_STARGATE_ROUTER_ADDRESS,
        MAINNET_STARGATE_ETH_ROUTER_ADDRESS,
        ETH_CHAIN_ID,
        CHAIN_IDS_TO_LZ_CHAIN_IDS,
        {
          gasLimit: 500000,
        },
      );
  }

  beforeEach(async () => {
    await network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.MAINNET_ALCHEMY_API_KEY}`,
          },
        },
      ],
    });
    await setup();
  });

  describe("#initStargate", async () => {
    it("should trigger error if owner is not caller", async () => {
      await expectRevert(
        stargateFacet
          .connect(bob)
          .initStargate(
            MAINNET_STARGATE_ROUTER_ADDRESS,
            MAINNET_STARGATE_ETH_ROUTER_ADDRESS,
            ETH_CHAIN_ID,
            CHAIN_IDS_TO_LZ_CHAIN_IDS,
            {
              gasLimit: 500000,
            },
          ),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should revert if stargate router address is address(0)", async () => {
      await expectRevert(
        stargateFacet.initStargate(
          ZERO_ADDRESS,
          MAINNET_STARGATE_ETH_ROUTER_ADDRESS,
          ETH_CHAIN_ID,
          CHAIN_IDS_TO_LZ_CHAIN_IDS,
        ),
        "Stargate:: invalid router address",
      );
    });

    it("should initialize the stargate router address and chain id", async () => {
      const tx: ContractTransaction = await stargateFacet
        .connect(owner)
        .initStargate(
          MAINNET_STARGATE_ROUTER_ADDRESS,
          MAINNET_STARGATE_ETH_ROUTER_ADDRESS,
          ETH_CHAIN_ID,
          CHAIN_IDS_TO_LZ_CHAIN_IDS,
          {
            gasLimit: 500000,
          },
        );
      const receipt: ContractReceipt = await tx.wait();
      const result = multiCallCheckLastEventEmitted(receipt);
      expect(result[0]).toEqual("StargateInitialized");
      expect(result[1]).toEqual(MAINNET_STARGATE_ROUTER_ADDRESS);
      expect(result[2]).toEqual(MAINNET_STARGATE_ETH_ROUTER_ADDRESS);
      expect(result[3]).toEqual(ETH_CHAIN_ID);
    });
  });

  describe("#stargateTokenTransfer", async () => {
    it("should trigger error if no msg.value amount to pay for fees", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 1, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateTokenTransfer(transferData),
        "Stargate:: msg.value required to pay message",
      );
    });

    it("should trigger error if no amount is specified", async () => {
      transferData = {
        amount: ethers.utils.parseUnits("0", 6),
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 1, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate:: invalid quantity",
      );
    });

    it("should trigger error if chain id is invalid", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: 999,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 1, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate:: chain not assigned layer zero chain id",
      );
    });

    it("should throw error if an invalid pool has been selected", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 7, // FRAX pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate: local chainPath does not exist",
      );
    });

    it("should error if valid pool selected but no valid chain path for swap", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 3, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate: local chainPath does not exist",
      );
    });

    it("should perform ERC20 token swap (MAINNET USDC => MATIC USDC)", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 1, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      const tx = await stargateFacet
        .connect(alice)
        .stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        });

      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "StargateTokenSwap";
      });

      expect(event[0].args.fromToken).toEqual(MAINNET_USDC_ADDRESS);
      expect(event[0].args.from).toEqual(alice.address);
      expect(event[0].args.to).toEqual(bob.address);
      expect(event[0].args.amount).toEqual(TEN_USDC);
      expect(event[0].args.chainIdTo).toEqual(POLYGON_CHAIN_ID);
    });

    it("should perform ERC20 token swap (MAINNET USDC => MATIC USDT)", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 2, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      const tx = await stargateFacet
        .connect(alice)
        .stargateTokenTransfer(transferData, {
          value: ethers.utils.parseEther("0.01"),
        });

      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "StargateTokenSwap";
      });

      expect(event[0].args.fromToken).toEqual(MAINNET_USDC_ADDRESS);
      expect(event[0].args.from).toEqual(alice.address);
      expect(event[0].args.to).toEqual(bob.address);
      expect(event[0].args.amount).toEqual(TEN_USDC);
      expect(event[0].args.chainIdTo).toEqual(POLYGON_CHAIN_ID);
    });
  });

  describe("#stargateETHTransfer", async () => {
    it("should trigger error if cannot bridge ETH from this chain", async () => {
      stargateFacet
        .connect(owner)
        .initStargate(
          MAINNET_STARGATE_ROUTER_ADDRESS,
          MAINNET_STARGATE_ETH_ROUTER_ADDRESS,
          56,
          CHAIN_IDS_TO_LZ_CHAIN_IDS,
          {
            gasLimit: 500000,
          },
        );
      ethTransferData = {
        amount: ethers.utils.parseEther("0.01"),
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.1"),
        }),
        "Stargate:: Cannot directly bridge ETH from this chain",
      );
    });

    it("should trigger error if cannot bridge ETH to this chain", async () => {
      ethTransferData = {
        amount: ethers.utils.parseEther("0.01"),
        dstChainId: POLYGON_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.1"),
        }),
        "Stargate:: Cannot directly bridge ETH to this chain",
      );
    });

    it("should trigger error if no msg.value amount to pay for fees", async () => {
      ethTransferData = {
        amount: ethers.utils.parseEther("0.01"),
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData),
        "Stargate:: msg.value required",
      );
    });

    it("should trigger error if no amount is specified", async () => {
      ethTransferData = {
        amount: 0,
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate:: invalid quantity",
      );
    });

    it("should trigger error msg.value - amount <= 0 ", async () => {
      ethTransferData = {
        amount: ethers.utils.parseEther("0.01"),
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.01"),
        }),
        "Stargate: no fees added for ETH transfer",
      );

      await expectRevert(
        stargateFacet.connect(alice).stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.001"),
        }),
        "Stargate: no fees added for ETH transfer",
      );
    });

    it("should perform an ETH swap (MAINNET => ARBITRUM)", async () => {
      ethTransferData = {
        amount: ethers.utils.parseEther("0.1"),
        dstChainId: ARBITRUM_CHAIN_ID,
        to: bob.address,
        slippage: 300, // 3%
      };

      const tx = await stargateFacet
        .connect(alice)
        .stargateETHTransfer(ethTransferData, {
          value: ethers.utils.parseEther("0.2"),
        });

      const receipt = await tx.wait();
      const event = receipt.events?.filter(x => {
        return x.event == "StargateETHSwap";
      });

      expect(event[0].args.from).toEqual(alice.address);
      expect(event[0].args.to).toEqual(bob.address);
      expect(event[0].args.amount).toEqual(ethers.utils.parseEther("0.1"));
      expect(event[0].args.chainIdTo).toEqual(ARBITRUM_CHAIN_ID);
    });
  });

  describe("#stargateFees", async () => {
    it("should get estimated layer zero fees for transaction", async () => {
      transferData = {
        amount: TEN_USDC,
        bridgeToken: MAINNET_USDC_ADDRESS,
        dstChainId: POLYGON_CHAIN_ID,
        srcPoolId: 1, // USDC pool id mainnet
        dstPoolId: 1, // USDC pool id polygon
        to: bob.address,
        slippage: 300, // 3%
        destStargateComposed: POLYGON_STARGATE_ROUTER_ADDRESS,
      };

      const fees = await stargateFacet.stargateFees(
        transferData,
        MAINNET_STARGATE_ROUTER_ADDRESS,
      );
      expect(parseInt(fees.toString())).toBeGreaterThan(0);
    });
  });

  describe("#getLzChainId", async () => {
    it("should trigger error if chain id has not been paired with layer zero chain id", async () => {
      await expectRevert(
        stargateFacet.getLzChainId(999),
        "Stargate:: chain not assigned layer zero chain id",
      );
    });

    it("should return layer zero chain id for specified chain", async () => {
      const lzChainId = await stargateFacet.getLzChainId(ARBITRUM_CHAIN_ID);
      expect(lzChainId).toEqual(LZ_ARBITRUM_CHAIN_ID);
    });
  });

  describe("#setLzChainId", async () => {
    it("should trigger error if owner is not caller", async () => {
      await expectRevert(
        stargateFacet.connect(bob).setLzChainId(1, 101),
        "LibDiamond: Must be contract owner",
      );
    });

    it("should set/update chain id -> layer zero chain id", async () => {
      await stargateFacet.connect(owner).setLzChainId(999, 13);
      const lzChainId = await stargateFacet.getLzChainId(999);
      expect(lzChainId).toEqual(13);
    });
  });

  describe("#sgReceive", async () => {
    it("should trigger error if not called by StargateRouter", async () => {
      await expectRevert(
        stargateFacet
          .connect(alice)
          .sgReceive(
            POLYGON_CHAIN_ID,
            ZERO_ADDRESS,
            9,
            usdc.address,
            ethers.utils.parseEther("0.01"),
            defaultAbiCoder.encode(["address"], [bob.address]),
          ),
        "Stargate:: only stargate router",
      );
    });

    // Not working due to 'FeeLibrary: not enough balance' error from Router => USDC pool => FeeLibrary contract;
    // it.only("should emit event and transfer tokens after sgReceive is triggered", async () => {
    //   const THOUSAND = ethers.utils.parseUnits("1000", 6);
    //   await impersonateAccount(BINANCE_PEG_ACCOUNT);
    //   usdtFunder = await ethers.getSigner(BINANCE_PEG_ACCOUNT);

    //   await owner.sendTransaction({
    //     to: usdtFunder.address,
    //     value: ethers.utils.parseEther("10"),
    //   });

    //   usdt = new ethers.Contract(MAINNET_USDT_ADDRESS, USDT_ABI);

    //   const router = await ethers.getContractAt(
    //     "IStargateRouter",
    //     MAINNET_STARGATE_ROUTER_ADDRESS,
    //   );
    //   console.log(`before adding usdc/usdt liquidity`);

    //   await usdc.connect(usdcFunder).approve(router.address, THOUSAND);
    //   await usdt.connect(usdtFunder).approve(router.address, THOUSAND);

    //   await router
    //     .connect(usdcFunder)
    //     .addLiquidity(1, THOUSAND, usdcFunder.address);

    //   await router
    //     .connect(usdtFunder)
    //     .addLiquidity(2, THOUSAND, usdtFunder.address);

    //   console.log(`after adding usdc/usdt liquidity`);

    //   const receiver = await deployContract("SGReceiver", [
    //     MAINNET_STARGATE_ROUTER_ADDRESS,
    //   ]);

    //   transferData = {
    //     amount: ethers.utils.parseUnits("10", 6),
    //     bridgeToken: MAINNET_USDC_ADDRESS, // mainnet USDC address
    //     dstChainId: 1, //mainnet => mainnet
    //     srcPoolId: 1, // USDC pool id mainnet
    //     dstPoolId: 2, // USDT pool id mainnet
    //     to: bob.address,
    //     slippage: 300, // 3%
    //     destStargateComposed: receiver.address, //sgReceiver implementer contract
    //   };

    //   const tx = await stargateFacet
    //     .connect(alice)
    //     .stargateTokenTransfer(transferData, {
    //       value: ethers.utils.parseEther("0.1"),
    //     });

    //   const receipt = await tx.wait();

    //   const event = receipt.events?.filter(x => {
    //     return x.event == "StargateReceivedOnDestination";
    //   });

    //   console.log(event);
    //   //check event emitted
    //   //check balance changed
    // });
  });
});
