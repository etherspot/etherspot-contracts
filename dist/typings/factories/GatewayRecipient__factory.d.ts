import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GatewayRecipient, GatewayRecipientInterface } from "../GatewayRecipient";
export declare class GatewayRecipient__factory {
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): GatewayRecipientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GatewayRecipient;
}
