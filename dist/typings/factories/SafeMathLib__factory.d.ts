import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMathLib, SafeMathLibInterface } from "../SafeMathLib";
declare type SafeMathLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeMathLib__factory extends ContractFactory {
    constructor(...args: SafeMathLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SafeMathLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SafeMathLib;
    connect(signer: Signer): SafeMathLib__factory;
    static readonly bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80631c8d1f43146100505780638b0042a514610099578063e7b2afe7146100f8575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b005b6100e0600480360360208110156100af57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015a565b60405180821515815260200191505060405180910390f35b61013f6004803603602081101561010e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610165565b60405180821515815260200191505060405180910390f35b50565b600060019050919050565b600091905056fea164736f6c634300060c000a";
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
    static createInterface(): SafeMathLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeMathLib;
}
export {};
