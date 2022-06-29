import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Controlled, ControlledInterface } from "../Controlled";
export declare class Controlled__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ControlledInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Controlled;
}
