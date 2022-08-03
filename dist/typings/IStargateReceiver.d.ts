import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStargateReceiverInterface extends utils.Interface {
    functions: {
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "sgReceive", values: [
        BigNumberish,
        BytesLike,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    events: {};
}
export interface IStargateReceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStargateReceiverInterface;
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
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, payload: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
