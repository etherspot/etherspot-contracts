/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/camelcase */
import "./helpers/aa.init";
import { ethers } from "hardhat";
import { expect } from "chai";
import {
  SimpleAccount,
  EntryPoint,
  DepositPaymaster,
  TestCounter,
  TestToken,
  SimpleAccount__factory,
  DepositPaymaster__factory,
  TestOracle__factory,
  TestCounter__factory,
  TestToken__factory,
} from "../../typings";
import {
  AddressZero,
  createAddress,
  createAccountOwner,
  deployEntryPoint,
  FIVE_ETH,
  ONE_ETH,
  // simulationResultCatch,
  userOpsWithoutAgg,
} from "./helpers/testUtils";
import { fillAndSign } from "./UserOp";
import { hexConcat, hexZeroPad, parseEther } from "ethers/lib/utils";
import { expectRevert } from "@openzeppelin/test-helpers";

describe("DepositPaymaster", () => {
  let entryPoint: EntryPoint;
  const ethersSigner = ethers.provider.getSigner();
  let token: TestToken;
  let paymaster: DepositPaymaster;
  before(async function() {
    entryPoint = await deployEntryPoint();

    paymaster = await new DepositPaymaster__factory(ethersSigner).deploy(
      entryPoint.address,
    );
    await paymaster.addStake(1, { value: parseEther("2") });
    await entryPoint.depositTo(paymaster.address, { value: parseEther("1") });

    token = await new TestToken__factory(ethersSigner).deploy();
    const testOracle = await new TestOracle__factory(ethersSigner).deploy();
    await paymaster.addToken(token.address, testOracle.address);

    await token.mint(await ethersSigner.getAddress(), FIVE_ETH);
    await token.approve(paymaster.address, ethers.constants.MaxUint256);
  });

  describe("deposit", () => {
    let account: SimpleAccount;

    before(async () => {
      account = await new SimpleAccount__factory(ethersSigner).deploy(
        entryPoint.address,
        await ethersSigner.getAddress(),
      );
    });
    it("should deposit and read balance", async () => {
      await paymaster.addDepositFor(token.address, account.address, 100);
      expect(
        await paymaster.depositInfo(token.address, account.address),
      ).to.eql({ amount: 100 });
    });
    it("should fail to withdraw without unlock", async () => {
      const paymasterWithdraw = await paymaster.populateTransaction
        .withdrawTokensTo(token.address, AddressZero, 1)
        .then(tx => tx.data!);

      await expectRevert(
        account.exec(paymaster.address, 0, paymasterWithdraw),
        "DepositPaymaster: must unlockTokenDeposit",
      );
    });
    it("should fail to withdraw within the same block ", async () => {
      const paymasterUnlock = await paymaster.populateTransaction
        .unlockTokenDeposit()
        .then(tx => tx.data!);
      const paymasterWithdraw = await paymaster.populateTransaction
        .withdrawTokensTo(token.address, AddressZero, 1)
        .then(tx => tx.data!);

      await expectRevert(
        account.execBatch(
          [paymaster.address, paymaster.address],
          [paymasterUnlock, paymasterWithdraw],
        ),
        "DepositPaymaster: must unlockTokenDeposit",
      );
    });
    it("should succeed to withdraw after unlock", async () => {
      const paymasterUnlock = await paymaster.populateTransaction
        .unlockTokenDeposit()
        .then(tx => tx.data!);
      const target = createAddress();
      const paymasterWithdraw = await paymaster.populateTransaction
        .withdrawTokensTo(token.address, target, 1)
        .then(tx => tx.data!);
      await account.exec(paymaster.address, 0, paymasterUnlock);
      await account.exec(paymaster.address, 0, paymasterWithdraw);
      expect(await (await token.balanceOf(target)).eq(1)).to.be.true;
    });
  });

  describe("#validatePaymasterUserOp", () => {
    let account: SimpleAccount;
    const gasPrice = 1e9;
    let accountOwner: string;

    before(async () => {
      accountOwner = await ethersSigner.getAddress();
      account = await new SimpleAccount__factory(ethersSigner).deploy(
        entryPoint.address,
        accountOwner,
      );
    });

    it("should fail if no token", async () => {
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: paymaster.address,
        },
        ethersSigner,
        entryPoint,
      );
      await expectRevert(
        entryPoint.callStatic.simulateValidation(userOp),
        "paymasterAndData must specify token",
      );
    });

    it("should fail with wrong token", async () => {
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad("0x1234", 20),
          ]),
        },
        ethersSigner,
        entryPoint,
      );
      await expectRevert(
        entryPoint.callStatic.simulateValidation(userOp, { gasPrice }),
        "DepositPaymaster: unsupported token",
      );
    });

    it("should reject if no deposit", async () => {
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
        },
        ethersSigner,
        entryPoint,
      );
      await expectRevert(
        entryPoint.callStatic.simulateValidation(userOp, { gasPrice }),
        "DepositPaymaster: deposit too low",
      );
    });

    it("should reject if deposit is not locked", async () => {
      await paymaster.addDepositFor(token.address, account.address, ONE_ETH);

      const paymasterUnlock = await paymaster.populateTransaction
        .unlockTokenDeposit()
        .then(tx => tx.data!);
      await account.exec(paymaster.address, 0, paymasterUnlock);

      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
        },
        ethersSigner,
        entryPoint,
      );
      await expectRevert(
        entryPoint.callStatic.simulateValidation(userOp, { gasPrice }),
        "not locked",
      );
    });

    it("succeed with valid deposit", async () => {
      // needed only if previous test did unlock.
      const paymasterLockTokenDeposit = await paymaster.populateTransaction
        .lockTokenDeposit()
        .then(tx => tx.data!);
      await account.exec(paymaster.address, 0, paymasterLockTokenDeposit);

      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
        },
        ethersSigner,
        entryPoint,
      );
      const simVal = await entryPoint.callStatic
        .simulateValidation(userOp)
        .catch(e => {
          const err = e.message.slice(71, 87);
          return err;
        });
      // SimulationResult error indicates success
      expect(simVal).to.equal("SimulationResult");
    });
  });
  describe("#handleOps", () => {
    let account: SimpleAccount;
    const accountOwner = createAccountOwner();
    let counter: TestCounter;
    let callData: string;
    before(async () => {
      account = await new SimpleAccount__factory(ethersSigner).deploy(
        entryPoint.address,
        accountOwner.address,
      );
      counter = await new TestCounter__factory(ethersSigner).deploy();
      const counterJustEmit = await counter.populateTransaction
        .justemit()
        .then(tx => tx.data!);
      callData = await account.populateTransaction
        .execFromEntryPoint(counter.address, 0, counterJustEmit)
        .then(tx => tx.data!);

      await paymaster.addDepositFor(token.address, account.address, ONE_ETH);
    });
    it("should pay with deposit (and revert user's call) if user can't pay with tokens", async () => {
      const beneficiary = createAddress();
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
          callData,
        },
        accountOwner,
        entryPoint,
      );

      await entryPoint.handleAggregatedOps(
        userOpsWithoutAgg([userOp]),
        beneficiary,
      );

      const [log] = await entryPoint.queryFilter(
        entryPoint.filters.UserOperationEvent(),
      );
      expect(log.args.success).to.eq(false);
      expect(await counter.queryFilter(counter.filters.CalledFrom())).to.eql(
        [],
      );
      expect(await (await ethers.provider.getBalance(beneficiary)).gt(0)).to.be
        .true;
    });

    it("should pay with tokens if available", async () => {
      const beneficiary = createAddress();
      const beneficiary1 = createAddress();
      const initialTokens = parseEther("1");
      await token.mint(account.address, initialTokens);

      // need to "approve" the paymaster to use the tokens. we issue a UserOp for that (which uses the deposit to execute)
      const tokenApprovePaymaster = await token.populateTransaction
        .approve(paymaster.address, ethers.constants.MaxUint256)
        .then(tx => tx.data!);
      const execApprove = await account.populateTransaction
        .execFromEntryPoint(token.address, 0, tokenApprovePaymaster)
        .then(tx => tx.data!);
      const userOp1 = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
          callData: execApprove,
        },
        accountOwner,
        entryPoint,
      );
      await entryPoint.handleAggregatedOps(
        userOpsWithoutAgg([userOp1]),
        beneficiary1,
      );

      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            hexZeroPad(token.address, 20),
          ]),
          callData,
        },
        accountOwner,
        entryPoint,
      );
      await entryPoint.handleAggregatedOps(
        userOpsWithoutAgg([userOp]),
        beneficiary,
      );

      const [log] = await entryPoint.queryFilter(
        entryPoint.filters.UserOperationEvent(),
        await ethers.provider.getBlockNumber(),
      );
      expect(log.args.success).to.eq(true);
      const charge = log.args.actualGasCost;
      expect(await (await ethers.provider.getBalance(beneficiary)).eq(charge))
        .to.be.true;

      const targetLogs = await counter.queryFilter(
        counter.filters.CalledFrom(),
      );
      expect(targetLogs.length).to.eq(1);
    });
  });
});
