// @ts-ignore
declare global {
  import Web3 from 'web3';

  export interface ContractFunction {
    (name: string, fn: (addresses: string[]) => void): any;

    only: (name: string, fn: (addresses: string[]) => void) => any;
    skip: (name: string, fn: (addresses: string[]) => void) => any;
  }

  export interface Artifacts {
    require<T = any>(name: string): ContractFactory;
  }

  export interface ContractFactory {
    new: (...args: any[]) => Promise<Contract>;
  }

  export interface ContractMethods {
    [key: string]: (...args: any[]) => Promise<any>;
  }

  export type Contract = ContractMethods & {
    address: string;
  }

  export const contract: ContractFunction;
  export const web3: Web3;
  export const artifacts: Artifacts;
}

interface Matchers<T> {
  toBeBN(value: any): void;
  toBeGreaterThanBN(value: any): void;
  toBeGreaterThanOrEqualBN(value: any): void;
  toBeLessThanBN(value: any): void;
  toBeLessThanOrEqualBN(value: any): void;
  toBeZeroAddress(): void;
}
