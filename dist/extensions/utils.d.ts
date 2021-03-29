import { HardhatUserConfig } from 'hardhat/config';
import { NetworkNames } from './constants';
export declare function createConfigNetwork(networkName: NetworkNames): HardhatUserConfig['networks'];
export declare function createConfigNetworks(): HardhatUserConfig['networks'];
