////////////////////////////////////////////////////////////////////
//////////////////// RUNNING INSTRUCTIONS //////////////////////////
////////////////////////////////////////////////////////////////////
/*
 * To run these tests:
 * - Create environment variable TEST_ORACLE_KEYS=[]
 * - Added 10 chosen accounts to this array (I used standard Hardhat accounts)
 * - One of these accounts must be the owner's account (they are required validator)
 */

import { BigNumber } from "ethers";
import { deployContract, randomAddress } from "../shared";
import { DeBridgeFacet } from "../../typings";
import { ethers, upgrades, deployments, web3 } from "hardhat";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";
import { expectRevert } from "@openzeppelin/test-helpers";
import { Address } from "hardhat-deploy/types";
const { toWei } = web3.utils;

const oracleKeys = JSON.parse(process.env.TEST_ORACLE_KEYS);
const ZERO_ADDRESS = ethers.constants.AddressZero;
const DEBRIDGE_GATE_ADDRESS = "0x43dE2d77BF8027e25dBD179B491e8d64f38398aA";
const transferFeeBps = 50;
const randomToken = randomAddress();
const fixedNativeFee = toWei("0.00001");
const isSupported = true;
const supportedChainIds = [42, 56];
const initialOracles = [];
let signers: SignerWithAddress[];
let owner: SignerWithAddress;
let alice: SignerWithAddress;
let bob: SignerWithAddress;
let deBridgeFacet: DeBridgeFacet;
let debridge, signatureVerifier, weth, callProxy, wethDebridgeId, mockToken;

function toBN(number) {
  return BigNumber.from(number.toString());
}

describe("DeBridgeFacet", () => {
  before(async () => {
    ////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////
    ////////////////////////////////////////////////////////////////////

    // create signers
    console.log("creating signers");
    signers = await ethers.getSigners();
    owner = signers[0];
    alice = signers[1];
    bob = signers[2];

    // deploy DeBridgeFacet contract
    deBridgeFacet = await deployContract("DeBridgeFacet");
    console.log("deBridgeFacet Address: ", deBridgeFacet.address);
    const Debridge = await ethers.getContractFactory(
      "MockDeBridgeGate",
      owner.address,
    );
    const SignatureVerifier = await ethers.getContractFactory(
      "SignatureVerifier",
      owner.address,
    );
    const CallProxyFactory = await ethers.getContractFactory(
      "CallProxy",
      owner.address,
    );
    const WETH9 = await deployments.getArtifact("WETH9");
    const WETH9Factory = await ethers.getContractFactory(
      WETH9.abi,
      WETH9.bytecode,
      owner,
    );

    mockToken = await deployContract("MockToken", ["Link Token", "dLINK", 18]);

    const minConfirmations = Math.floor(oracleKeys.length / 2) + 2;
    const confirmationThreshold = 5; //Confirmations per block before extra check enabled.
    const excessConfirmations = 7; //Confirmations count in case of excess activity.
    console.log("minConfirmations: " + minConfirmations);
    console.log("confirmationThreshold: " + confirmationThreshold);
    console.log("excessConfirmations: " + excessConfirmations);

    // deploy SignatureVerifier proxy contract
    console.log("deploying SignatureVerifier contract");
    signatureVerifier = await upgrades.deployProxy(SignatureVerifier, [
      minConfirmations,
      confirmationThreshold,
      excessConfirmations,
      ZERO_ADDRESS,
    ]);
    await signatureVerifier.deployed();

    const maxOraclesCount = Math.min(signers.length, 10);
    for (let i = 1; i <= maxOraclesCount; i++) {
      initialOracles.push({
        account: signers[i],
        address: signers[i].address,
      });
    }
    console.log("initialOracles.length: " + initialOracles.length);

    // adding oracles
    console.log("adding oracles");
    await signatureVerifier.addOracles(
      initialOracles.map(o => o.address),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      initialOracles.map(o => false),
      {
        from: owner.address,
      },
    );

    // owner is required oracle
    console.log("adding owner as an oracle");
    await signatureVerifier.addOracles([owner.address], [true], {
      from: owner.address,
    });

    // deploy CallProxy & WETH9 proxy contract
    console.log("deploying CallProxyFactory & WETH9Factory contracts");
    callProxy = await upgrades.deployProxy(CallProxyFactory, []);
    weth = await WETH9Factory.deploy();

    // deploy DeBridgeTokenFactory & DeBridgeTokenDeployerFactory contracts
    console.log(
      "deploying DeBridgeTokenFactory & DeBridgeTokenDeployerFactory contracts",
    );
    const DeBridgeTokenFactory = await ethers.getContractFactory(
      "DeBridgeToken",
      owner.address,
    );
    const deBridgeToken = await DeBridgeTokenFactory.deploy();
    const DeBridgeTokenDeployerFactory = await ethers.getContractFactory(
      "DeBridgeTokenDeployer",
      owner.address,
    );
    const deBridgeTokenDeployer = await upgrades.deployProxy(
      DeBridgeTokenDeployerFactory,
      [deBridgeToken.address, owner.address, ZERO_ADDRESS],
    );

    // deploy DeBridgeGate proxy contract
    console.log("deploying DeBridgeGate contract");
    debridge = await upgrades.deployProxy(
      Debridge,
      [
        excessConfirmations,
        signatureVerifier.address.toString(),
        callProxy.address.toString(),
        weth.address,
        ZERO_ADDRESS,
        deBridgeTokenDeployer.address,
        ZERO_ADDRESS,
        1, //overrideChainId
      ],
      {
        initializer: "initializeMock",
        kind: "transparent",
      },
    );

    await debridge.deployed();
    await debridge.updateChainSupport(
      supportedChainIds,
      [
        {
          transferFeeBps,
          fixedNativeFee,
          isSupported,
        },
        {
          transferFeeBps,
          fixedNativeFee,
          isSupported,
        },
      ],
      false,
    );

    await debridge.updateChainSupport(
      supportedChainIds,
      [
        {
          transferFeeBps,
          fixedNativeFee,
          isSupported,
        },
        {
          transferFeeBps,
          fixedNativeFee,
          isSupported,
        },
      ],
      true,
    );

    // setting up roles
    console.log("granting roles");
    const GOVMONITORING_ROLE = await debridge.GOVMONITORING_ROLE();
    await debridge.grantRole(GOVMONITORING_ROLE, owner.address);
    await signatureVerifier.setDebridgeAddress(debridge.address.toString());
    await deBridgeTokenDeployer.setDebridgeAddress(debridge.address);

    wethDebridgeId = await debridge.getDebridgeId(1, weth.address);
    await debridge.updateAssetFixedFees(wethDebridgeId, supportedChainIds, [
      fixedNativeFee,
      fixedNativeFee,
    ]);

    const DEBRIDGE_GATE_ROLE = await callProxy.DEBRIDGE_GATE_ROLE();
    await callProxy.grantRole(DEBRIDGE_GATE_ROLE, debridge.address);
    console.log("setup completed");
  });

  ////////////////////////////////////////////////////////////////////
  //////////////////////////// TESTS /////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  describe("Updating deBridge gate address", () => {
    it("Should be deployed with the current deBridge gate address", async () => {
      const originalGateAddress: Address = await deBridgeFacet.deBridgeGate();
      expect(DEBRIDGE_GATE_ADDRESS).toBe(originalGateAddress);
    });

    it("Should revert if try to update gate address when not the owner", async () => {
      await expectRevert(
        deBridgeFacet.connect(alice).updateGateAddress(bob.address),
        "Ownable: caller is not the owner",
      );
    });

    it("Should revert if new gate address is address(0)", async () => {
      await expectRevert(
        deBridgeFacet.connect(owner).updateGateAddress(ZERO_ADDRESS),
        "ZeroAddress()",
      );
    });

    it("Should be update the current deBridge gate address", async () => {
      await deBridgeFacet.updateGateAddress(bob.address);
      const updatedGateAddress: Address = await deBridgeFacet.deBridgeGate();
      expect(updatedGateAddress).toBe(bob.address);
    });

    // Will only work with chai matchers
    // it("Updating deBridge gate address should emit event", async () => {
    //   await expect(deBridgeFacet.updateGateAddress(alice.address))
    //     .to.emit(deBridgeFacet, "UpdatedDeBridgeGate")
    //     .withArgs(alice.address);
    // });
  });

  describe("Sending tokens cross chain", () => {
    it("Should revert is _amount is zero", async () => {
      await expectRevert(
        deBridgeFacet.deBridgeCrossChainSend(randomToken, 0, 42, alice.address),
        "ZeroAmount()",
      );
    });

    it("Should revert is _receiver is zero", async () => {
      await expectRevert(
        deBridgeFacet.deBridgeCrossChainSend(randomToken, 10, 42, ZERO_ADDRESS),
        "ZeroAddress()",
      );
    });

    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    // Possibly issue with safeTransferFrom function in:
    // _send (DeBridgeGate)
    // Gets called with contract address which isnt the user ~
    // Has no balance
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////

    it("Should send ERC20 tokens from the current chain", async function() {
      await deBridgeFacet.updateGateAddress(debridge.address);
      const tokenAddress = mockToken.address;
      const receiver = bob.address;
      const amount = toBN(toWei("100"));
      const chainIdTo = 42;
      await mockToken.mint(alice.address, amount);
      await mockToken.connect(alice).approve(debridge.address, amount);
      const balance = toBN(await mockToken.balanceOf(debridge.address));

      const tx = await deBridgeFacet
        .connect(alice)
        .deBridgeCrossChainSend(
          tokenAddress,
          toBN(toWei("10")),
          chainIdTo,
          receiver,
        );

      const newBalance = toBN(await mockToken.balanceOf(debridge.address));
      console.log("DeBridgeGate Contract Pre-Balance: ", balance);

      console.log("DeBridgeGate Contract Post-Balance: ", newBalance);
      console.log(
        "DeBridgeFacet Contract Balance: ",
        await mockToken.balanceOf(deBridgeFacet.address),
      );
      console.log(
        "Alice Account Balance: ",
        await mockToken.balanceOf(alice.address),
      );
      console.log(
        "Bob Account Balance: ",
        await mockToken.balanceOf(bob.address),
      );
      console.log("Alice address: ", alice.address);
      console.log("Bob address: ", bob.address);
      console.log("DeBridgeGate address: ", debridge.address);
      console.log("DeBridgeFacet address: ", deBridgeFacet.address);

      console.log(tx);
      expect(balance.add(amount).toString()).toEqual(newBalance.toString());
    });
  });
});
