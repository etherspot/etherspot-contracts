import { ethers, network, deployments, config } from 'hardhat';
import { ConnextFacet, Diamond, IERC20 } from '../../typings';
import {
  processTx,
  randomAddress,
  SignerWithAddress
} from '../shared';

describe('ConnextFacet', () => {
  const TEST_TOKEN_ADDRESS = "0x26FE8a8f86511d678d031a022E48FfF41c6a3e3b";
  let signer: SignerWithAddress;
  let connextFacet: ConnextFacet;
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
            blockNumber: 7328367,
          },
        },
      ],
    });
    await network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: ['0xf06aa54d07693d28d00d6704212dd49dbad1e722'], // has lots of test tokens and some ether
    })
    signer = await ethers.getSigner(
      '0xf06aa54d07693d28d00d6704212dd49dbad1e722'
    )
    token = (await ethers.getContractAt<IERC20>("IERC20", TEST_TOKEN_ADDRESS)).connect(signer);

    await deployments.fixture(['bridges', 'connext']);
    diamond = await ethers.getContract('Diamond');
    connextFacet = (
      await ethers.getContractAt<ConnextFacet>(
          'ConnextFacet',
          diamond.address
        )
    ).connect(signer);
  });

  it("performs erc20 token swap", async () => {
    await token.approve(
      diamond.address,
      ethers.constants.MaxUint256
    );
    const recipient = randomAddress();
    const { events } = await processTx(
      connextFacet.connextTokenTransfer(
        TEST_TOKEN_ADDRESS,
        recipient,
        1111,
        ethers.utils.parseEther("100"),
        ethers.BigNumber.from(0)
      )
    );

    const event = events.find(({ event }) => event === 'ConnextTokenSwap');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(recipient);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("100"));
    expect(event.args._relayerFee).toEqual(ethers.BigNumber.from(0));
    expect(event.args._transferId).toBeDefined();
  });

  it("performs erc20 token swap with fee", async () => {
    await token.approve(
      diamond.address,
      ethers.constants.MaxUint256
    );
    const recipient = randomAddress();
    const { events } = await processTx(
      connextFacet.connextTokenTransfer(
        TEST_TOKEN_ADDRESS,
        recipient,
        1111,
        ethers.utils.parseEther("100"),
        ethers.utils.parseEther("0.05"),
        {
          value: ethers.utils.parseEther("0.05")
        }
      )
    );

    const event = events.find(({ event }) => event === 'ConnextTokenSwap');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(recipient);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("100"));
    expect(event.args._relayerFee).toEqual(ethers.utils.parseEther("0.05"));
    expect(event.args._transferId).toBeDefined();
  });

  it("should not perform call with wrong fee", async () => {
    await token.approve(
      diamond.address,
      ethers.constants.MaxUint256
    );
    const recipient = randomAddress();
    await expect(connextFacet.connextTokenTransfer(
      TEST_TOKEN_ADDRESS,
      recipient,
      1111,
      ethers.utils.parseEther("100"),
      ethers.utils.parseEther("0.05"),
      {
        value: ethers.utils.parseEther("0.04")
      }
    )).rejects.toThrow(/value/);
  });

  // it("performs native asset swap", async () => {
  //   const recipient = randomAddress();
  //   const { events } = await processTx(
  //     ConnextFacet.connextNativeAssetTransfer(
  //       randomAddress(),
  //       1111,
  //       0,
  //       { value: ethers.utils.parseEther("0.05") }
  //     )
  //   );
  //   const event = events.find(({ event }) => event === 'ConnextTokenSwap');
  //   expect(event).toBeDefined();
  //   expect(event.args._destination).toEqual(1111);
  //   expect(event.args._recipient).toEqual(recipient);
  //   expect(event.args._transferId).toBeDefined();
  //   expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
  //   expect(event.args._amount).toEqual(ethers.utils.parseEther("100"));
  //   expect(event.args._relayerFee).toEqual(ethers.BigNumber.from(0));
  //   expect(event.args._transferId).toBeDefined();
  // });

  it("performs crosschain call", async () => {
    await token.approve(
      diamond.address,
      ethers.constants.MaxUint256
    );
    const callData = await token.populateTransaction.totalSupply();
    const { events } = await processTx(
      connextFacet.connextCall(
        TEST_TOKEN_ADDRESS,
        callData.data,
        1111,
        TEST_TOKEN_ADDRESS,
        ethers.utils.parseEther("0"),
        ethers.BigNumber.from(0),
        signer.address,
        ethers.constants.AddressZero,
        0
      )
    );
    const event = events.find(({ event }) => event === 'ConnextXCall');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("0"));
    expect(event.args._callData).toEqual(callData.data);
  });

  it("performs crosschain call with fee", async () => {
    const callData = await token.populateTransaction.totalSupply();
    const { events } = await processTx(
      connextFacet.connextCall(
        TEST_TOKEN_ADDRESS,
        callData.data,
        1111,
        TEST_TOKEN_ADDRESS,
        ethers.utils.parseEther("0"),
        ethers.utils.parseEther("0.05"),
        signer.address,
        ethers.constants.AddressZero,
        0,
        {
          value: ethers.utils.parseEther("0.05")
        }
      )
    );
    const event = events.find(({ event }) => event === 'ConnextXCall');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(TEST_TOKEN_ADDRESS);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("0"));
    expect(event.args._callData).toEqual(callData.data);
    expect(event.args._relayerFee).toEqual(ethers.utils.parseEther("0.05"));
  });
});
