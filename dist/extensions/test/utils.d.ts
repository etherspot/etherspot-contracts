import { BigNumber, BigNumberish } from 'ethers';
export declare function createBNCondition(method: keyof BigNumber, description: string): (received: BigNumber, expected: BigNumberish) => any;
