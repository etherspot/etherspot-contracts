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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101d2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806334d23875146100515780637b103999146100b05780638f27e6b6146100e4578063b49762a11461012d575b600080fd5b6100986004803603602081101561006757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061018c565b60405180821515815260200191505060405180910390f35b6100b8610197565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012b600480360360208110156100fa57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506101bb565b005b6101746004803603602081101561014357600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506101be565b60405180821515815260200191505060405180910390f35b600060019050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600091905056fea164736f6c634300060c000a";
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
    static createInterface(): AccountBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountBase;
}
export {};
