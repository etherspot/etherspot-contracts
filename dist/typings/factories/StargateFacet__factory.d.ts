import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StargateFacet, StargateFacetInterface } from "../StargateFacet";
declare type StargateFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StargateFacet__factory extends ContractFactory {
    constructor(...args: StargateFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StargateFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StargateFacet;
    connect(signer: Signer): StargateFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506125df806100206000396000f3fe6080604052600436106100915760003560e01c8063498ee46911610059578063498ee469146101925780634be85c35146101bb578063618c3f29146101e4578063ab8236f314610221578063b8c06ccc1461024a57610091565b80631f8097fb14610096578063217aabb7146100b25780632a8dcdb7146100db57806342d910c614610118578063430dbc3a14610155575b600080fd5b6100b060048036038101906100ab91906117a5565b610273565b005b3480156100be57600080fd5b506100d960048036038101906100d49190611961565b610734565b005b3480156100e757600080fd5b5061010260048036038101906100fd9190611859565b61078c565b60405161010f9190611d9e565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a919061180a565b610824565b60405161014c9190612049565b60405180910390f35b34801561016157600080fd5b5061017c600480360381019061017791906117ce565b610936565b6040516101899190611eef565b60405180910390f35b34801561019e57600080fd5b506101b960048036038101906101b49190611740565b6109b5565b005b3480156101c757600080fd5b506101e260048036038101906101dd91906116ee565b610c66565b005b3480156101f057600080fd5b5061020b60048036038101906102069190611961565b610d5f565b6040516102189190612049565b60405180910390f35b34801561022d57600080fd5b50610248600480360381019061024391906118a8565b610d9e565b005b34801561025657600080fd5b50610271600480360381019061026c9190611859565b610f1c565b005b600061027d610fe6565b90506001816000015414156102be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506000826000015111610306576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1614806103755750600073ffffffffffffffffffffffffffffffffffffffff16826040015173ffffffffffffffffffffffffffffffffffffffff16145b806103b05750600073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b806103eb5750600073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b15610422576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061042c611013565b905060006104508260000160149054906101000a900461ffff168560200151610936565b905060008161ffff161415610491576040517f7790ca9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104a585606001518660400151610936565b905060006104e0866060015187608001518660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610824565b905060006104f18760000151610d5f565b905060008760a0015160405160200161050a9190611c9f565b6040516020818303038152906040529050600088608001516040516020016105329190611cd1565b604051602081830303815290604052905061057833308b600001518c6020015173ffffffffffffffffffffffffffffffffffffffff16611040909392919063ffffffff16565b6105cf8760000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a600001518b6020015173ffffffffffffffffffffffffffffffffffffffff166110c99092919063ffffffff16565b8660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fbf10fc858b606001518989338f600001518a604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508b8b6040518b63ffffffff1660e01b815260040161069899989796959493929190611fa7565b6000604051808303818588803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b50505050507f7a72e6f4a3d77f8a5a6c536a973421c5bf00107f9aec7995661537673b8be08789602001518a60400151338c608001518d600001518e6060015160405161071796959493929190611e1b565b60405180910390a150505050505050600081600001819055505050565b61073c611227565b6000610746611013565b90508181600201819055507f45934903f6b10aff9d3435b8362d284d95d14ca68e8554f05f04c7856a6003c0826040516107809190612049565b60405180910390a15050565b600080610797611013565b90508261ffff168160030160008761ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1661ffff161461081757600061081a565b60015b9150509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a512369866001876040516020016108579190611c9f565b604051602081830303815290604052604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152506040518563ffffffff1660e01b81526004016108d99493929190611f41565b604080518083038186803b1580156108f057600080fd5b505afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092891906119b3565b509050809150509392505050565b600080610941611013565b90508060030160008561ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1691505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a1c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a24611227565b6000610a2e611013565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548161ffff021916908361ffff16021790555060328160020181905550610abd600173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486001610f1c565b610ade600173dac17f958d2ee523a2206206994597c13d831ec76002610f1c565b610aff60027355d398326f99059ff775485246999027b31979556002610f1c565b610b20600273e9e7cea3dedca5984780bafc599bd69add087d566005610f1c565b610b41600673b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e6001610f1c565b610b626006739702230a8ea53601f5cd2dc00fdbc13d4df4a8c76002610f1c565b610b836009732791bca1f2de4661ed88a30c99a7a9449aa841746001610f1c565b610ba4600973c2132d05d31c914a87c6611c10748aeb04b58e8f6002610f1c565b610bc5600a73ff970a61a04b1ca14834a43f5de4533ebddb5cc86001610f1c565b610be6600a73fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb96002610f1c565b610c07600b737f5c764cbc14f9669b88837ca1490cca17c316076001610f1c565b610c28600c7304068da6c83afcfa0e13ba15a6696662335d5b756001610f1c565b7fc8ec31998a27444f477c01de93c393769fd4fc017fb63163f71f8a8ab72ccd508383604051610c59929190611d4c565b60405180910390a1505050565b610c6e611227565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cd5576040517f3911c65500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610cdf611013565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9ac04272c4559bf7459414abb5568dc1df58ab649f0af4afd1510074f5cc2fec82604051610d539190611cd1565b60405180910390a15050565b600080610d6a611013565b90506127108160020154612710610d819190612199565b84610d8c919061213f565b610d96919061210e565b915050919050565b6000610da8611013565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e33576040517fdade3c7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082806020019051810190610e499190611717565b90508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610e86929190611d75565b602060405180830381600087803b158015610ea057600080fd5b505af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed8919061177c565b507f827e3293895509ef037b7438d4e009f37ad7b2562a14695d9dfd9cb0659842188585604051610f0a929190611d75565b60405180910390a15050505050505050565b610f24611227565b6000610f2e611013565b9050818160030160008661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548161ffff021916908361ffff1602179055507f85adba3a23dc45072c12199244adfbf4c1d736a46ac453eb732f4e5158af5867848484604051610fd893929190611f0a565b60405180910390a150505050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6110c3846323b872dd60e01b85858560405160240161106193929190611d15565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b50505050565b6000811480611162575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611110929190611cec565b60206040518083038186803b15801561112857600080fd5b505afa15801561113c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611160919061198a565b145b6111a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119890611ecf565b60405180910390fd5b6112228363095ea7b360e01b84846040516024016111c0929190611d75565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b505050565b61122f611389565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b790611ddb565b60405180910390fd5b565b6000611324826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113b69092919063ffffffff16565b90506000815111156113845780806020019051810190611344919061177c565b611383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137a90611eaf565b60405180910390fd5b5b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60606113c584846000856113ce565b90509392505050565b606082471015611413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140a90611dfb565b60405180910390fd5b61141c856114e2565b61145b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145290611e8f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114849190611cba565b60006040518083038185875af1925050503d80600081146114c1576040519150601f19603f3d011682016040523d82523d6000602084013e6114c6565b606091505b50915091506114d6828286611505565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561151557829050611565565b6000835111156115285782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155c9190611db9565b60405180910390fd5b9392505050565b600061157f61157a84612089565b612064565b90508281526020810184848401111561159757600080fd5b6115a2848285612266565b509392505050565b6000813590506115b98161255f565b92915050565b6000815190506115ce81612576565b92915050565b6000815190506115e38161258d565b92915050565b600082601f8301126115fa57600080fd5b813561160a84826020860161156c565b91505092915050565b600060c0828403121561162557600080fd5b61162f60c0612064565b9050600061163f848285016116c4565b6000830152506020611653848285016115aa565b6020830152506040611667848285016115aa565b604083015250606061167b848285016116af565b606083015250608061168f848285016115aa565b60808301525060a06116a3848285016115aa565b60a08301525092915050565b6000813590506116be816125a4565b92915050565b6000813590506116d3816125bb565b92915050565b6000815190506116e8816125bb565b92915050565b60006020828403121561170057600080fd5b600061170e848285016115aa565b91505092915050565b60006020828403121561172957600080fd5b6000611737848285016115bf565b91505092915050565b6000806040838503121561175357600080fd5b6000611761858286016115aa565b9250506020611772858286016116af565b9150509250929050565b60006020828403121561178e57600080fd5b600061179c848285016115d4565b91505092915050565b600060c082840312156117b757600080fd5b60006117c584828501611613565b91505092915050565b600080604083850312156117e157600080fd5b60006117ef858286016116af565b9250506020611800858286016115aa565b9150509250929050565b60008060006060848603121561181f57600080fd5b600061182d868287016116af565b935050602061183e868287016115aa565b925050604061184f868287016115aa565b9150509250925092565b60008060006060848603121561186e57600080fd5b600061187c868287016116af565b935050602061188d868287016115aa565b925050604061189e868287016116af565b9150509250925092565b60008060008060008060c087890312156118c157600080fd5b60006118cf89828a016116af565b965050602087013567ffffffffffffffff8111156118ec57600080fd5b6118f889828a016115e9565b955050604061190989828a016116c4565b945050606061191a89828a016115aa565b935050608061192b89828a016116c4565b92505060a087013567ffffffffffffffff81111561194857600080fd5b61195489828a016115e9565b9150509295509295509295565b60006020828403121561197357600080fd5b6000611981848285016116c4565b91505092915050565b60006020828403121561199c57600080fd5b60006119aa848285016116d9565b91505092915050565b600080604083850312156119c657600080fd5b60006119d4858286016116d9565b92505060206119e5858286016116d9565b9150509250929050565b6119f8816121df565b82525050565b611a07816121cd565b82525050565b611a1e611a19826121cd565b6122d9565b82525050565b611a2d816121f1565b82525050565b6000611a3e826120ba565b611a4881856120d0565b9350611a58818560208601612275565b611a618161238a565b840191505092915050565b6000611a77826120ba565b611a8181856120e1565b9350611a91818560208601612275565b611a9a8161238a565b840191505092915050565b6000611ab0826120ba565b611aba81856120f2565b9350611aca818560208601612275565b80840191505092915050565b611adf81612242565b82525050565b6000611af0826120c5565b611afa81856120fd565b9350611b0a818560208601612275565b611b138161238a565b840191505092915050565b6000611b2b6022836120fd565b9150611b36826123a8565b604082019050919050565b6000611b4e6002836120e1565b9150611b59826123f7565b602082019050919050565b6000611b716026836120fd565b9150611b7c82612420565b604082019050919050565b6000611b946008836120fd565b9150611b9f8261246f565b602082019050919050565b6000611bb7601d836120fd565b9150611bc282612498565b602082019050919050565b6000611bda602a836120fd565b9150611be5826124c1565b604082019050919050565b6000611bfd6036836120fd565b9150611c0882612510565b604082019050919050565b6000606083016000830151611c2b6000860182611c81565b506020830151611c3e6020860182611c81565b5060408301518482036040860152611c568282611a33565b9150508091505092915050565b611c6c816121fd565b82525050565b611c7b81612254565b82525050565b611c8a8161222b565b82525050565b611c998161222b565b82525050565b6000611cab8284611a0d565b60148201915081905092915050565b6000611cc68284611aa5565b915081905092915050565b6000602082019050611ce660008301846119fe565b92915050565b6000604082019050611d0160008301856119fe565b611d0e60208301846119fe565b9392505050565b6000606082019050611d2a60008301866119fe565b611d3760208301856119fe565b611d446040830184611c90565b949350505050565b6000604082019050611d6160008301856119fe565b611d6e6020830184611c63565b9392505050565b6000604082019050611d8a60008301856119fe565b611d976020830184611c90565b9392505050565b6000602082019050611db36000830184611a24565b92915050565b60006020820190508181036000830152611dd38184611ae5565b905092915050565b60006020820190508181036000830152611df481611b1e565b9050919050565b60006020820190508181036000830152611e1481611b64565b9050919050565b600060e0820190508181036000830152611e3481611b87565b9050611e4360208301896119fe565b611e5060408301886119fe565b611e5d60608301876119fe565b611e6a60808301866119fe565b611e7760a0830185611c90565b611e8460c0830184611c63565b979650505050505050565b60006020820190508181036000830152611ea881611baa565b9050919050565b60006020820190508181036000830152611ec881611bcd565b9050919050565b60006020820190508181036000830152611ee881611bf0565b9050919050565b6000602082019050611f046000830184611c63565b92915050565b6000606082019050611f1f6000830186611c63565b611f2c60208301856119fe565b611f396040830184611c63565b949350505050565b600060a082019050611f566000830187611c63565b611f636020830186611ad6565b8181036040830152611f758185611a6c565b90508181036060830152611f8881611b41565b90508181036080830152611f9c8184611c13565b905095945050505050565b600061012082019050611fbd600083018c611c63565b611fca602083018b611c72565b611fd7604083018a611c72565b611fe460608301896119ef565b611ff16080830188611c90565b611ffe60a0830187611c90565b81810360c08301526120108186611c13565b905081810360e08301526120248185611a6c565b90508181036101008301526120398184611a6c565b90509a9950505050505050505050565b600060208201905061205e6000830184611c90565b92915050565b600061206e61207f565b905061207a82826122a8565b919050565b6000604051905090565b600067ffffffffffffffff8211156120a4576120a361235b565b5b6120ad8261238a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006121198261222b565b91506121248361222b565b9250826121345761213361232c565b5b828204905092915050565b600061214a8261222b565b91506121558361222b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561218e5761218d6122fd565b5b828202905092915050565b60006121a48261222b565b91506121af8361222b565b9250828210156121c2576121c16122fd565b5b828203905092915050565b60006121d88261220b565b9050919050565b60006121ea8261220b565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061224d82612235565b9050919050565b600061225f826121fd565b9050919050565b82818337600083830152505050565b60005b83811015612293578082015181840152602081019050612278565b838111156122a2576000848401525b50505050565b6122b18261238a565b810181811067ffffffffffffffff821117156122d0576122cf61235b565b5b80604052505050565b60006122e4826122eb565b9050919050565b60006122f68261239b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f7374617267617465000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b612568816121cd565b811461257357600080fd5b50565b61257f816121df565b811461258a57600080fd5b50565b612596816121f1565b81146125a157600080fd5b50565b6125ad816121fd565b81146125b857600080fd5b50565b6125c48161222b565b81146125cf57600080fd5b5056fea164736f6c6343000804000a";
    static readonly abi: ({
        inputs: any[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): StargateFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateFacet;
}
export {};
