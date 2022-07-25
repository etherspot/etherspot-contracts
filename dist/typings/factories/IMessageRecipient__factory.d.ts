import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMessageRecipient, IMessageRecipientInterface } from "../IMessageRecipient";
export declare class IMessageRecipient__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IMessageRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageRecipient;
}
