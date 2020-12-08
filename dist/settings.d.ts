export declare const NETWORKS: {
    [key: string]: {
        chainId: number;
        defaultProvider?: 'infura' | string;
    };
};
export declare const TYPED_DATA_DOMAINS: {
    Gateway: {
        name: string;
        version: string;
    };
    ENSController: {
        name: string;
        version: string;
    };
    PaymentRegistry: {
        name: string;
        version: string;
    };
};
export declare const TYPED_DATA_DOMAIN_SALT: string;
export declare const KNOWN_CONTRACT_ADDRESSES: {
    ENSRegistry: {
        mainnet: string;
    };
};
export declare const ENS_TLD: string[];
