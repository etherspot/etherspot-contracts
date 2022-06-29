import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type SubNodeRegistrationStruct = {
    account: string;
    node: BytesLike;
    label: BytesLike;
};
export declare type SubNodeRegistrationStructOutput = [string, string, string] & {
    account: string;
    node: string;
    label: string;
};
export interface ENSControllerInterface extends utils.Interface {
    functions: {
        "addGuardian(address)": FunctionFragment;
        "addr(bytes32)": FunctionFragment;
        "c_0ffe16b4(bytes8)": FunctionFragment;
        "c_1b54acf3(bytes8)": FunctionFragment;
        "c_3880312f(bytes8)": FunctionFragment;
        "c_4f849103(bytes8)": FunctionFragment;
        "c_53f45729(bytes8)": FunctionFragment;
        "c_a2a35eda(bytes8)": FunctionFragment;
        "c_ac93193e(bytes8)": FunctionFragment;
        "c_c0828b70(bytes8)": FunctionFragment;
        "c_d5c463c2(bytes8)": FunctionFragment;
        "c_e1dc25ce(bytes8)": FunctionFragment;
        "c_false0ffe16b4(bytes8)": FunctionFragment;
        "c_false1b54acf3(bytes8)": FunctionFragment;
        "c_false3880312f(bytes8)": FunctionFragment;
        "c_false4f849103(bytes8)": FunctionFragment;
        "c_false53f45729(bytes8)": FunctionFragment;
        "c_falsea2a35eda(bytes8)": FunctionFragment;
        "c_falseac93193e(bytes8)": FunctionFragment;
        "c_falsec0828b70(bytes8)": FunctionFragment;
        "c_falsed5c463c2(bytes8)": FunctionFragment;
        "c_falsee1dc25ce(bytes8)": FunctionFragment;
        "c_true0ffe16b4(bytes8)": FunctionFragment;
        "c_true1b54acf3(bytes8)": FunctionFragment;
        "c_true3880312f(bytes8)": FunctionFragment;
        "c_true4f849103(bytes8)": FunctionFragment;
        "c_true53f45729(bytes8)": FunctionFragment;
        "c_truea2a35eda(bytes8)": FunctionFragment;
        "c_trueac93193e(bytes8)": FunctionFragment;
        "c_truec0828b70(bytes8)": FunctionFragment;
        "c_trued5c463c2(bytes8)": FunctionFragment;
        "c_truee1dc25ce(bytes8)": FunctionFragment;
        "chainId()": FunctionFragment;
        "gateway()": FunctionFragment;
        "hashSubNodeRegistration((address,bytes32,bytes32))": FunctionFragment;
        "initialize(address,address[],address)": FunctionFragment;
        "isGuardian(address)": FunctionFragment;
        "isInitialized()": FunctionFragment;
        "name(bytes32)": FunctionFragment;
        "nodeOwners(bytes32)": FunctionFragment;
        "pubkey(bytes32)": FunctionFragment;
        "registerSubNode(bytes32,bytes32,bytes)": FunctionFragment;
        "registry()": FunctionFragment;
        "releaseNode(bytes32)": FunctionFragment;
        "removeGuardian(address)": FunctionFragment;
        "setAddr(bytes32,uint256,bytes)": FunctionFragment;
        "setName(bytes32,string)": FunctionFragment;
        "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
        "setRegistry(address)": FunctionFragment;
        "setText(bytes32,string,string)": FunctionFragment;
        "submitNode(bytes32)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "syncAddr(bytes32)": FunctionFragment;
        "text(bytes32,string)": FunctionFragment;
        "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
        "verifyNode(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_4f849103", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_53f45729", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_a2a35eda", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_ac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_c0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_d5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_e1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false4f849103", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false53f45729", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsea2a35eda", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsed5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falsee1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true0ffe16b4", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true1b54acf3", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true3880312f", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true4f849103", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true53f45729", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truea2a35eda", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truec0828b70", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trued5c463c2", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_truee1dc25ce", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashSubNodeRegistration", values: [SubNodeRegistrationStruct]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string[], string]): string;
    encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "nodeOwners", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "registerSubNode", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "releaseNode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "removeGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "setAddr", values: [BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setName", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setPubkey", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "setText", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "submitNode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "syncAddr", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "text", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "verifyGuardianSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifyNode", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "addGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_4f849103", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_53f45729", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_a2a35eda", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_ac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_c0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_d5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_e1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false4f849103", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false53f45729", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsea2a35eda", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsed5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falsee1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true0ffe16b4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true1b54acf3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true3880312f", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true4f849103", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true53f45729", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truea2a35eda", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truec0828b70", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trued5c463c2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_truee1dc25ce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashSubNodeRegistration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nodeOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerSubNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitNode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "syncAddr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyGuardianSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyNode", data: BytesLike): Result;
    events: {
        "AddrChanged(bytes32,address)": EventFragment;
        "AddressChanged(bytes32,uint256,bytes)": EventFragment;
        "GuardianAdded(address,address)": EventFragment;
        "GuardianRemoved(address,address)": EventFragment;
        "Initialized(address)": EventFragment;
        "NameChanged(bytes32,string)": EventFragment;
        "NodeReleased(bytes32,address)": EventFragment;
        "NodeSubmitted(bytes32,address)": EventFragment;
        "NodeVerified(bytes32)": EventFragment;
        "PubkeyChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RegistryChanged(address)": EventFragment;
        "TextChanged(bytes32,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeReleased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeSubmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NodeVerified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PubkeyChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegistryChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TextChanged"): EventFragment;
}
export declare type AddrChangedEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    addr: string;
}>;
export declare type AddrChangedEventFilter = TypedEventFilter<AddrChangedEvent>;
export declare type AddressChangedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    node: string;
    coinType: BigNumber;
    newAddress: string;
}>;
export declare type AddressChangedEventFilter = TypedEventFilter<AddressChangedEvent>;
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
export declare type NameChangedEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    name: string;
}>;
export declare type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;
export declare type NodeReleasedEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    owner: string;
}>;
export declare type NodeReleasedEventFilter = TypedEventFilter<NodeReleasedEvent>;
export declare type NodeSubmittedEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    owner: string;
}>;
export declare type NodeSubmittedEventFilter = TypedEventFilter<NodeSubmittedEvent>;
export declare type NodeVerifiedEvent = TypedEvent<[string], {
    node: string;
}>;
export declare type NodeVerifiedEventFilter = TypedEventFilter<NodeVerifiedEvent>;
export declare type PubkeyChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    node: string;
    x: string;
    y: string;
}>;
export declare type PubkeyChangedEventFilter = TypedEventFilter<PubkeyChangedEvent>;
export declare type RegistryChangedEvent = TypedEvent<[string], {
    registry: string;
}>;
export declare type RegistryChangedEventFilter = TypedEventFilter<RegistryChangedEvent>;
export declare type TextChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    node: string;
    indexedKey: string;
    key: string;
}>;
export declare type TextChangedEventFilter = TypedEventFilter<TextChangedEvent>;
export interface ENSController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSControllerInterface;
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
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_a2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_false53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        hashSubNodeRegistration(subNodeRegistration: SubNodeRegistrationStruct, overrides?: CallOverrides): Promise<[string]>;
        initialize(registry_: string, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;
        isInitialized(overrides?: CallOverrides): Promise<[boolean]>;
        name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            x: string;
            y: string;
        }>;
        registerSubNode(node: BytesLike, label: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registry(overrides?: CallOverrides): Promise<[string]>;
        releaseNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRegistry(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        syncAddr(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<[string]>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        verifyNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<string>;
    c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_a2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_false53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    gateway(overrides?: CallOverrides): Promise<string>;
    hashSubNodeRegistration(subNodeRegistration: SubNodeRegistrationStruct, overrides?: CallOverrides): Promise<string>;
    initialize(registry_: string, guardians_: string[], gateway_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
    isInitialized(overrides?: CallOverrides): Promise<boolean>;
    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        x: string;
        y: string;
    }>;
    registerSubNode(node: BytesLike, label: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registry(overrides?: CallOverrides): Promise<string>;
    releaseNode(node: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeGuardian(guardian: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setName(node: BytesLike, name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRegistry(registry_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitNode(node: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    syncAddr(node: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
    verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    verifyNode(node: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<string>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_a2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_false53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<string>;
        hashSubNodeRegistration(subNodeRegistration: SubNodeRegistrationStruct, overrides?: CallOverrides): Promise<string>;
        initialize(registry_: string, guardians_: string[], gateway_: string, overrides?: CallOverrides): Promise<void>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;
        isInitialized(overrides?: CallOverrides): Promise<boolean>;
        name(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            x: string;
            y: string;
        }>;
        registerSubNode(node: BytesLike, label: BytesLike, guardianSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        registry(overrides?: CallOverrides): Promise<string>;
        releaseNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;
        removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: CallOverrides): Promise<void>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: CallOverrides): Promise<void>;
        setName(node: BytesLike, name: string, overrides?: CallOverrides): Promise<void>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: CallOverrides): Promise<void>;
        setRegistry(registry_: string, overrides?: CallOverrides): Promise<void>;
        setText(node: BytesLike, key: string, value: string, overrides?: CallOverrides): Promise<void>;
        submitNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        syncAddr(node: BytesLike, overrides?: CallOverrides): Promise<void>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<string>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        verifyNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddrChanged(bytes32,address)"(node?: BytesLike | null, addr?: null): AddrChangedEventFilter;
        AddrChanged(node?: BytesLike | null, addr?: null): AddrChangedEventFilter;
        "AddressChanged(bytes32,uint256,bytes)"(node?: BytesLike | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
        AddressChanged(node?: BytesLike | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
        "GuardianAdded(address,address)"(sender?: null, guardian?: null): GuardianAddedEventFilter;
        GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;
        "GuardianRemoved(address,address)"(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;
        "Initialized(address)"(initializer?: null): InitializedEventFilter;
        Initialized(initializer?: null): InitializedEventFilter;
        "NameChanged(bytes32,string)"(node?: BytesLike | null, name?: null): NameChangedEventFilter;
        NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;
        "NodeReleased(bytes32,address)"(node?: null, owner?: null): NodeReleasedEventFilter;
        NodeReleased(node?: null, owner?: null): NodeReleasedEventFilter;
        "NodeSubmitted(bytes32,address)"(node?: null, owner?: null): NodeSubmittedEventFilter;
        NodeSubmitted(node?: null, owner?: null): NodeSubmittedEventFilter;
        "NodeVerified(bytes32)"(node?: null): NodeVerifiedEventFilter;
        NodeVerified(node?: null): NodeVerifiedEventFilter;
        "PubkeyChanged(bytes32,bytes32,bytes32)"(node?: BytesLike | null, x?: null, y?: null): PubkeyChangedEventFilter;
        PubkeyChanged(node?: BytesLike | null, x?: null, y?: null): PubkeyChangedEventFilter;
        "RegistryChanged(address)"(registry?: null): RegistryChangedEventFilter;
        RegistryChanged(registry?: null): RegistryChangedEventFilter;
        "TextChanged(bytes32,string,string)"(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
        TextChanged(node?: BytesLike | null, indexedKey?: string | null, key?: null): TextChangedEventFilter;
    };
    estimateGas: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_a2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        hashSubNodeRegistration(subNodeRegistration: SubNodeRegistrationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(registry_: string, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        isInitialized(overrides?: CallOverrides): Promise<BigNumber>;
        name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        registerSubNode(node: BytesLike, label: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
        releaseNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRegistry(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        syncAddr(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        verifyNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_a2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_c0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_d5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_e1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsed5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falsee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true0ffe16b4(c__0ffe16b4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true1b54acf3(c__1b54acf3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true3880312f(c__3880312f: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true4f849103(c__4f849103: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true53f45729(c__53f45729: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truea2a35eda(c__a2a35eda: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truec0828b70(c__c0828b70: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trued5c463c2(c__d5c463c2: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_truee1dc25ce(c__e1dc25ce: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashSubNodeRegistration(subNodeRegistration: SubNodeRegistrationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(registry_: string, guardians_: string[], gateway_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isGuardian(guardian: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pubkey(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerSubNode(node: BytesLike, label: BytesLike, guardianSignature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        releaseNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeGuardian(guardian: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setName(node: BytesLike, name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPubkey(node: BytesLike, x: BytesLike, y: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRegistry(registry_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setText(node: BytesLike, key: string, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        syncAddr(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        text(node: BytesLike, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyGuardianSignature(messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyNode(node: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
