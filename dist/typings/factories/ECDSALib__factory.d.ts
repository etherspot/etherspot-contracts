import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ECDSALib, ECDSALibInterface } from "../ECDSALib";
declare type ECDSALibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ECDSALib__factory extends ContractFactory {
    constructor(...args: ECDSALibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ECDSALib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ECDSALib;
    connect(signer: Signer): ECDSALib__factory;
    static readonly bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80631ad367e914610050578063292a6547146100af578063e27e7f071461010e575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015e565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610169565b005b6000919050565b600060019050919050565b5056fea164736f6c634300060c000a";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ECDSALibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ECDSALib;
}
export {};
