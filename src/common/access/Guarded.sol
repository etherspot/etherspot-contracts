pragma solidity 0.5.15;

import "../libs/SignatureLib.sol";


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

  // external functions

  function addGuardian(
    address guardian
  )
    external
    onlyGuardian
  {
    _addGuardian(guardian);
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
    return _verifyGuardianSignature(
      messageHash,
      signature
    );
  }

  // internal functions

  function _initializeGuarded(
    address[] memory guardians_
  )
    internal
  {
    if (guardians_.length == 0) {
      guardians[msg.sender] = true;
    } else {
      uint guardiansLen = guardians_.length;
      for (uint i = 0; i < guardiansLen; i++) {
        _addGuardian(guardians_[i]);
      }
    }
  }


  // internal functions (views)

  function _verifyGuardianSignature(
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

  // private functions

  function _addGuardian(
    address guardian
  )
    private
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
}
