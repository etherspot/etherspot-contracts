pragma solidity 0.5.12;

import {Initializable} from "../shared/initializable/Initializable.sol";
import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {HashLib} from "../shared/HashLib.sol";
import {IAccountRegistry} from "../account/interfaces.sol";
import {IMessageRegistry} from "../message/interfaces.sol";
import {SignatureLib} from "./SignatureLib.sol";
import {ISignatureValidator} from "./interfaces.sol";


/**
 * @title SignatureValidator
 */
contract SignatureValidator is Initializable, NoFallback, ISignatureValidator {
  using HashLib for address;
  using SignatureLib for bytes32;

  IAccountRegistry public accountRegistry;
  IMessageRegistry public messageRegistry;

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external access

  function initialize(
    IAccountRegistry _accountRegistry,
    IMessageRegistry _messageRegistry
  ) external onlyInitializer {
    accountRegistry = _accountRegistry;
    messageRegistry = _messageRegistry;
  }

  function verifySignature(
    bytes32 _messageHash,
    bytes calldata _signature,
    address _signer
  ) external view returns (bool) {
    return _verifySignature(
      _messageHash,
      _signature,
      _signer,
      block.number
    );
  }

  function verifySignatureAtBlock(
    bytes32 _messageHash,
    bytes calldata _signature,
    address _signer,
    uint256 _blockNumber
  ) external view returns (bool) {
    return _verifySignature(
      _messageHash,
      _signature,
      _signer,
      _blockNumber
    );
  }

  // private

  function _verifySignature(
    bytes32 _messageHash,
    bytes memory _signature,
    address _signer,
    uint256 _blockNumber
  ) private view returns (bool _result) {
    if (_signature.length == 0) {
      _result = messageRegistry.verifySenderMessageHashAtBlock(
        _signer,
        _messageHash,
        _blockNumber
      );
    } else {
      address _recovered = _messageHash.recoverAddress(_signature);
      if (_recovered != address(0)) {
        if (_recovered == _signer) {
          _result = true;
        } else {
          _result = accountRegistry.verifyAccountOwnerAtBlock(
            _signer,
            _recovered,
            _blockNumber
          );

          if (!_result) {
            _result = messageRegistry.verifySenderMessageHashAtBlock(
              _signer,
              _recovered.toAuthorizedMessageHash(),
              _blockNumber
            );
          }
        }
      }
    }

    return _result;
  }

}
