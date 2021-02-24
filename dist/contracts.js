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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x6080604052348015600f57600080fd5b5060908061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637b10399914602d575b600080fd5b6033605f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          }
        ],
        "name": "getNode",
        "outputs": [
          {
            "internalType": "address",
            "name": "nodeAddr",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "nodeOwner",
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
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainNameHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainVersionHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainSalt",
            "type": "bytes32"
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
            "internalType": "address",
            "name": "addr",
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
        "inputs": [],
        "name": "typedDataDomainSeparator",
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
      "3": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "4": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "5": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "42": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "56": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "77": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "97": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "100": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "6666": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926",
      "9999": "0xEAC5f4733A2CF6d0230342fDF62ed608e2993926"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613951806100616000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636df0cf42116100ad578063a91ee0dc11610071578063a91ee0dc14610340578063bd106a021461035c578063c8cc2aee1461037a578063d0f710d614610396578063d5fa2b00146103c65761012c565b80636df0cf421461029e57806371404156146102ce5780637b103999146102ea5780637d0e0e7e14610308578063a526d83b146103245761012c565b80633b3b57de116100f45780633b3b57de146101e957806346386f731461021957806350c946fe1461023557806355800f87146102665780635773fd1d146102825761012c565b806301ffc9a7146101315780630c68ba2114610161578063116191b61461019157806329ae6a7e146101af578063392e53cd146101cb575b600080fd5b61014b600480360381019061014691906128b7565b6103e2565b60405161015891906132f1565b60405180910390f35b61017b6004803603810190610176919061273c565b610444565b60405161018891906132f1565b60405180910390f35b610199610499565b6040516101a69190613269565b60405180910390f35b6101c960048036038101906101c4919061278e565b6104bf565b005b6101d3610751565b6040516101e091906132f1565b60405180910390f35b61020360048036038101906101fe919061278e565b6107a9565b6040516102109190613269565b60405180910390f35b610233600480360381019061022e91906127f3565b6107e9565b005b61024f600480360381019061024a919061278e565b610c54565b60405161025d9291906132c8565b60405180910390f35b610280600480360381019061027b919061278e565b610cce565b005b61029c60048036038101906102979190612909565b611040565b005b6102b860048036038101906102b391906129b0565b611261565b6040516102c5919061330c565b60405180910390f35b6102e860048036038101906102e3919061273c565b611289565b005b6102f26114a1565b6040516102ff9190613472565b60405180910390f35b610322600480360381019061031d919061278e565b6114c7565b005b61033e6004803603810190610339919061273c565b6117c7565b005b61035a600480360381019061035591906128e0565b61185e565b005b610364611a87565b604051610371919061330c565b60405180910390f35b610394600480360381019061038f919061278e565b611a8d565b005b6103b060048036038101906103ab919061285f565b611e19565b6040516103bd91906132f1565b60405180910390f35b6103e060048036038101906103db91906127b7565b611e72565b005b60006301ffc9a760e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043d5750633b3b57de60e01b827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006104c9611fae565b90503073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461056f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105669061356d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a906134ad565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c383836040518363ffffffff1660e01b8152600401610670929190613327565b600060405180830381600087803b15801561068a57600080fd5b505af115801561069e573d6000803e3d6000fd5b505050506005600083815260200190815260200160002060000160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556005600083815260200190815260200160002060010160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690557f7803a16d95f9ca635bdec561006625e7444d8a9f8463866643cc03af011779d38282604051610745929190613327565b60405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60006005600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107f3611fae565b9050600061080a610805838888611fbf565b612017565b905061085a8185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612082565b610899576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610890906134cd565b60405180910390fd5b600086866040516020016108ae929190613204565b6040516020818303038152906040528051906020012090503073ffffffffffffffffffffffffffffffffffffffff166005600089815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461096a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109619061354d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a06906134ed565b60405180910390fd5b826005600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59238888306040518463ffffffff1660e01b8152600401610ac393929190613395565b600060405180830381600087803b158015610add57600080fd5b505af1158015610af1573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a82306040518363ffffffff1660e01b8152600401610b52929190613327565b600060405180830381600087803b158015610b6c57600080fd5b505af1158015610b80573d6000803e3d6000fd5b50505050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c382856040518363ffffffff1660e01b8152600401610be1929190613327565b600060405180830381600087803b158015610bfb57600080fd5b505af1158015610c0f573d6000803e3d6000fd5b50505050807f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd284604051610c439190613269565b60405180910390a250505050505050565b6000806005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005600085815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691509150915091565b6000610cd8611fae565b9050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3836040518263ffffffff1660e01b8152600401610d35919061330c565b60206040518083038186803b158015610d4d57600080fd5b505afa158015610d61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d859190612765565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610df2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de9906135ad565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630178b8bf846040518263ffffffff1660e01b8152600401610e64919061330c565b60206040518083038186803b158015610e7c57600080fd5b505afa158015610e90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb49190612765565b73ffffffffffffffffffffffffffffffffffffffff1614610f0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f019061348d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610faf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa69061364d565b60405180910390fd5b806005600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550817f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2826040516110349190613269565b60405180910390a25050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146110d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c79061352d565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415611182576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611179906135ed565b60405180910390fd5b86600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061120d868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050506120ef565b61121684612147565b61122183838361218b565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516112509190613284565b60405180910390a150505050505050565b600061128261127d836000015184602001518560400151611fbf565b612017565b9050919050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130b906135cd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415611383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137a906136cd565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661140e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114059061366d565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b328260405161149692919061329f565b60405180910390a150565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006114d1611fae565b9050600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611578576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156f9061362d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461161d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116149061360d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b815260040161168f919061330c565b60206040518083038186803b1580156116a757600080fd5b505afa1580156116bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116df9190612765565b73ffffffffffffffffffffffffffffffffffffffff1614611735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172c9061368d565b60405180910390fd5b806005600084815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fc1e082a8c26f27c26e1bf5d0ce7ddd579ec7f6d7eb3ea90d8abd6c40991bae3682826040516117bb929190613327565b60405180910390a15050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611852576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611849906135cd565b60405180910390fd5b61185b816121ed565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166118e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e0906135cd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611959576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611950906135ed565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e19061370d565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdb0239c63d4033dcdd21bd44f8dd479a03efbae12f6bbe27c0a5f923d26514cc600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051611a7c9190613269565b60405180910390a150565b60025481565b6000611a97611fae565b9050600073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b359061362d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611be2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd9906134ad565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3846040518263ffffffff1660e01b8152600401611c54919061330c565b60206040518083038186803b158015611c6c57600080fd5b505afa158015611c80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca49190612765565b73ffffffffffffffffffffffffffffffffffffffff1614611cfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf19061368d565b60405180910390fd5b306005600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631896f70a83306040518363ffffffff1660e01b8152600401611dac929190613327565b600060405180830381600087803b158015611dc657600080fd5b505af1158015611dda573d6000803e3d6000fd5b505050507fcefbe9dbadcf675eef14e23810996ff38541fc26b4dd77cd6724b0eedc96f20082604051611e0d919061330c565b60405180910390a15050565b6000611e698484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612082565b90509392505050565b611e7a611fae565b73ffffffffffffffffffffffffffffffffffffffff166005600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f14906135ad565b60405180910390fd5b806005600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550817f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd282604051611fa29190613269565b60405180910390a25050565b6000611fba602861237c565b905090565b60007f621363c539a3aa1024c8837ca1dc095db03b7f9512b3a95ecb429aae7fd953ed848484604051602001611ff89493929190613350565b6040516020818303038152906040528051906020012090509392505050565b60006040518060400160405280600281526020017f19010000000000000000000000000000000000000000000000000000000000008152506002548360405160200161206593929190613230565b604051602081830303815290604052805190602001209050919050565b600080612098838561241190919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60008151141561210757612102326121ed565b612144565b60008151905060005b818110156121415761213483828151811061212757fe5b60200260200101516121ed565b8080600101915050612110565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60004690507fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac5647284848330866040516020016121cb969594939291906133cc565b6040516020818303038152906040528051906020012060028190555050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561225d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122549061350d565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156122e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122e0906136ad565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a328260405161237192919061329f565b60405180910390a150565b6000806000905061238b6124cc565b156124045760008360003690500390506123fc600036839060148501926123b493929190613781565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612579565b915050612408565b3390505b80915050919050565b600080600090506041835114156124c25760008060006020860151925060408601519150606086015160001a9050601b8160ff16101561245257601b810190505b601b8160ff1614806124675750601c8160ff16145b156124be576001878285856040516000815260200160405260405161248f949392919061342d565b6020604051602081039080840390855afa1580156124b1573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561257257602c6000369050101561256d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125649061358d565b60405180910390fd5b600190505b8091505090565b60008060148351146125c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125b7906136ed565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b6000813590506125ee816138e8565b92915050565b600081519050612603816138e8565b92915050565b60008083601f84011261261b57600080fd5b8235905067ffffffffffffffff81111561263457600080fd5b60208301915083602082028301111561264c57600080fd5b9250929050565b600081359050612662816138ff565b92915050565b60008135905061267781613916565b92915050565b60008083601f84011261268f57600080fd5b8235905067ffffffffffffffff8111156126a857600080fd5b6020830191508360018202830111156126c057600080fd5b9250929050565b6000813590506126d68161392d565b92915050565b6000606082840312156126ee57600080fd5b6126f8606061372d565b90506000612708848285016125df565b600083015250602061271c84828501612653565b602083015250604061273084828501612653565b60408301525092915050565b60006020828403121561274e57600080fd5b600061275c848285016125df565b91505092915050565b60006020828403121561277757600080fd5b6000612785848285016125f4565b91505092915050565b6000602082840312156127a057600080fd5b60006127ae84828501612653565b91505092915050565b600080604083850312156127ca57600080fd5b60006127d885828601612653565b92505060206127e9858286016125df565b9150509250929050565b6000806000806060858703121561280957600080fd5b600061281787828801612653565b945050602061282887828801612653565b935050604085013567ffffffffffffffff81111561284557600080fd5b6128518782880161267d565b925092505092959194509250565b60008060006040848603121561287457600080fd5b600061288286828701612653565b935050602084013567ffffffffffffffff81111561289f57600080fd5b6128ab8682870161267d565b92509250509250925092565b6000602082840312156128c957600080fd5b60006128d784828501612668565b91505092915050565b6000602082840312156128f257600080fd5b6000612900848285016126c7565b91505092915050565b600080600080600080600060c0888a03121561292457600080fd5b60006129328a828b016126c7565b975050602088013567ffffffffffffffff81111561294f57600080fd5b61295b8a828b01612609565b9650965050604061296e8a828b016125df565b945050606061297f8a828b01612653565b93505060806129908a828b01612653565b92505060a06129a18a828b01612653565b91505092959891949750929550565b6000606082840312156129c257600080fd5b60006129d0848285016126dc565b91505092915050565b6129e281613851565b82525050565b6129f1816137b4565b82525050565b612a00816137c6565b82525050565b612a0f816137d2565b82525050565b612a26612a21826137d2565b6138de565b82525050565b612a3581613863565b82525050565b6000612a468261375a565b612a508185613776565b9350612a608185602086016138ab565b80840191505092915050565b6000612a79602483613765565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465207265736f60008301527f6c766572000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612adf602183613765565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f6465206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612b45602983613765565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420677561726469616e2060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b6000612bab602283613765565b91507f454e53436f6e74726f6c6c65723a206c6162656c20616c72656164792074616b60008301527f656e0000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612c11602083613765565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b6000612c51602f83613765565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b6000612cb7601b83613765565b91507f454e53436f6e74726f6c6c65723a20696e76616c6964206e6f646500000000006000830152602082019050919050565b6000612cf7602183613765565b91507f454e53436f6e74726f6c6c65723a206e6f646520646f65736e2774206578697360008301527f74000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612d5d602283613765565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612dc3602b83613765565b91507f454e53436f6e74726f6c6c65723a2063616c6c6572206973206e6f742074686560008301527f206e6f6465206f776e65720000000000000000000000000000000000000000006020830152604082019050919050565b6000612e29602683613765565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612e8f602683613765565b91507f454e53436f6e74726f6c6c65723a2063616e6e6f74207365742030783020726560008301527f67697374727900000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612ef5602583613765565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479207375626d60008301527f69747465640000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612f5b602283613765565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c7265616479206578697360008301527f74730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612fc1602383613765565b91507f454e53436f6e74726f6c6c65723a206e6f646520616c726561647920696e207360008301527f796e6300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613027601f83613765565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000613067602583613765565b91507f454e53436f6e74726f6c6c65723a20696e76616c696420656e73206e6f64652060008301527f6f776e65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006130cd602083613765565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b600061310d601b83613765565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b600061314d601d83613765565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b600061318d602383613765565b91507f454e53436f6e74726f6c6c65723a20726567697374727920616c72656164792060008301527f73657400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6131ef8161383a565b82525050565b6131fe81613844565b82525050565b60006132108285612a15565b6020820191506132208284612a15565b6020820191508190509392505050565b600061323c8286612a3b565b91506132488285612a15565b6020820191506132588284612a15565b602082019150819050949350505050565b600060208201905061327e60008301846129e8565b92915050565b600060208201905061329960008301846129d9565b92915050565b60006040820190506132b460008301856129d9565b6132c160208301846129e8565b9392505050565b60006040820190506132dd60008301856129e8565b6132ea60208301846129e8565b9392505050565b600060208201905061330660008301846129f7565b92915050565b60006020820190506133216000830184612a06565b92915050565b600060408201905061333c6000830185612a06565b61334960208301846129e8565b9392505050565b60006080820190506133656000830187612a06565b61337260208301866129e8565b61337f6040830185612a06565b61338c6060830184612a06565b95945050505050565b60006060820190506133aa6000830186612a06565b6133b76020830185612a06565b6133c460408301846129e8565b949350505050565b600060c0820190506133e16000830189612a06565b6133ee6020830188612a06565b6133fb6040830187612a06565b61340860608301866131e6565b61341560808301856129e8565b61342260a0830184612a06565b979650505050505050565b60006080820190506134426000830187612a06565b61344f60208301866131f5565b61345c6040830185612a06565b6134696060830184612a06565b95945050505050565b60006020820190506134876000830184612a2c565b92915050565b600060208201905081810360008301526134a681612a6c565b9050919050565b600060208201905081810360008301526134c681612ad2565b9050919050565b600060208201905081810360008301526134e681612b38565b9050919050565b6000602082019050818103600083015261350681612b9e565b9050919050565b6000602082019050818103600083015261352681612c04565b9050919050565b6000602082019050818103600083015261354681612c44565b9050919050565b6000602082019050818103600083015261356681612caa565b9050919050565b6000602082019050818103600083015261358681612cea565b9050919050565b600060208201905081810360008301526135a681612d50565b9050919050565b600060208201905081810360008301526135c681612db6565b9050919050565b600060208201905081810360008301526135e681612e1c565b9050919050565b6000602082019050818103600083015261360681612e82565b9050919050565b6000602082019050818103600083015261362681612ee8565b9050919050565b6000602082019050818103600083015261364681612f4e565b9050919050565b6000602082019050818103600083015261366681612fb4565b9050919050565b600060208201905081810360008301526136868161301a565b9050919050565b600060208201905081810360008301526136a68161305a565b9050919050565b600060208201905081810360008301526136c6816130c0565b9050919050565b600060208201905081810360008301526136e681613100565b9050919050565b6000602082019050818103600083015261370681613140565b9050919050565b6000602082019050818103600083015261372681613180565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171561375057600080fd5b8060405250919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000808585111561379157600080fd5b8386111561379e57600080fd5b6001850283019150848603905094509492505050565b60006137bf8261381a565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000613813826137b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061385c82613887565b9050919050565b600061386e82613875565b9050919050565b60006138808261381a565b9050919050565b600061389282613899565b9050919050565b60006138a48261381a565b9050919050565b60005b838110156138c95780820151818401526020810190506138ae565b838111156138d8576000848401525b50505050565b6000819050919050565b6138f1816137b4565b81146138fc57600080fd5b50565b613908816137d2565b811461391357600080fd5b50565b61391f816137dc565b811461392a57600080fd5b50565b61393681613808565b811461394157600080fd5b5056fea164736f6c634300060c000a",
    "typedDataDomainName": "ETHERspot ENS Controller",
    "typedDataDomainVersion": "1"
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
            "internalType": "bytes32",
            "name": "node",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "owner",
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
            "name": "resolver",
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
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "setSubnodeOwner",
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
            "name": "ttl",
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
      "3": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "4": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "5": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "42": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "56": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "77": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "97": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "100": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "6666": "0xF4901936071aA71426aa57629Af5AED68914DC8b",
      "9999": "0xF4901936071aA71426aa57629Af5AED68914DC8b"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000808060001b815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610935806100776000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806314ab90381161005b57806314ab90381461018a57806316a25cbd146101cc5780631896f70a146102185780635b0fc9c3146102665761007d565b80630178b8bf1461008257806302571be3146100da57806306ab592314610132575b600080fd5b6100ae6004803603602081101561009857600080fd5b81019080803590602001909291905050506102b4565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610106600480360360208110156100f057600080fd5b81019080803590602001909291905050506102f3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101886004803603606081101561014857600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610332565b005b6101ca600480360360408110156101a057600080fd5b8101908080359060200190929190803567ffffffffffffffff1690602001909291905050506104c9565b005b6101f8600480360360208110156101e257600080fd5b8101908080359060200190929190505050610606565b604051808267ffffffffffffffff16815260200191505060405180910390f35b6102646004803603604081101561022e57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610639565b005b6102b26004803603604081101561027c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079a565b005b600080600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b823373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806108fc602d913960400191505060405180910390fd5b6000848460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090508260008083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083857fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e8285604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35050505050565b813373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610583576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806108fc602d913960400191505060405180910390fd5b8160008085815260200190815260200160002060010160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550827f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa6883604051808267ffffffffffffffff16815260200191505060405180910390a2505050565b600080600083815260200190815260200160002060010160149054906101000a900467ffffffffffffffff169050919050565b813373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806108fc602d913960400191505060405180910390fd5b8160008085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550827f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a083604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2505050565b813373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806108fc602d913960400191505060405180910390fd5b8160008085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550827fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d26683604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250505056fe454e5352656769737472793a206d73672e73656e646572206973206e6f7420746865206e6f6465206f776e6572a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "4": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "5": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "42": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "56": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "77": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "97": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "100": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "6666": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc",
      "9999": "0x502BbBcC044d2B146c310eB24E5cd8Eba37EdbEc"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50610fff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806394000b021161005b57806394000b0214610227578063bb890d3f14610255578063d543c34a146102cf578063e278cfc6146102fd57610088565b806334d323a41461008d57806359b52ef8146101115780638a3133781461017f5780638ecc1365146101e3575b600080fd5b6100f9600480360360608110156100a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610341565b60405180821515815260200191505060405180910390f35b6101676004803603606081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919050505061040c565b60405180821515815260200191505060405180910390f35b6101cb6004803603604081101561019557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506104ab565b60405180821515815260200191505060405180910390f35b610225600480360360208110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061053f565b005b6102536004803603602081101561023d57600080fd5b8101908080359060200190929190505050610860565b005b6102b76004803603604081101561026b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f1565b60405180821515815260200191505060405180910390f35b6102fb600480360360208110156102e557600080fd5b8101908080359060200190929190505050610ab1565b005b61033f6004803603602081101561031357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb2565b005b6000610403826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006104a2826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610eb190919063ffffffff16565b90509392505050565b60006105376000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008481526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f14602d913960400191505060405180910390fd5b61067b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b156106d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f6e602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644683382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b6108ea6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b61093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610fc7602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f87dde712783ad4895642c7a875998317a71cf424a2444eb79545ce3795431ff93382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b6000610aa96000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b905092915050565b610b3b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008381526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b15610b91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180610f41602d913960400191505060405180910390fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600083815260200190815260200160002060000160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000838152602001908152602001600020600101819055507f4075b367eed0513a54aa39c287c66d6ae98e5df6f73ac087b26b8f89d05d1aa83382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b610d686000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050610f00565b610dbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610f9b602c913960400191505060405180910390fd5b436000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb3382604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008060009050836000015115610ef657600084602001511415610ed85760019050610ef5565b6000831415610eea5760019050610ef4565b8284602001511190505b5b5b8091505092915050565b6000610f0c8243610eb1565b905091905056fe45787465726e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e657245787465726e616c4163636f756e7452656769737472793a2070726f6f6620616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220616c72656164792065786973747345787465726e616c4163636f756e7452656769737472793a206f776e657220646f65736e277420657869737445787465726e616c4163636f756e7452656769737472793a2070726f6f6620646f65736e2774206578697374a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainNameHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainVersionHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainSalt",
            "type": "bytes32"
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
      },
      {
        "inputs": [],
        "name": "typedDataDomainSeparator",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "3": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "4": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "5": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "42": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "56": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "77": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "97": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "100": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "6666": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1",
      "9999": "0x54D7fdc2CCE45878dF9dF81A9802e33d29f274e1"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061271d806100606000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806387d313131161008c578063b5021b1611610066578063b5021b16146101fc578063bd106a0214610218578063d2c83b9a14610236578063f92c5f7c14610254576100cf565b806387d31313146101a6578063984bd28f146101c45780639f255626146101e0576100cf565b8063231badaf146100d4578063392e53cd146100f05780635afaa7bb1461010e57806373e5a13f1461012a57806376db2b4c1461015a578063867519c61461018a575b600080fd5b6100ee60048036038101906100e99190611630565b610284565b005b6100f8610387565b6040516101059190612039565b60405180910390f35b6101286004803603810190610123919061175b565b6103dd565b005b610144600480360381019061013f9190611890565b6105b5565b6040516101519190612054565b60405180910390f35b610174600480360381019061016f919061184f565b6105e2565b6040516101819190612054565b60405180910390f35b6101a4600480360381019061019f91906115b1565b610614565b005b6101ae610625565b6040516101bb91906121e4565b60405180910390f35b6101de60048036038101906101d991906117d8565b61064b565b005b6101fa60048036038101906101f591906116ef565b6107e5565b005b61021660048036038101906102119190611630565b6107f5565b005b6102206108f9565b60405161022d9190612054565b60405180910390f35b61023e6108ff565b60405161024b91906121c9565b60405180910390f35b61026e60048036038101906102699190611588565b610925565b60405161027b919061237f565b60405180910390f35b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411610305576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fc9061225f565b60405180910390fd5b600061032d8261031f61031a89898989610981565b610ac2565b610b2d90919063ffffffff16565b905084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061037f86828686610be8565b505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b6000825111610421576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104189061229f565b60405180910390fd5b600080600090505b835181101561056f5760003073ffffffffffffffffffffffffffffffffffffffff1685838151811061045757fe5b602002602001015160405161046c9190611f2e565b6000604051808303816000865af19150503d80600081146104a9576040519150601f19603f3d011682016040523d82523d6000602084013e6104ae565b606091505b5050905083156104fd57806104f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ef9061223f565b60405180910390fd5b610513565b808015610508575082155b1561051257600192505b5b7f361c14722cc344132c73396113f7164232448b09c544a149f09048648b43d8723386848151811061054157fe5b60200260200101518360405161055993929190611fd2565b60405180910390a1508080600101915050610429565b50806105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a79061235f565b60405180910390fd5b505050565b60006105db6105d68360000151846020015185604001518660600151610981565b610ac2565b9050919050565b600061060d61060883600001518460200151856040015186606001518760800151611053565b610ac2565b9050919050565b61062083338484610be8565b505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d09061221f565b60405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107a7838383611197565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516107d69190611fb7565b60405180910390a15050505050565b6107f133338484610be8565b5050565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548411610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d9061225f565b60405180910390fd5b600061089f8261089161088c898989893a611053565b610ac2565b610b2d90919063ffffffff16565b905084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108f186828686610be8565b505050505050565b60015481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061097a6001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111f990919063ffffffff16565b9050919050565b60006060825167ffffffffffffffff8111801561099d57600080fd5b506040519080825280602002602001820160405280156109cc5781602001602082028036833780820191505090505b50905060005b8351811015610a1b578381815181106109e757fe5b602002602001015180519060200120828281518110610a0257fe5b60200260200101818152505080806001019150506109d2565b507f6848d0622081db2451400280dead7a739a080cb93852607c381af11e289769b2868686604051602001610a509190611f00565b6040516020818303038152906040528051906020012084604051602001610a779190611f17565b60405160208183030381529060405280519060200120604051602001610aa195949392919061206f565b60405160208183030381529060405280519060200120915050949350505050565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525060015483604051602001610b1093929190611f7e565b604051602081830303815290604052805190602001209050919050565b60008060009050604183511415610bde5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015610b6e57601b810190505b601b8160ff161480610b835750601c8160ff16145b15610bda5760018782858560405160008152602001604052604051610bab9493929190612184565b6020604051602081039080840390855afa158015610bcd573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4f9061227f565b60405180910390fd5b6000825111610c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c939061233f565b60405180910390fd5b8151815114610ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd7906122df565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610eb457600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b8152600401610d70929190612010565b60206040518083038186803b158015610d8857600080fd5b505afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc091906117af565b80610e745750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb890d3f85856040518363ffffffff1660e01b8152600401610e23929190612010565b60206040518083038186803b158015610e3b57600080fd5b505afa158015610e4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7391906117af565b5b610eb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eaa906122bf565b60405180910390fd5b5b600080600090505b825181101561104b57600073ffffffffffffffffffffffffffffffffffffffff16848281518110610ee957fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610f48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3f906121ff565b60405180910390fd5b838181518110610f5457fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16838281518110610f7e57fe5b60200260200101518787604051602001610f9a93929190611f45565b604051602081830303815290604052604051610fb69190611f2e565b6000604051808303816000865af19150503d8060008114610ff3576040519150601f19603f3d011682016040523d82523d6000602084013e610ff8565b606091505b5050809250508161103e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611035906122ff565b60405180910390fd5b8080600101915050610ebc565b505050505050565b60006060835167ffffffffffffffff8111801561106f57600080fd5b5060405190808252806020026020018201604052801561109e5781602001602082028036833780820191505090505b50905060005b84518110156110ed578481815181106110b957fe5b6020026020010151805190602001208282815181106110d457fe5b60200260200101818152505080806001019150506110a4565b507f6f4e1b2b1e5e49f4269e19e16e67a00cb0a796d96d30be3e4b540d3732e8bcad8787876040516020016111229190611f00565b60405160208183030381529060405280519060200120846040516020016111499190611f17565b6040516020818303038152906040528051906020012087604051602001611175969594939291906120c2565b6040516020818303038152906040528051906020012091505095945050505050565b60004690507fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac5647284848330866040516020016111d796959493929190612123565b6040516020818303038152906040528051906020012060018190555050505050565b600080828401905083811015611244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161123b9061231f565b60405180910390fd5b8091505092915050565b60008135905061125d81612686565b92915050565b600082601f83011261127457600080fd5b8135611287611282826123c7565b61239a565b915081818352602084019350602081019050838560208402820111156112ac57600080fd5b60005b838110156112dc57816112c2888261124e565b8452602084019350602083019250506001810190506112af565b5050505092915050565b600082601f8301126112f757600080fd5b813561130a611305826123ef565b61239a565b9150818183526020840193506020810190508360005b8381101561135057813586016113368882611399565b845260208401935060208301925050600181019050611320565b5050505092915050565b6000813590506113698161269d565b92915050565b60008151905061137e8161269d565b92915050565b600081359050611393816126b4565b92915050565b600082601f8301126113aa57600080fd5b81356113bd6113b882612417565b61239a565b915080825260208301602083018583830111156113d957600080fd5b6113e48382846125f8565b50505092915050565b6000813590506113fc816126cb565b92915050565b600081359050611411816126e2565b92915050565b600060a0828403121561142957600080fd5b61143360a061239a565b905060006114438482850161124e565b600083015250602061145784828501611573565b602083015250604082013567ffffffffffffffff81111561147757600080fd5b61148384828501611263565b604083015250606082013567ffffffffffffffff8111156114a357600080fd5b6114af848285016112e6565b60608301525060806114c384828501611573565b60808301525092915050565b6000608082840312156114e157600080fd5b6114eb608061239a565b905060006114fb8482850161124e565b600083015250602061150f84828501611573565b602083015250604082013567ffffffffffffffff81111561152f57600080fd5b61153b84828501611263565b604083015250606082013567ffffffffffffffff81111561155b57600080fd5b611567848285016112e6565b60608301525092915050565b600081359050611582816126f9565b92915050565b60006020828403121561159a57600080fd5b60006115a88482850161124e565b91505092915050565b6000806000606084860312156115c657600080fd5b60006115d48682870161124e565b935050602084013567ffffffffffffffff8111156115f157600080fd5b6115fd86828701611263565b925050604084013567ffffffffffffffff81111561161a57600080fd5b611626868287016112e6565b9150509250925092565b600080600080600060a0868803121561164857600080fd5b60006116568882890161124e565b955050602061166788828901611573565b945050604086013567ffffffffffffffff81111561168457600080fd5b61169088828901611263565b935050606086013567ffffffffffffffff8111156116ad57600080fd5b6116b9888289016112e6565b925050608086013567ffffffffffffffff8111156116d657600080fd5b6116e288828901611399565b9150509295509295909350565b6000806040838503121561170257600080fd5b600083013567ffffffffffffffff81111561171c57600080fd5b61172885828601611263565b925050602083013567ffffffffffffffff81111561174557600080fd5b611751858286016112e6565b9150509250929050565b6000806040838503121561176e57600080fd5b600083013567ffffffffffffffff81111561178857600080fd5b611794858286016112e6565b92505060206117a58582860161135a565b9150509250929050565b6000602082840312156117c157600080fd5b60006117cf8482850161136f565b91505092915050565b600080600080600060a086880312156117f057600080fd5b60006117fe888289016113ed565b955050602061180f88828901611402565b945050604061182088828901611384565b935050606061183188828901611384565b925050608061184288828901611384565b9150509295509295909350565b60006020828403121561186157600080fd5b600082013567ffffffffffffffff81111561187b57600080fd5b61188784828501611417565b91505092915050565b6000602082840312156118a257600080fd5b600082013567ffffffffffffffff8111156118bc57600080fd5b6118c8848285016114cf565b91505092915050565b60006118dd838361191f565b60208301905092915050565b60006118f58383611a1f565b60208301905092915050565b61190a8161257a565b82525050565b611919816124f7565b82525050565b611928816124f7565b82525050565b61193f61193a826124f7565b61263a565b82525050565b600061195082612463565b61195a81856124a9565b935061196583612443565b8060005b8381101561199657815161197d88826118d1565b97506119888361248f565b925050600181019050611969565b5085935050505092915050565b60006119ae8261246e565b6119b881856124b4565b93506119c383612453565b8060005b838110156119f45781516119db88826118e9565b97506119e68361249c565b9250506001810190506119c7565b5085935050505092915050565b611a0a81612509565b82525050565b611a1981612515565b82525050565b611a2881612515565b82525050565b611a3f611a3a82612515565b61264c565b82525050565b6000611a5082612479565b611a5a81856124bf565b9350611a6a818560208601612607565b611a7381612668565b840191505092915050565b6000611a8982612479565b611a9381856124d0565b9350611aa3818560208601612607565b80840191505092915050565b611ab88161258c565b82525050565b611ac7816125b0565b82525050565b6000611ad882612484565b611ae281856124ec565b9350611af2818560208601612607565b80840191505092915050565b6000611b0b601b836124db565b91507f476174657761793a2063616e6e6f742073656e6420746f2030783000000000006000830152602082019050919050565b6000611b4b602f836124db565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b6000611bb16017836124db565b91507f476174657761793a2062617463682072657665727465640000000000000000006000830152602082019050919050565b6000611bf16032836124db565b91507f476174657761793a206e6f6e6365206973206c6f776572207468616e2063757260008301527f72656e74206163636f756e74206e6f6e636500000000000000000000000000006020830152604082019050919050565b6000611c576025836124db565b91507f476174657761793a2063616e6e6f742073656e642066726f6d2030783020616360008301527f636f756e740000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611cbd6026836124db565b91507f476174657761793a2063616e6e6f742064656c656761746520656d707479206260008301527f61746368657300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611d236028836124db565b91507f476174657761793a2073656e646572206973206e6f7420746865206163636f7560008301527f6e74206f776e65720000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611d896016836124db565b91507f476174657761793a20696e76616c6964206261746368000000000000000000006000830152602082019050919050565b6000611dc96023836124db565b91507f476174657761793a206261746368207472616e73616374696f6e20726576657260008301527f74656400000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611e2f601e836124db565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b6000611e6f6020836124db565b91507f476174657761793a2063616e6e6f742073656e6420656d7074792062617463686000830152602082019050919050565b6000611eaf601d836124db565b91507f476174657761793a20616c6c20626174636865732072657665727465640000006000830152602082019050919050565b611eeb81612563565b82525050565b611efa8161256d565b82525050565b6000611f0c8284611945565b915081905092915050565b6000611f2382846119a3565b915081905092915050565b6000611f3a8284611a7e565b915081905092915050565b6000611f518286611a7e565b9150611f5d828561192e565b601482019150611f6d828461192e565b601482019150819050949350505050565b6000611f8a8286611acd565b9150611f968285611a2e565b602082019150611fa68284611a2e565b602082019150819050949350505050565b6000602082019050611fcc6000830184611901565b92915050565b6000606082019050611fe76000830186611901565b8181036020830152611ff98185611a45565b90506120086040830184611a01565b949350505050565b60006040820190506120256000830185611910565b6120326020830184611910565b9392505050565b600060208201905061204e6000830184611a01565b92915050565b60006020820190506120696000830184611a10565b92915050565b600060a0820190506120846000830188611a10565b6120916020830187611910565b61209e6040830186611ee2565b6120ab6060830185611a10565b6120b86080830184611a10565b9695505050505050565b600060c0820190506120d76000830189611a10565b6120e46020830188611910565b6120f16040830187611ee2565b6120fe6060830186611a10565b61210b6080830185611a10565b61211860a0830184611ee2565b979650505050505050565b600060c0820190506121386000830189611a10565b6121456020830188611a10565b6121526040830187611a10565b61215f6060830186611ee2565b61216c6080830185611910565b61217960a0830184611a10565b979650505050505050565b60006080820190506121996000830187611a10565b6121a66020830186611ef1565b6121b36040830185611a10565b6121c06060830184611a10565b95945050505050565b60006020820190506121de6000830184611aaf565b92915050565b60006020820190506121f96000830184611abe565b92915050565b6000602082019050818103600083015261221881611afe565b9050919050565b6000602082019050818103600083015261223881611b3e565b9050919050565b6000602082019050818103600083015261225881611ba4565b9050919050565b6000602082019050818103600083015261227881611be4565b9050919050565b6000602082019050818103600083015261229881611c4a565b9050919050565b600060208201905081810360008301526122b881611cb0565b9050919050565b600060208201905081810360008301526122d881611d16565b9050919050565b600060208201905081810360008301526122f881611d7c565b9050919050565b6000602082019050818103600083015261231881611dbc565b9050919050565b6000602082019050818103600083015261233881611e22565b9050919050565b6000602082019050818103600083015261235881611e62565b9050919050565b6000602082019050818103600083015261237881611ea2565b9050919050565b60006020820190506123946000830184611ee2565b92915050565b6000604051905081810181811067ffffffffffffffff821117156123bd57600080fd5b8060405250919050565b600067ffffffffffffffff8211156123de57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561240657600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561242e57600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600061250282612543565b9050919050565b60008115159050919050565b6000819050919050565b600061252a826124f7565b9050919050565b600061253c826124f7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000612585826125d4565b9050919050565b60006125978261259e565b9050919050565b60006125a982612543565b9050919050565b60006125bb826125c2565b9050919050565b60006125cd82612543565b9050919050565b60006125df826125e6565b9050919050565b60006125f182612543565b9050919050565b82818337600083830152505050565b60005b8381101561262557808201518184015260208101905061260a565b83811115612634576000848401525b50505050565b600061264582612656565b9050919050565b6000819050919050565b600061266182612679565b9050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b61268f816124f7565b811461269a57600080fd5b50565b6126a681612509565b81146126b157600080fd5b50565b6126bd81612515565b81146126c857600080fd5b50565b6126d48161251f565b81146126df57600080fd5b50565b6126eb81612531565b81146126f657600080fd5b50565b61270281612563565b811461270d57600080fd5b5056fea164736f6c634300060c000a",
    "typedDataDomainName": "ETHERspot Gateway",
    "typedDataDomainVersion": "1"
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainNameHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainVersionHash",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "typedDataDomainSalt",
            "type": "bytes32"
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
        "inputs": [],
        "name": "typedDataDomainSeparator",
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
      "3": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "4": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "5": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "42": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "56": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "77": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "97": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "100": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "6666": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910",
      "9999": "0x76e2aA5c511E24cf13997921163B66D6d0dE1910"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550614c9e806100616000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638a1773ab116100de578063bdff4b3b11610097578063d2c83b9a11610071578063d2c83b9a146104b9578063da1b213d146104d7578063dc7d6c31146104f3578063df043380146105235761018e565b8063bdff4b3b1461043b578063c36326e714610459578063d0f710d6146104895761018e565b80638a1773ab1461037d5780639130c06e146103ad5780639a85fae2146103c9578063a526d83b146103e5578063b0274a7314610401578063bd106a021461041d5761018e565b806360bf4df21161014b5780636866da52116101255780636866da52146102f7578063714041561461031357806384389a2b1461032f57806387d313131461035f5761018e565b806360bf4df21461027b5780636121fcfc146102ab5780636524a947146102db5761018e565b80630c68ba2114610193578063116191b6146101c35780632c073a71146101e15780632e4f161e146101fd5780632e7037a01461022d578063392e53cd1461025d575b600080fd5b6101ad60048036038101906101a8919061300d565b61053f565b6040516101ba9190614034565b60405180910390f35b6101cb610594565b6040516101d89190613e1d565b60405180910390f35b6101fb60048036038101906101f691906133ed565b6105ba565b005b61021760048036038101906102129190613072565b6107ce565b604051610224919061404f565b60405180910390f35b610247600480360381019061024291906134bb565b6107e6565b604051610254919061404f565b60405180910390f35b61026561080e565b6040516102729190614034565b60405180910390f35b6102956004803603810190610290919061300d565b610866565b6040516102a29190613e1d565b60405180910390f35b6102c560048036038101906102c0919061300d565b610878565b6040516102d29190614034565b60405180910390f35b6102f560048036038101906102f0919061300d565b610913565b005b610311600480360381019061030c9190613296565b61091f565b005b61032d6004803603810190610328919061300d565b610c4c565b005b610349600480360381019061034491906134e4565b610e64565b604051610356919061404f565b60405180910390f35b610367610e9b565b60405161037491906142a0565b60405180910390f35b6103976004803603810190610392919061332b565b610ec1565b6040516103a4919061453d565b60405180910390f35b6103c760048036038101906103c2919061300d565b610ee1565b005b6103e360048036038101906103de91906130d5565b611215565b005b6103ff60048036038101906103fa919061300d565b611320565b005b61041b6004803603810190610416919061300d565b6113b7565b005b6104256115d2565b604051610432919061404f565b60405180910390f35b6104436115d8565b604051610450919061453d565b60405180910390f35b610473600480360381019061046e9190613036565b6115de565b604051610480919061453d565b60405180910390f35b6104a3600480360381019061049e9190613354565b611668565b6040516104b09190614034565b60405180910390f35b6104c16116c1565b6040516104ce9190614285565b60405180910390f35b6104f160048036038101906104ec91906131ab565b6116e7565b005b61050d60048036038101906105089190613036565b6117ee565b60405161051a919061453d565b60405180910390f35b61053d600480360381019061053891906130d5565b611878565b005b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161461064a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106419061431d565b60405180910390fd5b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555088600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000871415610726576224ea0060068190555061072e565b866006819055505b610778868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061197b565b610781846119d3565b61078c838383611a17565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6326040516107bb9190613e38565b60405180910390a1505050505050505050565b60006107dc85858585611a79565b9050949350505050565b6000610807610802836000015184602001518560400151611ab2565b611b0a565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b600061087182611b75565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61091c81611c13565b50565b6000610929611e23565b905060006109bf600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205486611e3490919063ffffffff16565b905060008111610a04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fb906143fd565b60405180910390fd5b6000610a19610a14848989611ab2565b611b0a565b9050610a698186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e61565b610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f9061451d565b60405180910390fd5b85600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b368388611ece565b610ba4600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684898561208b565b7f95f66b073d65f18e43f6b76c7ab8557787f5f766d86cab7c9c76f41be9f8abc6600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848989604051610c3b9493929190613edc565b60405180910390a150505050505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610cd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cce906143dd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff161415610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3d906144dd565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610dd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc89061447d565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051610e59929190613e53565b60405180910390a150565b6000610e94610e8f836000015184602001518560400151866060015187608001518860a0015161231b565b611b0a565b9050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060086000838152602001908152602001600020600001549050919050565b6000610eeb611e23565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610fb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fac9061439d565b60405180910390fd5b42811115610ff8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fef9061441d565b60405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415611139578173ffffffffffffffffffffffffffffffffffffffff163190506111c5565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b81526004016111729190613e1d565b60206040518083038186803b15801561118a57600080fd5b505afa15801561119e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c2919061350d565b90505b6111d18285878461208b565b7f5300d9a2838baade7cdc628c82cb80c1298853ba5f389d51e2b47330336aeffc828587846040516112069493929190613edc565b60405180910390a15050505050565b600061121f611e23565b905060008060006112be8d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061237c565b9250925092506112d8826112d186611b75565b8e8461208b565b7f771bc0494e1a2fcbef19a8762845000d8c4500454c756a7370c955e39ed60fd483826040516113099291906141e0565b60405180910390a150505050505050505050505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166113ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a2906143dd565b60405180910390fd5b6113b481612828565b50565b60006113c1611e23565b90506000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811461148a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114819061433d565b60405180910390fd5b61149382611c13565b6114a8600654426129b790919063ffffffff16565b905080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fed3c8c6cdfc6d7b91dc9db3e1f54866587c26c3c3e0f9e32cd1944974be43a50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168385846040516115c59493929190613edc565b60405180910390a1505050565b60025481565b60065481565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006116b88484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e61565b90509392505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116f1611e23565b905060008060006117908e858f8f8f8f8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061237c565b9250925092506117a382858f848d612a0c565b7f8b67efde501ee9cd0e771f7436554c44a5c076239ff3a6fbb397646a4689c0f283828b6040516117d693929190614209565b60405180910390a15050505050505050505050505050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000611882611e23565b905060008060006119218d858e8e8e8e8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061237c565b92509250925061193382858e8461208b565b7f6675346cd43846f7d47c310d39fb5c15bc7db66b3770338cdf1f133613a5ae9883826040516119649291906141e0565b60405180910390a150505050505050505050505050565b6000815114156119935761198e32612828565b6119d0565b60008151905060005b818110156119cd576119c08382815181106119b357fe5b6020026020010151612828565b808060010191505061199c565b50505b50565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60004690507fd87cd6ef79d4e2b95e15ce8abf732db51ec771f1ca2edccf22a46c729ac564728484833086604051602001611a579695949392919061417f565b6040516020818303038152906040528051906020012060028190555050505050565b600084848484604051602001611a929493929190613d48565b604051602081830303815290604052805190602001209050949350505050565b60007f3b3087c8f883f1f44cabe66444f5f9d96f69de6a88f364ea10959eef0331414a848484604051602001611aeb949392919061413a565b6040516020818303038152906040528051906020012090509392505050565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525060025483604051602001611b5893929190613de4565b604051602081830303815290604052805190602001209050919050565b60008082604051602001611b899190613d2d565b604051602081830303815290604052805190602001209050606060405180602001611bb390612d89565b6020820181038252601f19601f820116604052509050600060ff60f81b30848480519060200120604051602001611bed9493929190613d96565b6040516020818303038152906040528051906020012090508060001c9350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff16600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611e2057600081604051602001611cbd9190613d2d565b60405160208183030381529060405280519060200120905080604051611ce290612d89565b8190604051809103906000f5905080158015611d02573d6000803e3d6000fd5b50600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd80572c0f2f24f2d9d726d831bd860ed82b12bafaf01cfb6e4d38fb23c4347e9600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051611e16929190613e7c565b60405180910390a1505b50565b6000611e2f6028612ad1565b905090565b6000611e598383604051806060016040528060218152602001614c7160219139612b66565b905092915050565b600080611e778385612bbb90919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561207d576000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fa19281a6f3163da06f6b82f3ecf0130493c52aba23cdc2a312f652742f0d1801600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838360405161207093929190613ea5565b60405180910390a1612087565b61208682611c13565b5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156121a5578373ffffffffffffffffffffffffffffffffffffffff16633f579f428483600067ffffffffffffffff811180156120f657600080fd5b506040519080825280601f01601f1916602001820160405280156121295781602001600182028036833780820191505090505b506040518463ffffffff1660e01b815260040161214893929190613ff6565b600060405180830381600087803b15801561216257600080fd5b505af1158015612176573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061219f91906133ac565b50612315565b60608473ffffffffffffffffffffffffffffffffffffffff16633f579f4284600063a9059cbb60e01b88876040516024016121e1929190613fcd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518463ffffffff1660e01b815260040161225c93929190613f8f565b600060405180830381600087803b15801561227657600080fd5b505af115801561228a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906122b391906133ac565b905060008151111561231357808060200190518101906122d39190613302565b612312576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612309906143bd565b60405180910390fd5b5b505b50505050565b60007f745089e29f2abf28f618236a5dc04d214ac05ead3440ba532b69e9d160ba2e7287878787878760405160200161235a97969594939291906140cb565b6040516020818303038152906040528051906020012090509695505050505050565b6000806000806123986123938d8d8d8d8d8d61231b565b611b0a565b905060008651141561249757600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359b52ef88d838b6040518463ffffffff1660e01b815260040161240393929190613f58565b60206040518083038186803b15801561241b57600080fd5b505afa15801561242f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124539190613302565b612492576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124899061451d565b60405180910390fd5b612688565b60006124ac8783612bbb90919063ffffffff16565b90508073ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff161461268657600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b815260040161254093929190613f21565b60206040518083038186803b15801561255857600080fd5b505afa15801561256c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125909190613302565b806126465750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166334d323a48e838c6040518463ffffffff1660e01b81526004016125f593929190613f21565b60206040518083038186803b15801561260d57600080fd5b505afa158015612621573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126459190613302565b5b612685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161267c9061445d565b60405180910390fd5b5b505b6126928186611e61565b6126d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126c89061451d565b60405180910390fd5b6126dd8c8c8c8c611a79565b9350612708600860008681526020019081526020016000206000015488611e3490919063ffffffff16565b9150600082141561274e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127459061435d565b60405180910390fd5b8660086000868152602001908152602001600020600001819055506127738c8b611ece565b600760008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692507f0d1cb77d1fe491f98926195d0b885509da18bc305dd1489f45610237d971ed46848d8d8d8d8c6040516128119695949392919061406a565b60405180910390a150985098509895505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161288f906142fd565b60405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615612924576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161291b906144bd565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a32826040516129ac929190613e53565b60405180910390a150565b600080828401905083811015612a02576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129f99061449d565b60405180910390fd5b8091505092915050565b60008111612a4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a46906142dd565b60405180910390fd5b6000612a648284611e3490919063ffffffff16565b905060008111612aa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aa09061443d565b60405180910390fd5b612ab58686868461208b565b612ac986612ac287611b75565b868561208b565b505050505050565b60008060009050612ae0612c76565b15612b59576000836000369050039050612b5160003683906014850192612b09939291906145f4565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d23565b915050612b5d565b3390505b80915050919050565b6000838311158290612bae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ba591906142bb565b60405180910390fd5b5082840390509392505050565b60008060009050604183511415612c6c5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015612bfc57601b810190505b601b8160ff161480612c115750601c8160ff16145b15612c685760018782858560405160008152602001604052604051612c399493929190614240565b6020604051602081039080840390855afa158015612c5b573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612d1c57602c60003690501015612d17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d0e9061437d565b60405180910390fd5b600190505b8091505090565b6000806014835114612d6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d61906144fd565b60405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b6103f78061487a83390190565b600081359050612da5816147ef565b92915050565b60008083601f840112612dbd57600080fd5b8235905067ffffffffffffffff811115612dd657600080fd5b602083019150836020820283011115612dee57600080fd5b9250929050565b600081519050612e0481614806565b92915050565b600081359050612e198161481d565b92915050565b60008083601f840112612e3157600080fd5b8235905067ffffffffffffffff811115612e4a57600080fd5b602083019150836001820283011115612e6257600080fd5b9250929050565b600082601f830112612e7a57600080fd5b8151612e8d612e8882614585565b614558565b91508082526020830160208301858383011115612ea957600080fd5b612eb4838284614766565b50505092915050565b600081359050612ecc81614834565b92915050565b600081359050612ee18161484b565b92915050565b600060608284031215612ef957600080fd5b612f036060614558565b90506000612f1384828501612d96565b6000830152506020612f2784828501612d96565b6020830152506040612f3b84828501612fe3565b60408301525092915050565b600060c08284031215612f5957600080fd5b612f6360c0614558565b90506000612f7384828501612d96565b6000830152506020612f8784828501612d96565b6020830152506040612f9b84828501612d96565b6040830152506060612faf84828501612e0a565b6060830152506080612fc384828501612fe3565b60808301525060a0612fd784828501612fe3565b60a08301525092915050565b600081359050612ff281614862565b92915050565b60008151905061300781614862565b92915050565b60006020828403121561301f57600080fd5b600061302d84828501612d96565b91505092915050565b6000806040838503121561304957600080fd5b600061305785828601612d96565b925050602061306885828601612d96565b9150509250929050565b6000806000806080858703121561308857600080fd5b600061309687828801612d96565b94505060206130a787828801612d96565b93505060406130b887828801612d96565b92505060606130c987828801612e0a565b91505092959194509250565b600080600080600080600080600060e08a8c0312156130f357600080fd5b60006131018c828d01612d96565b99505060206131128c828d01612d96565b98505060406131238c828d01612e0a565b97505060606131348c828d01612fe3565b96505060806131458c828d01612fe3565b95505060a08a013567ffffffffffffffff81111561316257600080fd5b61316e8c828d01612e1f565b945094505060c08a013567ffffffffffffffff81111561318d57600080fd5b6131998c828d01612e1f565b92509250509295985092959850929598565b6000806000806000806000806000806101008b8d0312156131cb57600080fd5b60006131d98d828e01612d96565b9a505060206131ea8d828e01612d96565b99505060406131fb8d828e01612e0a565b985050606061320c8d828e01612fe3565b975050608061321d8d828e01612fe3565b96505060a061322e8d828e01612fe3565b95505060c08b013567ffffffffffffffff81111561324b57600080fd5b6132578d828e01612e1f565b945094505060e08b013567ffffffffffffffff81111561327657600080fd5b6132828d828e01612e1f565b92509250509295989b9194979a5092959850565b600080600080606085870312156132ac57600080fd5b60006132ba87828801612d96565b94505060206132cb87828801612fe3565b935050604085013567ffffffffffffffff8111156132e857600080fd5b6132f487828801612e1f565b925092505092959194509250565b60006020828403121561331457600080fd5b600061332284828501612df5565b91505092915050565b60006020828403121561333d57600080fd5b600061334b84828501612e0a565b91505092915050565b60008060006040848603121561336957600080fd5b600061337786828701612e0a565b935050602084013567ffffffffffffffff81111561339457600080fd5b6133a086828701612e1f565b92509250509250925092565b6000602082840312156133be57600080fd5b600082015167ffffffffffffffff8111156133d857600080fd5b6133e484828501612e69565b91505092915050565b60008060008060008060008060006101008a8c03121561340c57600080fd5b600061341a8c828d01612ebd565b995050602061342b8c828d01612ed2565b985050604061343c8c828d01612fe3565b97505060608a013567ffffffffffffffff81111561345957600080fd5b6134658c828d01612dab565b965096505060806134788c828d01612d96565b94505060a06134898c828d01612e0a565b93505060c061349a8c828d01612e0a565b92505060e06134ab8c828d01612e0a565b9150509295985092959850929598565b6000606082840312156134cd57600080fd5b60006134db84828501612ee7565b91505092915050565b600060c082840312156134f657600080fd5b600061350484828501612f47565b91505092915050565b60006020828403121561351f57600080fd5b600061352d84828501612ff8565b91505092915050565b61353f816146d6565b82525050565b61354e81614627565b82525050565b61356561356082614627565b614799565b82525050565b61357481614639565b82525050565b61358b61358682614645565b6147ab565b82525050565b61359a81614671565b82525050565b6135b16135ac82614671565b6147b5565b82525050565b60006135c2826145b1565b6135cc81856145c7565b93506135dc818560208601614766565b6135e5816147d1565b840191505092915050565b6135f9816146e8565b82525050565b6136088161470c565b82525050565b61361781614730565b82525050565b6000613628826145bc565b61363281856145d8565b9350613642818560208601614766565b61364b816147d1565b840191505092915050565b6000613661826145bc565b61366b81856145e9565b935061367b818560208601614766565b80840191505092915050565b60006136946026836145d8565b91507f5061796d656e7452656769737472793a20696e76616c6964206465706f73697460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006136fa6020836145d8565b91507f477561726465643a2063616e6e6f74206164642030783020677561726469616e6000830152602082019050919050565b600061373a602f836145d8565b91507f496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742060008301527f74686520696e697469616c697a657200000000000000000000000000000000006020830152604082019050919050565b60006137a0602f836145d8565b91507f5061796d656e7452656769737472793a206465706f736974206578697420616c60008301527f72656164792072657175657374656400000000000000000000000000000000006020830152604082019050919050565b60006138066026836145d8565b91507f5061796d656e7452656769737472793a20696e76616c6964207061796d656e7460008301527f2076616c756500000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061386c6022836145d8565b91507f47617465776179526563697069656e743a20696e76616c6964206d73672e646160008301527f74610000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006138d2602b836145d8565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206e6f60008301527f74207265717565737465640000000000000000000000000000000000000000006020830152604082019050919050565b6000613938602d836145d8565b91507f5061796d656e7452656769737472793a204552433230546f6b656e207472616e60008301527f73666572207265766572746564000000000000000000000000000000000000006020830152604082019050919050565b600061399e6026836145d8565b91507f477561726465643a2074782e6f726967696e206973206e6f742074686520677560008301527f61726469616e00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613a04601f836145d8565b91507f5061796d656e7452656769737472793a20696e76616c696420616d6f756e74006000830152602082019050919050565b6000613a446024836145d8565b91507f5061796d656e7452656769737472793a206465706f7369742065786974206c6f60008301527f636b6564000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613aaa6027836145d8565b91507f5061796d656e7452656769737472793a20696e76616c6964207769746864726160008301527f772076616c7565000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613b106029836145d8565b91507f5061796d656e7452656769737472793a20696e76616c69642073656e6465722060008301527f7369676e617475726500000000000000000000000000000000000000000000006020830152604082019050919050565b6000613b76601f836145d8565b91507f477561726465643a20677561726469616e20646f65736e2774206578697374006000830152602082019050919050565b6000613bb6601e836145d8565b91507f536166654d6174684c69623a206164646974696f6e206f766572666c6f7700006000830152602082019050919050565b6000613bf66020836145d8565b91507f477561726465643a20677561726469616e20616c7265616479206578697374736000830152602082019050919050565b6000613c36601b836145d8565b91507f477561726465643a2063616e6e6f742072656d6f76652073656c6600000000006000830152602082019050919050565b6000613c76601d836145d8565b91507f42797465734c69623a20696e76616c69642064617461206c656e6774680000006000830152602082019050919050565b6000613cb6602b836145d8565b91507f5061796d656e7452656769737472793a20696e76616c6964206775617264696160008301527f6e207369676e61747572650000000000000000000000000000000000000000006020830152604082019050919050565b613d18816146bf565b82525050565b613d27816146c9565b82525050565b6000613d398284613554565b60148201915081905092915050565b6000613d548287613554565b601482019150613d648286613554565b601482019150613d748285613554565b601482019150613d8482846135a0565b60208201915081905095945050505050565b6000613da2828761357a565b600182019150613db28286613554565b601482019150613dc282856135a0565b602082019150613dd282846135a0565b60208201915081905095945050505050565b6000613df08286613656565b9150613dfc82856135a0565b602082019150613e0c82846135a0565b602082019150819050949350505050565b6000602082019050613e326000830184613545565b92915050565b6000602082019050613e4d6000830184613536565b92915050565b6000604082019050613e686000830185613536565b613e756020830184613545565b9392505050565b6000604082019050613e916000830185613545565b613e9e6020830184613545565b9392505050565b6000606082019050613eba6000830186613545565b613ec76020830185613545565b613ed46040830184613545565b949350505050565b6000608082019050613ef16000830187613545565b613efe6020830186613545565b613f0b6040830185613545565b613f186060830184613d0f565b95945050505050565b6000606082019050613f366000830186613545565b613f436020830185613545565b613f506040830184613d0f565b949350505050565b6000606082019050613f6d6000830186613545565b613f7a6020830185613591565b613f876040830184613d0f565b949350505050565b6000606082019050613fa46000830186613545565b613fb1602083018561360e565b8181036040830152613fc381846135b7565b9050949350505050565b6000604082019050613fe26000830185613545565b613fef6020830184613d0f565b9392505050565b600060608201905061400b6000830186613545565b6140186020830185613d0f565b818103604083015261402a81846135b7565b9050949350505050565b6000602082019050614049600083018461356b565b92915050565b60006020820190506140646000830184613591565b92915050565b600060c08201905061407f6000830189613591565b61408c6020830188613545565b6140996040830187613545565b6140a66060830186613545565b6140b36080830185613591565b6140c060a0830184613d0f565b979650505050505050565b600060e0820190506140e0600083018a613591565b6140ed6020830189613545565b6140fa6040830188613545565b6141076060830187613545565b6141146080830186613591565b61412160a0830185613d0f565b61412e60c0830184613d0f565b98975050505050505050565b600060808201905061414f6000830187613591565b61415c6020830186613545565b6141696040830185613545565b6141766060830184613d0f565b95945050505050565b600060c0820190506141946000830189613591565b6141a16020830188613591565b6141ae6040830187613591565b6141bb6060830186613d0f565b6141c86080830185613545565b6141d560a0830184613591565b979650505050505050565b60006040820190506141f56000830185613591565b6142026020830184613d0f565b9392505050565b600060608201905061421e6000830186613591565b61422b6020830185613d0f565b6142386040830184613d0f565b949350505050565b60006080820190506142556000830187613591565b6142626020830186613d1e565b61426f6040830185613591565b61427c6060830184613591565b95945050505050565b600060208201905061429a60008301846135f0565b92915050565b60006020820190506142b560008301846135ff565b92915050565b600060208201905081810360008301526142d5818461361d565b905092915050565b600060208201905081810360008301526142f681613687565b9050919050565b60006020820190508181036000830152614316816136ed565b9050919050565b600060208201905081810360008301526143368161372d565b9050919050565b6000602082019050818103600083015261435681613793565b9050919050565b60006020820190508181036000830152614376816137f9565b9050919050565b600060208201905081810360008301526143968161385f565b9050919050565b600060208201905081810360008301526143b6816138c5565b9050919050565b600060208201905081810360008301526143d68161392b565b9050919050565b600060208201905081810360008301526143f681613991565b9050919050565b60006020820190508181036000830152614416816139f7565b9050919050565b6000602082019050818103600083015261443681613a37565b9050919050565b6000602082019050818103600083015261445681613a9d565b9050919050565b6000602082019050818103600083015261447681613b03565b9050919050565b6000602082019050818103600083015261449681613b69565b9050919050565b600060208201905081810360008301526144b681613ba9565b9050919050565b600060208201905081810360008301526144d681613be9565b9050919050565b600060208201905081810360008301526144f681613c29565b9050919050565b6000602082019050818103600083015261451681613c69565b9050919050565b6000602082019050818103600083015261453681613ca9565b9050919050565b60006020820190506145526000830184613d0f565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561457b57600080fd5b8060405250919050565b600067ffffffffffffffff82111561459c57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561460457600080fd5b8386111561461157600080fd5b6001850283019150848603905094509492505050565b60006146328261469f565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600061468682614627565b9050919050565b600061469882614627565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006146e182614742565b9050919050565b60006146f3826146fa565b9050919050565b60006147058261469f565b9050919050565b60006147178261471e565b9050919050565b60006147298261469f565b9050919050565b600061473b826146bf565b9050919050565b600061474d82614754565b9050919050565b600061475f8261469f565b9050919050565b60005b83811015614784578082015181840152602081019050614769565b83811115614793576000848401525b50505050565b60006147a4826147bf565b9050919050565b6000819050919050565b6000819050919050565b60006147ca826147e2565b9050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b6147f881614627565b811461480357600080fd5b50565b61480f81614639565b811461481a57600080fd5b50565b61482681614671565b811461483157600080fd5b50565b61483d8161467b565b811461484857600080fd5b50565b6148548161468d565b811461485f57600080fd5b50565b61486b816146bf565b811461487657600080fd5b5056fe6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103a4806100536000396000f3fe60806040526004361061002d5760003560e01c80633f579f4214610039578063f77c47911461016257610034565b3661003457005b600080fd5b34801561004557600080fd5b506100e76004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156100a357600080fd5b8201836020820111156100b557600080fd5b803590602001918460018302840111640100000000831117156100d757600080fd5b90919293919293905050506101a3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012757808201518184015260208101905061010c565b50505050905090810190601f1680156101545780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016e57600080fd5b50610177610347565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061036c602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d80600081146102b9576040519150601f19603f3d011682016040523d82523d6000602084013e6102be565b606091505b5080935081925050508061033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a536166654d6174684c69623a207375627472616374696f6e206f766572666c6f77a164736f6c634300060c000a",
    "typedDataDomainName": "ETHERspot Payment Registry",
    "typedDataDomainVersion": "1"
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
      "3": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "4": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "5": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "42": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "56": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "77": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "97": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "100": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "6666": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A",
      "9999": "0x0672aF0018fdEbACcc93c7D047D62b72CB12883A"
    },
    "byteCode": "0x608060405234801561001057600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610caa806100606000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c8063249cb3fa11610066578063249cb3fa1461047c578063392e53cd146104de5780637b103999146104fe578063c4d66de814610532578063f23a6e611461057657610092565b806223de2914610097578063150b7a02146101cf5780631626ba7e146102c557806320c13b0b1461037b575b600080fd5b6101cd600480360360c08110156100ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561013457600080fd5b82018360208201111561014657600080fd5b8035906020019184600183028401116401000000008311171561016857600080fd5b90919293919293908035906020019064010000000081111561018957600080fd5b82018360208201111561019b57600080fd5b803590602001918460018302840111640100000000831117156101bd57600080fd5b9091929391929390505050610676565b005b610290600480360360808110156101e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561024c57600080fd5b82018360208201111561025e57600080fd5b8035906020019184600183028401116401000000008311171561028057600080fd5b9091929391929390505050610680565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610346600480360360408110156102db57600080fd5b81019080803590602001909291908035906020019064010000000081111561030257600080fd5b82018360208201111561031457600080fd5b8035906020019184600183028401116401000000008311171561033657600080fd5b9091929391929390505050610695565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104476004803603604081101561039157600080fd5b81019080803590602001906401000000008111156103ae57600080fd5b8201836020820111156103c057600080fd5b803590602001918460018302840111640100000000831117156103e257600080fd5b90919293919293908035906020019064010000000081111561040357600080fd5b82018360208201111561041557600080fd5b8035906020019184600183028401116401000000008311171561043757600080fd5b90919293919293905050506107f9565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104c86004803603604081101561049257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b6040518082815260200191505060405180910390f35b6104e6610a66565b60405180821515815260200191505060405180910390f35b610506610abc565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105746004803603602081101561054857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae2565b005b610641600480360360a081101561058c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156105fd57600080fd5b82018360208201111561060f57600080fd5b8035906020019184600183028401116401000000008311171561063157600080fd5b9091929391929390505050610c58565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b5050505050505050565b600063150b7a0260e01b905095945050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1e382ce308686866040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b15801561075c57600080fd5b505afa158015610770573d6000803e3d6000fd5b505050506040513d602081101561078657600080fd5b81019080805190602001909291905050506107a85763ffffffff60e01b6107f0565b60405160200180807f697356616c69645369676e617475726528627974657333322c62797465732900815250601f019050604051602081830303815290604052805190602001205b90509392505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663124e9eb330878787876040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060206040518083038186803b1580156108ec57600080fd5b505afa158015610900573d6000803e3d6000fd5b505050506040513d602081101561091657600080fd5b81019080805190602001909291905050506109385763ffffffff60e01b610980565b60405160200180807f697356616c69645369676e61747572652862797465732c627974657329000000815250601d019050604051602081830303815290604052805190602001205b9050949350505050565b60008060405160200180807f455243373737546f6b656e73526563697069656e74000000000000000000000081525060150190506040516020818303038152906040528051906020012084148015610a0d57503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b15610a5c5760405160200180807f455243313832305f4143434550545f4d4147494300000000000000000000000081525060140190506040516020818303038152906040528051906020012090505b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610c6f602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600063f23a6e6160e01b9050969550505050505056fe496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a6572a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "4": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "5": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "42": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "56": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "77": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "97": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "100": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "6666": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD",
      "9999": "0x15a6fb5580D88ca7efcE51f89c58F428F6719FCD"
    },
    "byteCode": "0x608060405234801561001057600080fd5b5032600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061451a806100616000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806390482d72116100b8578063d0f710d61161007c578063d0f710d61461075e578063da9fc1ae146107f7578063db63f5821461083b578063e1e382ce1461089f578063e5c7278f14610958578063f4876c7414610a1b57610142565b806390482d7214610545578063a526d83b146105fe578063bb890d3f14610642578063cade6a5d146106bc578063d089e11a1461072a57610142565b80631a8414031161010a5780631a841403146103515780633164b5e1146103bf57806334d323a414610419578063392e53cd1461049d57806343013c24146104bd578063714041561461050157610142565b80630900f010146101475780630c68ba211461018b57806311464fbe146101e5578063116191b614610219578063124e9eb31461024d575b600080fd5b6101896004803603602081101561015d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7f565b005b6101cd600480360360208110156101a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b2e565b60405180821515815260200191505060405180910390f35b6101ed610b83565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610221610ba9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103396004803603606081101561026357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102a057600080fd5b8201836020820111156102b257600080fd5b803590602001918460018302840111640100000000831117156102d457600080fd5b9091929391929390803590602001906401000000008111156102f557600080fd5b82018360208201111561030757600080fd5b8035906020019184600183028401116401000000008311171561032957600080fd5b9091929391929390505050610bcf565b60405180821515815260200191505060405180910390f35b6103bd6004803603606081101561036757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c88565b005b610401600480360360208110156103d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef3565b60405180821515815260200191505060405180910390f35b6104856004803603606081101561042f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4c565b60405180821515815260200191505060405180910390f35b6104a561103a565b60405180821515815260200191505060405180910390f35b6104ff600480360360208110156104d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611092565b005b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110aa565b005b6105fc6004803603606081101561055b57600080fd5b810190808035906020019064010000000081111561057857600080fd5b82018360208201111561058a57600080fd5b803590602001918460208302840111640100000000831117156105ac57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611370565b005b6106406004803603602081101561061457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611508565b005b6106a46004803603604081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115b5565b60405180821515815260200191505060405180910390f35b6106fe600480360360208110156106d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115c9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107326115db565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107df6004803603604081101561077457600080fd5b81019080803590602001909291908035906020019064010000000081111561079b57600080fd5b8201836020820111156107ad57600080fd5b803590602001918460018302840111640100000000831117156107cf57600080fd5b9091929391929390505050611601565b60405180821515815260200191505060405180910390f35b6108396004803603602081101561080d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061165a565b005b61089d6004803603604081101561085157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611670565b005b610940600480360360608110156108b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108fc57600080fd5b82018360208201111561090e57600080fd5b8035906020019184600183028401116401000000008311171561093057600080fd5b9091929391929390505050611905565b60405180821515815260200191505060405180910390f35b610a196004803603608081101561096e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109d557600080fd5b8201836020820111156109e757600080fd5b80359060200191846001830284011164010000000083111715610a0957600080fd5b9091929391929390505050611971565b005b610a7d60048036036040811015610a3157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b005b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061442d6026913960400191505060405180910390fd5b610b2b816001611d0d565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c7d86610c7885858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c6a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611e4e565b611fb790919063ffffffff16565b612087565b905095945050505050565b610c918361223e565b50610c9b83612685565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2f57610d29833283600067ffffffffffffffff81118015610cee57600080fd5b506040519080825280601f01601f191660200182016040528015610d215781602001600182028036833780820191505090505b506000612786565b50610e5d565b6060610dd38484600063a9059cbb60e01b3287604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506000612786565b9050600081511115610e5b57808060200190516020811015610df457600080fd5b8101908080519060200190929190505050610e5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806144536035913960400191505060405180910390fd5b5b505b7feb5511fbef89123439f12682f0e9d0fc9696913b26eee55434c77d62c30aa7ca83328484604051808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390a1505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169050919050565b60008060009050610f5d8585612087565b15610f6b576001905061102f565b61102c83600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff16151515158152602001600182015481525050612c5490919063ffffffff16565b90505b809150509392505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b61109b8161223e565b506110a7816001612ca3565b50565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661114b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061442d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614156111ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f477561726465643a2063616e6e6f742072656d6f76652073656c66000000000081525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166112ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f477561726465643a20677561726469616e20646f65736e27742065786973740081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fee943cdb81826d5909c559c6b1ae6908fcaf2dbc16c4b730346736b486283e8b3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614611416576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180614361602f913960400191505060405180910390fd5b6000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506114a2848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050612f05565b6114ac3083612f5d565b6114b581612f77565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050565b6000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166115a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061442d6026913960400191505060405180910390fd5b6115b281612fbb565b50565b60006115c18383612087565b905092915050565b60006115d4826131e2565b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116518484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613238565b90509392505050565b6116638161223e565b5061166d81612685565b50565b600061167b8361223e565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180614402602b913960400191505060405180910390fd5b6117b9600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b61180e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180614300602c913960400191505060405180910390fd5b43600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f1ce3cbbc43ee231e5b950332f2b0b9dd7d349291a3ee411ce5c5c7ed745661bb8383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b60006119678561196285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505087611fb790919063ffffffff16565b612087565b9050949350505050565b61197a8561223e565b5061198485612685565b6119d685858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001612786565b505050505050565b6119e78261223e565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806144e1602d913960400191505060405180910390fd5b611b25600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900460ff161515151581526020016001820154815250506132a5565b15611b7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806144b4602d913960400191505060405180910390fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055506000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180614267603b913960400191505060405180910390fd5b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015611e4a577f70d9f5a076620216a6050e493f3ce69749de0b68fa4b839ba2518660ba8b9cf0600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b6000611e5a82516132b8565b826040516020018082805190602001908083835b60208310611e915780518252602082019150602081019050602083039250611e6e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b60208310611f235780518252602082019150602081019050602083039250611f00565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b60208310611f745780518252602082019150602081019050602083039250611f51565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b6000806000905060418351141561207d5760008060006020860151925060408601519150606086015160001a9050601b8160ff161015611ff857601b810190505b601b8160ff16148061200d5750601c8160ff16145b156120795760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561206c573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b600080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156121ac576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154149050612234565b6000801b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154141561223357612202836131e2565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161490505b5b8091505092915050565b600080612249613448565b9050600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16156123c0576000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154146123bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142a26038913960400191505060405180910390fd5b61267c565b6000801b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541461245d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142a26038913960400191505060405180910390fd5b600081604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b81526014019150506040516020818303038152906040528051906020012090506124aa81613459565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461252d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806142a26038913960400191505060405180910390fd5b80600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f27e282f7712c5b4617277759c834b86d163dfc1aad25c8c3c5926a1c9e5644688483604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505b80915050919050565b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1661278357612726600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600161364f565b506001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055505b50565b6060600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561280e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806143906025913960400191505060405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180614488602c913960400191505060405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415612918576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806142da6026913960400191505060405180910390fd5b60608673ffffffffffffffffffffffffffffffffffffffff16633f579f428787876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129aa57808201518184015260208101905061298f565b50505050905090810190601f1680156129d75780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156129f857600080fd5b505af1158015612a0c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015612a3657600080fd5b8101908080516040519392919084640100000000821115612a5657600080fd5b83820191506020820185811115612a6c57600080fd5b8251866001820283011164010000000082111715612a8957600080fd5b8083526020830192505050908051906020019080838360005b83811015612abd578082015181840152602081019050612aa2565b50505050905090810190601f168015612aea5780820380516001836020036101000a031916815260200191505b5060405250505090508215612c47577f99eeae1fb8801e2e878e060ec5e5b3557b3c4f8106e35d88cb573f293dae4e248787878785604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba1578082015181840152602081019050612b86565b50505050905090810190601f168015612bce5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c07578082015181840152602081019050612bec565b50505050905090810190601f168015612c345780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a15b8091505095945050505050565b60008060009050836000015115612c9957600084602001511415612c7b5760019050612c98565b6000831415612c8d5760019050612c97565b8284602001511190505b5b5b8091505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b158015612d2257600080fd5b505afa158015612d36573d6000803e3d6000fd5b505050506040513d6020811015612d4c57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415612dca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806143d7602b913960400191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d784d426600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b505050508015612f01577feec27cdb8bd6f55c2c537deb52ab094a2437e85ef5197e6f064f90bff3ff563f82600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b5050565b600081511415612f1d57612f1832612fbb565b612f5a565b60008151905060005b81811015612f5757612f4a838281518110612f3d57fe5b6020026020010151612fbb565b8080600101915050612f26565b50505b50565b612f688260006137a3565b612f73816000611d0d565b5050565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561305e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a2063616e6e6f74206164642030783020677561726469616e81525060200191505060405180910390fd5b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561311d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f477561726465643a20677561726469616e20616c72656164792065786973747381525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fbc3292102fa77e083913064b282926717cdfaede4d35f553d66366c0a3da755a3282604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a150565b60008082604051602001808273ffffffffffffffffffffffffffffffffffffffff1660601b815260140191505060405160208183030381529060405280519060200120905061323081613459565b915050919050565b60008061324e8385611fb790919063ffffffff16565b90506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006132b18243612c54565b9050919050565b60606000821415613300576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613443565b6020821415613346576040518060400160405280600281526020017f33320000000000000000000000000000000000000000000000000000000000008152509050613443565b6000829050600083905060005b60008214613375578080600101915050600a828161336d57fe5b049150613353565b60608167ffffffffffffffff8111801561338e57600080fd5b506040519080825280601f01601f1916602001820160405280156133c15781602001600182028036833780820191505090505b50905060006001830390505b6000851461343a57600a85816133df57fe5b0660300160f81b828280600190039350815181106133f957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a858161343257fe5b0494506133cd565b81955050505050505b919050565b600061345460146138e4565b905090565b600060606040518060200161346d90613ad5565b6020820181038252601f19601f82011660405250600060a01b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600060a01b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020018086805190602001908083835b6020831061350757805182526020820191506020810190506020830392506134e4565b6001836020036101000a0380198251168184511680821785525050505050509050018573ffffffffffffffffffffffffffffffffffffffff19168152600c018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff19168152600c018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401955050505050506040516020818303038152906040529050600060ff60f81b3085848051906020012060405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018473ffffffffffffffffffffffffffffffffffffffff1660601b81526014018381526020018281526020019450505050506040516020818303038152906040528051906020012090508060001c92505050919050565b60008083600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516136a590613ad5565b808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001925050508190604051809103906000f5905080158015613702573d6000803e3d6000fd5b5090508215613799577f2682a218602b9036c9869f006c5405ee4a1a65267653eb7e286123e5e1afde4c81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a15b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061432c6035913960400191505060405180910390fd5b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080156138e0577f02e3c47057b8dc27a0929d3c394c314c73aa002d46939c31c9f71d1e77e86c10600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b600080600090506138f3613979565b1561396c5760008360003690500390506139646000368390601485019261391c93929190613ae2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050613a3c565b915050613970565b3390505b80915050919050565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415613a3557602c60003690501015613a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806143b56022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114613ab6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b61075180613b1683390190565b60008085851115613af257600080fd5b83861115613aff57600080fd5b600185028301915084860390509450949250505056fe608060405234801561001057600080fd5b506040516107513803806107518339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610630806101216000396000f3fe60806040526004361061004e5760003560e01c80633f579f42146100be5780635c60da1b146101e75780637b10399914610228578063d784d42614610269578063f77c4791146102ba57610055565b3661005557005b34801561006157600080fd5b50600080369050146100bc576000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050368060008037600080826000855af43d806000803e81600081146100b757816000f35b816000fd5b005b3480156100ca57600080fd5b5061016c600480360360608110156100e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b90919293919293905050506102fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101f357600080fd5b506101fc61049f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023457600080fd5b5061023d6104c5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561027557600080fd5b506102b86004803603602081101561028c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104eb565b005b3480156102c657600080fd5b506102cf6105d3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b606060008673ffffffffffffffffffffffffffffffffffffffff1686868660405180838380828437808301925050509250505060006040518083038185875af1925050503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b50809350819250505080610492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4163636f756e743a207472616e73616374696f6e20726576657274656400000081525060200191505060405180910390fd5b8192505050949350505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461058f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806105f8602c913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe436f6e74726f6c6c65643a206d73672e73656e646572206973206e6f742074686520636f6e74726f6c6c6572a164736f6c634300060c000a4163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420496d706c656d656e746174696f6e20746f20307830506572736f6e616c4163636f756e7452656769737472793a2073656e646572206973206e6f7420746865206163636f756e74206f776e65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2073656c66506572736f6e616c4163636f756e7452656769737472793a206f776e657220646f65736e27742065786973744163636f756e74436f6e74726f6c6c65723a2063616e6e6f7420736574206163636f756e7420726567697374727920746f20307830496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a65724163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f2030783047617465776179526563697069656e743a20696e76616c6964206d73672e646174614163636f756e74436f6e74726f6c6c65723a206163636f756e7420616c7265616479207570677261646564506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742072656d6f76652073656c66477561726465643a2074782e6f726967696e206973206e6f742074686520677561726469616e506572736f6e616c4163636f756e7452656769737472793a204552433230546f6b656e207472616e736665722072657665727465644163636f756e74436f6e74726f6c6c65723a2063616e6e6f742073656e6420746f20636f6e74726f6c6c6572506572736f6e616c4163636f756e7452656769737472793a206f776e657220616c726561647920657869737473506572736f6e616c4163636f756e7452656769737472793a2063616e6e6f742061646420307830206f776e6572a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
  },
  "TypedDataContainer": {
    "abi": [
      {
        "inputs": [],
        "name": "typedDataDomainSeparator",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "addresses": {
      "3": null,
      "4": null,
      "5": null,
      "42": null,
      "56": null,
      "77": null,
      "97": null,
      "100": null,
      "6666": null,
      "9999": null
    },
    "byteCode": "0x",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
  },
  "Utils": {
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
      "3": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "4": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "5": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "42": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "56": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "77": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "97": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "100": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "6666": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b",
      "9999": "0xa6C165E3539A2bE6d55e2935EC9979D8C850A21b"
    },
    "byteCode": "0x608060405234801561001057600080fd5b506106a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ef5bfc3714610030575b600080fd5b6100fc6004803603604081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184602083028401116401000000008311171561009757600080fd5b9091929391929390803590602001906401000000008111156100b857600080fd5b8201836020820111156100ca57600080fd5b803590602001918460208302840111640100000000831117156100ec57600080fd5b9091929391929390505050610153565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561013f578082015181840152602081019050610124565b505050509050019250505060405180910390f35b60608061016f848490508787905061035490919063ffffffff16565b67ffffffffffffffff8111801561018557600080fd5b506040519080825280602002602001820160405280156101b45781602001602082028036833780820191505090505b50905060005b868690508110156103475760005b858590508110156103395760006101fd6101ee848989905061035490919063ffffffff16565b836103da90919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff1687878481811061022357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102d2576102b589898581811061026a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1688888581811061029357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16610462565b8482815181106102c157fe5b60200260200101818152505061032b565b8888848181106102de57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163184828151811061031e57fe5b6020026020010181815250505b5080806001019150506101c8565b5080806001019150506101ba565b5080915050949350505050565b60008083141561036757600090506103d4565b600082840290508284828161037857fe5b04146103cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806106726024913960400191505060405180910390fd5b809150505b92915050565b600080828401905083811015610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600080600090506000833b905060008111156106665760008473ffffffffffffffffffffffffffffffffffffffff166370a0823160e01b87604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610550578051825260208201915060208101905060208303925061052d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146105b0576040519150601f19603f3d011682016040523d82523d6000602084013e6105b5565b606091505b505090508015610664578473ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d602081101561065057600080fd5b810190808051906020019092919050505092505b505b81925050509291505056fe536166654d6174684c69623a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
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
      "3": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "4": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "5": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "42": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "56": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "77": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "97": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "100": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "6666": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616",
      "9999": "0x8e5ea4368fcd17A4efF851C5ffa6cd03bBDeb616"
    },
    "byteCode": "0x60806040523480156200001157600080fd5b50326000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600b81526020017f5772617070656420576569000000000000000000000000000000000000000000815250600190805190602001906200009f929190620000f4565b506040518060400160405280600481526020017f575745490000000000000000000000000000000000000000000000000000000081525060029080519060200190620000ed929190620000f4565b506200019a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013757805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001675782518255916020019190600101906200014a565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6120b080620001aa6000396000f3fe6080604052600436106101235760003560e01c806356a3b64b116100a0578063a9059cbb11610064578063a9059cbb1461065f578063b760faf9146106d0578063ca9add8f14610714578063dd62ed3e14610765578063f55647e0146107ea5761013b565b806356a3b64b146104d557806370a08231146104ec578063834ff73914610551578063853828b6146105b857806395d89b41146105cf5761013b565b806323b872dd116100e757806323b872dd146103085780632e1a7d4d14610399578063313ce567146103d4578063392e53cd14610402578063462d0b2e1461042f5761013b565b806306fdde0314610140578063095ea7b3146101d0578063116191b61461024157806318160ddd14610282578063205c2878146102ad5761013b565b3661013b57610139610133610801565b34610810565b005b600080fd5b34801561014c57600080fd5b50610155610a26565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019557808201518184015260208101905061017a565b50505050905090810190601f1680156101c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101dc57600080fd5b50610229600480360360408110156101f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac4565b60405180821515815260200191505060405180910390f35b34801561024d57600080fd5b50610256610ae2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561028e57600080fd5b50610297610b08565b6040518082815260200191505060405180910390f35b3480156102b957600080fd5b50610306600480360360408110156102d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b0e565b005b34801561031457600080fd5b506103816004803603606081101561032b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b24565b60405180821515815260200191505060405180910390f35b3480156103a557600080fd5b506103d2600480360360208110156103bc57600080fd5b8101908080359060200190929190505050610be1565b005b3480156103e057600080fd5b506103e9610bfd565b604051808260ff16815260200191505060405180910390f35b34801561040e57600080fd5b50610417610c10565b60405180821515815260200191505060405180910390f35b34801561043b57600080fd5b506104d36004803603604081101561045257600080fd5b810190808035906020019064010000000081111561046f57600080fd5b82018360208201111561048157600080fd5b803590602001918460208302840111640100000000831117156104a357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c66565b005b3480156104e157600080fd5b506104ea610e05565b005b3480156104f857600080fd5b5061053b6004803603602081101561050f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e17565b6040518082815260200191505060405180910390f35b34801561055d57600080fd5b506105a06004803603602081101561057457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e60565b60405180821515815260200191505060405180910390f35b3480156105c457600080fd5b506105cd610eb6565b005b3480156105db57600080fd5b506105e4610f0f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610624578082015181840152602081019050610609565b50505050905090810190601f1680156106515780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561066b57600080fd5b506106b86004803603604081101561068257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fad565b60405180821515815260200191505060405180910390f35b610712600480360360208110156106e657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b34801561072057600080fd5b506107636004803603602081101561073757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fd8565b005b34801561077157600080fd5b506107d46004803603604081101561078857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b6040518082815260200191505060405180910390f35b3480156107f657600080fd5b506107ff6110b9565b005b600061080b61120f565b905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610896576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fb66026913960400191505060405180910390fd5b6000811161090c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4552433230546f6b656e3a2063616e6e6f74206d696e7420302076616c75650081525060200191505060405180910390fd5b61095e81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b68160045461122090919063ffffffff16565b6004819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610abc5780601f10610a9157610100808354040283529160200191610abc565b820191906000526020600020905b815481529060010190602001808311610a9f57829003601f168201915b505050505081565b6000610ad8610ad1610801565b84846112a8565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b610b20610b19610801565b838361149f565b5050565b600080610b2f610801565b9050610b3c858585611538565b610bd58582610bd086600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b6112a8565b60019150509392505050565b610bfa610bec610801565b610bf4610801565b8361149f565b50565b600360009054906101000a900460ff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff1614610d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611ec8602f913960400191505060405180910390fd5b60008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008383905014610daa57600083839050905060005b81811015610da757610d9a858583818110610d7857fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff166115d8565b8080600101915050610d61565b50505b610db381611723565b7f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e632604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050565b610e15610e10610801565b6115d8565b565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000610ec0610801565b9050610f0c8182600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b50565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa55780601f10610f7a57610100808354040283529160200191610fa5565b820191906000526020600020905b815481529060010190602001808311610f8857829003601f168201915b505050505081565b6000610fc1610fba610801565b8484611538565b6001905092915050565b610fd58134610810565b50565b6000610fe2610801565b905061102e8183600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461149f565b5050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006110c3610801565b9050600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611167576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806120066027913960400191505060405180910390fd5b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe3f5ed5f263f1f01764a96edfc7d025f511ec5f7d180e8816908b78bcf74f09881604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600061121b6028611767565b905090565b60008082840190508381101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174684c69623a206164646974696f6e206f766572666c6f77000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561132e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611f8b602b913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180611f416029913960400191505060405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6114a983826117fc565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061202d6025913960400191505060405180910390fd5b505050565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561159a5761159583838361149f565b6115a6565b6115a58383836119b6565b5b505050565b60006115d08383604051806060016040528060218152602001611f6a60219139611c56565b905092915050565b600860008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561167b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ef76028913960400191505060405180910390fd5b6001600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f28b26e7a3d20aedbc5f8f2ebf7da671c0491723a2b78f47a097b0e46dee0714281604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009050611776611d10565b156117ef5760008360003690500390506117e76000368390601485019261179f93929190611e6c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611dd3565b9150506117f3565b3390505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611882576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611ea06028913960400191505060405180910390fd5b6118ee8160405180606001604052806026815260200161205260269139600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c569092919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611946816004546115ab90919063ffffffff16565b600481905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612078602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ac2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611fdc602a913960400191505060405180910390fd5b611b1481600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115ab90919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ba981600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461122090919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cc8578082015181840152602081019050611cad565b50505050905090810190601f168015611cf55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600080600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611dcc57602c60003690501015611dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611f1f6022913960400191505060405180910390fd5b600190505b8091505090565b6000806014835114611e4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42797465734c69623a20696e76616c69642064617461206c656e67746800000081525060200191505060405180910390fd5b6c01000000000000000000000000602084015104905080915050919050565b60008085851115611e7c57600080fd5b83861115611e8957600080fd5b600185028301915084860390509450949250505056fe4552433230546f6b656e3a2063616e6e6f74206275726e2066726f6d203078302061646472657373496e697469616c697a61626c653a2074782e6f726967696e206973206e6f742074686520696e697469616c697a657257726170706564576569546f6b656e3a20636f6e73756d657220616c72656164792065786973747347617465776179526563697069656e743a20696e76616c6964206d73672e646174614552433230546f6b656e3a2063616e6e6f7420617070726f766520746f203078302061646472657373536166654d6174684c69623a207375627472616374696f6e206f766572666c6f774552433230546f6b656e3a2063616e6e6f7420617070726f76652066726f6d2030783020616464726573734552433230546f6b656e3a2063616e6e6f74206d696e7420746f2030783020616464726573734552433230546f6b656e3a2063616e6e6f74207472616e7366657220746f20307830206164647265737357726170706564576569546f6b656e3a20636f6e73756d657220646f65736e277420657869737457726170706564576569546f6b656e3a207472616e73616374696f6e2072657665727465644552433230546f6b656e3a206275726e2076616c756520657863656564732062616c616e63654552433230546f6b656e3a2063616e6e6f74207472616e736665722066726f6d203078302061646472657373a164736f6c634300060c000a",
    "typedDataDomainName": null,
    "typedDataDomainVersion": null
  }
};
