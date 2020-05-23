pragma solidity 0.5.15;

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
