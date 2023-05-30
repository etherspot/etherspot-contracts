/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnextFacet, ConnextFacetInterface } from "../ConnextFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "ConnextEthSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connext",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domainId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    name: "ConnextInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    name: "ConnextTokenSwap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destinationUnwrapper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "connextEthTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_slippage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "connextTokenTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    name: "initConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b46806100206000396000f3fe6080604052600436106100345760003560e01c80633205dc691461003957806351b401b914610062578063da328d541461007e575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190611064565b61009a565b005b61007c600480360381019061007791906110ed565b61029c565b005b610098600480360381019061009391906110ed565b61064f565b005b6100a26109e3565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610111576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610108906111d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610180576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610177906111d7565b60405180910390fd5b600061018a610a7e565b9050838160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828160000160146101000a81548163ffffffff021916908363ffffffff160217905550818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168363ffffffff168573ffffffffffffffffffffffffffffffffffffffff167fe23ac138025651e2fb684be9a5c635424d4dac7fc73449494c24c4955e79027860405160405180910390a450505050565b60006102a6610aab565b90506000879050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff160361031c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610313906111d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff160361038b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610382906111d7565b60405180910390fd5b610393610ae3565b63ffffffff168563ffffffff16036103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d790611269565b60405180910390fd5b823414610422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610419906112d5565b60405180910390fd5b868173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161045e929190611304565b602060405180830381865afa15801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f9190611342565b10156104e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d7906113e1565b60405180910390fd5b61050d3330898473ffffffffffffffffffffffffffffffffffffffff16610b0b909392919063ffffffff16565b61053882888373ffffffffffffffffffffffffffffffffffffffff16610b949092919063ffffffff16565b60008273ffffffffffffffffffffffffffffffffffffffff16638aac16ba85888a8d338e8c604051806020016040528060008152506040518963ffffffff1660e01b815260040161058f97969594939291906114af565b60206040518083038185885af11580156105ad573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105d2919061155b565b90508873ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e08b888660405161063c93929190611597565b60405180910390a4505050505050505050565b6000610659610aab565b90506000610665610ce3565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16036106d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cd906111d7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073c906111d7565b60405180910390fd5b61074d610ae3565b63ffffffff168563ffffffff160361079a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079190611269565b60405180910390fd5b82876107a691906115fd565b34146107e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107de906116a3565b60405180910390fd5b60008190508073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0896040518263ffffffff1660e01b81526004016000604051808303818588803b15801561083457600080fd5b505af1158015610848573d6000803e3d6000fd5b50505050508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3848a6040518363ffffffff1660e01b81526004016108889291906116c3565b6020604051808303816000875af11580156108a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cb9190611724565b50506000866040516020016108e09190611751565b604051602081830303815290604052905060008373ffffffffffffffffffffffffffffffffffffffff16638aac16ba86898d87338f8d8a6040518963ffffffff1660e01b815260040161093997969594939291906114af565b60206040518083038185885af1158015610957573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061097c919061155b565b90508773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167fe16c7dcc828782adcdd94aaeb1d07c3ae5a6d593a6b851ab5e023f9c961436873488856040516109cf93929190611597565b60405180910390a350505050505050505050565b6109eb610d1b565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a73906117de565b60405180910390fd5b565b6000807ffa2e9c22c7fe2104814a1d7e2c66c58d10a2d7989d5bcf01173a2564aa59c04d90508091505090565b600080610ab6610a7e565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b600080610aee610a7e565b90508060000160149054906101000a900463ffffffff1691505090565b610b8e846323b872dd60e01b858585604051602401610b2c939291906117fe565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d48565b50505050565b6000811480610c1e575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610bdb929190611304565b602060405180830381865afa158015610bf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c9190611342565b145b610c5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c54906118a7565b60405180910390fd5b610cde8363095ea7b360e01b8484604051602401610c7c9291906116c3565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d48565b505050565b600080610cee610a7e565b90508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610daa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e0f9092919063ffffffff16565b9050600081511115610e0a5780806020019051810190610dca9190611724565b610e09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0090611939565b60405180910390fd5b5b505050565b6060610e1e8484600085610e27565b90509392505050565b606082471015610e6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e63906119cb565b60405180910390fd5b610e7585610f3b565b610eb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eab90611a37565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610edd9190611a93565b60006040518083038185875af1925050503d8060008114610f1a576040519150601f19603f3d011682016040523d82523d6000602084013e610f1f565b606091505b5091509150610f2f828286610f5e565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610f6e57829050610fbe565b600083511115610f815782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb59190611aee565b60405180910390fd5b9392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ff582610fca565b9050919050565b61100581610fea565b811461101057600080fd5b50565b60008135905061102281610ffc565b92915050565b600063ffffffff82169050919050565b61104181611028565b811461104c57600080fd5b50565b60008135905061105e81611038565b92915050565b60008060006060848603121561107d5761107c610fc5565b5b600061108b86828701611013565b935050602061109c8682870161104f565b92505060406110ad86828701611013565b9150509250925092565b6000819050919050565b6110ca816110b7565b81146110d557600080fd5b50565b6000813590506110e7816110c1565b92915050565b60008060008060008060c0878903121561110a57611109610fc5565b5b600061111889828a01611013565b965050602061112989828a016110d8565b955050604061113a89828a01611013565b945050606061114b89828a0161104f565b935050608061115c89828a016110d8565b92505060a061116d89828a016110d8565b9150509295509295509295565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b60006111c160188361117a565b91506111cc8261118b565b602082019050919050565b600060208201905081810360008301526111f0816111b4565b9050919050565b7f436f6e6e6578743a2043616e6e6f742062726964676520746f2073616d65206460008201527f6f6d61696e000000000000000000000000000000000000000000000000000000602082015250565b600061125360258361117a565b915061125e826111f7565b604082019050919050565b6000602082019050818103600083015261128281611246565b9050919050565b7f436f6e6e6578743a2072656c6179657246656520213d206d73672e76616c7565600082015250565b60006112bf60208361117a565b91506112ca82611289565b602082019050919050565b600060208201905081810360008301526112ee816112b2565b9050919050565b6112fe81610fea565b82525050565b600060408201905061131960008301856112f5565b61132660208301846112f5565b9392505050565b60008151905061133c816110c1565b92915050565b60006020828403121561135857611357610fc5565b5b60006113668482850161132d565b91505092915050565b7f436f6e6e6578743a2055736572206d75737420617070726f766520616d6f756e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006113cb60218361117a565b91506113d68261136f565b604082019050919050565b600060208201905081810360008301526113fa816113be565b9050919050565b61140a81611028565b82525050565b611419816110b7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561145957808201518184015260208101905061143e565b60008484015250505050565b6000601f19601f8301169050919050565b60006114818261141f565b61148b818561142a565b935061149b81856020860161143b565b6114a481611465565b840191505092915050565b600060e0820190506114c4600083018a611401565b6114d160208301896112f5565b6114de60408301886112f5565b6114eb60608301876112f5565b6114f86080830186611410565b61150560a0830185611410565b81810360c08301526115178184611476565b905098975050505050505050565b6000819050919050565b61153881611525565b811461154357600080fd5b50565b6000815190506115558161152f565b92915050565b60006020828403121561157157611570610fc5565b5b600061157f84828501611546565b91505092915050565b61159181611525565b82525050565b60006060820190506115ac6000830186611410565b6115b96020830185611410565b6115c66040830184611588565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611608826110b7565b9150611613836110b7565b925082820190508082111561162b5761162a6115ce565b5b92915050565b7f436f6e6e6578743a20616d6f756e74202b2072656c6179657246656520213d2060008201527f6d73672e76616c75650000000000000000000000000000000000000000000000602082015250565b600061168d60298361117a565b915061169882611631565b604082019050919050565b600060208201905081810360008301526116bc81611680565b9050919050565b60006040820190506116d860008301856112f5565b6116e56020830184611410565b9392505050565b60008115159050919050565b611701816116ec565b811461170c57600080fd5b50565b60008151905061171e816116f8565b92915050565b60006020828403121561173a57611739610fc5565b5b60006117488482850161170f565b91505092915050565b600060208201905061176660008301846112f5565b92915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006117c860228361117a565b91506117d38261176c565b604082019050919050565b600060208201905081810360008301526117f7816117bb565b9050919050565b600060608201905061181360008301866112f5565b61182060208301856112f5565b61182d6040830184611410565b949350505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b600061189160368361117a565b915061189c82611835565b604082019050919050565b600060208201905081810360008301526118c081611884565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611923602a8361117a565b915061192e826118c7565b604082019050919050565b6000602082019050818103600083015261195281611916565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006119b560268361117a565b91506119c082611959565b604082019050919050565b600060208201905081810360008301526119e4816119a8565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611a21601d8361117a565b9150611a2c826119eb565b602082019050919050565b60006020820190508181036000830152611a5081611a14565b9050919050565b600081905092915050565b6000611a6d8261141f565b611a778185611a57565b9350611a8781856020860161143b565b80840191505092915050565b6000611a9f8284611a62565b915081905092915050565b600081519050919050565b6000611ac082611aaa565b611aca818561117a565b9350611ada81856020860161143b565b611ae381611465565b840191505092915050565b60006020820190508181036000830152611b088184611ab5565b90509291505056fea2646970667358221220c4efdac246a1a012233cf5b26d5e3c6bcc76a6f2b0791d71346d4c8a13aa498164736f6c63430008110033";

type ConnextFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnextFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnextFacet__factory extends ContractFactory {
  constructor(...args: ConnextFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnextFacet> {
    return super.deploy(overrides || {}) as Promise<ConnextFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnextFacet {
    return super.attach(address) as ConnextFacet;
  }
  connect(signer: Signer): ConnextFacet__factory {
    return super.connect(signer) as ConnextFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextFacetInterface {
    return new utils.Interface(_abi) as ConnextFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnextFacet {
    return new Contract(address, _abi, signerOrProvider) as ConnextFacet;
  }
}
