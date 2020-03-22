pragma solidity 0.5.12;

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

  // external access

  function computeControlledAccountAddress(
    bytes32 _salt
  ) external view returns (address) {
    return _computeControlledAccountAddress(_salt);
  }

  function createControlledAccount(
    bytes32 _salt
  ) external payable {
    address _account = _createControlledAccount(
      _salt,
      msg.value
    );

    emit ControlledAccountCreated(_account);
  }
}
