/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StargateFacet, StargateFacetInterface } from "../StargateFacet";

const _abi = [
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "lzChainId",
        type: "uint16",
      },
    ],
    name: "LzChainIdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "StargateETHSwap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stargateRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "stargateETHRouter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
    ],
    name: "StargateInitialized",
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
    name: "StargateReceivedOnDestination",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fromToken",
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
    name: "StargateTokenSwap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
    ],
    name: "getLzChainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
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
        internalType: "address",
        name: "_stargateETHRouter",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_chainId",
        type: "uint16",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "layerZeroChainId",
            type: "uint16",
          },
        ],
        internalType: "struct StargateFacet.ChainIdConfig[]",
        name: "_chainIdConfigs",
        type: "tuple[]",
      },
    ],
    name: "initStargate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_lzChainId",
        type: "uint16",
      },
    ],
    name: "setLzChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountLD",
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
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "slippage",
            type: "uint16",
          },
        ],
        internalType: "struct StargateFacet.StargateETHData",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "stargateETHTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "bridgeToken",
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
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "slippage",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "destStargateComposed",
            type: "address",
          },
        ],
        internalType: "struct StargateFacet.StargateData",
        name: "_data",
        type: "tuple",
      },
      {
        internalType: "contract IStargateRouter",
        name: "_router",
        type: "address",
      },
    ],
    name: "stargateFees",
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
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "bridgeToken",
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
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "slippage",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "destStargateComposed",
            type: "address",
          },
        ],
        internalType: "struct StargateFacet.StargateData",
        name: "_data",
        type: "tuple",
      },
    ],
    name: "stargateTokenTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405261271060809081525034801561001957600080fd5b50608051612ce961004a600039600081816103200152818161035801528181610b560152610b8e0152612ce96000f3fe6080604052600436106100705760003560e01c8063be9899101161004e578063be989910146100e3578063ce36ebd314610120578063d61bf1fa1461013c578063e08e50711461016557610070565b8063295d4d41146100755780638083a0db1461009e578063ab8236f3146100ba575b600080fd5b34801561008157600080fd5b5061009c6004803603810190610097919061166e565b6101a2565b005b6100b860048036038101906100b391906116d3565b610224565b005b3480156100c657600080fd5b506100e160048036038101906100dc91906118a5565b61062d565b005b3480156100ef57600080fd5b5061010a600480360381019061010591906119a8565b610727565b60405161011791906119f9565b60405180910390f35b61013a60048036038101906101359190611a33565b610877565b005b34801561014857600080fd5b50610163600480360381019061015e9190611ac0565b610cdf565b005b34801561017157600080fd5b5061018c60048036038101906101879190611b48565b610ee0565b6040516101999190611b84565b60405180910390f35b6101aa610f66565b60006101b4611001565b90508181600201600085815260200190815260200160002060006101000a81548161ffff021916908361ffff1602179055507f50cfe49eeb0e0291ed2de7bb42b55c6edb09463f1e8d96e373069cf1430e33fc8383604051610217929190611b9f565b60405180910390a1505050565b600061022e61102e565b9050600181600001540361026e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550600034116102bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b290611c4b565b60405180910390fd5b6000826000013511610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f990611cb7565b60405180910390fd5b600061030c61105b565b9050600061031a8483610727565b905060007f00000000000000000000000000000000000000000000000000000000000000008560c00160208101906103529190611cd7565b61ffff167f00000000000000000000000000000000000000000000000000000000000000006103819190611d33565b86600001356103909190611d67565b61039a9190611dd8565b905060008560e00160208101906103b19190611e09565b6040516020016103c19190611e7e565b604051602081830303815290604052905060008660a00160208101906103e79190611e09565b6040516020016103f79190611ea8565b604051602081830303815290604052905061044b333089600001358a60200160208101906104259190611e09565b73ffffffffffffffffffffffffffffffffffffffff1661108e909392919063ffffffff16565b61048c8588600001358960200160208101906104679190611e09565b73ffffffffffffffffffffffffffffffffffffffff166111179092919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff16639fbf10fc856104c88a60400160208101906104bf9190611cd7565b61ffff16610ee0565b8a60600160208101906104db9190611cd7565b8b60800160208101906104ee9190611cd7565b338d600001358a60405180606001604052806207a1208152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508b8b6040518b63ffffffff1660e01b815260040161056f99989796959493929190612047565b6000604051808303818588803b15801561058857600080fd5b505af115801561059c573d6000803e3d6000fd5b50505050507f31eb00194969f6cba80ac5ec213e3be164bc8c1e075f8a154dc31856b946a8668760200160208101906105d59190611e09565b338960a00160208101906105e99190611e09565b8a600001358b60400160208101906106019190611cd7565b6040516106129594939291906120e9565b60405180910390a15050505050600081600001819055505050565b61063561105b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069990612188565b60405180910390fd5b6000818060200190518101906106b891906121d4565b90506106e581848673ffffffffffffffffffffffffffffffffffffffff166112669092919063ffffffff16565b7fa99538de04029bcd6cc1a8af32ebefef188052f963f80ab67b7fc49e23d0cd4c8484604051610716929190612201565b60405180910390a150505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a51236961076586604001602081019061075c9190611cd7565b61ffff16610ee0565b60018760e001602081019061077a9190611e09565b60405160200161078a9190611e7e565b6040516020818303038152906040528860a00160208101906107ac9190611e09565b6040516020016107bc9190611ea8565b60405160208183030381529060405260405180606001604052806207a12081526020016000815260200160006040516020016107f89190611e7e565b6040516020818303038152906040528152506040518663ffffffff1660e01b815260040161082a959493929190612272565b6040805180830381865afa158015610846573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086a91906122ef565b5090508091505092915050565b600061088161102e565b905060018160000154036108c1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555060006108d56112ec565b61ffff16905060018114806108eb575061a4b181145b806108f65750600a81145b610935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092c906123a1565b60405180910390fd5b600183602001602081019061094a9190611cd7565b61ffff161480610971575061a4b183602001602081019061096b9190611cd7565b61ffff16145b806109925750600a83602001602081019061098c9190611cd7565b61ffff16145b6109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c890612433565b60405180910390fd5b60003411610a14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0b9061249f565b60405180910390fd5b6000836000013511610a5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5290611cb7565b60405180910390fd5b82600001353411610aa1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9890612531565b60405180910390fd5b6000610aab61130d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b13906125c3565b60405180910390fd5b6000846040016020810190610b319190611e09565b604051602001610b419190611e7e565b604051602081830303815290604052905060007f0000000000000000000000000000000000000000000000000000000000000000866060016020810190610b889190611cd7565b61ffff167f0000000000000000000000000000000000000000000000000000000000000000610bb79190611d33565b8760000135610bc69190611d67565b610bd09190611dd8565b90508273ffffffffffffffffffffffffffffffffffffffff16631114cd2a34610c0e896020016020810190610c059190611cd7565b61ffff16610ee0565b33868b60000135876040518763ffffffff1660e01b8152600401610c369594939291906125e3565b6000604051808303818588803b158015610c4f57600080fd5b505af1158015610c63573d6000803e3d6000fd5b50505050507f96d8881a4aa5dbc2504224c656dc33918e070ada05b7379f89ef88e706bec7ce33876040016020810190610c9d9190611e09565b8860000135896020016020810190610cb59190611cd7565b604051610cc5949392919061263d565b60405180910390a150505050600081600001819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610d4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d45906126f4565b60405180910390fd5b610d56610f66565b6000610d60611001565b9050858160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838160010160146101000a81548161ffff021916908361ffff16021790555060005b83839050811015610e9c57838382818110610e2857610e27612714565b5b9050604002016020016020810190610e409190611cd7565b826002016000868685818110610e5957610e58612714565b5b90506040020160000135815260200190815260200160002060006101000a81548161ffff021916908361ffff16021790555080610e9590612743565b9050610e0a565b507ff8e02de410f1c38e546e1d21837caec2532bb788d33a385f7946d40c99b4addb868686604051610ed09392919061278b565b60405180910390a1505050505050565b600080610eeb611001565b9050600081600201600085815260200190815260200160002060009054906101000a900461ffff16905060008161ffff1603610f5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5390612834565b60405180910390fd5b8092505050919050565b610f6e611340565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff6906128c6565b60405180910390fd5b565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000611065611001565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611111846323b872dd60e01b8585856040516024016110af939291906128e6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061136d565b50505050565b60008114806111a1575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161115e92919061291d565b602060405180830381865afa15801561117b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119f9190612946565b145b6111e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d7906129e5565b60405180910390fd5b6112618363095ea7b360e01b84846040516024016111ff929190612201565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061136d565b505050565b6112e78363a9059cbb60e01b8484604051602401611285929190612201565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061136d565b505050565b60006112f6611001565b60010160149054906101000a900461ffff16905090565b6000611317611001565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60006113cf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114349092919063ffffffff16565b905060008151111561142f57808060200190518101906113ef9190612a3d565b61142e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142590612adc565b60405180910390fd5b5b505050565b6060611443848460008561144c565b90509392505050565b606082471015611491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148890612b6e565b60405180910390fd5b61149a85611560565b6114d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d090612bda565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516115029190612c36565b60006040518083038185875af1925050503d806000811461153f576040519150601f19603f3d011682016040523d82523d6000602084013e611544565b606091505b5091509150611554828286611583565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315611593578290506115e3565b6000835111156115a65782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115da9190612c91565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b611611816115fe565b811461161c57600080fd5b50565b60008135905061162e81611608565b92915050565b600061ffff82169050919050565b61164b81611634565b811461165657600080fd5b50565b60008135905061166881611642565b92915050565b60008060408385031215611685576116846115f4565b5b60006116938582860161161f565b92505060206116a485828601611659565b9150509250929050565b600080fd5b600061010082840312156116ca576116c96116ae565b5b81905092915050565b600061010082840312156116ea576116e96115f4565b5b60006116f8848285016116b3565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117548261170b565b810181811067ffffffffffffffff821117156117735761177261171c565b5b80604052505050565b60006117866115ea565b9050611792828261174b565b919050565b600067ffffffffffffffff8211156117b2576117b161171c565b5b6117bb8261170b565b9050602081019050919050565b82818337600083830152505050565b60006117ea6117e584611797565b61177c565b90508281526020810184848401111561180657611805611706565b5b6118118482856117c8565b509392505050565b600082601f83011261182e5761182d611701565b5b813561183e8482602086016117d7565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061187282611847565b9050919050565b61188281611867565b811461188d57600080fd5b50565b60008135905061189f81611879565b92915050565b60008060008060008060c087890312156118c2576118c16115f4565b5b60006118d089828a01611659565b965050602087013567ffffffffffffffff8111156118f1576118f06115f9565b5b6118fd89828a01611819565b955050604061190e89828a0161161f565b945050606061191f89828a01611890565b935050608061193089828a0161161f565b92505060a087013567ffffffffffffffff811115611951576119506115f9565b5b61195d89828a01611819565b9150509295509295509295565b600061197582611867565b9050919050565b6119858161196a565b811461199057600080fd5b50565b6000813590506119a28161197c565b92915050565b60008061012083850312156119c0576119bf6115f4565b5b60006119ce858286016116b3565b9250506101006119e085828601611993565b9150509250929050565b6119f3816115fe565b82525050565b6000602082019050611a0e60008301846119ea565b92915050565b600060808284031215611a2a57611a296116ae565b5b81905092915050565b600060808284031215611a4957611a486115f4565b5b6000611a5784828501611a14565b91505092915050565b600080fd5b600080fd5b60008083601f840112611a8057611a7f611701565b5b8235905067ffffffffffffffff811115611a9d57611a9c611a60565b5b602083019150836040820283011115611ab957611ab8611a65565b5b9250929050565b600080600080600060808688031215611adc57611adb6115f4565b5b6000611aea88828901611890565b9550506020611afb88828901611890565b9450506040611b0c88828901611659565b935050606086013567ffffffffffffffff811115611b2d57611b2c6115f9565b5b611b3988828901611a6a565b92509250509295509295909350565b600060208284031215611b5e57611b5d6115f4565b5b6000611b6c8482850161161f565b91505092915050565b611b7e81611634565b82525050565b6000602082019050611b996000830184611b75565b92915050565b6000604082019050611bb460008301856119ea565b611bc16020830184611b75565b9392505050565b600082825260208201905092915050565b7f53746172676174653a3a206d73672e76616c756520726571756972656420746f60008201527f20706179206d6573736167650000000000000000000000000000000000000000602082015250565b6000611c35602c83611bc8565b9150611c4082611bd9565b604082019050919050565b60006020820190508181036000830152611c6481611c28565b9050919050565b7f53746172676174653a3a20696e76616c6964207175616e746974790000000000600082015250565b6000611ca1601b83611bc8565b9150611cac82611c6b565b602082019050919050565b60006020820190508181036000830152611cd081611c94565b9050919050565b600060208284031215611ced57611cec6115f4565b5b6000611cfb84828501611659565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d3e826115fe565b9150611d49836115fe565b9250828203905081811115611d6157611d60611d04565b5b92915050565b6000611d72826115fe565b9150611d7d836115fe565b9250828202611d8b816115fe565b91508282048414831517611da257611da1611d04565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611de3826115fe565b9150611dee836115fe565b925082611dfe57611dfd611da9565b5b828204905092915050565b600060208284031215611e1f57611e1e6115f4565b5b6000611e2d84828501611890565b91505092915050565b60008160601b9050919050565b6000611e4e82611e36565b9050919050565b6000611e6082611e43565b9050919050565b611e78611e7382611867565b611e55565b82525050565b6000611e8a8284611e67565b60148201915081905092915050565b611ea281611867565b82525050565b6000602082019050611ebd6000830184611e99565b92915050565b6000819050919050565b6000611ee8611ee3611ede84611634565b611ec3565b6115fe565b9050919050565b611ef881611ecd565b82525050565b6000611f0982611847565b9050919050565b611f1981611efe565b82525050565b611f28816115fe565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f68578082015181840152602081019050611f4d565b60008484015250505050565b6000611f7f82611f2e565b611f898185611f39565b9350611f99818560208601611f4a565b611fa28161170b565b840191505092915050565b6000606083016000830151611fc56000860182611f1f565b506020830151611fd86020860182611f1f565b5060408301518482036040860152611ff08282611f74565b9150508091505092915050565b600082825260208201905092915050565b600061201982611f2e565b6120238185611ffd565b9350612033818560208601611f4a565b61203c8161170b565b840191505092915050565b60006101208201905061205d600083018c611b75565b61206a602083018b611eef565b612077604083018a611eef565b6120846060830189611f10565b61209160808301886119ea565b61209e60a08301876119ea565b81810360c08301526120b08186611fad565b905081810360e08301526120c4818561200e565b90508181036101008301526120d9818461200e565b90509a9950505050505050505050565b600060a0820190506120fe6000830188611e99565b61210b6020830187611e99565b6121186040830186611e99565b61212560608301856119ea565b6121326080830184611b75565b9695505050505050565b7f53746172676174653a3a206f6e6c7920737461726761746520726f7574657200600082015250565b6000612172601f83611bc8565b915061217d8261213c565b602082019050919050565b600060208201905081810360008301526121a181612165565b9050919050565b6121b181611efe565b81146121bc57600080fd5b50565b6000815190506121ce816121a8565b92915050565b6000602082840312156121ea576121e96115f4565b5b60006121f8848285016121bf565b91505092915050565b60006040820190506122166000830185611e99565b61222360208301846119ea565b9392505050565b6000819050919050565b600060ff82169050919050565b600061225c6122576122528461222a565b611ec3565b612234565b9050919050565b61226c81612241565b82525050565b600060a0820190506122876000830188611b75565b6122946020830187612263565b81810360408301526122a6818661200e565b905081810360608301526122ba818561200e565b905081810360808301526122ce8184611fad565b90509695505050505050565b6000815190506122e981611608565b92915050565b60008060408385031215612306576123056115f4565b5b6000612314858286016122da565b9250506020612325858286016122da565b9150509250929050565b7f53746172676174653a3a2043616e6e6f74206469726563746c7920627269646760008201527f65204554482066726f6d207468697320636861696e0000000000000000000000602082015250565b600061238b603583611bc8565b91506123968261232f565b604082019050919050565b600060208201905081810360008301526123ba8161237e565b9050919050565b7f53746172676174653a3a2043616e6e6f74206469726563746c7920627269646760008201527f652045544820746f207468697320636861696e00000000000000000000000000602082015250565b600061241d603383611bc8565b9150612428826123c1565b604082019050919050565b6000602082019050818103600083015261244c81612410565b9050919050565b7f53746172676174653a3a206d73672e76616c7565207265717569726564000000600082015250565b6000612489601d83611bc8565b915061249482612453565b602082019050919050565b600060208201905081810360008301526124b88161247c565b9050919050565b7f53746172676174653a206e6f206665657320616464656420666f72204554482060008201527f7472616e73666572000000000000000000000000000000000000000000000000602082015250565b600061251b602883611bc8565b9150612526826124bf565b604082019050919050565b6000602082019050818103600083015261254a8161250e565b9050919050565b7f53746172676174653a3a20455448207472616e73666572206e6f74206176616960008201527f6c61626c65000000000000000000000000000000000000000000000000000000602082015250565b60006125ad602583611bc8565b91506125b882612551565b604082019050919050565b600060208201905081810360008301526125dc816125a0565b9050919050565b600060a0820190506125f86000830188611b75565b6126056020830187611f10565b8181036040830152612617818661200e565b905061262660608301856119ea565b61263360808301846119ea565b9695505050505050565b60006080820190506126526000830187611e99565b61265f6020830186611e99565b61266c60408301856119ea565b6126796060830184611b75565b95945050505050565b7f53746172676174653a3a20696e76616c696420726f757465722061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006126de602183611bc8565b91506126e982612682565b604082019050919050565b6000602082019050818103600083015261270d816126d1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061274e826115fe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127805761277f611d04565b5b600182019050919050565b60006060820190506127a06000830186611e99565b6127ad6020830185611e99565b6127ba6040830184611b75565b949350505050565b7f53746172676174653a3a20636861696e206e6f742061737369676e6564206c6160008201527f796572207a65726f20636861696e206964000000000000000000000000000000602082015250565b600061281e603183611bc8565b9150612829826127c2565b604082019050919050565b6000602082019050818103600083015261284d81612811565b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006128b0602283611bc8565b91506128bb82612854565b604082019050919050565b600060208201905081810360008301526128df816128a3565b9050919050565b60006060820190506128fb6000830186611e99565b6129086020830185611e99565b61291560408301846119ea565b949350505050565b60006040820190506129326000830185611e99565b61293f6020830184611e99565b9392505050565b60006020828403121561295c5761295b6115f4565b5b600061296a848285016122da565b91505092915050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b60006129cf603683611bc8565b91506129da82612973565b604082019050919050565b600060208201905081810360008301526129fe816129c2565b9050919050565b60008115159050919050565b612a1a81612a05565b8114612a2557600080fd5b50565b600081519050612a3781612a11565b92915050565b600060208284031215612a5357612a526115f4565b5b6000612a6184828501612a28565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612ac6602a83611bc8565b9150612ad182612a6a565b604082019050919050565b60006020820190508181036000830152612af581612ab9565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612b58602683611bc8565b9150612b6382612afc565b604082019050919050565b60006020820190508181036000830152612b8781612b4b565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612bc4601d83611bc8565b9150612bcf82612b8e565b602082019050919050565b60006020820190508181036000830152612bf381612bb7565b9050919050565b600081905092915050565b6000612c1082611f2e565b612c1a8185612bfa565b9350612c2a818560208601611f4a565b80840191505092915050565b6000612c428284612c05565b915081905092915050565b600081519050919050565b6000612c6382612c4d565b612c6d8185611bc8565b9350612c7d818560208601611f4a565b612c868161170b565b840191505092915050565b60006020820190508181036000830152612cab8184612c58565b90509291505056fea26469706673582212202507c5fa59f94536f25921d1d66f54562ba8ac152127a88119e22a578201411064736f6c63430008110033";

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
