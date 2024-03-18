import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ConnextFacetInterface extends utils.Interface {
    functions: {
        "connextEthTransfer(address,uint256,address,uint32,uint256,uint256)": FunctionFragment;
        "connextTokenTransfer(address,uint256,address,uint32,uint256,uint256)": FunctionFragment;
        "initConnext(address,uint32,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "connextEthTransfer", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "connextTokenTransfer", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "initConnext", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "connextEthTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connextTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initConnext", data: BytesLike): Result;
    events: {
        "ConnextEthSwap(uint32,address,uint256,uint256,bytes32)": EventFragment;
        "ConnextInitialized(address,uint32,address)": EventFragment;
        "ConnextTokenSwap(uint32,address,address,uint256,uint256,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ConnextEthSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnextTokenSwap"): EventFragment;
}
export declare type ConnextEthSwapEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    BigNumber,
    string
], {
    destination: number;
    recipient: string;
    amount: BigNumber;
    relayerFee: BigNumber;
    transferId: string;
}>;
export declare type ConnextEthSwapEventFilter = TypedEventFilter<ConnextEthSwapEvent>;
export declare type ConnextInitializedEvent = TypedEvent<[
    string,
    number,
    string
], {
    connext: string;
    domainId: number;
    weth: string;
}>;
export declare type ConnextInitializedEventFilter = TypedEventFilter<ConnextInitializedEvent>;
export declare type ConnextTokenSwapEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    destination: number;
    recipient: string;
    asset: string;
    amount: BigNumber;
    relayerFee: BigNumber;
    transferId: string;
}>;
export declare type ConnextTokenSwapEventFilter = TypedEventFilter<ConnextTokenSwapEvent>;
export interface ConnextFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConnextFacetInterface;
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
        connextEthTransfer(_destinationUnwrapper: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        connextTokenTransfer(_token: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initConnext(_connext: string, _domainId: BigNumberish, _weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    connextEthTransfer(_destinationUnwrapper: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    connextTokenTransfer(_token: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initConnext(_connext: string, _domainId: BigNumberish, _weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        connextEthTransfer(_destinationUnwrapper: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        connextTokenTransfer(_token: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initConnext(_connext: string, _domainId: BigNumberish, _weth: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ConnextEthSwap(uint32,address,uint256,uint256,bytes32)"(destination?: BigNumberish | null, recipient?: string | null, amount?: null, relayerFee?: null, transferId?: null): ConnextEthSwapEventFilter;
        ConnextEthSwap(destination?: BigNumberish | null, recipient?: string | null, amount?: null, relayerFee?: null, transferId?: null): ConnextEthSwapEventFilter;
        "ConnextInitialized(address,uint32,address)"(connext?: string | null, domainId?: BigNumberish | null, weth?: string | null): ConnextInitializedEventFilter;
        ConnextInitialized(connext?: string | null, domainId?: BigNumberish | null, weth?: string | null): ConnextInitializedEventFilter;
        "ConnextTokenSwap(uint32,address,address,uint256,uint256,bytes32)"(destination?: BigNumberish | null, recipient?: string | null, asset?: string | null, amount?: null, relayerFee?: null, transferId?: null): ConnextTokenSwapEventFilter;
        ConnextTokenSwap(destination?: BigNumberish | null, recipient?: string | null, asset?: string | null, amount?: null, relayerFee?: null, transferId?: null): ConnextTokenSwapEventFilter;
    };
    estimateGas: {
        connextEthTransfer(_destinationUnwrapper: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        connextTokenTransfer(_token: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initConnext(_connext: string, _domainId: BigNumberish, _weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        connextEthTransfer(_destinationUnwrapper: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        connextTokenTransfer(_token: string, _amount: BigNumberish, _recipient: string, _destinationDomain: BigNumberish, _slippage: BigNumberish, _relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initConnext(_connext: string, _domainId: BigNumberish, _weth: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
