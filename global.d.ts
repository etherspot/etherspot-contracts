import type { Matchers } from 'expect/build/types';

declare global {
  export interface CustomMatchers<T>  extends Matchers<T> {
    toBeZeroAddress(): T;
    toBeBN(value: unknown): T;
    toBeGreaterThanBN(value: unknown): T;
    toBeGreaterThanOrEqualBN(value: unknown): T;
    toBeLessThanBN(value: unknown): T;
    toBeLessThanOrEqualBN(value: unknown): T;
    not: CustomMatchers<T>;
    resolves: CustomMatchers<Promise<T>>;
    rejects: CustomMatchers<Promise<T>>;
  }

  export const expect: {
    <T = unknown>(actual: T): CustomMatchers<T>;
  };
}
