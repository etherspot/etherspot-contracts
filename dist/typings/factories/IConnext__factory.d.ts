import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IConnext, IConnextInterface } from "../IConnext";
export declare class IConnext__factory {
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
    static createInterface(): IConnextInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConnext;
}
