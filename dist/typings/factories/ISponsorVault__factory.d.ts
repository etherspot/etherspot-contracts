import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISponsorVault, ISponsorVaultInterface } from "../ISponsorVault";
export declare class ISponsorVault__factory {
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
    static createInterface(): ISponsorVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISponsorVault;
}
