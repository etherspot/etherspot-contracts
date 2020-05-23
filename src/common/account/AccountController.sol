pragma solidity 0.5.15;

import "./Account.sol";


/**
 * @title AccountController
 */
contract AccountController {
  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal functions

  function _deployAccount(
    bytes32 salt
  )
    internal
    returns (address)
  {
    return _deployAccount(
      salt,
      0
    );
  }

  function _deployAccount(
    bytes32 salt,
    uint256 value
  )
    internal
    returns (address)
  {
    address result = address(0);

    bytes memory creationCode = type(Account).creationCode;

    // solhint-disable-next-line no-inline-assembly
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

  function _executeAccountTransaction(
    address payable account,
    address payable to,
    uint256 value,
    bytes memory data
  )
    internal
  {
    require(
      to != address(0)
    );

    require(
      to != address(this)
    );

    require(
      to != account
    );

    Account(account).executeTransaction(
      to,
      value,
      data
    );
  }

  // internal functions (views)

  function _computeAccountAddress(
    bytes32 salt
  )
    internal
    view
    returns (address)
  {
    bytes memory creationCode = type(Account).creationCode;

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
