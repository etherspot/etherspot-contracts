import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapUtils, SwapUtilsInterface } from "../SwapUtils";
declare type SwapUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapUtils__factory extends ContractFactory {
    constructor(...args: SwapUtilsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SwapUtils>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SwapUtils;
    connect(signer: Signer): SwapUtils__factory;
    static readonly bytecode = "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): SwapUtilsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapUtils;
}
export {};
