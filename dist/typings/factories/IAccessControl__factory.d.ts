import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAccessControl, IAccessControlInterface } from "../IAccessControl";
export declare class IAccessControl__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IAccessControlInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccessControl;
}
