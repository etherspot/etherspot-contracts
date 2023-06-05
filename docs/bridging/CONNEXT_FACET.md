# ConnextFacet.sol

This smart contract enables bridging functionality through the Connext Network. The smart contract provides methods to facilitate ERC20 token and Ether transfers between different chains.  

## Contract Imports

This smart contract requires the following Solidity libraries:  

- `IConnext`: This library is imported from the @connext/nxtp-contracts/contracts/core/connext/interfaces/IConnext.sol package and provides an interface for making cross-chain transfers using the Connext Network.  
- `IERC20`: This library is imported from the @openzeppelin/contracts/token/ERC20/IERC20.sol package and provides an interface for interacting with ERC20 tokens.  
- `SafeERC20`: This library is imported from the @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol package and provides an implementation of the IERC20 interface with additional safety checks to prevent common ERC20-related issues.  
- `IWETH`: This library is imported from the interfaces/IWETH.sol package and provides an interface for interacting with Wrapped Ether (WETH).  
- `LibDiamond`: This library is imported from the libs/LibDiamond.sol package and provides helper functions for diamond storage.  

## Contract Details

### Storage and Structs

The smart contract contains the following storage variable and struct:  

#### `Storage`

This storage struct is used to store the following data:  

- `connext`: the address of the Connext handler.  
- `domainId`: the domain ID.  
- `weth`: the address of the Wrapped Ether (WETH) token contract.  

### Events

The smart contract emits the following events:  
`ConnextInitialized`: Emitted when the Connext facet is initialized.  
`ConnextTokenSwap`: Emitted when an ERC20 token swap is made.  
`ConnextEthSwap`: Emitted when an Ether swap is made.  

### Initialization Function

#### `initConnext`

This function initializes local variables for the Connext facet. Can only be called by Diamond owner. The function takes the following parameters:  

- `_connext`: the Connext handler address.  
- `_domainId`: the domain ID.  
- `_weth`: the WETH token address.  

### External Functions

The smart contract includes the following external functions:  

#### `connextTokenTransfer`

This function transfers non-native assets from one chain to another. The user must approve a spending allowance before calling this function. The function takes the following parameters:  

- `_token`: the address of the token on this domain.  
- `_amount`: the amount to transfer.  
- `_recipient`: the destination address (e.g., a wallet).  
- `_destinationDomain`: the destination domain ID.  
- `_slippage`: the maximum amount of slippage the user will accept in basis points (BPS).  
- `_relayerFee`: the fee offered to relayers.  

**NOTE: `_relayerFee` is paid in native ETH and should be passed in as `msg.value` when calling the function.**  

#### `connextEthTransfer`

This function transfers Ethereum from one chain to another. The function takes the following parameters:  

- `_destinationUnwrapper`: the address of the unwrapper contract on destination.  
- `_amount`: the amount to transfer.  
- `_recipient`: the destination address (e.g., a wallet).  
- `_destinationDomain`: the destination domain ID.  
- `_slippage`: the maximum amount of slippage the user will accept in basis points (BPS).  
- `_relayerFee`: the fee offered to relayers.  

**NOTE: `_relayerFee` is paid in native ETH and should be passed in as `msg.value` along with the ETH amount to transfer when calling the function (`msg.value` should equal `_amount` + `_relayerFee`).**  

## License

This contract is licensed under the MIT license.  

## Unwrapper contract addresses

### Mainnets

**Ethereum**:

- Chain ID: 1
- Domain ID: 6648936
- Unwrapper address: `0x268682b7D9992aE7e2ca4A8bCc9D9655FB06056F`

**Optimism**:

- Chain ID: 10
- Domain ID: 1869640809
- Unwrapper address: `0x7Fe09d217d646a6213e51b237670Bc326188cB93`
  
**Matic**:

- Chain ID: 137
- Domain ID: 1886350457
- Unwrapper address: `0x7E8F8B2dA3dc5Ad9c9Dfd1A832331A039d4f3f74`

**Arbitrum**:

- Chain ID: 42161
- Domain ID: 1634886255
- Unwrapper address: `0x429b9eb01362b2799131EfCC44319689b662999D`

**Binance Smart Chain**:

- Chain ID: 56
- Domain ID: 6450786
- Unwrapper address: `0x2c7B8c1a13F2a7854B9299E4d22809A8B1E05De5`

**Gnosis Chain**:

- Chain ID: 100
- Domain ID: 6778479
- Unwrapper address: `0x642c27a96dFFB6f21443A89b789a3194Ff8399fa`

### Testnets

**Goerli**:

- Chain ID: 5
- Domain ID: 1735353714
- Unwrapper address: `0xa6633d369A9C4C8A442ef104E8e293DA7b352Acd`

**Optimism Goerli**:

- Chain ID: 420
- Domain ID: 1735356532
- Unwrapper address: `0x08bDeFD0e4878A814Cb2fd11C033F3947251689f`

**Mumbai**:

- Chain ID: 80001
- Domain ID: 9991
- Unwrapper address: `0x1e0Db00EB08ceC7FFdA03c0Dbf224193E1563844`

**Arbitrum Nitro**:

- Chain ID: 421613
- Domain ID: 1734439522
- Unwrapper address: `0x18BBF96BC8014aA93cbf1A5Bce005a485b5C2C4a`
