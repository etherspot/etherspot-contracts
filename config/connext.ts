import { NetworkNames } from "../extensions/constants";

export const ConnextConfig = {
  [NetworkNames.Mainnet]: {
    domainId: 6648936,
    connext: "0x8898B472C54c31894e3B9bb83cEA802a5d0e63C6",
    unwrapper: "0x268682b7D9992aE7e2ca4A8bCc9D9655FB06056F",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  [NetworkNames.Optimism]: {
    domainId: 1869640809,
    connext: "0x8f7492DE823025b4CfaAB1D34c58963F2af5DEDA",
    unwrapper: "0x7Fe09d217d646a6213e51b237670Bc326188cB93",
    weth: "0x4200000000000000000000000000000000000006",
  },
  [NetworkNames.Matic]: {
    domainId: 1886350457,
    connext: "0x11984dc4465481512eb5b777E44061C158CF2259",
    unwrapper: "0x7E8F8B2dA3dc5Ad9c9Dfd1A832331A039d4f3f74",
    weth: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  },
  [NetworkNames.Arbitrum]: {
    domainId: 1634886255,
    connext: "0xEE9deC2712cCE65174B561151701Bf54b99C24C8",
    unwrapper: "0x429b9eb01362b2799131EfCC44319689b662999D",
    weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  },
  [NetworkNames.Bsc]: {
    domainId: 6450786,
    connext: "0xCd401c10afa37d641d2F594852DA94C700e4F2CE",
    unwrapper: "0x2c7B8c1a13F2a7854B9299E4d22809A8B1E05De5",
    weth: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  },
  [NetworkNames.Xdai]: {
    domainId: 6778479,
    connext: "0x5bB83e95f63217CDa6aE3D181BA580Ef377D2109",
    unwrapper: "0x642c27a96dFFB6f21443A89b789a3194Ff8399fa",
    weth: "0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1",
  },
  [NetworkNames.Goerli]: {
    domainId: 1735353714,
    connext: "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
    unwrapper: "0xa6633d369A9C4C8A442ef104E8e293DA7b352Acd",
    weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  },
  [NetworkNames.OptimismGoerli]: {
    domainId: 1735356532,
    connext: "0x5Ea1bb242326044699C3d81341c5f535d5Af1504",
    unwrapper: "0x08bDeFD0e4878A814Cb2fd11C033F3947251689f",
    weth: "0x74c6FD7D2Bc6a8F0Ebd7D78321A95471b8C2B806",
  },
  [NetworkNames.Mumbai]: {
    domainId: 9991,
    connext: "0x2334937846Ab2A3FCE747b32587e1A1A2f6EEC5a",
    unwrapper: "0x1e0Db00EB08ceC7FFdA03c0Dbf224193E1563844",
    weth: "0xFD2AB41e083c75085807c4A65C0A14FDD93d55A9",
  },
  [NetworkNames.ArbitrumNitro]: {
    domainId: 1734439522,
    connext: "0x2075c9E31f973bb53CAE5BAC36a8eeB4B082ADC2",
    unwrapper: "0x18BBF96BC8014aA93cbf1A5Bce005a485b5C2C4a",
    weth: "0x1346786E6A5e07b90184a1Ba58E55444b99DC4A2",
  },
  hardhat: {
    // goerli fork for testing
    domainId: 1735353714,
    connext: "0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649",
    unwrapper: "0xa6633d369A9C4C8A442ef104E8e293DA7b352Acd",
    weth: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  },
};
