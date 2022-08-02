# Diamond Standard

This repo is based on this implementation of [the diamond standard](https://github.com/ethereum/EIPs/issues/2535) - https://github.com/mudgen/diamond-3-hardhat/

## Facets

### StargateFacet.sol

Implementation of the Stargate Omnichain Asset Bridge ([Stargate Docs](https://stargateprotocol.gitbook.io/stargate/)).

#### Contact Functions
- sgBridgeTokens: Used to bridge tokens from a supported chain to another supported chain.
- sgReceive: This is triggered when the contract on destination chain receives tokens and payload. It then handles the transfer to the receiving address of the tokens.
- sgMinAmountOut: Calculates the minimum amount that will be transferred taking into account the slippage on the transaction.
- sgCheckPoolId: Checks that a Stargate pool is valid when providing the destination chain ([chain ids can be found here](https://stargateprotocol.gitbook.io/stargate/developers/contract-addresses/mainnet)), token address and pool id.
- sgRetrievePoolId: Retrieves pool id given the destination chain (same as above) and the token address on destination chain.

See NatSpec in contract for more in depth function documentation.