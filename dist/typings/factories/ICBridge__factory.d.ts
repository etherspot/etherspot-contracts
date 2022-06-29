import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICBridge, ICBridgeInterface } from "../ICBridge";
export declare class ICBridge__factory {
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
    static createInterface(): ICBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICBridge;
}
