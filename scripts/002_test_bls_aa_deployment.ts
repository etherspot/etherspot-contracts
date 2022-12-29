/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/camelcase */
import hre from "hardhat";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { hexValue } from "@ethersproject/bytes";
import {
  arrayify,
  defaultAbiCoder,
  hexConcat,
  keccak256,
  parseEther,
} from "ethers/lib/utils";
import { hashToPoint } from "@thehubbleproject/bls/dist/mcl";
import { DefaultsForUserOp, fillUserOp } from "../test/4337_wallet/UserOp";
import {
  aggregate,
  BlsSignerFactory,
  BlsVerifier,
} from "@thehubbleproject/bls/dist/signer";
import {
  BLSAccount,
  BLSAccountFactory__factory,
  BLSAccount__factory,
  EntryPoint,
  EtherspotAccountFactory__factory,
} from "../typings";
import {
  // getBalance,
  // getAccountAddress,
  deployEntryPoint,
} from "../test/4337_wallet/helpers/testUtils";

async function testBLSDeployment() {
  const etherSigner = ethers.provider.getSigner();
  const BLS_DOMAIN = arrayify(keccak256(Buffer.from("eip4337.bls.domain")));
  const [deployer, user] = await hre.ethers.getSigners();
  const blssf = await BlsSignerFactory.new();

  console.log(
    "\n" + "\x1b[32mTesting deployment of BLS Account Abstracted Wallet\x1b[0m",
  );
  console.log("\n" + "\x1b[32mSetting up contracts and wallets\x1b[0m");

  // Deploy EntryPoint
  const ep: EntryPoint = await deployEntryPoint();
  console.log(" EntryPoint deployed to: ", ep.address);

  // Deploy EtherspotAccountFactory
  console.log(
    "\x1b[35m Deploying EtherspotAccountFactory contract.....\x1b[0m",
  );
  const eAccFact = await new EtherspotAccountFactory__factory(
    etherSigner,
  ).deploy(ep.address);
  console.log(" EtherspotAccountFactory deployed to: ", eAccFact.address);

  // Deploy BLSSignatureAggregator
  console.log("\x1b[35m Deploying BLSSignatureAggregator contract.....\x1b[0m");
  // Requires BLSOpen Lib
  const BLSOpen = await hre.ethers.getContractFactory("BLSOpen");
  const blso = await BLSOpen.deploy();

  // Deploy SigAgg
  const BLSSignatureAggregator = await hre.ethers.getContractFactory(
    "BLSSignatureAggregator",
    {
      libraries: {
        BLSOpen: blso.address,
      },
    },
  );
  const blsAgg = await BLSSignatureAggregator.connect(deployer).deploy();
  console.log(" BLSSignatureAggregator deployed to: ", blsAgg.address);
  await blsAgg.addStake(ep.address, 2, { value: parseEther("1") });

  // Deploy BLSAccountFactory
  console.log("\x1b[35m Deploying BLSAccountFactory contract.....\x1b[0m");

  const blsFact = await new BLSAccountFactory__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  console.log(" BLSAccountFactory deployed to: ", blsFact.address);

  // Deploy BLS Account for User
  console.log("\x1b[35m Deploying BLS Account for User.....\x1b[0m");
  const signer1 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x01");
  const signer2 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x02");
  const signer3 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x03");

  const userBLS: BLSAccount = await new BLSAccount__factory(user).deploy(
    ep.address,
    blsAgg.address,
  );
  await userBLS["initialize(uint256[4])"](signer1.pubkey);

  console.log("\n" + "\x1b[32mChecking correct setup\x1b[0m");

  console.log(
    "\x1b[35m Sanity checking BLSSignatureAggregator setup.....\x1b[0m",
  );
  const aggCheck = await userBLS.getAggregator();
  aggCheck == blsAgg.address
    ? console.log(" BLSSignatureAggregator sanity check: true")
    : console.log(" BLSSignatureAggregator sanity check: false");

  console.log("\x1b[35m Sanity checking EntryPoint setup.....\x1b[0m");
  const epCheck = await userBLS.entryPoint();
  epCheck == ethers.utils.getAddress(ep.address)
    ? console.log(" EntryPoint sanity check: true")
    : console.log(" EntryPoint sanity check: false");

  const userPubKey = await userBLS.getBlsPublicKey();

  console.log(
    "\x1b[35m Sanity checking BLS public key (should be 4).....\x1b[0m",
  );
  console.log(userPubKey.map(e => e._hex));

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Signature aggregation
  console.log("\n" + "\x1b[32mSignature aggregation\x1b[0m");

  console.log("\x1b[35m Checking aggregation of signatures.....\x1b[0m");

  const sig1 = signer1.sign("0x1234");
  const sig2 = signer2.sign("0x5678");
  const offChainSigResult = hexConcat(aggregate([sig1, sig2]));
  const userOp1 = { ...DefaultsForUserOp, signature: hexConcat(sig1) };
  const userOp2 = { ...DefaultsForUserOp, signature: hexConcat(sig2) };
  const solidityAggResult = await blsAgg.aggregateSignatures([
    userOp1,
    userOp2,
  ]);

  console.log(
    " Result of offchain signature aggregation for both signers :" +
      "\n " +
      offChainSigResult,
  );
  console.log(
    " Result from BLSSignatureAggregator when passed in both UserOps:" +
      "\n " +
      solidityAggResult,
  );
  console.log(
    `\x1b[34m Should match: ${offChainSigResult == solidityAggResult}\x1b[0m`,
  );

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  const account1: BLSAccount = await new BLSAccount__factory(
    etherSigner,
  ).deploy(ep.address, blsAgg.address);
  await account1["initialize(uint256[4])"](signer1.pubkey);

  console.log("\n" + "\x1b[32muserOpToMessage\x1b[0m");
  let userOp3 = await fillUserOp(
    {
      sender: account1.address,
    },
    ep,
  );
  let requestHash = await blsAgg.getUserOpHash(userOp3);
  const solPoint: BigNumber[] = await blsAgg.userOpToMessage(userOp3);
  const messagePoint = hashToPoint(requestHash, BLS_DOMAIN);

  console.log(` 1: 1 ${solPoint[0].toString()} ${solPoint[1].toString()}`);
  console.log(` 2: ${messagePoint.getStr()}`);
  console.log("\x1b[34m 1 should equal 2\x1b[0m");

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Single signature validation
  console.log("\n" + "\x1b[32mValidation of single signature\x1b[0m");

  userOp3 = await fillUserOp(
    {
      sender: account1.address,
    },
    ep,
  );
  requestHash = await blsAgg.getUserOpHash(userOp3);
  const sigParts = signer1.sign(requestHash);
  userOp3.signature = hexConcat(sigParts);

  console.log(
    `\x1b[34m Checking length of UserOp signature (should be 130): ${userOp3.signature.length}\x1b[0m`,
  );

  let verifier = new BlsVerifier(BLS_DOMAIN);
  console.log(
    `\x1b[34m Verify successful: ${verifier.verify(
      sigParts,
      signer1.pubkey,
      requestHash,
    )}\x1b[0m`,
  );

  const valOps = await blsAgg.validateUserOpSignature(userOp3);
  console.log(`\x1b[34m ${valOps} should equal 0x\x1b[0m`);

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Multiple signatures validation (2)
  console.log("\n" + "\x1b[32mValidation of multiple signatures (2)\x1b[0m");

  const account2 = await new BLSAccount__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  await account2["initialize(uint256[4])"](signer2.pubkey);

  const userOp4 = await fillUserOp(
    {
      sender: account1.address,
    },
    ep,
  );
  const requestHash1 = await blsAgg.getUserOpHash(userOp4);
  const sig4 = signer1.sign(requestHash1);
  userOp4.signature = hexConcat(sig4);

  const userOp5 = await fillUserOp(
    {
      sender: account2.address,
    },
    ep,
  );
  const requestHash2 = await blsAgg.getUserOpHash(userOp5);
  const sig5 = signer2.sign(requestHash2);
  userOp5.signature = hexConcat(sig5);

  const aggSig = aggregate([sig4, sig5]);
  const aggregatedSig = await blsAgg.aggregateSignatures([userOp4, userOp5]);

  console.log(` 1: ${hexConcat(aggSig)}`);
  console.log(` 2: ${aggregatedSig}`);

  console.log(
    `\x1b[34m 1 should equal 2 : ${hexConcat(aggSig) == aggregatedSig}\x1b[0m`,
  );

  const pubkeys = [signer1.pubkey, signer2.pubkey];
  const v = new BlsVerifier(BLS_DOMAIN);
  // off-chain check
  const now = Date.now();

  console.log(
    `\x1b[34m Verifying multiple signatures should be true: ${v.verifyMultiple(
      aggSig,
      pubkeys,
      [requestHash1, requestHash2],
    )}\x1b[0m`,
  );

  console.log(
    `\x1b[34m Verify multiple (mcl code) ${Date.now() - now} ms\x1b[0m`,
  );
  const now2 = Date.now();
  console.log(
    `\x1b[35m Gas cost of validating signatures.... ${await blsAgg.estimateGas.validateSignatures(
      [userOp4, userOp5],
      aggregatedSig,
    )}\x1b[0m`,
  );
  console.log(
    ` Time for validating multiple signatures (on-chain): ${Date.now() -
      now2} ms`,
  );

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Simulating EntryPoint validation with BLSSignatureAggregator
  console.log(
    "\n" +
      "\x1b[32mEntryPoint.simulateValidation with BLSSignatureAggregator\x1b[0m",
  );
  const initCode = hexConcat([
    blsFact.address,
    blsFact.interface.encodeFunctionData("createAccount", [0, signer3.pubkey]),
  ]);
  verifier = new BlsVerifier(BLS_DOMAIN);
  const senderAddress = await ep.callStatic
    .getSenderAddress(initCode)
    .catch(e => {
      return e.message.split('"')[1];
    });

  await ethers.provider
    .getSigner()
    .sendTransaction({ to: senderAddress, value: parseEther("0.01") });

  const userOp6 = await fillUserOp(
    {
      sender: senderAddress,
      initCode,
      nonce: 2,
    },
    ep,
  );
  const requestHash4 = await blsAgg.getUserOpHash(userOp6);
  const sigParts1 = signer3.sign(requestHash4);
  userOp6.signature = hexConcat(sigParts1);

  const aggregatorInfo = await ep.callStatic
    .simulateValidation(userOp6)
    .catch(e => {
      const actualAgg = e.message.split(",")[9].split('"')[1];
      const stake = e.message.split(",")[10].match(/\d+/);
      const unstakeDelay = e.message.split(",")[11].match(/\d+/);
      return [actualAgg, stake, unstakeDelay];
    });
  console.log(
    `\x1b[34m Actual aggregator to match BLS aggregator: ${aggregatorInfo[0] ==
      blsAgg.address}\x1b[0m`,
  );
  console.log(
    `\x1b[34m stake (should be 1 ETH): ${aggregatorInfo[1][0] ==
      parseEther("1")}\x1b[0m`,
  );
  console.log(
    `\x1b[34m Unstake delay (should be 2): ${aggregatorInfo[2]}\x1b[0m`,
  );

  const [signature] = defaultAbiCoder.decode(["bytes32[2]"], userOp6.signature);
  const pubkey = (await blsAgg.getUserOpPublicKey(userOp6)).map(n =>
    hexValue(n),
  ); // TODO: returns uint256[4], verify needs bytes32[4]
  const requestHash5 = await blsAgg.getUserOpHash(userOp6);

  console.log(
    `\x1b[34m Verifying request signature should be true: ${verifier.verify(
      signature,
      pubkey,
      requestHash5,
    )}\x1b[0m`,
  );

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* Multiple signatures validation (5)
   * This is to test a batch with:
   * 1 account with 2 UserOperations
   * 3 accounts with 1 UserOperation each
   * */

  console.log("\n" + "\x1b[32mValidation of multiple signatures (5)\x1b[0m");

  // Setting up signers
  console.log(`\x1b[35m Setting up signers....\x1b[0m`);
  const signer11 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x11");
  const signer12 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x12");
  const signer13 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x13");
  const signer14 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x14");

  const pubkeyList = [
    signer11.pubkey,
    signer11.pubkey,
    signer12.pubkey,
    signer13.pubkey,
    signer14.pubkey,
  ];

  // Deploying BLSWallets for signers
  console.log(`\x1b[35m Deploying BLSWallets for signers....\x1b[0m`);
  const account11 = await new BLSAccount__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  await account11["initialize(uint256[4])"](signer11.pubkey);

  const account12 = await new BLSAccount__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  await account12["initialize(uint256[4])"](signer12.pubkey);

  const account13 = await new BLSAccount__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  await account13["initialize(uint256[4])"](signer13.pubkey);

  const account14 = await new BLSAccount__factory(etherSigner).deploy(
    ep.address,
    blsAgg.address,
  );
  await account14["initialize(uint256[4])"](signer14.pubkey);

  // Creating UserOps
  // x2 from 1 account (account11)
  // x1 from other 3 accounts (account12, account13, account14)
  console.log(`\x1b[35m Creating UserOperations for signers....\x1b[0m`);

  // 1st UserOp (#1 account11)
  const userOp11a = await fillUserOp(
    {
      sender: account11.address,
      nonce: 1,
    },
    ep,
  );
  const requestHash11a = await blsAgg.getUserOpHash(userOp11a);
  const signs1 = signer11.sign(requestHash11a);
  userOp11a.signature = hexConcat(signs1);

  // 2nd UserOp (#2 account11)
  const userOp11b = await fillUserOp(
    {
      sender: account11.address,
      nonce: 2,
    },
    ep,
  );
  const requestHash11b = await blsAgg.getUserOpHash(userOp11b);
  const signs2 = signer11.sign(requestHash11b);
  userOp11b.signature = hexConcat(signs2);

  // UserOp (account12)
  const userOp12 = await fillUserOp(
    {
      sender: account12.address,
    },
    ep,
  );
  const requestHash12 = await blsAgg.getUserOpHash(userOp12);
  const signs3 = signer12.sign(requestHash12);
  userOp12.signature = hexConcat(signs3);

  // UserOp (account13)
  const userOp13 = await fillUserOp(
    {
      sender: account13.address,
    },
    ep,
  );
  const requestHash13 = await blsAgg.getUserOpHash(userOp13);
  const signs4 = signer13.sign(requestHash13);
  userOp13.signature = hexConcat(signs4);

  // UserOp (account14)
  const userOp14 = await fillUserOp(
    {
      sender: account14.address,
    },
    ep,
  );
  const requestHash14 = await blsAgg.getUserOpHash(userOp14);
  const signs5 = signer14.sign(requestHash14);
  userOp14.signature = hexConcat(signs5);

  console.log(`\x1b[35m Aggregating signatures....\x1b[0m`);
  const aggSigs = aggregate([signs1, signs2, signs3, signs4, signs5]);
  const aggregatedSigs = await blsAgg.aggregateSignatures([
    userOp11a,
    userOp11b,
    userOp12,
    userOp13,
    userOp14,
  ]);

  console.log(` 1: ${hexConcat(aggSigs)}`);
  console.log(` 2: ${aggregatedSigs}`);

  console.log(
    `\x1b[34m Verifying multiple signatures should be true: ${v.verifyMultiple(
      aggSigs,
      pubkeyList,
      [
        requestHash11a,
        requestHash11b,
        requestHash12,
        requestHash13,
        requestHash14,
      ],
    )}\x1b[0m`,
  );

  console.log(
    `\x1b[34m Verify multiple (mcl code) ${Date.now() - now} ms\x1b[0m`,
  );
  const now3 = Date.now();
  console.log(
    `\x1b[35m Gas cost of validating signatures.... ${await blsAgg.estimateGas.validateSignatures(
      [userOp11a, userOp11b, userOp12, userOp13, userOp14],
      aggregatedSigs,
    )}\x1b[0m`,
  );
  console.log(
    ` Time for validating multiple signatures (on-chain): ${Date.now() -
      now3} ms`,
  );
}
testBLSDeployment().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
