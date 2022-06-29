import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type DepositWithdrawalStruct = {
    owner: string;
    token: string;
    amount: BigNumberish;
};
export declare type DepositWithdrawalStructOutput = [string, string, BigNumber] & {
    owner: string;
    token: string;
    amount: BigNumber;
};
export declare type PaymentChannelCommitStruct = {
    sender: string;
    recipient: string;
    token: string;
    uid: BytesLike;
    blockNumber: BigNumberish;
    amount: BigNumberish;
};
export declare type PaymentChannelCommitStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
] & {
    sender: string;
    recipient: string;
    token: string;
    uid: string;
    blockNumber: BigNumber;
    amount: BigNumber;
};
export interface PaymentRegistryInterface extends utils.Interface {
    functions: {
        "addGuardian(address)": FunctionFragment;
        "c_0ffe16b4(bytes8)": FunctionFragment;
        "c_1b54acf3(bytes8)": FunctionFragment;
        "c_3029712e(bytes8)": FunctionFragment;
        "c_c0828b70(bytes8)": FunctionFragment;
        "c_d5c463c2(bytes8)": FunctionFragment;
        "c_false0ffe16b4(bytes8)": FunctionFragment;
        "c_false1b54acf3(bytes8)": FunctionFragment;
        "c_false3029712e(bytes8)": FunctionFragment;
        "c_falsec0828b70(bytes8)": FunctionFragment;
        "c_falsed5c463c2(bytes8)": FunctionFragment;
        "c_true0ffe16b4(bytes8)": FunctionFragment;
        "c_true1b54acf3(bytes8)": FunctionFragment;
        "c_true3029712e(bytes8)": FunctionFragment;
        "c_truec0828b70(bytes8)": FunctionFragment;
        "c_trued5c463c2(bytes8)": FunctionFragment;
        "chainId()": FunctionFragment;
        "commitPaymentChannelAndDeposit(address,address,bytes32,uint256,uint256,bytes,bytes)": FunctionFragment;
        "commitPaymentChannelAndSplit(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": FunctionFragment;
        "commitPaymentChannelAndWithdraw(address,address,bytes32,uint256,uint256,bytes,bytes)": FunctionFragment;
        "computeDepositAccountAddress(address)": FunctionFragment;
        "computePaymentChannelHash(address,address,address,bytes32)": FunctionFragment;
        "deployDepositAccount(address)": FunctionFragment;
        "depositExitLockPeriod()": FunctionFragment;
        "externalAccountRegistry()": FunctionFragment;
        "gateway()": FunctionFragment;
        "getDepositExitLockedUntil(address,address)": FunctionFragment;
        "getDepositWithdrawnAmount(address,address)": FunctionFragment;
        "getPaymentChannelCommittedAmount(bytes32)": FunctionFragment;
        "hashDepositWithdrawal((address,address,uint256))": FunctionFragment;
        "hashPaymentChannelCommit((address,address,address,bytes32,uint256,uint256))": FunctionFragment;
        "initialize(address,address,uint256,address[],address)": FunctionFragment;
        "isDepositAccountDeployed(address)": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "personalAccountRegistry()": FunctionFragment;
        "processDepositExit(address)": FunctionFragment;
        "removeGuardian(address)": FunctionFragment;
        "requestDepositExit(address)": FunctionFragment;
        "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
        "withdrawDeposit(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "c_0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_3029712e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_c0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_d5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false3029712e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsed5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true3029712e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trued5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitPaymentChannelAndDeposit", values: [
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "commitPaymentChannelAndSplit", values: [
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "commitPaymentChannelAndWithdraw", values: [
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "computeDepositAccountAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "computePaymentChannelHash", values: [string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployDepositAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "depositExitLockPeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "externalAccountRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDepositExitLockedUntil", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getDepositWithdrawnAmount", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPaymentChannelCommittedAmount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "hashDepositWithdrawal", values: [DepositWithdrawalStruct]): string;
    encodeFunctionData(functionFragment: "hashPaymentChannelCommit", values: [PaymentChannelCommitStruct]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "isDepositAccountDeployed", values: [string]): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "personalAccountRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "processDepositExit", values: [string]): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "requestDepositExit", values: [string]): string;
    encodeFunctionData(functionFragment: "verifyGuardianSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawDeposit", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_3029712e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_c0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_d5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false3029712e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsed5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true3029712e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trued5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitPaymentChannelAndDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitPaymentChannelAndSplit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitPaymentChannelAndWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeDepositAccountAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computePaymentChannelHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployDepositAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositExitLockPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "externalAccountRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositExitLockedUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositWithdrawnAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPaymentChannelCommittedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashDepositWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashPaymentChannelCommit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDepositAccountDeployed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "personalAccountRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processDepositExit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestDepositExit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyGuardianSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDeposit", data: BytesLike): Result;
    events: {
        "DepositAccountDeployed(address,address)": EventFragment;
        "DepositExitCompleted(address,address,address,uint256)": EventFragment;
        "DepositExitRejected(address,address,address)": EventFragment;
        "DepositExitRequested(address,address,address,uint256)": EventFragment;
        "DepositWithdrawn(address,address,address,uint256)": EventFragment;
        "GuardianAdded(address,address)": EventFragment;
        "GuardianRemoved(address,address)": EventFragment;
        "Initialized(address)": EventFragment;
        "PaymentChannelCommitted(bytes32,address,address,address,bytes32,uint256)": EventFragment;
        "PaymentDeposited(bytes32,uint256)": EventFragment;
        "PaymentSplit(bytes32,uint256,uint256)": EventFragment;
        "PaymentWithdrawn(bytes32,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DepositAccountDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositExitCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositExitRejected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositExitRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentChannelCommitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentDeposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentSplit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentWithdrawn"): EventFragment;
}
export declare type DepositAccountDeployedEvent = TypedEvent<[
    string,
    string
], {
    depositAccount: string;
    owner: string;
}>;
export declare type DepositAccountDeployedEventFilter = TypedEventFilter<DepositAccountDeployedEvent>;
export declare type DepositExitCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    depositAccount: string;
    owner: string;
    token: string;
    amount: BigNumber;
}>;
export declare type DepositExitCompletedEventFilter = TypedEventFilter<DepositExitCompletedEvent>;
export declare type DepositExitRejectedEvent = TypedEvent<[
    string,
    string,
    string
], {
    depositAccount: string;
    owner: string;
    token: string;
}>;
export declare type DepositExitRejectedEventFilter = TypedEventFilter<DepositExitRejectedEvent>;
export declare type DepositExitRequestedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    depositAccount: string;
    owner: string;
    token: string;
    lockedUntil: BigNumber;
}>;
export declare type DepositExitRequestedEventFilter = TypedEventFilter<DepositExitRequestedEvent>;
export declare type DepositWithdrawnEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], {
    depositAccount: string;
    owner: string;
    token: string;
    amount: BigNumber;
}>;
export declare type DepositWithdrawnEventFilter = TypedEventFilter<DepositWithdrawnEvent>;
export declare type GuardianAddedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;
export declare type GuardianRemovedEvent = TypedEvent<[
    string,
    string
], {
    sender: string;
    guardian: string;
}>;
export declare type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;
export declare type InitializedEvent = TypedEvent<[string], {
    initializer: string;
}>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export declare type PaymentChannelCommittedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber
], {
    hash: string;
    sender: string;
    recipient: string;
    token: string;
    uid: string;
    amount: BigNumber;
}>;
export declare type PaymentChannelCommittedEventFilter = TypedEventFilter<PaymentChannelCommittedEvent>;
export declare type PaymentDepositedEvent = TypedEvent<[
    string,
    BigNumber
], {
    channelHash: string;
    value: BigNumber;
}>;
export declare type PaymentDepositedEventFilter = TypedEventFilter<PaymentDepositedEvent>;
export declare type PaymentSplitEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    channelHash: string;
    totalValue: BigNumber;
    depositValue: BigNumber;
}>;
export declare type PaymentSplitEventFilter = TypedEventFilter<PaymentSplitEvent>;
export declare type PaymentWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], {
    channelHash: string;
    value: BigNumber;
}>;
export declare type PaymentWithdrawnEventFilter = TypedEventFilter<PaymentWithdrawnEvent>;
export interface PaymentRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PaymentRegistryInterface;
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
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        commitPaymentChannelAndDeposit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        commitPaymentChannelAndSplit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, depositPaymentValue: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        commitPaymentChannelAndWithdraw(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        computeDepositAccountAddress(owner: string, overrides?: CallOverrides): Promise<[string]>;
        computePaymentChannelHash(sender: string, recipient: string, token: string, uid: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        deployDepositAccount(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositExitLockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        getDepositExitLockedUntil(owner: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getDepositWithdrawnAmount(owner: string, token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPaymentChannelCommittedAmount(hash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        hashDepositWithdrawal(depositWithdrawal: DepositWithdrawalStruct, overrides?: CallOverrides): Promise<[string]>;
        hashPaymentChannelCommit(paymentChannelCommit: PaymentChannelCommitStruct, overrides?: CallOverrides): Promise<[string]>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, depositExitLockPeriod_: BigNumberish, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isDepositAccountDeployed(owner: string, overrides?: CallOverrides): Promise<[boolean]>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;
        processDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        requestDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        withdrawDeposit(token: string, amount: BigNumberish, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    commitPaymentChannelAndDeposit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    commitPaymentChannelAndSplit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, depositPaymentValue: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    commitPaymentChannelAndWithdraw(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    computeDepositAccountAddress(owner: string, overrides?: CallOverrides): Promise<string>;
    computePaymentChannelHash(sender: string, recipient: string, token: string, uid: BytesLike, overrides?: CallOverrides): Promise<string>;
    deployDepositAccount(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositExitLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    externalAccountRegistry(overrides?: CallOverrides): Promise<string>;
    gateway(overrides?: CallOverrides): Promise<string>;
    getDepositExitLockedUntil(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    getDepositWithdrawnAmount(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPaymentChannelCommittedAmount(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    hashDepositWithdrawal(depositWithdrawal: DepositWithdrawalStruct, overrides?: CallOverrides): Promise<string>;
    hashPaymentChannelCommit(paymentChannelCommit: PaymentChannelCommitStruct, overrides?: CallOverrides): Promise<string>;
    initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, depositExitLockPeriod_: BigNumberish, guardians_: string[], gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isDepositAccountDeployed(owner: string, overrides?: CallOverrides): Promise<boolean>;
    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    personalAccountRegistry(overrides?: CallOverrides): Promise<string>;
    processDepositExit(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    requestDepositExit(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    withdrawDeposit(token: string, amount: BigNumberish, guardianSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        commitPaymentChannelAndDeposit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        commitPaymentChannelAndSplit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, depositPaymentValue: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        commitPaymentChannelAndWithdraw(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        computeDepositAccountAddress(owner: string, overrides?: CallOverrides): Promise<string>;
        computePaymentChannelHash(sender: string, recipient: string, token: string, uid: BytesLike, overrides?: CallOverrides): Promise<string>;
        deployDepositAccount(owner: string, overrides?: CallOverrides): Promise<void>;
        depositExitLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<string>;
        gateway(overrides?: CallOverrides): Promise<string>;
        getDepositExitLockedUntil(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositWithdrawnAmount(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPaymentChannelCommittedAmount(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hashDepositWithdrawal(depositWithdrawal: DepositWithdrawalStruct, overrides?: CallOverrides): Promise<string>;
        hashPaymentChannelCommit(paymentChannelCommit: PaymentChannelCommitStruct, overrides?: CallOverrides): Promise<string>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, depositExitLockPeriod_: BigNumberish, guardians_: string[], gateway_: string, overrides?: CallOverrides): Promise<void>;
        isDepositAccountDeployed(owner: string, overrides?: CallOverrides): Promise<boolean>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<string>;
        processDepositExit(token: string, overrides?: CallOverrides): Promise<void>;
        removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        requestDepositExit(token: string, overrides?: CallOverrides): Promise<void>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        withdrawDeposit(token: string, amount: BigNumberish, guardianSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DepositAccountDeployed(address,address)"(depositAccount?: null, owner?: null): DepositAccountDeployedEventFilter;
        DepositAccountDeployed(depositAccount?: null, owner?: null): DepositAccountDeployedEventFilter;
        "DepositExitCompleted(address,address,address,uint256)"(depositAccount?: null, owner?: null, token?: null, amount?: null): DepositExitCompletedEventFilter;
        DepositExitCompleted(depositAccount?: null, owner?: null, token?: null, amount?: null): DepositExitCompletedEventFilter;
        "DepositExitRejected(address,address,address)"(depositAccount?: null, owner?: null, token?: null): DepositExitRejectedEventFilter;
        DepositExitRejected(depositAccount?: null, owner?: null, token?: null): DepositExitRejectedEventFilter;
        "DepositExitRequested(address,address,address,uint256)"(depositAccount?: null, owner?: null, token?: null, lockedUntil?: null): DepositExitRequestedEventFilter;
        DepositExitRequested(depositAccount?: null, owner?: null, token?: null, lockedUntil?: null): DepositExitRequestedEventFilter;
        "DepositWithdrawn(address,address,address,uint256)"(depositAccount?: null, owner?: null, token?: null, amount?: null): DepositWithdrawnEventFilter;
        DepositWithdrawn(depositAccount?: null, owner?: null, token?: null, amount?: null): DepositWithdrawnEventFilter;
        "GuardianAdded(address,address)"(sender?: null, guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;
        "GuardianRemoved(address,address)"(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
        "PaymentChannelCommitted(bytes32,address,address,address,bytes32,uint256)"(hash?: null, sender?: null, recipient?: null, token?: null, uid?: null, amount?: null): PaymentChannelCommittedEventFilter;
        PaymentChannelCommitted(hash?: null, sender?: null, recipient?: null, token?: null, uid?: null, amount?: null): PaymentChannelCommittedEventFilter;
        "PaymentDeposited(bytes32,uint256)"(channelHash?: null, value?: null): PaymentDepositedEventFilter;
        PaymentDeposited(channelHash?: null, value?: null): PaymentDepositedEventFilter;
        "PaymentSplit(bytes32,uint256,uint256)"(channelHash?: null, totalValue?: null, depositValue?: null): PaymentSplitEventFilter;
        PaymentSplit(channelHash?: null, totalValue?: null, depositValue?: null): PaymentSplitEventFilter;
        "PaymentWithdrawn(bytes32,uint256)"(channelHash?: null, value?: null): PaymentWithdrawnEventFilter;
        PaymentWithdrawn(channelHash?: null, value?: null): PaymentWithdrawnEventFilter;
    };
    estimateGas: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        commitPaymentChannelAndDeposit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        commitPaymentChannelAndSplit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, depositPaymentValue: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        commitPaymentChannelAndWithdraw(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        computeDepositAccountAddress(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        computePaymentChannelHash(sender: string, recipient: string, token: string, uid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        deployDepositAccount(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositExitLockPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        getDepositExitLockedUntil(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositWithdrawnAmount(owner: string, token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPaymentChannelCommittedAmount(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hashDepositWithdrawal(depositWithdrawal: DepositWithdrawalStruct, overrides?: CallOverrides): Promise<BigNumber>;
        hashPaymentChannelCommit(paymentChannelCommit: PaymentChannelCommitStruct, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, depositExitLockPeriod_: BigNumberish, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isDepositAccountDeployed(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        processDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        requestDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDeposit(token: string, amount: BigNumberish, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true3029712e(c__3029712e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commitPaymentChannelAndDeposit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        commitPaymentChannelAndSplit(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, depositPaymentValue: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        commitPaymentChannelAndWithdraw(sender: string, token: string, uid: BytesLike, blockNumber: BigNumberish, amount: BigNumberish, senderSignature: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        computeDepositAccountAddress(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computePaymentChannelHash(sender: string, recipient: string, token: string, uid: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployDepositAccount(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositExitLockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        externalAccountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositExitLockedUntil(owner: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositWithdrawnAmount(owner: string, token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPaymentChannelCommittedAmount(hash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashDepositWithdrawal(depositWithdrawal: DepositWithdrawalStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashPaymentChannelCommit(paymentChannelCommit: PaymentChannelCommitStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(externalAccountRegistry_: string, personalAccountRegistry_: string, depositExitLockPeriod_: BigNumberish, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isDepositAccountDeployed(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        personalAccountRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        requestDepositExit(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawDeposit(token: string, amount: BigNumberish, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}