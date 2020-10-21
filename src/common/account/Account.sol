// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "../access/Controlled.sol";


/**
 * @title Account
 */
contract Account is Controlled {
  /**
   * @dev public constructor
   */
  constructor() public payable Controlled() {}

  /**
   * @dev receive
   */
  receive()
    external
    payable
  {
    //
  }

  // external functions

  function executeTransaction(
    address to,
    uint256 value,
    bytes calldata data
  )
    external
    onlyController
  {
    // solhint-disable-next-line avoid-call-value, avoid-low-level-calls
    (bool succeeded, bytes memory returnData) = payable(to).call{value: value}(data);

    require(
      succeeded
    );

    if (returnData.length > 0) {
      require(
        abi.decode(returnData, (bool))
      );
    }
  }
}
