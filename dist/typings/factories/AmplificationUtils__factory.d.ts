import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AmplificationUtils, AmplificationUtilsInterface } from "../AmplificationUtils";
declare type AmplificationUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmplificationUtils__factory extends ContractFactory {
    constructor(...args: AmplificationUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AmplificationUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AmplificationUtils;
    connect(signer: Signer): AmplificationUtils__factory;
    static readonly bytecode = "0x60bf610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806339698415146042578063d011f91814605c575b600080fd5b60486076565b604051605391906099565b60405180910390f35b6062607d565b604051606d91906099565b60405180910390f35b620f424081565b606481565b6000819050919050565b6093816082565b82525050565b600060208201905060ac6000830184608c565b9291505056fea164736f6c634300080b000a";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): AmplificationUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmplificationUtils;
}
export {};
