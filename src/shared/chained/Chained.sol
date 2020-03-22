pragma solidity 0.5.12;

/**
 * @title Chained
 */
contract Chained {
  uint256 public chainId;

  /**
   * @dev internal constructor
   */
  constructor() internal {
    uint256 _chainId;

    assembly {
      _chainId := chainid
    }

    chainId = _chainId;
  }
}
