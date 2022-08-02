"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StargateFacet__factory = void 0;
const ethers_1 = require("ethers");
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
        name: "InvalidSourcePoolId",
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
                internalType: "uint16",
                name: "poolId",
                type: "uint16",
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
                internalType: "uint16",
                name: "_poolId",
                type: "uint16",
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
                        internalType: "address",
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
        outputs: [],
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
                internalType: "uint16",
                name: "_poolId",
                type: "uint16",
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
                internalType: "uint16",
                name: "_chainId",
                type: "uint16",
            },
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "sgRetrievePoolId",
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
const _bytecode = "0x608060405234801561001057600080fd5b50612725806100206000396000f3fe6080604052600436106100a05760003560e01c8063498ee46911610064578063498ee469146101a85780634be85c35146101d1578063618c3f29146101fa578063ab8236f314610237578063b8c06ccc14610260578063c722a33614610289576100a7565b80631f8097fb146100ac578063217aabb7146100c85780632a8dcdb7146100f157806342d910c61461012e578063430dbc3a1461016b576100a7565b366100a757005b600080fd5b6100c660048036038101906100c191906118eb565b6102a5565b005b3480156100d457600080fd5b506100ef60048036038101906100ea9190611aa7565b610766565b005b3480156100fd57600080fd5b506101186004803603810190610113919061199f565b6107be565b6040516101259190611ee4565b60405180910390f35b34801561013a57600080fd5b5061015560048036038101906101509190611950565b610856565b604051610162919061218f565b60405180910390f35b34801561017757600080fd5b50610192600480360381019061018d9190611914565b610968565b60405161019f9190612035565b60405180910390f35b3480156101b457600080fd5b506101cf60048036038101906101ca9190611886565b6109e7565b005b3480156101dd57600080fd5b506101f860048036038101906101f391906117e5565b610c98565b005b34801561020657600080fd5b50610221600480360381019061021c9190611aa7565b610d91565b60405161022e919061218f565b60405180910390f35b34801561024357600080fd5b5061025e600480360381019061025991906119ee565b610dd0565b005b34801561026c57600080fd5b506102876004803603810190610282919061199f565b610f4e565b005b6102a3600480360381019061029e9190611837565b611018565b005b60006102af6110dd565b90506001816000015414156102f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506000826000015111610338576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1614806103a75750600073ffffffffffffffffffffffffffffffffffffffff16826040015173ffffffffffffffffffffffffffffffffffffffff16145b806103e25750600073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b8061041d5750600073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b15610454576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061045e61110a565b905060006104828260000160149054906101000a900461ffff168560200151610968565b905060008161ffff1614156104c3576040517f7790ca9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104d785606001518660400151610968565b90506000610512866060015187608001518660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610856565b905060006105238760000151610d91565b905060008760a0015160405160200161053c9190611de5565b6040516020818303038152906040529050600088608001516040516020016105649190611e17565b60405160208183030381529060405290506105aa33308b600001518c6020015173ffffffffffffffffffffffffffffffffffffffff16611137909392919063ffffffff16565b6106018760000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a600001518b6020015173ffffffffffffffffffffffffffffffffffffffff166111c09092919063ffffffff16565b8660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fbf10fc858b606001518989338f600001518a604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508b8b6040518b63ffffffff1660e01b81526004016106ca999897969594939291906120ed565b6000604051808303818588803b1580156106e357600080fd5b505af11580156106f7573d6000803e3d6000fd5b50505050507f7a72e6f4a3d77f8a5a6c536a973421c5bf00107f9aec7995661537673b8be08789602001518a60400151338c608001518d600001518e6060015160405161074996959493929190611f61565b60405180910390a150505050505050600081600001819055505050565b61076e61131e565b600061077861110a565b90508181600201819055507f45934903f6b10aff9d3435b8362d284d95d14ca68e8554f05f04c7856a6003c0826040516107b2919061218f565b60405180910390a15050565b6000806107c961110a565b90508261ffff168160030160008761ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1661ffff161461084957600061084c565b60015b9150509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a512369866001876040516020016108899190611de5565b604051602081830303815290604052604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152506040518563ffffffff1660e01b815260040161090b9493929190612087565b604080518083038186803b15801561092257600080fd5b505afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a9190611af9565b509050809150509392505050565b60008061097361110a565b90508060030160008561ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1691505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a4e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5661131e565b6000610a6061110a565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548161ffff021916908361ffff16021790555060328160020181905550610aef600173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486001610f4e565b610b10600173dac17f958d2ee523a2206206994597c13d831ec76002610f4e565b610b3160027355d398326f99059ff775485246999027b31979556002610f4e565b610b52600273e9e7cea3dedca5984780bafc599bd69add087d566005610f4e565b610b73600673b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e6001610f4e565b610b946006739702230a8ea53601f5cd2dc00fdbc13d4df4a8c76002610f4e565b610bb56009732791bca1f2de4661ed88a30c99a7a9449aa841746001610f4e565b610bd6600973c2132d05d31c914a87c6611c10748aeb04b58e8f6002610f4e565b610bf7600a73ff970a61a04b1ca14834a43f5de4533ebddb5cc86001610f4e565b610c18600a73fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb96002610f4e565b610c39600b737f5c764cbc14f9669b88837ca1490cca17c316076001610f4e565b610c5a600c7304068da6c83afcfa0e13ba15a6696662335d5b756001610f4e565b7fc8ec31998a27444f477c01de93c393769fd4fc017fb63163f71f8a8ab72ccd508383604051610c8b929190611e92565b60405180910390a1505050565b610ca061131e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d07576040517f3911c65500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610d1161110a565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9ac04272c4559bf7459414abb5568dc1df58ab649f0af4afd1510074f5cc2fec82604051610d859190611e17565b60405180910390a15050565b600080610d9c61110a565b90506127108160020154612710610db391906122df565b84610dbe9190612285565b610dc89190612254565b915050919050565b6000610dda61110a565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e65576040517fdade3c7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082806020019051810190610e7b919061180e565b90508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610eb8929190611ebb565b602060405180830381600087803b158015610ed257600080fd5b505af1158015610ee6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f0a91906118c2565b507f827e3293895509ef037b7438d4e009f37ad7b2562a14695d9dfd9cb0659842188585604051610f3c929190611ebb565b60405180910390a15050505050505050565b610f5661131e565b6000610f6061110a565b9050818160030160008661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548161ffff021916908361ffff1602179055507f85adba3a23dc45072c12199244adfbf4c1d736a46ac453eb732f4e5158af586784848460405161100a93929190612050565b60405180910390a150505050565b60006110226110dd565b9050600181600001541415611063576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555061107561131e565b6110a030838673ffffffffffffffffffffffffffffffffffffffff166111c09092919063ffffffff16565b6110cd3084848773ffffffffffffffffffffffffffffffffffffffff16611137909392919063ffffffff16565b6000816000018190555050505050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6111ba846323b872dd60e01b85858560405160240161115893929190611e5b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113b9565b50505050565b6000811480611259575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611207929190611e32565b60206040518083038186803b15801561121f57600080fd5b505afa158015611233573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112579190611ad0565b145b611298576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128f90612015565b60405180910390fd5b6113198363095ea7b360e01b84846040516024016112b7929190611ebb565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113b9565b505050565b611326611480565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ae90611f21565b60405180910390fd5b565b600061141b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114ad9092919063ffffffff16565b905060008151111561147b578080602001905181019061143b91906118c2565b61147a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147190611ff5565b60405180910390fd5b5b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60606114bc84846000856114c5565b90509392505050565b60608247101561150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190611f41565b60405180910390fd5b611513856115d9565b611552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154990611fd5565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161157b9190611e00565b60006040518083038185875af1925050503d80600081146115b8576040519150601f19603f3d011682016040523d82523d6000602084013e6115bd565b606091505b50915091506115cd8282866115fc565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561160c5782905061165c565b60008351111561161f5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116539190611eff565b60405180910390fd5b9392505050565b6000611676611671846121cf565b6121aa565b90508281526020810184848401111561168e57600080fd5b6116998482856123ac565b509392505050565b6000813590506116b0816126a5565b92915050565b6000815190506116c5816126bc565b92915050565b6000815190506116da816126d3565b92915050565b600082601f8301126116f157600080fd5b8135611701848260208601611663565b91505092915050565b600060c0828403121561171c57600080fd5b61172660c06121aa565b90506000611736848285016117bb565b600083015250602061174a848285016116a1565b602083015250604061175e848285016116a1565b6040830152506060611772848285016117a6565b6060830152506080611786848285016116a1565b60808301525060a061179a848285016116a1565b60a08301525092915050565b6000813590506117b5816126ea565b92915050565b6000813590506117ca81612701565b92915050565b6000815190506117df81612701565b92915050565b6000602082840312156117f757600080fd5b6000611805848285016116a1565b91505092915050565b60006020828403121561182057600080fd5b600061182e848285016116b6565b91505092915050565b60008060006060848603121561184c57600080fd5b600061185a868287016116a1565b935050602061186b868287016116a1565b925050604061187c868287016117bb565b9150509250925092565b6000806040838503121561189957600080fd5b60006118a7858286016116a1565b92505060206118b8858286016117a6565b9150509250929050565b6000602082840312156118d457600080fd5b60006118e2848285016116cb565b91505092915050565b600060c082840312156118fd57600080fd5b600061190b8482850161170a565b91505092915050565b6000806040838503121561192757600080fd5b6000611935858286016117a6565b9250506020611946858286016116a1565b9150509250929050565b60008060006060848603121561196557600080fd5b6000611973868287016117a6565b9350506020611984868287016116a1565b9250506040611995868287016116a1565b9150509250925092565b6000806000606084860312156119b457600080fd5b60006119c2868287016117a6565b93505060206119d3868287016116a1565b92505060406119e4868287016117a6565b9150509250925092565b60008060008060008060c08789031215611a0757600080fd5b6000611a1589828a016117a6565b965050602087013567ffffffffffffffff811115611a3257600080fd5b611a3e89828a016116e0565b9550506040611a4f89828a016117bb565b9450506060611a6089828a016116a1565b9350506080611a7189828a016117bb565b92505060a087013567ffffffffffffffff811115611a8e57600080fd5b611a9a89828a016116e0565b9150509295509295509295565b600060208284031215611ab957600080fd5b6000611ac7848285016117bb565b91505092915050565b600060208284031215611ae257600080fd5b6000611af0848285016117d0565b91505092915050565b60008060408385031215611b0c57600080fd5b6000611b1a858286016117d0565b9250506020611b2b858286016117d0565b9150509250929050565b611b3e81612325565b82525050565b611b4d81612313565b82525050565b611b64611b5f82612313565b61241f565b82525050565b611b7381612337565b82525050565b6000611b8482612200565b611b8e8185612216565b9350611b9e8185602086016123bb565b611ba7816124d0565b840191505092915050565b6000611bbd82612200565b611bc78185612227565b9350611bd78185602086016123bb565b611be0816124d0565b840191505092915050565b6000611bf682612200565b611c008185612238565b9350611c108185602086016123bb565b80840191505092915050565b611c2581612388565b82525050565b6000611c368261220b565b611c408185612243565b9350611c508185602086016123bb565b611c59816124d0565b840191505092915050565b6000611c71602283612243565b9150611c7c826124ee565b604082019050919050565b6000611c94600283612227565b9150611c9f8261253d565b602082019050919050565b6000611cb7602683612243565b9150611cc282612566565b604082019050919050565b6000611cda600883612243565b9150611ce5826125b5565b602082019050919050565b6000611cfd601d83612243565b9150611d08826125de565b602082019050919050565b6000611d20602a83612243565b9150611d2b82612607565b604082019050919050565b6000611d43603683612243565b9150611d4e82612656565b604082019050919050565b6000606083016000830151611d716000860182611dc7565b506020830151611d846020860182611dc7565b5060408301518482036040860152611d9c8282611b79565b9150508091505092915050565b611db281612343565b82525050565b611dc18161239a565b82525050565b611dd081612371565b82525050565b611ddf81612371565b82525050565b6000611df18284611b53565b60148201915081905092915050565b6000611e0c8284611beb565b915081905092915050565b6000602082019050611e2c6000830184611b44565b92915050565b6000604082019050611e476000830185611b44565b611e546020830184611b44565b9392505050565b6000606082019050611e706000830186611b44565b611e7d6020830185611b44565b611e8a6040830184611dd6565b949350505050565b6000604082019050611ea76000830185611b44565b611eb46020830184611da9565b9392505050565b6000604082019050611ed06000830185611b44565b611edd6020830184611dd6565b9392505050565b6000602082019050611ef96000830184611b6a565b92915050565b60006020820190508181036000830152611f198184611c2b565b905092915050565b60006020820190508181036000830152611f3a81611c64565b9050919050565b60006020820190508181036000830152611f5a81611caa565b9050919050565b600060e0820190508181036000830152611f7a81611ccd565b9050611f896020830189611b44565b611f966040830188611b44565b611fa36060830187611b44565b611fb06080830186611b44565b611fbd60a0830185611dd6565b611fca60c0830184611da9565b979650505050505050565b60006020820190508181036000830152611fee81611cf0565b9050919050565b6000602082019050818103600083015261200e81611d13565b9050919050565b6000602082019050818103600083015261202e81611d36565b9050919050565b600060208201905061204a6000830184611da9565b92915050565b60006060820190506120656000830186611da9565b6120726020830185611b44565b61207f6040830184611da9565b949350505050565b600060a08201905061209c6000830187611da9565b6120a96020830186611c1c565b81810360408301526120bb8185611bb2565b905081810360608301526120ce81611c87565b905081810360808301526120e28184611d59565b905095945050505050565b600061012082019050612103600083018c611da9565b612110602083018b611db8565b61211d604083018a611db8565b61212a6060830189611b35565b6121376080830188611dd6565b61214460a0830187611dd6565b81810360c08301526121568186611d59565b905081810360e083015261216a8185611bb2565b905081810361010083015261217f8184611bb2565b90509a9950505050505050505050565b60006020820190506121a46000830184611dd6565b92915050565b60006121b46121c5565b90506121c082826123ee565b919050565b6000604051905090565b600067ffffffffffffffff8211156121ea576121e96124a1565b5b6121f3826124d0565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061225f82612371565b915061226a83612371565b92508261227a57612279612472565b5b828204905092915050565b600061229082612371565b915061229b83612371565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156122d4576122d3612443565b5b828202905092915050565b60006122ea82612371565b91506122f583612371565b92508282101561230857612307612443565b5b828203905092915050565b600061231e82612351565b9050919050565b600061233082612351565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006123938261237b565b9050919050565b60006123a582612343565b9050919050565b82818337600083830152505050565b60005b838110156123d95780820151818401526020810190506123be565b838111156123e8576000848401525b50505050565b6123f7826124d0565b810181811067ffffffffffffffff82111715612416576124156124a1565b5b80604052505050565b600061242a82612431565b9050919050565b600061243c826124e1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f7374617267617465000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6126ae81612313565b81146126b957600080fd5b50565b6126c581612325565b81146126d057600080fd5b50565b6126dc81612337565b81146126e757600080fd5b50565b6126f381612343565b81146126fe57600080fd5b50565b61270a81612371565b811461271557600080fd5b5056fea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class StargateFacet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.StargateFacet__factory = StargateFacet__factory;
StargateFacet__factory.bytecode = _bytecode;
StargateFacet__factory.abi = _abi;