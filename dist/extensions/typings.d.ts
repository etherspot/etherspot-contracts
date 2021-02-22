import 'hardhat/types/config';
import 'hardhat/types/runtime';
import { Matchers } from 'expect/build/types';
interface CustomMatchers<T> extends Matchers<T> {
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
declare global {
    export const expect: {
        <T = unknown>(actual: T): CustomMatchers<T>;
    };
}
declare module 'hardhat/types/runtime' {
    interface HardhatRuntimeEnvironment {
        expect?: {
            <T = unknown>(actual: T): CustomMatchers<T>;
        };
    }
}
declare module 'hardhat/types/config' {
    interface BuildPathsConfig {
        artifacts?: string;
        dist?: string;
        typings?: string;
    }
    interface ENSConfig {
        internalTopLevelDomains?: string[];
    }
    interface TypedDataConfig {
        domains: {
            [key: string]: {
                name: string;
                version: string;
            };
        };
        domainSalt: string;
    }
    type Create2Salts = {
        default: string;
        [key: string]: string;
    };
    type KnownContractsConfig = {
        [key: string]: {
            [key: string]: string;
        };
    };
    interface HardhatUserConfig {
        buildPaths: BuildPathsConfig;
        ens: ENSConfig;
        knownContracts: KnownContractsConfig;
        typedData: TypedDataConfig;
        create2Salts: Create2Salts;
    }
    interface HardhatConfig {
        buildPaths: BuildPathsConfig;
        ens: ENSConfig;
        knownContracts: KnownContractsConfig;
        typedData: TypedDataConfig;
        create2Salts: Create2Salts;
    }
}
export {};
