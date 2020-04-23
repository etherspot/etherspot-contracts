pragma solidity 0.5.15;

import {ControlledAccountFactory} from "./ControlledAccountFactory.sol";


/**
 * @title ControlledAccountFactoryMock
 */
contract ControlledAccountFactoryMock is ControlledAccountFactory {
  // events

  event ControlledAccountCreated(address account);

  /**
   * @dev public constructor
   */
  constructor() public {}

  // external functions

  function createControlledAccountMock(
    bytes32 salt
  )
    external
    payable
  {
    address account = createControlledAccount(
      salt,
      msg.value
    );

    emit ControlledAccountCreated(
      account
    );
  }

  function executeControlledAccountTransactionMock(
    address payable account,
    address payable to,
    uint256 value,
    bytes calldata data
  )
    external
    payable
  {
    executeControlledAccountTransaction(
      account,
      to,
      value,
      data
    );
  }

  // external functions (views)

  function computeControlledAccountAddressMock(
    bytes32 salt
  )
    external
    view returns (address)
  {
    return computeControlledAccountAddress(salt);
  }
}
