const {
  utils: {
    randomHex,
    soliditySha3,
  },
} = web3;

const TYPED_DATA_DOMAIN_NAME = 'test domain';
const TYPED_DATA_DOMAIN_VERSION = '1';

module.exports = {
  CHAIN_ID: 9999,
  ZERO_ADDRESS: `0x${'0'.repeat(40)}`,
  GAS_PRICE: 20000000000,
  TYPED_DATA_DOMAIN_NAME,
  TYPED_DATA_DOMAIN_NAME_HASH: soliditySha3({
    type: 'string',
    value: TYPED_DATA_DOMAIN_NAME,
  }),
  TYPED_DATA_DOMAIN_VERSION,
  TYPED_DATA_DOMAIN_VERSION_HASH: soliditySha3({
    type: 'string',
    value: TYPED_DATA_DOMAIN_VERSION,
  }),
  TYPED_DATA_SALT: randomHex(32),
};
