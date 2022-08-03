import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { QueueManager, QueueManagerInterface } from "../QueueManager";
declare type QueueManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class QueueManager__factory extends ContractFactory {
    constructor(...args: QueueManagerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<QueueManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): QueueManager;
    connect(signer: Signer): QueueManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506104a3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632bef289214610046578063ab91c7b014610076578063f6d1610214610094575b600080fd5b610060600480360381019061005b91906102c7565b6100b2565b60405161006d919061030f565b60405180910390f35b61007e6100cf565b60405161008b9190610343565b60405180910390f35b61009c6100e0565b6040516100a9919061036d565b60405180910390f35b60006100c88260016100f190919063ffffffff16565b9050919050565b60006100db60016101a9565b905090565b60006100ec6001610207565b905090565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16811161019d578284600101600083815260200190815260200160002054141561018a5760019150506101a3565b8080610195906103b7565b91505061012a565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506101fe8282610258565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600184610268919061041c565b6102729190610462565b6fffffffffffffffffffffffffffffffff16905092915050565b600080fd5b6000819050919050565b6102a481610291565b81146102af57600080fd5b50565b6000813590506102c18161029b565b92915050565b6000602082840312156102dd576102dc61028c565b5b60006102eb848285016102b2565b91505092915050565b60008115159050919050565b610309816102f4565b82525050565b60006020820190506103246000830184610300565b92915050565b6000819050919050565b61033d8161032a565b82525050565b60006020820190506103586000830184610334565b92915050565b61036781610291565b82525050565b6000602082019050610382600083018461035e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103c28261032a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103f5576103f4610388565b5b600182019050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600061042782610400565b915061043283610400565b9250826fffffffffffffffffffffffffffffffff0382111561045757610456610388565b5b828201905092915050565b600061046d82610400565b915061047883610400565b92508282101561048b5761048a610388565b5b82820390509291505056fea164736f6c634300080b000a";
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
        anonymous?: undefined;
    })[];
    static createInterface(): QueueManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): QueueManager;
}
export {};
