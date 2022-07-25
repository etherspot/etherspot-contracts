import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TokenInfo, TokenInfoInterface } from "../TokenInfo";
export declare class TokenInfo__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): TokenInfoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenInfo;
}
