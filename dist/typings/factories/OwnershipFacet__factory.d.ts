import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnershipFacet, OwnershipFacetInterface } from "../OwnershipFacet";
declare type OwnershipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnershipFacet__factory extends ContractFactory {
    constructor(...args: OwnershipFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnershipFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnershipFacet;
    connect(signer: Signer): OwnershipFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b14610059575b600080fd5b610043610075565b60405161005091906102ab565b60405180910390f35b610073600480360381019061006e91906102f7565b610084565b005b600061007f610098565b905090565b61008c6100cb565b61009581610166565b50565b60006100a261023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100d361023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b906103a7565b60405180910390fd5b565b600061017061023d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102958261026a565b9050919050565b6102a58161028a565b82525050565b60006020820190506102c0600083018461029c565b92915050565b600080fd5b6102d48161028a565b81146102df57600080fd5b50565b6000813590506102f1816102cb565b92915050565b60006020828403121561030d5761030c6102c6565b5b600061031b848285016102e2565b91505092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000610391602283610324565b915061039c82610335565b604082019050919050565b600060208201905081810360008301526103c081610384565b905091905056fea164736f6c634300080b000a";
    static readonly abi: ({
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): OwnershipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnershipFacet;
}
export {};
