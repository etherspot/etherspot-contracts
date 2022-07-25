import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUpdaterManager, IUpdaterManagerInterface } from "../IUpdaterManager";
export declare class IUpdaterManager__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IUpdaterManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUpdaterManager;
}
