import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISuperApp, ISuperAppInterface } from "../ISuperApp";
export declare class ISuperApp__factory {
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
    static createInterface(): ISuperAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperApp;
}
