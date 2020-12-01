const NETWORK_NAME_TO_CHAIN_ID = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  xdai: 100,
  sokol: 77,
  bsc: 56,
  bsc_test: 97,
  local_a: 9999,
  local_b: 6666,
};

const CHAIN_ID_TO_NETWORK_NAME = Object.assign(
  {},
  ...Object.entries(NETWORK_NAME_TO_CHAIN_ID)
    .map(([a, b]) => ({ [b]: a })),
);

module.exports = {
  NETWORK_NAME_TO_CHAIN_ID,
  CHAIN_ID_TO_NETWORK_NAME,
};
