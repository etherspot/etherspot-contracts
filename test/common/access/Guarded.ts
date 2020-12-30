import { ethers } from 'hardhat';
import { utils } from 'ethers';
import { GuardedMock } from '../../../typings';
import {
  SignerWithAddress,
  processTx,
  randomAddress,
  randomHex32,
} from '../../shared';

const { getSigners } = ethers;

describe('Guarded (using mock)', () => {
  const guardians: SignerWithAddress[] = [];
  let signers: SignerWithAddress[];
  let guardedMock: GuardedMock;

  before(async () => {
    signers = await getSigners();

    for (let i = 0; i < 5; i += 1) {
      guardians.push(signers.pop());
    }

    guardedMock = (await ethers
      .getContractFactory('GuardedMock')
      .then(factory =>
        factory.deploy(guardians.map(({ address }) => address)),
      )) as GuardedMock;
  });

  context('addGuardian()', () => {
    let guardian: SignerWithAddress;

    before(() => {
      guardian = signers.pop();
    });

    it('expect to add guardian', async () => {
      const sender = guardians[0];
      const {
        events: [event],
      } = await processTx(
        guardedMock.connect(sender).addGuardian(guardian.address),
      );

      expect(event.event).toBe('GuardianAdded');
      expect(event.args.sender).toBe(sender.address);
      expect(event.args.guardian).toBe(guardian.address);

      guardians.push(guardian);
    });

    it('expect to revert when guardian already exists', async () => {
      await expect(
        guardedMock.connect(guardians[0]).addGuardian(guardians[1].address),
      ).rejects.toThrow(/revert/);
    });
  });

  context('removeGuardian()', () => {
    let guardian: SignerWithAddress;

    before(() => {
      guardian = guardians.pop();
    });

    it('expect to remove guardian', async () => {
      const sender = guardians[0];
      const {
        events: [event],
      } = await processTx(
        guardedMock.connect(sender).removeGuardian(guardian.address),
      );

      expect(event.event).toBe('GuardianRemoved');
      expect(event.args.sender).toBe(sender.address);
      expect(event.args.guardian).toBe(guardian.address);

      guardians.push(guardian);
    });

    it("expect to revert when guardian doesn't exist", async () => {
      await expect(
        guardedMock.connect(guardians[0]).removeGuardian(randomAddress()),
      ).rejects.toThrow(/revert/);
    });
  });

  context('isGuardian()', () => {
    it('expect to return true when guardian exists', async () => {
      await expect(
        guardedMock.isGuardian(guardians[0].address),
      ).resolves.toBeTruthy();
    });

    it("expect to return false when guardian doesn't exist", async () => {
      await expect(
        guardedMock.isGuardian(randomAddress()),
      ).resolves.toBeFalsy();
    });
  });

  context('isGuardian()', () => {
    const message = 'a b c';
    const messageHash = utils.hashMessage(message);

    it('expect to return true on correct signature', async () => {
      const signature = await guardians[0].signMessage(message);

      await expect(
        guardedMock.verifyGuardianSignature(messageHash, signature),
      ).resolves.toBeTruthy();
    });

    it('expect to return false on invalid signature', async () => {
      await expect(
        guardedMock.verifyGuardianSignature(messageHash, randomHex32()),
      ).resolves.toBeFalsy();
    });
  });
});
