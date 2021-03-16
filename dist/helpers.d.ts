import { ContractNames } from './constants';

export declare function getContractAbi(contractName: ContractNames): any | null;

export declare function getContractAddress(
  contractName: ContractNames,
  networkId?: string | number,
): string | null;

export declare function getContractByteCode(
  contractName: ContractNames,
): string | null;
