import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ENSAbstractResolver, ENSAbstractResolverInterface } from "../ENSAbstractResolver";
export declare class ENSAbstractResolver__factory {
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
    static createInterface(): ENSAbstractResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ENSAbstractResolver;
}
