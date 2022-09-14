import { NetworkNames } from "../extensions/constants";

export const ConnextConfig = {
  [NetworkNames.Rinkeby]: {
    domainId: 1111,
    handler: "0x4cAA6358a3d9d1906B5DABDE60A626AAfD80186F",
  },
  [NetworkNames.Goerli]: {
    domainId: 3331,
    handler: "0x6c9a905Ab3f4495E2b47f5cA131ab71281E0546e",
  },
  'hardhat': { // goerli fork for testing
    domainId: 3331,
    handler: "0x6c9a905Ab3f4495E2b47f5cA131ab71281E0546e",
  },
};
