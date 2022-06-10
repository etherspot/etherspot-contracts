import { BigNumber } from "ethers";
import { deployContract, processTx } from "../../shared";
import { BalancesHelperV2, WrappedWeiToken } from "../../../typings";
import { Framework } from "@superfluid-finance/sdk-core";
import daiABI from "./abi/fDAIABI";
import { ethers, web3 } from "hardhat";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";
import { expectRevert } from "@openzeppelin/test-helpers";
import deployFramework from "@superfluid-finance/ethereum-contracts/scripts/deploy-framework";
import deployTestToken from "@superfluid-finance/ethereum-contracts/scripts/deploy-test-token";
import deploySuperToken from "@superfluid-finance/ethereum-contracts/scripts/deploy-super-token";

const provider = web3;

let sf: Framework;
let balancesHelperV2: BalancesHelperV2;
let wrappedWeiToken: WrappedWeiToken;
let dai: daiABI;
let daix: daiABI;
let daiAddress: string;
let owner: SignerWithAddress;
let alice: SignerWithAddress;
let bob: SignerWithAddress;
let charlie: SignerWithAddress;
let dead: SignerWithAddress;

const errorHandler = (err: any) => {
  if (err) throw err;
};

describe("BalancesHelperV2", () => {
  before(async () => {
    // create signers
    [owner, alice, bob, charlie, dead] = await ethers.getSigners();
    // deploy BalancesHelperV2 contract
    balancesHelperV2 = await deployContract("BalancesHelperV2");
    wrappedWeiToken = await deployContract("WrappedWeiToken");
    // deploy the framework
    await deployFramework(errorHandler, { web3, from: owner.address });
    // deploy a fake erc20
    await processTx(
      owner.sendTransaction({
        to: wrappedWeiToken.address,
        value: 1000,
      }),
    );
  });

  beforeEach(async () => {
    // deploy a fake erc20
    await deployTestToken(errorHandler, [":", "fDAI"], {
      web3,
      from: owner.address,
    });
    // deploy a fake erc20 wrapper super token around the fDAI token
    await deploySuperToken(errorHandler, [":", "fDAI"], {
      web3,
      from: owner.address,
    });
    // initialize the superfluid framework - networkName: 'custom' and dataMode: 'WEB3_ONLY' as using hardhat locally
    sf = await Framework.create({
      networkName: "custom",
      provider,
      dataMode: "WEB3_ONLY",
      resolverAddress: process.env.RESOLVER_ADDRESS,
      protocolReleaseVersion: "test",
    });
    // use the framework to get the super token
    daix = await sf.loadSuperToken("fDAIx");
    // get the contract object for the erc20 token
    const daiAddress = daix.underlyingToken.address;
    dai = new ethers.Contract(daiAddress, daiABI, owner);
  });

  describe("ERC20 Token", () => {
    it("Should be able to read user balance", async () => {
      const balance: BigNumber[] = await balancesHelperV2.getBalances(
        [owner.address, alice.address, bob.address],
        [wrappedWeiToken.address],
      );
      console.log("Owner ERC20 Token Balance: ", balance[0].toString());
      expect(balance[0]).toBeBN(1000);
      expect(balance[1]).toBeBN(0);
      expect(balance[2]).toBeBN(0);
    });
  });

  describe("Pure SuperToken", () => {
    it("Should be able to read user balance", async () => {
      daiAddress = daix.underlyingToken.address;
      // check fDAI balance (should be 0)
      let balance: BigNumber[] = await balancesHelperV2.getBalances(
        [owner.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(0);
      // mint user tokens
      await dai
        .connect(owner)
        .mint(owner.address, ethers.utils.parseEther("100"));
      // check fDAI balance (should be 100)
      balance = await balancesHelperV2.getBalances(
        [owner.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("100"));
      // remove tokens
      await dai
        .connect(owner)
        .transfer(dead.address, ethers.utils.parseEther("100"));
    });

    it("Should be able to read multiple user balances", async () => {
      daiAddress = daix.underlyingToken.address;
      // check fDAI balances (should all be 0)
      let balance: BigNumber[] = await balancesHelperV2.getBalances(
        [owner.address, alice.address, bob.address, charlie.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(0);
      expect(balance[1]).toBeBN(0);
      expect(balance[2]).toBeBN(0);
      expect(balance[3]).toBeBN(0);
      // mint users tokens
      await dai
        .connect(owner)
        .mint(owner.address, ethers.utils.parseEther("100"));
      await dai
        .connect(owner)
        .mint(alice.address, ethers.utils.parseEther("10"));
      await dai.connect(owner).mint(bob.address, ethers.utils.parseEther("20"));
      await dai
        .connect(owner)
        .mint(charlie.address, ethers.utils.parseEther("30"));
      // check fDAI balances (should be 100, 10, 20, 30)
      balance = await balancesHelperV2.getBalances(
        [owner.address, alice.address, bob.address, charlie.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("100"));
      expect(balance[1]).toBeBN(ethers.utils.parseEther("10"));
      expect(balance[2]).toBeBN(ethers.utils.parseEther("20"));
      expect(balance[3]).toBeBN(ethers.utils.parseEther("30"));
      // remove tokens
      await dai
        .connect(owner)
        .transfer(dead.address, ethers.utils.parseEther("100"));
      await dai
        .connect(alice)
        .transfer(dead.address, ethers.utils.parseEther("10"));
      await dai
        .connect(bob)
        .transfer(dead.address, ethers.utils.parseEther("20"));
      await dai
        .connect(charlie)
        .transfer(dead.address, ethers.utils.parseEther("30"));
    });

    it("Should revert if the account address is the zero address", async () => {
      daiAddress = daix.underlyingToken.address;
      await expectRevert(
        balancesHelperV2.getBalances(
          [ethers.constants.AddressZero],
          [daiAddress],
        ),
        `AccountZeroAddress("${ethers.constants.AddressZero}", "${daiAddress}")`,
      );
    });

    it("Should revert if the token address is the zero address", async () => {
      await expectRevert(
        balancesHelperV2.getBalances(
          [owner.address],
          [ethers.constants.AddressZero],
        ),
        `TokenZeroAddress("${owner.address}", "${ethers.constants.AddressZero}")`,
      );
    });
  });

  describe("Wrapped/Native SuperToken", () => {
    it("Should be able to read user balance (upgraded tokens)", async () => {
      daiAddress = daix.underlyingToken.address;
      // mint & approve contract to spend user tokens
      await dai
        .connect(owner)
        .mint(owner.address, ethers.utils.parseEther("100"));
      await dai
        .connect(owner)
        .approve(daix.address, ethers.utils.parseEther("50"));
      // check fDAIx initial balance is zero
      let balance: BigNumber[] = await balancesHelperV2.getSuperfluidWrappedTokenBalances(
        [owner.address],
        [daix.address],
      );
      expect(balance[0]).toBeBN(0);
      // upgrade half balance (50) to SuperToken
      const daixUpgradeOperation = daix.upgrade({
        amount: ethers.utils.parseEther("50"),
      });
      await daixUpgradeOperation.exec(owner);
      // check fDAIx balance (should be 50)
      balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances(
        [owner.address],
        [daix.address],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("50"));
      // check fDAI balance (should be 50)
      balance = await balancesHelperV2.getBalances(
        [owner.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("50"));
      // remove wrapped tokens
      const daixDowngradeOperation = daix.downgrade({
        amount: ethers.utils.parseEther("50"),
      });
      await daixDowngradeOperation.exec(owner);
      await dai
        .connect(owner)
        .transfer(dead.address, ethers.utils.parseEther("100"));
    });

    it("Should be able to read user balance (downgraded tokens)", async () => {
      daiAddress = daix.underlyingToken.address;
      // mint, approve & upgrade
      await dai
        .connect(owner)
        .mint(owner.address, ethers.utils.parseEther("100"));
      await dai
        .connect(owner)
        .approve(daix.address, ethers.utils.parseEther("50"));
      const daixUpgradeOperation = daix.upgrade({
        amount: ethers.utils.parseEther("50"),
      });
      await daixUpgradeOperation.exec(owner);
      // check fDAIx balance (should be 50)
      let balance: BigNumber[] = await balancesHelperV2.getSuperfluidWrappedTokenBalances(
        [owner.address],
        [daix.address],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("50"));
      // check fDAI balance (should be 50)
      balance = await balancesHelperV2.getBalances(
        [owner.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("50"));
      // downgrade half balance (25) from SuperToken
      const daixDowngradeOperation = daix.downgrade({
        amount: ethers.utils.parseEther("25"),
      });
      await daixDowngradeOperation.exec(owner);
      // check fDAIx balance (should be 25)
      balance = await balancesHelperV2.getSuperfluidWrappedTokenBalances(
        [owner.address],
        [daix.address],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("25"));
      // check fDAI balance (should be 75)
      balance = await balancesHelperV2.getBalances(
        [owner.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("75"));
    });

    it("Should be able to read multiple user balances (upgraded tokens)", async () => {
      // mint user tokens
      await dai
        .connect(owner)
        .mint(alice.address, ethers.utils.parseEther("21"));
      await dai.connect(owner).mint(bob.address, ethers.utils.parseEther("28"));
      await dai
        .connect(owner)
        .mint(charlie.address, ethers.utils.parseEther("35"));
      // approve contract to spend user tokens
      await dai
        .connect(alice)
        .approve(daix.address, ethers.utils.parseEther("7"));
      await dai
        .connect(bob)
        .approve(daix.address, ethers.utils.parseEther("14"));
      await dai
        .connect(charlie)
        .approve(daix.address, ethers.utils.parseEther("21"));
      // upgrade 1/3 balances to SuperToken
      const aliceUpgradeOperation = daix.upgrade({
        amount: ethers.utils.parseEther("7"),
      });
      await aliceUpgradeOperation.exec(alice);
      const bobUpgradeOperation = daix.upgrade({
        amount: ethers.utils.parseEther("14"),
      });
      await bobUpgradeOperation.exec(bob);
      const charlieUpgradeOperation = daix.upgrade({
        amount: ethers.utils.parseEther("21"),
      });
      await charlieUpgradeOperation.exec(charlie);
      // check fDAIx balances (should be 7, 14, 21)
      let balance: BigNumber[] = await balancesHelperV2.getSuperfluidWrappedTokenBalances(
        [alice.address, bob.address, charlie.address],
        [daix.address],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("7"));
      expect(balance[1]).toBeBN(ethers.utils.parseEther("14"));
      expect(balance[2]).toBeBN(ethers.utils.parseEther("21"));
      // check fDAI balances (should be 14, 14, 14)
      balance = await balancesHelperV2.getBalances(
        [alice.address, bob.address, charlie.address],
        [daiAddress],
      );
      expect(balance[0]).toBeBN(ethers.utils.parseEther("14"));
      expect(balance[1]).toBeBN(ethers.utils.parseEther("14"));
      expect(balance[2]).toBeBN(ethers.utils.parseEther("14"));
    });

    it("Should revert if the account address is the zero address", async () => {
      await expectRevert(
        balancesHelperV2.getSuperfluidWrappedTokenBalances(
          [ethers.constants.AddressZero],
          [daix.address],
        ),
        `AccountZeroAddress("${ethers.constants.AddressZero}", "${daix.address}")`,
      );
    });

    it("Should revert if the token address is the zero address", async () => {
      await expectRevert(
        balancesHelperV2.getSuperfluidWrappedTokenBalances(
          [owner.address],
          [ethers.constants.AddressZero],
        ),
        `TokenZeroAddress("${owner.address}", "${ethers.constants.AddressZero}")`,
      );
    });
  });
});
