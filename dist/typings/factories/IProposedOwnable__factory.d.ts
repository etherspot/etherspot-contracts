import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProposedOwnable, IProposedOwnableInterface } from "../IProposedOwnable";
export declare class IProposedOwnable__factory {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IProposedOwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProposedOwnable;
}
