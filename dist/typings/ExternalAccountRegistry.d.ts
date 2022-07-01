import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ExternalAccountRegistryInterface extends utils.Interface {
    functions: {
        "addAccountOwner(address)": FunctionFragment;
        "addAccountProof(bytes32)": FunctionFragment;
        "c_67f73f84(bytes8)": FunctionFragment;
        "c_false67f73f84(bytes8)": FunctionFragment;
        "c_true67f73f84(bytes8)": FunctionFragment;
        "removeAccountOwner(address)": FunctionFragment;
        "removeAccountProof(bytes32)": FunctionFragment;
        "verifyAccountOwner(address,address)": FunctionFragment;
        "verifyAccountOwnerAtBlock(address,address,uint256)": FunctionFragment;
        "verifyAccountProof(address,bytes32)": FunctionFragment;
        "verifyAccountProofAtBlock(address,bytes32,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addAccountOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "addAccountProof", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_67f73f84", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false67f73f84", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true67f73f84", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "removeAccountOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "removeAccountProof", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "verifyAccountOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "verifyAccountOwnerAtBlock", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyAccountProof", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifyAccountProofAtBlock", values: [string, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAccountProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_67f73f84", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false67f73f84", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true67f73f84", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAccountProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountOwnerAtBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyAccountProofAtBlock", data: BytesLike): Result;
    events: {
        "AccountOwnerAdded(address,address)": EventFragment;
        "AccountOwnerRemoved(address,address)": EventFragment;
        "AccountProofAdded(address,bytes32)": EventFragment;
        "AccountProofRemoved(address,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountOwnerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountOwnerRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountProofAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccountProofRemoved"): EventFragment;
}
export declare type AccountOwnerAddedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    owner: string;
}>;
export declare type AccountOwnerAddedEventFilter = TypedEventFilter<AccountOwnerAddedEvent>;
export declare type AccountOwnerRemovedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    owner: string;
}>;
export declare type AccountOwnerRemovedEventFilter = TypedEventFilter<AccountOwnerRemovedEvent>;
export declare type AccountProofAddedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    hash: string;
}>;
export declare type AccountProofAddedEventFilter = TypedEventFilter<AccountProofAddedEvent>;
export declare type AccountProofRemovedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    hash: string;
}>;
export declare type AccountProofRemovedEventFilter = TypedEventFilter<AccountProofRemovedEvent>;
export interface ExternalAccountRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExternalAccountRegistryInterface;
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
        addAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        c_67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        removeAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<[boolean]>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        verifyAccountProof(account: string, hash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        verifyAccountProofAtBlock(account: string, hash: BytesLike, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
    };
    addAccountOwner(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addAccountProof(hash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    c_67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    removeAccountOwner(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeAccountProof(hash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<boolean>;
    verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    verifyAccountProof(account: string, hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    verifyAccountProofAtBlock(account: string, hash: BytesLike, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addAccountOwner(owner: string, overrides?: CallOverrides): Promise<void>;
        addAccountProof(hash: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        removeAccountOwner(owner: string, overrides?: CallOverrides): Promise<void>;
        removeAccountProof(hash: BytesLike, overrides?: CallOverrides): Promise<void>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<boolean>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        verifyAccountProof(account: string, hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        verifyAccountProofAtBlock(account: string, hash: BytesLike, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AccountOwnerAdded(address,address)"(account?: null, owner?: null): AccountOwnerAddedEventFilter;
        AccountOwnerAdded(account?: null, owner?: null): AccountOwnerAddedEventFilter;
        "AccountOwnerRemoved(address,address)"(account?: null, owner?: null): AccountOwnerRemovedEventFilter;
        AccountOwnerRemoved(account?: null, owner?: null): AccountOwnerRemovedEventFilter;
        "AccountProofAdded(address,bytes32)"(account?: null, hash?: null): AccountProofAddedEventFilter;
        AccountProofAdded(account?: null, hash?: null): AccountProofAddedEventFilter;
        "AccountProofRemoved(address,bytes32)"(account?: null, hash?: null): AccountProofRemovedEventFilter;
        AccountProofRemoved(account?: null, hash?: null): AccountProofRemovedEventFilter;
    };
    estimateGas: {
        addAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        c_67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        removeAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifyAccountProof(account: string, hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        verifyAccountProofAtBlock(account: string, hash: BytesLike, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        c_67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true67f73f84(c__67f73f84: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAccountOwner(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeAccountProof(hash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyAccountOwner(account: string, owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyAccountOwnerAtBlock(account: string, owner: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyAccountProof(account: string, hash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyAccountProofAtBlock(account: string, hash: BytesLike, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
