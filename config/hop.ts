import { NetworkNames } from "../extensions/constants";

const L1 = [
  NetworkNames.Rinkeby,
  NetworkNames.Goerli,
  NetworkNames.Kovan,
]

const L2 = [
  NetworkNames.Xdai,
  NetworkNames.Optimism,
  NetworkNames.Arbitrum,
  NetworkNames.Matic,
  NetworkNames.Mumbai,
]

export const HopConfig = Object.values(NetworkNames).reduce((obj, name) => {
  if (L1.some(n => n === name)) {
    obj[name] = 1;
  } else if (L2.some(n => n === name)) {
    obj[name] = 2;
  }
  return obj;
}, {});

HopConfig['hardhat'] = 1; // for testing purposes
