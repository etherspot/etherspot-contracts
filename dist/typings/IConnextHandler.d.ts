import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type TokenIdStruct = {
    domain: BigNumberish;
    id: BytesLike;
};
export declare type TokenIdStructOutput = [number, string] & {
    domain: number;
    id: string;
};
export declare type CallParamsStruct = {
    to: string;
    callData: BytesLike;
    originDomain: BigNumberish;
    destinationDomain: BigNumberish;
    recovery: string;
    callback: string;
    callbackFee: BigNumberish;
    forceSlow: boolean;
    receiveLocal: boolean;
};
export declare type CallParamsStructOutput = [
    string,
    string,
    number,
    number,
    string,
    string,
    BigNumber,
    boolean,
    boolean
] & {
    to: string;
    callData: string;
    originDomain: number;
    destinationDomain: number;
    recovery: string;
    callback: string;
    callbackFee: BigNumber;
    forceSlow: boolean;
    receiveLocal: boolean;
};
export declare type ExecuteArgsStruct = {
    params: CallParamsStruct;
    local: string;
    routers: string[];
    routerSignatures: BytesLike[];
    relayerFee: BigNumberish;
    amount: BigNumberish;
    nonce: BigNumberish;
    originSender: string;
};
export declare type ExecuteArgsStructOutput = [
    CallParamsStructOutput,
    string,
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    string
] & {
    params: CallParamsStructOutput;
    local: string;
    routers: string[];
    routerSignatures: string[];
    relayerFee: BigNumber;
    amount: BigNumber;
    nonce: BigNumber;
    originSender: string;
};
export declare type SwapStruct = {
    initialA: BigNumberish;
    futureA: BigNumberish;
    initialATime: BigNumberish;
    futureATime: BigNumberish;
    swapFee: BigNumberish;
    adminFee: BigNumberish;
    lpToken: string;
    pooledTokens: string[];
    tokenPrecisionMultipliers: BigNumberish[];
    balances: BigNumberish[];
};
export declare type SwapStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string[],
    BigNumber[],
    BigNumber[]
] & {
    initialA: BigNumber;
    futureA: BigNumber;
    initialATime: BigNumber;
    futureATime: BigNumber;
    swapFee: BigNumber;
    adminFee: BigNumber;
    lpToken: string;
    pooledTokens: string[];
    tokenPrecisionMultipliers: BigNumber[];
    balances: BigNumber[];
};
export declare type XCallArgsStruct = {
    params: CallParamsStruct;
    transactingAssetId: string;
    amount: BigNumberish;
    relayerFee: BigNumberish;
};
export declare type XCallArgsStructOutput = [
    CallParamsStructOutput,
    string,
    BigNumber,
    BigNumber
] & {
    params: CallParamsStructOutput;
    transactingAssetId: string;
    amount: BigNumber;
    relayerFee: BigNumber;
};
export interface IConnextHandlerInterface extends utils.Interface {
    functions: {
        "LIQUIDITY_FEE_DENOMINATOR()": FunctionFragment;
        "LIQUIDITY_FEE_NUMERATOR()": FunctionFragment;
        "acceptProposedOwner()": FunctionFragment;
        "acceptProposedRouterOwner(address)": FunctionFragment;
        "addRelayer(address)": FunctionFragment;
        "addRouterLiquidity(uint256,address)": FunctionFragment;
        "addRouterLiquidityFor(uint256,address,address)": FunctionFragment;
        "addStableSwapPool((uint32,bytes32),address)": FunctionFragment;
        "addSwapLiquidity(bytes32,uint256[],uint256,uint256)": FunctionFragment;
        "adoptedToCanonical(address)": FunctionFragment;
        "adoptedToLocalPools(bytes32)": FunctionFragment;
        "approvedAssets(bytes32)": FunctionFragment;
        "approvedRelayers(address)": FunctionFragment;
        "assetOwnershipRenounced()": FunctionFragment;
        "assetOwnershipTimestamp()": FunctionFragment;
        "bumpTransfer(bytes32)": FunctionFragment;
        "calculateRemoveSwapLiquidity(bytes32,uint256)": FunctionFragment;
        "calculateRemoveSwapLiquidityOneToken(bytes32,uint256,uint8)": FunctionFragment;
        "calculateSwap(bytes32,uint8,uint8,uint256)": FunctionFragment;
        "calculateSwapTokenAmount(bytes32,uint256[],bool)": FunctionFragment;
        "canonicalToAdopted(bytes32)": FunctionFragment;
        "claim(address,bytes32[])": FunctionFragment;
        "delay()": FunctionFragment;
        "domain()": FunctionFragment;
        "enrollRemoteRouter(uint32,bytes32)": FunctionFragment;
        "execute(((address,bytes,uint32,uint32,address,address,uint256,bool,bool),address,address[],bytes[],uint256,uint256,uint256,address))": FunctionFragment;
        "executor()": FunctionFragment;
        "getProposedRouterOwner(address)": FunctionFragment;
        "getProposedRouterOwnerTimestamp(address)": FunctionFragment;
        "getRouterApproval(address)": FunctionFragment;
        "getRouterOwner(address)": FunctionFragment;
        "getRouterRecipient(address)": FunctionFragment;
        "getSwapA(bytes32)": FunctionFragment;
        "getSwapAPrecise(bytes32)": FunctionFragment;
        "getSwapAdminBalance(bytes32,uint256)": FunctionFragment;
        "getSwapLPToken(bytes32)": FunctionFragment;
        "getSwapStorage(bytes32)": FunctionFragment;
        "getSwapToken(bytes32,uint8)": FunctionFragment;
        "getSwapTokenBalance(bytes32,uint8)": FunctionFragment;
        "getSwapTokenIndex(bytes32,address)": FunctionFragment;
        "getSwapVirtualPrice(bytes32)": FunctionFragment;
        "handle(uint32,uint32,bytes32,bytes)": FunctionFragment;
        "initializeSwap(bytes32,address[],uint8[],string,string,uint256,uint256,uint256,address)": FunctionFragment;
        "initiateClaim(uint32,address,bytes32[])": FunctionFragment;
        "isAssetOwnershipRenounced()": FunctionFragment;
        "isRouterOwnershipRenounced()": FunctionFragment;
        "maxRoutersPerTransfer()": FunctionFragment;
        "nonce()": FunctionFragment;
        "promiseRouter()": FunctionFragment;
        "proposeAssetOwnershipRenunciation()": FunctionFragment;
        "proposeNewOwner(address)": FunctionFragment;
        "proposeRouterOwner(address,address)": FunctionFragment;
        "proposeRouterOwnershipRenunciation()": FunctionFragment;
        "proposed()": FunctionFragment;
        "proposedOwnableOwner()": FunctionFragment;
        "proposedTimestamp()": FunctionFragment;
        "rampA(bytes32,uint256,uint256)": FunctionFragment;
        "reconciledTransfers(bytes32)": FunctionFragment;
        "relayerFeeRouer()": FunctionFragment;
        "relayerFeeRouter()": FunctionFragment;
        "relayerFees(bytes32)": FunctionFragment;
        "remotes(uint32)": FunctionFragment;
        "removeAssetId(bytes32,address)": FunctionFragment;
        "removeRelayer(address)": FunctionFragment;
        "removeRouter(address)": FunctionFragment;
        "removeRouterLiquidity(uint256,address,address)": FunctionFragment;
        "removeRouterLiquidityFor(uint256,address,address,address)": FunctionFragment;
        "removeSwapLiquidity(bytes32,uint256,uint256[],uint256)": FunctionFragment;
        "removeSwapLiquidityImbalance(bytes32,uint256[],uint256,uint256)": FunctionFragment;
        "removeSwapLiquidityOneToken(bytes32,uint256,uint8,uint256,uint256)": FunctionFragment;
        "renounceAssetOwnership()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRouterOwnership()": FunctionFragment;
        "renounced()": FunctionFragment;
        "routedTransfers(bytes32)": FunctionFragment;
        "routerBalances(address,address)": FunctionFragment;
        "routerOwnershipRenounced()": FunctionFragment;
        "routerOwnershipTimestamp()": FunctionFragment;
        "setExecutor(address)": FunctionFragment;
        "setLiquidityFeeNumerator(uint256)": FunctionFragment;
        "setMaxRoutersPerTransfer(uint256)": FunctionFragment;
        "setPromiseRouter(address)": FunctionFragment;
        "setRelayerFeeRouter(address)": FunctionFragment;
        "setRouterRecipient(address,address)": FunctionFragment;
        "setSponsorVault(address)": FunctionFragment;
        "setSwapAdminFee(bytes32,uint256)": FunctionFragment;
        "setSwapFee(bytes32,uint256)": FunctionFragment;
        "setTokenRegistry(address)": FunctionFragment;
        "setWrapper(address)": FunctionFragment;
        "setXAppConnectionManager(address)": FunctionFragment;
        "setupAsset((uint32,bytes32),address,address)": FunctionFragment;
        "setupRouter(address,address,address)": FunctionFragment;
        "sponsorVault()": FunctionFragment;
        "stopRampA(bytes32)": FunctionFragment;
        "swap(bytes32,uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
        "swapExact(bytes32,uint256,address,address,uint256,uint256)": FunctionFragment;
        "tokenRegistry()": FunctionFragment;
        "transferRelayer(bytes32)": FunctionFragment;
        "withdrawSwapAdminFees(bytes32)": FunctionFragment;
        "wrapper()": FunctionFragment;
        "xAppConnectionManager()": FunctionFragment;
        "xcall(((address,bytes,uint32,uint32,address,address,uint256,bool,bool),address,uint256,uint256))": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "LIQUIDITY_FEE_DENOMINATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "LIQUIDITY_FEE_NUMERATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptProposedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptProposedRouterOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "addRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "addRouterLiquidity", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "addRouterLiquidityFor", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "addStableSwapPool", values: [TokenIdStruct, string]): string;
    encodeFunctionData(functionFragment: "addSwapLiquidity", values: [BytesLike, BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "adoptedToCanonical", values: [string]): string;
    encodeFunctionData(functionFragment: "adoptedToLocalPools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "approvedAssets", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "approvedRelayers", values: [string]): string;
    encodeFunctionData(functionFragment: "assetOwnershipRenounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetOwnershipTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "bumpTransfer", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "calculateRemoveSwapLiquidity", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateRemoveSwapLiquidityOneToken", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwap", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwapTokenAmount", values: [BytesLike, BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: "canonicalToAdopted", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "claim", values: [string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "delay", values?: undefined): string;
    encodeFunctionData(functionFragment: "domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "enrollRemoteRouter", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "execute", values: [ExecuteArgsStruct]): string;
    encodeFunctionData(functionFragment: "executor", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposedRouterOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "getProposedRouterOwnerTimestamp", values: [string]): string;
    encodeFunctionData(functionFragment: "getRouterApproval", values: [string]): string;
    encodeFunctionData(functionFragment: "getRouterOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "getRouterRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "getSwapA", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSwapAPrecise", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSwapAdminBalance", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSwapLPToken", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSwapStorage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getSwapToken", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSwapTokenBalance", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSwapTokenIndex", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "getSwapVirtualPrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "handle", values: [BigNumberish, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initializeSwap", values: [
        BytesLike,
        string[],
        BigNumberish[],
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "initiateClaim", values: [BigNumberish, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "isAssetOwnershipRenounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRouterOwnershipRenounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxRoutersPerTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "promiseRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeAssetOwnershipRenunciation", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "proposeRouterOwner", values: [string, string]): string;
    encodeFunctionData(functionFragment: "proposeRouterOwnershipRenunciation", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposedOwnableOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposedTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "rampA", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reconciledTransfers", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "relayerFeeRouer", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayerFeeRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayerFees", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "remotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAssetId", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "removeRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "removeRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "removeRouterLiquidity", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "removeRouterLiquidityFor", values: [BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "removeSwapLiquidity", values: [BytesLike, BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeSwapLiquidityImbalance", values: [BytesLike, BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeSwapLiquidityOneToken", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceAssetOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRouterOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "routedTransfers", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "routerBalances", values: [string, string]): string;
    encodeFunctionData(functionFragment: "routerOwnershipRenounced", values?: undefined): string;
    encodeFunctionData(functionFragment: "routerOwnershipTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "setExecutor", values: [string]): string;
    encodeFunctionData(functionFragment: "setLiquidityFeeNumerator", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxRoutersPerTransfer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPromiseRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "setRelayerFeeRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "setRouterRecipient", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setSponsorVault", values: [string]): string;
    encodeFunctionData(functionFragment: "setSwapAdminFee", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSwapFee", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTokenRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "setWrapper", values: [string]): string;
    encodeFunctionData(functionFragment: "setXAppConnectionManager", values: [string]): string;
    encodeFunctionData(functionFragment: "setupAsset", values: [TokenIdStruct, string, string]): string;
    encodeFunctionData(functionFragment: "setupRouter", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "sponsorVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopRampA", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExact", values: [
        BytesLike,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "tokenRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferRelayer", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawSwapAdminFees", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "wrapper", values?: undefined): string;
    encodeFunctionData(functionFragment: "xAppConnectionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "xcall", values: [XCallArgsStruct]): string;
    decodeFunctionResult(functionFragment: "LIQUIDITY_FEE_DENOMINATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LIQUIDITY_FEE_NUMERATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptProposedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptProposedRouterOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRouterLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRouterLiquidityFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStableSwapPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSwapLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adoptedToCanonical", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adoptedToLocalPools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedRelayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetOwnershipRenounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetOwnershipTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bumpTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRemoveSwapLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRemoveSwapLiquidityOneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwapTokenAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canonicalToAdopted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enrollRemoteRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposedRouterOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposedRouterOwnerTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouterApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouterOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRouterRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapAPrecise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapAdminBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapLPToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapTokenIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapVirtualPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiateClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetOwnershipRenounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRouterOwnershipRenounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRoutersPerTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "promiseRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeAssetOwnershipRenunciation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeRouterOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeRouterOwnershipRenunciation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedOwnableOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rampA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reconciledTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerFeeRouer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerFeeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAssetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRouterLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRouterLiquidityFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSwapLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSwapLiquidityImbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSwapLiquidityOneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAssetOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRouterOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routedTransfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerOwnershipRenounced", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerOwnershipTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidityFeeNumerator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxRoutersPerTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPromiseRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRelayerFeeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRouterRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSponsorVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSwapAdminFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSwapFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setXAppConnectionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setupAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setupRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sponsorVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopRampA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawSwapAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xAppConnectionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xcall", data: BytesLike): Result;
    events: {};
}
export interface IConnextHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConnextHandlerInterface;
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
        LIQUIDITY_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        LIQUIDITY_FEE_NUMERATOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        acceptProposedRouterOwner(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addRouterLiquidity(_amount: BigNumberish, _local: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addRouterLiquidityFor(_amount: BigNumberish, _local: string, _router: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addStableSwapPool(_canonical: TokenIdStruct, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addSwapLiquidity(canonicalId: BytesLike, amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adoptedToCanonical(_adopted: string, overrides?: CallOverrides): Promise<[TokenIdStructOutput]>;
        adoptedToLocalPools(_adopted: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        approvedAssets(_asset: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        approvedRelayers(_relayer: string, overrides?: CallOverrides): Promise<[boolean]>;
        assetOwnershipRenounced(overrides?: CallOverrides): Promise<[boolean]>;
        assetOwnershipTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        bumpTransfer(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateRemoveSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        calculateRemoveSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateSwap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateSwapTokenAmount(canonicalId: BytesLike, amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        canonicalToAdopted(_canonicalId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        claim(_recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delay(overrides?: CallOverrides): Promise<[BigNumber]>;
        domain(overrides?: CallOverrides): Promise<[BigNumber]>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        execute(_args: ExecuteArgsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executor(overrides?: CallOverrides): Promise<[string]>;
        getProposedRouterOwner(_router: string, overrides?: CallOverrides): Promise<[string]>;
        getProposedRouterOwnerTimestamp(_router: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRouterApproval(_router: string, overrides?: CallOverrides): Promise<[boolean]>;
        getRouterOwner(_router: string, overrides?: CallOverrides): Promise<[string]>;
        getRouterRecipient(_router: string, overrides?: CallOverrides): Promise<[string]>;
        getSwapA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSwapAPrecise(canonicalId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSwapAdminBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSwapLPToken(canonicalId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getSwapStorage(canonicalId: BytesLike, overrides?: CallOverrides): Promise<[SwapStructOutput]>;
        getSwapToken(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getSwapTokenBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSwapTokenIndex(canonicalId: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<[number]>;
        getSwapVirtualPrice(canonicalId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeSwap(_canonicalId: BytesLike, _pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, _a: BigNumberish, _fee: BigNumberish, _adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initiateClaim(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isAssetOwnershipRenounced(overrides?: CallOverrides): Promise<[boolean]>;
        isRouterOwnershipRenounced(overrides?: CallOverrides): Promise<[boolean]>;
        maxRoutersPerTransfer(overrides?: CallOverrides): Promise<[BigNumber]>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        promiseRouter(overrides?: CallOverrides): Promise<[string]>;
        proposeAssetOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposeRouterOwner(router: string, proposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposeRouterOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        proposed(overrides?: CallOverrides): Promise<[string]>;
        proposedOwnableOwner(overrides?: CallOverrides): Promise<[string]>;
        proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        rampA(canonicalId: BytesLike, futureA: BigNumberish, futureTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reconciledTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        relayerFeeRouer(overrides?: CallOverrides): Promise<[string]>;
        relayerFeeRouter(overrides?: CallOverrides): Promise<[string]>;
        relayerFees(_transferId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        remotes(_domain: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        removeAssetId(_canonicalId: BytesLike, _adoptedAssetId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeRouter(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeRouterLiquidity(_amount: BigNumberish, _local: string, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeRouterLiquidityFor(_amount: BigNumberish, _local: string, _to: string, _router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSwapLiquidityImbalance(canonicalId: BytesLike, amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceAssetOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRouterOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounced(overrides?: CallOverrides): Promise<[boolean]>;
        routedTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<[string[]]>;
        routerBalances(_router: string, _asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        routerOwnershipRenounced(overrides?: CallOverrides): Promise<[boolean]>;
        routerOwnershipTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        setExecutor(_executor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidityFeeNumerator(_numerator: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxRoutersPerTransfer(_newMaxRouters: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPromiseRouter(_promiseRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRelayerFeeRouter(_relayerFeeRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRouterRecipient(router: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSponsorVault(_sponsorVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSwapAdminFee(canonicalId: BytesLike, newAdminFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSwapFee(canonicalId: BytesLike, newSwapFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTokenRegistry(_tokenRegistry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWrapper(_wrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupAsset(_canonical: TokenIdStruct, _adoptedAssetId: string, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setupRouter(router: string, owner: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sponsorVault(overrides?: CallOverrides): Promise<[string]>;
        stopRampA(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExact(canonicalId: BytesLike, amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenRegistry(overrides?: CallOverrides): Promise<[string]>;
        transferRelayer(_transferId: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        withdrawSwapAdminFees(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrapper(overrides?: CallOverrides): Promise<[string]>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<[string]>;
        xcall(_args: XCallArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    LIQUIDITY_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
    LIQUIDITY_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;
    acceptProposedOwner(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    acceptProposedRouterOwner(router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addRelayer(_relayer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addRouterLiquidity(_amount: BigNumberish, _local: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addRouterLiquidityFor(_amount: BigNumberish, _local: string, _router: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addStableSwapPool(_canonical: TokenIdStruct, _stableSwapPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addSwapLiquidity(canonicalId: BytesLike, amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adoptedToCanonical(_adopted: string, overrides?: CallOverrides): Promise<TokenIdStructOutput>;
    adoptedToLocalPools(_adopted: BytesLike, overrides?: CallOverrides): Promise<string>;
    approvedAssets(_asset: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    approvedRelayers(_relayer: string, overrides?: CallOverrides): Promise<boolean>;
    assetOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
    assetOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    bumpTransfer(_transferId: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateRemoveSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    calculateRemoveSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwapTokenAmount(canonicalId: BytesLike, amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    canonicalToAdopted(_canonicalId: BytesLike, overrides?: CallOverrides): Promise<string>;
    claim(_recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delay(overrides?: CallOverrides): Promise<BigNumber>;
    domain(overrides?: CallOverrides): Promise<BigNumber>;
    enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    execute(_args: ExecuteArgsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executor(overrides?: CallOverrides): Promise<string>;
    getProposedRouterOwner(_router: string, overrides?: CallOverrides): Promise<string>;
    getProposedRouterOwnerTimestamp(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
    getRouterApproval(_router: string, overrides?: CallOverrides): Promise<boolean>;
    getRouterOwner(_router: string, overrides?: CallOverrides): Promise<string>;
    getRouterRecipient(_router: string, overrides?: CallOverrides): Promise<string>;
    getSwapA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapAPrecise(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapAdminBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapLPToken(canonicalId: BytesLike, overrides?: CallOverrides): Promise<string>;
    getSwapStorage(canonicalId: BytesLike, overrides?: CallOverrides): Promise<SwapStructOutput>;
    getSwapToken(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getSwapTokenBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSwapTokenIndex(canonicalId: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<number>;
    getSwapVirtualPrice(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeSwap(_canonicalId: BytesLike, _pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, _a: BigNumberish, _fee: BigNumberish, _adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initiateClaim(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isAssetOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
    isRouterOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
    maxRoutersPerTransfer(overrides?: CallOverrides): Promise<BigNumber>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    promiseRouter(overrides?: CallOverrides): Promise<string>;
    proposeAssetOwnershipRenunciation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposeRouterOwner(router: string, proposed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposeRouterOwnershipRenunciation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    proposed(overrides?: CallOverrides): Promise<string>;
    proposedOwnableOwner(overrides?: CallOverrides): Promise<string>;
    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    rampA(canonicalId: BytesLike, futureA: BigNumberish, futureTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reconciledTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    relayerFeeRouer(overrides?: CallOverrides): Promise<string>;
    relayerFeeRouter(overrides?: CallOverrides): Promise<string>;
    relayerFees(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    remotes(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
    removeAssetId(_canonicalId: BytesLike, _adoptedAssetId: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeRelayer(_relayer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeRouter(router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeRouterLiquidity(_amount: BigNumberish, _local: string, _to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeRouterLiquidityFor(_amount: BigNumberish, _local: string, _to: string, _router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSwapLiquidityImbalance(canonicalId: BytesLike, amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceAssetOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRouterOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounced(overrides?: CallOverrides): Promise<boolean>;
    routedTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<string[]>;
    routerBalances(_router: string, _asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    routerOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
    routerOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    setExecutor(_executor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidityFeeNumerator(_numerator: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxRoutersPerTransfer(_newMaxRouters: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPromiseRouter(_promiseRouter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRelayerFeeRouter(_relayerFeeRouter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRouterRecipient(router: string, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSponsorVault(_sponsorVault: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSwapAdminFee(canonicalId: BytesLike, newAdminFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSwapFee(canonicalId: BytesLike, newSwapFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTokenRegistry(_tokenRegistry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWrapper(_wrapper: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupAsset(_canonical: TokenIdStruct, _adoptedAssetId: string, _stableSwapPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setupRouter(router: string, owner: string, recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sponsorVault(overrides?: CallOverrides): Promise<string>;
    stopRampA(canonicalId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExact(canonicalId: BytesLike, amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenRegistry(overrides?: CallOverrides): Promise<string>;
    transferRelayer(_transferId: BytesLike, overrides?: CallOverrides): Promise<string>;
    withdrawSwapAdminFees(canonicalId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrapper(overrides?: CallOverrides): Promise<string>;
    xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
    xcall(_args: XCallArgsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        LIQUIDITY_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        LIQUIDITY_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;
        acceptProposedOwner(overrides?: CallOverrides): Promise<void>;
        acceptProposedRouterOwner(router: string, overrides?: CallOverrides): Promise<void>;
        addRelayer(_relayer: string, overrides?: CallOverrides): Promise<void>;
        addRouterLiquidity(_amount: BigNumberish, _local: string, overrides?: CallOverrides): Promise<void>;
        addRouterLiquidityFor(_amount: BigNumberish, _local: string, _router: string, overrides?: CallOverrides): Promise<void>;
        addStableSwapPool(_canonical: TokenIdStruct, _stableSwapPool: string, overrides?: CallOverrides): Promise<void>;
        addSwapLiquidity(canonicalId: BytesLike, amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        adoptedToCanonical(_adopted: string, overrides?: CallOverrides): Promise<TokenIdStructOutput>;
        adoptedToLocalPools(_adopted: BytesLike, overrides?: CallOverrides): Promise<string>;
        approvedAssets(_asset: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        approvedRelayers(_relayer: string, overrides?: CallOverrides): Promise<boolean>;
        assetOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
        assetOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        bumpTransfer(_transferId: BytesLike, overrides?: CallOverrides): Promise<void>;
        calculateRemoveSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        calculateRemoveSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapTokenAmount(canonicalId: BytesLike, amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        canonicalToAdopted(_canonicalId: BytesLike, overrides?: CallOverrides): Promise<string>;
        claim(_recipient: string, _transferIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        domain(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: CallOverrides): Promise<void>;
        execute(_args: ExecuteArgsStruct, overrides?: CallOverrides): Promise<string>;
        executor(overrides?: CallOverrides): Promise<string>;
        getProposedRouterOwner(_router: string, overrides?: CallOverrides): Promise<string>;
        getProposedRouterOwnerTimestamp(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRouterApproval(_router: string, overrides?: CallOverrides): Promise<boolean>;
        getRouterOwner(_router: string, overrides?: CallOverrides): Promise<string>;
        getRouterRecipient(_router: string, overrides?: CallOverrides): Promise<string>;
        getSwapA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapAPrecise(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapAdminBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapLPToken(canonicalId: BytesLike, overrides?: CallOverrides): Promise<string>;
        getSwapStorage(canonicalId: BytesLike, overrides?: CallOverrides): Promise<SwapStructOutput>;
        getSwapToken(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getSwapTokenBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapTokenIndex(canonicalId: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<number>;
        getSwapVirtualPrice(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: CallOverrides): Promise<void>;
        initializeSwap(_canonicalId: BytesLike, _pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, _a: BigNumberish, _fee: BigNumberish, _adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: CallOverrides): Promise<void>;
        initiateClaim(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: CallOverrides): Promise<void>;
        isAssetOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
        isRouterOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
        maxRoutersPerTransfer(overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        promiseRouter(overrides?: CallOverrides): Promise<string>;
        proposeAssetOwnershipRenunciation(overrides?: CallOverrides): Promise<void>;
        proposeNewOwner(newlyProposed: string, overrides?: CallOverrides): Promise<void>;
        proposeRouterOwner(router: string, proposed: string, overrides?: CallOverrides): Promise<void>;
        proposeRouterOwnershipRenunciation(overrides?: CallOverrides): Promise<void>;
        proposed(overrides?: CallOverrides): Promise<string>;
        proposedOwnableOwner(overrides?: CallOverrides): Promise<string>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        rampA(canonicalId: BytesLike, futureA: BigNumberish, futureTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        reconciledTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        relayerFeeRouer(overrides?: CallOverrides): Promise<string>;
        relayerFeeRouter(overrides?: CallOverrides): Promise<string>;
        relayerFees(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        remotes(_domain: BigNumberish, overrides?: CallOverrides): Promise<string>;
        removeAssetId(_canonicalId: BytesLike, _adoptedAssetId: string, overrides?: CallOverrides): Promise<void>;
        removeRelayer(_relayer: string, overrides?: CallOverrides): Promise<void>;
        removeRouter(router: string, overrides?: CallOverrides): Promise<void>;
        removeRouterLiquidity(_amount: BigNumberish, _local: string, _to: string, overrides?: CallOverrides): Promise<void>;
        removeRouterLiquidityFor(_amount: BigNumberish, _local: string, _to: string, _router: string, overrides?: CallOverrides): Promise<void>;
        removeSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        removeSwapLiquidityImbalance(canonicalId: BytesLike, amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceAssetOwnership(overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRouterOwnership(overrides?: CallOverrides): Promise<void>;
        renounced(overrides?: CallOverrides): Promise<boolean>;
        routedTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<string[]>;
        routerBalances(_router: string, _asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        routerOwnershipRenounced(overrides?: CallOverrides): Promise<boolean>;
        routerOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        setExecutor(_executor: string, overrides?: CallOverrides): Promise<void>;
        setLiquidityFeeNumerator(_numerator: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxRoutersPerTransfer(_newMaxRouters: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPromiseRouter(_promiseRouter: string, overrides?: CallOverrides): Promise<void>;
        setRelayerFeeRouter(_relayerFeeRouter: string, overrides?: CallOverrides): Promise<void>;
        setRouterRecipient(router: string, recipient: string, overrides?: CallOverrides): Promise<void>;
        setSponsorVault(_sponsorVault: string, overrides?: CallOverrides): Promise<void>;
        setSwapAdminFee(canonicalId: BytesLike, newAdminFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSwapFee(canonicalId: BytesLike, newSwapFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTokenRegistry(_tokenRegistry: string, overrides?: CallOverrides): Promise<void>;
        setWrapper(_wrapper: string, overrides?: CallOverrides): Promise<void>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: CallOverrides): Promise<void>;
        setupAsset(_canonical: TokenIdStruct, _adoptedAssetId: string, _stableSwapPool: string, overrides?: CallOverrides): Promise<void>;
        setupRouter(router: string, owner: string, recipient: string, overrides?: CallOverrides): Promise<void>;
        sponsorVault(overrides?: CallOverrides): Promise<string>;
        stopRampA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<void>;
        swap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swapExact(canonicalId: BytesLike, amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        tokenRegistry(overrides?: CallOverrides): Promise<string>;
        transferRelayer(_transferId: BytesLike, overrides?: CallOverrides): Promise<string>;
        withdrawSwapAdminFees(canonicalId: BytesLike, overrides?: CallOverrides): Promise<void>;
        wrapper(overrides?: CallOverrides): Promise<string>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<string>;
        xcall(_args: XCallArgsStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        LIQUIDITY_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;
        LIQUIDITY_FEE_NUMERATOR(overrides?: CallOverrides): Promise<BigNumber>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        acceptProposedRouterOwner(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addRouterLiquidity(_amount: BigNumberish, _local: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addRouterLiquidityFor(_amount: BigNumberish, _local: string, _router: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addStableSwapPool(_canonical: TokenIdStruct, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addSwapLiquidity(canonicalId: BytesLike, amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adoptedToCanonical(_adopted: string, overrides?: CallOverrides): Promise<BigNumber>;
        adoptedToLocalPools(_adopted: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        approvedAssets(_asset: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        approvedRelayers(_relayer: string, overrides?: CallOverrides): Promise<BigNumber>;
        assetOwnershipRenounced(overrides?: CallOverrides): Promise<BigNumber>;
        assetOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        bumpTransfer(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateRemoveSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRemoveSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapTokenAmount(canonicalId: BytesLike, amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        canonicalToAdopted(_canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        claim(_recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delay(overrides?: CallOverrides): Promise<BigNumber>;
        domain(overrides?: CallOverrides): Promise<BigNumber>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        execute(_args: ExecuteArgsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executor(overrides?: CallOverrides): Promise<BigNumber>;
        getProposedRouterOwner(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getProposedRouterOwnerTimestamp(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRouterApproval(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRouterOwner(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRouterRecipient(_router: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapAPrecise(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapAdminBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapLPToken(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapStorage(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapToken(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapTokenBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapTokenIndex(canonicalId: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSwapVirtualPrice(canonicalId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeSwap(_canonicalId: BytesLike, _pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, _a: BigNumberish, _fee: BigNumberish, _adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initiateClaim(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isAssetOwnershipRenounced(overrides?: CallOverrides): Promise<BigNumber>;
        isRouterOwnershipRenounced(overrides?: CallOverrides): Promise<BigNumber>;
        maxRoutersPerTransfer(overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        promiseRouter(overrides?: CallOverrides): Promise<BigNumber>;
        proposeAssetOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposeRouterOwner(router: string, proposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposeRouterOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        proposed(overrides?: CallOverrides): Promise<BigNumber>;
        proposedOwnableOwner(overrides?: CallOverrides): Promise<BigNumber>;
        proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        rampA(canonicalId: BytesLike, futureA: BigNumberish, futureTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reconciledTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        relayerFeeRouer(overrides?: CallOverrides): Promise<BigNumber>;
        relayerFeeRouter(overrides?: CallOverrides): Promise<BigNumber>;
        relayerFees(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        remotes(_domain: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeAssetId(_canonicalId: BytesLike, _adoptedAssetId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeRouter(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeRouterLiquidity(_amount: BigNumberish, _local: string, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeRouterLiquidityFor(_amount: BigNumberish, _local: string, _to: string, _router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSwapLiquidityImbalance(canonicalId: BytesLike, amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceAssetOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRouterOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounced(overrides?: CallOverrides): Promise<BigNumber>;
        routedTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        routerBalances(_router: string, _asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        routerOwnershipRenounced(overrides?: CallOverrides): Promise<BigNumber>;
        routerOwnershipTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        setExecutor(_executor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidityFeeNumerator(_numerator: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxRoutersPerTransfer(_newMaxRouters: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPromiseRouter(_promiseRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRelayerFeeRouter(_relayerFeeRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRouterRecipient(router: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSponsorVault(_sponsorVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSwapAdminFee(canonicalId: BytesLike, newAdminFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSwapFee(canonicalId: BytesLike, newSwapFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTokenRegistry(_tokenRegistry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWrapper(_wrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupAsset(_canonical: TokenIdStruct, _adoptedAssetId: string, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setupRouter(router: string, owner: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sponsorVault(overrides?: CallOverrides): Promise<BigNumber>;
        stopRampA(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExact(canonicalId: BytesLike, amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        transferRelayer(_transferId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawSwapAdminFees(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrapper(overrides?: CallOverrides): Promise<BigNumber>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<BigNumber>;
        xcall(_args: XCallArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        LIQUIDITY_FEE_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LIQUIDITY_FEE_NUMERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptProposedOwner(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        acceptProposedRouterOwner(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addRouterLiquidity(_amount: BigNumberish, _local: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addRouterLiquidityFor(_amount: BigNumberish, _local: string, _router: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addStableSwapPool(_canonical: TokenIdStruct, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addSwapLiquidity(canonicalId: BytesLike, amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adoptedToCanonical(_adopted: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adoptedToLocalPools(_adopted: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvedAssets(_asset: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approvedRelayers(_relayer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetOwnershipRenounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetOwnershipTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bumpTransfer(_transferId: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateRemoveSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRemoveSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwapTokenAmount(canonicalId: BytesLike, amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canonicalToAdopted(_canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(_recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enrollRemoteRouter(_domain: BigNumberish, _router: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        execute(_args: ExecuteArgsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposedRouterOwner(_router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposedRouterOwnerTimestamp(_router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouterApproval(_router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouterOwner(_router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRouterRecipient(_router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapA(canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapAPrecise(canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapAdminBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapLPToken(canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapStorage(canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapToken(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapTokenBalance(canonicalId: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapTokenIndex(canonicalId: BytesLike, tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapVirtualPrice(canonicalId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handle(_origin: BigNumberish, _nonce: BigNumberish, _sender: BytesLike, _message: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeSwap(_canonicalId: BytesLike, _pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, _a: BigNumberish, _fee: BigNumberish, _adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initiateClaim(_domain: BigNumberish, _recipient: string, _transferIds: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isAssetOwnershipRenounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isRouterOwnershipRenounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRoutersPerTransfer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        promiseRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposeAssetOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposeNewOwner(newlyProposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposeRouterOwner(router: string, proposed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposeRouterOwnershipRenunciation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposedOwnableOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rampA(canonicalId: BytesLike, futureA: BigNumberish, futureTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reconciledTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayerFeeRouer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayerFeeRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayerFees(_transferId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remotes(_domain: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAssetId(_canonicalId: BytesLike, _adoptedAssetId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeRelayer(_relayer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeRouter(router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeRouterLiquidity(_amount: BigNumberish, _local: string, _to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeRouterLiquidityFor(_amount: BigNumberish, _local: string, _to: string, _router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSwapLiquidity(canonicalId: BytesLike, amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSwapLiquidityImbalance(canonicalId: BytesLike, amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeSwapLiquidityOneToken(canonicalId: BytesLike, tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceAssetOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRouterOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routedTransfers(_transferId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routerBalances(_router: string, _asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routerOwnershipRenounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        routerOwnershipTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setExecutor(_executor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidityFeeNumerator(_numerator: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRoutersPerTransfer(_newMaxRouters: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPromiseRouter(_promiseRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRelayerFeeRouter(_relayerFeeRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRouterRecipient(router: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSponsorVault(_sponsorVault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSwapAdminFee(canonicalId: BytesLike, newAdminFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSwapFee(canonicalId: BytesLike, newSwapFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTokenRegistry(_tokenRegistry: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWrapper(_wrapper: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setXAppConnectionManager(_xAppConnectionManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupAsset(_canonical: TokenIdStruct, _adoptedAssetId: string, _stableSwapPool: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setupRouter(router: string, owner: string, recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sponsorVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopRampA(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swap(canonicalId: BytesLike, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExact(canonicalId: BytesLike, amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferRelayer(_transferId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawSwapAdminFees(canonicalId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        xAppConnectionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        xcall(_args: XCallArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
