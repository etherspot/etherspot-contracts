# Signing Data

[EIP-712: Ethereum typed structured data hashing and signing](https://eips.ethereum.org/EIPS/eip-712) 
is used across whole project.

Domain message data structure:
 
```solidity
 bytes32 TYPE_HASH = keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract,bytes32 salt)");
```

Parameters:

| name | note / value |
| --- | --- |
| `name` | available from npm package (`getContractTypedDataDomainName()` function) | 
| `version` | `keccak256("4")` | 
| `chainId` | current chain id | 
| `verifyingContract` | current contract | 
| `salt` | available from npm package (`TYPED_DATA_DOMAIN_SALT` constant) | 
