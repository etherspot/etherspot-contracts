import { config } from 'hardhat';

export const {
  chainId: CHAIN_ID,
  gasPrice: GAS_PRICE,
} = config.networks.hardhat;

export const ENS_REVERSED_TLD = 'reverse';
export const ENS_REVERSED_LABEL = 'addr';
export const ENS_REVERSED_NAME = `${ENS_REVERSED_LABEL}.${ENS_REVERSED_TLD}`;
