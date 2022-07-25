import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISuperTokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "authorizeOperator(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256,bytes)": FunctionFragment;
        "createAgreement(bytes32,bytes32[])": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "defaultOperators()": FunctionFragment;
        "downgrade(uint256)": FunctionFragment;
        "getAccountActiveAgreements(address)": FunctionFragment;
        "getAgreementData(address,bytes32,uint256)": FunctionFragment;
        "getAgreementStateSlot(address,address,uint256,uint256)": FunctionFragment;
        "getHost()": FunctionFragment;
        "getUnderlyingToken()": FunctionFragment;
        "granularity()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,uint8,string,string)": FunctionFragment;
        "isAccountCritical(address,uint256)": FunctionFragment;
        "isAccountCriticalNow(address)": FunctionFragment;
        "isAccountSolvent(address,uint256)": FunctionFragment;
        "isAccountSolventNow(address)": FunctionFragment;
        "isOperatorFor(address,address)": FunctionFragment;
        "makeLiquidationPayoutsV2(bytes32,bytes,address,bool,address,uint256,int256)": FunctionFragment;
        "name()": FunctionFragment;
        "operationApprove(address,address,uint256)": FunctionFragment;
        "operationDowngrade(address,uint256)": FunctionFragment;
        "operationTransferFrom(address,address,address,uint256)": FunctionFragment;
        "operationUpgrade(address,uint256)": FunctionFragment;
        "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
        "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
        "realtimeBalanceOf(address,uint256)": FunctionFragment;
        "realtimeBalanceOfNow(address)": FunctionFragment;
        "revokeOperator(address)": FunctionFragment;
        "selfApproveFor(address,address,uint256)": FunctionFragment;
        "selfBurn(address,uint256,bytes)": FunctionFragment;
        "selfMint(address,uint256,bytes)": FunctionFragment;
        "selfTransferFrom(address,address,address,uint256)": FunctionFragment;
        "send(address,uint256,bytes)": FunctionFragment;
        "settleBalance(address,int256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "terminateAgreement(bytes32,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferAll(address)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "updateAgreementData(bytes32,bytes32[])": FunctionFragment;
        "updateAgreementStateSlot(address,uint256,bytes32[])": FunctionFragment;
        "upgrade(uint256)": FunctionFragment;
        "upgradeTo(address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "authorizeOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "createAgreement", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "defaultOperators", values?: undefined): string;
    encodeFunctionData(functionFragment: "downgrade", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAccountActiveAgreements", values: [string]): string;
    encodeFunctionData(functionFragment: "getAgreementData", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAgreementStateSlot", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnderlyingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "granularity", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "isAccountCritical", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isAccountCriticalNow", values: [string]): string;
    encodeFunctionData(functionFragment: "isAccountSolvent", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isAccountSolventNow", values: [string]): string;
    encodeFunctionData(functionFragment: "isOperatorFor", values: [string, string]): string;
    encodeFunctionData(functionFragment: "makeLiquidationPayoutsV2", values: [
        BytesLike,
        BytesLike,
        string,
        boolean,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "operationApprove", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "operationDowngrade", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "operationTransferFrom", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "operationUpgrade", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "operatorBurn", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "operatorSend", values: [string, string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOfNow", values: [string]): string;
    encodeFunctionData(functionFragment: "revokeOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "selfApproveFor", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfBurn", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "selfMint", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "selfTransferFrom", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "send", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "settleBalance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "terminateAgreement", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAll", values: [string]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateAgreementData", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "updateAgreementStateSlot", values: [string, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOperators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "downgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountActiveAgreements", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementStateSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "granularity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCritical", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCriticalNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolventNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeLiquidationPayoutsV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationDowngrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOfNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfApproveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terminateAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementStateSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    events: {
        "AgreementCreated(address,bytes32,bytes32[])": EventFragment;
        "AgreementLiquidated(address,bytes32,address,address,uint256)": EventFragment;
        "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)": EventFragment;
        "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)": EventFragment;
        "AgreementStateUpdated(address,address,uint256)": EventFragment;
        "AgreementTerminated(address,bytes32)": EventFragment;
        "AgreementUpdated(address,bytes32,bytes32[])": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AuthorizedOperator(address,address)": EventFragment;
        "Bailout(address,uint256)": EventFragment;
        "Burned(address,address,uint256,bytes,bytes)": EventFragment;
        "Minted(address,address,uint256,bytes,bytes)": EventFragment;
        "RevokedOperator(address,address)": EventFragment;
        "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
        "TokenDowngraded(address,uint256)": EventFragment;
        "TokenUpgraded(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgreementCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedBy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedV2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementStateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementTerminated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Bailout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDowngraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type AgreementCreatedEvent = TypedEvent<[
    string,
    string,
    string[]
], {
    agreementClass: string;
    id: string;
    data: string[];
}>;
export declare type AgreementCreatedEventFilter = TypedEventFilter<AgreementCreatedEvent>;
export declare type AgreementLiquidatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], {
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    rewardAccount: string;
    rewardAmount: BigNumber;
}>;
export declare type AgreementLiquidatedEventFilter = TypedEventFilter<AgreementLiquidatedEvent>;
export declare type AgreementLiquidatedByEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], {
    liquidatorAccount: string;
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    bondAccount: string;
    rewardAmount: BigNumber;
    bailoutAmount: BigNumber;
}>;
export declare type AgreementLiquidatedByEventFilter = TypedEventFilter<AgreementLiquidatedByEvent>;
export declare type AgreementLiquidatedV2Event = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    agreementClass: string;
    id: string;
    liquidatorAccount: string;
    targetAccount: string;
    rewardAccount: string;
    rewardAmount: BigNumber;
    targetAccountBalanceDelta: BigNumber;
    liquidationTypeData: string;
}>;
export declare type AgreementLiquidatedV2EventFilter = TypedEventFilter<AgreementLiquidatedV2Event>;
export declare type AgreementStateUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    agreementClass: string;
    account: string;
    slotId: BigNumber;
}>;
export declare type AgreementStateUpdatedEventFilter = TypedEventFilter<AgreementStateUpdatedEvent>;
export declare type AgreementTerminatedEvent = TypedEvent<[
    string,
    string
], {
    agreementClass: string;
    id: string;
}>;
export declare type AgreementTerminatedEventFilter = TypedEventFilter<AgreementTerminatedEvent>;
export declare type AgreementUpdatedEvent = TypedEvent<[
    string,
    string,
    string[]
], {
    agreementClass: string;
    id: string;
    data: string[];
}>;
export declare type AgreementUpdatedEventFilter = TypedEventFilter<AgreementUpdatedEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type AuthorizedOperatorEvent = TypedEvent<[
    string,
    string
], {
    operator: string;
    tokenHolder: string;
}>;
export declare type AuthorizedOperatorEventFilter = TypedEventFilter<AuthorizedOperatorEvent>;
export declare type BailoutEvent = TypedEvent<[
    string,
    BigNumber
], {
    bailoutAccount: string;
    bailoutAmount: BigNumber;
}>;
export declare type BailoutEventFilter = TypedEventFilter<BailoutEvent>;
export declare type BurnedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    from: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type BurnedEventFilter = TypedEventFilter<BurnedEvent>;
export declare type MintedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type MintedEventFilter = TypedEventFilter<MintedEvent>;
export declare type RevokedOperatorEvent = TypedEvent<[
    string,
    string
], {
    operator: string;
    tokenHolder: string;
}>;
export declare type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;
export declare type SentEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type SentEventFilter = TypedEventFilter<SentEvent>;
export declare type TokenDowngradedEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export declare type TokenDowngradedEventFilter = TypedEventFilter<TokenDowngradedEvent>;
export declare type TokenUpgradedEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    amount: BigNumber;
}>;
export declare type TokenUpgradedEventFilter = TypedEventFilter<TokenUpgradedEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ISuperToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperTokenInterface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createAgreement(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;
        downgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAccountActiveAgreements(account: string, overrides?: CallOverrides): Promise<[string[]] & {
            activeAgreements: string[];
        }>;
        getAgreementData(agreementClass: string, id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<[string[]] & {
            data: string[];
        }>;
        getAgreementStateSlot(agreementClass: string, account: string, slotId: BigNumberish, dataLength: BigNumberish, overrides?: CallOverrides): Promise<[string[]] & {
            slotData: string[];
        }>;
        getHost(overrides?: CallOverrides): Promise<[string] & {
            host: string;
        }>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<[string] & {
            tokenAddr: string;
        }>;
        granularity(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(underlyingToken: string, underlyingDecimals: BigNumberish, n: string, s: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isAccountCritical(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            isCritical: boolean;
        }>;
        isAccountCriticalNow(account: string, overrides?: CallOverrides): Promise<[boolean] & {
            isCritical: boolean;
        }>;
        isAccountSolvent(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            isSolvent: boolean;
        }>;
        isAccountSolventNow(account: string, overrides?: CallOverrides): Promise<[boolean] & {
            isSolvent: boolean;
        }>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<[boolean]>;
        makeLiquidationPayoutsV2(id: BytesLike, liquidationTypeData: BytesLike, liquidatorAccount: string, useDefaultRewardAccount: boolean, targetAccount: string, rewardAmount: BigNumberish, targetAccountBalanceDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        operationApprove(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operationDowngrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operationTransferFrom(account: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operationUpgrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        realtimeBalanceOf(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        realtimeBalanceOfNow(account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
            timestamp: BigNumber;
        }>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfApproveFor(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfBurn(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfMint(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfTransferFrom(sender: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        settleBalance(account: string, delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        terminateAgreement(id: BytesLike, dataLength: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAll(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateAgreementData(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateAgreementStateSlot(account: string, slotId: BigNumberish, slotData: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(to: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authorizeOperator(operator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createAgreement(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    defaultOperators(overrides?: CallOverrides): Promise<string[]>;
    downgrade(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAccountActiveAgreements(account: string, overrides?: CallOverrides): Promise<string[]>;
    getAgreementData(agreementClass: string, id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    getAgreementStateSlot(agreementClass: string, account: string, slotId: BigNumberish, dataLength: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    getHost(overrides?: CallOverrides): Promise<string>;
    getUnderlyingToken(overrides?: CallOverrides): Promise<string>;
    granularity(overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(underlyingToken: string, underlyingDecimals: BigNumberish, n: string, s: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isAccountCritical(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isAccountCriticalNow(account: string, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolvent(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolventNow(account: string, overrides?: CallOverrides): Promise<boolean>;
    isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<boolean>;
    makeLiquidationPayoutsV2(id: BytesLike, liquidationTypeData: BytesLike, liquidatorAccount: string, useDefaultRewardAccount: boolean, targetAccount: string, rewardAmount: BigNumberish, targetAccountBalanceDelta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    operationApprove(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operationDowngrade(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operationTransferFrom(account: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operationUpgrade(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    realtimeBalanceOf(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    realtimeBalanceOfNow(account: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
        timestamp: BigNumber;
    }>;
    revokeOperator(operator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfApproveFor(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfBurn(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfMint(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfTransferFrom(sender: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    settleBalance(account: string, delta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    terminateAgreement(id: BytesLike, dataLength: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAll(recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateAgreementData(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateAgreementStateSlot(account: string, slotId: BigNumberish, slotData: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgrade(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(to: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        authorizeOperator(operator: string, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        createAgreement(id: BytesLike, data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        defaultOperators(overrides?: CallOverrides): Promise<string[]>;
        downgrade(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAccountActiveAgreements(account: string, overrides?: CallOverrides): Promise<string[]>;
        getAgreementData(agreementClass: string, id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        getAgreementStateSlot(agreementClass: string, account: string, slotId: BigNumberish, dataLength: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        getHost(overrides?: CallOverrides): Promise<string>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<string>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(underlyingToken: string, underlyingDecimals: BigNumberish, n: string, s: string, overrides?: CallOverrides): Promise<void>;
        isAccountCritical(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isAccountCriticalNow(account: string, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolvent(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolventNow(account: string, overrides?: CallOverrides): Promise<boolean>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<boolean>;
        makeLiquidationPayoutsV2(id: BytesLike, liquidationTypeData: BytesLike, liquidatorAccount: string, useDefaultRewardAccount: boolean, targetAccount: string, rewardAmount: BigNumberish, targetAccountBalanceDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        operationApprove(account: string, spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        operationDowngrade(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        operationTransferFrom(account: string, spender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        operationUpgrade(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: CallOverrides): Promise<void>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: CallOverrides): Promise<void>;
        realtimeBalanceOf(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        realtimeBalanceOfNow(account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
            timestamp: BigNumber;
        }>;
        revokeOperator(operator: string, overrides?: CallOverrides): Promise<void>;
        selfApproveFor(account: string, spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        selfBurn(account: string, amount: BigNumberish, userData: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfMint(account: string, amount: BigNumberish, userData: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfTransferFrom(sender: string, spender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        settleBalance(account: string, delta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        terminateAgreement(id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferAll(recipient: string, overrides?: CallOverrides): Promise<void>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        updateAgreementData(id: BytesLike, data: BytesLike[], overrides?: CallOverrides): Promise<void>;
        updateAgreementStateSlot(account: string, slotId: BigNumberish, slotData: BytesLike[], overrides?: CallOverrides): Promise<void>;
        upgrade(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        upgradeTo(to: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgreementCreated(address,bytes32,bytes32[])"(agreementClass?: string | null, id?: null, data?: null): AgreementCreatedEventFilter;
        AgreementCreated(agreementClass?: string | null, id?: null, data?: null): AgreementCreatedEventFilter;
        "AgreementLiquidated(address,bytes32,address,address,uint256)"(agreementClass?: string | null, id?: null, penaltyAccount?: string | null, rewardAccount?: string | null, rewardAmount?: null): AgreementLiquidatedEventFilter;
        AgreementLiquidated(agreementClass?: string | null, id?: null, penaltyAccount?: string | null, rewardAccount?: string | null, rewardAmount?: null): AgreementLiquidatedEventFilter;
        "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)"(liquidatorAccount?: null, agreementClass?: string | null, id?: null, penaltyAccount?: string | null, bondAccount?: string | null, rewardAmount?: null, bailoutAmount?: null): AgreementLiquidatedByEventFilter;
        AgreementLiquidatedBy(liquidatorAccount?: null, agreementClass?: string | null, id?: null, penaltyAccount?: string | null, bondAccount?: string | null, rewardAmount?: null, bailoutAmount?: null): AgreementLiquidatedByEventFilter;
        "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)"(agreementClass?: string | null, id?: null, liquidatorAccount?: string | null, targetAccount?: string | null, rewardAccount?: null, rewardAmount?: null, targetAccountBalanceDelta?: null, liquidationTypeData?: null): AgreementLiquidatedV2EventFilter;
        AgreementLiquidatedV2(agreementClass?: string | null, id?: null, liquidatorAccount?: string | null, targetAccount?: string | null, rewardAccount?: null, rewardAmount?: null, targetAccountBalanceDelta?: null, liquidationTypeData?: null): AgreementLiquidatedV2EventFilter;
        "AgreementStateUpdated(address,address,uint256)"(agreementClass?: string | null, account?: string | null, slotId?: null): AgreementStateUpdatedEventFilter;
        AgreementStateUpdated(agreementClass?: string | null, account?: string | null, slotId?: null): AgreementStateUpdatedEventFilter;
        "AgreementTerminated(address,bytes32)"(agreementClass?: string | null, id?: null): AgreementTerminatedEventFilter;
        AgreementTerminated(agreementClass?: string | null, id?: null): AgreementTerminatedEventFilter;
        "AgreementUpdated(address,bytes32,bytes32[])"(agreementClass?: string | null, id?: null, data?: null): AgreementUpdatedEventFilter;
        AgreementUpdated(agreementClass?: string | null, id?: null, data?: null): AgreementUpdatedEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "AuthorizedOperator(address,address)"(operator?: string | null, tokenHolder?: string | null): AuthorizedOperatorEventFilter;
        AuthorizedOperator(operator?: string | null, tokenHolder?: string | null): AuthorizedOperatorEventFilter;
        "Bailout(address,uint256)"(bailoutAccount?: string | null, bailoutAmount?: null): BailoutEventFilter;
        Bailout(bailoutAccount?: string | null, bailoutAmount?: null): BailoutEventFilter;
        "Burned(address,address,uint256,bytes,bytes)"(operator?: string | null, from?: string | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        Burned(operator?: string | null, from?: string | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        "Minted(address,address,uint256,bytes,bytes)"(operator?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        Minted(operator?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        "RevokedOperator(address,address)"(operator?: string | null, tokenHolder?: string | null): RevokedOperatorEventFilter;
        RevokedOperator(operator?: string | null, tokenHolder?: string | null): RevokedOperatorEventFilter;
        "Sent(address,address,address,uint256,bytes,bytes)"(operator?: string | null, from?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        Sent(operator?: string | null, from?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        "TokenDowngraded(address,uint256)"(account?: string | null, amount?: null): TokenDowngradedEventFilter;
        TokenDowngraded(account?: string | null, amount?: null): TokenDowngradedEventFilter;
        "TokenUpgraded(address,uint256)"(account?: string | null, amount?: null): TokenUpgradedEventFilter;
        TokenUpgraded(account?: string | null, amount?: null): TokenUpgradedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createAgreement(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;
        downgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAccountActiveAgreements(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementData(agreementClass: string, id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementStateSlot(agreementClass: string, account: string, slotId: BigNumberish, dataLength: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(underlyingToken: string, underlyingDecimals: BigNumberish, n: string, s: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isAccountCritical(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountCriticalNow(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolvent(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolventNow(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;
        makeLiquidationPayoutsV2(id: BytesLike, liquidationTypeData: BytesLike, liquidatorAccount: string, useDefaultRewardAccount: boolean, targetAccount: string, rewardAmount: BigNumberish, targetAccountBalanceDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        operationApprove(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operationDowngrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operationTransferFrom(account: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operationUpgrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        realtimeBalanceOf(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOfNow(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfApproveFor(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfBurn(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfMint(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfTransferFrom(sender: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        settleBalance(account: string, delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        terminateAgreement(id: BytesLike, dataLength: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAll(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateAgreementData(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateAgreementStateSlot(account: string, slotId: BigNumberish, slotData: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(to: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createAgreement(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        downgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAccountActiveAgreements(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementData(agreementClass: string, id: BytesLike, dataLength: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementStateSlot(agreementClass: string, account: string, slotId: BigNumberish, dataLength: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(underlyingToken: string, underlyingDecimals: BigNumberish, n: string, s: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isAccountCritical(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountCriticalNow(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolvent(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolventNow(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeLiquidationPayoutsV2(id: BytesLike, liquidationTypeData: BytesLike, liquidatorAccount: string, useDefaultRewardAccount: boolean, targetAccount: string, rewardAmount: BigNumberish, targetAccountBalanceDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operationApprove(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operationDowngrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operationTransferFrom(account: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operationUpgrade(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        realtimeBalanceOf(account: string, timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOfNow(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfApproveFor(account: string, spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfBurn(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfMint(account: string, amount: BigNumberish, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfTransferFrom(sender: string, spender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        settleBalance(account: string, delta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        terminateAgreement(id: BytesLike, dataLength: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAll(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementData(id: BytesLike, data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementStateSlot(account: string, slotId: BigNumberish, slotData: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(to: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
