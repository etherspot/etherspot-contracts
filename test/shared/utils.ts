import { ethers, network } from "hardhat";
import {
  utils,
  providers,
  Contract,
  BigNumberish,
  BigNumber,
  ContractReceipt,
} from "ethers";
import { CHAIN_ID, ENS_REVERSED_NAME } from "./constants";
import {
  SignerWithAddress,
  ProcessedTx,
  MessagePayloadFactory,
} from "./interfaces";

const { provider } = ethers;

let nameCounter = 0;
let currentNonce = 0;

export function getNextNonce(): number {
  return ++currentNonce;
}

export function concatHex(...items: string[]): string {
  return items
    .filter(item => utils.isHexString(item))
    .map((item, index) => (index ? item.slice(2) : item))
    .join("")
    .toLowerCase();
}

export function randomAddress(): string {
  let result: string;

  for (;;) {
    try {
      result = utils.getAddress(utils.hexlify(utils.randomBytes(20)));
      break;
    } catch (err) {
      result = null;
    }
  }

  return result;
}

export function randomName(): string {
  return `test${++nameCounter}`;
}

export function randomHex32(): string {
  return utils.hexlify(utils.randomBytes(32));
}

export function createMessagePayloadFactory<M extends {} = any>(
  contract: Contract,
  structName: string,
  structFields: {
    name: keyof M;
    type: string;
  }[] = [],
): MessagePayloadFactory<M> {
  const prefix = `${structName}(${structFields
    .map(({ type, name }) => `${type} ${name}`)
    .join(",")})`;

  const prefixHash = utils.id(prefix);

  const buildMessagePayload = (message: M) => {
    const types = [
      "uint256", //
      "address",
      "bytes32",
      ...structFields.map(({ type }) => type),
    ];

    const values = [
      CHAIN_ID,
      contract.address,
      prefixHash, //
      ...structFields.map(({ name }) => message[name]),
    ];

    return utils.arrayify(utils.solidityKeccak256(types, values));
  };

  return {
    hash(message: M): string {
      return utils.hashMessage(buildMessagePayload(message));
    },
    async sign(signer: SignerWithAddress, message: M): Promise<string> {
      return signer.signMessage(utils.arrayify(buildMessagePayload(message)));
    },
  };
}

export async function processTx(
  txPromise: Promise<providers.TransactionResponse>,
): Promise<ProcessedTx> {
  const tx = await txPromise;
  const { gasPrice } = tx;
  const receipt = await tx.wait();
  const { gasUsed } = receipt;

  return {
    ...receipt,
    totalCost: gasPrice.mul(gasUsed),
  };
}

export async function computeAccountAddress(
  deployer: Contract,
  accountContract: "Account" | "PaymentDepositAccount",
  salt: string,
  ...args: string[]
): Promise<string> {
  let { bytecode } = await ethers.getContractFactory(accountContract);

  for (const arg of args) {
    bytecode = concatHex(bytecode, utils.hexZeroPad(arg.toLowerCase(), 32));
  }

  salt = salt.toLowerCase();

  if (!utils.isHexString(salt, 32)) {
    salt = utils.solidityKeccak256(["bytes"], [salt]);
  }

  return utils.getCreate2Address(
    deployer.address,
    salt,
    utils.solidityKeccak256(["bytes"], [bytecode]),
  );
}

export async function increaseTime(seconds: BigNumberish = 0): Promise<void> {
  const value = BigNumber.from(seconds);

  await provider.send("evm_increaseTime", [value.toNumber()]);
}

export async function deployContract<T extends Contract = Contract>(
  name: string,
  args: any[] = [],
  deployer: SignerWithAddress = null,
): Promise<T> {
  let factory = await ethers.getContractFactory(name);

  if (deployer) {
    factory = factory.connect(deployer);
  }

  return (await factory.deploy(...(args || []))) as T;
}

export async function isContract(address: string): Promise<boolean> {
  const code = await provider.getCode(address);
  return code !== "0x";
}

export function getNow(additionalSeconds: BigNumberish = 0) {
  return BigNumber.from(additionalSeconds).add(Math.ceil(Date.now() / 1000));
}

export function getMethodSignature(method: string): string {
  return utils.id(method).slice(0, 10);
}

export function buildENSReversedNode(
  address: string,
): {
  name: string;
  nameHash: string;
} {
  const name = `${address.slice(2).toLowerCase()}.${ENS_REVERSED_NAME}`;

  return {
    name,
    nameHash: utils.namehash(name),
  };
}

export function checkEvent(receipt: ContractReceipt): any[] {
  const args: any[] = [];
  for (const event of receipt.events) {
    args.push(event.event);
    for (const arg of event.args) {
      args.push(arg);
    }
    return args;
  }
}

export function multiCallCheckLastEventEmitted(
  receipt: ContractReceipt,
): any[] {
  const args: any[] = [];
  const length = receipt.events.length;
  const lastEvent = receipt.events[length - 1];
  args.push(lastEvent.event);
  for (const arg of lastEvent.args) {
    args.push(arg);
  }
  return args;
}

export const moveBlocks = async (amount: number) => {
  // in blocks
  for (let i = 0; i < amount; i++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
  }
  console.log(`Moved ${amount} blocks`);
};

export const moveTime = async (amount: number) => {
  // in seconds
  await network.provider.send("evm_increaseTime", [amount]);
  console.log(`Moved ${amount} seconds`);
};
