import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BlockLib, BlockLibInterface } from "../BlockLib";
declare type BlockLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BlockLib__factory extends ContractFactory {
    constructor(...args: BlockLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BlockLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BlockLib;
    connect(signer: Signer): BlockLib__factory;
    static readonly bytecode = "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806391e6a20314610050578063a7a41f0f146100af578063c70d6afe1461010e575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610162565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610169565b005b600060019050919050565b6000919050565b5056fea164736f6c634300060c000a";
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
    static createInterface(): BlockLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BlockLib;
}
export {};
