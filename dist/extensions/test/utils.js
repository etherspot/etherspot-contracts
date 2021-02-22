"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBNCondition = void 0;
const ethers_1 = require("ethers");
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
exports.createBNCondition = createBNCondition;
