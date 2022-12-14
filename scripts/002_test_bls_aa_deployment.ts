// /* eslint-disable @typescript-eslint/camelcase */
// import hre from "hardhat";
// import { ethers } from "hardhat";
// import { BigNumber, Wallet } from "ethers";
// import { arrayify, keccak256 } from "ethers/lib/utils";
// import {
//   aggregate,
//   BlsSignerFactory,
//   BlsVerifier,
// } from "@thehubbleproject/bls/dist/signer";

// const saltToHex = (salt: string | number) => {
//   salt = salt.toString();
//   if (ethers.utils.isHexString(salt)) {
//     return salt;
//   }
//   return ethers.utils.id(salt);
// };

// async function testBLSDeployment() {
//   const SALT = saltToHex("Etherspot_BLS");
//   const BLS_DOMAIN = arrayify(keccak256(Buffer.from("etherspot.bls.domain")));
//   const [deployer] = await hre.ethers.getSigners();
//   const ethersSigner = ethers.provider.getSigner(deployer.address);
//   const blssf = await BlsSignerFactory.new();

//   console.log(
//     "\n" +
//       "\x1b[32m Testing deployment of BLS Account Abstracted Wallet\x1b[0m",
//   );
//   console.log("\n" + "\x1b[32m Setting up contracts and wallets\x1b[0m");

//   // Create non-random account
//   // console.log("\x1b[35m Creating non-random wallet.....\x1b[0m");
//   // const privateKey = keccak256(
//   //   Buffer.from(arrayify(BigNumber.from(++counter))),
//   // );
//   // const accountOwner: Wallet = new ethers.Wallet(privateKey, ethers.provider);
//   // console.log(" Wallet created: ", accountOwner.address);

//   // Deploy EntryPoint
//   console.log("\x1b[35m Deploying EntryPoint contract.....\x1b[0m");
//   const EntryPoint = await hre.ethers.getContractFactory("EntryPoint");
//   const ep = await EntryPoint.connect(deployer).deploy();
//   console.log(" EntryPoint deployed to: ", ep.address);

//   // Deploy BLSSignatureAggregator
//   console.log("\x1b[35m Deploying BLSSignatureAggregator contract.....\x1b[0m");
//   // Requires BLSOpen Lib
//   const BLSOpen = await hre.ethers.getContractFactory("BLSOpen");
//   const blso = await BLSOpen.deploy();
//   // Deploy SigAgg
//   const BLSSignatureAggregator = await hre.ethers.getContractFactory(
//     "BLSSignatureAggregator",
//     {
//       libraries: {
//         BLSOpen: blso.address,
//       },
//     },
//   );
//   const blssig = await BLSSignatureAggregator.connect(deployer).deploy();
//   console.log(" BLSSignatureAggregator deployed to: ", blssig.address);

//   // Deploy BLSAccountDeployer
//   console.log("\x1b[35m Deploying BLSAccountDeployer contract.....\x1b[0m");
//   const BLSAccountDeployer = await hre.ethers.getContractFactory(
//     "BLSAccountDeployer",
//   );
//   const blsad = await BLSAccountDeployer.deploy();
//   console.log(" BLSAccountDeployer deployed to: ", blsad.address);

//   // Deploy BLS Account for User
//   console.log("\x1b[35m Deploying BLS Account for User.....\x1b[0m");
//   const userbls = blssf.getSigner(arrayify(BLS_DOMAIN), "0x01");

//   const user = await blsad.deployAccount(
//     ep.address,
//     blssig.address,
//     SALT,
//     userbls.pubkey,
//   );
//   console.log(" BLS account deployed to: ", await user.getBlsPublicKey());

//   ////////////////
//   ////////////////

//   ////////////////
//   ////////////////

//   // // Deploy SimpleAccount for user
//   // console.log("\x1b[35m Deploying AA wallet for user.....\x1b[0m");
//   // const SimpleAccountDeployer = await hre.ethers.getContractFactory(
//   //   "SimpleAccountDeployer",
//   // );
//   // const sad = await SimpleAccountDeployer.connect(deployer).deploy();
//   // console.log(" SimpleAccountDeployer deployed to: ", sad.address);

//   // console.log("\n" + "\x1b[32m Testing deployed SimpleAccountDeployer\x1b[0m ");

//   // // Deploy an AA account through deployer
//   // console.log("\x1b[35m Calculating predefined address.....\x1b[0m");
//   // const expected = await sad.getAddress(ep.address, user.address, SALT);
//   // console.log(" Expected user address: ", expected);

//   // await sad.deployAccount(ep.address, user.address, SALT);
//   // const SimpleAccount = await ethers.getContractFactory("SimpleAccount");
//   // const sa = await SimpleAccount.attach(expected);

//   // console.log("\n" + "\x1b[32m Testing deployed EntryPoint\x1b[0m");
//   // console.log("\x1b[35m Sanity checking EntryPoint setup.....\x1b[0m");

//   // const epCheck = await sa.connect(user).entryPoint();
//   // epCheck == ep.address
//   //   ? console.log(" EntryPoint sanity check: true")
//   //   : console.log(" EntryPoint sanity check: false");
// }

// testBLSDeployment().catch(error => {
//   console.error(error);
//   process.exitCode = 1;
// });
