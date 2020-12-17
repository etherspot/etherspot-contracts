"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = __importDefault(require("expect"));
const ethers_1 = require("ethers");
const config_1 = require("hardhat/config");
function createBNCondition(method, description) {
    return (received, expected) => {
        let result;
        switch (typeof expected) {
            case 'number':
            case 'string':
                expected = ethers_1.BigNumber.from(expected);
                break;
            default:
        }
        if (!ethers_1.BigNumber.isBigNumber(received)) {
            result = {
                message: () => `received ${received} is not BN`,
                pass: false,
            };
        }
        if (!ethers_1.BigNumber.isBigNumber(expected)) {
            result = {
                message: () => `expected ${expected} is not BN`,
                pass: false,
            };
        }
        if (!result) {
            if (received[method](expected)) {
                result = {
                    message: () => `expected ${received} is ${description} ${expected}`,
                    pass: true,
                };
            }
            else {
                result = {
                    message: () => `expected ${received} is not ${description} ${expected}`,
                    pass: false,
                };
            }
        }
        return result;
    };
}
config_1.extendEnvironment((env) => {
    expect_1.default.extend({
        toBeBN: createBNCondition('eq', 'equal'),
        toBeGreaterThanBN: createBNCondition('gt', 'greater than'),
        toBeGreaterThanOrEqualBN: createBNCondition('gte', 'greater than or equal'),
        toBeLessThanBN: createBNCondition('lt', 'less than'),
        toBeLessThanOrEqualBN: createBNCondition('lte', 'less than or equal'),
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
    env.expect = expect_1.default;
});
