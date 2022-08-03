import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ERC20WithTokenInfo, ERC20WithTokenInfoInterface } from "../ERC20WithTokenInfo";
export declare class ERC20WithTokenInfo__factory {
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
    static createInterface(): ERC20WithTokenInfoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20WithTokenInfo;
}
