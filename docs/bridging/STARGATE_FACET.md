# StargateFacet Smart Contract Documentation

## Overview

The StargateFacet is a Solidity smart contract that provides Stargate/LayerZero integration for bridging tokens across different chains. It allows users to transfer tokens and Ether between different chains using Stargate's routing mechanism.

## Contract Details

Solidity Version: 0.8.17  
License: MIT  

## Imports

*@openzeppelin/contracts/token/ERC20/IERC20.sol*: Interface for ERC20 tokens.  
*@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol*: Library for safe ERC20 token operations.  
*../../common/helpers/DiamondReentrancyGuard.sol*: Helper contract for preventing reentrancy attacks.  
*../libs/LibDiamond.sol*: Library for Diamond proxy contract implementation.  
*../interfaces/stargate/IStargateRouter.sol*: Interface for Stargate Router contract.  
*../interfaces/stargate/IStargateRouterETH.sol*: Interface for Stargate ETH Router contract.  
*../interfaces/stargate/IStargateReceiver.sol*: Interface for Stargate Receiver contract.  

## Storage and Structs

The contract has the following storage variables and structs:

**Storage**  
Contains various state variables for the contract:

* `stargateRouter`: Address of the Stargate Router contract.
* `stargateETHRouter`: Address of the Stargate ETH Router contract.
* `chainId`: Current chain ID.
* `lzChainIds`: Mapping of chain IDs to corresponding LayerZero chain IDs.
  
**ChainIdConfig**  
Represents the mapping of chain IDs to LayerZero chain IDs:

* `chainId`: Actual chain ID.
* `layerZeroChainId`: LayerZero chain ID that corresponds to the actual chain ID.
  
**StargateData**  
Represents the data required for token transfers between chains:

* `amount`: Amount of tokens to swap.
* `bridgeToken`: The address of the native ERC20 token to swap.
* `dstChainId`: Chain ID of the destination chain.
* `srcPoolId`: Stargate pool ID for the source tokens.
* `dstPoolId`: Stargate pool ID for the destination tokens.
* `to`: Address to receive the destination tokens.
* `slippage`: Slippage tolerance on the quantity (in basis points).
* `destStargateComposed`: Address of the destination contract that must implement `sgReceive`.

**StargateETHData**  
Represents the data required for Ether transfers between chains:

* `amount`: Amount of Ether to swap.
* `dstChainId`: Chain ID of the destination chain.
* `to`: Address to receive the destination Ether.
* `slippage`: Slippage tolerance on the quantity (in basis points).

## Events

The contract emits the following events:

**StargateInitialized**  
Emitted when the facet is initialized.

Parameters:

* `stargateRouter`: Address of the Stargate Router contract.
* `stargateETHRouter`: Address of the Stargate ETH Router contract.
* `chainId`: Current chain ID.
  
**StargateTokenSwap**  
Emitted on ERC20 token swap between chains.

Parameters:

* `fromToken`: Address of the token being swapped.
* `from`: Address from which the token is transferred.
* `to`: Address to which the token is transferred.
* `amount`: Amount of tokens being swapped.
* `chainIdTo`: Receiving chain ID.

**StargateETHSwap**  
Emitted on ETH swap between chains.

Parameters:

* `from`: Address from which the ETH is transferred.
* `to`: Address to which the ETH is transferred.
* `amount`: Amount of ETH being swapped.
* `chainIdTo`: Receiving chain ID.

**StargateReceivedOnDestination**  
Emitted when tokens are received on the destination chain.

Parameters:

* `token`: Address of the token received.
* `amount`: Amount of tokens received.

**LzChainIdSet**  
Emitted when a LayerZero chain ID is set for a chain.

Parameters:

* `chainId`: Chain ID for which the LayerZero chain ID is set.
* `lzChainId`: LayerZero chain ID that corresponds to the chain ID.

## Public/External Functions

The contract provides the following functions:

`initStargate`  
Initializes the state variables for the Stargate facet.

Parameters:

* `_stargateRouter`: Address of the Stargate Router contract.
* `_stargateEthRouter`: Address of the Stargate ETH Router contract.
* `_chainId`: Current chain ID.
* `_chainIdConfigs`: An array of ChainIdConfig representing mappings of chain IDs to LayerZero chain IDs.

`stargateTokenTransfer`  
Initiates a token bridge transfer between chains.

Parameters:

* `_data`: A StargateData object containing the transfer details.

`stargateETHTransfer`  
Initiates an Ether bridge transfer between chains.

Parameters:

* `_data`: A StargateETHData object containing the transfer details.

`stargateFees`  
Calculates the cross-chain fee for a token transfer.

Parameters:

* `_data`: A StargateData object containing the transfer details.
* `_router`: Address of the Stargate Router contract.
Returns: The calculated fee amount.

`sgReceive`  
Required to receive tokens on the destination chain.

Parameters:

* `_chainId`: Chain ID of the sender.
* `_srcAddress`: Source address on the sender chain (not used).
* `_nonce`: Nonce of the sender chain (not used).
* `_token`: The address of the token contract on the local chain.
* `_amountLD`: The quantity of local token contract tokens to receive.
* `_payload`: Bytes containing the destination address.

`getLzChainId`  
Gets the LayerZero chain ID for the specified chain.

Parameters:

* `_chainId`: Chain ID for which to get the LayerZero chain ID.
Returns: The corresponding LayerZero chain ID.

`setLzChainId`  
Sets the LayerZero chain ID for the specified chain.

Parameters:

* `_chainId`: Chain ID for which to set the LayerZero chain ID.
* _lzChainId: LayerZero chain ID to set.

## Internal Functions

`getStargateRouter`  
Retrieves Stargate Router address from storage

Returns: The Stargate Router address for the current chain.

`getStargateETHRouter`  
Retrieves Stargate ETH Router address from storage

Returns: The Stargate ETH Router address for the current chain (if no ETH router then zero address will be returned).

`getChainId`  
Retrieves current chain ID.

Returns: The current chain ID that the facet is deployed on.

`getStorage`  
Retrieves Storage struct data.

Returns: All of the data stored in the Storage struct.
