import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDiamondLoupe, IDiamondLoupeInterface } from "../IDiamondLoupe";
export declare class IDiamondLoupe__factory {
    static readonly abi: ({
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
    } | {
        inputs: any[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IDiamondLoupeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDiamondLoupe;
}
