/* eslint-disable */

module.exports = {
  "Account": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "registry_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "stateMutability": "nonpayable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "controller",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "executeTransaction",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "implementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          }
        ],
        "name": "setImplementation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a"
  },
  "AccountBase": {
    "abi": [
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x6080604052348015600f57600080fd5b5060908061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637b10399914602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea164736f6c634300060c000a"
  },
  "AccountController": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountDeployed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountImplementationUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountRegistry",
            "type": "address"
          }
        ],
        "name": "AccountRegistryUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "response",
            "type": "bytes"
          }
        ],
        "name": "AccountTransactionExecuted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountUpgraded",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "accountImplementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "accountRegistry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "AccountImplementationV1": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "interfaceHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "canImplementInterfaceForAddress",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "registry_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignature",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignature",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC721Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "tokensReceived",
        "outputs": [],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "AccountRegistry": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidAccountSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidAccountSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "BalancesHelper": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "accounts",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "tokens",
            "type": "address[]"
          }
        ],
        "name": "getBalances",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "3": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "5": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "56": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "77": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "97": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "100": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "250": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4002": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "6666": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "9999": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b"
    },
    "byteCode": "0x608060405234801561001057600080fd5b506106a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ef5bfc3714610030575b600080fd5b6100fc6004803603604081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184602083028401116401000000008311171561009757600080fd5b9091929391929390803590602001906401000000008111156100b857600080fd5b8201836020820111156100ca57600080fd5b803590602001918460208302840111640100000000831117156100ec57600080fd5b9091929391929390505050610153565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561013f578082015181840152602081019050610124565b505050509050019250505060405180910390f35b60608061016f848490508787905061035490919063ffffffff16565b67ffffffffffffffff8111801561018557600080fd5b506040519080825280602002602001820160405280156101b45781602001602082028036833780820191505090505b50905060005b868690508110156103475760005b858590508110156103395760006101fd6101ee848989905061035490919063ffffffff16565b836103da90919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff1687878481811061022357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102d2576102b589898581811061026a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1688888581811061029357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16610462565b8482815181106102c157fe5b60200260200101818152505061032b565b8888848181106102de57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163184828151811061031e57fe5b6020026020010181815250505b5080806001019150506101c8565b5080806001019150506101ba565b5080915050949350505050565b60008083141561036757600090506103d4565b600082840290508284828161037857fe5b04146103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806106726024913960400191505060405180910390fd5b809150505b92915050565b600080828401905083811015610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600080600090506000833b905060008111156106665760008473ffffffffffffffffffffffffffffffffffffffff166370a0823160e01b87604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610550578051825260208201915060208101905060208303925061052d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146105b0576040519150601f19603f3d011682016040523d82523d6000602084013e6105b5565b606091505b505090508015610664578473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d602081101561065057600080fd5b810190808051906020019092919050505092505b505b81925050509291505056fe536166654d6174684c69623a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c634300060c000a"
  },
  "Controlled": {
    "abi": [
      {
        "inputs": [],
        "name": "controller",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ENSAbstractResolver": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ENSAddressResolver": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "AddrChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "newAddress",
            "type": "bytes"
          }
        ],
        "name": "AddressChanged",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "addr_",
            "type": "bytes"
          }
        ],
        "name": "setAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "addr_",
            "type": "address"
          }
        ],
        "name": "setAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ENSController": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "AddrChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "newAddress",
            "type": "bytes"
          }
        ],
        "name": "AddressChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "NameChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "NodeReleased",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "NodeSubmitted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "NodeVerified",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "name": "PubkeyChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "registry",
            "type": "address"
          }
        ],
        "name": "RegistryChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "string",
            "name": "indexedKey",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "key",
            "type": "string"
          }
        ],
        "name": "TextChanged",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "gateway",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "label",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ENSController.SubNodeRegistration",
            "name": "subNodeRegistration",
            "type": "tuple"
          }
        ],
        "name": "hashSubNodeRegistration",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "registry_",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "guardians_",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "gateway_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "nodeOwners",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "pubkey",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "label",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "registerSubNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "releaseNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "coinType",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "addr_",
            "type": "bytes"
          }
        ],
        "name": "setAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "addr_",
            "type": "address"
          }
        ],
        "name": "setAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "name": "setPubkey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "registry_",
            "type": "address"
          }
        ],
        "name": "setRegistry",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "key",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "value",
            "type": "string"
          }
        ],
        "name": "setText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "submitNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceID",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "syncAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "key",
            "type": "string"
          }
        ],
        "name": "text",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "verifyNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x143ddaB8CE178DBD2F8D0062AC2bEfcA64572C41",
      "3": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "5": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "56": "0x143ddaB8CE178DBD2F8D0062AC2bEfcA64572C41",
      "77": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "97": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "100": "0x143ddaB8CE178DBD2F8D0062AC2bEfcA64572C41",
      "250": "0x143ddaB8CE178DBD2F8D0062AC2bEfcA64572C41",
      "4002": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "6666": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "9999": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600046905080600281905550506149798061006e6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806371404156116100f9578063a91ee0dc11610097578063d0f710d611610071578063d0f710d614610512578063d5fa2b0014610542578063dc5b68a61461055e578063f1cb7e061461057a576101c4565b8063a91ee0dc146104a9578063c8690233146104c5578063c8cc2aee146104f6576101c4565b80637d0e0e7e116100d35780637d0e0e7e146104375780638b95dd71146104535780639a8a05921461046f578063a526d83b1461048d576101c4565b806371404156146103e157806377372213146103fd5780637b10399914610419576101c4565b8063392e53cd1161016657806355800f871161014057806355800f871461033557806359d1d43c14610351578063691f3431146103815780636df0cf42146103b1576101c4565b8063392e53cd146102cb5780633b3b57de146102e957806346386f7314610319576101c4565b8063116191b6116101a2578063116191b6146102455780631b3cd1421461026357806329ae6a7e1461029357806329cd62ea146102af576101c4565b806301ffc9a7146101c95780630c68ba21146101f957806310f13a8c14610229575b600080fd5b6101e360048036038101906101de91906133b4565b6105aa565b6040516101f091906141bc565b60405180910390f35b610213600480360381019061020e9190613066565b610834565b60405161022091906141bc565b60405180910390f35b610243600480360381019061023e9190613288565b610889565b005b61024d61096d565b60405161025a919061415d565b60405180910390f35b61027d600480360381019061027891906130b8565b610993565b60405161028a919061415d565b60405180910390f35b6102ad60048036038101906102a891906130b8565b6109c6565b005b6102c960048036038101906102c4919061311d565b610beb565b005b6102d3610cb3565b6040516102e091906141bc565b60405180910390f35b61030360048036038101906102fe91906130b8565b610d0b565b604051610310919061415d565b60405180910390f35b610333600480360381019061032e919061316c565b610d1d565b005b61034f600480360381019061034a91906130b8565b611017565b005b61036b60048036038101906103669190613230565b6112d8565b604051610378919061433d565b60405180910390f35b61039b600480360381019061039691906130b8565b6113ad565b6040516103a8919061433d565b60405180910390f35b6103cb60048036038101906103c69190613472565b611462565b6040516103d891906141d7565b60405180910390f35b6103fb60048036038101906103f69190613066565b611482565b005b61041760048036038101906104129190613230565b61169a565b005b610421611746565b60405161042e91906142fe565b60405180910390f35b610451600480360381019061044c91906130b8565b61176c565b005b61046d6004803603810190610468919061334d565b611a38565b005b610477611a92565b604051610484919061461f565b60405180910390f35b6104a760048036038101906104a29190613066565b611a98565b005b6104c360048036038101906104be91906133dd565b611b2f565b005b6104df60048036038101906104da91906130b8565b611d58565b6040516104ed92919061421b565b60405180910390f35b610510600480360381019061050b91906130b8565b611d92565b005b61052c600480360381019061052791906131d8565b6120a2565b60405161053991906141bc565b60405180910390f35b61055c600480360381019061055791906130e1565b6120fb565b005b61057860048036038101906105739190613406565b612153565b005b610594600480360381019061058f9190613311565b612366565b6040516105a191906142dc565b60405180910390f35b60006040516020016105bb9061406f565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061067d5750604051602001610626906140aa565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806106e95750604051602001610692906140fe565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061075557506040516020016106fe906140d4565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806107c1575060405160200161076a906140e9565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061082d57506040516020016107d6906140bf565b604051602081830303815290604052805190602001207bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b846108938161242d565b6108d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c9906145df565b60405180910390fd5b82826007600089815260200190815260200160002087876040516108f7929190614056565b90815260200160405180910390209190610912929190612d39565b508484604051610923929190614056565b6040518091039020867fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550878760405161095d929190614319565b60405180910390a3505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006109d0612516565b90503073ffffffffffffffffffffffffffffffffffffffff166109f283612527565b73ffffffffffffffffffffffffffffffffffffffff1614610a48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3f9061443f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae09061437f565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c383836040518363ffffffff1660e01b8152600401610b469291906141f2565b600060405180830381600087803b158015610b6057600080fd5b505af1158015610b74573d6000803e3d6000fd5b505050506009600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f7803a16d95f9ca635bdec561006625e7444d8a9f8463866643cc03af011779d38282604051610bdf9291906141f2565b60405180910390a15050565b82610bf58161242d565b610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b906145df565b60405180910390fd5b604051806040016040528084815260200183815250600660008681526020019081526020016000206000820151816000015560208201518160010155905050837f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e468484604051610ca592919061421b565b60405180910390a250505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000610d1682612527565b9050919050565b6000610d27612516565b90506000610d3682878761260c565b9050610d868185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612664565b610dc5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbc9061439f565b60405180910390fd5b60008686604051602001610dda92919061402a565b6040516020818303038152906040528051906020012090503073ffffffffffffffffffffffffffffffffffffffff16610e1288612527565b73ffffffffffffffffffffffffffffffffffffffff1614610e68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5f9061441f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16610e8982612527565b73ffffffffffffffffffffffffffffffffffffffff1614610edf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed6906143bf565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635ef2c7f08888303060006040518663ffffffff1660e01b8152600401610f43959493929190614244565b600060405180830381600087803b158015610f5d57600080fd5b505af1158015610f71573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c382856040518363ffffffff1660e01b8152600401610fd29291906141f2565b600060405180830381600087803b158015610fec57600080fd5b505af1158015611000573d6000803e3d6000fd5b5050505061100e81846126d1565b50505050505050565b6000611021612516565b9050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff1660e01b815260040161107e91906141d7565b60206040518083038186803b15801561109657600080fd5b505afa1580156110aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ce919061308f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461113b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111329061447f565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf846040518263ffffffff1660e01b81526004016111ad91906141d7565b60206040518083038186803b1580156111c557600080fd5b505afa1580156111d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111fd919061308f565b73ffffffffffffffffffffffffffffffffffffffff1614611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a9061435f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1661127483612527565b73ffffffffffffffffffffffffffffffffffffffff16146112ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c19061451f565b60405180910390fd5b6112d482826126d1565b5050565b60606007600085815260200190815260200160002083836040516112fd929190614056565b90815260200160405180910390208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561139f5780601f106113745761010080835404028352916020019161139f565b820191906000526020600020905b81548152906001019060200180831161138257829003601f168201915b505050505090509392505050565b6060600560008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114565780601f1061142b57610100808354040283529160200191611456565b820191906000526020600020905b81548152906001019060200180831161143957829003601f168201915b50505050509050919050565b600061147b82600001518360200151846040015161260c565b9050919050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661150d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115049061449f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16141561157c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115739061459f565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fe9061453f565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b328260405161168f929190614193565b60405180910390a150565b826116a48161242d565b6116e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116da906145df565b60405180910390fd5b8282600560008781526020019081526020016000209190611705929190612d39565b50837fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f78484604051611738929190614319565b60405180910390a250505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611776612516565b9050600073ffffffffffffffffffffffffffffffffffffffff1661179983612527565b73ffffffffffffffffffffffffffffffffffffffff16146117ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e6906144ff565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611891576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611888906144df565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b815260040161190391906141d7565b60206040518083038186803b15801561191b57600080fd5b505afa15801561192f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611953919061308f565b73ffffffffffffffffffffffffffffffffffffffff16146119a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a09061455f565b60405180910390fd5b806009600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc1e082a8c26f27c26e1bf5d0ce7ddd579ec7f6d7eb3ea90d8abd6c40991bae368282604051611a2c9291906141f2565b60405180910390a15050565b82611a428161242d565b611a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a78906145df565b60405180910390fd5b611a8c8484846126e9565b50505050565b60025481565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611b23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1a9061449f565b60405180910390fd5b611b2c816127ab565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611bba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bb19061449f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c21906144bf565b60405180910390fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611cbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb2906145ff565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdb0239c63d4033dcdd21bd44f8dd479a03efbae12f6bbe27c0a5f923d26514cc600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051611d4d919061415d565b60405180910390a150565b6000806006600084815260200190815260200160002060000154600660008581526020019081526020016000206001015491509150915091565b6000611d9c612516565b9050600073ffffffffffffffffffffffffffffffffffffffff16611dbf83612527565b73ffffffffffffffffffffffffffffffffffffffff1614611e15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e0c906144ff565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611eb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ead9061437f565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b8152600401611f2891906141d7565b60206040518083038186803b158015611f4057600080fd5b505afa158015611f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f78919061308f565b73ffffffffffffffffffffffffffffffffffffffff1614611fce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc59061455f565b60405180910390fd5b611fd882306126d1565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83306040518363ffffffff1660e01b81526004016120359291906141f2565b600060405180830381600087803b15801561204f57600080fd5b505af1158015612063573d6000803e3d6000fd5b505050507fcefbe9dbadcf675eef14e23810996ff38541fc26b4dd77cd6724b0eedc96f2008260405161209691906141d7565b60405180910390a15050565b60006120f28484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612664565b90509392505050565b816121058161242d565b612144576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213b906145df565b60405180910390fd5b61214e83836126d1565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146121e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121da906143ff565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228c906144bf565b60405180910390fd5b83600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612320838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061293a565b61232981612992565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516123589190614178565b60405180910390a150505050565b60606004600084815260200190815260200160002060008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156124205780601f106123f557610100808354040283529160200191612420565b820191906000526020600020905b81548152906001019060200180831161240357829003601f168201915b5050505050905092915050565b6000612437612516565b73ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b81526004016124a891906141d7565b60206040518083038186803b1580156124c057600080fd5b505afa1580156124d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f8919061308f565b73ffffffffffffffffffffffffffffffffffffffff16149050919050565b600061252260286129d6565b905090565b6000806060600460008581526020019081526020016000206000603c81526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156125e55780601f106125ba576101008083540402835291602001916125e5565b820191906000526020600020905b8154815290600101906020018083116125c857829003601f168201915b50505050509050600081511115612602576125ff81612a6b565b91505b8192505050919050565b600061265b7f621363c539a3aa1024c8837ca1dc095db03b7f9512b3a95ecb429aae7fd953ed85858560405160200161264793929190613fed565b604051602081830303815290604052612a93565b90509392505050565b60008061267a8385612ad490919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6126e582603c6126e084612b8f565b6126e9565b5050565b827f65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af752838360405161271b92919061463a565b60405180910390a2603c82141561276d57827f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd261275783612a6b565b6040516127649190614178565b60405180910390a25b8060046000858152602001908152602001600020600084815260200190815260200160002090805190602001906127a5929190612db9565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561281b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612812906143df565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156128a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161289e9061457f565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a328260405161292f929190614193565b60405180910390a150565b6000815114156129525761294d326127ab565b61298f565b60008151905060005b8181101561298c5761297f83828151811061297257fe5b60200260200101516127ab565b808060010191505061295b565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600090506129e5612bf6565b15612a5e576000836000369050039050612a5660003683906014850192612a0e93929190614711565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612ca3565b915050612a62565b3390505b80915050919050565b6000806014835114612a7c57600080fd5b600c6101000a602084015104905080915050919050565b6000612acc600254308585604051602001612ab19493929190614113565b60405160208183030381529060405280519060200120612d09565b905092915050565b60008060009050604183511415612b855760008060006020860151925060408601519150606086015160001a9050601b8160ff161015612b1557601b810190505b601b8160ff161480612b2a5750601c8160ff16145b15612b815760018782858560405160008152602001604052604051612b529493929190614297565b6020604051602081039080840390855afa158015612b74573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b606080601467ffffffffffffffff81118015612baa57600080fd5b506040519080825280601f01601f191660200182016040528015612bdd5781602001600182028036833780820191505090505b509050600c6101000a8302602082015280915050919050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612c9c57602c60003690501015612c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c8e9061445f565b60405180910390fd5b600190505b8091505090565b6000806014835114612cea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ce1906145bf565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b600081604051602001612d1c9190614084565b604051602081830303815290604052805190602001209050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612d7a57803560ff1916838001178555612da8565b82800160010185558215612da8579182015b82811115612da7578235825591602001919060010190612d8c565b5b509050612db59190612e39565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612dfa57805160ff1916838001178555612e28565b82800160010185558215612e28579182015b82811115612e27578251825591602001919060010190612e0c565b5b509050612e359190612e39565b5090565b5b80821115612e52576000816000905550600101612e3a565b5090565b600081359050612e65816148f9565b92915050565b600081519050612e7a816148f9565b92915050565b60008083601f840112612e9257600080fd5b8235905067ffffffffffffffff811115612eab57600080fd5b602083019150836020820283011115612ec357600080fd5b9250929050565b600081359050612ed981614910565b92915050565b600081359050612eee81614927565b92915050565b60008083601f840112612f0657600080fd5b8235905067ffffffffffffffff811115612f1f57600080fd5b602083019150836001820283011115612f3757600080fd5b9250929050565b600082601f830112612f4f57600080fd5b8135612f62612f5d82614697565b61466a565b91508082526020830160208301858383011115612f7e57600080fd5b612f89838284614861565b50505092915050565b600081359050612fa18161493e565b92915050565b60008083601f840112612fb957600080fd5b8235905067ffffffffffffffff811115612fd257600080fd5b602083019150836001820283011115612fea57600080fd5b9250929050565b60006060828403121561300357600080fd5b61300d606061466a565b9050600061301d84828501612e56565b600083015250602061303184828501612eca565b602083015250604061304584828501612eca565b60408301525092915050565b60008135905061306081614955565b92915050565b60006020828403121561307857600080fd5b600061308684828501612e56565b91505092915050565b6000602082840312156130a157600080fd5b60006130af84828501612e6b565b91505092915050565b6000602082840312156130ca57600080fd5b60006130d884828501612eca565b91505092915050565b600080604083850312156130f457600080fd5b600061310285828601612eca565b925050602061311385828601612e56565b9150509250929050565b60008060006060848603121561313257600080fd5b600061314086828701612eca565b935050602061315186828701612eca565b925050604061316286828701612eca565b9150509250925092565b6000806000806060858703121561318257600080fd5b600061319087828801612eca565b94505060206131a187828801612eca565b935050604085013567ffffffffffffffff8111156131be57600080fd5b6131ca87828801612ef4565b925092505092959194509250565b6000806000604084860312156131ed57600080fd5b60006131fb86828701612eca565b935050602084013567ffffffffffffffff81111561321857600080fd5b61322486828701612ef4565b92509250509250925092565b60008060006040848603121561324557600080fd5b600061325386828701612eca565b935050602084013567ffffffffffffffff81111561327057600080fd5b61327c86828701612fa7565b92509250509250925092565b6000806000806000606086880312156132a057600080fd5b60006132ae88828901612eca565b955050602086013567ffffffffffffffff8111156132cb57600080fd5b6132d788828901612fa7565b9450945050604086013567ffffffffffffffff8111156132f657600080fd5b61330288828901612fa7565b92509250509295509295909350565b6000806040838503121561332457600080fd5b600061333285828601612eca565b925050602061334385828601613051565b9150509250929050565b60008060006060848603121561336257600080fd5b600061337086828701612eca565b935050602061338186828701613051565b925050604084013567ffffffffffffffff81111561339e57600080fd5b6133aa86828701612f3e565b9150509250925092565b6000602082840312156133c657600080fd5b60006133d484828501612edf565b91505092915050565b6000602082840312156133ef57600080fd5b60006133fd84828501612f92565b91505092915050565b6000806000806060858703121561341c57600080fd5b600061342a87828801612f92565b945050602085013567ffffffffffffffff81111561344757600080fd5b61345387828801612e80565b9350935050604061346687828801612e56565b91505092959194509250565b60006060828403121561348457600080fd5b600061349284828501612ff1565b91505092915050565b6134a4816147f5565b82525050565b6134b381614744565b82525050565b6134ca6134c582614744565b6148a3565b82525050565b6134d981614756565b82525050565b6134e881614762565b82525050565b6134ff6134fa82614762565b6148b5565b82525050565b6000613510826146c3565b61351a81856146d9565b935061352a818560208601614870565b613533816148db565b840191505092915050565b6000613549826146c3565b61355381856146ea565b9350613563818560208601614870565b80840191505092915050565b61357881614807565b82525050565b6135878161482b565b82525050565b600061359983856146f5565b93506135a6838584614861565b6135af836148db565b840190509392505050565b60006135c68385614706565b93506135d3838584614861565b82840190509392505050565b60006135ea826146ce565b6135f481856146f5565b9350613604818560208601614870565b61360d816148db565b840191505092915050565b6000613625601983614706565b91507f737570706f727473496e746572666163652862797465733429000000000000006000830152601982019050919050565b60006136656024836146f5565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465207265736f60008301527f6c766572000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006136cb6021836146f5565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006137316029836146f5565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420677561726469616e2060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b60006137976022836146f5565b91507f454e53436f6e74726f6c6c65723a206c6162656c20616c72656164792074616b60008301527f656e0000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006137fd601c83614706565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b600061383d6020836146f5565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b600061387d602f836146f5565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b60006138e3600d83614706565b91507f61646472286279746573333229000000000000000000000000000000000000006000830152600d82019050919050565b6000613923601b836146f5565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f646500000000006000830152602082019050919050565b60006139636021836146f5565b91507f454e53436f6e74726f6c6c65723a206e6f646520646f65736e2774206578697360008301527f74000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006139c96022836146f5565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a2f601483614706565b91507f7465787428627974657333322c737472696e67290000000000000000000000006000830152601482019050919050565b6000613a6f600d83614706565b91507f6e616d65286279746573333229000000000000000000000000000000000000006000830152600d82019050919050565b6000613aaf602b836146f5565b91507f454e53436f6e74726f6c6c65723a2063616c6c6572206973206e6f742074686560008301527f206e6f6465206f776e65720000000000000000000000000000000000000000006020830152604082019050919050565b6000613b156026836146f5565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613b7b6026836146f5565b91507f454e53436f6e74726f6c6c65723a2063616e6e6f74207365742030783020726560008301527f67697374727900000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613be16025836146f5565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479207375626d60008301527f69747465640000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613c47600f83614706565b91507f7075626b657928627974657333322900000000000000000000000000000000006000830152600f82019050919050565b6000613c876022836146f5565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479206578697360008301527f74730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613ced6023836146f5565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c726561647920696e207360008301527f796e6300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613d53601f836146f5565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000613d936025836146f5565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420656e73206e6f64652060008301527f6f776e65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613df96020836146f5565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b6000613e39601b836146f5565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b6000613e79601d836146f5565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b6000613eb96037836146f5565b91507f454e5341627374726163745265736f6c7665723a20726576657274656420627960008301527f206f6e6c794e6f64654f776e6572206d6f6469666965720000000000000000006020830152604082019050919050565b6000613f1f601283614706565b91507f6164647228627974657333322c75696e742900000000000000000000000000006000830152601282019050919050565b6000613f5f6023836146f5565b91507f454e53436f6e74726f6c6c65723a20726567697374727920616c72656164792060008301527f73657400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b613fc1816147ca565b82525050565b613fd8613fd3826147ca565b6148d1565b82525050565b613fe7816147e8565b82525050565b6000613ff982866134b9565b60148201915061400982856134ee565b60208201915061401982846134ee565b602082019150819050949350505050565b600061403682856134ee565b60208201915061404682846134ee565b6020820191508190509392505050565b60006140638284866135ba565b91508190509392505050565b600061407a82613618565b9150819050919050565b600061408f826137f0565b915061409b82846134ee565b60208201915081905092915050565b60006140b5826138d6565b9150819050919050565b60006140ca82613a22565b9150819050919050565b60006140df82613a62565b9150819050919050565b60006140f482613c3a565b9150819050919050565b600061410982613f12565b9150819050919050565b600061411f8287613fc7565b60208201915061412f82866134b9565b60148201915061413f82856134ee565b60208201915061414f828461353e565b915081905095945050505050565b600060208201905061417260008301846134aa565b92915050565b600060208201905061418d600083018461349b565b92915050565b60006040820190506141a8600083018561349b565b6141b560208301846134aa565b9392505050565b60006020820190506141d160008301846134d0565b92915050565b60006020820190506141ec60008301846134df565b92915050565b600060408201905061420760008301856134df565b61421460208301846134aa565b9392505050565b600060408201905061423060008301856134df565b61423d60208301846134df565b9392505050565b600060a08201905061425960008301886134df565b61426660208301876134df565b61427360408301866134aa565b61428060608301856134aa565b61428d608083018461357e565b9695505050505050565b60006080820190506142ac60008301876134df565b6142b96020830186613fde565b6142c660408301856134df565b6142d360608301846134df565b95945050505050565b600060208201905081810360008301526142f68184613505565b905092915050565b6000602082019050614313600083018461356f565b92915050565b6000602082019050818103600083015261433481848661358d565b90509392505050565b6000602082019050818103600083015261435781846135df565b905092915050565b6000602082019050818103600083015261437881613658565b9050919050565b60006020820190508181036000830152614398816136be565b9050919050565b600060208201905081810360008301526143b881613724565b9050919050565b600060208201905081810360008301526143d88161378a565b9050919050565b600060208201905081810360008301526143f881613830565b9050919050565b6000602082019050818103600083015261441881613870565b9050919050565b6000602082019050818103600083015261443881613916565b9050919050565b6000602082019050818103600083015261445881613956565b9050919050565b60006020820190508181036000830152614478816139bc565b9050919050565b6000602082019050818103600083015261449881613aa2565b9050919050565b600060208201905081810360008301526144b881613b08565b9050919050565b600060208201905081810360008301526144d881613b6e565b9050919050565b600060208201905081810360008301526144f881613bd4565b9050919050565b6000602082019050818103600083015261451881613c7a565b9050919050565b6000602082019050818103600083015261453881613ce0565b9050919050565b6000602082019050818103600083015261455881613d46565b9050919050565b6000602082019050818103600083015261457881613d86565b9050919050565b6000602082019050818103600083015261459881613dec565b9050919050565b600060208201905081810360008301526145b881613e2c565b9050919050565b600060208201905081810360008301526145d881613e6c565b9050919050565b600060208201905081810360008301526145f881613eac565b9050919050565b6000602082019050818103600083015261461881613f52565b9050919050565b60006020820190506146346000830184613fb8565b92915050565b600060408201905061464f6000830185613fb8565b81810360208301526146618184613505565b90509392505050565b6000604051905081810181811067ffffffffffffffff8211171561468d57600080fd5b8060405250919050565b600067ffffffffffffffff8211156146ae57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561472157600080fd5b8386111561472e57600080fd5b6001850283019150848603905094509492505050565b600061474f826147aa565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60006147a382614744565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600060ff82169050919050565b60006148008261483d565b9050919050565b600061481282614819565b9050919050565b6000614824826147aa565b9050919050565b6000614836826147d4565b9050919050565b60006148488261484f565b9050919050565b600061485a826147aa565b9050919050565b82818337600083830152505050565b60005b8381101561488e578082015181840152602081019050614873565b8381111561489d576000848401525b50505050565b60006148ae826148bf565b9050919050565b6000819050919050565b60006148ca826148ec565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61490281614744565b811461490d57600080fd5b50565b61491981614762565b811461492457600080fd5b50565b6149308161476c565b811461493b57600080fd5b50565b61494781614798565b811461495257600080fd5b50565b61495e816147ca565b811461496957600080fd5b5056fea164736f6c634300060c000a"
  },
  "ENSHelper": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32[]",
            "name": "nodes",
            "type": "bytes32[]"
          }
        ],
        "name": "getAddresses",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32[]",
            "name": "nodes",
            "type": "bytes32[]"
          }
        ],
        "name": "getNames",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "registry_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0xcbe53E703c7e35CC5c74710b1B7C4fA5eD616b67",
      "3": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "5": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "56": "0xcbe53E703c7e35CC5c74710b1B7C4fA5eD616b67",
      "77": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "97": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "100": "0xcbe53E703c7e35CC5c74710b1B7C4fA5eD616b67",
      "250": "0xcbe53E703c7e35CC5c74710b1B7C4fA5eD616b67",
      "4002": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "6666": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "9999": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e74806100606000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806338bc01b51461005c578063392e53cd1461008c5780637b103999146100aa578063c4d66de8146100c8578063dc6008e2146100e4575b600080fd5b610076600480360381019061007191906108a6565b610114565b6040516100839190610b55565b60405180910390f35b6100946101ec565b6040516100a19190610b99565b60405180910390f35b6100b2610242565b6040516100bf9190610bcf565b60405180910390f35b6100e260048036038101906100dd91906108e7565b610268565b005b6100fe60048036038101906100f991906108a6565b6103b2565b60405161010b9190610b77565b60405180910390f35b606060008251905060608167ffffffffffffffff8111801561013557600080fd5b506040519080825280602002602001820160405280156101645781602001602082028036833780820191505090505b50905060005b828110156101e15761018e85828151811061018157fe5b6020026020010151610460565b82828151811061019a57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050808060010191505061016a565b508092505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed90610bea565b60405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516103a79190610b3a565b60405180910390a150565b606060008251905060608167ffffffffffffffff811180156103d357600080fd5b5060405190808252806020026020018201604052801561040757816020015b60608152602001906001900390816103f25790505b50905060005b828110156104555761043185828151811061042457fe5b60200260200101516105e1565b82828151811061043d57fe5b6020026020010181905250808060010191505061040d565b508092505050919050565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf856040518263ffffffff1660e01b81526004016104c09190610bb4565b60206040518083038186803b1580156104d857600080fd5b505afa1580156104ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610510919061087d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d7578073ffffffffffffffffffffffffffffffffffffffff16633b3b57de856040518263ffffffff1660e01b815260040161057f9190610bb4565b60206040518083038186803b15801561059757600080fd5b505afa9250505080156105c857506040513d601f19601f820116820180604052508101906105c5919061087d565b60015b6105d1576105d6565b809250505b5b8192505050919050565b6060806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf856040518263ffffffff1660e01b81526004016106419190610bb4565b60206040518083038186803b15801561065957600080fd5b505afa15801561066d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610691919061087d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461075d578073ffffffffffffffffffffffffffffffffffffffff1663691f3431856040518263ffffffff1660e01b81526004016107009190610bb4565b60006040518083038186803b15801561071857600080fd5b505afa92505050801561074e57506040513d6000823e3d601f19601f8201168201806040525081019061074b9190610910565b60015b6107575761075c565b809250505b5b8192505050919050565b60008151905061077681610e22565b92915050565b600082601f83011261078d57600080fd5b81356107a061079b82610c37565b610c0a565b915081818352602084019350602081019050838560208402820111156107c557600080fd5b60005b838110156107f557816107db88826107ff565b8452602084019350602083019250506001810190506107c8565b5050505092915050565b60008135905061080e81610e39565b92915050565b60008135905061082381610e50565b92915050565b600082601f83011261083a57600080fd5b815161084d61084882610c5f565b610c0a565b9150808252602083016020830185838301111561086957600080fd5b610874838284610dde565b50505092915050565b60006020828403121561088f57600080fd5b600061089d84828501610767565b91505092915050565b6000602082840312156108b857600080fd5b600082013567ffffffffffffffff8111156108d257600080fd5b6108de8482850161077c565b91505092915050565b6000602082840312156108f957600080fd5b600061090784828501610814565b91505092915050565b60006020828403121561092257600080fd5b600082015167ffffffffffffffff81111561093c57600080fd5b61094884828501610829565b91505092915050565b600061095d838361098c565b60208301905092915050565b60006109758383610a9b565b905092915050565b61098681610d84565b82525050565b61099581610d2a565b82525050565b60006109a682610cab565b6109b08185610ce6565b93506109bb83610c8b565b8060005b838110156109ec5781516109d38882610951565b97506109de83610ccc565b9250506001810190506109bf565b5085935050505092915050565b6000610a0482610cb6565b610a0e8185610cf7565b935083602082028501610a2085610c9b565b8060005b85811015610a5c5784840389528151610a3d8582610969565b9450610a4883610cd9565b925060208a01995050600181019050610a24565b50829750879550505050505092915050565b610a7781610d3c565b82525050565b610a8681610d48565b82525050565b610a9581610d96565b82525050565b6000610aa682610cc1565b610ab08185610d08565b9350610ac0818560208601610dde565b610ac981610e11565b840191505092915050565b6000610ae1602f83610d19565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b6000602082019050610b4f600083018461097d565b92915050565b60006020820190508181036000830152610b6f818461099b565b905092915050565b60006020820190508181036000830152610b9181846109f9565b905092915050565b6000602082019050610bae6000830184610a6e565b92915050565b6000602082019050610bc96000830184610a7d565b92915050565b6000602082019050610be46000830184610a8c565b92915050565b60006020820190508181036000830152610c0381610ad4565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610c2d57600080fd5b8060405250919050565b600067ffffffffffffffff821115610c4e57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115610c7657600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610d3582610d64565b9050919050565b60008115159050919050565b6000819050919050565b6000610d5d82610d2a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d8f82610dba565b9050919050565b6000610da182610da8565b9050919050565b6000610db382610d64565b9050919050565b6000610dc582610dcc565b9050919050565b6000610dd782610d64565b9050919050565b60005b83811015610dfc578082015181840152602081019050610de1565b83811115610e0b576000848401525b50505050565b6000601f19601f8301169050919050565b610e2b81610d2a565b8114610e3657600080fd5b50565b610e4281610d48565b8114610e4d57600080fd5b50565b610e5981610d52565b8114610e6457600080fd5b5056fea164736f6c634300060c000a"
  },
  "ENSNameResolver": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "NameChanged",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ENSPubKeyResolver": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "name": "PubkeyChanged",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "pubkey",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "x",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "y",
            "type": "bytes32"
          }
        ],
        "name": "setPubkey",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ENSRegistry": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "label",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "NewOwner",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "resolver",
            "type": "address"
          }
        ],
        "name": "NewResolver",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint64",
            "name": "ttl",
            "type": "uint64"
          }
        ],
        "name": "NewTTL",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "recordExists",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "resolver",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "resolver_",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "ttl_",
            "type": "uint64"
          }
        ],
        "name": "setRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "resolver_",
            "type": "address"
          }
        ],
        "name": "setResolver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "label",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          }
        ],
        "name": "setSubnodeOwner",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "label",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "owner_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "resolver_",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "ttl_",
            "type": "uint64"
          }
        ],
        "name": "setSubnodeRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "ttl_",
            "type": "uint64"
          }
        ],
        "name": "setTTL",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "ttl",
        "outputs": [
          {
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      "3": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "4": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "5": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "56": "0x952206c1FeBfD47D3Ebcf6d06f1372260512724c",
      "77": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "97": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "100": "0x952206c1FeBfD47D3Ebcf6d06f1372260512724c",
      "250": "0x952206c1FeBfD47D3Ebcf6d06f1372260512724c",
      "4002": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "6666": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "9999": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000808060001b815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611253806100776000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80635b0fc9c3116100715780635b0fc9c3146102b15780635ef2c7f0146102ff578063a22cb4651461038b578063cf408823146103db578063e985e9c51461045d578063f79fe538146104d7576100b4565b80630178b8bf146100b957806302571be31461011157806306ab59231461016957806314ab9038146101d557806316a25cbd146102175780631896f70a14610263575b600080fd5b6100e5600480360360208110156100cf57600080fd5b810190808035906020019092919050505061051b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013d6004803603602081101561012757600080fd5b810190808035906020019092919050505061055a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101bf6004803603606081101561017f57600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105dd565b6040518082815260200191505060405180910390f35b610215600480360360408110156101eb57600080fd5b8101908080359060200190929190803567ffffffffffffffff169060200190929190505050610812565b005b6102436004803603602081101561022d57600080fd5b81019080803590602001909291905050506109e6565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102af6004803603604081101561027957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a19565b005b6102fd600480360360408110156102c757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c11565b005b610389600480360360a081101561031557600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050610e09565b005b6103d9600480360360408110156103a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610e2b565b005b61045b600480360360808110156103f157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803567ffffffffffffffff169060200190929190505050610f2a565b005b6104bf6004803603604081101561047357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f45565b60405180821515815260200191505060405180910390f35b610503600480360360208110156104ed57600080fd5b8101908080359060200190929190505050610fd9565b60405180821515815260200191505060405180910390f35b600080600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105d35760009150506105d8565b809150505b919050565b600083600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806106da5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b61072f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061121b602c913960400191505060405180910390fd5b6000868660405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090508460008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085877fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8287604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a38093505050509392505050565b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061090d5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061121b602c913960400191505060405180910390fd5b8260008086815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550837f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6884604051808267ffffffffffffffff16815260200191505060405180910390a250505050565b600080600083815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610b145750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610b69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061121b602c913960400191505060405180910390fd5b8260008086815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550837f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a084604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610d0c5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610d61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061121b602c913960400191505060405180910390fd5b8260008086815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550837fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26684604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505050565b6000610e168686866105dd565b9050610e23818484611047565b505050505050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610f348484610c11565b610f3f848383611047565b50505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b60008084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611152578160008085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550827f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25b60008084815260200190815260200160002060010160149054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff1614611215578060008085815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550827f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6882604051808267ffffffffffffffff16815260200191505060405180910390a25b50505056fe454e5352656769737472793a20726576657274656420627920617574686f7269736564206d6f646966696572a164736f6c634300060c000a"
  },
  "ENSReverseRegistrar": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "ADDR_REVERSE_NODE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "claim",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "resolver_",
            "type": "address"
          }
        ],
        "name": "claimWithResolver",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "registry_",
            "type": "address"
          },
          {
            "internalType": "contract ENSNameResolver",
            "name": "resolver_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr_",
            "type": "address"
          }
        ],
        "name": "node",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "contract ENSRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "resolver",
        "outputs": [
          {
            "internalType": "contract ENSNameResolver",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "name": "setName",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "4": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "5": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "56": "0xcf262fc5de1DdF740159ff01e66CD294759b2F25",
      "77": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "97": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "100": "0xcf262fc5de1DdF740159ff01e66CD294759b2F25",
      "250": "0xcf262fc5de1DdF740159ff01e66CD294759b2F25",
      "4002": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "6666": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "9999": "0x523C92966e9d2067ba547f59D51E907c20FD8761"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610df8806100606000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063485cc95511610066578063485cc955146101bc5780637b103999146102205780637cf8a2eb14610254578063bffbe61c14610272578063c47f0027146102ca57610093565b806304f3bcec146100985780630f5a5466146100cc5780631e83409a14610144578063392e53cd1461019c575b600080fd5b6100a0610399565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012e600480360360408110156100e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103bf565b6040518082815260200191505060405180910390f35b6101866004803603602081101561015a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103d3565b6040518082815260200191505060405180910390f35b6101a46103e7565b60405180821515815260200191505060405180910390f35b61021e600480360360408110156101d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061043d565b005b6102286105f5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61025c61061b565b6040518082815260200191505060405180910390f35b6102b46004803603602081101561028857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610642565b6040518082815260200191505060405180910390f35b610383600480360360208110156102e057600080fd5b81019080803590602001906401000000008111156102fd57600080fd5b82018360208201111561030f57600080fd5b8035906020019184600183028401116401000000008311171561033157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506106bb565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006103cb83836107ef565b905092915050565b60006103e08260006107ef565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146104e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610dbd602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b81565b60007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b6106878373ffffffffffffffffffffffffffffffffffffffff16610d4d565b6040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b6000806106ea30600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166107ef565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637737221382856040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610781578082015181840152602081019050610766565b50505050905090810190601f1680156107ae5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156107ce57600080fd5b505af11580156107e2573d6000803e3d6000fd5b5050505080915050919050565b6000806108113373ffffffffffffffffffffffffffffffffffffffff16610d4d565b905060007f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b8260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156108de57600080fd5b505afa1580156108f2573d6000803e3d6000fd5b505050506040513d602081101561090857600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610a315750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156109c657600080fd5b505afa1580156109da573d6000803e3d6000fd5b505050506040513d60208110156109f057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610c13573073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b6757600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85306040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b158015610b2757600080fd5b505af1158015610b3b573d6000803e3d6000fd5b505050506040513d6020811015610b5157600080fd5b8101908080519060200190929190505050503090505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83876040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b158015610bfa57600080fd5b505af1158015610c0e573d6000803e3d6000fd5b505050505b8573ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d4157600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59237f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260001b85896040518463ffffffff1660e01b8152600401808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b158015610d0457600080fd5b505af1158015610d18573d6000803e3d6000fd5b505050506040513d6020811015610d2e57600080fd5b8101908080519060200190929190505050505b81935050505092915050565b6000807f303132333435363738396162636465660000000000000000000000000000000060285b6000811115610daa5760018103905081600f86161a815360108504945060018103905081600f86161a8153601085049450610d74565b5060286000209150508091505091905056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a"
  },
  "ENSTextResolver": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "string",
            "name": "indexedKey",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "key",
            "type": "string"
          }
        ],
        "name": "TextChanged",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "key",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "value",
            "type": "string"
          }
        ],
        "name": "setText",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "key",
            "type": "string"
          }
        ],
        "name": "text",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ERC20Token": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "ExternalAccountRegistry": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "AccountProofAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "AccountProofRemoved",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "addAccountOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "addAccountProof",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "removeAccountOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "removeAccountProof",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "verifyAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "name": "verifyAccountOwnerAtBlock",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "verifyAccountProof",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "name": "verifyAccountProofAtBlock",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "3": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "5": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "56": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "77": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "97": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "100": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "250": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4002": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "6666": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "9999": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50610fff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394000b021161005b57806394000b0214610227578063bb890d3f14610255578063d543c34a146102cf578063e278cfc6146102fd57610088565b806334d323a41461008d57806359b52ef8146101115780638a3133781461017f5780638ecc1365146101e3575b600080fd5b6100f9600480360360608110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610341565b60405180821515815260200191505060405180910390f35b6101676004803603606081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505061040c565b60405180821515815260200191505060405180910390f35b6101cb6004803603604081101561019557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104ab565b60405180821515815260200191505060405180910390f35b610225600480360360208110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061053f565b005b6102536004803603602081101561023d57600080fd5b8101908080359060200190929190505050610860565b005b6102b76004803603604081101561026b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f1565b60405180821515815260200191505060405180910390f35b6102fb600480360360208110156102e557600080fd5b8101908080359060200190929190505050610ab1565b005b61033f6004803603602081101561031357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb2565b005b6000610403826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006104a2826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006105376000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008481526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f14602d913960400191505060405180910390fd5b61067b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b156106d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f6e602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644683382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6108ea6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b61093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610fc7602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f87dde712783ad4895642c7a875998317a71cf424a2444eb79545ce3795431ff93382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000610aa96000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b610b3b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b15610b91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f41602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f4075b367eed0513a54aa39c287c66d6ae98e5df6f73ac087b26b8f89d05d1aa83382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b610d686000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b610dbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610f9b602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb3382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008060009050836000015115610ef657600084602001511415610ed85760019050610ef5565b6000831415610eea5760019050610ef4565b8284602001511190505b5b5b8091505092915050565b6000610f0c8243610eb1565b905091905056fe45787465726e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e657245787465726e616c4163636f756e7452656769737472793a2070726f6f6620616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220646f65736e277420657869737445787465726e616c4163636f756e7452656769737472793a2070726f6f6620646f65736e2774206578697374a164736f6c634300060c000a"
  },
  "Gateway": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "batch",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "succeeded",
            "type": "bool"
          }
        ],
        "name": "BatchDelegated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "to",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes",
            "name": "senderSignature",
            "type": "bytes"
          }
        ],
        "name": "delegateBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "to",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes",
            "name": "senderSignature",
            "type": "bytes"
          }
        ],
        "name": "delegateBatchWithGasPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes[]",
            "name": "batches",
            "type": "bytes[]"
          },
          {
            "internalType": "bool",
            "name": "revertOnFailure",
            "type": "bool"
          }
        ],
        "name": "delegateBatches",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "externalAccountRegistry",
        "outputs": [
          {
            "internalType": "contract ExternalAccountRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getAccountNextNonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "to",
                "type": "address[]"
              },
              {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
              }
            ],
            "internalType": "struct Gateway.DelegatedBatch",
            "name": "delegatedBatch",
            "type": "tuple"
          }
        ],
        "name": "hashDelegatedBatch",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "to",
                "type": "address[]"
              },
              {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
              },
              {
                "internalType": "uint256",
                "name": "gasPrice",
                "type": "uint256"
              }
            ],
            "internalType": "struct Gateway.DelegatedBatchWithGasPrice",
            "name": "delegatedBatch",
            "type": "tuple"
          }
        ],
        "name": "hashDelegatedBatchWithGasPrice",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ExternalAccountRegistry",
            "name": "externalAccountRegistry_",
            "type": "address"
          },
          {
            "internalType": "contract PersonalAccountRegistry",
            "name": "personalAccountRegistry_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "personalAccountRegistry",
        "outputs": [
          {
            "internalType": "contract PersonalAccountRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "to",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          }
        ],
        "name": "sendBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "to",
            "type": "address[]"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          }
        ],
        "name": "sendBatchFromAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "3": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "5": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "56": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "77": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "97": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "100": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "250": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "4002": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "6666": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "9999": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600046905080600181905550506123f58061006d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063867519c61161008c5780639f255626116100665780639f255626146101fe578063b5021b161461021a578063d2c83b9a14610236578063f92c5f7c14610254576100cf565b8063867519c6146101a657806387d31313146101c25780639a8a0592146101e0576100cf565b8063231badaf146100d4578063392e53cd146100f0578063485cc9551461010e5780635afaa7bb1461012a57806373e5a13f1461014657806376db2b4c14610176575b600080fd5b6100ee60048036038101906100e99190611438565b610284565b005b6100f861037f565b6040516101059190611e71565b60405180910390f35b610128600480360381019061012391906115e0565b6103d5565b005b610144600480360381019061013f9190611563565b610561565b005b610160600480360381019061015b919061165d565b610739565b60405161016d9190611e8c565b60405180910390f35b610190600480360381019061018b919061161c565b61075e565b60405161019d9190611e8c565b60405180910390f35b6101c060048036038101906101bb91906113b9565b610788565b005b6101ca610799565b6040516101d79190611f07565b60405180910390f35b6101e86107bf565b6040516101f591906120a2565b60405180910390f35b610218600480360381019061021391906114f7565b6107c5565b005b610234600480360381019061022f9190611438565b6107d5565b005b61023e6108d1565b60405161024b9190611eec565b60405180910390f35b61026e60048036038101906102699190611390565b6108f7565b60405161027b91906120a2565b60405180910390f35b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc90611f82565b60405180910390fd5b60006103258261031788888888610953565b6109b690919063ffffffff16565b905084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061037786828686610a71565b505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610463576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045a90611f42565b60405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516105559190611def565b60405180910390a15050565b60008251116105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059c90611fc2565b60405180910390fd5b600080600090505b83518110156106f35760003073ffffffffffffffffffffffffffffffffffffffff168583815181106105db57fe5b60200260200101516040516105f09190611d0b565b6000604051808303816000865af19150503d806000811461062d576040519150601f19603f3d011682016040523d82523d6000602084013e610632565b606091505b505090508315610681578061067c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067390611f62565b60405180910390fd5b610697565b80801561068c575082155b1561069657600192505b5b7f361c14722cc344132c73396113f7164232448b09c544a149f09048648b43d872338684815181106106c557fe5b6020026020010151836040516106dd93929190611e0a565b60405180910390a15080806001019150506105ad565b5080610734576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072b90612082565b60405180910390fd5b505050565b60006107578260000151836020015184604001518560600151610953565b9050919050565b600061078182600001518360200151846040015185606001518660800151610edc565b9050919050565b61079483338484610a71565b505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6107d133338484610a71565b5050565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411610856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d90611f82565b60405180910390fd5b600061087782610869888888883a610edc565b6109b690919063ffffffff16565b905084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108c986828686610a71565b505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061094c6001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f4290919063ffffffff16565b9050919050565b60006109ac7f6848d0622081db2451400280dead7a739a080cb93852607c381af11e289769b286868661098587610f97565b6040516020016109989493929190611c6e565b604051602081830303815290604052610ffa565b9050949350505050565b60008060009050604183511415610a675760008060006020860151925060408601519150606086015160001a9050601b8160ff1610156109f757601b810190505b601b8160ff161480610a0c5750601c8160ff16145b15610a635760018782858560405160008152602001604052604051610a349493929190611ea7565b6020604051602081039080840390855afa158015610a56573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ae1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad890611fa2565b60405180910390fd5b6000825111610b25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1c90612062565b60405180910390fd5b8151815114610b69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6090612002565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610d3d57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b8152600401610bf9929190611e48565b60206040518083038186803b158015610c1157600080fd5b505afa158015610c25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4991906115b7565b80610cfd5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b8152600401610cac929190611e48565b60206040518083038186803b158015610cc457600080fd5b505afa158015610cd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfc91906115b7565b5b610d3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3390611fe2565b60405180910390fd5b5b600080600090505b8251811015610ed457600073ffffffffffffffffffffffffffffffffffffffff16848281518110610d7257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610dd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc890611f22565b60405180910390fd5b838181518110610ddd57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16838281518110610e0757fe5b60200260200101518787604051602001610e2393929190611d22565b604051602081830303815290604052604051610e3f9190611d0b565b6000604051808303816000865af19150503d8060008114610e7c576040519150601f19603f3d011682016040523d82523d6000602084013e610e81565b606091505b50508092505081610ec7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebe90612022565b60405180910390fd5b8080600101915050610d45565b505050505050565b6000610f377f6f4e1b2b1e5e49f4269e19e16e67a00cb0a796d96d30be3e4b540d3732e8bcad878787610f0e88610f97565b87604051602001610f23959493929190611cb4565b604051602081830303815290604052610ffa565b905095945050505050565b600080828401905083811015610f8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8490612042565b60405180910390fd5b8091505092915050565b60608060008351905060005b81811015610fef5782858281518110610fb857fe5b6020026020010151604051602001610fd1929190611d5b565b60405160208183030381529060405292508080600101915050610fa3565b508192505050919050565b60006110336001543085856040516020016110189493929190611da5565b6040516020818303038152906040528051906020012061103b565b905092915050565b60008160405160200161104e9190611d7f565b604051602081830303815290604052805190602001209050919050565b60008135905061107a81612375565b92915050565b600082601f83011261109157600080fd5b81356110a461109f826120ea565b6120bd565b915081818352602084019350602081019050838560208402820111156110c957600080fd5b60005b838110156110f957816110df888261106b565b8452602084019350602083019250506001810190506110cc565b5050505092915050565b600082601f83011261111457600080fd5b813561112761112282612112565b6120bd565b9150818183526020840193506020810190508360005b8381101561116d578135860161115388826111a1565b84526020840193506020830192505060018101905061113d565b5050505092915050565b6000813590506111868161238c565b92915050565b60008151905061119b8161238c565b92915050565b600082601f8301126111b257600080fd5b81356111c56111c08261213a565b6120bd565b915080825260208301602083018583830111156111e157600080fd5b6111ec8382846122dd565b50505092915050565b600081359050611204816123a3565b92915050565b600081359050611219816123ba565b92915050565b600060a0828403121561123157600080fd5b61123b60a06120bd565b9050600061124b8482850161106b565b600083015250602061125f8482850161137b565b602083015250604082013567ffffffffffffffff81111561127f57600080fd5b61128b84828501611080565b604083015250606082013567ffffffffffffffff8111156112ab57600080fd5b6112b784828501611103565b60608301525060806112cb8482850161137b565b60808301525092915050565b6000608082840312156112e957600080fd5b6112f360806120bd565b905060006113038482850161106b565b60008301525060206113178482850161137b565b602083015250604082013567ffffffffffffffff81111561133757600080fd5b61134384828501611080565b604083015250606082013567ffffffffffffffff81111561136357600080fd5b61136f84828501611103565b60608301525092915050565b60008135905061138a816123d1565b92915050565b6000602082840312156113a257600080fd5b60006113b08482850161106b565b91505092915050565b6000806000606084860312156113ce57600080fd5b60006113dc8682870161106b565b935050602084013567ffffffffffffffff8111156113f957600080fd5b61140586828701611080565b925050604084013567ffffffffffffffff81111561142257600080fd5b61142e86828701611103565b9150509250925092565b600080600080600060a0868803121561145057600080fd5b600061145e8882890161106b565b955050602061146f8882890161137b565b945050604086013567ffffffffffffffff81111561148c57600080fd5b61149888828901611080565b935050606086013567ffffffffffffffff8111156114b557600080fd5b6114c188828901611103565b925050608086013567ffffffffffffffff8111156114de57600080fd5b6114ea888289016111a1565b9150509295509295909350565b6000806040838503121561150a57600080fd5b600083013567ffffffffffffffff81111561152457600080fd5b61153085828601611080565b925050602083013567ffffffffffffffff81111561154d57600080fd5b61155985828601611103565b9150509250929050565b6000806040838503121561157657600080fd5b600083013567ffffffffffffffff81111561159057600080fd5b61159c85828601611103565b92505060206115ad85828601611177565b9150509250929050565b6000602082840312156115c957600080fd5b60006115d78482850161118c565b91505092915050565b600080604083850312156115f357600080fd5b6000611601858286016111f5565b92505060206116128582860161120a565b9150509250929050565b60006020828403121561162e57600080fd5b600082013567ffffffffffffffff81111561164857600080fd5b6116548482850161121f565b91505092915050565b60006020828403121561166f57600080fd5b600082013567ffffffffffffffff81111561168957600080fd5b611695848285016112d7565b91505092915050565b60006116aa83836116d4565b60208301905092915050565b6116bf8161225f565b82525050565b6116ce816121dc565b82525050565b6116dd816121dc565b82525050565b6116f46116ef826121dc565b61231f565b82525050565b600061170582612176565b61170f8185612199565b935061171a83612166565b8060005b8381101561174b578151611732888261169e565b975061173d8361218c565b92505060018101905061171e565b5085935050505092915050565b611761816121ee565b82525050565b611770816121fa565b82525050565b611787611782826121fa565b612331565b82525050565b600061179882612181565b6117a281856121a4565b93506117b28185602086016122ec565b6117bb81612357565b840191505092915050565b60006117d182612181565b6117db81856121b5565b93506117eb8185602086016122ec565b80840191505092915050565b61180081612271565b82525050565b61180f81612295565b82525050565b6000611822601b836121c0565b91507f476174657761793a2063616e6e6f742073656e6420746f2030783000000000006000830152602082019050919050565b6000611862601c836121d1565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b60006118a2602f836121c0565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b60006119086017836121c0565b91507f476174657761793a2062617463682072657665727465640000000000000000006000830152602082019050919050565b60006119486032836121c0565b91507f476174657761793a206e6f6e6365206973206c6f776572207468616e2063757260008301527f72656e74206163636f756e74206e6f6e636500000000000000000000000000006020830152604082019050919050565b60006119ae6025836121c0565b91507f476174657761793a2063616e6e6f742073656e642066726f6d2030783020616360008301527f636f756e740000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a146026836121c0565b91507f476174657761793a2063616e6e6f742064656c656761746520656d707479206260008301527f61746368657300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a7a6028836121c0565b91507f476174657761793a2073656e646572206973206e6f7420746865206163636f7560008301527f6e74206f776e65720000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ae06016836121c0565b91507f476174657761793a20696e76616c6964206261746368000000000000000000006000830152602082019050919050565b6000611b206023836121c0565b91507f476174657761793a206261746368207472616e73616374696f6e20726576657260008301527f74656400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b86601e836121c0565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b6000611bc66020836121c0565b91507f476174657761793a2063616e6e6f742073656e6420656d7074792062617463686000830152602082019050919050565b6000611c06601d836121c0565b91507f476174657761793a20616c6c20626174636865732072657665727465640000006000830152602082019050919050565b611c4281612248565b82525050565b611c59611c5482612248565b61234d565b82525050565b611c6881612252565b82525050565b6000611c7a82876116e3565b601482019150611c8a8286611c48565b602082019150611c9a82856116fa565b9150611ca682846117c6565b915081905095945050505050565b6000611cc082886116e3565b601482019150611cd08287611c48565b602082019150611ce082866116fa565b9150611cec82856117c6565b9150611cf88284611c48565b6020820191508190509695505050505050565b6000611d1782846117c6565b915081905092915050565b6000611d2e82866117c6565b9150611d3a82856116e3565b601482019150611d4a82846116e3565b601482019150819050949350505050565b6000611d6782856117c6565b9150611d7382846117c6565b91508190509392505050565b6000611d8a82611855565b9150611d968284611776565b60208201915081905092915050565b6000611db18287611c48565b602082019150611dc182866116e3565b601482019150611dd18285611776565b602082019150611de182846117c6565b915081905095945050505050565b6000602082019050611e0460008301846116b6565b92915050565b6000606082019050611e1f60008301866116b6565b8181036020830152611e31818561178d565b9050611e406040830184611758565b949350505050565b6000604082019050611e5d60008301856116c5565b611e6a60208301846116c5565b9392505050565b6000602082019050611e866000830184611758565b92915050565b6000602082019050611ea16000830184611767565b92915050565b6000608082019050611ebc6000830187611767565b611ec96020830186611c5f565b611ed66040830185611767565b611ee36060830184611767565b95945050505050565b6000602082019050611f0160008301846117f7565b92915050565b6000602082019050611f1c6000830184611806565b92915050565b60006020820190508181036000830152611f3b81611815565b9050919050565b60006020820190508181036000830152611f5b81611895565b9050919050565b60006020820190508181036000830152611f7b816118fb565b9050919050565b60006020820190508181036000830152611f9b8161193b565b9050919050565b60006020820190508181036000830152611fbb816119a1565b9050919050565b60006020820190508181036000830152611fdb81611a07565b9050919050565b60006020820190508181036000830152611ffb81611a6d565b9050919050565b6000602082019050818103600083015261201b81611ad3565b9050919050565b6000602082019050818103600083015261203b81611b13565b9050919050565b6000602082019050818103600083015261205b81611b79565b9050919050565b6000602082019050818103600083015261207b81611bb9565b9050919050565b6000602082019050818103600083015261209b81611bf9565b9050919050565b60006020820190506120b76000830184611c39565b92915050565b6000604051905081810181811067ffffffffffffffff821117156120e057600080fd5b8060405250919050565b600067ffffffffffffffff82111561210157600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561212957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561215157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60006121e782612228565b9050919050565b60008115159050919050565b6000819050919050565b600061220f826121dc565b9050919050565b6000612221826121dc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061226a826122b9565b9050919050565b600061227c82612283565b9050919050565b600061228e82612228565b9050919050565b60006122a0826122a7565b9050919050565b60006122b282612228565b9050919050565b60006122c4826122cb565b9050919050565b60006122d682612228565b9050919050565b82818337600083830152505050565b60005b8381101561230a5780820151818401526020810190506122ef565b83811115612319576000848401525b50505050565b600061232a8261233b565b9050919050565b6000819050919050565b600061234682612368565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61237e816121dc565b811461238957600080fd5b50565b612395816121ee565b81146123a057600080fd5b50565b6123ac81612204565b81146123b757600080fd5b50565b6123c381612216565b81146123ce57600080fd5b50565b6123da81612248565b81146123e557600080fd5b5056fea164736f6c634300060c000a"
  },
  "GatewayRecipient": {
    "abi": [
      {
        "inputs": [],
        "name": "gateway",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "Guarded": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "Initializable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "PaymentDepositAccount": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "controller",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "executeTransaction",
        "outputs": [
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a"
  },
  "PaymentRegistry": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "depositAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "DepositAccountDeployed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "depositAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DepositExitCompleted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "depositAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "DepositExitRejected",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "depositAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lockedUntil",
            "type": "uint256"
          }
        ],
        "name": "DepositExitRequested",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "depositAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "DepositWithdrawn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "PaymentChannelCommitted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "channelHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "PaymentDeposited",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "channelHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalValue",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "depositValue",
            "type": "uint256"
          }
        ],
        "name": "PaymentSplit",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "channelHash",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "PaymentWithdrawn",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndDeposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "depositPaymentValue",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndSplit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "senderSignature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "commitPaymentChannelAndWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "computeDepositAccountAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "uid",
            "type": "bytes32"
          }
        ],
        "name": "computePaymentChannelHash",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "deployDepositAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "depositExitLockPeriod",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "externalAccountRegistry",
        "outputs": [
          {
            "internalType": "contract ExternalAccountRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "gateway",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "getDepositExitLockedUntil",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "getDepositWithdrawnAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "hash",
            "type": "bytes32"
          }
        ],
        "name": "getPaymentChannelCommittedAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct PaymentRegistry.DepositWithdrawal",
            "name": "depositWithdrawal",
            "type": "tuple"
          }
        ],
        "name": "hashDepositWithdrawal",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "uid",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "blockNumber",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct PaymentRegistry.PaymentChannelCommit",
            "name": "paymentChannelCommit",
            "type": "tuple"
          }
        ],
        "name": "hashPaymentChannelCommit",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract ExternalAccountRegistry",
            "name": "externalAccountRegistry_",
            "type": "address"
          },
          {
            "internalType": "contract PersonalAccountRegistry",
            "name": "personalAccountRegistry_",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "depositExitLockPeriod_",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "guardians_",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "gateway_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "isDepositAccountDeployed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "personalAccountRegistry",
        "outputs": [
          {
            "internalType": "contract PersonalAccountRegistry",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "processDepositExit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "requestDepositExit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "withdrawDeposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "3": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "5": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "56": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "77": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "97": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "100": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "250": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "4002": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "6666": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "9999": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060004690508060028190555050614c138061006e6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639130c06e116100de578063c36326e711610097578063da1b213d11610071578063da1b213d146104bb578063dc7d6c31146104d7578063df04338014610507578063e0fe396e146105235761018e565b8063c36326e71461043d578063d0f710d61461046d578063d2c83b9a1461049d5761018e565b80639130c06e146103915780639a85fae2146103ad5780639a8a0592146103c9578063a526d83b146103e7578063b0274a7314610403578063bdff4b3b1461041f5761018e565b80636121fcfc1161014b578063714041561161012557806371404156146102f757806384389a2b1461031357806387d31313146103435780638a1773ab146103615761018e565b80636121fcfc1461028f5780636524a947146102bf5780636866da52146102db5761018e565b80630c68ba2114610193578063116191b6146101c35780632e4f161e146101e15780632e7037a014610211578063392e53cd1461024157806360bf4df21461025f575b600080fd5b6101ad60048036038101906101a89190612f83565b61053f565b6040516101ba91906140a9565b60405180910390f35b6101cb610594565b6040516101d89190613e92565b60405180910390f35b6101fb60048036038101906101f69190612fe8565b6105ba565b60405161020891906140c4565b60405180910390f35b61022b600480360381019061022691906133f5565b6105d2565b60405161023891906140c4565b60405180910390f35b6102496105f2565b60405161025691906140a9565b60405180910390f35b61027960048036038101906102749190612f83565b61064a565b6040516102869190613e92565b60405180910390f35b6102a960048036038101906102a49190612f83565b61065c565b6040516102b691906140a9565b60405180910390f35b6102d960048036038101906102d49190612f83565b6106f7565b005b6102f560048036038101906102f0919061320c565b610703565b005b610311600480360381019061030c9190612f83565b610a28565b005b61032d6004803603810190610328919061341e565b610c40565b60405161033a91906140c4565b60405180910390f35b61034b610c6f565b6040516103589190614200565b60405180910390f35b61037b600480360381019061037691906132a1565b610c95565b604051610388919061449d565b60405180910390f35b6103ab60048036038101906103a69190612f83565b610cb5565b005b6103c760048036038101906103c2919061304b565b610fe9565b005b6103d16110f4565b6040516103de919061449d565b60405180910390f35b61040160048036038101906103fc9190612f83565b6110fa565b005b61041d60048036038101906104189190612f83565b611191565b005b6104276113ac565b604051610434919061449d565b60405180910390f35b61045760048036038101906104529190612fac565b6113b2565b604051610464919061449d565b60405180910390f35b610487600480360381019061048291906132ca565b61143c565b60405161049491906140a9565b60405180910390f35b6104a5611495565b6040516104b291906141e5565b60405180910390f35b6104d560048036038101906104d09190613121565b6114bb565b005b6104f160048036038101906104ec9190612fac565b6115c2565b6040516104fe919061449d565b60405180910390f35b610521600480360381019061051c919061304b565b61164c565b005b61053d60048036038101906105389190613363565b61174f565b005b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006105c885858585611955565b9050949350505050565b60006105eb82600001518360200151846040015161198e565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000610655826119e6565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61070081611a84565b50565b600061070d611c94565b905060006107a3600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205486611ca590919063ffffffff16565b9050600081116107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df9061435d565b60405180910390fd5b60006107f583888861198e565b90506108458186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611cd2565b610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b9061447d565b60405180910390fd5b85600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109128388611d3f565b610980600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848985611efc565b7f95f66b073d65f18e43f6b76c7ab8557787f5f766d86cab7c9c76f41be9f8abc6600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848989604051610a179493929190613f51565b60405180910390a150505050505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ab3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaa9061433d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b199061443d565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba4906143dd565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051610c35929190613ec8565b60405180910390a150565b6000610c68826000015183602001518460400151856060015186608001518760a0015161218c565b9050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060086000838152602001908152602001600020600001549050919050565b6000610cbf611c94565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610d89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d80906142fd565b60405180910390fd5b42811115610dcc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc39061437d565b60405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610f0d578173ffffffffffffffffffffffffffffffffffffffff16319050610f99565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401610f469190613e92565b60206040518083038186803b158015610f5e57600080fd5b505afa158015610f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f969190613447565b90505b610fa582858784611efc565b7f5300d9a2838baade7cdc628c82cb80c1298853ba5f389d51e2b47330336aeffc82858784604051610fda9493929190613f51565b60405180910390a15050505050565b6000610ff3611c94565b905060008060006110928d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b9250925092506110ac826110a5866119e6565b8e84611efc565b7f771bc0494e1a2fcbef19a8762845000d8c4500454c756a7370c955e39ed60fd483826040516110dd929190614140565b60405180910390a150505050505050505050505050565b60025481565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c9061433d565b60405180910390fd5b61118e81612691565b50565b600061119b611c94565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b9061429d565b60405180910390fd5b61126d82611a84565b6112826006544261282090919063ffffffff16565b905080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fed3c8c6cdfc6d7b91dc9db3e1f54866587c26c3c3e0f9e32cd1944974be43a50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683858460405161139f9493929190613f51565b60405180910390a1505050565b60065481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061148c8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611cd2565b90509392505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006114c5611c94565b905060008060006115648e858f8f8f8f8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b92509250925061157782858f848d612875565b7f8b67efde501ee9cd0e771f7436554c44a5c076239ff3a6fbb397646a4689c0f283828b6040516115aa93929190614169565b60405180910390a15050505050505050505050505050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611656611c94565b905060008060006116f58d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506121ed565b92509250925061170782858e84611efc565b7f6675346cd43846f7d47c310d39fb5c15bc7db66b3770338cdf1f133613a5ae988382604051611738929190614140565b60405180910390a150505050505050505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146117df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d69061427d565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008414156118bb576224ea006006819055506118c3565b836006819055505b61190d838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061293a565b61191681612992565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516119459190613ead565b60405180910390a1505050505050565b60008484848460405160200161196e9493929190613cd9565b604051602081830303815290604052805190602001209050949350505050565b60006119dd7f3b3087c8f883f1f44cabe66444f5f9d96f69de6a88f364ea10959eef0331414a8585856040516020016119c993929190613d97565b6040516020818303038152906040526129d6565b90509392505050565b600080826040516020016119fa9190613cbe565b604051602081830303815290604052805190602001209050606060405180602001611a2490612cff565b6020820181038252601f19601f820116604052509050600060ff60f81b30848480519060200120604051602001611a5e9493929190613dd4565b6040516020818303038152906040528051906020012090508060001c9350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff16600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c9157600081604051602001611b2e9190613cbe565b60405160208183030381529060405280519060200120905080604051611b5390612cff565b8190604051809103906000f5905080158015611b73573d6000803e3d6000fd5b50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd80572c0f2f24f2d9d726d831bd860ed82b12bafaf01cfb6e4d38fb23c4347e9600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051611c87929190613ef1565b60405180910390a1505b50565b6000611ca06028612a17565b905090565b6000611cca8383604051806060016040528060218152602001614be660219139612aac565b905092915050565b600080611ce88385612b0190919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611eee576000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fa19281a6f3163da06f6b82f3ecf0130493c52aba23cdc2a312f652742f0d1801600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383604051611ee193929190613f1a565b60405180910390a1611ef8565b611ef782611a84565b5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612016578373ffffffffffffffffffffffffffffffffffffffff16633f579f428483600067ffffffffffffffff81118015611f6757600080fd5b506040519080825280601f01601f191660200182016040528015611f9a5781602001600182028036833780820191505090505b506040518463ffffffff1660e01b8152600401611fb99392919061406b565b600060405180830381600087803b158015611fd357600080fd5b505af1158015611fe7573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906120109190613322565b50612186565b60608473ffffffffffffffffffffffffffffffffffffffff16633f579f4284600063a9059cbb60e01b8887604051602401612052929190614042565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518463ffffffff1660e01b81526004016120cd93929190614004565b600060405180830381600087803b1580156120e757600080fd5b505af11580156120fb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906121249190613322565b905060008151111561218457808060200190518101906121449190613278565b612183576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161217a9061431d565b60405180910390fd5b5b505b50505050565b60006121e17f745089e29f2abf28f618236a5dc04d214ac05ead3440ba532b69e9d160ba2e728888888888886040516020016121cd96959493929190613d27565b6040516020818303038152906040526129d6565b90509695505050505050565b6000806000806122018c8c8c8c8c8c61218c565b905060008651141561230057600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359b52ef88d838b6040518463ffffffff1660e01b815260040161226c93929190613fcd565b60206040518083038186803b15801561228457600080fd5b505afa158015612298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122bc9190613278565b6122fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122f29061447d565b60405180910390fd5b6124f1565b60006123158783612b0190919063ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff16146124ef57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b81526004016123a993929190613f96565b60206040518083038186803b1580156123c157600080fd5b505afa1580156123d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123f99190613278565b806124af5750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b815260040161245e93929190613f96565b60206040518083038186803b15801561247657600080fd5b505afa15801561248a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124ae9190613278565b5b6124ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124e5906143bd565b60405180910390fd5b5b505b6124fb8186611cd2565b61253a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125319061447d565b60405180910390fd5b6125468c8c8c8c611955565b9350612571600860008681526020019081526020016000206000015488611ca590919063ffffffff16565b915060008214156125b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ae906142bd565b60405180910390fd5b8660086000868152602001908152602001600020600001819055506125dc8c8b611d3f565b600760008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692507f0d1cb77d1fe491f98926195d0b885509da18bc305dd1489f45610237d971ed46848d8d8d8d8c60405161267a969594939291906140df565b60405180910390a150985098509895505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126f89061425d565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561278d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127849061441d565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051612815929190613ec8565b60405180910390a150565b60008082840190508381101561286b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612862906143fd565b60405180910390fd5b8091505092915050565b600081116128b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128af9061423d565b60405180910390fd5b60006128cd8284611ca590919063ffffffff16565b905060008111612912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129099061439d565b60405180910390fd5b61291e86868684611efc565b6129328661292b876119e6565b8685611efc565b505050505050565b6000815114156129525761294d32612691565b61298f565b60008151905060005b8181101561298c5761297f83828151811061297257fe5b6020026020010151612691565b808060010191505061295b565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000612a0f6002543085856040516020016129f49493929190613e48565b60405160208183030381529060405280519060200120612bbc565b905092915050565b60008060009050612a26612bec565b15612a9f576000836000369050039050612a9760003683906014850192612a4f9392919061455f565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612c99565b915050612aa3565b3390505b80915050919050565b6000838311158290612af4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aeb919061421b565b60405180910390fd5b5082840390509392505050565b60008060009050604183511415612bb25760008060006020860151925060408601519150606086015160001a9050601b8160ff161015612b4257601b810190505b601b8160ff161480612b575750601c8160ff16145b15612bae5760018782858560405160008152602001604052604051612b7f94939291906141a0565b6020604051602081039080840390855afa158015612ba1573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600081604051602001612bcf9190613e22565b604051602081830303815290604052805190602001209050919050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612c9257602c60003690501015612c8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c84906142dd565b60405180910390fd5b600190505b8091505090565b6000806014835114612ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cd79061445d565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b6103f7806147ef83390190565b600081359050612d1b81614764565b92915050565b60008083601f840112612d3357600080fd5b8235905067ffffffffffffffff811115612d4c57600080fd5b602083019150836020820283011115612d6457600080fd5b9250929050565b600081519050612d7a8161477b565b92915050565b600081359050612d8f81614792565b92915050565b60008083601f840112612da757600080fd5b8235905067ffffffffffffffff811115612dc057600080fd5b602083019150836001820283011115612dd857600080fd5b9250929050565b600082601f830112612df057600080fd5b8151612e03612dfe826144e5565b6144b8565b91508082526020830160208301858383011115612e1f57600080fd5b612e2a8382846146d1565b50505092915050565b600081359050612e42816147a9565b92915050565b600081359050612e57816147c0565b92915050565b600060608284031215612e6f57600080fd5b612e7960606144b8565b90506000612e8984828501612d0c565b6000830152506020612e9d84828501612d0c565b6020830152506040612eb184828501612f59565b60408301525092915050565b600060c08284031215612ecf57600080fd5b612ed960c06144b8565b90506000612ee984828501612d0c565b6000830152506020612efd84828501612d0c565b6020830152506040612f1184828501612d0c565b6040830152506060612f2584828501612d80565b6060830152506080612f3984828501612f59565b60808301525060a0612f4d84828501612f59565b60a08301525092915050565b600081359050612f68816147d7565b92915050565b600081519050612f7d816147d7565b92915050565b600060208284031215612f9557600080fd5b6000612fa384828501612d0c565b91505092915050565b60008060408385031215612fbf57600080fd5b6000612fcd85828601612d0c565b9250506020612fde85828601612d0c565b9150509250929050565b60008060008060808587031215612ffe57600080fd5b600061300c87828801612d0c565b945050602061301d87828801612d0c565b935050604061302e87828801612d0c565b925050606061303f87828801612d80565b91505092959194509250565b600080600080600080600080600060e08a8c03121561306957600080fd5b60006130778c828d01612d0c565b99505060206130888c828d01612d0c565b98505060406130998c828d01612d80565b97505060606130aa8c828d01612f59565b96505060806130bb8c828d01612f59565b95505060a08a013567ffffffffffffffff8111156130d857600080fd5b6130e48c828d01612d95565b945094505060c08a013567ffffffffffffffff81111561310357600080fd5b61310f8c828d01612d95565b92509250509295985092959850929598565b6000806000806000806000806000806101008b8d03121561314157600080fd5b600061314f8d828e01612d0c565b9a505060206131608d828e01612d0c565b99505060406131718d828e01612d80565b98505060606131828d828e01612f59565b97505060806131938d828e01612f59565b96505060a06131a48d828e01612f59565b95505060c08b013567ffffffffffffffff8111156131c157600080fd5b6131cd8d828e01612d95565b945094505060e08b013567ffffffffffffffff8111156131ec57600080fd5b6131f88d828e01612d95565b92509250509295989b9194979a5092959850565b6000806000806060858703121561322257600080fd5b600061323087828801612d0c565b945050602061324187828801612f59565b935050604085013567ffffffffffffffff81111561325e57600080fd5b61326a87828801612d95565b925092505092959194509250565b60006020828403121561328a57600080fd5b600061329884828501612d6b565b91505092915050565b6000602082840312156132b357600080fd5b60006132c184828501612d80565b91505092915050565b6000806000604084860312156132df57600080fd5b60006132ed86828701612d80565b935050602084013567ffffffffffffffff81111561330a57600080fd5b61331686828701612d95565b92509250509250925092565b60006020828403121561333457600080fd5b600082015167ffffffffffffffff81111561334e57600080fd5b61335a84828501612ddf565b91505092915050565b60008060008060008060a0878903121561337c57600080fd5b600061338a89828a01612e33565b965050602061339b89828a01612e48565b95505060406133ac89828a01612f59565b945050606087013567ffffffffffffffff8111156133c957600080fd5b6133d589828a01612d21565b935093505060806133e889828a01612d0c565b9150509295509295509295565b60006060828403121561340757600080fd5b600061341584828501612e5d565b91505092915050565b600060c0828403121561343057600080fd5b600061343e84828501612ebd565b91505092915050565b60006020828403121561345957600080fd5b600061346784828501612f6e565b91505092915050565b61347981614641565b82525050565b61348881614592565b82525050565b61349f61349a82614592565b614704565b82525050565b6134ae816145a4565b82525050565b6134c56134c0826145b0565b614716565b82525050565b6134d4816145dc565b82525050565b6134eb6134e6826145dc565b614720565b82525050565b60006134fc82614511565b6135068185614527565b93506135168185602086016146d1565b61351f81614746565b840191505092915050565b600061353582614511565b61353f8185614538565b935061354f8185602086016146d1565b80840191505092915050565b61356481614653565b82525050565b61357381614677565b82525050565b6135828161469b565b82525050565b60006135938261451c565b61359d8185614543565b93506135ad8185602086016146d1565b6135b681614746565b840191505092915050565b60006135ce602683614543565b91507f5061796d656e7452656769737472793a20696e76616c6964206465706f73697460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613634601c83614554565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b6000613674602083614543565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b60006136b4602f83614543565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b600061371a602f83614543565b91507f5061796d656e7452656769737472793a206465706f736974206578697420616c60008301527f72656164792072657175657374656400000000000000000000000000000000006020830152604082019050919050565b6000613780602683614543565b91507f5061796d656e7452656769737472793a20696e76616c6964207061796d656e7460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006137e6602283614543565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061384c602b83614543565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206e6f60008301527f74207265717565737465640000000000000000000000000000000000000000006020830152604082019050919050565b60006138b2602d83614543565b91507f5061796d656e7452656769737472793a204552433230546f6b656e207472616e60008301527f73666572207265766572746564000000000000000000000000000000000000006020830152604082019050919050565b6000613918602683614543565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061397e601f83614543565b91507f5061796d656e7452656769737472793a20696e76616c696420616d6f756e74006000830152602082019050919050565b60006139be602483614543565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206c6f60008301527f636b6564000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a24602783614543565b91507f5061796d656e7452656769737472793a20696e76616c6964207769746864726160008301527f772076616c7565000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a8a602983614543565b91507f5061796d656e7452656769737472793a20696e76616c69642073656e6465722060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b6000613af0601f83614543565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000613b30601e83614543565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b6000613b70602083614543565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b6000613bb0601b83614543565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b6000613bf0601d83614543565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b6000613c30602b83614543565b91507f5061796d656e7452656769737472793a20696e76616c6964206775617264696160008301527f6e207369676e61747572650000000000000000000000000000000000000000006020830152604082019050919050565b613c928161462a565b82525050565b613ca9613ca48261462a565b61473c565b82525050565b613cb881614634565b82525050565b6000613cca828461348e565b60148201915081905092915050565b6000613ce5828761348e565b601482019150613cf5828661348e565b601482019150613d05828561348e565b601482019150613d1582846134da565b60208201915081905095945050505050565b6000613d33828961348e565b601482019150613d43828861348e565b601482019150613d53828761348e565b601482019150613d6382866134da565b602082019150613d738285613c98565b602082019150613d838284613c98565b602082019150819050979650505050505050565b6000613da3828661348e565b601482019150613db3828561348e565b601482019150613dc38284613c98565b602082019150819050949350505050565b6000613de082876134b4565b600182019150613df0828661348e565b601482019150613e0082856134da565b602082019150613e1082846134da565b60208201915081905095945050505050565b6000613e2d82613627565b9150613e3982846134da565b60208201915081905092915050565b6000613e548287613c98565b602082019150613e64828661348e565b601482019150613e7482856134da565b602082019150613e84828461352a565b915081905095945050505050565b6000602082019050613ea7600083018461347f565b92915050565b6000602082019050613ec26000830184613470565b92915050565b6000604082019050613edd6000830185613470565b613eea602083018461347f565b9392505050565b6000604082019050613f06600083018561347f565b613f13602083018461347f565b9392505050565b6000606082019050613f2f600083018661347f565b613f3c602083018561347f565b613f49604083018461347f565b949350505050565b6000608082019050613f66600083018761347f565b613f73602083018661347f565b613f80604083018561347f565b613f8d6060830184613c89565b95945050505050565b6000606082019050613fab600083018661347f565b613fb8602083018561347f565b613fc56040830184613c89565b949350505050565b6000606082019050613fe2600083018661347f565b613fef60208301856134cb565b613ffc6040830184613c89565b949350505050565b6000606082019050614019600083018661347f565b6140266020830185613579565b818103604083015261403881846134f1565b9050949350505050565b6000604082019050614057600083018561347f565b6140646020830184613c89565b9392505050565b6000606082019050614080600083018661347f565b61408d6020830185613c89565b818103604083015261409f81846134f1565b9050949350505050565b60006020820190506140be60008301846134a5565b92915050565b60006020820190506140d960008301846134cb565b92915050565b600060c0820190506140f460008301896134cb565b614101602083018861347f565b61410e604083018761347f565b61411b606083018661347f565b61412860808301856134cb565b61413560a0830184613c89565b979650505050505050565b600060408201905061415560008301856134cb565b6141626020830184613c89565b9392505050565b600060608201905061417e60008301866134cb565b61418b6020830185613c89565b6141986040830184613c89565b949350505050565b60006080820190506141b560008301876134cb565b6141c26020830186613caf565b6141cf60408301856134cb565b6141dc60608301846134cb565b95945050505050565b60006020820190506141fa600083018461355b565b92915050565b6000602082019050614215600083018461356a565b92915050565b600060208201905081810360008301526142358184613588565b905092915050565b60006020820190508181036000830152614256816135c1565b9050919050565b6000602082019050818103600083015261427681613667565b9050919050565b60006020820190508181036000830152614296816136a7565b9050919050565b600060208201905081810360008301526142b68161370d565b9050919050565b600060208201905081810360008301526142d681613773565b9050919050565b600060208201905081810360008301526142f6816137d9565b9050919050565b600060208201905081810360008301526143168161383f565b9050919050565b60006020820190508181036000830152614336816138a5565b9050919050565b600060208201905081810360008301526143568161390b565b9050919050565b6000602082019050818103600083015261437681613971565b9050919050565b60006020820190508181036000830152614396816139b1565b9050919050565b600060208201905081810360008301526143b681613a17565b9050919050565b600060208201905081810360008301526143d681613a7d565b9050919050565b600060208201905081810360008301526143f681613ae3565b9050919050565b6000602082019050818103600083015261441681613b23565b9050919050565b6000602082019050818103600083015261443681613b63565b9050919050565b6000602082019050818103600083015261445681613ba3565b9050919050565b6000602082019050818103600083015261447681613be3565b9050919050565b6000602082019050818103600083015261449681613c23565b9050919050565b60006020820190506144b26000830184613c89565b92915050565b6000604051905081810181811067ffffffffffffffff821117156144db57600080fd5b8060405250919050565b600067ffffffffffffffff8211156144fc57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561456f57600080fd5b8386111561457c57600080fd5b6001850283019150848603905094509492505050565b600061459d8261460a565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b60006145f182614592565b9050919050565b600061460382614592565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061464c826146ad565b9050919050565b600061465e82614665565b9050919050565b60006146708261460a565b9050919050565b600061468282614689565b9050919050565b60006146948261460a565b9050919050565b60006146a68261462a565b9050919050565b60006146b8826146bf565b9050919050565b60006146ca8261460a565b9050919050565b60005b838110156146ef5780820151818401526020810190506146d4565b838111156146fe576000848401525b50505050565b600061470f8261472a565b9050919050565b6000819050919050565b6000819050919050565b600061473582614757565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61476d81614592565b811461477857600080fd5b50565b614784816145a4565b811461478f57600080fd5b50565b61479b816145dc565b81146147a657600080fd5b50565b6147b2816145e6565b81146147bd57600080fd5b50565b6147c9816145f8565b81146147d457600080fd5b50565b6147e08161462a565b81146147eb57600080fd5b5056fe6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a536166654d6174684c69623a207375627472616374696f6e206f766572666c6f77a164736f6c634300060c000a"
  },
  "PersonalAccountImplementationV1": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "interfaceHash",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "canImplementInterfaceForAddress",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "registry_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignature",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidSignature",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC1155Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "onERC721Received",
        "outputs": [
          {
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "registry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
          }
        ],
        "name": "tokensReceived",
        "outputs": [],
        "stateMutability": "pure",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "3": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "5": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "56": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "77": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "97": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "100": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "250": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4002": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "6666": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "9999": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610caa806100606000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c8063249cb3fa11610066578063249cb3fa1461047c578063392e53cd146104de5780637b103999146104fe578063c4d66de814610532578063f23a6e611461057657610092565b806223de2914610097578063150b7a02146101cf5780631626ba7e146102c557806320c13b0b1461037b575b600080fd5b6101cd600480360360c08110156100ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561013457600080fd5b82018360208201111561014657600080fd5b8035906020019184600183028401116401000000008311171561016857600080fd5b90919293919293908035906020019064010000000081111561018957600080fd5b82018360208201111561019b57600080fd5b803590602001918460018302840111640100000000831117156101bd57600080fd5b9091929391929390505050610676565b005b610290600480360360808110156101e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561024c57600080fd5b82018360208201111561025e57600080fd5b8035906020019184600183028401116401000000008311171561028057600080fd5b9091929391929390505050610680565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610346600480360360408110156102db57600080fd5b81019080803590602001909291908035906020019064010000000081111561030257600080fd5b82018360208201111561031457600080fd5b8035906020019184600183028401116401000000008311171561033657600080fd5b9091929391929390505050610695565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104476004803603604081101561039157600080fd5b81019080803590602001906401000000008111156103ae57600080fd5b8201836020820111156103c057600080fd5b803590602001918460018302840111640100000000831117156103e257600080fd5b90919293919293908035906020019064010000000081111561040357600080fd5b82018360208201111561041557600080fd5b8035906020019184600183028401116401000000008311171561043757600080fd5b90919293919293905050506107f9565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104c86004803603604081101561049257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b6040518082815260200191505060405180910390f35b6104e6610a66565b60405180821515815260200191505060405180910390f35b610506610abc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105746004803603602081101561054857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae2565b005b610641600480360360a081101561058c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156105fd57600080fd5b82018360208201111561060f57600080fd5b8035906020019184600183028401116401000000008311171561063157600080fd5b9091929391929390505050610c58565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b5050505050505050565b600063150b7a0260e01b905095945050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1e382ce308686866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b15801561075c57600080fd5b505afa158015610770573d6000803e3d6000fd5b505050506040513d602081101561078657600080fd5b81019080805190602001909291905050506107a85763ffffffff60e01b6107f0565b60405160200180807f697356616c69645369676e617475726528627974657333322c62797465732900815250601f019050604051602081830303815290604052805190602001205b90509392505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663124e9eb330878787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060206040518083038186803b1580156108ec57600080fd5b505afa158015610900573d6000803e3d6000fd5b505050506040513d602081101561091657600080fd5b81019080805190602001909291905050506109385763ffffffff60e01b610980565b60405160200180807f697356616c69645369676e61747572652862797465732c627974657329000000815250601d019050604051602081830303815290604052805190602001205b9050949350505050565b60008060405160200180807f455243373737546f6b656e73526563697069656e74000000000000000000000081525060150190506040516020818303038152906040528051906020012084148015610a0d57503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610a5c5760405160200180807f455243313832305f4143434550545f4d4147494300000000000000000000000081525060140190506040516020818303038152906040528051906020012090505b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610c6f602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600063f23a6e6160e01b9050969550505050505056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a"
  },
  "PersonalAccountRegistry": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "AccountCallRefunded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountDeployed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountImplementationUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "AccountOwnerRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountRegistry",
            "type": "address"
          }
        ],
        "name": "AccountRegistryUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "response",
            "type": "bytes"
          }
        ],
        "name": "AccountTransactionExecuted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "accountImplementation",
            "type": "address"
          }
        ],
        "name": "AccountUpgraded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "GuardianRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "accountImplementation",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "accountRegistry",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "addAccountOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "addGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "saltOwner",
            "type": "address"
          }
        ],
        "name": "computeAccountAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "deployAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "executeAccountTransaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "gateway",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "guardians_",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "accountImplementation_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "gateway_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isAccountDeployed",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "isGuardian",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidAccountSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "isValidAccountSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "refundAccountCall",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "removeAccountOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "guardian",
            "type": "address"
          }
        ],
        "name": "removeGuardian",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "accountImplementation_",
            "type": "address"
          }
        ],
        "name": "upgrade",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "upgradeAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "verifyAccountOwner",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "blockNumber",
            "type": "uint256"
          }
        ],
        "name": "verifyAccountOwnerAtBlock",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "verifyGuardianSignature",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "3": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "5": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "56": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "77": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "97": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "100": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "250": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "4002": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "6666": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "9999": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506144d1806100616000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806390482d72116100b8578063d0f710d61161007c578063d0f710d61461075e578063da9fc1ae146107f7578063db63f5821461083b578063e1e382ce1461089f578063e5c7278f14610958578063f4876c7414610a1b57610142565b806390482d7214610545578063a526d83b146105fe578063bb890d3f14610642578063cade6a5d146106bc578063d089e11a1461072a57610142565b80631a8414031161010a5780631a841403146103515780633164b5e1146103bf57806334d323a414610419578063392e53cd1461049d57806343013c24146104bd578063714041561461050157610142565b80630900f010146101475780630c68ba211461018b57806311464fbe146101e5578063116191b614610219578063124e9eb31461024d575b600080fd5b6101896004803603602081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7f565b005b6101cd600480360360208110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b60405180821515815260200191505060405180910390f35b6101ed610b83565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610221610ba9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103396004803603606081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111640100000000831117156102d457600080fd5b9091929391929390803590602001906401000000008111156102f557600080fd5b82018360208201111561030757600080fd5b8035906020019184600183028401116401000000008311171561032957600080fd5b9091929391929390505050610bcf565b60405180821515815260200191505060405180910390f35b6103bd6004803603606081101561036757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b610401600480360360208110156103d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef3565b60405180821515815260200191505060405180910390f35b6104856004803603606081101561042f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4c565b60405180821515815260200191505060405180910390f35b6104a561103a565b60405180821515815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611092565b005b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110aa565b005b6105fc6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460208302840111640100000000831117156105ac57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611370565b005b6106406004803603602081101561061457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611508565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115b5565b60405180821515815260200191505060405180910390f35b6106fe600480360360208110156106d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107326115db565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107df6004803603604081101561077457600080fd5b81019080803590602001909291908035906020019064010000000081111561079b57600080fd5b8201836020820111156107ad57600080fd5b803590602001918460018302840111640100000000831117156107cf57600080fd5b9091929391929390505050611601565b60405180821515815260200191505060405180910390f35b6108396004803603602081101561080d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165a565b005b61089d6004803603604081101561085157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611670565b005b610940600480360360608110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108fc57600080fd5b82018360208201111561090e57600080fd5b8035906020019184600183028401116401000000008311171561093057600080fd5b9091929391929390505050611905565b60405180821515815260200191505060405180910390f35b610a196004803603608081101561096e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109d557600080fd5b8201836020820111156109e757600080fd5b80359060200191846001830284011164010000000083111715610a0957600080fd5b9091929391929390505050611971565b005b610a7d60048036036040811015610a3157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b005b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b610b2b816001611d0d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c7d86610c7885858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c6a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e4e565b611fb790919063ffffffff16565b612087565b905095945050505050565b610c918361223e565b50610c9b83612685565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2f57610d29833283600067ffffffffffffffff81118015610cee57600080fd5b506040519080825280601f01601f191660200182016040528015610d215781602001600182028036833780820191505090505b506000612786565b50610e5d565b6060610dd38484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000612786565b9050600081511115610e5b57808060200190516020811015610df457600080fd5b8101908080519060200190929190505050610e5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061440a6035913960400191505060405180910390fd5b5b505b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009050610f5d8585612087565b15610f6b576001905061102f565b61102c83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050612c5490919063ffffffff16565b90505b809150509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b61109b8161223e565b506110a7816001612ca3565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661114b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156111ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180614318602f913960400191505060405180910390fd5b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114a2848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050612f05565b6114ac3083612f5d565b6114b581612f77565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b6115b281612fbb565b50565b60006115c18383612087565b905092915050565b60006115d4826131e2565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116518484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613238565b90509392505050565b6116638161223e565b5061166d81612685565b50565b600061167b8361223e565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806143b9602b913960400191505060405180910390fd5b6117b9600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b61180e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806142b7602c913960400191505060405180910390fd5b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60006119678561196285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611fb790919063ffffffff16565b612087565b9050949350505050565b61197a8561223e565b5061198485612685565b6119d685858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001612786565b505050505050565b6119e78261223e565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180614498602d913960400191505060405180910390fd5b611b25600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b15611b7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061446b602d913960400191505060405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018061421e603b913960400191505060405180910390fd5b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015611e4a577f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b6000611e5a82516132b8565b826040516020018082805190602001908083835b60208310611e915780518252602082019150602081019050602083039250611e6e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b60208310611f235780518252602082019150602081019050602083039250611f00565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611f745780518252602082019150602081019050602083039250611f51565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b6000806000905060418351141561207d5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015611ff857601b810190505b601b8160ff16148061200d5750601c8160ff16145b156120795760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561206c573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156121ac576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154149050612234565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141561223357612202836131e2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161490505b5b8091505092915050565b6000806122496133ff565b9050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156123c0576000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146123bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b61267c565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541461245d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506124aa81613410565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461252d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b80915050919050565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661278357612726600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546001613606565b506001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b6060600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561280e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806143476025913960400191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061443f602c913960400191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612918576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806142916026913960400191505060405180910390fd5b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129aa57808201518184015260208101905061298f565b50505050905090810190601f1680156129d75780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156129f857600080fd5b505af1158015612a0c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015612a3657600080fd5b8101908080516040519392919084640100000000821115612a5657600080fd5b83820191506020820185811115612a6c57600080fd5b8251866001820283011164010000000082111715612a8957600080fd5b8083526020830192505050908051906020019080838360005b83811015612abd578082015181840152602081019050612aa2565b50505050905090810190601f168015612aea5780820380516001836020036101000a031916815260200191505b5060405250505090508215612c47577f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba1578082015181840152602081019050612b86565b50505050905090810190601f168015612bce5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c07578082015181840152602081019050612bec565b50505050905090810190601f168015612c345780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15b8091505095945050505050565b60008060009050836000015115612c9957600084602001511415612c7b5760019050612c98565b6000831415612c8d5760019050612c97565b8284602001511190505b5b5b8091505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d2257600080fd5b505afa158015612d36573d6000803e3d6000fd5b505050506040513d6020811015612d4c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415612dca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061438e602b913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b505050508015612f01577feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5050565b600081511415612f1d57612f1832612fbb565b612f5a565b60008151905060005b81811015612f5757612f4a838281518110612f3d57fe5b6020026020010151612fbb565b8080600101915050612f26565b50505b50565b612f6882600061375a565b612f73816000611d0d565b5050565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561305e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561311d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905061323081613410565b915050919050565b60008061324e8385611fb790919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006132b18243612c54565b9050919050565b60606000821415613300576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506133fa565b600082905060005b6000821461332a578080600101915050600a828161332257fe5b049150613308565b60608167ffffffffffffffff8111801561334357600080fd5b506040519080825280601f01601f1916602001820160405280156133765781602001600182028036833780820191505090505b50905060006001830390508593505b600084146133f257600a848161339757fe5b0660300160f81b828280600190039350815181106133b157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816133ea57fe5b049350613385565b819450505050505b919050565b600061340b601461389b565b905090565b600060606040518060200161342490613a8c565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b602083106134be578051825260208201915060208101905060208303925061349b565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401955050505050506040516020818303038152906040529050600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c92505050919050565b60008083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161365c90613a8c565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f59050801580156136b9573d6000803e3d6000fd5b5090508215613750577f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156137e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806142e36035913960400191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015613897577f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b600080600090506138aa613930565b1561392357600083600036905003905061391b600036839060148501926138d393929190613a99565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506139f3565b915050613927565b3390505b80915050919050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156139ec57602c600036905010156139e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061436c6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114613a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b61075180613acd83390190565b60008085851115613aa957600080fd5b83861115613ab657600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a"
  },
  "SignatureValidator": {
    "abi": [
      {
        "inputs": [],
        "name": "chainId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "250": null,
      "4002": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x"
  },
  "WrappedWeiToken": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "consumer",
            "type": "address"
          }
        ],
        "name": "ConsumerAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "consumer",
            "type": "address"
          }
        ],
        "name": "ConsumerRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "initializer",
            "type": "address"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "depositTo",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "gateway",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "consumers_",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "gateway_",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "consumer",
            "type": "address"
          }
        ],
        "name": "isConsumer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "startConsuming",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "stopConsuming",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdrawAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "withdrawAllTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "withdrawTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "addresses": {
      "1": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "3": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "5": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "56": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "77": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "97": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "100": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "250": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4002": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "6666": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "9999": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616"
    },
    "byteCode": "0x60806040523480156200001157600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600b81526020017f5772617070656420576569000000000000000000000000000000000000000000815250600190805190602001906200009f929190620000f4565b506040518060400160405280600481526020017f575745490000000000000000000000000000000000000000000000000000000081525060029080519060200190620000ed929190620000f4565b506200019a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013757805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001675782518255916020019190600101906200014a565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6120b080620001aa6000396000f3fe6080604052600436106101235760003560e01c806356a3b64b116100a0578063a9059cbb11610064578063a9059cbb1461065f578063b760faf9146106d0578063ca9add8f14610714578063dd62ed3e14610765578063f55647e0146107ea5761013b565b806356a3b64b146104d557806370a08231146104ec578063834ff73914610551578063853828b6146105b857806395d89b41146105cf5761013b565b806323b872dd116100e757806323b872dd146103085780632e1a7d4d14610399578063313ce567146103d4578063392e53cd14610402578063462d0b2e1461042f5761013b565b806306fdde0314610140578063095ea7b3146101d0578063116191b61461024157806318160ddd14610282578063205c2878146102ad5761013b565b3661013b57610139610133610801565b34610810565b005b600080fd5b34801561014c57600080fd5b50610155610a26565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019557808201518184015260208101905061017a565b50505050905090810190601f1680156101c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101dc57600080fd5b50610229600480360360408110156101f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac4565b60405180821515815260200191505060405180910390f35b34801561024d57600080fd5b50610256610ae2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b50610297610b08565b6040518082815260200191505060405180910390f35b3480156102b957600080fd5b50610306600480360360408110156102d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b0e565b005b34801561031457600080fd5b506103816004803603606081101561032b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b24565b60405180821515815260200191505060405180910390f35b3480156103a557600080fd5b506103d2600480360360208110156103bc57600080fd5b8101908080359060200190929190505050610be1565b005b3480156103e057600080fd5b506103e9610bfd565b604051808260ff16815260200191505060405180910390f35b34801561040e57600080fd5b50610417610c10565b60405180821515815260200191505060405180910390f35b34801561043b57600080fd5b506104d36004803603604081101561045257600080fd5b810190808035906020019064010000000081111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460208302840111640100000000831117156104a357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c66565b005b3480156104e157600080fd5b506104ea610e05565b005b3480156104f857600080fd5b5061053b6004803603602081101561050f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e17565b6040518082815260200191505060405180910390f35b34801561055d57600080fd5b506105a06004803603602081101561057457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e60565b60405180821515815260200191505060405180910390f35b3480156105c457600080fd5b506105cd610eb6565b005b3480156105db57600080fd5b506105e4610f0f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610624578082015181840152602081019050610609565b50505050905090810190601f1680156106515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561066b57600080fd5b506106b86004803603604081101561068257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fad565b60405180821515815260200191505060405180910390f35b610712600480360360208110156106e657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b34801561072057600080fd5b506107636004803603602081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fd8565b005b34801561077157600080fd5b506107d46004803603604081101561078857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b6040518082815260200191505060405180910390f35b3480156107f657600080fd5b506107ff6110b9565b005b600061080b61120f565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610896576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fb66026913960400191505060405180910390fd5b6000811161090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c75650081525060200191505060405180910390fd5b61095e81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b68160045461122090919063ffffffff16565b6004819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610abc5780601f10610a9157610100808354040283529160200191610abc565b820191906000526020600020905b815481529060010190602001808311610a9f57829003601f168201915b505050505081565b6000610ad8610ad1610801565b84846112a8565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b610b20610b19610801565b838361149f565b5050565b600080610b2f610801565b9050610b3c858585611538565b610bd58582610bd086600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b6112a8565b60019150509392505050565b610bfa610bec610801565b610bf4610801565b8361149f565b50565b600360009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611ec8602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008383905014610daa57600083839050905060005b81811015610da757610d9a858583818110610d7857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166115d8565b8080600101915050610d61565b50505b610db381611723565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b610e15610e10610801565b6115d8565b565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000610ec0610801565b9050610f0c8182600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b50565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b505050505081565b6000610fc1610fba610801565b8484611538565b6001905092915050565b610fd58134610810565b50565b6000610fe2610801565b905061102e8183600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b5050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006110c3610801565b9050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611167576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806120066027913960400191505060405180910390fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f09881604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600061121b6028611767565b905090565b60008082840190508381101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561132e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611f8b602b913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611f416029913960400191505060405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6114a983826117fc565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061202d6025913960400191505060405180910390fd5b505050565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561159a5761159583838361149f565b6115a6565b6115a58383836119b6565b5b505050565b60006115d08383604051806060016040528060218152602001611f6a60219139611c56565b905092915050565b600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561167b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ef76028913960400191505060405180910390fd5b6001600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee0714281604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009050611776611d10565b156117ef5760008360003690500390506117e76000368390601485019261179f93929190611e6c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611dd3565b9150506117f3565b3390505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611882576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ea06028913960400191505060405180910390fd5b6118ee8160405180606001604052806026815260200161205260269139600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c569092919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611946816004546115ab90919063ffffffff16565b600481905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612078602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611fdc602a913960400191505060405180910390fd5b611b1481600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ba981600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cc8578082015181840152602081019050611cad565b50505050905090810190601f168015611cf55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611dcc57602c60003690501015611dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611f1f6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114611e4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b60008085851115611e7c57600080fd5b83861115611e8957600080fd5b600185028301915084860390509450949250505056fe4552433230546f6b656e3a2063616e6e6f74206275726e2066726f6d203078302061646472657373496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a657257726170706564576569546f6b656e3a20636f6e73756d657220616c72656164792065786973747347617465776179526563697069656e743a20696e76616c6964206d73672e646174614552433230546f6b656e3a2063616e6e6f7420617070726f766520746f203078302061646472657373536166654d6174684c69623a207375627472616374696f6e206f766572666c6f774552433230546f6b656e3a2063616e6e6f7420617070726f76652066726f6d2030783020616464726573734552433230546f6b656e3a2063616e6e6f74206d696e7420746f2030783020616464726573734552433230546f6b656e3a2063616e6e6f74207472616e7366657220746f20307830206164647265737357726170706564576569546f6b656e3a20636f6e73756d657220646f65736e277420657869737457726170706564576569546f6b656e3a207472616e73616374696f6e2072657665727465644552433230546f6b656e3a206275726e2076616c756520657863656564732062616c616e63654552433230546f6b656e3a2063616e6e6f74207472616e736665722066726f6d203078302061646472657373a164736f6c634300060c000a"
  }
};
