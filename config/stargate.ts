import { NetworkNames } from "../extensions/constants";

interface StargateConfig {
  [key: string]: {
    stargateRouter: string;
    stargateETHRouter: string; // address(0) = no ETH router on that chain
    chainId: number;
    lzChainId: number;
  };
}

const config: StargateConfig = {
  // leave StargateConfig as '' if you want to deploy a router with deployments
  [NetworkNames.Mainnet]: {
    stargateRouter: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
    stargateETHRouter: "0x150f94B44927F078737562f0fcF3C95c01Cc2376",
    chainId: 1,
    lzChainId: 101,
  },
  [NetworkNames.Optimism]: {
    stargateRouter: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    stargateETHRouter: "0xB49c4e680174E331CB0A7fF3Ab58afC9738d5F8b",
    chainId: 10,
    lzChainId: 111,
  },
  [NetworkNames.Bsc]: {
    stargateRouter: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 56,
    lzChainId: 102,
  },
  [NetworkNames.Matic]: {
    stargateRouter: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 137,
    lzChainId: 109,
  },
  [NetworkNames.Fantom]: {
    stargateRouter: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 250,
    lzChainId: 112,
  },
  [NetworkNames.Arbitrum]: {
    stargateRouter: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614",
    stargateETHRouter: "0xbf22f0f184bCcbeA268dF387a49fF5238dD23E40",
    chainId: 42161,
    lzChainId: 110,
  },
  [NetworkNames.Avalanche]: {
    stargateRouter: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 43114,
    lzChainId: 106,
  },
  // TESTNETS
  [NetworkNames.Goerli]: {
    stargateRouter: "0x7612aE2a34E5A363E137De748801FB4c86499152",
    stargateETHRouter: "0xb1b2eeF380f21747944f46d28f683cD1FBB4d03c",
    chainId: 5,
    lzChainId: 10121,
  },
  [NetworkNames.BscTest]: {
    stargateRouter: "0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 97,
    lzChainId: 10102,
  },
  [NetworkNames.Fuji]: {
    stargateRouter: "0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 43113,
    lzChainId: 10106,
  },
  [NetworkNames.Mumbai]: {
    stargateRouter: "0x817436a076060D158204d955E5403b6Ed0A5fac0",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 80001,
    lzChainId: 10109,
  },
  [NetworkNames.ArbitrumNitro]: {
    stargateRouter: "0xb850873f4c993Ac2405A1AdD71F6ca5D4d4d6b4f",
    stargateETHRouter: "0xb1b2eeF380f21747944f46d28f683cD1FBB4d03c",
    chainId: 421613,
    lzChainId: 10143,
  },
  [NetworkNames.OptimismGoerli]: {
    stargateRouter: "0x95461eF0e0ecabC049a5c4a6B98Ca7B335FAF068",
    stargateETHRouter: "0xb1b2eeF380f21747944f46d28f683cD1FBB4d03c",
    chainId: 420,
    lzChainId: 10132,
  },
  [NetworkNames.FantomTest]: {
    stargateRouter: "0xa73b0a56B29aD790595763e71505FCa2c1abb77f",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 4002,
    lzChainId: 10112,
  },
  [NetworkNames.BaseGoerli]: {
    stargateRouter: "0x631774c0B3FDB9502b3093a22aD91FA83fEc493e",
    stargateETHRouter: "0x0000000000000000000000000000000000000000",
    chainId: 84531,
    lzChainId: 10158,
  },
};

export default config;
