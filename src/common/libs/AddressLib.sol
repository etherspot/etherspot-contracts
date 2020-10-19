// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

/**
 * @title AddressLib
 */
library AddressLib {
  function toPayable(
    address addr
  )
    internal
    pure
    returns (address payable)
  {
    return address(uint160(addr));
  }
}
