import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC173, IERC173Interface } from "../IERC173";
export declare class IERC173__factory {
    static readonly abi: ({
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IERC173Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC173;
}
