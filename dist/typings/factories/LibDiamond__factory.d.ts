import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibDiamond, LibDiamondInterface } from "../LibDiamond";
declare type LibDiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibDiamond__factory extends ContractFactory {
    constructor(...args: LibDiamondConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LibDiamond>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LibDiamond;
    connect(signer: Signer): LibDiamond__factory;
    static readonly bytecode = "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a";
    static readonly abi: {
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
    }[];
    static createInterface(): LibDiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibDiamond;
}
export {};
