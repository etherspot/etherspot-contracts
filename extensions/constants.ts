export enum NetworkNames {
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
  BaseSepolia = 'baseSepolia',
}

export const NETWORK_CONFIGS: {
  [key: string]: {
    chainId: number;
    defaultProviderUrl?: "infura" | string;
    defaultGas?: number;
    defaultGasPrice?: number;
    explorer?:
      | string
      | {
          address: string;
          transaction: string;
        };
  };
} = {
  [NetworkNames.Mainnet]: {
    chainId: 1,
    defaultProviderUrl: "infura",
    explorer: "https://etherscan.io",
  },
  [NetworkNames.Ropsten]: {
    chainId: 3,
    defaultProviderUrl: "infura",
    defaultGasPrice: 1,
    explorer: "https://ropsten.etherscan.io",
  },
  [NetworkNames.Rinkeby]: {
    chainId: 4,
    defaultProviderUrl: "infura",
    defaultGasPrice: 1,
    explorer: "https://rinkeby.etherscan.io",
  },
  [NetworkNames.Goerli]: {
    chainId: 5,
    defaultProviderUrl: "infura",
    defaultGasPrice: 1,
    explorer: "https://goerli.etherscan.io",
  },
  [NetworkNames.Kovan]: {
    chainId: 42,
    defaultProviderUrl: "infura",
    defaultGasPrice: 1,
    explorer: "https://kovan.etherscan.io",
  },
  [NetworkNames.Xdai]: {
    chainId: 100,
    defaultProviderUrl: "https://rpc.xdaichain.com",
    defaultGasPrice: 1,
    explorer: "https://blockscout.com/poa/xdai",
  },
  [NetworkNames.Chiado]: {
    chainId: 10200,
    defaultProviderUrl: "https://rpc.chiadochain.net",
    defaultGasPrice: 1,
    explorer: "https://blockscout.com/gnosis/chiado",
  },
  [NetworkNames.Bsc]: {
    chainId: 56,
    defaultProviderUrl: "https://bsc-dataseed1.binance.org",
    defaultGasPrice: 20,
    explorer: "https://bscscan.com",
  },
  [NetworkNames.BscTest]: {
    chainId: 97,
    defaultProviderUrl: "https://data-seed-prebsc-1-s2.binance.org:8545",
    defaultGasPrice: 20,
    explorer: "https://testnet.bscscan.com",
  },
  [NetworkNames.Fantom]: {
    chainId: 250,
    defaultProviderUrl: "https://rpcapi.fantom.network",
    explorer: "https://ftmscan.com",
  },
  [NetworkNames.FantomTest]: {
    chainId: 4002,
    defaultProviderUrl: "https://rpc.testnet.fantom.network",
    defaultGasPrice: 22,
    explorer: {
      address: "https://explorer.testnet.fantom.network/address",
      transaction: "https://explorer.testnet.fantom.network/transactions",
    },
  },
  [NetworkNames.Matic]: {
    chainId: 137,
    defaultProviderUrl: "https://rpc-mainnet.maticvigil.com",
    explorer: "https://polygonscan.com",
  },
  [NetworkNames.Mumbai]: {
    chainId: 80001,
    defaultProviderUrl: "https://matic-mumbai.chainstacklabs.com",
    defaultGasPrice: 5,
    explorer: "https://mumbai.polygonscan.com",
  },
  [NetworkNames.Avalanche]: {
    chainId: 43114,
    defaultProviderUrl: "https://api.avax.network/ext/bc/C/rpc",
    explorer: "https://snowtrace.io",
  },
  [NetworkNames.Fuji]: {
    chainId: 43113,
    defaultProviderUrl: "https://api.avax-test.network/ext/bc/C/rpc",
    explorer: "https://testnet.snowtrace.io",
    defaultGasPrice: 25,
  },
  [NetworkNames.Aurora]: {
    chainId: 1313161554,
    defaultProviderUrl: "https://mainnet.aurora.dev",
    defaultGasPrice: 3,
  },
  [NetworkNames.AuroraTest]: {
    chainId: 1313161555,
    defaultProviderUrl: "https://testnet.aurora.dev/",
    defaultGasPrice: 3,
  },
  [NetworkNames.Arbitrum]: {
    chainId: 42161,
    defaultProviderUrl: "https://arb1.arbitrum.io/rpc",
    defaultGasPrice: 1,
  },
  [NetworkNames.Optimism]: {
    chainId: 10,
    defaultProviderUrl: "https://mainnet.optimism.io",
    defaultGasPrice: 3,
  },
  [NetworkNames.OptimismKovan]: {
    chainId: 69,
    defaultProviderUrl: "https://kovan.optimism.io",
    defaultGasPrice: 3,
  },
  [NetworkNames.Moonbeam]: {
    chainId: 1284,
    defaultProviderUrl: "https://rpc.api.moonbeam.network",
    defaultGasPrice: 100,
  },
  [NetworkNames.Moonbase]: {
    chainId: 1287,
    defaultProviderUrl: "https://rpc.api.moonbase.moonbeam.network",
    defaultGasPrice: 1,
  },
  [NetworkNames.Celo]: {
    chainId: 42220,
    defaultProviderUrl: "https://forno.celo.org",
    defaultGasPrice: 1,
  },
  [NetworkNames.CeloTest]: {
    chainId: 44787,
    defaultProviderUrl: "https://alfajores-forno.celo-testnet.org",
    defaultGasPrice: 1,
  },
  [NetworkNames.ArbitrumNova]: {
    chainId: 42170,
    defaultProviderUrl: "https://nova.arbitrum.io/rpc",
    defaultGasPrice: 1,
  },
  [NetworkNames.ArbitrumNitro]: {
    chainId: 421613,
    defaultProviderUrl: "https://goerli-rollup-explorer.arbitrum.io",
    defaultGasPrice: 1,
  },
  [NetworkNames.Fuse]: {
    chainId: 122,
    defaultProviderUrl: "https://rpc.fuse.io",
    defaultGasPrice: 1,
  },
  [NetworkNames.FuseSparknet]: {
    chainId: 123,
    defaultProviderUrl: "https://rpc.fusespark.io",
    defaultGasPrice: 1,
  },
  [NetworkNames.OptimismGoerli]: {
    chainId: 420,
    defaultProviderUrl: "https://goerli.optimism.io",
    explorer: "https://goerli-optimism.etherscan.io",
    defaultGasPrice: 3,
  },
  [NetworkNames.Neon]: {
    chainId: 245022934,
    defaultProviderUrl: "https://proxy.mainnet.neonlabs.org/solana",
    explorer: "https://neonscan.org/",
    defaultGasPrice: 1,
  },
  [NetworkNames.NeonDevnet]: {
    chainId: 245022926,
    defaultProviderUrl: "https://proxy.devnet.neonlabs.org/solana",
    defaultGasPrice: 0,
  },
  [NetworkNames.BaseGoerli]: {
    chainId: 84531,
    defaultProviderUrl: "https://goerli.base.org",
    defaultGas: 1,
    explorer: "https://goerli.basescan.org",
  },
  [NetworkNames.OktcTest]: {
    chainId: 65,
    defaultProviderUrl: "https://exchaintestrpc.okex.org",
    defaultGasPrice: 1,
    explorer: "https://www.oklink.com/oktc-test",
  },
  [NetworkNames.OKTC]: {
    chainId: 66,
    defaultProviderUrl: "https://exchainrpc.okex.org",
    explorer: "https://www.okx.com/en-in/explorer/oktc",
    defaultGasPrice: 0.2,
  },
  [NetworkNames.KlaytnBaobab]: {
    chainId: 1001,
    defaultProviderUrl: "https://public-en-baobab.klaytn.net",
    defaultGas: 1,
    explorer: "https://baobab.scope.klaytn.com",
  },
  [NetworkNames.Klaytn]: {
    chainId: 8217,
    defaultProviderUrl: "https://public-en-cypress.klaytn.net",
    explorer: "https://scope.klaytn.com",
    defaultGasPrice: 120,
  },
  [NetworkNames.Base]: {
    chainId: 8453,
    defaultProviderUrl: "https://base.publicnode.com",
    explorer: "https://basescan.org/",
    defaultGasPrice: 1,
  },
  [NetworkNames.Mantle]: {
    chainId: 5000,
    defaultProviderUrl: "https://rpc.mantle.xyz",
    explorer: "https://explorer.mantle.xyz/",
    defaultGasPrice: 1,
  },
  [NetworkNames.Linea]: {
    chainId: 59144,
    defaultProviderUrl: "https://linea.blockpi.network/v1/rpc/public",
    explorer: "https://lineascan.build/",
    defaultGasPrice: 1,
  },
  [NetworkNames.Sepolia]: {
    chainId: 11155111,
    defaultProviderUrl: "https://eth-sepolia.public.blastapi.io",
    explorer: "https://sepolia.etherscan.io/",
    defaultGasPrice: 1,
  },
  [NetworkNames.Coston2]: {
    chainId: 114,
    defaultProviderUrl: "https://coston2-api.flare.network/ext/C/rpc",
    explorer: "https://coston2-explorer.flare.network/",
    defaultGasPrice: 1,
  },
  [NetworkNames.Etherspot]: {
    chainId: 4386,
    defaultProviderUrl: "https://qa-etherspot-testnet.pillarproject.io",
    defaultGasPrice: 20,
  },
  [NetworkNames.LocalA]: {
    chainId: 9999,
    defaultProviderUrl: "http://localhost:8545",
    defaultGasPrice: 20,
  },
  [NetworkNames.LocalB]: {
    chainId: 6666,
    defaultProviderUrl: "http://localhost:9545",
    defaultGasPrice: 20,
  },
  [NetworkNames.Flare]: {
    chainId: 14,
    defaultProviderUrl: "https://rpc.ftso.au/flare",
    defaultGasPrice: 25,
    explorer: 'https://flare-explorer.flare.network/',
  },
  [NetworkNames.Scroll]: {
    chainId: 534352,
    defaultProviderUrl: 'https://rpc.scroll.io',
    explorer: 'https://scrollscan.com/',
    defaultGasPrice: 1,
  },
  [NetworkNames.BaseSepolia]: {
    chainId: 84532,
    defaultProviderUrl: 'https://base-sepolia-rpc.publicnode.com',
    explorer: 'https://sepolia.basescan.org/',
    defaultGasPrice: 1,
  }
};

export enum ContractNames {
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
  WrappedWeiToken = "WrappedWeiToken",
}
