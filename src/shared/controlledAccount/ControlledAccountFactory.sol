pragma solidity 0.5.15;

import {ControlledAccount} from "./ControlledAccount.sol";


/**
 * @title ControlledAccountFactory
 */
contract ControlledAccountFactory {
  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    //
  }

  // internal functions

  function createControlledAccount(
    bytes32 salt
  )
    internal
    returns (address)
  {
    return createControlledAccount(
      salt,
      0
    );
  }

  function createControlledAccount(
    bytes32 salt,
    uint256 value
  )
    internal
    returns (address)
  {
    address result = address(0);

    /* solhint-disable */
    bytes memory creationCode = type(ControlledAccount).creationCode;
    /* solhint-enable */

    assembly {
      let p := add(creationCode, 0x20)
      let n := mload(creationCode)
      result := create2(value, p, n, salt)

      if iszero(extcodesize(result)) {
        revert(0, 0)
      }
    }

    return result;
  }

  function executeControlledAccountTransaction(
    address payable account,
    address payable to,
    uint256 value,
    bytes memory data
  )
    internal
  {
    ControlledAccount(account).executeTransaction(
      to,
      value,
      data
    );
  }

  // internal functions (views)

  function computeControlledAccountAddress(
    bytes32 salt
  )
    internal
    view
    returns (address)
  {
    /* solhint-disable */
    bytes memory creationCode = type(ControlledAccount).creationCode;
    /* solhint-enable */

    bytes32 data = keccak256(
      abi.encodePacked(
        bytes1(0xff),
        address(this),
        salt,
        keccak256(creationCode)
      )
    );

    return address(bytes20(data << 96));
  }
}
