/* eslint-disable @typescript-eslint/camelcase */
import hre from "hardhat";
import { ethers } from "hardhat";
import { BigNumber, Wallet } from "ethers";
import { arrayify, keccak256 } from "ethers/lib/utils";
import { EtherspotAccount, EtherspotAccountFactory__factory } from "../typings";
import {
  fillUserOpDefaults,
  getUserOpHash,
  signUserOp,
} from "../test/4337_wallet/UserOp";
import { createAccount } from "../test/4337_wallet/helpers/testUtils";
import { UserOperation } from "../test/4337_wallet/UserOperation";

const saltToHex = (salt: string | number) => {
  salt = salt.toString();
  if (ethers.utils.isHexString(salt)) {
    return salt;
  }
  return ethers.utils.id(salt);
};

const parseBalance = async (address: string) => {
  const bal = await ethers.provider.getBalance(address);
  return parseInt(bal.toString());
};

async function testAADeployment() {
  const SALT = saltToHex("Etherspot_AA");
  const [deployer, user, receiver, entryPoint] = await hre.ethers.getSigners();
  const ethersSigner = ethers.provider.getSigner(deployer.address);
  let counter = 0;

  console.log(
    "\n" + "\x1b[32m Testing deployment of Account Abstracted Wallet\x1b[0m",
  );
  console.log("\n" + "\x1b[32m Setting up contracts and wallets\x1b[0m");

  // Create non-random account
  console.log("\x1b[35m Creating non-random wallet.....\x1b[0m");
  const privateKey = keccak256(
    Buffer.from(arrayify(BigNumber.from(++counter))),
  );
  const accountOwner: Wallet = new ethers.Wallet(privateKey, ethers.provider);
  console.log(" Wallet created: ", accountOwner.address);

  // Deploy EntryPoint
  console.log("\x1b[35m Deploying EntryPoint contract.....\x1b[0m");
  const EntryPoint = await hre.ethers.getContractFactory("EntryPoint");
  const ep = await EntryPoint.connect(deployer).deploy();
  console.log(" EntryPoint deployed to: ", ep.address);

  // Deploy EtherspotAccount for user
  console.log("\x1b[35m Deploying AA wallet for user.....\x1b[0m");
  const EtherspotAccountFactory = await hre.ethers.getContractFactory(
    "EtherspotAccountFactory",
  );
  const sad = await EtherspotAccountFactory.connect(deployer).deploy(
    ep.address,
  );
  console.log(" EtherspotAccountFactory deployed to: ", sad.address);

  console.log(
    "\n" + "\x1b[32m Testing deployed EtherspotAccountFactory\x1b[0m ",
  );

  // Deploy an AA account through deployer
  console.log("\x1b[35m Calculating predefined address.....\x1b[0m");
  const expected = await sad.getAddress(user.address, SALT);
  console.log(" Expected user address: ", expected);

  await sad.createAccount(user.address, SALT);
  const EtherspotAccount = await ethers.getContractFactory("EtherspotAccount");
  const sa = await EtherspotAccount.attach(expected);

  console.log("\n" + "\x1b[32m Testing deployed EntryPoint\x1b[0m");
  console.log("\x1b[35m Sanity checking EntryPoint setup.....\x1b[0m");

  const epCheck = await sa.entryPoint();
  epCheck == ep.address
    ? console.log(" EntryPoint sanity check: true")
    : console.log(" EntryPoint sanity check: false");

  console.log(
    "\n" + "\x1b[32m Testing sending tokens to and from AA wallet\x1b[0m",
  );

  // Log User AA balance
  console.log(
    " User AA balance (start balance): ",
    await parseBalance(expected),
  );

  // Sending a tx to aa account
  console.log("\x1b[35m Sending user AA account ETH.....\x1b[0m");
  await ethersSigner.sendTransaction({
    from: deployer.address,
    to: expected,
    value: ethers.utils.parseEther("2"),
  });

  // Log User AA balance
  console.log(
    " User AA balance (after receive transfer - should be 2ETH): ",
    await parseBalance(expected),
  );

  // Log Receiver balance
  console.log(
    " Receiver balance (before transfer): ",
    await parseBalance(receiver.address),
  );

  // Transfer ETH to Receiver
  console.log(
    "\x1b[35m Sending ETH to receiver from user AA account.....\x1b[0m",
  );
  await sa
    .connect(user)
    .execute(receiver.address, ethers.utils.parseEther("1"), "0x");

  // Log User AA balance
  console.log(
    " User AA balance (after send transfer - should be 1ETH): ",
    await parseBalance(expected),
  );

  // Log Receiver balance
  console.log(
    " Receiver balance (after transfer): ",
    await parseBalance(receiver.address),
  );

  console.log("\n" + "\x1b[32m Testing validation of UserOperation\x1b[0m");
  let account: EtherspotAccount;
  const callGasLimit = 200000;
  const verificationGasLimit = 100000;
  const maxFeePerGas = 3e9;
  const actualGasPrice = 1e9;
  const chainId = await ethers.provider.getNetwork().then(net => net.chainId);

  ({ proxy: account } = await createAccount(
    await ethers.getSigner(entryPoint.address),
    accountOwner.address,
    entryPoint.address,
  ));

  await ethersSigner.sendTransaction({
    from: deployer.address,
    to: account.address,
    value: ethers.utils.parseEther("0.2"),
  });

  // Create the User Operation
  const userOp: UserOperation = signUserOp(
    fillUserOpDefaults({
      sender: account.address,
      callGasLimit,
      verificationGasLimit,
      maxFeePerGas,
    }),
    accountOwner,
    entryPoint.address,
    chainId,
  );

  const userOpHash = await getUserOpHash(userOp, entryPoint.address, chainId);
  const expectedPay = actualGasPrice * (callGasLimit + verificationGasLimit);
  const preBalance = await parseBalance(account.address);

  // Validate the UserOperation
  console.log("\x1b[35m Validating UserOperation.....\x1b[0m");
  const vuo = await account.validateUserOp(
    userOp,
    userOpHash,
    ethers.constants.AddressZero,
    expectedPay,
    { gasPrice: actualGasPrice },
  );
  await vuo.wait();

  const postBalance = await parseBalance(account.address);

  console.log(" Expected amount to pay: ", expectedPay);
  console.log(" User pre-balance: ", preBalance);
  console.log(" User post-balance: ", postBalance);
  console.log(
    `\x1b[34m Difference in user balance to equal expected gas payment: ${preBalance -
      postBalance ==
      expectedPay}\x1b[0m`,
  );

  const nonce = await account.connect(entryPoint).nonce();
  parseInt(nonce.toString()) == 1
    ? console.log(
        `\x1b[34m Nonce (should be 1): ${parseInt(nonce.toString())}\x1b[0m`,
      )
    : console.log(
        `\x1b[34m Nonce (should be 1): ${parseInt(nonce.toString())}\x1b[0m`,
      );
}

testAADeployment().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
