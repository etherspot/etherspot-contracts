import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISponsorVaultInterface extends utils.Interface {
    functions: {
        "deposit(address,uint256)": FunctionFragment;
        "reimburseLiquidityFees(address,uint256,address)": FunctionFragment;
        "reimburseRelayerFees(uint32,address,uint256)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reimburseLiquidityFees", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "reimburseRelayerFees", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reimburseLiquidityFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reimburseRelayerFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ISponsorVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISponsorVaultInterface;
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
        deposit(_token: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reimburseLiquidityFees(token: string, amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reimburseRelayerFees(originDomain: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    deposit(_token: string, _amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reimburseLiquidityFees(token: string, amount: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reimburseRelayerFees(originDomain: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(_token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        reimburseLiquidityFees(token: string, amount: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        reimburseRelayerFees(originDomain: BigNumberish, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(token: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(_token: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reimburseLiquidityFees(token: string, amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reimburseRelayerFees(originDomain: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(_token: string, _amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reimburseLiquidityFees(token: string, amount: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reimburseRelayerFees(originDomain: BigNumberish, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(token: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
