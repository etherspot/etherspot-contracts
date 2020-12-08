"use strict";
exports.__esModule = true;
exports.ENS_TLD = exports.KNOWN_CONTRACT_ADDRESSES = exports.TYPED_DATA_DOMAIN_SALT = exports.TYPED_DATA_DOMAINS = exports.NETWORKS = void 0;
var ethers_1 = require("ethers");
exports.NETWORKS = {
    mainnet: {
        chainId: 1,
        defaultProvider: 'infura'
    },
    ropsten: {
        chainId: 3,
        defaultProvider: 'infura'
    },
    rinkeby: {
        chainId: 4,
        defaultProvider: 'infura'
    },
    goerli: {
        chainId: 5,
        defaultProvider: 'infura'
    },
    kovan: {
        chainId: 42,
        defaultProvider: 'infura'
    },
    xdai: {
        chainId: 100,
        defaultProvider: 'https://dai.poa.network'
    },
    sokol: {
        chainId: 77,
        defaultProvider: 'https://sokol.poa.network'
    },
    bsc: {
        chainId: 56,
        defaultProvider: 'https://bsc-dataseed1.binance.org'
    },
    bscTest: {
        chainId: 97,
        defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545'
    },
    localA: {
        chainId: 9999,
        defaultProvider: 'http://localhost:8545'
    },
    localB: {
        chainId: 6666,
        defaultProvider: 'http://localhost:9545'
    }
};
exports.TYPED_DATA_DOMAINS = {
    Gateway: {
        name: 'ETHERspot Gateway',
        version: '1'
    },
    ENSController: {
        name: 'ETHERspot ENS Controller',
        version: '1'
    },
    PaymentRegistry: {
        name: 'ETHERspot Payment Network',
        version: '1'
    }
};
exports.TYPED_DATA_DOMAIN_SALT = ethers_1.utils.id('ETHERspot');
exports.KNOWN_CONTRACT_ADDRESSES = {
    ENSRegistry: {
        mainnet: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
    }
};
exports.ENS_TLD = ['pillar', 'etherspot'];
