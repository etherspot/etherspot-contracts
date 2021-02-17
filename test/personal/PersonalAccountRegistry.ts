import { ethers } from 'hardhat';
import { constants, utils } from 'ethers';
import {
  PersonalAccountRegistry,
  PersonalAccountImplementation,
  WrappedWeiToken,
} from '../../typings';
import {
  SignerWithAddress,
  randomAddress,
  processTx,
  computeAccountAddress,
  deployContract,
} from '../shared';

const { getSigners, provider } = ethers;

describe('PersonalAccountRegistry', () => {
  let signers: SignerWithAddress[];
  let personalAccountImplementation: PersonalAccountImplementation;
  let personalAccountRegistry: PersonalAccountRegistry;
  let wrappedWeiToken: WrappedWeiToken;

  before(async () => {
    signers = await getSigners();

    personalAccountImplementation = await deployContract(
      'PersonalAccountImplementation',
    );
    personalAccountRegistry = await deployContract('PersonalAccountRegistry');
    wrappedWeiToken = await deployContract('WrappedWeiToken');

    await processTx(
      personalAccountImplementation.initialize(personalAccountRegistry.address),
    );

    await processTx(
      personalAccountRegistry.initialize(
        personalAccountImplementation.address,
        randomAddress(),
      ),
    );
  });

  context('deployAccount()', () => {
    let saltOwner: SignerWithAddress;
    let account: string;

    before(async () => {
      saltOwner = signers.pop();

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );

      await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, randomAddress()),
      );
    });

    it('expect to deploy account', async () => {
      const { events } = await processTx(
        personalAccountRegistry.connect(saltOwner).deployAccount(account),
      );

      expect(events[0].event).toBe('AccountDeployed');
      expect(events[0].args.account).toBe(account);
    });
  });

  context('addAccountOwner()', () => {
    let saltOwner: SignerWithAddress;
    let owner: SignerWithAddress;
    let account: string;

    before(async () => {
      saltOwner = signers.pop();
      owner = signers.pop();

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );
    });

    it('expect to account owner by salt owner', async () => {
      const { events } = await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, owner.address),
      );

      expect(events[0].event).toBe('AccountOwnerAdded');
      expect(events[0].args.account).toBe(account);
      expect(events[0].args.owner).toBe(saltOwner.address);

      expect(events[1].event).toBe('AccountOwnerAdded');
      expect(events[1].args.account).toBe(account);
      expect(events[1].args.owner).toBe(owner.address);
    });

    it('expect to account owner by owner', async () => {
      const newOwner = randomAddress();

      const {
        events: [event],
      } = await processTx(
        personalAccountRegistry
          .connect(owner)
          .addAccountOwner(account, newOwner),
      );

      expect(event.event).toBe('AccountOwnerAdded');
      expect(event.args.account).toBe(account);
      expect(event.args.owner).toBe(newOwner);
    });

    it('expect to revert when owner exists', async () => {
      await expect(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, owner.address),
      ).rejects.toThrow(/revert/);
    });

    it('expect to revert when sender is not an owner exists', async () => {
      await expect(
        personalAccountRegistry
          .connect(signers.pop())
          .addAccountOwner(account, randomAddress()),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeAccountOwner()', () => {
    let saltOwner: SignerWithAddress;
    let owner1: SignerWithAddress;
    let owner2: SignerWithAddress;
    let account: string;

    before(async () => {
      saltOwner = signers.pop();
      owner1 = signers.pop();
      owner2 = signers.pop();

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );

      await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, owner1.address),
      );

      await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, owner2.address),
      );
    });

    it('expect to remove account owner', async () => {
      const {
        events: [event],
      } = await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .removeAccountOwner(account, owner1.address),
      );

      expect(event.event).toBe('AccountOwnerRemoved');
      expect(event.args.account).toBe(account);
      expect(event.args.owner).toBe(owner1.address);
    });

    it("expect to revert when owner doesn't exist", async () => {
      await expect(
        personalAccountRegistry
          .connect(saltOwner)
          .removeAccountOwner(account, randomAddress()),
      ).rejects.toThrow(/revert/);
    });

    it('expect to revert when sender is not an owner exists', async () => {
      await expect(
        personalAccountRegistry
          .connect(signers.pop())
          .removeAccountOwner(account, owner2.address),
      ).rejects.toThrow(/revert/);
    });
  });

  context('executeAccountTransaction()', () => {
    let owner: SignerWithAddress;
    let account: string;
    let balance = 1000;

    before(async () => {
      owner = signers.pop();
      account = await personalAccountRegistry.computeAccountAddress(
        owner.address,
      );

      await processTx(
        owner.sendTransaction({
          to: account,
          value: balance,
        }),
      );
    });

    it('expect to execute first transaction', async () => {
      const to = randomAddress();
      const value = 100;
      const data = '0x';

      const { events } = await processTx(
        personalAccountRegistry
          .connect(owner)
          .executeAccountTransaction(account, to, value, data),
      );

      balance -= value;

      expect(events[0].event).toBe('AccountOwnerAdded');
      expect(events[0].args.account).toBe(account);
      expect(events[0].args.owner).toBe(owner.address);

      expect(events[1].event).toBe('AccountDeployed');
      expect(events[1].args.account).toBe(account);

      expect(events[2].event).toBe('AccountTransactionExecuted');
      expect(events[2].args.account).toBe(account);
      expect(events[2].args.to).toBe(to);
      expect(events[2].args.value).toBeBN(value);
      expect(events[2].args.data).toBe(data);

      await expect(provider.getBalance(account)).resolves.toBeBN(balance);
    });

    it('expect to execute second transaction (with data)', async () => {
      const to = randomAddress();
      const value = 200;
      const data = '0x010203';

      const {
        events: [event],
      } = await processTx(
        personalAccountRegistry
          .connect(owner)
          .executeAccountTransaction(account, to, value, data),
      );

      balance -= value;

      expect(event.event).toBe('AccountTransactionExecuted');
      expect(event.args.account).toBe(account);
      expect(event.args.to).toBe(to);
      expect(event.args.value).toBeBN(value);
      expect(event.args.data).toBe(data);

      await expect(provider.getBalance(account)).resolves.toBeBN(balance);
    });

    it('expect to revert when sender is not an account owner', async () => {
      const to = randomAddress();
      const value = 200;
      const data = '0x010203';

      await expect(
        personalAccountRegistry
          .connect(owner)
          .executeAccountTransaction(randomAddress(), to, value, data),
      ).rejects.toThrow(/revert/);
    });
  });

  context('refundAccountCall()', () => {
    let owner: SignerWithAddress;
    let account;

    before(async () => {
      owner = signers.pop();
      account = await personalAccountRegistry.computeAccountAddress(
        owner.address,
      );
    });

    context('# with wei', () => {
      let balance = 1000;

      before(async () => {
        await processTx(
          owner.sendTransaction({
            to: account,
            value: balance,
          }),
        );
      });

      it('expect to do first refund', async () => {
        const value = 100;
        const ownerBalance = await owner.getBalance();

        const { events, totalCost } = await processTx(
          personalAccountRegistry
            .connect(owner)
            .refundAccountCall(account, constants.AddressZero, value),
        );

        balance -= value;

        expect(events[0].event).toBe('AccountOwnerAdded');
        expect(events[1].event).toBe('AccountDeployed');
        expect(events[2].event).toBe('AccountCallRefunded');
        expect(events[2].args.account).toBe(account);
        expect(events[2].args.beneficiary).toBe(owner.address);
        expect(events[2].args.token).toBeZeroAddress();
        expect(events[2].args.value).toBeBN(value);

        await expect(owner.getBalance()).resolves.toBeBN(
          ownerBalance.sub(totalCost).add(value),
        );

        await expect(provider.getBalance(account)).resolves.toBeBN(balance);
      });

      it('expect to do second refund', async () => {
        const value = 50;
        const ownerBalance = await owner.getBalance();

        const {
          events: [event],
          totalCost,
        } = await processTx(
          personalAccountRegistry
            .connect(owner)
            .refundAccountCall(account, constants.AddressZero, value),
        );

        balance -= value;

        expect(event.event).toBe('AccountCallRefunded');
        expect(event.args.account).toBe(account);
        expect(event.args.beneficiary).toBe(owner.address);
        expect(event.args.token).toBeZeroAddress();
        expect(event.args.value).toBeBN(value);

        await expect(owner.getBalance()).resolves.toBeBN(
          ownerBalance.sub(totalCost).add(value),
        );

        await expect(provider.getBalance(account)).resolves.toBeBN(balance);
      });
    });

    context('# with token', () => {
      let balance = 1000;

      before(async () => {
        await processTx(
          wrappedWeiToken.connect(owner).depositTo(account, {
            value: balance,
          }),
        );
      });

      it('expect to do first refund', async () => {
        const value = 100;
        const ownerBalance = await wrappedWeiToken.balanceOf(owner.address);

        const { events } = await processTx(
          personalAccountRegistry
            .connect(owner)
            .refundAccountCall(account, wrappedWeiToken.address, value),
        );

        balance -= value;

        const event = events.find(
          ({ event }) => event === 'AccountCallRefunded',
        );

        expect(event.args.account).toBe(account);
        expect(event.args.beneficiary).toBe(owner.address);
        expect(event.args.token).toBe(wrappedWeiToken.address);
        expect(event.args.value).toBeBN(value);

        await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(
          ownerBalance.add(value),
        );

        await expect(wrappedWeiToken.balanceOf(account)).resolves.toBeBN(
          balance,
        );
      });

      it('expect to do second refund', async () => {
        const value = 50;
        const ownerBalance = await wrappedWeiToken.balanceOf(owner.address);

        const { events } = await processTx(
          personalAccountRegistry
            .connect(owner)
            .refundAccountCall(account, wrappedWeiToken.address, value),
        );

        balance -= value;

        const event = events.find(
          ({ event }) => event === 'AccountCallRefunded',
        );

        expect(event.event).toBe('AccountCallRefunded');
        expect(event.args.account).toBe(account);
        expect(event.args.beneficiary).toBe(owner.address);
        expect(event.args.token).toBe(wrappedWeiToken.address);
        expect(event.args.value).toBeBN(value);

        await expect(wrappedWeiToken.balanceOf(owner.address)).resolves.toBeBN(
          ownerBalance.add(value),
        );

        await expect(wrappedWeiToken.balanceOf(account)).resolves.toBeBN(
          balance,
        );
      });
    });
  });

  context('computeAccountAddress()', () => {
    it('expect to return correct account address', async () => {
      const owner = randomAddress();
      const account = await computeAccountAddress(
        personalAccountRegistry,
        'Account',
        owner,
        personalAccountRegistry.address,
        personalAccountImplementation.address,
      );

      await expect(
        personalAccountRegistry.computeAccountAddress(owner),
      ).resolves.toBe(account);
    });
  });

  context('isAccountDeployed()', () => {
    let account: string;

    before(async () => {
      const owner = signers.pop();
      account = await personalAccountRegistry.computeAccountAddress(
        owner.address,
      );

      // account deployment is a part of executing first account transaction
      await processTx(
        personalAccountRegistry
          .connect(owner)
          .executeAccountTransaction(account, randomAddress(), 0, '0x010203'),
      );
    });

    it('expect to return true when account is deployed', async () => {
      await expect(
        personalAccountRegistry.isAccountDeployed(account),
      ).resolves.toBeTruthy();
    });

    it('expect to return false when account is not deployed', async () => {
      await expect(
        personalAccountRegistry.isAccountDeployed(randomAddress()),
      ).resolves.toBeFalsy();
    });
  });

  context('verifyAccountOwner()', () => {
    const addedOwner = randomAddress();
    const removedOwner = randomAddress();
    let saltOwner: SignerWithAddress;
    let account: string;

    before(async () => {
      saltOwner = signers.pop();
      personalAccountRegistry = personalAccountRegistry.connect(saltOwner);

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );

      await processTx(
        personalAccountRegistry
          .connect(saltOwner)
          .addAccountOwner(account, addedOwner),
      );
      await processTx(
        personalAccountRegistry.addAccountOwner(account, removedOwner),
      );
      await processTx(
        personalAccountRegistry.removeAccountOwner(account, removedOwner),
      );
    });

    it('expect to return true for salt owner', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwner(account, saltOwner.address),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for added owner', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwner(account, addedOwner),
      ).resolves.toBeTruthy();
    });

    it('expect to return false for removed owner', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwner(account, removedOwner),
      ).resolves.toBeFalsy();
    });

    it('expect to return false for unknown owner', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwner(account, randomAddress()),
      ).resolves.toBeFalsy();
    });
  });

  context('verifyAccountOwnerAtBlock()', () => {
    const addedOwner = randomAddress();
    const removedOwner = randomAddress();
    let saltOwner: SignerWithAddress;
    let account: string;
    let removedAt: number;

    before(async () => {
      saltOwner = signers.pop();
      personalAccountRegistry = personalAccountRegistry.connect(saltOwner);

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );

      await processTx(
        personalAccountRegistry.addAccountOwner(account, addedOwner),
      );
      await processTx(
        personalAccountRegistry.addAccountOwner(account, removedOwner),
      );
      ({ blockNumber: removedAt } = await processTx(
        personalAccountRegistry.removeAccountOwner(account, removedOwner),
      ));
    });

    it('expect to return true for salt owner at any block', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwnerAtBlock(
          account,
          saltOwner.address,
          removedAt,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for added owner at any block', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwnerAtBlock(
          account,
          addedOwner,
          removedAt,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return true for removed owner before removing block', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwnerAtBlock(
          account,
          removedOwner,
          removedAt - 1,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return false for removed owner after removing block', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwnerAtBlock(
          account,
          removedOwner,
          removedAt,
        ),
      ).resolves.toBeFalsy();
    });

    it('expect to return false for unknown owner at any block', async () => {
      await expect(
        personalAccountRegistry.verifyAccountOwnerAtBlock(
          account,
          randomAddress(),
          removedAt,
        ),
      ).resolves.toBeFalsy();
    });
  });

  context('isValidAccountSignature()', () => {
    let saltOwner: SignerWithAddress;
    let unknownOwner: SignerWithAddress;
    let account: string;

    before(async () => {
      saltOwner = signers.pop();
      unknownOwner = signers.pop();

      account = await personalAccountRegistry.computeAccountAddress(
        saltOwner.address,
      );
    });

    it('expect to return true for valid signature', async () => {
      const message = 'test message';
      const signature = await saltOwner.signMessage(message);

      await expect(
        personalAccountRegistry[
          'isValidAccountSignature(address,bytes32,bytes)'
        ](
          account, //
          utils.hashMessage(message),
          signature,
        ),
      ).resolves.toBeTruthy();

      await expect(
        personalAccountRegistry[
          'isValidAccountSignature(address,bytes,bytes)' //
        ](
          account, //
          utils.hexlify(utils.toUtf8Bytes(message)),
          signature,
        ),
      ).resolves.toBeTruthy();
    });

    it('expect to return false for invalid signature', async () => {
      const message = 'test message';
      const signature = await unknownOwner.signMessage(message);

      await expect(
        personalAccountRegistry[
          'isValidAccountSignature(address,bytes32,bytes)'
        ](
          account, //
          utils.hashMessage(message),
          signature,
        ),
      ).resolves.toBeFalsy();

      await expect(
        personalAccountRegistry[
          'isValidAccountSignature(address,bytes,bytes)' //
        ](
          account, //
          utils.hexlify(utils.toUtf8Bytes(message)),
          signature,
        ),
      ).resolves.toBeFalsy();
    });
  });
});
