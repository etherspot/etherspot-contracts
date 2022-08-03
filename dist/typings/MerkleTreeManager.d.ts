import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MerkleTreeManagerInterface extends utils.Interface {
    functions: {
        "count()": FunctionFragment;
        "root()": FunctionFragment;
        "tree()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "count", values?: undefined): string;
    encodeFunctionData(functionFragment: "root", values?: undefined): string;
    encodeFunctionData(functionFragment: "tree", values?: undefined): string;
    decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tree", data: BytesLike): Result;
    events: {};
}
export interface MerkleTreeManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkleTreeManagerInterface;
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
        count(overrides?: CallOverrides): Promise<[BigNumber]>;
        root(overrides?: CallOverrides): Promise<[string]>;
        tree(overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
    };
    count(overrides?: CallOverrides): Promise<BigNumber>;
    root(overrides?: CallOverrides): Promise<string>;
    tree(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        count(overrides?: CallOverrides): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<string>;
        tree(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        count(overrides?: CallOverrides): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        tree(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        count(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tree(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
