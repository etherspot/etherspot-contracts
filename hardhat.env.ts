import 'hardhat-typechain';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import * as expect from 'expect';
import { extendEnvironment } from 'hardhat/config';

extendEnvironment((env: any) => {
  env.expect = expect;
});
