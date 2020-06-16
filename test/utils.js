const BN = require('bn.js');
const { TypedDataUtils } = require('eth-sig-util');
const {
  CHAIN_ID,
  TYPED_DATA_DOMAIN,
  TYPED_DATA_SALT,
} = require('./constants');

const {
  currentProvider,
  eth: {
    getBalance: web3GetBalance,
  },
  utils: {
    randomHex,
    toChecksumAddress,
    soliditySha3,
    sha3,
  },
} = web3;

function concatHex(...items) {
  return items.map((item, index) => {
    return !index ? item : item.slice(2);
  }).join('').toLowerCase();
}

function logGasUsage(output) {
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

function parseBlockNumber(output) {
  let result;
  if (typeof output === 'number') {
    result = output;
  } else {
    try {
      ({ receipt: { blockNumber: result } } = output);
    } catch (err) {
      ({ blockNumber: result } = output);
    }
  }

  return result;
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

function buildTypedData(verifyingContract, primaryType, primarySchema, message) {
  return {
    message,
    primaryType,
    domain: {
      verifyingContract,
      chainId: CHAIN_ID,
      name: TYPED_DATA_DOMAIN,
      version: '4',
      salt: TYPED_DATA_SALT,
    },
    types: {
      EIP712Domain: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'version',
          type: 'string',
        },
        {
          name: 'chainId',
          type: 'uint256',
        },
        {
          name: 'verifyingContract',
          type: 'address',
        },
        {
          name: 'salt',
          type: 'bytes32',
        },
      ],
      [primaryType]: primarySchema,
    },
  };
}

function hashTypedData(data) {
  const hash = TypedDataUtils.sign(data);
  return `0x${hash.toString('hex')}`;
}

function signTypedData(data, from) {
  return new Promise((resolve, reject) => {
    currentProvider.send({
      jsonrpc: '2.0',
      method: 'eth_signTypedData',
      params: [
        from,
        data,
      ],
      id: Date.now(),
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.result);
      }
    });
  });
}

module.exports = {
  concatHex,
  logGasUsage,
  parseBlockNumber,
  randomAddress,
  randomBytes32,
  now,
  getBalance,
  buildTypedData,
  hashTypedData,
  signTypedData,
  computeCreate2Address,
  createSignedMessageHash,
};
