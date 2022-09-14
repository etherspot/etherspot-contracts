import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISuperfluidGovernance, ISuperfluidGovernanceInterface } from "../ISuperfluidGovernance";
export declare class ISuperfluidGovernance__factory {
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
    static createInterface(): ISuperfluidGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperfluidGovernance;
}
