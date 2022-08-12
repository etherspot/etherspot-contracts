/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../DiamondCutFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506139c9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f931c1c1461005157806370422fcd1461006d578063908af9f11461009d578063e3372919146100cd575b600080fd5b61006b600480360381019061006691906128cd565b6100e9565b005b610087600480360381019061008291906129ba565b6101b7565b6040516100949190612a02565b60405180910390f35b6100b760048036038101906100b291906129ba565b6101c2565b6040516100c49190612a02565b60405180910390f35b6100e760048036038101906100e291906129ba565b6101c9565b005b6100fd674e27fee323c8961160c01b6101c9565b61011167f72dba388f840a2560c01b6101c9565b6101256774fef3ed702f7f6860c01b6101c9565b61012d6101cc565b610141675a29a27df10e897860c01b6101c9565b61015567b4170b63c5095f3e60c01b6101c9565b6101b08585906101659190612d26565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506102cb565b5050505050565b600060019050919050565b6000919050565b50565b6101e0679eee40465793ea5060c01b610719565b6101f467a5e606b4a7bbd01c60c01b610719565b6102086795e427799384b20060c01b610719565b61021c6773e3160fa84aeb9960c01b610719565b61022461071c565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ac90612dbe565b60405180910390fd5b6102c967abcba4e5adbea94260c01b610719565b565b6102df67222e31051039790a60c01b610719565b6102f367c1c73a24a109f8e360c01b610719565b61030767922722ed0337f59760c01b610719565b60005b835181101561067e5761032767931eb76cc69eaf6760c01b610719565b61033b67d59b3d8e686a8ce360c01b610719565b60008482815181106103505761034f612dde565b5b60200260200101516020015190506103726781316ec758a1380f60c01b610719565b610386670f33d07076b7e1ac60c01b610719565b6000600281111561039a57610399612e0d565b5b8160028111156103ad576103ac612e0d565b5b141561043a576103c767f9a8f603ae2cadaf60c01b610719565b6103db67945c63f8b14ff2c860c01b610719565b6103ef6766ed5d886f9332c560c01b610719565b61043585838151811061040557610404612dde565b5b60200260200101516000015186848151811061042457610423612dde565b5b602002602001015160400151610799565b61066a565b61044e67e3ecae813031321460c01b610719565b61046267d428c84d4feb934b60c01b610719565b6001600281111561047657610475612e0d565b5b81600281111561048957610488612e0d565b5b1415610516576104a3672e5f5fffacad4a8d60c01b610719565b6104b767b580ef88b462216660c01b610719565b6104cb67cfec294d83ec551360c01b610719565b6105118583815181106104e1576104e0612dde565b5b602002602001015160000151868481518110610500576104ff612dde565b5b602002602001015160400151610c97565b610669565b61052a672b84a0878de414d960c01b610719565b61053e673654a9557d3b41f660c01b610719565b60028081111561055157610550612e0d565b5b81600281111561056457610563612e0d565b5b14156105f15761057e6736da1022231e188e60c01b610719565b61059267099ff37fa02c40dd60c01b610719565b6105a6671646117ada58976360c01b610719565b6105ec8583815181106105bc576105bb612dde565b5b6020026020010151600001518684815181106105db576105da612dde565b5b6020026020010151604001516111c8565b610668565b61060567a4860446d07b228b60c01b610719565b61061967a9a60e9e5115467a60c01b610719565b61062d6785abd23ad83ab6af60c01b610719565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90612eae565b60405180910390fd5b5b5b50808061067690612f07565b91505061030a565b50610693678621d3f87c787f4460c01b610719565b6106a767d89ecd71389df2ac60c01b610719565b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516106da9392919061320e565b60405180910390a16106f6674f9f6bae8183b5ec60c01b610719565b61070a67683f5b60e7400a4060c01b610719565b61071482826114cf565b505050565b50565b600061073166c6fbd4fbaed54a60c01b610719565b61074567714552e98475403a60c01b610719565b610759674b20cd335540d24060c01b610719565b60007fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90506107926757acb9403953294960c01b610719565b8091505090565b6107ad6743f9fc9d68439c6b60c01b610719565b6107c167f1fc7dce789cca6060c01b610719565b6107d567fafc4907f36eb9d360c01b610719565b6107e967fdd970df001bebbf60c01b610719565b600081511161082d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610824906132c5565b60405180910390fd5b61084167268603c81720b98460c01b610719565b61085567650c4db27f4245fb60c01b610719565b610869672b986732b5d29c0d60c01b610719565b600061087361071c565b905061088967aefa65267f71d36360c01b610719565b61089d675a5142499e5f9e2660c01b610719565b6108b1673d8ed32d34ce37ba60c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091890613357565b60405180910390fd5b61093567919667a436c87d7460c01b610719565b61094967cc089e518054d22160c01b610719565b61095d674d00880eb140931f60c01b610719565b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506109bd67457c5847da499b0960c01b610719565b6109d1674e7bc4c1519357b560c01b610719565b6000816bffffffffffffffffffffffff161415610a33576109fc678f4cfc8badb6ab8560c01b610719565b610a10672fcbb602ca5270a860c01b610719565b610a24674166b703389347f960c01b610719565b610a2e828561197b565b610a48565b610a4767976f4c1bc8c1190360c01b610719565b5b610a5c67de5ba9eb3800673560c01b610719565b610a7067269d7a4c3bbcf94f60c01b610719565b60005b8351811015610c9057610a906757d01078f770c9d660c01b610719565b610aa467d9ac62e0853da7d560c01b610719565b6000848281518110610ab957610ab8612dde565b5b60200260200101519050610ad767c07314a48f49341b60c01b610719565b610aeb67eb6130639e4a45cb60c01b610719565b6000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b7a671c81d525162b4c0d60c01b610719565b610b8e67e51903383e74ab2d60c01b610719565b610ba2676c4f493f794a602760c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c08906133e9565b60405180910390fd5b610c256783eca0ec28ba036560c01b610719565b610c3967e4f2fd7f8e6bb89d60c01b610719565b610c4d67c7835858b087a2fe60c01b610719565b610c598583868a611ace565b610c6d67401fa2572dacd90860c01b610719565b8380610c7890613421565b94505050508080610c8890612f07565b915050610a73565b5050505050565b610cab67bb56e0098d11909b60c01b610719565b610cbf67c3cebd217e96fdc060c01b610719565b610cd367687788cd83de905c60c01b610719565b610ce7676187ac655a4c77ce60c01b610719565b6000815111610d2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d22906132c5565b60405180910390fd5b610d3f67cea456cd5dc59d1d60c01b610719565b610d53674a8cfc85fa0b097c60c01b610719565b610d67670cd382c92787549760c01b610719565b6000610d7161071c565b9050610d87674415364e13d1ec2260c01b610719565b610d9b67492b57037078c21260c01b610719565b610daf67335a080e35bf8e2c60c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1690613357565b60405180910390fd5b610e3367a85b29027f7f9f6260c01b610719565b610e47673604608a61e445fb60c01b610719565b610e5b671d5171c573bb8ab360c01b610719565b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490509050610ebb675b4f6781152a54c060c01b610719565b610ecf67db06f0914b10a6d360c01b610719565b6000816bffffffffffffffffffffffff161415610f3157610efa673cccfc21a7b9698460c01b610719565b610f0e6770dce1f72d2c44be60c01b610719565b610f22672ce2c21467edcb4e60c01b610719565b610f2c828561197b565b610f46565b610f45679054cf858244256a60c01b610719565b5b610f5a67da035fde5c77535860c01b610719565b610f6e676e0633c2b31b53d560c01b610719565b60005b83518110156111c157610f8e67405a892556fba8b460c01b610719565b610fa267f58818a600f0ce8960c01b610719565b6000848281518110610fb757610fb6612dde565b5b60200260200101519050610fd567649f77c96ac878f360c01b610719565b610fe9671af76375fb41b75560c01b610719565b6000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061107867f6394308bf98f2b960c01b610719565b61108c6768d71c24f220be8760c01b610719565b6110a067531426f5229cdbfc60c01b610719565b8673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561110f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611106906134c8565b60405180910390fd5b611123673af754755e52d13260c01b610719565b6111376707a89e8a5d723eed60c01b610719565b61114b67e0fac50da83689e060c01b610719565b611156858284611cdf565b61116a67d1f5d06110da52e660c01b610719565b61117e6740017c98b854d08160c01b610719565b61118a8583868a611ace565b61119e678b8a59d58de1a5fd60c01b610719565b83806111a990613421565b945050505080806111b990612f07565b915050610f71565b5050505050565b6111dc677c209b2c55b6816b60c01b610719565b6111f067adba7763e28509aa60c01b610719565b611204670f317069ee888ddd60c01b610719565b61121867c9fff96815f0beae60c01b610719565b600081511161125c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611253906132c5565b60405180910390fd5b6112706755f7eeb0700ed3cf60c01b610719565b61128467d9f860ddd5c1fcdf60c01b610719565b61129867fc4ec4f59e3b943760c01b610719565b60006112a261071c565b90506112b86713281cd6da03b94460c01b610719565b6112cc67c8237ab62c5509bc60c01b610719565b6112e067f8e3b9c67d93530c60c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461134f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113469061355a565b60405180910390fd5b61136367eef473c92ca5769d60c01b610719565b61137767ec862f04c4d51d1a60c01b610719565b61138b67f2873f59a066603060c01b610719565b60005b82518110156114c9576113ab67a87b5b1d4ef2c02460c01b610719565b6113bf67465bf14016a117e160c01b610719565b60008382815181106113d4576113d3612dde565b5b602002602001015190506113f2672e154fcaf256071d60c01b610719565b61140667843b975cd735d76f60c01b610719565b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050611495670aded0dbac110c0360c01b610719565b6114a967c15bfc977372ca3760c01b610719565b6114b4848284611cdf565b505080806114c190612f07565b91505061138e565b50505050565b6114e367320834fa26f9b0c160c01b610719565b6114f767fd88b97a5fe67f4060c01b610719565b61150b679d61b9f83a42ad1660c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115ed5761155467919cba0de2547cad60c01b610719565b611568672783e09c1c10169360c01b610719565b61157c6774d7820d4dc8db6c60c01b610719565b611590679a38897812033c8560c01b610719565b60008151146115d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cb906135ec565b60405180910390fd5b6115e867db32d07fb4ccb70e60c01b610719565b611977565b61160167de449f05784ce03b60c01b610719565b61161567156cb73d5c6ae22460c01b610719565b61162967dd70212532e66e5360c01b610719565b61163d6735639ea8fc84ec3960c01b610719565b6000815111611681576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116789061367e565b60405180910390fd5b611695670e6412a3f0f9087360c01b610719565b6116a967804d90f20257ae5460c01b610719565b6116bd67f99b2453ca2892f860c01b610719565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146117535761170467db8c3350d042a4e660c01b610719565b61171867c340006d917ec5d060c01b610719565b61172c671efa3490ceb932a760c01b610719565b61174e82604051806060016040528060288152602001613971602891396126ae565b611768565b61176767fa49a03cfb67586d60c01b610719565b5b61177c679317892beac860e260c01b610719565b611790673a4298cb8bd2e2c760c01b610719565b6000808373ffffffffffffffffffffffffffffffffffffffff16836040516117b891906136da565b600060405180830381855af49150503d80600081146117f3576040519150601f19603f3d011682016040523d82523d6000602084013e6117f8565b606091505b50915091506118116756ebfd959a8e8ef860c01b610719565b611825671aee7f2986b8217260c01b610719565b816119605761183e67b4fd37c36c70a4f660c01b610719565b61185267f809fe2b402087a460c01b610719565b61186667dff936b4b41803d260c01b610719565b6000815111156118e957611884672b8317370c2cebfb60c01b610719565b6118986782709a8571a0f68360c01b610719565b6118ac67e0c04acf5c06836860c01b610719565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e09190613735565b60405180910390fd5b6118fd67f2dc0dc452e8ac5460c01b610719565b611911678de0deeaa22f64b260c01b610719565b61192567662c3929c0d135e860c01b610719565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611957906137c9565b60405180910390fd5b61197467c9a503f4e810a71260c01b610719565b50505b5050565b61198f67f5134239db8eca8460c01b610719565b6119a36792e19a5476881e9060c01b610719565b6119b76798d98dc673d7ff3060c01b610719565b6119d981604051806060016040528060248152602001613999602491396126ae565b6119ed67c4d7b34ee30ed8a260c01b610719565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550611a51679aa60ca6066a3ca960c01b610719565b611a65677b5fb543c44296a260c01b610719565b81600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b611ae2675a28eb7dbfb19cf360c01b610719565b611af6670ff6cfba577c510060c01b610719565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550611b8f67bd144b37853fdad660c01b610719565b611ba367e19c739996e5822660c01b610719565b8360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c0217905550611c44671658647cc94b603560c01b610719565b80846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611cf3670d885df8673340ea60c01b610719565b611d07671d43dd8ae3f3f56460c01b610719565b611d1a669c0f1e96e8c21a60c01b610719565b611d2e676dcb409f0a46adac60c01b610719565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d959061385b565b60405180910390fd5b611db267cb10042a8781905a60c01b610719565b611dc667d8705276d1fc3ee560c01b610719565b611dda67dd816f198da0379660c01b610719565b611dee67eee63f29ccddd1ea60c01b610719565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e54906138ed565b60405180910390fd5b611e7167b90cdda7c3b6183e60c01b610719565b611e8567bdfe915c12ef30ba60c01b610719565b611e9967cbe305fc449ae43660c01b610719565b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050611f2e6724964dea4bab28d160c01b610719565b611f4267e6a9cb83dc7ca74660c01b610719565b600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050611f98919061390d565b9050611fae6716f3fdc942ddf9cd60c01b610719565b611fc267dacabbecb98e63f160c01b610719565b8082146121bc57611fdd67b450cb35796ff27160c01b610719565b611ff167d9d12692408f4ed560c01b610719565b612005678b3aa31d2e08b4aa60c01b610719565b60008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811061205d5761205c612dde565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b905061209667d9f1909b8e8b5b8c60c01b610719565b808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000184815481106120ed576120ec612dde565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555061213167d63ea85ea5eb96f560c01b610719565b82866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550506121d1565b6121d0670a758d153eb2173260c01b610719565b5b6121e56706650b9582cc409060c01b610719565b6121f967fb869f262c94eb3460c01b610719565b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061224d5761224c613941565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff0219169055905561229167b86bd2ded0bd79af60c01b610719565b846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050612341676215c050bd16203360c01b610719565b61235567086d106082c0629f60c01b610719565b60008114156126925761237267e47c8198223dcfc560c01b610719565b6123866765b6b1e9726f26b860c01b610719565b61239a67ac14c3a40de3e15d60c01b610719565b6000600186600201805490506123b0919061390d565b90506123c667a44e0783c410505060c01b610719565b6123da67a193b8ae36c83dab60c01b610719565b60008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905061243767ca64093075e7db6b60c01b610719565b61244b673a4b98ff333c5e9360c01b610719565b8181146125a957612466679b3f87799b46b1c160c01b610719565b61247a6799d804f0c27378c960c01b610719565b61248e6765e1cd0d181de55860c01b610719565b60008760020183815481106124a6576124a5612dde565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506124e767101a018cac65ab9060c01b610719565b808860020183815481106124fe576124fd612dde565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061255a6716b6e9024b181f0060c01b610719565b818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550506125be565b6125bd6768048e4f956a4f4c60c01b610719565b5b6125d2679de3d24bc7d965ec60c01b610719565b6125e66729684cbf1dd54b2760c01b610719565b866002018054806125fa576125f9613941565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055612643672c2d44f0bf708eda60c01b610719565b8660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550506126a7565b6126a667f3df7deefeabae0060c01b610719565b5b5050505050565b6126c267c453c75189d340ee60c01b610719565b6126d6679b23e7d9bcd34a3d60c01b610719565b6126ea67201390ce7d88dec060c01b610719565b600061270067fe5c16cafd37987960c01b610719565b823b905061271867639f9f2864be545860c01b610719565b61272c67a88513e562eab3bf60c01b610719565b612740671ff9230d0dc7a3c960c01b610719565b600081118290612786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161277d9190613735565b60405180910390fd5b5061279b67234caf63a895650b60c01b610719565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126127d9576127d86127b4565b5b8235905067ffffffffffffffff8111156127f6576127f56127b9565b5b602083019150836020820283011115612812576128116127be565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061284482612819565b9050919050565b61285481612839565b811461285f57600080fd5b50565b6000813590506128718161284b565b92915050565b60008083601f84011261288d5761288c6127b4565b5b8235905067ffffffffffffffff8111156128aa576128a96127b9565b5b6020830191508360018202830111156128c6576128c56127be565b5b9250929050565b6000806000806000606086880312156128e9576128e86127aa565b5b600086013567ffffffffffffffff811115612907576129066127af565b5b612913888289016127c3565b9550955050602061292688828901612862565b935050604086013567ffffffffffffffff811115612947576129466127af565b5b61295388828901612877565b92509250509295509295909350565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b61299781612962565b81146129a257600080fd5b50565b6000813590506129b48161298e565b92915050565b6000602082840312156129d0576129cf6127aa565b5b60006129de848285016129a5565b91505092915050565b60008115159050919050565b6129fc816129e7565b82525050565b6000602082019050612a1760008301846129f3565b92915050565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612a6682612a1d565b810181811067ffffffffffffffff82111715612a8557612a84612a2e565b5b80604052505050565b6000612a986127a0565b9050612aa48282612a5d565b919050565b600067ffffffffffffffff821115612ac457612ac3612a2e565b5b602082029050602081019050919050565b600080fd5b600080fd5b60038110612aec57600080fd5b50565b600081359050612afe81612adf565b92915050565b600067ffffffffffffffff821115612b1f57612b1e612a2e565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612b6581612b30565b8114612b7057600080fd5b50565b600081359050612b8281612b5c565b92915050565b6000612b9b612b9684612b04565b612a8e565b90508083825260208201905060208402830185811115612bbe57612bbd6127be565b5b835b81811015612be75780612bd38882612b73565b845260208401935050602081019050612bc0565b5050509392505050565b600082601f830112612c0657612c056127b4565b5b8135612c16848260208601612b88565b91505092915050565b600060608284031215612c3557612c34612ad5565b5b612c3f6060612a8e565b90506000612c4f84828501612862565b6000830152506020612c6384828501612aef565b602083015250604082013567ffffffffffffffff811115612c8757612c86612ada565b5b612c9384828501612bf1565b60408301525092915050565b6000612cb2612cad84612aa9565b612a8e565b90508083825260208201905060208402830185811115612cd557612cd46127be565b5b835b81811015612d1c57803567ffffffffffffffff811115612cfa57612cf96127b4565b5b808601612d078982612c1f565b85526020850194505050602081019050612cd7565b5050509392505050565b6000612d33368484612c9f565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000612da8602283612d3b565b9150612db382612d4c565b604082019050919050565b60006020820190508181036000830152612dd781612d9b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000612e98602783612d3b565b9150612ea382612e3c565b604082019050919050565b60006020820190508181036000830152612ec781612e8b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000612f1282612efd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612f4557612f44612ece565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612f8581612839565b82525050565b60038110612f9c57612f9b612e0d565b5b50565b6000819050612fad82612f8b565b919050565b6000612fbd82612f9f565b9050919050565b612fcd81612fb2565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61300881612b30565b82525050565b600061301a8383612fff565b60208301905092915050565b6000602082019050919050565b600061303e82612fd3565b6130488185612fde565b935061305383612fef565b8060005b8381101561308457815161306b888261300e565b975061307683613026565b925050600181019050613057565b5085935050505092915050565b60006060830160008301516130a96000860182612f7c565b5060208301516130bc6020860182612fc4565b50604083015184820360408601526130d48282613033565b9150508091505092915050565b60006130ed8383613091565b905092915050565b6000602082019050919050565b600061310d82612f50565b6131178185612f5b565b93508360208202850161312985612f6c565b8060005b85811015613165578484038952815161314685826130e1565b9450613151836130f5565b925060208a0199505060018101905061312d565b50829750879550505050505092915050565b61318081612839565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156131c05780820151818401526020810190506131a5565b838111156131cf576000848401525b50505050565b60006131e082613186565b6131ea8185613191565b93506131fa8185602086016131a2565b61320381612a1d565b840191505092915050565b600060608201905081810360008301526132288186613102565b90506132376020830185613177565b818103604083015261324981846131d5565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b60006132af602b83612d3b565b91506132ba82613253565b604082019050919050565b600060208201905081810360008301526132de816132a2565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000613341602c83612d3b565b915061334c826132e5565b604082019050919050565b6000602082019050818103600083015261337081613334565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b60006133d3603583612d3b565b91506133de82613377565b604082019050919050565b60006020820190508181036000830152613402816133c6565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061342c82613409565b91506bffffffffffffffffffffffff82141561344b5761344a612ece565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006134b2603883612d3b565b91506134bd82613456565b604082019050919050565b600060208201905081810360008301526134e1816134a5565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000613544603683612d3b565b915061354f826134e8565b604082019050919050565b6000602082019050818103600083015261357381613537565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b60006135d6603c83612d3b565b91506135e18261357a565b604082019050919050565b60006020820190508181036000830152613605816135c9565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000613668603d83612d3b565b91506136738261360c565b604082019050919050565b600060208201905081810360008301526136978161365b565b9050919050565b600081905092915050565b60006136b482613186565b6136be818561369e565b93506136ce8185602086016131a2565b80840191505092915050565b60006136e682846136a9565b915081905092915050565b600081519050919050565b6000613707826136f1565b6137118185612d3b565b93506137218185602086016131a2565b61372a81612a1d565b840191505092915050565b6000602082019050818103600083015261374f81846136fc565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006137b3602683612d3b565b91506137be82613757565b604082019050919050565b600060208201905081810360008301526137e2816137a6565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000613845603783612d3b565b9150613850826137e9565b604082019050919050565b6000602082019050818103600083015261387481613838565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b60006138d7602e83612d3b565b91506138e28261387b565b604082019050919050565b60006020820190508181036000830152613906816138ca565b9050919050565b600061391882612efd565b915061392383612efd565b92508282101561393657613935612ece565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080b000a";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}
