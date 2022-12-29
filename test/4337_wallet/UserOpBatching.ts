/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unreachable */
import "./helpers/aa.init";
import { describe } from "mocha";
import { BigNumber, Wallet } from "ethers";
import { expect } from "chai";
import {
  EtherspotAccount,
  EtherspotAccount__factory,
  EntryPoint,
  TestCounter,
  TestCounter__factory,
  EtherspotAccountFactory,
} from "../../typings";
import {
  createAccountOwner,
  fund,
  checkForGeth,
  getAccountInitCode,
  tonumber,
  deployEntryPoint,
  callDataCost,
  createAddress,
  getAccountAddress,
  simulationResultCatch,
} from "./helpers/testUtils";
import { fillAndSign } from "./UserOp";
import { UserOperation } from "./UserOperation";
import { PopulatedTransaction } from "ethers/lib/ethers";
import { ethers } from "hardhat";
import { toBuffer } from "ethereumjs-util";
import { defaultAbiCoder } from "ethers/lib/utils";

describe("Batch gas testing", function() {
  // this test is currently useless. client need to do better work with preVerificationGas calculation.
  // we do need a better recommendation for bundlers how to validate those values before accepting a request.
  return;

  let once = true;

  const ethersSigner = ethers.provider.getSigner();
  let entryPoint: EntryPoint;
  let etherspotAccountFactory: EtherspotAccountFactory;

  let accountOwner: Wallet;
  let account: EtherspotAccount;

  const results: Array<() => void> = [];
  before(async function() {
    this.skip();

    await checkForGeth();
    entryPoint = await deployEntryPoint();
    // static call must come from address zero, to validate it can only be called off-chain.
    accountOwner = createAccountOwner();
    account = await new EtherspotAccount__factory(ethersSigner).deploy(
      entryPoint.address,
    );
    await account.initialize(await accountOwner.getAddress());
    await fund(account);
  });

  after(async () => {
    if (results.length === 0) {
      return;
    }
    console.log("== Summary");
    console.log(
      'note: negative "overpaid" means the client should compensate the relayer with higher priority fee',
    );
    for (const result of results) {
      await result();
    }
  });

  [1, 10].forEach(maxCount => {
    describe(`test batches maxCount=${maxCount}`, () => {
      /**
       * attempt big batch.
       */
      let counter: TestCounter;
      let accountExecCounterFromEntryPoint: PopulatedTransaction;
      let execCounterCount: PopulatedTransaction;
      const beneficiaryAddress = createAddress();

      before(async () => {
        counter = await new TestCounter__factory(ethersSigner).deploy();
        const count = await counter.populateTransaction.count();
        execCounterCount = await account.populateTransaction.execute(
          counter.address,
          0,
          count.data!,
        );
        accountExecCounterFromEntryPoint = await account.populateTransaction.execute(
          counter.address,
          0,
          count.data!,
        );
      });

      const accounts: Array<{ w: string; owner: Wallet }> = [];

      it("batch of create", async () => {
        const ops: UserOperation[] = [];
        let count = 0;
        const maxTxGas = 12e6;
        let opsGasCollected = 0;
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        while (++count) {
          const accountOwner1 = createAccountOwner();
          const account1 = await getAccountAddress(
            accountOwner1.address,
            etherspotAccountFactory,
          );
          await fund(account1, "0.5");
          const op1 = await fillAndSign(
            {
              initCode: getAccountInitCode(
                accountOwner1.address,
                etherspotAccountFactory,
              ),
              nonce: 0,
              // callData: accountExecCounterFromEntryPoint.data,
              maxPriorityFeePerGas: 1e9,
            },
            accountOwner1,
            entryPoint,
          );
          // requests are the same, so estimate is the same too.
          const {
            preOpGas,
          } = await entryPoint.callStatic
            .simulateValidation(op1, { gasPrice: 1e9 })
            .catch(simulationResultCatch);
          const txgas = BigNumber.from(preOpGas)
            .add(op1.callGasLimit)
            .toNumber();

          // console.log('colected so far', opsGasCollected, 'estim', verificationGasLimit, 'max', maxTxGas)
          if (opsGasCollected + txgas > maxTxGas) {
            break;
          }
          opsGasCollected += txgas;
          ops.push(op1);
          accounts.push({ owner: accountOwner1, w: account1 });
          if (accounts.length >= maxCount) break;
        }

        await call_handleOps_and_stats("Create", ops, count);
      });

      it("batch of tx", async function() {
        this.timeout(30000);
        if (accounts.length === 0) {
          this.skip();
        }

        const ops: UserOperation[] = [];
        for (const { w, owner } of accounts) {
          const op1 = await fillAndSign(
            {
              sender: w,
              callData: accountExecCounterFromEntryPoint.data,
              maxPriorityFeePerGas: 1e9,
              verificationGasLimit: 1.3e6,
            },
            owner,
            entryPoint,
          );
          ops.push(op1);

          if (once) {
            once = false;
            console.log("direct call:", await counter.estimateGas.count());
            console.log(
              "through account:",
              await ethers.provider.estimateGas({
                from: accountOwner.address,
                to: account.address,
                data: execCounterCount.data!,
              }),
              "datacost=",
              callDataCost(execCounterCount.data!),
            );
            console.log(
              "through handleOps:",
              await entryPoint.estimateGas.handleOps([op1], beneficiaryAddress),
            );
          }
        }

        await call_handleOps_and_stats("Simple Ops", ops, ops.length);
      });

      it("batch of expensive ops", async function() {
        this.timeout(30000);
        if (accounts.length === 0) {
          this.skip();
        }

        const waster = await counter.populateTransaction.gasWaster(40, "");
        const accountExecFromEntryPoint_waster: PopulatedTransaction = await account.populateTransaction.execute(
          counter.address,
          0,
          waster.data!,
        );

        const ops: UserOperation[] = [];
        for (const { w, owner } of accounts) {
          const op1 = await fillAndSign(
            {
              sender: w,
              callData: accountExecFromEntryPoint_waster.data,
              maxPriorityFeePerGas: 1e9,
              verificationGasLimit: 1.3e6,
            },
            owner,
            entryPoint,
          );
          ops.push(op1);
        }

        await call_handleOps_and_stats("Expensive Ops", ops, ops.length);
      });

      it("batch of large ops", async function() {
        this.timeout(30000);
        if (accounts.length === 0) {
          this.skip();
        }

        const waster = await counter.populateTransaction.gasWaster(
          0,
          "1".repeat(16384),
        );
        const accountExecFromEntryPoint_waster: PopulatedTransaction = await account.populateTransaction.execute(
          counter.address,
          0,
          waster.data!,
        );

        const ops: UserOperation[] = [];
        for (const { w, owner } of accounts) {
          const op1 = await fillAndSign(
            {
              sender: w,
              callData: accountExecFromEntryPoint_waster.data,
              maxPriorityFeePerGas: 1e9,
              verificationGasLimit: 1.3e6,
            },
            owner,
            entryPoint,
          );
          ops.push(op1);
        }

        await call_handleOps_and_stats("Large (16k) Ops", ops, ops.length);
      });
    });
  });

  async function call_handleOps_and_stats(
    title: string,
    ops: UserOperation[],
    count: number,
  ): Promise<void> {
    const beneficiaryAddress = createAddress();
    const sender = ethersSigner; // ethers.provider.getSigner(5)
    const senderPrebalance = await ethers.provider.getBalance(
      await sender.getAddress(),
    );
    const entireTxEncoded = toBuffer(
      await entryPoint.populateTransaction
        .handleOps(ops, beneficiaryAddress)
        .then(tx => tx.data),
    );

    function callDataCost(data: Buffer | string): number {
      if (typeof data === "string") {
        data = toBuffer(data);
      }
      return data.map(b => (b === 0 ? 4 : 16)).reduce((sum, b) => sum + b);
    }

    // data cost of entire bundle
    const entireTxDataCost = callDataCost(entireTxEncoded);
    // data cost of a single op in the bundle:
    const handleOpFunc = Object.values(entryPoint.interface.functions).find(
      func => func.name === "handleOp",
    )!;
    const opEncoding = handleOpFunc.inputs[0];
    const opEncoded = defaultAbiCoder.encode([opEncoding], [ops[0]]);
    const opDataCost = callDataCost(opEncoded);
    console.log(
      "== calldataoverhead=",
      entireTxDataCost,
      "len=",
      entireTxEncoded.length / 2,
      "opcost=",
      opDataCost,
      opEncoded.length / 2,
    );
    console.log(
      "== per-op overhead:",
      entireTxDataCost - opDataCost * count,
      "count=",
      count,
    );
    // for slack testing, we set TX priority same as UserOp
    // (real miner may create tx with priorityFee=0, to avoid paying from the "sender" to coinbase)
    const { maxPriorityFeePerGas } = ops[0];
    const ret = await entryPoint
      .connect(sender)
      .handleOps(ops, beneficiaryAddress, {
        gasLimit: 13e6,
        maxPriorityFeePerGas,
      })
      .then(async r => await r!.wait());
    // const allocatedGas = ops.map(op => parseInt(op.callGasLimit.toString()) + parseInt(op.verificationGasLimit.toString())).reduce((sum, x) => sum + x)
    // console.log('total allocated gas (callGasLimit+verificationGasLimit):', allocatedGas)

    // remove "revert reason" events
    const events1 = ret.events!.filter(
      (e: any) => e.event === "UserOperationEvent",
    )!;
    // console.log(events1.map(e => ({ev: e.event, ...objdump(e.args!)})))

    if (events1.length !== ret.events!.length) {
      console.log("== reverted: ", ret.events!.length - events1.length);
    }
    // note that in theory, each could can have different gasPrice (depends on its prio/max), but in our
    // test they are all the same.
    const { actualGasPrice } = events1[0]!.args!;
    const totalEventsGasCost = parseInt(
      events1
        .map((x: any) => x.args!.actualGasCost)
        .reduce((sum: any, x: any) => sum.add(x))
        .toString(),
    );

    const senderPaid = parseInt(
      senderPrebalance
        .sub(await ethers.provider.getBalance(await sender.getAddress()))
        .toString(),
    );
    let senderRedeemed = await ethers.provider
      .getBalance(beneficiaryAddress)
      .then(tonumber);

    expect(senderRedeemed).to.equal(totalEventsGasCost);

    // for slack calculations, add the calldataoverhead. should be part of the relayer fee.
    senderRedeemed += entireTxDataCost * actualGasPrice;
    console.log("provider gasprice:", await ethers.provider.getGasPrice());
    console.log("userop   gasPrice:", actualGasPrice);
    const opGasUsed = Math.floor(senderPaid / actualGasPrice / count);
    const opGasPaid = Math.floor(senderRedeemed / actualGasPrice / count);
    console.log(
      "senderPaid= ",
      senderPaid,
      "(wei)\t",
      (senderPaid / actualGasPrice).toFixed(0),
      "(gas)",
      opGasUsed,
      "(gas/op)",
      count,
    );
    console.log(
      "redeemed=   ",
      senderRedeemed,
      "(wei)\t",
      (senderRedeemed / actualGasPrice).toFixed(0),
      "(gas)",
      opGasPaid,
      "(gas/op)",
    );

    // console.log('slack=', ((senderRedeemed - senderPaid) * 100 / senderPaid).toFixed(2), '%', opGasUsed - opGasPaid)
    const dumpResult = async (): Promise<void> => {
      console.log(
        "==>",
        `${title} (count=${count}) : `.padEnd(30),
        "per-op gas overpaid:",
        opGasPaid - opGasUsed,
      );
    };
    await dumpResult();
    results.push(dumpResult);
  }
});
