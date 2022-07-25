import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITokenRegistry, ITokenRegistryInterface } from "../ITokenRegistry";
export declare class ITokenRegistry__factory {
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
    static createInterface(): ITokenRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenRegistry;
}
