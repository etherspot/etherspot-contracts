import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Upgradeable, ERC20UpgradeableInterface } from "../ERC20Upgradeable";
declare type ERC20UpgradeableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Upgradeable__factory extends ContractFactory {
    constructor(...args: ERC20UpgradeableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20Upgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20Upgradeable;
    connect(signer: Signer): ERC20Upgradeable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611243806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b26565b60405180910390f35b6100e660048036038101906100e19190610be1565b610308565b6040516100f39190610c3c565b60405180910390f35b61010461032b565b6040516101119190610c66565b60405180910390f35b610134600480360381019061012f9190610c81565b610335565b6040516101419190610c3c565b60405180910390f35b610152610364565b60405161015f9190610cf0565b60405180910390f35b610182600480360381019061017d9190610be1565b61036d565b60405161018f9190610c3c565b60405180910390f35b6101b260048036038101906101ad9190610d0b565b6103a4565b6040516101bf9190610c66565b60405180910390f35b6101d06103ed565b6040516101dd9190610b26565b60405180910390f35b61020060048036038101906101fb9190610be1565b61047f565b60405161020d9190610c3c565b60405180910390f35b610230600480360381019061022b9190610be1565b6104f6565b60405161023d9190610c3c565b60405180910390f35b610260600480360381019061025b9190610d38565b610519565b60405161026d9190610c66565b60405180910390f35b60606036805461028590610da7565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610da7565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136105a0565b90506103208185856105a8565b600191505092915050565b6000603554905090565b6000806103406105a0565b905061034d858285610773565b6103588585856107ff565b60019150509392505050565b60006012905090565b6000806103786105a0565b905061039981858561038a8589610519565b6103949190610e08565b6105a8565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546103fc90610da7565b80601f016020809104026020016040519081016040528092919081815260200182805461042890610da7565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6105a0565b905060006104988286610519565b9050838110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490610ed0565b60405180910390fd5b6104ea82868684036105a8565b60019250505092915050565b6000806105016105a0565b905061050e8185856107ff565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f90610f62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f90610ff4565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107669190610c66565b60405180910390a3505050565b600061077f8484610519565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f957818110156107eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e290611060565b60405180910390fd5b6107f884848484036105a8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610866906110f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d690611184565b60405180910390fd5b6108ea838383610a83565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096890611216565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a069190610e08565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a6a9190610c66565b60405180910390a3610a7d848484610a88565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ac7578082015181840152602081019050610aac565b83811115610ad6576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af882610a8d565b610b028185610a98565b9350610b12818560208601610aa9565b610b1b81610adc565b840191505092915050565b60006020820190508181036000830152610b408184610aed565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7882610b4d565b9050919050565b610b8881610b6d565b8114610b9357600080fd5b50565b600081359050610ba581610b7f565b92915050565b6000819050919050565b610bbe81610bab565b8114610bc957600080fd5b50565b600081359050610bdb81610bb5565b92915050565b60008060408385031215610bf857610bf7610b48565b5b6000610c0685828601610b96565b9250506020610c1785828601610bcc565b9150509250929050565b60008115159050919050565b610c3681610c21565b82525050565b6000602082019050610c516000830184610c2d565b92915050565b610c6081610bab565b82525050565b6000602082019050610c7b6000830184610c57565b92915050565b600080600060608486031215610c9a57610c99610b48565b5b6000610ca886828701610b96565b9350506020610cb986828701610b96565b9250506040610cca86828701610bcc565b9150509250925092565b600060ff82169050919050565b610cea81610cd4565b82525050565b6000602082019050610d056000830184610ce1565b92915050565b600060208284031215610d2157610d20610b48565b5b6000610d2f84828501610b96565b91505092915050565b60008060408385031215610d4f57610d4e610b48565b5b6000610d5d85828601610b96565b9250506020610d6e85828601610b96565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dbf57607f821691505b60208210811415610dd357610dd2610d78565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1382610bab565b9150610e1e83610bab565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5357610e52610dd9565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eba602583610a98565b9150610ec582610e5e565b604082019050919050565b60006020820190508181036000830152610ee981610ead565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f4c602483610a98565b9150610f5782610ef0565b604082019050919050565b60006020820190508181036000830152610f7b81610f3f565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fde602283610a98565b9150610fe982610f82565b604082019050919050565b6000602082019050818103600083015261100d81610fd1565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061104a601d83610a98565b915061105582611014565b602082019050919050565b600060208201905081810360008301526110798161103d565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110dc602583610a98565b91506110e782611080565b604082019050919050565b6000602082019050818103600083015261110b816110cf565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061116e602383610a98565b915061117982611112565b604082019050919050565b6000602082019050818103600083015261119d81611161565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611200602683610a98565b915061120b826111a4565b604082019050919050565b6000602082019050818103600083015261122f816111f3565b905091905056fea164736f6c634300080b000a";
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
    static createInterface(): ERC20UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Upgradeable;
}
export {};
