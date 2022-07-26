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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "Address": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "AddressUpgradeable": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60bf610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806339698415146042578063d011f91814605c575b600080fd5b60486076565b604051605391906099565b60405180910390f35b6062607d565b604051606d91906099565b60405180910390f35b620f424081565b606481565b6000819050919050565b6093816082565b82525050565b600060208201905060ac6000830184608c565b9291505056fea164736f6c634300080b000a"
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
      "10": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "56": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "69": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "77": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "97": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "100": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "122": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "123": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "137": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "250": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1284": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1287": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "3333": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4002": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4386": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "6666": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "9999": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42161": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42220": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "43113": "0x4bAe95A44FD4eA76DDaE87b1c046E995cD8e4DF2",
      "43114": "0x4bAe95A44FD4eA76DDaE87b1c046E995cD8e4DF2",
      "44787": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "80001": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "421611": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1313161554": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1313161555": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b"
    },
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
    "addresses": {
      "1": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "3": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "4": null,
      "5": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "10": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42": null,
      "56": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "69": null,
      "77": null,
      "97": null,
      "100": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "122": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "123": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "137": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "250": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1284": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1287": null,
      "3333": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "4002": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42220": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "43113": null,
      "43114": "0x13261B2b8674Cb855c408F3721281330ee16C66E",
      "44787": null,
      "80001": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "421611": null,
      "1313161554": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1313161555": "0xe5A160F89f330cc933816E896a3F36376DE0a835"
    },
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
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "cbWithdraw",
        "outputs": [],
        "stateMutability": "payable",
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50611706806100206000396000f3fe60806040526004361061004e5760003560e01c806340d280a21461005a57806350501f691461008357806352434c6e1461009f5780636f395e60146100bb5780639e32e2e6146100e457610055565b3661005557005b600080fd5b34801561006657600080fd5b50610081600480360381019061007c9190610eb8565b61010d565b005b61009d60048036038101906100989190610ee1565b610236565b005b6100b960048036038101906100b49190610f59565b6102fb565b005b3480156100c757600080fd5b506100e260048036038101906100dd9190610eb8565b6106ed565b005b3480156100f057600080fd5b5061010b60048036038101906101069190610fab565b6107e6565b005b610115610899565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561017c576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610186610934565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504681600101819055506127108160020160006101000a81548163ffffffff021916908363ffffffff1602179055507fcbfd47a07530fc4fffba96f5686a7127e5661fe26dd01503239ca2f66fcad990824660405161022a929190611286565b60405180910390a15050565b6000610240610961565b9050600181600001541415610281576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610293610899565b6102be30838673ffffffffffffffffffffffffffffffffffffffff1661098e9092919063ffffffff16565b6102eb3084848773ffffffffffffffffffffffffffffffffffffffff16610aec909392919063ffffffff16565b6000816000018190555050505050565b6000610305610961565b9050600181600001541415610346576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055508160000160208101906103639190610fd4565b67ffffffffffffffff164614156103a6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260600160208101906103d19190610eb8565b73ffffffffffffffffffffffffffffffffffffffff16141561041f576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082604001351161045d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260800160208101906104889190610eb8565b73ffffffffffffffffffffffffffffffffffffffff1614156104d6576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104e0610934565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061054e333086604001358760800160208101906105289190610eb8565b73ffffffffffffffffffffffffffffffffffffffff16610aec909392919063ffffffff16565b61058f81856040013586608001602081019061056a9190610eb8565b73ffffffffffffffffffffffffffffffffffffffff1661098e9092919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8560600160208101906105be9190610eb8565b8660800160208101906105d19190610eb8565b87604001358860000160208101906105e99190610fd4565b8960200160208101906105fc9190610fd4565b8860020160009054906101000a900463ffffffff166040518763ffffffff1660e01b815260040161063296959493929190611225565b600060405180830381600087803b15801561064c57600080fd5b505af1158015610660573d6000803e3d6000fd5b505050507fd565a5cf794050de1a171170c91acd5d14cbf11877dc3fa020e9975495ab17578460800160208101906106989190610eb8565b338660600160208101906106ac9190610eb8565b87604001358860000160208101906106c49190610fd4565b6040516106d5959493929190611311565b60405180910390a15050600081600001819055505050565b6106f5610899565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561075c576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610766610934565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4ae67faf3cf135d9eca1b5490d3613096d2d0610fca7496112fa46ef019fbd4e826040516107da91906111aa565b60405180910390a15050565b6113888163ffffffff1611610827576040517f9ff4125000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61082f610899565b6000610839610934565b9050818160020160006101000a81548163ffffffff021916908363ffffffff1602179055507f8d5e80c35df41e151b58f1a100ad605ae1ebcda3d0c329b22820b232767a77308260405161088d91906113d7565b60405180910390a15050565b6108a1610b75565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610932576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610929906112d1565b60405180910390fd5b565b6000807f9d7253cc9498e9cc54011bbbe9471a68adbc99d0ac1eef42369f5a452e814c4a90508091505090565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000811480610a27575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016109d59291906111c5565b60206040518083038186803b1580156109ed57600080fd5b505afa158015610a01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a259190610f82565b145b610a66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5d906113b7565b60405180910390fd5b610ae78363095ea7b360e01b8484604051602401610a85929190611286565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610ba2565b505050565b610b6f846323b872dd60e01b858585604051602401610b0d939291906111ee565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610ba2565b50505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610c04826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610c699092919063ffffffff16565b9050600081511115610c645780806020019051810190610c249190610f30565b610c63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5a90611397565b60405180910390fd5b5b505050565b6060610c788484600085610c81565b90509392505050565b606082471015610cc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbd906112f1565b60405180910390fd5b610ccf85610d95565b610d0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0590611377565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610d379190611193565b60006040518083038185875af1925050503d8060008114610d74576040519150601f19603f3d011682016040523d82523d6000602084013e610d79565b606091505b5091509150610d89828286610db8565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610dc857829050610e18565b600083511115610ddb5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0f91906112af565b60405180910390fd5b9392505050565b600081359050610e2e81611686565b92915050565b600081519050610e438161169d565b92915050565b600060a08284031215610e5b57600080fd5b81905092915050565b600081359050610e73816116b4565b92915050565b600081519050610e88816116b4565b92915050565b600081359050610e9d816116cb565b92915050565b600081359050610eb2816116e2565b92915050565b600060208284031215610eca57600080fd5b6000610ed884828501610e1f565b91505092915050565b600080600060608486031215610ef657600080fd5b6000610f0486828701610e1f565b9350506020610f1586828701610e1f565b9250506040610f2686828701610e64565b9150509250925092565b600060208284031215610f4257600080fd5b6000610f5084828501610e34565b91505092915050565b600060a08284031215610f6b57600080fd5b6000610f7984828501610e49565b91505092915050565b600060208284031215610f9457600080fd5b6000610fa284828501610e79565b91505092915050565b600060208284031215610fbd57600080fd5b6000610fcb84828501610e8e565b91505092915050565b600060208284031215610fe657600080fd5b6000610ff484828501610ea3565b91505092915050565b61100681611424565b82525050565b6000611017826113f2565b6110218185611408565b93506110318185602086016114b4565b80840191505092915050565b6000611048826113fd565b6110528185611413565b93506110628185602086016114b4565b61106b816114e7565b840191505092915050565b6000611083602283611413565b915061108e826114f8565b604082019050919050565b60006110a6602683611413565b91506110b182611547565b604082019050919050565b60006110c9600783611413565b91506110d482611596565b602082019050919050565b60006110ec601d83611413565b91506110f7826115bf565b602082019050919050565b600061110f602a83611413565b915061111a826115e8565b604082019050919050565b6000611132603683611413565b915061113d82611637565b604082019050919050565b61115181611462565b82525050565b61116081611490565b82525050565b61116f8161146c565b82525050565b61117e816114a2565b82525050565b61118d8161147c565b82525050565b600061119f828461100c565b915081905092915050565b60006020820190506111bf6000830184610ffd565b92915050565b60006040820190506111da6000830185610ffd565b6111e76020830184610ffd565b9392505050565b60006060820190506112036000830186610ffd565b6112106020830185610ffd565b61121d6040830184611148565b949350505050565b600060c08201905061123a6000830189610ffd565b6112476020830188610ffd565b6112546040830187611148565b6112616060830186611184565b61126e6080830185611184565b61127b60a0830184611166565b979650505050505050565b600060408201905061129b6000830185610ffd565b6112a86020830184611148565b9392505050565b600060208201905081810360008301526112c9818461103d565b905092915050565b600060208201905081810360008301526112ea81611076565b9050919050565b6000602082019050818103600083015261130a81611099565b9050919050565b600060c082019050818103600083015261132a816110bc565b90506113396020830188610ffd565b6113466040830187610ffd565b6113536060830186610ffd565b6113606080830185611148565b61136d60a0830184611175565b9695505050505050565b60006020820190508181036000830152611390816110df565b9050919050565b600060208201905081810360008301526113b081611102565b9050919050565b600060208201905081810360008301526113d081611125565b9050919050565b60006020820190506113ec6000830184611157565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061142f82611442565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600061149b8261146c565b9050919050565b60006114ad8261147c565b9050919050565b60005b838110156114d25780820151818401526020810190506114b7565b838111156114e1576000848401525b50505050565b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6362726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b61168f81611424565b811461169a57600080fd5b50565b6116a681611436565b81146116b157600080fd5b50565b6116bd81611462565b81146116c857600080fd5b50565b6116d48161146c565b81146116df57600080fd5b50565b6116eb8161147c565b81146116f657600080fd5b5056fea164736f6c6343000804000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": "0xD8Af651CB6C800eE1187cd496E920F80e60e274F",
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506114de806100206000396000f3fe60806040526004361061003f5760003560e01c80635fc0e73614610044578063a520f8df14610060578063b5f63d6b1461007c578063d858af20146100a5575b600080fd5b61005e60048036038101906100599190610ac8565b6100c1565b005b61007a60048036038101906100759190610b43565b610168565b005b34801561008857600080fd5b506100a3600480360381019061009e9190610b96565b6101f7565b005b6100bf60048036038101906100ba9190610d1c565b61031d565b005b60006100ee85604051806020016040528060008152506100df6103a5565b878a88883360008060006103cd565b90508573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168563ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e086868660405161015893929190610e2a565b60405180910390a4505050505050565b600061019684604051806020016040528060008152506101866103a5565b86600034883360008060006103cd565b90508373ffffffffffffffffffffffffffffffffffffffff168363ffffffff167fb47dd05ba9e0eb3ec95a42c27945552b2a232180e3b6441c20d4d5bff04ede953485856040516101e993929190610e2a565b60405180910390a350505050565b6101ff610605565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561026f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026690610ebe565b60405180910390fd5b60006102796106a0565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548163ffffffff021916908363ffffffff1602179055507ffcbf7a247efac41495da0df0e3ef60d8f0dd28dc5c86461b56507b29322dd8a0836040516103109190610eed565b60405180910390a1505050565b600061033a8a8a61032c6103a5565b8b8b8b8b8b8b8b60006103cd565b90508973ffffffffffffffffffffffffffffffffffffffff168863ffffffff167f0f54f42e149762e432717bddc67b5ffb97adff1fd377dd688d9747bc8c1aab3d89898d8a87604051610391959493929190610f90565b60405180910390a350505050505050505050565b6000806103b06106a0565b90508060000160149054906101000a900463ffffffff1691505090565b60006103db888888866106cd565b600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614610496578773ffffffffffffffffffffffffffffffffffffffff1663095ea7b361043361097f565b896040518363ffffffff1660e01b8152600401610451929190610fea565b6020604051808303816000875af1158015610470573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610494919061104b565b505b60006104a061097f565b905060006040518061012001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020018e81526020018d63ffffffff1681526020018c63ffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018515158152602001600015158152509050600060405180608001604052808381526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a81525090508273ffffffffffffffffffffffffffffffffffffffff16634156a88334836040518363ffffffff1660e01b81526004016105ae9190611226565b60206040518083038185885af11580156105cc573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105f19190611274565b93505050509b9a5050505050505050505050565b61060d6109b7565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461069e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069590611313565b60405180910390fd5b565b6000807fa4cabcf91d6212ba2873e2f19de6e26ae65fd3280b9eaa6d8bc38c5fba52ec9d90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561075f5780828461070f9190611362565b6107199190611362565b341461075a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075190611404565b60405180910390fd5b610979565b808261076b9190611362565b34146107ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a390611404565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107e79190610eed565b602060405180830381865afa158015610804573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108289190611439565b90508473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161086793929190611466565b6020604051808303816000875af1158015610886573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108aa919061104b565b5060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108e69190610eed565b602060405180830381865afa158015610903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109279190611439565b9050848282610936919061149d565b14610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096d90611404565b60405180910390fd5b50505b50505050565b60008061098a6106a0565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a23826109f8565b9050919050565b610a3381610a18565b8114610a3e57600080fd5b50565b600081359050610a5081610a2a565b92915050565b600063ffffffff82169050919050565b610a6f81610a56565b8114610a7a57600080fd5b50565b600081359050610a8c81610a66565b92915050565b6000819050919050565b610aa581610a92565b8114610ab057600080fd5b50565b600081359050610ac281610a9c565b92915050565b600080600080600060a08688031215610ae457610ae36109ee565b5b6000610af288828901610a41565b9550506020610b0388828901610a41565b9450506040610b1488828901610a7d565b9350506060610b2588828901610ab3565b9250506080610b3688828901610ab3565b9150509295509295909350565b600080600060608486031215610b5c57610b5b6109ee565b5b6000610b6a86828701610a41565b9350506020610b7b86828701610a7d565b9250506040610b8c86828701610ab3565b9150509250925092565b60008060408385031215610bad57610bac6109ee565b5b6000610bbb85828601610a41565b9250506020610bcc85828601610a7d565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610c2982610be0565b810181811067ffffffffffffffff82111715610c4857610c47610bf1565b5b80604052505050565b6000610c5b6109e4565b9050610c678282610c20565b919050565b600067ffffffffffffffff821115610c8757610c86610bf1565b5b610c9082610be0565b9050602081019050919050565b82818337600083830152505050565b6000610cbf610cba84610c6c565b610c51565b905082815260208101848484011115610cdb57610cda610bdb565b5b610ce6848285610c9d565b509392505050565b600082601f830112610d0357610d02610bd6565b5b8135610d13848260208601610cac565b91505092915050565b60008060008060008060008060006101208a8c031215610d3f57610d3e6109ee565b5b6000610d4d8c828d01610a41565b99505060208a013567ffffffffffffffff811115610d6e57610d6d6109f3565b5b610d7a8c828d01610cee565b9850506040610d8b8c828d01610a7d565b9750506060610d9c8c828d01610a41565b9650506080610dad8c828d01610ab3565b95505060a0610dbe8c828d01610ab3565b94505060c0610dcf8c828d01610a41565b93505060e0610de08c828d01610a41565b925050610100610df28c828d01610ab3565b9150509295985092959850929598565b610e0b81610a92565b82525050565b6000819050919050565b610e2481610e11565b82525050565b6000606082019050610e3f6000830186610e02565b610e4c6020830185610e02565b610e596040830184610e1b565b949350505050565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b6000610ea8601883610e61565b9150610eb382610e72565b602082019050919050565b60006020820190508181036000830152610ed781610e9b565b9050919050565b610ee781610a18565b82525050565b6000602082019050610f026000830184610ede565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f42578082015181840152602081019050610f27565b83811115610f51576000848401525b50505050565b6000610f6282610f08565b610f6c8185610f13565b9350610f7c818560208601610f24565b610f8581610be0565b840191505092915050565b600060a082019050610fa56000830188610ede565b610fb26020830187610e02565b8181036040830152610fc48186610f57565b9050610fd36060830185610e02565b610fe06080830184610e1b565b9695505050505050565b6000604082019050610fff6000830185610ede565b61100c6020830184610e02565b9392505050565b60008115159050919050565b61102881611013565b811461103357600080fd5b50565b6000815190506110458161101f565b92915050565b600060208284031215611061576110606109ee565b5b600061106f84828501611036565b91505092915050565b61108181610a18565b82525050565b600082825260208201905092915050565b60006110a382610f08565b6110ad8185611087565b93506110bd818560208601610f24565b6110c681610be0565b840191505092915050565b6110da81610a56565b82525050565b6110e981610a92565b82525050565b6110f881611013565b82525050565b6000610120830160008301516111176000860182611078565b506020830151848203602086015261112f8282611098565b915050604083015161114460408601826110d1565b50606083015161115760608601826110d1565b50608083015161116a6080860182611078565b5060a083015161117d60a0860182611078565b5060c083015161119060c08601826110e0565b5060e08301516111a360e08601826110ef565b506101008301516111b86101008601826110ef565b508091505092915050565b600060808301600083015184820360008601526111e082826110fe565b91505060208301516111f56020860182611078565b50604083015161120860408601826110e0565b50606083015161121b60608601826110e0565b508091505092915050565b6000602082019050818103600083015261124081846111c3565b905092915050565b61125181610e11565b811461125c57600080fd5b50565b60008151905061126e81611248565b92915050565b60006020828403121561128a576112896109ee565b5b60006112988482850161125f565b91505092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006112fd602283610e61565b9150611308826112a1565b604082019050919050565b6000602082019050818103600083015261132c816112f0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061136d82610a92565b915061137883610a92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113ad576113ac611333565b5b828201905092915050565b7f436f6e6e6578743a20496e76616c69642076616c756500000000000000000000600082015250565b60006113ee601683610e61565b91506113f9826113b8565b602082019050919050565b6000602082019050818103600083015261141d816113e1565b9050919050565b60008151905061143381610a9c565b92915050565b60006020828403121561144f5761144e6109ee565b5b600061145d84828501611424565b91505092915050565b600060608201905061147b6000830186610ede565b6114886020830185610ede565b6114956040830184610e02565b949350505050565b60006114a882610a92565b91506114b383610a92565b9250828210156114c6576114c5611333565b5b82820390509291505056fea164736f6c634300080b000a"
  },
  "ConnextMessage": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "Context": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": "0xF1447514368fCC942279862a8B5D6Ed7beDFf431",
      "123": "0xF1447514368fCC942279862a8B5D6Ed7beDFf431",
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": "0x5ceeBd05D140840dc2f448B6d2233DF46b9EfcE4",
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405260405162004984380380620049848339818101604052810190620000299190620018dc565b6200003f82620001f760201b620001681760201c565b6000600167ffffffffffffffff8111156200005f576200005e62001923565b5b6040519080825280602002602001820160405280156200009c57816020015b6200008862001826565b8152602001906001900390816200007e5790505b5090506000600167ffffffffffffffff811115620000bf57620000be62001923565b5b604051908082528060200260200182016040528015620000ee5781602001602082028036833780820191505090505b509050631f931c1c60e01b8160008151811062000110576200010f62001952565b5b60200260200101907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156200019a576200019962001981565b5b81526020018281525082600081518110620001ba57620001b962001952565b5b6020026020010181905250620001ed82600060405180602001604052806000815250620002d660201b6200023f1760201c565b50505050620025d9565b6000620002096200055d60201b60201c565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101562000508576000848281518110620002fb57620002fa62001952565b5b60200260200101516020015190506000600281111562000320576200031f62001981565b5b81600281111562000336576200033562001981565b5b141562000397576200039185838151811062000357576200035662001952565b5b60200260200101516000015186848151811062000379576200037862001952565b5b6020026020010151604001516200058a60201b60201c565b620004f1565b60016002811115620003ae57620003ad62001981565b5b816002811115620003c457620003c362001981565b5b141562000425576200041f858381518110620003e557620003e462001952565b5b60200260200101516000015186848151811062000407576200040662001952565b5b6020026020010151604001516200082e60201b60201c565b620004f0565b6002808111156200043b576200043a62001981565b5b81600281111562000451576200045062001981565b5b1415620004b257620004ac85838151811062000472576200047162001952565b5b60200260200101516000015186848151811062000494576200049362001952565b5b60200260200101516040015162000ae560201b60201c565b620004ef565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004e69062001a37565b60405180910390fd5b5b5b508080620004ff9062001a92565b915050620002d9565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516200053e9392919062001e17565b60405180910390a162000558828262000c8d60201b60201c565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000815111620005d1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005c89062001ed8565b60405180910390fd5b6000620005e36200055d60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141562000658576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064f9062001f70565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415620006cf57620006ce828562000ebc60201b60201c565b5b60005b835181101562000827576000848281518110620006f457620006f362001952565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620007eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007e29062002008565b60405180910390fd5b620007ff8583868a62000fa060201b60201c565b83806200080c9062002042565b945050505080806200081e9062001a92565b915050620006d2565b5050505050565b600081511162000875576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200086c9062001ed8565b60405180910390fd5b6000620008876200055d60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620008fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008f39062001f70565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415620009735762000972828562000ebc60201b60201c565b5b60005b835181101562000ade57600084828151811062000998576200099762001952565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a8690620020f2565b60405180910390fd5b62000aa28582846200114d60201b60201c565b62000ab68583868a62000fa060201b60201c565b838062000ac39062002042565b9450505050808062000ad59062001a92565b91505062000976565b5050505050565b600081511162000b2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b239062001ed8565b60405180910390fd5b600062000b3e6200055d60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000bb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ba9906200218a565b60405180910390fd5b60005b825181101562000c8757600083828151811062000bd75762000bd662001952565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c6f8482846200114d60201b60201c565b5050808062000c7e9062001a92565b91505062000bb5565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000d1057600081511462000d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d019062002222565b60405180910390fd5b62000eb8565b600081511162000d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d4e90620022ba565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000db75762000db6826040518060600160405280602881526020016200493860289139620017d160201b60201c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff168360405162000de191906200231e565b600060405180830381855af49150503d806000811462000e1e576040519150601f19603f3d011682016040523d82523d6000602084013e62000e23565b606091505b50915091508162000eb55760008151111562000e7857806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e6f919062002383565b60405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000eac906200241d565b60405180910390fd5b50505b5050565b62000ee7816040518060600160405280602481526020016200496060249139620017d160201b60201c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620011c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011b790620024b5565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562001232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001229906200254d565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490506200130b91906200256f565b9050808214620014a65760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811062001370576200136f62001952565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110620013ef57620013ee62001952565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480620014fd57620014fc620025aa565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff021916905550506000811415620017ca57600060018660020180549050620015eb91906200256f565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146200173357600087600201838154811062001659576200165862001952565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080886002018381548110620016a0576200169f62001952565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806200174a5762001749620025aa565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b905060008111829062001820576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162001817919062002383565b60405180910390fd5b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111562001865576200186462001981565b5b8152602001606081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620018a48262001877565b9050919050565b620018b68162001897565b8114620018c257600080fd5b50565b600081519050620018d681620018ab565b92915050565b60008060408385031215620018f657620018f562001872565b5b60006200190685828601620018c5565b92505060206200191985828601620018c5565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b600062001a1f602783620019b0565b915062001a2c82620019c1565b604082019050919050565b6000602082019050818103600083015262001a528162001a10565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600062001a9f8262001a88565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562001ad55762001ad462001a59565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b62001b178162001897565b82525050565b6003811062001b315762001b3062001981565b5b50565b600081905062001b448262001b1d565b919050565b600062001b568262001b34565b9050919050565b62001b688162001b49565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62001bd18162001b9a565b82525050565b600062001be5838362001bc6565b60208301905092915050565b6000602082019050919050565b600062001c0b8262001b6e565b62001c17818562001b79565b935062001c248362001b8a565b8060005b8381101562001c5b57815162001c3f888262001bd7565b975062001c4c8362001bf1565b92505060018101905062001c28565b5085935050505092915050565b600060608301600083015162001c82600086018262001b0c565b50602083015162001c97602086018262001b5d565b506040830151848203604086015262001cb1828262001bfe565b9150508091505092915050565b600062001ccc838362001c68565b905092915050565b6000602082019050919050565b600062001cee8262001ae0565b62001cfa818562001aeb565b93508360208202850162001d0e8562001afc565b8060005b8581101562001d50578484038952815162001d2e858262001cbe565b945062001d3b8362001cd4565b925060208a0199505060018101905062001d12565b50829750879550505050505092915050565b62001d6d8162001897565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562001daf57808201518184015260208101905062001d92565b8381111562001dbf576000848401525b50505050565b6000601f19601f8301169050919050565b600062001de38262001d73565b62001def818562001d7e565b935062001e0181856020860162001d8f565b62001e0c8162001dc5565b840191505092915050565b6000606082019050818103600083015262001e33818662001ce1565b905062001e44602083018562001d62565b818103604083015262001e58818462001dd6565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b600062001ec0602b83620019b0565b915062001ecd8262001e62565b604082019050919050565b6000602082019050818103600083015262001ef38162001eb1565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600062001f58602c83620019b0565b915062001f658262001efa565b604082019050919050565b6000602082019050818103600083015262001f8b8162001f49565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600062001ff0603583620019b0565b915062001ffd8262001f92565b604082019050919050565b60006020820190508181036000830152620020238162001fe1565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b60006200204f826200202a565b91506bffffffffffffffffffffffff82141562002071576200207062001a59565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000620020da603883620019b0565b9150620020e7826200207c565b604082019050919050565b600060208201905081810360008301526200210d81620020cb565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600062002172603683620019b0565b91506200217f8262002114565b604082019050919050565b60006020820190508181036000830152620021a58162002163565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b60006200220a603c83620019b0565b91506200221782620021ac565b604082019050919050565b600060208201905081810360008301526200223d81620021fb565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000620022a2603d83620019b0565b9150620022af8262002244565b604082019050919050565b60006020820190508181036000830152620022d58162002293565b9050919050565b600081905092915050565b6000620022f48262001d73565b620023008185620022dc565b93506200231281856020860162001d8f565b80840191505092915050565b60006200232c8284620022e7565b915081905092915050565b600081519050919050565b60006200234f8262002337565b6200235b8185620019b0565b93506200236d81856020860162001d8f565b620023788162001dc5565b840191505092915050565b600060208201905081810360008301526200239f818462002342565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b600062002405602683620019b0565b91506200241282620023a7565b604082019050919050565b600060208201905081810360008301526200243881620023f6565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006200249d603783620019b0565b9150620024aa826200243f565b604082019050919050565b60006020820190508181036000830152620024d0816200248e565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600062002535602e83620019b0565b91506200254282620024d7565b604082019050919050565b60006020820190508181036000830152620025688162002526565b9050919050565b60006200257c8262001a88565b9150620025898362001a88565b9250828210156200259f576200259e62001a59565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b61234f80620025e96000396000f3fe60806040523661000b57005b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150600082600001600080357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610142576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610139906116d5565b60405180910390fd5b3660008037600080366000845af43d6000803e8060008114610163573d6000f35b3d6000fd5b6000610172610471565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b83518110156104265760008482815181106102605761025f6116f5565b5b60200260200101516020015190506000600281111561028257610281611724565b5b81600281111561029557610294611724565b5b14156102e6576102e18583815181106102b1576102b06116f5565b5b6020026020010151600001518684815181106102d0576102cf6116f5565b5b60200260200101516040015161049e565b610412565b600160028111156102fa576102f9611724565b5b81600281111561030d5761030c611724565b5b141561035e57610359858381518110610329576103286116f5565b5b602002602001015160000151868481518110610348576103476116f5565b5b602002602001015160400151610717565b610411565b60028081111561037157610370611724565b5b81600281111561038457610383611724565b5b14156103d5576103d08583815181106103a05761039f6116f5565b5b6020026020010151600001518684815181106103bf576103be6116f5565b5b60200260200101516040015161099b565b610410565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610407906117c5565b60405180910390fd5b5b5b50808061041e9061181e565b915050610242565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161045a93929190611b94565b60405180910390a161046c8282610b26565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116104e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d990611c4b565b60405180910390fd5b60006104ec610471565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561055e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055590611cdd565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1614156105cc576105cb8285610d39565b5b60005b83518110156107105760008482815181106105ed576105ec6116f5565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d890611d6f565b60405180910390fd5b6106ed8583868a610e14565b83806106f890611da7565b945050505080806107089061181e565b9150506105cf565b5050505050565b600081511161075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075290611c4b565b60405180910390fd5b6000610765610471565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ce90611cdd565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415610845576108448285610d39565b5b60005b8351811015610994576000848281518110610866576108656116f5565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561095a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095190611e4e565b60405180910390fd5b610965858284610fc1565b6109718583868a610e14565b838061097c90611da7565b9450505050808061098c9061181e565b915050610848565b5050505050565b60008151116109df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d690611c4b565b60405180910390fd5b60006109e9610471565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5190611ee0565b60405180910390fd5b60005b8251811015610b20576000838281518110610a7b57610a7a6116f5565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b0b848284610fc1565b50508080610b189061181e565b915050610a5d565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ba4576000815114610b9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9690611f72565b60405180910390fd5b610d35565b6000815111610be8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdf90612004565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c3e57610c3d826040518060600160405280602881526020016122f760289139611626565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610c669190612060565b600060405180830381855af49150503d8060008114610ca1576040519150601f19603f3d011682016040523d82523d6000602084013e610ca6565b606091505b509150915081610d3257600081511115610cf757806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cee91906120bb565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d299061214f565b60405180910390fd5b50505b5050565b610d5b8160405180606001604052806024815260200161231f60249139611626565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611031576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611028906121e1565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109790612273565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805490506111779190612293565b905080821461130b5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106111d8576111d76116f5565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110611254576112536116f5565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061135f5761135e6122c7565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050600081141561161f5760006001866002018054905061144a9190612293565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461158b5760008760020183815481106114b4576114b36116f5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106114f8576114f76116f5565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b8660020180548061159f5761159e6122c7565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166991906120bb565b60405180910390fd5b50505050565b600082825260208201905092915050565b7f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374600082015250565b60006116bf602083611678565b91506116ca82611689565b602082019050919050565b600060208201905081810360008301526116ee816116b2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006117af602783611678565b91506117ba82611753565b604082019050919050565b600060208201905081810360008301526117de816117a2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061182982611814565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561185c5761185b6117e5565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118be82611893565b9050919050565b6118ce816118b3565b82525050565b600381106118e5576118e4611724565b5b50565b60008190506118f6826118d4565b919050565b6000611906826118e8565b9050919050565b611916816118fb565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61197d81611948565b82525050565b600061198f8383611974565b60208301905092915050565b6000602082019050919050565b60006119b38261191c565b6119bd8185611927565b93506119c883611938565b8060005b838110156119f95781516119e08882611983565b97506119eb8361199b565b9250506001810190506119cc565b5085935050505092915050565b6000606083016000830151611a1e60008601826118c5565b506020830151611a31602086018261190d565b5060408301518482036040860152611a4982826119a8565b9150508091505092915050565b6000611a628383611a06565b905092915050565b6000602082019050919050565b6000611a8282611867565b611a8c8185611872565b935083602082028501611a9e85611883565b8060005b85811015611ada5784840389528151611abb8582611a56565b9450611ac683611a6a565b925060208a01995050600181019050611aa2565b50829750879550505050505092915050565b611af5816118b3565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b35578082015181840152602081019050611b1a565b83811115611b44576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b6682611afb565b611b708185611b06565b9350611b80818560208601611b17565b611b8981611b4a565b840191505092915050565b60006060820190508181036000830152611bae8186611a77565b9050611bbd6020830185611aec565b8181036040830152611bcf8184611b5b565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611c35602b83611678565b9150611c4082611bd9565b604082019050919050565b60006020820190508181036000830152611c6481611c28565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611cc7602c83611678565b9150611cd282611c6b565b604082019050919050565b60006020820190508181036000830152611cf681611cba565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000611d59603583611678565b9150611d6482611cfd565b604082019050919050565b60006020820190508181036000830152611d8881611d4c565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000611db282611d8f565b91506bffffffffffffffffffffffff821415611dd157611dd06117e5565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000611e38603883611678565b9150611e4382611ddc565b604082019050919050565b60006020820190508181036000830152611e6781611e2b565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000611eca603683611678565b9150611ed582611e6e565b604082019050919050565b60006020820190508181036000830152611ef981611ebd565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000611f5c603c83611678565b9150611f6782611f00565b604082019050919050565b60006020820190508181036000830152611f8b81611f4f565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000611fee603d83611678565b9150611ff982611f92565b604082019050919050565b6000602082019050818103600083015261201d81611fe1565b9050919050565b600081905092915050565b600061203a82611afb565b6120448185612024565b9350612054818560208601611b17565b80840191505092915050565b600061206c828461202f565b915081905092915050565b600081519050919050565b600061208d82612077565b6120978185611678565b93506120a7818560208601611b17565b6120b081611b4a565b840191505092915050565b600060208201905081810360008301526120d58184612082565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b6000612139602683611678565b9150612144826120dd565b604082019050919050565b600060208201905081810360008301526121688161212c565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006121cb603783611678565b91506121d68261216f565b604082019050919050565b600060208201905081810360008301526121fa816121be565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b600061225d602e83611678565b915061226882612201565b604082019050919050565b6000602082019050818103600083015261228c81612250565b9050919050565b600061229e82611814565b91506122a983611814565b9250828210156122bc576122bb6117e5565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080b000a4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": "0xf859F683a47b3D0E2A964eFDdf7392972700a101",
      "123": "0xf859F683a47b3D0E2A964eFDdf7392972700a101",
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": "0x0a5Fe2A5EFF1354805A808e0d7D245F07D99a51d",
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506126f8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906116b7565b61004c565b005b6100546100b6565b6100af8585906100649190611a55565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610383565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611aed565b60405180910390fd5b565b60005b835181101561033857600084828151811061017257610171611b0d565b5b60200260200101516020015190506000600281111561019457610193611b3c565b5b8160028111156101a7576101a6611b3c565b5b14156101f8576101f38583815181106101c3576101c2611b0d565b5b6020026020010151600001518684815181106101e2576101e1611b0d565b5b6020026020010151604001516103b0565b610324565b6001600281111561020c5761020b611b3c565b5b81600281111561021f5761021e611b3c565b5b14156102705761026b85838151811061023b5761023a611b0d565b5b60200260200101516000015186848151811061025a57610259611b0d565b5b602002602001015160400151610629565b610323565b60028081111561028357610282611b3c565b5b81600281111561029657610295611b3c565b5b14156102e7576102e28583815181106102b2576102b1611b0d565b5b6020026020010151600001518684815181106102d1576102d0611b0d565b5b6020026020010151604001516108ad565b610322565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031990611bdd565b60405180910390fd5b5b5b50808061033090611c36565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036c93929190611f3d565b60405180910390a161037e8282610a38565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103eb90611ff4565b60405180910390fd5b60006103fe610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790612086565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1614156104de576104dd8285610c4b565b5b60005b83518110156106225760008482815181106104ff576104fe611b0d565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ea90612118565b60405180910390fd5b6105ff8583868a610d26565b838061060a90612150565b9450505050808061061a90611c36565b9150506104e1565b5050505050565b600081511161066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490611ff4565b60405180910390fd5b6000610677610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090612086565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff161415610757576107568285610c4b565b5b60005b83518110156108a657600084828151811061077857610777611b0d565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561086c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610863906121f7565b60405180910390fd5b610877858284610ed3565b6108838583868a610d26565b838061088e90612150565b9450505050808061089e90611c36565b91505061075a565b5050505050565b60008151116108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611ff4565b60405180910390fd5b60006108fb610383565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461096c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096390612289565b60405180910390fd5b60005b8251811015610a3257600083828151811061098d5761098c611b0d565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a1d848284610ed3565b50508080610a2a90611c36565b91505061096f565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab6576000815114610ab1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa89061231b565b60405180910390fd5b610c47565b6000815111610afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af1906123ad565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b5057610b4f826040518060600160405280602881526020016126a060289139611538565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b789190612409565b600060405180830381855af49150503d8060008114610bb3576040519150601f19603f3d011682016040523d82523d6000602084013e610bb8565b606091505b509150915081610c4457600081511115610c0957806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c009190612464565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b906124f8565b60405180910390fd5b50505b5050565b610c6d816040518060600160405280602481526020016126c860249139611538565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3a9061258a565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa99061261c565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180549050611089919061263c565b905080821461121d5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110ea576110e9611b0d565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061116657611165611b0d565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061127157611270612670565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008114156115315760006001866002018054905061135c919061263c565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461149d5760008760020183815481106113c6576113c5611b0d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811061140a57611409611b0d565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114b1576114b0612670565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161157b9190612464565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126115c3576115c261159e565b5b8235905067ffffffffffffffff8111156115e0576115df6115a3565b5b6020830191508360208202830111156115fc576115fb6115a8565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061162e82611603565b9050919050565b61163e81611623565b811461164957600080fd5b50565b60008135905061165b81611635565b92915050565b60008083601f8401126116775761167661159e565b5b8235905067ffffffffffffffff811115611694576116936115a3565b5b6020830191508360018202830111156116b0576116af6115a8565b5b9250929050565b6000806000806000606086880312156116d3576116d2611594565b5b600086013567ffffffffffffffff8111156116f1576116f0611599565b5b6116fd888289016115ad565b955095505060206117108882890161164c565b935050604086013567ffffffffffffffff81111561173157611730611599565b5b61173d88828901611661565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117958261174c565b810181811067ffffffffffffffff821117156117b4576117b361175d565b5b80604052505050565b60006117c761158a565b90506117d3828261178c565b919050565b600067ffffffffffffffff8211156117f3576117f261175d565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061181b57600080fd5b50565b60008135905061182d8161180e565b92915050565b600067ffffffffffffffff82111561184e5761184d61175d565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118948161185f565b811461189f57600080fd5b50565b6000813590506118b18161188b565b92915050565b60006118ca6118c584611833565b6117bd565b905080838252602082019050602084028301858111156118ed576118ec6115a8565b5b835b81811015611916578061190288826118a2565b8452602084019350506020810190506118ef565b5050509392505050565b600082601f8301126119355761193461159e565b5b81356119458482602086016118b7565b91505092915050565b60006060828403121561196457611963611804565b5b61196e60606117bd565b9050600061197e8482850161164c565b60008301525060206119928482850161181e565b602083015250604082013567ffffffffffffffff8111156119b6576119b5611809565b5b6119c284828501611920565b60408301525092915050565b60006119e16119dc846117d8565b6117bd565b90508083825260208201905060208402830185811115611a0457611a036115a8565b5b835b81811015611a4b57803567ffffffffffffffff811115611a2957611a2861159e565b5b808601611a36898261194e565b85526020850194505050602081019050611a06565b5050509392505050565b6000611a623684846119ce565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad7602283611a6a565b9150611ae282611a7b565b604082019050919050565b60006020820190508181036000830152611b0681611aca565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611bc7602783611a6a565b9150611bd282611b6b565b604082019050919050565b60006020820190508181036000830152611bf681611bba565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611c4182611c2c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c7457611c73611bfd565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611cb481611623565b82525050565b60038110611ccb57611cca611b3c565b5b50565b6000819050611cdc82611cba565b919050565b6000611cec82611cce565b9050919050565b611cfc81611ce1565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d378161185f565b82525050565b6000611d498383611d2e565b60208301905092915050565b6000602082019050919050565b6000611d6d82611d02565b611d778185611d0d565b9350611d8283611d1e565b8060005b83811015611db3578151611d9a8882611d3d565b9750611da583611d55565b925050600181019050611d86565b5085935050505092915050565b6000606083016000830151611dd86000860182611cab565b506020830151611deb6020860182611cf3565b5060408301518482036040860152611e038282611d62565b9150508091505092915050565b6000611e1c8383611dc0565b905092915050565b6000602082019050919050565b6000611e3c82611c7f565b611e468185611c8a565b935083602082028501611e5885611c9b565b8060005b85811015611e945784840389528151611e758582611e10565b9450611e8083611e24565b925060208a01995050600181019050611e5c565b50829750879550505050505092915050565b611eaf81611623565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611eef578082015181840152602081019050611ed4565b83811115611efe576000848401525b50505050565b6000611f0f82611eb5565b611f198185611ec0565b9350611f29818560208601611ed1565b611f328161174c565b840191505092915050565b60006060820190508181036000830152611f578186611e31565b9050611f666020830185611ea6565b8181036040830152611f788184611f04565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611fde602b83611a6a565b9150611fe982611f82565b604082019050919050565b6000602082019050818103600083015261200d81611fd1565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000612070602c83611a6a565b915061207b82612014565b604082019050919050565b6000602082019050818103600083015261209f81612063565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000612102603583611a6a565b915061210d826120a6565b604082019050919050565b60006020820190508181036000830152612131816120f5565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061215b82612138565b91506bffffffffffffffffffffffff82141561217a57612179611bfd565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006121e1603883611a6a565b91506121ec82612185565b604082019050919050565b60006020820190508181036000830152612210816121d4565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000612273603683611a6a565b915061227e82612217565b604082019050919050565b600060208201905081810360008301526122a281612266565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000612305603c83611a6a565b9150612310826122a9565b604082019050919050565b60006020820190508181036000830152612334816122f8565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000612397603d83611a6a565b91506123a28261233b565b604082019050919050565b600060208201905081810360008301526123c68161238a565b9050919050565b600081905092915050565b60006123e382611eb5565b6123ed81856123cd565b93506123fd818560208601611ed1565b80840191505092915050565b600061241582846123d8565b915081905092915050565b600081519050919050565b600061243682612420565b6124408185611a6a565b9350612450818560208601611ed1565b6124598161174c565b840191505092915050565b6000602082019050818103600083015261247e818461242b565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006124e2602683611a6a565b91506124ed82612486565b604082019050919050565b60006020820190508181036000830152612511816124d5565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b6000612574603783611a6a565b915061257f82612518565b604082019050919050565b600060208201905081810360008301526125a381612567565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b6000612606602e83611a6a565b9150612611826125aa565b604082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b600061264782611c2c565b915061265283611c2c565b92508282101561266557612664611bfd565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": "0x8BFbB21683e21DC4B11af352117d6D4F2bc62f8e",
      "123": "0x8BFbB21683e21DC4B11af352117d6D4F2bc62f8e",
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": "0x40CdEEc1D775614360254fEeEfDB9B3C3d5EF6EB",
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50610be4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c1461008c5780637a0ed627146100aa578063adfca15e146100c8578063cdffacc6146100f8575b600080fd5b6100766004803603810190610071919061068f565b610128565b60405161008391906106d7565b60405180910390f35b61009461019e565b6040516100a191906107e2565b60405180910390f35b6100b261023b565b6040516100bf91906109c1565b60405180910390f35b6100e260048036038101906100dd9190610a0f565b61045e565b6040516100ef9190610aab565b60405180910390f35b610112600480360381019061010d919061068f565b610549565b60405161011f9190610adc565b60405180910390f35b6000806101336105d5565b9050806003016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16915050919050565b606060006101aa6105d5565b90508060020180548060200260200160405190810160405280929190818152602001828054801561023057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101e6575b505050505091505090565b606060006102476105d5565b90506000816002018054905090508067ffffffffffffffff81111561026f5761026e610af7565b5b6040519080825280602002602001820160405280156102a857816020015b610295610602565b81526020019060019003908161028d5790505b50925060005b818110156104585760008360020182815481106102ce576102cd610b26565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061030f5761030e610b26565b5b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561041d57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103ca5790505b505050505085838151811061043557610434610b26565b5b60200260200101516020018190525050808061045090610b8e565b9150506102ae565b50505090565b6060600061046a6105d5565b90508060010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561053c57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104e95790505b5050505050915050919050565b6000806105546105d5565b9050806000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61066c81610637565b811461067757600080fd5b50565b60008135905061068981610663565b92915050565b6000602082840312156106a5576106a4610632565b5b60006106b38482850161067a565b91505092915050565b60008115159050919050565b6106d1816106bc565b82525050565b60006020820190506106ec60008301846106c8565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107498261071e565b9050919050565b6107598161073e565b82525050565b600061076b8383610750565b60208301905092915050565b6000602082019050919050565b600061078f826106f2565b61079981856106fd565b93506107a48361070e565b8060005b838110156107d55781516107bc888261075f565b97506107c783610777565b9250506001810190506107a8565b5085935050505092915050565b600060208201905081810360008301526107fc8184610784565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61086581610637565b82525050565b6000610877838361085c565b60208301905092915050565b6000602082019050919050565b600061089b82610830565b6108a5818561083b565b93506108b08361084c565b8060005b838110156108e15781516108c8888261086b565b97506108d383610883565b9250506001810190506108b4565b5085935050505092915050565b60006040830160008301516109066000860182610750565b506020830151848203602086015261091e8282610890565b9150508091505092915050565b600061093783836108ee565b905092915050565b6000602082019050919050565b600061095782610804565b610961818561080f565b93508360208202850161097385610820565b8060005b858110156109af5784840389528151610990858261092b565b945061099b8361093f565b925060208a01995050600181019050610977565b50829750879550505050505092915050565b600060208201905081810360008301526109db818461094c565b905092915050565b6109ec8161073e565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a24610632565b5b6000610a33848285016109fa565b91505092915050565b600082825260208201905092915050565b6000610a5882610830565b610a628185610a3c565b9350610a6d8361084c565b8060005b83811015610a9e578151610a85888261086b565b9750610a9083610883565b925050600181019050610a71565b5085935050505092915050565b60006020820190508181036000830152610ac58184610a4d565b905092915050565b610ad68161073e565b82525050565b6000602082019050610af16000830184610acd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000610b9982610b84565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610bcc57610bcb610b55565b5b60018201905091905056fea164736f6c634300080b000a"
  },
  "ECDSA": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "ENSAbstractResolver": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "1": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "3": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "5": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "10": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "56": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "69": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "77": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "97": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "100": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "122": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "123": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "137": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "250": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1284": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1287": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "3333": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4002": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4386": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "6666": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "9999": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42161": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42220": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "43113": "0x329393556727F42F2D19243bb8C5660C3aa98140",
      "43114": "0x329393556727F42F2D19243bb8C5660C3aa98140",
      "44787": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "80001": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "421611": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1313161554": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1313161555": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08"
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
      "1": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "3": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "5": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "10": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "56": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "69": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "77": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "97": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "100": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "122": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "123": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "137": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "250": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1284": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1287": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "3333": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4002": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4386": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "6666": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "9999": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42161": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42220": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "43113": "0xf52454A9DE293f59aCd957a9c4D49C8D4152bae9",
      "43114": "0xf52454A9DE293f59aCd957a9c4D49C8D4152bae9",
      "44787": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "80001": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "421611": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1313161554": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1313161555": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0"
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "56": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "69": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "77": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "97": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "100": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "122": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "123": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "137": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "250": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1284": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1287": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "3333": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "4002": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "4386": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "6666": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "9999": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42161": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42220": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "43113": "0x3255c5C4d96F310F48356C4822761323074DbcB3",
      "43114": "0x3255c5C4d96F310F48356C4822761323074DbcB3",
      "44787": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "80001": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "421611": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1313161554": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1313161555": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688"
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
      "10": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "56": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "69": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "77": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "97": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "100": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "122": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "123": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "137": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "250": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1284": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1287": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "3333": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "4002": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "4386": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "6666": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "9999": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42161": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42220": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "43113": "0x7C68A0e79DE9D6964389760Ec0C9E0ea53F7102a",
      "43114": "0x7C68A0e79DE9D6964389760Ec0C9E0ea53F7102a",
      "44787": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "80001": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "421611": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1313161554": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1313161555": "0x523C92966e9d2067ba547f59D51E907c20FD8761"
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50611243806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b26565b60405180910390f35b6100e660048036038101906100e19190610be1565b610308565b6040516100f39190610c3c565b60405180910390f35b61010461032b565b6040516101119190610c66565b60405180910390f35b610134600480360381019061012f9190610c81565b610335565b6040516101419190610c3c565b60405180910390f35b610152610364565b60405161015f9190610cf0565b60405180910390f35b610182600480360381019061017d9190610be1565b61036d565b60405161018f9190610c3c565b60405180910390f35b6101b260048036038101906101ad9190610d0b565b6103a4565b6040516101bf9190610c66565b60405180910390f35b6101d06103ed565b6040516101dd9190610b26565b60405180910390f35b61020060048036038101906101fb9190610be1565b61047f565b60405161020d9190610c3c565b60405180910390f35b610230600480360381019061022b9190610be1565b6104f6565b60405161023d9190610c3c565b60405180910390f35b610260600480360381019061025b9190610d38565b610519565b60405161026d9190610c66565b60405180910390f35b60606036805461028590610da7565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610da7565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136105a0565b90506103208185856105a8565b600191505092915050565b6000603554905090565b6000806103406105a0565b905061034d858285610773565b6103588585856107ff565b60019150509392505050565b60006012905090565b6000806103786105a0565b905061039981858561038a8589610519565b6103949190610e08565b6105a8565b600191505092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546103fc90610da7565b80601f016020809104026020016040519081016040528092919081815260200182805461042890610da7565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6105a0565b905060006104988286610519565b9050838110156104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d490610ed0565b60405180910390fd5b6104ea82868684036105a8565b60019250505092915050565b6000806105016105a0565b905061050e8185856107ff565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f90610f62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f90610ff4565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107669190610c66565b60405180910390a3505050565b600061077f8484610519565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f957818110156107eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e290611060565b60405180910390fd5b6107f884848484036105a8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610866906110f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d690611184565b60405180910390fd5b6108ea838383610a83565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096890611216565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a069190610e08565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a6a9190610c66565b60405180910390a3610a7d848484610a88565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ac7578082015181840152602081019050610aac565b83811115610ad6576000848401525b50505050565b6000601f19601f8301169050919050565b6000610af882610a8d565b610b028185610a98565b9350610b12818560208601610aa9565b610b1b81610adc565b840191505092915050565b60006020820190508181036000830152610b408184610aed565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b7882610b4d565b9050919050565b610b8881610b6d565b8114610b9357600080fd5b50565b600081359050610ba581610b7f565b92915050565b6000819050919050565b610bbe81610bab565b8114610bc957600080fd5b50565b600081359050610bdb81610bb5565b92915050565b60008060408385031215610bf857610bf7610b48565b5b6000610c0685828601610b96565b9250506020610c1785828601610bcc565b9150509250929050565b60008115159050919050565b610c3681610c21565b82525050565b6000602082019050610c516000830184610c2d565b92915050565b610c6081610bab565b82525050565b6000602082019050610c7b6000830184610c57565b92915050565b600080600060608486031215610c9a57610c99610b48565b5b6000610ca886828701610b96565b9350506020610cb986828701610b96565b9250506040610cca86828701610bcc565b9150509250925092565b600060ff82169050919050565b610cea81610cd4565b82525050565b6000602082019050610d056000830184610ce1565b92915050565b600060208284031215610d2157610d20610b48565b5b6000610d2f84828501610b96565b91505092915050565b60008060408385031215610d4f57610d4e610b48565b5b6000610d5d85828601610b96565b9250506020610d6e85828601610b96565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dbf57607f821691505b60208210811415610dd357610dd2610d78565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1382610bab565b9150610e1e83610bab565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e5357610e52610dd9565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610eba602583610a98565b9150610ec582610e5e565b604082019050919050565b60006020820190508181036000830152610ee981610ead565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f4c602483610a98565b9150610f5782610ef0565b604082019050919050565b60006020820190508181036000830152610f7b81610f3f565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fde602283610a98565b9150610fe982610f82565b604082019050919050565b6000602082019050818103600083015261100d81610fd1565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061104a601d83610a98565b915061105582611014565b602082019050919050565b600060208201905081810360008301526110798161103d565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110dc602583610a98565b91506110e782611080565b604082019050919050565b6000602082019050818103600083015261110b816110cf565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061116e602383610a98565b915061117982611112565b604082019050919050565b6000602082019050818103600083015261119d81611161565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611200602683610a98565b915061120b826111a4565b604082019050919050565b6000602082019050818103600083015261122f816111f3565b905091905056fea164736f6c634300080b000a"
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
      "10": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "56": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "69": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "77": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "97": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "100": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "122": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "123": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "137": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "250": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1284": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1287": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "3333": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4002": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4386": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "6666": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "9999": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42161": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42220": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "43113": "0xEeEA758C7791642c19e5E555A6f78A13334c7c2c",
      "43114": "0xEeEA758C7791642c19e5E555A6f78A13334c7c2c",
      "44787": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "80001": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "421611": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1313161554": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1313161555": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc"
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
      "1": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "3": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "5": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "10": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "56": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "69": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "77": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "97": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "100": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "122": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "123": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "137": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "250": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1284": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1287": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "3333": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4002": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4386": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "6666": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "9999": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42161": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42220": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "43113": "0xf96E0A8e408604F2c45e13c89bB395815BD5Efc6",
      "43114": "0xf96E0A8e408604F2c45e13c89bB395815BD5Efc6",
      "44787": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "80001": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "421611": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1313161554": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1313161555": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163"
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60a06040523480156200001157600080fd5b50604051620044533803806200445383398181016040528101906200003791906200009a565b808063ffffffff1660808163ffffffff16815250505050620000cc565b600080fd5b600063ffffffff82169050919050565b620000748162000059565b81146200008057600080fd5b50565b600081519050620000948162000069565b92915050565b600060208284031215620000b357620000b262000054565b5b6000620000c38482850162000083565b91505092915050565b608051614356620000fd600039600081816106ee015281816107ad01528181610b8c0152610fe001526143566000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80639df6c8e1116100de578063df034cd011610097578063f6d1610211610071578063f6d161021461043e578063fa31de011461045c578063fd54b22814610478578063ffa1ad74146104965761018e565b8063df034cd0146103e6578063ebf0c71714610404578063f2fde38b146104225761018e565b80639df6c8e114610324578063ab91c7b014610342578063b31c01fb14610360578063b95a20011461037c578063c19d93fb146103ac578063c4d66de8146103ca5761018e565b806367a6771d1161014b5780638da5cb5b116101255780638da5cb5b1461029e5780638e4e30e0146102bc5780639776120e146102ec5780639d54f419146103085761018e565b806367a6771d14610258578063715018a6146102765780638d3638f4146102805761018e565b806306661abd1461019357806319d9d21a146101b15780632bef2892146101cd57806336e104de146101fd57806345630b1a1461021c578063522ae0021461023a575b600080fd5b61019b6104b4565b6040516101a89190612b09565b60405180910390f35b6101cb60048036038101906101c69190612bf5565b6104c1565b005b6101e760048036038101906101e29190612c9c565b6106a0565b6040516101f49190612ce4565b60405180910390f35b6102056106bd565b604051610213929190612d0e565b60405180910390f35b6102246106e7565b6040516102319190612d37565b60405180910390f35b610242610717565b60405161024f9190612b09565b60405180910390f35b61026061071d565b60405161026d9190612d37565b60405180910390f35b61027e610723565b005b6102886107ab565b6040516102959190612d71565b60405180910390f35b6102a66107cf565b6040516102b39190612dcd565b60405180910390f35b6102d660048036038101906102d19190612f29565b6107f9565b6040516102e39190612ce4565b60405180910390f35b61030660048036038101906103019190612fc4565b61096f565b005b610322600480360381019061031d9190612fc4565b6109f7565b005b61032c610a94565b6040516103399190613050565b60405180910390f35b61034a610abb565b6040516103579190612b09565b60405180910390f35b61037a60048036038101906103759190612f29565b610acc565b005b61039660048036038101906103919190613097565b610bee565b6040516103a39190612d71565b60405180910390f35b6103b4610c12565b6040516103c1919061313b565b60405180910390f35b6103e460048036038101906103df9190613194565b610c25565b005b6103ee610d5d565b6040516103fb9190612dcd565b60405180910390f35b61040c610d83565b6040516104199190612d37565b60405180910390f35b61043c60048036038101906104379190612fc4565b610d94565b005b610446610e8c565b6040516104539190612d37565b60405180910390f35b610476600480360381019061047191906131c1565b610e9d565b005b6104806110cc565b60405161048d9190612b09565b60405180910390f35b61049e6110d8565b6040516104ab919061324c565b60405180910390f35b6000603460200154905090565b6002808111156104d4576104d36130c4565b5b60ea60149054906101000a900460ff1660028111156104f6576104f56130c4565b5b1415610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052e906132c4565b60405180910390fd5b61059e868660006002811061054f5761054e6132e4565b5b602002013586868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506110dd565b801561060d575061060c86866001600281106105bd576105bc6132e4565b5b602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506110dd565b5b8015610649575084600160028110610628576106276132e4565b5b602002013585600060028110610641576106406132e4565b5b602002013514155b1561069857610656611183565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f86868686868660405161068f96959493929190613361565b60405180910390a15b505050505050565b60006106b682600161129790919063ffffffff16565b9050919050565b60008060006106cc600161134f565b146106e35760eb5491506106e060016113ad565b90505b9091565b60006107127f00000000000000000000000000000000000000000000000000000000000000006113fe565b905090565b61080081565b60eb5481565b61072b61142e565b73ffffffffffffffffffffffffffffffffffffffff166107496107cf565b73ffffffffffffffffffffffffffffffffffffffff161461079f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079690613404565b60405180910390fd5b6107a96000611436565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060b860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060028081111561080e5761080d6130c4565b5b60ea60149054906101000a900460ff1660028111156108305761082f6130c4565b5b1415610871576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610868906132c4565b60405180910390fd5b61087c8484846110dd565b6108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b290613470565b60405180910390fd5b60eb5484146108ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f6906134dc565b60405180910390fd5b61091383600161129790919063ffffffff16565b6109635761091f611183565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab284848460405161095293929190613573565b60405180910390a160019050610968565b600090505b9392505050565b61097761142e565b73ffffffffffffffffffffffffffffffffffffffff166109956107cf565b73ffffffffffffffffffffffffffffffffffffffff16146109eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e290613404565b60405180910390fd5b6109f4816114fc565b50565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7f906135fd565b60405180910390fd5b610a91816115c0565b50565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610ac7600161134f565b905090565b600280811115610adf57610ade6130c4565b5b60ea60149054906101000a900460ff166002811115610b0157610b006130c4565b5b1415610b42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b39906132c4565b60405180910390fd5b610b4d8383836107f9565b15610b5757610be9565b5b600115610b81576000610b6b6001611665565b905082811415610b7b5750610b81565b50610b58565b8160eb8190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b284604051610be0919061361d565b60405180910390a45b505050565b61011b6020528060005260406000206000915054906101000a900463ffffffff1681565b60ea60149054906101000a900460ff1681565b6000610c3160016117ab565b90508015610c55576001600060016101000a81548160ff0219169083151502179055505b610c5d61189b565b610c66826114fc565b610d0061011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfb9190613654565b611931565b8015610d595760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610d5091906136bc565b60405180910390a15b5050565b60ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610d8f60346119fa565b905090565b610d9c61142e565b73ffffffffffffffffffffffffffffffffffffffff16610dba6107cf565b73ffffffffffffffffffffffffffffffffffffffff1614610e10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0790613404565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7790613749565b60405180910390fd5b610e8981611436565b50565b6000610e9860016113ad565b905090565b600280811115610eb057610eaf6130c4565b5b60ea60149054906101000a900460ff166002811115610ed257610ed16130c4565b5b1415610f13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0a906132c4565b60405180910390fd5b61080081511115610f59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f50906137b5565b60405180910390fd5b600061011b60008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900463ffffffff169050600181610f9b9190613804565b61011b60008663ffffffff1663ffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555060006110227f00000000000000000000000000000000000000000000000000000000000000003373ffffffffffffffffffffffffffffffffffffffff1660001b84888888611a14565b9050600081805190602001209050611044816034611a4c90919063ffffffff16565b61105f61104f610d83565b6001611b8490919063ffffffff16565b5061106a8684611c2d565b67ffffffffffffffff16600161107e6104b4565b611088919061383e565b827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a60eb54866040516110bc929190613872565b60405180910390a4505050505050565b60348060200154905081565b600081565b6000806110e86106e7565b85856040516020016110fc939291906138c3565b60405160208183030381529060405280519060200120905061111d81611c54565b905060ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111628285611c84565b73ffffffffffffffffffffffffffffffffffffffff16149150509392505050565b61118b611cab565b61011c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b3c2cbf336040518263ffffffff1660e01b81526004016111e79190613921565b600060405180830381600087803b15801561120157600080fd5b505af1158015611215573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff1660ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce60405160405180910390a3565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681116113435782846001016000838152602001908152602001600020541415611330576001915050611349565b808061133b9061393c565b9150506112d0565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506113a48282611cd8565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000816040516020016114119190613a12565b604051602081830303815290604052805190602001209050919050565b600033905090565b600060b860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160b860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61150581611d0c565b611544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153b90613a84565b60405180910390fd5b8061011c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf816040516115b59190612dcd565b60405180910390a150565b600060ea60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160ea60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a8183604051611659929190613aa4565b60405180910390a15050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff16905060006116bc8383611cd8565b14156116fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f490613b19565b60405180910390fd5b836001016000826fffffffffffffffffffffffffffffffff1681526020019081526020016000205492506000801b831461175d57836001016000826fffffffffffffffffffffffffffffffff168152602001908152602001600020600090555b60018161176a9190613b55565b8460000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505050919050565b60008060019054906101000a900460ff16156118225760018260ff161480156117da57506117d830611d2f565b155b611819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181090613c0d565b60405180910390fd5b60009050611896565b8160ff1660008054906101000a900460ff1660ff1610611877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186e90613c0d565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b60006118a760016117ab565b905080156118cb576001600060016101000a81548160ff0219169083151502179055505b6118d56001611d52565b801561192e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161192591906136bc565b60405180910390a15b50565b600061193d60016117ab565b90508015611961576001600060016101000a81548160ff0219169083151502179055505b611969611dcd565b611972826115c0565b600160ea60146101000a81548160ff02191690836002811115611998576119976130c4565b5b021790555080156119f65760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516119ed91906136bc565b60405180910390a15b5050565b6000611a0d82611a08611e26565b6125d2565b9050919050565b6060868686868686604051602001611a3196959493929190613c69565b60405160208183030381529060405290509695505050505050565b600160206002611a5c9190613e08565b611a66919061383e565b826020015410611aab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa290613e9f565b60405180910390fd5b6001826020016000828254611ac09190613ebf565b9250508190555060008260200154905060005b6020811015611b6e5760018083161415611b0a5782846000018260208110611afe57611afd6132e4565b5b01819055505050611b80565b836000018160208110611b2057611b1f6132e4565b5b015483604051602001611b34929190613f15565b604051602081830303815290604052805190602001209250600282611b599190613f70565b91508080611b669061393c565b915050611ad3565b506000611b7e57611b7d613fa1565b5b505b5050565b600060018360000160109054906101000a90046fffffffffffffffffffffffffffffffff16611bb39190613b55565b9050808360000160106101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055506000801b8214611c275781836001016000836fffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b92915050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b600081604051602001611c67919061401c565b604051602081830303815290604052805190602001209050919050565b6000806000611c9385856126a8565b91509150611ca08161272b565b819250505092915050565b600260ea60146101000a81548160ff02191690836002811115611cd157611cd06130c4565b5b0217905550565b600081600184611ce89190613b55565b611cf29190614042565b6fffffffffffffffffffffffffffffffff16905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008160000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff161415611dca5760018160000160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b50565b600060019054906101000a900460ff16611e1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e13906140e8565b60405180910390fd5b611e24612900565b565b611e2e612acd565b600081600060208110611e4457611e436132e4565b5b6020020181815250507fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb581600160208110611e8257611e816132e4565b5b6020020181815250507fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3081600260208110611ec057611ebf6132e4565b5b6020020181815250507f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8581600360208110611efe57611efd6132e4565b5b6020020181815250507fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934481600460208110611f3c57611f3b6132e4565b5b6020020181815250507f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d81600560208110611f7a57611f796132e4565b5b6020020181815250507f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196881600660208110611fb857611fb76132e4565b5b6020020181815250507fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8381600760208110611ff657611ff56132e4565b5b6020020181815250507f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af81600860208110612034576120336132e4565b5b6020020181815250507fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e081600960208110612072576120716132e4565b5b6020020181815250507ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a581600a602081106120b0576120af6132e4565b5b6020020181815250507ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89281600b602081106120ee576120ed6132e4565b5b6020020181815250507f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c81600c6020811061212c5761212b6132e4565b5b6020020181815250507fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb81600d6020811061216a576121696132e4565b5b6020020181815250507f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc81600e602081106121a8576121a76132e4565b5b6020020181815250507fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d281600f602081106121e6576121e56132e4565b5b6020020181815250507f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f81601060208110612224576122236132e4565b5b6020020181815250507fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a81601160208110612262576122616132e4565b5b6020020181815250507f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a0816012602081106122a05761229f6132e4565b5b6020020181815250507fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa0816013602081106122de576122dd6132e4565b5b6020020181815250507fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e28160146020811061231c5761231b6132e4565b5b6020020181815250507ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd98160156020811061235a576123596132e4565b5b6020020181815250507f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e37781601660208110612398576123976132e4565b5b6020020181815250507f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee652816017602081106123d6576123d56132e4565b5b6020020181815250507fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef81601860208110612414576124136132e4565b5b6020020181815250507f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d81601960208110612452576124516132e4565b5b6020020181815250507fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d081601a602081106124905761248f6132e4565b5b6020020181815250507f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e81601b602081106124ce576124cd6132e4565b5b6020020181815250507f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e81601c6020811061250c5761250b6132e4565b5b6020020181815250507f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32281601d6020811061254a576125496132e4565b5b6020020181815250507f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73581601e60208110612588576125876132e4565b5b6020020181815250507f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a981601f602081106125c6576125c56132e4565b5b60200201818152505090565b6000808360200154905060005b60208110156126a057600060018284901c169050600086600001836020811061260b5761260a6132e4565b5b01549050600182141561264857808560405160200161262b929190613f15565b60405160208183030381529060405280519060200120945061268b565b8486846020811061265c5761265b6132e4565b5b6020020151604051602001612672929190613f15565b6040516020818303038152906040528051906020012094505b505080806126989061393c565b9150506125df565b505092915050565b6000806041835114156126ea5760008060006020860151925060408601519150606086015160001a90506126de87828585612961565b94509450505050612724565b60408351141561271b576000806020850151915060408501519050612710868383612a6e565b935093505050612724565b60006002915091505b9250929050565b6000600481111561273f5761273e6130c4565b5b816004811115612752576127516130c4565b5b141561275d576128fd565b60016004811115612771576127706130c4565b5b816004811115612784576127836130c4565b5b14156127c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127bc90614154565b60405180910390fd5b600260048111156127d9576127d86130c4565b5b8160048111156127ec576127eb6130c4565b5b141561282d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612824906141c0565b60405180910390fd5b60036004811115612841576128406130c4565b5b816004811115612854576128536130c4565b5b1415612895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161288c90614252565b60405180910390fd5b6004808111156128a8576128a76130c4565b5b8160048111156128bb576128ba6130c4565b5b14156128fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128f3906142e4565b60405180910390fd5b5b50565b600060019054906101000a900460ff1661294f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612946906140e8565b60405180910390fd5b61295f61295a61142e565b611436565b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561299c576000600391509150612a65565b601b8560ff16141580156129b45750601c8560ff1614155b156129c6576000600491509150612a65565b6000600187878787604051600081526020016040526040516129eb9493929190614304565b6020604051602081039080840390855afa158015612a0d573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612a5c57600060019250925050612a65565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c612ab19190613ebf565b9050612abf87828885612961565b935093505050935093915050565b604051806104000160405280602090602082028036833780820191505090505090565b6000819050919050565b612b0381612af0565b82525050565b6000602082019050612b1e6000830184612afa565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b612b4b81612b38565b8114612b5657600080fd5b50565b600081359050612b6881612b42565b92915050565b600080fd5b600081905082602060020282011115612b8f57612b8e612b6e565b5b92915050565b600080fd5b600080fd5b60008083601f840112612bb557612bb4612b95565b5b8235905067ffffffffffffffff811115612bd257612bd1612b9a565b5b602083019150836001820283011115612bee57612bed612b6e565b5b9250929050565b60008060008060008060a08789031215612c1257612c11612b2e565b5b6000612c2089828a01612b59565b9650506020612c3189828a01612b73565b955050606087013567ffffffffffffffff811115612c5257612c51612b33565b5b612c5e89828a01612b9f565b9450945050608087013567ffffffffffffffff811115612c8157612c80612b33565b5b612c8d89828a01612b9f565b92509250509295509295509295565b600060208284031215612cb257612cb1612b2e565b5b6000612cc084828501612b59565b91505092915050565b60008115159050919050565b612cde81612cc9565b82525050565b6000602082019050612cf96000830184612cd5565b92915050565b612d0881612b38565b82525050565b6000604082019050612d236000830185612cff565b612d306020830184612cff565b9392505050565b6000602082019050612d4c6000830184612cff565b92915050565b600063ffffffff82169050919050565b612d6b81612d52565b82525050565b6000602082019050612d866000830184612d62565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612db782612d8c565b9050919050565b612dc781612dac565b82525050565b6000602082019050612de26000830184612dbe565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612e3682612ded565b810181811067ffffffffffffffff82111715612e5557612e54612dfe565b5b80604052505050565b6000612e68612b24565b9050612e748282612e2d565b919050565b600067ffffffffffffffff821115612e9457612e93612dfe565b5b612e9d82612ded565b9050602081019050919050565b82818337600083830152505050565b6000612ecc612ec784612e79565b612e5e565b905082815260208101848484011115612ee857612ee7612de8565b5b612ef3848285612eaa565b509392505050565b600082601f830112612f1057612f0f612b95565b5b8135612f20848260208601612eb9565b91505092915050565b600080600060608486031215612f4257612f41612b2e565b5b6000612f5086828701612b59565b9350506020612f6186828701612b59565b925050604084013567ffffffffffffffff811115612f8257612f81612b33565b5b612f8e86828701612efb565b9150509250925092565b612fa181612dac565b8114612fac57600080fd5b50565b600081359050612fbe81612f98565b92915050565b600060208284031215612fda57612fd9612b2e565b5b6000612fe884828501612faf565b91505092915050565b6000819050919050565b600061301661301161300c84612d8c565b612ff1565b612d8c565b9050919050565b600061302882612ffb565b9050919050565b600061303a8261301d565b9050919050565b61304a8161302f565b82525050565b60006020820190506130656000830184613041565b92915050565b61307481612d52565b811461307f57600080fd5b50565b6000813590506130918161306b565b92915050565b6000602082840312156130ad576130ac612b2e565b5b60006130bb84828501613082565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110613104576131036130c4565b5b50565b6000819050613115826130f3565b919050565b600061312582613107565b9050919050565b6131358161311a565b82525050565b6000602082019050613150600083018461312c565b92915050565b600061316182612dac565b9050919050565b61317181613156565b811461317c57600080fd5b50565b60008135905061318e81613168565b92915050565b6000602082840312156131aa576131a9612b2e565b5b60006131b88482850161317f565b91505092915050565b6000806000606084860312156131da576131d9612b2e565b5b60006131e886828701613082565b93505060206131f986828701612b59565b925050604084013567ffffffffffffffff81111561321a57613219612b33565b5b61322686828701612efb565b9150509250925092565b600060ff82169050919050565b61324681613230565b82525050565b6000602082019050613261600083018461323d565b92915050565b600082825260208201905092915050565b7f6661696c65642073746174650000000000000000000000000000000000000000600082015250565b60006132ae600c83613267565b91506132b982613278565b602082019050919050565b600060208201905081810360008301526132dd816132a1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b61331f60408383612eaa565b5050565b600082825260208201905092915050565b60006133408385613323565b935061334d838584612eaa565b61335683612ded565b840190509392505050565b600060a0820190506133766000830189612cff565b6133836020830188613313565b8181036060830152613396818688613334565b905081810360808301526133ab818486613334565b9050979650505050505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006133ee602083613267565b91506133f9826133b8565b602082019050919050565b6000602082019050818103600083015261341d816133e1565b9050919050565b7f2175706461746572207369670000000000000000000000000000000000000000600082015250565b600061345a600c83613267565b915061346582613424565b602082019050919050565b600060208201905081810360008301526134898161344d565b9050919050565b7f6e6f7420612063757272656e7420757064617465000000000000000000000000600082015250565b60006134c6601483613267565b91506134d182613490565b602082019050919050565b600060208201905081810360008301526134f5816134b9565b9050919050565b600081519050919050565b60005b8381101561352557808201518184015260208101905061350a565b83811115613534576000848401525b50505050565b6000613545826134fc565b61354f8185613323565b935061355f818560208601613507565b61356881612ded565b840191505092915050565b60006060820190506135886000830186612cff565b6135956020830185612cff565b81810360408301526135a7818461353a565b9050949350505050565b7f21757064617465724d616e616765720000000000000000000000000000000000600082015250565b60006135e7600f83613267565b91506135f2826135b1565b602082019050919050565b60006020820190508181036000830152613616816135da565b9050919050565b60006020820190508181036000830152613637818461353a565b905092915050565b60008151905061364e81612f98565b92915050565b60006020828403121561366a57613669612b2e565b5b60006136788482850161363f565b91505092915050565b6000819050919050565b60006136a66136a161369c84613681565b612ff1565b613230565b9050919050565b6136b68161368b565b82525050565b60006020820190506136d160008301846136ad565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613733602683613267565b915061373e826136d7565b604082019050919050565b6000602082019050818103600083015261376281613726565b9050919050565b7f6d736720746f6f206c6f6e670000000000000000000000000000000000000000600082015250565b600061379f600c83613267565b91506137aa82613769565b602082019050919050565b600060208201905081810360008301526137ce81613792565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061380f82612d52565b915061381a83612d52565b92508263ffffffff03821115613833576138326137d5565b5b828201905092915050565b600061384982612af0565b915061385483612af0565b925082821015613867576138666137d5565b5b828203905092915050565b60006040820190506138876000830185612cff565b8181036020830152613899818461353a565b90509392505050565b6000819050919050565b6138bd6138b882612b38565b6138a2565b82525050565b60006138cf82866138ac565b6020820191506138df82856138ac565b6020820191506138ef82846138ac565b602082019150819050949350505050565b600061390b82612d8c565b9050919050565b61391b81613900565b82525050565b60006020820190506139366000830184613912565b92915050565b600061394782612af0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561397a576139796137d5565b5b600182019050919050565b60008160e01b9050919050565b600061399d82613985565b9050919050565b6139b56139b082612d52565b613992565b82525050565b600081905092915050565b7f4e4f4d4144000000000000000000000000000000000000000000000000000000600082015250565b60006139fc6005836139bb565b9150613a07826139c6565b600582019050919050565b6000613a1e82846139a4565b600482019150613a2d826139ef565b915081905092915050565b7f21636f6e747261637420757064617465724d616e616765720000000000000000600082015250565b6000613a6e601883613267565b9150613a7982613a38565b602082019050919050565b60006020820190508181036000830152613a9d81613a61565b9050919050565b6000604082019050613ab96000830185612dbe565b613ac66020830184612dbe565b9392505050565b7f456d707479000000000000000000000000000000000000000000000000000000600082015250565b6000613b03600583613267565b9150613b0e82613acd565b602082019050919050565b60006020820190508181036000830152613b3281613af6565b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6000613b6082613b39565b9150613b6b83613b39565b9250826fffffffffffffffffffffffffffffffff03821115613b9057613b8f6137d5565b5b828201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000613bf7602e83613267565b9150613c0282613b9b565b604082019050919050565b60006020820190508181036000830152613c2681613bea565b9050919050565b600081905092915050565b6000613c43826134fc565b613c4d8185613c2d565b9350613c5d818560208601613507565b80840191505092915050565b6000613c7582896139a4565b600482019150613c8582886138ac565b602082019150613c9582876139a4565b600482019150613ca582866139a4565b600482019150613cb582856138ac565b602082019150613cc58284613c38565b9150819050979650505050505050565b60008160011c9050919050565b6000808291508390505b6001851115613d2c57808604811115613d0857613d076137d5565b5b6001851615613d175780820291505b8081029050613d2585613cd5565b9450613cec565b94509492505050565b600082613d455760019050613e01565b81613d535760009050613e01565b8160018114613d695760028114613d7357613da2565b6001915050613e01565b60ff841115613d8557613d846137d5565b5b8360020a915084821115613d9c57613d9b6137d5565b5b50613e01565b5060208310610133831016604e8410600b8410161715613dd75782820a905083811115613dd257613dd16137d5565b5b613e01565b613de48484846001613ce2565b92509050818404811115613dfb57613dfa6137d5565b5b81810290505b9392505050565b6000613e1382612af0565b9150613e1e83612af0565b9250613e4b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613d35565b905092915050565b7f6d65726b6c6520747265652066756c6c00000000000000000000000000000000600082015250565b6000613e89601083613267565b9150613e9482613e53565b602082019050919050565b60006020820190508181036000830152613eb881613e7c565b9050919050565b6000613eca82612af0565b9150613ed583612af0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f0a57613f096137d5565b5b828201905092915050565b6000613f2182856138ac565b602082019150613f3182846138ac565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613f7b82612af0565b9150613f8683612af0565b925082613f9657613f95613f41565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000614006601c836139bb565b915061401182613fd0565b601c82019050919050565b600061402782613ff9565b915061403382846138ac565b60208201915081905092915050565b600061404d82613b39565b915061405883613b39565b92508282101561406b5761406a6137d5565b5b828203905092915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006140d2602b83613267565b91506140dd82614076565b604082019050919050565b60006020820190508181036000830152614101816140c5565b9050919050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b600061413e601883613267565b915061414982614108565b602082019050919050565b6000602082019050818103600083015261416d81614131565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006141aa601f83613267565b91506141b582614174565b602082019050919050565b600060208201905081810360008301526141d98161419d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061423c602283613267565b9150614247826141e0565b604082019050919050565b6000602082019050818103600083015261426b8161422f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006142ce602283613267565b91506142d982614272565b604082019050919050565b600060208201905081810360008301526142fd816142c1565b9050919050565b60006080820190506143196000830187612cff565b614326602083018661323d565b6143336040830185612cff565b6143406060830184612cff565b9594505050505056fea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
                    "name": "recovery",
                    "type": "address"
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
                    "internalType": "bool",
                    "name": "forceSlow",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "receiveLocal",
                    "type": "bool"
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
                "name": "relayerFee",
                "type": "uint256"
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
                    "name": "recovery",
                    "type": "address"
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
                    "internalType": "bool",
                    "name": "forceSlow",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "receiveLocal",
                    "type": "bool"
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
              },
              {
                "internalType": "uint256",
                "name": "relayerFee",
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
            "internalType": "uint8",
            "name": "version",
            "type": "uint8"
          }
        ],
        "name": "Initialized",
        "type": "event"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b5061256c806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102e1578063a457c2d7146102ff578063a9059cbb1461032f578063dd62ed3e1461035f578063f2fde38b1461038f57610116565b806370a082311461026d578063715018a61461029d57806379cc6790146102a75780638da5cb5b146102c357610116565b8063313ce567116100e9578063313ce567146101b757806339509351146101d557806340c10f191461020557806342966c68146102215780634cd88b761461023d57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b6101236103ab565b604051610130919061171e565b60405180910390f35b610153600480360381019061014e91906117e8565b61043d565b6040516101609190611843565b60405180910390f35b610171610460565b60405161017e919061186d565b60405180910390f35b6101a1600480360381019061019c9190611888565b61046a565b6040516101ae9190611843565b60405180910390f35b6101bf610499565b6040516101cc91906118f7565b60405180910390f35b6101ef60048036038101906101ea91906117e8565b6104a2565b6040516101fc9190611843565b60405180910390f35b61021f600480360381019061021a91906117e8565b6104d9565b005b61023b60048036038101906102369190611912565b6105a7565b005b61025760048036038101906102529190611a74565b6105bb565b6040516102649190611843565b60405180910390f35b61028760048036038101906102829190611aec565b61066a565b604051610294919061186d565b60405180910390f35b6102a56106b3565b005b6102c160048036038101906102bc91906117e8565b61073b565b005b6102cb61075b565b6040516102d89190611b28565b60405180910390f35b6102e9610785565b6040516102f6919061171e565b60405180910390f35b610319600480360381019061031491906117e8565b610817565b6040516103269190611843565b60405180910390f35b610349600480360381019061034491906117e8565b61088e565b6040516103569190611843565b60405180910390f35b61037960048036038101906103749190611b43565b6108b1565b604051610386919061186d565b60405180910390f35b6103a960048036038101906103a49190611aec565b610938565b005b6060603680546103ba90611bb2565b80601f01602080910402602001604051908101604052809291908181526020018280546103e690611bb2565b80156104335780601f1061040857610100808354040283529160200191610433565b820191906000526020600020905b81548152906001019060200180831161041657829003601f168201915b5050505050905090565b600080610448610a30565b9050610455818585610a38565b600191505092915050565b6000603554905090565b600080610475610a30565b9050610482858285610c03565b61048d858585610c8f565b60019150509392505050565b60006012905090565b6000806104ad610a30565b90506104ce8185856104bf85896108b1565b6104c99190611c13565b610a38565b600191505092915050565b6104e1610a30565b73ffffffffffffffffffffffffffffffffffffffff166104ff61075b565b73ffffffffffffffffffffffffffffffffffffffff1614610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054c90611cb5565b60405180910390fd5b6000811415610599576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059090611d21565b60405180910390fd5b6105a38282610f13565b5050565b6105b86105b2610a30565b82611074565b50565b6000806105c8600161124d565b905080156105ec576001600060016101000a81548160ff0219169083151502179055505b6105f461133d565b6105fe848461138e565b61060661140f565b6001915080156106635760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161065a9190611d86565b60405180910390a15b5092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106bb610a30565b73ffffffffffffffffffffffffffffffffffffffff166106d961075b565b73ffffffffffffffffffffffffffffffffffffffff161461072f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072690611cb5565b60405180910390fd5b6107396000611470565b565b61074d82610747610a30565b83610c03565b6107578282611074565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606037805461079490611bb2565b80601f01602080910402602001604051908101604052809291908181526020018280546107c090611bb2565b801561080d5780601f106107e25761010080835404028352916020019161080d565b820191906000526020600020905b8154815290600101906020018083116107f057829003601f168201915b5050505050905090565b600080610822610a30565b9050600061083082866108b1565b905083811015610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90611e13565b60405180910390fd5b6108828286868403610a38565b60019250505092915050565b600080610899610a30565b90506108a6818585610c8f565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610940610a30565b73ffffffffffffffffffffffffffffffffffffffff1661095e61075b565b73ffffffffffffffffffffffffffffffffffffffff16146109b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ab90611cb5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1b90611ea5565b60405180910390fd5b610a2d81611470565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f90611f37565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0f90611fc9565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bf6919061186d565b60405180910390a3505050565b6000610c0f84846108b1565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c895781811015610c7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7290612035565b60405180910390fd5b610c888484848403610a38565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf6906120c7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6690612159565b60405180910390fd5b610d7a838383611536565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df8906121eb565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e969190611c13565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610efa919061186d565b60405180910390a3610f0d8484846115b5565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7a90612257565b60405180910390fd5b610f8f60008383611536565b8060356000828254610fa19190611c13565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ff79190611c13565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161105c919061186d565b60405180910390a3611070600083836115b5565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110db906122e9565b60405180910390fd5b6110f082600083611536565b6000603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e9061237b565b60405180910390fd5b818103603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603560008282546111cf919061239b565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611234919061186d565b60405180910390a3611248836000846115b5565b505050565b60008060019054906101000a900460ff16156112c45760018260ff1614801561127c575061127a306115ba565b155b6112bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b290612441565b60405180910390fd5b60009050611338565b8160ff1660008054906101000a900460ff1660ff1610611319576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131090612441565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff1661138c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611383906124d3565b60405180910390fd5b565b600060019054906101000a900460ff166113dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d4906124d3565b60405180910390fd5b81603690805190602001906113f39291906115e2565b50806037908051906020019061140a9291906115e2565b505050565b600060019054906101000a900460ff1661145e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611455906124d3565b60405180910390fd5b61146e611469610a30565b611470565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6115418383836115dd565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a79061253f565b60405180910390fd5b505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b505050565b8280546115ee90611bb2565b90600052602060002090601f0160209004810192826116105760008555611657565b82601f1061162957805160ff1916838001178555611657565b82800160010185558215611657579182015b8281111561165657825182559160200191906001019061163b565b5b5090506116649190611668565b5090565b5b80821115611681576000816000905550600101611669565b5090565b600081519050919050565b600082825260208201905092915050565b60005b838110156116bf5780820151818401526020810190506116a4565b838111156116ce576000848401525b50505050565b6000601f19601f8301169050919050565b60006116f082611685565b6116fa8185611690565b935061170a8185602086016116a1565b611713816116d4565b840191505092915050565b6000602082019050818103600083015261173881846116e5565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061177f82611754565b9050919050565b61178f81611774565b811461179a57600080fd5b50565b6000813590506117ac81611786565b92915050565b6000819050919050565b6117c5816117b2565b81146117d057600080fd5b50565b6000813590506117e2816117bc565b92915050565b600080604083850312156117ff576117fe61174a565b5b600061180d8582860161179d565b925050602061181e858286016117d3565b9150509250929050565b60008115159050919050565b61183d81611828565b82525050565b60006020820190506118586000830184611834565b92915050565b611867816117b2565b82525050565b6000602082019050611882600083018461185e565b92915050565b6000806000606084860312156118a1576118a061174a565b5b60006118af8682870161179d565b93505060206118c08682870161179d565b92505060406118d1868287016117d3565b9150509250925092565b600060ff82169050919050565b6118f1816118db565b82525050565b600060208201905061190c60008301846118e8565b92915050565b6000602082840312156119285761192761174a565b5b6000611936848285016117d3565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611981826116d4565b810181811067ffffffffffffffff821117156119a05761199f611949565b5b80604052505050565b60006119b3611740565b90506119bf8282611978565b919050565b600067ffffffffffffffff8211156119df576119de611949565b5b6119e8826116d4565b9050602081019050919050565b82818337600083830152505050565b6000611a17611a12846119c4565b6119a9565b905082815260208101848484011115611a3357611a32611944565b5b611a3e8482856119f5565b509392505050565b600082601f830112611a5b57611a5a61193f565b5b8135611a6b848260208601611a04565b91505092915050565b60008060408385031215611a8b57611a8a61174a565b5b600083013567ffffffffffffffff811115611aa957611aa861174f565b5b611ab585828601611a46565b925050602083013567ffffffffffffffff811115611ad657611ad561174f565b5b611ae285828601611a46565b9150509250929050565b600060208284031215611b0257611b0161174a565b5b6000611b108482850161179d565b91505092915050565b611b2281611774565b82525050565b6000602082019050611b3d6000830184611b19565b92915050565b60008060408385031215611b5a57611b5961174a565b5b6000611b688582860161179d565b9250506020611b798582860161179d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611bca57607f821691505b60208210811415611bde57611bdd611b83565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c1e826117b2565b9150611c29836117b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c5e57611c5d611be4565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611c9f602083611690565b9150611caa82611c69565b602082019050919050565b60006020820190508181036000830152611cce81611c92565b9050919050565b7f4c50546f6b656e3a2063616e6e6f74206d696e74203000000000000000000000600082015250565b6000611d0b601683611690565b9150611d1682611cd5565b602082019050919050565b60006020820190508181036000830152611d3a81611cfe565b9050919050565b6000819050919050565b6000819050919050565b6000611d70611d6b611d6684611d41565b611d4b565b6118db565b9050919050565b611d8081611d55565b82525050565b6000602082019050611d9b6000830184611d77565b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611dfd602583611690565b9150611e0882611da1565b604082019050919050565b60006020820190508181036000830152611e2c81611df0565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611e8f602683611690565b9150611e9a82611e33565b604082019050919050565b60006020820190508181036000830152611ebe81611e82565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611f21602483611690565b9150611f2c82611ec5565b604082019050919050565b60006020820190508181036000830152611f5081611f14565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611fb3602283611690565b9150611fbe82611f57565b604082019050919050565b60006020820190508181036000830152611fe281611fa6565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061201f601d83611690565b915061202a82611fe9565b602082019050919050565b6000602082019050818103600083015261204e81612012565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006120b1602583611690565b91506120bc82612055565b604082019050919050565b600060208201905081810360008301526120e0816120a4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612143602383611690565b915061214e826120e7565b604082019050919050565b6000602082019050818103600083015261217281612136565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006121d5602683611690565b91506121e082612179565b604082019050919050565b60006020820190508181036000830152612204816121c8565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612241601f83611690565b915061224c8261220b565b602082019050919050565b6000602082019050818103600083015261227081612234565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006122d3602183611690565b91506122de82612277565b604082019050919050565b60006020820190508181036000830152612302816122c6565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000612365602283611690565b915061237082612309565b604082019050919050565b6000602082019050818103600083015261239481612358565b9050919050565b60006123a6826117b2565b91506123b1836117b2565b9250828210156123c4576123c3611be4565b5b828203905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061242b602e83611690565b9150612436826123cf565b604082019050919050565b6000602082019050818103600083015261245a8161241e565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006124bd602b83611690565b91506124c882612461565b604082019050919050565b600060208201905081810360008301526124ec816124b0565b9050919050565b7f4c50546f6b656e3a2063616e6e6f742073656e6420746f20697473656c660000600082015250565b6000612529601e83611690565b9150612534826124f3565b602082019050919050565b600060208201905081810360008301526125588161251c565b905091905056fea164736f6c634300080b000a"
  },
  "LibConnextStorage": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "MathUtils": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50610af1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd14610046578063ebf0c71714610064578063fd54b22814610082575b600080fd5b61004e6100a0565b60405161005b91906109a1565b60405180910390f35b61006c6100ac565b60405161007991906109d5565b60405180910390f35b61008a6100bd565b60405161009791906109a1565b60405180910390f35b60008060200154905090565b60006100b860006100c9565b905090565b60008060200154905081565b60006100dc826100d76100e3565b61088f565b9050919050565b6100eb610965565b600081600060208110610101576101006109f0565b5b6020020181815250507fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb58160016020811061013f5761013e6109f0565b5b6020020181815250507fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d308160026020811061017d5761017c6109f0565b5b6020020181815250507f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85816003602081106101bb576101ba6109f0565b5b6020020181815250507fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a19344816004602081106101f9576101f86109f0565b5b6020020181815250507f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d81600560208110610237576102366109f0565b5b6020020181815250507f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196881600660208110610275576102746109f0565b5b6020020181815250507fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f83816007602081106102b3576102b26109f0565b5b6020020181815250507f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af816008602081106102f1576102f06109f0565b5b6020020181815250507fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e08160096020811061032f5761032e6109f0565b5b6020020181815250507ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a581600a6020811061036d5761036c6109f0565b5b6020020181815250507ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf89281600b602081106103ab576103aa6109f0565b5b6020020181815250507f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c81600c602081106103e9576103e86109f0565b5b6020020181815250507fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb81600d60208110610427576104266109f0565b5b6020020181815250507f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc81600e60208110610465576104646109f0565b5b6020020181815250507fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d281600f602081106104a3576104a26109f0565b5b6020020181815250507f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f816010602081106104e1576104e06109f0565b5b6020020181815250507fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a8160116020811061051f5761051e6109f0565b5b6020020181815250507f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a08160126020811061055d5761055c6109f0565b5b6020020181815250507fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa08160136020811061059b5761059a6109f0565b5b6020020181815250507fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e2816014602081106105d9576105d86109f0565b5b6020020181815250507ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd981601560208110610617576106166109f0565b5b6020020181815250507f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e37781601660208110610655576106546109f0565b5b6020020181815250507f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee65281601760208110610693576106926109f0565b5b6020020181815250507fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef816018602081106106d1576106d06109f0565b5b6020020181815250507f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d8160196020811061070f5761070e6109f0565b5b6020020181815250507fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d081601a6020811061074d5761074c6109f0565b5b6020020181815250507f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e81601b6020811061078b5761078a6109f0565b5b6020020181815250507f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e81601c602081106107c9576107c86109f0565b5b6020020181815250507f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea32281601d60208110610807576108066109f0565b5b6020020181815250507f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d73581601e60208110610845576108446109f0565b5b6020020181815250507f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a981601f60208110610883576108826109f0565b5b60200201818152505090565b6000808360200154905060005b602081101561095d57600060018284901c16905060008660000183602081106108c8576108c76109f0565b5b0154905060018214156109055780856040516020016108e8929190610a40565b604051602081830303815290604052805190602001209450610948565b84868460208110610919576109186109f0565b5b602002015160405160200161092f929190610a40565b6040516020818303038152906040528051906020012094505b5050808061095590610a9b565b91505061089c565b505092915050565b604051806104000160405280602090602082028036833780820191505090505090565b6000819050919050565b61099b81610988565b82525050565b60006020820190506109b66000830184610992565b92915050565b6000819050919050565b6109cf816109bc565b82525050565b60006020820190506109ea60008301846109c6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b610a3a610a35826109bc565b610a1f565b82525050565b6000610a4c8285610a29565b602082019150610a5c8284610a29565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610aa682610988565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ad957610ad8610a6c565b5b60018201905091905056fea164736f6c634300080b000a"
  },
  "Message": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": "0xdd43fA3fCB57F9F075F48F0FA564162a0eE7fa70",
      "123": "0xdd43fA3fCB57F9F075F48F0FA564162a0eE7fa70",
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": "0x8F4234eEB3cA4c3E3797f1C947B965719D8bdd85",
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506103d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b14610059575b600080fd5b610043610075565b60405161005091906102ab565b60405180910390f35b610073600480360381019061006e91906102f7565b610084565b005b600061007f610098565b905090565b61008c6100cb565b61009581610166565b50565b60006100a261023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100d361023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b906103a7565b60405180910390fd5b565b600061017061023d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102958261026a565b9050919050565b6102a58161028a565b82525050565b60006020820190506102c0600083018461029c565b92915050565b600080fd5b6102d48161028a565b81146102df57600080fd5b50565b6000813590506102f1816102cb565b92915050565b60006020828403121561030d5761030c6102c6565b5b600061031b848285016102e2565b91505092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000610391602283610324565b915061039c82610335565b604082019050919050565b600060208201905081810360008301526103c081610384565b905091905056fea164736f6c634300080b000a"
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
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
      "1": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "3": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "5": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "10": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "56": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "69": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "77": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "97": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "100": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "122": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "123": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "137": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "250": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1284": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1287": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "3333": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4002": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4386": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "6666": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "9999": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42161": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42220": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "43113": "0xab648d198E2B9C415BE9Eac7d3C554ead7a2C1A1",
      "43114": "0xab648d198E2B9C415BE9Eac7d3C554ead7a2C1A1",
      "44787": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "80001": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "421611": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1313161554": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1313161555": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312"
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
      "10": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "56": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "69": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "77": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "97": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "100": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "122": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "123": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "137": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "250": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1284": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1287": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "3333": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4002": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4386": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "6666": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "9999": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42161": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42220": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "43113": "0x3383718baBE5B3bC9463bA90E4Db26b41EaAb286",
      "43114": "0x3383718baBE5B3bC9463bA90E4Db26b41EaAb286",
      "44787": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "80001": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "421611": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1313161554": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1313161555": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A"
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
      "1": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "3": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "5": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "10": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "56": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "69": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "77": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "97": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "100": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "122": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "123": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "137": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "250": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1284": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1287": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "3333": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4002": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4386": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "6666": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "9999": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42161": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42220": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "43113": "0xD85FcBEe85B58FF4c82c1d18387F3A3CFFb2Cf08",
      "43114": "0xD85FcBEe85B58FF4c82c1d18387F3A3CFFb2Cf08",
      "44787": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "80001": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "421611": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1313161554": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1313161555": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506144d1806100616000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806390482d72116100b8578063d0f710d61161007c578063d0f710d61461075e578063da9fc1ae146107f7578063db63f5821461083b578063e1e382ce1461089f578063e5c7278f14610958578063f4876c7414610a1b57610142565b806390482d7214610545578063a526d83b146105fe578063bb890d3f14610642578063cade6a5d146106bc578063d089e11a1461072a57610142565b80631a8414031161010a5780631a841403146103515780633164b5e1146103bf57806334d323a414610419578063392e53cd1461049d57806343013c24146104bd578063714041561461050157610142565b80630900f010146101475780630c68ba211461018b57806311464fbe146101e5578063116191b614610219578063124e9eb31461024d575b600080fd5b6101896004803603602081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7f565b005b6101cd600480360360208110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b60405180821515815260200191505060405180910390f35b6101ed610b83565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610221610ba9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103396004803603606081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111640100000000831117156102d457600080fd5b9091929391929390803590602001906401000000008111156102f557600080fd5b82018360208201111561030757600080fd5b8035906020019184600183028401116401000000008311171561032957600080fd5b9091929391929390505050610bcf565b60405180821515815260200191505060405180910390f35b6103bd6004803603606081101561036757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b610401600480360360208110156103d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef3565b60405180821515815260200191505060405180910390f35b6104856004803603606081101561042f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4c565b60405180821515815260200191505060405180910390f35b6104a561103a565b60405180821515815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611092565b005b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110aa565b005b6105fc6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460208302840111640100000000831117156105ac57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611370565b005b6106406004803603602081101561061457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611508565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115b5565b60405180821515815260200191505060405180910390f35b6106fe600480360360208110156106d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107326115db565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107df6004803603604081101561077457600080fd5b81019080803590602001909291908035906020019064010000000081111561079b57600080fd5b8201836020820111156107ad57600080fd5b803590602001918460018302840111640100000000831117156107cf57600080fd5b9091929391929390505050611601565b60405180821515815260200191505060405180910390f35b6108396004803603602081101561080d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165a565b005b61089d6004803603604081101561085157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611670565b005b610940600480360360608110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108fc57600080fd5b82018360208201111561090e57600080fd5b8035906020019184600183028401116401000000008311171561093057600080fd5b9091929391929390505050611905565b60405180821515815260200191505060405180910390f35b610a196004803603608081101561096e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109d557600080fd5b8201836020820111156109e757600080fd5b80359060200191846001830284011164010000000083111715610a0957600080fd5b9091929391929390505050611971565b005b610a7d60048036036040811015610a3157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b005b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b610b2b816001611d0d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c7d86610c7885858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c6a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e4e565b611fb790919063ffffffff16565b612087565b905095945050505050565b610c918361223e565b50610c9b83612685565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2f57610d29833283600067ffffffffffffffff81118015610cee57600080fd5b506040519080825280601f01601f191660200182016040528015610d215781602001600182028036833780820191505090505b506000612786565b50610e5d565b6060610dd38484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000612786565b9050600081511115610e5b57808060200190516020811015610df457600080fd5b8101908080519060200190929190505050610e5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061440a6035913960400191505060405180910390fd5b5b505b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009050610f5d8585612087565b15610f6b576001905061102f565b61102c83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050612c5490919063ffffffff16565b90505b809150509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b61109b8161223e565b506110a7816001612ca3565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661114b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156111ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180614318602f913960400191505060405180910390fd5b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114a2848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050612f05565b6114ac3083612f5d565b6114b581612f77565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b6115b281612fbb565b50565b60006115c18383612087565b905092915050565b60006115d4826131e2565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116518484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613238565b90509392505050565b6116638161223e565b5061166d81612685565b50565b600061167b8361223e565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806143b9602b913960400191505060405180910390fd5b6117b9600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b61180e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806142b7602c913960400191505060405180910390fd5b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60006119678561196285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611fb790919063ffffffff16565b612087565b9050949350505050565b61197a8561223e565b5061198485612685565b6119d685858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001612786565b505050505050565b6119e78261223e565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180614498602d913960400191505060405180910390fd5b611b25600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b15611b7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061446b602d913960400191505060405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018061421e603b913960400191505060405180910390fd5b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015611e4a577f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b6000611e5a82516132b8565b826040516020018082805190602001908083835b60208310611e915780518252602082019150602081019050602083039250611e6e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b60208310611f235780518252602082019150602081019050602083039250611f00565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611f745780518252602082019150602081019050602083039250611f51565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b6000806000905060418351141561207d5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015611ff857601b810190505b601b8160ff16148061200d5750601c8160ff16145b156120795760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561206c573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156121ac576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154149050612234565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141561223357612202836131e2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161490505b5b8091505092915050565b6000806122496133ff565b9050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156123c0576000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146123bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b61267c565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541461245d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506124aa81613410565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461252d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b80915050919050565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661278357612726600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546001613606565b506001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b6060600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561280e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806143476025913960400191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061443f602c913960400191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612918576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806142916026913960400191505060405180910390fd5b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129aa57808201518184015260208101905061298f565b50505050905090810190601f1680156129d75780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156129f857600080fd5b505af1158015612a0c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015612a3657600080fd5b8101908080516040519392919084640100000000821115612a5657600080fd5b83820191506020820185811115612a6c57600080fd5b8251866001820283011164010000000082111715612a8957600080fd5b8083526020830192505050908051906020019080838360005b83811015612abd578082015181840152602081019050612aa2565b50505050905090810190601f168015612aea5780820380516001836020036101000a031916815260200191505b5060405250505090508215612c47577f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba1578082015181840152602081019050612b86565b50505050905090810190601f168015612bce5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c07578082015181840152602081019050612bec565b50505050905090810190601f168015612c345780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15b8091505095945050505050565b60008060009050836000015115612c9957600084602001511415612c7b5760019050612c98565b6000831415612c8d5760019050612c97565b8284602001511190505b5b5b8091505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d2257600080fd5b505afa158015612d36573d6000803e3d6000fd5b505050506040513d6020811015612d4c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415612dca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061438e602b913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b505050508015612f01577feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5050565b600081511415612f1d57612f1832612fbb565b612f5a565b60008151905060005b81811015612f5757612f4a838281518110612f3d57fe5b6020026020010151612fbb565b8080600101915050612f26565b50505b50565b612f6882600061375a565b612f73816000611d0d565b5050565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561305e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561311d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905061323081613410565b915050919050565b60008061324e8385611fb790919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006132b18243612c54565b9050919050565b60606000821415613300576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506133fa565b600082905060005b6000821461332a578080600101915050600a828161332257fe5b049150613308565b60608167ffffffffffffffff8111801561334357600080fd5b506040519080825280601f01601f1916602001820160405280156133765781602001600182028036833780820191505090505b50905060006001830390508593505b600084146133f257600a848161339757fe5b0660300160f81b828280600190039350815181106133b157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816133ea57fe5b049350613385565b819450505050505b919050565b600061340b601461389b565b905090565b600060606040518060200161342490613a8c565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b602083106134be578051825260208201915060208101905060208303925061349b565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401955050505050506040516020818303038152906040529050600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c92505050919050565b60008083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161365c90613a8c565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f59050801580156136b9573d6000803e3d6000fd5b5090508215613750577f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156137e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806142e36035913960400191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015613897577f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b600080600090506138aa613930565b1561392357600083600036905003905061391b600036839060148501926138d393929190613a99565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506139f3565b915050613927565b3390505b80915050919050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156139ec57602c600036905010156139e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061436c6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114613a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b61075180613acd83390190565b60008085851115613aa957600080fd5b83861115613ab657600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a"
  },
  "PromiseMessage": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
        "name": "PromiseRouter__send_callbackAddressNotContract",
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b5061427b806100206000396000f3fe6080604052600436106101445760003560e01c80638da5cb5b116100b6578063d1851c921161006f578063d1851c921461041c578063d232c22014610447578063de4b054814610472578063dfefb7d71461049d578063fc89d377146104c6578063ffa1ad74146104e25761014b565b80638da5cb5b14610336578063ab2dc3f514610361578063b1f8100d1461038a578063b49c53a7146103b3578063c4d66de8146103dc578063c5b350df146104055761014b565b80635540f1c0116101085780635540f1c01461023557806365d82b8b146102515780636a42b8f81461027a5780637080f771146102a5578063715018a6146102e257806383bbb806146102f95761014b565b80633339df96146101505780633cf52ffb1461017b57806341bdc8b5146101a65780634d6f2013146101cf5780634fa6b634146101f85761014b565b3661014b57005b600080fd5b34801561015c57600080fd5b5061016561050d565b6040516101729190612c19565b60405180910390f35b34801561018757600080fd5b50610190610533565b60405161019d9190612c4d565b60405180910390f35b3480156101b257600080fd5b506101cd60048036038101906101c89190612cba565b61053d565b005b3480156101db57600080fd5b506101f660048036038101906101f19190612cba565b610608565b005b34801561020457600080fd5b5061021f600480360381019061021a9190612d1d565b610716565b60405161022c9190612c4d565b60405180910390f35b61024f600480360381019061024a9190612d1d565b61072e565b005b34801561025d57600080fd5b5061027860048036038101906102739190612e23565b61086c565b005b34801561028657600080fd5b5061028f610b04565b60405161029c9190612c4d565b60405180910390f35b3480156102b157600080fd5b506102cc60048036038101906102c79190612d1d565b610b0f565b6040516102d99190612ecc565b60405180910390f35b3480156102ee57600080fd5b506102f7610b27565b005b34801561030557600080fd5b50610320600480360381019061031b9190612ee7565b610ce9565b60405161032d9190612ecc565b60405180910390f35b34801561034257600080fd5b5061034b610d01565b6040516103589190612f23565b60405180910390f35b34801561036d57600080fd5b506103886004803603810190610383919061307f565b610d2a565b005b34801561039657600080fd5b506103b160048036038101906103ac9190612cba565b610ebc565b005b3480156103bf57600080fd5b506103da60048036038101906103d59190613102565b611098565b005b3480156103e857600080fd5b5061040360048036038101906103fe9190612cba565b611147565b005b34801561041157600080fd5b5061041a6111dd565b005b34801561042857600080fd5b506104316112da565b60405161043e9190612f23565b60405180910390f35b34801561045357600080fd5b5061045c611304565b6040516104699190613151565b60405180910390f35b34801561047e57600080fd5b5061048761135c565b604051610494919061318d565b60405180910390f35b3480156104a957600080fd5b506104c460048036038101906104bf91906131a8565b611382565b005b6104e060048036038101906104db9190612d1d565b61172a565b005b3480156104ee57600080fd5b506104f7611831565b6040516105049190613224565b60405180910390f35b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105c4576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461068f576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f360405160405180910390a250565b60cc6020528060005260406000206000915090505481565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b5576040517f2c4b07cf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60003414156107f0576040517fff4355d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460cc60008381526020019081526020016000206000828254610813919061326e565b92505081905550807fe01346f7c5b12b318c8239d37465281e572012b3f898085a3d2ed142ba2fa15d3460cc60008581526020019081526020016000205433604051610861939291906132c4565b60405180910390a250565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108f3576040517f2c4b07cf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828290501415610931576040517f49f88d8300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610998576040517f91ca0fb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109a387611836565b905060006109b487878787876118a5565b9050603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a479190613339565b73ffffffffffffffffffffffffffffffffffffffff1663fa31de018984846040518463ffffffff1660e01b8152600401610a83939291906133fd565b600060405180830381600087803b158015610a9d57600080fd5b505af1158015610ab1573d6000803e3d6000fd5b505050507fa1d84c22c68d469068eaf6be2c49fd6f9120f7e4176ba1dc8027e5e1cdce1f918883898989898988604051610af2989796959493929190613468565b60405180910390a15050505050505050565b600062093a80905090565b60cb6020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610bae576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006002541415610beb576040517f392cc0fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a8060025442610bfd91906134e7565b11610c34576040517f86d4b3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cbc576040517f23295ef900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611901565b565b60666020528060005260406000206000915090505481565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610d3333611a10565b610d72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6990613578565b60405180910390fd5b8382610d7e8282611ab5565b610dbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db4906135e4565b60405180910390fd5b6000610de1610dd6600086611ae190919063ffffffff16565b62ffffff1916611b0c565b90506000610df48262ffffff1916611b2c565b90506000610e078362ffffff1916611b83565b90506000610e1a8462ffffff1916611bd7565b90506000610e2d8562ffffff1916611c31565b9050610e3e8562ffffff1916611ca6565b60cb6000868152602001908152602001600020819055508a63ffffffff16610e668c8c611ce9565b67ffffffffffffffff167f878c51ec082a65de8c0a9e68ec34c48c86f4d76ae6d693587eb4420611ae0f51868686868e604051610ea7959493929190613604565b60405180910390a35050505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f43576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610fcd5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15611004576040517f23780cca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561108c576040517f945f6e7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61109581611d10565b50565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461111f576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80606660008463ffffffff1663ffffffff168152602001908152602001600020819055505050565b60006111536001611dc0565b90508015611177576001600060016101000a81548160ff0219169083151502179055505b61118082611eb0565b80156111d95760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516111d091906136a0565b60405180910390a15b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611264576040517f234fe4e200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a806002544261127691906134e7565b116112ad576040517fd39c12bb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112d8600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611901565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260985414156113c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bf90613707565b60405180910390fd5b6002609881905550600060cb60008581526020019081526020016000205490506000801b811415611425576040517f3099ed6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061148d611482600086868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611ae190919063ffffffff16565b62ffffff1916611b0c565b905061149e8162ffffff1916611ca6565b82146114d6576040517f1048e03a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638cba8b6a336040518263ffffffff1660e01b81526004016115319190612f23565b602060405180830381865afa15801561154e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611572919061373c565b6115a8576040517fbe95c75000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115b98262ffffff1916611b83565b90506115c481611f86565b6115fa576040517fe94778c200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060cc600088815260200190815260200160002054905060cb600088815260200190815260200160002060009055600060cc6000898152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff1663034baf0e8861166e8662ffffff1916611bd7565b61167d8762ffffff1916611c31565b6040518463ffffffff1660e01b815260040161169b93929190613769565b600060405180830381600087803b1580156116b557600080fd5b505af11580156116c9573d6000803e3d6000fd5b50505050867f25639428fb03bb25e9ccc77977e8f4ed022248bae7422d898c57f328d21ad75d336040516116fd9190612f23565b60405180910390a26000811115611719576117183382611fa9565b5b505050506001609881905550505050565b6000341415611765576040517ffc7f537c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000801b60cb60008381526020019081526020016000205414156117b5576040517f53b0f6d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3460cc600083815260200190815260200160002060008282546117d8919061326e565b92505081905550807fe01346f7c5b12b318c8239d37465281e572012b3f898085a3d2ed142ba2fa15d3460cc60008581526020019081526020016000205433604051611826939291906132c4565b60405180910390a250565b600081565b6000606660008363ffffffff1663ffffffff1681526020019081526020016000205490506000801b8114156118a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611897906137f3565b60405180910390fd5b919050565b60606001808111156118ba576118b9613813565b5b8686866118c85760006118cb565b60015b8686905087876040516020016118e79796959493929190613932565b604051602081830303815290604052905095945050505050565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635190bc53836040518263ffffffff1660e01b8152600401611a6d9190612f23565b602060405180830381865afa158015611a8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aae919061373c565b9050919050565b600081606660008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b600080835190506000602085019050611b028464ffffffffff16828461209d565b9250505092915050565b6000611b25611b1a83612105565b62ffffff1916612157565b9050919050565b6000816001611b5c816001811115611b4757611b46613813565b5b8362ffffff19166121a990919063ffffffff16565b50611b7a600160208662ffffff19166122579092919063ffffffff16565b92505050919050565b6000816001611bb3816001811115611b9e57611b9d613813565b5b8362ffffff19166121a990919063ffffffff16565b50611bce60218562ffffff191661239c90919063ffffffff16565b92505050919050565b6000816001611c07816001811115611bf257611bf1613813565b5b8362ffffff19166121a990919063ffffffff16565b506001611c27603560018762ffffff19166123b29092919063ffffffff16565b1492505050919050565b6060816001611c61816001811115611c4c57611c4b613813565b5b8362ffffff19166121a990919063ffffffff16565b506000611c6d856123e9565b9050611c9c611c9160568360008962ffffff191661240f909392919063ffffffff16565b62ffffff19166124a6565b9350505050919050565b600080611cb2836124ed565b6bffffffffffffffffffffffff1690506000611ccd8461250d565b6bffffffffffffffffffffffff16905080822092505050919050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b4260028190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a60405160405180910390a250565b60008060019054906101000a900460ff1615611e375760018260ff16148015611def5750611ded30611f86565b155b611e2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e2590613a12565b60405180910390fd5b60009050611eab565b8160ff1660008054906101000a900460ff1660ff1610611e8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e8390613a12565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b6000611ebc6001611dc0565b90508015611ee0576001600060016101000a81548160ff0219169083151502179055505b81603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611f2961252d565b8015611f825760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611f7991906136a0565b60405180910390a15b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b80471015611fec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fe390613a7e565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405161201290613ac4565b60006040518083038185875af1925050503d806000811461204f576040519150601f19603f3d011682016040523d82523d6000602084013e612054565b606091505b5050905080612098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208f90613b4b565b60405180910390fd5b505050565b60008082846120ac919061326e565b90506040518111156120bd57600090505b60008114156120ef577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506120fe565b6120fa858585612586565b9150505b9392505050565b6000612110826125a7565b156121475761214060018081111561212b5761212a613813565b5b8362ffffff191661260690919063ffffffff16565b9050612152565b61214f612621565b90505b919050565b600061216282612649565b6121a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161219890613bb7565b60405180910390fd5b819050919050565b60006121b5838361268c565b61224e5760006121d36121c7856126af565b64ffffffffff166126bc565b91505060006121e88464ffffffffff166126bc565b91505060008282604051602001612200929190613cc6565b6040516020818303038152906040529050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122459190613d4c565b60405180910390fd5b82905092915050565b6000808260ff16141561226f576000801b9050612395565b6122788461250d565b6bffffffffffffffffffffffff168260ff1684612295919061326e565b1115612312576122d66122a7856124ed565b6bffffffffffffffffffffffff166122be8661250d565b6bffffffffffffffffffffffff16858560ff1661277a565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123099190613d4c565b60405180910390fd5b60208260ff161115612359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235090613de0565b60405180910390fd5b6000600883029050600061236c866124ed565b6bffffffffffffffffffffffff1690506000612387836127e8565b905080868301511693505050505b9392505050565b60006123aa838360146123b2565b905092915050565b600060088260206123c39190613e00565b6123cd9190613e34565b60ff166123db858585612257565b60001c901c90509392505050565b6000612408603660208462ffffff19166123b29092919063ffffffff16565b9050919050565b60008061241b866124ed565b6bffffffffffffffffffffffff16905061243486612817565b848683612441919061326e565b61244b919061326e565b111561247a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061249e565b8481612486919061326e565b905061249a8364ffffffffff16828661209d565b9150505b949350505050565b60606000806124b48461250d565b6bffffffffffffffffffffffff16905060405191508192506124d98460208401612841565b506020818301016040528082525050919050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b600060019054906101000a900460ff1661257c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257390613ee1565b60405180910390fd5b61258461294c565b565b600083811760601b905082811760601b905081811760181b90509392505050565b6000806125b98362ffffff191661250d565b6bffffffffffffffffffffffff16905060006125d4846123e9565b90506056821180156125e65750600081115b80156125fd5750818160566125fb919061326e565b145b92505050919050565b60008260281b60281c811790508160d81b8117905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000905090565b600064ffffffffff61265a836126af565b64ffffffffff1614156126705760009050612687565b600061267b83612817565b90506040518111199150505b919050565b60008164ffffffffff1661269f846126af565b64ffffffffff1614905092915050565b60008160d81c9050919050565b6000806000601f90505b600f8160ff1611156127195760006008826126e19190613e34565b60ff1685901c90506126f2816129a6565b61ffff168417935060108260ff161461270d57601084901b93505b600182039150506126c6565b506000600f90505b60ff8160ff16101561277457600060088261273c9190613e34565b60ff1685901c905061274d816129a6565b61ffff168317925060008260ff161461276857601083901b92505b60018203915050612721565b50915091565b60606000612787866126bc565b9150506000612795866126bc565b91505060006127a3866126bc565b91505060006127b1866126bc565b915050838383836040516020016127cb94939291906140c5565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b60006128228261250d565b61282b836124ed565b016bffffffffffffffffffffffff169050919050565b600061284c836129df565b61288b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612882906141bc565b60405180910390fd5b61289483612649565b6128d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128ca9061424e565b60405180910390fd5b60006128de8461250d565b6bffffffffffffffffffffffff16905060006128f9856124ed565b6bffffffffffffffffffffffff169050600060405190508481111561291e5760206060fd5b8285848460045afa50612941612933876126af565b64ffffffffff168685612586565b935050505092915050565b600060019054906101000a900460ff1661299b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161299290613ee1565b60405180910390fd5b6129a433611901565b565b60006129b860048360ff16901c6129f2565b60ff168117905060088161ffff16901b90506129d3826129f2565b60ff1681179050919050565b60006129ea82612b62565b159050919050565b60008060f08317905060f08160ff161415612a11576030915050612b5d565b60f18160ff161415612a27576031915050612b5d565b60f28160ff161415612a3d576032915050612b5d565b60f38160ff161415612a53576033915050612b5d565b60f48160ff161415612a69576034915050612b5d565b60f58160ff161415612a7f576035915050612b5d565b60f68160ff161415612a95576036915050612b5d565b60f78160ff161415612aab576037915050612b5d565b60f88160ff161415612ac1576038915050612b5d565b60f98160ff161415612ad7576039915050612b5d565b60fa8160ff161415612aed576061915050612b5d565b60fb8160ff161415612b03576062915050612b5d565b60fc8160ff161415612b19576063915050612b5d565b60fd8160ff161415612b2f576064915050612b5d565b60fe8160ff161415612b45576065915050612b5d565b60ff8160ff161415612b5b576066915050612b5d565b505b919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000062ffffff19168262ffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612bdf612bda612bd584612b9a565b612bba565b612b9a565b9050919050565b6000612bf182612bc4565b9050919050565b6000612c0382612be6565b9050919050565b612c1381612bf8565b82525050565b6000602082019050612c2e6000830184612c0a565b92915050565b6000819050919050565b612c4781612c34565b82525050565b6000602082019050612c626000830184612c3e565b92915050565b6000604051905090565b600080fd5b600080fd5b6000612c8782612b9a565b9050919050565b612c9781612c7c565b8114612ca257600080fd5b50565b600081359050612cb481612c8e565b92915050565b600060208284031215612cd057612ccf612c72565b5b6000612cde84828501612ca5565b91505092915050565b6000819050919050565b612cfa81612ce7565b8114612d0557600080fd5b50565b600081359050612d1781612cf1565b92915050565b600060208284031215612d3357612d32612c72565b5b6000612d4184828501612d08565b91505092915050565b600063ffffffff82169050919050565b612d6381612d4a565b8114612d6e57600080fd5b50565b600081359050612d8081612d5a565b92915050565b60008115159050919050565b612d9b81612d86565b8114612da657600080fd5b50565b600081359050612db881612d92565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112612de357612de2612dbe565b5b8235905067ffffffffffffffff811115612e0057612dff612dc3565b5b602083019150836001820283011115612e1c57612e1b612dc8565b5b9250929050565b60008060008060008060a08789031215612e4057612e3f612c72565b5b6000612e4e89828a01612d71565b9650506020612e5f89828a01612d08565b9550506040612e7089828a01612ca5565b9450506060612e8189828a01612da9565b935050608087013567ffffffffffffffff811115612ea257612ea1612c77565b5b612eae89828a01612dcd565b92509250509295509295509295565b612ec681612ce7565b82525050565b6000602082019050612ee16000830184612ebd565b92915050565b600060208284031215612efd57612efc612c72565b5b6000612f0b84828501612d71565b91505092915050565b612f1d81612c7c565b82525050565b6000602082019050612f386000830184612f14565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612f8c82612f43565b810181811067ffffffffffffffff82111715612fab57612faa612f54565b5b80604052505050565b6000612fbe612c68565b9050612fca8282612f83565b919050565b600067ffffffffffffffff821115612fea57612fe9612f54565b5b612ff382612f43565b9050602081019050919050565b82818337600083830152505050565b600061302261301d84612fcf565b612fb4565b90508281526020810184848401111561303e5761303d612f3e565b5b613049848285613000565b509392505050565b600082601f83011261306657613065612dbe565b5b813561307684826020860161300f565b91505092915050565b6000806000806080858703121561309957613098612c72565b5b60006130a787828801612d71565b94505060206130b887828801612d71565b93505060406130c987828801612d08565b925050606085013567ffffffffffffffff8111156130ea576130e9612c77565b5b6130f687828801613051565b91505092959194509250565b6000806040838503121561311957613118612c72565b5b600061312785828601612d71565b925050602061313885828601612d08565b9150509250929050565b61314b81612d86565b82525050565b60006020820190506131666000830184613142565b92915050565b600061317782612be6565b9050919050565b6131878161316c565b82525050565b60006020820190506131a2600083018461317e565b92915050565b6000806000604084860312156131c1576131c0612c72565b5b60006131cf86828701612d08565b935050602084013567ffffffffffffffff8111156131f0576131ef612c77565b5b6131fc86828701612dcd565b92509250509250925092565b600060ff82169050919050565b61321e81613208565b82525050565b60006020820190506132396000830184613215565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061327982612c34565b915061328483612c34565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156132b9576132b861323f565b5b828201905092915050565b60006060820190506132d96000830186612c3e565b6132e66020830185612c3e565b6132f36040830184612f14565b949350505050565b600061330682612c7c565b9050919050565b613316816132fb565b811461332157600080fd5b50565b6000815190506133338161330d565b92915050565b60006020828403121561334f5761334e612c72565b5b600061335d84828501613324565b91505092915050565b61336f81612d4a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156133af578082015181840152602081019050613394565b838111156133be576000848401525b50505050565b60006133cf82613375565b6133d98185613380565b93506133e9818560208601613391565b6133f281612f43565b840191505092915050565b60006060820190506134126000830186613366565b61341f6020830185612ebd565b818103604083015261343181846133c4565b9050949350505050565b60006134478385613380565b9350613454838584613000565b61345d83612f43565b840190509392505050565b600060e08201905061347d600083018b613366565b61348a602083018a612ebd565b6134976040830189612ebd565b6134a46060830188612f14565b6134b16080830187613142565b81810360a08301526134c481858761343b565b905081810360c08301526134d881846133c4565b90509998505050505050505050565b60006134f282612c34565b91506134fd83612c34565b9250828210156135105761350f61323f565b5b828203905092915050565b600082825260208201905092915050565b7f217265706c696361000000000000000000000000000000000000000000000000600082015250565b600061356260088361351b565b915061356d8261352c565b602082019050919050565b6000602082019050818103600083015261359181613555565b9050919050565b7f2172656d6f746520726f75746572000000000000000000000000000000000000600082015250565b60006135ce600e8361351b565b91506135d982613598565b602082019050919050565b600060208201905081810360008301526135fd816135c1565b9050919050565b600060a0820190506136196000830188612ebd565b6136266020830187612f14565b6136336040830186613142565b818103606083015261364581856133c4565b9050818103608083015261365981846133c4565b90509695505050505050565b6000819050919050565b600061368a61368561368084613665565b612bba565b613208565b9050919050565b61369a8161366f565b82525050565b60006020820190506136b56000830184613691565b92915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006136f1601f8361351b565b91506136fc826136bb565b602082019050919050565b60006020820190508181036000830152613720816136e4565b9050919050565b60008151905061373681612d92565b92915050565b60006020828403121561375257613751612c72565b5b600061376084828501613727565b91505092915050565b600060608201905061377e6000830186612ebd565b61378b6020830185613142565b818103604083015261379d81846133c4565b9050949350505050565b7f2172656d6f746500000000000000000000000000000000000000000000000000600082015250565b60006137dd60078361351b565b91506137e8826137a7565b602082019050919050565b6000602082019050818103600083015261380c816137d0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008160f81b9050919050565b600061385a82613842565b9050919050565b61387261386d82613208565b61384f565b82525050565b6000819050919050565b61389361388e82612ce7565b613878565b82525050565b60008160601b9050919050565b60006138b182613899565b9050919050565b60006138c3826138a6565b9050919050565b6138db6138d682612c7c565b6138b8565b82525050565b6000819050919050565b6138fc6138f782612c34565b6138e1565b82525050565b600081905092915050565b60006139198385613902565b9350613926838584613000565b82840190509392505050565b600061393e828a613861565b60018201915061394e8289613882565b60208201915061395e82886138ca565b60148201915061396e8287613861565b60018201915061397e82866138eb565b60208201915061398f82848661390d565b915081905098975050505050505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006139fc602e8361351b565b9150613a07826139a0565b604082019050919050565b60006020820190508181036000830152613a2b816139ef565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000613a68601d8361351b565b9150613a7382613a32565b602082019050919050565b60006020820190508181036000830152613a9781613a5b565b9050919050565b50565b6000613aae600083613902565b9150613ab982613a9e565b600082019050919050565b6000613acf82613aa1565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000613b35603a8361351b565b9150613b4082613ad9565b604082019050919050565b60006020820190508181036000830152613b6481613b28565b9050919050565b7f56616c696469747920617373657274696f6e206661696c656400000000000000600082015250565b6000613ba160198361351b565b9150613bac82613b6b565b602082019050919050565b60006020820190508181036000830152613bd081613b94565b9050919050565b600081905092915050565b7f5479706520617373657274696f6e206661696c65642e20476f74203078000000600082015250565b6000613c18601d83613bd7565b9150613c2382613be2565b601d82019050919050565b600069ffffffffffffffffffff82169050919050565b60008160b01b9050919050565b6000613c5c82613c44565b9050919050565b613c74613c6f82613c2e565b613c51565b82525050565b7f2e20457870656374656420307800000000000000000000000000000000000000600082015250565b6000613cb0600d83613bd7565b9150613cbb82613c7a565b600d82019050919050565b6000613cd182613c0b565b9150613cdd8285613c63565b600a82019150613cec82613ca3565b9150613cf88284613c63565b600a820191508190509392505050565b600081519050919050565b6000613d1e82613d08565b613d28818561351b565b9350613d38818560208601613391565b613d4181612f43565b840191505092915050565b60006020820190508181036000830152613d668184613d13565b905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b6000613dca603a8361351b565b9150613dd582613d6e565b604082019050919050565b60006020820190508181036000830152613df981613dbd565b9050919050565b6000613e0b82613208565b9150613e1683613208565b925082821015613e2957613e2861323f565b5b828203905092915050565b6000613e3f82613208565b9150613e4a83613208565b92508160ff0483118215151615613e6457613e6361323f565b5b828202905092915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613ecb602b8361351b565b9150613ed682613e6f565b604082019050919050565b60006020820190508181036000830152613efa81613ebe565b9050919050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b6000613f5d603583613bd7565b9150613f6882613f01565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b6000613f9d82613f85565b9050919050565b613fb5613fb082613f73565b613f92565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b6000613ff1600f83613bd7565b9150613ffc82613fbb565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b6000614063602183613bd7565b915061406e82614007565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b60006140af600183613bd7565b91506140ba82614079565b600182019050919050565b60006140d082613f50565b91506140dc8287613fa4565b6006820191506140eb82613fe4565b91506140f78286613fa4565b60068201915061410682614056565b91506141128285613fa4565b60068201915061412182613fe4565b915061412d8284613fa4565b60068201915061413c826140a2565b915081905095945050505050565b7f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460008201527f6572206465726566000000000000000000000000000000000000000000000000602082015250565b60006141a660288361351b565b91506141b18261414a565b604082019050919050565b600060208201905081810360008301526141d581614199565b9050919050565b7f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60008201527f696e746572206465726566000000000000000000000000000000000000000000602082015250565b6000614238602b8361351b565b9150614243826141dc565b604082019050919050565b600060208201905081810360008301526142678161422b565b905091905056fea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506104a3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632bef289214610046578063ab91c7b014610076578063f6d1610214610094575b600080fd5b610060600480360381019061005b91906102c7565b6100b2565b60405161006d919061030f565b60405180910390f35b61007e6100cf565b60405161008b9190610343565b60405180910390f35b61009c6100e0565b6040516100a9919061036d565b60405180910390f35b60006100c88260016100f190919063ffffffff16565b9050919050565b60006100db60016101a9565b905090565b60006100ec6001610207565b905090565b6000808360000160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1690505b8360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16811161019d578284600101600083815260200190815260200160002054141561018a5760019150506101a3565b8080610195906103b7565b91505061012a565b50600090505b92915050565b6000808260000160109054906101000a90046fffffffffffffffffffffffffffffffff16905060008360000160009054906101000a90046fffffffffffffffffffffffffffffffff1690506101fe8282610258565b92505050919050565b60008160010160008360000160109054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600184610268919061041c565b6102729190610462565b6fffffffffffffffffffffffffffffffff16905092915050565b600080fd5b6000819050919050565b6102a481610291565b81146102af57600080fd5b50565b6000813590506102c18161029b565b92915050565b6000602082840312156102dd576102dc61028c565b5b60006102eb848285016102b2565b91505092915050565b60008115159050919050565b610309816102f4565b82525050565b60006020820190506103246000830184610300565b92915050565b6000819050919050565b61033d8161032a565b82525050565b60006020820190506103586000830184610334565b92915050565b61036781610291565b82525050565b6000602082019050610382600083018461035e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103c28261032a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103f5576103f4610388565b5b600182019050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b600061042782610400565b915061043283610400565b9250826fffffffffffffffffffffffffffffffff0382111561045757610456610388565b5b828201905092915050565b600061046d82610400565b915061047883610400565b92508282101561048b5761048a610388565b5b82820390509291505056fea164736f6c634300080b000a"
  },
  "ReentrancyGuard": {
    "abi": [
      {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "RelayerFeeMessage": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50613490806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b1f8100d116100a2578063d1851c9211610071578063d1851c921461027f578063d232c2201461029d578063d7d680a3146102bb578063de4b0548146102d7578063ffa1ad74146102f557610116565b8063b1f8100d14610221578063b49c53a71461023d578063c4d66de814610259578063c5b350df1461027557610116565b80636a42b8f8116100e95780636a42b8f81461018f578063715018a6146101ad57806383bbb806146101b75780638da5cb5b146101e7578063ab2dc3f51461020557610116565b80633339df961461011b5780633cf52ffb1461013957806341bdc8b5146101575780634d6f201314610173575b600080fd5b610123610313565b6040516101309190612090565b60405180910390f35b610141610339565b60405161014e91906120c4565b60405180910390f35b610171600480360381019061016c9190612131565b610343565b005b61018d60048036038101906101889190612131565b61040e565b005b61019761051c565b6040516101a491906120c4565b60405180910390f35b6101b5610527565b005b6101d160048036038101906101cc919061219a565b6106e9565b6040516101de91906121e0565b60405180910390f35b6101ef610701565b6040516101fc919061220a565b60405180910390f35b61021f600480360381019061021a9190612397565b61072a565b005b61023b60048036038101906102369190612131565b61090c565b005b6102576004803603810190610252919061241a565b610ae8565b005b610273600480360381019061026e9190612131565b610b97565b005b61027d610c2d565b005b610287610d2a565b604051610294919061220a565b60405180910390f35b6102a5610d54565b6040516102b29190612475565b60405180910390f35b6102d560048036038101906102d091906124f0565b610dac565b005b6102df61103c565b6040516102ec9190612585565b60405180910390f35b6102fd611062565b60405161030a91906125bc565b60405180910390f35b603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103ca576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610495576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80609860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f360405160405180910390a250565b600062093a80905090565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105ae576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060025414156105eb576040517f392cc0fc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a80600254426105fd9190612606565b11610634576040517f86d4b3f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106bc576040517f23295ef900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611067565b565b60666020528060005260406000206000915090505481565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61073333611176565b610772576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076990612697565b60405180910390fd5b838261077e828261121b565b6107bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b490612703565b60405180910390fd5b60006107e16107d660008661124790919063ffffffff16565b62ffffff1916611272565b905060006107f48262ffffff1916611292565b905060006108078362ffffff19166112e6565b9050609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d7aada8183836040518363ffffffff1660e01b81526004016108669291906127e1565b600060405180830381600087803b15801561088057600080fd5b505af1158015610894573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff168963ffffffff166108c08b8b611400565b67ffffffffffffffff167fb29810b17f96b207e4d6c91fd73ec7ab882db28c3a239f2eb6c7c801c43d003b846040516108f99190612811565b60405180910390a4505050505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610993576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610a1d5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610a54576040517f23780cca00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610adc576040517f945f6e7e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ae581611427565b50565b3373ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b6f576040517f8d450dd800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80606660008463ffffffff1663ffffffff168152602001908152602001600020819055505050565b6000610ba360016114d7565b90508015610bc7576001600060016101000a81548160ff0219169083151502179055505b610bd0826115c7565b8015610c295760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610c20919061286e565b60405180910390a15b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610cb4576040517f234fe4e200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b62093a8060025442610cc69190612606565b11610cfd576040517fd39c12bb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d28600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611067565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e33576040517f14e189b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828290501415610e71576040517f5aef8ded00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ed8576040517ff7afa16f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610ee38561169d565b90506000610ef285858561170c565b9050603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8591906128c7565b73ffffffffffffffffffffffffffffffffffffffff1663fa31de018784846040518463ffffffff1660e01b8152600401610fc19392919061298b565b600060405180830381600087803b158015610fdb57600080fd5b505af1158015610fef573d6000803e3d6000fd5b505050507f90d6f02f078dba10aa43c39bf7a3d3bc9629a280b078d473da5486c6531ec64186868686868660405161102c96959493929190612a2a565b60405180910390a1505050505050565b609860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006002819055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000603460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635190bc53836040518263ffffffff1660e01b81526004016111d3919061220a565b602060405180830381865afa1580156111f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112149190612ab9565b9050919050565b600081606660008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b6000808351905060006020850190506112688464ffffffffff168284611754565b9250505092915050565b600061128b611280836117bc565b62ffffff191661180e565b9050919050565b60008160016112c28160018111156112ad576112ac612ae6565b5b8362ffffff191661186090919063ffffffff16565b506112dd60018562ffffff191661190e90919063ffffffff16565b92505050919050565b606081600161131681600181111561130157611300612ae6565b5b8362ffffff191661186090919063ffffffff16565b506000611336601560208762ffffff19166119249092919063ffffffff16565b905060008167ffffffffffffffff8111156113545761135361226c565b5b6040519080825280602002602001820160405280156113825781602001602082028036833780820191505090505b50905060005b828110156113f3576113c7602060ff16826113a39190612b15565b60356113af9190612b6f565b60208962ffffff191661195b9092919063ffffffff16565b8282815181106113da576113d9612bc5565b5b6020026020010181815250508080600101915050611388565b5080945050505050919050565b60008163ffffffff1660208463ffffffff1667ffffffffffffffff16901b17905092915050565b4260028190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a60405160405180910390a250565b60008060019054906101000a900460ff161561154e5760018260ff16148015611506575061150430611aa0565b155b611545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153c90612c66565b60405180910390fd5b600090506115c2565b8160ff1660008054906101000a900460ff1660ff16106115a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159a90612c66565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b60006115d360016114d7565b905080156115f7576001600060016101000a81548160ff0219169083151502179055505b81603460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611640611ac3565b80156116995760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611690919061286e565b60405180910390a15b5050565b6000606660008363ffffffff1663ffffffff1681526020019081526020016000205490506000801b811415611707576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116fe90612cd2565b60405180910390fd5b919050565b606060018081111561172157611720612ae6565b5b8484849050858560405160200161173c959493929190612df8565b60405160208183030381529060405290509392505050565b60008082846117639190612b6f565b905060405181111561177457600090505b60008114156117a6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506117b5565b6117b1858585611b1c565b9150505b9392505050565b60006117c782611b3d565b156117fe576117f76001808111156117e2576117e1612ae6565b5b8362ffffff1916611b9390919063ffffffff16565b9050611809565b611806611bae565b90505b919050565b600061181982611bd6565b611858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184f90612e90565b60405180910390fd5b819050919050565b600061186c8383611c19565b61190557600061188a61187e85611c3c565b64ffffffffff16611c49565b915050600061189f8464ffffffffff16611c49565b915050600082826040516020016118b7929190612f9f565b6040516020818303038152906040529050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fc9190613025565b60405180910390fd5b82905092915050565b600061191c83836014611924565b905092915050565b600060088260206119359190613047565b61193f919061307b565b60ff1661194d85858561195b565b60001c901c90509392505050565b6000808260ff161415611973576000801b9050611a99565b61197c84611d07565b6bffffffffffffffffffffffff168260ff16846119999190612b6f565b1115611a16576119da6119ab85611d27565b6bffffffffffffffffffffffff166119c286611d07565b6bffffffffffffffffffffffff16858560ff16611d47565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0d9190613025565b60405180910390fd5b60208260ff161115611a5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5490613128565b60405180910390fd5b60006008830290506000611a7086611d27565b6bffffffffffffffffffffffff1690506000611a8b83611db5565b905080868301511693505050505b9392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611b12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b09906131ba565b60405180910390fd5b611b1a611de4565b565b600083811760601b905082811760601b905081811760181b90509392505050565b600080611b4f8362ffffff1916611d07565b6bffffffffffffffffffffffff16905060558110158015611b8b57506000602060ff16603583611b7f9190612606565b611b899190613209565b145b915050919050565b60008260281b60281c811790508160d81b8117905092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000905090565b600064ffffffffff611be783611c3c565b64ffffffffff161415611bfd5760009050611c14565b6000611c0883611e3e565b90506040518111199150505b919050565b60008164ffffffffff16611c2c84611c3c565b64ffffffffff1614905092915050565b60008160d81c9050919050565b6000806000601f90505b600f8160ff161115611ca6576000600882611c6e919061307b565b60ff1685901c9050611c7f81611e68565b61ffff168417935060108260ff1614611c9a57601084901b93505b60018203915050611c53565b506000600f90505b60ff8160ff161015611d01576000600882611cc9919061307b565b60ff1685901c9050611cda81611e68565b61ffff168317925060008260ff1614611cf557601083901b92505b60018203915050611cae565b50915091565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b60606000611d5486611c49565b9150506000611d6286611c49565b9150506000611d7086611c49565b9150506000611d7e86611c49565b91505083838383604051602001611d9894939291906133fe565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b600060019054906101000a900460ff16611e33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e2a906131ba565b60405180910390fd5b611e3c33611067565b565b6000611e4982611d07565b611e5283611d27565b016bffffffffffffffffffffffff169050919050565b6000611e7a60048360ff16901c611ea1565b60ff168117905060088161ffff16901b9050611e9582611ea1565b60ff1681179050919050565b60008060f08317905060f08160ff161415611ec057603091505061200c565b60f18160ff161415611ed657603191505061200c565b60f28160ff161415611eec57603291505061200c565b60f38160ff161415611f0257603391505061200c565b60f48160ff161415611f1857603491505061200c565b60f58160ff161415611f2e57603591505061200c565b60f68160ff161415611f4457603691505061200c565b60f78160ff161415611f5a57603791505061200c565b60f88160ff161415611f7057603891505061200c565b60f98160ff161415611f8657603991505061200c565b60fa8160ff161415611f9c57606191505061200c565b60fb8160ff161415611fb257606291505061200c565b60fc8160ff161415611fc857606391505061200c565b60fd8160ff161415611fde57606491505061200c565b60fe8160ff161415611ff457606591505061200c565b60ff8160ff16141561200a57606691505061200c565b505b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061205661205161204c84612011565b612031565b612011565b9050919050565b60006120688261203b565b9050919050565b600061207a8261205d565b9050919050565b61208a8161206f565b82525050565b60006020820190506120a56000830184612081565b92915050565b6000819050919050565b6120be816120ab565b82525050565b60006020820190506120d960008301846120b5565b92915050565b6000604051905090565b600080fd5b600080fd5b60006120fe82612011565b9050919050565b61210e816120f3565b811461211957600080fd5b50565b60008135905061212b81612105565b92915050565b600060208284031215612147576121466120e9565b5b60006121558482850161211c565b91505092915050565b600063ffffffff82169050919050565b6121778161215e565b811461218257600080fd5b50565b6000813590506121948161216e565b92915050565b6000602082840312156121b0576121af6120e9565b5b60006121be84828501612185565b91505092915050565b6000819050919050565b6121da816121c7565b82525050565b60006020820190506121f560008301846121d1565b92915050565b612204816120f3565b82525050565b600060208201905061221f60008301846121fb565b92915050565b61222e816121c7565b811461223957600080fd5b50565b60008135905061224b81612225565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6122a48261225b565b810181811067ffffffffffffffff821117156122c3576122c261226c565b5b80604052505050565b60006122d66120df565b90506122e2828261229b565b919050565b600067ffffffffffffffff8211156123025761230161226c565b5b61230b8261225b565b9050602081019050919050565b82818337600083830152505050565b600061233a612335846122e7565b6122cc565b90508281526020810184848401111561235657612355612256565b5b612361848285612318565b509392505050565b600082601f83011261237e5761237d612251565b5b813561238e848260208601612327565b91505092915050565b600080600080608085870312156123b1576123b06120e9565b5b60006123bf87828801612185565b94505060206123d087828801612185565b93505060406123e18782880161223c565b925050606085013567ffffffffffffffff811115612402576124016120ee565b5b61240e87828801612369565b91505092959194509250565b60008060408385031215612431576124306120e9565b5b600061243f85828601612185565b92505060206124508582860161223c565b9150509250929050565b60008115159050919050565b61246f8161245a565b82525050565b600060208201905061248a6000830184612466565b92915050565b600080fd5b600080fd5b60008083601f8401126124b0576124af612251565b5b8235905067ffffffffffffffff8111156124cd576124cc612490565b5b6020830191508360208202830111156124e9576124e8612495565b5b9250929050565b6000806000806060858703121561250a576125096120e9565b5b600061251887828801612185565b94505060206125298782880161211c565b935050604085013567ffffffffffffffff81111561254a576125496120ee565b5b6125568782880161249a565b925092505092959194509250565b600061256f8261205d565b9050919050565b61257f81612564565b82525050565b600060208201905061259a6000830184612576565b92915050565b600060ff82169050919050565b6125b6816125a0565b82525050565b60006020820190506125d160008301846125ad565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612611826120ab565b915061261c836120ab565b92508282101561262f5761262e6125d7565b5b828203905092915050565b600082825260208201905092915050565b7f217265706c696361000000000000000000000000000000000000000000000000600082015250565b600061268160088361263a565b915061268c8261264b565b602082019050919050565b600060208201905081810360008301526126b081612674565b9050919050565b7f2172656d6f746520726f75746572000000000000000000000000000000000000600082015250565b60006126ed600e8361263a565b91506126f8826126b7565b602082019050919050565b6000602082019050818103600083015261271c816126e0565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612758816121c7565b82525050565b600061276a838361274f565b60208301905092915050565b6000602082019050919050565b600061278e82612723565b612798818561272e565b93506127a38361273f565b8060005b838110156127d45781516127bb888261275e565b97506127c683612776565b9250506001810190506127a7565b5085935050505092915050565b60006040820190506127f660008301856121fb565b81810360208301526128088184612783565b90509392505050565b6000602082019050818103600083015261282b8184612783565b905092915050565b6000819050919050565b600061285861285361284e84612833565b612031565b6125a0565b9050919050565b6128688161283d565b82525050565b6000602082019050612883600083018461285f565b92915050565b6000612894826120f3565b9050919050565b6128a481612889565b81146128af57600080fd5b50565b6000815190506128c18161289b565b92915050565b6000602082840312156128dd576128dc6120e9565b5b60006128eb848285016128b2565b91505092915050565b6128fd8161215e565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561293d578082015181840152602081019050612922565b8381111561294c576000848401525b50505050565b600061295d82612903565b612967818561290e565b935061297781856020860161291f565b6129808161225b565b840191505092915050565b60006060820190506129a060008301866128f4565b6129ad60208301856121d1565b81810360408301526129bf8184612952565b9050949350505050565b600080fd5b60006129da838561272e565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612a0d57612a0c6129c9565b5b602083029250612a1e838584612318565b82840190509392505050565b600060a082019050612a3f60008301896128f4565b612a4c60208301886121fb565b8181036040830152612a5f8186886129ce565b9050612a6e60608301856121d1565b8181036080830152612a808184612952565b9050979650505050505050565b612a968161245a565b8114612aa157600080fd5b50565b600081519050612ab381612a8d565b92915050565b600060208284031215612acf57612ace6120e9565b5b6000612add84828501612aa4565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000612b20826120ab565b9150612b2b836120ab565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612b6457612b636125d7565b5b828202905092915050565b6000612b7a826120ab565b9150612b85836120ab565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612bba57612bb96125d7565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612c50602e8361263a565b9150612c5b82612bf4565b604082019050919050565b60006020820190508181036000830152612c7f81612c43565b9050919050565b7f2172656d6f746500000000000000000000000000000000000000000000000000600082015250565b6000612cbc60078361263a565b9150612cc782612c86565b602082019050919050565b60006020820190508181036000830152612ceb81612caf565b9050919050565b60008160f81b9050919050565b6000612d0a82612cf2565b9050919050565b612d22612d1d826125a0565b612cff565b82525050565b60008160601b9050919050565b6000612d4082612d28565b9050919050565b6000612d5282612d35565b9050919050565b612d6a612d65826120f3565b612d47565b82525050565b6000819050919050565b612d8b612d86826120ab565b612d70565b82525050565b600081905092915050565b6000612da88385612d91565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612ddb57612dda6129c9565b5b602083029250612dec838584612318565b82840190509392505050565b6000612e048288612d11565b600182019150612e148287612d59565b601482019150612e248286612d7a565b602082019150612e35828486612d9c565b91508190509695505050505050565b7f56616c696469747920617373657274696f6e206661696c656400000000000000600082015250565b6000612e7a60198361263a565b9150612e8582612e44565b602082019050919050565b60006020820190508181036000830152612ea981612e6d565b9050919050565b600081905092915050565b7f5479706520617373657274696f6e206661696c65642e20476f74203078000000600082015250565b6000612ef1601d83612eb0565b9150612efc82612ebb565b601d82019050919050565b600069ffffffffffffffffffff82169050919050565b60008160b01b9050919050565b6000612f3582612f1d565b9050919050565b612f4d612f4882612f07565b612f2a565b82525050565b7f2e20457870656374656420307800000000000000000000000000000000000000600082015250565b6000612f89600d83612eb0565b9150612f9482612f53565b600d82019050919050565b6000612faa82612ee4565b9150612fb68285612f3c565b600a82019150612fc582612f7c565b9150612fd18284612f3c565b600a820191508190509392505050565b600081519050919050565b6000612ff782612fe1565b613001818561263a565b935061301181856020860161291f565b61301a8161225b565b840191505092915050565b6000602082019050818103600083015261303f8184612fec565b905092915050565b6000613052826125a0565b915061305d836125a0565b9250828210156130705761306f6125d7565b5b828203905092915050565b6000613086826125a0565b9150613091836125a0565b92508160ff04831182151516156130ab576130aa6125d7565b5b828202905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b6000613112603a8361263a565b915061311d826130b6565b604082019050919050565b6000602082019050818103600083015261314181613105565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006131a4602b8361263a565b91506131af82613148565b604082019050919050565b600060208201905081810360008301526131d381613197565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613214826120ab565b915061321f836120ab565b92508261322f5761322e6131da565b5b828206905092915050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b6000613296603583612eb0565b91506132a18261323a565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b60006132d6826132be565b9050919050565b6132ee6132e9826132ac565b6132cb565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b600061332a600f83612eb0565b9150613335826132f4565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b600061339c602183612eb0565b91506133a782613340565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b60006133e8600183612eb0565b91506133f3826133b2565b600182019050919050565b600061340982613289565b915061341582876132dd565b6006820191506134248261331d565b915061343082866132dd565b60068201915061343f8261338f565b915061344b82856132dd565b60068201915061345a8261331d565b915061346682846132dd565b600682019150613475826133db565b91508190509594505050505056fea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60e06040523480156200001157600080fd5b506040516200460238038062004602833981810160405281019062000037919062000178565b828063ffffffff1660808163ffffffff168152505050620cf85082101562000096576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200008d9062000235565b60405180910390fd5b613a98811015620000de576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000d590620002a7565b60405180910390fd5b8160a081815250508060c08181525050505050620002c9565b600080fd5b600063ffffffff82169050919050565b6200011781620000fc565b81146200012357600080fd5b50565b60008151905062000137816200010c565b92915050565b6000819050919050565b62000152816200013d565b81146200015e57600080fd5b50565b600081519050620001728162000147565b92915050565b600080600060608486031215620001945762000193620000f7565b5b6000620001a48682870162000126565b9350506020620001b78682870162000161565b9250506040620001ca8682870162000161565b9150509250925092565b600082825260208201905092915050565b7f2170726f63657373206761730000000000000000000000000000000000000000600082015250565b60006200021d600c83620001d4565b91506200022a82620001e5565b602082019050919050565b6000602082019050818103600083015262000250816200020e565b9050919050565b7f2172657365727665206761730000000000000000000000000000000000000000600082015250565b60006200028f600c83620001d4565b91506200029c8262000257565b602082019050919050565b60006020820190508181036000830152620002c28162000280565b9050919050565b60805160a05160c0516142ed62000315600039600081816107680152610cef015260008181610d1001528181610d9a01526111fe015260008181610ac50152610b2c01526142ed6000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638d3638f4116100de578063b31c01fb11610097578063df034cd011610071578063df034cd014610428578063e7e7a7b714610446578063f2fde38b14610462578063ffa1ad741461047e57610173565b8063b31c01fb146103d0578063c19d93fb146103ec578063d88beda21461040a57610173565b80638d3638f4146102fa5780638da5cb5b14610318578063928bc4b214610336578063961681dc146103665780639d54f41914610384578063a3f81d68146103a057610173565b806345630b1a1161013057806345630b1a1461024c5780636188af0e1461026a57806367a6771d14610286578063715018a6146102a457806371bfb7b8146102ae578063885b5e2d146102de57610173565b8063088b5ed31461017857806319d9d21a1461019457806325e3beda146101b05780632bbd59ca146101ce578063371d3071146101fe578063399926681461022e575b600080fd5b610192600480360381019061018d919061287d565b61049c565b005b6101ae60048036038101906101a99190612944565b610587565b005b6101b8610766565b6040516101c591906129fa565b60405180910390f35b6101e860048036038101906101e39190612a15565b61078a565b6040516101f59190612ab9565b60405180910390f35b61021860048036038101906102139190612af5565b6107aa565b6040516102259190612b65565b60405180910390f35b6102366108d8565b60405161024391906129fa565b60405180910390f35b6102546108de565b6040516102619190612b8f565b60405180910390f35b610284600480360381019061027f9190612ceb565b610900565b005b61028e610960565b60405161029b9190612b8f565b60405180910390f35b6102ac610966565b005b6102c860048036038101906102c39190612a15565b6109ee565b6040516102d591906129fa565b60405180910390f35b6102f860048036038101906102f39190612d5c565b610a06565b005b610302610ac3565b60405161030f9190612da8565b60405180910390f35b610320610ae7565b60405161032d9190612e04565b60405180910390f35b610350600480360381019061034b9190612e1f565b610b11565b60405161035d9190612b65565b60405180910390f35b61036e610f83565b60405161037b9190612da8565b60405180910390f35b61039e60048036038101906103999190612e94565b610f99565b005b6103ba60048036038101906103b59190612a15565b611021565b6040516103c79190612b65565b60405180910390f35b6103ea60048036038101906103e59190612ec1565b61105a565b005b6103f46111e9565b6040516104019190612f78565b60405180910390f35b6104126111fc565b60405161041f91906129fa565b60405180910390f35b610430611220565b60405161043d9190612e04565b60405180910390f35b610460600480360381019061045b9190612fbf565b611246565b005b61047c60048036038101906104779190612e94565b61137a565b005b610486611472565b6040516104939190613042565b60405180910390f35b6104a4611477565b73ffffffffffffffffffffffffffffffffffffffff166104c2610ae7565b73ffffffffffffffffffffffffffffffffffffffff1614610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f906130ba565b60405180910390fd5b600060996000848152602001908152602001600020549050816099600085815260200190815260200160002081905550827fe906d465281862f8f37a1bdd7d810e50347f06b0b493701cca6ccb8e6a7b2694828460405161057a9291906130da565b60405180910390a2505050565b60028081111561059a57610599612a42565b5b606560149054906101000a900460ff1660028111156105bc576105bb612a42565b5b14156105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f49061314f565b60405180910390fd5b61066486866000600281106106155761061461316f565b5b602002013586868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061147f565b80156106d357506106d286866001600281106106835761068261316f565b5b602002013584848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061147f565b5b801561070f5750846001600281106106ee576106ed61316f565b5b6020020135856000600281106107075761070661316f565b5b602002013514155b1561075e5761071c611525565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f868686868686604051610755969594939291906131ec565b60405180910390a15b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b609a6020528060005260406000206000915054906101000a900460ff1681565b60008060028111156107bf576107be612a42565b5b609a600086815260200190815260200160002060009054906101000a900460ff1660028111156107f2576107f1612a42565b5b14610832576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108299061328f565b60405180910390fd5b6000610875858560208060200260405190810160405280929190826020800280828437600081840152601f19601f8201169050808301925050505050508561152f565b905061088081611021565b156108cb576001609a600087815260200190815260200160002060006101000a81548160ff021916908360028111156108bc576108bb612a42565b5b021790555060019150506108d1565b60009150505b9392505050565b60975481565b60006108fb609660009054906101000a900463ffffffff166115e9565b905090565b610912838051906020012083836107aa565b610951576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610948906132fb565b60405180910390fd5b61095a83610b11565b50505050565b60665481565b61096e611477565b73ffffffffffffffffffffffffffffffffffffffff1661098c610ae7565b73ffffffffffffffffffffffffffffffffffffffff16146109e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d9906130ba565b60405180910390fd5b6109ec6000611619565b565b60996020528060005260406000206000915090505481565b610a0e611477565b73ffffffffffffffffffffffffffffffffffffffff16610a2c610ae7565b73ffffffffffffffffffffffffffffffffffffffff1614610a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a79906130ba565b60405180910390fd5b806097819055507fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb481604051610ab891906129fa565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080610b286000846116df90919063ffffffff16565b90507f000000000000000000000000000000000000000000000000000000000000000063ffffffff16610b608262ffffff191661170a565b63ffffffff1614610ba6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9d90613367565b60405180910390fd5b6000610bb78262ffffff1916611730565b905060016002811115610bcd57610bcc612a42565b5b609a600083815260200190815260200160002060009054906101000a900460ff166002811115610c0057610bff612a42565b5b14610c40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c37906133d3565b60405180910390fd5b6001609860009054906101000a900460ff1660ff1614610c95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8c9061343f565b60405180910390fd5b6000609860006101000a81548160ff021916908360ff1602179055506002609a600083815260200190815260200160002060006101000a81548160ff02191690836002811115610ce857610ce7612a42565b5b02179055507f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610d39919061348e565b5a1015610d7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7290613530565b60405180910390fd5b6000610d8c8362ffffff1916611773565b9050600080610100905060007f0000000000000000000000000000000000000000000000000000000000000000905060008267ffffffffffffffff811115610dd757610dd6612bc0565b5b6040519080825280601f01601f191660200182016040528015610e095781602001600182028036833780820191505090505b5090506000610e1d8862ffffff191661178d565b610e2c8962ffffff19166117b3565b610e3b8a62ffffff19166117d9565b610e58610e4d8c62ffffff19166117ff565b62ffffff191661184e565b604051602401610e6b94939291906135c7565b6040516020818303038152906040527fab2dc3f5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008082516020840160008a88f198503d945083851115610f09578394505b848252846000602084013e81604051610f22919061364f565b6040518091039020891515887fd42de95a9b26f1be134c8ecce389dc4fcfa18753d01661b7b361233569e8fe4860405160405180910390a46001609860006101000a81548160ff021916908360ff1602179055505050505050505050919050565b609660009054906101000a900463ffffffff1681565b610fa1611477565b73ffffffffffffffffffffffffffffffffffffffff16610fbf610ae7565b73ffffffffffffffffffffffffffffffffffffffff1614611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100c906130ba565b60405180910390fd5b61101e81611895565b50565b60008060996000848152602001908152602001600020549050600081141561104d576000915050611055565b804210159150505b919050565b60028081111561106d5761106c612a42565b5b606560149054906101000a900460ff16600281111561108f5761108e612a42565b5b14156110d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c79061314f565b60405180910390fd5b6066548314611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b906136b2565b60405180910390fd5b61111f83838361147f565b61115e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111559061371e565b60405180910390fd5b61116661193a565b60975442611174919061348e565b6099600084815260200190815260200160002081905550816066819055508183609660009054906101000a900463ffffffff1663ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040516111dc919061373e565b60405180910390a4505050565b606560149054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611252600161193c565b90508015611276576001600060016101000a81548160ff0219169083151502179055505b61127f84611a2c565b6001609860006101000a81548160ff021916908360ff16021790555084609660006101000a81548163ffffffff021916908363ffffffff1602179055508260668190555060016099600085815260200190815260200160002081905550816097819055507fa8de34d9c26dbb20579bc8c8957813e3168af7c5092d7668390e34471dc4ffb48260405161131291906129fa565b60405180910390a180156113735760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161136a91906137a5565b60405180910390a15b5050505050565b611382611477565b73ffffffffffffffffffffffffffffffffffffffff166113a0610ae7565b73ffffffffffffffffffffffffffffffffffffffff16146113f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ed906130ba565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611466576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145d90613832565b60405180910390fd5b61146f81611619565b50565b600081565b600033905090565b60008061148a6108de565b858560405160200161149e93929190613873565b6040516020818303038152906040528051906020012090506114bf81611af5565b9050606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166115048285611b25565b73ffffffffffffffffffffffffffffffffffffffff16149150509392505050565b61152d611b4c565b565b600083905060005b60208110156115e157600060018285901c16905060008583602081106115605761155f61316f565b5b6020020151905060018214156115a05780846040516020016115839291906138b0565b6040516020818303038152906040528051906020012093506115cc565b83816040516020016115b39291906138b0565b6040516020818303038152906040528051906020012093505b505080806115d9906138dc565b915050611537565b509392505050565b6000816040516020016115fc91906139b2565b604051602081830303815290604052805190602001209050919050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808351905060006020850190506117008464ffffffffff168284611b79565b9250505092915050565b6000611729602860048462ffffff1916611be19092919063ffffffff16565b9050919050565b60008061173c83611c18565b6bffffffffffffffffffffffff169050600061175784611c38565b6bffffffffffffffffffffffff16905080822092505050919050565b600061178661178183611c58565b611c7e565b9050919050565b60006117ac600060048462ffffff1916611be19092919063ffffffff16565b9050919050565b60006117d2602460048462ffffff1916611be19092919063ffffffff16565b9050919050565b60006117f8600460208462ffffff1916611c8b9092919063ffffffff16565b9050919050565b6000611847604c806118168562ffffff1916611c38565b6bffffffffffffffffffffffff1661182e91906139d8565b60008562ffffff1916611dd0909392919063ffffffff16565b9050919050565b606060008061185c84611c38565b6bffffffffffffffffffffffff16905060405191508192506118818460208401611e67565b506020818301016040528082525050919050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f0f20622a7af9e952a6fec654a196f29e04477b5d335772c26902bec35cc9f22a818360405161192e929190613a0c565b60405180910390a15050565b565b60008060019054906101000a900460ff16156119b35760018260ff1614801561196b575061196930611f72565b155b6119aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119a190613aa7565b60405180910390fd5b60009050611a27565b8160ff1660008054906101000a900460ff1660ff1610611a08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ff90613aa7565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b6000611a38600161193c565b90508015611a5c576001600060016101000a81548160ff0219169083151502179055505b611a64611f95565b611a6d82611895565b6001606560146101000a81548160ff02191690836002811115611a9357611a92612a42565b5b02179055508015611af15760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051611ae891906137a5565b60405180910390a15b5050565b600081604051602001611b089190613b13565b604051602081830303815290604052805190602001209050919050565b6000806000611b348585611fee565b91509150611b4181612071565b819250505092915050565b6002606560146101000a81548160ff02191690836002811115611b7257611b71612a42565b5b0217905550565b6000808284611b88919061348e565b9050604051811115611b9957600090505b6000811415611bcb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611bda565b611bd6858585612246565b9150505b9392505050565b60006008826020611bf29190613b39565b611bfc9190613b6d565b60ff16611c0a858585611c8b565b60001c901c90509392505050565b6000806bffffffffffffffffffffffff9050808360781c16915050919050565b6000806bffffffffffffffffffffffff9050808360181c16915050919050565b6000611c77602c60208462ffffff1916611c8b9092919063ffffffff16565b9050919050565b60008160001c9050919050565b6000808260ff161415611ca3576000801b9050611dc9565b611cac84611c38565b6bffffffffffffffffffffffff168260ff1684611cc9919061348e565b1115611d4657611d0a611cdb85611c18565b6bffffffffffffffffffffffff16611cf286611c38565b6bffffffffffffffffffffffff16858560ff16612267565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3d9190613bec565b60405180910390fd5b60208260ff161115611d8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8490613c80565b60405180910390fd5b60006008830290506000611da086611c18565b6bffffffffffffffffffffffff1690506000611dbb836122d5565b905080868301511693505050505b9392505050565b600080611ddc86611c18565b6bffffffffffffffffffffffff169050611df586612304565b848683611e02919061348e565b611e0c919061348e565b1115611e3b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611e5f565b8481611e47919061348e565b9050611e5b8364ffffffffff168286611b79565b9150505b949350505050565b6000611e728361232e565b611eb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea890613d12565b60405180910390fd5b611eba83612341565b611ef9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ef090613da4565b60405180910390fd5b6000611f0484611c38565b6bffffffffffffffffffffffff1690506000611f1f85611c18565b6bffffffffffffffffffffffff1690506000604051905084811115611f445760206060fd5b8285848460045afa50611f67611f5987612384565b64ffffffffff168685612246565b935050505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611fe4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fdb90613e36565b60405180910390fd5b611fec612391565b565b6000806041835114156120305760008060006020860151925060408601519150606086015160001a9050612024878285856123f2565b9450945050505061206a565b6040835114156120615760008060208501519150604085015190506120568683836124ff565b93509350505061206a565b60006002915091505b9250929050565b6000600481111561208557612084612a42565b5b81600481111561209857612097612a42565b5b14156120a357612243565b600160048111156120b7576120b6612a42565b5b8160048111156120ca576120c9612a42565b5b141561210b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210290613ea2565b60405180910390fd5b6002600481111561211f5761211e612a42565b5b81600481111561213257612131612a42565b5b1415612173576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161216a90613f0e565b60405180910390fd5b6003600481111561218757612186612a42565b5b81600481111561219a57612199612a42565b5b14156121db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d290613fa0565b60405180910390fd5b6004808111156121ee576121ed612a42565b5b81600481111561220157612200612a42565b5b1415612242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223990614032565b60405180910390fd5b5b50565b600083811760601b905082811760601b905081811760181b90509392505050565b606060006122748661255e565b91505060006122828661255e565b91505060006122908661255e565b915050600061229e8661255e565b915050838383836040516020016122b89493929190614216565b604051602081830303815290604052945050505050949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000600183031d9050919050565b600061230f82611c38565b61231883611c18565b016bffffffffffffffffffffffff169050919050565b60006123398261261c565b159050919050565b600064ffffffffff61235283612384565b64ffffffffff161415612368576000905061237f565b600061237383612304565b90506040518111199150505b919050565b60008160d81c9050919050565b600060019054906101000a900460ff166123e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123d790613e36565b60405180910390fd5b6123f06123eb611477565b611619565b565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561242d5760006003915091506124f6565b601b8560ff16141580156124455750601c8560ff1614155b156124575760006004915091506124f6565b60006001878787876040516000815260200160405260405161247c949392919061429b565b6020604051602081039080840390855afa15801561249e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156124ed576000600192509250506124f6565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c612542919061348e565b9050612550878288856123f2565b935093505050935093915050565b6000806000601f90505b600f8160ff1611156125bb5760006008826125839190613b6d565b60ff1685901c905061259481612654565b61ffff168417935060108260ff16146125af57601084901b93505b60018203915050612568565b506000600f90505b60ff8160ff1610156126165760006008826125de9190613b6d565b60ff1685901c90506125ef81612654565b61ffff168317925060008260ff161461260a57601083901b92505b600182039150506125c3565b50915091565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000062ffffff19168262ffffff1916149050919050565b600061266660048360ff16901c61268d565b60ff168117905060088161ffff16901b90506126818261268d565b60ff1681179050919050565b60008060f08317905060f08160ff1614156126ac5760309150506127f8565b60f18160ff1614156126c25760319150506127f8565b60f28160ff1614156126d85760329150506127f8565b60f38160ff1614156126ee5760339150506127f8565b60f48160ff1614156127045760349150506127f8565b60f58160ff16141561271a5760359150506127f8565b60f68160ff1614156127305760369150506127f8565b60f78160ff1614156127465760379150506127f8565b60f88160ff16141561275c5760389150506127f8565b60f98160ff1614156127725760399150506127f8565b60fa8160ff1614156127885760619150506127f8565b60fb8160ff16141561279e5760629150506127f8565b60fc8160ff1614156127b45760639150506127f8565b60fd8160ff1614156127ca5760649150506127f8565b60fe8160ff1614156127e05760659150506127f8565b60ff8160ff1614156127f65760669150506127f8565b505b919050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61282481612811565b811461282f57600080fd5b50565b6000813590506128418161281b565b92915050565b6000819050919050565b61285a81612847565b811461286557600080fd5b50565b60008135905061287781612851565b92915050565b6000806040838503121561289457612893612807565b5b60006128a285828601612832565b92505060206128b385828601612868565b9150509250929050565b600080fd5b6000819050826020600202820111156128de576128dd6128bd565b5b92915050565b600080fd5b600080fd5b60008083601f840112612904576129036128e4565b5b8235905067ffffffffffffffff811115612921576129206128e9565b5b60208301915083600182028301111561293d5761293c6128bd565b5b9250929050565b60008060008060008060a0878903121561296157612960612807565b5b600061296f89828a01612832565b965050602061298089828a016128c2565b955050606087013567ffffffffffffffff8111156129a1576129a061280c565b5b6129ad89828a016128ee565b9450945050608087013567ffffffffffffffff8111156129d0576129cf61280c565b5b6129dc89828a016128ee565b92509250509295509295509295565b6129f481612847565b82525050565b6000602082019050612a0f60008301846129eb565b92915050565b600060208284031215612a2b57612a2a612807565b5b6000612a3984828501612832565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110612a8257612a81612a42565b5b50565b6000819050612a9382612a71565b919050565b6000612aa382612a85565b9050919050565b612ab381612a98565b82525050565b6000602082019050612ace6000830184612aaa565b92915050565b6000819050826020800282011115612aef57612aee6128bd565b5b92915050565b60008060006104408486031215612b0f57612b0e612807565b5b6000612b1d86828701612832565b9350506020612b2e86828701612ad4565b925050610420612b4086828701612868565b9150509250925092565b60008115159050919050565b612b5f81612b4a565b82525050565b6000602082019050612b7a6000830184612b56565b92915050565b612b8981612811565b82525050565b6000602082019050612ba46000830184612b80565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612bf882612baf565b810181811067ffffffffffffffff82111715612c1757612c16612bc0565b5b80604052505050565b6000612c2a6127fd565b9050612c368282612bef565b919050565b600067ffffffffffffffff821115612c5657612c55612bc0565b5b612c5f82612baf565b9050602081019050919050565b82818337600083830152505050565b6000612c8e612c8984612c3b565b612c20565b905082815260208101848484011115612caa57612ca9612baa565b5b612cb5848285612c6c565b509392505050565b600082601f830112612cd257612cd16128e4565b5b8135612ce2848260208601612c7b565b91505092915050565b60008060006104408486031215612d0557612d04612807565b5b600084013567ffffffffffffffff811115612d2357612d2261280c565b5b612d2f86828701612cbd565b9350506020612d4086828701612ad4565b925050610420612d5286828701612868565b9150509250925092565b600060208284031215612d7257612d71612807565b5b6000612d8084828501612868565b91505092915050565b600063ffffffff82169050919050565b612da281612d89565b82525050565b6000602082019050612dbd6000830184612d99565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612dee82612dc3565b9050919050565b612dfe81612de3565b82525050565b6000602082019050612e196000830184612df5565b92915050565b600060208284031215612e3557612e34612807565b5b600082013567ffffffffffffffff811115612e5357612e5261280c565b5b612e5f84828501612cbd565b91505092915050565b612e7181612de3565b8114612e7c57600080fd5b50565b600081359050612e8e81612e68565b92915050565b600060208284031215612eaa57612ea9612807565b5b6000612eb884828501612e7f565b91505092915050565b600080600060608486031215612eda57612ed9612807565b5b6000612ee886828701612832565b9350506020612ef986828701612832565b925050604084013567ffffffffffffffff811115612f1a57612f1961280c565b5b612f2686828701612cbd565b9150509250925092565b60038110612f4157612f40612a42565b5b50565b6000819050612f5282612f30565b919050565b6000612f6282612f44565b9050919050565b612f7281612f57565b82525050565b6000602082019050612f8d6000830184612f69565b92915050565b612f9c81612d89565b8114612fa757600080fd5b50565b600081359050612fb981612f93565b92915050565b60008060008060808587031215612fd957612fd8612807565b5b6000612fe787828801612faa565b9450506020612ff887828801612e7f565b935050604061300987828801612832565b925050606061301a87828801612868565b91505092959194509250565b600060ff82169050919050565b61303c81613026565b82525050565b60006020820190506130576000830184613033565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006130a460208361305d565b91506130af8261306e565b602082019050919050565b600060208201905081810360008301526130d381613097565b9050919050565b60006040820190506130ef60008301856129eb565b6130fc60208301846129eb565b9392505050565b7f6661696c65642073746174650000000000000000000000000000000000000000600082015250565b6000613139600c8361305d565b915061314482613103565b602082019050919050565b600060208201905081810360008301526131688161312c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6131aa60408383612c6c565b5050565b600082825260208201905092915050565b60006131cb83856131ae565b93506131d8838584612c6c565b6131e183612baf565b840190509392505050565b600060a0820190506132016000830189612b80565b61320e602083018861319e565b81810360608301526132218186886131bf565b905081810360808301526132368184866131bf565b9050979650505050505050565b7f214d6573736167655374617475732e4e6f6e6500000000000000000000000000600082015250565b600061327960138361305d565b915061328482613243565b602082019050919050565b600060208201905081810360008301526132a88161326c565b9050919050565b7f2170726f76650000000000000000000000000000000000000000000000000000600082015250565b60006132e560068361305d565b91506132f0826132af565b602082019050919050565b60006020820190508181036000830152613314816132d8565b9050919050565b7f2164657374696e6174696f6e0000000000000000000000000000000000000000600082015250565b6000613351600c8361305d565b915061335c8261331b565b602082019050919050565b6000602082019050818103600083015261338081613344565b9050919050565b7f2170726f76656e00000000000000000000000000000000000000000000000000600082015250565b60006133bd60078361305d565b91506133c882613387565b602082019050919050565b600060208201905081810360008301526133ec816133b0565b9050919050565b7f217265656e7472616e7400000000000000000000000000000000000000000000600082015250565b6000613429600a8361305d565b9150613434826133f3565b602082019050919050565b600060208201905081810360008301526134588161341c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061349982612847565b91506134a483612847565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156134d9576134d861345f565b5b828201905092915050565b7f2167617300000000000000000000000000000000000000000000000000000000600082015250565b600061351a60048361305d565b9150613525826134e4565b602082019050919050565b600060208201905081810360008301526135498161350d565b9050919050565b600081519050919050565b60005b8381101561357957808201518184015260208101905061355e565b83811115613588576000848401525b50505050565b600061359982613550565b6135a381856131ae565b93506135b381856020860161355b565b6135bc81612baf565b840191505092915050565b60006080820190506135dc6000830187612d99565b6135e96020830186612d99565b6135f66040830185612b80565b8181036060830152613608818461358e565b905095945050505050565b600081905092915050565b600061362982613550565b6136338185613613565b935061364381856020860161355b565b80840191505092915050565b600061365b828461361e565b915081905092915050565b7f6e6f742063757272656e74207570646174650000000000000000000000000000600082015250565b600061369c60128361305d565b91506136a782613666565b602082019050919050565b600060208201905081810360008301526136cb8161368f565b9050919050565b7f2175706461746572207369670000000000000000000000000000000000000000600082015250565b6000613708600c8361305d565b9150613713826136d2565b602082019050919050565b60006020820190508181036000830152613737816136fb565b9050919050565b60006020820190508181036000830152613758818461358e565b905092915050565b6000819050919050565b6000819050919050565b600061378f61378a61378584613760565b61376a565b613026565b9050919050565b61379f81613774565b82525050565b60006020820190506137ba6000830184613796565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061381c60268361305d565b9150613827826137c0565b604082019050919050565b6000602082019050818103600083015261384b8161380f565b9050919050565b6000819050919050565b61386d61386882612811565b613852565b82525050565b600061387f828661385c565b60208201915061388f828561385c565b60208201915061389f828461385c565b602082019150819050949350505050565b60006138bc828561385c565b6020820191506138cc828461385c565b6020820191508190509392505050565b60006138e782612847565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561391a5761391961345f565b5b600182019050919050565b60008160e01b9050919050565b600061393d82613925565b9050919050565b61395561395082612d89565b613932565b82525050565b600081905092915050565b7f4e4f4d4144000000000000000000000000000000000000000000000000000000600082015250565b600061399c60058361395b565b91506139a782613966565b600582019050919050565b60006139be8284613944565b6004820191506139cd8261398f565b915081905092915050565b60006139e382612847565b91506139ee83612847565b925082821015613a0157613a0061345f565b5b828203905092915050565b6000604082019050613a216000830185612df5565b613a2e6020830184612df5565b9392505050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000613a91602e8361305d565b9150613a9c82613a35565b604082019050919050565b60006020820190508181036000830152613ac081613a84565b9050919050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000613afd601c8361395b565b9150613b0882613ac7565b601c82019050919050565b6000613b1e82613af0565b9150613b2a828461385c565b60208201915081905092915050565b6000613b4482613026565b9150613b4f83613026565b925082821015613b6257613b6161345f565b5b828203905092915050565b6000613b7882613026565b9150613b8383613026565b92508160ff0483118215151615613b9d57613b9c61345f565b5b828202905092915050565b600081519050919050565b6000613bbe82613ba8565b613bc8818561305d565b9350613bd881856020860161355b565b613be181612baf565b840191505092915050565b60006020820190508181036000830152613c068184613bb3565b905092915050565b7f54797065644d656d566965772f696e646578202d20417474656d70746564207460008201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000602082015250565b6000613c6a603a8361305d565b9150613c7582613c0e565b604082019050919050565b60006020820190508181036000830152613c9981613c5d565b9050919050565b7f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460008201527f6572206465726566000000000000000000000000000000000000000000000000602082015250565b6000613cfc60288361305d565b9150613d0782613ca0565b604082019050919050565b60006020820190508181036000830152613d2b81613cef565b9050919050565b7f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60008201527f696e746572206465726566000000000000000000000000000000000000000000602082015250565b6000613d8e602b8361305d565b9150613d9982613d32565b604082019050919050565b60006020820190508181036000830152613dbd81613d81565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613e20602b8361305d565b9150613e2b82613dc4565b604082019050919050565b60006020820190508181036000830152613e4f81613e13565b9050919050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000613e8c60188361305d565b9150613e9782613e56565b602082019050919050565b60006020820190508181036000830152613ebb81613e7f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000613ef8601f8361305d565b9150613f0382613ec2565b602082019050919050565b60006020820190508181036000830152613f2781613eeb565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000613f8a60228361305d565b9150613f9582613f2e565b604082019050919050565b60006020820190508181036000830152613fb981613f7d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b600061401c60228361305d565b915061402782613fc0565b604082019050919050565b6000602082019050818103600083015261404b8161400f565b9050919050565b7f54797065644d656d566965772f696e646578202d204f76657272616e2074686560008201527f20766965772e20536c6963652069732061742030780000000000000000000000602082015250565b60006140ae60358361395b565b91506140b982614052565b603582019050919050565b600065ffffffffffff82169050919050565b60008160d01b9050919050565b60006140ee826140d6565b9050919050565b614106614101826140c4565b6140e3565b82525050565b7f2077697468206c656e6774682030780000000000000000000000000000000000600082015250565b6000614142600f8361395b565b915061414d8261410c565b600f82019050919050565b7f2e20417474656d7074656420746f20696e646578206174206f6666736574203060008201527f7800000000000000000000000000000000000000000000000000000000000000602082015250565b60006141b460218361395b565b91506141bf82614158565b602182019050919050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b600061420060018361395b565b915061420b826141ca565b600182019050919050565b6000614221826140a1565b915061422d82876140f5565b60068201915061423c82614135565b915061424882866140f5565b600682019150614257826141a7565b915061426382856140f5565b60068201915061427282614135565b915061427e82846140f5565b60068201915061428d826141f3565b915081905095945050505050565b60006080820190506142b06000830187612b80565b6142bd6020830186613033565b6142ca6040830185612b80565b6142d76060830184612b80565b9594505050505056fea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "SafeERC20": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "SafeMath": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "Strings": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  },
  "TypeCasts": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60d5610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f26be3fc146038575b600080fd5b603e6052565b6040516049919060af565b60405180910390f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000081565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082169050919050565b60a9816076565b82525050565b600060208201905060c2600083018460a2565b9291505056fea164736f6c634300080b000a"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50608c8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ffa1ad7414602d575b600080fd5b60336047565b604051603e91906066565b60405180910390f35b600081565b600060ff82169050919050565b606081604c565b82525050565b6000602082019050607960008301846059565b9291505056fea164736f6c634300080b000a"
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
      "10": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "56": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "69": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "77": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "97": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "100": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "122": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "123": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "137": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "250": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1284": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1287": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "3333": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4002": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4386": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "6666": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "9999": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42161": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42220": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "43113": "0xc56CaC621503C364acdfD37aa581991c7E1fa3fa",
      "43114": "0xc56CaC621503C364acdfD37aa581991c7E1fa3fa",
      "44787": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "80001": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "421611": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1313161554": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1313161555": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616"
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61202e806200010e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f5d90e01161008c578063b9cff16211610066578063b9cff16214610237578063e0e7a91314610267578063f2fde38b14610283578063f31faefb1461029f576100ea565b80638f5d90e0146101e1578063916c3470146101fd5780639fa92f9d14610219576100ea565b80636ef0f37f116100c85780636ef0f37f1461017f578063715018a61461019b5780638d3638f4146101a55780638da5cb5b146101c3576100ea565b8063427ebef5146100ef5780635190bc531461011f5780635f8b1dba1461014f575b600080fd5b6101096004803603810190610104919061149c565b6102bb565b60405161011691906114f7565b60405180910390f35b61013960048036038101906101349190611512565b61032f565b60405161014691906114f7565b60405180910390f35b61016960048036038101906101649190611512565b610391565b604051610176919061154e565b60405180910390f35b61019960048036038101906101949190611512565b6103b4565b005b6101a3610474565b005b6101ad6104fc565b6040516101ba919061154e565b60405180910390f35b6101cb610594565b6040516101d89190611578565b60405180910390f35b6101fb60048036038101906101f69190611512565b6105bd565b005b610217600480360381019061021291906115bf565b610645565b005b61022161077a565b60405161022e9190611671565b60405180910390f35b610251600480360381019061024c919061168c565b6107a0565b60405161025e9190611578565b60405180910390f35b610281600480360381019061027c9190611835565b6107d3565b005b61029d60048036038101906102989190611512565b610a3c565b005b6102b960048036038101906102b4919061149c565b610b34565b005b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1663ffffffff1614159050919050565b60026020528060005260406000206000915054906101000a900463ffffffff1681565b6103bc610cb7565b73ffffffffffffffffffffffffffffffffffffffff166103da610594565b73ffffffffffffffffffffffffffffffffffffffff1614610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042790611901565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61047c610cb7565b73ffffffffffffffffffffffffffffffffffffffff1661049a610594565b73ffffffffffffffffffffffffffffffffffffffff16146104f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e790611901565b60405180910390fd5b6104fa6000610cbf565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561056b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058f9190611936565b905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105c5610cb7565b73ffffffffffffffffffffffffffffffffffffffff166105e3610594565b73ffffffffffffffffffffffffffffffffffffffff1614610639576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063090611901565b60405180910390fd5b61064281610d83565b50565b61064d610cb7565b73ffffffffffffffffffffffffffffffffffffffff1661066b610594565b73ffffffffffffffffffffffffffffffffffffffff16146106c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b890611901565b60405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008463ffffffff1663ffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508163ffffffff167f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c848360405161076d929190611963565b60405180910390a2505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600360008563ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610887576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087e906119d8565b60405180910390fd5b61089083610ed7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109159190611a0d565b73ffffffffffffffffffffffffffffffffffffffff161461096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290611a86565b60405180910390fd5b60006109818561097a84610ee4565b8686610f07565b9050600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008663ffffffff1663ffffffff16815260200190815260200160002060009054906101000a900460ff16610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390611af2565b60405180910390fd5b610a3582610d83565b5050505050565b610a44610cb7565b73ffffffffffffffffffffffffffffffffffffffff16610a62610594565b73ffffffffffffffffffffffffffffffffffffffff1614610ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaf90611901565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1f90611b84565b60405180910390fd5b610b3181610cbf565b50565b610b3c610cb7565b73ffffffffffffffffffffffffffffffffffffffff16610b5a610594565b73ffffffffffffffffffffffffffffffffffffffff1614610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba790611901565b60405180910390fd5b610bb982610d83565b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555081600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508063ffffffff167f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a923483604051610cab9190611578565b60405180910390a25050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000600360008363ffffffff1663ffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055508063ffffffff167fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b83604051610ecb9190611578565b60405180910390a25050565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b600080610f1385610ed7565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f819190611bb9565b90506000818786604051602001610f9a93929190611c3d565b604051602081830303815290604052805190602001209050610fbb81610fd3565b9050610fc78185611003565b92505050949350505050565b600081604051602001610fe69190611cd1565b604051602081830303815290604052805190602001209050919050565b6000806000611012858561102a565b9150915061101f816110ad565b819250505092915050565b60008060418351141561106c5760008060006020860151925060408601519150606086015160001a905061106087828585611282565b945094505050506110a6565b60408351141561109d57600080602085015191506040850151905061109286838361138f565b9350935050506110a6565b60006002915091505b9250929050565b600060048111156110c1576110c0611cf7565b5b8160048111156110d4576110d3611cf7565b5b14156110df5761127f565b600160048111156110f3576110f2611cf7565b5b81600481111561110657611105611cf7565b5b1415611147576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113e90611d72565b60405180910390fd5b6002600481111561115b5761115a611cf7565b5b81600481111561116e5761116d611cf7565b5b14156111af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a690611dde565b60405180910390fd5b600360048111156111c3576111c2611cf7565b5b8160048111156111d6576111d5611cf7565b5b1415611217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120e90611e70565b60405180910390fd5b60048081111561122a57611229611cf7565b5b81600481111561123d5761123c611cf7565b5b141561127e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127590611f02565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156112bd576000600391509150611386565b601b8560ff16141580156112d55750601c8560ff1614155b156112e7576000600491509150611386565b60006001878787876040516000815260200160405260405161130c9493929190611f4d565b6020604051602081039080840390855afa15801561132e573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561137d57600060019250925050611386565b80600092509250505b94509492505050565b60008060007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60001b841690506000601b60ff8660001c901c6113d29190611fcb565b90506113e087828885611282565b935093505050935093915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061142d82611402565b9050919050565b61143d81611422565b811461144857600080fd5b50565b60008135905061145a81611434565b92915050565b600063ffffffff82169050919050565b61147981611460565b811461148457600080fd5b50565b60008135905061149681611470565b92915050565b600080604083850312156114b3576114b26113f8565b5b60006114c18582860161144b565b92505060206114d285828601611487565b9150509250929050565b60008115159050919050565b6114f1816114dc565b82525050565b600060208201905061150c60008301846114e8565b92915050565b600060208284031215611528576115276113f8565b5b60006115368482850161144b565b91505092915050565b61154881611460565b82525050565b6000602082019050611563600083018461153f565b92915050565b61157281611422565b82525050565b600060208201905061158d6000830184611569565b92915050565b61159c816114dc565b81146115a757600080fd5b50565b6000813590506115b981611593565b92915050565b6000806000606084860312156115d8576115d76113f8565b5b60006115e68682870161144b565b93505060206115f786828701611487565b9250506040611608868287016115aa565b9150509250925092565b6000819050919050565b600061163761163261162d84611402565b611612565b611402565b9050919050565b60006116498261161c565b9050919050565b600061165b8261163e565b9050919050565b61166b81611650565b82525050565b60006020820190506116866000830184611662565b92915050565b6000602082840312156116a2576116a16113f8565b5b60006116b084828501611487565b91505092915050565b6000819050919050565b6116cc816116b9565b81146116d757600080fd5b50565b6000813590506116e9816116c3565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611742826116f9565b810181811067ffffffffffffffff821117156117615761176061170a565b5b80604052505050565b60006117746113ee565b90506117808282611739565b919050565b600067ffffffffffffffff8211156117a05761179f61170a565b5b6117a9826116f9565b9050602081019050919050565b82818337600083830152505050565b60006117d86117d384611785565b61176a565b9050828152602081018484840111156117f4576117f36116f4565b5b6117ff8482856117b6565b509392505050565b600082601f83011261181c5761181b6116ef565b5b813561182c8482602086016117c5565b91505092915050565b60008060006060848603121561184e5761184d6113f8565b5b600061185c86828701611487565b935050602061186d868287016116da565b925050604084013567ffffffffffffffff81111561188e5761188d6113fd565b5b61189a86828701611807565b9150509250925092565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006118eb6020836118a4565b91506118f6826118b5565b602082019050919050565b6000602082019050818103600083015261191a816118de565b9050919050565b60008151905061193081611470565b92915050565b60006020828403121561194c5761194b6113f8565b5b600061195a84828501611921565b91505092915050565b60006040820190506119786000830185611569565b61198560208301846114e8565b9392505050565b7f217265706c696361206578697374730000000000000000000000000000000000600082015250565b60006119c2600f836118a4565b91506119cd8261198c565b602082019050919050565b600060208201905081810360008301526119f1816119b5565b9050919050565b600081519050611a0781611434565b92915050565b600060208284031215611a2357611a226113f8565b5b6000611a31848285016119f8565b91505092915050565b7f2163757272656e74207570646174657200000000000000000000000000000000600082015250565b6000611a706010836118a4565b9150611a7b82611a3a565b602082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b7f2176616c69642077617463686572000000000000000000000000000000000000600082015250565b6000611adc600e836118a4565b9150611ae782611aa6565b602082019050919050565b60006020820190508181036000830152611b0b81611acf565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b6e6026836118a4565b9150611b7982611b12565b604082019050919050565b60006020820190508181036000830152611b9d81611b61565b9050919050565b600081519050611bb3816116c3565b92915050565b600060208284031215611bcf57611bce6113f8565b5b6000611bdd84828501611ba4565b91505092915050565b6000819050919050565b611c01611bfc826116b9565b611be6565b82525050565b60008160e01b9050919050565b6000611c1f82611c07565b9050919050565b611c37611c3282611460565b611c14565b82525050565b6000611c498286611bf0565b602082019150611c598285611c26565b600482019150611c698284611bf0565b602082019150819050949350505050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611cbb601c83611c7a565b9150611cc682611c85565b601c82019050919050565b6000611cdc82611cae565b9150611ce88284611bf0565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611d5c6018836118a4565b9150611d6782611d26565b602082019050919050565b60006020820190508181036000830152611d8b81611d4f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611dc8601f836118a4565b9150611dd382611d92565b602082019050919050565b60006020820190508181036000830152611df781611dbb565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e5a6022836118a4565b9150611e6582611dfe565b604082019050919050565b60006020820190508181036000830152611e8981611e4d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611eec6022836118a4565b9150611ef782611e90565b604082019050919050565b60006020820190508181036000830152611f1b81611edf565b9050919050565b611f2b816116b9565b82525050565b600060ff82169050919050565b611f4781611f31565b82525050565b6000608082019050611f626000830187611f22565b611f6f6020830186611f3e565b611f7c6040830185611f22565b611f896060830184611f22565b95945050505050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fd682611f92565b9150611fe183611f92565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561201657612015611f9c565b5b82820190509291505056fea164736f6c634300080b000a"
  },
  "console": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "42": null,
      "56": null,
      "69": null,
      "77": null,
      "97": null,
      "100": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "1284": null,
      "1287": null,
      "3333": null,
      "4002": null,
      "4386": null,
      "6666": null,
      "9999": null,
      "42161": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "80001": null,
      "421611": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080b000a"
  }
};
