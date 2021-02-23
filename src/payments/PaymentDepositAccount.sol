// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/access/Controlled.sol";


/**
 * @title Payment deposit account
 *
 * @dev Simple account contract with only one method - `executeTransaction`
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract PaymentDepositAccount is Controlled {
  /**
   * @dev Public constructor
   */
  constructor() public payable Controlled() {}

  /**
   * @notice Allow receives
   */
  receive()
    external
    payable
  {
    //
  }

  // external functions

  /**
   * @notice Executes transaction
   * @param to to address
   * @param value value
   * @param data data
   * @return transaction result
   */
  function executeTransaction(
    address to,
    uint256 value,
    bytes calldata data
  )
    external
    onlyController
    returns (bytes memory)
  {
    bytes memory result;
    bool succeeded;

    // solhint-disable-next-line avoid-call-value, avoid-low-level-calls
    (succeeded, result) = payable(to).call{value: value}(data);

    require(
      succeeded,
      "Account: transaction reverted"
    );

    return result;
  }
}
