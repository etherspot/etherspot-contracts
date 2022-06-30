import { ethers, network, deployments } from 'hardhat';
import { ConnextFacet, Diamond, IERC20 } from '../../typings';
import {
  NETWORK_CONFIGS,
  NetworkNames
} from '../../extensions/constants'
import {
  processTx,
  randomAddress,
  SignerWithAddress
} from '../shared';

describe('ConnextFacet', () => {
  const TEST_TOKEN_ADDRESS = "0x3FFc03F05D1869f493c7dbf913E636C6280e0ff9";
  let signer: SignerWithAddress;
  let ConnextFacet: ConnextFacet;
  let token: IERC20;
  let diamond: Diamond;

  before(async function () {
    await network.provider.request({
      method: 'hardhat_reset',
      params: [
        {
          forking: {
            jsonRpcUrl: NETWORK_CONFIGS[NetworkNames.Goerli].defaultProviderUrl,
            blockNumber: 7139113,
          },
        },
      ],
    });
    await network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: ['0x1a258f501e1e36e0a7f7b8f3d75042ab1172a028'], // has lots of test tokens and some ether
    })
    signer = await ethers.getSigner(
      '0x1a258f501e1e36e0a7f7b8f3d75042ab1172a028'
    )
    token = (await ethers.getContractAt<IERC20>("IERC20", TEST_TOKEN_ADDRESS)).connect(signer);

    await deployments.fixture(['bridges', 'connext']);
    diamond = await ethers.getContract('Diamond');
    ConnextFacet = (
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
      ConnextFacet.connextTokenTransfer(
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
      ConnextFacet.connextTokenTransfer(
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
    await expect(ConnextFacet.connextTokenTransfer(
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
      ConnextFacet.connextCall(
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
      ConnextFacet.connextCall(
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
