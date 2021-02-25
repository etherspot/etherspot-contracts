import { ContractsMD } from './interfaces';
declare const _default: {
    contractsJs: (data: any) => string;
    constantsJs: (salt: string, data: string[]) => string;
    constantsDts: (data: string[]) => string;
    deploymentsMd: (data: ContractsMD) => string;
};
export default _default;
