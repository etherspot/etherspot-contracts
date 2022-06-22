import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SignatureValidator, SignatureValidatorInterface } from "../SignatureValidator";
export declare class SignatureValidator__factory {
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
    static createInterface(): SignatureValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SignatureValidator;
}
