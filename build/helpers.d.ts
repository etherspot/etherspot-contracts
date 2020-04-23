import { ContractNames } from './constants';

export declare function getContractAbi(
  contractName: ContractNames,
): string | null;

export declare function getContractAddress(
  contractName: ContractNames,
  networkId?: string | number,
): string | null;

export declare function getContractByteCodeHash(
  contractName: ContractNames,
): string | null;

export declare function getContractTypedDataDomainName(
  contractName: ContractNames,
): string | null;

