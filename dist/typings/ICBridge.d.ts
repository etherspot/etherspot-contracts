import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICBridgeInterface extends utils.Interface {
    functions: {
        "relay(bytes,bytes[],address[],uint256[])": FunctionFragment;
        "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
        "sendNative(address,uint256,uint64,uint64,uint32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "relay", values: [BytesLike, BytesLike[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "send", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "sendNative", values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNative", data: BytesLike): Result;
    events: {};
}
export interface ICBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICBridgeInterface;
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
        relay(_relayRequest: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    relay(_relayRequest: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    send(_receiver: string, _token: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sendNative(_receiver: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        relay(_relayRequest: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        relay(_relayRequest: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        relay(_relayRequest: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChinId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
