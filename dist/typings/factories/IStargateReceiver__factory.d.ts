import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStargateReceiver, IStargateReceiverInterface } from "../IStargateReceiver";
export declare class IStargateReceiver__factory {
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
    static createInterface(): IStargateReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStargateReceiver;
}
