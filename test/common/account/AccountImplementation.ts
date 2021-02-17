import { ethers } from 'hardhat';
import { utils, constants } from 'ethers';
import {
  AccountRegistryMock,
  AccountImplementationMock__factory as AccountImplementationMockFactory,
  AccountImplementation,
} from '../../../typings';
import {
  processTx,
  deployContract,
  randomAddress,
  SignerWithAddress,
  getMethodSignature,
} from '../../shared';

const { getSigners } = ethers;

describe('AccountImplementation (using mock)', () => {
  let signers: SignerWithAddress[];
  let account: AccountImplementation;
  let accountRegistry: AccountRegistryMock;
  let accountImplementation: AccountImplementation;

  before(async () => {
    signers = await getSigners();

    accountRegistry = await deployContract('AccountRegistryMock');
    accountImplementation = await deployContract('AccountImplementationMock');

    const accountProxy = await deployContract('Account', [
      accountRegistry.address,
      accountImplementation.address,
    ]);

    await processTx(accountImplementation.initialize(accountRegistry.address));

    account = AccountImplementationMockFactory.connect(
      accountProxy.address,
      signers.pop(),
    );
  });

  it('expect to use correct addresses', () => {
    expect(account.address).not.toBe(accountImplementation.address);
  });

  context('onERC721Received()', () => {
    it('expect to return correct interface hash', async () => {
      await expect(
        account.onERC721Received(randomAddress(), randomAddress(), 1, '0x'),
      ).resolves.toBe(
        getMethodSignature(
          'onERC721Received(address,address,uint256,bytes)', //
        ),
      );
    });
  });

  context('onERC1155Received()', () => {
    it('expect to return correct interface hash', async () => {
      await expect(
        account.onERC1155Received(randomAddress(), randomAddress(), 1, 2, '0x'),
      ).resolves.toBe(
        getMethodSignature(
          'onERC1155Received(address,address,uint256,uint256,bytes)',
        ),
      );
    });
  });

  context('tokensReceived()', () => {
    it('expect to return empty result', async () => {
      await expect(
        account.tokensReceived(
          randomAddress(),
          randomAddress(),
          randomAddress(),
          1,
          '0x',
          '0x',
        ),
      ).resolves.toStrictEqual([]);
    });
  });

  context('canImplementInterfaceForAddress()', () => {
    const interfaceHash = utils.id('ERC777TokensRecipient');

    it('expect to return magic hash when can implement interface', async () => {
      await expect(
        account.canImplementInterfaceForAddress(interfaceHash, account.address),
      ).resolves.toBe(utils.id('ERC1820_ACCEPT_MAGIC'));
    });

    it('expect to return zero hash when can not implement interface', async () => {
      await expect(
        account.canImplementInterfaceForAddress(interfaceHash, randomAddress()),
      ).resolves.toBe(constants.HashZero);
    });
  });

  context('isValidAccountSignature()', () => {
    let accountOwner: SignerWithAddress;
    let invalidOwner: SignerWithAddress;

    before(async () => {
      accountOwner = signers.pop();
      invalidOwner = signers.pop();

      await processTx(
        accountRegistry.mockAccountOwners(account.address, [
          accountOwner.address,
        ]),
      );
    });

    it('expect to return magic hash on valid signature', async () => {
      const message = 'test message';
      const signature = await accountOwner.signMessage(message);

      await expect(
        account['isValidSignature(bytes32,bytes)'](
          utils.hashMessage(message),
          signature,
        ),
      ).resolves.toBe(
        getMethodSignature(
          'isValidSignature(bytes32,bytes)', //
        ),
      );

      await expect(
        account['isValidSignature(bytes,bytes)'](
          utils.hexlify(utils.toUtf8Bytes(message)),
          signature,
        ),
      ).resolves.toBe(
        getMethodSignature(
          'isValidSignature(bytes,bytes)', //
        ),
      );
    });

    it('expect to return 0xffffffff on invalid signature', async () => {
      const expected = '0xffffffff';
      const message = 'test message';
      const signature = await invalidOwner.signMessage(message);

      await expect(
        account['isValidSignature(bytes32,bytes)'](
          utils.hashMessage(message),
          signature,
        ),
      ).resolves.toBe(expected);

      await expect(
        account['isValidSignature(bytes,bytes)'](
          utils.hexlify(utils.toUtf8Bytes(message)),
          signature,
        ),
      ).resolves.toBe(expected);
    });
  });
});
