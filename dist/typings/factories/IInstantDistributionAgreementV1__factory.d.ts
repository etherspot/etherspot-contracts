import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IInstantDistributionAgreementV1, IInstantDistributionAgreementV1Interface } from "../IInstantDistributionAgreementV1";
export declare class IInstantDistributionAgreementV1__factory {
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
    static createInterface(): IInstantDistributionAgreementV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInstantDistributionAgreementV1;
}
