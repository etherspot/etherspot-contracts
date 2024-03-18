export declare enum NetworkNames {
    Mainnet = "mainnet",
    Ropsten = "ropsten",
    Rinkeby = "rinkeby",
    Goerli = "goerli",
    Kovan = "kovan",
    Xdai = "xdai",
    Chiado = "chiado",
    Bsc = "bsc",
    BscTest = "bscTest",
    Fantom = "fantom",
    FantomTest = "fantomTest",
    Matic = "matic",
    Mumbai = "mumbai",
    Avalanche = "avalanche",
    Fuji = "fuji",
    Aurora = "aurora",
    AuroraTest = "auroraTest",
    Arbitrum = "arbitrum",
    Optimism = "optimism",
    OptimismKovan = "optimismKovan",
    Moonbeam = "moonbeam",
    Moonbase = "moonbase",
    Fuse = "fuse",
    FuseSparknet = "fuseSparknet",
    Celo = "celo",
    CeloTest = "celoTest",
    OptimismGoerli = "optimismGoerli",
    Neon = "neon",
    NeonDevnet = "neonDevnet",
    ArbitrumNova = "arbitrumNova",
    ArbitrumNitro = "arbitrumNitro",
    BaseGoerli = "baseGoerli",
    OktcTest = "oktcTest",
    OKTC = "oktc",
    KlaytnBaobab = "klaytnBaobab",
    Klaytn = "klaytn",
    Base = "base",
    Mantle = "mantle",
    Linea = "linea",
    Sepolia = "sepolia",
    Coston2 = "coston2",
    Etherspot = "etherspot",
    LocalA = "localA",
    LocalB = "localB",
    LocalH = "localH",
    Flare = "flare",
    Scroll = "scroll",
    BaseSepolia = "baseSepolia"
}
export declare const NETWORK_CONFIGS: {
    [key: string]: {
        chainId: number;
        defaultProviderUrl?: "infura" | string;
        defaultGas?: number;
        defaultGasPrice?: number;
        explorer?: string | {
            address: string;
            transaction: string;
        };
    };
};
export declare enum ContractNames {
    BalancesHelper = "BalancesHelper",
    ENSController = "ENSController",
    ENSHelper = "ENSHelper",
    ENSRegistry = "ENSRegistry",
    ENSReverseRegistrar = "ENSReverseRegistrar",
    ExternalAccountRegistry = "ExternalAccountRegistry",
    Gateway = "Gateway",
    PaymentRegistry = "PaymentRegistry",
    PersonalAccountImplementationV1 = "PersonalAccountImplementationV1",
    PersonalAccountRegistry = "PersonalAccountRegistry",
    WrappedWeiToken = "WrappedWeiToken"
}
