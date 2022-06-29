import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IConstantFlowAgreementV1, IConstantFlowAgreementV1Interface } from "../IConstantFlowAgreementV1";
export declare class IConstantFlowAgreementV1__factory {
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
    static createInterface(): IConstantFlowAgreementV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConstantFlowAgreementV1;
}
