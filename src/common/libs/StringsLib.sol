// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * @title Strings library
 *
 * @dev Based on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/utils/Strings.sol#L12
 */
library StringsLib {
  function toString(
    uint256 value
  )
    internal
    pure
    returns (string memory)
  {
    if (value == 0) {
      return "0";
    }

    uint256 temp = value;
    uint256 digits;

    while (temp != 0) {
      digits++;
      temp /= 10;
    }

    bytes memory buffer = new bytes(digits);
    uint256 index = digits - 1;
    temp = value;

    while (temp != 0) {
      buffer[index--] = byte(uint8(48 + temp % 10));
      temp /= 10;
    }

    return string(buffer);
  }
}
