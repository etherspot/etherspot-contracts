import { providers, Contract, BigNumberish, BigNumber, ContractReceipt } from "ethers";
import { SignerWithAddress, ProcessedTx, MessagePayloadFactory } from "./interfaces";
export declare function getNextNonce(): number;
export declare function concatHex(...items: string[]): string;
export declare function randomAddress(): string;
export declare function randomName(): string;
export declare function randomHex32(): string;
export declare function createMessagePayloadFactory<M extends {} = any>(contract: Contract, structName: string, structFields?: {
    name: keyof M;
    type: string;
}[]): MessagePayloadFactory<M>;
export declare function processTx(txPromise: Promise<providers.TransactionResponse>): Promise<ProcessedTx>;
export declare function computeAccountAddress(deployer: Contract, accountContract: "Account" | "PaymentDepositAccount", salt: string, ...args: string[]): Promise<string>;
export declare function increaseTime(seconds?: BigNumberish): Promise<void>;
export declare function deployContract<T extends Contract = Contract>(name: string, args?: any[], deployer?: SignerWithAddress): Promise<T>;
export declare function isContract(address: string): Promise<boolean>;
export declare function getNow(additionalSeconds?: BigNumberish): BigNumber;
export declare function getMethodSignature(method: string): string;
export declare function buildENSReversedNode(address: string): {
    name: string;
    nameHash: string;
};
export declare function checkEvent(receipt: ContractReceipt): any[];
export declare function multiCallCheckLastEventEmitted(receipt: ContractReceipt): any[];
