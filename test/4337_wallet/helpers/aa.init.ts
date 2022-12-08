/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/camelcase */
import "./chaiHelper";
import { ethers } from "ethers";

export const inspect_custom_symbol = Symbol.for("nodejs.util.inspect.custom");
// @ts-ignore
ethers.BigNumber.prototype[inspect_custom_symbol] = function() {
  return `BigNumber ${parseInt(this._hex)}`;
};
