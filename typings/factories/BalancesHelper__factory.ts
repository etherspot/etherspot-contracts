/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalancesHelper,
  BalancesHelperInterface,
} from "../BalancesHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__053a243a",
        type: "bytes8",
      },
    ],
    name: "c_053a243a",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__053a243a",
        type: "bytes8",
      },
    ],
    name: "c_false053a243a",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__053a243a",
        type: "bytes8",
      },
    ],
    name: "c_true053a243a",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x608060405234801561001057600080fd5b50610c9c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806317bd5f8e14610051578063472d3df91461009a5780635a7e4693146100f9578063ef5bfc3714610158575b600080fd5b6100986004803603602081101561006757600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061027b565b005b6100e1600480360360208110156100b057600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061027e565b60405180821515815260200191505060405180910390f35b6101406004803603602081101561010f57600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610285565b60405180821515815260200191505060405180910390f35b6102246004803603604081101561016e57600080fd5b810190808035906020019064010000000081111561018b57600080fd5b82018360208201111561019d57600080fd5b803590602001918460208302840111640100000000831117156101bf57600080fd5b9091929391929390803590602001906401000000008111156101e057600080fd5b8201836020820111156101f257600080fd5b8035906020019184602083028401116401000000008311171561021457600080fd5b9091929391929390505050610290565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561026757808201518184015260208101905061024c565b505050509050019250505060405180910390f35b50565b6000919050565b600060019050919050565b60606102a667c68b1d98fb22c46d60c01b61027b565b6102ba67c6dbbcd8d0b0a75460c01b61027b565b6102ce67fe9a717e82d642a660c01b61027b565b60606102e984849050878790506105e690919063ffffffff16565b67ffffffffffffffff811180156102ff57600080fd5b5060405190808252806020026020018201604052801561032e5781602001602082028036833780820191505090505b50905061034567cd6eb9b33709540560c01b61027b565b61035967f8f3feeb38c3415160c01b61027b565b60005b868690508110156105b15761037b6762975fe2028cb4ed60c01b61027b565b61038f679a555bc37d0d2eb960c01b61027b565b60005b858590508110156105a3576103b16795d876f2507ab2ca60c01b61027b565b6103c567936e784b63dfdf9560c01b61027b565b60006103ef6103e084898990506105e690919063ffffffff16565b8361079990919063ffffffff16565b905061040567d46680c7e7bd234d60c01b61027b565b6104196714db848c5d58b5b460c01b61027b565b600073ffffffffffffffffffffffffffffffffffffffff1687878481811061043d57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461051457610489675d87471edadf0e5160c01b61027b565b61049d67290af2eebf257f8160c01b61027b565b6104f78989858181106104ac57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168888858181106104d557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166108d6565b84828151811061050357fe5b602002602001018181525050610595565b61052867ce70a0e27194e76f60c01b61027b565b61053c6701efa42568b94a7960c01b61027b565b88888481811061054857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163184828151811061058857fe5b6020026020010181815250505b508080600101915050610392565b50808060010191505061035c565b506105c6677deda4e64305158a60c01b61027b565b6105da671f605b87bc25b22d60c01b61027b565b80915050949350505050565b60006105fc67da71fa079a81ffd760c01b610c68565b6106106741b7497a656b2aff60c01b610c68565b61062467d98b81b2db10bf3d60c01b610c68565b60008314156106725761064167bf9016e74a00145b60c01b610c68565b61065567b596061ed07f487d60c01b610c68565b61066967789b7fdb3480215060c01b610c68565b60009050610793565b610686676689341e4003134660c01b610c68565b61069a677a7d58edc470932b60c01b610c68565b6106ae67f412c09f1bbeca5160c01b610c68565b600082840290506106c967e369668a90ef740860c01b610c68565b6106dd6760a2d6795159040160c01b610c68565b6106f1679225563262bccb1660c01b610c68565b828482816106fb57fe5b0414610752576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610c6c6024913960400191505060405180910390fd5b61076667b13f286d61ee525660c01b610c68565b61077a6783d2a7fbd689f32760c01b610c68565b61078e67eb62c518ce0ecac460c01b610c68565b809150505b92915050565b60006107af672f7081d3ac69d64f60c01b610c68565b6107c367e05e60bdd722f66160c01b610c68565b6107d76774c838bbf482bd8560c01b610c68565b600082840190506107f26791de80e355d3edb460c01b610c68565b610806677ca3e91bc6a152c860c01b610c68565b61081a6725c47f0291cfa2c760c01b610c68565b83811015610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b6108a46704329dbd22b9b98860c01b610c68565b6108b86763377f755a44877e60c01b610c68565b6108cc676af9a393a18466ca60c01b610c68565b8091505092915050565b60006108ec675673a0497e814aea60c01b61027b565b6109006732722c7c81d86c4860c01b61027b565b61091467b588544d23857c7e60c01b61027b565b600061092a67187267ffe245f94860c01b61027b565b61093e6753db85e12ee2f53a60c01b61027b565b600061095467421fc2006f5726d960c01b61027b565b833b905061096c671c341cd1a12bdfa260c01b61027b565b61098067279083824f82bb3b60c01b61027b565b6000811115610c205761099d67df2402dc51823f8660c01b61027b565b6109b16719eb1ff233f8f6f760c01b61027b565b6109c567b2d49fceec0ddc8a60c01b61027b565b60008473ffffffffffffffffffffffffffffffffffffffff166370a0823160e01b87604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610a9d5780518252602082019150602081019050602083039250610a7a565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610afd576040519150601f19603f3d011682016040523d82523d6000602084013e610b02565b606091505b50509050610b1a670cb52ffe92c30a4160c01b61027b565b610b2e67bd95dd1f04824a7f60c01b61027b565b8015610c0557610b4867f143da1188004b3460c01b61027b565b610b5c673ed87264292b6bae60c01b61027b565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610bc357600080fd5b505afa158015610bd7573d6000803e3d6000fd5b505050506040513d6020811015610bed57600080fd5b81019080805190602001909291905050509250610c1a565b610c1967387efd99b71f621660c01b61027b565b5b50610c35565b610c3467c070e97dbfd69cd460c01b61027b565b5b610c4967c97558f4f9b6aeac60c01b61027b565b610c5d67e220fc6573b3a40060c01b61027b565b819250505092915050565b5056fe536166654d6174684c69623a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c634300060c000a";

type BalancesHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancesHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancesHelper__factory extends ContractFactory {
  constructor(...args: BalancesHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalancesHelper> {
    return super.deploy(overrides || {}) as Promise<BalancesHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalancesHelper {
    return super.attach(address) as BalancesHelper;
  }
  connect(signer: Signer): BalancesHelper__factory {
    return super.connect(signer) as BalancesHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancesHelperInterface {
    return new utils.Interface(_abi) as BalancesHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancesHelper {
    return new Contract(address, _abi, signerOrProvider) as BalancesHelper;
  }
}
