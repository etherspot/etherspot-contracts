import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ReentrancyGuard, ReentrancyGuardInterface } from "../ReentrancyGuard";
export declare class ReentrancyGuard__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        type: string;
    }[];
    static createInterface(): ReentrancyGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuard;
}
