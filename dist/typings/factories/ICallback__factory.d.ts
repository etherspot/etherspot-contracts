import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICallback, ICallbackInterface } from "../ICallback";
export declare class ICallback__factory {
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
    static createInterface(): ICallbackInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICallback;
}
