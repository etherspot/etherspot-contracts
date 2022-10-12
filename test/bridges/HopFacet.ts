
import { ethers, network, deployments, config } from 'hardhat';
import { Diamond, HopFacet, IERC20 } from '../../typings';
import {
  processTx,
  randomAddress,
  SignerWithAddress,
} from '../shared';
import { HopConfig } from '../../config/hop';

describe('HopFacet', () => {
  describe("L1->L2", () => {
    const TEST_TOKEN_ADDRESS = '0x98339D8C260052B7ad81c28c16C0b98420f2B46a';
    const SIGNER_ADDRESS = '0x03db1fa14c9d67a426d1d03514901fff08dc87cf';
    let signer: SignerWithAddress;
    let hopFacet: HopFacet;
    let token: IERC20;
    let diamond: Diamond;

    before(async function () {
      const networkConfig: any = config.networks['goerli'];
      await network.provider.request({
        method: 'hardhat_reset',
        params: [
          {
            forking: {
              jsonRpcUrl: networkConfig.url,
              blockNumber: 7345346,
            },
          },
        ],
      });
      await network.provider.request({
        method: 'hardhat_impersonateAccount',
        params: [SIGNER_ADDRESS], // has lots of test tokens and some ether
      });
      signer = await ethers.getSigner(
        SIGNER_ADDRESS
      );
      await network.provider.send('hardhat_setBalance', [
        SIGNER_ADDRESS,
        ethers.utils.parseEther('1000.0').toHexString(),
      ]);
      token = (await ethers.getContractAt<IERC20>('IERC20', TEST_TOKEN_ADDRESS)).connect(signer);

      await deployments.fixture(['hop']);
      diamond = await ethers.getContract('Diamond');
      hopFacet = (
        await ethers.getContractAt<HopFacet>(
          'HopFacet',
          diamond.address
        )
      ).connect(signer);
    });

    it('performs erc20 token swap', async () => {
      await token.approve(
        diamond.address,
        ethers.constants.MaxUint256
      );
      const recipient = randomAddress();
      const amount = ethers.utils.parseEther('10');
      const { events } = await processTx(
        hopFacet.hopTokenTransfer(
          {
            bridge: '0x39B052820F808534d5eD7C2b26f070169Fa6A686',
            ammWrapper: ethers.constants.AddressZero,
            asset: TEST_TOKEN_ADDRESS,
            recipient: recipient,
            chainId: 80001,
            amount: amount,
            bonderFee: 0,
            amountOutMin: 0,
            deadline: 0,
            destinationAmountOutMin: 0,
            destinationDeadline: 0,
          }
        )
      );

      const event = events.find(({ event }) => event === 'HopTokenSwap');
      expect(event).toBeDefined();
      expect(event.args._destination).toEqual(ethers.BigNumber.from(80001));
      expect(event.args._bridge).toEqual('0x39B052820F808534d5eD7C2b26f070169Fa6A686');
      expect(event.args._ammWrapper).toEqual(ethers.constants.AddressZero);
      expect(event.args._recipient).toEqual(recipient);
      expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
      expect(event.args._amount).toEqual(amount);
      expect(event.args._bonderFee).toEqual(ethers.BigNumber.from(0));
      expect(event.args._amountOutMin).toEqual(ethers.BigNumber.from(0));
      expect(event.args._deadline).toEqual(ethers.BigNumber.from(0));
      expect(event.args._destinationAmountOutMin).toEqual(ethers.BigNumber.from(0));
      expect(event.args._destinationDeadline).toEqual(ethers.BigNumber.from(0));
    });
  });

  describe('L2->L2, L2->L1', () => {
    const TEST_TOKEN_ADDRESS = '0x6D4dd09982853F08d9966aC3cA4Eb5885F16f2b2';
    const SIGNER_ADDRESS = '0x02b260F6f47FF328496Be632678d06a564B8c4AB';
    let signer: SignerWithAddress;
    let hopFacet: HopFacet;
    let token: IERC20;
    let diamond: Diamond;

    before(async function () {
      HopConfig['hardhat'] = 2;
      const networkConfig: any = config.networks['mumbai'];
      await network.provider.request({
        method: 'hardhat_reset',
        params: [
          {
            forking: {
              jsonRpcUrl: networkConfig.url,
              blockNumber: 27472016,
            },
          },
        ],
      });
      await network.provider.request({
        method: 'hardhat_impersonateAccount',
        params: [SIGNER_ADDRESS], // has lots of test tokens and some ether
      });
      signer = await ethers.getSigner(
        SIGNER_ADDRESS
      );
      await network.provider.send('hardhat_setBalance', [
        SIGNER_ADDRESS,
        ethers.utils.parseEther('1000.0').toHexString(),
      ]);
      token = (await ethers.getContractAt<IERC20>('IERC20', TEST_TOKEN_ADDRESS)).connect(signer);

      await deployments.fixture(['hop']);
      diamond = await ethers.getContract('Diamond');
      hopFacet = (
        await ethers.getContractAt<HopFacet>(
          'HopFacet',
          diamond.address
        )
      ).connect(signer);
    });

    it('performs erc20 token swap', async () => {
      await token.approve(
        diamond.address,
        ethers.constants.MaxUint256
      );
      const recipient = randomAddress();
      const amount = ethers.utils.parseEther('10');
      const { events } = await processTx(
        hopFacet.hopTokenTransfer(
          {
            bridge: ethers.constants.AddressZero,
            ammWrapper: '0xa228A81FA5d3525b7637ADF66FA35794451bBa7c',
            asset: TEST_TOKEN_ADDRESS,
            recipient: recipient,
            chainId: 80001,
            amount: amount,
            bonderFee: 0,
            amountOutMin: 0,
            deadline: 0,
            destinationAmountOutMin: 0,
            destinationDeadline: 0,
          }
        )
      );

      console.log(events);
      const event = events.find(({ event }) => event === 'HopTokenSwap');
      expect(event).toBeDefined();
      expect(event.args._destination).toEqual(ethers.BigNumber.from(80001));
      expect(event.args._bridge).toEqual(ethers.constants.AddressZero);
      expect(event.args._ammWrapper).toEqual('0xa228A81FA5d3525b7637ADF66FA35794451bBa7c');
      expect(event.args._recipient).toEqual(recipient);
      expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
      expect(event.args._amount).toEqual(amount);
      expect(event.args._bonderFee).toEqual(ethers.BigNumber.from(0));
      expect(event.args._amountOutMin).toEqual(ethers.BigNumber.from(0));
      expect(event.args._deadline).toEqual(ethers.BigNumber.from(0));
      expect(event.args._destinationAmountOutMin).toEqual(ethers.BigNumber.from(0));
      expect(event.args._destinationDeadline).toEqual(ethers.BigNumber.from(0));
    });

    after(() => {
      HopConfig['hardhat'] = 1;
    })
  });
});
