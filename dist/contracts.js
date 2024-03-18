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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204be9bb072a81b187b69029143d2bb612bb4f05e89f0d92a4de1845adfba1a89564736f6c63430008110033"
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
      "14": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "56": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "65": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "66": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "69": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "97": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "100": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "114": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "122": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "123": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "137": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "250": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "420": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1001": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1284": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "1287": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4002": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4386": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "5000": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "6666": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "8217": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "8453": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "10200": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42161": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42170": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42220": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "43113": "0x4bAe95A44FD4eA76DDaE87b1c046E995cD8e4DF2",
      "43114": "0x4bAe95A44FD4eA76DDaE87b1c046E995cD8e4DF2",
      "44787": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "59144": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "80001": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "84531": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "84532": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "421613": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "534352": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "11155111": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "245022926": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
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
      "14": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42": null,
      "56": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "65": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "66": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "69": null,
      "97": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "100": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "114": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "122": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "123": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "137": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "250": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "420": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1001": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1284": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "1287": null,
      "4002": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "4386": null,
      "5000": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "6666": null,
      "8217": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "8453": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "10200": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42161": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42170": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "42220": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "43113": "0x13261B2b8674Cb855c408F3721281330ee16C66E",
      "43114": "0x13261B2b8674Cb855c408F3721281330ee16C66E",
      "44787": null,
      "59144": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "80001": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "84531": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "84532": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "421613": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "534352": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "11155111": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
      "245022926": "0xe5A160F89f330cc933816E896a3F36376DE0a835",
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
      }
    ],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "10": null,
      "14": null,
      "42": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "84531": null,
      "84532": null,
      "421613": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "534352": null,
      "11155111": null,
      "245022926": "0x9d70f5253949Eb67850C3f1e7371f15b955ee073",
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506115ab806100206000396000f3fe60806040526004361061003f5760003560e01c806340d280a21461004457806352434c6e1461006d5780636f395e60146100895780639e32e2e6146100b2575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610dac565b6100db565b005b61008760048036038101906100829190610dfe565b610204565b005b34801561009557600080fd5b506100b060048036038101906100ab9190610dac565b6105f6565b005b3480156100be57600080fd5b506100d960048036038101906100d49190610e50565b6106ef565b005b6100e36107a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561014a576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061015461083d565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504681600101819055506127108160020160006101000a81548163ffffffff021916908363ffffffff1602179055507fcbfd47a07530fc4fffba96f5686a7127e5661fe26dd01503239ca2f66fcad99082466040516101f892919061112b565b60405180910390a15050565b600061020e61086a565b905060018160000154141561024f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001816000018190555081600001602081019061026c9190610e79565b67ffffffffffffffff164614156102af576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260600160208101906102da9190610dac565b73ffffffffffffffffffffffffffffffffffffffff161415610328576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000826040013511610366576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168260800160208101906103919190610dac565b73ffffffffffffffffffffffffffffffffffffffff1614156103df576040517fdc2e5e8d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103e961083d565b905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610457333086604001358760800160208101906104319190610dac565b73ffffffffffffffffffffffffffffffffffffffff16610897909392919063ffffffff16565b6104988185604001358660800160208101906104739190610dac565b73ffffffffffffffffffffffffffffffffffffffff166109209092919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8560600160208101906104c79190610dac565b8660800160208101906104da9190610dac565b87604001358860000160208101906104f29190610e79565b8960200160208101906105059190610e79565b8860020160009054906101000a900463ffffffff166040518763ffffffff1660e01b815260040161053b969594939291906110ca565b600060405180830381600087803b15801561055557600080fd5b505af1158015610569573d6000803e3d6000fd5b505050507fd565a5cf794050de1a171170c91acd5d14cbf11877dc3fa020e9975495ab17578460800160208101906105a19190610dac565b338660600160208101906105b59190610dac565b87604001358860000160208101906105cd9190610e79565b6040516105de9594939291906111b6565b60405180910390a15050600081600001819055505050565b6105fe6107a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610665576040517f8474420100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061066f61083d565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4ae67faf3cf135d9eca1b5490d3613096d2d0610fca7496112fa46ef019fbd4e826040516106e3919061104f565b60405180910390a15050565b6113888163ffffffff1611610730576040517f9ff4125000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107386107a2565b600061074261083d565b9050818160020160006101000a81548163ffffffff021916908363ffffffff1602179055507f8d5e80c35df41e151b58f1a100ad605ae1ebcda3d0c329b22820b232767a773082604051610796919061127c565b60405180910390a15050565b6107aa610a7e565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461083b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083290611176565b60405180910390fd5b565b6000807f9d7253cc9498e9cc54011bbbe9471a68adbc99d0ac1eef42369f5a452e814c4a90508091505090565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b61091a846323b872dd60e01b8585856040516024016108b893929190611093565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610aab565b50505050565b60008114806109b9575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b815260040161096792919061106a565b60206040518083038186803b15801561097f57600080fd5b505afa158015610993573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b79190610e27565b145b6109f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ef9061125c565b60405180910390fd5b610a798363095ea7b360e01b8484604051602401610a1792919061112b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610aab565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610b0d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610b729092919063ffffffff16565b9050600081511115610b6d5780806020019051810190610b2d9190610dd5565b610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b639061123c565b60405180910390fd5b5b505050565b6060610b818484600085610b8a565b90509392505050565b606082471015610bcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc690611196565b60405180910390fd5b610bd885610c9e565b610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e9061121c565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c409190611038565b60006040518083038185875af1925050503d8060008114610c7d576040519150601f19603f3d011682016040523d82523d6000602084013e610c82565b606091505b5091509150610c92828286610cc1565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610cd157829050610d21565b600083511115610ce45782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d189190611154565b60405180910390fd5b9392505050565b600081359050610d378161152b565b92915050565b600081519050610d4c81611542565b92915050565b600060a08284031215610d6457600080fd5b81905092915050565b600081519050610d7c81611559565b92915050565b600081359050610d9181611570565b92915050565b600081359050610da681611587565b92915050565b600060208284031215610dbe57600080fd5b6000610dcc84828501610d28565b91505092915050565b600060208284031215610de757600080fd5b6000610df584828501610d3d565b91505092915050565b600060a08284031215610e1057600080fd5b6000610e1e84828501610d52565b91505092915050565b600060208284031215610e3957600080fd5b6000610e4784828501610d6d565b91505092915050565b600060208284031215610e6257600080fd5b6000610e7084828501610d82565b91505092915050565b600060208284031215610e8b57600080fd5b6000610e9984828501610d97565b91505092915050565b610eab816112c9565b82525050565b6000610ebc82611297565b610ec681856112ad565b9350610ed6818560208601611359565b80840191505092915050565b6000610eed826112a2565b610ef781856112b8565b9350610f07818560208601611359565b610f108161138c565b840191505092915050565b6000610f286022836112b8565b9150610f338261139d565b604082019050919050565b6000610f4b6026836112b8565b9150610f56826113ec565b604082019050919050565b6000610f6e6007836112b8565b9150610f798261143b565b602082019050919050565b6000610f91601d836112b8565b9150610f9c82611464565b602082019050919050565b6000610fb4602a836112b8565b9150610fbf8261148d565b604082019050919050565b6000610fd76036836112b8565b9150610fe2826114dc565b604082019050919050565b610ff681611307565b82525050565b61100581611335565b82525050565b61101481611311565b82525050565b61102381611347565b82525050565b61103281611321565b82525050565b60006110448284610eb1565b915081905092915050565b60006020820190506110646000830184610ea2565b92915050565b600060408201905061107f6000830185610ea2565b61108c6020830184610ea2565b9392505050565b60006060820190506110a86000830186610ea2565b6110b56020830185610ea2565b6110c26040830184610fed565b949350505050565b600060c0820190506110df6000830189610ea2565b6110ec6020830188610ea2565b6110f96040830187610fed565b6111066060830186611029565b6111136080830185611029565b61112060a083018461100b565b979650505050505050565b60006040820190506111406000830185610ea2565b61114d6020830184610fed565b9392505050565b6000602082019050818103600083015261116e8184610ee2565b905092915050565b6000602082019050818103600083015261118f81610f1b565b9050919050565b600060208201905081810360008301526111af81610f3e565b9050919050565b600060c08201905081810360008301526111cf81610f61565b90506111de6020830188610ea2565b6111eb6040830187610ea2565b6111f86060830186610ea2565b6112056080830185610fed565b61121260a083018461101a565b9695505050505050565b6000602082019050818103600083015261123581610f84565b9050919050565b6000602082019050818103600083015261125581610fa7565b9050919050565b6000602082019050818103600083015261127581610fca565b9050919050565b60006020820190506112916000830184610ffc565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006112d4826112e7565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600061134082611311565b9050919050565b600061135282611321565b9050919050565b60005b8381101561137757808201518184015260208101905061135c565b83811115611386576000848401525b50505050565b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f6362726964676500000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b611534816112c9565b811461153f57600080fd5b50565b61154b816112db565b811461155657600080fd5b50565b61156281611307565b811461156d57600080fd5b50565b61157981611311565b811461158457600080fd5b50565b61159081611321565b811461159b57600080fd5b5056fea164736f6c6343000804000a"
  },
  "ConnextFacet": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "destination",
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
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "relayerFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          }
        ],
        "name": "ConnextEthSwap",
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
          },
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "domainId",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "weth",
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
            "name": "destination",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "asset",
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
            "internalType": "uint256",
            "name": "relayerFee",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "transferId",
            "type": "bytes32"
          }
        ],
        "name": "ConnextTokenSwap",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_destinationUnwrapper",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_slippage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_relayerFee",
            "type": "uint256"
          }
        ],
        "name": "connextEthTransfer",
        "outputs": [],
        "stateMutability": "payable",
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
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_recipient",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "_destinationDomain",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "_slippage",
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
          },
          {
            "internalType": "address",
            "name": "_weth",
            "type": "address"
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
      "5": "0x30483Aa2E1d803176ed6843BC7f6f9E31662314b",
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50611b37806100206000396000f3fe6080604052600436106100345760003560e01c80633205dc691461003957806351b401b914610062578063da328d541461007e575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190611055565b61009a565b005b61007c600480360381019061007791906110de565b61029c565b005b610098600480360381019061009391906110de565b61064f565b005b6100a26109e3565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610111576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610108906111c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610180576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610177906111c8565b60405180910390fd5b600061018a610a7e565b9050838160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828160000160146101000a81548163ffffffff021916908363ffffffff160217905550818160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168363ffffffff168573ffffffffffffffffffffffffffffffffffffffff167fe23ac138025651e2fb684be9a5c635424d4dac7fc73449494c24c4955e79027860405160405180910390a450505050565b60006102a6610aab565b90506000879050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff160361031c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610313906111c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff160361038b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610382906111c8565b60405180910390fd5b610393610ade565b63ffffffff168563ffffffff16036103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d79061125a565b60405180910390fd5b823414610422576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610419906112c6565b60405180910390fd5b868173ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161045e9291906112f5565b602060405180830381865afa15801561047b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049f9190611333565b10156104e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d7906113d2565b60405180910390fd5b61050d3330898473ffffffffffffffffffffffffffffffffffffffff16610b01909392919063ffffffff16565b61053882888373ffffffffffffffffffffffffffffffffffffffff16610b8a9092919063ffffffff16565b60008273ffffffffffffffffffffffffffffffffffffffff16638aac16ba85888a8d338e8c604051806020016040528060008152506040518963ffffffff1660e01b815260040161058f97969594939291906114a0565b60206040518083038185885af11580156105ad573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105d2919061154c565b90508873ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167f1a0290ac7c224ab0140c811403ba545f80e92404b9979b69e52b3f589bc1c1e08b888660405161063c93929190611588565b60405180910390a4505050505050505050565b6000610659610aab565b90506000610665610cd9565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16036106d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cd906111c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073c906111c8565b60405180910390fd5b61074d610ade565b63ffffffff168563ffffffff160361079a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107919061125a565b60405180910390fd5b82876107a691906115ee565b34146107e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107de90611694565b60405180910390fd5b60008190508073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0896040518263ffffffff1660e01b81526004016000604051808303818588803b15801561083457600080fd5b505af1158015610848573d6000803e3d6000fd5b50505050508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b3848a6040518363ffffffff1660e01b81526004016108889291906116b4565b6020604051808303816000875af11580156108a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cb9190611715565b50506000866040516020016108e09190611742565b604051602081830303815290604052905060008373ffffffffffffffffffffffffffffffffffffffff16638aac16ba86898d87338f8d8a6040518963ffffffff1660e01b815260040161093997969594939291906114a0565b60206040518083038185885af1158015610957573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061097c919061154c565b90508773ffffffffffffffffffffffffffffffffffffffff168763ffffffff167fe16c7dcc828782adcdd94aaeb1d07c3ae5a6d593a6b851ab5e023f9c961436873488856040516109cf93929190611588565b60405180910390a350505050505050505050565b6109eb610d0c565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a73906117cf565b60405180910390fd5b565b6000807ffa2e9c22c7fe2104814a1d7e2c66c58d10a2d7989d5bcf01173a2564aa59c04d90508091505090565b6000610ab5610a7e565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610ae8610a7e565b60000160149054906101000a900463ffffffff16905090565b610b84846323b872dd60e01b858585604051602401610b22939291906117ef565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d39565b50505050565b6000811480610c14575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610bd19291906112f5565b602060405180830381865afa158015610bee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c129190611333565b145b610c53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4a90611898565b60405180910390fd5b610cd48363095ea7b360e01b8484604051602401610c729291906116b4565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d39565b505050565b6000610ce3610a7e565b60010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000610d9b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e009092919063ffffffff16565b9050600081511115610dfb5780806020019051810190610dbb9190611715565b610dfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df19061192a565b60405180910390fd5b5b505050565b6060610e0f8484600085610e18565b90509392505050565b606082471015610e5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e54906119bc565b60405180910390fd5b610e6685610f2c565b610ea5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9c90611a28565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ece9190611a84565b60006040518083038185875af1925050503d8060008114610f0b576040519150601f19603f3d011682016040523d82523d6000602084013e610f10565b606091505b5091509150610f20828286610f4f565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610f5f57829050610faf565b600083511115610f725782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa69190611adf565b60405180910390fd5b9392505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fe682610fbb565b9050919050565b610ff681610fdb565b811461100157600080fd5b50565b60008135905061101381610fed565b92915050565b600063ffffffff82169050919050565b61103281611019565b811461103d57600080fd5b50565b60008135905061104f81611029565b92915050565b60008060006060848603121561106e5761106d610fb6565b5b600061107c86828701611004565b935050602061108d86828701611040565b925050604061109e86828701611004565b9150509250925092565b6000819050919050565b6110bb816110a8565b81146110c657600080fd5b50565b6000813590506110d8816110b2565b92915050565b60008060008060008060c087890312156110fb576110fa610fb6565b5b600061110989828a01611004565b965050602061111a89828a016110c9565b955050604061112b89828a01611004565b945050606061113c89828a01611040565b935050608061114d89828a016110c9565b92505060a061115e89828a016110c9565b9150509295509295509295565b600082825260208201905092915050565b7f436f6e6e6578743a20696e76616c696420616464726573730000000000000000600082015250565b60006111b260188361116b565b91506111bd8261117c565b602082019050919050565b600060208201905081810360008301526111e1816111a5565b9050919050565b7f436f6e6e6578743a2043616e6e6f742062726964676520746f2073616d65206460008201527f6f6d61696e000000000000000000000000000000000000000000000000000000602082015250565b600061124460258361116b565b915061124f826111e8565b604082019050919050565b6000602082019050818103600083015261127381611237565b9050919050565b7f436f6e6e6578743a2072656c6179657246656520213d206d73672e76616c7565600082015250565b60006112b060208361116b565b91506112bb8261127a565b602082019050919050565b600060208201905081810360008301526112df816112a3565b9050919050565b6112ef81610fdb565b82525050565b600060408201905061130a60008301856112e6565b61131760208301846112e6565b9392505050565b60008151905061132d816110b2565b92915050565b60006020828403121561134957611348610fb6565b5b60006113578482850161131e565b91505092915050565b7f436f6e6e6578743a2055736572206d75737420617070726f766520616d6f756e60008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b60006113bc60218361116b565b91506113c782611360565b604082019050919050565b600060208201905081810360008301526113eb816113af565b9050919050565b6113fb81611019565b82525050565b61140a816110a8565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561144a57808201518184015260208101905061142f565b60008484015250505050565b6000601f19601f8301169050919050565b600061147282611410565b61147c818561141b565b935061148c81856020860161142c565b61149581611456565b840191505092915050565b600060e0820190506114b5600083018a6113f2565b6114c260208301896112e6565b6114cf60408301886112e6565b6114dc60608301876112e6565b6114e96080830186611401565b6114f660a0830185611401565b81810360c08301526115088184611467565b905098975050505050505050565b6000819050919050565b61152981611516565b811461153457600080fd5b50565b60008151905061154681611520565b92915050565b60006020828403121561156257611561610fb6565b5b600061157084828501611537565b91505092915050565b61158281611516565b82525050565b600060608201905061159d6000830186611401565b6115aa6020830185611401565b6115b76040830184611579565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115f9826110a8565b9150611604836110a8565b925082820190508082111561161c5761161b6115bf565b5b92915050565b7f436f6e6e6578743a20616d6f756e74202b2072656c6179657246656520213d2060008201527f6d73672e76616c75650000000000000000000000000000000000000000000000602082015250565b600061167e60298361116b565b915061168982611622565b604082019050919050565b600060208201905081810360008301526116ad81611671565b9050919050565b60006040820190506116c960008301856112e6565b6116d66020830184611401565b9392505050565b60008115159050919050565b6116f2816116dd565b81146116fd57600080fd5b50565b60008151905061170f816116e9565b92915050565b60006020828403121561172b5761172a610fb6565b5b600061173984828501611700565b91505092915050565b600060208201905061175760008301846112e6565b92915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b60006117b960228361116b565b91506117c48261175d565b604082019050919050565b600060208201905081810360008301526117e8816117ac565b9050919050565b600060608201905061180460008301866112e6565b61181160208301856112e6565b61181e6040830184611401565b949350505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b600061188260368361116b565b915061188d82611826565b604082019050919050565b600060208201905081810360008301526118b181611875565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611914602a8361116b565b915061191f826118b8565b604082019050919050565b6000602082019050818103600083015261194381611907565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006119a660268361116b565b91506119b18261194a565b604082019050919050565b600060208201905081810360008301526119d581611999565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611a12601d8361116b565b9150611a1d826119dc565b602082019050919050565b60006020820190508181036000830152611a4181611a05565b9050919050565b600081905092915050565b6000611a5e82611410565b611a688185611a48565b9350611a7881856020860161142c565b80840191505092915050565b6000611a908284611a53565b915081905092915050565b600081519050919050565b6000611ab182611a9b565b611abb818561116b565b9350611acb81856020860161142c565b611ad481611456565b840191505092915050565b60006020820190508181036000830152611af98184611aa6565b90509291505056fea2646970667358221220f3dc4951c58ae8b44cd9ca16d9356178d872e081900d417184103d3d1d4fc9ed64736f6c63430008110033"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "5": "0x24a9185bE4C94B52F25272054d45E41DF431b907",
      "10": null,
      "14": null,
      "42": "0x3099eC5b37175c6A0011e7f0D48168CC69B21F11",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0x3099eC5b37175c6A0011e7f0D48168CC69B21F11",
      "100": null,
      "114": null,
      "122": "0xF1447514368fCC942279862a8B5D6Ed7beDFf431",
      "123": "0xF1447514368fCC942279862a8B5D6Ed7beDFf431",
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0x3099eC5b37175c6A0011e7f0D48168CC69B21F11",
      "84531": null,
      "84532": null,
      "421613": "0x87e0d943b347F7f692Ee99916C84Ec928D18f84e",
      "534352": null,
      "11155111": null,
      "245022926": "0x3099eC5b37175c6A0011e7f0D48168CC69B21F11",
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60806040526040516200497d3803806200497d8339818101604052810190620000299190620018d0565b6200003f82620001f760201b620001671760201c565b6000600167ffffffffffffffff8111156200005f576200005e62001917565b5b6040519080825280602002602001820160405280156200009c57816020015b620000886200181a565b8152602001906001900390816200007e5790505b5090506000600167ffffffffffffffff811115620000bf57620000be62001917565b5b604051908082528060200260200182016040528015620000ee5781602001602082028036833780820191505090505b509050631f931c1c60e01b8160008151811062000110576200010f62001946565b5b60200260200101907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001600060028111156200019a576200019962001975565b5b81526020018281525082600081518110620001ba57620001b962001946565b5b6020026020010181905250620001ed82600060405180602001604052806000815250620002d660201b6200023e1760201c565b50505050620025c1565b6000620002096200055a60201b60201c565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101562000505576000848281518110620002fb57620002fa62001946565b5b60200260200101516020015190506000600281111562000320576200031f62001975565b5b81600281111562000336576200033562001975565b5b0362000396576200039085838151811062000356576200035562001946565b5b60200260200101516000015186848151811062000378576200037762001946565b5b6020026020010151604001516200058760201b60201c565b620004ee565b60016002811115620003ad57620003ac62001975565b5b816002811115620003c357620003c262001975565b5b0362000423576200041d858381518110620003e357620003e262001946565b5b60200260200101516000015186848151811062000405576200040462001946565b5b6020026020010151604001516200082960201b60201c565b620004ed565b60028081111562000439576200043862001975565b5b8160028111156200044f576200044e62001975565b5b03620004af57620004a98583815181106200046f576200046e62001946565b5b60200260200101516000015186848151811062000491576200049062001946565b5b60200260200101516040015162000add60201b60201c565b620004ec565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004e39062001a2b565b60405180910390fd5b5b5b508080620004fc9062001a86565b915050620002d9565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516200053b9392919062001e00565b60405180910390a162000555828262000c8560201b60201c565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6000815111620005ce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005c59062001ec1565b60405180910390fd5b6000620005e06200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160362000654576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064b9062001f59565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff1603620006ca57620006c9828562000eb360201b60201c565b5b60005b835181101562000822576000848281518110620006ef57620006ee62001946565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620007e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007dd9062001ff1565b60405180910390fd5b620007fa8583868a62000f9760201b60201c565b838062000807906200202b565b94505050508080620008199062001a86565b915050620006cd565b5050505050565b600081511162000870576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008679062001ec1565b60405180910390fd5b6000620008826200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620008f6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008ed9062001f59565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036200096c576200096b828562000eb360201b60201c565b5b60005b835181101562000ad657600084828151811062000991576200099062001946565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000a87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000a7e90620020da565b60405180910390fd5b62000a9a8582846200114460201b60201c565b62000aae8583868a62000f9760201b60201c565b838062000abb906200202b565b9450505050808062000acd9062001a86565b9150506200096f565b5050505050565b600081511162000b24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000b1b9062001ec1565b60405180910390fd5b600062000b366200055a60201b60201c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000baa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ba19062002172565b60405180910390fd5b60005b825181101562000c7f57600083828151811062000bcf5762000bce62001946565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905062000c678482846200114460201b60201c565b5050808062000c769062001a86565b91505062000bad565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000d0757600081511462000d01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000cf8906200220a565b60405180910390fd5b62000eaf565b600081511162000d4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d4590620022a2565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000dae5762000dad826040518060600160405280602881526020016200493160289139620017c560201b60201c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff168360405162000dd8919062002306565b600060405180830381855af49150503d806000811462000e15576040519150601f19603f3d011682016040523d82523d6000602084013e62000e1a565b606091505b50915091508162000eac5760008151111562000e6f57806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000e6691906200236b565b60405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000ea39062002405565b60405180910390fd5b50505b5050565b62000ede816040518060600160405280602481526020016200495960249139620017c560201b60201c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620011b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620011ad906200249d565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362001227576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200121e9062002535565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905062001300919062002557565b90508082146200149b5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001828154811062001365576200136462001946565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110620013e457620013e362001946565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480620014f257620014f162002592565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103620017be57600060018660020180549050620015df919062002557565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549050818114620017275760008760020183815481106200164d576200164c62001946565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508088600201838154811062001694576200169362001946565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806200173e576200173d62002592565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b905060008111829062001814576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200180b91906200236b565b60405180910390fd5b50505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000600281111562001859576200185862001975565b5b8152602001606081525090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001898826200186b565b9050919050565b620018aa816200188b565b8114620018b657600080fd5b50565b600081519050620018ca816200189f565b92915050565b60008060408385031215620018ea57620018e962001866565b5b6000620018fa85828601620018b9565b92505060206200190d85828601620018b9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b600062001a13602783620019a4565b915062001a2082620019b5565b604082019050919050565b6000602082019050818103600083015262001a468162001a04565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600062001a938262001a7c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362001ac85762001ac762001a4d565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b62001b0a816200188b565b82525050565b6003811062001b245762001b2362001975565b5b50565b600081905062001b378262001b10565b919050565b600062001b498262001b27565b9050919050565b62001b5b8162001b3c565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b62001bc48162001b8d565b82525050565b600062001bd8838362001bb9565b60208301905092915050565b6000602082019050919050565b600062001bfe8262001b61565b62001c0a818562001b6c565b935062001c178362001b7d565b8060005b8381101562001c4e57815162001c32888262001bca565b975062001c3f8362001be4565b92505060018101905062001c1b565b5085935050505092915050565b600060608301600083015162001c75600086018262001aff565b50602083015162001c8a602086018262001b50565b506040830151848203604086015262001ca4828262001bf1565b9150508091505092915050565b600062001cbf838362001c5b565b905092915050565b6000602082019050919050565b600062001ce18262001ad3565b62001ced818562001ade565b93508360208202850162001d018562001aef565b8060005b8581101562001d43578484038952815162001d21858262001cb1565b945062001d2e8362001cc7565b925060208a0199505060018101905062001d05565b50829750879550505050505092915050565b62001d60816200188b565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101562001da257808201518184015260208101905062001d85565b60008484015250505050565b6000601f19601f8301169050919050565b600062001dcc8262001d66565b62001dd8818562001d71565b935062001dea81856020860162001d82565b62001df58162001dae565b840191505092915050565b6000606082019050818103600083015262001e1c818662001cd4565b905062001e2d602083018562001d55565b818103604083015262001e41818462001dbf565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b600062001ea9602b83620019a4565b915062001eb68262001e4b565b604082019050919050565b6000602082019050818103600083015262001edc8162001e9a565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600062001f41602c83620019a4565b915062001f4e8262001ee3565b604082019050919050565b6000602082019050818103600083015262001f748162001f32565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b600062001fd9603583620019a4565b915062001fe68262001f7b565b604082019050919050565b600060208201905081810360008301526200200c8162001fca565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000620020388262002013565b91506bffffffffffffffffffffffff820362002059576200205862001a4d565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000620020c2603883620019a4565b9150620020cf8262002064565b604082019050919050565b60006020820190508181036000830152620020f581620020b3565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b60006200215a603683620019a4565b91506200216782620020fc565b604082019050919050565b600060208201905081810360008301526200218d816200214b565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000620021f2603c83620019a4565b9150620021ff8262002194565b604082019050919050565b600060208201905081810360008301526200222581620021e3565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b60006200228a603d83620019a4565b915062002297826200222c565b604082019050919050565b60006020820190508181036000830152620022bd816200227b565b9050919050565b600081905092915050565b6000620022dc8262001d66565b620022e88185620022c4565b9350620022fa81856020860162001d82565b80840191505092915050565b6000620023148284620022cf565b915081905092915050565b600081519050919050565b600062002337826200231f565b620023438185620019a4565b93506200235581856020860162001d82565b620023608162001dae565b840191505092915050565b600060208201905081810360008301526200238781846200232a565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b6000620023ed602683620019a4565b9150620023fa826200238f565b604082019050919050565b600060208201905081810360008301526200242081620023de565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b600062002485603783620019a4565b9150620024928262002427565b604082019050919050565b60006020820190508181036000830152620024b88162002476565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b60006200251d602e83620019a4565b91506200252a82620024bf565b604082019050919050565b6000602082019050818103600083015262002550816200250e565b9050919050565b6000620025648262001a7c565b9150620025718362001a7c565b92508282039050818111156200258c576200258b62001a4d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b61236080620025d16000396000f3fe60806040523661000b57005b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9050809150600082600001600080357fffffffff00000000000000000000000000000000000000000000000000000000167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906116c8565b60405180910390fd5b3660008037600080366000845af43d6000803e8060008114610162573d6000f35b3d6000fd5b600061017161046d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60005b835181101561042257600084828151811061025f5761025e6116e8565b5b60200260200101516020015190506000600281111561028157610280611717565b5b81600281111561029457610293611717565b5b036102e4576102df8583815181106102af576102ae6116e8565b5b6020026020010151600001518684815181106102ce576102cd6116e8565b5b60200260200101516040015161049a565b61040e565b600160028111156102f8576102f7611717565b5b81600281111561030b5761030a611717565b5b0361035b57610356858381518110610326576103256116e8565b5b602002602001015160000151868481518110610345576103446116e8565b5b602002602001015160400151610711565b61040d565b60028081111561036e5761036d611717565b5b81600281111561038157610380611717565b5b036103d1576103cc85838151811061039c5761039b6116e8565b5b6020026020010151600001518684815181106103bb576103ba6116e8565b5b602002602001015160400151610992565b61040c565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610403906117b8565b60405180910390fd5b5b5b50808061041a90611811565b915050610241565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161045693929190611b7d565b60405180910390a16104688282610b1d565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116104de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d590611c34565b60405180910390fd5b60006104e861046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055090611cc6565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036105c6576105c58285610d2f565b5b60005b835181101561070a5760008482815181106105e7576105e66116e8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d290611d58565b60405180910390fd5b6106e78583868a610e0a565b83806106f290611d90565b9450505050808061070290611811565b9150506105c9565b5050505050565b6000815111610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074c90611c34565b60405180910390fd5b600061075f61046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790611cc6565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff160361083d5761083c8285610d2f565b5b60005b835181101561098b57600084828151811061085e5761085d6116e8565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094890611e36565b60405180910390fd5b61095c858284610fb7565b6109688583868a610e0a565b838061097390611d90565b9450505050808061098390611811565b915050610840565b5050505050565b60008151116109d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cd90611c34565b60405180910390fd5b60006109e061046d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4890611ec8565b60405180910390fd5b60005b8251811015610b17576000838281518110610a7257610a716116e8565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b02848284610fb7565b50508080610b0f90611811565b915050610a54565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b9a576000815114610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611f5a565b60405180910390fd5b610d2b565b6000815111610bde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd590611fec565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c3457610c33826040518060600160405280602881526020016122df60289139611619565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610c5c9190612048565b600060405180830381855af49150503d8060008114610c97576040519150601f19603f3d011682016040523d82523d6000602084013e610c9c565b606091505b509150915081610d2857600081511115610ced57806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce491906120a3565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1f90612137565b60405180910390fd5b50505b5050565b610d518160405180606001604052806024815260200161230760249139611619565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101d906121c9565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b9061225b565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061116b919061227b565b90508082146112ff5760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106111cc576111cb6116e8565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018481548110611248576112476116e8565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001805480611353576113526122af565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050600081036116125760006001866002018054905061143d919061227b565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905081811461157e5760008760020183815481106114a7576114a66116e8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106114eb576114ea6116e8565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b86600201805480611592576115916122af565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165c91906120a3565b60405180910390fd5b50505050565b600082825260208201905092915050565b7f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f74206578697374600082015250565b60006116b260208361166b565b91506116bd8261167c565b602082019050919050565b600060208201905081810360008301526116e1816116a5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b60006117a260278361166b565b91506117ad82611746565b604082019050919050565b600060208201905081810360008301526117d181611795565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061181c82611807565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361184e5761184d6117d8565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118b082611885565b9050919050565b6118c0816118a5565b82525050565b600381106118d7576118d6611717565b5b50565b60008190506118e8826118c6565b919050565b60006118f8826118da565b9050919050565b611908816118ed565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61196f8161193a565b82525050565b60006119818383611966565b60208301905092915050565b6000602082019050919050565b60006119a58261190e565b6119af8185611919565b93506119ba8361192a565b8060005b838110156119eb5781516119d28882611975565b97506119dd8361198d565b9250506001810190506119be565b5085935050505092915050565b6000606083016000830151611a1060008601826118b7565b506020830151611a2360208601826118ff565b5060408301518482036040860152611a3b828261199a565b9150508091505092915050565b6000611a5483836119f8565b905092915050565b6000602082019050919050565b6000611a7482611859565b611a7e8185611864565b935083602082028501611a9085611875565b8060005b85811015611acc5784840389528151611aad8582611a48565b9450611ab883611a5c565b925060208a01995050600181019050611a94565b50829750879550505050505092915050565b611ae7816118a5565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b27578082015181840152602081019050611b0c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b4f82611aed565b611b598185611af8565b9350611b69818560208601611b09565b611b7281611b33565b840191505092915050565b60006060820190508181036000830152611b978186611a69565b9050611ba66020830185611ade565b8181036040830152611bb88184611b44565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611c1e602b8361166b565b9150611c2982611bc2565b604082019050919050565b60006020820190508181036000830152611c4d81611c11565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b6000611cb0602c8361166b565b9150611cbb82611c54565b604082019050919050565b60006020820190508181036000830152611cdf81611ca3565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b6000611d4260358361166b565b9150611d4d82611ce6565b604082019050919050565b60006020820190508181036000830152611d7181611d35565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b6000611d9b82611d78565b91506bffffffffffffffffffffffff8203611db957611db86117d8565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b6000611e2060388361166b565b9150611e2b82611dc4565b604082019050919050565b60006020820190508181036000830152611e4f81611e13565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b6000611eb260368361166b565b9150611ebd82611e56565b604082019050919050565b60006020820190508181036000830152611ee181611ea5565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b6000611f44603c8361166b565b9150611f4f82611ee8565b604082019050919050565b60006020820190508181036000830152611f7381611f37565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000611fd6603d8361166b565b9150611fe182611f7a565b604082019050919050565b6000602082019050818103600083015261200581611fc9565b9050919050565b600081905092915050565b600061202282611aed565b61202c818561200c565b935061203c818560208601611b09565b80840191505092915050565b60006120548284612017565b915081905092915050565b600081519050919050565b60006120758261205f565b61207f818561166b565b935061208f818560208601611b09565b61209881611b33565b840191505092915050565b600060208201905081810360008301526120bd818461206a565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b600061212160268361166b565b915061212c826120c5565b604082019050919050565b6000602082019050818103600083015261215081612114565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b60006121b360378361166b565b91506121be82612157565b604082019050919050565b600060208201905081810360008301526121e2816121a6565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b6000612245602e8361166b565b9150612250826121e9565b604082019050919050565b6000602082019050818103600083015261227481612238565b9050919050565b600061228682611807565b915061229183611807565b92508282039050818111156122a9576122a86117d8565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220305eabd09a504968137ac5539dead05c9347b2777b97892556acd6bd25b9766a64736f6c634300081100334c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465"
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
      "5": "0xB70a11cCde3076867fd5637B3883c7D02bBf339E",
      "10": null,
      "14": null,
      "42": "0xB86fe0416161ded1370016c470622125a93a8218",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0xB86fe0416161ded1370016c470622125a93a8218",
      "100": null,
      "114": null,
      "122": "0xf859F683a47b3D0E2A964eFDdf7392972700a101",
      "123": "0xf859F683a47b3D0E2A964eFDdf7392972700a101",
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0xB86fe0416161ded1370016c470622125a93a8218",
      "84531": null,
      "84532": null,
      "421613": "0xB86fe0416161ded1370016c470622125a93a8218",
      "534352": null,
      "11155111": null,
      "245022926": "0xB86fe0416161ded1370016c470622125a93a8218",
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b5061270a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004a600480360381019061004591906116ab565b61004c565b005b6100546100b6565b6100af8585906100649190611a49565b8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610151565b5050505050565b6100be610380565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014690611ae1565b60405180910390fd5b565b60005b835181101561033557600084828151811061017257610171611b01565b5b60200260200101516020015190506000600281111561019457610193611b30565b5b8160028111156101a7576101a6611b30565b5b036101f7576101f28583815181106101c2576101c1611b01565b5b6020026020010151600001518684815181106101e1576101e0611b01565b5b6020026020010151604001516103ad565b610321565b6001600281111561020b5761020a611b30565b5b81600281111561021e5761021d611b30565b5b0361026e5761026985838151811061023957610238611b01565b5b60200260200101516000015186848151811061025857610257611b01565b5b602002602001015160400151610624565b610320565b60028081111561028157610280611b30565b5b81600281111561029457610293611b30565b5b036102e4576102df8583815181106102af576102ae611b01565b5b6020026020010151600001518684815181106102ce576102cd611b01565b5b6020026020010151604001516108a5565b61031f565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031690611bd1565b60405180910390fd5b5b5b50808061032d90611c2a565b915050610154565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67383838360405161036993929190611f27565b60405180910390a161037b8282610a30565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008151116103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e890611fde565b60405180910390fd5b60006103fb610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390612070565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036104d9576104d88285610c42565b5b60005b835181101561061d5760008482815181106104fa576104f9611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590612102565b60405180910390fd5b6105fa8583868a610d1d565b83806106059061213a565b9450505050808061061590611c2a565b9150506104dc565b5050505050565b6000815111610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90611fde565b60405180910390fd5b6000610672610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106da90612070565b60405180910390fd5b60008160010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905090506000816bffffffffffffffffffffffff16036107505761074f8285610c42565b5b60005b835181101561089e57600084828151811061077157610770611b01565b5b602002602001015190506000846000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b906121e0565b60405180910390fd5b61086f858284610eca565b61087b8583868a610d1d565b83806108869061213a565b9450505050808061089690611c2a565b915050610753565b5050505050565b60008151116108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e090611fde565b60405180910390fd5b60006108f3610380565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b90612272565b60405180910390fd5b60005b8251811015610a2a57600083828151811061098557610984611b01565b5b602002602001015190506000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610a15848284610eca565b50508080610a2290611c2a565b915050610967565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aad576000815114610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f90612304565b60405180910390fd5b610c3e565b6000815111610af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae890612396565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b4757610b46826040518060600160405280602881526020016126896028913961152c565b5b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610b6f91906123f2565b600060405180830381855af49150503d8060008114610baa576040519150601f19603f3d011682016040523d82523d6000602084013e610baf565b606091505b509150915081610c3b57600081511115610c0057806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf7919061244d565b60405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c32906124e1565b60405180910390fd5b50505b5050565b610c64816040518060600160405280602481526020016126b16024913961152c565b81600201805490508260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555081600201819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b81846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018390806001815401808255809150506001900390600052602060002090600891828204019190066004029091909190916101000a81548163ffffffff021916908360e01c021790555080846000016000857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3090612573565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9e90612605565b60405180910390fd5b6000836000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff169050600060018560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054905061107e9190612625565b90508082146112125760008560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000182815481106110df576110de611b01565b5b90600052602060002090600891828204019190066004029054906101000a900460e01b9050808660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001848154811061115b5761115a611b01565b5b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908360e01c021790555082866000016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550505b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548061126657611265612659565b5b60019003818190600052602060002090600891828204019190066004026101000a81549063ffffffff02191690559055846000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505060008103611525576000600186600201805490506113509190612625565b905060008660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508181146114915760008760020183815481106113ba576113b9611b01565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808860020183815481106113fe576113fd611b01565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181905550505b866002018054806114a5576114a4612659565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590558660010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b5050505050565b6000823b9050600081118290611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f919061244d565b60405180910390fd5b50505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126115b7576115b6611592565b5b8235905067ffffffffffffffff8111156115d4576115d3611597565b5b6020830191508360208202830111156115f0576115ef61159c565b5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611622826115f7565b9050919050565b61163281611617565b811461163d57600080fd5b50565b60008135905061164f81611629565b92915050565b60008083601f84011261166b5761166a611592565b5b8235905067ffffffffffffffff81111561168857611687611597565b5b6020830191508360018202830111156116a4576116a361159c565b5b9250929050565b6000806000806000606086880312156116c7576116c6611588565b5b600086013567ffffffffffffffff8111156116e5576116e461158d565b5b6116f1888289016115a1565b9550955050602061170488828901611640565b935050604086013567ffffffffffffffff8111156117255761172461158d565b5b61173188828901611655565b92509250509295509295909350565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61178982611740565b810181811067ffffffffffffffff821117156117a8576117a7611751565b5b80604052505050565b60006117bb61157e565b90506117c78282611780565b919050565b600067ffffffffffffffff8211156117e7576117e6611751565b5b602082029050602081019050919050565b600080fd5b600080fd5b6003811061180f57600080fd5b50565b60008135905061182181611802565b92915050565b600067ffffffffffffffff82111561184257611841611751565b5b602082029050602081019050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61188881611853565b811461189357600080fd5b50565b6000813590506118a58161187f565b92915050565b60006118be6118b984611827565b6117b1565b905080838252602082019050602084028301858111156118e1576118e061159c565b5b835b8181101561190a57806118f68882611896565b8452602084019350506020810190506118e3565b5050509392505050565b600082601f83011261192957611928611592565b5b81356119398482602086016118ab565b91505092915050565b600060608284031215611958576119576117f8565b5b61196260606117b1565b9050600061197284828501611640565b600083015250602061198684828501611812565b602083015250604082013567ffffffffffffffff8111156119aa576119a96117fd565b5b6119b684828501611914565b60408301525092915050565b60006119d56119d0846117cc565b6117b1565b905080838252602082019050602084028301858111156119f8576119f761159c565b5b835b81811015611a3f57803567ffffffffffffffff811115611a1d57611a1c611592565b5b808601611a2a8982611942565b855260208501945050506020810190506119fa565b5050509392505050565b6000611a563684846119c2565b905092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000611acb602283611a5e565b9150611ad682611a6f565b604082019050919050565b60006020820190508181036000830152611afa81611abe565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560008201527f74416374696f6e00000000000000000000000000000000000000000000000000602082015250565b6000611bbb602783611a5e565b9150611bc682611b5f565b604082019050919050565b60006020820190508181036000830152611bea81611bae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000611c3582611c20565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c6757611c66611bf1565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ca781611617565b82525050565b60038110611cbe57611cbd611b30565b5b50565b6000819050611ccf82611cad565b919050565b6000611cdf82611cc1565b9050919050565b611cef81611cd4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d2a81611853565b82525050565b6000611d3c8383611d21565b60208301905092915050565b6000602082019050919050565b6000611d6082611cf5565b611d6a8185611d00565b9350611d7583611d11565b8060005b83811015611da6578151611d8d8882611d30565b9750611d9883611d48565b925050600181019050611d79565b5085935050505092915050565b6000606083016000830151611dcb6000860182611c9e565b506020830151611dde6020860182611ce6565b5060408301518482036040860152611df68282611d55565b9150508091505092915050565b6000611e0f8383611db3565b905092915050565b6000602082019050919050565b6000611e2f82611c72565b611e398185611c7d565b935083602082028501611e4b85611c8e565b8060005b85811015611e875784840389528151611e688582611e03565b9450611e7383611e17565b925060208a01995050600181019050611e4f565b50829750879550505050505092915050565b611ea281611617565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ee2578082015181840152602081019050611ec7565b60008484015250505050565b6000611ef982611ea8565b611f038185611eb3565b9350611f13818560208601611ec4565b611f1c81611740565b840191505092915050565b60006060820190508181036000830152611f418186611e24565b9050611f506020830185611e99565b8181036040830152611f628184611eee565b9050949350505050565b7f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660008201527f6163657420746f20637574000000000000000000000000000000000000000000602082015250565b6000611fc8602b83611a5e565b9150611fd382611f6c565b604082019050919050565b60006020820190508181036000830152611ff781611fbb565b9050919050565b7f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260008201527f6520616464726573732830290000000000000000000000000000000000000000602082015250565b600061205a602c83611a5e565b915061206582611ffe565b604082019050919050565b600060208201905081810360008301526120898161204d565b9050919050565b7f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60008201527f6e207468617420616c7265616479206578697374730000000000000000000000602082015250565b60006120ec603583611a5e565b91506120f782612090565b604082019050919050565b6000602082019050818103600083015261211b816120df565b9050919050565b60006bffffffffffffffffffffffff82169050919050565b600061214582612122565b91506bffffffffffffffffffffffff820361216357612162611bf1565b5b600182019050919050565b7f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60008201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000602082015250565b60006121ca603883611a5e565b91506121d58261216e565b604082019050919050565b600060208201905081810360008301526121f9816121bd565b9050919050565b7f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260008201527f657373206d757374206265206164647265737328302900000000000000000000602082015250565b600061225c603683611a5e565b915061226782612200565b604082019050919050565b6000602082019050818103600083015261228b8161224f565b9050919050565b7f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860008201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000602082015250565b60006122ee603c83611a5e565b91506122f982612292565b604082019050919050565b6000602082019050818103600083015261231d816122e1565b9050919050565b7f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460008201527f7920627574205f696e6974206973206e6f742061646472657373283029000000602082015250565b6000612380603d83611a5e565b915061238b82612324565b604082019050919050565b600060208201905081810360008301526123af81612373565b9050919050565b600081905092915050565b60006123cc82611ea8565b6123d681856123b6565b93506123e6818560208601611ec4565b80840191505092915050565b60006123fe82846123c1565b915081905092915050565b600081519050919050565b600061241f82612409565b6124298185611a5e565b9350612439818560208601611ec4565b61244281611740565b840191505092915050565b600060208201905081810360008301526124678184612414565b905092915050565b7f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e20726560008201527f7665727465640000000000000000000000000000000000000000000000000000602082015250565b60006124cb602683611a5e565b91506124d68261246f565b604082019050919050565b600060208201905081810360008301526124fa816124be565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360008201527f74696f6e207468617420646f65736e2774206578697374000000000000000000602082015250565b600061255d603783611a5e565b915061256882612501565b604082019050919050565b6000602082019050818103600083015261258c81612550565b9050919050565b7f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560008201527f7461626c652066756e6374696f6e000000000000000000000000000000000000602082015250565b60006125ef602e83611a5e565b91506125fa82612593565b604082019050919050565b6000602082019050818103600083015261261e816125e2565b9050919050565b600061263082611c20565b915061263b83611c20565b925082820390508181111561265357612652611bf1565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212207fa2a888ad5bbe4de1458e663214e8a88a5f68b72dc15183dafb93f74374cabc64736f6c63430008110033"
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
      "5": "0xE14aF0777B775fddf24749A3C406e669d66b9611",
      "10": null,
      "14": null,
      "42": "0xF04D7fC2cB1976736f9263Ff010A048cF564b936",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0xF04D7fC2cB1976736f9263Ff010A048cF564b936",
      "100": null,
      "114": null,
      "122": "0x8BFbB21683e21DC4B11af352117d6D4F2bc62f8e",
      "123": "0x8BFbB21683e21DC4B11af352117d6D4F2bc62f8e",
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0xF04D7fC2cB1976736f9263Ff010A048cF564b936",
      "84531": null,
      "84532": null,
      "421613": "0xF04D7fC2cB1976736f9263Ff010A048cF564b936",
      "534352": null,
      "11155111": null,
      "245022926": "0xF04D7fC2cB1976736f9263Ff010A048cF564b936",
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50610c0c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c1461008c5780637a0ed627146100aa578063adfca15e146100c8578063cdffacc6146100f8575b600080fd5b6100766004803603810190610071919061068f565b610128565b60405161008391906106d7565b60405180910390f35b61009461019e565b6040516100a191906107e2565b60405180910390f35b6100b261023b565b6040516100bf91906109c1565b60405180910390f35b6100e260048036038101906100dd9190610a0f565b61045e565b6040516100ef9190610aab565b60405180910390f35b610112600480360381019061010d919061068f565b610549565b60405161011f9190610adc565b60405180910390f35b6000806101336105d5565b9050806003016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff16915050919050565b606060006101aa6105d5565b90508060020180548060200260200160405190810160405280929190818152602001828054801561023057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101e6575b505050505091505090565b606060006102476105d5565b90506000816002018054905090508067ffffffffffffffff81111561026f5761026e610af7565b5b6040519080825280602002602001820160405280156102a857816020015b610295610602565b81526020019060019003908161028d5790505b50925060005b818110156104585760008360020182815481106102ce576102cd610b26565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061030f5761030e610b26565b5b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508360010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561041d57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103ca5790505b505050505085838151811061043557610434610b26565b5b60200260200101516020018190525050808061045090610b8e565b9150506102ae565b50505090565b6060600061046a6105d5565b90508060010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561053c57602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104e95790505b5050505050915050919050565b6000806105546105d5565b9050806000016000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61066c81610637565b811461067757600080fd5b50565b60008135905061068981610663565b92915050565b6000602082840312156106a5576106a4610632565b5b60006106b38482850161067a565b91505092915050565b60008115159050919050565b6106d1816106bc565b82525050565b60006020820190506106ec60008301846106c8565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107498261071e565b9050919050565b6107598161073e565b82525050565b600061076b8383610750565b60208301905092915050565b6000602082019050919050565b600061078f826106f2565b61079981856106fd565b93506107a48361070e565b8060005b838110156107d55781516107bc888261075f565b97506107c783610777565b9250506001810190506107a8565b5085935050505092915050565b600060208201905081810360008301526107fc8184610784565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61086581610637565b82525050565b6000610877838361085c565b60208301905092915050565b6000602082019050919050565b600061089b82610830565b6108a5818561083b565b93506108b08361084c565b8060005b838110156108e15781516108c8888261086b565b97506108d383610883565b9250506001810190506108b4565b5085935050505092915050565b60006040830160008301516109066000860182610750565b506020830151848203602086015261091e8282610890565b9150508091505092915050565b600061093783836108ee565b905092915050565b6000602082019050919050565b600061095782610804565b610961818561080f565b93508360208202850161097385610820565b8060005b858110156109af5784840389528151610990858261092b565b945061099b8361093f565b925060208a01995050600181019050610977565b50829750879550505050505092915050565b600060208201905081810360008301526109db818461094c565b905092915050565b6109ec8161073e565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a24610632565b5b6000610a33848285016109fa565b91505092915050565b600082825260208201905092915050565b6000610a5882610830565b610a628185610a3c565b9350610a6d8361084c565b8060005b83811015610a9e578151610a85888261086b565b9750610a9083610883565b925050600181019050610a71565b5085935050505092915050565b60006020820190508181036000830152610ac58184610a4d565b905092915050565b610ad68161073e565b82525050565b6000602082019050610af16000830184610acd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000610b9982610b84565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610bcb57610bca610b55565b5b60018201905091905056fea2646970667358221220ef9c4d5ee27fa9078434fe5fd9d16f9b8885f43dc1a58f1befea84c4bbc0077664736f6c63430008110033"
  },
  "ENSAbstractResolver": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "56": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "65": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "66": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "69": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "97": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "100": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "114": null,
      "122": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "123": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "137": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "250": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "420": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1001": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1284": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "1287": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4002": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "4386": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "5000": null,
      "6666": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "8217": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "8453": null,
      "10200": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42161": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42170": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "42220": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "43113": "0x329393556727F42F2D19243bb8C5660C3aa98140",
      "43114": "0x329393556727F42F2D19243bb8C5660C3aa98140",
      "44787": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "59144": null,
      "80001": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "84531": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "84532": null,
      "421613": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
      "534352": null,
      "11155111": null,
      "245022926": "0xE23c8f8aB1Cdd56D89F181c22Bf43e5b53871E08",
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
      "14": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "56": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "65": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "66": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "69": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "97": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "100": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "114": null,
      "122": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "123": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "137": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "250": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "420": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1001": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1284": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "1287": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4002": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "4386": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "5000": null,
      "6666": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "8217": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "8453": null,
      "10200": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42161": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42170": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "42220": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "43113": "0xf52454A9DE293f59aCd957a9c4D49C8D4152bae9",
      "43114": "0xf52454A9DE293f59aCd957a9c4D49C8D4152bae9",
      "44787": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "59144": null,
      "80001": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "84531": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "84532": null,
      "421613": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
      "534352": null,
      "11155111": null,
      "245022926": "0xF330b17e19474762E6F408D7dCf0327264d4A2C0",
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "56": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "65": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "66": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "69": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "97": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "100": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "114": null,
      "122": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "123": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "137": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "250": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "420": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1001": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1284": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "1287": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "4002": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "4386": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "5000": null,
      "6666": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "8217": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "8453": null,
      "10200": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42161": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42170": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "42220": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "43113": "0x3255c5C4d96F310F48356C4822761323074DbcB3",
      "43114": "0x3255c5C4d96F310F48356C4822761323074DbcB3",
      "44787": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "59144": null,
      "80001": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "84531": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "84532": null,
      "421613": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
      "534352": null,
      "11155111": null,
      "245022926": "0xf17BCfd10B65fD0792dEef7a17Aa08B4b0086688",
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
      "14": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "56": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "65": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "66": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "69": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "97": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "100": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "114": null,
      "122": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "123": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "137": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "250": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "420": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1001": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1284": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "1287": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "4002": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "4386": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "5000": null,
      "6666": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "8217": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "8453": null,
      "10200": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42161": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42170": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "42220": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "43113": "0x7C68A0e79DE9D6964389760Ec0C9E0ea53F7102a",
      "43114": "0x7C68A0e79DE9D6964389760Ec0C9E0ea53F7102a",
      "44787": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "59144": null,
      "80001": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "84531": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "84532": null,
      "421613": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
      "534352": null,
      "11155111": null,
      "245022926": "0x523C92966e9d2067ba547f59D51E907c20FD8761",
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
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
      "10": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "14": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "56": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "65": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "66": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "69": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "97": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "100": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "114": null,
      "122": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "123": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "137": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "250": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "420": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1001": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1284": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "1287": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4002": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4386": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "5000": null,
      "6666": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "8217": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "8453": null,
      "10200": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42161": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42170": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42220": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "43113": "0xEeEA758C7791642c19e5E555A6f78A13334c7c2c",
      "43114": "0xEeEA758C7791642c19e5E555A6f78A13334c7c2c",
      "44787": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "59144": null,
      "80001": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "84531": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "84532": null,
      "421613": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "534352": null,
      "11155111": null,
      "245022926": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
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
      "14": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "56": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "65": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "66": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "69": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "97": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "100": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "114": null,
      "122": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "123": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "137": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "250": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "420": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1001": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1284": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "1287": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4002": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "4386": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "5000": null,
      "6666": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "8217": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "8453": null,
      "10200": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42161": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42170": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "42220": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "43113": "0xf96E0A8e408604F2c45e13c89bB395815BD5Efc6",
      "43114": "0xf96E0A8e408604F2c45e13c89bB395815BD5Efc6",
      "44787": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "59144": null,
      "80001": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "84531": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "84532": null,
      "421613": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
      "534352": null,
      "11155111": null,
      "245022926": "0x432defD2b3733e6fEBb1bD4B17Ed85D15b882163",
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "GatewayV2": {
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
        "name": "delegateBatchGuarded",
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
        "name": "delegateBatchWithGasPriceGuarded",
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
        "name": "delegateBatchesGuarded",
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
            "internalType": "struct GatewayV2.DelegatedBatch",
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
            "internalType": "struct GatewayV2.DelegatedBatchWithGasPrice",
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
        "name": "sendBatchFromAccountGuarded",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "sendBatchGuarded",
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
      "5": "0xBEd52610518788B931f7825301909e7616273d47",
      "10": null,
      "14": null,
      "42": null,
      "56": "0xBEd52610518788B931f7825301909e7616273d47",
      "65": "0xBEd52610518788B931f7825301909e7616273d47",
      "66": "0xBEd52610518788B931f7825301909e7616273d47",
      "69": null,
      "97": "0xBEd52610518788B931f7825301909e7616273d47",
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": "0xBEd52610518788B931f7825301909e7616273d47",
      "250": null,
      "420": "0xBEd52610518788B931f7825301909e7616273d47",
      "1001": "0xBEd52610518788B931f7825301909e7616273d47",
      "1284": null,
      "1287": null,
      "4002": "0xBEd52610518788B931f7825301909e7616273d47",
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": "0xBEd52610518788B931f7825301909e7616273d47",
      "8453": null,
      "10200": "0xBEd52610518788B931f7825301909e7616273d47",
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": "0x9FC4DdE698E5cf1Ee8d6e2D25c835836d9af1C8F",
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0xBEd52610518788B931f7825301909e7616273d47",
      "84531": "0xBEd52610518788B931f7825301909e7616273d47",
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000469050806001819055505061315e8061006d6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806387d31313116100b8578063b5021b161161007c578063b5021b1614610349578063d0f710d614610365578063d2c83b9a14610395578063d305d0db146103b3578063d9f13021146103cf578063f92c5f7c146103eb57610142565b806387d31313146102b95780639a8a0592146102d75780639f255626146102f5578063a526d83b14610311578063ac2a08cd1461032d57610142565b8063538901341161010a57806353890134146101e95780635afaa7bb14610205578063714041561461022157806373e5a13f1461023d57806376db2b4c1461026d578063867519c61461029d57610142565b80630c68ba2114610147578063231badaf14610177578063371aa71a14610193578063392e53cd146101af578063485cc955146101cd575b600080fd5b610161600480360381019061015c9190611e5b565b61041b565b60405161016e9190612b23565b60405180910390f35b610191600480360381019061018c9190611f03565b610471565b005b6101ad60048036038101906101a89190611f03565b61056c565b005b6101b761060c565b6040516101c49190612b23565b60405180910390f35b6101e760048036038101906101e29190612103565b610662565b005b61020360048036038101906101fe9190611fc2565b6107fa565b005b61021f600480360381019061021a919061202e565b610894565b005b61023b60048036038101906102369190611e5b565b610a6c565b005b61025760048036038101906102529190612180565b610c87565b6040516102649190612b3e565b60405180910390f35b6102876004803603810190610282919061213f565b610cac565b6040516102949190612b3e565b60405180910390f35b6102b760048036038101906102b29190611e84565b610cd6565b005b6102c1610ce7565b6040516102ce9190612bb9565b60405180910390f35b6102df610d0d565b6040516102ec9190612df4565b60405180910390f35b61030f600480360381019061030a9190611fc2565b610d13565b005b61032b60048036038101906103269190611e5b565b610d23565b005b61034760048036038101906103429190611f03565b610dbb565b005b610363600480360381019061035e9190611f03565b610e5b565b005b61037f600480360381019061037a91906120ab565b610f57565b60405161038c9190612b23565b60405180910390f35b61039d610fb0565b6040516103aa9190612b9e565b60405180910390f35b6103cd60048036038101906103c89190611e84565b610fd6565b005b6103e960048036038101906103e4919061202e565b611072565b005b61040560048036038101906104009190611e5b565b61110c565b6040516104129190612df4565b60405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484116104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990612c54565b60405180910390fd5b60006105128261050488888888611168565b6111cb90919063ffffffff16565b905084600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061056486828686611286565b505050505050565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ef90612cf4565b60405180910390fd5b6106058585858585610e5b565b5050505050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146106f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e790612c14565b60405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060606107be816116f1565b507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516107ee9190612a78565b60405180910390a15050565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d90612cf4565b60405180910390fd5b6108908282610d13565b5050565b60008251116108d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cf90612c94565b60405180910390fd5b600080600090505b8351811015610a265760003073ffffffffffffffffffffffffffffffffffffffff1685838151811061090e57fe5b60200260200101516040516109239190612994565b6000604051808303816000865af19150503d8060008114610960576040519150601f19603f3d011682016040523d82523d6000602084013e610965565b606091505b5050905083156109b457806109af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a690612c34565b60405180910390fd5b6109ca565b8080156109bf575082155b156109c957600192505b5b7f361c14722cc344132c73396113f7164232448b09c544a149f09048648b43d872338684815181106109f857fe5b602002602001015183604051610a1093929190612abc565b60405180910390a15080806001019150506108e0565b5080610a67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5e90612dd4565b60405180910390fd5b505050565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef90612cf4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e90612db4565b60405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610bf3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea90612d14565b60405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051610c7c929190612a93565b60405180910390a150565b6000610ca58260000151836020015184604001518560600151611168565b9050919050565b6000610ccf82600001518360200151846040015185606001518660800151611749565b9050919050565b610ce283338484611286565b505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b610d1f33338484611286565b5050565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da690612cf4565b60405180910390fd5b610db8816117af565b50565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3e90612cf4565b60405180910390fd5b610e548585858585610471565b5050505050565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411610edc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed390612c54565b60405180910390fd5b6000610efd82610eef888888883a611749565b6111cb90919063ffffffff16565b905084600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f4f86828686611286565b505050505050565b6000610fa78484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611940565b90509392505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105990612cf4565b60405180910390fd5b61106d838383610cd6565b505050565b600260003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166110fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f590612cf4565b60405180910390fd5b6111088282610894565b5050565b60006111616001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ae90919063ffffffff16565b9050919050565b60006111c17f6848d0622081db2451400280dead7a739a080cb93852607c381af11e289769b286868661119a87611a03565b6040516020016111ad94939291906128f7565b604051602081830303815290604052611a66565b9050949350505050565b6000806000905060418351141561127c5760008060006020860151925060408601519150606086015160001a9050601b8160ff16101561120c57601b810190505b601b8160ff1614806112215750601c8160ff16145b1561127857600187828585604051600081526020016040526040516112499493929190612b59565b6020604051602081039080840390855afa15801561126b573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156112f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ed90612c74565b60405180910390fd5b600082511161133a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133190612d94565b60405180910390fd5b815181511461137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137590612cd4565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461155257600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b815260040161140e929190612afa565b60206040518083038186803b15801561142657600080fd5b505afa15801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e9190612082565b806115125750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b81526004016114c1929190612afa565b60206040518083038186803b1580156114d957600080fd5b505afa1580156114ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115119190612082565b5b611551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154890612cb4565b60405180910390fd5b5b600080600090505b82518110156116e957600073ffffffffffffffffffffffffffffffffffffffff1684828151811061158757fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156115e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dd90612bd4565b60405180910390fd5b8381815181106115f257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1683828151811061161c57fe5b60200260200101518787604051602001611638939291906129ab565b6040516020818303038152906040526040516116549190612994565b6000604051808303816000865af19150503d8060008114611691576040519150601f19603f3d011682016040523d82523d6000602084013e611696565b606091505b505080925050816116dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d390612d34565b60405180910390fd5b808060010191505061155a565b505050505050565b60008151141561170957611704326117af565b611746565b60008151905060005b818110156117435761173683828151811061172957fe5b60200260200101516117af565b8080600101915050611712565b50505b50565b60006117a47f6f4e1b2b1e5e49f4269e19e16e67a00cb0a796d96d30be3e4b540d3732e8bcad87878761177b88611a03565b8760405160200161179095949392919061293d565b604051602081830303815290604052611a66565b905095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561181f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181690612bf4565b60405180910390fd5b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156118ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118a390612d74565b60405180910390fd5b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051611935929190612a93565b60405180910390a150565b60008061195683856111cb90919063ffffffff16565b9050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000808284019050838110156119f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f090612d54565b60405180910390fd5b8091505092915050565b60608060008351905060005b81811015611a5b5782858281518110611a2457fe5b6020026020010151604051602001611a3d9291906129e4565b60405160208183030381529060405292508080600101915050611a0f565b508192505050919050565b6000611a9f600154308585604051602001611a849493929190612a2e565b60405160208183030381529060405280519060200120611aa7565b905092915050565b600081604051602001611aba9190612a08565b604051602081830303815290604052805190602001209050919050565b600081359050611ae6816130c7565b92915050565b600082601f830112611afd57600080fd5b8135611b10611b0b82612e3c565b612e0f565b91508181835260208401935060208101905083856020840282011115611b3557600080fd5b60005b83811015611b655781611b4b8882611ad7565b845260208401935060208301925050600181019050611b38565b5050505092915050565b600082601f830112611b8057600080fd5b8135611b93611b8e82612e64565b612e0f565b9150818183526020840193506020810190508360005b83811015611bd95781358601611bbf8882611c6c565b845260208401935060208301925050600181019050611ba9565b5050505092915050565b600081359050611bf2816130de565b92915050565b600081519050611c07816130de565b92915050565b600081359050611c1c816130f5565b92915050565b60008083601f840112611c3457600080fd5b8235905067ffffffffffffffff811115611c4d57600080fd5b602083019150836001820283011115611c6557600080fd5b9250929050565b600082601f830112611c7d57600080fd5b8135611c90611c8b82612e8c565b612e0f565b91508082526020830160208301858383011115611cac57600080fd5b611cb783828461302f565b50505092915050565b600081359050611ccf8161310c565b92915050565b600081359050611ce481613123565b92915050565b600060a08284031215611cfc57600080fd5b611d0660a0612e0f565b90506000611d1684828501611ad7565b6000830152506020611d2a84828501611e46565b602083015250604082013567ffffffffffffffff811115611d4a57600080fd5b611d5684828501611aec565b604083015250606082013567ffffffffffffffff811115611d7657600080fd5b611d8284828501611b6f565b6060830152506080611d9684828501611e46565b60808301525092915050565b600060808284031215611db457600080fd5b611dbe6080612e0f565b90506000611dce84828501611ad7565b6000830152506020611de284828501611e46565b602083015250604082013567ffffffffffffffff811115611e0257600080fd5b611e0e84828501611aec565b604083015250606082013567ffffffffffffffff811115611e2e57600080fd5b611e3a84828501611b6f565b60608301525092915050565b600081359050611e558161313a565b92915050565b600060208284031215611e6d57600080fd5b6000611e7b84828501611ad7565b91505092915050565b600080600060608486031215611e9957600080fd5b6000611ea786828701611ad7565b935050602084013567ffffffffffffffff811115611ec457600080fd5b611ed086828701611aec565b925050604084013567ffffffffffffffff811115611eed57600080fd5b611ef986828701611b6f565b9150509250925092565b600080600080600060a08688031215611f1b57600080fd5b6000611f2988828901611ad7565b9550506020611f3a88828901611e46565b945050604086013567ffffffffffffffff811115611f5757600080fd5b611f6388828901611aec565b935050606086013567ffffffffffffffff811115611f8057600080fd5b611f8c88828901611b6f565b925050608086013567ffffffffffffffff811115611fa957600080fd5b611fb588828901611c6c565b9150509295509295909350565b60008060408385031215611fd557600080fd5b600083013567ffffffffffffffff811115611fef57600080fd5b611ffb85828601611aec565b925050602083013567ffffffffffffffff81111561201857600080fd5b61202485828601611b6f565b9150509250929050565b6000806040838503121561204157600080fd5b600083013567ffffffffffffffff81111561205b57600080fd5b61206785828601611b6f565b925050602061207885828601611be3565b9150509250929050565b60006020828403121561209457600080fd5b60006120a284828501611bf8565b91505092915050565b6000806000604084860312156120c057600080fd5b60006120ce86828701611c0d565b935050602084013567ffffffffffffffff8111156120eb57600080fd5b6120f786828701611c22565b92509250509250925092565b6000806040838503121561211657600080fd5b600061212485828601611cc0565b925050602061213585828601611cd5565b9150509250929050565b60006020828403121561215157600080fd5b600082013567ffffffffffffffff81111561216b57600080fd5b61217784828501611cea565b91505092915050565b60006020828403121561219257600080fd5b600082013567ffffffffffffffff8111156121ac57600080fd5b6121b884828501611da2565b91505092915050565b60006121cd83836121f7565b60208301905092915050565b6121e281612fb1565b82525050565b6121f181612f2e565b82525050565b61220081612f2e565b82525050565b61221761221282612f2e565b613071565b82525050565b600061222882612ec8565b6122328185612eeb565b935061223d83612eb8565b8060005b8381101561226e57815161225588826121c1565b975061226083612ede565b925050600181019050612241565b5085935050505092915050565b61228481612f40565b82525050565b61229381612f4c565b82525050565b6122aa6122a582612f4c565b613083565b82525050565b60006122bb82612ed3565b6122c58185612ef6565b93506122d581856020860161303e565b6122de816130a9565b840191505092915050565b60006122f482612ed3565b6122fe8185612f07565b935061230e81856020860161303e565b80840191505092915050565b61232381612fc3565b82525050565b61233281612fe7565b82525050565b6000612345601b83612f12565b91507f476174657761793a2063616e6e6f742073656e6420746f2030783000000000006000830152602082019050919050565b6000612385601c83612f23565b91507f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000830152601c82019050919050565b60006123c5602083612f12565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b6000612405602f83612f12565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b600061246b601783612f12565b91507f476174657761793a2062617463682072657665727465640000000000000000006000830152602082019050919050565b60006124ab603283612f12565b91507f476174657761793a206e6f6e6365206973206c6f776572207468616e2063757260008301527f72656e74206163636f756e74206e6f6e636500000000000000000000000000006020830152604082019050919050565b6000612511602583612f12565b91507f476174657761793a2063616e6e6f742073656e642066726f6d2030783020616360008301527f636f756e740000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612577602683612f12565b91507f476174657761793a2063616e6e6f742064656c656761746520656d707479206260008301527f61746368657300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006125dd602883612f12565b91507f476174657761793a2073656e646572206973206e6f7420746865206163636f7560008301527f6e74206f776e65720000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612643601683612f12565b91507f476174657761793a20696e76616c6964206261746368000000000000000000006000830152602082019050919050565b6000612683602683612f12565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006126e9601f83612f12565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000612729602383612f12565b91507f476174657761793a206261746368207472616e73616374696f6e20726576657260008301527f74656400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061278f601e83612f12565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b60006127cf602083612f12565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b600061280f602083612f12565b91507f476174657761793a2063616e6e6f742073656e6420656d7074792062617463686000830152602082019050919050565b600061284f601b83612f12565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b600061288f601d83612f12565b91507f476174657761793a20616c6c20626174636865732072657665727465640000006000830152602082019050919050565b6128cb81612f9a565b82525050565b6128e26128dd82612f9a565b61309f565b82525050565b6128f181612fa4565b82525050565b60006129038287612206565b60148201915061291382866128d1565b602082019150612923828561221d565b915061292f82846122e9565b915081905095945050505050565b60006129498288612206565b60148201915061295982876128d1565b602082019150612969828661221d565b915061297582856122e9565b915061298182846128d1565b6020820191508190509695505050505050565b60006129a082846122e9565b915081905092915050565b60006129b782866122e9565b91506129c38285612206565b6014820191506129d38284612206565b601482019150819050949350505050565b60006129f082856122e9565b91506129fc82846122e9565b91508190509392505050565b6000612a1382612378565b9150612a1f8284612299565b60208201915081905092915050565b6000612a3a82876128d1565b602082019150612a4a8286612206565b601482019150612a5a8285612299565b602082019150612a6a82846122e9565b915081905095945050505050565b6000602082019050612a8d60008301846121d9565b92915050565b6000604082019050612aa860008301856121d9565b612ab560208301846121e8565b9392505050565b6000606082019050612ad160008301866121d9565b8181036020830152612ae381856122b0565b9050612af2604083018461227b565b949350505050565b6000604082019050612b0f60008301856121e8565b612b1c60208301846121e8565b9392505050565b6000602082019050612b38600083018461227b565b92915050565b6000602082019050612b53600083018461228a565b92915050565b6000608082019050612b6e600083018761228a565b612b7b60208301866128e8565b612b88604083018561228a565b612b95606083018461228a565b95945050505050565b6000602082019050612bb3600083018461231a565b92915050565b6000602082019050612bce6000830184612329565b92915050565b60006020820190508181036000830152612bed81612338565b9050919050565b60006020820190508181036000830152612c0d816123b8565b9050919050565b60006020820190508181036000830152612c2d816123f8565b9050919050565b60006020820190508181036000830152612c4d8161245e565b9050919050565b60006020820190508181036000830152612c6d8161249e565b9050919050565b60006020820190508181036000830152612c8d81612504565b9050919050565b60006020820190508181036000830152612cad8161256a565b9050919050565b60006020820190508181036000830152612ccd816125d0565b9050919050565b60006020820190508181036000830152612ced81612636565b9050919050565b60006020820190508181036000830152612d0d81612676565b9050919050565b60006020820190508181036000830152612d2d816126dc565b9050919050565b60006020820190508181036000830152612d4d8161271c565b9050919050565b60006020820190508181036000830152612d6d81612782565b9050919050565b60006020820190508181036000830152612d8d816127c2565b9050919050565b60006020820190508181036000830152612dad81612802565b9050919050565b60006020820190508181036000830152612dcd81612842565b9050919050565b60006020820190508181036000830152612ded81612882565b9050919050565b6000602082019050612e0960008301846128c2565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612e3257600080fd5b8060405250919050565b600067ffffffffffffffff821115612e5357600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115612e7b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115612ea357600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000612f3982612f7a565b9050919050565b60008115159050919050565b6000819050919050565b6000612f6182612f2e565b9050919050565b6000612f7382612f2e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612fbc8261300b565b9050919050565b6000612fce82612fd5565b9050919050565b6000612fe082612f7a565b9050919050565b6000612ff282612ff9565b9050919050565b600061300482612f7a565b9050919050565b60006130168261301d565b9050919050565b600061302882612f7a565b9050919050565b82818337600083830152505050565b60005b8381101561305c578082015181840152602081019050613041565b8381111561306b576000848401525b50505050565b600061307c8261308d565b9050919050565b6000819050919050565b6000613098826130ba565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b6130d081612f2e565b81146130db57600080fd5b50565b6130e781612f40565b81146130f257600080fd5b50565b6130fe81612f4c565b811461310957600080fd5b50565b61311581612f56565b811461312057600080fd5b50565b61312c81612f68565b811461313757600080fd5b50565b61314381612f9a565b811461314e57600080fd5b5056fea164736f6c634300060c000a"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": "0x9B950aa30575F3d1E33bd0b2DD0AF4DE496F39F5",
      "10": null,
      "14": null,
      "42": "0x9B950aa30575F3d1E33bd0b2DD0AF4DE496F39F5",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0x9B950aa30575F3d1E33bd0b2DD0AF4DE496F39F5",
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b50611740806100206000396000f3fe6080604052600436106100295760003560e01c80635254f5a91461002e578063fbdfb9071461004a575b600080fd5b61004860048036038101906100439190610f83565b610073565b005b34801561005657600080fd5b50610071600480360381019061006c9190610fad565b610409565b005b600061007d61046a565b90506001816000015414156100be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506100e88260400160208101906100de9190610f31565b8360a00135610497565b600060016100f46104d5565b14156101145782600001602081019061010d9190610f31565b905061012a565b8260200160208101906101279190610f31565b90505b82608001356101376104e8565b141561016f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101908360400160208101906101859190610f31565b828560a001356104f5565b60006101ad8460400160208101906101a89190610f31565b610660565b6101b85760006101be565b8360a001355b905060016101ca6104d5565b1415610272578173ffffffffffffffffffffffffffffffffffffffff1663deace8f58286608001358760600160208101906102059190610f31565b8860a001358961012001358a61014001356000806040518963ffffffff1660e01b815260040161023b9796959493929190611340565b6000604051808303818588803b15801561025457600080fd5b505af1158015610268573d6000803e3d6000fd5b505050505061031e565b8173ffffffffffffffffffffffffffffffffffffffff1663eea0d7b28286608001358760600160208101906102a79190610f31565b8860a001358960c001358a60e001358b61010001358c61012001358d61014001356040518a63ffffffff1660e01b81526004016102eb9897969594939291906113af565b6000604051808303818588803b15801561030457600080fd5b505af1158015610318573d6000803e3d6000fd5b50505050505b8360400160208101906103319190610f31565b73ffffffffffffffffffffffffffffffffffffffff1684606001602081019061035a9190610f31565b73ffffffffffffffffffffffffffffffffffffffff1685608001357f35ac5f1aa56e86e7f2e01562289e5bd298773763192f6433fde30f05932381738760000160208101906103a99190610f31565b8860200160208101906103bc9190610f31565b8960a001358a60c001358b60e001358c61010001358d61012001358e61014001356040516103f19897969594939291906111d7565b60405180910390a45050600081600001819055505050565b610411610698565b600061041b610733565b90508181600001819055507f09b9d2d59be87e537ec1f2f9325f524d04c29f20e2c60ce0c3c6435102c7882a61044f6104e8565b8360405161045e92919061142d565b60405180910390a15050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6104d18282600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610760565b5050565b60006104df610733565b60000154905090565b6000804690508091505090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561052f5761065b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610596576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016105d3929190611177565b60206040518083038186803b1580156105eb57600080fd5b505afa1580156105ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106239190610fd6565b9050818110156106595761065884847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610884565b5b505b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6106a06109e2565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610731576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610728906112a0565b60405180910390fd5b565b6000807f82ac262a0ca73826b2defa6066a5cbdaefe5f87d412e3568bfc9bec85eaa985790508091505090565b600082141561079b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156107df578134146107da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087f565b60003414610818576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061082384610a0f565b905061083184333086610adb565b828161083c86610a0f565b6108469190611488565b1461087d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b600081148061091d575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016108cb929190611177565b60206040518083038186803b1580156108e357600080fd5b505afa1580156108f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091b9190610fd6565b145b61095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095390611320565b60405180910390fd5b6109dd8363095ea7b360e01b848460405160240161097b929190611255565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bbb565b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610ad2578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a7d919061115c565b60206040518083038186803b158015610a9557600080fd5b505afa158015610aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acd9190610fd6565b610ad4565b475b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b42576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ba9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bb584848484610c82565b50505050565b6000610c1d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610d0b9092919063ffffffff16565b9050600081511115610c7d5780806020019051810190610c3d9190610f5a565b610c7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7390611300565b60405180910390fd5b5b505050565b610d05846323b872dd60e01b858585604051602401610ca3939291906111a0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610bbb565b50505050565b6060610d1a8484600085610d23565b90509392505050565b606082471015610d68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5f906112c0565b60405180910390fd5b610d7185610e37565b610db0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da7906112e0565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dd99190611145565b60006040518083038185875af1925050503d8060008114610e16576040519150601f19603f3d011682016040523d82523d6000602084013e610e1b565b606091505b5091509150610e2b828286610e5a565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610e6a57829050610eba565b600083511115610e7d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb1919061127e565b60405180910390fd5b9392505050565b600081359050610ed0816116ee565b92915050565b600081519050610ee581611705565b92915050565b60006101608284031215610efe57600080fd5b81905092915050565b600081359050610f168161171c565b92915050565b600081519050610f2b8161171c565b92915050565b600060208284031215610f4357600080fd5b6000610f5184828501610ec1565b91505092915050565b600060208284031215610f6c57600080fd5b6000610f7a84828501610ed6565b91505092915050565b60006101608284031215610f9657600080fd5b6000610fa484828501610eeb565b91505092915050565b600060208284031215610fbf57600080fd5b6000610fcd84828501610f07565b91505092915050565b600060208284031215610fe857600080fd5b6000610ff684828501610f1c565b91505092915050565b611008816114bc565b82525050565b600061101982611456565b611023818561146c565b9350611033818560208601611516565b80840191505092915050565b61104881611504565b82525050565b600061105982611461565b6110638185611477565b9350611073818560208601611516565b61107c81611578565b840191505092915050565b6000611094602283611477565b915061109f82611589565b604082019050919050565b60006110b7602683611477565b91506110c2826115d8565b604082019050919050565b60006110da601d83611477565b91506110e582611627565b602082019050919050565b60006110fd602a83611477565b915061110882611650565b604082019050919050565b6000611120603683611477565b915061112b8261169f565b604082019050919050565b61113f816114fa565b82525050565b6000611151828461100e565b915081905092915050565b60006020820190506111716000830184610fff565b92915050565b600060408201905061118c6000830185610fff565b6111996020830184610fff565b9392505050565b60006060820190506111b56000830186610fff565b6111c26020830185610fff565b6111cf6040830184611136565b949350505050565b6000610100820190506111ed600083018b610fff565b6111fa602083018a610fff565b6112076040830189611136565b6112146060830188611136565b6112216080830187611136565b61122e60a0830186611136565b61123b60c0830185611136565b61124860e0830184611136565b9998505050505050505050565b600060408201905061126a6000830185610fff565b6112776020830184611136565b9392505050565b60006020820190508181036000830152611298818461104e565b905092915050565b600060208201905081810360008301526112b981611087565b9050919050565b600060208201905081810360008301526112d9816110aa565b9050919050565b600060208201905081810360008301526112f9816110cd565b9050919050565b60006020820190508181036000830152611319816110f0565b9050919050565b6000602082019050818103600083015261133981611113565b9050919050565b600060e082019050611355600083018a611136565b6113626020830189610fff565b61136f6040830188611136565b61137c6060830187611136565b6113896080830186611136565b61139660a0830185610fff565b6113a360c083018461103f565b98975050505050505050565b6000610100820190506113c5600083018b611136565b6113d2602083018a610fff565b6113df6040830189611136565b6113ec6060830188611136565b6113f96080830187611136565b61140660a0830186611136565b61141360c0830185611136565b61142060e0830184611136565b9998505050505050505050565b60006040820190506114426000830185611136565b61144f6020830184611136565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611493826114fa565b915061149e836114fa565b9250828210156114b1576114b0611549565b5b828203905092915050565b60006114c7826114da565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061150f826114fa565b9050919050565b60005b83811015611534578082015181840152602081019050611519565b83811115611543576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6116f7816114bc565b811461170257600080fd5b50565b61170e816114ce565b811461171957600080fd5b50565b611725816114fa565b811461173057600080fd5b5056fea164736f6c6343000804000a"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "IConnext": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_destination",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_asset",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_delegate",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_slippage",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_callData",
            "type": "bytes"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "IWETH": {
    "abi": [
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
        "inputs": [],
        "name": "deposit",
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x"
  },
  "LibAsset": {
    "abi": [],
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x602d6050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000804000a"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e443216bcd038ab1823e4b419d4c6f195e30184d868d9d809f07908d8502743064736f6c63430008110033"
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
      "5": "0xaD3eC76Eb081A96fc3469647AFaBC591833E96d8",
      "10": null,
      "14": null,
      "42": "0x4e0BaFA6f2a4299f4b19b31250970fAdA52a9515",
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0x4e0BaFA6f2a4299f4b19b31250970fAdA52a9515",
      "100": null,
      "114": null,
      "122": "0xdd43fA3fCB57F9F075F48F0FA564162a0eE7fa70",
      "123": "0xdd43fA3fCB57F9F075F48F0FA564162a0eE7fa70",
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0x4e0BaFA6f2a4299f4b19b31250970fAdA52a9515",
      "84531": null,
      "84532": null,
      "421613": "0x4e0BaFA6f2a4299f4b19b31250970fAdA52a9515",
      "534352": null,
      "11155111": null,
      "245022926": "0x4e0BaFA6f2a4299f4b19b31250970fAdA52a9515",
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506103fd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b14610059575b600080fd5b610043610075565b60405161005091906102ab565b60405180910390f35b610073600480360381019061006e91906102f7565b610084565b005b600061007f610098565b905090565b61008c6100cb565b61009581610166565b50565b60006100a261023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6100d361023d565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b906103a7565b60405180910390fd5b565b600061017061023d565b905060008160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828260040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102958261026a565b9050919050565b6102a58161028a565b82525050565b60006020820190506102c0600083018461029c565b92915050565b600080fd5b6102d48161028a565b81146102df57600080fd5b50565b6000813590506102f1816102cb565b92915050565b60006020828403121561030d5761030c6102c6565b5b600061031b848285016102e2565b91505092915050565b600082825260208201905092915050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b6000610391602283610324565b915061039c82610335565b604082019050919050565b600060208201905081810360008301526103c081610384565b905091905056fea2646970667358221220f36d06e82e43b03b644ee35505424cb4798ec509840fa5dd4ab3863b4ebd66b364736f6c63430008110033"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "56": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "65": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "66": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "69": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "97": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "100": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "114": null,
      "122": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "123": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "137": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "250": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "420": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1001": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1284": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "1287": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4002": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "4386": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "5000": null,
      "6666": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "8217": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "8453": null,
      "10200": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42161": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42170": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "42220": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "43113": "0xab648d198E2B9C415BE9Eac7d3C554ead7a2C1A1",
      "43114": "0xab648d198E2B9C415BE9Eac7d3C554ead7a2C1A1",
      "44787": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "59144": null,
      "80001": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "84531": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "84532": null,
      "421613": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
      "534352": null,
      "11155111": null,
      "245022926": "0xB6900522DC23F3cdAeA61bf0Ca17a672b8Dbe312",
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
      "14": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "56": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "65": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "66": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "69": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "97": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "100": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "114": null,
      "122": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "123": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "137": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "250": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "420": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1001": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1284": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "1287": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4002": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4386": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "5000": null,
      "6666": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "8217": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "8453": null,
      "10200": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42161": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42170": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42220": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "43113": "0x3383718baBE5B3bC9463bA90E4Db26b41EaAb286",
      "43114": "0x3383718baBE5B3bC9463bA90E4Db26b41EaAb286",
      "44787": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "59144": null,
      "80001": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "84531": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "84532": null,
      "421613": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "534352": null,
      "11155111": null,
      "245022926": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
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
      "14": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "56": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "65": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "66": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "69": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "97": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "100": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "114": null,
      "122": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "123": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "137": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "250": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "420": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1001": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1284": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1287": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4002": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "4386": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "5000": null,
      "6666": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "8217": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "8453": null,
      "10200": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42161": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42170": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "42220": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "43113": "0xD85FcBEe85B58FF4c82c1d18387F3A3CFFb2Cf08",
      "43114": "0xD85FcBEe85B58FF4c82c1d18387F3A3CFFb2Cf08",
      "44787": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "59144": null,
      "80001": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "84531": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "84532": null,
      "421613": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "534352": null,
      "11155111": null,
      "245022926": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1313161554": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa",
      "1313161555": "0x7EB3A038F25B9F32f8e19A7F0De83D4916030eFa"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506144d1806100616000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806390482d72116100b8578063d0f710d61161007c578063d0f710d61461075e578063da9fc1ae146107f7578063db63f5821461083b578063e1e382ce1461089f578063e5c7278f14610958578063f4876c7414610a1b57610142565b806390482d7214610545578063a526d83b146105fe578063bb890d3f14610642578063cade6a5d146106bc578063d089e11a1461072a57610142565b80631a8414031161010a5780631a841403146103515780633164b5e1146103bf57806334d323a414610419578063392e53cd1461049d57806343013c24146104bd578063714041561461050157610142565b80630900f010146101475780630c68ba211461018b57806311464fbe146101e5578063116191b614610219578063124e9eb31461024d575b600080fd5b6101896004803603602081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7f565b005b6101cd600480360360208110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b60405180821515815260200191505060405180910390f35b6101ed610b83565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610221610ba9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103396004803603606081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111640100000000831117156102d457600080fd5b9091929391929390803590602001906401000000008111156102f557600080fd5b82018360208201111561030757600080fd5b8035906020019184600183028401116401000000008311171561032957600080fd5b9091929391929390505050610bcf565b60405180821515815260200191505060405180910390f35b6103bd6004803603606081101561036757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b610401600480360360208110156103d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef3565b60405180821515815260200191505060405180910390f35b6104856004803603606081101561042f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4c565b60405180821515815260200191505060405180910390f35b6104a561103a565b60405180821515815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611092565b005b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110aa565b005b6105fc6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460208302840111640100000000831117156105ac57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611370565b005b6106406004803603602081101561061457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611508565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115b5565b60405180821515815260200191505060405180910390f35b6106fe600480360360208110156106d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107326115db565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107df6004803603604081101561077457600080fd5b81019080803590602001909291908035906020019064010000000081111561079b57600080fd5b8201836020820111156107ad57600080fd5b803590602001918460018302840111640100000000831117156107cf57600080fd5b9091929391929390505050611601565b60405180821515815260200191505060405180910390f35b6108396004803603602081101561080d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165a565b005b61089d6004803603604081101561085157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611670565b005b610940600480360360608110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108fc57600080fd5b82018360208201111561090e57600080fd5b8035906020019184600183028401116401000000008311171561093057600080fd5b9091929391929390505050611905565b60405180821515815260200191505060405180910390f35b610a196004803603608081101561096e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109d557600080fd5b8201836020820111156109e757600080fd5b80359060200191846001830284011164010000000083111715610a0957600080fd5b9091929391929390505050611971565b005b610a7d60048036036040811015610a3157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b005b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b610b2b816001611d0d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c7d86610c7885858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c6a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e4e565b611fb790919063ffffffff16565b612087565b905095945050505050565b610c918361223e565b50610c9b83612685565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2f57610d29833283600067ffffffffffffffff81118015610cee57600080fd5b506040519080825280601f01601f191660200182016040528015610d215781602001600182028036833780820191505090505b506000612786565b50610e5d565b6060610dd38484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000612786565b9050600081511115610e5b57808060200190516020811015610df457600080fd5b8101908080519060200190929190505050610e5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061440a6035913960400191505060405180910390fd5b5b505b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009050610f5d8585612087565b15610f6b576001905061102f565b61102c83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050612c5490919063ffffffff16565b90505b809150509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b61109b8161223e565b506110a7816001612ca3565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661114b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156111ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180614318602f913960400191505060405180910390fd5b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114a2848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050612f05565b6114ac3083612f5d565b6114b581612f77565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806143e46026913960400191505060405180910390fd5b6115b281612fbb565b50565b60006115c18383612087565b905092915050565b60006115d4826131e2565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116518484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613238565b90509392505050565b6116638161223e565b5061166d81612685565b50565b600061167b8361223e565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806143b9602b913960400191505060405180910390fd5b6117b9600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b61180e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806142b7602c913960400191505060405180910390fd5b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60006119678561196285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611fb790919063ffffffff16565b612087565b9050949350505050565b61197a8561223e565b5061198485612685565b6119d685858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001612786565b505050505050565b6119e78261223e565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180614498602d913960400191505060405180910390fd5b611b25600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b15611b7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d81526020018061446b602d913960400191505060405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b81526020018061421e603b913960400191505060405180910390fd5b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015611e4a577f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b6000611e5a82516132b8565b826040516020018082805190602001908083835b60208310611e915780518252602082019150602081019050602083039250611e6e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b60208310611f235780518252602082019150602081019050602083039250611f00565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611f745780518252602082019150602081019050602083039250611f51565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b6000806000905060418351141561207d5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015611ff857601b810190505b601b8160ff16148061200d5750601c8160ff16145b156120795760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561206c573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156121ac576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154149050612234565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141561223357612202836131e2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161490505b5b8091505092915050565b6000806122496133ff565b9050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156123c0576000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146123bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b61267c565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541461245d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506124aa81613410565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461252d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142596038913960400191505060405180910390fd5b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b80915050919050565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661278357612726600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546001613606565b506001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b6060600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561280e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806143476025913960400191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061443f602c913960400191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612918576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806142916026913960400191505060405180910390fd5b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129aa57808201518184015260208101905061298f565b50505050905090810190601f1680156129d75780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156129f857600080fd5b505af1158015612a0c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015612a3657600080fd5b8101908080516040519392919084640100000000821115612a5657600080fd5b83820191506020820185811115612a6c57600080fd5b8251866001820283011164010000000082111715612a8957600080fd5b8083526020830192505050908051906020019080838360005b83811015612abd578082015181840152602081019050612aa2565b50505050905090810190601f168015612aea5780820380516001836020036101000a031916815260200191505b5060405250505090508215612c47577f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba1578082015181840152602081019050612b86565b50505050905090810190601f168015612bce5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c07578082015181840152602081019050612bec565b50505050905090810190601f168015612c345780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15b8091505095945050505050565b60008060009050836000015115612c9957600084602001511415612c7b5760019050612c98565b6000831415612c8d5760019050612c97565b8284602001511190505b5b5b8091505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d2257600080fd5b505afa158015612d36573d6000803e3d6000fd5b505050506040513d6020811015612d4c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415612dca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061438e602b913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b505050508015612f01577feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5050565b600081511415612f1d57612f1832612fbb565b612f5a565b60008151905060005b81811015612f5757612f4a838281518110612f3d57fe5b6020026020010151612fbb565b8080600101915050612f26565b50505b50565b612f6882600061375a565b612f73816000611d0d565b5050565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561305e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561311d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905061323081613410565b915050919050565b60008061324e8385611fb790919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006132b18243612c54565b9050919050565b60606000821415613300576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506133fa565b600082905060005b6000821461332a578080600101915050600a828161332257fe5b049150613308565b60608167ffffffffffffffff8111801561334357600080fd5b506040519080825280601f01601f1916602001820160405280156133765781602001600182028036833780820191505090505b50905060006001830390508593505b600084146133f257600a848161339757fe5b0660300160f81b828280600190039350815181106133b157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816133ea57fe5b049350613385565b819450505050505b919050565b600061340b601461389b565b905090565b600060606040518060200161342490613a8c565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b602083106134be578051825260208201915060208101905060208303925061349b565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401955050505050506040516020818303038152906040529050600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c92505050919050565b60008083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161365c90613a8c565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f59050801580156136b9573d6000803e3d6000fd5b5090508215613750577f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156137e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806142e36035913960400191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015613897577f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b600080600090506138aa613930565b1561392357600083600036905003905061391b600036839060148501926138d393929190613a99565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506139f3565b915050613927565b3390505b80915050919050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156139ec57602c600036905010156139e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061436c6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114613a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b61075180613acd83390190565b60008085851115613aa957600080fd5b83861115613ab657600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bc2b5f2dd5fb2d16c42ba7ec07a996cd23388cc2c0847428792af17b562b998064736f6c63430008110033"
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
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": null,
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": null,
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
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
    "addresses": {
      "1": null,
      "3": null,
      "4": null,
      "5": null,
      "10": null,
      "14": null,
      "42": null,
      "56": null,
      "65": null,
      "66": null,
      "69": null,
      "97": "0x411180C512206C5217a742bF998A601b367C81Ba",
      "100": null,
      "114": null,
      "122": null,
      "123": null,
      "137": null,
      "250": null,
      "420": null,
      "1001": null,
      "1284": null,
      "1287": null,
      "4002": null,
      "4386": null,
      "5000": null,
      "6666": null,
      "8217": null,
      "8453": null,
      "10200": null,
      "42161": null,
      "42170": null,
      "42220": null,
      "43113": null,
      "43114": null,
      "44787": null,
      "59144": null,
      "80001": "0x411180C512206C5217a742bF998A601b367C81Ba",
      "84531": null,
      "84532": null,
      "421613": null,
      "534352": null,
      "11155111": null,
      "245022926": null,
      "1313161554": null,
      "1313161555": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506125df806100206000396000f3fe6080604052600436106100915760003560e01c8063498ee46911610059578063498ee469146101925780634be85c35146101bb578063618c3f29146101e4578063ab8236f314610221578063b8c06ccc1461024a57610091565b80631f8097fb14610096578063217aabb7146100b25780632a8dcdb7146100db57806342d910c614610118578063430dbc3a14610155575b600080fd5b6100b060048036038101906100ab91906117a5565b610273565b005b3480156100be57600080fd5b506100d960048036038101906100d49190611961565b610734565b005b3480156100e757600080fd5b5061010260048036038101906100fd9190611859565b61078c565b60405161010f9190611d9e565b60405180910390f35b34801561012457600080fd5b5061013f600480360381019061013a919061180a565b610824565b60405161014c9190612049565b60405180910390f35b34801561016157600080fd5b5061017c600480360381019061017791906117ce565b610936565b6040516101899190611eef565b60405180910390f35b34801561019e57600080fd5b506101b960048036038101906101b49190611740565b6109b5565b005b3480156101c757600080fd5b506101e260048036038101906101dd91906116ee565b610c66565b005b3480156101f057600080fd5b5061020b60048036038101906102069190611961565b610d5f565b6040516102189190612049565b60405180910390f35b34801561022d57600080fd5b50610248600480360381019061024391906118a8565b610d9e565b005b34801561025657600080fd5b50610271600480360381019061026c9190611859565b610f1c565b005b600061027d610fe6565b90506001816000015414156102be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506000826000015111610306576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16826020015173ffffffffffffffffffffffffffffffffffffffff1614806103755750600073ffffffffffffffffffffffffffffffffffffffff16826040015173ffffffffffffffffffffffffffffffffffffffff16145b806103b05750600073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b806103eb5750600073ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b15610422576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061042c611013565b905060006104508260000160149054906101000a900461ffff168560200151610936565b905060008161ffff161415610491576040517f7790ca9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104a585606001518660400151610936565b905060006104e0866060015187608001518660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610824565b905060006104f18760000151610d5f565b905060008760a0015160405160200161050a9190611c9f565b6040516020818303038152906040529050600088608001516040516020016105329190611cd1565b604051602081830303815290604052905061057833308b600001518c6020015173ffffffffffffffffffffffffffffffffffffffff16611040909392919063ffffffff16565b6105cf8760000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a600001518b6020015173ffffffffffffffffffffffffffffffffffffffff166110c99092919063ffffffff16565b8660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fbf10fc858b606001518989338f600001518a604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152508b8b6040518b63ffffffff1660e01b815260040161069899989796959493929190611fa7565b6000604051808303818588803b1580156106b157600080fd5b505af11580156106c5573d6000803e3d6000fd5b50505050507f7a72e6f4a3d77f8a5a6c536a973421c5bf00107f9aec7995661537673b8be08789602001518a60400151338c608001518d600001518e6060015160405161071796959493929190611e1b565b60405180910390a150505050505050600081600001819055505050565b61073c611227565b6000610746611013565b90508181600201819055507f45934903f6b10aff9d3435b8362d284d95d14ca68e8554f05f04c7856a6003c0826040516107809190612049565b60405180910390a15050565b600080610797611013565b90508261ffff168160030160008761ffff1661ffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1661ffff161461081757600061081a565b60015b9150509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff16630a512369866001876040516020016108579190611c9f565b604051602081830303815290604052604051806060016040528062030d408152602001600081526020016040518060400160405280600281526020017f30780000000000000000000000000000000000000000000000000000000000008152508152506040518563ffffffff1660e01b81526004016108d99493929190611f41565b604080518083038186803b1580156108f057600080fd5b505afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092891906119b3565b509050809150509392505050565b600080610941611013565b90508060030160008561ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900461ffff1691505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a1c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a24611227565b6000610a2e611013565b9050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548161ffff021916908361ffff16021790555060328160020181905550610abd600173a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486001610f1c565b610ade600173dac17f958d2ee523a2206206994597c13d831ec76002610f1c565b610aff60027355d398326f99059ff775485246999027b31979556002610f1c565b610b20600273e9e7cea3dedca5984780bafc599bd69add087d566005610f1c565b610b41600673b97ef9ef8734c71904d8002f8b6bc66dd9c48a6e6001610f1c565b610b626006739702230a8ea53601f5cd2dc00fdbc13d4df4a8c76002610f1c565b610b836009732791bca1f2de4661ed88a30c99a7a9449aa841746001610f1c565b610ba4600973c2132d05d31c914a87c6611c10748aeb04b58e8f6002610f1c565b610bc5600a73ff970a61a04b1ca14834a43f5de4533ebddb5cc86001610f1c565b610be6600a73fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb96002610f1c565b610c07600b737f5c764cbc14f9669b88837ca1490cca17c316076001610f1c565b610c28600c7304068da6c83afcfa0e13ba15a6696662335d5b756001610f1c565b7fc8ec31998a27444f477c01de93c393769fd4fc017fb63163f71f8a8ab72ccd508383604051610c59929190611d4c565b60405180910390a1505050565b610c6e611227565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cd5576040517f3911c65500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610cdf611013565b9050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9ac04272c4559bf7459414abb5568dc1df58ab649f0af4afd1510074f5cc2fec82604051610d539190611cd1565b60405180910390a15050565b600080610d6a611013565b90506127108160020154612710610d819190612199565b84610d8c919061213f565b610d96919061210e565b915050919050565b6000610da8611013565b90508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e33576040517fdade3c7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082806020019051810190610e499190611717565b90508473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401610e86929190611d75565b602060405180830381600087803b158015610ea057600080fd5b505af1158015610eb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed8919061177c565b507f827e3293895509ef037b7438d4e009f37ad7b2562a14695d9dfd9cb0659842188585604051610f0a929190611d75565b60405180910390a15050505050505050565b610f24611227565b6000610f2e611013565b9050818160030160008661ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548161ffff021916908361ffff1602179055507f85adba3a23dc45072c12199244adfbf4c1d736a46ac453eb732f4e5158af5867848484604051610fd893929190611f0a565b60405180910390a150505050565b6000807fc59b5acc5a6673a6c49ca2de898f87adbd9fdfdff36f689476b1c9e0c50964b490508091505090565b6000807fbaeadb48cbcf0176d6c6ac156b0140abe0fb28a100a9a6a8b5df37e55693b1c890508091505090565b6110c3846323b872dd60e01b85858560405160240161106193929190611d15565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b50505050565b6000811480611162575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401611110929190611cec565b60206040518083038186803b15801561112857600080fd5b505afa15801561113c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611160919061198a565b145b6111a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119890611ecf565b60405180910390fd5b6112228363095ea7b360e01b84846040516024016111c0929190611d75565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112c2565b505050565b61122f611389565b60040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b790611ddb565b60405180910390fd5b565b6000611324826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113b69092919063ffffffff16565b90506000815111156113845780806020019051810190611344919061177c565b611383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137a90611eaf565b60405180910390fd5b5b505050565b6000807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90508091505090565b60606113c584846000856113ce565b90509392505050565b606082471015611413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140a90611dfb565b60405180910390fd5b61141c856114e2565b61145b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145290611e8f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114849190611cba565b60006040518083038185875af1925050503d80600081146114c1576040519150601f19603f3d011682016040523d82523d6000602084013e6114c6565b606091505b50915091506114d6828286611505565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561151557829050611565565b6000835111156115285782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155c9190611db9565b60405180910390fd5b9392505050565b600061157f61157a84612089565b612064565b90508281526020810184848401111561159757600080fd5b6115a2848285612266565b509392505050565b6000813590506115b98161255f565b92915050565b6000815190506115ce81612576565b92915050565b6000815190506115e38161258d565b92915050565b600082601f8301126115fa57600080fd5b813561160a84826020860161156c565b91505092915050565b600060c0828403121561162557600080fd5b61162f60c0612064565b9050600061163f848285016116c4565b6000830152506020611653848285016115aa565b6020830152506040611667848285016115aa565b604083015250606061167b848285016116af565b606083015250608061168f848285016115aa565b60808301525060a06116a3848285016115aa565b60a08301525092915050565b6000813590506116be816125a4565b92915050565b6000813590506116d3816125bb565b92915050565b6000815190506116e8816125bb565b92915050565b60006020828403121561170057600080fd5b600061170e848285016115aa565b91505092915050565b60006020828403121561172957600080fd5b6000611737848285016115bf565b91505092915050565b6000806040838503121561175357600080fd5b6000611761858286016115aa565b9250506020611772858286016116af565b9150509250929050565b60006020828403121561178e57600080fd5b600061179c848285016115d4565b91505092915050565b600060c082840312156117b757600080fd5b60006117c584828501611613565b91505092915050565b600080604083850312156117e157600080fd5b60006117ef858286016116af565b9250506020611800858286016115aa565b9150509250929050565b60008060006060848603121561181f57600080fd5b600061182d868287016116af565b935050602061183e868287016115aa565b925050604061184f868287016115aa565b9150509250925092565b60008060006060848603121561186e57600080fd5b600061187c868287016116af565b935050602061188d868287016115aa565b925050604061189e868287016116af565b9150509250925092565b60008060008060008060c087890312156118c157600080fd5b60006118cf89828a016116af565b965050602087013567ffffffffffffffff8111156118ec57600080fd5b6118f889828a016115e9565b955050604061190989828a016116c4565b945050606061191a89828a016115aa565b935050608061192b89828a016116c4565b92505060a087013567ffffffffffffffff81111561194857600080fd5b61195489828a016115e9565b9150509295509295509295565b60006020828403121561197357600080fd5b6000611981848285016116c4565b91505092915050565b60006020828403121561199c57600080fd5b60006119aa848285016116d9565b91505092915050565b600080604083850312156119c657600080fd5b60006119d4858286016116d9565b92505060206119e5858286016116d9565b9150509250929050565b6119f8816121df565b82525050565b611a07816121cd565b82525050565b611a1e611a19826121cd565b6122d9565b82525050565b611a2d816121f1565b82525050565b6000611a3e826120ba565b611a4881856120d0565b9350611a58818560208601612275565b611a618161238a565b840191505092915050565b6000611a77826120ba565b611a8181856120e1565b9350611a91818560208601612275565b611a9a8161238a565b840191505092915050565b6000611ab0826120ba565b611aba81856120f2565b9350611aca818560208601612275565b80840191505092915050565b611adf81612242565b82525050565b6000611af0826120c5565b611afa81856120fd565b9350611b0a818560208601612275565b611b138161238a565b840191505092915050565b6000611b2b6022836120fd565b9150611b36826123a8565b604082019050919050565b6000611b4e6002836120e1565b9150611b59826123f7565b602082019050919050565b6000611b716026836120fd565b9150611b7c82612420565b604082019050919050565b6000611b946008836120fd565b9150611b9f8261246f565b602082019050919050565b6000611bb7601d836120fd565b9150611bc282612498565b602082019050919050565b6000611bda602a836120fd565b9150611be5826124c1565b604082019050919050565b6000611bfd6036836120fd565b9150611c0882612510565b604082019050919050565b6000606083016000830151611c2b6000860182611c81565b506020830151611c3e6020860182611c81565b5060408301518482036040860152611c568282611a33565b9150508091505092915050565b611c6c816121fd565b82525050565b611c7b81612254565b82525050565b611c8a8161222b565b82525050565b611c998161222b565b82525050565b6000611cab8284611a0d565b60148201915081905092915050565b6000611cc68284611aa5565b915081905092915050565b6000602082019050611ce660008301846119fe565b92915050565b6000604082019050611d0160008301856119fe565b611d0e60208301846119fe565b9392505050565b6000606082019050611d2a60008301866119fe565b611d3760208301856119fe565b611d446040830184611c90565b949350505050565b6000604082019050611d6160008301856119fe565b611d6e6020830184611c63565b9392505050565b6000604082019050611d8a60008301856119fe565b611d976020830184611c90565b9392505050565b6000602082019050611db36000830184611a24565b92915050565b60006020820190508181036000830152611dd38184611ae5565b905092915050565b60006020820190508181036000830152611df481611b1e565b9050919050565b60006020820190508181036000830152611e1481611b64565b9050919050565b600060e0820190508181036000830152611e3481611b87565b9050611e4360208301896119fe565b611e5060408301886119fe565b611e5d60608301876119fe565b611e6a60808301866119fe565b611e7760a0830185611c90565b611e8460c0830184611c63565b979650505050505050565b60006020820190508181036000830152611ea881611baa565b9050919050565b60006020820190508181036000830152611ec881611bcd565b9050919050565b60006020820190508181036000830152611ee881611bf0565b9050919050565b6000602082019050611f046000830184611c63565b92915050565b6000606082019050611f1f6000830186611c63565b611f2c60208301856119fe565b611f396040830184611c63565b949350505050565b600060a082019050611f566000830187611c63565b611f636020830186611ad6565b8181036040830152611f758185611a6c565b90508181036060830152611f8881611b41565b90508181036080830152611f9c8184611c13565b905095945050505050565b600061012082019050611fbd600083018c611c63565b611fca602083018b611c72565b611fd7604083018a611c72565b611fe460608301896119ef565b611ff16080830188611c90565b611ffe60a0830187611c90565b81810360c08301526120108186611c13565b905081810360e08301526120248185611a6c565b90508181036101008301526120398184611a6c565b90509a9950505050505050505050565b600060208201905061205e6000830184611c90565b92915050565b600061206e61207f565b905061207a82826122a8565b919050565b6000604051905090565b600067ffffffffffffffff8211156120a4576120a361235b565b5b6120ad8261238a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006121198261222b565b91506121248361222b565b9250826121345761213361232c565b5b828204905092915050565b600061214a8261222b565b91506121558361222b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561218e5761218d6122fd565b5b828202905092915050565b60006121a48261222b565b91506121af8361222b565b9250828210156121c2576121c16122fd565b5b828203905092915050565b60006121d88261220b565b9050919050565b60006121ea8261220b565b9050919050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061224d82612235565b9050919050565b600061225f826121fd565b9050919050565b82818337600083830152505050565b60005b83811015612293578082015181840152602081019050612278565b838111156122a2576000848401525b50505050565b6122b18261238a565b810181811067ffffffffffffffff821117156122d0576122cf61235b565b5b80604052505050565b60006122e4826122eb565b9050919050565b60006122f68261239b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60008201527f6572000000000000000000000000000000000000000000000000000000000000602082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f7374617267617465000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b612568816121cd565b811461257357600080fd5b50565b61257f816121df565b811461258a57600080fd5b50565b612596816121f1565b81146125a157600080fd5b50565b6125ad816121fd565b81146125b857600080fd5b50565b6125c48161222b565b81146125cf57600080fd5b5056fea164736f6c6343000804000a"
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
      "14": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "56": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "65": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "66": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "69": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "97": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "100": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "114": null,
      "122": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "123": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "137": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "250": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "420": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1001": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1284": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1287": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4002": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4386": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "5000": null,
      "6666": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "8217": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "8453": null,
      "10200": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42161": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42170": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42220": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "43113": "0xc56CaC621503C364acdfD37aa581991c7E1fa3fa",
      "43114": "0xc56CaC621503C364acdfD37aa581991c7E1fa3fa",
      "44787": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "59144": null,
      "80001": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "84531": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "84532": null,
      "421613": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "534352": null,
      "11155111": null,
      "245022926": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1313161554": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "1313161555": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616"
    },
    "byteCode": "0x60806040523480156200001157600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600b81526020017f5772617070656420576569000000000000000000000000000000000000000000815250600190805190602001906200009f929190620000f4565b506040518060400160405280600481526020017f575745490000000000000000000000000000000000000000000000000000000081525060029080519060200190620000ed929190620000f4565b506200019a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013757805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001675782518255916020019190600101906200014a565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6120b080620001aa6000396000f3fe6080604052600436106101235760003560e01c806356a3b64b116100a0578063a9059cbb11610064578063a9059cbb1461065f578063b760faf9146106d0578063ca9add8f14610714578063dd62ed3e14610765578063f55647e0146107ea5761013b565b806356a3b64b146104d557806370a08231146104ec578063834ff73914610551578063853828b6146105b857806395d89b41146105cf5761013b565b806323b872dd116100e757806323b872dd146103085780632e1a7d4d14610399578063313ce567146103d4578063392e53cd14610402578063462d0b2e1461042f5761013b565b806306fdde0314610140578063095ea7b3146101d0578063116191b61461024157806318160ddd14610282578063205c2878146102ad5761013b565b3661013b57610139610133610801565b34610810565b005b600080fd5b34801561014c57600080fd5b50610155610a26565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019557808201518184015260208101905061017a565b50505050905090810190601f1680156101c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101dc57600080fd5b50610229600480360360408110156101f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac4565b60405180821515815260200191505060405180910390f35b34801561024d57600080fd5b50610256610ae2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b50610297610b08565b6040518082815260200191505060405180910390f35b3480156102b957600080fd5b50610306600480360360408110156102d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b0e565b005b34801561031457600080fd5b506103816004803603606081101561032b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b24565b60405180821515815260200191505060405180910390f35b3480156103a557600080fd5b506103d2600480360360208110156103bc57600080fd5b8101908080359060200190929190505050610be1565b005b3480156103e057600080fd5b506103e9610bfd565b604051808260ff16815260200191505060405180910390f35b34801561040e57600080fd5b50610417610c10565b60405180821515815260200191505060405180910390f35b34801561043b57600080fd5b506104d36004803603604081101561045257600080fd5b810190808035906020019064010000000081111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460208302840111640100000000831117156104a357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c66565b005b3480156104e157600080fd5b506104ea610e05565b005b3480156104f857600080fd5b5061053b6004803603602081101561050f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e17565b6040518082815260200191505060405180910390f35b34801561055d57600080fd5b506105a06004803603602081101561057457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e60565b60405180821515815260200191505060405180910390f35b3480156105c457600080fd5b506105cd610eb6565b005b3480156105db57600080fd5b506105e4610f0f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610624578082015181840152602081019050610609565b50505050905090810190601f1680156106515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561066b57600080fd5b506106b86004803603604081101561068257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fad565b60405180821515815260200191505060405180910390f35b610712600480360360208110156106e657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b34801561072057600080fd5b506107636004803603602081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fd8565b005b34801561077157600080fd5b506107d46004803603604081101561078857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b6040518082815260200191505060405180910390f35b3480156107f657600080fd5b506107ff6110b9565b005b600061080b61120f565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610896576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fb66026913960400191505060405180910390fd5b6000811161090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c75650081525060200191505060405180910390fd5b61095e81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b68160045461122090919063ffffffff16565b6004819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610abc5780601f10610a9157610100808354040283529160200191610abc565b820191906000526020600020905b815481529060010190602001808311610a9f57829003601f168201915b505050505081565b6000610ad8610ad1610801565b84846112a8565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b610b20610b19610801565b838361149f565b5050565b600080610b2f610801565b9050610b3c858585611538565b610bd58582610bd086600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b6112a8565b60019150509392505050565b610bfa610bec610801565b610bf4610801565b8361149f565b50565b600360009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611ec8602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008383905014610daa57600083839050905060005b81811015610da757610d9a858583818110610d7857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166115d8565b8080600101915050610d61565b50505b610db381611723565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b610e15610e10610801565b6115d8565b565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000610ec0610801565b9050610f0c8182600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b50565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b505050505081565b6000610fc1610fba610801565b8484611538565b6001905092915050565b610fd58134610810565b50565b6000610fe2610801565b905061102e8183600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b5050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006110c3610801565b9050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611167576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806120066027913960400191505060405180910390fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f09881604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600061121b6028611767565b905090565b60008082840190508381101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561132e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611f8b602b913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611f416029913960400191505060405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6114a983826117fc565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061202d6025913960400191505060405180910390fd5b505050565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561159a5761159583838361149f565b6115a6565b6115a58383836119b6565b5b505050565b60006115d08383604051806060016040528060218152602001611f6a60219139611c56565b905092915050565b600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561167b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ef76028913960400191505060405180910390fd5b6001600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee0714281604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009050611776611d10565b156117ef5760008360003690500390506117e76000368390601485019261179f93929190611e6c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611dd3565b9150506117f3565b3390505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611882576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ea06028913960400191505060405180910390fd5b6118ee8160405180606001604052806026815260200161205260269139600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c569092919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611946816004546115ab90919063ffffffff16565b600481905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612078602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611fdc602a913960400191505060405180910390fd5b611b1481600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ba981600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cc8578082015181840152602081019050611cad565b50505050905090810190601f168015611cf55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611dcc57602c60003690501015611dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611f1f6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114611e4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b60008085851115611e7c57600080fd5b83861115611e8957600080fd5b600185028301915084860390509450949250505056fe4552433230546f6b656e3a2063616e6e6f74206275726e2066726f6d203078302061646472657373496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a657257726170706564576569546f6b656e3a20636f6e73756d657220616c72656164792065786973747347617465776179526563697069656e743a20696e76616c6964206d73672e646174614552433230546f6b656e3a2063616e6e6f7420617070726f766520746f203078302061646472657373536166654d6174684c69623a207375627472616374696f6e206f766572666c6f774552433230546f6b656e3a2063616e6e6f7420617070726f76652066726f6d2030783020616464726573734552433230546f6b656e3a2063616e6e6f74206d696e7420746f2030783020616464726573734552433230546f6b656e3a2063616e6e6f74207472616e7366657220746f20307830206164647265737357726170706564576569546f6b656e3a20636f6e73756d657220646f65736e277420657869737457726170706564576569546f6b656e3a207472616e73616374696f6e2072657665727465644552433230546f6b656e3a206275726e2076616c756520657863656564732062616c616e63654552433230546f6b656e3a2063616e6e6f74207472616e736665722066726f6d203078302061646472657373a164736f6c634300060c000a"
  }
};
