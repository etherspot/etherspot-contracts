import { NetworkNames } from "./constants"

export const ConnextConfig = {
  [NetworkNames.Rinkeby]: {
    domainId: 1111,
    handler: "0x2307Ed9f152FA9b3DcDfe2385d279D8C2A9DF2b0",
  },
  [NetworkNames.Goerli]: {
    domainId: 3331,
    handler: "0xEC3A723DE47a644b901DC269829bf8718F175EBF",
  },
  'hardhat': { // goerli fork for testing
    domainId: 3331,
    handler: "0xEC3A723DE47a644b901DC269829bf8718F175EBF",
  }
}
