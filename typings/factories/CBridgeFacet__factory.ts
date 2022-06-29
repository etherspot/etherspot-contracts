/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";

const _abi = [
  {
    inputs: [],
    name: "CannotBridgeToSameNetwork",
    type: "error",
  },
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
    name: "NativeValueWithERC",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cBridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "CBridgeInitialized",
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
        name: "tokenAddress",
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
        internalType: "uint256",
        name: "chainIdTo",
        type: "uint256",
      },
    ],
    name: "TransferStarted",
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
    name: "UpdatedCBridgeAddress",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "dstChainId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "bridgeTokensCBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cBridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__b7c4ddcd",
        type: "bytes8",
      },
    ],
    name: "c_b7c4ddcd",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__b7c4ddcd",
        type: "bytes8",
      },
    ],
    name: "c_falseb7c4ddcd",
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
        name: "c__b7c4ddcd",
        type: "bytes8",
      },
    ],
    name: "c_trueb7c4ddcd",
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
    inputs: [],
    name: "chainId",
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
        internalType: "address",
        name: "_cBridge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "initializeCBridge",
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
    name: "updateBridgeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000819055506121f4806100286000396000f3fe60806040526004361061007b5760003560e01c80637f76a5211161004e5780637f76a5211461012d5780639a8a059214610156578063a1ba0bbc14610181578063fc613675146101be5761007b565b8063223591691461008057806336d4b75f146100bd5780635277cbc7146100e8578063645c8a4b14610104575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190611910565b6101e7565b6040516100b49190611c8f565b60405180910390f35b3480156100c957600080fd5b506100d26101ee565b6040516100df9190611b8a565b60405180910390f35b61010260048036038101906100fd9190611939565b610214565b005b34801561011057600080fd5b5061012b60048036038101906101269190611882565b6103d3565b005b34801561013957600080fd5b50610154600480360381019061014f9190611910565b610555565b005b34801561016257600080fd5b5061016b610558565b6040516101789190611dd2565b60405180910390f35b34801561018d57600080fd5b506101a860048036038101906101a39190611910565b61055e565b6040516101b59190611c8f565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e091906118ab565b610569565b005b6000919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61022867894445dec04b638160c01b610555565b6002600054141561026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026590611d92565b60405180910390fd5b600260008190555061028a677cf588d25a90d3f160c01b610555565b61029e679a4514f3992d67cb60c01b610555565b6102b26774edeb79f41f949f60c01b610555565b6102c6677dafe7d7c21b2f1060c01b610555565b6102e68160a00160208101906102dc9190611882565b826060013561074c565b6102fa676de65f097d92ae8f60c01b610555565b61030e679c650231889ebcc860c01b610555565b610327818036038101906103229190611962565b6107c6565b61033b67f0c605c14429396560c01b610555565b61034f67917a656b156b129f60c01b610555565b7f83bd4b75444b26482a091d91d32e43a65722f9fd8267a590beadccd9e61539e88160a00160208101906103839190611882565b338360800160208101906103979190611882565b84606001358560200160208101906103af91906119b4565b6040516103c0959493929190611cec565b60405180910390a1600160008190555050565b6103e767cf4a1d2491203b3960c01b610555565b6103fb67a63e772359e7e63f60c01b610555565b61040f67f59280d2d7d6534d60c01b610555565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561048a57610458674693df9295542afc60c01b610555565b6040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049e675d57cbe06cf4849460c01b610555565b6104b2674f6a47c673d5aa9060c01b610555565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610507678442a2446392602560c01b610555565b61051b67371144df29de998960c01b610555565b7fef1a021f4afad10827a9f886313f92d00348a53d0b0df8d0aa270a0ac3379bc58160405161054a9190611b8a565b60405180910390a150565b50565b60025481565b600060019050919050565b61057d676d68432a5aa5ab5960c01b610555565b6105916757219e8be37acb5760c01b610555565b6105a56740c0f8e12f47ea7760c01b610555565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480156105f157506105f0679a563366a085961660c01b61055e565b5b80610618575060008114801561061757506106166749cef90fc194bb3b60c01b61055e565b5b5b156106635761063167162f65cf01a57ef760c01b610555565b6040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610677679f55999c8cf1245660c01b610555565b61068b671564cbf787a1ac8560c01b610555565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106e06702fae3f7016dc9d360c01b610555565b806002819055506106fb67da9e5979f949ce3e60c01b610555565b61070f67b2b8c4c736eb659060c01b610555565b7f5b114a545b5a08e3628017ac6e1af1f29e3f593dde50a4a93ab76f2a2220cd388282604051610740929190611c66565b60405180910390a15050565b610760671e5f54e91a3076fa60c01b6109bf565b61077467c2669304dab1548360c01b6109bf565b610788672904d555f0fe5e2360c01b6109bf565b6107c28282600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146109c2565b5050565b6107da678d886687feb1c87460c01b610555565b6107ee67db5135c9faf1c3cb60c01b610555565b61080267de6c2160f59e5c1460c01b610555565b806020015167ffffffffffffffff1660025414156108745761082e67a8a3f7d0e10d6a3f60c01b610555565b610842676b1de773a51276d260c01b610555565b6040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088867a78d4ba8c7b86a9560c01b610555565b61089c674d3e5f3ec799189a60c01b610555565b6108b0673816d11985dc578b60c01b610555565b6108e58160a00151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360600151610cee565b6108f967b40fe5a6e27675d360c01b610555565b61090d67813eb4ece42ad23060c01b610555565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a5977fbb82608001518360a0015184606001518560200151866040015187600001516040518763ffffffff1660e01b815260040161098a96959493929190611c05565b600060405180830381600087803b1580156109a457600080fd5b505af11580156109b8573d6000803e3d6000fd5b5050505050565b50565b6109d66796712940d21a0b9760c01b6109bf565b6109ea678bce2f32823d0c3b60c01b6109bf565b6109fe674113d92d3f74673360c01b6109bf565b6000821415610a4d57610a1b67903e6bdc8ce09c3860c01b6109bf565b6040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a61678a2f2e6eff57934c60c01b6109bf565b610a756704e87c6eb83e865b60c01b6109bf565b610a8967fd4889d26b53efd760c01b6109bf565b8015610b3157610aa367e7113171273586e060c01b6109bf565b610ab767d195959a73665e0360c01b6109bf565b610acb676936ec8b9f0e1a8360c01b6109bf565b813414610b1857610ae6674b753871432d279860c01b6109bf565b6040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b2c67096969509a70f4af60c01b6109bf565b610ce9565b610b4567504d99b2a0c67cbc60c01b6109bf565b610b596752f9291eb488411260c01b6109bf565b610b6d677cb132921c93f37360c01b6109bf565b60003414610bba57610b89670ebc73621b6d1c2e60c01b6109bf565b6040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bce67924c687a9ef8328160c01b6109bf565b610be267b7df5940a013fe9360c01b6109bf565b610bf66735b60759f12ba9d760c01b6109bf565b6000610c0184610fc6565b9050610c1767838c4e1e1497b86460c01b6109bf565b610c2b67e3ca9ed57c495d2d60c01b6109bf565b610c3784333086611106565b610c4b67dd9adfed0fcca52860c01b6109bf565b610c5f671012caa89d3a935f60c01b6109bf565b8281610c6a86610fc6565b610c749190611e44565b14610cd357610c8d67261e69a3b636213260c01b6109bf565b610ca1671930efbca61f971b60c01b6109bf565b6040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce767012f255e57a78dc860c01b6109bf565b505b505050565b610d02670d3034f1e93e2f6760c01b6109bf565b610d1667fd30c471b876d51260c01b6109bf565b610d2a67df39b32f650d7b7360c01b6109bf565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d8c57610d7367a87e402eb233349560c01b6109bf565b610d8767a08b0043f4c4372c60c01b6109bf565b610fc1565b610da067facefa43296a289360c01b6109bf565b610db4673dce24b8ce9de4c560c01b6109bf565b610dc867e3588f549878260160c01b6109bf565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e4357610e1167eeb161aafd78af4a60c01b6109bf565b6040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5767b8ba83e69be1206660c01b6109bf565b610e6b67d19cddabce535b0660c01b6109bf565b610e7f670d336d52fe2c857560c01b6109bf565b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610ebc929190611ba5565b60206040518083038186803b158015610ed457600080fd5b505afa158015610ee8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0c919061198b565b9050610f2267b4d711f0c4c2180360c01b6109bf565b610f36676a5261c05d79156060c01b6109bf565b81811015610faa57610f526707c9d4b7556be43a60c01b6109bf565b610f66675549fc5ca8b7ffdc60c01b6109bf565b610f7a6781c6c98dc0532d2d60c01b6109bf565b610fa584847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112c2565b610fbf565b610fbe67ac296a3406de6bc660c01b6109bf565b5b505b505050565b6000610fdc677f273fe29df0b94060c01b6109bf565b610ff0670be7668ee6cfb48060c01b6109bf565b61100467043194b09bb9047f60c01b6109bf565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148015611050575061104f67c59a50f7f642fcc660c01b611420565b5b8061106b575061106a67bb3fdc6ca2ed043960c01b61142b565b5b6110fd578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016110a89190611b8a565b60206040518083038186803b1580156110c057600080fd5b505afa1580156110d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f8919061198b565b6110ff565b475b9050919050565b61111a67a7d114ef1549e60c60c01b6109bf565b61112e671184dec5d65c9cc160c01b6109bf565b61114267ca343dea900aba2e60c01b6109bf565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156111bd5761118b6793b2eef8af9ead2260c01b6109bf565b6040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111d1673331e2e45e2dfaff60c01b6109bf565b6111e5674b22eb14bc35cd4560c01b6109bf565b6111f9671887cfa132a2f85460c01b6109bf565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611274576112426716b33dbee393ffcc60c01b6109bf565b6040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61128867a5b30e60524dc88360c01b6109bf565b61129c6718c343d97619996060c01b6109bf565b6112b067eb9dac495cb05a6f60c01b6109bf565b6112bc84848484611432565b50505050565b600081148061135b575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611309929190611ba5565b60206040518083038186803b15801561132157600080fd5b505afa158015611335573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611359919061198b565b145b61139a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139190611db2565b60405180910390fd5b61141b8363095ea7b360e01b84846040516024016113b9929190611c66565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506114bb565b505050565b600060019050919050565b6000919050565b6114b5846323b872dd60e01b85858560405160240161145393929190611bce565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506114bb565b50505050565b600061151d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115829092919063ffffffff16565b905060008151111561157d578080602001905181019061153d91906118e7565b61157c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157390611d72565b60405180910390fd5b5b505050565b6060611591848460008561159a565b90509392505050565b6060824710156115df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d690611ccc565b60405180910390fd5b6115e8856116ae565b611627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161e90611d52565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116509190611b73565b60006040518083038185875af1925050503d806000811461168d576040519150601f19603f3d011682016040523d82523d6000602084013e611692565b606091505b50915091506116a28282866116d1565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156116e157829050611731565b6000835111156116f45782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117289190611caa565b60405180910390fd5b9392505050565b6000813590506117478161215d565b92915050565b60008151905061175c81612174565b92915050565b6000813590506117718161218b565b92915050565b600060c0828403121561178957600080fd5b81905092915050565b600060c082840312156117a457600080fd5b6117ae60c0611ded565b905060006117be84828501611858565b60008301525060206117d28482850161186d565b60208301525060406117e68482850161186d565b60408301525060606117fa8482850161182e565b606083015250608061180e84828501611738565b60808301525060a061182284828501611738565b60a08301525092915050565b60008135905061183d816121a2565b92915050565b600081519050611852816121a2565b92915050565b600081359050611867816121b9565b92915050565b60008135905061187c816121d0565b92915050565b60006020828403121561189457600080fd5b60006118a284828501611738565b91505092915050565b600080604083850312156118be57600080fd5b60006118cc85828601611738565b92505060206118dd8582860161182e565b9150509250929050565b6000602082840312156118f957600080fd5b60006119078482850161174d565b91505092915050565b60006020828403121561192257600080fd5b600061193084828501611762565b91505092915050565b600060c0828403121561194b57600080fd5b600061195984828501611777565b91505092915050565b600060c0828403121561197457600080fd5b600061198284828501611792565b91505092915050565b60006020828403121561199d57600080fd5b60006119ab84828501611843565b91505092915050565b6000602082840312156119c657600080fd5b60006119d48482850161186d565b91505092915050565b6119e681611e78565b82525050565b6119f581611e8a565b82525050565b6000611a0682611e12565b611a108185611e28565b9350611a20818560208601611f22565b80840191505092915050565b6000611a3782611e1d565b611a418185611e33565b9350611a51818560208601611f22565b611a5a81611fe4565b840191505092915050565b6000611a72602683611e33565b9150611a7d82611ff5565b604082019050919050565b6000611a95600783611e33565b9150611aa082612044565b602082019050919050565b6000611ab8601d83611e33565b9150611ac38261206d565b602082019050919050565b6000611adb602a83611e33565b9150611ae682612096565b604082019050919050565b6000611afe601f83611e33565b9150611b09826120e5565b602082019050919050565b6000611b21603683611e33565b9150611b2c8261210e565b604082019050919050565b611b4081611ee2565b82525050565b611b4f81611eec565b82525050565b611b5e81611f10565b82525050565b611b6d81611efc565b82525050565b6000611b7f82846119fb565b915081905092915050565b6000602082019050611b9f60008301846119dd565b92915050565b6000604082019050611bba60008301856119dd565b611bc760208301846119dd565b9392505050565b6000606082019050611be360008301866119dd565b611bf060208301856119dd565b611bfd6040830184611b37565b949350505050565b600060c082019050611c1a60008301896119dd565b611c2760208301886119dd565b611c346040830187611b37565b611c416060830186611b64565b611c4e6080830185611b64565b611c5b60a0830184611b46565b979650505050505050565b6000604082019050611c7b60008301856119dd565b611c886020830184611b37565b9392505050565b6000602082019050611ca460008301846119ec565b92915050565b60006020820190508181036000830152611cc48184611a2c565b905092915050565b60006020820190508181036000830152611ce581611a65565b9050919050565b600060c0820190508181036000830152611d0581611a88565b9050611d1460208301886119dd565b611d2160408301876119dd565b611d2e60608301866119dd565b611d3b6080830185611b37565b611d4860a0830184611b55565b9695505050505050565b60006020820190508181036000830152611d6b81611aab565b9050919050565b60006020820190508181036000830152611d8b81611ace565b9050919050565b60006020820190508181036000830152611dab81611af1565b9050919050565b60006020820190508181036000830152611dcb81611b14565b9050919050565b6000602082019050611de76000830184611b37565b92915050565b6000611df7611e08565b9050611e038282611f55565b919050565b6000604051905090565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611e4f82611ee2565b9150611e5a83611ee2565b925082821015611e6d57611e6c611f86565b5b828203905092915050565b6000611e8382611ec2565b9050919050565b60008115159050919050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6000611f1b82611efc565b9050919050565b60005b83811015611f40578082015181840152602081019050611f25565b83811115611f4f576000848401525b50505050565b611f5e82611fe4565b810181811067ffffffffffffffff82111715611f7d57611f7c611fb5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6342726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b61216681611e78565b811461217157600080fd5b50565b61217d81611e8a565b811461218857600080fd5b50565b61219481611e96565b811461219f57600080fd5b50565b6121ab81611ee2565b81146121b657600080fd5b50565b6121c281611eec565b81146121cd57600080fd5b50565b6121d981611efc565b81146121e457600080fd5b5056fea164736f6c6343000804000a";

type CBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBridgeFacet__factory extends ContractFactory {
  constructor(...args: CBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CBridgeFacet> {
    return super.deploy(overrides || {}) as Promise<CBridgeFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CBridgeFacet {
    return super.attach(address) as CBridgeFacet;
  }
  connect(signer: Signer): CBridgeFacet__factory {
    return super.connect(signer) as CBridgeFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBridgeFacetInterface {
    return new utils.Interface(_abi) as CBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as CBridgeFacet;
  }
}
