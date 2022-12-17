/* eslint-disable @typescript-eslint/camelcase */
import hre from "hardhat";
import { ethers } from "hardhat";
import { arrayify, keccak256, hexConcat } from "ethers/lib/utils";
import { DefaultsForUserOp } from "../test/4337_wallet/UserOp";
import {
  aggregate,
  BlsSignerFactory,
  BlsVerifier,
} from "@thehubbleproject/bls/dist/signer";
import { BLSAccount, BLSAccount__factory } from "../typings";
import {
  getBalance,
  getAccountAddress,
} from "../test/4337_wallet/helpers/testUtils";

async function testBLSDeployment() {
  const etherSigner = ethers.provider.getSigner();
  const BLS_DOMAIN = arrayify(keccak256(Buffer.from("etherspot.bls.domain")));
  const [deployer, user] = await hre.ethers.getSigners();
  const blssf = await BlsSignerFactory.new();

  console.log(
    "\n" +
      "\x1b[32m Testing deployment of BLS Account Abstracted Wallet\x1b[0m",
  );
  console.log("\n" + "\x1b[32m Setting up contracts and wallets\x1b[0m");

  // Deploy EntryPoint
  console.log("\x1b[35m Deploying EntryPoint contract.....\x1b[0m");
  const EntryPoint = await hre.ethers.getContractFactory("EntryPoint");
  const ep = await EntryPoint.connect(deployer).deploy();
  console.log(" EntryPoint deployed to: ", ep.address);

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
  const blssig = await BLSSignatureAggregator.connect(deployer).deploy();
  console.log(" BLSSignatureAggregator deployed to: ", blssig.address);

  // Deploy BLSAccountDeployer
  console.log("\x1b[35m Deploying BLSAccountDeployer contract.....\x1b[0m");
  const BLSAccountDeployer = await hre.ethers.getContractFactory(
    "BLSAccountDeployer",
  );
  const blsad = await BLSAccountDeployer.deploy();
  console.log(" BLSAccountDeployer deployed to: ", blsad.address);

  // Deploy BLS Account for User
  console.log("\x1b[35m Deploying BLS Account for User.....\x1b[0m");
  const signer1 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x01");
  const signer2 = blssf.getSigner(arrayify(BLS_DOMAIN), "0x02");

  const userBLS: BLSAccount = await new BLSAccount__factory(user).deploy(
    ep.address,
    blssig.address,
    signer1.pubkey,
  );

  console.log("\n" + "\x1b[32m Checking correct setup\x1b[0m");

  console.log(
    "\x1b[35m Sanity checking BLSSignatureAggregator setup.....\x1b[0m",
  );
  const aggCheck = await userBLS.getAggregator();
  aggCheck == blssig.address
    ? console.log(" BLSSignatureAggregator sanity check: true")
    : console.log(" BLSSignatureAggregator sanity check: false");

  console.log("\x1b[35m Sanity checking EntryPoint setup.....\x1b[0m");
  const epCheck = await userBLS.entryPoint();
  epCheck == ep.address
    ? console.log(" EntryPoint sanity check: true")
    : console.log(" EntryPoint sanity check: false");

  const userPubKey = await userBLS.getBlsPublicKey();
  const userAddr = getAccountAddress(ep.address, userBLS.address);

  console.log(
    "\x1b[35m Sanity checking BLS public key (should be 4).....\x1b[0m",
  );

  console.log(
    " User's BLS pubkey: ",
    userPubKey.map(e => e._hex),
  );

  console.log(
    "\x1b[35m Calculating users address and making transaction to and from user.....\x1b[0m",
  );

  console.log(" User's address: ", userAddr);
  console.log(" Balance of user (should be 0): ", await getBalance(userAddr));

  // Send 2 ETH to User
  await etherSigner.sendTransaction({
    from: deployer.address,
    to: userAddr,
    value: ethers.utils.parseEther("2"),
  });

  console.log(
    " Balance of user (should be 2ETH): ",
    await getBalance(userAddr),
  );

  // Send 2 ETH to User
  await userBLS
    .connect(user)
    .transfer(deployer.address, ethers.utils.parseEther("1"), {
      gasLimit: 200000,
    });

  console.log(
    " Balance of user (should be 1ETH): ",
    await getBalance(userAddr),
  );

  // Signature aggregation
  console.log("\n" + "\x1b[32m Signature aggregation\x1b[0m");

  console.log("\x1b[35m Checking aggregation of signatures.....\x1b[0m");

  const sig1 = signer1.sign("0x1234");
  const sig2 = signer2.sign("0x5678");
  const offChainSigResult = hexConcat(aggregate([sig1, sig2]));
  const userOp1 = { ...DefaultsForUserOp, signature: hexConcat(sig1) };
  const userOp2 = { ...DefaultsForUserOp, signature: hexConcat(sig2) };
  const solidityAggResult = await blssig.aggregateSignatures([
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
}

testBLSDeployment().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
