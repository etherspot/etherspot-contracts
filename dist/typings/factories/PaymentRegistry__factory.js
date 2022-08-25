"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "depositAccount",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "DepositAccountDeployed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "depositAccount",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "DepositExitCompleted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "depositAccount",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "DepositExitRejected",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "depositAccount",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
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
                name: "lockedUntil",
                type: "uint256",
            },
        ],
        name: "DepositExitRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "depositAccount",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "DepositWithdrawn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "GuardianAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "GuardianRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "initializer",
                type: "address",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "PaymentChannelCommitted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "channelHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "PaymentDeposited",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "channelHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalValue",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "depositValue",
                type: "uint256",
            },
        ],
        name: "PaymentSplit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "channelHash",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "PaymentWithdrawn",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "addGuardian",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "senderSignature",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "guardianSignature",
                type: "bytes",
            },
        ],
        name: "commitPaymentChannelAndDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "depositPaymentValue",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "senderSignature",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "guardianSignature",
                type: "bytes",
            },
        ],
        name: "commitPaymentChannelAndSplit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "senderSignature",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "guardianSignature",
                type: "bytes",
            },
        ],
        name: "commitPaymentChannelAndWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "computeDepositAccountAddress",
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
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
            },
        ],
        name: "computePaymentChannelHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "deployDepositAccount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "depositExitLockPeriod",
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
        inputs: [],
        name: "externalAccountRegistry",
        outputs: [
            {
                internalType: "contract ExternalAccountRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "gateway",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "getDepositExitLockedUntil",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "getDepositWithdrawnAmount",
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
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "getPaymentChannelCommittedAmount",
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
                        internalType: "address",
                        name: "owner",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct PaymentRegistry.DepositWithdrawal",
                name: "depositWithdrawal",
                type: "tuple",
            },
        ],
        name: "hashDepositWithdrawal",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "uid",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct PaymentRegistry.PaymentChannelCommit",
                name: "paymentChannelCommit",
                type: "tuple",
            },
        ],
        name: "hashPaymentChannelCommit",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ExternalAccountRegistry",
                name: "externalAccountRegistry_",
                type: "address",
            },
            {
                internalType: "contract PersonalAccountRegistry",
                name: "personalAccountRegistry_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "depositExitLockPeriod_",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "guardians_",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "gateway_",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "isDepositAccountDeployed",
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
                name: "guardian",
                type: "address",
            },
        ],
        name: "isGuardian",
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
        inputs: [],
        name: "isInitialized",
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
        inputs: [],
        name: "personalAccountRegistry",
        outputs: [
            {
                internalType: "contract PersonalAccountRegistry",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "processDepositExit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "guardian",
                type: "address",
            },
        ],
        name: "removeGuardian",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "requestDepositExit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "messageHash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verifyGuardianSignature",
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
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "guardianSignature",
                type: "bytes",
            },
        ],
        name: "withdrawDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060004690508060028190555050614c138061006e6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639130c06e116100de578063c36326e711610097578063da1b213d11610071578063da1b213d146104bb578063dc7d6c31146104d7578063df04338014610507578063e0fe396e146105235761018e565b8063c36326e71461043d578063d0f710d61461046d578063d2c83b9a1461049d5761018e565b80639130c06e146103915780639a85fae2146103ad5780639a8a0592146103c9578063a526d83b146103e7578063b0274a7314610403578063bdff4b3b1461041f5761018e565b80636121fcfc1161014b578063714041561161012557806371404156146102f757806384389a2b1461031357806387d31313146103435780638a1773ab146103615761018e565b80636121fcfc1461028f5780636524a947146102bf5780636866da52146102db5761018e565b80630c68ba2114610193578063116191b6146101c35780632e4f161e146101e15780632e7037a014610211578063392e53cd1461024157806360bf4df21461025f575b600080fd5b6101ad60048036038101906101a89190612f83565b61053f565b6040516101ba91906140a9565b60405180910390f35b6101cb610594565b6040516101d89190613e92565b60405180910390f35b6101fb60048036038101906101f69190612fe8565b6105ba565b60405161020891906140c4565b60405180910390f35b61022b600480360381019061022691906133f5565b6105d2565b60405161023891906140c4565b60405180910390f35b6102496105f2565b60405161025691906140a9565b60405180910390f35b61027960048036038101906102749190612f83565b61064a565b6040516102869190613e92565b60405180910390f35b6102a960048036038101906102a49190612f83565b61065c565b6040516102b691906140a9565b60405180910390f35b6102d960048036038101906102d49190612f83565b6106f7565b005b6102f560048036038101906102f0919061320c565b610703565b005b610311600480360381019061030c9190612f83565b610a28565b005b61032d6004803603810190610328919061341e565b610c40565b60405161033a91906140c4565b60405180910390f35b61034b610c6f565b6040516103589190614200565b60405180910390f35b61037b600480360381019061037691906132a1565b610c95565b604051610388919061449d565b60405180910390f35b6103ab60048036038101906103a69190612f83565b610cb5565b005b6103c760048036038101906103c2919061304b565b610fe9565b005b6103d16110f4565b6040516103de919061449d565b60405180910390f35b61040160048036038101906103fc9190612f83565b6110fa565b005b61041d60048036038101906104189190612f83565b611191565b005b6104276113ac565b604051610434919061449d565b60405180910390f35b61045760048036038101906104529190612fac565b6113b2565b604051610464919061449d565b60405180910390f35b610487600480360381019061048291906132ca565b61143c565b60405161049491906140a9565b60405180910390f35b6104a5611495565b6040516104b291906141e5565b60405180910390f35b6104d560048036038101906104d09190613121565b6114bb565b005b6104f160048036038101906104ec9190612fac565b6115c2565b6040516104fe919061449d565b60405180910390f35b610521600480360381019061051c919061304b565b61164c565b005b61053d60048036038101906105389190613363565b61174f565b005b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006105c885858585611955565b9050949350505050565b60006105eb82600001518360200151846040015161198e565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000610655826119e6565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61070081611a84565b50565b600061070d611c94565b905060006107a3600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205486611ca590919063ffffffff16565b9050600081116107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df9061435d565b60405180910390fd5b60006107f583888861198e565b90506108458186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611cd2565b610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b9061447d565b60405180910390fd5b85600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109128388611d3f565b610980600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848985611efc565b7f95f66b073d65f18e43f6b76c7ab8557787f5f766d86cab7c9c76f41be9f8abc6600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848989604051610a179493929190613f51565b60405180910390a150505050505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaa9061433d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b199061443d565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba4906143dd565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051610c35929190613ec8565b60405180910390a150565b6000610c68826000015183602001518460400151856060015186608001518760a0015161218c565b9050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060086000838152602001908152602001600020600001549050919050565b6000610cbf611c94565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610d89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d80906142fd565b60405180910390fd5b42811115610dcc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc39061437d565b60405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610f0d578173ffffffffffffffffffffffffffffffffffffffff16319050610f99565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401610f469190613e92565b60206040518083038186803b158015610f5e57600080fd5b505afa158015610f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f969190613447565b90505b610fa582858784611efc565b7f5300d9a2838baade7cdc628c82cb80c1298853ba5f389d51e2b47330336aeffc82858784604051610fda9493929190613f51565b60405180910390a15050505050565b6000610ff3611c94565b905060008060006110928d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b9250925092506110ac826110a5866119e6565b8e84611efc565b7f771bc0494e1a2fcbef19a8762845000d8c4500454c756a7370c955e39ed60fd483826040516110dd929190614140565b60405180910390a150505050505050505050505050565b60025481565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c9061433d565b60405180910390fd5b61118e81612691565b50565b600061119b611c94565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b9061429d565b60405180910390fd5b61126d82611a84565b6112826006544261282090919063ffffffff16565b905080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fed3c8c6cdfc6d7b91dc9db3e1f54866587c26c3c3e0f9e32cd1944974be43a50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683858460405161139f9493929190613f51565b60405180910390a1505050565b60065481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061148c8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611cd2565b90509392505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006114c5611c94565b905060008060006115648e858f8f8f8f8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b92509250925061157782858f848d612875565b7f8b67efde501ee9cd0e771f7436554c44a5c076239ff3a6fbb397646a4689c0f283828b6040516115aa93929190614169565b60405180910390a15050505050505050505050505050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611656611c94565b905060008060006116f58d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b92509250925061170782858e84611efc565b7f6675346cd43846f7d47c310d39fb5c15bc7db66b3770338cdf1f133613a5ae988382604051611738929190614140565b60405180910390a150505050505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146117df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d69061427d565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008414156118bb576224ea006006819055506118c3565b836006819055505b61190d838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061293a565b61191681612992565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516119459190613ead565b60405180910390a1505050505050565b60008484848460405160200161196e9493929190613cd9565b604051602081830303815290604052805190602001209050949350505050565b60006119dd7f3b3087c8f883f1f44cabe66444f5f9d96f69de6a88f364ea10959eef0331414a8585856040516020016119c993929190613d97565b6040516020818303038152906040526129d6565b90509392505050565b600080826040516020016119fa9190613cbe565b604051602081830303815290604052805190602001209050606060405180602001611a2490612cff565b6020820181038252601f19601f820116604052509050600060ff60f81b30848480519060200120604051602001611a5e9493929190613dd4565b6040516020818303038152906040528051906020012090508060001c9350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff16600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c9157600081604051602001611b2e9190613cbe565b60405160208183030381529060405280519060200120905080604051611b5390612cff565b8190604051809103906000f5905080158015611b73573d6000803e3d6000fd5b50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd80572c0f2f24f2d9d726d831bd860ed82b12bafaf01cfb6e4d38fb23c4347e9600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051611c87929190613ef1565b60405180910390a1505b50565b6000611ca06028612a17565b905090565b6000611cca8383604051806060016040528060218152602001614be660219139612aac565b905092915050565b600080611ce88385612b0190919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611eee576000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fa19281a6f3163da06f6b82f3ecf0130493c52aba23cdc2a312f652742f0d1801600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383604051611ee193929190613f1a565b60405180910390a1611ef8565b611ef782611a84565b5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612016578373ffffffffffffffffffffffffffffffffffffffff16633f579f428483600067ffffffffffffffff81118015611f6757600080fd5b506040519080825280601f01601f191660200182016040528015611f9a5781602001600182028036833780820191505090505b506040518463ffffffff1660e01b8152600401611fb99392919061406b565b600060405180830381600087803b158015611fd357600080fd5b505af1158015611fe7573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906120109190613322565b50612186565b60608473ffffffffffffffffffffffffffffffffffffffff16633f579f4284600063a9059cbb60e01b8887604051602401612052929190614042565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518463ffffffff1660e01b81526004016120cd93929190614004565b600060405180830381600087803b1580156120e757600080fd5b505af11580156120fb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906121249190613322565b905060008151111561218457808060200190518101906121449190613278565b612183576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217a9061431d565b60405180910390fd5b5b505b50505050565b60006121e17f745089e29f2abf28f618236a5dc04d214ac05ead3440ba532b69e9d160ba2e728888888888886040516020016121cd96959493929190613d27565b6040516020818303038152906040526129d6565b90509695505050505050565b6000806000806122018c8c8c8c8c8c61218c565b905060008651141561230057600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359b52ef88d838b6040518463ffffffff1660e01b815260040161226c93929190613fcd565b60206040518083038186803b15801561228457600080fd5b505afa158015612298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122bc9190613278565b6122fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122f29061447d565b60405180910390fd5b6124f1565b60006123158783612b0190919063ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff16146124ef57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b81526004016123a993929190613f96565b60206040518083038186803b1580156123c157600080fd5b505afa1580156123d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123f99190613278565b806124af5750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b815260040161245e93929190613f96565b60206040518083038186803b15801561247657600080fd5b505afa15801561248a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124ae9190613278565b5b6124ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e5906143bd565b60405180910390fd5b5b505b6124fb8186611cd2565b61253a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125319061447d565b60405180910390fd5b6125468c8c8c8c611955565b9350612571600860008681526020019081526020016000206000015488611ca590919063ffffffff16565b915060008214156125b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ae906142bd565b60405180910390fd5b8660086000868152602001908152602001600020600001819055506125dc8c8b611d3f565b600760008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692507f0d1cb77d1fe491f98926195d0b885509da18bc305dd1489f45610237d971ed46848d8d8d8d8c60405161267a969594939291906140df565b60405180910390a150985098509895505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126f89061425d565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561278d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127849061441d565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051612815929190613ec8565b60405180910390a150565b60008082840190508381101561286b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612862906143fd565b60405180910390fd5b8091505092915050565b600081116128b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128af9061423d565b60405180910390fd5b60006128cd8284611ca590919063ffffffff16565b905060008111612912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129099061439d565b60405180910390fd5b61291e86868684611efc565b6129328661292b876119e6565b8685611efc565b505050505050565b6000815114156129525761294d32612691565b61298f565b60008151905060005b8181101561298c5761297f83828151811061297257fe5b6020026020010151612691565b808060010191505061295b565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000612a0f6002543085856040516020016129f49493929190613e48565b60405160208183030381529060405280519060200120612bbc565b905092915050565b60008060009050612a26612bec565b15612a9f576000836000369050039050612a9760003683906014850192612a4f9392919061455f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612c99565b915050612aa3565b3390505b80915050919050565b6000838311158290612af4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aeb919061421b565b60405180910390fd5b5082840390509392505050565b60008060009050604183511415612bb25760008060006020860151925060408601519150606086015160001a9050601b8160ff161015612b4257601b810190505b601b8160ff161480612b575750601c8160ff16145b15612bae5760018782858560405160008152602001604052604051612b7f94939291906141a0565b6020604051602081039080840390855afa158015612ba1573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600081604051602001612bcf9190613e22565b604051602081830303815290604052805190602001209050919050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612c9257602c60003690501015612c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c84906142dd565b60405180910390fd5b600190505b8091505090565b6000806014835114612ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cd79061445d565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b6103f7806147ef83390190565b600081359050612d1b81614764565b92915050565b60008083601f840112612d3357600080fd5b8235905067ffffffffffffffff811115612d4c57600080fd5b602083019150836020820283011115612d6457600080fd5b9250929050565b600081519050612d7a8161477b565b92915050565b600081359050612d8f81614792565b92915050565b60008083601f840112612da757600080fd5b8235905067ffffffffffffffff811115612dc057600080fd5b602083019150836001820283011115612dd857600080fd5b9250929050565b600082601f830112612df057600080fd5b8151612e03612dfe826144e5565b6144b8565b91508082526020830160208301858383011115612e1f57600080fd5b612e2a8382846146d1565b50505092915050565b600081359050612e42816147a9565b92915050565b600081359050612e57816147c0565b92915050565b600060608284031215612e6f57600080fd5b612e7960606144b8565b90506000612e8984828501612d0c565b6000830152506020612e9d84828501612d0c565b6020830152506040612eb184828501612f59565b60408301525092915050565b600060c08284031215612ecf57600080fd5b612ed960c06144b8565b90506000612ee984828501612d0c565b6000830152506020612efd84828501612d0c565b6020830152506040612f1184828501612d0c565b6040830152506060612f2584828501612d80565b6060830152506080612f3984828501612f59565b60808301525060a0612f4d84828501612f59565b60a08301525092915050565b600081359050612f68816147d7565b92915050565b600081519050612f7d816147d7565b92915050565b600060208284031215612f9557600080fd5b6000612fa384828501612d0c565b91505092915050565b60008060408385031215612fbf57600080fd5b6000612fcd85828601612d0c565b9250506020612fde85828601612d0c565b9150509250929050565b60008060008060808587031215612ffe57600080fd5b600061300c87828801612d0c565b945050602061301d87828801612d0c565b935050604061302e87828801612d0c565b925050606061303f87828801612d80565b91505092959194509250565b600080600080600080600080600060e08a8c03121561306957600080fd5b60006130778c828d01612d0c565b99505060206130888c828d01612d0c565b98505060406130998c828d01612d80565b97505060606130aa8c828d01612f59565b96505060806130bb8c828d01612f59565b95505060a08a013567ffffffffffffffff8111156130d857600080fd5b6130e48c828d01612d95565b945094505060c08a013567ffffffffffffffff81111561310357600080fd5b61310f8c828d01612d95565b92509250509295985092959850929598565b6000806000806000806000806000806101008b8d03121561314157600080fd5b600061314f8d828e01612d0c565b9a505060206131608d828e01612d0c565b99505060406131718d828e01612d80565b98505060606131828d828e01612f59565b97505060806131938d828e01612f59565b96505060a06131a48d828e01612f59565b95505060c08b013567ffffffffffffffff8111156131c157600080fd5b6131cd8d828e01612d95565b945094505060e08b013567ffffffffffffffff8111156131ec57600080fd5b6131f88d828e01612d95565b92509250509295989b9194979a5092959850565b6000806000806060858703121561322257600080fd5b600061323087828801612d0c565b945050602061324187828801612f59565b935050604085013567ffffffffffffffff81111561325e57600080fd5b61326a87828801612d95565b925092505092959194509250565b60006020828403121561328a57600080fd5b600061329884828501612d6b565b91505092915050565b6000602082840312156132b357600080fd5b60006132c184828501612d80565b91505092915050565b6000806000604084860312156132df57600080fd5b60006132ed86828701612d80565b935050602084013567ffffffffffffffff81111561330a57600080fd5b61331686828701612d95565b92509250509250925092565b60006020828403121561333457600080fd5b600082015167ffffffffffffffff81111561334e57600080fd5b61335a84828501612ddf565b91505092915050565b60008060008060008060a0878903121561337c57600080fd5b600061338a89828a01612e33565b965050602061339b89828a01612e48565b95505060406133ac89828a01612f59565b945050606087013567ffffffffffffffff8111156133c957600080fd5b6133d589828a01612d21565b935093505060806133e889828a01612d0c565b9150509295509295509295565b60006060828403121561340757600080fd5b600061341584828501612e5d565b91505092915050565b600060c0828403121561343057600080fd5b600061343e84828501612ebd565b91505092915050565b60006020828403121561345957600080fd5b600061346784828501612f6e565b91505092915050565b61347981614641565b82525050565b61348881614592565b82525050565b61349f61349a82614592565b614704565b82525050565b6134ae816145a4565b82525050565b6134c56134c0826145b0565b614716565b82525050565b6134d4816145dc565b82525050565b6134eb6134e6826145dc565b614720565b82525050565b60006134fc82614511565b6135068185614527565b93506135168185602086016146d1565b61351f81614746565b840191505092915050565b600061353582614511565b61353f8185614538565b935061354f8185602086016146d1565b80840191505092915050565b61356481614653565b82525050565b61357381614677565b82525050565b6135828161469b565b82525050565b60006135938261451c565b61359d8185614543565b93506135ad8185602086016146d1565b6135b681614746565b840191505092915050565b60006135ce602683614543565b91507f5061796d656e7452656769737472793a20696e76616c6964206465706f73697460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613634601c83614554565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b6000613674602083614543565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b60006136b4602f83614543565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b600061371a602f83614543565b91507f5061796d656e7452656769737472793a206465706f736974206578697420616c60008301527f72656164792072657175657374656400000000000000000000000000000000006020830152604082019050919050565b6000613780602683614543565b91507f5061796d656e7452656769737472793a20696e76616c6964207061796d656e7460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006137e6602283614543565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061384c602b83614543565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206e6f60008301527f74207265717565737465640000000000000000000000000000000000000000006020830152604082019050919050565b60006138b2602d83614543565b91507f5061796d656e7452656769737472793a204552433230546f6b656e207472616e60008301527f73666572207265766572746564000000000000000000000000000000000000006020830152604082019050919050565b6000613918602683614543565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061397e601f83614543565b91507f5061796d656e7452656769737472793a20696e76616c696420616d6f756e74006000830152602082019050919050565b60006139be602483614543565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206c6f60008301527f636b6564000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a24602783614543565b91507f5061796d656e7452656769737472793a20696e76616c6964207769746864726160008301527f772076616c7565000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a8a602983614543565b91507f5061796d656e7452656769737472793a20696e76616c69642073656e6465722060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b6000613af0601f83614543565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000613b30601e83614543565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b6000613b70602083614543565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b6000613bb0601b83614543565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b6000613bf0601d83614543565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b6000613c30602b83614543565b91507f5061796d656e7452656769737472793a20696e76616c6964206775617264696160008301527f6e207369676e61747572650000000000000000000000000000000000000000006020830152604082019050919050565b613c928161462a565b82525050565b613ca9613ca48261462a565b61473c565b82525050565b613cb881614634565b82525050565b6000613cca828461348e565b60148201915081905092915050565b6000613ce5828761348e565b601482019150613cf5828661348e565b601482019150613d05828561348e565b601482019150613d1582846134da565b60208201915081905095945050505050565b6000613d33828961348e565b601482019150613d43828861348e565b601482019150613d53828761348e565b601482019150613d6382866134da565b602082019150613d738285613c98565b602082019150613d838284613c98565b602082019150819050979650505050505050565b6000613da3828661348e565b601482019150613db3828561348e565b601482019150613dc38284613c98565b602082019150819050949350505050565b6000613de082876134b4565b600182019150613df0828661348e565b601482019150613e0082856134da565b602082019150613e1082846134da565b60208201915081905095945050505050565b6000613e2d82613627565b9150613e3982846134da565b60208201915081905092915050565b6000613e548287613c98565b602082019150613e64828661348e565b601482019150613e7482856134da565b602082019150613e84828461352a565b915081905095945050505050565b6000602082019050613ea7600083018461347f565b92915050565b6000602082019050613ec26000830184613470565b92915050565b6000604082019050613edd6000830185613470565b613eea602083018461347f565b9392505050565b6000604082019050613f06600083018561347f565b613f13602083018461347f565b9392505050565b6000606082019050613f2f600083018661347f565b613f3c602083018561347f565b613f49604083018461347f565b949350505050565b6000608082019050613f66600083018761347f565b613f73602083018661347f565b613f80604083018561347f565b613f8d6060830184613c89565b95945050505050565b6000606082019050613fab600083018661347f565b613fb8602083018561347f565b613fc56040830184613c89565b949350505050565b6000606082019050613fe2600083018661347f565b613fef60208301856134cb565b613ffc6040830184613c89565b949350505050565b6000606082019050614019600083018661347f565b6140266020830185613579565b818103604083015261403881846134f1565b9050949350505050565b6000604082019050614057600083018561347f565b6140646020830184613c89565b9392505050565b6000606082019050614080600083018661347f565b61408d6020830185613c89565b818103604083015261409f81846134f1565b9050949350505050565b60006020820190506140be60008301846134a5565b92915050565b60006020820190506140d960008301846134cb565b92915050565b600060c0820190506140f460008301896134cb565b614101602083018861347f565b61410e604083018761347f565b61411b606083018661347f565b61412860808301856134cb565b61413560a0830184613c89565b979650505050505050565b600060408201905061415560008301856134cb565b6141626020830184613c89565b9392505050565b600060608201905061417e60008301866134cb565b61418b6020830185613c89565b6141986040830184613c89565b949350505050565b60006080820190506141b560008301876134cb565b6141c26020830186613caf565b6141cf60408301856134cb565b6141dc60608301846134cb565b95945050505050565b60006020820190506141fa600083018461355b565b92915050565b6000602082019050614215600083018461356a565b92915050565b600060208201905081810360008301526142358184613588565b905092915050565b60006020820190508181036000830152614256816135c1565b9050919050565b6000602082019050818103600083015261427681613667565b9050919050565b60006020820190508181036000830152614296816136a7565b9050919050565b600060208201905081810360008301526142b68161370d565b9050919050565b600060208201905081810360008301526142d681613773565b9050919050565b600060208201905081810360008301526142f6816137d9565b9050919050565b600060208201905081810360008301526143168161383f565b9050919050565b60006020820190508181036000830152614336816138a5565b9050919050565b600060208201905081810360008301526143568161390b565b9050919050565b6000602082019050818103600083015261437681613971565b9050919050565b60006020820190508181036000830152614396816139b1565b9050919050565b600060208201905081810360008301526143b681613a17565b9050919050565b600060208201905081810360008301526143d681613a7d565b9050919050565b600060208201905081810360008301526143f681613ae3565b9050919050565b6000602082019050818103600083015261441681613b23565b9050919050565b6000602082019050818103600083015261443681613b63565b9050919050565b6000602082019050818103600083015261445681613ba3565b9050919050565b6000602082019050818103600083015261447681613be3565b9050919050565b6000602082019050818103600083015261449681613c23565b9050919050565b60006020820190506144b26000830184613c89565b92915050565b6000604051905081810181811067ffffffffffffffff821117156144db57600080fd5b8060405250919050565b600067ffffffffffffffff8211156144fc57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561456f57600080fd5b8386111561457c57600080fd5b6001850283019150848603905094509492505050565b600061459d8261460a565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b60006145f182614592565b9050919050565b600061460382614592565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061464c826146ad565b9050919050565b600061465e82614665565b9050919050565b60006146708261460a565b9050919050565b600061468282614689565b9050919050565b60006146948261460a565b9050919050565b60006146a68261462a565b9050919050565b60006146b8826146bf565b9050919050565b60006146ca8261460a565b9050919050565b60005b838110156146ef5780820151818401526020810190506146d4565b838111156146fe576000848401525b50505050565b600061470f8261472a565b9050919050565b6000819050919050565b6000819050919050565b600061473582614757565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61476d81614592565b811461477857600080fd5b50565b614784816145a4565b811461478f57600080fd5b50565b61479b816145dc565b81146147a657600080fd5b50565b6147b2816145e6565b81146147bd57600080fd5b50565b6147c9816145f8565b81146147d457600080fd5b50565b6147e08161462a565b81146147eb57600080fd5b5056fe6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a536166654d6174684c69623a207375627472616374696f6e206f766572666c6f77a164736f6c634300060c000a";
const isSuperArgs = (xs) => xs.length > 1;
class PaymentRegistry__factory extends ethers_1.ContractFactory {
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
exports.PaymentRegistry__factory = PaymentRegistry__factory;
PaymentRegistry__factory.bytecode = _bytecode;
PaymentRegistry__factory.abi = _abi;
