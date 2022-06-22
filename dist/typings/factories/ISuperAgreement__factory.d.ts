import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISuperAgreement, ISuperAgreementInterface } from "../ISuperAgreement";
export declare class ISuperAgreement__factory {
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
    static createInterface(): ISuperAgreementInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperAgreement;
}
