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
    ContractNames["AccountOwnerRegistry"] = "AccountOwnerRegistry";
    ContractNames["AccountProofRegistry"] = "AccountProofRegistry";
    ContractNames["ENSController"] = "ENSController";
    ContractNames["ENSRegistry"] = "ENSRegistry";
    ContractNames["Gateway"] = "Gateway";
    ContractNames["PaymentRegistry"] = "PaymentRegistry";
    ContractNames["PersonalAccountRegistry"] = "PersonalAccountRegistry";
})(ContractNames = exports.ContractNames || (exports.ContractNames = {}));
