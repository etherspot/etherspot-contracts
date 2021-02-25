import { HardhatUserConfig } from 'hardhat/config';
import { NetworkNames } from './constants';
export declare function createConfigNetwork(networkName: NetworkNames, chainId: number, defaultProvider?: 'infura' | string, defaultGasPrice?: number): HardhatUserConfig['networks'];
