pragma solidity 0.5.12;

import {ControlledAccount} from "./ControlledAccount.sol";


/**
 * @title ControlledAccountFactory
 */
contract ControlledAccountFactory {
  /**
   * @dev internal constructor
   */
  constructor() internal {}

  // internal access

  function _computeControlledAccountAddress(
    bytes32 _salt
  ) internal view returns (address) {
    /* solhint-disable */
    bytes32 _creationCodeHash = keccak256(type(ControlledAccount).creationCode);
    /* solhint-enable */

    bytes32 _data = keccak256(
      abi.encodePacked(
        bytes1(0xff),
        address(this),
        _salt,
        _creationCodeHash
      )
    );

    return address(bytes20(_data << 96));
  }

  function _createControlledAccount(
    bytes32 _salt
  ) internal returns (address) {
    return _createControlledAccount(
      _salt,
      0
    );
  }

  function _createControlledAccount(
    bytes32 _salt,
    uint256 _value
  ) internal returns (address _result) {
    /* solhint-disable */
    bytes memory _creationCode = type(ControlledAccount).creationCode;
    /* solhint-enable */

    assembly {
      let p := add(_creationCode, 0x20)
      let n := mload(_creationCode)
      _result := create2(_value, p, n, _salt)
      if iszero(extcodesize(_result)) {
        revert(0, 0)
      }
    }

    return _result;
  }
}
