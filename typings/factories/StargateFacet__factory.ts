/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StargateFacet, StargateFacetInterface } from "../StargateFacet";

const _abi = [
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConfig",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDestinationPoolId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSourcePoolId",
    type: "error",
  },
  {
    inputs: [],
    name: "NoMsgValueForCrossChainMessage",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderNotStargateRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "StargateRouterAddressZero",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "SGAddedPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stargate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
    ],
    name: "SGInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SGReceivedOnDestination",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bridgeUsed",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
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
        internalType: "uint16",
        name: "chainIdTo",
        type: "uint16",
      },
    ],
    name: "SGTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SGUpdatedRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSlippage",
        type: "uint256",
      },
    ],
    name: "SGUpdatedSlippageTolerance",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "sgAddPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "qty",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "fromToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "toToken",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "srcPoolId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dstPoolId",
            type: "uint16",
          },
          {
            internalType: "address payable",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "destStargateComposed",
            type: "address",
          },
        ],
        internalType: "struct StargateFacet.StargateData",
        name: "_sgData",
        type: "tuple",
      },
    ],
    name: "sgBridgeTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_destChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "sgCalculateFees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolId",
        type: "uint256",
      },
    ],
    name: "sgCheckPoolId",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stargateRouter",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
    ],
    name: "sgInitialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sgMinAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_srcAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
    ],
    name: "sgReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "sgUpdateRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newSlippage",
        type: "uint256",
      },
    ],
    name: "sgUpdateSlippageTolerance",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sgWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506126cb806100206000396000f3fe6080604052600436106100955760003560e01c8063618c3f2911610059578063618c3f29146101825780636acf5e3f146101bf57806390f12364146101ef578063ab8236f31461022c578063c722a336146102555761009c565b8063217aabb7146100a15780632aad46e3146100ca57806342d910c6146100f3578063498ee469146101305780634be85c35146101595761009c565b3661009c57005b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c39190611a08565b610271565b005b3480156100d657600080fd5b506100f160048036038101906100ec9190611900565b6102c9565b005b3480156100ff57600080fd5b5061011a600480360381019061011591906118b1565b61037d565b60405161012791906120ff565b60405180910390f35b34801561013c57600080fd5b5061015760048036038101906101529190611822565b61048f565b005b34801561016557600080fd5b50610180600480360381019061017b9190611781565b610740565b005b34801561018e57600080fd5b506101a960048036038101906101a49190611a08565b610839565b6040516101b691906120ff565b60405180910390f35b6101d960048036038101906101d49190611887565b610878565b6040516101e69190611e6f565b60405180910390f35b3480156101fb57600080fd5b5061021660048036038101906102119190611900565b610d75565b6040516102239190611e6f565b60405180910390f35b34801561023857600080fd5b50610253600480360381019061024e919061194f565b610df7565b005b61026f600480360381019061026a91906117d3565b610f75565b005b61027961103a565b60006102836110d5565b90508181600201819055507f45934903f6b10aff9d3435b8362d284d95d14ca68e8554f05f04c7856a6003c0826040516102bd91906120ff565b60405180910390a15050565b6102d161103a565b60006102db6110d5565b9050818160030160008661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f5a600144b7b71ca7ee988e17e7745e8d46eb24056d4818716be29fa976393a8e84848460405161036f93929190611fc0565b60405180910390a150505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a512369866001876040516020016103b09190611d55565b604051602081830303815290604052604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152506040518563ffffffff1660e01b81526004016104329493929190611ff7565b604080518083038186803b15801561044957600080fd5b505afa15801561045d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104819190611a5a565b509050809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156104f6576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104fe61103a565b60006105086110d5565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548161ffff021916908361ffff16021790555060328160020181905550610597600173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4860016102c9565b6105b8600173dac17f958d2ee523a2206206994597c13d831ec760026102c9565b6105d960027355d398326f99059ff775485246999027b319795560026102c9565b6105fa600273e9e7cea3dedca5984780bafc599bd69add087d5660056102c9565b61061b600673b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e60016102c9565b61063c6006739702230a8ea53601f5cd2dc00fdbc13d4df4a8c760026102c9565b61065d6009732791bca1f2de4661ed88a30c99a7a9449aa8417460016102c9565b61067e600973c2132d05d31c914a87c6611c10748aeb04b58e8f60026102c9565b61069f600a73ff970a61a04b1ca14834a43f5de4533ebddb5cc860016102c9565b6106c0600a73fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb960026102c9565b6106e1600b737f5c764cbc14f9669b88837ca1490cca17c3160760016102c9565b610702600c7304068da6c83afcfa0e13ba15a6696662335d5b7560016102c9565b7fc8ec31998a27444f477c01de93c393769fd4fc017fb63163f71f8a8ab72ccd508383604051610733929190611e1d565b60405180910390a1505050565b61074861103a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107af576040517f3911c65500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107b96110d5565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9ac04272c4559bf7459414abb5568dc1df58ab649f0af4afd1510074f5cc2fec8260405161082d9190611d87565b60405180910390a15050565b6000806108446110d5565b9050612710816002015461271061085b919061224f565b8461086691906121f5565b61087091906121c4565b915050919050565b600080610883611102565b90506001816000015414156108c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555060003411610908576040517fb7586d1900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000836000015111610946576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1614806109b55750600073ffffffffffffffffffffffffffffffffffffffff16836040015173ffffffffffffffffffffffffffffffffffffffff16145b806109f05750600073ffffffffffffffffffffffffffffffffffffffff168360c0015173ffffffffffffffffffffffffffffffffffffffff16145b80610a2b5750600073ffffffffffffffffffffffffffffffffffffffff168360e0015173ffffffffffffffffffffffffffffffffffffffff16145b15610a62576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a6c6110d5565b9050610a978160000160149054906101000a900461ffff168560200151866080015161ffff16610d75565b610acd576040517f7790ca9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ae8846060015185604001518660a0015161ffff16610d75565b610b1e576040517f186c877f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b2d8560000151610839565b905060008560c00151604051602001610b469190611da2565b6040516020818303038152906040529050610b8c33308860000151896020015173ffffffffffffffffffffffffffffffffffffffff1661112f909392919063ffffffff16565b610be38360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168760000151886020015173ffffffffffffffffffffffffffffffffffffffff166111b89092919063ffffffff16565b8260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fbf10fc34886060015189608001518a60a00151338c6000015189604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508f60e00151604051602001610ca39190611d55565b6040516020818303038152906040528b6040518b63ffffffff1660e01b8152600401610cd79998979695949392919061205d565b6000604051808303818588803b158015610cf057600080fd5b505af1158015610d04573d6000803e3d6000fd5b50505050507f7a72e6f4a3d77f8a5a6c536a973421c5bf00107f9aec7995661537673b8be08786602001518760400151338960c001518a600001518b60600151604051610d5696959493929190611eec565b60405180910390a1600194505050506000816000018190555050919050565b600080610d806110d5565b9050828160030160008761ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610dea576000610ded565b60015b9150509392505050565b6000610e016110d5565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e8c576040517fdade3c7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082806020019051810190610ea291906117aa565b90508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610edf929190611e46565b602060405180830381600087803b158015610ef957600080fd5b505af1158015610f0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f31919061185e565b507f827e3293895509ef037b7438d4e009f37ad7b2562a14695d9dfd9cb0659842188585604051610f63929190611e46565b60405180910390a15050505050505050565b6000610f7f611102565b9050600181600001541415610fc0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610fd261103a565b610ffd30838673ffffffffffffffffffffffffffffffffffffffff166111b89092919063ffffffff16565b61102a3084848773ffffffffffffffffffffffffffffffffffffffff1661112f909392919063ffffffff16565b6000816000018190555050505050565b611042611316565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ca90611eac565b60405180910390fd5b565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6000807fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b90508091505090565b6111b2846323b872dd60e01b85858560405160240161115093929190611de6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611343565b50505050565b6000811480611251575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016111ff929190611dbd565b60206040518083038186803b15801561121757600080fd5b505afa15801561122b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124f9190611a31565b145b611290576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128790611fa0565b60405180910390fd5b6113118363095ea7b360e01b84846040516024016112af929190611e46565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611343565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60006113a5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661140a9092919063ffffffff16565b905060008151111561140557808060200190518101906113c5919061185e565b611404576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fb90611f80565b60405180910390fd5b5b505050565b60606114198484600085611422565b90509392505050565b606082471015611467576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145e90611ecc565b60405180910390fd5b61147085611536565b6114af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a690611f60565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114d89190611d70565b60006040518083038185875af1925050503d8060008114611515576040519150601f19603f3d011682016040523d82523d6000602084013e61151a565b606091505b509150915061152a828286611559565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315611569578290506115b9565b60008351111561157c5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115b09190611e8a565b60405180910390fd5b9392505050565b60006115d36115ce8461213f565b61211a565b9050828152602081018484840111156115eb57600080fd5b6115f6848285612352565b509392505050565b60008135905061160d8161264b565b92915050565b60008135905061162281612662565b92915050565b60008151905061163781612662565b92915050565b60008151905061164c81612679565b92915050565b600082601f83011261166357600080fd5b81356116738482602086016115c0565b91505092915050565b6000610100828403121561168f57600080fd5b61169a61010061211a565b905060006116aa84828501611757565b60008301525060206116be848285016115fe565b60208301525060406116d2848285016115fe565b60408301525060606116e684828501611742565b60608301525060806116fa84828501611742565b60808301525060a061170e84828501611742565b60a08301525060c061172284828501611613565b60c08301525060e0611736848285016115fe565b60e08301525092915050565b60008135905061175181612690565b92915050565b600081359050611766816126a7565b92915050565b60008151905061177b816126a7565b92915050565b60006020828403121561179357600080fd5b60006117a1848285016115fe565b91505092915050565b6000602082840312156117bc57600080fd5b60006117ca84828501611628565b91505092915050565b6000806000606084860312156117e857600080fd5b60006117f6868287016115fe565b9350506020611807868287016115fe565b925050604061181886828701611757565b9150509250925092565b6000806040838503121561183557600080fd5b6000611843858286016115fe565b925050602061185485828601611742565b9150509250929050565b60006020828403121561187057600080fd5b600061187e8482850161163d565b91505092915050565b6000610100828403121561189a57600080fd5b60006118a88482850161167c565b91505092915050565b6000806000606084860312156118c657600080fd5b60006118d486828701611742565b93505060206118e5868287016115fe565b92505060406118f6868287016115fe565b9150509250925092565b60008060006060848603121561191557600080fd5b600061192386828701611742565b9350506020611934868287016115fe565b925050604061194586828701611757565b9150509250925092565b60008060008060008060c0878903121561196857600080fd5b600061197689828a01611742565b965050602087013567ffffffffffffffff81111561199357600080fd5b61199f89828a01611652565b95505060406119b089828a01611757565b94505060606119c189828a016115fe565b93505060806119d289828a01611757565b92505060a087013567ffffffffffffffff8111156119ef57600080fd5b6119fb89828a01611652565b9150509295509295509295565b600060208284031215611a1a57600080fd5b6000611a2884828501611757565b91505092915050565b600060208284031215611a4357600080fd5b6000611a518482850161176c565b91505092915050565b60008060408385031215611a6d57600080fd5b6000611a7b8582860161176c565b9250506020611a8c8582860161176c565b9150509250929050565b611a9f816122f8565b82525050565b611aae81612295565b82525050565b611abd81612283565b82525050565b611ad4611acf82612283565b6123c5565b82525050565b611ae3816122a7565b82525050565b6000611af482612170565b611afe8185612186565b9350611b0e818560208601612361565b611b1781612476565b840191505092915050565b6000611b2d82612170565b611b378185612197565b9350611b47818560208601612361565b611b5081612476565b840191505092915050565b6000611b6682612170565b611b7081856121a8565b9350611b80818560208601612361565b80840191505092915050565b611b958161230a565b82525050565b6000611ba68261217b565b611bb081856121b3565b9350611bc0818560208601612361565b611bc981612476565b840191505092915050565b6000611be16022836121b3565b9150611bec82612494565b604082019050919050565b6000611c04600283612197565b9150611c0f826124e3565b602082019050919050565b6000611c276026836121b3565b9150611c328261250c565b604082019050919050565b6000611c4a6008836121b3565b9150611c558261255b565b602082019050919050565b6000611c6d601d836121b3565b9150611c7882612584565b602082019050919050565b6000611c90602a836121b3565b9150611c9b826125ad565b604082019050919050565b6000611cb36036836121b3565b9150611cbe826125fc565b604082019050919050565b6000606083016000830151611ce16000860182611d37565b506020830151611cf46020860182611d37565b5060408301518482036040860152611d0c8282611ae9565b9150508091505092915050565b611d22816122b3565b82525050565b611d3181612340565b82525050565b611d40816122e1565b82525050565b611d4f816122e1565b82525050565b6000611d618284611ac3565b60148201915081905092915050565b6000611d7c8284611b5b565b915081905092915050565b6000602082019050611d9c6000830184611ab4565b92915050565b6000602082019050611db76000830184611aa5565b92915050565b6000604082019050611dd26000830185611ab4565b611ddf6020830184611ab4565b9392505050565b6000606082019050611dfb6000830186611ab4565b611e086020830185611ab4565b611e156040830184611d46565b949350505050565b6000604082019050611e326000830185611ab4565b611e3f6020830184611d19565b9392505050565b6000604082019050611e5b6000830185611ab4565b611e686020830184611d46565b9392505050565b6000602082019050611e846000830184611ada565b92915050565b60006020820190508181036000830152611ea48184611b9b565b905092915050565b60006020820190508181036000830152611ec581611bd4565b9050919050565b60006020820190508181036000830152611ee581611c1a565b9050919050565b600060e0820190508181036000830152611f0581611c3d565b9050611f146020830189611ab4565b611f216040830188611ab4565b611f2e6060830187611ab4565b611f3b6080830186611a96565b611f4860a0830185611d46565b611f5560c0830184611d19565b979650505050505050565b60006020820190508181036000830152611f7981611c60565b9050919050565b60006020820190508181036000830152611f9981611c83565b9050919050565b60006020820190508181036000830152611fb981611ca6565b9050919050565b6000606082019050611fd56000830186611d19565b611fe26020830185611ab4565b611fef6040830184611d46565b949350505050565b600060a08201905061200c6000830187611d19565b6120196020830186611b8c565b818103604083015261202b8185611b22565b9050818103606083015261203e81611bf7565b905081810360808301526120528184611cc9565b905095945050505050565b600061012082019050612073600083018c611d19565b612080602083018b611d28565b61208d604083018a611d28565b61209a6060830189611aa5565b6120a76080830188611d46565b6120b460a0830187611d46565b81810360c08301526120c68186611cc9565b905081810360e08301526120da8185611b22565b90508181036101008301526120ef8184611b22565b90509a9950505050505050505050565b60006020820190506121146000830184611d46565b92915050565b6000612124612135565b90506121308282612394565b919050565b6000604051905090565b600067ffffffffffffffff82111561215a57612159612447565b5b61216382612476565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006121cf826122e1565b91506121da836122e1565b9250826121ea576121e9612418565b5b828204905092915050565b6000612200826122e1565b915061220b836122e1565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612244576122436123e9565b5b828202905092915050565b600061225a826122e1565b9150612265836122e1565b925082821015612278576122776123e9565b5b828203905092915050565b600061228e826122c1565b9050919050565b60006122a0826122c1565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006123038261231c565b9050919050565b6000612315826122eb565b9050919050565b60006123278261232e565b9050919050565b6000612339826122c1565b9050919050565b600061234b826122b3565b9050919050565b82818337600083830152505050565b60005b8381101561237f578082015181840152602081019050612364565b8381111561238e576000848401525b50505050565b61239d82612476565b810181811067ffffffffffffffff821117156123bc576123bb612447565b5b80604052505050565b60006123d0826123d7565b9050919050565b60006123e282612487565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f7374617267617465000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b61265481612283565b811461265f57600080fd5b50565b61266b81612295565b811461267657600080fd5b50565b612682816122a7565b811461268d57600080fd5b50565b612699816122b3565b81146126a457600080fd5b50565b6126b0816122e1565b81146126bb57600080fd5b5056fea164736f6c6343000804000a";

type StargateFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateFacet__factory extends ContractFactory {
  constructor(...args: StargateFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StargateFacet> {
    return super.deploy(overrides || {}) as Promise<StargateFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StargateFacet {
    return super.attach(address) as StargateFacet;
  }
  connect(signer: Signer): StargateFacet__factory {
    return super.connect(signer) as StargateFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateFacetInterface {
    return new utils.Interface(_abi) as StargateFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateFacet {
    return new Contract(address, _abi, signerOrProvider) as StargateFacet;
  }
}