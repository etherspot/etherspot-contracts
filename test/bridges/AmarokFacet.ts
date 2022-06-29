import { ethers, network, deployments } from 'hardhat';
import { AmarokFacet, Diamond, IERC20, IConnextHandler } from '../../typings';
import * as shared from '../shared';
import {
  NETWORK_CONFIGS,
  NetworkNames
} from '../../extensions/constants'

describe.only('AmarokFacet', () => {
  const RINKEBY_CONNEXT_HANDLER = "0x2307Ed9f152FA9b3DcDfe2385d279D8C2A9DF2b0";
  const RINKEBY_TEST_TOKEN = "0x3FFc03F05D1869f493c7dbf913E636C6280e0ff9";
  let signer: shared.SignerWithAddress;
  let amarokFacet: AmarokFacet;
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
    token = (await ethers.getContractAt<IERC20>("IERC20", RINKEBY_TEST_TOKEN)).connect(signer);

    await deployments.fixture(['bridges', 'amarok']);
    diamond = await ethers.getContract('Diamond');
    amarokFacet = (await ethers.getContractAt<AmarokFacet>('AmarokFacet', diamond.address)).connect(signer);
  });

  it("performs erc20 token swap", async () => {
    await token.approve(
      diamond.address,
      ethers.constants.MaxUint256
    );
    const recipient = shared.randomAddress();
    const { events } = await shared.processTx(
      amarokFacet.amarokTokenTransfer(
        RINKEBY_TEST_TOKEN,
        recipient,
        1111,
        ethers.utils.parseEther("100"),
        ethers.BigNumber.from(0)
      )
    );

    const event = events.find(({ event }) => event === 'AmarokTokenSwap');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(recipient);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(RINKEBY_TEST_TOKEN);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("100"));
    expect(event.args._relayerFee).toEqual(ethers.BigNumber.from(0));
    expect(event.args._transferId).toBeDefined();
  });

  // it("performs native asset swap", async () => {
  //   const recipient = randomAddress();
  //   tracer.enabled = true;
  //   const { events } = await processTx(
  //     amarokFacet.amarokNativeAssetTransfer(
  //       randomAddress(),
  //       1111,
  //       0,
  //       { value: ethers.utils.parseEther("0.05") }
  //     )
  //   );
  //   const event = events.find(({ event }) => event === 'AmarokTokenSwap');
  //   expect(event).toBeDefined();
  //   expect(event.args._destination).toEqual(1111);
  //   expect(event.args._recipient).toEqual(recipient);
  //   expect(event.args._transferId).toBeDefined();
  //   expect(event.args._asset).toEqual(RINKEBY_TEST_TOKEN);
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
    const { events } = await shared.processTx(
      amarokFacet.amarokCall(
        RINKEBY_TEST_TOKEN,
        callData.data,
        1111,
        RINKEBY_TEST_TOKEN,
        ethers.utils.parseEther("0"),
        ethers.BigNumber.from(0),
        signer.address,
        ethers.constants.AddressZero,
        0
      )
    );
    const event = events.find(({ event }) => event === 'AmarokXCall');
    expect(event).toBeDefined();
    expect(event.args._destination).toEqual(1111);
    expect(event.args._recipient).toEqual(RINKEBY_TEST_TOKEN);
    expect(event.args._transferId).toBeDefined();
    expect(event.args._asset).toEqual(RINKEBY_TEST_TOKEN);
    expect(event.args._amount).toEqual(ethers.utils.parseEther("0"));
    expect(event.args._callData).toEqual(callData.data);
  });
});
