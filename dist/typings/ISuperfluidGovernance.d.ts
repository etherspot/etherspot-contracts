import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISuperfluidGovernanceInterface extends utils.Interface {
    functions: {
        "batchUpdateSuperTokenLogic(address,address[])": FunctionFragment;
        "clearConfig(address,address,bytes32)": FunctionFragment;
        "getConfigAsAddress(address,address,bytes32)": FunctionFragment;
        "getConfigAsUint256(address,address,bytes32)": FunctionFragment;
        "registerAgreementClass(address,address)": FunctionFragment;
        "replaceGovernance(address,address)": FunctionFragment;
        "setConfig(address,address,bytes32,address)": FunctionFragment;
        "updateContracts(address,address,address[],address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "batchUpdateSuperTokenLogic", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "clearConfig", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getConfigAsAddress", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getConfigAsUint256", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "registerAgreementClass", values: [string, string]): string;
    encodeFunctionData(functionFragment: "replaceGovernance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "updateContracts", values: [string, string, string[], string]): string;
    decodeFunctionResult(functionFragment: "batchUpdateSuperTokenLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigAsAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigAsUint256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateContracts", data: BytesLike): Result;
    events: {};
}
export interface ISuperfluidGovernance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperfluidGovernanceInterface;
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
        batchUpdateSuperTokenLogic(host: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        clearConfig(host: string, superToken: string, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getConfigAsAddress(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        getConfigAsUint256(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        registerAgreementClass(host: string, agreementClass: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replaceGovernance(host: string, newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setConfig(address,address,bytes32,address)"(host: string, superToken: string, key: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "setConfig(address,address,bytes32,uint256)"(host: string, superToken: string, key: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateContracts(host: string, hostNewLogic: string, agreementClassNewLogics: string[], superTokenFactoryNewLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchUpdateSuperTokenLogic(host: string, tokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    clearConfig(host: string, superToken: string, key: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getConfigAsAddress(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    getConfigAsUint256(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    registerAgreementClass(host: string, agreementClass: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replaceGovernance(host: string, newGov: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setConfig(address,address,bytes32,address)"(host: string, superToken: string, key: BytesLike, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "setConfig(address,address,bytes32,uint256)"(host: string, superToken: string, key: BytesLike, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateContracts(host: string, hostNewLogic: string, agreementClassNewLogics: string[], superTokenFactoryNewLogic: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchUpdateSuperTokenLogic(host: string, tokens: string[], overrides?: CallOverrides): Promise<void>;
        clearConfig(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<void>;
        getConfigAsAddress(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<string>;
        getConfigAsUint256(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(host: string, agreementClass: string, overrides?: CallOverrides): Promise<void>;
        replaceGovernance(host: string, newGov: string, overrides?: CallOverrides): Promise<void>;
        "setConfig(address,address,bytes32,address)"(host: string, superToken: string, key: BytesLike, value: string, overrides?: CallOverrides): Promise<void>;
        "setConfig(address,address,bytes32,uint256)"(host: string, superToken: string, key: BytesLike, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateContracts(host: string, hostNewLogic: string, agreementClassNewLogics: string[], superTokenFactoryNewLogic: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        batchUpdateSuperTokenLogic(host: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        clearConfig(host: string, superToken: string, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getConfigAsAddress(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getConfigAsUint256(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(host: string, agreementClass: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replaceGovernance(host: string, newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setConfig(address,address,bytes32,address)"(host: string, superToken: string, key: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "setConfig(address,address,bytes32,uint256)"(host: string, superToken: string, key: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateContracts(host: string, hostNewLogic: string, agreementClassNewLogics: string[], superTokenFactoryNewLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchUpdateSuperTokenLogic(host: string, tokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        clearConfig(host: string, superToken: string, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getConfigAsAddress(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfigAsUint256(host: string, superToken: string, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAgreementClass(host: string, agreementClass: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replaceGovernance(host: string, newGov: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setConfig(address,address,bytes32,address)"(host: string, superToken: string, key: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "setConfig(address,address,bytes32,uint256)"(host: string, superToken: string, key: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateContracts(host: string, hostNewLogic: string, agreementClassNewLogics: string[], superTokenFactoryNewLogic: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
