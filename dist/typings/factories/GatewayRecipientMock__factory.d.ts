import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GatewayRecipientMock, GatewayRecipientMockInterface } from "../GatewayRecipientMock";
declare type GatewayRecipientMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GatewayRecipientMock__factory extends ContractFactory {
    constructor(...args: GatewayRecipientMockConstructorParams);
    deploy(gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GatewayRecipientMock>;
    getDeployTransaction(gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GatewayRecipientMock;
    connect(signer: Signer): GatewayRecipientMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516104bb3803806104bb8339818101604052602081101561003357600080fd5b81019080805190602001909291905050506100538161005960201b60201c565b5061009c565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610410806100ab6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063116191b61461003b5780636d0e77801461006f575b600080fd5b610043610079565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61007761009d565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f1b86fe2ccdffbf1a2c71e8eca215369d319e2c66c438a84d666fb2536ffbfb3a6100c6610152565b6100ce610163565b6100d6610174565b604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060405180910390a1565b600061015e60286101bf565b905090565b600061016f60146101bf565b905090565b366000366000610182610254565b156101ab576000366000906028600036905003926101a2939291906103ae565b915091506101b3565b600036915091505b81819350935050509091565b600080600090506101ce610254565b1561024757600083600036905003905061023f600036839060148501926101f7939291906103ae565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610315565b91505061024b565b3390505b80915050919050565b60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561030e57602c60003690501015610309576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806103e26022913960400191505060405180910390fd5b600190505b8091505090565b600080601483511461038f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b600080858511156103be57600080fd5b838611156103cb57600080fd5b600185028301915084860390509450949250505056fe47617465776179526563697069656e743a20696e76616c6964206d73672e64617461a164736f6c634300060c000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: any[];
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
    static createInterface(): GatewayRecipientMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GatewayRecipientMock;
}
export {};
