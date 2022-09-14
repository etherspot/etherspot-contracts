import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ReentrancyGuardUpgradeable, ReentrancyGuardUpgradeableInterface } from "../ReentrancyGuardUpgradeable";
export declare class ReentrancyGuardUpgradeable__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ReentrancyGuardUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuardUpgradeable;
}
