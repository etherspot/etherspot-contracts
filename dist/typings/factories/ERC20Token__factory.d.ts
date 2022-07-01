import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20Token, ERC20TokenInterface } from "../ERC20Token";
export declare class ERC20Token__factory {
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
    static createInterface(): ERC20TokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Token;
}
