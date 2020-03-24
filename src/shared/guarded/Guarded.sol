pragma solidity 0.5.12;

import {SignatureLib} from "../../signature/SignatureLib.sol";


/**
 * @title Guarded
 */
contract Guarded {
  using SignatureLib for bytes32;

  string private constant ERR_ONLY_GUARDIAN = "reverted by onlyGuardian";
  string private constant ERR_INVALID_GUARDIAN = "invalid guardian";

  mapping(address => bool) private guardians;

  // events

  event GuardianAdded(
    address guardian
  );

  event GuardianRemoved(
    address guardian
  );

  // modifiers

  modifier onlyGuardian() {
    require(
      guardians[msg.sender],
      ERR_ONLY_GUARDIAN
    );

    _;
  }

  /**
   * @dev internal constructor
   */
  constructor() internal {
    guardians[msg.sender] = true;
  }

  // external access

  function isGuardian(
    address _guardian
  ) external view returns (bool) {
    return guardians[_guardian];
  }

  function verifyGuardianSignature(
    bytes32 _messageHash,
    bytes calldata _signature
  ) external view returns (bool) {
    return _verifyGuardianSignature(
      _messageHash,
      _signature
    );
  }

  function addGuardian(
    address _guardian
  ) external onlyGuardian {
    require(
      _guardian != address(0),
      ERR_INVALID_GUARDIAN
    );

    require(
      !guardians[_guardian],
      ERR_INVALID_GUARDIAN
    );

    guardians[_guardian] = true;

    emit GuardianAdded(_guardian);
  }

  function removeGuardian(
    address _guardian
  ) external onlyGuardian {
    require(
      msg.sender != _guardian,
      ERR_INVALID_GUARDIAN
    );

    require(
      guardians[_guardian],
      ERR_INVALID_GUARDIAN
    );

    guardians[_guardian] = false;

    emit GuardianRemoved(_guardian);
  }

  // internal access

  function _verifyGuardianSignature(
    bytes32 _messageHash,
    bytes memory _signature
  ) internal view returns (bool) {
    address _guardian = _messageHash.recoverAddress(_signature);
    return guardians[_guardian];
  }
}
