import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWrapped, IWrappedInterface } from "../IWrapped";
export declare class IWrapped__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IWrappedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWrapped;
}
