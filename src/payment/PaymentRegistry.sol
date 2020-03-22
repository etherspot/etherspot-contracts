pragma solidity 0.5.12;

import {Chained} from "../shared/chained/Chained.sol";
import {ControlledAccountFactory} from "../shared/controlledAccount/ControlledAccountFactory.sol";
import {IControlledAccount} from "../shared/controlledAccount/interfaces.sol";
import {Guarded} from "../shared/guarded/Guarded.sol";
import {Initializable} from "../shared/initializable/Initializable.sol";
import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {SafeMathLib} from "../shared/SafeMathLib.sol";
import {ISignatureValidator} from "../signature/interfaces.sol";
import {SignedMessageLib} from "../signedMessage/SignedMessageLib.sol";


/**
 * @title PaymentRegistry
 */
contract PaymentRegistry is Chained, ControlledAccountFactory, Guarded, Initializable, NoFallback {
  using SafeMathLib for uint256;
  using SignedMessageLib for bytes;

  struct Deposit {
    address account;
  }

  struct PaymentChannel {
    uint256 committedAmount;
  }

  ISignatureValidator private signatureValidator;
  mapping(address => Deposit) private deposits;
  mapping(bytes32 => PaymentChannel) private paymentChannels;

  // events

  event DepositAccountDeployed(address account, address owner);

  /**
   * @dev public constructor
   */
  constructor() public Chained() Initializable() {}

  // external access

  function initialize(
    address[] calldata _guardians,
    ISignatureValidator _signatureValidator
  ) external onlyInitializer {
    _initializeGuarded(_guardians);

    signatureValidator = _signatureValidator;
  }

  function computeDepositAccountAddress(
    address _owner
  ) external view returns (address) {
    bytes32 _salt = keccak256(
      abi.encodePacked(
        _owner
      )
    );

    return _computeControlledAccountAddress(_salt);
  }

  function deployDepositAccount(
    address _owner
  ) external {
    _deployDepositAccount(_owner);
  }

  function getPaymentChannel(
    address _sender,
    address _recipient,
    address _token,
    bytes32 _uid
  ) external view returns (uint256 _committedAmount) {
    bytes32 _hash = _computePaymentChannelHash(
      _sender,
      _recipient,
      _token,
      _uid
    );

    _committedAmount = paymentChannels[_hash].committedAmount;
  }

  // private access

  function _deployDepositAccount(
    address _owner
  ) private {
    bytes32 _salt = keccak256(
      abi.encodePacked(
        _owner
      )
    );

    deposits[_owner].account = _createControlledAccount(_salt);

    emit DepositAccountDeployed(deposits[_owner].account, _owner);
  }

  function _computePaymentChannelHash(
    address _sender,
    address _recipient,
    address _token,
    bytes32 _uid
  ) private pure returns (bytes32) {
    return keccak256(
      abi.encodePacked(
        _sender,
        _recipient,
        _token,
        _uid
      )
    );
  }

  function _commitPaymentChannel(
    address _sender,
    address _recipient,
    address _token,
    bytes32 _uid,
    uint256 _amount,
    bytes memory _guardianSignature,
    bytes memory _senderSignature
  ) private returns (address _depositAccount, uint256 _paymentValue) {
    bytes32 _messageHash = abi.encodePacked(
      chainId,
      address(this),
      _sender,
      _recipient,
      _token,
      _uid,
      _amount
    )
    .toSignedMessageHash();

    require(
      _verifyGuardianSignature(_messageHash, _guardianSignature)
    );

    require(
      signatureValidator.verifySignature(_messageHash, _senderSignature, _sender)
    );

    bytes32 _hash = _computePaymentChannelHash(
      _sender,
      _recipient,
      _token,
      _uid
    );

    // calc payment value
    _paymentValue = _amount.sub(paymentChannels[_hash].committedAmount);

    require(
      _paymentValue != 0
    );

    paymentChannels[_hash].committedAmount = _amount;

    // deploy deposit account if not deployed yet
    if (deposits[_sender].account == address(0)) {
      _deployDepositAccount(_sender);
    }

    _depositAccount = deposits[_sender].account;
  }
}
