pragma solidity 0.5.12;

/**
 * @title AddressLib
 */
library AddressLib {
  function toPayable(
    address _address
  ) internal pure returns (address payable) {
    return address(uint160(_address));
  }
}
