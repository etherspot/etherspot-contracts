/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BalanceChecker } from "../BalanceChecker";

export class BalanceChecker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BalanceChecker> {
    return super.deploy(overrides || {}) as Promise<BalanceChecker>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalanceChecker {
    return super.attach(address) as BalanceChecker;
  }
  connect(signer: Signer): BalanceChecker__factory {
    return super.connect(signer) as BalanceChecker__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceChecker {
    return new Contract(address, _abi, signerOrProvider) as BalanceChecker;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0xff09c856",
        type: "bytes32",
      },
    ],
    name: "c_0xff09c856",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111bf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063285bbff91461003b578063ef5bfc3714610069575b600080fd5b6100676004803603602081101561005157600080fd5b810190808035906020019092919050505061018c565b005b6101356004803603604081101561007f57600080fd5b810190808035906020019064010000000081111561009c57600080fd5b8201836020820111156100ae57600080fd5b803590602001918460208302840111640100000000831117156100d057600080fd5b9091929391929390803590602001906401000000008111156100f157600080fd5b82018360208201111561010357600080fd5b8035906020019184602083028401116401000000008311171561012557600080fd5b909192939192939050505061018f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017857808201518184015260208101905061015d565b505050509050019250505060405180910390f35b50565b60606101bd7f071af6d23ff33425cb6b80b6c12d4df80dc0262dd73344b294345a88c741b55260001b61018c565b6101e97fc52beacedbc83b7c24c90974d75532213b931da7f2c97b7d763090135bfb15b160001b61018c565b6102157fa1c93a574c6672dc671f9fa9798a8684efafa314afd6f55c4c96220252a8686860001b61018c565b606061023084849050878790506106d590919063ffffffff16565b67ffffffffffffffff8111801561024657600080fd5b506040519080825280602002602001820160405280156102755781602001602082028036833780820191505090505b5090506102a47f83a05524e17a82d68abdbb4528a1436a2835795e78a8fcfa8239e69c720a52ca60001b61018c565b6102d07fef161ab22cae239783956e8df296d2273e8dd1f543577687477e699eebe1fc2c60001b61018c565b60005b868690508110156106705761030a7f54cf42a06eb771575d6329125aeb75982f81754a1bfc335e428b1c74dd185b4560001b61018c565b6103367feaef0d248a1933e7cbfc43365eaa7fe7cdb8fc6922b8980c708b8d20af75c6f260001b61018c565b60005b85859050811015610662576103707fabdb810fdf36231481dcd1836060683b7ea0668ed3f877296d7506c21f95dfdd60001b61018c565b61039c7f9affdfe9f784bcb84af265a36847d63bf59d478f75138f8638adaa9200c2f95260001b61018c565b60006103c66103b784898990506106d590919063ffffffff16565b836109f090919063ffffffff16565b90506103f47f79ad071505a2ade8aaae9fe473f6b247f9283ac16ed58712267a6326ade2673860001b61018c565b6104207f2e295b5d9796ac148945d947cab9f77ed9b96359ed38974438958999c922c41360001b61018c565b600073ffffffffffffffffffffffffffffffffffffffff1687878481811061044457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610577576104a87f974d8b9af1e62f59381d8a42e34d8a04aa12b3e32a03a802c4be7b300625d2ae60001b61018c565b6104d47fa2c5845e1732450087a75f0622f641c5834fdb9603922d299ff50b262b945b1260001b61018c565b6105007f793d2cc29e20a15e1a530f29608d50d3e2c244006259a94e0b1401aebcdd6a3960001b61018c565b61055a89898581811061050f57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1688888581811061053857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16610c05565b84828151811061056657fe5b602002602001018181525050610654565b6105a37f8268e61357b3779f16c9ce92b37b7ece0d10ee25040d83d3d50ac27899e4444760001b61018c565b6105cf7fb854e39bc3213c65171d181f462fcb49c78568d53c07ddc5a6290d83efd0fbdf60001b61018c565b6105fb7f0bfc02258269ee50d5e01369bc8e7ad6a1367dddda3119fe7394443f77fd798560001b61018c565b88888481811061060757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163184828151811061064757fe5b6020026020010181815250505b508080600101915050610339565b5080806001019150506102d3565b5061069d7f68d7c051800d3f054438ca0b95453278a037bf1cca2a56bd168bdeee5b45879160001b61018c565b6106c97f987b93a7225815a92b5da1ea00b6d83e952545ad4d1fa14245e5efecb0ec6c5960001b61018c565b80915050949350505050565b60006107037fd42c906238cebd28ed78a274d4c804d9eef78cdb161cc54c6f3ca604b1b07e1660001b61118b565b61072f7f483a5fec117f576717a266e051df29b532c157759a1f5a60e966a20a2d8ddc3260001b61118b565b61075b7f02566f6fa48289d29687158d017b7b0bed4e1c9a399e39971f430c8f39714ba060001b61118b565b60008314156107f1576107907fc39aaa5bfe8ea122ca7125ed5d8782c2a2247857b0094038b0dcd8934745c51960001b61118b565b6107bc7fa5d5cf05e5508b91d078af05f6d0f34e5145e864eb8fee1e66e292a2f6909c7e60001b61118b565b6107e87fb7c50c4612566d8fdca6d9d9558fe17132d816ea035ff1cc93c9678231bb1eb960001b61118b565b600090506109ea565b61081d7fd2881d1244d08f0a853655f93316e90760eb31ed78eb76d96de747c91980b0fe60001b61118b565b6108497f6a6e738fca0b952f056dbf66f4e93708a373ea88bb898b38b3b2ac46b2a0c24a60001b61118b565b6108757f1d0b759eb6a9e0f694025909e2dcf0695ef8b387c5d3d4d8b4c770c51255786e60001b61118b565b600082840290506108a87f2bc4c60431d8a791b89091377a2098d09937cbf6fdd95c2dcf1e60eb1719e57260001b61118b565b6108d47f22a54773aaa929dffc4e6c14f2c16fce0a1ba07dfe48dc288da5ad62c7f7c2b260001b61118b565b6109007f1a24e7ce8f4a8a745fcac6b80152771f91fa4b56c0efa357c910d0d6f2c5ad9360001b61118b565b8284828161090a57fe5b0414610961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061118f6024913960400191505060405180910390fd5b61098d7ffbe9a8b4d0137b35d55dbe415cbb5d8f2ed0b314c6be14b460689f74588e852c60001b61118b565b6109b97f20341619012e6d11c737464e7223c38ab1cb01462d7af666c9f410e45dc29d0460001b61118b565b6109e57f2ecc866970e91c5aea8f99ade18cf1c409abc8dc9561485b225bb32176fb2e3460001b61118b565b809150505b92915050565b6000610a1e7fc6bed5d0a8f1849779f5b417b01b7f2a183cf4a686670467357ffdd8b2e3defb60001b61118b565b610a4a7f36b6a6f3de50679522ec2640823bed6750d2ba144435279299d1964e7127506160001b61118b565b610a767f0ef4f70b59f1b63096f89db6a64098b05bc7a7faa0949296d6e14151736343ef60001b61118b565b60008284019050610aa97fa983f64e5ef779caaa2dfbc96f16b72b43aeca6bb915650c166cdf77fe78f4db60001b61118b565b610ad57fc6b8448d64d5e04ea67d796adeedf510df1597a7e897e2a0e7b936afb02e8e2d60001b61118b565b610b017f815d27549612fe46ca9afbbc7615f8862c93265b0485d596807d1aa32f154e1a60001b61118b565b83811015610b77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b610ba37f811f238fd570b1db5c9dc8ed3abb8baaea69a2d12af4f82a6afe77bd10dc93e860001b61118b565b610bcf7f9675d913c5871bdf8fc01473445b0e72b4ccf57d9bac79d6e0868525054a62aa60001b61118b565b610bfb7f21e0a849de8cb3a74ae368f6ad80459479166d68e2fe96cb51dbfb85944235a360001b61118b565b8091505092915050565b6000610c337fa7ad3eb4a515703f54be980169029857e06414d07e602ecc468bb42967b2c7f760001b61018c565b610c5f7f195c9564d4176bd78a7578ad76629b44cbe71e172865f185ae4a1e2909c60cf460001b61018c565b610c8b7f22f1441e62bdd5d2a2ebe46e438b7dd469071fdf0d71812786850f0a3e3c8b0c60001b61018c565b6000610cb97f831b502eb9a1d7e39a022b7f9dd00b0a119f30ed8b20604630c7fa2b16e7061060001b61018c565b610ce57f6ada9d40d3a1186c7ddcb80b2da358110d00e960b7d550a4012503ff0f326f3660001b61018c565b6000610d137fa754ff0e75113bf20706024e3f00e56a3bb97876ed63dc04b769836573a3b3bc60001b61018c565b833b9050610d437f42d2fa673aab20a40dd36f8dc613780c088b3fad80d8855e415f88e3378826db60001b61018c565b610d6f7f2ddf377a0d1d96183351d63961523073226e999f21d681910b1742a5c923134660001b61018c565b60008111156110fb57610da47fb12724f5500347bcced2b4801883ee1b69e41d1933cce6c2033506a8a24e32ce60001b61018c565b610dd07fc0e1404c3eb6a21c56d56e24e916153ab366ad3f26536d37e74645ded26cf23b60001b61018c565b610dfc7fd61531c3f24222cc0a96de399938e81dd0dd546c2b64aa042960ab199d683fd460001b61018c565b60008473ffffffffffffffffffffffffffffffffffffffff166370a0823160e01b87604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610ed45780518252602082019150602081019050602083039250610eb1565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610f34576040519150601f19603f3d011682016040523d82523d6000602084013e610f39565b606091505b50509050610f697f7f8518fcf2e4b140ff8685bf2384824d5d012d88c7e124194b793bc20ff037d160001b61018c565b610f957f3e5b91161c549112f1af8102912d1e0b48bc8536925f3a2026829b9cf836cabe60001b61018c565b80156110c857610fc77f1373ddfc9be579f08e55446629b64a7e3ec6bbc31e3f5b24526850c6271b159560001b61018c565b610ff37f26d3ddbf031108a1f9eeceb9e456779f801471e5298957bc6767826e9f5a87e460001b61018c565b61101f7fd81853ebfc9ae05e3695f91a33c0864ace5a012447b38e57089ca5e2cd67c6ba60001b61018c565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561108657600080fd5b505afa15801561109a573d6000803e3d6000fd5b505050506040513d60208110156110b057600080fd5b810190808051906020019092919050505092506110f5565b6110f47f2d7e418eb02a774cf44d49fc294b24eeaa817073b66b73101b59fb0c3c55520c60001b61018c565b5b50611128565b6111277f2b00ec4a4b34e208ea75e243e4089f9d1e2feed07956e89338aaff0419edecdc60001b61018c565b5b6111547f8073ed310094915f28ed48e2b50d2746dfc600019cbd3b0f13c53bc1edfc4c9560001b61018c565b6111807fb4e5b327127a6c41fd34749d09ec25640c3ef659db95323f09cbe6e9cb770d9760001b61018c565b819250505092915050565b5056fe536166654d6174684c69623a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c634300060c000a";
