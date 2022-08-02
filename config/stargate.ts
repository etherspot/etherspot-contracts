import { NetworkNames } from "../extensions/constants";

interface StargateConfig {
  [key: string]: {
    stargateRouter: string;
    chainId: number;
  };
}

const config: StargateConfig = {
  // leave StargateConfig as '' if you want to deploy a router with deployments
  [NetworkNames.Mainnet]: {
    stargateRouter: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
    chainId: 1,
  },
  [NetworkNames.Optimism]: {
    stargateRouter: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    chainId: 10,
  },
  [NetworkNames.Bsc]: {
    stargateRouter: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
    chainId: 56,
  },
  [NetworkNames.Matic]: {
    stargateRouter: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    chainId: 137,
  },
  [NetworkNames.Fantom]: {
    stargateRouter: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    chainId: 250,
  },
  [NetworkNames.Arbitrum]: {
    stargateRouter: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614",
    chainId: 42161,
  },
  [NetworkNames.Avalanche]: {
    stargateRouter: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    chainId: 43114,
  },
  // TESTNETS
  [NetworkNames.Rinkeby]: {
    stargateRouter: "0x82A0F5F531F9ce0df1DF5619f74a0d3fA31FF561",
    chainId: 10001,
  },
  [NetworkNames.BscTest]: {
    stargateRouter: "0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176",
    chainId: 10002,
  },
  [NetworkNames.Fuji]: {
    stargateRouter: "0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1",
    chainId: 10006,
  },
  [NetworkNames.Mumbai]: {
    stargateRouter: "0x817436a076060D158204d955E5403b6Ed0A5fac0",
    chainId: 10009,
  },
  [NetworkNames.ArbitrumTest]: {
    stargateRouter: "0x6701D9802aDF674E524053bd44AA83ef253efc41",
    chainId: 10010,
  },
  [NetworkNames.OptimismKovan]: {
    stargateRouter: "0xCC68641528B948642bDE1729805d6cf1DECB0B00",
    chainId: 10011,
  },
  [NetworkNames.FantomTest]: {
    stargateRouter: "0xa73b0a56B29aD790595763e71505FCa2c1abb77f",
    chainId: 10012,
  },
};

export default config;
