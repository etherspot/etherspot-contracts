import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TypedMemView, TypedMemViewInterface } from "../TypedMemView";
declare type TypedMemViewConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TypedMemView__factory extends ContractFactory {
    constructor(...args: TypedMemViewConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TypedMemView>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TypedMemView;
    connect(signer: Signer): TypedMemView__factory;
    static readonly bytecode = "0x60d5610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6052565b6040516049919060af565b60405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000081565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082169050919050565b60a9816076565b82525050565b600060208201905060c2600083018460a2565b9291505056fea164736f6c634300080b000a";
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
    static createInterface(): TypedMemViewInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TypedMemView;
}
export {};
