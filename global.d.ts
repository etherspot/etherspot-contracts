declare global {
  import Web3 from 'web3';

  export interface IContractFunction {
    (name: string, fn: (addresses: string[]) => void): any;

    only: (name: string, fn: (addresses: string[]) => void) => any;
    skip: (name: string, fn: (addresses: string[]) => void) => any;
  }

  export interface IArtifacts {
    require<T = any>(name: string): IContractFactory<T>;
  }

  export interface IContractFactory {
    new: (...args: any[]) => Promise<IContract>;
  }

  export interface IContract {
    address: string;

    [key: string]: (...args: any[]) => Promise<any>;
  }

  export const contract: IContractFunction;
  export const web3: Web3;
  export const artifacts: IArtifacts;
}
