pragma solidity 0.5.12;

import {Initializable} from "../shared/initializable/Initializable.sol";
import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {IAccountRegistry} from "../account/interfaces.sol";
import {ISignedMessageRegistry} from "../signedMessage/interfaces.sol";
import {SignatureLib} from "./SignatureLib.sol";


/**
 * @title SignatureValidator
 */
contract SignatureValidator is Initializable, NoFallback {
  using SignatureLib for bytes32;

  IAccountRegistry public accountRegistry;
  ISignedMessageRegistry public signedMessageRegistry;

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external access

  function initialize(
    IAccountRegistry _accountRegistry,
    ISignedMessageRegistry _signedMessageRegistry
  ) external onlyInitializer {
    accountRegistry = _accountRegistry;
    signedMessageRegistry = _signedMessageRegistry;
  }

  function verifySignature(
    bytes32 _messageHash,
    bytes calldata _signature,
    address _signer
  ) external view returns (bool _result) {
    if (_signature.length == 0) {
      _result = signedMessageRegistry.isMessageHashSigned(
        _messageHash,
        _signer
      );
    } else {
      address _recovered = _messageHash.recoverAddress(_signature);
      if (_recovered != address(0)) {
        if (_recovered == _signer) {
          _result = true;
        } else {
          _result = accountRegistry.hasEverBeenAccountOwner(
            _signer,
            _recovered
          );
        }
      }
    }

    return _result;
  }
}
