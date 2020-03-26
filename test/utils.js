const {
  currentProvider,
  eth: {
    getBalance: web3GetBalance,
  },
  utils: {
    BN,
    randomHex,
    toChecksumAddress,
    soliditySha3,
    sha3,
  },
} = web3;

function logGasUsed(output) {
  if (!process.env.LOG_GAS_USAGE) {
    return;
  }

  let gasUsed;
  if (typeof output === 'number') {
    gasUsed = output;
  } else {
    try {
      ({ receipt: { gasUsed } } = output);
    } catch (err) {
      ({ gasUsed } = output);
    }
  }

  console.log();
  console.log(
    `⛽ gas used: ${gasUsed} ⤵︎`,
  );
}

function randomAddress() {
  return toChecksumAddress(randomHex(20));
}

function randomBytes32() {
  return randomHex(32);
}

function now(additionalSeconds = 0) {
  const add = BN.isBN(additionalSeconds)
    ? additionalSeconds.toNumber()
    : additionalSeconds;

  return new BN(Math.ceil(Date.now() / 1000) + add);
}

function getBalance(target) {
  const address = target && typeof target === 'object'
    ? target.address
    : target;

  return web3GetBalance(address);
}

function computeCreate2Address(deployer, salt, byteCode) {
  const saltHash = salt.length === 66
    ? salt
    : soliditySha3(salt);

  const hash = soliditySha3(
    '0xff',
    deployer,
    saltHash,
    sha3(byteCode),
  );

  return toChecksumAddress(
    `0x${hash.substr(-40)}`,
  );
}

function createSignedMessageHash(message) {
  const messageHash = message.length === 66
    ? message
    : soliditySha3(message);

  return soliditySha3(
    '\x19Ethereum Signed Message:\n32',
    messageHash,
  );
}

module.exports = {
  logGasUsed,
  randomAddress,
  randomBytes32,
  now,
  getBalance,
  computeCreate2Address,
  createSignedMessageHash,
};
