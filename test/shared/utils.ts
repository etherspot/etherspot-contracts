import { ethers } from 'hardhat';
import { utils, providers, Contract } from 'ethers';
import {
  buildTypedData,
  hashTypedData,
  TypedData,
  TypeProperty,
} from 'ethers-typed-data';
import {
  CHAIN_ID,
  TYPED_DATA_DOMAIN_NAME,
  TYPED_DATA_DOMAIN_VERSION,
  TYPED_DATA_DOMAIN_SALT,
} from './constants';
import { SignerWithAddress, ProcessedTx, TypedDataFactory } from './interfaces';

const { provider } = ethers;

let currentNonce = 0;

export function getNextNonce(): number {
  return ++currentNonce;
}

export function concatHex(...items: string[]): string {
  return items
    .filter(item => utils.isHexString(item))
    .map((item, index) => (index ? item.slice(2) : item))
    .join('')
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

export function randomHex32(): string {
  return utils.hexlify(utils.randomBytes(32));
}

export function createTypedDataFactory<M = any>(
  contract: Contract,
  primaryType: string,
  types: TypeProperty[],
): TypedDataFactory<M> {
  return {
    createTypedData(message: M): TypedData<M> {
      return buildTypedData(
        {
          verifyingContract: contract.address,
          chainId: CHAIN_ID,
          name: TYPED_DATA_DOMAIN_NAME,
          version: TYPED_DATA_DOMAIN_VERSION,
          salt: TYPED_DATA_DOMAIN_SALT,
        },
        primaryType,
        types,
        message,
      );
    },
    hashTypedData(message: M): string {
      return hashTypedData(this.createTypedData(message));
    },
    signTypeData(signer: SignerWithAddress, message: M): Promise<string> {
      return provider.send('eth_signTypedData', [
        signer.address,
        this.createTypedData(message),
      ]);
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
  salt: string,
): Promise<string> {
  const { bytecode } = await ethers.getContractFactory('Account');

  return utils.getCreate2Address(
    deployer.address,
    utils.solidityKeccak256(['bytes'], [salt.toLowerCase()]),
    utils.solidityKeccak256(['bytes'], [bytecode]),
  );
}
