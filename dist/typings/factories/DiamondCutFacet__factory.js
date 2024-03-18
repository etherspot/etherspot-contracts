"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondCutFacet__factory = void 0;
const ethers_1 = require("ethers");
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
const _bytecode = "0x608060405234801561001057600080fd5b5061270a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906116ab565b61004c565b005b6100546100b6565b6100af8585906100649190611a49565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610380565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611ae1565b60405180910390fd5b565b60005b835181101561033557600084828151811061017257610171611b01565b5b60200260200101516020015190506000600281111561019457610193611b30565b5b8160028111156101a7576101a6611b30565b5b036101f7576101f28583815181106101c2576101c1611b01565b5b6020026020010151600001518684815181106101e1576101e0611b01565b5b6020026020010151604001516103ad565b610321565b6001600281111561020b5761020a611b30565b5b81600281111561021e5761021d611b30565b5b0361026e5761026985838151811061023957610238611b01565b5b60200260200101516000015186848151811061025857610257611b01565b5b602002602001015160400151610624565b610320565b60028081111561028157610280611b30565b5b81600281111561029457610293611b30565b5b036102e4576102df8583815181106102af576102ae611b01565b5b6020026020010151600001518684815181106102ce576102cd611b01565b5b6020026020010151604001516108a5565b61031f565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031690611bd1565b60405180910390fd5b5b5b50808061032d90611c2a565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036993929190611f27565b60405180910390a161037b8282610a30565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e890611fde565b60405180910390fd5b60006103fb610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390612070565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036104d9576104d88285610c42565b5b60005b835181101561061d5760008482815181106104fa576104f9611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590612102565b60405180910390fd5b6105fa8583868a610d1d565b83806106059061213a565b9450505050808061061590611c2a565b9150506104dc565b5050505050565b6000815111610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90611fde565b60405180910390fd5b6000610672610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106da90612070565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036107505761074f8285610c42565b5b60005b835181101561089e57600084828151811061077157610770611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b906121e0565b60405180910390fd5b61086f858284610eca565b61087b8583868a610d1d565b83806108869061213a565b9450505050808061089690611c2a565b915050610753565b5050505050565b60008151116108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e090611fde565b60405180910390fd5b60006108f3610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b90612272565b60405180910390fd5b60005b8251811015610a2a57600083828151811061098557610984611b01565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a15848284610eca565b50508080610a2290611c2a565b915050610967565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aad576000815114610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f90612304565b60405180910390fd5b610c3e565b6000815111610af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae890612396565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b4757610b46826040518060600160405280602881526020016126896028913961152c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b6f91906123f2565b600060405180830381855af49150503d8060008114610baa576040519150601f19603f3d011682016040523d82523d6000602084013e610baf565b606091505b509150915081610c3b57600081511115610c0057806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf7919061244d565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c32906124e1565b60405180910390fd5b50505b5050565b610c64816040518060600160405280602481526020016126b16024913961152c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3090612573565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9e90612605565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061107e9190612625565b90508082146112125760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110df576110de611b01565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061115b5761115a611b01565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061126657611265612659565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103611525576000600186600201805490506113509190612625565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146114915760008760020183815481106113ba576113b9611b01565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106113fe576113fd611b01565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114a5576114a4612659565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f919061244d565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126115b7576115b6611592565b5b8235905067ffffffffffffffff8111156115d4576115d3611597565b5b6020830191508360208202830111156115f0576115ef61159c565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611622826115f7565b9050919050565b61163281611617565b811461163d57600080fd5b50565b60008135905061164f81611629565b92915050565b60008083601f84011261166b5761166a611592565b5b8235905067ffffffffffffffff81111561168857611687611597565b5b6020830191508360018202830111156116a4576116a361159c565b5b9250929050565b6000806000806000606086880312156116c7576116c6611588565b5b600086013567ffffffffffffffff8111156116e5576116e461158d565b5b6116f1888289016115a1565b9550955050602061170488828901611640565b935050604086013567ffffffffffffffff8111156117255761172461158d565b5b61173188828901611655565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61178982611740565b810181811067ffffffffffffffff821117156117a8576117a7611751565b5b80604052505050565b60006117bb61157e565b90506117c78282611780565b919050565b600067ffffffffffffffff8211156117e7576117e6611751565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061180f57600080fd5b50565b60008135905061182181611802565b92915050565b600067ffffffffffffffff82111561184257611841611751565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61188881611853565b811461189357600080fd5b50565b6000813590506118a58161187f565b92915050565b60006118be6118b984611827565b6117b1565b905080838252602082019050602084028301858111156118e1576118e061159c565b5b835b8181101561190a57806118f68882611896565b8452602084019350506020810190506118e3565b5050509392505050565b600082601f83011261192957611928611592565b5b81356119398482602086016118ab565b91505092915050565b600060608284031215611958576119576117f8565b5b61196260606117b1565b9050600061197284828501611640565b600083015250602061198684828501611812565b602083015250604082013567ffffffffffffffff8111156119aa576119a96117fd565b5b6119b684828501611914565b60408301525092915050565b60006119d56119d0846117cc565b6117b1565b905080838252602082019050602084028301858111156119f8576119f761159c565b5b835b81811015611a3f57803567ffffffffffffffff811115611a1d57611a1c611592565b5b808601611a2a8982611942565b855260208501945050506020810190506119fa565b5050509392505050565b6000611a563684846119c2565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611acb602283611a5e565b9150611ad682611a6f565b604082019050919050565b60006020820190508181036000830152611afa81611abe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611bbb602783611a5e565b9150611bc682611b5f565b604082019050919050565b60006020820190508181036000830152611bea81611bae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611c3582611c20565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c6757611c66611bf1565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ca781611617565b82525050565b60038110611cbe57611cbd611b30565b5b50565b6000819050611ccf82611cad565b919050565b6000611cdf82611cc1565b9050919050565b611cef81611cd4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d2a81611853565b82525050565b6000611d3c8383611d21565b60208301905092915050565b6000602082019050919050565b6000611d6082611cf5565b611d6a8185611d00565b9350611d7583611d11565b8060005b83811015611da6578151611d8d8882611d30565b9750611d9883611d48565b925050600181019050611d79565b5085935050505092915050565b6000606083016000830151611dcb6000860182611c9e565b506020830151611dde6020860182611ce6565b5060408301518482036040860152611df68282611d55565b9150508091505092915050565b6000611e0f8383611db3565b905092915050565b6000602082019050919050565b6000611e2f82611c72565b611e398185611c7d565b935083602082028501611e4b85611c8e565b8060005b85811015611e875784840389528151611e688582611e03565b9450611e7383611e17565b925060208a01995050600181019050611e4f565b50829750879550505050505092915050565b611ea281611617565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ee2578082015181840152602081019050611ec7565b60008484015250505050565b6000611ef982611ea8565b611f038185611eb3565b9350611f13818560208601611ec4565b611f1c81611740565b840191505092915050565b60006060820190508181036000830152611f418186611e24565b9050611f506020830185611e99565b8181036040830152611f628184611eee565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611fc8602b83611a5e565b9150611fd382611f6c565b604082019050919050565b60006020820190508181036000830152611ff781611fbb565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600061205a602c83611a5e565b915061206582611ffe565b604082019050919050565b600060208201905081810360008301526120898161204d565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b60006120ec603583611a5e565b91506120f782612090565b604082019050919050565b6000602082019050818103600083015261211b816120df565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061214582612122565b91506bffffffffffffffffffffffff820361216357612162611bf1565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006121ca603883611a5e565b91506121d58261216e565b604082019050919050565b600060208201905081810360008301526121f9816121bd565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600061225c603683611a5e565b915061226782612200565b604082019050919050565b6000602082019050818103600083015261228b8161224f565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b60006122ee603c83611a5e565b91506122f982612292565b604082019050919050565b6000602082019050818103600083015261231d816122e1565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000612380603d83611a5e565b915061238b82612324565b604082019050919050565b600060208201905081810360008301526123af81612373565b9050919050565b600081905092915050565b60006123cc82611ea8565b6123d681856123b6565b93506123e6818560208601611ec4565b80840191505092915050565b60006123fe82846123c1565b915081905092915050565b600081519050919050565b600061241f82612409565b6124298185611a5e565b9350612439818560208601611ec4565b61244281611740565b840191505092915050565b600060208201905081810360008301526124678184612414565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006124cb602683611a5e565b91506124d68261246f565b604082019050919050565b600060208201905081810360008301526124fa816124be565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b600061255d603783611a5e565b915061256882612501565b604082019050919050565b6000602082019050818103600083015261258c81612550565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b60006125ef602e83611a5e565b91506125fa82612593565b604082019050919050565b6000602082019050818103600083015261261e816125e2565b9050919050565b600061263082611c20565b915061263b83611c20565b925082820390508181111561265357612652611bf1565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212207fa2a888ad5bbe4de1458e663214e8a88a5f68b72dc15183dafb93f74374cabc64736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class DiamondCutFacet__factory extends ethers_1.ContractFactory {
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
exports.DiamondCutFacet__factory = DiamondCutFacet__factory;
DiamondCutFacet__factory.bytecode = _bytecode;
DiamondCutFacet__factory.abi = _abi;
