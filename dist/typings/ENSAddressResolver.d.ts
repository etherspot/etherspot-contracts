import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSAddressResolverInterface extends utils.Interface {
    functions: {
        "addr(bytes32)": FunctionFragment;
        "setAddr(bytes32,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setAddr", values: [BytesLike, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
    events: {
        "AddrChanged(bytes32,address)": EventFragment;
        "AddressChanged(bytes32,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
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
export interface ENSAddressResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSAddressResolverInterface;
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
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: CallOverrides): Promise<void>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddrChanged(bytes32,address)"(node?: BytesLike | null, addr?: null): AddrChangedEventFilter;
        AddrChanged(node?: BytesLike | null, addr?: null): AddrChangedEventFilter;
        "AddressChanged(bytes32,uint256,bytes)"(node?: BytesLike | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
        AddressChanged(node?: BytesLike | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
    };
    estimateGas: {
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "addr(bytes32,uint256)"(node: BytesLike, coinType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "setAddr(bytes32,uint256,bytes)"(node: BytesLike, coinType: BigNumberish, addr_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setAddr(bytes32,address)"(node: BytesLike, addr_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
