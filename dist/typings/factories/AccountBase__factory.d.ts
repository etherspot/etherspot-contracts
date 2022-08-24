import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccountBase, AccountBaseInterface } from "../AccountBase";
declare type AccountBaseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccountBase__factory extends ContractFactory {
    constructor(...args: AccountBaseConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AccountBase>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AccountBase;
    connect(signer: Signer): AccountBase__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060908061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637b10399914602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea164736f6c634300060c000a";
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
    static createInterface(): AccountBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountBase;
}
export {};
