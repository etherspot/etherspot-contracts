pragma solidity 0.5.12;

import {Chained} from "../shared/chained/Chained.sol";
import {ControlledAccountFactory} from "../shared/controlledAccount/ControlledAccountFactory.sol";
import {IControlledAccount} from "../shared/controlledAccount/interfaces.sol";
import {Guarded} from "../shared/guarded/Guarded.sol";
import {Initializable} from "../shared/initializable/Initializable.sol";
import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {AddressLib} from "../shared/AddressLib.sol";
import {SafeMathLib} from "../shared/SafeMathLib.sol";
import {ISignatureValidator} from "../signature/interfaces.sol";
import {SignedMessageLib} from "../signedMessage/SignedMessageLib.sol";
import {IERC20Token} from "../tokens/interfaces.sol";


/**
 * @title PaymentRegistry
 */
contract PaymentRegistry is Chained, ControlledAccountFactory, Guarded, Initializable, NoFallback {
  using AddressLib for address;
  using SafeMathLib for uint256;
  using SignedMessageLib for bytes;

  struct Deposit {
    address account;
    mapping(address => uint256) withdrawalLockedUntil;
  }

  struct PaymentChannel {
    uint256 committedAmount;
  }

  uint256 public depositWithdrawalLockPeriod;
  ISignatureValidator private signatureValidator;
  mapping(address => Deposit) private deposits;
  mapping(bytes32 => PaymentChannel) private paymentChannels;

  // events

  event DepositAccountDeployed(
    address account,
    address owner
  );

  event DepositWithdrawalRequested(
    address account,
    address owner,
    address token,
    uint256 lockedUntil
  );

  event DepositWithdrawn(
    address account,
    address owner,
    address token,
    uint256 amount
  );

  event PaymentChannelCommitted(
    bytes32 hash,
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 amount
  );

  event PaymentWithdrawn(bytes32 channelHash, uint256 value);

  event PaymentDeposited(bytes32 channelHash, uint256 value);

  /**
   * @dev public constructor
   */
  constructor() public Chained() Initializable() {}

  // external access

  function initialize(
    address[] calldata _guardians,
    uint256 _depositWithdrawalLockPeriod,
    ISignatureValidator _signatureValidator
  ) external onlyInitializer {
    _initializeGuarded(_guardians);

    depositWithdrawalLockPeriod = _depositWithdrawalLockPeriod;
    signatureValidator = _signatureValidator;
  }

  function computeDepositAccountAddress(
    address _owner
  ) external view returns (address) {
    return _computeDepositAccountAddress(_owner);
  }

  function computePaymentChannelHash(
    address _sender,
    address _recipient,
    address _token,
    bytes32 _uid
  ) external pure returns (bytes32) {
    return _computePaymentChannelHash(
      _sender,
      _recipient,
      _token,
      _uid
    );
  }

  function getPaymentChannel(
    bytes32 _hash
  ) external view returns (uint256 _committedAmount) {
    _committedAmount = paymentChannels[_hash].committedAmount;
  }

  function getDepositWithdrawalLockedUntil(
    address _owner,
    address _token
  ) external view returns (uint256)  {
    return deposits[_owner].withdrawalLockedUntil[_token];
  }

  function deployDepositAccount(
    address _owner
  ) external {
    _deployDepositAccount(_owner);
  }

  function withdrawDeposit(
    address _token
  ) public {
    uint256 _lockedUntil = deposits[msg.sender].withdrawalLockedUntil[_token];

    if (_lockedUntil != 0 && _lockedUntil <= now) {
      deposits[msg.sender].withdrawalLockedUntil[_token] = 0;

      address _depositAccount = deposits[msg.sender].account;
      uint256 _depositValue;

      if (_token == address(0)) {
        _depositValue = _depositAccount.balance;
      } else {
        _depositValue = IERC20Token(_token).balanceOf(_depositAccount);
      }

      _transferFromDeposit(
        _depositAccount,
        msg.sender,
        _token,
        _depositValue
      );

      emit DepositWithdrawn(
        deposits[msg.sender].account,
        msg.sender,
        _token,
        _depositValue
      );
    } else {
      // deploy deposit account if not deployed yet
      if (deposits[msg.sender].account == address(0)) {
        _deployDepositAccount(msg.sender);
      }

      _lockedUntil = now.add(depositWithdrawalLockPeriod);

      deposits[msg.sender].withdrawalLockedUntil[_token] = _lockedUntil;

      emit DepositWithdrawalRequested(
        deposits[msg.sender].account,
        msg.sender,
        _token,
        _lockedUntil
      );
    }
  }

  function commitPaymentChannelAndWithdraw(
    address _sender,
    address _token,
    bytes32 _uid,
    uint256 _amount,
    bytes calldata _guardianSignature,
    bytes calldata _senderSignature
  ) external {
    (bytes32 _hash, address _depositAccount, uint256 _paymentValue) = _commitPaymentChannel(
      _sender,
      msg.sender,
      _token,
      _uid,
      _amount,
      _guardianSignature,
      _senderSignature
    );

    _transferFromDeposit(
      _depositAccount,
      msg.sender,
      _token,
      _paymentValue
    );

    emit PaymentWithdrawn(_hash, _paymentValue);
  }

  function commitPaymentChannelAndDeposit(
    address _sender,
    address _token,
    bytes32 _uid,
    uint256 _amount,
    bytes calldata _guardianSignature,
    bytes calldata _senderSignature
  ) external {
    (bytes32 _hash, address _depositAccount, uint256 _paymentValue) = _commitPaymentChannel(
      _sender,
      msg.sender,
      _token,
      _uid,
      _amount,
      _guardianSignature,
      _senderSignature
    );

    _transferFromDeposit(
      _depositAccount,
      _computeDepositAccountAddress(msg.sender),
      _token,
      _paymentValue
    );

    emit PaymentDeposited(_hash, _paymentValue);
  }

  function commitPaymentChannelAndSplit(
    address _sender,
    address _token,
    bytes32 _uid,
    uint256 _amount,
    uint256 _depositPaymentValue,
    bytes calldata _guardianSignature,
    bytes calldata _senderSignature
  ) external {
    require(
      _depositPaymentValue > 0
    );

    (bytes32 _hash, address _depositAccount, uint256 _paymentValue) = _commitPaymentChannel(
      _sender,
      msg.sender,
      _token,
      _uid,
      _amount,
      _guardianSignature,
      _senderSignature
    );

    uint256 _withdrawPaymentValue = _paymentValue.sub(_depositPaymentValue);

    require(
      _withdrawPaymentValue > 0
    );

    _transferFromDeposit(
      _depositAccount,
      msg.sender,
      _token,
      _withdrawPaymentValue
    );

    emit PaymentWithdrawn(_hash, _withdrawPaymentValue);

    _transferFromDeposit(
      _depositAccount,
      _computeDepositAccountAddress(msg.sender),
      _token,
      _depositPaymentValue
    );

    emit PaymentDeposited(_hash, _depositPaymentValue);
  }

  // private access

  function _computeDepositAccountAddress(
    address _owner
  ) private view returns (address) {
    bytes32 _salt = keccak256(
      abi.encodePacked(
        _owner
      )
    );

    return _computeControlledAccountAddress(_salt);
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

  function _commitPaymentChannel(
    address _sender,
    address _recipient,
    address _token,
    bytes32 _uid,
    uint256 _amount,
    bytes memory _guardianSignature,
    bytes memory _senderSignature
  ) private returns (bytes32 _hash, address _depositAccount, uint256 _paymentValue) {
    bytes32 _signedMessageHash = abi.encodePacked(
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
      _verifyGuardianSignature(_signedMessageHash, _guardianSignature)
    );

    require(
      signatureValidator.verifySignature(_signedMessageHash, _senderSignature, _sender)
    );

    _hash = _computePaymentChannelHash(
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

    emit PaymentChannelCommitted(
      _hash,
      _sender,
      _recipient,
      _token,
      _uid,
      _amount
    );
  }

  function _transferFromDeposit(
    address _depositAccount,
    address _to,
    address _token,
    uint256 _value
  ) private {
    if (_token == address(0)) {
      IControlledAccount(_depositAccount).executeTransaction(
        _to.toPayable(),
        _value,
        new bytes(0)
      );
    } else {
      IControlledAccount(_depositAccount).executeTransaction(
        _token.toPayable(),
        0,
        abi.encodeWithSelector(
          IERC20Token(_token).transfer.selector,
          _to,
          _value
        )
      );
    }
  }
}
