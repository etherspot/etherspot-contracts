import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BytesLib, BytesLibInterface } from "../BytesLib";
declare type BytesLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesLib__factory extends ContractFactory {
    constructor(...args: BytesLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BytesLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BytesLib;
    connect(signer: Signer): BytesLib__factory;
    static readonly bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80632a5f571d1461005057806371771952146100af578063c8fb9dc1146100f8575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061015e565b005b61013f6004803603602081101561010e57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610161565b60405180821515815260200191505060405180910390f35b6000919050565b50565b60006001905091905056fea164736f6c634300060c000a";
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
    static createInterface(): BytesLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BytesLib;
}
export {};
