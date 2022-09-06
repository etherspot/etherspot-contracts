import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IHopBridge, IHopBridgeInterface } from "../IHopBridge";
export declare class IHopBridge__factory {
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
    static createInterface(): IHopBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHopBridge;
}
