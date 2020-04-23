pragma solidity 0.5.15;

import "../../signature/SignatureLib.sol";


/**
 * @title Guarded
 */
contract Guarded {
  using SignatureLib for bytes32;

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
      guardians[msg.sender]
    );

    _;
  }

  /**
   * @dev internal constructor
   */
  constructor()
    internal
  {
    guardians[msg.sender] = true;
  }

  // external functions

  function addGuardian(
    address guardian
  )
    external
    onlyGuardian
  {
    require(
      guardian != address(0)
    );

    require(
      !guardians[guardian]
    );

    guardians[guardian] = true;

    emit GuardianAdded(guardian);
  }

  function removeGuardian(
    address guardian
  )
    external
    onlyGuardian
  {
    require(
      msg.sender != guardian
    );

    require(
      guardians[guardian]
    );

    guardians[guardian] = false;

    emit GuardianRemoved(
      guardian
    );
  }

  // external functions (views)

  function isGuardian(
    address guardian
  )
    external
    view
    returns (bool)
  {
    return guardians[guardian];
  }

  function verifyGuardianSignature(
    bytes32 messageHash,
    bytes calldata signature
  )
    external
    view
    returns (bool)
  {
    return internallyVerifyGuardianSignature(
      messageHash,
      signature
    );
  }

  // internal functions (views)

  function internallyVerifyGuardianSignature(
    bytes32 messageHash,
    bytes memory signature
  )
    internal
    view
    returns (bool)
  {
    address guardian = messageHash.recoverAddress(signature);

    return guardians[guardian];
  }
}
