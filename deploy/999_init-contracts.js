const { ethers } = require('hardhat');
const { hash: hashName } = require('eth-ens-namehash');
const { TYPED_DATA_DOMAIN_NAMES, TYPED_DATA_DOMAIN_VERSIONS } = require('../settings/contracts');
const {
  getChainEnvAsArray,
  getTypedDomainSalt,
  processEthersEvents,
  sha3String,
  waitForTx,
} = require('../shared');

const getContracts = async (deployer, ...names) => {
  return Promise.all(
    names.map(name => ethers.getContract(name, deployer))
  );
};

/**
 * @type import('hardhat/types').HardhatRuntimeEnvironment
 */
const func = async function (hre) {
  const { getNamedAccounts, getChainId } = hre;
  const { deployer } = await getNamedAccounts();
  const TYPED_DATA_DOMAIN_SALT = await getTypedDomainSalt();
  const chainId = await getChainId();

  const [
    accountOwnerRegistry,
    accountProofRegistry,
    ensController,
    ensRegistry,
    gateway,
    personalAccountRegistry,
    paymentRegistry,
    wrappedWeiToken,
  ] = await getContracts(
    deployer,
    'AccountOwnerRegistry',
    'AccountProofRegistry',
    'ENSController',
    'ENSRegistry',
    'Gateway',
    'PersonalAccountRegistry',
    'PaymentRegistry',
    'WrappedWeiToken',
  );

  // Gateway
  {
    console.log('> initializing contract Gateway');

    if (await gateway.isInitialized()) {
      console.log('already initialized');
    } else {
      processEthersEvents(
        await waitForTx(
          gateway.initialize(
            accountOwnerRegistry.address,
            personalAccountRegistry.address,
            sha3String(
              TYPED_DATA_DOMAIN_NAMES.Gateway
            ),
            sha3String(
              TYPED_DATA_DOMAIN_VERSIONS.Gateway
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // ENSController
  {
    console.log('> initializing contract ENSController');

    if (await ensController.isInitialized()) {
      console.log('already initialized');
    } else {
      processEthersEvents(
        await waitForTx(
          ensController.initialize(
            ensRegistry.address,
            [],
            gateway.address,
            sha3String(
              TYPED_DATA_DOMAIN_NAMES.ENSController,
            ),
            sha3String(
              TYPED_DATA_DOMAIN_NAMES.ENSController,
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );

      // add pillar ens name
      if (chainId !== 1) {
        processEthersEvents(
          await waitForTx(
            ensRegistry.setSubnodeOwner(
              ethers.constants.HashZero,
              sha3String('pillar'),
              deployer,
            ),
          ),
        );

        processEthersEvents(
          await waitForTx(
            ensRegistry.setOwner(
              hashName('pillar'),
              ensController.address,
            ),
          ),
        );

        processEthersEvents(
          await waitForTx(
            ensController.addNode(hashName('pillar')),
          ),
        );
      }
    }
  }

  // PaymentRegistry
  {
    console.log('> initializing contract PaymentRegistry');

    if (await paymentRegistry.isInitialized()) {
      console.log('already initialized');
    } else {
      processEthersEvents(
        await waitForTx(
          paymentRegistry.initialize(
            accountOwnerRegistry.address,
            accountProofRegistry.address,
            personalAccountRegistry.address,
            0,
            [],
            gateway.address,
            sha3String(
              TYPED_DATA_DOMAIN_NAMES.PaymentRegistry,
            ),
            sha3String(
              TYPED_DATA_DOMAIN_VERSIONS.PaymentRegistry,
            ),
            TYPED_DATA_DOMAIN_SALT,
          ),
        ),
      );
    }
  }

  // PersonalAccountRegistry
  {
    console.log('> initializing contract PersonalAccountRegistry');

    if (await personalAccountRegistry.isInitialized()) {
      console.log('already initialized');
    } else {
      processEthersEvents(
        await waitForTx(
          personalAccountRegistry.initialize(
            gateway.address,
          ),
        ),
      );
    }
  }

  // WrappedWeiToken
  {
    console.log('> initializing contract WrappedWeiToken');

    if (await wrappedWeiToken.isInitialized()) {
      console.log('already initialized');
    } else {
      const consumers = getChainEnvAsArray(chainId, 'WRAPPED_WEI_TOKEN_CONSUMERS');

      processEthersEvents(
        await waitForTx(
          wrappedWeiToken.initialize(
            consumers,
          ),
        ),
      );
    }
  }

  console.log('all contracts have been initialized');
}
module.exports = func;
module.exports.runAtTheEnd = true;
