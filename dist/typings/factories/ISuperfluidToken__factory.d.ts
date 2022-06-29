import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISuperfluidToken, ISuperfluidTokenInterface } from "../ISuperfluidToken";
export declare class ISuperfluidToken__factory {
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
    static createInterface(): ISuperfluidTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperfluidToken;
}
