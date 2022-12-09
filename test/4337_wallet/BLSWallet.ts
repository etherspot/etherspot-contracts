/* eslint-disable @typescript-eslint/camelcase */
import {
  aggregate,
  BlsSignerFactory,
  BlsVerifier,
} from "@thehubbleproject/bls/dist/signer";
import { arrayify, defaultAbiCoder, hexConcat } from "ethers/lib/utils";
import {
  BLSAccountDeployer,
  BLSSignatureAggregator,
  BLSAccount,
  EntryPoint,
  BLSAccountDeployer__factory,
  BLSOpen__factory,
  BLSSignatureAggregator__factory,
  BLSAccount__factory,
} from "../../typings";
import { ethers } from "hardhat";
import {
  deployEntryPoint,
  fund,
  ONE_ETH,
  // simulationResultWithAggregationCatch,
} from "./helpers/testUtils";
import { DefaultsForUserOp, fillUserOp } from "./UserOp";
import { expect } from "chai";
import { keccak256 } from "ethereumjs-util";
import { hashToPoint } from "@thehubbleproject/bls/dist/mcl";
import { BigNumber } from "ethers";
import { BytesLike, hexValue } from "@ethersproject/bytes";

describe("bls account", function() {
  this.timeout(20000);
  const BLS_DOMAIN = arrayify(keccak256(Buffer.from("eip4337.bls.domain")));
  const etherSigner = ethers.provider.getSigner();
  let fact: BlsSignerFactory;
  let signer1: any;
  let signer2: any;
  let blsAgg: BLSSignatureAggregator;
  let entrypoint: EntryPoint;
  let account1: BLSAccount;
  let account2: BLSAccount;
  let accountDeployer: BLSAccountDeployer;
  before(async () => {
    entrypoint = await deployEntryPoint();
    const BLSOpenLib = await new BLSOpen__factory(
      ethers.provider.getSigner(),
    ).deploy();
    blsAgg = await new BLSSignatureAggregator__factory(
      {
        "src/4337_wallet/bls/lib/BLSOpen.sol:BLSOpen": BLSOpenLib.address,
      },
      ethers.provider.getSigner(),
    ).deploy();

    await blsAgg.addStake(entrypoint.address, 2, { value: ONE_ETH });
    fact = await BlsSignerFactory.new();
    signer1 = fact.getSigner(arrayify(BLS_DOMAIN), "0x01");
    signer2 = fact.getSigner(arrayify(BLS_DOMAIN), "0x02");

    accountDeployer = await new BLSAccountDeployer__factory(
      etherSigner,
    ).deploy();

    account1 = await new BLSAccount__factory(etherSigner).deploy(
      entrypoint.address,
      blsAgg.address,
      signer1.pubkey,
    );
    account2 = await new BLSAccount__factory(etherSigner).deploy(
      entrypoint.address,
      blsAgg.address,
      signer2.pubkey,
    );
  });

  it("#getTrailingPublicKey", async () => {
    const data = defaultAbiCoder.encode(["uint[6]"], [[1, 2, 3, 4, 5, 6]]);
    const last4 = await blsAgg.getTrailingPublicKey(data);
    expect(last4.map(x => x.toNumber())).to.eql([3, 4, 5, 6]);
  });
  it("#aggregateSignatures", async () => {
    const sig1 = signer1.sign("0x1234");
    const sig2 = signer2.sign("0x5678");
    const offChainSigResult = hexConcat(aggregate([sig1, sig2]));
    const userOp1 = { ...DefaultsForUserOp, signature: hexConcat(sig1) };
    const userOp2 = { ...DefaultsForUserOp, signature: hexConcat(sig2) };
    const solidityAggResult = await blsAgg.aggregateSignatures([
      userOp1,
      userOp2,
    ]);
    expect(solidityAggResult).to.equal(offChainSigResult);
  });

  it("#userOpToMessage", async () => {
    const userOp1 = await fillUserOp(
      {
        sender: account1.address,
      },
      entrypoint,
    );
    const requestHash = await blsAgg.getUserOpHash(userOp1);
    const solPoint: BigNumber[] = await blsAgg.userOpToMessage(userOp1);
    const messagePoint = hashToPoint(requestHash, BLS_DOMAIN);
    expect(`1 ${solPoint[0].toString()} ${solPoint[1].toString()}`).to.equal(
      messagePoint.getStr(),
    );
  });

  it("#validateUserOpSignature", async () => {
    const userOp1 = await fillUserOp(
      {
        sender: account1.address,
      },
      entrypoint,
    );
    const requestHash = await blsAgg.getUserOpHash(userOp1);

    const sigParts = signer1.sign(requestHash);
    userOp1.signature = hexConcat(sigParts);
    expect(userOp1.signature.length).to.equal(130); // 64-byte hex value

    const verifier = new BlsVerifier(BLS_DOMAIN);
    expect(verifier.verify(sigParts, signer1.pubkey, requestHash)).to.equal(
      true,
    );

    const ret = await blsAgg.validateUserOpSignature(userOp1);
    expect(ret).to.equal("0x");
  });

  it("validateSignatures", async function() {
    // yes, it does take long on hardhat, but quick on geth.
    this.timeout(30000);
    const userOp1 = await fillUserOp(
      {
        sender: account1.address,
      },
      entrypoint,
    );
    const requestHash = await blsAgg.getUserOpHash(userOp1);
    const sig1 = signer1.sign(requestHash);
    userOp1.signature = hexConcat(sig1);

    const userOp2 = await fillUserOp(
      {
        sender: account2.address,
      },
      entrypoint,
    );
    const requestHash2 = await blsAgg.getUserOpHash(userOp2);
    const sig2 = signer2.sign(requestHash2);
    userOp2.signature = hexConcat(sig2);

    const aggSig = aggregate([sig1, sig2]);
    const aggregatedSig = await blsAgg.aggregateSignatures([userOp1, userOp2]);
    expect(hexConcat(aggSig)).to.equal(aggregatedSig);

    const pubkeys = [signer1.pubkey, signer2.pubkey];
    const v = new BlsVerifier(BLS_DOMAIN);
    // off-chain check
    const now = Date.now();
    expect(
      v.verifyMultiple(aggSig, pubkeys, [requestHash, requestHash2]),
    ).to.equal(true);
    console.log("verifyMultiple (mcl code)", Date.now() - now, "ms");
    const now2 = Date.now();
    console.log(
      "validateSignatures gas= ",
      await blsAgg.estimateGas.validateSignatures(
        [userOp1, userOp2],
        aggregatedSig,
      ),
    );
    console.log("validateSignatures (on-chain)", Date.now() - now2, "ms");
  });

  describe("#EntryPoint.simulateValidation with aggregator", () => {
    let initCode: BytesLike;
    let signer3: any;
    before(async () => {
      signer3 = fact.getSigner(arrayify(BLS_DOMAIN), "0x03");
      initCode = hexConcat([
        accountDeployer.address,
        accountDeployer.interface.encodeFunctionData("deployAccount", [
          entrypoint.address,
          blsAgg.address,
          0,
          signer3.pubkey,
        ]),
      ]);
    });

    it("validate after simulation returns SimulationResultWithAggregation", async () => {
      const verifier = new BlsVerifier(BLS_DOMAIN);

      /* Bush fixed - previous method of extracting 
      information from the custom error was not working
      correctly */

      const senderAddress = await entrypoint.callStatic
        .getSenderAddress(initCode)
        .catch(e => {
          const addr = e.message.slice(92, -3);
          return addr;
        });

      await fund(senderAddress, "0.01");
      const userOp = await fillUserOp(
        {
          sender: senderAddress,
          initCode,
          nonce: 2,
        },
        entrypoint,
      );
      const requestHash = await blsAgg.getUserOpHash(userOp);
      const sigParts = signer3.sign(requestHash);
      userOp.signature = hexConcat(sigParts);

      /* Bush fixed: sliced the correct params from the custom error message */

      const aggregationInfo = await entrypoint.callStatic
        .simulateValidation(userOp)
        // .catch(simulationResultWithAggregationCatch);
        .catch(e => {
          const aggAddr = e.message.slice(143, 185);
          const stkAmnt = e.message.slice(188, 207);
          const unstkDelay = e.message.slice(-4, -3);
          const eData = [aggAddr, stkAmnt, unstkDelay];
          return eData;
        });
      expect(aggregationInfo[0]).to.eq(blsAgg.address);
      expect(aggregationInfo[1]).to.eq(ONE_ETH.toString());
      expect(Number(aggregationInfo[2])).to.eq(2);

      const [signature] = defaultAbiCoder.decode(
        ["bytes32[2]"],
        userOp.signature,
      );
      const pubkey = (await blsAgg.getUserOpPublicKey(userOp)).map(n =>
        hexValue(n),
      ); // TODO: returns uint256[4], verify needs bytes32[4]
      const requestHash1 = await blsAgg.getUserOpHash(userOp);

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      expect(verifier.verify(signature, pubkey, requestHash1)).to.equal(true);
    });
  });
});
