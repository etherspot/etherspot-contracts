import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Version0, Version0Interface } from "../Version0";
declare type Version0ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Version0__factory extends ContractFactory {
    constructor(...args: Version0ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Version0>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Version0;
    connect(signer: Signer): Version0__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50608c8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b60336047565b604051603e91906066565b60405180910390f35b600081565b600060ff82169050919050565b606081604c565b82525050565b6000602082019050607960008301846059565b9291505056fea164736f6c634300080f000a";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): Version0Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Version0;
}
export {};
