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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
    "byteCode": "0x"
  },
  "Address": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "AddressUpgradeable": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "AmplificationUtils": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "initialTime",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "futureTime",
            "type": "uint256"
          }
        ],
        "name": "RampA",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "currentA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "StopRampA",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "A_PRECISION",
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
        "name": "MAX_A",
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
    "addresses": {},
    "byteCode": "0x60bf610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806339698415146042578063d011f91814605c575b600080fd5b60486076565b604051605391906099565b60405180910390f35b6062607d565b604051606d91906099565b60405180910390f35b620f424081565b606481565b6000819050919050565b6093816082565b82525050565b600060208201905060ac6000830184608c565b9291505056fea164736f6c634300080f000a"
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
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506106a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ef5bfc3714610030575b600080fd5b6100fc6004803603604081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184602083028401116401000000008311171561009757600080fd5b9091929391929390803590602001906401000000008111156100b857600080fd5b8201836020820111156100ca57600080fd5b803590602001918460208302840111640100000000831117156100ec57600080fd5b9091929391929390505050610153565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561013f578082015181840152602081019050610124565b505050509050019250505060405180910390f35b60608061016f848490508787905061035490919063ffffffff16565b67ffffffffffffffff8111801561018557600080fd5b506040519080825280602002602001820160405280156101b45781602001602082028036833780820191505090505b50905060005b868690508110156103475760005b858590508110156103395760006101fd6101ee848989905061035490919063ffffffff16565b836103da90919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff1687878481811061022357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102d2576102b589898581811061026a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1688888581811061029357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16610462565b8482815181106102c157fe5b60200260200101818152505061032b565b8888848181106102de57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163184828151811061031e57fe5b6020026020010181815250505b5080806001019150506101c8565b5080806001019150506101ba565b5080915050949350505050565b60008083141561036757600090506103d4565b600082840290508284828161037857fe5b04146103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806106726024913960400191505060405180910390fd5b809150505b92915050565b600080828401905083811015610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600080600090506000833b905060008111156106665760008473ffffffffffffffffffffffffffffffffffffffff166370a0823160e01b87604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610550578051825260208201915060208101905060208303925061052d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146105b0576040519150601f19603f3d011682016040523d82523d6000602084013e6105b5565b606091505b505090508015610664578473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d602081101561065057600080fd5b810190808051906020019092919050505092505b505b81925050509291505056fe536166654d6174684c69623a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c634300060c000a"
  },
  "BalancesHelperV2": {
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
          }
        ],
        "name": "AccountZeroAddress",
        "type": "error"
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
          }
        ],
        "name": "TokenZeroAddress",
        "type": "error"
      },
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
      },
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
        "name": "getSuperfluidWrappedTokenBalances",
        "outputs": [
          {
            "internalType": "int256[]",
            "name": "",
            "type": "int256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b5061108a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806350c5a7101461003b578063ef5bfc371461006b575b600080fd5b610055600480360381019061005091906109e6565b61009b565b6040516100629190610ce8565b60405180910390f35b610085600480360381019061008091906109e6565b610279565b6040516100929190610d0a565b60405180910390f35b6060600083839050868690506100b19190610e68565b67ffffffffffffffff8111156100f0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561011e5781602001602082028036833780820191505090505b50905060005b8686905081101561026c5760005b85859050811015610258576000828787905061014e9190610e68565b826101599190610e12565b90506101ff898985818110610197577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906101ac91906109bd565b8888858181106101e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906101fa91906109bd565b610457565b848281518110610238577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505050808061025090610f3b565b915050610132565b50808061026490610f3b565b915050610124565b5080915050949350505050565b60606000838390508686905061028f9190610e68565b67ffffffffffffffff8111156102ce577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156102fc5781602001602082028036833780820191505090505b50905060005b8686905081101561044a5760005b85859050811015610436576000828787905061032c9190610e68565b826103379190610e12565b90506103dd898985818110610375577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061038a91906109bd565b8888858181106103c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906103d891906109bd565b610608565b848281518110610416577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505050808061042e90610f3b565b915050610310565b50808061044290610f3b565b915050610302565b5080915050949350505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104cc5782826040517f484305ff0000000000000000000000000000000000000000000000000000000081526004016104c3929190610cbf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156105405782826040517f41f93bdf000000000000000000000000000000000000000000000000000000008152600401610537929190610cbf565b60405180910390fd5b60006105e0632ec8eec760e01b8560405160240161055e9190610ca4565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508473ffffffffffffffffffffffffffffffffffffffff166107b090919063ffffffff16565b90506000818060200190518101906105f89190610a5b565b5050509050809250505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561067d5782826040517f484305ff000000000000000000000000000000000000000000000000000000008152600401610674929190610cbf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156106f15782826040517f41f93bdf0000000000000000000000000000000000000000000000000000000081526004016106e8929190610cbf565b60405180910390fd5b60006107916370a0823160e01b8560405160240161070f9190610ca4565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508473ffffffffffffffffffffffffffffffffffffffff166107b090919063ffffffff16565b9050808060200190518101906107a79190610abe565b91505092915050565b60606107d58383604051806060016040528060258152602001611059602591396107dd565b905092915050565b60606107e8846108aa565b610827576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081e90610d4e565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161084f9190610c8d565b600060405180830381855afa9150503d806000811461088a576040519150601f19603f3d011682016040523d82523d6000602084013e61088f565b606091505b509150915061089f8282866108cd565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156108dd5782905061092d565b6000835111156108f05782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109249190610d2c565b60405180910390fd5b9392505050565b60008135905061094381611013565b92915050565b60008083601f84011261095b57600080fd5b8235905067ffffffffffffffff81111561097457600080fd5b60208301915083602082028301111561098c57600080fd5b9250929050565b6000815190506109a28161102a565b92915050565b6000815190506109b781611041565b92915050565b6000602082840312156109cf57600080fd5b60006109dd84828501610934565b91505092915050565b600080600080604085870312156109fc57600080fd5b600085013567ffffffffffffffff811115610a1657600080fd5b610a2287828801610949565b9450945050602085013567ffffffffffffffff811115610a4157600080fd5b610a4d87828801610949565b925092505092959194509250565b60008060008060808587031215610a7157600080fd5b6000610a7f87828801610993565b9450506020610a90878288016109a8565b9350506040610aa1878288016109a8565b9250506060610ab2878288016109a8565b91505092959194509250565b600060208284031215610ad057600080fd5b6000610ade848285016109a8565b91505092915050565b6000610af38383610c13565b60208301905092915050565b6000610b0b8383610c7e565b60208301905092915050565b610b2081610ec2565b82525050565b6000610b3182610d8e565b610b3b8185610dd4565b9350610b4683610d6e565b8060005b83811015610b77578151610b5e8882610ae7565b9750610b6983610dba565b925050600181019050610b4a565b5085935050505092915050565b6000610b8f82610d99565b610b998185610de5565b9350610ba483610d7e565b8060005b83811015610bd5578151610bbc8882610aff565b9750610bc783610dc7565b925050600181019050610ba8565b5085935050505092915050565b6000610bed82610da4565b610bf78185610df6565b9350610c07818560208601610f08565b80840191505092915050565b610c1c81610ed4565b82525050565b6000610c2d82610daf565b610c378185610e01565b9350610c47818560208601610f08565b610c5081610fb3565b840191505092915050565b6000610c68602483610e01565b9150610c7382610fc4565b604082019050919050565b610c8781610efe565b82525050565b6000610c998284610be2565b915081905092915050565b6000602082019050610cb96000830184610b17565b92915050565b6000604082019050610cd46000830185610b17565b610ce16020830184610b17565b9392505050565b60006020820190508181036000830152610d028184610b26565b905092915050565b60006020820190508181036000830152610d248184610b84565b905092915050565b60006020820190508181036000830152610d468184610c22565b905092915050565b60006020820190508181036000830152610d6781610c5b565b9050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610e1d82610efe565b9150610e2883610efe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5d57610e5c610f84565b5b828201905092915050565b6000610e7382610efe565b9150610e7e83610efe565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610eb757610eb6610f84565b5b828202905092915050565b6000610ecd82610ede565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610f26578082015181840152602081019050610f0b565b83811115610f35576000848401525b50505050565b6000610f4682610efe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f7957610f78610f84565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b61101c81610ec2565b811461102757600080fd5b50565b61103381610ed4565b811461103e57600080fd5b50565b61104a81610efe565b811461105557600080fd5b5056fe416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564a164736f6c6343000804000a"
  },
  "CBridgeFacet": {
    "abi": [
      {
        "inputs": [],
        "name": "CBSlippageTooLow",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CannotBridgeToSameNetwork",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidAmount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "TokenAddressIsZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ZeroAddressProvided",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "cBridge",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          }
        ],
        "name": "CBInitialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "bridgeUsed",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "from",
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
            "name": "qty",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "chainIdTo",
            "type": "uint256"
          }
        ],
        "name": "CBTransferStarted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAddress",
            "type": "address"
          }
        ],
        "name": "CBUpdatedBridge",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newSlippage",
            "type": "uint256"
          }
        ],
        "name": "CBUpdatedSlippageTolerance",
        "type": "event"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "dstChainId",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "nonce",
                "type": "uint64"
              },
              {
                "internalType": "uint256",
                "name": "qty",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              }
            ],
            "internalType": "struct CBridgeFacet.CBridgeData",
            "name": "_cbData",
            "type": "tuple"
          }
        ],
        "name": "cbBridgeTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_cbBridge",
            "type": "address"
          }
        ],
        "name": "cbInitialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newAddress",
            "type": "address"
          }
        ],
        "name": "cbUpdateBridge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_newSlippage",
            "type": "uint32"
          }
        ],
        "name": "cbUpdateSlippageTolerance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506115ab806100206000396000f3fe60806040526004361061003f5760003560e01c806340d280a21461004457806352434c6e1461006d5780636f395e60146100895780639e32e2e6146100b2575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610dac565b6100db565b005b61008760048036038101906100829190610dfe565b610204565b005b34801561009557600080fd5b506100b060048036038101906100ab9190610dac565b6105f6565b005b3480156100be57600080fd5b506100d960048036038101906100d49190610e50565b6106ef565b005b6100e36107a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561014a576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061015461083d565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504681600101819055506127108160020160006101000a81548163ffffffff021916908363ffffffff1602179055507fcbfd47a07530fc4fffba96f5686a7127e5661fe26dd01503239ca2f66fcad99082466040516101f892919061112b565b60405180910390a15050565b600061020e61086a565b905060018160000154141561024f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555081600001602081019061026c9190610e79565b67ffffffffffffffff164614156102af576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260600160208101906102da9190610dac565b73ffffffffffffffffffffffffffffffffffffffff161415610328576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000826040013511610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260800160208101906103919190610dac565b73ffffffffffffffffffffffffffffffffffffffff1614156103df576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103e961083d565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610457333086604001358760800160208101906104319190610dac565b73ffffffffffffffffffffffffffffffffffffffff16610897909392919063ffffffff16565b6104988185604001358660800160208101906104739190610dac565b73ffffffffffffffffffffffffffffffffffffffff166109209092919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8560600160208101906104c79190610dac565b8660800160208101906104da9190610dac565b87604001358860000160208101906104f29190610e79565b8960200160208101906105059190610e79565b8860020160009054906101000a900463ffffffff166040518763ffffffff1660e01b815260040161053b969594939291906110ca565b600060405180830381600087803b15801561055557600080fd5b505af1158015610569573d6000803e3d6000fd5b505050507fd565a5cf794050de1a171170c91acd5d14cbf11877dc3fa020e9975495ab17578460800160208101906105a19190610dac565b338660600160208101906105b59190610dac565b87604001358860000160208101906105cd9190610e79565b6040516105de9594939291906111b6565b60405180910390a15050600081600001819055505050565b6105fe6107a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610665576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061066f61083d565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4ae67faf3cf135d9eca1b5490d3613096d2d0610fca7496112fa46ef019fbd4e826040516106e3919061104f565b60405180910390a15050565b6113888163ffffffff1611610730576040517f9ff4125000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107386107a2565b600061074261083d565b9050818160020160006101000a81548163ffffffff021916908363ffffffff1602179055507f8d5e80c35df41e151b58f1a100ad605ae1ebcda3d0c329b22820b232767a773082604051610796919061127c565b60405180910390a15050565b6107aa610a7e565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461083b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083290611176565b60405180910390fd5b565b6000807f9d7253cc9498e9cc54011bbbe9471a68adbc99d0ac1eef42369f5a452e814c4a90508091505090565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b61091a846323b872dd60e01b8585856040516024016108b893929190611093565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610aab565b50505050565b60008114806109b9575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161096792919061106a565b60206040518083038186803b15801561097f57600080fd5b505afa158015610993573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b79190610e27565b145b6109f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ef9061125c565b60405180910390fd5b610a798363095ea7b360e01b8484604051602401610a1792919061112b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610aab565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610b0d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610b729092919063ffffffff16565b9050600081511115610b6d5780806020019051810190610b2d9190610dd5565b610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b639061123c565b60405180910390fd5b5b505050565b6060610b818484600085610b8a565b90509392505050565b606082471015610bcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc690611196565b60405180910390fd5b610bd885610c9e565b610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e9061121c565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c409190611038565b60006040518083038185875af1925050503d8060008114610c7d576040519150601f19603f3d011682016040523d82523d6000602084013e610c82565b606091505b5091509150610c92828286610cc1565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610cd157829050610d21565b600083511115610ce45782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d189190611154565b60405180910390fd5b9392505050565b600081359050610d378161152b565b92915050565b600081519050610d4c81611542565b92915050565b600060a08284031215610d6457600080fd5b81905092915050565b600081519050610d7c81611559565b92915050565b600081359050610d9181611570565b92915050565b600081359050610da681611587565b92915050565b600060208284031215610dbe57600080fd5b6000610dcc84828501610d28565b91505092915050565b600060208284031215610de757600080fd5b6000610df584828501610d3d565b91505092915050565b600060a08284031215610e1057600080fd5b6000610e1e84828501610d52565b91505092915050565b600060208284031215610e3957600080fd5b6000610e4784828501610d6d565b91505092915050565b600060208284031215610e6257600080fd5b6000610e7084828501610d82565b91505092915050565b600060208284031215610e8b57600080fd5b6000610e9984828501610d97565b91505092915050565b610eab816112c9565b82525050565b6000610ebc82611297565b610ec681856112ad565b9350610ed6818560208601611359565b80840191505092915050565b6000610eed826112a2565b610ef781856112b8565b9350610f07818560208601611359565b610f108161138c565b840191505092915050565b6000610f286022836112b8565b9150610f338261139d565b604082019050919050565b6000610f4b6026836112b8565b9150610f56826113ec565b604082019050919050565b6000610f6e6007836112b8565b9150610f798261143b565b602082019050919050565b6000610f91601d836112b8565b9150610f9c82611464565b602082019050919050565b6000610fb4602a836112b8565b9150610fbf8261148d565b604082019050919050565b6000610fd76036836112b8565b9150610fe2826114dc565b604082019050919050565b610ff681611307565b82525050565b61100581611335565b82525050565b61101481611311565b82525050565b61102381611347565b82525050565b61103281611321565b82525050565b60006110448284610eb1565b915081905092915050565b60006020820190506110646000830184610ea2565b92915050565b600060408201905061107f6000830185610ea2565b61108c6020830184610ea2565b9392505050565b60006060820190506110a86000830186610ea2565b6110b56020830185610ea2565b6110c26040830184610fed565b949350505050565b600060c0820190506110df6000830189610ea2565b6110ec6020830188610ea2565b6110f96040830187610fed565b6111066060830186611029565b6111136080830185611029565b61112060a083018461100b565b979650505050505050565b60006040820190506111406000830185610ea2565b61114d6020830184610fed565b9392505050565b6000602082019050818103600083015261116e8184610ee2565b905092915050565b6000602082019050818103600083015261118f81610f1b565b9050919050565b600060208201905081810360008301526111af81610f3e565b9050919050565b600060c08201905081810360008301526111cf81610f61565b90506111de6020830188610ea2565b6111eb6040830187610ea2565b6111f86060830186610ea2565b6112056080830185610fed565b61121260a083018461101a565b9695505050505050565b6000602082019050818103600083015261123581610f84565b9050919050565b6000602082019050818103600083015261125581610fa7565b9050919050565b6000602082019050818103600083015261127581610fca565b9050919050565b60006020820190506112916000830184610ffc565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006112d4826112e7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600061134082611311565b9050919050565b600061135282611321565b9050919050565b60005b8381101561137757808201518184015260208101905061135c565b83811115611386576000848401525b50505050565b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6362726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b611534816112c9565b811461153f57600080fd5b50565b61154b816112db565b811461155657600080fd5b50565b61156281611307565b811461156d57600080fd5b50565b61157981611311565b811461158457600080fd5b50565b61159081611321565b811461159b57600080fd5b5056fea164736f6c6343000804000a"
  },
  "ConnextFacet": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_connext",
            "type": "address"
          }
        ],
        "name": "ConnextInitialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "_destination",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "ConnextNativeSwap",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "_destination",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "ConnextTokenSwap",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "_destination",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_callData",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "ConnextXCall",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_callData",
            "type": "bytes"
          },
          {
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_recovery",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_callback",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_callbackFee",
            "type": "uint256"
          }
        ],
        "name": "connextCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          }
        ],
        "name": "connextNativeAssetTransfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          }
        ],
        "name": "connextTokenTransfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_connext",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_domainId",
            "type": "uint32"
          }
        ],
        "name": "initConnext",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b5061152c806100206000396000f3fe60806040526004361061003f5760003560e01c80635fc0e73614610044578063a520f8df14610060578063b5f63d6b1461007c578063d858af20146100a5575b600080fd5b61005e60048036038101906100599190610aea565b6100c1565b005b61007a60048036038101906100759190610b65565b610168565b005b34801561008857600080fd5b506100a3600480360381019061009e9190610bb8565b6101f7565b005b6100bf60048036038101906100ba9190610d3e565b61031c565b005b60006100ee85604051806020016040528060008152506100df6103a4565b878a88883360008060006103cc565b90508573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168563ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e086868660405161015893929190610e4c565b60405180910390a4505050505050565b600061019684604051806020016040528060008152506101866103a4565b86600034883360008060006103cc565b90508373ffffffffffffffffffffffffffffffffffffffff168363ffffffff167fb47dd05ba9e0eb3ec95a42c27945552b2a232180e3b6441c20d4d5bff04ede953485856040516101e993929190610e4c565b60405180910390a350505050565b6101ff610628565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361026e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026590610ee0565b60405180910390fd5b60006102786106c3565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548163ffffffff021916908363ffffffff1602179055507ffcbf7a247efac41495da0df0e3ef60d8f0dd28dc5c86461b56507b29322dd8a08360405161030f9190610f0f565b60405180910390a1505050565b60006103398a8a61032b6103a4565b8b8b8b8b8b8b8b60006103cc565b90508973ffffffffffffffffffffffffffffffffffffffff168863ffffffff167f0f54f42e149762e432717bddc67b5ffb97adff1fd377dd688d9747bc8c1aab3d89898d8a87604051610390959493929190610fb2565b60405180910390a350505050505050505050565b6000806103af6106c3565b90508060000160149054906101000a900463ffffffff1691505090565b60006103da888888866106f0565b600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610495578773ffffffffffffffffffffffffffffffffffffffff1663095ea7b36104326109a1565b896040518363ffffffff1660e01b815260040161045092919061100c565b6020604051808303816000875af115801561046f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610493919061106d565b505b600061049f6109a1565b905060006040518061018001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020018e81526020018d63ffffffff1681526020018c63ffffffff1681526020018f73ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff16815260200185151581526020016000151581526020018773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200189815260200161270b8152509050600060405180606001604052808381526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81525090508273ffffffffffffffffffffffffffffffffffffffff16636c0636a134836040518363ffffffff1660e01b81526004016105d19190611274565b60206040518083038185885af11580156105ef573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061061491906112c2565b93505050509b9a5050505050505050505050565b6106306109d9565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b890611361565b60405180910390fd5b565b6000807ffa2e9c22c7fe2104814a1d7e2c66c58d10a2d7989d5bcf01173a2564aa59c04d90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036107815780828461073191906113b0565b61073b91906113b0565b341461077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077390611452565b60405180910390fd5b61099b565b808261078d91906113b0565b34146107ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c590611452565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108099190610f0f565b602060405180830381865afa158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a9190611487565b90508473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401610889939291906114b4565b6020604051808303816000875af11580156108a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cc919061106d565b5060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109089190610f0f565b602060405180830381865afa158015610925573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109499190611487565b905084828261095891906114eb565b14610998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098f90611452565b60405180910390fd5b50505b50505050565b6000806109ac6106c3565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a4582610a1a565b9050919050565b610a5581610a3a565b8114610a6057600080fd5b50565b600081359050610a7281610a4c565b92915050565b600063ffffffff82169050919050565b610a9181610a78565b8114610a9c57600080fd5b50565b600081359050610aae81610a88565b92915050565b6000819050919050565b610ac781610ab4565b8114610ad257600080fd5b50565b600081359050610ae481610abe565b92915050565b600080600080600060a08688031215610b0657610b05610a10565b5b6000610b1488828901610a63565b9550506020610b2588828901610a63565b9450506040610b3688828901610a9f565b9350506060610b4788828901610ad5565b9250506080610b5888828901610ad5565b9150509295509295909350565b600080600060608486031215610b7e57610b7d610a10565b5b6000610b8c86828701610a63565b9350506020610b9d86828701610a9f565b9250506040610bae86828701610ad5565b9150509250925092565b60008060408385031215610bcf57610bce610a10565b5b6000610bdd85828601610a63565b9250506020610bee85828601610a9f565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c4b82610c02565b810181811067ffffffffffffffff82111715610c6a57610c69610c13565b5b80604052505050565b6000610c7d610a06565b9050610c898282610c42565b919050565b600067ffffffffffffffff821115610ca957610ca8610c13565b5b610cb282610c02565b9050602081019050919050565b82818337600083830152505050565b6000610ce1610cdc84610c8e565b610c73565b905082815260208101848484011115610cfd57610cfc610bfd565b5b610d08848285610cbf565b509392505050565b600082601f830112610d2557610d24610bf8565b5b8135610d35848260208601610cce565b91505092915050565b60008060008060008060008060006101208a8c031215610d6157610d60610a10565b5b6000610d6f8c828d01610a63565b99505060208a013567ffffffffffffffff811115610d9057610d8f610a15565b5b610d9c8c828d01610d10565b9850506040610dad8c828d01610a9f565b9750506060610dbe8c828d01610a63565b9650506080610dcf8c828d01610ad5565b95505060a0610de08c828d01610ad5565b94505060c0610df18c828d01610a63565b93505060e0610e028c828d01610a63565b925050610100610e148c828d01610ad5565b9150509295985092959850929598565b610e2d81610ab4565b82525050565b6000819050919050565b610e4681610e33565b82525050565b6000606082019050610e616000830186610e24565b610e6e6020830185610e24565b610e7b6040830184610e3d565b949350505050565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b6000610eca601883610e83565b9150610ed582610e94565b602082019050919050565b60006020820190508181036000830152610ef981610ebd565b9050919050565b610f0981610a3a565b82525050565b6000602082019050610f246000830184610f00565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f64578082015181840152602081019050610f49565b83811115610f73576000848401525b50505050565b6000610f8482610f2a565b610f8e8185610f35565b9350610f9e818560208601610f46565b610fa781610c02565b840191505092915050565b600060a082019050610fc76000830188610f00565b610fd46020830187610e24565b8181036040830152610fe68186610f79565b9050610ff56060830185610e24565b6110026080830184610e3d565b9695505050505050565b60006040820190506110216000830185610f00565b61102e6020830184610e24565b9392505050565b60008115159050919050565b61104a81611035565b811461105557600080fd5b50565b60008151905061106781611041565b92915050565b60006020828403121561108357611082610a10565b5b600061109184828501611058565b91505092915050565b6110a381610a3a565b82525050565b600082825260208201905092915050565b60006110c582610f2a565b6110cf81856110a9565b93506110df818560208601610f46565b6110e881610c02565b840191505092915050565b6110fc81610a78565b82525050565b61110b81611035565b82525050565b61111a81610ab4565b82525050565b600061018083016000830151611139600086018261109a565b506020830151848203602086015261115182826110ba565b915050604083015161116660408601826110f3565b50606083015161117960608601826110f3565b50608083015161118c608086018261109a565b5060a083015161119f60a086018261109a565b5060c08301516111b260c0860182611102565b5060e08301516111c560e0860182611102565b506101008301516111da61010086018261109a565b506101208301516111ef610120860182611111565b50610140830151611204610140860182611111565b50610160830151611219610160860182611111565b508091505092915050565b600060608301600083015184820360008601526112418282611120565b9150506020830151611256602086018261109a565b5060408301516112696040860182611111565b508091505092915050565b6000602082019050818103600083015261128e8184611224565b905092915050565b61129f81610e33565b81146112aa57600080fd5b50565b6000815190506112bc81611296565b92915050565b6000602082840312156112d8576112d7610a10565b5b60006112e6848285016112ad565b91505092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b600061134b602283610e83565b9150611356826112ef565b604082019050919050565b6000602082019050818103600083015261137a8161133e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113bb82610ab4565b91506113c683610ab4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113fb576113fa611381565b5b828201905092915050565b7f436f6e6e6578743a20496e76616c69642076616c756500000000000000000000600082015250565b600061143c601683610e83565b915061144782611406565b602082019050919050565b6000602082019050818103600083015261146b8161142f565b9050919050565b60008151905061148181610abe565b92915050565b60006020828403121561149d5761149c610a10565b5b60006114ab84828501611472565b91505092915050565b60006060820190506114c96000830186610f00565b6114d66020830185610f00565b6114e36040830184610e24565b949350505050565b60006114f682610ab4565b915061150183610ab4565b92508282101561151457611513611381565b5b82820390509291505056fea164736f6c634300080f000a"
  },
  "ConnextMessage": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "Context": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x"
  },
  "ContextUpgradeable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
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
    "addresses": {},
    "byteCode": "0x"
  },
  "Diamond": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_contractOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_diamondCutFacet",
            "type": "address"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405260405162004967380380620049678339818101604052810190620000299190620018d0565b6200003f82620001f760201b620001671760201c565b6000600167ffffffffffffffff8111156200005f576200005e62001917565b5b6040519080825280602002602001820160405280156200009c57816020015b620000886200181a565b8152602001906001900390816200007e5790505b5090506000600167ffffffffffffffff811115620000bf57620000be62001917565b5b604051908082528060200260200182016040528015620000ee5781602001602082028036833780820191505090505b509050631f931c1c60e01b8160008151811062000110576200010f62001946565b5b60200260200101907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156200019a576200019962001975565b5b81526020018281525082600081518110620001ba57620001b962001946565b5b6020026020010181905250620001ed82600060405180602001604052806000815250620002d660201b6200023e1760201c565b50505050620025cb565b6000620002096200055a60201b60201c565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101562000505576000848281518110620002fb57620002fa62001946565b5b60200260200101516020015190506000600281111562000320576200031f62001975565b5b81600281111562000336576200033562001975565b5b0362000396576200039085838151811062000356576200035562001946565b5b60200260200101516000015186848151811062000378576200037762001946565b5b6020026020010151604001516200058760201b60201c565b620004ee565b60016002811115620003ad57620003ac62001975565b5b816002811115620003c357620003c262001975565b5b0362000423576200041d858381518110620003e357620003e262001946565b5b60200260200101516000015186848151811062000405576200040462001946565b5b6020026020010151604001516200082960201b60201c565b620004ed565b60028081111562000439576200043862001975565b5b8160028111156200044f576200044e62001975565b5b03620004af57620004a98583815181106200046f576200046e62001946565b5b60200260200101516000015186848151811062000491576200049062001946565b5b60200260200101516040015162000add60201b60201c565b620004ec565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004e39062001a2b565b60405180910390fd5b5b5b508080620004fc9062001a86565b915050620002d9565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516200053b9392919062001e0a565b60405180910390a162000555828262000c8560201b60201c565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000815111620005ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005c59062001ecb565b60405180910390fd5b6000620005e06200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000654576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064b9062001f63565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603620006ca57620006c9828562000eb360201b60201c565b5b60005b835181101562000822576000848281518110620006ef57620006ee62001946565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620007e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007dd9062001ffb565b60405180910390fd5b620007fa8583868a62000f9760201b60201c565b8380620008079062002035565b94505050508080620008199062001a86565b915050620006cd565b5050505050565b600081511162000870576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008679062001ecb565b60405180910390fd5b6000620008826200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620008f6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008ed9062001f63565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036200096c576200096b828562000eb360201b60201c565b5b60005b835181101562000ad657600084828151811062000991576200099062001946565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000a87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a7e90620020e4565b60405180910390fd5b62000a9a8582846200114460201b60201c565b62000aae8583868a62000f9760201b60201c565b838062000abb9062002035565b9450505050808062000acd9062001a86565b9150506200096f565b5050505050565b600081511162000b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b1b9062001ecb565b60405180910390fd5b600062000b366200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ba1906200217c565b60405180910390fd5b60005b825181101562000c7f57600083828151811062000bcf5762000bce62001946565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c678482846200114460201b60201c565b5050808062000c769062001a86565b91505062000bad565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000d0757600081511462000d01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000cf89062002214565b60405180910390fd5b62000eaf565b600081511162000d4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d4590620022ac565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000dae5762000dad826040518060600160405280602881526020016200491b60289139620017c560201b60201c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff168360405162000dd8919062002310565b600060405180830381855af49150503d806000811462000e15576040519150601f19603f3d011682016040523d82523d6000602084013e62000e1a565b606091505b50915091508162000eac5760008151111562000e6f57806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e66919062002375565b60405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ea3906200240f565b60405180910390fd5b50505b5050565b62000ede816040518060600160405280602481526020016200494360249139620017c560201b60201c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620011b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011ad90620024a7565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362001227576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200121e906200253f565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905062001300919062002561565b90508082146200149b5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811062001365576200136462001946565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110620013e457620013e362001946565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480620014f257620014f16200259c565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103620017be57600060018660020180549050620015df919062002561565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549050818114620017275760008760020183815481106200164d576200164c62001946565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811062001694576200169362001946565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806200173e576200173d6200259c565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b905060008111829062001814576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200180b919062002375565b60405180910390fd5b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111562001859576200185862001975565b5b8152602001606081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001898826200186b565b9050919050565b620018aa816200188b565b8114620018b657600080fd5b50565b600081519050620018ca816200189f565b92915050565b60008060408385031215620018ea57620018e962001866565b5b6000620018fa85828601620018b9565b92505060206200190d85828601620018b9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b600062001a13602783620019a4565b915062001a2082620019b5565b604082019050919050565b6000602082019050818103600083015262001a468162001a04565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600062001a938262001a7c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362001ac85762001ac762001a4d565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b62001b0a816200188b565b82525050565b6003811062001b245762001b2362001975565b5b50565b600081905062001b378262001b10565b919050565b600062001b498262001b27565b9050919050565b62001b5b8162001b3c565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62001bc48162001b8d565b82525050565b600062001bd8838362001bb9565b60208301905092915050565b6000602082019050919050565b600062001bfe8262001b61565b62001c0a818562001b6c565b935062001c178362001b7d565b8060005b8381101562001c4e57815162001c32888262001bca565b975062001c3f8362001be4565b92505060018101905062001c1b565b5085935050505092915050565b600060608301600083015162001c75600086018262001aff565b50602083015162001c8a602086018262001b50565b506040830151848203604086015262001ca4828262001bf1565b9150508091505092915050565b600062001cbf838362001c5b565b905092915050565b6000602082019050919050565b600062001ce18262001ad3565b62001ced818562001ade565b93508360208202850162001d018562001aef565b8060005b8581101562001d43578484038952815162001d21858262001cb1565b945062001d2e8362001cc7565b925060208a0199505060018101905062001d05565b50829750879550505050505092915050565b62001d60816200188b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562001da257808201518184015260208101905062001d85565b8381111562001db2576000848401525b50505050565b6000601f19601f8301169050919050565b600062001dd68262001d66565b62001de2818562001d71565b935062001df481856020860162001d82565b62001dff8162001db8565b840191505092915050565b6000606082019050818103600083015262001e26818662001cd4565b905062001e37602083018562001d55565b818103604083015262001e4b818462001dc9565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b600062001eb3602b83620019a4565b915062001ec08262001e55565b604082019050919050565b6000602082019050818103600083015262001ee68162001ea4565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600062001f4b602c83620019a4565b915062001f588262001eed565b604082019050919050565b6000602082019050818103600083015262001f7e8162001f3c565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600062001fe3603583620019a4565b915062001ff08262001f85565b604082019050919050565b60006020820190508181036000830152620020168162001fd4565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600062002042826200201d565b91506bffffffffffffffffffffffff820362002063576200206262001a4d565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000620020cc603883620019a4565b9150620020d9826200206e565b604082019050919050565b60006020820190508181036000830152620020ff81620020bd565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600062002164603683620019a4565b9150620021718262002106565b604082019050919050565b60006020820190508181036000830152620021978162002155565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000620021fc603c83620019a4565b915062002209826200219e565b604082019050919050565b600060208201905081810360008301526200222f81620021ed565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b600062002294603d83620019a4565b9150620022a18262002236565b604082019050919050565b60006020820190508181036000830152620022c78162002285565b9050919050565b600081905092915050565b6000620022e68262001d66565b620022f28185620022ce565b93506200230481856020860162001d82565b80840191505092915050565b60006200231e8284620022d9565b915081905092915050565b600081519050919050565b6000620023418262002329565b6200234d8185620019a4565b93506200235f81856020860162001d82565b6200236a8162001db8565b840191505092915050565b6000602082019050818103600083015262002391818462002334565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b6000620023f7602683620019a4565b9150620024048262002399565b604082019050919050565b600060208201905081810360008301526200242a81620023e8565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006200248f603783620019a4565b91506200249c8262002431565b604082019050919050565b60006020820190508181036000830152620024c28162002480565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600062002527602e83620019a4565b91506200253482620024c9565b604082019050919050565b600060208201905081810360008301526200255a8162002518565b9050919050565b60006200256e8262001a7c565b91506200257b8362001a7c565b92508282101562002591576200259062001a4d565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b61234080620025db6000396000f3fe60806040523661000b57005b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150600082600001600080357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906116c8565b60405180910390fd5b3660008037600080366000845af43d6000803e8060008114610162573d6000f35b3d6000fd5b600061017161046d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101561042257600084828151811061025f5761025e6116e8565b5b60200260200101516020015190506000600281111561028157610280611717565b5b81600281111561029457610293611717565b5b036102e4576102df8583815181106102af576102ae6116e8565b5b6020026020010151600001518684815181106102ce576102cd6116e8565b5b60200260200101516040015161049a565b61040e565b600160028111156102f8576102f7611717565b5b81600281111561030b5761030a611717565b5b0361035b57610356858381518110610326576103256116e8565b5b602002602001015160000151868481518110610345576103446116e8565b5b602002602001015160400151610711565b61040d565b60028081111561036e5761036d611717565b5b81600281111561038157610380611717565b5b036103d1576103cc85838151811061039c5761039b6116e8565b5b6020026020010151600001518684815181106103bb576103ba6116e8565b5b602002602001015160400151610992565b61040c565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610403906117b8565b60405180910390fd5b5b5b50808061041a90611811565b915050610241565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161045693929190611b86565b60405180910390a16104688282610b1d565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116104de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d590611c3d565b60405180910390fd5b60006104e861046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611ccf565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036105c6576105c58285610d2f565b5b60005b835181101561070a5760008482815181106105e7576105e66116e8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d290611d61565b60405180910390fd5b6106e78583868a610e0a565b83806106f290611d99565b9450505050808061070290611811565b9150506105c9565b5050505050565b6000815111610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90611c3d565b60405180910390fd5b600061075f61046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790611ccf565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff160361083d5761083c8285610d2f565b5b60005b835181101561098b57600084828151811061085e5761085d6116e8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094890611e3f565b60405180910390fd5b61095c858284610fb7565b6109688583868a610e0a565b838061097390611d99565b9450505050808061098390611811565b915050610840565b5050505050565b60008151116109d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cd90611c3d565b60405180910390fd5b60006109e061046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890611ed1565b60405180910390fd5b60005b8251811015610b17576000838281518110610a7257610a716116e8565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b02848284610fb7565b50508080610b0f90611811565b915050610a54565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b9a576000815114610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611f63565b60405180910390fd5b610d2b565b6000815111610bde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd590611ff5565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c3457610c33826040518060600160405280602881526020016122e860289139611619565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610c5c9190612051565b600060405180830381855af49150503d8060008114610c97576040519150601f19603f3d011682016040523d82523d6000602084013e610c9c565b606091505b509150915081610d2857600081511115610ced57806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce491906120ac565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1f90612140565b60405180910390fd5b50505b5050565b610d518160405180606001604052806024815260200161231060249139611619565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101d906121d2565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b90612264565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061116b9190612284565b90508082146112ff5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106111cc576111cb6116e8565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110611248576112476116e8565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480611353576113526122b8565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050600081036116125760006001866002018054905061143d9190612284565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461157e5760008760020183815481106114a7576114a66116e8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106114eb576114ea6116e8565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b86600201805480611592576115916122b8565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165c91906120ac565b60405180910390fd5b50505050565b600082825260208201905092915050565b7f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374600082015250565b60006116b260208361166b565b91506116bd8261167c565b602082019050919050565b600060208201905081810360008301526116e1816116a5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006117a260278361166b565b91506117ad82611746565b604082019050919050565b600060208201905081810360008301526117d181611795565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061181c82611807565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361184e5761184d6117d8565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118b082611885565b9050919050565b6118c0816118a5565b82525050565b600381106118d7576118d6611717565b5b50565b60008190506118e8826118c6565b919050565b60006118f8826118da565b9050919050565b611908816118ed565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61196f8161193a565b82525050565b60006119818383611966565b60208301905092915050565b6000602082019050919050565b60006119a58261190e565b6119af8185611919565b93506119ba8361192a565b8060005b838110156119eb5781516119d28882611975565b97506119dd8361198d565b9250506001810190506119be565b5085935050505092915050565b6000606083016000830151611a1060008601826118b7565b506020830151611a2360208601826118ff565b5060408301518482036040860152611a3b828261199a565b9150508091505092915050565b6000611a5483836119f8565b905092915050565b6000602082019050919050565b6000611a7482611859565b611a7e8185611864565b935083602082028501611a9085611875565b8060005b85811015611acc5784840389528151611aad8582611a48565b9450611ab883611a5c565b925060208a01995050600181019050611a94565b50829750879550505050505092915050565b611ae7816118a5565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b27578082015181840152602081019050611b0c565b83811115611b36576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b5882611aed565b611b628185611af8565b9350611b72818560208601611b09565b611b7b81611b3c565b840191505092915050565b60006060820190508181036000830152611ba08186611a69565b9050611baf6020830185611ade565b8181036040830152611bc18184611b4d565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611c27602b8361166b565b9150611c3282611bcb565b604082019050919050565b60006020820190508181036000830152611c5681611c1a565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611cb9602c8361166b565b9150611cc482611c5d565b604082019050919050565b60006020820190508181036000830152611ce881611cac565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000611d4b60358361166b565b9150611d5682611cef565b604082019050919050565b60006020820190508181036000830152611d7a81611d3e565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000611da482611d81565b91506bffffffffffffffffffffffff8203611dc257611dc16117d8565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000611e2960388361166b565b9150611e3482611dcd565b604082019050919050565b60006020820190508181036000830152611e5881611e1c565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000611ebb60368361166b565b9150611ec682611e5f565b604082019050919050565b60006020820190508181036000830152611eea81611eae565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000611f4d603c8361166b565b9150611f5882611ef1565b604082019050919050565b60006020820190508181036000830152611f7c81611f40565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000611fdf603d8361166b565b9150611fea82611f83565b604082019050919050565b6000602082019050818103600083015261200e81611fd2565b9050919050565b600081905092915050565b600061202b82611aed565b6120358185612015565b9350612045818560208601611b09565b80840191505092915050565b600061205d8284612020565b915081905092915050565b600081519050919050565b600061207e82612068565b612088818561166b565b9350612098818560208601611b09565b6120a181611b3c565b840191505092915050565b600060208201905081810360008301526120c68184612073565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b600061212a60268361166b565b9150612135826120ce565b604082019050919050565b600060208201905081810360008301526121598161211d565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006121bc60378361166b565b91506121c782612160565b604082019050919050565b600060208201905081810360008301526121eb816121af565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600061224e602e8361166b565b9150612259826121f2565b604082019050919050565b6000602082019050818103600083015261227d81612241565b9050919050565b600061228f82611807565b915061229a83611807565b9250828210156122ad576122ac6117d8565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080f000a4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465"
  },
  "DiamondCutFacet": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506126ea806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906116ab565b61004c565b005b6100546100b6565b6100af8585906100649190611a49565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610380565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611ae1565b60405180910390fd5b565b60005b835181101561033557600084828151811061017257610171611b01565b5b60200260200101516020015190506000600281111561019457610193611b30565b5b8160028111156101a7576101a6611b30565b5b036101f7576101f28583815181106101c2576101c1611b01565b5b6020026020010151600001518684815181106101e1576101e0611b01565b5b6020026020010151604001516103ad565b610321565b6001600281111561020b5761020a611b30565b5b81600281111561021e5761021d611b30565b5b0361026e5761026985838151811061023957610238611b01565b5b60200260200101516000015186848151811061025857610257611b01565b5b602002602001015160400151610624565b610320565b60028081111561028157610280611b30565b5b81600281111561029457610293611b30565b5b036102e4576102df8583815181106102af576102ae611b01565b5b6020026020010151600001518684815181106102ce576102cd611b01565b5b6020026020010151604001516108a5565b61031f565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031690611bd1565b60405180910390fd5b5b5b50808061032d90611c2a565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036993929190611f30565b60405180910390a161037b8282610a30565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e890611fe7565b60405180910390fd5b60006103fb610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390612079565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036104d9576104d88285610c42565b5b60005b835181101561061d5760008482815181106104fa576104f9611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e59061210b565b60405180910390fd5b6105fa8583868a610d1d565b838061060590612143565b9450505050808061061590611c2a565b9150506104dc565b5050505050565b6000815111610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90611fe7565b60405180910390fd5b6000610672610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106da90612079565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036107505761074f8285610c42565b5b60005b835181101561089e57600084828151811061077157610770611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b906121e9565b60405180910390fd5b61086f858284610eca565b61087b8583868a610d1d565b838061088690612143565b9450505050808061089690611c2a565b915050610753565b5050505050565b60008151116108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e090611fe7565b60405180910390fd5b60006108f3610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b9061227b565b60405180910390fd5b60005b8251811015610a2a57600083828151811061098557610984611b01565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a15848284610eca565b50508080610a2290611c2a565b915050610967565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aad576000815114610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f9061230d565b60405180910390fd5b610c3e565b6000815111610af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae89061239f565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b4757610b46826040518060600160405280602881526020016126926028913961152c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b6f91906123fb565b600060405180830381855af49150503d8060008114610baa576040519150601f19603f3d011682016040523d82523d6000602084013e610baf565b606091505b509150915081610c3b57600081511115610c0057806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf79190612456565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c32906124ea565b60405180910390fd5b50505b5050565b610c64816040518060600160405280602481526020016126ba6024913961152c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f309061257c565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9e9061260e565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061107e919061262e565b90508082146112125760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110df576110de611b01565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061115b5761115a611b01565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061126657611265612662565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff021916905550506000810361152557600060018660020180549050611350919061262e565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146114915760008760020183815481106113ba576113b9611b01565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106113fe576113fd611b01565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114a5576114a4612662565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f9190612456565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126115b7576115b6611592565b5b8235905067ffffffffffffffff8111156115d4576115d3611597565b5b6020830191508360208202830111156115f0576115ef61159c565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611622826115f7565b9050919050565b61163281611617565b811461163d57600080fd5b50565b60008135905061164f81611629565b92915050565b60008083601f84011261166b5761166a611592565b5b8235905067ffffffffffffffff81111561168857611687611597565b5b6020830191508360018202830111156116a4576116a361159c565b5b9250929050565b6000806000806000606086880312156116c7576116c6611588565b5b600086013567ffffffffffffffff8111156116e5576116e461158d565b5b6116f1888289016115a1565b9550955050602061170488828901611640565b935050604086013567ffffffffffffffff8111156117255761172461158d565b5b61173188828901611655565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61178982611740565b810181811067ffffffffffffffff821117156117a8576117a7611751565b5b80604052505050565b60006117bb61157e565b90506117c78282611780565b919050565b600067ffffffffffffffff8211156117e7576117e6611751565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061180f57600080fd5b50565b60008135905061182181611802565b92915050565b600067ffffffffffffffff82111561184257611841611751565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61188881611853565b811461189357600080fd5b50565b6000813590506118a58161187f565b92915050565b60006118be6118b984611827565b6117b1565b905080838252602082019050602084028301858111156118e1576118e061159c565b5b835b8181101561190a57806118f68882611896565b8452602084019350506020810190506118e3565b5050509392505050565b600082601f83011261192957611928611592565b5b81356119398482602086016118ab565b91505092915050565b600060608284031215611958576119576117f8565b5b61196260606117b1565b9050600061197284828501611640565b600083015250602061198684828501611812565b602083015250604082013567ffffffffffffffff8111156119aa576119a96117fd565b5b6119b684828501611914565b60408301525092915050565b60006119d56119d0846117cc565b6117b1565b905080838252602082019050602084028301858111156119f8576119f761159c565b5b835b81811015611a3f57803567ffffffffffffffff811115611a1d57611a1c611592565b5b808601611a2a8982611942565b855260208501945050506020810190506119fa565b5050509392505050565b6000611a563684846119c2565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611acb602283611a5e565b9150611ad682611a6f565b604082019050919050565b60006020820190508181036000830152611afa81611abe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611bbb602783611a5e565b9150611bc682611b5f565b604082019050919050565b60006020820190508181036000830152611bea81611bae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611c3582611c20565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c6757611c66611bf1565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ca781611617565b82525050565b60038110611cbe57611cbd611b30565b5b50565b6000819050611ccf82611cad565b919050565b6000611cdf82611cc1565b9050919050565b611cef81611cd4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d2a81611853565b82525050565b6000611d3c8383611d21565b60208301905092915050565b6000602082019050919050565b6000611d6082611cf5565b611d6a8185611d00565b9350611d7583611d11565b8060005b83811015611da6578151611d8d8882611d30565b9750611d9883611d48565b925050600181019050611d79565b5085935050505092915050565b6000606083016000830151611dcb6000860182611c9e565b506020830151611dde6020860182611ce6565b5060408301518482036040860152611df68282611d55565b9150508091505092915050565b6000611e0f8383611db3565b905092915050565b6000602082019050919050565b6000611e2f82611c72565b611e398185611c7d565b935083602082028501611e4b85611c8e565b8060005b85811015611e875784840389528151611e688582611e03565b9450611e7383611e17565b925060208a01995050600181019050611e4f565b50829750879550505050505092915050565b611ea281611617565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ee2578082015181840152602081019050611ec7565b83811115611ef1576000848401525b50505050565b6000611f0282611ea8565b611f0c8185611eb3565b9350611f1c818560208601611ec4565b611f2581611740565b840191505092915050565b60006060820190508181036000830152611f4a8186611e24565b9050611f596020830185611e99565b8181036040830152611f6b8184611ef7565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611fd1602b83611a5e565b9150611fdc82611f75565b604082019050919050565b6000602082019050818103600083015261200081611fc4565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000612063602c83611a5e565b915061206e82612007565b604082019050919050565b6000602082019050818103600083015261209281612056565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b60006120f5603583611a5e565b915061210082612099565b604082019050919050565b60006020820190508181036000830152612124816120e8565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061214e8261212b565b91506bffffffffffffffffffffffff820361216c5761216b611bf1565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006121d3603883611a5e565b91506121de82612177565b604082019050919050565b60006020820190508181036000830152612202816121c6565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000612265603683611a5e565b915061227082612209565b604082019050919050565b6000602082019050818103600083015261229481612258565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b60006122f7603c83611a5e565b91506123028261229b565b604082019050919050565b60006020820190508181036000830152612326816122ea565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000612389603d83611a5e565b91506123948261232d565b604082019050919050565b600060208201905081810360008301526123b88161237c565b9050919050565b600081905092915050565b60006123d582611ea8565b6123df81856123bf565b93506123ef818560208601611ec4565b80840191505092915050565b600061240782846123ca565b915081905092915050565b600081519050919050565b600061242882612412565b6124328185611a5e565b9350612442818560208601611ec4565b61244b81611740565b840191505092915050565b60006020820190508181036000830152612470818461241d565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006124d4602683611a5e565b91506124df82612478565b604082019050919050565b60006020820190508181036000830152612503816124c7565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000612566603783611a5e565b91506125718261250a565b604082019050919050565b6000602082019050818103600083015261259581612559565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b60006125f8602e83611a5e565b91506126038261259c565b604082019050919050565b60006020820190508181036000830152612627816125eb565b9050919050565b600061263982611c20565b915061264483611c20565b92508282101561265757612656611bf1565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080f000a"
  },
  "DiamondLoupeFacet": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "_functionSelector",
            "type": "bytes4"
          }
        ],
        "name": "facetAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "facetAddress_",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "facetAddresses",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "facetAddresses_",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_facet",
            "type": "address"
          }
        ],
        "name": "facetFunctionSelectors",
        "outputs": [
          {
            "internalType": "bytes4[]",
            "name": "facetFunctionSelectors_",
            "type": "bytes4[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "facets",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondLoupe.Facet[]",
            "name": "facets_",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "_interfaceId",
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
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50610be3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c1461008c5780637a0ed627146100aa578063adfca15e146100c8578063cdffacc6146100f8575b600080fd5b6100766004803603810190610071919061068f565b610128565b60405161008391906106d7565b60405180910390f35b61009461019e565b6040516100a191906107e2565b60405180910390f35b6100b261023b565b6040516100bf91906109c1565b60405180910390f35b6100e260048036038101906100dd9190610a0f565b61045e565b6040516100ef9190610aab565b60405180910390f35b610112600480360381019061010d919061068f565b610549565b60405161011f9190610adc565b60405180910390f35b6000806101336105d5565b9050806003016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16915050919050565b606060006101aa6105d5565b90508060020180548060200260200160405190810160405280929190818152602001828054801561023057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101e6575b505050505091505090565b606060006102476105d5565b90506000816002018054905090508067ffffffffffffffff81111561026f5761026e610af7565b5b6040519080825280602002602001820160405280156102a857816020015b610295610602565b81526020019060019003908161028d5790505b50925060005b818110156104585760008360020182815481106102ce576102cd610b26565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061030f5761030e610b26565b5b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561041d57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103ca5790505b505050505085838151811061043557610434610b26565b5b60200260200101516020018190525050808061045090610b8e565b9150506102ae565b50505090565b6060600061046a6105d5565b90508060010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561053c57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104e95790505b5050505050915050919050565b6000806105546105d5565b9050806000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61066c81610637565b811461067757600080fd5b50565b60008135905061068981610663565b92915050565b6000602082840312156106a5576106a4610632565b5b60006106b38482850161067a565b91505092915050565b60008115159050919050565b6106d1816106bc565b82525050565b60006020820190506106ec60008301846106c8565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107498261071e565b9050919050565b6107598161073e565b82525050565b600061076b8383610750565b60208301905092915050565b6000602082019050919050565b600061078f826106f2565b61079981856106fd565b93506107a48361070e565b8060005b838110156107d55781516107bc888261075f565b97506107c783610777565b9250506001810190506107a8565b5085935050505092915050565b600060208201905081810360008301526107fc8184610784565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61086581610637565b82525050565b6000610877838361085c565b60208301905092915050565b6000602082019050919050565b600061089b82610830565b6108a5818561083b565b93506108b08361084c565b8060005b838110156108e15781516108c8888261086b565b97506108d383610883565b9250506001810190506108b4565b5085935050505092915050565b60006040830160008301516109066000860182610750565b506020830151848203602086015261091e8282610890565b9150508091505092915050565b600061093783836108ee565b905092915050565b6000602082019050919050565b600061095782610804565b610961818561080f565b93508360208202850161097385610820565b8060005b858110156109af5784840389528151610990858261092b565b945061099b8361093f565b925060208a01995050600181019050610977565b50829750879550505050505092915050565b600060208201905081810360008301526109db818461094c565b905092915050565b6109ec8161073e565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a24610632565b5b6000610a33848285016109fa565b91505092915050565b600082825260208201905092915050565b6000610a5882610830565b610a628185610a3c565b9350610a6d8361084c565b8060005b83811015610a9e578151610a85888261086b565b9750610a9083610883565b925050600181019050610a71565b5085935050505092915050565b60006020820190508181036000830152610ac58184610a4d565b905092915050565b610ad68161073e565b82525050565b6000602082019050610af16000830184610acd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000610b9982610b84565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610bcb57610bca610b55565b5b60018201905091905056fea164736f6c634300080f000a"
  },
  "ECDSA": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "ENSAbstractResolver": {
    "abi": [],
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
    "byteCode": "0x"
  },
  "ERC20BurnableUpgradeable": {
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
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "amount",
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
            "name": "account",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
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
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
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
            "name": "amount",
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
            "name": "amount",
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
    "addresses": {},
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
    "addresses": {},
    "byteCode": "0x"
  },
  "ERC20Upgradeable": {
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
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "amount",
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
            "name": "account",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
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
            "name": "amount",
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
            "name": "amount",
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
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b5061123e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b22565b60405180910390f35b6100e660048036038101906100e19190610bdd565b610308565b6040516100f39190610c38565b60405180910390f35b61010461032b565b6040516101119190610c62565b60405180910390f35b610134600480360381019061012f9190610c7d565b610335565b6040516101419190610c38565b60405180910390f35b610152610364565b60405161015f9190610cec565b60405180910390f35b610182600480360381019061017d9190610bdd565b61036d565b60405161018f9190610c38565b60405180910390f35b6101b260048036038101906101ad9190610d07565b6103a4565b6040516101bf9190610c62565b60405180910390f35b6101d06103ed565b6040516101dd9190610b22565b60405180910390f35b61020060048036038101906101fb9190610bdd565b61047f565b60405161020d9190610c38565b60405180910390f35b610230600480360381019061022b9190610bdd565b6104f6565b60405161023d9190610c38565b60405180910390f35b610260600480360381019061025b9190610d34565b610519565b60405161026d9190610c62565b60405180910390f35b60606036805461028590610da3565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610da3565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136105a0565b90506103208185856105a8565b600191505092915050565b6000603554905090565b6000806103406105a0565b905061034d858285610771565b6103588585856107fd565b60019150509392505050565b60006012905090565b6000806103786105a0565b905061039981858561038a8589610519565b6103949190610e03565b6105a8565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546103fc90610da3565b80601f016020809104026020016040519081016040528092919081815260200182805461042890610da3565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6105a0565b905060006104988286610519565b9050838110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490610ecb565b60405180910390fd5b6104ea82868684036105a8565b60019250505092915050565b6000806105016105a0565b905061050e8185856107fd565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f5d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610686576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067d90610fef565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107649190610c62565b60405180910390a3505050565b600061077d8484610519565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f757818110156107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e09061105b565b60405180910390fd5b6107f684848484036105a8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906110ed565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d29061117f565b60405180910390fd5b6108e6838383610a7f565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096490611211565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a029190610e03565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a669190610c62565b60405180910390a3610a79848484610a84565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ac3578082015181840152602081019050610aa8565b83811115610ad2576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af482610a89565b610afe8185610a94565b9350610b0e818560208601610aa5565b610b1781610ad8565b840191505092915050565b60006020820190508181036000830152610b3c8184610ae9565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7482610b49565b9050919050565b610b8481610b69565b8114610b8f57600080fd5b50565b600081359050610ba181610b7b565b92915050565b6000819050919050565b610bba81610ba7565b8114610bc557600080fd5b50565b600081359050610bd781610bb1565b92915050565b60008060408385031215610bf457610bf3610b44565b5b6000610c0285828601610b92565b9250506020610c1385828601610bc8565b9150509250929050565b60008115159050919050565b610c3281610c1d565b82525050565b6000602082019050610c4d6000830184610c29565b92915050565b610c5c81610ba7565b82525050565b6000602082019050610c776000830184610c53565b92915050565b600080600060608486031215610c9657610c95610b44565b5b6000610ca486828701610b92565b9350506020610cb586828701610b92565b9250506040610cc686828701610bc8565b9150509250925092565b600060ff82169050919050565b610ce681610cd0565b82525050565b6000602082019050610d016000830184610cdd565b92915050565b600060208284031215610d1d57610d1c610b44565b5b6000610d2b84828501610b92565b91505092915050565b60008060408385031215610d4b57610d4a610b44565b5b6000610d5985828601610b92565b9250506020610d6a85828601610b92565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dbb57607f821691505b602082108103610dce57610dcd610d74565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0e82610ba7565b9150610e1983610ba7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4e57610e4d610dd4565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eb5602583610a94565b9150610ec082610e59565b604082019050919050565b60006020820190508181036000830152610ee481610ea8565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f47602483610a94565b9150610f5282610eeb565b604082019050919050565b60006020820190508181036000830152610f7681610f3a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fd9602283610a94565b9150610fe482610f7d565b604082019050919050565b6000602082019050818103600083015261100881610fcc565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611045601d83610a94565b91506110508261100f565b602082019050919050565b6000602082019050818103600083015261107481611038565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110d7602583610a94565b91506110e28261107b565b604082019050919050565b60006020820190508181036000830152611106816110ca565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611169602383610a94565b91506111748261110d565b604082019050919050565b600060208201905081810360008301526111988161115c565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111fb602683610a94565b91506112068261119f565b604082019050919050565b6000602082019050818103600083015261122a816111ee565b905091905056fea164736f6c634300080f000a"
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
    "byteCode": "0x"
  },
  "Home": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_localDomain",
            "type": "uint32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "leafIndex",
            "type": "uint256"
          },
          {
            "indexed": true,
            "internalType": "uint64",
            "name": "destinationAndNonce",
            "type": "uint64"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "committedRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          }
        ],
        "name": "Dispatch",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32[2]",
            "name": "newRoot",
            "type": "bytes32[2]"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature2",
            "type": "bytes"
          }
        ],
        "name": "DoubleUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "newRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "ImproperUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "internalType": "address",
            "name": "oldUpdater",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newUpdater",
            "type": "address"
          }
        ],
        "name": "NewUpdater",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "updaterManager",
            "type": "address"
          }
        ],
        "name": "NewUpdaterManager",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "homeDomain",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "Update",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "updater",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "reporter",
            "type": "address"
          }
        ],
        "name": "UpdaterSlashed",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "MAX_MESSAGE_BODY_BYTES",
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
        "name": "VERSION",
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
        "name": "committedRoot",
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
        "inputs": [],
        "name": "count",
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
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_recipientAddress",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_messageBody",
            "type": "bytes"
          }
        ],
        "name": "dispatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_oldRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[2]",
            "name": "_newRoot",
            "type": "bytes32[2]"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_signature2",
            "type": "bytes"
          }
        ],
        "name": "doubleUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "homeDomainHash",
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
            "internalType": "bytes32",
            "name": "_oldRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_newRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "improperUpdate",
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
            "internalType": "contract IUpdaterManager",
            "name": "_updaterManager",
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
        "name": "localDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "nonces",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
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
            "name": "_item",
            "type": "bytes32"
          }
        ],
        "name": "queueContains",
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
        "name": "queueEnd",
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
        "inputs": [],
        "name": "queueLength",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "root",
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
            "name": "_updater",
            "type": "address"
          }
        ],
        "name": "setUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_updaterManager",
            "type": "address"
          }
        ],
        "name": "setUpdaterManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "state",
        "outputs": [
          {
            "internalType": "enum NomadBase.States",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "suggestUpdate",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "_committedRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_new",
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
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tree",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "count",
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
            "name": "_committedRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_newRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "update",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "updater",
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
        "name": "updaterManager",
        "outputs": [
          {
            "internalType": "contract IUpdaterManager",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x60a06040523480156200001157600080fd5b50604051620044353803806200443583398181016040528101906200003791906200009a565b808063ffffffff1660808163ffffffff16815250505050620000cc565b600080fd5b600063ffffffff82169050919050565b620000748162000059565b81146200008057600080fd5b50565b600081519050620000948162000069565b92915050565b600060208284031215620000b357620000b262000054565b5b6000620000c38482850162000083565b91505092915050565b608051614338620000fd600039600081816106ed015281816107ac01528181610b820152610fd401526143386000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639df6c8e1116100de578063df034cd011610097578063f6d1610211610071578063f6d161021461043e578063fa31de011461045c578063fd54b22814610478578063ffa1ad74146104965761018e565b8063df034cd0146103e6578063ebf0c71714610404578063f2fde38b146104225761018e565b80639df6c8e114610324578063ab91c7b014610342578063b31c01fb14610360578063b95a20011461037c578063c19d93fb146103ac578063c4d66de8146103ca5761018e565b806367a6771d1161014b5780638da5cb5b116101255780638da5cb5b1461029e5780638e4e30e0146102bc5780639776120e146102ec5780639d54f419146103085761018e565b806367a6771d14610258578063715018a6146102765780638d3638f4146102805761018e565b806306661abd1461019357806319d9d21a146101b15780632bef2892146101cd57806336e104de146101fd57806345630b1a1461021c578063522ae0021461023a575b600080fd5b61019b6104b4565b6040516101a89190612aec565b60405180910390f35b6101cb60048036038101906101c69190612bd8565b6104c1565b005b6101e760048036038101906101e29190612c7f565b61069f565b6040516101f49190612cc7565b60405180910390f35b6102056106bc565b604051610213929190612cf1565b60405180910390f35b6102246106e6565b6040516102319190612d1a565b60405180910390f35b610242610716565b60405161024f9190612aec565b60405180910390f35b61026061071c565b60405161026d9190612d1a565b60405180910390f35b61027e610722565b005b6102886107aa565b6040516102959190612d54565b60405180910390f35b6102a66107ce565b6040516102b39190612db0565b60405180910390f35b6102d660048036038101906102d19190612f0c565b6107f8565b6040516102e39190612cc7565b60405180910390f35b61030660048036038101906103019190612fa7565b61096d565b005b610322600480360381019061031d9190612fa7565b6109f5565b005b61032c610a92565b6040516103399190613033565b60405180910390f35b61034a610ab9565b6040516103579190612aec565b60405180910390f35b61037a60048036038101906103759190612f0c565b610aca565b005b6103966004803603810190610391919061307a565b610be4565b6040516103a39190612d54565b60405180910390f35b6103b4610c08565b6040516103c1919061311e565b60405180910390f35b6103e460048036038101906103df9190613177565b610c1b565b005b6103ee610d53565b6040516103fb9190612db0565b60405180910390f35b61040c610d79565b6040516104199190612d1a565b60405180910390f35b61043c60048036038101906104379190612fa7565b610d8a565b005b610446610e81565b6040516104539190612d1a565b60405180910390f35b610476600480360381019061047191906131a4565b610e92565b005b6104806110c0565b60405161048d9190612aec565b60405180910390f35b61049e6110cc565b6040516104ab919061322f565b60405180910390f35b6000603460200154905090565b6002808111156104d4576104d36130a7565b5b60ea60149054906101000a900460ff1660028111156104f6576104f56130a7565b5b03610536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052d906132a7565b60405180910390fd5b61059d868660006002811061054e5761054d6132c7565b5b602002013586868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506110d1565b801561060c575061060b86866001600281106105bc576105bb6132c7565b5b602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506110d1565b5b8015610648575084600160028110610627576106266132c7565b5b6020020135856000600281106106405761063f6132c7565b5b602002013514155b1561069757610655611177565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f86868686868660405161068e96959493929190613344565b60405180910390a15b505050505050565b60006106b582600161128b90919063ffffffff16565b9050919050565b60008060006106cb6001611342565b146106e25760eb5491506106df60016113a0565b90505b9091565b60006107117f00000000000000000000000000000000000000000000000000000000000000006113f1565b905090565b61080081565b60eb5481565b61072a611421565b73ffffffffffffffffffffffffffffffffffffffff166107486107ce565b73ffffffffffffffffffffffffffffffffffffffff161461079e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610795906133e7565b60405180910390fd5b6107a86000611429565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060b860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060028081111561080d5761080c6130a7565b5b60ea60149054906101000a900460ff16600281111561082f5761082e6130a7565b5b0361086f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610866906132a7565b60405180910390fd5b61087a8484846110d1565b6108b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b090613453565b60405180910390fd5b60eb5484146108fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f4906134bf565b60405180910390fd5b61091183600161128b90919063ffffffff16565b6109615761091d611177565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab284848460405161095093929190613556565b60405180910390a160019050610966565b600090505b9392505050565b610975611421565b73ffffffffffffffffffffffffffffffffffffffff166109936107ce565b73ffffffffffffffffffffffffffffffffffffffff16146109e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e0906133e7565b60405180910390fd5b6109f2816114ef565b50565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7d906135e0565b60405180910390fd5b610a8f816115b3565b50565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610ac56001611342565b905090565b600280811115610add57610adc6130a7565b5b60ea60149054906101000a900460ff166002811115610aff57610afe6130a7565b5b03610b3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b36906132a7565b60405180910390fd5b610b4a8383836107f8565b610bdf575b600115610b77576000610b626001611658565b9050828103610b715750610b77565b50610b4f565b8160eb8190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b284604051610bd69190613600565b60405180910390a45b505050565b61011b6020528060005260406000206000915054906101000a900463ffffffff1681565b60ea60149054906101000a900460ff1681565b6000610c27600161179d565b90508015610c4b576001600060016101000a81548160ff0219169083151502179055505b610c5361188d565b610c5c826114ef565b610cf661011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ccd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf19190613637565b611923565b8015610d4f5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610d46919061369f565b60405180910390a15b5050565b60ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610d8560346119ec565b905090565b610d92611421565b73ffffffffffffffffffffffffffffffffffffffff16610db06107ce565b73ffffffffffffffffffffffffffffffffffffffff1614610e06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dfd906133e7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6c9061372c565b60405180910390fd5b610e7e81611429565b50565b6000610e8d60016113a0565b905090565b600280811115610ea557610ea46130a7565b5b60ea60149054906101000a900460ff166002811115610ec757610ec66130a7565b5b03610f07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efe906132a7565b60405180910390fd5b61080081511115610f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4490613798565b60405180910390fd5b600061011b60008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900463ffffffff169050600181610f8f91906137e7565b61011b60008663ffffffff1663ffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555060006110167f00000000000000000000000000000000000000000000000000000000000000003373ffffffffffffffffffffffffffffffffffffffff1660001b84888888611a06565b9050600081805190602001209050611038816034611a3e90919063ffffffff16565b611053611043610d79565b6001611b7590919063ffffffff16565b5061105e8684611c1e565b67ffffffffffffffff1660016110726104b4565b61107c9190613821565b827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a60eb54866040516110b0929190613855565b60405180910390a4505050505050565b60348060200154905081565b600081565b6000806110dc6106e6565b85856040516020016110f0939291906138a6565b60405160208183030381529060405280519060200120905061111181611c45565b905060ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111568285611c75565b73ffffffffffffffffffffffffffffffffffffffff16149150509392505050565b61117f611c9c565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b3c2cbf336040518263ffffffff1660e01b81526004016111db9190613904565b600060405180830381600087803b1580156111f557600080fd5b505af1158015611209573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff1660ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce60405160405180910390a3565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681116113365782846001016000838152602001908152602001600020540361132357600191505061133c565b808061132e9061391f565b9150506112c4565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506113978282611cc9565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008160405160200161140491906139f4565b604051602081830303815290604052805190602001209050919050565b600033905090565b600060b860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160b860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6114f881611cfd565b611537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152e90613a66565b60405180910390fd5b8061011c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf816040516115a89190612db0565b60405180910390a150565b600060ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160ea60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a818360405161164c929190613a86565b60405180910390a15050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff16905060006116af8383611cc9565b036116ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e690613afb565b60405180910390fd5b836001016000826fffffffffffffffffffffffffffffffff1681526020019081526020016000205492506000801b831461174f57836001016000826fffffffffffffffffffffffffffffffff168152602001908152602001600020600090555b60018161175c9190613b37565b8460000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505050919050565b60008060019054906101000a900460ff16156118145760018260ff161480156117cc57506117ca30611d20565b155b61180b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180290613bef565b60405180910390fd5b60009050611888565b8160ff1660008054906101000a900460ff1660ff1610611869576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186090613bef565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b6000611899600161179d565b905080156118bd576001600060016101000a81548160ff0219169083151502179055505b6118c76001611d43565b80156119205760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611917919061369f565b60405180910390a15b50565b600061192f600161179d565b90508015611953576001600060016101000a81548160ff0219169083151502179055505b61195b611dbd565b611964826115b3565b600160ea60146101000a81548160ff0219169083600281111561198a576119896130a7565b5b021790555080156119e85760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516119df919061369f565b60405180910390a15b5050565b60006119ff826119fa611e16565b6125c2565b9050919050565b6060868686868686604051602001611a2396959493929190613c4b565b60405160208183030381529060405290509695505050505050565b600160206002611a4e9190613dea565b611a589190613821565b826020015410611a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9490613e81565b60405180910390fd5b6001826020016000828254611ab29190613ea1565b9250508190555060008260200154905060005b6020811015611b5f57600180831603611afb5782846000018260208110611aef57611aee6132c7565b5b01819055505050611b71565b836000018160208110611b1157611b106132c7565b5b015483604051602001611b25929190613ef7565b604051602081830303815290604052805190602001209250600282611b4a9190613f52565b91508080611b579061391f565b915050611ac5565b506000611b6f57611b6e613f83565b5b505b5050565b600060018360000160109054906101000a90046fffffffffffffffffffffffffffffffff16611ba49190613b37565b9050808360000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506000801b8214611c185781836001016000836fffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b92915050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b600081604051602001611c589190613ffe565b604051602081830303815290604052805190602001209050919050565b6000806000611c848585612697565b91509150611c9181612718565b819250505092915050565b600260ea60146101000a81548160ff02191690836002811115611cc257611cc16130a7565b5b0217905550565b600081600184611cd99190613b37565b611ce39190614024565b6fffffffffffffffffffffffffffffffff16905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1603611dba5760018160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50565b600060019054906101000a900460ff16611e0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e03906140ca565b60405180910390fd5b611e146128e4565b565b611e1e612ab0565b600081600060208110611e3457611e336132c7565b5b6020020181815250507fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb581600160208110611e7257611e716132c7565b5b6020020181815250507fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3081600260208110611eb057611eaf6132c7565b5b6020020181815250507f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8581600360208110611eee57611eed6132c7565b5b6020020181815250507fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934481600460208110611f2c57611f2b6132c7565b5b6020020181815250507f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d81600560208110611f6a57611f696132c7565b5b6020020181815250507f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196881600660208110611fa857611fa76132c7565b5b6020020181815250507fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8381600760208110611fe657611fe56132c7565b5b6020020181815250507f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af81600860208110612024576120236132c7565b5b6020020181815250507fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e081600960208110612062576120616132c7565b5b6020020181815250507ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a581600a602081106120a05761209f6132c7565b5b6020020181815250507ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89281600b602081106120de576120dd6132c7565b5b6020020181815250507f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c81600c6020811061211c5761211b6132c7565b5b6020020181815250507fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb81600d6020811061215a576121596132c7565b5b6020020181815250507f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc81600e60208110612198576121976132c7565b5b6020020181815250507fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d281600f602081106121d6576121d56132c7565b5b6020020181815250507f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f81601060208110612214576122136132c7565b5b6020020181815250507fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a81601160208110612252576122516132c7565b5b6020020181815250507f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a0816012602081106122905761228f6132c7565b5b6020020181815250507fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa0816013602081106122ce576122cd6132c7565b5b6020020181815250507fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e28160146020811061230c5761230b6132c7565b5b6020020181815250507ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd98160156020811061234a576123496132c7565b5b6020020181815250507f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e37781601660208110612388576123876132c7565b5b6020020181815250507f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee652816017602081106123c6576123c56132c7565b5b6020020181815250507fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef81601860208110612404576124036132c7565b5b6020020181815250507f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d81601960208110612442576124416132c7565b5b6020020181815250507fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d081601a602081106124805761247f6132c7565b5b6020020181815250507f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e81601b602081106124be576124bd6132c7565b5b6020020181815250507f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e81601c602081106124fc576124fb6132c7565b5b6020020181815250507f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32281601d6020811061253a576125396132c7565b5b6020020181815250507f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73581601e60208110612578576125776132c7565b5b6020020181815250507f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a981601f602081106125b6576125b56132c7565b5b60200201818152505090565b6000808360200154905060005b602081101561268f57600060018284901c16905060008660000183602081106125fb576125fa6132c7565b5b015490506001820361263757808560405160200161261a929190613ef7565b60405160208183030381529060405280519060200120945061267a565b8486846020811061264b5761264a6132c7565b5b6020020151604051602001612661929190613ef7565b6040516020818303038152906040528051906020012094505b505080806126879061391f565b9150506125cf565b505092915050565b60008060418351036126d85760008060006020860151925060408601519150606086015160001a90506126cc87828585612945565b94509450505050612711565b60408351036127085760008060208501519150604085015190506126fd868383612a51565b935093505050612711565b60006002915091505b9250929050565b6000600481111561272c5761272b6130a7565b5b81600481111561273f5761273e6130a7565b5b03156128e15760016004811115612759576127586130a7565b5b81600481111561276c5761276b6130a7565b5b036127ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127a390614136565b60405180910390fd5b600260048111156127c0576127bf6130a7565b5b8160048111156127d3576127d26130a7565b5b03612813576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161280a906141a2565b60405180910390fd5b60036004811115612827576128266130a7565b5b81600481111561283a576128396130a7565b5b0361287a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161287190614234565b60405180910390fd5b60048081111561288d5761288c6130a7565b5b8160048111156128a05761289f6130a7565b5b036128e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128d7906142c6565b60405180910390fd5b5b50565b600060019054906101000a900460ff16612933576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161292a906140ca565b60405180910390fd5b61294361293e611421565b611429565b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115612980576000600391509150612a48565b601b8560ff16141580156129985750601c8560ff1614155b156129aa576000600491509150612a48565b6000600187878787604051600081526020016040526040516129cf94939291906142e6565b6020604051602081039080840390855afa1580156129f1573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612a3f57600060019250925050612a48565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c612a949190613ea1565b9050612aa287828885612945565b935093505050935093915050565b604051806104000160405280602090602082028036833780820191505090505090565b6000819050919050565b612ae681612ad3565b82525050565b6000602082019050612b016000830184612add565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b612b2e81612b1b565b8114612b3957600080fd5b50565b600081359050612b4b81612b25565b92915050565b600080fd5b600081905082602060020282011115612b7257612b71612b51565b5b92915050565b600080fd5b600080fd5b60008083601f840112612b9857612b97612b78565b5b8235905067ffffffffffffffff811115612bb557612bb4612b7d565b5b602083019150836001820283011115612bd157612bd0612b51565b5b9250929050565b60008060008060008060a08789031215612bf557612bf4612b11565b5b6000612c0389828a01612b3c565b9650506020612c1489828a01612b56565b955050606087013567ffffffffffffffff811115612c3557612c34612b16565b5b612c4189828a01612b82565b9450945050608087013567ffffffffffffffff811115612c6457612c63612b16565b5b612c7089828a01612b82565b92509250509295509295509295565b600060208284031215612c9557612c94612b11565b5b6000612ca384828501612b3c565b91505092915050565b60008115159050919050565b612cc181612cac565b82525050565b6000602082019050612cdc6000830184612cb8565b92915050565b612ceb81612b1b565b82525050565b6000604082019050612d066000830185612ce2565b612d136020830184612ce2565b9392505050565b6000602082019050612d2f6000830184612ce2565b92915050565b600063ffffffff82169050919050565b612d4e81612d35565b82525050565b6000602082019050612d696000830184612d45565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612d9a82612d6f565b9050919050565b612daa81612d8f565b82525050565b6000602082019050612dc56000830184612da1565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612e1982612dd0565b810181811067ffffffffffffffff82111715612e3857612e37612de1565b5b80604052505050565b6000612e4b612b07565b9050612e578282612e10565b919050565b600067ffffffffffffffff821115612e7757612e76612de1565b5b612e8082612dd0565b9050602081019050919050565b82818337600083830152505050565b6000612eaf612eaa84612e5c565b612e41565b905082815260208101848484011115612ecb57612eca612dcb565b5b612ed6848285612e8d565b509392505050565b600082601f830112612ef357612ef2612b78565b5b8135612f03848260208601612e9c565b91505092915050565b600080600060608486031215612f2557612f24612b11565b5b6000612f3386828701612b3c565b9350506020612f4486828701612b3c565b925050604084013567ffffffffffffffff811115612f6557612f64612b16565b5b612f7186828701612ede565b9150509250925092565b612f8481612d8f565b8114612f8f57600080fd5b50565b600081359050612fa181612f7b565b92915050565b600060208284031215612fbd57612fbc612b11565b5b6000612fcb84828501612f92565b91505092915050565b6000819050919050565b6000612ff9612ff4612fef84612d6f565b612fd4565b612d6f565b9050919050565b600061300b82612fde565b9050919050565b600061301d82613000565b9050919050565b61302d81613012565b82525050565b60006020820190506130486000830184613024565b92915050565b61305781612d35565b811461306257600080fd5b50565b6000813590506130748161304e565b92915050565b6000602082840312156130905761308f612b11565b5b600061309e84828501613065565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600381106130e7576130e66130a7565b5b50565b60008190506130f8826130d6565b919050565b6000613108826130ea565b9050919050565b613118816130fd565b82525050565b6000602082019050613133600083018461310f565b92915050565b600061314482612d8f565b9050919050565b61315481613139565b811461315f57600080fd5b50565b6000813590506131718161314b565b92915050565b60006020828403121561318d5761318c612b11565b5b600061319b84828501613162565b91505092915050565b6000806000606084860312156131bd576131bc612b11565b5b60006131cb86828701613065565b93505060206131dc86828701612b3c565b925050604084013567ffffffffffffffff8111156131fd576131fc612b16565b5b61320986828701612ede565b9150509250925092565b600060ff82169050919050565b61322981613213565b82525050565b60006020820190506132446000830184613220565b92915050565b600082825260208201905092915050565b7f6661696c65642073746174650000000000000000000000000000000000000000600082015250565b6000613291600c8361324a565b915061329c8261325b565b602082019050919050565b600060208201905081810360008301526132c081613284565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61330260408383612e8d565b5050565b600082825260208201905092915050565b60006133238385613306565b9350613330838584612e8d565b61333983612dd0565b840190509392505050565b600060a0820190506133596000830189612ce2565b61336660208301886132f6565b8181036060830152613379818688613317565b9050818103608083015261338e818486613317565b9050979650505050505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006133d160208361324a565b91506133dc8261339b565b602082019050919050565b60006020820190508181036000830152613400816133c4565b9050919050565b7f2175706461746572207369670000000000000000000000000000000000000000600082015250565b600061343d600c8361324a565b915061344882613407565b602082019050919050565b6000602082019050818103600083015261346c81613430565b9050919050565b7f6e6f7420612063757272656e7420757064617465000000000000000000000000600082015250565b60006134a960148361324a565b91506134b482613473565b602082019050919050565b600060208201905081810360008301526134d88161349c565b9050919050565b600081519050919050565b60005b838110156135085780820151818401526020810190506134ed565b83811115613517576000848401525b50505050565b6000613528826134df565b6135328185613306565b93506135428185602086016134ea565b61354b81612dd0565b840191505092915050565b600060608201905061356b6000830186612ce2565b6135786020830185612ce2565b818103604083015261358a818461351d565b9050949350505050565b7f21757064617465724d616e616765720000000000000000000000000000000000600082015250565b60006135ca600f8361324a565b91506135d582613594565b602082019050919050565b600060208201905081810360008301526135f9816135bd565b9050919050565b6000602082019050818103600083015261361a818461351d565b905092915050565b60008151905061363181612f7b565b92915050565b60006020828403121561364d5761364c612b11565b5b600061365b84828501613622565b91505092915050565b6000819050919050565b600061368961368461367f84613664565b612fd4565b613213565b9050919050565b6136998161366e565b82525050565b60006020820190506136b46000830184613690565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061371660268361324a565b9150613721826136ba565b604082019050919050565b6000602082019050818103600083015261374581613709565b9050919050565b7f6d736720746f6f206c6f6e670000000000000000000000000000000000000000600082015250565b6000613782600c8361324a565b915061378d8261374c565b602082019050919050565b600060208201905081810360008301526137b181613775565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006137f282612d35565b91506137fd83612d35565b92508263ffffffff03821115613816576138156137b8565b5b828201905092915050565b600061382c82612ad3565b915061383783612ad3565b92508282101561384a576138496137b8565b5b828203905092915050565b600060408201905061386a6000830185612ce2565b818103602083015261387c818461351d565b90509392505050565b6000819050919050565b6138a061389b82612b1b565b613885565b82525050565b60006138b2828661388f565b6020820191506138c2828561388f565b6020820191506138d2828461388f565b602082019150819050949350505050565b60006138ee82612d6f565b9050919050565b6138fe816138e3565b82525050565b600060208201905061391960008301846138f5565b92915050565b600061392a82612ad3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361395c5761395b6137b8565b5b600182019050919050565b60008160e01b9050919050565b600061397f82613967565b9050919050565b61399761399282612d35565b613974565b82525050565b600081905092915050565b7f4e4f4d4144000000000000000000000000000000000000000000000000000000600082015250565b60006139de60058361399d565b91506139e9826139a8565b600582019050919050565b6000613a008284613986565b600482019150613a0f826139d1565b915081905092915050565b7f21636f6e747261637420757064617465724d616e616765720000000000000000600082015250565b6000613a5060188361324a565b9150613a5b82613a1a565b602082019050919050565b60006020820190508181036000830152613a7f81613a43565b9050919050565b6000604082019050613a9b6000830185612da1565b613aa86020830184612da1565b9392505050565b7f456d707479000000000000000000000000000000000000000000000000000000600082015250565b6000613ae560058361324a565b9150613af082613aaf565b602082019050919050565b60006020820190508181036000830152613b1481613ad8565b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6000613b4282613b1b565b9150613b4d83613b1b565b9250826fffffffffffffffffffffffffffffffff03821115613b7257613b716137b8565b5b828201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000613bd9602e8361324a565b9150613be482613b7d565b604082019050919050565b60006020820190508181036000830152613c0881613bcc565b9050919050565b600081905092915050565b6000613c25826134df565b613c2f8185613c0f565b9350613c3f8185602086016134ea565b80840191505092915050565b6000613c578289613986565b600482019150613c67828861388f565b602082019150613c778287613986565b600482019150613c878286613986565b600482019150613c97828561388f565b602082019150613ca78284613c1a565b9150819050979650505050505050565b60008160011c9050919050565b6000808291508390505b6001851115613d0e57808604811115613cea57613ce96137b8565b5b6001851615613cf95780820291505b8081029050613d0785613cb7565b9450613cce565b94509492505050565b600082613d275760019050613de3565b81613d355760009050613de3565b8160018114613d4b5760028114613d5557613d84565b6001915050613de3565b60ff841115613d6757613d666137b8565b5b8360020a915084821115613d7e57613d7d6137b8565b5b50613de3565b5060208310610133831016604e8410600b8410161715613db95782820a905083811115613db457613db36137b8565b5b613de3565b613dc68484846001613cc4565b92509050818404811115613ddd57613ddc6137b8565b5b81810290505b9392505050565b6000613df582612ad3565b9150613e0083612ad3565b9250613e2d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613d17565b905092915050565b7f6d65726b6c6520747265652066756c6c00000000000000000000000000000000600082015250565b6000613e6b60108361324a565b9150613e7682613e35565b602082019050919050565b60006020820190508181036000830152613e9a81613e5e565b9050919050565b6000613eac82612ad3565b9150613eb783612ad3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613eec57613eeb6137b8565b5b828201905092915050565b6000613f03828561388f565b602082019150613f13828461388f565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613f5d82612ad3565b9150613f6883612ad3565b925082613f7857613f77613f23565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000613fe8601c8361399d565b9150613ff382613fb2565b601c82019050919050565b600061400982613fdb565b9150614015828461388f565b60208201915081905092915050565b600061402f82613b1b565b915061403a83613b1b565b92508282101561404d5761404c6137b8565b5b828203905092915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006140b4602b8361324a565b91506140bf82614058565b604082019050919050565b600060208201905081810360008301526140e3816140a7565b9050919050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061412060188361324a565b915061412b826140ea565b602082019050919050565b6000602082019050818103600083015261414f81614113565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b600061418c601f8361324a565b915061419782614156565b602082019050919050565b600060208201905081810360008301526141bb8161417f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061421e60228361324a565b9150614229826141c2565b604082019050919050565b6000602082019050818103600083015261424d81614211565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006142b060228361324a565b91506142bb82614254565b604082019050919050565b600060208201905081810360008301526142df816142a3565b9050919050565b60006080820190506142fb6000830187612ce2565b6143086020830186613220565b6143156040830185612ce2565b6143226060830184612ce2565b9594505050505056fea164736f6c634300080f000a"
  },
  "HopFacet": {
    "abi": [
      {
        "inputs": [],
        "name": "CannotBridgeToSameNetwork",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidAmount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NativeValueWithERC",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NoTransferToNullAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NullAddrIsNotAValidSpender",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NullAddrIsNotAnERC20Token",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "chainLayerId",
            "type": "uint256"
          }
        ],
        "name": "HopInitialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "_destination",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_bridge",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_ammWrapper",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_bonderFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_amountOutMin",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_deadline",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_destinationAmountOutMin",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_destinationDeadline",
            "type": "uint256"
          }
        ],
        "name": "HopTokenSwap",
        "type": "event"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "bridge",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "ammWrapper",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "asset",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "chainId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonderFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "destinationAmountOutMin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "destinationDeadline",
                "type": "uint256"
              }
            ],
            "internalType": "struct HopFacet.HopData",
            "name": "_hopData",
            "type": "tuple"
          }
        ],
        "name": "hopTokenTransfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_chainLayerId",
            "type": "uint256"
          }
        ],
        "name": "initHop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50611740806100206000396000f3fe6080604052600436106100295760003560e01c80635254f5a91461002e578063fbdfb9071461004a575b600080fd5b61004860048036038101906100439190610f83565b610073565b005b34801561005657600080fd5b50610071600480360381019061006c9190610fad565b610409565b005b600061007d61046a565b90506001816000015414156100be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506100e88260400160208101906100de9190610f31565b8360a00135610497565b600060016100f46104d5565b14156101145782600001602081019061010d9190610f31565b905061012a565b8260200160208101906101279190610f31565b90505b82608001356101376104e8565b141561016f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101908360400160208101906101859190610f31565b828560a001356104f5565b60006101ad8460400160208101906101a89190610f31565b610660565b6101b85760006101be565b8360a001355b905060016101ca6104d5565b1415610272578173ffffffffffffffffffffffffffffffffffffffff1663deace8f58286608001358760600160208101906102059190610f31565b8860a001358961012001358a61014001356000806040518963ffffffff1660e01b815260040161023b9796959493929190611340565b6000604051808303818588803b15801561025457600080fd5b505af1158015610268573d6000803e3d6000fd5b505050505061031e565b8173ffffffffffffffffffffffffffffffffffffffff1663eea0d7b28286608001358760600160208101906102a79190610f31565b8860a001358960c001358a60e001358b61010001358c61012001358d61014001356040518a63ffffffff1660e01b81526004016102eb9897969594939291906113af565b6000604051808303818588803b15801561030457600080fd5b505af1158015610318573d6000803e3d6000fd5b50505050505b8360400160208101906103319190610f31565b73ffffffffffffffffffffffffffffffffffffffff1684606001602081019061035a9190610f31565b73ffffffffffffffffffffffffffffffffffffffff1685608001357f35ac5f1aa56e86e7f2e01562289e5bd298773763192f6433fde30f05932381738760000160208101906103a99190610f31565b8860200160208101906103bc9190610f31565b8960a001358a60c001358b60e001358c61010001358d61012001358e61014001356040516103f19897969594939291906111d7565b60405180910390a45050600081600001819055505050565b610411610698565b600061041b610733565b90508181600001819055507f09b9d2d59be87e537ec1f2f9325f524d04c29f20e2c60ce0c3c6435102c7882a61044f6104e8565b8360405161045e92919061142d565b60405180910390a15050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6104d18282600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610760565b5050565b60006104df610733565b60000154905090565b6000804690508091505090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561052f5761065b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610596576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016105d3929190611177565b60206040518083038186803b1580156105eb57600080fd5b505afa1580156105ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106239190610fd6565b9050818110156106595761065884847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610884565b5b505b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6106a06109e2565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610731576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610728906112a0565b60405180910390fd5b565b6000807f82ac262a0ca73826b2defa6066a5cbdaefe5f87d412e3568bfc9bec85eaa985790508091505090565b600082141561079b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156107df578134146107da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087f565b60003414610818576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061082384610a0f565b905061083184333086610adb565b828161083c86610a0f565b6108469190611488565b1461087d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b600081148061091d575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016108cb929190611177565b60206040518083038186803b1580156108e357600080fd5b505afa1580156108f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091b9190610fd6565b145b61095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095390611320565b60405180910390fd5b6109dd8363095ea7b360e01b848460405160240161097b929190611255565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bbb565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610ad2578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a7d919061115c565b60206040518083038186803b158015610a9557600080fd5b505afa158015610aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acd9190610fd6565b610ad4565b475b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b42576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ba9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb584848484610c82565b50505050565b6000610c1d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d0b9092919063ffffffff16565b9050600081511115610c7d5780806020019051810190610c3d9190610f5a565b610c7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7390611300565b60405180910390fd5b5b505050565b610d05846323b872dd60e01b858585604051602401610ca3939291906111a0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bbb565b50505050565b6060610d1a8484600085610d23565b90509392505050565b606082471015610d68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5f906112c0565b60405180910390fd5b610d7185610e37565b610db0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da7906112e0565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dd99190611145565b60006040518083038185875af1925050503d8060008114610e16576040519150601f19603f3d011682016040523d82523d6000602084013e610e1b565b606091505b5091509150610e2b828286610e5a565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610e6a57829050610eba565b600083511115610e7d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb1919061127e565b60405180910390fd5b9392505050565b600081359050610ed0816116ee565b92915050565b600081519050610ee581611705565b92915050565b60006101608284031215610efe57600080fd5b81905092915050565b600081359050610f168161171c565b92915050565b600081519050610f2b8161171c565b92915050565b600060208284031215610f4357600080fd5b6000610f5184828501610ec1565b91505092915050565b600060208284031215610f6c57600080fd5b6000610f7a84828501610ed6565b91505092915050565b60006101608284031215610f9657600080fd5b6000610fa484828501610eeb565b91505092915050565b600060208284031215610fbf57600080fd5b6000610fcd84828501610f07565b91505092915050565b600060208284031215610fe857600080fd5b6000610ff684828501610f1c565b91505092915050565b611008816114bc565b82525050565b600061101982611456565b611023818561146c565b9350611033818560208601611516565b80840191505092915050565b61104881611504565b82525050565b600061105982611461565b6110638185611477565b9350611073818560208601611516565b61107c81611578565b840191505092915050565b6000611094602283611477565b915061109f82611589565b604082019050919050565b60006110b7602683611477565b91506110c2826115d8565b604082019050919050565b60006110da601d83611477565b91506110e582611627565b602082019050919050565b60006110fd602a83611477565b915061110882611650565b604082019050919050565b6000611120603683611477565b915061112b8261169f565b604082019050919050565b61113f816114fa565b82525050565b6000611151828461100e565b915081905092915050565b60006020820190506111716000830184610fff565b92915050565b600060408201905061118c6000830185610fff565b6111996020830184610fff565b9392505050565b60006060820190506111b56000830186610fff565b6111c26020830185610fff565b6111cf6040830184611136565b949350505050565b6000610100820190506111ed600083018b610fff565b6111fa602083018a610fff565b6112076040830189611136565b6112146060830188611136565b6112216080830187611136565b61122e60a0830186611136565b61123b60c0830185611136565b61124860e0830184611136565b9998505050505050505050565b600060408201905061126a6000830185610fff565b6112776020830184611136565b9392505050565b60006020820190508181036000830152611298818461104e565b905092915050565b600060208201905081810360008301526112b981611087565b9050919050565b600060208201905081810360008301526112d9816110aa565b9050919050565b600060208201905081810360008301526112f9816110cd565b9050919050565b60006020820190508181036000830152611319816110f0565b9050919050565b6000602082019050818103600083015261133981611113565b9050919050565b600060e082019050611355600083018a611136565b6113626020830189610fff565b61136f6040830188611136565b61137c6060830187611136565b6113896080830186611136565b61139660a0830185610fff565b6113a360c083018461103f565b98975050505050505050565b6000610100820190506113c5600083018b611136565b6113d2602083018a610fff565b6113df6040830189611136565b6113ec6060830188611136565b6113f96080830187611136565b61140660a0830186611136565b61141360c0830185611136565b61142060e0830184611136565b9998505050505050505050565b60006040820190506114426000830185611136565b61144f6020830184611136565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611493826114fa565b915061149e836114fa565b9250828210156114b1576114b0611549565b5b828203905092915050565b60006114c7826114da565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061150f826114fa565b9050919050565b60005b83811015611534578082015181840152602081019050611519565b83811115611543576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6116f7816114bc565b811461170257600080fd5b50565b61170e816114ce565b811461171957600080fd5b50565b611725816114fa565b811461173057600080fd5b5056fea164736f6c6343000804000a"
  },
  "IBridgeToken": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amnt",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "detailsHash",
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
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amnt",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "_decimals",
            "type": "uint8"
          }
        ],
        "name": "setDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_detailsHash",
            "type": "bytes32"
          }
        ],
        "name": "setDetailsHash",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ICBridge": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes",
            "name": "_relayRequest",
            "type": "bytes"
          },
          {
            "internalType": "bytes[]",
            "name": "_sigs",
            "type": "bytes[]"
          },
          {
            "internalType": "address[]",
            "name": "_signers",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "_powers",
            "type": "uint256[]"
          }
        ],
        "name": "relay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_receiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "_dstChinId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "uint32",
            "name": "_maxSlippage",
            "type": "uint32"
          }
        ],
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "_dstChinId",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_nonce",
            "type": "uint64"
          },
          {
            "internalType": "uint32",
            "name": "_maxSlippage",
            "type": "uint32"
          }
        ],
        "name": "sendNative",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ICallback": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "callback",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IConnextHandler": {
    "abi": [
      {
        "inputs": [],
        "name": "LIQUIDITY_FEE_DENOMINATOR",
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
        "name": "LIQUIDITY_FEE_NUMERATOR",
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
        "name": "VERSION",
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
        "name": "aavePool",
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
        "name": "aavePortalFee",
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
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "router",
            "type": "address"
          }
        ],
        "name": "acceptProposedRouterOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_relayer",
            "type": "address"
          }
        ],
        "name": "addRelayer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_local",
            "type": "address"
          }
        ],
        "name": "addRouterLiquidity",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_local",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "addRouterLiquidityFor",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint32",
                "name": "domain",
                "type": "uint32"
              },
              {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ConnextMessage.TokenId",
            "name": "_canonical",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "_stableSwapPool",
            "type": "address"
          }
        ],
        "name": "addStableSwapPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "minToMint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "addSwapLiquidity",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_adopted",
            "type": "address"
          }
        ],
        "name": "adoptedToCanonical",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint32",
                "name": "domain",
                "type": "uint32"
              },
              {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ConnextMessage.TokenId",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_adopted",
            "type": "bytes32"
          }
        ],
        "name": "adoptedToLocalPools",
        "outputs": [
          {
            "internalType": "contract IStableSwap",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "approveRouterForPortal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_asset",
            "type": "bytes32"
          }
        ],
        "name": "approvedAssets",
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
            "name": "_relayer",
            "type": "address"
          }
        ],
        "name": "approvedRelayers",
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
        "name": "assetOwnershipRenounced",
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
        "name": "assetOwnershipTimestamp",
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
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "bumpTransfer",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "calculateRemoveSwapLiquidity",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndex",
            "type": "uint8"
          }
        ],
        "name": "calculateRemoveSwapLiquidityOneToken",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexFrom",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexTo",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "dx",
            "type": "uint256"
          }
        ],
        "name": "calculateSwap",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "bool",
            "name": "deposit",
            "type": "bool"
          }
        ],
        "name": "calculateSwapTokenAmount",
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
            "name": "_canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "canonicalToAdopted",
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
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "bytes32[]",
            "name": "_transferIds",
            "type": "bytes32[]"
          }
        ],
        "name": "claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "domain",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_router",
            "type": "bytes32"
          }
        ],
        "name": "enrollRemoteRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "callData",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint32",
                    "name": "originDomain",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint32",
                    "name": "destinationDomain",
                    "type": "uint32"
                  },
                  {
                    "internalType": "address",
                    "name": "agent",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "recovery",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "forceSlow",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "receiveLocal",
                    "type": "bool"
                  },
                  {
                    "internalType": "address",
                    "name": "callback",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "callbackFee",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "relayerFee",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "slippageTol",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct CallParams",
                "name": "params",
                "type": "tuple"
              },
              {
                "internalType": "address",
                "name": "local",
                "type": "address"
              },
              {
                "internalType": "address[]",
                "name": "routers",
                "type": "address[]"
              },
              {
                "internalType": "bytes[]",
                "name": "routerSignatures",
                "type": "bytes[]"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "originSender",
                "type": "address"
              }
            ],
            "internalType": "struct ExecuteArgs",
            "name": "_args",
            "type": "tuple"
          }
        ],
        "name": "execute",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "executor",
        "outputs": [
          {
            "internalType": "contract IExecutor",
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
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "callData",
                "type": "bytes"
              },
              {
                "internalType": "uint32",
                "name": "originDomain",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "destinationDomain",
                "type": "uint32"
              },
              {
                "internalType": "address",
                "name": "agent",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recovery",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "forceSlow",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "receiveLocal",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "callback",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "callbackFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "relayerFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "slippageTol",
                "type": "uint256"
              }
            ],
            "internalType": "struct CallParams",
            "name": "_params",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint32",
            "name": "_canonicalDomain",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_originSender",
            "type": "address"
          }
        ],
        "name": "forceReceiveLocal",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "getAavePortalDebt",
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
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "getAavePortalFeeDebt",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getProposedRouterOwner",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getProposedRouterOwnerTimestamp",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getRouterApproval",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getRouterApprovalForPortal",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getRouterOwner",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "getRouterRecipient",
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
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "getSwapA",
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
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "getSwapAPrecise",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "getSwapAdminBalance",
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
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "getSwapLPToken",
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
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "getSwapStorage",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "initialA",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "futureA",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "initialATime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "futureATime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "swapFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "adminFee",
                "type": "uint256"
              },
              {
                "internalType": "contract LPToken",
                "name": "lpToken",
                "type": "address"
              },
              {
                "internalType": "contract IERC20[]",
                "name": "pooledTokens",
                "type": "address[]"
              },
              {
                "internalType": "uint256[]",
                "name": "tokenPrecisionMultipliers",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256[]",
                "name": "balances",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256[]",
                "name": "adminFees",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct SwapUtils.Swap",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint8",
            "name": "index",
            "type": "uint8"
          }
        ],
        "name": "getSwapToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint8",
            "name": "index",
            "type": "uint8"
          }
        ],
        "name": "getSwapTokenBalance",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "getSwapTokenIndex",
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
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "getSwapVirtualPrice",
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
            "internalType": "uint32",
            "name": "_origin",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_nonce",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "contract IERC20[]",
            "name": "_pooledTokens",
            "type": "address[]"
          },
          {
            "internalType": "uint8[]",
            "name": "decimals",
            "type": "uint8[]"
          },
          {
            "internalType": "string",
            "name": "lpTokenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lpTokenSymbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_adminFee",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "lpTokenTargetAddress",
            "type": "address"
          }
        ],
        "name": "initializeSwap",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "bytes32[]",
            "name": "_transferIds",
            "type": "bytes32[]"
          }
        ],
        "name": "initiateClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isAssetOwnershipRenounced",
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
        "name": "isRouterOwnershipRenounced",
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
        "name": "maxRoutersPerTransfer",
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
        "name": "nonce",
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
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "promiseRouter",
        "outputs": [
          {
            "internalType": "contract PromiseRouter",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposeAssetOwnershipRenunciation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "proposeDiamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "router",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "proposed",
            "type": "address"
          }
        ],
        "name": "proposeRouterOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposeRouterOwnershipRenunciation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedOwnableOwner",
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
        "name": "proposedTimestamp",
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
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "futureA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "futureTime",
            "type": "uint256"
          }
        ],
        "name": "rampA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "reconciledTransfers",
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
        "name": "relayerFeeRouer",
        "outputs": [
          {
            "internalType": "contract RelayerFeeRouter",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "relayerFeeRouter",
        "outputs": [
          {
            "internalType": "contract RelayerFeeRouter",
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
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "relayerFees",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          }
        ],
        "name": "remotes",
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
            "internalType": "bytes32",
            "name": "_canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_adoptedAssetId",
            "type": "address"
          }
        ],
        "name": "removeAssetId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_relayer",
            "type": "address"
          }
        ],
        "name": "removeRelayer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "router",
            "type": "address"
          }
        ],
        "name": "removeRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_local",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "removeRouterLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_local",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "removeRouterLiquidityFor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "minAmounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeSwapLiquidity",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "maxBurnAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeSwapLiquidityImbalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndex",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "minAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeSwapLiquidityOneToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceAssetOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceRouterOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
            "name": "_asset",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_backingAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_feeAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_maxIn",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "repayAavePortal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_router",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_adopted",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_backingAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_feeAmount",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "repayAavePortalFor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "rescindDiamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "routedTransfers",
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
            "internalType": "address",
            "name": "_router",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          }
        ],
        "name": "routerBalances",
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
        "name": "routerOwnershipRenounced",
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
        "name": "routerOwnershipTimestamp",
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
            "name": "_aavePool",
            "type": "address"
          }
        ],
        "name": "setAavePool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_aavePortalFeeNumerator",
            "type": "uint256"
          }
        ],
        "name": "setAavePortalFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_executor",
            "type": "address"
          }
        ],
        "name": "setExecutor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_numerator",
            "type": "uint256"
          }
        ],
        "name": "setLiquidityFeeNumerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newMaxRouters",
            "type": "uint256"
          }
        ],
        "name": "setMaxRoutersPerTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_promiseRouter",
            "type": "address"
          }
        ],
        "name": "setPromiseRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_relayerFeeRouter",
            "type": "address"
          }
        ],
        "name": "setRelayerFeeRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "router",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "setRouterRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_sponsorVault",
            "type": "address"
          }
        ],
        "name": "setSponsorVault",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "newAdminFee",
            "type": "uint256"
          }
        ],
        "name": "setSwapAdminFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "newSwapFee",
            "type": "uint256"
          }
        ],
        "name": "setSwapFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenRegistry",
            "type": "address"
          }
        ],
        "name": "setTokenRegistry",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_wrapper",
            "type": "address"
          }
        ],
        "name": "setWrapper",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_xAppConnectionManager",
            "type": "address"
          }
        ],
        "name": "setXAppConnectionManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint32",
                "name": "domain",
                "type": "uint32"
              },
              {
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
              }
            ],
            "internalType": "struct ConnextMessage.TokenId",
            "name": "_canonical",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "_adoptedAssetId",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_stableSwapPool",
            "type": "address"
          }
        ],
        "name": "setupAsset",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "router",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          }
        ],
        "name": "setupRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sponsorVault",
        "outputs": [
          {
            "internalType": "contract ISponsorVault",
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
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "stopRampA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexFrom",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexTo",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "dx",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minDy",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "swap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minAmountOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "swapExact",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "maxAmountIn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "swapExactOut",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokenRegistry",
        "outputs": [
          {
            "internalType": "contract ITokenRegistry",
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
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "transferRelayer",
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
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "unapproveRouterForPortal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "canonicalId",
            "type": "bytes32"
          }
        ],
        "name": "withdrawSwapAdminFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "wrapper",
        "outputs": [
          {
            "internalType": "contract IWrapped",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "xAppConnectionManager",
        "outputs": [
          {
            "internalType": "contract XAppConnectionManager",
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
                "components": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "callData",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint32",
                    "name": "originDomain",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint32",
                    "name": "destinationDomain",
                    "type": "uint32"
                  },
                  {
                    "internalType": "address",
                    "name": "agent",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "recovery",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "forceSlow",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "receiveLocal",
                    "type": "bool"
                  },
                  {
                    "internalType": "address",
                    "name": "callback",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "callbackFee",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "relayerFee",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "slippageTol",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct CallParams",
                "name": "params",
                "type": "tuple"
              },
              {
                "internalType": "address",
                "name": "transactingAssetId",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct XCallArgs",
            "name": "_args",
            "type": "tuple"
          }
        ],
        "name": "xcall",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IDiamondCut": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "diamondCut",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IDiamondLoupe": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "_functionSelector",
            "type": "bytes4"
          }
        ],
        "name": "facetAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "facetAddress_",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "facetAddresses",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "facetAddresses_",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_facet",
            "type": "address"
          }
        ],
        "name": "facetFunctionSelectors",
        "outputs": [
          {
            "internalType": "bytes4[]",
            "name": "facetFunctionSelectors_",
            "type": "bytes4[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "facets",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "internalType": "struct IDiamondLoupe.Facet[]",
            "name": "facets_",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IERC165": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
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
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IERC173": {
    "abi": [
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "owner_",
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
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IERC20": {
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
            "name": "amount",
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
            "name": "account",
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
            "name": "amount",
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
            "name": "amount",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "IERC20MetadataUpgradeable": {
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
            "name": "amount",
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
            "name": "account",
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
            "name": "amount",
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
            "name": "amount",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "IERC20Upgradeable": {
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
            "name": "amount",
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
            "name": "account",
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
            "name": "amount",
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
            "name": "amount",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "IExecutor": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recovery",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "assetId",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_properties",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "callData",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "returnData",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "name": "Executed",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "amount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "transferId",
                "type": "bytes32"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "recovery",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "assetId",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "properties",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "callData",
                "type": "bytes"
              }
            ],
            "internalType": "struct IExecutor.ExecutorArgs",
            "name": "_args",
            "type": "tuple"
          }
        ],
        "name": "execute",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "returnData",
            "type": "bytes"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getConnext",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "origin",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "originSender",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IHopBridge": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "relayer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "relayerFee",
            "type": "uint256"
          }
        ],
        "name": "sendToL2",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "chainId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonderFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "destinationAmountOutMin",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "destinationDeadline",
            "type": "uint256"
          }
        ],
        "name": "swapAndSend",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IMessageRecipient": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_origin",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_nonce",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IProposedOwnable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "owner_",
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
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
        "outputs": [
          {
            "internalType": "address",
            "name": "proposed_",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ISponsorVault": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
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
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "reimburseLiquidityFees",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "originDomain",
            "type": "uint32"
          },
          {
            "internalType": "address payable",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "reimburseRelayerFees",
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
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IStableSwap": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "fees",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "invariant",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "AddLiquidity",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newAdminFee",
            "type": "uint256"
          }
        ],
        "name": "NewAdminFee",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newSwapFee",
            "type": "uint256"
          }
        ],
        "name": "NewSwapFee",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newWithdrawFee",
            "type": "uint256"
          }
        ],
        "name": "NewWithdrawFee",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "oldA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "initialTime",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "futureTime",
            "type": "uint256"
          }
        ],
        "name": "RampA",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidity",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "fees",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "invariant",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidityImbalance",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "boughtId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensBought",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidityOne",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "currentA",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "StopRampA",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensSold",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensBought",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "soldId",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "boughtId",
            "type": "uint128"
          }
        ],
        "name": "TokenSwap",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "minToMint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "addLiquidity",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "calculateRemoveLiquidity",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndex",
            "type": "uint8"
          }
        ],
        "name": "calculateRemoveLiquidityOneToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "availableTokenAmount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "tokenIndexFrom",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexTo",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "dx",
            "type": "uint256"
          }
        ],
        "name": "calculateSwap",
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
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          }
        ],
        "name": "calculateSwapFromAddress",
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
            "internalType": "uint8",
            "name": "tokenIndexFrom",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexTo",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "dy",
            "type": "uint256"
          }
        ],
        "name": "calculateSwapOut",
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
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          }
        ],
        "name": "calculateSwapOutFromAddress",
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
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "bool",
            "name": "deposit",
            "type": "bool"
          }
        ],
        "name": "calculateTokenAmount",
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
        "name": "getA",
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
            "internalType": "uint8",
            "name": "index",
            "type": "uint8"
          }
        ],
        "name": "getToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
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
            "internalType": "uint8",
            "name": "index",
            "type": "uint8"
          }
        ],
        "name": "getTokenBalance",
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
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "getTokenIndex",
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
        "name": "getVirtualPrice",
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
            "internalType": "contract IERC20[]",
            "name": "pooledTokens",
            "type": "address[]"
          },
          {
            "internalType": "uint8[]",
            "name": "decimals",
            "type": "uint8[]"
          },
          {
            "internalType": "string",
            "name": "lpTokenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lpTokenSymbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adminFee",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "lpTokenTargetAddress",
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
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "minAmounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeLiquidity",
        "outputs": [
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256",
            "name": "maxBurnAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeLiquidityImbalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndex",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "minAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "removeLiquidityOneToken",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint8",
            "name": "tokenIndexFrom",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "tokenIndexTo",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "dx",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minDy",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "name": "swap",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minAmountOut",
            "type": "uint256"
          }
        ],
        "name": "swapExact",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "assetIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "maxAmountIn",
            "type": "uint256"
          }
        ],
        "name": "swapExactOut",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IStargateReceiver": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcChainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountLD",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "payload",
            "type": "bytes"
          }
        ],
        "name": "sgReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IStargateRouter": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_poolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_amountLD",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_srcPoolId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_amountLP",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "instantRedeemLocal",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint8",
            "name": "_functionType",
            "type": "uint8"
          },
          {
            "internalType": "bytes",
            "name": "_toAddress",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_transferAndCallPayload",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "dstGasForCall",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstNativeAmount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "dstNativeAddr",
                "type": "bytes"
              }
            ],
            "internalType": "struct IStargateRouter.lzTxObj",
            "name": "_lzTxParams",
            "type": "tuple"
          }
        ],
        "name": "quoteLayerZeroFee",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
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
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_srcPoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_dstPoolId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amountLP",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_to",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "dstGasForCall",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstNativeAmount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "dstNativeAddr",
                "type": "bytes"
              }
            ],
            "internalType": "struct IStargateRouter.lzTxObj",
            "name": "_lzTxParams",
            "type": "tuple"
          }
        ],
        "name": "redeemLocal",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_srcPoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_dstPoolId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amountLP",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_minAmountLD",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_to",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "dstGasForCall",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstNativeAmount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "dstNativeAddr",
                "type": "bytes"
              }
            ],
            "internalType": "struct IStargateRouter.lzTxObj",
            "name": "_lzTxParams",
            "type": "tuple"
          }
        ],
        "name": "redeemRemote",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_srcPoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_dstPoolId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundAddress",
            "type": "address"
          }
        ],
        "name": "sendCredits",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_dstChainId",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "_srcPoolId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_dstPoolId",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "_refundAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amountLD",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_minAmountLD",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "dstGasForCall",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dstNativeAmount",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "dstNativeAddr",
                "type": "bytes"
              }
            ],
            "internalType": "struct IStargateRouter.lzTxObj",
            "name": "_lzTxParams",
            "type": "tuple"
          },
          {
            "internalType": "bytes",
            "name": "_to",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          }
        ],
        "name": "swap",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ISuperAgreement": {
    "abi": [
      {
        "inputs": [],
        "name": "agreementType",
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
            "internalType": "contract ISuperfluidToken",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "realtimeBalanceOf",
        "outputs": [
          {
            "internalType": "int256",
            "name": "dynamicBalance",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "owedDeposit",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ISuperfluidToken": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "data",
            "type": "bytes32[]"
          }
        ],
        "name": "AgreementCreated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "penaltyAccount",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "rewardAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          }
        ],
        "name": "AgreementLiquidated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "liquidatorAccount",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "penaltyAccount",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "bondAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bailoutAmount",
            "type": "uint256"
          }
        ],
        "name": "AgreementLiquidatedBy",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "liquidatorAccount",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "targetAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "rewardAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "targetAccountBalanceDelta",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "liquidationTypeData",
            "type": "bytes"
          }
        ],
        "name": "AgreementLiquidatedV2",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "slotId",
            "type": "uint256"
          }
        ],
        "name": "AgreementStateUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          }
        ],
        "name": "AgreementTerminated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "data",
            "type": "bytes32[]"
          }
        ],
        "name": "AgreementUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "bailoutAccount",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "bailoutAmount",
            "type": "uint256"
          }
        ],
        "name": "Bailout",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[]",
            "name": "data",
            "type": "bytes32[]"
          }
        ],
        "name": "createAgreement",
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
        "name": "getAccountActiveAgreements",
        "outputs": [
          {
            "internalType": "contract ISuperAgreement[]",
            "name": "activeAgreements",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "dataLength",
            "type": "uint256"
          }
        ],
        "name": "getAgreementData",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "data",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "agreementClass",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "slotId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dataLength",
            "type": "uint256"
          }
        ],
        "name": "getAgreementStateSlot",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "slotData",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getHost",
        "outputs": [
          {
            "internalType": "address",
            "name": "host",
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
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "name": "isAccountCritical",
        "outputs": [
          {
            "internalType": "bool",
            "name": "isCritical",
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
          }
        ],
        "name": "isAccountCriticalNow",
        "outputs": [
          {
            "internalType": "bool",
            "name": "isCritical",
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
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "name": "isAccountSolvent",
        "outputs": [
          {
            "internalType": "bool",
            "name": "isSolvent",
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
          }
        ],
        "name": "isAccountSolventNow",
        "outputs": [
          {
            "internalType": "bool",
            "name": "isSolvent",
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
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "liquidationTypeData",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "liquidatorAccount",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "useDefaultRewardAccount",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "targetAccount",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "rewardAmount",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "targetAccountBalanceDelta",
            "type": "int256"
          }
        ],
        "name": "makeLiquidationPayoutsV2",
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
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "name": "realtimeBalanceOf",
        "outputs": [
          {
            "internalType": "int256",
            "name": "availableBalance",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "owedDeposit",
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
          }
        ],
        "name": "realtimeBalanceOfNow",
        "outputs": [
          {
            "internalType": "int256",
            "name": "availableBalance",
            "type": "int256"
          },
          {
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "owedDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
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
            "internalType": "int256",
            "name": "delta",
            "type": "int256"
          }
        ],
        "name": "settleBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "dataLength",
            "type": "uint256"
          }
        ],
        "name": "terminateAgreement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[]",
            "name": "data",
            "type": "bytes32[]"
          }
        ],
        "name": "updateAgreementData",
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
            "name": "slotId",
            "type": "uint256"
          },
          {
            "internalType": "bytes32[]",
            "name": "slotData",
            "type": "bytes32[]"
          }
        ],
        "name": "updateAgreementStateSlot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ITokenRegistry": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_id",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_custom",
            "type": "address"
          }
        ],
        "name": "enrollCustom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_id",
            "type": "bytes32"
          }
        ],
        "name": "ensureLocalToken",
        "outputs": [
          {
            "internalType": "address",
            "name": "_local",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_id",
            "type": "bytes32"
          }
        ],
        "name": "getLocalAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "_local",
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
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "getTokenId",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          },
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
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "isLocalOrigin",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_id",
            "type": "bytes32"
          }
        ],
        "name": "mustHaveLocalToken",
        "outputs": [
          {
            "internalType": "contract IERC20",
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
            "name": "_oldRepr",
            "type": "address"
          }
        ],
        "name": "oldReprToCurrentRepr",
        "outputs": [
          {
            "internalType": "address",
            "name": "_currentRepr",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "IUpdaterManager": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_reporter",
            "type": "address"
          }
        ],
        "name": "slashUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "updater",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "IWrapped": {
    "abi": [
      {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "Initializable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "LPToken": {
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
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
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
        "inputs": [],
        "name": "MINIMUM_LIQUIDITY",
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
            "name": "amount",
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
            "name": "account",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
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
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
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
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          }
        ],
        "name": "initialize",
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
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "renounceOwnership",
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
            "name": "amount",
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
            "name": "amount",
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
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50612771806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461030a578063a9059cbb1461033a578063ba9a7a561461036a578063dd62ed3e14610388578063f2fde38b146103b857610121565b806370a0823114610278578063715018a6146102a857806379cc6790146102b25780638da5cb5b146102ce57806395d89b41146102ec57610121565b8063313ce567116100f4578063313ce567146101c257806339509351146101e057806340c10f191461021057806342966c681461022c5780634cd88b761461024857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103d4565b60405161013b91906116b0565b60405180910390f35b61015e6004803603810190610159919061177a565b610466565b60405161016b91906117d5565b60405180910390f35b61017c610489565b60405161018991906117ff565b60405180910390f35b6101ac60048036038101906101a7919061181a565b610493565b6040516101b991906117d5565b60405180910390f35b6101ca6104c2565b6040516101d79190611889565b60405180910390f35b6101fa60048036038101906101f5919061177a565b6104cb565b60405161020791906117d5565b60405180910390f35b61022a6004803603810190610225919061177a565b610502565b005b610246600480360381019061024191906118a4565b6105ec565b005b610262600480360381019061025d9190611a06565b610600565b60405161026f91906117d5565b60405180910390f35b610292600480360381019061028d9190611a7e565b6106af565b60405161029f91906117ff565b60405180910390f35b6102b06106f8565b005b6102cc60048036038101906102c7919061177a565b610780565b005b6102d66107a0565b6040516102e39190611aba565b60405180910390f35b6102f46107ca565b60405161030191906116b0565b60405180910390f35b610324600480360381019061031f919061177a565b61085c565b60405161033191906117d5565b60405180910390f35b610354600480360381019061034f919061177a565b6108d3565b60405161036191906117d5565b60405180910390f35b6103726108f6565b60405161037f91906117ff565b60405180910390f35b6103a2600480360381019061039d9190611ad5565b6108fc565b6040516103af91906117ff565b60405180910390f35b6103d260048036038101906103cd9190611a7e565b610983565b005b6060603680546103e390611b44565b80601f016020809104026020016040519081016040528092919081815260200182805461040f90611b44565b801561045c5780601f106104315761010080835404028352916020019161045c565b820191906000526020600020905b81548152906001019060200180831161043f57829003601f168201915b5050505050905090565b600080610471610a7a565b905061047e818585610a82565b600191505092915050565b6000603554905090565b60008061049e610a7a565b90506104ab858285610c4b565b6104b6858585610cd7565b60019150509392505050565b60006012905090565b6000806104d6610a7a565b90506104f78185856104e885896108fc565b6104f29190611ba4565b610a82565b600191505092915050565b61050a610a7a565b73ffffffffffffffffffffffffffffffffffffffff166105286107a0565b73ffffffffffffffffffffffffffffffffffffffff161461057e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057590611c46565b60405180910390fd5b600081036105c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b890611cb2565b60405180910390fd5b60006105cb610489565b036105de576105dd60016103e8610f59565b5b6105e88282610f59565b5050565b6105fd6105f7610a7a565b826110b9565b50565b60008061060d6001611291565b90508015610631576001600060016101000a81548160ff0219169083151502179055505b610639611381565b61064384846113d2565b61064b611445565b6001915080156106a85760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161069f9190611d17565b60405180910390a15b5092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610700610a7a565b73ffffffffffffffffffffffffffffffffffffffff1661071e6107a0565b73ffffffffffffffffffffffffffffffffffffffff1614610774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076b90611c46565b60405180910390fd5b61077e60006114a6565b565b6107928261078c610a7a565b83610c4b565b61079c82826110b9565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060603780546107d990611b44565b80601f016020809104026020016040519081016040528092919081815260200182805461080590611b44565b80156108525780601f1061082757610100808354040283529160200191610852565b820191906000526020600020905b81548152906001019060200180831161083557829003601f168201915b5050505050905090565b600080610867610a7a565b9050600061087582866108fc565b9050838110156108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190611da4565b60405180910390fd5b6108c78286868403610a82565b60019250505092915050565b6000806108de610a7a565b90506108eb818585610cd7565b600191505092915050565b6103e881565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61098b610a7a565b73ffffffffffffffffffffffffffffffffffffffff166109a96107a0565b73ffffffffffffffffffffffffffffffffffffffff16146109ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f690611c46565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6590611e36565b60405180910390fd5b610a77816114a6565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae890611ec8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5790611f5a565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c3e91906117ff565b60405180910390a3505050565b6000610c5784846108fc565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610cd15781811015610cc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cba90611fc6565b60405180910390fd5b610cd08484848403610a82565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3d90612058565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dac906120ea565b60405180910390fd5b610dc083838361156c565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3e9061217c565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610edc9190611ba4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f4091906117ff565b60405180910390a3610f538484846115ea565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbf906121e8565b60405180910390fd5b610fd46000838361156c565b8060356000828254610fe69190611ba4565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461103c9190611ba4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110a191906117ff565b60405180910390a36110b5600083836115ea565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111f9061227a565b60405180910390fd5b6111348260008361156c565b6000603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b29061230c565b60405180910390fd5b818103603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160356000828254611213919061232c565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161127891906117ff565b60405180910390a361128c836000846115ea565b505050565b60008060019054906101000a900460ff16156113085760018260ff161480156112c057506112be306115ef565b155b6112ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f6906123d2565b60405180910390fd5b6000905061137c565b8160ff1660008054906101000a900460ff1660ff161061135d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611354906123d2565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff166113d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c790612464565b60405180910390fd5b565b600060019054906101000a900460ff16611421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141890612464565b60405180910390fd5b81603690816114309190612626565b5080603790816114409190612626565b505050565b600060019054906101000a900460ff16611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b90612464565b60405180910390fd5b6114a461149f610a7a565b6114a6565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611577838383611612565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dc90612744565b60405180910390fd5b505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611651578082015181840152602081019050611636565b83811115611660576000848401525b50505050565b6000601f19601f8301169050919050565b600061168282611617565b61168c8185611622565b935061169c818560208601611633565b6116a581611666565b840191505092915050565b600060208201905081810360008301526116ca8184611677565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611711826116e6565b9050919050565b61172181611706565b811461172c57600080fd5b50565b60008135905061173e81611718565b92915050565b6000819050919050565b61175781611744565b811461176257600080fd5b50565b6000813590506117748161174e565b92915050565b60008060408385031215611791576117906116dc565b5b600061179f8582860161172f565b92505060206117b085828601611765565b9150509250929050565b60008115159050919050565b6117cf816117ba565b82525050565b60006020820190506117ea60008301846117c6565b92915050565b6117f981611744565b82525050565b600060208201905061181460008301846117f0565b92915050565b600080600060608486031215611833576118326116dc565b5b60006118418682870161172f565b93505060206118528682870161172f565b925050604061186386828701611765565b9150509250925092565b600060ff82169050919050565b6118838161186d565b82525050565b600060208201905061189e600083018461187a565b92915050565b6000602082840312156118ba576118b96116dc565b5b60006118c884828501611765565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61191382611666565b810181811067ffffffffffffffff82111715611932576119316118db565b5b80604052505050565b60006119456116d2565b9050611951828261190a565b919050565b600067ffffffffffffffff821115611971576119706118db565b5b61197a82611666565b9050602081019050919050565b82818337600083830152505050565b60006119a96119a484611956565b61193b565b9050828152602081018484840111156119c5576119c46118d6565b5b6119d0848285611987565b509392505050565b600082601f8301126119ed576119ec6118d1565b5b81356119fd848260208601611996565b91505092915050565b60008060408385031215611a1d57611a1c6116dc565b5b600083013567ffffffffffffffff811115611a3b57611a3a6116e1565b5b611a47858286016119d8565b925050602083013567ffffffffffffffff811115611a6857611a676116e1565b5b611a74858286016119d8565b9150509250929050565b600060208284031215611a9457611a936116dc565b5b6000611aa28482850161172f565b91505092915050565b611ab481611706565b82525050565b6000602082019050611acf6000830184611aab565b92915050565b60008060408385031215611aec57611aeb6116dc565b5b6000611afa8582860161172f565b9250506020611b0b8582860161172f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611b5c57607f821691505b602082108103611b6f57611b6e611b15565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611baf82611744565b9150611bba83611744565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611bef57611bee611b75565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611c30602083611622565b9150611c3b82611bfa565b602082019050919050565b60006020820190508181036000830152611c5f81611c23565b9050919050565b7f4c50546f6b656e3a2063616e6e6f74206d696e74203000000000000000000000600082015250565b6000611c9c601683611622565b9150611ca782611c66565b602082019050919050565b60006020820190508181036000830152611ccb81611c8f565b9050919050565b6000819050919050565b6000819050919050565b6000611d01611cfc611cf784611cd2565b611cdc565b61186d565b9050919050565b611d1181611ce6565b82525050565b6000602082019050611d2c6000830184611d08565b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d8e602583611622565b9150611d9982611d32565b604082019050919050565b60006020820190508181036000830152611dbd81611d81565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611e20602683611622565b9150611e2b82611dc4565b604082019050919050565b60006020820190508181036000830152611e4f81611e13565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611eb2602483611622565b9150611ebd82611e56565b604082019050919050565b60006020820190508181036000830152611ee181611ea5565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f44602283611622565b9150611f4f82611ee8565b604082019050919050565b60006020820190508181036000830152611f7381611f37565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611fb0601d83611622565b9150611fbb82611f7a565b602082019050919050565b60006020820190508181036000830152611fdf81611fa3565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612042602583611622565b915061204d82611fe6565b604082019050919050565b6000602082019050818103600083015261207181612035565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120d4602383611622565b91506120df82612078565b604082019050919050565b60006020820190508181036000830152612103816120c7565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612166602683611622565b91506121718261210a565b604082019050919050565b6000602082019050818103600083015261219581612159565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121d2601f83611622565b91506121dd8261219c565b602082019050919050565b60006020820190508181036000830152612201816121c5565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612264602183611622565b915061226f82612208565b604082019050919050565b6000602082019050818103600083015261229381612257565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006122f6602283611622565b91506123018261229a565b604082019050919050565b60006020820190508181036000830152612325816122e9565b9050919050565b600061233782611744565b915061234283611744565b92508282101561235557612354611b75565b5b828203905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006123bc602e83611622565b91506123c782612360565b604082019050919050565b600060208201905081810360008301526123eb816123af565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061244e602b83611622565b9150612459826123f2565b604082019050919050565b6000602082019050818103600083015261247d81612441565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026124e67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826124a9565b6124f086836124a9565b95508019841693508086168417925050509392505050565b600061252361251e61251984611744565b611cdc565b611744565b9050919050565b6000819050919050565b61253d83612508565b6125516125498261252a565b8484546124b6565b825550505050565b600090565b612566612559565b612571818484612534565b505050565b5b818110156125955761258a60008261255e565b600181019050612577565b5050565b601f8211156125da576125ab81612484565b6125b484612499565b810160208510156125c3578190505b6125d76125cf85612499565b830182612576565b50505b505050565b600082821c905092915050565b60006125fd600019846008026125df565b1980831691505092915050565b600061261683836125ec565b9150826002028217905092915050565b61262f82611617565b67ffffffffffffffff811115612648576126476118db565b5b6126528254611b44565b61265d828285612599565b600060209050601f831160018114612690576000841561267e578287015190505b612688858261260a565b8655506126f0565b601f19841661269e86612484565b60005b828110156126c6578489015182556001820191506020850194506020810190506126a1565b868310156126e357848901516126df601f8916826125ec565b8355505b6001600288020188555050505b505050505050565b7f4c50546f6b656e3a2063616e6e6f742073656e6420746f20697473656c660000600082015250565b600061272e601e83611622565b9150612739826126f8565b602082019050919050565b6000602082019050818103600083015261275d81612721565b905091905056fea164736f6c634300080f000a"
  },
  "LibAsset": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000804000a"
  },
  "LibConnextStorage": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "LibDiamond": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "facetAddress",
                "type": "address"
              },
              {
                "internalType": "enum IDiamondCut.FacetCutAction",
                "name": "action",
                "type": "uint8"
              },
              {
                "internalType": "bytes4[]",
                "name": "functionSelectors",
                "type": "bytes4[]"
              }
            ],
            "indexed": false,
            "internalType": "struct IDiamondCut.FacetCut[]",
            "name": "_diamondCut",
            "type": "tuple[]"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_init",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "_calldata",
            "type": "bytes"
          }
        ],
        "name": "DiamondCut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      }
    ],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "MathUtils": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "MerkleTreeManager": {
    "abi": [
      {
        "inputs": [],
        "name": "count",
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
        "name": "root",
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
        "inputs": [],
        "name": "tree",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "count",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50610aef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd14610046578063ebf0c71714610064578063fd54b22814610082575b600080fd5b61004e6100a0565b60405161005b91906109a0565b60405180910390f35b61006c6100ac565b60405161007991906109d4565b60405180910390f35b61008a6100bd565b60405161009791906109a0565b60405180910390f35b60008060200154905090565b60006100b860006100c9565b905090565b60008060200154905081565b60006100dc826100d76100e3565b61088f565b9050919050565b6100eb610964565b600081600060208110610101576101006109ef565b5b6020020181815250507fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb58160016020811061013f5761013e6109ef565b5b6020020181815250507fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d308160026020811061017d5761017c6109ef565b5b6020020181815250507f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85816003602081106101bb576101ba6109ef565b5b6020020181815250507fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a19344816004602081106101f9576101f86109ef565b5b6020020181815250507f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d81600560208110610237576102366109ef565b5b6020020181815250507f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196881600660208110610275576102746109ef565b5b6020020181815250507fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f83816007602081106102b3576102b26109ef565b5b6020020181815250507f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af816008602081106102f1576102f06109ef565b5b6020020181815250507fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e08160096020811061032f5761032e6109ef565b5b6020020181815250507ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a581600a6020811061036d5761036c6109ef565b5b6020020181815250507ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89281600b602081106103ab576103aa6109ef565b5b6020020181815250507f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c81600c602081106103e9576103e86109ef565b5b6020020181815250507fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb81600d60208110610427576104266109ef565b5b6020020181815250507f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc81600e60208110610465576104646109ef565b5b6020020181815250507fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d281600f602081106104a3576104a26109ef565b5b6020020181815250507f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f816010602081106104e1576104e06109ef565b5b6020020181815250507fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a8160116020811061051f5761051e6109ef565b5b6020020181815250507f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a08160126020811061055d5761055c6109ef565b5b6020020181815250507fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa08160136020811061059b5761059a6109ef565b5b6020020181815250507fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e2816014602081106105d9576105d86109ef565b5b6020020181815250507ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd981601560208110610617576106166109ef565b5b6020020181815250507f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e37781601660208110610655576106546109ef565b5b6020020181815250507f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee65281601760208110610693576106926109ef565b5b6020020181815250507fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef816018602081106106d1576106d06109ef565b5b6020020181815250507f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d8160196020811061070f5761070e6109ef565b5b6020020181815250507fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d081601a6020811061074d5761074c6109ef565b5b6020020181815250507f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e81601b6020811061078b5761078a6109ef565b5b6020020181815250507f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e81601c602081106107c9576107c86109ef565b5b6020020181815250507f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32281601d60208110610807576108066109ef565b5b6020020181815250507f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73581601e60208110610845576108446109ef565b5b6020020181815250507f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a981601f60208110610883576108826109ef565b5b60200201818152505090565b6000808360200154905060005b602081101561095c57600060018284901c16905060008660000183602081106108c8576108c76109ef565b5b01549050600182036109045780856040516020016108e7929190610a3f565b604051602081830303815290604052805190602001209450610947565b84868460208110610918576109176109ef565b5b602002015160405160200161092e929190610a3f565b6040516020818303038152906040528051906020012094505b5050808061095490610a9a565b91505061089c565b505092915050565b604051806104000160405280602090602082028036833780820191505090505090565b6000819050919050565b61099a81610987565b82525050565b60006020820190506109b56000830184610991565b92915050565b6000819050919050565b6109ce816109bb565b82525050565b60006020820190506109e960008301846109c5565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b610a39610a34826109bb565b610a1e565b82525050565b6000610a4b8285610a28565b602082019150610a5b8284610a28565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610aa582610987565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ad757610ad6610a6b565b5b60018201905091905056fea164736f6c634300080f000a"
  },
  "Message": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "NomadBase": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32[2]",
            "name": "newRoot",
            "type": "bytes32[2]"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature2",
            "type": "bytes"
          }
        ],
        "name": "DoubleUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "internalType": "address",
            "name": "oldUpdater",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newUpdater",
            "type": "address"
          }
        ],
        "name": "NewUpdater",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "homeDomain",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "Update",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "committedRoot",
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
            "internalType": "bytes32",
            "name": "_oldRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[2]",
            "name": "_newRoot",
            "type": "bytes32[2]"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_signature2",
            "type": "bytes"
          }
        ],
        "name": "doubleUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "homeDomainHash",
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
        "inputs": [],
        "name": "localDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "state",
        "outputs": [
          {
            "internalType": "enum NomadBase.States",
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
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "updater",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "Ownable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "OwnableUpgradeable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "OwnershipFacet": {
    "abi": [
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "owner_",
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
            "name": "_newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506103d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b14610059575b600080fd5b610043610075565b60405161005091906102ab565b60405180910390f35b610073600480360381019061006e91906102f7565b610084565b005b600061007f610098565b905090565b61008c6100cb565b61009581610166565b50565b60006100a261023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100d361023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b906103a7565b60405180910390fd5b565b600061017061023d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102958261026a565b9050919050565b6102a58161028a565b82525050565b60006020820190506102c0600083018461029c565b92915050565b600080fd5b6102d48161028a565b81146102df57600080fd5b50565b6000813590506102f1816102cb565b92915050565b60006020828403121561030d5761030c6102c6565b5b600061031b848285016102e2565b91505092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000610391602283610324565b915061039c82610335565b604082019050919050565b600060208201905081810360008301526103c081610384565b905091905056fea164736f6c634300080f000a"
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
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
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506144d1806100616000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806390482d72116100b8578063d0f710d61161007c578063d0f710d61461075e578063da9fc1ae146107f7578063db63f5821461083b578063e1e382ce1461089f578063e5c7278f14610958578063f4876c7414610a1b57610142565b806390482d7214610545578063a526d83b146105fe578063bb890d3f14610642578063cade6a5d146106bc578063d089e11a1461072a57610142565b80631a8414031161010a5780631a841403146103515780633164b5e1146103bf57806334d323a414610419578063392e53cd1461049d57806343013c24146104bd578063714041561461050157610142565b80630900f010146101475780630c68ba211461018b57806311464fbe146101e5578063116191b614610219578063124e9eb31461024d575b600080fd5b6101896004803603602081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7f565b005b6101cd600480360360208110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b60405180821515815260200191505060405180910390f35b6101ed610b83565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610221610ba9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103396004803603606081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111640100000000831117156102d457600080fd5b9091929391929390803590602001906401000000008111156102f557600080fd5b82018360208201111561030757600080fd5b8035906020019184600183028401116401000000008311171561032957600080fd5b9091929391929390505050610bcf565b60405180821515815260200191505060405180910390f35b6103bd6004803603606081101561036757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b610401600480360360208110156103d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef3565b60405180821515815260200191505060405180910390f35b6104856004803603606081101561042f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4c565b60405180821515815260200191505060405180910390f35b6104a561103a565b60405180821515815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611092565b005b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110aa565b005b6105fc6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460208302840111640100000000831117156105ac57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611370565b005b6106406004803603602081101561061457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611508565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115b5565b60405180821515815260200191505060405180910390f35b6106fe600480360360208110156106d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107326115db565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107df6004803603604081101561077457600080fd5b81019080803590602001909291908035906020019064010000000081111561079b57600080fd5b8201836020820111156107ad57600080fd5b803590602001918460018302840111640100000000831117156107cf57600080fd5b9091929391929390505050611601565b60405180821515815260200191505060405180910390f35b6108396004803603602081101561080d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165a565b005b61089d6004803603604081101561085157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611670565b005b610940600480360360608110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108fc57600080fd5b82018360208201111561090e57600080fd5b8035906020019184600183028401116401000000008311171561093057600080fd5b9091929391929390505050611905565b60405180821515815260200191505060405180910390f35b610a196004803603608081101561096e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109d557600080fd5b8201836020820111156109e757600080fd5b80359060200191846001830284011164010000000083111715610a0957600080fd5b9091929391929390505050611971565b005b610a7d60048036036040811015610a3157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b005b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b610b2b816001611d0d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c7d86610c7885858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c6a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e4e565b611fb790919063ffffffff16565b612087565b905095945050505050565b610c918361223e565b50610c9b83612685565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2f57610d29833283600067ffffffffffffffff81118015610cee57600080fd5b506040519080825280601f01601f191660200182016040528015610d215781602001600182028036833780820191505090505b506000612786565b50610e5d565b6060610dd38484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000612786565b9050600081511115610e5b57808060200190516020811015610df457600080fd5b8101908080519060200190929190505050610e5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061440a6035913960400191505060405180910390fd5b5b505b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009050610f5d8585612087565b15610f6b576001905061102f565b61102c83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050612c5490919063ffffffff16565b90505b809150509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b61109b8161223e565b506110a7816001612ca3565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661114b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156111ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180614318602f913960400191505060405180910390fd5b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114a2848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050612f05565b6114ac3083612f5d565b6114b581612f77565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b6115b281612fbb565b50565b60006115c18383612087565b905092915050565b60006115d4826131e2565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116518484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613238565b90509392505050565b6116638161223e565b5061166d81612685565b50565b600061167b8361223e565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806143b9602b913960400191505060405180910390fd5b6117b9600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b61180e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806142b7602c913960400191505060405180910390fd5b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60006119678561196285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611fb790919063ffffffff16565b612087565b9050949350505050565b61197a8561223e565b5061198485612685565b6119d685858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001612786565b505050505050565b6119e78261223e565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180614498602d913960400191505060405180910390fd5b611b25600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b15611b7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061446b602d913960400191505060405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018061421e603b913960400191505060405180910390fd5b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015611e4a577f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b6000611e5a82516132b8565b826040516020018082805190602001908083835b60208310611e915780518252602082019150602081019050602083039250611e6e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b60208310611f235780518252602082019150602081019050602083039250611f00565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611f745780518252602082019150602081019050602083039250611f51565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b6000806000905060418351141561207d5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015611ff857601b810190505b601b8160ff16148061200d5750601c8160ff16145b156120795760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561206c573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156121ac576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154149050612234565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141561223357612202836131e2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161490505b5b8091505092915050565b6000806122496133ff565b9050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156123c0576000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146123bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b61267c565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541461245d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506124aa81613410565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461252d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b80915050919050565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661278357612726600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546001613606565b506001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b6060600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561280e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806143476025913960400191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061443f602c913960400191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612918576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806142916026913960400191505060405180910390fd5b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129aa57808201518184015260208101905061298f565b50505050905090810190601f1680156129d75780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156129f857600080fd5b505af1158015612a0c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015612a3657600080fd5b8101908080516040519392919084640100000000821115612a5657600080fd5b83820191506020820185811115612a6c57600080fd5b8251866001820283011164010000000082111715612a8957600080fd5b8083526020830192505050908051906020019080838360005b83811015612abd578082015181840152602081019050612aa2565b50505050905090810190601f168015612aea5780820380516001836020036101000a031916815260200191505b5060405250505090508215612c47577f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba1578082015181840152602081019050612b86565b50505050905090810190601f168015612bce5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c07578082015181840152602081019050612bec565b50505050905090810190601f168015612c345780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15b8091505095945050505050565b60008060009050836000015115612c9957600084602001511415612c7b5760019050612c98565b6000831415612c8d5760019050612c97565b8284602001511190505b5b5b8091505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d2257600080fd5b505afa158015612d36573d6000803e3d6000fd5b505050506040513d6020811015612d4c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415612dca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061438e602b913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b505050508015612f01577feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5050565b600081511415612f1d57612f1832612fbb565b612f5a565b60008151905060005b81811015612f5757612f4a838281518110612f3d57fe5b6020026020010151612fbb565b8080600101915050612f26565b50505b50565b612f6882600061375a565b612f73816000611d0d565b5050565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561305e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561311d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905061323081613410565b915050919050565b60008061324e8385611fb790919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006132b18243612c54565b9050919050565b60606000821415613300576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506133fa565b600082905060005b6000821461332a578080600101915050600a828161332257fe5b049150613308565b60608167ffffffffffffffff8111801561334357600080fd5b506040519080825280601f01601f1916602001820160405280156133765781602001600182028036833780820191505090505b50905060006001830390508593505b600084146133f257600a848161339757fe5b0660300160f81b828280600190039350815181106133b157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816133ea57fe5b049350613385565b819450505050505b919050565b600061340b601461389b565b905090565b600060606040518060200161342490613a8c565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b602083106134be578051825260208201915060208101905060208303925061349b565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401955050505050506040516020818303038152906040529050600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c92505050919050565b60008083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161365c90613a8c565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f59050801580156136b9573d6000803e3d6000fd5b5090508215613750577f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156137e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806142e36035913960400191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015613897577f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b600080600090506138aa613930565b1561392357600083600036905003905061391b600036839060148501926138d393929190613a99565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506139f3565b915050613927565b3390505b80915050919050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156139ec57602c600036905010156139e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061436c6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114613a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b61075180613acd83390190565b60008085851115613aa957600080fd5b83861115613ab657600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a"
  },
  "PromiseMessage": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "PromiseRouter": {
    "abi": [
      {
        "inputs": [],
        "name": "PromiseRouter__bumpCallbackFee_messageUnavailable",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__bumpCallbackFee_valueIsZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__initCallbackFee_valueIsZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__onlyConnext_notConnext",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__process_insufficientCallbackFee",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__process_invalidMessage",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__process_invalidTransferId",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__process_notApprovedRelayer",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__process_notContractCallback",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__send_callbackEmpty",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PromiseRouter__send_returndataEmpty",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "relayer",
            "type": "address"
          }
        ],
        "name": "CallbackExecuted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "addedFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "totalFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "caller",
            "type": "address"
          }
        ],
        "name": "CallbackFeeAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint64",
            "name": "originAndNonce",
            "type": "uint64"
          },
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "origin",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "callbackAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "success",
            "type": "bool"
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
            "name": "message",
            "type": "bytes"
          }
        ],
        "name": "Receive",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint32",
            "name": "domain",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "remote",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "callbackAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "success",
            "type": "bool"
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
            "name": "message",
            "type": "bytes"
          }
        ],
        "name": "Send",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "connext",
            "type": "address"
          }
        ],
        "name": "SetConnext",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "VERSION",
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
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "bumpCallbackFee",
        "outputs": [],
        "stateMutability": "payable",
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
        "name": "callbackFees",
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
        "name": "connext",
        "outputs": [
          {
            "internalType": "contract IConnextHandler",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_router",
            "type": "bytes32"
          }
        ],
        "name": "enrollRemoteRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_origin",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_nonce",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          }
        ],
        "name": "initCallbackFee",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_xAppConnectionManager",
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
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "messageHashes",
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
        "inputs": [],
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
            "name": "transferId",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "process",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "remotes",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_transferId",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "_callbackAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_returnSuccess",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "_returnData",
            "type": "bytes"
          }
        ],
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_connext",
            "type": "address"
          }
        ],
        "name": "setConnext",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_xAppConnectionManager",
            "type": "address"
          }
        ],
        "name": "setXAppConnectionManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "xAppConnectionManager",
        "outputs": [
          {
            "internalType": "contract XAppConnectionManager",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50614238806100206000396000f3fe6080604052600436106101405760003560e01c80638da5cb5b116100b6578063d1851c921161006f578063d1851c9214610411578063d232c2201461043c578063de4b054814610467578063dfefb7d714610492578063fc89d377146104bb578063ffa1ad74146104d757610140565b80638da5cb5b1461032b578063ab2dc3f514610356578063b1f8100d1461037f578063b49c53a7146103a8578063c4d66de8146103d1578063c5b350df146103fa57610140565b80635540f1c0116101085780635540f1c01461022a57806365d82b8b146102465780636a42b8f81461026f5780637080f7711461029a578063715018a6146102d757806383bbb806146102ee57610140565b80633339df96146101455780633cf52ffb1461017057806341bdc8b51461019b5780634d6f2013146101c45780634fa6b634146101ed575b600080fd5b34801561015157600080fd5b5061015a610502565b6040516101679190612bd6565b60405180910390f35b34801561017c57600080fd5b50610185610528565b6040516101929190612c0a565b60405180910390f35b3480156101a757600080fd5b506101c260048036038101906101bd9190612c77565b610532565b005b3480156101d057600080fd5b506101eb60048036038101906101e69190612c77565b6105fd565b005b3480156101f957600080fd5b50610214600480360381019061020f9190612cda565b61070b565b6040516102219190612c0a565b60405180910390f35b610244600480360381019061023f9190612cda565b610723565b005b34801561025257600080fd5b5061026d60048036038101906102689190612de0565b610860565b005b34801561027b57600080fd5b50610284610af6565b6040516102919190612c0a565b60405180910390f35b3480156102a657600080fd5b506102c160048036038101906102bc9190612cda565b610b01565b6040516102ce9190612e89565b60405180910390f35b3480156102e357600080fd5b506102ec610b19565b005b3480156102fa57600080fd5b5061031560048036038101906103109190612ea4565b610cda565b6040516103229190612e89565b60405180910390f35b34801561033757600080fd5b50610340610cf2565b60405161034d9190612ee0565b60405180910390f35b34801561036257600080fd5b5061037d6004803603810190610378919061303c565b610d1b565b005b34801561038b57600080fd5b506103a660048036038101906103a19190612c77565b610ead565b005b3480156103b457600080fd5b506103cf60048036038101906103ca91906130bf565b611088565b005b3480156103dd57600080fd5b506103f860048036038101906103f39190612c77565b611137565b005b34801561040657600080fd5b5061040f6111cd565b005b34801561041d57600080fd5b506104266112ca565b6040516104339190612ee0565b60405180910390f35b34801561044857600080fd5b506104516112f4565b60405161045e919061310e565b60405180910390f35b34801561047357600080fd5b5061047c61134c565b604051610489919061314a565b60405180910390f35b34801561049e57600080fd5b506104b960048036038101906104b49190613165565b611372565b005b6104d560048036038101906104d09190612cda565b611717565b005b3480156104e357600080fd5b506104ec61181c565b6040516104f991906131e1565b60405180910390f35b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105b9576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610684576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f360405160405180910390a250565b60cc6020528060005260406000206000915090505481565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107aa576040517f2c4b07cf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600034036107e4576040517fff4355d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460cc60008381526020019081526020016000206000828254610807919061322b565b92505081905550807fe01346f7c5b12b318c8239d37465281e572012b3f898085a3d2ed142ba2fa15d3460cc6000858152602001908152602001600020543360405161085593929190613281565b60405180910390a250565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108e7576040517f2c4b07cf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008282905003610924576040517f49f88d8300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361098a576040517f8676471700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061099587611821565b905060006109a6878787878761188f565b9050603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3991906132f6565b73ffffffffffffffffffffffffffffffffffffffff1663fa31de018984846040518463ffffffff1660e01b8152600401610a75939291906133ba565b600060405180830381600087803b158015610a8f57600080fd5b505af1158015610aa3573d6000803e3d6000fd5b505050507fa1d84c22c68d469068eaf6be2c49fd6f9120f7e4176ba1dc8027e5e1cdce1f918883898989898988604051610ae4989796959493929190613425565b60405180910390a15050505050505050565b600062093a80905090565b60cb6020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ba0576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060025403610bdc576040517f392cc0fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a8060025442610bee91906134a4565b11610c25576040517f86d4b3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cad576040517f23295ef900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166118eb565b565b60666020528060005260406000206000915090505481565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610d24336119fa565b610d63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5a90613535565b60405180910390fd5b8382610d6f8282611a9f565b610dae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da5906135a1565b60405180910390fd5b6000610dd2610dc7600086611acb90919063ffffffff16565b62ffffff1916611af6565b90506000610de58262ffffff1916611b16565b90506000610df88362ffffff1916611b6d565b90506000610e0b8462ffffff1916611bc1565b90506000610e1e8562ffffff1916611c1b565b9050610e2f8562ffffff1916611c90565b60cb6000868152602001908152602001600020819055508a63ffffffff16610e578c8c611cd3565b67ffffffffffffffff167f878c51ec082a65de8c0a9e68ec34c48c86f4d76ae6d693587eb4420611ae0f51868686868e604051610e989594939291906135c1565b60405180910390a35050505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f34576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610fbe5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610ff5576040517f23780cca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361107c576040517f945f6e7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61108581611cfa565b50565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461110f576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80606660008463ffffffff1663ffffffff168152602001908152602001600020819055505050565b60006111436001611d88565b90508015611167576001600060016101000a81548160ff0219169083151502179055505b61117082611e78565b80156111c95760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516111c0919061365d565b60405180910390a15b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611254576040517f234fe4e200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a806002544261126691906134a4565b1161129d576040517fd39c12bb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112c8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166118eb565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002609854036113b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ae906136c4565b60405180910390fd5b6002609881905550600060cb60008581526020019081526020016000205490506000801b8103611413576040517f3099ed6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061147b611470600086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611acb90919063ffffffff16565b62ffffff1916611af6565b905061148c8162ffffff1916611c90565b82146114c4576040517f1048e03a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638cba8b6a336040518263ffffffff1660e01b815260040161151f9190612ee0565b602060405180830381865afa15801561153c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156091906136f9565b611596576040517fbe95c75000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115a78262ffffff1916611b6d565b90506115b281611f4e565b6115e8576040517fe94778c200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060cc600088815260200190815260200160002054905060cb600088815260200190815260200160002060009055600060cc6000898152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff1663034baf0e8861165c8662ffffff1916611bc1565b61166b8762ffffff1916611c1b565b6040518463ffffffff1660e01b815260040161168993929190613726565b600060405180830381600087803b1580156116a357600080fd5b505af11580156116b7573d6000803e3d6000fd5b50505050867f25639428fb03bb25e9ccc77977e8f4ed022248bae7422d898c57f328d21ad75d336040516116eb9190612ee0565b60405180910390a260008114611706576117053382611f71565b5b505050506001609881905550505050565b60003403611751576040517ffc7f537c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000801b60cb600083815260200190815260200160002054036117a0576040517f53b0f6d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460cc600083815260200190815260200160002060008282546117c3919061322b565b92505081905550807fe01346f7c5b12b318c8239d37465281e572012b3f898085a3d2ed142ba2fa15d3460cc6000858152602001908152602001600020543360405161181193929190613281565b60405180910390a250565b600081565b6000606660008363ffffffff1663ffffffff1681526020019081526020016000205490506000801b810361188a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611881906137b0565b60405180910390fd5b919050565b60606001808111156118a4576118a36137d0565b5b8686866118b25760006118b5565b60015b8686905087876040516020016118d197969594939291906138ef565b604051602081830303815290604052905095945050505050565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635190bc53836040518263ffffffff1660e01b8152600401611a579190612ee0565b602060405180830381865afa158015611a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9891906136f9565b9050919050565b600081606660008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b600080835190506000602085019050611aec8464ffffffffff168284612065565b9250505092915050565b6000611b0f611b04836120cc565b62ffffff191661211e565b9050919050565b6000816001611b46816001811115611b3157611b306137d0565b5b8362ffffff191661217090919063ffffffff16565b50611b64600160208662ffffff191661221e9092919063ffffffff16565b92505050919050565b6000816001611b9d816001811115611b8857611b876137d0565b5b8362ffffff191661217090919063ffffffff16565b50611bb860218562ffffff191661236290919063ffffffff16565b92505050919050565b6000816001611bf1816001811115611bdc57611bdb6137d0565b5b8362ffffff191661217090919063ffffffff16565b506001611c11603560018762ffffff19166123789092919063ffffffff16565b1492505050919050565b6060816001611c4b816001811115611c3657611c356137d0565b5b8362ffffff191661217090919063ffffffff16565b506000611c57856123af565b9050611c86611c7b60568360008962ffffff19166123d5909392919063ffffffff16565b62ffffff191661246c565b9350505050919050565b600080611c9c836124b3565b6bffffffffffffffffffffffff1690506000611cb7846124d3565b6bffffffffffffffffffffffff16905080822092505050919050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b4260028190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a60405160405180910390a250565b60008060019054906101000a900460ff1615611dff5760018260ff16148015611db75750611db530611f4e565b155b611df6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ded906139cf565b60405180910390fd5b60009050611e73565b8160ff1660008054906101000a900460ff1660ff1610611e54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e4b906139cf565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b6000611e846001611d88565b90508015611ea8576001600060016101000a81548160ff0219169083151502179055505b81603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ef16124f3565b8015611f4a5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611f41919061365d565b60405180910390a15b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b80471015611fb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fab90613a3b565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051611fda90613a81565b60006040518083038185875af1925050503d8060008114612017576040519150601f19603f3d011682016040523d82523d6000602084013e61201c565b606091505b5050905080612060576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161205790613b08565b60405180910390fd5b505050565b6000808284612074919061322b565b905060405181111561208557600090505b600081036120b6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506120c5565b6120c185858561254c565b9150505b9392505050565b60006120d78261256d565b1561210e576121076001808111156120f2576120f16137d0565b5b8362ffffff19166125d490919063ffffffff16565b9050612119565b6121166125ef565b90505b919050565b600061212982612617565b612168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215f90613b74565b60405180910390fd5b819050919050565b600061217c8383612659565b61221557600061219a61218e8561267c565b64ffffffffff16612689565b91505060006121af8464ffffffffff16612689565b915050600082826040516020016121c7929190613c83565b6040516020818303038152906040529050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161220c9190613d09565b60405180910390fd5b82905092915050565b6000808260ff1603612235576000801b905061235b565b61223e846124d3565b6bffffffffffffffffffffffff168260ff168461225b919061322b565b11156122d85761229c61226d856124b3565b6bffffffffffffffffffffffff16612284866124d3565b6bffffffffffffffffffffffff16858560ff16612747565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122cf9190613d09565b60405180910390fd5b60208260ff16111561231f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231690613d9d565b60405180910390fd5b60006008830290506000612332866124b3565b6bffffffffffffffffffffffff169050600061234d836127b5565b905080868301511693505050505b9392505050565b600061237083836014612378565b905092915050565b600060088260206123899190613dbd565b6123939190613df1565b60ff166123a185858561221e565b60001c901c90509392505050565b60006123ce603660208462ffffff19166123789092919063ffffffff16565b9050919050565b6000806123e1866124b3565b6bffffffffffffffffffffffff1690506123fa866127e4565b848683612407919061322b565b612411919061322b565b1115612440577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050612464565b848161244c919061322b565b90506124608364ffffffffff168286612065565b9150505b949350505050565b606060008061247a846124d3565b6bffffffffffffffffffffffff169050604051915081925061249f846020840161280e565b506020818301016040528082525050919050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b600060019054906101000a900460ff16612542576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253990613e9e565b60405180910390fd5b61254a612919565b565b600083811760601b905082811760601b905081811760181b90509392505050565b60008061257f8362ffffff19166124d3565b6bffffffffffffffffffffffff169050603681116125a15760009150506125cf565b60006125ac846123af565b9050600081101580156125ca5750818160566125c8919061322b565b145b925050505b919050565b60008260281b60281c811790508160d81b8117905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000905090565b600064ffffffffff6126288361267c565b64ffffffffff160361263d5760009050612654565b6000612648836127e4565b90506040518111199150505b919050565b60008164ffffffffff1661266c8461267c565b64ffffffffff1614905092915050565b60008160d81c9050919050565b6000806000601f90505b600f8160ff1611156126e65760006008826126ae9190613df1565b60ff1685901c90506126bf81612973565b61ffff168417935060108260ff16146126da57601084901b93505b60018203915050612693565b506000600f90505b60ff8160ff1610156127415760006008826127099190613df1565b60ff1685901c905061271a81612973565b61ffff168317925060008260ff161461273557601083901b92505b600182039150506126ee565b50915091565b6060600061275486612689565b915050600061276286612689565b915050600061277086612689565b915050600061277e86612689565b915050838383836040516020016127989493929190614082565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b60006127ef826124d3565b6127f8836124b3565b016bffffffffffffffffffffffff169050919050565b6000612819836129ac565b612858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161284f90614179565b60405180910390fd5b61286183612617565b6128a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128979061420b565b60405180910390fd5b60006128ab846124d3565b6bffffffffffffffffffffffff16905060006128c6856124b3565b6bffffffffffffffffffffffff16905060006040519050848111156128eb5760206060fd5b8285848460045afa5061290e6129008761267c565b64ffffffffff16868561254c565b935050505092915050565b600060019054906101000a900460ff16612968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161295f90613e9e565b60405180910390fd5b612971336118eb565b565b600061298560048360ff16901c6129bf565b60ff168117905060088161ffff16901b90506129a0826129bf565b60ff1681179050919050565b60006129b782612b1f565b159050919050565b60008060f08317905060f08160ff16036129dd576030915050612b1a565b60f18160ff16036129f2576031915050612b1a565b60f28160ff1603612a07576032915050612b1a565b60f38160ff1603612a1c576033915050612b1a565b60f48160ff1603612a31576034915050612b1a565b60f58160ff1603612a46576035915050612b1a565b60f68160ff1603612a5b576036915050612b1a565b60f78160ff1603612a70576037915050612b1a565b60f88160ff1603612a85576038915050612b1a565b60f98160ff1603612a9a576039915050612b1a565b60fa8160ff1603612aaf576061915050612b1a565b60fb8160ff1603612ac4576062915050612b1a565b60fc8160ff1603612ad9576063915050612b1a565b60fd8160ff1603612aee576064915050612b1a565b60fe8160ff1603612b03576065915050612b1a565b60ff8160ff1603612b18576066915050612b1a565b505b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000062ffffff19168262ffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612b9c612b97612b9284612b57565b612b77565b612b57565b9050919050565b6000612bae82612b81565b9050919050565b6000612bc082612ba3565b9050919050565b612bd081612bb5565b82525050565b6000602082019050612beb6000830184612bc7565b92915050565b6000819050919050565b612c0481612bf1565b82525050565b6000602082019050612c1f6000830184612bfb565b92915050565b6000604051905090565b600080fd5b600080fd5b6000612c4482612b57565b9050919050565b612c5481612c39565b8114612c5f57600080fd5b50565b600081359050612c7181612c4b565b92915050565b600060208284031215612c8d57612c8c612c2f565b5b6000612c9b84828501612c62565b91505092915050565b6000819050919050565b612cb781612ca4565b8114612cc257600080fd5b50565b600081359050612cd481612cae565b92915050565b600060208284031215612cf057612cef612c2f565b5b6000612cfe84828501612cc5565b91505092915050565b600063ffffffff82169050919050565b612d2081612d07565b8114612d2b57600080fd5b50565b600081359050612d3d81612d17565b92915050565b60008115159050919050565b612d5881612d43565b8114612d6357600080fd5b50565b600081359050612d7581612d4f565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112612da057612d9f612d7b565b5b8235905067ffffffffffffffff811115612dbd57612dbc612d80565b5b602083019150836001820283011115612dd957612dd8612d85565b5b9250929050565b60008060008060008060a08789031215612dfd57612dfc612c2f565b5b6000612e0b89828a01612d2e565b9650506020612e1c89828a01612cc5565b9550506040612e2d89828a01612c62565b9450506060612e3e89828a01612d66565b935050608087013567ffffffffffffffff811115612e5f57612e5e612c34565b5b612e6b89828a01612d8a565b92509250509295509295509295565b612e8381612ca4565b82525050565b6000602082019050612e9e6000830184612e7a565b92915050565b600060208284031215612eba57612eb9612c2f565b5b6000612ec884828501612d2e565b91505092915050565b612eda81612c39565b82525050565b6000602082019050612ef56000830184612ed1565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612f4982612f00565b810181811067ffffffffffffffff82111715612f6857612f67612f11565b5b80604052505050565b6000612f7b612c25565b9050612f878282612f40565b919050565b600067ffffffffffffffff821115612fa757612fa6612f11565b5b612fb082612f00565b9050602081019050919050565b82818337600083830152505050565b6000612fdf612fda84612f8c565b612f71565b905082815260208101848484011115612ffb57612ffa612efb565b5b613006848285612fbd565b509392505050565b600082601f83011261302357613022612d7b565b5b8135613033848260208601612fcc565b91505092915050565b6000806000806080858703121561305657613055612c2f565b5b600061306487828801612d2e565b945050602061307587828801612d2e565b935050604061308687828801612cc5565b925050606085013567ffffffffffffffff8111156130a7576130a6612c34565b5b6130b38782880161300e565b91505092959194509250565b600080604083850312156130d6576130d5612c2f565b5b60006130e485828601612d2e565b92505060206130f585828601612cc5565b9150509250929050565b61310881612d43565b82525050565b600060208201905061312360008301846130ff565b92915050565b600061313482612ba3565b9050919050565b61314481613129565b82525050565b600060208201905061315f600083018461313b565b92915050565b60008060006040848603121561317e5761317d612c2f565b5b600061318c86828701612cc5565b935050602084013567ffffffffffffffff8111156131ad576131ac612c34565b5b6131b986828701612d8a565b92509250509250925092565b600060ff82169050919050565b6131db816131c5565b82525050565b60006020820190506131f660008301846131d2565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061323682612bf1565b915061324183612bf1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613276576132756131fc565b5b828201905092915050565b60006060820190506132966000830186612bfb565b6132a36020830185612bfb565b6132b06040830184612ed1565b949350505050565b60006132c382612c39565b9050919050565b6132d3816132b8565b81146132de57600080fd5b50565b6000815190506132f0816132ca565b92915050565b60006020828403121561330c5761330b612c2f565b5b600061331a848285016132e1565b91505092915050565b61332c81612d07565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561336c578082015181840152602081019050613351565b8381111561337b576000848401525b50505050565b600061338c82613332565b613396818561333d565b93506133a681856020860161334e565b6133af81612f00565b840191505092915050565b60006060820190506133cf6000830186613323565b6133dc6020830185612e7a565b81810360408301526133ee8184613381565b9050949350505050565b6000613404838561333d565b9350613411838584612fbd565b61341a83612f00565b840190509392505050565b600060e08201905061343a600083018b613323565b613447602083018a612e7a565b6134546040830189612e7a565b6134616060830188612ed1565b61346e60808301876130ff565b81810360a08301526134818185876133f8565b905081810360c08301526134958184613381565b90509998505050505050505050565b60006134af82612bf1565b91506134ba83612bf1565b9250828210156134cd576134cc6131fc565b5b828203905092915050565b600082825260208201905092915050565b7f217265706c696361000000000000000000000000000000000000000000000000600082015250565b600061351f6008836134d8565b915061352a826134e9565b602082019050919050565b6000602082019050818103600083015261354e81613512565b9050919050565b7f2172656d6f746520726f75746572000000000000000000000000000000000000600082015250565b600061358b600e836134d8565b915061359682613555565b602082019050919050565b600060208201905081810360008301526135ba8161357e565b9050919050565b600060a0820190506135d66000830188612e7a565b6135e36020830187612ed1565b6135f060408301866130ff565b81810360608301526136028185613381565b905081810360808301526136168184613381565b90509695505050505050565b6000819050919050565b600061364761364261363d84613622565b612b77565b6131c5565b9050919050565b6136578161362c565b82525050565b6000602082019050613672600083018461364e565b92915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006136ae601f836134d8565b91506136b982613678565b602082019050919050565b600060208201905081810360008301526136dd816136a1565b9050919050565b6000815190506136f381612d4f565b92915050565b60006020828403121561370f5761370e612c2f565b5b600061371d848285016136e4565b91505092915050565b600060608201905061373b6000830186612e7a565b61374860208301856130ff565b818103604083015261375a8184613381565b9050949350505050565b7f2172656d6f746500000000000000000000000000000000000000000000000000600082015250565b600061379a6007836134d8565b91506137a582613764565b602082019050919050565b600060208201905081810360008301526137c98161378d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008160f81b9050919050565b6000613817826137ff565b9050919050565b61382f61382a826131c5565b61380c565b82525050565b6000819050919050565b61385061384b82612ca4565b613835565b82525050565b60008160601b9050919050565b600061386e82613856565b9050919050565b600061388082613863565b9050919050565b61389861389382612c39565b613875565b82525050565b6000819050919050565b6138b96138b482612bf1565b61389e565b82525050565b600081905092915050565b60006138d683856138bf565b93506138e3838584612fbd565b82840190509392505050565b60006138fb828a61381e565b60018201915061390b828961383f565b60208201915061391b8288613887565b60148201915061392b828761381e565b60018201915061393b82866138a8565b60208201915061394c8284866138ca565b915081905098975050505050505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006139b9602e836134d8565b91506139c48261395d565b604082019050919050565b600060208201905081810360008301526139e8816139ac565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000613a25601d836134d8565b9150613a30826139ef565b602082019050919050565b60006020820190508181036000830152613a5481613a18565b9050919050565b50565b6000613a6b6000836138bf565b9150613a7682613a5b565b600082019050919050565b6000613a8c82613a5e565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000613af2603a836134d8565b9150613afd82613a96565b604082019050919050565b60006020820190508181036000830152613b2181613ae5565b9050919050565b7f56616c696469747920617373657274696f6e206661696c656400000000000000600082015250565b6000613b5e6019836134d8565b9150613b6982613b28565b602082019050919050565b60006020820190508181036000830152613b8d81613b51565b9050919050565b600081905092915050565b7f5479706520617373657274696f6e206661696c65642e20476f74203078000000600082015250565b6000613bd5601d83613b94565b9150613be082613b9f565b601d82019050919050565b600069ffffffffffffffffffff82169050919050565b60008160b01b9050919050565b6000613c1982613c01565b9050919050565b613c31613c2c82613beb565b613c0e565b82525050565b7f2e20457870656374656420307800000000000000000000000000000000000000600082015250565b6000613c6d600d83613b94565b9150613c7882613c37565b600d82019050919050565b6000613c8e82613bc8565b9150613c9a8285613c20565b600a82019150613ca982613c60565b9150613cb58284613c20565b600a820191508190509392505050565b600081519050919050565b6000613cdb82613cc5565b613ce581856134d8565b9350613cf581856020860161334e565b613cfe81612f00565b840191505092915050565b60006020820190508181036000830152613d238184613cd0565b905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b6000613d87603a836134d8565b9150613d9282613d2b565b604082019050919050565b60006020820190508181036000830152613db681613d7a565b9050919050565b6000613dc8826131c5565b9150613dd3836131c5565b925082821015613de657613de56131fc565b5b828203905092915050565b6000613dfc826131c5565b9150613e07836131c5565b92508160ff0483118215151615613e2157613e206131fc565b5b828202905092915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613e88602b836134d8565b9150613e9382613e2c565b604082019050919050565b60006020820190508181036000830152613eb781613e7b565b9050919050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b6000613f1a603583613b94565b9150613f2582613ebe565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b6000613f5a82613f42565b9050919050565b613f72613f6d82613f30565b613f4f565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b6000613fae600f83613b94565b9150613fb982613f78565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b6000614020602183613b94565b915061402b82613fc4565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b600061406c600183613b94565b915061407782614036565b600182019050919050565b600061408d82613f0d565b91506140998287613f61565b6006820191506140a882613fa1565b91506140b48286613f61565b6006820191506140c382614013565b91506140cf8285613f61565b6006820191506140de82613fa1565b91506140ea8284613f61565b6006820191506140f98261405f565b915081905095945050505050565b7f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460008201527f6572206465726566000000000000000000000000000000000000000000000000602082015250565b60006141636028836134d8565b915061416e82614107565b604082019050919050565b6000602082019050818103600083015261419281614156565b9050919050565b7f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60008201527f696e746572206465726566000000000000000000000000000000000000000000602082015250565b60006141f5602b836134d8565b915061420082614199565b604082019050919050565b60006020820190508181036000830152614224816141e8565b905091905056fea164736f6c634300080f000a"
  },
  "ProposedOwnable": {
    "abi": [
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "ProposedOwnableUpgradeable": {
    "abi": [
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
    "addresses": {},
    "byteCode": "0x"
  },
  "QueueManager": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_item",
            "type": "bytes32"
          }
        ],
        "name": "queueContains",
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
        "name": "queueEnd",
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
        "inputs": [],
        "name": "queueLength",
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
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506104a1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632bef289214610046578063ab91c7b014610076578063f6d1610214610094575b600080fd5b610060600480360381019061005b91906102c6565b6100b2565b60405161006d919061030e565b60405180910390f35b61007e6100cf565b60405161008b9190610342565b60405180910390f35b61009c6100e0565b6040516100a9919061036c565b60405180910390f35b60006100c88260016100f190919063ffffffff16565b9050919050565b60006100db60016101a8565b905090565b60006100ec6001610206565b905090565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16811161019c578284600101600083815260200190815260200160002054036101895760019150506101a2565b8080610194906103b6565b91505061012a565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506101fd8282610257565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600184610267919061041a565b6102719190610460565b6fffffffffffffffffffffffffffffffff16905092915050565b600080fd5b6000819050919050565b6102a381610290565b81146102ae57600080fd5b50565b6000813590506102c08161029a565b92915050565b6000602082840312156102dc576102db61028b565b5b60006102ea848285016102b1565b91505092915050565b60008115159050919050565b610308816102f3565b82525050565b600060208201905061032360008301846102ff565b92915050565b6000819050919050565b61033c81610329565b82525050565b60006020820190506103576000830184610333565b92915050565b61036681610290565b82525050565b6000602082019050610381600083018461035d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103c182610329565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036103f3576103f2610387565b5b600182019050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6000610425826103fe565b9150610430836103fe565b9250826fffffffffffffffffffffffffffffffff0382111561045557610454610387565b5b828201905092915050565b600061046b826103fe565b9150610476836103fe565b92508282101561048957610488610387565b5b82820390509291505056fea164736f6c634300080f000a"
  },
  "ReentrancyGuard": {
    "abi": [
      {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "ReentrancyGuardUpgradeable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "RelayerFeeMessage": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "RelayerFeeRouter": {
    "abi": [
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "RelayerFeeRouter__onlyConnext_notConnext",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "RelayerFeeRouter__send_claimEmpty",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "RelayerFeeRouter__send_recipientEmpty",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint64",
            "name": "originAndNonce",
            "type": "uint64"
          },
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "origin",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "transferIds",
            "type": "bytes32[]"
          }
        ],
        "name": "Receive",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint32",
            "name": "domain",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "transferIds",
            "type": "bytes32[]"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "remote",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          }
        ],
        "name": "Send",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "connext",
            "type": "address"
          }
        ],
        "name": "SetConnext",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "VERSION",
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
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "connext",
        "outputs": [
          {
            "internalType": "contract IConnextHandler",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_router",
            "type": "bytes32"
          }
        ],
        "name": "enrollRemoteRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_origin",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_nonce",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_xAppConnectionManager",
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
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "remotes",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "bytes32[]",
            "name": "_transferIds",
            "type": "bytes32[]"
          }
        ],
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_connext",
            "type": "address"
          }
        ],
        "name": "setConnext",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_xAppConnectionManager",
            "type": "address"
          }
        ],
        "name": "setXAppConnectionManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "xAppConnectionManager",
        "outputs": [
          {
            "internalType": "contract XAppConnectionManager",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50613454806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b1f8100d116100a2578063d1851c9211610071578063d1851c921461027f578063d232c2201461029d578063d7d680a3146102bb578063de4b0548146102d7578063ffa1ad74146102f557610116565b8063b1f8100d14610221578063b49c53a71461023d578063c4d66de814610259578063c5b350df1461027557610116565b80636a42b8f8116100e95780636a42b8f81461018f578063715018a6146101ad57806383bbb806146101b75780638da5cb5b146101e7578063ab2dc3f51461020557610116565b80633339df961461011b5780633cf52ffb1461013957806341bdc8b5146101575780634d6f201314610173575b600080fd5b610123610313565b6040516101309190612054565b60405180910390f35b610141610339565b60405161014e9190612088565b60405180910390f35b610171600480360381019061016c91906120f5565b610343565b005b61018d600480360381019061018891906120f5565b61040e565b005b61019761051c565b6040516101a49190612088565b60405180910390f35b6101b5610527565b005b6101d160048036038101906101cc919061215e565b6106e8565b6040516101de91906121a4565b60405180910390f35b6101ef610700565b6040516101fc91906121ce565b60405180910390f35b61021f600480360381019061021a919061235b565b610729565b005b61023b600480360381019061023691906120f5565b61090b565b005b610257600480360381019061025291906123de565b610ae6565b005b610273600480360381019061026e91906120f5565b610b95565b005b61027d610c2b565b005b610287610d28565b60405161029491906121ce565b60405180910390f35b6102a5610d52565b6040516102b29190612439565b60405180910390f35b6102d560048036038101906102d091906124b4565b610daa565b005b6102df611038565b6040516102ec9190612549565b60405180910390f35b6102fd61105e565b60405161030a9190612580565b60405180910390f35b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103ca576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610495576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80609860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f360405160405180910390a250565b600062093a80905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105ae576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600254036105ea576040517f392cc0fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a80600254426105fc91906125ca565b11610633576040517f86d4b3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106bb576040517f23295ef900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e6600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611063565b565b60666020528060005260406000206000915090505481565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61073233611172565b610771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107689061265b565b60405180910390fd5b838261077d8282611217565b6107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b3906126c7565b60405180910390fd5b60006107e06107d560008661124390919063ffffffff16565b62ffffff191661126e565b905060006107f38262ffffff191661128e565b905060006108068362ffffff19166112e2565b9050609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d7aada8183836040518363ffffffff1660e01b81526004016108659291906127a5565b600060405180830381600087803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff168963ffffffff166108bf8b8b6113fa565b67ffffffffffffffff167fb29810b17f96b207e4d6c91fd73ec7ab882db28c3a239f2eb6c7c801c43d003b846040516108f891906127d5565b60405180910390a4505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610992576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610a1c5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610a53576040517f23780cca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ada576040517f945f6e7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ae381611421565b50565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b6d576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80606660008463ffffffff1663ffffffff168152602001908152602001600020819055505050565b6000610ba160016114af565b90508015610bc5576001600060016101000a81548160ff0219169083151502179055505b610bce8261159f565b8015610c275760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610c1e9190612832565b60405180910390a15b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cb2576040517f234fe4e200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a8060025442610cc491906125ca565b11610cfb576040517fd39c12bb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d26600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611063565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e31576040517f14e189b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008282905003610e6e576040517f5aef8ded00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ed4576040517ff7afa16f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610edf85611675565b90506000610eee8585856116e3565b9050603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f81919061288b565b73ffffffffffffffffffffffffffffffffffffffff1663fa31de018784846040518463ffffffff1660e01b8152600401610fbd9392919061294f565b600060405180830381600087803b158015610fd757600080fd5b505af1158015610feb573d6000803e3d6000fd5b505050507f90d6f02f078dba10aa43c39bf7a3d3bc9629a280b078d473da5486c6531ec641868686868686604051611028969594939291906129ee565b60405180910390a1505050505050565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635190bc53836040518263ffffffff1660e01b81526004016111cf91906121ce565b602060405180830381865afa1580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112109190612a7d565b9050919050565b600081606660008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b6000808351905060006020850190506112648464ffffffffff16828461172b565b9250505092915050565b600061128761127c83611792565b62ffffff19166117e4565b9050919050565b60008160016112be8160018111156112a9576112a8612aaa565b5b8362ffffff191661183690919063ffffffff16565b506112d960018562ffffff19166118e490919063ffffffff16565b92505050919050565b60608160016113128160018111156112fd576112fc612aaa565b5b8362ffffff191661183690919063ffffffff16565b506000611332601560208762ffffff19166118fa9092919063ffffffff16565b905060008167ffffffffffffffff8111156113505761134f612230565b5b60405190808252806020026020018201604052801561137e5781602001602082028036833780820191505090505b50905060005b828110156113ed576113c3602060ff168261139f9190612ad9565b60356113ab9190612b33565b60208962ffffff19166119319092919063ffffffff16565b8282815181106113d6576113d5612b89565b5b602002602001018181525050806001019050611384565b5080945050505050919050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b4260028190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a60405160405180910390a250565b60008060019054906101000a900460ff16156115265760018260ff161480156114de57506114dc30611a75565b155b61151d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151490612c2a565b60405180910390fd5b6000905061159a565b8160ff1660008054906101000a900460ff1660ff161061157b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157290612c2a565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b60006115ab60016114af565b905080156115cf576001600060016101000a81548160ff0219169083151502179055505b81603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611618611a98565b80156116715760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516116689190612832565b60405180910390a15b5050565b6000606660008363ffffffff1663ffffffff1681526020019081526020016000205490506000801b81036116de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d590612c96565b60405180910390fd5b919050565b60606001808111156116f8576116f7612aaa565b5b84848490508585604051602001611713959493929190612dbc565b60405160208183030381529060405290509392505050565b600080828461173a9190612b33565b905060405181111561174b57600090505b6000810361177c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061178b565b611787858585611af1565b9150505b9392505050565b600061179d82611b12565b156117d4576117cd6001808111156117b8576117b7612aaa565b5b8362ffffff1916611b6890919063ffffffff16565b90506117df565b6117dc611b83565b90505b919050565b60006117ef82611bab565b61182e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182590612e54565b60405180910390fd5b819050919050565b60006118428383611bed565b6118db57600061186061185485611c10565b64ffffffffff16611c1d565b91505060006118758464ffffffffff16611c1d565b9150506000828260405160200161188d929190612f63565b6040516020818303038152906040529050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118d29190612fe9565b60405180910390fd5b82905092915050565b60006118f2838360146118fa565b905092915050565b6000600882602061190b919061300b565b611915919061303f565b60ff16611923858585611931565b60001c901c90509392505050565b6000808260ff1603611948576000801b9050611a6e565b61195184611cdb565b6bffffffffffffffffffffffff168260ff168461196e9190612b33565b11156119eb576119af61198085611cfb565b6bffffffffffffffffffffffff1661199786611cdb565b6bffffffffffffffffffffffff16858560ff16611d1b565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e29190612fe9565b60405180910390fd5b60208260ff161115611a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a29906130ec565b60405180910390fd5b60006008830290506000611a4586611cfb565b6bffffffffffffffffffffffff1690506000611a6083611d89565b905080868301511693505050505b9392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611ae7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ade9061317e565b60405180910390fd5b611aef611db8565b565b600083811760601b905082811760601b905081811760181b90509392505050565b600080611b248362ffffff1916611cdb565b6bffffffffffffffffffffffff16905060558110158015611b6057506000602060ff16603583611b5491906125ca565b611b5e91906131cd565b145b915050919050565b60008260281b60281c811790508160d81b8117905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000905090565b600064ffffffffff611bbc83611c10565b64ffffffffff1603611bd15760009050611be8565b6000611bdc83611e12565b90506040518111199150505b919050565b60008164ffffffffff16611c0084611c10565b64ffffffffff1614905092915050565b60008160d81c9050919050565b6000806000601f90505b600f8160ff161115611c7a576000600882611c42919061303f565b60ff1685901c9050611c5381611e3c565b61ffff168417935060108260ff1614611c6e57601084901b93505b60018203915050611c27565b506000600f90505b60ff8160ff161015611cd5576000600882611c9d919061303f565b60ff1685901c9050611cae81611e3c565b61ffff168317925060008260ff1614611cc957601083901b92505b60018203915050611c82565b50915091565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b60606000611d2886611c1d565b9150506000611d3686611c1d565b9150506000611d4486611c1d565b9150506000611d5286611c1d565b91505083838383604051602001611d6c94939291906133c2565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b600060019054906101000a900460ff16611e07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dfe9061317e565b60405180910390fd5b611e1033611063565b565b6000611e1d82611cdb565b611e2683611cfb565b016bffffffffffffffffffffffff169050919050565b6000611e4e60048360ff16901c611e75565b60ff168117905060088161ffff16901b9050611e6982611e75565b60ff1681179050919050565b60008060f08317905060f08160ff1603611e93576030915050611fd0565b60f18160ff1603611ea8576031915050611fd0565b60f28160ff1603611ebd576032915050611fd0565b60f38160ff1603611ed2576033915050611fd0565b60f48160ff1603611ee7576034915050611fd0565b60f58160ff1603611efc576035915050611fd0565b60f68160ff1603611f11576036915050611fd0565b60f78160ff1603611f26576037915050611fd0565b60f88160ff1603611f3b576038915050611fd0565b60f98160ff1603611f50576039915050611fd0565b60fa8160ff1603611f65576061915050611fd0565b60fb8160ff1603611f7a576062915050611fd0565b60fc8160ff1603611f8f576063915050611fd0565b60fd8160ff1603611fa4576064915050611fd0565b60fe8160ff1603611fb9576065915050611fd0565b60ff8160ff1603611fce576066915050611fd0565b505b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061201a61201561201084611fd5565b611ff5565b611fd5565b9050919050565b600061202c82611fff565b9050919050565b600061203e82612021565b9050919050565b61204e81612033565b82525050565b60006020820190506120696000830184612045565b92915050565b6000819050919050565b6120828161206f565b82525050565b600060208201905061209d6000830184612079565b92915050565b6000604051905090565b600080fd5b600080fd5b60006120c282611fd5565b9050919050565b6120d2816120b7565b81146120dd57600080fd5b50565b6000813590506120ef816120c9565b92915050565b60006020828403121561210b5761210a6120ad565b5b6000612119848285016120e0565b91505092915050565b600063ffffffff82169050919050565b61213b81612122565b811461214657600080fd5b50565b60008135905061215881612132565b92915050565b600060208284031215612174576121736120ad565b5b600061218284828501612149565b91505092915050565b6000819050919050565b61219e8161218b565b82525050565b60006020820190506121b96000830184612195565b92915050565b6121c8816120b7565b82525050565b60006020820190506121e360008301846121bf565b92915050565b6121f28161218b565b81146121fd57600080fd5b50565b60008135905061220f816121e9565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122688261221f565b810181811067ffffffffffffffff8211171561228757612286612230565b5b80604052505050565b600061229a6120a3565b90506122a6828261225f565b919050565b600067ffffffffffffffff8211156122c6576122c5612230565b5b6122cf8261221f565b9050602081019050919050565b82818337600083830152505050565b60006122fe6122f9846122ab565b612290565b90508281526020810184848401111561231a5761231961221a565b5b6123258482856122dc565b509392505050565b600082601f83011261234257612341612215565b5b81356123528482602086016122eb565b91505092915050565b60008060008060808587031215612375576123746120ad565b5b600061238387828801612149565b945050602061239487828801612149565b93505060406123a587828801612200565b925050606085013567ffffffffffffffff8111156123c6576123c56120b2565b5b6123d28782880161232d565b91505092959194509250565b600080604083850312156123f5576123f46120ad565b5b600061240385828601612149565b925050602061241485828601612200565b9150509250929050565b60008115159050919050565b6124338161241e565b82525050565b600060208201905061244e600083018461242a565b92915050565b600080fd5b600080fd5b60008083601f84011261247457612473612215565b5b8235905067ffffffffffffffff81111561249157612490612454565b5b6020830191508360208202830111156124ad576124ac612459565b5b9250929050565b600080600080606085870312156124ce576124cd6120ad565b5b60006124dc87828801612149565b94505060206124ed878288016120e0565b935050604085013567ffffffffffffffff81111561250e5761250d6120b2565b5b61251a8782880161245e565b925092505092959194509250565b600061253382612021565b9050919050565b61254381612528565b82525050565b600060208201905061255e600083018461253a565b92915050565b600060ff82169050919050565b61257a81612564565b82525050565b60006020820190506125956000830184612571565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125d58261206f565b91506125e08361206f565b9250828210156125f3576125f261259b565b5b828203905092915050565b600082825260208201905092915050565b7f217265706c696361000000000000000000000000000000000000000000000000600082015250565b60006126456008836125fe565b91506126508261260f565b602082019050919050565b6000602082019050818103600083015261267481612638565b9050919050565b7f2172656d6f746520726f75746572000000000000000000000000000000000000600082015250565b60006126b1600e836125fe565b91506126bc8261267b565b602082019050919050565b600060208201905081810360008301526126e0816126a4565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61271c8161218b565b82525050565b600061272e8383612713565b60208301905092915050565b6000602082019050919050565b6000612752826126e7565b61275c81856126f2565b935061276783612703565b8060005b8381101561279857815161277f8882612722565b975061278a8361273a565b92505060018101905061276b565b5085935050505092915050565b60006040820190506127ba60008301856121bf565b81810360208301526127cc8184612747565b90509392505050565b600060208201905081810360008301526127ef8184612747565b905092915050565b6000819050919050565b600061281c612817612812846127f7565b611ff5565b612564565b9050919050565b61282c81612801565b82525050565b60006020820190506128476000830184612823565b92915050565b6000612858826120b7565b9050919050565b6128688161284d565b811461287357600080fd5b50565b6000815190506128858161285f565b92915050565b6000602082840312156128a1576128a06120ad565b5b60006128af84828501612876565b91505092915050565b6128c181612122565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129015780820151818401526020810190506128e6565b83811115612910576000848401525b50505050565b6000612921826128c7565b61292b81856128d2565b935061293b8185602086016128e3565b6129448161221f565b840191505092915050565b600060608201905061296460008301866128b8565b6129716020830185612195565b81810360408301526129838184612916565b9050949350505050565b600080fd5b600061299e83856126f2565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156129d1576129d061298d565b5b6020830292506129e28385846122dc565b82840190509392505050565b600060a082019050612a0360008301896128b8565b612a1060208301886121bf565b8181036040830152612a23818688612992565b9050612a326060830185612195565b8181036080830152612a448184612916565b9050979650505050505050565b612a5a8161241e565b8114612a6557600080fd5b50565b600081519050612a7781612a51565b92915050565b600060208284031215612a9357612a926120ad565b5b6000612aa184828501612a68565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000612ae48261206f565b9150612aef8361206f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612b2857612b2761259b565b5b828202905092915050565b6000612b3e8261206f565b9150612b498361206f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612b7e57612b7d61259b565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612c14602e836125fe565b9150612c1f82612bb8565b604082019050919050565b60006020820190508181036000830152612c4381612c07565b9050919050565b7f2172656d6f746500000000000000000000000000000000000000000000000000600082015250565b6000612c806007836125fe565b9150612c8b82612c4a565b602082019050919050565b60006020820190508181036000830152612caf81612c73565b9050919050565b60008160f81b9050919050565b6000612cce82612cb6565b9050919050565b612ce6612ce182612564565b612cc3565b82525050565b60008160601b9050919050565b6000612d0482612cec565b9050919050565b6000612d1682612cf9565b9050919050565b612d2e612d29826120b7565b612d0b565b82525050565b6000819050919050565b612d4f612d4a8261206f565b612d34565b82525050565b600081905092915050565b6000612d6c8385612d55565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612d9f57612d9e61298d565b5b602083029250612db08385846122dc565b82840190509392505050565b6000612dc88288612cd5565b600182019150612dd88287612d1d565b601482019150612de88286612d3e565b602082019150612df9828486612d60565b91508190509695505050505050565b7f56616c696469747920617373657274696f6e206661696c656400000000000000600082015250565b6000612e3e6019836125fe565b9150612e4982612e08565b602082019050919050565b60006020820190508181036000830152612e6d81612e31565b9050919050565b600081905092915050565b7f5479706520617373657274696f6e206661696c65642e20476f74203078000000600082015250565b6000612eb5601d83612e74565b9150612ec082612e7f565b601d82019050919050565b600069ffffffffffffffffffff82169050919050565b60008160b01b9050919050565b6000612ef982612ee1565b9050919050565b612f11612f0c82612ecb565b612eee565b82525050565b7f2e20457870656374656420307800000000000000000000000000000000000000600082015250565b6000612f4d600d83612e74565b9150612f5882612f17565b600d82019050919050565b6000612f6e82612ea8565b9150612f7a8285612f00565b600a82019150612f8982612f40565b9150612f958284612f00565b600a820191508190509392505050565b600081519050919050565b6000612fbb82612fa5565b612fc581856125fe565b9350612fd58185602086016128e3565b612fde8161221f565b840191505092915050565b600060208201905081810360008301526130038184612fb0565b905092915050565b600061301682612564565b915061302183612564565b9250828210156130345761303361259b565b5b828203905092915050565b600061304a82612564565b915061305583612564565b92508160ff048311821515161561306f5761306e61259b565b5b828202905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b60006130d6603a836125fe565b91506130e18261307a565b604082019050919050565b60006020820190508181036000830152613105816130c9565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613168602b836125fe565b91506131738261310c565b604082019050919050565b600060208201905081810360008301526131978161315b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006131d88261206f565b91506131e38361206f565b9250826131f3576131f261319e565b5b828206905092915050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b600061325a603583612e74565b9150613265826131fe565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b600061329a82613282565b9050919050565b6132b26132ad82613270565b61328f565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b60006132ee600f83612e74565b91506132f9826132b8565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b6000613360602183612e74565b915061336b82613304565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b60006133ac600183612e74565b91506133b782613376565b600182019050919050565b60006133cd8261324d565b91506133d982876132a1565b6006820191506133e8826132e1565b91506133f482866132a1565b60068201915061340382613353565b915061340f82856132a1565b60068201915061341e826132e1565b915061342a82846132a1565b6006820191506134398261339f565b91508190509594505050505056fea164736f6c634300080f000a"
  },
  "Replica": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_localDomain",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_processGas",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_reserveGas",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes32[2]",
            "name": "newRoot",
            "type": "bytes32[2]"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature2",
            "type": "bytes"
          }
        ],
        "name": "DoubleUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "internalType": "address",
            "name": "oldUpdater",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newUpdater",
            "type": "address"
          }
        ],
        "name": "NewUpdater",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "messageHash",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "indexed": true,
            "internalType": "bytes",
            "name": "returnData",
            "type": "bytes"
          }
        ],
        "name": "Process",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "root",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "previousConfirmAt",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newConfirmAt",
            "type": "uint256"
          }
        ],
        "name": "SetConfirmation",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timeout",
            "type": "uint256"
          }
        ],
        "name": "SetOptimisticTimeout",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "homeDomain",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "oldRoot",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newRoot",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "Update",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "PROCESS_GAS",
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
        "name": "RESERVE_GAS",
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
        "name": "VERSION",
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
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          }
        ],
        "name": "acceptableRoot",
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
        "name": "committedRoot",
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
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "confirmAt",
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
            "name": "_oldRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[2]",
            "name": "_newRoot",
            "type": "bytes32[2]"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "_signature2",
            "type": "bytes"
          }
        ],
        "name": "doubleUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "homeDomainHash",
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
            "internalType": "uint32",
            "name": "_remoteDomain",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_updater",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "_committedRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_optimisticSeconds",
            "type": "uint256"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "localDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
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
        "name": "messages",
        "outputs": [
          {
            "internalType": "enum Replica.MessageStatus",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "optimisticSeconds",
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
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "process",
        "outputs": [
          {
            "internalType": "bool",
            "name": "_success",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_leaf",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32[32]",
            "name": "_proof",
            "type": "bytes32[32]"
          },
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "prove",
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
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          },
          {
            "internalType": "bytes32[32]",
            "name": "_proof",
            "type": "bytes32[32]"
          },
          {
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
          }
        ],
        "name": "proveAndProcess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "remoteDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_root",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "_confirmAt",
            "type": "uint256"
          }
        ],
        "name": "setConfirmation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_optimisticSeconds",
            "type": "uint256"
          }
        ],
        "name": "setOptimisticTimeout",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_updater",
            "type": "address"
          }
        ],
        "name": "setUpdater",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "state",
        "outputs": [
          {
            "internalType": "enum NomadBase.States",
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
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "_oldRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "_newRoot",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "update",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "updater",
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
    "addresses": {},
    "byteCode": "0x60e06040523480156200001157600080fd5b50604051620045dd380380620045dd833981810160405281019062000037919062000178565b828063ffffffff1660808163ffffffff168152505050620cf85082101562000096576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200008d9062000235565b60405180910390fd5b613a98811015620000de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000d590620002a7565b60405180910390fd5b8160a081815250508060c08181525050505050620002c9565b600080fd5b600063ffffffff82169050919050565b6200011781620000fc565b81146200012357600080fd5b50565b60008151905062000137816200010c565b92915050565b6000819050919050565b62000152816200013d565b81146200015e57600080fd5b50565b600081519050620001728162000147565b92915050565b600080600060608486031215620001945762000193620000f7565b5b6000620001a48682870162000126565b9350506020620001b78682870162000161565b9250506040620001ca8682870162000161565b9150509250925092565b600082825260208201905092915050565b7f2170726f63657373206761730000000000000000000000000000000000000000600082015250565b60006200021d600c83620001d4565b91506200022a82620001e5565b602082019050919050565b6000602082019050818103600083015262000250816200020e565b9050919050565b7f2172657365727665206761730000000000000000000000000000000000000000600082015250565b60006200028f600c83620001d4565b91506200029c8262000257565b602082019050919050565b60006020820190508181036000830152620002c28162000280565b9050919050565b60805160a05160c0516142c862000315600039600081816107670152610cee015260008181610d0f01528181610d9901526111fb015260008181610ac40152610b2b01526142c86000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638d3638f4116100de578063b31c01fb11610097578063df034cd011610071578063df034cd014610428578063e7e7a7b714610446578063f2fde38b14610462578063ffa1ad741461047e57610173565b8063b31c01fb146103d0578063c19d93fb146103ec578063d88beda21461040a57610173565b80638d3638f4146102fa5780638da5cb5b14610318578063928bc4b214610336578063961681dc146103665780639d54f41914610384578063a3f81d68146103a057610173565b806345630b1a1161013057806345630b1a1461024c5780636188af0e1461026a57806367a6771d14610286578063715018a6146102a457806371bfb7b8146102ae578063885b5e2d146102de57610173565b8063088b5ed31461017857806319d9d21a1461019457806325e3beda146101b05780632bbd59ca146101ce578063371d3071146101fe578063399926681461022e575b600080fd5b610192600480360381019061018d9190612859565b61049c565b005b6101ae60048036038101906101a99190612920565b610587565b005b6101b8610765565b6040516101c591906129d6565b60405180910390f35b6101e860048036038101906101e391906129f1565b610789565b6040516101f59190612a95565b60405180910390f35b61021860048036038101906102139190612ad1565b6107a9565b6040516102259190612b41565b60405180910390f35b6102366108d7565b60405161024391906129d6565b60405180910390f35b6102546108dd565b6040516102619190612b6b565b60405180910390f35b610284600480360381019061027f9190612cc7565b6108ff565b005b61028e61095f565b60405161029b9190612b6b565b60405180910390f35b6102ac610965565b005b6102c860048036038101906102c391906129f1565b6109ed565b6040516102d591906129d6565b60405180910390f35b6102f860048036038101906102f39190612d38565b610a05565b005b610302610ac2565b60405161030f9190612d84565b60405180910390f35b610320610ae6565b60405161032d9190612de0565b60405180910390f35b610350600480360381019061034b9190612dfb565b610b10565b60405161035d9190612b41565b60405180910390f35b61036e610f82565b60405161037b9190612d84565b60405180910390f35b61039e60048036038101906103999190612e70565b610f98565b005b6103ba60048036038101906103b591906129f1565b611020565b6040516103c79190612b41565b60405180910390f35b6103ea60048036038101906103e59190612e9d565b611058565b005b6103f46111e6565b6040516104019190612f54565b60405180910390f35b6104126111f9565b60405161041f91906129d6565b60405180910390f35b61043061121d565b60405161043d9190612de0565b60405180910390f35b610460600480360381019061045b9190612f9b565b611243565b005b61047c60048036038101906104779190612e70565b611377565b005b61048661146e565b604051610493919061301e565b60405180910390f35b6104a4611473565b73ffffffffffffffffffffffffffffffffffffffff166104c2610ae6565b73ffffffffffffffffffffffffffffffffffffffff1614610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f90613096565b60405180910390fd5b600060996000848152602001908152602001600020549050816099600085815260200190815260200160002081905550827fe906d465281862f8f37a1bdd7d810e50347f06b0b493701cca6ccb8e6a7b2694828460405161057a9291906130b6565b60405180910390a2505050565b60028081111561059a57610599612a1e565b5b606560149054906101000a900460ff1660028111156105bc576105bb612a1e565b5b036105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f39061312b565b60405180910390fd5b61066386866000600281106106145761061361314b565b5b602002013586868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061147b565b80156106d257506106d186866001600281106106825761068161314b565b5b602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061147b565b5b801561070e5750846001600281106106ed576106ec61314b565b5b6020020135856000600281106107065761070561314b565b5b602002013514155b1561075d5761071b611521565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f868686868686604051610754969594939291906131c8565b60405180910390a15b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b609a6020528060005260406000206000915054906101000a900460ff1681565b60008060028111156107be576107bd612a1e565b5b609a600086815260200190815260200160002060009054906101000a900460ff1660028111156107f1576107f0612a1e565b5b14610831576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108289061326b565b60405180910390fd5b6000610874858560208060200260405190810160405280929190826020800280828437600081840152601f19601f8201169050808301925050505050508561152b565b905061087f81611020565b156108ca576001609a600087815260200190815260200160002060006101000a81548160ff021916908360028111156108bb576108ba612a1e565b5b021790555060019150506108d0565b60009150505b9392505050565b60975481565b60006108fa609660009054906101000a900463ffffffff166115e4565b905090565b610911838051906020012083836107a9565b610950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610947906132d7565b60405180910390fd5b61095983610b10565b50505050565b60665481565b61096d611473565b73ffffffffffffffffffffffffffffffffffffffff1661098b610ae6565b73ffffffffffffffffffffffffffffffffffffffff16146109e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d890613096565b60405180910390fd5b6109eb6000611614565b565b60996020528060005260406000206000915090505481565b610a0d611473565b73ffffffffffffffffffffffffffffffffffffffff16610a2b610ae6565b73ffffffffffffffffffffffffffffffffffffffff1614610a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7890613096565b60405180910390fd5b806097819055507fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb481604051610ab791906129d6565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610b276000846116da90919063ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000063ffffffff16610b5f8262ffffff1916611705565b63ffffffff1614610ba5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9c90613343565b60405180910390fd5b6000610bb68262ffffff191661172b565b905060016002811115610bcc57610bcb612a1e565b5b609a600083815260200190815260200160002060009054906101000a900460ff166002811115610bff57610bfe612a1e565b5b14610c3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c36906133af565b60405180910390fd5b6001609860009054906101000a900460ff1660ff1614610c94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8b9061341b565b60405180910390fd5b6000609860006101000a81548160ff021916908360ff1602179055506002609a600083815260200190815260200160002060006101000a81548160ff02191690836002811115610ce757610ce6612a1e565b5b02179055507f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610d38919061346a565b5a1015610d7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d719061350c565b60405180910390fd5b6000610d8b8362ffffff191661176e565b9050600080610100905060007f0000000000000000000000000000000000000000000000000000000000000000905060008267ffffffffffffffff811115610dd657610dd5612b9c565b5b6040519080825280601f01601f191660200182016040528015610e085781602001600182028036833780820191505090505b5090506000610e1c8862ffffff1916611788565b610e2b8962ffffff19166117ae565b610e3a8a62ffffff19166117d4565b610e57610e4c8c62ffffff19166117fa565b62ffffff1916611849565b604051602401610e6a94939291906135a3565b6040516020818303038152906040527fab2dc3f5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008082516020840160008a88f198503d945083851115610f08578394505b848252846000602084013e81604051610f21919061362b565b6040518091039020891515887fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4860405160405180910390a46001609860006101000a81548160ff021916908360ff1602179055505050505050505050919050565b609660009054906101000a900463ffffffff1681565b610fa0611473565b73ffffffffffffffffffffffffffffffffffffffff16610fbe610ae6565b73ffffffffffffffffffffffffffffffffffffffff1614611014576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100b90613096565b60405180910390fd5b61101d81611890565b50565b600080609960008481526020019081526020016000205490506000810361104b576000915050611053565b804210159150505b919050565b60028081111561106b5761106a612a1e565b5b606560149054906101000a900460ff16600281111561108d5761108c612a1e565b5b036110cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c49061312b565b60405180910390fd5b6066548314611111576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111089061368e565b60405180910390fd5b61111c83838361147b565b61115b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611152906136fa565b60405180910390fd5b611163611935565b60975442611171919061346a565b6099600084815260200190815260200160002081905550816066819055508183609660009054906101000a900463ffffffff1663ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040516111d9919061371a565b60405180910390a4505050565b606560149054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061124f6001611937565b90508015611273576001600060016101000a81548160ff0219169083151502179055505b61127c84611a27565b6001609860006101000a81548160ff021916908360ff16021790555084609660006101000a81548163ffffffff021916908363ffffffff1602179055508260668190555060016099600085815260200190815260200160002081905550816097819055507fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb48260405161130f91906129d6565b60405180910390a180156113705760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516113679190613781565b60405180910390a15b5050505050565b61137f611473565b73ffffffffffffffffffffffffffffffffffffffff1661139d610ae6565b73ffffffffffffffffffffffffffffffffffffffff16146113f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ea90613096565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611462576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114599061380e565b60405180910390fd5b61146b81611614565b50565b600081565b600033905090565b6000806114866108dd565b858560405160200161149a9392919061384f565b6040516020818303038152906040528051906020012090506114bb81611af0565b9050606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166115008285611b20565b73ffffffffffffffffffffffffffffffffffffffff16149150509392505050565b611529611b47565b565b600083905060005b60208110156115dc57600060018285901c169050600085836020811061155c5761155b61314b565b5b602002015190506001820361159b57808460405160200161157e92919061388c565b6040516020818303038152906040528051906020012093506115c7565b83816040516020016115ae92919061388c565b6040516020818303038152906040528051906020012093505b505080806115d4906138b8565b915050611533565b509392505050565b6000816040516020016115f7919061398d565b604051602081830303815290604052805190602001209050919050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808351905060006020850190506116fb8464ffffffffff168284611b74565b9250505092915050565b6000611724602860048462ffffff1916611bdb9092919063ffffffff16565b9050919050565b60008061173783611c12565b6bffffffffffffffffffffffff169050600061175284611c32565b6bffffffffffffffffffffffff16905080822092505050919050565b600061178161177c83611c52565b611c78565b9050919050565b60006117a7600060048462ffffff1916611bdb9092919063ffffffff16565b9050919050565b60006117cd602460048462ffffff1916611bdb9092919063ffffffff16565b9050919050565b60006117f3600460208462ffffff1916611c859092919063ffffffff16565b9050919050565b6000611842604c806118118562ffffff1916611c32565b6bffffffffffffffffffffffff1661182991906139b3565b60008562ffffff1916611dc9909392919063ffffffff16565b9050919050565b606060008061185784611c32565b6bffffffffffffffffffffffff169050604051915081925061187c8460208401611e60565b506020818301016040528082525050919050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a81836040516119299291906139e7565b60405180910390a15050565b565b60008060019054906101000a900460ff16156119ae5760018260ff16148015611966575061196430611f6b565b155b6119a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199c90613a82565b60405180910390fd5b60009050611a22565b8160ff1660008054906101000a900460ff1660ff1610611a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119fa90613a82565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b6000611a336001611937565b90508015611a57576001600060016101000a81548160ff0219169083151502179055505b611a5f611f8e565b611a6882611890565b6001606560146101000a81548160ff02191690836002811115611a8e57611a8d612a1e565b5b02179055508015611aec5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611ae39190613781565b60405180910390a15b5050565b600081604051602001611b039190613aee565b604051602081830303815290604052805190602001209050919050565b6000806000611b2f8585611fe7565b91509150611b3c81612068565b819250505092915050565b6002606560146101000a81548160ff02191690836002811115611b6d57611b6c612a1e565b5b0217905550565b6000808284611b83919061346a565b9050604051811115611b9457600090505b60008103611bc5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611bd4565b611bd0858585612234565b9150505b9392505050565b60006008826020611bec9190613b14565b611bf69190613b48565b60ff16611c04858585611c85565b60001c901c90509392505050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b6000611c71602c60208462ffffff1916611c859092919063ffffffff16565b9050919050565b60008160001c9050919050565b6000808260ff1603611c9c576000801b9050611dc2565b611ca584611c32565b6bffffffffffffffffffffffff168260ff1684611cc2919061346a565b1115611d3f57611d03611cd485611c12565b6bffffffffffffffffffffffff16611ceb86611c32565b6bffffffffffffffffffffffff16858560ff16612255565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d369190613bc7565b60405180910390fd5b60208260ff161115611d86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7d90613c5b565b60405180910390fd5b60006008830290506000611d9986611c12565b6bffffffffffffffffffffffff1690506000611db4836122c3565b905080868301511693505050505b9392505050565b600080611dd586611c12565b6bffffffffffffffffffffffff169050611dee866122f2565b848683611dfb919061346a565b611e05919061346a565b1115611e34577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611e58565b8481611e40919061346a565b9050611e548364ffffffffff168286611b74565b9150505b949350505050565b6000611e6b8361231c565b611eaa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea190613ced565b60405180910390fd5b611eb38361232f565b611ef2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee990613d7f565b60405180910390fd5b6000611efd84611c32565b6bffffffffffffffffffffffff1690506000611f1885611c12565b6bffffffffffffffffffffffff1690506000604051905084811115611f3d5760206060fd5b8285848460045afa50611f60611f5287612371565b64ffffffffff168685612234565b935050505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611fdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fd490613e11565b60405180910390fd5b611fe561237e565b565b60008060418351036120285760008060006020860151925060408601519150606086015160001a905061201c878285856123df565b94509450505050612061565b604083510361205857600080602085015191506040850151905061204d8683836124eb565b935093505050612061565b60006002915091505b9250929050565b6000600481111561207c5761207b612a1e565b5b81600481111561208f5761208e612a1e565b5b031561223157600160048111156120a9576120a8612a1e565b5b8160048111156120bc576120bb612a1e565b5b036120fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f390613e7d565b60405180910390fd5b600260048111156121105761210f612a1e565b5b81600481111561212357612122612a1e565b5b03612163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215a90613ee9565b60405180910390fd5b6003600481111561217757612176612a1e565b5b81600481111561218a57612189612a1e565b5b036121ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121c190613f7b565b60405180910390fd5b6004808111156121dd576121dc612a1e565b5b8160048111156121f0576121ef612a1e565b5b03612230576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122279061400d565b60405180910390fd5b5b50565b600083811760601b905082811760601b905081811760181b90509392505050565b606060006122628661254a565b91505060006122708661254a565b915050600061227e8661254a565b915050600061228c8661254a565b915050838383836040516020016122a694939291906141f1565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b60006122fd82611c32565b61230683611c12565b016bffffffffffffffffffffffff169050919050565b600061232782612608565b159050919050565b600064ffffffffff61234083612371565b64ffffffffff1603612355576000905061236c565b6000612360836122f2565b90506040518111199150505b919050565b60008160d81c9050919050565b600060019054906101000a900460ff166123cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123c490613e11565b60405180910390fd5b6123dd6123d8611473565b611614565b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561241a5760006003915091506124e2565b601b8560ff16141580156124325750601c8560ff1614155b156124445760006004915091506124e2565b6000600187878787604051600081526020016040526040516124699493929190614276565b6020604051602081039080840390855afa15801561248b573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036124d9576000600192509250506124e2565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c61252e919061346a565b905061253c878288856123df565b935093505050935093915050565b6000806000601f90505b600f8160ff1611156125a757600060088261256f9190613b48565b60ff1685901c905061258081612640565b61ffff168417935060108260ff161461259b57601084901b93505b60018203915050612554565b506000600f90505b60ff8160ff1610156126025760006008826125ca9190613b48565b60ff1685901c90506125db81612640565b61ffff168317925060008260ff16146125f657601083901b92505b600182039150506125af565b50915091565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000062ffffff19168262ffffff1916149050919050565b600061265260048360ff16901c612679565b60ff168117905060088161ffff16901b905061266d82612679565b60ff1681179050919050565b60008060f08317905060f08160ff16036126975760309150506127d4565b60f18160ff16036126ac5760319150506127d4565b60f28160ff16036126c15760329150506127d4565b60f38160ff16036126d65760339150506127d4565b60f48160ff16036126eb5760349150506127d4565b60f58160ff16036127005760359150506127d4565b60f68160ff16036127155760369150506127d4565b60f78160ff160361272a5760379150506127d4565b60f88160ff160361273f5760389150506127d4565b60f98160ff16036127545760399150506127d4565b60fa8160ff16036127695760619150506127d4565b60fb8160ff160361277e5760629150506127d4565b60fc8160ff16036127935760639150506127d4565b60fd8160ff16036127a85760649150506127d4565b60fe8160ff16036127bd5760659150506127d4565b60ff8160ff16036127d25760669150506127d4565b505b919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b612800816127ed565b811461280b57600080fd5b50565b60008135905061281d816127f7565b92915050565b6000819050919050565b61283681612823565b811461284157600080fd5b50565b6000813590506128538161282d565b92915050565b600080604083850312156128705761286f6127e3565b5b600061287e8582860161280e565b925050602061288f85828601612844565b9150509250929050565b600080fd5b6000819050826020600202820111156128ba576128b9612899565b5b92915050565b600080fd5b600080fd5b60008083601f8401126128e0576128df6128c0565b5b8235905067ffffffffffffffff8111156128fd576128fc6128c5565b5b60208301915083600182028301111561291957612918612899565b5b9250929050565b60008060008060008060a0878903121561293d5761293c6127e3565b5b600061294b89828a0161280e565b965050602061295c89828a0161289e565b955050606087013567ffffffffffffffff81111561297d5761297c6127e8565b5b61298989828a016128ca565b9450945050608087013567ffffffffffffffff8111156129ac576129ab6127e8565b5b6129b889828a016128ca565b92509250509295509295509295565b6129d081612823565b82525050565b60006020820190506129eb60008301846129c7565b92915050565b600060208284031215612a0757612a066127e3565b5b6000612a158482850161280e565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110612a5e57612a5d612a1e565b5b50565b6000819050612a6f82612a4d565b919050565b6000612a7f82612a61565b9050919050565b612a8f81612a74565b82525050565b6000602082019050612aaa6000830184612a86565b92915050565b6000819050826020800282011115612acb57612aca612899565b5b92915050565b60008060006104408486031215612aeb57612aea6127e3565b5b6000612af98682870161280e565b9350506020612b0a86828701612ab0565b925050610420612b1c86828701612844565b9150509250925092565b60008115159050919050565b612b3b81612b26565b82525050565b6000602082019050612b566000830184612b32565b92915050565b612b65816127ed565b82525050565b6000602082019050612b806000830184612b5c565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612bd482612b8b565b810181811067ffffffffffffffff82111715612bf357612bf2612b9c565b5b80604052505050565b6000612c066127d9565b9050612c128282612bcb565b919050565b600067ffffffffffffffff821115612c3257612c31612b9c565b5b612c3b82612b8b565b9050602081019050919050565b82818337600083830152505050565b6000612c6a612c6584612c17565b612bfc565b905082815260208101848484011115612c8657612c85612b86565b5b612c91848285612c48565b509392505050565b600082601f830112612cae57612cad6128c0565b5b8135612cbe848260208601612c57565b91505092915050565b60008060006104408486031215612ce157612ce06127e3565b5b600084013567ffffffffffffffff811115612cff57612cfe6127e8565b5b612d0b86828701612c99565b9350506020612d1c86828701612ab0565b925050610420612d2e86828701612844565b9150509250925092565b600060208284031215612d4e57612d4d6127e3565b5b6000612d5c84828501612844565b91505092915050565b600063ffffffff82169050919050565b612d7e81612d65565b82525050565b6000602082019050612d996000830184612d75565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dca82612d9f565b9050919050565b612dda81612dbf565b82525050565b6000602082019050612df56000830184612dd1565b92915050565b600060208284031215612e1157612e106127e3565b5b600082013567ffffffffffffffff811115612e2f57612e2e6127e8565b5b612e3b84828501612c99565b91505092915050565b612e4d81612dbf565b8114612e5857600080fd5b50565b600081359050612e6a81612e44565b92915050565b600060208284031215612e8657612e856127e3565b5b6000612e9484828501612e5b565b91505092915050565b600080600060608486031215612eb657612eb56127e3565b5b6000612ec48682870161280e565b9350506020612ed58682870161280e565b925050604084013567ffffffffffffffff811115612ef657612ef56127e8565b5b612f0286828701612c99565b9150509250925092565b60038110612f1d57612f1c612a1e565b5b50565b6000819050612f2e82612f0c565b919050565b6000612f3e82612f20565b9050919050565b612f4e81612f33565b82525050565b6000602082019050612f696000830184612f45565b92915050565b612f7881612d65565b8114612f8357600080fd5b50565b600081359050612f9581612f6f565b92915050565b60008060008060808587031215612fb557612fb46127e3565b5b6000612fc387828801612f86565b9450506020612fd487828801612e5b565b9350506040612fe58782880161280e565b9250506060612ff687828801612844565b91505092959194509250565b600060ff82169050919050565b61301881613002565b82525050565b6000602082019050613033600083018461300f565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613080602083613039565b915061308b8261304a565b602082019050919050565b600060208201905081810360008301526130af81613073565b9050919050565b60006040820190506130cb60008301856129c7565b6130d860208301846129c7565b9392505050565b7f6661696c65642073746174650000000000000000000000000000000000000000600082015250565b6000613115600c83613039565b9150613120826130df565b602082019050919050565b6000602082019050818103600083015261314481613108565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61318660408383612c48565b5050565b600082825260208201905092915050565b60006131a7838561318a565b93506131b4838584612c48565b6131bd83612b8b565b840190509392505050565b600060a0820190506131dd6000830189612b5c565b6131ea602083018861317a565b81810360608301526131fd81868861319b565b9050818103608083015261321281848661319b565b9050979650505050505050565b7f214d6573736167655374617475732e4e6f6e6500000000000000000000000000600082015250565b6000613255601383613039565b91506132608261321f565b602082019050919050565b6000602082019050818103600083015261328481613248565b9050919050565b7f2170726f76650000000000000000000000000000000000000000000000000000600082015250565b60006132c1600683613039565b91506132cc8261328b565b602082019050919050565b600060208201905081810360008301526132f0816132b4565b9050919050565b7f2164657374696e6174696f6e0000000000000000000000000000000000000000600082015250565b600061332d600c83613039565b9150613338826132f7565b602082019050919050565b6000602082019050818103600083015261335c81613320565b9050919050565b7f2170726f76656e00000000000000000000000000000000000000000000000000600082015250565b6000613399600783613039565b91506133a482613363565b602082019050919050565b600060208201905081810360008301526133c88161338c565b9050919050565b7f217265656e7472616e7400000000000000000000000000000000000000000000600082015250565b6000613405600a83613039565b9150613410826133cf565b602082019050919050565b60006020820190508181036000830152613434816133f8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061347582612823565b915061348083612823565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156134b5576134b461343b565b5b828201905092915050565b7f2167617300000000000000000000000000000000000000000000000000000000600082015250565b60006134f6600483613039565b9150613501826134c0565b602082019050919050565b60006020820190508181036000830152613525816134e9565b9050919050565b600081519050919050565b60005b8381101561355557808201518184015260208101905061353a565b83811115613564576000848401525b50505050565b60006135758261352c565b61357f818561318a565b935061358f818560208601613537565b61359881612b8b565b840191505092915050565b60006080820190506135b86000830187612d75565b6135c56020830186612d75565b6135d26040830185612b5c565b81810360608301526135e4818461356a565b905095945050505050565b600081905092915050565b60006136058261352c565b61360f81856135ef565b935061361f818560208601613537565b80840191505092915050565b600061363782846135fa565b915081905092915050565b7f6e6f742063757272656e74207570646174650000000000000000000000000000600082015250565b6000613678601283613039565b915061368382613642565b602082019050919050565b600060208201905081810360008301526136a78161366b565b9050919050565b7f2175706461746572207369670000000000000000000000000000000000000000600082015250565b60006136e4600c83613039565b91506136ef826136ae565b602082019050919050565b60006020820190508181036000830152613713816136d7565b9050919050565b60006020820190508181036000830152613734818461356a565b905092915050565b6000819050919050565b6000819050919050565b600061376b6137666137618461373c565b613746565b613002565b9050919050565b61377b81613750565b82525050565b60006020820190506137966000830184613772565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006137f8602683613039565b91506138038261379c565b604082019050919050565b60006020820190508181036000830152613827816137eb565b9050919050565b6000819050919050565b613849613844826127ed565b61382e565b82525050565b600061385b8286613838565b60208201915061386b8285613838565b60208201915061387b8284613838565b602082019150819050949350505050565b60006138988285613838565b6020820191506138a88284613838565b6020820191508190509392505050565b60006138c382612823565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036138f5576138f461343b565b5b600182019050919050565b60008160e01b9050919050565b600061391882613900565b9050919050565b61393061392b82612d65565b61390d565b82525050565b600081905092915050565b7f4e4f4d4144000000000000000000000000000000000000000000000000000000600082015250565b6000613977600583613936565b915061398282613941565b600582019050919050565b6000613999828461391f565b6004820191506139a88261396a565b915081905092915050565b60006139be82612823565b91506139c983612823565b9250828210156139dc576139db61343b565b5b828203905092915050565b60006040820190506139fc6000830185612dd1565b613a096020830184612dd1565b9392505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000613a6c602e83613039565b9150613a7782613a10565b604082019050919050565b60006020820190508181036000830152613a9b81613a5f565b9050919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000613ad8601c83613936565b9150613ae382613aa2565b601c82019050919050565b6000613af982613acb565b9150613b058284613838565b60208201915081905092915050565b6000613b1f82613002565b9150613b2a83613002565b925082821015613b3d57613b3c61343b565b5b828203905092915050565b6000613b5382613002565b9150613b5e83613002565b92508160ff0483118215151615613b7857613b7761343b565b5b828202905092915050565b600081519050919050565b6000613b9982613b83565b613ba38185613039565b9350613bb3818560208601613537565b613bbc81612b8b565b840191505092915050565b60006020820190508181036000830152613be18184613b8e565b905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b6000613c45603a83613039565b9150613c5082613be9565b604082019050919050565b60006020820190508181036000830152613c7481613c38565b9050919050565b7f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460008201527f6572206465726566000000000000000000000000000000000000000000000000602082015250565b6000613cd7602883613039565b9150613ce282613c7b565b604082019050919050565b60006020820190508181036000830152613d0681613cca565b9050919050565b7f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60008201527f696e746572206465726566000000000000000000000000000000000000000000602082015250565b6000613d69602b83613039565b9150613d7482613d0d565b604082019050919050565b60006020820190508181036000830152613d9881613d5c565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613dfb602b83613039565b9150613e0682613d9f565b604082019050919050565b60006020820190508181036000830152613e2a81613dee565b9050919050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000613e67601883613039565b9150613e7282613e31565b602082019050919050565b60006020820190508181036000830152613e9681613e5a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000613ed3601f83613039565b9150613ede82613e9d565b602082019050919050565b60006020820190508181036000830152613f0281613ec6565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613f65602283613039565b9150613f7082613f09565b604082019050919050565b60006020820190508181036000830152613f9481613f58565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613ff7602283613039565b915061400282613f9b565b604082019050919050565b6000602082019050818103600083015261402681613fea565b9050919050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b6000614089603583613936565b91506140948261402d565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b60006140c9826140b1565b9050919050565b6140e16140dc8261409f565b6140be565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b600061411d600f83613936565b9150614128826140e7565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b600061418f602183613936565b915061419a82614133565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b60006141db600183613936565b91506141e6826141a5565b600182019050919050565b60006141fc8261407c565b915061420882876140d0565b60068201915061421782614110565b915061422382866140d0565b60068201915061423282614182565b915061423e82856140d0565b60068201915061424d82614110565b915061425982846140d0565b600682019150614268826141ce565b915081905095945050505050565b600060808201905061428b6000830187612b5c565b614298602083018661300f565b6142a56040830185612b5c565b6142b26060830184612b5c565b9594505050505056fea164736f6c634300080f000a"
  },
  "Router": {
    "abi": [
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_router",
            "type": "bytes32"
          }
        ],
        "name": "enrollRemoteRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_origin",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_nonce",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_sender",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_message",
            "type": "bytes"
          }
        ],
        "name": "handle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
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
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "remotes",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
            "name": "_xAppConnectionManager",
            "type": "address"
          }
        ],
        "name": "setXAppConnectionManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "xAppConnectionManager",
        "outputs": [
          {
            "internalType": "contract XAppConnectionManager",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "SafeERC20": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "SafeMath": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
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
    "addresses": {},
    "byteCode": "0x"
  },
  "StargateFacet": {
    "abi": [
      {
        "inputs": [],
        "name": "InvalidAmount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidConfig",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSourcePoolId",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "SenderNotStargateRouter",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "StargateRouterAddressZero",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "chainId",
            "type": "uint16"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "poolId",
            "type": "uint16"
          }
        ],
        "name": "SGAddedPool",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "stargate",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "chainId",
            "type": "uint16"
          }
        ],
        "name": "SGInitialized",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
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
        "name": "SGReceivedOnDestination",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "bridgeUsed",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "fromToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "toToken",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "from",
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint16",
            "name": "chainIdTo",
            "type": "uint16"
          }
        ],
        "name": "SGTransferStarted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAddress",
            "type": "address"
          }
        ],
        "name": "SGUpdatedRouter",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newSlippage",
            "type": "uint256"
          }
        ],
        "name": "SGUpdatedSlippageTolerance",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "_poolId",
            "type": "uint16"
          }
        ],
        "name": "sgAddPool",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "qty",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "fromToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "toToken",
                "type": "address"
              },
              {
                "internalType": "uint16",
                "name": "dstChainId",
                "type": "uint16"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "destStargateComposed",
                "type": "address"
              }
            ],
            "internalType": "struct StargateFacet.StargateData",
            "name": "_sgData",
            "type": "tuple"
          }
        ],
        "name": "sgBridgeTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_destChain",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "_receiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_router",
            "type": "address"
          }
        ],
        "name": "sgCalculateFees",
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
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "_poolId",
            "type": "uint16"
          }
        ],
        "name": "sgCheckPoolId",
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
            "name": "_stargateRouter",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          }
        ],
        "name": "sgInitialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "sgMinAmountOut",
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
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "bytes",
            "name": "_srcAddress",
            "type": "bytes"
          },
          {
            "internalType": "uint256",
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountLD",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_payload",
            "type": "bytes"
          }
        ],
        "name": "sgReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_chainId",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "sgRetrievePoolId",
        "outputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newAddress",
            "type": "address"
          }
        ],
        "name": "sgUpdateRouter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newSlippage",
            "type": "uint256"
          }
        ],
        "name": "sgUpdateSlippageTolerance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b506125df806100206000396000f3fe6080604052600436106100915760003560e01c8063498ee46911610059578063498ee469146101925780634be85c35146101bb578063618c3f29146101e4578063ab8236f314610221578063b8c06ccc1461024a57610091565b80631f8097fb14610096578063217aabb7146100b25780632a8dcdb7146100db57806342d910c614610118578063430dbc3a14610155575b600080fd5b6100b060048036038101906100ab91906117a5565b610273565b005b3480156100be57600080fd5b506100d960048036038101906100d49190611961565b610734565b005b3480156100e757600080fd5b5061010260048036038101906100fd9190611859565b61078c565b60405161010f9190611d9e565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a919061180a565b610824565b60405161014c9190612049565b60405180910390f35b34801561016157600080fd5b5061017c600480360381019061017791906117ce565b610936565b6040516101899190611eef565b60405180910390f35b34801561019e57600080fd5b506101b960048036038101906101b49190611740565b6109b5565b005b3480156101c757600080fd5b506101e260048036038101906101dd91906116ee565b610c66565b005b3480156101f057600080fd5b5061020b60048036038101906102069190611961565b610d5f565b6040516102189190612049565b60405180910390f35b34801561022d57600080fd5b50610248600480360381019061024391906118a8565b610d9e565b005b34801561025657600080fd5b50610271600480360381019061026c9190611859565b610f1c565b005b600061027d610fe6565b90506001816000015414156102be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506000826000015111610306576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1614806103755750600073ffffffffffffffffffffffffffffffffffffffff16826040015173ffffffffffffffffffffffffffffffffffffffff16145b806103b05750600073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b806103eb5750600073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b15610422576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061042c611013565b905060006104508260000160149054906101000a900461ffff168560200151610936565b905060008161ffff161415610491576040517f7790ca9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104a585606001518660400151610936565b905060006104e0866060015187608001518660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610824565b905060006104f18760000151610d5f565b905060008760a0015160405160200161050a9190611c9f565b6040516020818303038152906040529050600088608001516040516020016105329190611cd1565b604051602081830303815290604052905061057833308b600001518c6020015173ffffffffffffffffffffffffffffffffffffffff16611040909392919063ffffffff16565b6105cf8760000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a600001518b6020015173ffffffffffffffffffffffffffffffffffffffff166110c99092919063ffffffff16565b8660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fbf10fc858b606001518989338f600001518a604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508b8b6040518b63ffffffff1660e01b815260040161069899989796959493929190611fa7565b6000604051808303818588803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b50505050507f7a72e6f4a3d77f8a5a6c536a973421c5bf00107f9aec7995661537673b8be08789602001518a60400151338c608001518d600001518e6060015160405161071796959493929190611e1b565b60405180910390a150505050505050600081600001819055505050565b61073c611227565b6000610746611013565b90508181600201819055507f45934903f6b10aff9d3435b8362d284d95d14ca68e8554f05f04c7856a6003c0826040516107809190612049565b60405180910390a15050565b600080610797611013565b90508261ffff168160030160008761ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1661ffff161461081757600061081a565b60015b9150509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a512369866001876040516020016108579190611c9f565b604051602081830303815290604052604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152506040518563ffffffff1660e01b81526004016108d99493929190611f41565b604080518083038186803b1580156108f057600080fd5b505afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092891906119b3565b509050809150509392505050565b600080610941611013565b90508060030160008561ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1691505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a1c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a24611227565b6000610a2e611013565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548161ffff021916908361ffff16021790555060328160020181905550610abd600173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486001610f1c565b610ade600173dac17f958d2ee523a2206206994597c13d831ec76002610f1c565b610aff60027355d398326f99059ff775485246999027b31979556002610f1c565b610b20600273e9e7cea3dedca5984780bafc599bd69add087d566005610f1c565b610b41600673b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e6001610f1c565b610b626006739702230a8ea53601f5cd2dc00fdbc13d4df4a8c76002610f1c565b610b836009732791bca1f2de4661ed88a30c99a7a9449aa841746001610f1c565b610ba4600973c2132d05d31c914a87c6611c10748aeb04b58e8f6002610f1c565b610bc5600a73ff970a61a04b1ca14834a43f5de4533ebddb5cc86001610f1c565b610be6600a73fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb96002610f1c565b610c07600b737f5c764cbc14f9669b88837ca1490cca17c316076001610f1c565b610c28600c7304068da6c83afcfa0e13ba15a6696662335d5b756001610f1c565b7fc8ec31998a27444f477c01de93c393769fd4fc017fb63163f71f8a8ab72ccd508383604051610c59929190611d4c565b60405180910390a1505050565b610c6e611227565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cd5576040517f3911c65500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610cdf611013565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9ac04272c4559bf7459414abb5568dc1df58ab649f0af4afd1510074f5cc2fec82604051610d539190611cd1565b60405180910390a15050565b600080610d6a611013565b90506127108160020154612710610d819190612199565b84610d8c919061213f565b610d96919061210e565b915050919050565b6000610da8611013565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e33576040517fdade3c7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082806020019051810190610e499190611717565b90508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610e86929190611d75565b602060405180830381600087803b158015610ea057600080fd5b505af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed8919061177c565b507f827e3293895509ef037b7438d4e009f37ad7b2562a14695d9dfd9cb0659842188585604051610f0a929190611d75565b60405180910390a15050505050505050565b610f24611227565b6000610f2e611013565b9050818160030160008661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548161ffff021916908361ffff1602179055507f85adba3a23dc45072c12199244adfbf4c1d736a46ac453eb732f4e5158af5867848484604051610fd893929190611f0a565b60405180910390a150505050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6110c3846323b872dd60e01b85858560405160240161106193929190611d15565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b50505050565b6000811480611162575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611110929190611cec565b60206040518083038186803b15801561112857600080fd5b505afa15801561113c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611160919061198a565b145b6111a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119890611ecf565b60405180910390fd5b6112228363095ea7b360e01b84846040516024016111c0929190611d75565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b505050565b61122f611389565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b790611ddb565b60405180910390fd5b565b6000611324826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113b69092919063ffffffff16565b90506000815111156113845780806020019051810190611344919061177c565b611383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137a90611eaf565b60405180910390fd5b5b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60606113c584846000856113ce565b90509392505050565b606082471015611413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140a90611dfb565b60405180910390fd5b61141c856114e2565b61145b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145290611e8f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114849190611cba565b60006040518083038185875af1925050503d80600081146114c1576040519150601f19603f3d011682016040523d82523d6000602084013e6114c6565b606091505b50915091506114d6828286611505565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561151557829050611565565b6000835111156115285782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155c9190611db9565b60405180910390fd5b9392505050565b600061157f61157a84612089565b612064565b90508281526020810184848401111561159757600080fd5b6115a2848285612266565b509392505050565b6000813590506115b98161255f565b92915050565b6000815190506115ce81612576565b92915050565b6000815190506115e38161258d565b92915050565b600082601f8301126115fa57600080fd5b813561160a84826020860161156c565b91505092915050565b600060c0828403121561162557600080fd5b61162f60c0612064565b9050600061163f848285016116c4565b6000830152506020611653848285016115aa565b6020830152506040611667848285016115aa565b604083015250606061167b848285016116af565b606083015250608061168f848285016115aa565b60808301525060a06116a3848285016115aa565b60a08301525092915050565b6000813590506116be816125a4565b92915050565b6000813590506116d3816125bb565b92915050565b6000815190506116e8816125bb565b92915050565b60006020828403121561170057600080fd5b600061170e848285016115aa565b91505092915050565b60006020828403121561172957600080fd5b6000611737848285016115bf565b91505092915050565b6000806040838503121561175357600080fd5b6000611761858286016115aa565b9250506020611772858286016116af565b9150509250929050565b60006020828403121561178e57600080fd5b600061179c848285016115d4565b91505092915050565b600060c082840312156117b757600080fd5b60006117c584828501611613565b91505092915050565b600080604083850312156117e157600080fd5b60006117ef858286016116af565b9250506020611800858286016115aa565b9150509250929050565b60008060006060848603121561181f57600080fd5b600061182d868287016116af565b935050602061183e868287016115aa565b925050604061184f868287016115aa565b9150509250925092565b60008060006060848603121561186e57600080fd5b600061187c868287016116af565b935050602061188d868287016115aa565b925050604061189e868287016116af565b9150509250925092565b60008060008060008060c087890312156118c157600080fd5b60006118cf89828a016116af565b965050602087013567ffffffffffffffff8111156118ec57600080fd5b6118f889828a016115e9565b955050604061190989828a016116c4565b945050606061191a89828a016115aa565b935050608061192b89828a016116c4565b92505060a087013567ffffffffffffffff81111561194857600080fd5b61195489828a016115e9565b9150509295509295509295565b60006020828403121561197357600080fd5b6000611981848285016116c4565b91505092915050565b60006020828403121561199c57600080fd5b60006119aa848285016116d9565b91505092915050565b600080604083850312156119c657600080fd5b60006119d4858286016116d9565b92505060206119e5858286016116d9565b9150509250929050565b6119f8816121df565b82525050565b611a07816121cd565b82525050565b611a1e611a19826121cd565b6122d9565b82525050565b611a2d816121f1565b82525050565b6000611a3e826120ba565b611a4881856120d0565b9350611a58818560208601612275565b611a618161238a565b840191505092915050565b6000611a77826120ba565b611a8181856120e1565b9350611a91818560208601612275565b611a9a8161238a565b840191505092915050565b6000611ab0826120ba565b611aba81856120f2565b9350611aca818560208601612275565b80840191505092915050565b611adf81612242565b82525050565b6000611af0826120c5565b611afa81856120fd565b9350611b0a818560208601612275565b611b138161238a565b840191505092915050565b6000611b2b6022836120fd565b9150611b36826123a8565b604082019050919050565b6000611b4e6002836120e1565b9150611b59826123f7565b602082019050919050565b6000611b716026836120fd565b9150611b7c82612420565b604082019050919050565b6000611b946008836120fd565b9150611b9f8261246f565b602082019050919050565b6000611bb7601d836120fd565b9150611bc282612498565b602082019050919050565b6000611bda602a836120fd565b9150611be5826124c1565b604082019050919050565b6000611bfd6036836120fd565b9150611c0882612510565b604082019050919050565b6000606083016000830151611c2b6000860182611c81565b506020830151611c3e6020860182611c81565b5060408301518482036040860152611c568282611a33565b9150508091505092915050565b611c6c816121fd565b82525050565b611c7b81612254565b82525050565b611c8a8161222b565b82525050565b611c998161222b565b82525050565b6000611cab8284611a0d565b60148201915081905092915050565b6000611cc68284611aa5565b915081905092915050565b6000602082019050611ce660008301846119fe565b92915050565b6000604082019050611d0160008301856119fe565b611d0e60208301846119fe565b9392505050565b6000606082019050611d2a60008301866119fe565b611d3760208301856119fe565b611d446040830184611c90565b949350505050565b6000604082019050611d6160008301856119fe565b611d6e6020830184611c63565b9392505050565b6000604082019050611d8a60008301856119fe565b611d976020830184611c90565b9392505050565b6000602082019050611db36000830184611a24565b92915050565b60006020820190508181036000830152611dd38184611ae5565b905092915050565b60006020820190508181036000830152611df481611b1e565b9050919050565b60006020820190508181036000830152611e1481611b64565b9050919050565b600060e0820190508181036000830152611e3481611b87565b9050611e4360208301896119fe565b611e5060408301886119fe565b611e5d60608301876119fe565b611e6a60808301866119fe565b611e7760a0830185611c90565b611e8460c0830184611c63565b979650505050505050565b60006020820190508181036000830152611ea881611baa565b9050919050565b60006020820190508181036000830152611ec881611bcd565b9050919050565b60006020820190508181036000830152611ee881611bf0565b9050919050565b6000602082019050611f046000830184611c63565b92915050565b6000606082019050611f1f6000830186611c63565b611f2c60208301856119fe565b611f396040830184611c63565b949350505050565b600060a082019050611f566000830187611c63565b611f636020830186611ad6565b8181036040830152611f758185611a6c565b90508181036060830152611f8881611b41565b90508181036080830152611f9c8184611c13565b905095945050505050565b600061012082019050611fbd600083018c611c63565b611fca602083018b611c72565b611fd7604083018a611c72565b611fe460608301896119ef565b611ff16080830188611c90565b611ffe60a0830187611c90565b81810360c08301526120108186611c13565b905081810360e08301526120248185611a6c565b90508181036101008301526120398184611a6c565b90509a9950505050505050505050565b600060208201905061205e6000830184611c90565b92915050565b600061206e61207f565b905061207a82826122a8565b919050565b6000604051905090565b600067ffffffffffffffff8211156120a4576120a361235b565b5b6120ad8261238a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006121198261222b565b91506121248361222b565b9250826121345761213361232c565b5b828204905092915050565b600061214a8261222b565b91506121558361222b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561218e5761218d6122fd565b5b828202905092915050565b60006121a48261222b565b91506121af8361222b565b9250828210156121c2576121c16122fd565b5b828203905092915050565b60006121d88261220b565b9050919050565b60006121ea8261220b565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061224d82612235565b9050919050565b600061225f826121fd565b9050919050565b82818337600083830152505050565b60005b83811015612293578082015181840152602081019050612278565b838111156122a2576000848401525b50505050565b6122b18261238a565b810181811067ffffffffffffffff821117156122d0576122cf61235b565b5b80604052505050565b60006122e4826122eb565b9050919050565b60006122f68261239b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f7374617267617465000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b612568816121cd565b811461257357600080fd5b50565b61257f816121df565b811461258a57600080fd5b50565b612596816121f1565b81146125a157600080fd5b50565b6125ad816121fd565b81146125b857600080fd5b50565b6125c48161222b565b81146125cf57600080fd5b5056fea164736f6c6343000804000a"
  },
  "Strings": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "SwapUtils": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "fees",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "invariant",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "AddLiquidity",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newAdminFee",
            "type": "uint256"
          }
        ],
        "name": "NewAdminFee",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newSwapFee",
            "type": "uint256"
          }
        ],
        "name": "NewSwapFee",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidity",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "tokenAmounts",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "fees",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "invariant",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidityImbalance",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "provider",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "lpTokenSupply",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "boughtId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensBought",
            "type": "uint256"
          }
        ],
        "name": "RemoveLiquidityOne",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensSold",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokensBought",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "soldId",
            "type": "uint128"
          },
          {
            "indexed": false,
            "internalType": "uint128",
            "name": "boughtId",
            "type": "uint128"
          }
        ],
        "name": "TokenSwap",
        "type": "event"
      }
    ],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "TypeCasts": {
    "abi": [],
    "addresses": {},
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080f000a"
  },
  "TypedMemView": {
    "abi": [
      {
        "inputs": [],
        "name": "NULL",
        "outputs": [
          {
            "internalType": "bytes29",
            "name": "",
            "type": "bytes29"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x60d5610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6052565b6040516049919060af565b60405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000081565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082169050919050565b60a9816076565b82525050565b600060208201905060c2600083018460a2565b9291505056fea164736f6c634300080f000a"
  },
  "Version": {
    "abi": [
      {
        "inputs": [],
        "name": "VERSION",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50608c8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b60336047565b604051603e91906066565b60405180910390f35b600081565b600060ff82169050919050565b606081604c565b82525050565b6000602082019050607960008301846059565b9291505056fea164736f6c634300080f000a"
  },
  "Version0": {
    "abi": [
      {
        "inputs": [],
        "name": "VERSION",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b50608c8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b60336047565b604051603e91906066565b60405180910390f35b600081565b600060ff82169050919050565b606081604c565b82525050565b6000602082019050607960008301846059565b9291505056fea164736f6c634300080f000a"
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
    "addresses": {},
    "byteCode": "0x60806040523480156200001157600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600b81526020017f5772617070656420576569000000000000000000000000000000000000000000815250600190805190602001906200009f929190620000f4565b506040518060400160405280600481526020017f575745490000000000000000000000000000000000000000000000000000000081525060029080519060200190620000ed929190620000f4565b506200019a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013757805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001675782518255916020019190600101906200014a565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6120b080620001aa6000396000f3fe6080604052600436106101235760003560e01c806356a3b64b116100a0578063a9059cbb11610064578063a9059cbb1461065f578063b760faf9146106d0578063ca9add8f14610714578063dd62ed3e14610765578063f55647e0146107ea5761013b565b806356a3b64b146104d557806370a08231146104ec578063834ff73914610551578063853828b6146105b857806395d89b41146105cf5761013b565b806323b872dd116100e757806323b872dd146103085780632e1a7d4d14610399578063313ce567146103d4578063392e53cd14610402578063462d0b2e1461042f5761013b565b806306fdde0314610140578063095ea7b3146101d0578063116191b61461024157806318160ddd14610282578063205c2878146102ad5761013b565b3661013b57610139610133610801565b34610810565b005b600080fd5b34801561014c57600080fd5b50610155610a26565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019557808201518184015260208101905061017a565b50505050905090810190601f1680156101c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101dc57600080fd5b50610229600480360360408110156101f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac4565b60405180821515815260200191505060405180910390f35b34801561024d57600080fd5b50610256610ae2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b50610297610b08565b6040518082815260200191505060405180910390f35b3480156102b957600080fd5b50610306600480360360408110156102d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b0e565b005b34801561031457600080fd5b506103816004803603606081101561032b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b24565b60405180821515815260200191505060405180910390f35b3480156103a557600080fd5b506103d2600480360360208110156103bc57600080fd5b8101908080359060200190929190505050610be1565b005b3480156103e057600080fd5b506103e9610bfd565b604051808260ff16815260200191505060405180910390f35b34801561040e57600080fd5b50610417610c10565b60405180821515815260200191505060405180910390f35b34801561043b57600080fd5b506104d36004803603604081101561045257600080fd5b810190808035906020019064010000000081111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460208302840111640100000000831117156104a357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c66565b005b3480156104e157600080fd5b506104ea610e05565b005b3480156104f857600080fd5b5061053b6004803603602081101561050f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e17565b6040518082815260200191505060405180910390f35b34801561055d57600080fd5b506105a06004803603602081101561057457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e60565b60405180821515815260200191505060405180910390f35b3480156105c457600080fd5b506105cd610eb6565b005b3480156105db57600080fd5b506105e4610f0f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610624578082015181840152602081019050610609565b50505050905090810190601f1680156106515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561066b57600080fd5b506106b86004803603604081101561068257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fad565b60405180821515815260200191505060405180910390f35b610712600480360360208110156106e657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b34801561072057600080fd5b506107636004803603602081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fd8565b005b34801561077157600080fd5b506107d46004803603604081101561078857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b6040518082815260200191505060405180910390f35b3480156107f657600080fd5b506107ff6110b9565b005b600061080b61120f565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610896576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fb66026913960400191505060405180910390fd5b6000811161090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c75650081525060200191505060405180910390fd5b61095e81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b68160045461122090919063ffffffff16565b6004819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610abc5780601f10610a9157610100808354040283529160200191610abc565b820191906000526020600020905b815481529060010190602001808311610a9f57829003601f168201915b505050505081565b6000610ad8610ad1610801565b84846112a8565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b610b20610b19610801565b838361149f565b5050565b600080610b2f610801565b9050610b3c858585611538565b610bd58582610bd086600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b6112a8565b60019150509392505050565b610bfa610bec610801565b610bf4610801565b8361149f565b50565b600360009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611ec8602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008383905014610daa57600083839050905060005b81811015610da757610d9a858583818110610d7857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166115d8565b8080600101915050610d61565b50505b610db381611723565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b610e15610e10610801565b6115d8565b565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000610ec0610801565b9050610f0c8182600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b50565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b505050505081565b6000610fc1610fba610801565b8484611538565b6001905092915050565b610fd58134610810565b50565b6000610fe2610801565b905061102e8183600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b5050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006110c3610801565b9050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611167576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806120066027913960400191505060405180910390fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f09881604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600061121b6028611767565b905090565b60008082840190508381101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561132e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611f8b602b913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611f416029913960400191505060405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6114a983826117fc565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061202d6025913960400191505060405180910390fd5b505050565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561159a5761159583838361149f565b6115a6565b6115a58383836119b6565b5b505050565b60006115d08383604051806060016040528060218152602001611f6a60219139611c56565b905092915050565b600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561167b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ef76028913960400191505060405180910390fd5b6001600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee0714281604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009050611776611d10565b156117ef5760008360003690500390506117e76000368390601485019261179f93929190611e6c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611dd3565b9150506117f3565b3390505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611882576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ea06028913960400191505060405180910390fd5b6118ee8160405180606001604052806026815260200161205260269139600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c569092919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611946816004546115ab90919063ffffffff16565b600481905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612078602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611fdc602a913960400191505060405180910390fd5b611b1481600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ba981600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cc8578082015181840152602081019050611cad565b50505050905090810190601f168015611cf55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611dcc57602c60003690501015611dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611f1f6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114611e4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b60008085851115611e7c57600080fd5b83861115611e8957600080fd5b600185028301915084860390509450949250505056fe4552433230546f6b656e3a2063616e6e6f74206275726e2066726f6d203078302061646472657373496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a657257726170706564576569546f6b656e3a20636f6e73756d657220616c72656164792065786973747347617465776179526563697069656e743a20696e76616c6964206d73672e646174614552433230546f6b656e3a2063616e6e6f7420617070726f766520746f203078302061646472657373536166654d6174684c69623a207375627472616374696f6e206f766572666c6f774552433230546f6b656e3a2063616e6e6f7420617070726f76652066726f6d2030783020616464726573734552433230546f6b656e3a2063616e6e6f74206d696e7420746f2030783020616464726573734552433230546f6b656e3a2063616e6e6f74207472616e7366657220746f20307830206164647265737357726170706564576569546f6b656e3a20636f6e73756d657220646f65736e277420657869737457726170706564576569546f6b656e3a207472616e73616374696f6e2072657665727465644552433230546f6b656e3a206275726e2076616c756520657863656564732062616c616e63654552433230546f6b656e3a2063616e6e6f74207472616e736665722066726f6d203078302061646472657373a164736f6c634300060c000a"
  },
  "XAppConnectionClient": {
    "abi": [
      {
        "inputs": [],
        "name": "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyOwner_notOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__onlyProposed_notProposedOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__proposeNewOwner_noOwnershipChange",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_delayNotElapsed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_invalidProposal",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ProposedOwnable__renounceOwnership_noProposal",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
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
            "name": "proposedOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipProposed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "acceptProposedOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "delay",
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
            "internalType": "address",
            "name": "newlyProposed",
            "type": "address"
          }
        ],
        "name": "proposeNewOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "proposed",
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
        "name": "proposedTimestamp",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounced",
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
            "name": "_xAppConnectionManager",
            "type": "address"
          }
        ],
        "name": "setXAppConnectionManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "xAppConnectionManager",
        "outputs": [
          {
            "internalType": "contract XAppConnectionManager",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {},
    "byteCode": "0x"
  },
  "XAppConnectionManager": {
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
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "domain",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "replica",
            "type": "address"
          }
        ],
        "name": "ReplicaEnrolled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "domain",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "replica",
            "type": "address"
          }
        ],
        "name": "ReplicaUnenrolled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "domain",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "watcher",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "access",
            "type": "bool"
          }
        ],
        "name": "WatcherPermissionSet",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "domainToReplica",
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
        "name": "home",
        "outputs": [
          {
            "internalType": "contract Home",
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
            "name": "_replica",
            "type": "address"
          }
        ],
        "name": "isReplica",
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
        "name": "localDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
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
            "internalType": "address",
            "name": "_replica",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          }
        ],
        "name": "ownerEnrollReplica",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_replica",
            "type": "address"
          }
        ],
        "name": "ownerUnenrollReplica",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "replicaToDomain",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_home",
            "type": "address"
          }
        ],
        "name": "setHome",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_watcher",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bool",
            "name": "_access",
            "type": "bool"
          }
        ],
        "name": "setWatcherPermission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "_updater",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "unenrollReplica",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_watcher",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_domain",
            "type": "uint32"
          }
        ],
        "name": "watcherPermission",
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
    "addresses": {},
    "byteCode": "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612020806200010e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f5d90e01161008c578063b9cff16211610066578063b9cff16214610237578063e0e7a91314610267578063f2fde38b14610283578063f31faefb1461029f576100ea565b80638f5d90e0146101e1578063916c3470146101fd5780639fa92f9d14610219576100ea565b80636ef0f37f116100c85780636ef0f37f1461017f578063715018a61461019b5780638d3638f4146101a55780638da5cb5b146101c3576100ea565b8063427ebef5146100ef5780635190bc531461011f5780635f8b1dba1461014f575b600080fd5b6101096004803603810190610104919061148e565b6102bb565b60405161011691906114e9565b60405180910390f35b61013960048036038101906101349190611504565b61032f565b60405161014691906114e9565b60405180910390f35b61016960048036038101906101649190611504565b610391565b6040516101769190611540565b60405180910390f35b61019960048036038101906101949190611504565b6103b4565b005b6101a3610474565b005b6101ad6104fc565b6040516101ba9190611540565b60405180910390f35b6101cb610594565b6040516101d8919061156a565b60405180910390f35b6101fb60048036038101906101f69190611504565b6105bd565b005b610217600480360381019061021291906115b1565b610645565b005b61022161077a565b60405161022e9190611663565b60405180910390f35b610251600480360381019061024c919061167e565b6107a0565b60405161025e919061156a565b60405180910390f35b610281600480360381019061027c9190611827565b6107d3565b005b61029d60048036038101906102989190611504565b610a3b565b005b6102b960048036038101906102b4919061148e565b610b32565b005b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1663ffffffff1614159050919050565b60026020528060005260406000206000915054906101000a900463ffffffff1681565b6103bc610cb5565b73ffffffffffffffffffffffffffffffffffffffff166103da610594565b73ffffffffffffffffffffffffffffffffffffffff1614610430576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610427906118f3565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61047c610cb5565b73ffffffffffffffffffffffffffffffffffffffff1661049a610594565b73ffffffffffffffffffffffffffffffffffffffff16146104f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e7906118f3565b60405180910390fd5b6104fa6000610cbd565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561056b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058f9190611928565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105c5610cb5565b73ffffffffffffffffffffffffffffffffffffffff166105e3610594565b73ffffffffffffffffffffffffffffffffffffffff1614610639576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610630906118f3565b60405180910390fd5b61064281610d81565b50565b61064d610cb5565b73ffffffffffffffffffffffffffffffffffffffff1661066b610594565b73ffffffffffffffffffffffffffffffffffffffff16146106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b8906118f3565b60405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008463ffffffff1663ffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508163ffffffff167f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c848360405161076d929190611955565b60405180910390a2505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d906119ca565b60405180910390fd5b61088f83610ed5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091491906119ff565b73ffffffffffffffffffffffffffffffffffffffff161461096a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096190611a78565b60405180910390fd5b60006109808561097984610ee2565b8686610f05565b9050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008663ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2290611ae4565b60405180910390fd5b610a3482610d81565b5050505050565b610a43610cb5565b73ffffffffffffffffffffffffffffffffffffffff16610a61610594565b73ffffffffffffffffffffffffffffffffffffffff1614610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae906118f3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1d90611b76565b60405180910390fd5b610b2f81610cbd565b50565b610b3a610cb5565b73ffffffffffffffffffffffffffffffffffffffff16610b58610594565b73ffffffffffffffffffffffffffffffffffffffff1614610bae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba5906118f3565b60405180910390fd5b610bb782610d81565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555081600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508063ffffffff167f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a923483604051610ca9919061156a565b60405180910390a25050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055508063ffffffff167fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b83604051610ec9919061156a565b60405180910390a25050565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b600080610f1185610ed5565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7f9190611bab565b90506000818786604051602001610f9893929190611c2f565b604051602081830303815290604052805190602001209050610fb981610fd1565b9050610fc58185611001565b92505050949350505050565b600081604051602001610fe49190611cc3565b604051602081830303815290604052805190602001209050919050565b60008060006110108585611028565b9150915061101d816110a9565b819250505092915050565b60008060418351036110695760008060006020860151925060408601519150606086015160001a905061105d87828585611275565b945094505050506110a2565b604083510361109957600080602085015191506040850151905061108e868383611381565b9350935050506110a2565b60006002915091505b9250929050565b600060048111156110bd576110bc611ce9565b5b8160048111156110d0576110cf611ce9565b5b031561127257600160048111156110ea576110e9611ce9565b5b8160048111156110fd576110fc611ce9565b5b0361113d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113490611d64565b60405180910390fd5b6002600481111561115157611150611ce9565b5b81600481111561116457611163611ce9565b5b036111a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119b90611dd0565b60405180910390fd5b600360048111156111b8576111b7611ce9565b5b8160048111156111cb576111ca611ce9565b5b0361120b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120290611e62565b60405180910390fd5b60048081111561121e5761121d611ce9565b5b81600481111561123157611230611ce9565b5b03611271576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126890611ef4565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156112b0576000600391509150611378565b601b8560ff16141580156112c85750601c8560ff1614155b156112da576000600491509150611378565b6000600187878787604051600081526020016040526040516112ff9493929190611f3f565b6020604051602081039080840390855afa158015611321573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361136f57600060019250925050611378565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c6113c49190611fbd565b90506113d287828885611275565b935093505050935093915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061141f826113f4565b9050919050565b61142f81611414565b811461143a57600080fd5b50565b60008135905061144c81611426565b92915050565b600063ffffffff82169050919050565b61146b81611452565b811461147657600080fd5b50565b60008135905061148881611462565b92915050565b600080604083850312156114a5576114a46113ea565b5b60006114b38582860161143d565b92505060206114c485828601611479565b9150509250929050565b60008115159050919050565b6114e3816114ce565b82525050565b60006020820190506114fe60008301846114da565b92915050565b60006020828403121561151a576115196113ea565b5b60006115288482850161143d565b91505092915050565b61153a81611452565b82525050565b60006020820190506115556000830184611531565b92915050565b61156481611414565b82525050565b600060208201905061157f600083018461155b565b92915050565b61158e816114ce565b811461159957600080fd5b50565b6000813590506115ab81611585565b92915050565b6000806000606084860312156115ca576115c96113ea565b5b60006115d88682870161143d565b93505060206115e986828701611479565b92505060406115fa8682870161159c565b9150509250925092565b6000819050919050565b600061162961162461161f846113f4565b611604565b6113f4565b9050919050565b600061163b8261160e565b9050919050565b600061164d82611630565b9050919050565b61165d81611642565b82525050565b60006020820190506116786000830184611654565b92915050565b600060208284031215611694576116936113ea565b5b60006116a284828501611479565b91505092915050565b6000819050919050565b6116be816116ab565b81146116c957600080fd5b50565b6000813590506116db816116b5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611734826116eb565b810181811067ffffffffffffffff82111715611753576117526116fc565b5b80604052505050565b60006117666113e0565b9050611772828261172b565b919050565b600067ffffffffffffffff821115611792576117916116fc565b5b61179b826116eb565b9050602081019050919050565b82818337600083830152505050565b60006117ca6117c584611777565b61175c565b9050828152602081018484840111156117e6576117e56116e6565b5b6117f18482856117a8565b509392505050565b600082601f83011261180e5761180d6116e1565b5b813561181e8482602086016117b7565b91505092915050565b6000806000606084860312156118405761183f6113ea565b5b600061184e86828701611479565b935050602061185f868287016116cc565b925050604084013567ffffffffffffffff8111156118805761187f6113ef565b5b61188c868287016117f9565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006118dd602083611896565b91506118e8826118a7565b602082019050919050565b6000602082019050818103600083015261190c816118d0565b9050919050565b60008151905061192281611462565b92915050565b60006020828403121561193e5761193d6113ea565b5b600061194c84828501611913565b91505092915050565b600060408201905061196a600083018561155b565b61197760208301846114da565b9392505050565b7f217265706c696361206578697374730000000000000000000000000000000000600082015250565b60006119b4600f83611896565b91506119bf8261197e565b602082019050919050565b600060208201905081810360008301526119e3816119a7565b9050919050565b6000815190506119f981611426565b92915050565b600060208284031215611a1557611a146113ea565b5b6000611a23848285016119ea565b91505092915050565b7f2163757272656e74207570646174657200000000000000000000000000000000600082015250565b6000611a62601083611896565b9150611a6d82611a2c565b602082019050919050565b60006020820190508181036000830152611a9181611a55565b9050919050565b7f2176616c69642077617463686572000000000000000000000000000000000000600082015250565b6000611ace600e83611896565b9150611ad982611a98565b602082019050919050565b60006020820190508181036000830152611afd81611ac1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b60602683611896565b9150611b6b82611b04565b604082019050919050565b60006020820190508181036000830152611b8f81611b53565b9050919050565b600081519050611ba5816116b5565b92915050565b600060208284031215611bc157611bc06113ea565b5b6000611bcf84828501611b96565b91505092915050565b6000819050919050565b611bf3611bee826116ab565b611bd8565b82525050565b60008160e01b9050919050565b6000611c1182611bf9565b9050919050565b611c29611c2482611452565b611c06565b82525050565b6000611c3b8286611be2565b602082019150611c4b8285611c18565b600482019150611c5b8284611be2565b602082019150819050949350505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611cad601c83611c6c565b9150611cb882611c77565b601c82019050919050565b6000611cce82611ca0565b9150611cda8284611be2565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611d4e601883611896565b9150611d5982611d18565b602082019050919050565b60006020820190508181036000830152611d7d81611d41565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611dba601f83611896565b9150611dc582611d84565b602082019050919050565b60006020820190508181036000830152611de981611dad565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e4c602283611896565b9150611e5782611df0565b604082019050919050565b60006020820190508181036000830152611e7b81611e3f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ede602283611896565b9150611ee982611e82565b604082019050919050565b60006020820190508181036000830152611f0d81611ed1565b9050919050565b611f1d816116ab565b82525050565b600060ff82169050919050565b611f3981611f23565b82525050565b6000608082019050611f546000830187611f14565b611f616020830186611f30565b611f6e6040830185611f14565b611f7b6060830184611f14565b95945050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fc882611f84565b9150611fd383611f84565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561200857612007611f8e565b5b82820190509291505056fea164736f6c634300080f000a"
  }
};
