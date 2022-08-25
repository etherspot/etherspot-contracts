import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountControllerInterface extends utils.Interface {
    functions: {
        "accountImplementation()": FunctionFragment;
        "accountRegistry()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountRegistry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountRegistry", data: BytesLike): Result;
    events: {
        "AccountDeployed(address,address)": EventFragment;
        "AccountImplementationUpdated(address)": EventFragment;
        "AccountRegistryUpdated(address)": EventFragment;
        "AccountTransactionExecuted(address,address,uint256,bytes,bytes)": EventFragment;
        "AccountUpgraded(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountImplementationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountRegistryUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountTransactionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountUpgraded"): EventFragment;
}
export declare type AccountDeployedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    accountImplementation: string;
}>;
export declare type AccountDeployedEventFilter = TypedEventFilter<AccountDeployedEvent>;
export declare type AccountImplementationUpdatedEvent = TypedEvent<[
    string
], {
    accountImplementation: string;
}>;
export declare type AccountImplementationUpdatedEventFilter = TypedEventFilter<AccountImplementationUpdatedEvent>;
export declare type AccountRegistryUpdatedEvent = TypedEvent<[
    string
], {
    accountRegistry: string;
}>;
export declare type AccountRegistryUpdatedEventFilter = TypedEventFilter<AccountRegistryUpdatedEvent>;
export declare type AccountTransactionExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    account: string;
    to: string;
    value: BigNumber;
    data: string;
    response: string;
}>;
export declare type AccountTransactionExecutedEventFilter = TypedEventFilter<AccountTransactionExecutedEvent>;
export declare type AccountUpgradedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    accountImplementation: string;
}>;
export declare type AccountUpgradedEventFilter = TypedEventFilter<AccountUpgradedEvent>;
export interface AccountController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountControllerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        accountRegistry(overrides?: CallOverrides): Promise<[string]>;
    };
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    accountRegistry(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        accountRegistry(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AccountDeployed(address,address)"(account?: null, accountImplementation?: null): AccountDeployedEventFilter;
        AccountDeployed(account?: null, accountImplementation?: null): AccountDeployedEventFilter;
        "AccountImplementationUpdated(address)"(accountImplementation?: null): AccountImplementationUpdatedEventFilter;
        AccountImplementationUpdated(accountImplementation?: null): AccountImplementationUpdatedEventFilter;
        "AccountRegistryUpdated(address)"(accountRegistry?: null): AccountRegistryUpdatedEventFilter;
        AccountRegistryUpdated(accountRegistry?: null): AccountRegistryUpdatedEventFilter;
        "AccountTransactionExecuted(address,address,uint256,bytes,bytes)"(account?: null, to?: null, value?: null, data?: null, response?: null): AccountTransactionExecutedEventFilter;
        AccountTransactionExecuted(account?: null, to?: null, value?: null, data?: null, response?: null): AccountTransactionExecutedEventFilter;
        "AccountUpgraded(address,address)"(account?: null, accountImplementation?: null): AccountUpgradedEventFilter;
        AccountUpgraded(account?: null, accountImplementation?: null): AccountUpgradedEventFilter;
    };
    estimateGas: {
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        accountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
