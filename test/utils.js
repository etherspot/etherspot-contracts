const BN = require('bn.js');
const { TypedDataUtils } = require('eth-sig-util');
const {
  CHAIN_ID,
  GAS_PRICE,
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
  })
    .join('')
    .toLowerCase();
}

function getGasUsage(output) {
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

  return gasUsed;
}

function logGasUsage(output) {
  if (!process.env.LOG_GAS_USAGE) {
    return;
  }

  const gasUsed = getGasUsage(output);

  console.log();
  console.log(
    `⛽ gas used: ${gasUsed || 'unknown'} ⤵︎`,
  );
}

function calcCost(output) {
  const gasUsed = getGasUsage(output);

  return (new BN(GAS_PRICE)).muln(gasUsed);
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

function getNow(additionalSeconds = 0) {
  const add = BN.isBN(additionalSeconds)
    ? additionalSeconds.toNumber()
    : additionalSeconds;

  return new BN(Math.ceil(Date.now() / 1000) + add);
}

function getBalance(target) {
  const address = target && typeof target === 'object'
    ? target.address
    : target;

  return web3GetBalance(address)
    .then((balance) => new BN(balance, 10));
}

function computeCreate2Address(deployer, salt, byteCode) {
  const saltHash = salt.length === 66
    ? salt
    : soliditySha3(salt);

  const deployerAddress = deployer && typeof deployer === 'object'
    ? deployer.address
    : deployer;

  const hash = soliditySha3(
    '0xff',
    deployerAddress,
    saltHash,
    sha3(byteCode),
  );

  return toChecksumAddress(
    `0x${hash.substr(-40)}`,
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

function increaseTime(seconds = 0) {
  return new Promise((resolve, reject) => {
    const value = (BN.isBN(seconds) ? seconds.toNumber() : seconds) + 1;

    currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [
        value,
      ],
      id: Date.now(),
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(new BN(data.result));
      }
    });
  });
}

module.exports = {
  concatHex,
  logGasUsage,
  calcCost,
  parseBlockNumber,
  randomAddress,
  randomBytes32,
  getNow,
  getBalance,
  buildTypedData,
  hashTypedData,
  signTypedData,
  computeCreate2Address,
  increaseTime,
};
