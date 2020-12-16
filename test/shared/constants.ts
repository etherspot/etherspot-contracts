import { config } from 'hardhat';
import { utils } from 'ethers';
import { randomHex32 } from './utils';

export const {
  chainId: CHAIN_ID,
  gasPrice: GAS_PRICE,
} = config.networks.hardhat;

export const TYPED_DATA_DOMAIN_NAME = 'test';
export const TYPED_DATA_DOMAIN_NAME_HASH = utils.id(TYPED_DATA_DOMAIN_NAME);
export const TYPED_DATA_DOMAIN_VERSION = '1';
export const TYPED_DATA_DOMAIN_VERSION_HASH = utils.id(
  TYPED_DATA_DOMAIN_VERSION,
);
export const TYPED_DATA_DOMAIN_SALT = randomHex32();
