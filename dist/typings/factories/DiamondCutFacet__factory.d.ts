import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DiamondCutFacet, DiamondCutFacetInterface } from "../DiamondCutFacet";
declare type DiamondCutFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DiamondCutFacet__factory extends ContractFactory {
    constructor(...args: DiamondCutFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DiamondCutFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DiamondCutFacet;
    connect(signer: Signer): DiamondCutFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506126f8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906116b7565b61004c565b005b6100546100b6565b6100af8585906100649190611a55565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610383565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611aed565b60405180910390fd5b565b60005b835181101561033857600084828151811061017257610171611b0d565b5b60200260200101516020015190506000600281111561019457610193611b3c565b5b8160028111156101a7576101a6611b3c565b5b14156101f8576101f38583815181106101c3576101c2611b0d565b5b6020026020010151600001518684815181106101e2576101e1611b0d565b5b6020026020010151604001516103b0565b610324565b6001600281111561020c5761020b611b3c565b5b81600281111561021f5761021e611b3c565b5b14156102705761026b85838151811061023b5761023a611b0d565b5b60200260200101516000015186848151811061025a57610259611b0d565b5b602002602001015160400151610629565b610323565b60028081111561028357610282611b3c565b5b81600281111561029657610295611b3c565b5b14156102e7576102e28583815181106102b2576102b1611b0d565b5b6020026020010151600001518684815181106102d1576102d0611b0d565b5b6020026020010151604001516108ad565b610322565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031990611bdd565b60405180910390fd5b5b5b50808061033090611c36565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036c93929190611f3d565b60405180910390a161037e8282610a38565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103eb90611ff4565b60405180910390fd5b60006103fe610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790612086565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1614156104de576104dd8285610c4b565b5b60005b83518110156106225760008482815181106104ff576104fe611b0d565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea90612118565b60405180910390fd5b6105ff8583868a610d26565b838061060a90612150565b9450505050808061061a90611c36565b9150506104e1565b5050505050565b600081511161066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490611ff4565b60405180910390fd5b6000610677610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090612086565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415610757576107568285610c4b565b5b60005b83518110156108a657600084828151811061077857610777611b0d565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906121f7565b60405180910390fd5b610877858284610ed3565b6108838583868a610d26565b838061088e90612150565b9450505050808061089e90611c36565b91505061075a565b5050505050565b60008151116108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611ff4565b60405180910390fd5b60006108fb610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461096c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096390612289565b60405180910390fd5b60005b8251811015610a3257600083828151811061098d5761098c611b0d565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a1d848284610ed3565b50508080610a2a90611c36565b91505061096f565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab6576000815114610ab1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa89061231b565b60405180910390fd5b610c47565b6000815111610afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af1906123ad565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b5057610b4f826040518060600160405280602881526020016126a060289139611538565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b789190612409565b600060405180830381855af49150503d8060008114610bb3576040519150601f19603f3d011682016040523d82523d6000602084013e610bb8565b606091505b509150915081610c4457600081511115610c0957806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c009190612464565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b906124f8565b60405180910390fd5b50505b5050565b610c6d816040518060600160405280602481526020016126c860249139611538565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3a9061258a565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa99061261c565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050611089919061263c565b905080821461121d5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110ea576110e9611b0d565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061116657611165611b0d565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061127157611270612670565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008114156115315760006001866002018054905061135c919061263c565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461149d5760008760020183815481106113c6576113c5611b0d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811061140a57611409611b0d565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114b1576114b0612670565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157b9190612464565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126115c3576115c261159e565b5b8235905067ffffffffffffffff8111156115e0576115df6115a3565b5b6020830191508360208202830111156115fc576115fb6115a8565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061162e82611603565b9050919050565b61163e81611623565b811461164957600080fd5b50565b60008135905061165b81611635565b92915050565b60008083601f8401126116775761167661159e565b5b8235905067ffffffffffffffff811115611694576116936115a3565b5b6020830191508360018202830111156116b0576116af6115a8565b5b9250929050565b6000806000806000606086880312156116d3576116d2611594565b5b600086013567ffffffffffffffff8111156116f1576116f0611599565b5b6116fd888289016115ad565b955095505060206117108882890161164c565b935050604086013567ffffffffffffffff81111561173157611730611599565b5b61173d88828901611661565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117958261174c565b810181811067ffffffffffffffff821117156117b4576117b361175d565b5b80604052505050565b60006117c761158a565b90506117d3828261178c565b919050565b600067ffffffffffffffff8211156117f3576117f261175d565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061181b57600080fd5b50565b60008135905061182d8161180e565b92915050565b600067ffffffffffffffff82111561184e5761184d61175d565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118948161185f565b811461189f57600080fd5b50565b6000813590506118b18161188b565b92915050565b60006118ca6118c584611833565b6117bd565b905080838252602082019050602084028301858111156118ed576118ec6115a8565b5b835b81811015611916578061190288826118a2565b8452602084019350506020810190506118ef565b5050509392505050565b600082601f8301126119355761193461159e565b5b81356119458482602086016118b7565b91505092915050565b60006060828403121561196457611963611804565b5b61196e60606117bd565b9050600061197e8482850161164c565b60008301525060206119928482850161181e565b602083015250604082013567ffffffffffffffff8111156119b6576119b5611809565b5b6119c284828501611920565b60408301525092915050565b60006119e16119dc846117d8565b6117bd565b90508083825260208201905060208402830185811115611a0457611a036115a8565b5b835b81811015611a4b57803567ffffffffffffffff811115611a2957611a2861159e565b5b808601611a36898261194e565b85526020850194505050602081019050611a06565b5050509392505050565b6000611a623684846119ce565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad7602283611a6a565b9150611ae282611a7b565b604082019050919050565b60006020820190508181036000830152611b0681611aca565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611bc7602783611a6a565b9150611bd282611b6b565b604082019050919050565b60006020820190508181036000830152611bf681611bba565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611c4182611c2c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c7457611c73611bfd565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611cb481611623565b82525050565b60038110611ccb57611cca611b3c565b5b50565b6000819050611cdc82611cba565b919050565b6000611cec82611cce565b9050919050565b611cfc81611ce1565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d378161185f565b82525050565b6000611d498383611d2e565b60208301905092915050565b6000602082019050919050565b6000611d6d82611d02565b611d778185611d0d565b9350611d8283611d1e565b8060005b83811015611db3578151611d9a8882611d3d565b9750611da583611d55565b925050600181019050611d86565b5085935050505092915050565b6000606083016000830151611dd86000860182611cab565b506020830151611deb6020860182611cf3565b5060408301518482036040860152611e038282611d62565b9150508091505092915050565b6000611e1c8383611dc0565b905092915050565b6000602082019050919050565b6000611e3c82611c7f565b611e468185611c8a565b935083602082028501611e5885611c9b565b8060005b85811015611e945784840389528151611e758582611e10565b9450611e8083611e24565b925060208a01995050600181019050611e5c565b50829750879550505050505092915050565b611eaf81611623565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611eef578082015181840152602081019050611ed4565b83811115611efe576000848401525b50505050565b6000611f0f82611eb5565b611f198185611ec0565b9350611f29818560208601611ed1565b611f328161174c565b840191505092915050565b60006060820190508181036000830152611f578186611e31565b9050611f666020830185611ea6565b8181036040830152611f788184611f04565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611fde602b83611a6a565b9150611fe982611f82565b604082019050919050565b6000602082019050818103600083015261200d81611fd1565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000612070602c83611a6a565b915061207b82612014565b604082019050919050565b6000602082019050818103600083015261209f81612063565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000612102603583611a6a565b915061210d826120a6565b604082019050919050565b60006020820190508181036000830152612131816120f5565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061215b82612138565b91506bffffffffffffffffffffffff82141561217a57612179611bfd565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006121e1603883611a6a565b91506121ec82612185565b604082019050919050565b60006020820190508181036000830152612210816121d4565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000612273603683611a6a565b915061227e82612217565b604082019050919050565b600060208201905081810360008301526122a281612266565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000612305603c83611a6a565b9150612310826122a9565b604082019050919050565b60006020820190508181036000830152612334816122f8565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000612397603d83611a6a565b91506123a28261233b565b604082019050919050565b600060208201905081810360008301526123c68161238a565b9050919050565b600081905092915050565b60006123e382611eb5565b6123ed81856123cd565b93506123fd818560208601611ed1565b80840191505092915050565b600061241582846123d8565b915081905092915050565b600081519050919050565b600061243682612420565b6124408185611a6a565b9350612450818560208601611ed1565b6124598161174c565b840191505092915050565b6000602082019050818103600083015261247e818461242b565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006124e2602683611a6a565b91506124ed82612486565b604082019050919050565b60006020820190508181036000830152612511816124d5565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000612574603783611a6a565b915061257f82612518565b604082019050919050565b600060208201905081810360008301526125a381612567565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b6000612606602e83611a6a565b9150612611826125aa565b604082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b600061264782611c2c565b915061265283611c2c565b92508282101561266557612664611bfd565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080b000a";
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): DiamondCutFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondCutFacet;
}
export {};