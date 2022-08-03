import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISuperAppInterface extends utils.Interface {
    functions: {
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "afterAgreementCreated", values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "afterAgreementTerminated", values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "afterAgreementUpdated", values: [string, string, BytesLike, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "beforeAgreementCreated", values: [string, string, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "beforeAgreementTerminated", values: [string, string, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "beforeAgreementUpdated", values: [string, string, BytesLike, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    events: {};
}
export interface ISuperApp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperAppInterface;
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
        afterAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
        beforeAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
        beforeAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
    };
    afterAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        afterAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        beforeAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        afterAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        afterAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, cbdata: BytesLike, ctx: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(superToken: string, agreementClass: string, agreementId: BytesLike, agreementData: BytesLike, ctx: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
