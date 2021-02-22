"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = __importDefault(require("expect"));
const task_names_1 = require("hardhat/builtin-tasks/task-names");
const config_1 = require("hardhat/config");
const ethers_1 = require("ethers");
const utils_1 = require("./utils");
config_1.task(task_names_1.TASK_TEST)
    .addFlag('reportGas', 'Report gas')
    .setAction(async (args, hre, runSuper) => {
    const { global, reportGas } = args;
    if (global) {
        return;
    }
    expect_1.default.extend({
        toBeBN: utils_1.createBNCondition('eq', 'equal'),
        toBeGreaterThanBN: utils_1.createBNCondition('gt', 'greater than'),
        toBeGreaterThanOrEqualBN: utils_1.createBNCondition('gte', 'greater than or equal'),
        toBeLessThanBN: utils_1.createBNCondition('lt', 'less than'),
        toBeLessThanOrEqualBN: utils_1.createBNCondition('lte', 'less than or equal'),
        toBeZeroAddress(received) {
            let result;
            if (received === ethers_1.constants.AddressZero) {
                result = {
                    message: () => `expected ${received} is zero address`,
                    pass: true,
                };
            }
            else {
                result = {
                    message: () => `expected ${received} is not zero address`,
                    pass: false,
                };
            }
            return result;
        },
    });
    hre.expect = expect_1.default;
    const { config } = hre;
    const { gasReporter, } = config;
    if (gasReporter) {
        gasReporter.enabled = !!reportGas;
    }
    await runSuper(args);
});
