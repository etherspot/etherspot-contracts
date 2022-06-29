import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type OperationStruct = {
    operationType: BigNumberish;
    target: string;
    data: BytesLike;
};
export declare type OperationStructOutput = [number, string, string] & {
    operationType: number;
    target: string;
    data: string;
};
export declare type ContextStruct = {
    appLevel: BigNumberish;
    callType: BigNumberish;
    timestamp: BigNumberish;
    msgSender: string;
    agreementSelector: BytesLike;
    userData: BytesLike;
    appAllowanceGranted: BigNumberish;
    appAllowanceWanted: BigNumberish;
    appAllowanceUsed: BigNumberish;
    appAddress: string;
    appAllowanceToken: string;
};
export declare type ContextStructOutput = [
    number,
    number,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    appLevel: number;
    callType: number;
    timestamp: BigNumber;
    msgSender: string;
    agreementSelector: string;
    userData: string;
    appAllowanceGranted: BigNumber;
    appAllowanceWanted: BigNumber;
    appAllowanceUsed: BigNumber;
    appAddress: string;
    appAllowanceToken: string;
};
export interface ISuperfluidInterface extends utils.Interface {
    functions: {
        "addToAgreementClassesBitmap(uint256,bytes32)": FunctionFragment;
        "allowCompositeApp(address)": FunctionFragment;
        "appCallbackPop(bytes,int256)": FunctionFragment;
        "appCallbackPush(bytes,address,uint256,int256,address)": FunctionFragment;
        "batchCall((uint32,address,bytes)[])": FunctionFragment;
        "callAgreement(address,bytes,bytes)": FunctionFragment;
        "callAgreementWithContext(address,bytes,bytes,bytes)": FunctionFragment;
        "callAppAction(address,bytes)": FunctionFragment;
        "callAppActionWithContext(address,bytes,bytes)": FunctionFragment;
        "callAppAfterCallback(address,bytes,bool,bytes)": FunctionFragment;
        "callAppBeforeCallback(address,bytes,bool,bytes)": FunctionFragment;
        "ctxUseAllowance(bytes,uint256,int256)": FunctionFragment;
        "decodeCtx(bytes)": FunctionFragment;
        "forwardBatchCall((uint32,address,bytes)[])": FunctionFragment;
        "getAgreementClass(bytes32)": FunctionFragment;
        "getAppLevel(address)": FunctionFragment;
        "getAppManifest(address)": FunctionFragment;
        "getGovernance()": FunctionFragment;
        "getNow()": FunctionFragment;
        "getSuperTokenFactory()": FunctionFragment;
        "getSuperTokenFactoryLogic()": FunctionFragment;
        "isAgreementClassListed(address)": FunctionFragment;
        "isAgreementTypeListed(bytes32)": FunctionFragment;
        "isApp(address)": FunctionFragment;
        "isAppJailed(address)": FunctionFragment;
        "isCompositeAppAllowed(address,address)": FunctionFragment;
        "isCtxValid(bytes)": FunctionFragment;
        "jailApp(bytes,address,uint256)": FunctionFragment;
        "mapAgreementClasses(uint256)": FunctionFragment;
        "registerAgreementClass(address)": FunctionFragment;
        "registerApp(uint256)": FunctionFragment;
        "registerAppByFactory(address,uint256)": FunctionFragment;
        "registerAppWithKey(uint256,string)": FunctionFragment;
        "removeFromAgreementClassesBitmap(uint256,bytes32)": FunctionFragment;
        "replaceGovernance(address)": FunctionFragment;
        "updateAgreementClass(address)": FunctionFragment;
        "updateSuperTokenFactory(address)": FunctionFragment;
        "updateSuperTokenLogic(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addToAgreementClassesBitmap", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "allowCompositeApp", values: [string]): string;
    encodeFunctionData(functionFragment: "appCallbackPop", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "appCallbackPush", values: [BytesLike, string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "batchCall", values: [OperationStruct[]]): string;
    encodeFunctionData(functionFragment: "callAgreement", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "callAgreementWithContext", values: [string, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "callAppAction", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "callAppActionWithContext", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "callAppAfterCallback", values: [string, BytesLike, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "callAppBeforeCallback", values: [string, BytesLike, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "ctxUseAllowance", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decodeCtx", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "forwardBatchCall", values: [OperationStruct[]]): string;
    encodeFunctionData(functionFragment: "getAgreementClass", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAppLevel", values: [string]): string;
    encodeFunctionData(functionFragment: "getAppManifest", values: [string]): string;
    encodeFunctionData(functionFragment: "getGovernance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNow", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenFactoryLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAgreementClassListed", values: [string]): string;
    encodeFunctionData(functionFragment: "isAgreementTypeListed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isApp", values: [string]): string;
    encodeFunctionData(functionFragment: "isAppJailed", values: [string]): string;
    encodeFunctionData(functionFragment: "isCompositeAppAllowed", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isCtxValid", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "jailApp", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mapAgreementClasses", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "registerAgreementClass", values: [string]): string;
    encodeFunctionData(functionFragment: "registerApp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "registerAppByFactory", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "registerAppWithKey", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "removeFromAgreementClassesBitmap", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "replaceGovernance", values: [string]): string;
    encodeFunctionData(functionFragment: "updateAgreementClass", values: [string]): string;
    encodeFunctionData(functionFragment: "updateSuperTokenFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "updateSuperTokenLogic", values: [string]): string;
    decodeFunctionResult(functionFragment: "addToAgreementClassesBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCompositeApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appCallbackPop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appCallbackPush", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAgreementWithContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppActionWithContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAfterCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppBeforeCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ctxUseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forwardBatchCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAppLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAppManifest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenFactoryLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAgreementClassListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAgreementTypeListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAppJailed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCompositeAppAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCtxValid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jailApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapAgreementClasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAppByFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAppWithKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromAgreementClassesBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSuperTokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSuperTokenLogic", data: BytesLike): Result;
    events: {
        "AgreementClassRegistered(bytes32,address)": EventFragment;
        "AgreementClassUpdated(bytes32,address)": EventFragment;
        "AppRegistered(address)": EventFragment;
        "GovernanceReplaced(address,address)": EventFragment;
        "Jail(address,uint256)": EventFragment;
        "SuperTokenFactoryUpdated(address)": EventFragment;
        "SuperTokenLogicUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgreementClassRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementClassUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AppRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GovernanceReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Jail"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenFactoryUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenLogicUpdated"): EventFragment;
}
export declare type AgreementClassRegisteredEvent = TypedEvent<[
    string,
    string
], {
    agreementType: string;
    code: string;
}>;
export declare type AgreementClassRegisteredEventFilter = TypedEventFilter<AgreementClassRegisteredEvent>;
export declare type AgreementClassUpdatedEvent = TypedEvent<[
    string,
    string
], {
    agreementType: string;
    code: string;
}>;
export declare type AgreementClassUpdatedEventFilter = TypedEventFilter<AgreementClassUpdatedEvent>;
export declare type AppRegisteredEvent = TypedEvent<[string], {
    app: string;
}>;
export declare type AppRegisteredEventFilter = TypedEventFilter<AppRegisteredEvent>;
export declare type GovernanceReplacedEvent = TypedEvent<[
    string,
    string
], {
    oldGov: string;
    newGov: string;
}>;
export declare type GovernanceReplacedEventFilter = TypedEventFilter<GovernanceReplacedEvent>;
export declare type JailEvent = TypedEvent<[
    string,
    BigNumber
], {
    app: string;
    reason: BigNumber;
}>;
export declare type JailEventFilter = TypedEventFilter<JailEvent>;
export declare type SuperTokenFactoryUpdatedEvent = TypedEvent<[
    string
], {
    newFactory: string;
}>;
export declare type SuperTokenFactoryUpdatedEventFilter = TypedEventFilter<SuperTokenFactoryUpdatedEvent>;
export declare type SuperTokenLogicUpdatedEvent = TypedEvent<[
    string,
    string
], {
    token: string;
    code: string;
}>;
export declare type SuperTokenLogicUpdatedEventFilter = TypedEventFilter<SuperTokenLogicUpdatedEvent>;
export interface ISuperfluid extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperfluidInterface;
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
        addToAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            newBitmap: BigNumber;
        }>;
        allowCompositeApp(targetApp: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        appCallbackPop(ctx: BytesLike, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        appCallbackPush(ctx: BytesLike, app: string, appAllowanceGranted: BigNumberish, appAllowanceUsed: BigNumberish, appAllowanceToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAgreement(agreementClass: string, callData: BytesLike, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAgreementWithContext(agreementClass: string, callData: BytesLike, userData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAppAction(app: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAppActionWithContext(app: string, callData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAppAfterCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callAppBeforeCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ctxUseAllowance(ctx: BytesLike, appAllowanceWantedMore: BigNumberish, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decodeCtx(ctx: BytesLike, overrides?: CallOverrides): Promise<[ContextStructOutput] & {
            context: ContextStructOutput;
        }>;
        forwardBatchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAgreementClass(agreementType: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            agreementClass: string;
        }>;
        getAppLevel(app: string, overrides?: CallOverrides): Promise<[number] & {
            appLevel: number;
        }>;
        getAppManifest(app: string, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            isSuperApp: boolean;
            isJailed: boolean;
            noopMask: BigNumber;
        }>;
        getGovernance(overrides?: CallOverrides): Promise<[string] & {
            governance: string;
        }>;
        getNow(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<[string] & {
            factory: string;
        }>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<[string] & {
            logic: string;
        }>;
        isAgreementClassListed(agreementClass: string, overrides?: CallOverrides): Promise<[boolean] & {
            yes: boolean;
        }>;
        isAgreementTypeListed(agreementType: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            yes: boolean;
        }>;
        isApp(app: string, overrides?: CallOverrides): Promise<[boolean]>;
        isAppJailed(app: string, overrides?: CallOverrides): Promise<[boolean] & {
            isJail: boolean;
        }>;
        isCompositeAppAllowed(app: string, targetApp: string, overrides?: CallOverrides): Promise<[boolean] & {
            isAppAllowed: boolean;
        }>;
        isCtxValid(ctx: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        jailApp(ctx: BytesLike, app: string, reason: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mapAgreementClasses(bitmap: BigNumberish, overrides?: CallOverrides): Promise<[string[]] & {
            agreementClasses: string[];
        }>;
        registerAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerApp(configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAppByFactory(app: string, configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAppWithKey(configWord: BigNumberish, registrationKey: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeFromAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            newBitmap: BigNumber;
        }>;
        replaceGovernance(newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateSuperTokenFactory(newFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateSuperTokenLogic(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addToAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    allowCompositeApp(targetApp: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    appCallbackPop(ctx: BytesLike, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    appCallbackPush(ctx: BytesLike, app: string, appAllowanceGranted: BigNumberish, appAllowanceUsed: BigNumberish, appAllowanceToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchCall(operations: OperationStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAgreement(agreementClass: string, callData: BytesLike, userData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAgreementWithContext(agreementClass: string, callData: BytesLike, userData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAppAction(app: string, callData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAppActionWithContext(app: string, callData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAppAfterCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callAppBeforeCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ctxUseAllowance(ctx: BytesLike, appAllowanceWantedMore: BigNumberish, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decodeCtx(ctx: BytesLike, overrides?: CallOverrides): Promise<ContextStructOutput>;
    forwardBatchCall(operations: OperationStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAgreementClass(agreementType: BytesLike, overrides?: CallOverrides): Promise<string>;
    getAppLevel(app: string, overrides?: CallOverrides): Promise<number>;
    getAppManifest(app: string, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber
    ] & {
        isSuperApp: boolean;
        isJailed: boolean;
        noopMask: BigNumber;
    }>;
    getGovernance(overrides?: CallOverrides): Promise<string>;
    getNow(overrides?: CallOverrides): Promise<BigNumber>;
    getSuperTokenFactory(overrides?: CallOverrides): Promise<string>;
    getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<string>;
    isAgreementClassListed(agreementClass: string, overrides?: CallOverrides): Promise<boolean>;
    isAgreementTypeListed(agreementType: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isApp(app: string, overrides?: CallOverrides): Promise<boolean>;
    isAppJailed(app: string, overrides?: CallOverrides): Promise<boolean>;
    isCompositeAppAllowed(app: string, targetApp: string, overrides?: CallOverrides): Promise<boolean>;
    isCtxValid(ctx: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    jailApp(ctx: BytesLike, app: string, reason: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mapAgreementClasses(bitmap: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    registerAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerApp(configWord: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAppByFactory(app: string, configWord: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAppWithKey(configWord: BigNumberish, registrationKey: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeFromAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    replaceGovernance(newGov: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateSuperTokenFactory(newFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateSuperTokenLogic(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        allowCompositeApp(targetApp: string, overrides?: CallOverrides): Promise<void>;
        appCallbackPop(ctx: BytesLike, appAllowanceUsedDelta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        appCallbackPush(ctx: BytesLike, app: string, appAllowanceGranted: BigNumberish, appAllowanceUsed: BigNumberish, appAllowanceToken: string, overrides?: CallOverrides): Promise<string>;
        batchCall(operations: OperationStruct[], overrides?: CallOverrides): Promise<void>;
        callAgreement(agreementClass: string, callData: BytesLike, userData: BytesLike, overrides?: CallOverrides): Promise<string>;
        callAgreementWithContext(agreementClass: string, callData: BytesLike, userData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            newCtx: string;
            returnedData: string;
        }>;
        callAppAction(app: string, callData: BytesLike, overrides?: CallOverrides): Promise<string>;
        callAppActionWithContext(app: string, callData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        callAppAfterCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        callAppBeforeCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        ctxUseAllowance(ctx: BytesLike, appAllowanceWantedMore: BigNumberish, appAllowanceUsedDelta: BigNumberish, overrides?: CallOverrides): Promise<string>;
        decodeCtx(ctx: BytesLike, overrides?: CallOverrides): Promise<ContextStructOutput>;
        forwardBatchCall(operations: OperationStruct[], overrides?: CallOverrides): Promise<void>;
        getAgreementClass(agreementType: BytesLike, overrides?: CallOverrides): Promise<string>;
        getAppLevel(app: string, overrides?: CallOverrides): Promise<number>;
        getAppManifest(app: string, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            isSuperApp: boolean;
            isJailed: boolean;
            noopMask: BigNumber;
        }>;
        getGovernance(overrides?: CallOverrides): Promise<string>;
        getNow(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<string>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<string>;
        isAgreementClassListed(agreementClass: string, overrides?: CallOverrides): Promise<boolean>;
        isAgreementTypeListed(agreementType: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isApp(app: string, overrides?: CallOverrides): Promise<boolean>;
        isAppJailed(app: string, overrides?: CallOverrides): Promise<boolean>;
        isCompositeAppAllowed(app: string, targetApp: string, overrides?: CallOverrides): Promise<boolean>;
        isCtxValid(ctx: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        jailApp(ctx: BytesLike, app: string, reason: BigNumberish, overrides?: CallOverrides): Promise<string>;
        mapAgreementClasses(bitmap: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        registerAgreementClass(agreementClassLogic: string, overrides?: CallOverrides): Promise<void>;
        registerApp(configWord: BigNumberish, overrides?: CallOverrides): Promise<void>;
        registerAppByFactory(app: string, configWord: BigNumberish, overrides?: CallOverrides): Promise<void>;
        registerAppWithKey(configWord: BigNumberish, registrationKey: string, overrides?: CallOverrides): Promise<void>;
        removeFromAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        replaceGovernance(newGov: string, overrides?: CallOverrides): Promise<void>;
        updateAgreementClass(agreementClassLogic: string, overrides?: CallOverrides): Promise<void>;
        updateSuperTokenFactory(newFactory: string, overrides?: CallOverrides): Promise<void>;
        updateSuperTokenLogic(token: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgreementClassRegistered(bytes32,address)"(agreementType?: null, code?: null): AgreementClassRegisteredEventFilter;
        AgreementClassRegistered(agreementType?: null, code?: null): AgreementClassRegisteredEventFilter;
        "AgreementClassUpdated(bytes32,address)"(agreementType?: null, code?: null): AgreementClassUpdatedEventFilter;
        AgreementClassUpdated(agreementType?: null, code?: null): AgreementClassUpdatedEventFilter;
        "AppRegistered(address)"(app?: string | null): AppRegisteredEventFilter;
        AppRegistered(app?: string | null): AppRegisteredEventFilter;
        "GovernanceReplaced(address,address)"(oldGov?: null, newGov?: null): GovernanceReplacedEventFilter;
        GovernanceReplaced(oldGov?: null, newGov?: null): GovernanceReplacedEventFilter;
        "Jail(address,uint256)"(app?: string | null, reason?: null): JailEventFilter;
        Jail(app?: string | null, reason?: null): JailEventFilter;
        "SuperTokenFactoryUpdated(address)"(newFactory?: null): SuperTokenFactoryUpdatedEventFilter;
        SuperTokenFactoryUpdated(newFactory?: null): SuperTokenFactoryUpdatedEventFilter;
        "SuperTokenLogicUpdated(address,address)"(token?: string | null, code?: null): SuperTokenLogicUpdatedEventFilter;
        SuperTokenLogicUpdated(token?: string | null, code?: null): SuperTokenLogicUpdatedEventFilter;
    };
    estimateGas: {
        addToAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        allowCompositeApp(targetApp: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        appCallbackPop(ctx: BytesLike, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        appCallbackPush(ctx: BytesLike, app: string, appAllowanceGranted: BigNumberish, appAllowanceUsed: BigNumberish, appAllowanceToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAgreement(agreementClass: string, callData: BytesLike, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAgreementWithContext(agreementClass: string, callData: BytesLike, userData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAppAction(app: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAppActionWithContext(app: string, callData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAppAfterCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callAppBeforeCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ctxUseAllowance(ctx: BytesLike, appAllowanceWantedMore: BigNumberish, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decodeCtx(ctx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        forwardBatchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAgreementClass(agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAppLevel(app: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAppManifest(app: string, overrides?: CallOverrides): Promise<BigNumber>;
        getGovernance(overrides?: CallOverrides): Promise<BigNumber>;
        getNow(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<BigNumber>;
        isAgreementClassListed(agreementClass: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAgreementTypeListed(agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isApp(app: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAppJailed(app: string, overrides?: CallOverrides): Promise<BigNumber>;
        isCompositeAppAllowed(app: string, targetApp: string, overrides?: CallOverrides): Promise<BigNumber>;
        isCtxValid(ctx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        jailApp(ctx: BytesLike, app: string, reason: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mapAgreementClasses(bitmap: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerApp(configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAppByFactory(app: string, configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAppWithKey(configWord: BigNumberish, registrationKey: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeFromAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        replaceGovernance(newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateSuperTokenFactory(newFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateSuperTokenLogic(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowCompositeApp(targetApp: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        appCallbackPop(ctx: BytesLike, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        appCallbackPush(ctx: BytesLike, app: string, appAllowanceGranted: BigNumberish, appAllowanceUsed: BigNumberish, appAllowanceToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAgreement(agreementClass: string, callData: BytesLike, userData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAgreementWithContext(agreementClass: string, callData: BytesLike, userData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAppAction(app: string, callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAppActionWithContext(app: string, callData: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAppAfterCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callAppBeforeCallback(app: string, callData: BytesLike, isTermination: boolean, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ctxUseAllowance(ctx: BytesLike, appAllowanceWantedMore: BigNumberish, appAllowanceUsedDelta: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decodeCtx(ctx: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forwardBatchCall(operations: OperationStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAgreementClass(agreementType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAppLevel(app: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAppManifest(app: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAgreementClassListed(agreementClass: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAgreementTypeListed(agreementType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApp(app: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAppJailed(app: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCompositeAppAllowed(app: string, targetApp: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCtxValid(ctx: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        jailApp(ctx: BytesLike, app: string, reason: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mapAgreementClasses(bitmap: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerApp(configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAppByFactory(app: string, configWord: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAppWithKey(configWord: BigNumberish, registrationKey: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeFromAgreementClassesBitmap(bitmap: BigNumberish, agreementType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        replaceGovernance(newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementClass(agreementClassLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateSuperTokenFactory(newFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateSuperTokenLogic(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
