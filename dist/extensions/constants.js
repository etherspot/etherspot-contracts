"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractNames = exports.NetworkNames = void 0;
var NetworkNames;
(function (NetworkNames) {
    NetworkNames["Mainnet"] = "mainnet";
    NetworkNames["Ropsten"] = "ropsten";
    NetworkNames["Rinkeby"] = "rinkeby";
    NetworkNames["Goerli"] = "goerli";
    NetworkNames["Kovan"] = "kovan";
    NetworkNames["Xdai"] = "xdai";
    NetworkNames["Sokol"] = "sokol";
    NetworkNames["Bsc"] = "bsc";
    NetworkNames["BscTest"] = "bscTest";
    NetworkNames["LocalA"] = "localA";
    NetworkNames["LocalB"] = "localB";
})(NetworkNames = exports.NetworkNames || (exports.NetworkNames = {}));
var ContractNames;
(function (ContractNames) {
    ContractNames["Gateway"] = "Gateway";
    ContractNames["ENSController"] = "ENSController";
    ContractNames["ENSRegistry"] = "ENSRegistry";
    ContractNames["PaymentRegistry"] = "PaymentRegistry";
})(ContractNames = exports.ContractNames || (exports.ContractNames = {}));
