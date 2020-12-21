import expect from 'expect';
import { TASK_TEST } from 'hardhat/builtin-tasks/task-names';
import { task } from 'hardhat/config';
import { constants } from 'ethers';
import { createBNCondition } from './utils';

task(TASK_TEST)
  .addFlag('reportGas', 'Report gas')
  .setAction(
    async (args: { global: boolean; reportGas?: boolean }, hre, runSuper) => {
      const { global, reportGas } = args;

      if (global) {
        return;
      }

      expect.extend({
        toBeBN: createBNCondition('eq', 'equal'),
        toBeGreaterThanBN: createBNCondition('gt', 'greater than'),
        toBeGreaterThanOrEqualBN: createBNCondition(
          'gte',
          'greater than or equal',
        ),
        toBeLessThanBN: createBNCondition('lt', 'less than'),
        toBeLessThanOrEqualBN: createBNCondition('lte', 'less than or equal'),
        toBeZeroAddress(received: any) {
          let result;

          if (received === constants.AddressZero) {
            result = {
              message: () => `expected ${received} is zero address`,
              pass: true,
            };
          } else {
            result = {
              message: () => `expected ${received} is not zero address`,
              pass: false,
            };
          }

          return result;
        },
      });

      hre.expect = expect as any;

      const { config } = hre;

      const {
        gasReporter,
      }: {
        gasReporter: {
          enabled: boolean;
        };
      } = config as any;

      if (gasReporter) {
        gasReporter.enabled = !!reportGas;
      }

      await runSuper(args);
    },
  );
