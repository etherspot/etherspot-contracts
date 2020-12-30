// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/access/Guarded.sol";
import "../common/account/AccountController.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/libs/SignatureLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../external/ExternalAccountOwnerRegistry.sol";
import "../external/ExternalAccountProofRegistry.sol";
import "../personal/PersonalAccountRegistry.sol";
import "../gateway/GatewayRecipient.sol";


/**
 * @title Payment registry
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract PaymentRegistry is Guarded, AccountController, Initializable, TypedDataContainer, GatewayRecipient {
  using SafeMathLib for uint256;
  using SignatureLib for bytes32;

  struct Deposit {
    address account;
    mapping(address => uint256) withdrawnAmount;
    mapping(address => uint256) exitLockedUntil;
  }

  struct PaymentChannel {
    uint256 committedAmount;
  }

  struct DepositWithdrawal {
    address owner;
    address token;
    uint256 amount;
  }

  struct PaymentChannelCommit {
    address sender;
    address recipient;
    address token;
    bytes32 uid;
    uint256 blockNumber;
    uint256 amount;
  }

  uint256 private constant DEFAULT_DEPOSIT_EXIT_LOCK_PERIOD = 28 days;
  bytes32 private constant DEPOSIT_WITHDRAWAL_TYPE_HASH = keccak256(
    "DepositWithdrawal(address owner,address token,uint256 amount)"
  );
  bytes32 private constant PAYMENT_CHANNEL_COMMIT_TYPE_HASH = keccak256(
    "PaymentChannelCommit(address sender,address recipient,address token,bytes32 uid,uint256 blockNumber,uint256 amount)"
  );

  ExternalAccountOwnerRegistry public externalAccountOwnerRegistry;
  ExternalAccountProofRegistry public externalAccountProofRegistry;
  PersonalAccountRegistry public personalAccountRegistry;

  uint256 public depositExitLockPeriod;

  mapping(address => Deposit) private deposits;
  mapping(bytes32 => PaymentChannel) private paymentChannels;

  // events

  event DepositAccountDeployed(
    address depositAccount,
    address owner
  );

  event DepositExitRequested(
    address depositAccount,
    address owner,
    address token,
    uint256 lockedUntil
  );

  event DepositExitCompleted(
    address depositAccount,
    address owner,
    address token,
    uint256 amount
  );

  event DepositExitRejected(
    address depositAccount,
    address owner,
    address token
  );

  event DepositWithdrawn(
    address depositAccount,
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

  event PaymentWithdrawn(
    bytes32 channelHash,
    uint256 value
  );

  event PaymentDeposited(
    bytes32 channelHash,
    uint256 value
  );

  event PaymentSplit(
    bytes32 channelHash,
    uint256 totalValue,
    uint256 depositValue
  );

  /**
   * @dev public constructor
   */
  constructor() public Guarded() Initializable() {}

  // external functions

  function initialize(
    ExternalAccountOwnerRegistry externalAccountOwnerRegistry_,
    ExternalAccountProofRegistry externalAccountProofRegistry_,
    PersonalAccountRegistry personalAccountRegistry_,
    uint256 depositExitLockPeriod_,
    address[] calldata guardians_,
    address gateway_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainVersionHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    externalAccountOwnerRegistry = externalAccountOwnerRegistry_;
    externalAccountProofRegistry = externalAccountProofRegistry_;
    personalAccountRegistry = personalAccountRegistry_;

    if (depositExitLockPeriod_ == 0) {
      depositExitLockPeriod = DEFAULT_DEPOSIT_EXIT_LOCK_PERIOD;
    } else {
      depositExitLockPeriod = depositExitLockPeriod_;
    }

    // Guarded
    _initializeGuarded(guardians_);

    // GatewayRecipient
    _initializeGatewayRecipient(gateway_);

    // TypedDataContainer
    _initializeTypedDataContainer(
      typedDataDomainNameHash,
      typedDataDomainVersionHash,
      typedDataDomainSalt
    );
  }

  function deployDepositAccount(
    address owner
  )
    external
  {
    _deployDepositAccount(owner);
  }

  function requestDepositExit(
    address token
  )
    external
  {
    address owner = _getContextAccount();
    uint256 lockedUntil = deposits[owner].exitLockedUntil[token];

    require(
      lockedUntil == 0,
      "PaymentRegistry: deposit exit already requested"
    );

    _deployDepositAccount(owner);

    // solhint-disable-next-line not-rely-on-time
    lockedUntil = now.add(depositExitLockPeriod);

    deposits[owner].exitLockedUntil[token] = lockedUntil;

    emit DepositExitRequested(
      deposits[owner].account,
      owner,
      token,
      lockedUntil
    );
  }

  function processDepositExit(
    address token
  )
    external
  {
    address owner = _getContextAccount();
    uint256 lockedUntil = deposits[owner].exitLockedUntil[token];

    require(
      lockedUntil != 0,
      "PaymentRegistry: deposit exit not requested"
    );

    require(
      // solhint-disable-next-line not-rely-on-time
      lockedUntil <= now,
      "PaymentRegistry: deposit exit locked"
    );

    deposits[owner].exitLockedUntil[token] = 0;

    address depositAccount = deposits[owner].account;
    uint256 depositValue;

    if (token == address(0)) {
      depositValue = depositAccount.balance;
    } else {
      depositValue = ERC20Token(token).balanceOf(depositAccount);
    }

    _transferFromDeposit(
      depositAccount,
      owner,
      token,
      depositValue
    );

    emit DepositExitCompleted(
      depositAccount,
      owner,
      token,
      depositValue
    );
  }

  function withdrawDeposit(
    address token,
    uint256 amount,
    bytes calldata guardianSignature
  )
    external
  {
    address owner = _getContextAccount();
    uint256 value = amount.sub(deposits[owner].withdrawnAmount[token]);

    require(
      value > 0,
      "PaymentRegistry: invalid amount"
    );

    bytes32 messageHash = _hashPrimaryTypedData(
      _hashTypedData(
        owner,
        token,
        amount
      )
    );

    require(
      _verifyGuardianSignature(messageHash, guardianSignature),
      "PaymentRegistry: invalid guardian signature"
    );

    deposits[owner].withdrawnAmount[token] = amount;

    _verifyDepositExitOrDeployAccount(owner, token);

    _transferFromDeposit(
      deposits[owner].account,
      owner,
      token,
      value
    );

    emit DepositWithdrawn(
      deposits[owner].account,
      owner,
      token,
      amount
    );
  }

  function commitPaymentChannelAndWithdraw(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external
  {
    address recipient = _getContextAccount();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = _commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    _transferFromDeposit(
      depositAccount,
      recipient,
      token,
      paymentValue
    );

    emit PaymentWithdrawn(hash, paymentValue);
  }

  function commitPaymentChannelAndDeposit(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external
  {
    address recipient = _getContextAccount();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = _commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    _transferFromDeposit(
      depositAccount,
      _computeDepositAccountAddress(recipient),
      token,
      paymentValue
    );

    emit PaymentDeposited(hash, paymentValue);
  }

  function commitPaymentChannelAndSplit(
    address sender,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    uint256 depositPaymentValue,
    bytes calldata senderSignature,
    bytes calldata guardianSignature
  )
    external
  {
    address recipient = _getContextAccount();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = _commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    _transferSplitFromDeposit(
      depositAccount,
      recipient,
      token,
      paymentValue,
      depositPaymentValue
    );

    emit PaymentSplit(hash, paymentValue, depositPaymentValue);
  }

  // external functions (views)

  function computeDepositAccountAddress(
    address owner
  )
    external
    view
    returns (address)
  {
    return _computeDepositAccountAddress(owner);
  }

  function isDepositAccountDeployed(
    address owner
  )
    external
    view
    returns (bool)
  {
    return deposits[owner].account != address(0);
  }

  function getDepositExitLockedUntil(
    address owner,
    address token
  )
    external
    view
    returns (uint256)
  {
    return deposits[owner].exitLockedUntil[token];
  }

  function getPaymentChannelCommittedAmount(
    bytes32 hash
  )
    external
    view
    returns (uint256)
  {
    return paymentChannels[hash].committedAmount;
  }

  function getDepositWithdrawnAmount(
    address owner,
    address token
  )
    external
    view
    returns (uint256)
  {
    return deposits[owner].withdrawnAmount[token];
  }

  // external functions (pure)

  function computePaymentChannelHash(
    address sender,
    address recipient,
    address token,
    bytes32 uid
  )
    external
    pure
    returns (bytes32)
  {
    return _computePaymentChannelHash(
      sender,
      recipient,
      token,
      uid
    );
  }

  // public functions (views)

  function hashDepositWithdrawal(
    DepositWithdrawal memory depositWithdrawal
  )
    public
    view
    returns (bytes32)
  {
    return _hashPrimaryTypedData(
      _hashTypedData(
        depositWithdrawal.owner,
        depositWithdrawal.token,
        depositWithdrawal.amount
      )
    );
  }

  function hashPaymentChannelCommit(
    PaymentChannelCommit memory paymentChannelCommit
  )
    public
    view
    returns (bytes32)
  {
    return _hashPrimaryTypedData(
      _hashTypedData(
        paymentChannelCommit.sender,
        paymentChannelCommit.recipient,
        paymentChannelCommit.token,
        paymentChannelCommit.uid,
        paymentChannelCommit.blockNumber,
        paymentChannelCommit.amount
      )
    );
  }

  // private functions

  function _deployDepositAccount(
    address owner
  )
    private
  {
    if (deposits[owner].account == address(0)) {
      bytes32 salt = keccak256(
        abi.encodePacked(
          owner
        )
      );

      deposits[owner].account = _deployAccount(salt);

      emit DepositAccountDeployed(deposits[owner].account, owner);
    }
  }

  function _verifyDepositExitOrDeployAccount(
    address owner,
    address token
  )
    private
  {
    if (deposits[owner].exitLockedUntil[token] > 0) {
      deposits[owner].exitLockedUntil[token] = 0;

      emit DepositExitRejected(
        deposits[owner].account,
        owner,
        token
      );
    } else {
      _deployDepositAccount(owner);
    }
  }

  function _commitPaymentChannel(
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount,
    bytes memory senderSignature,
    bytes memory guardianSignature
  )
    private
    returns (bytes32 hash, address depositAccount, uint256 paymentValue)
  {
    bytes32 messageHash = _hashPrimaryTypedData(
      _hashTypedData(
        sender,
        recipient,
        token,
        uid,
        blockNumber,
        amount
      )
    );

    if (senderSignature.length == 0) {
      require(
        externalAccountProofRegistry.verifyAccountProofAtBlock(sender, messageHash, blockNumber),
        "PaymentRegistry: invalid guardian signature"
      );
    } else {
      address signer = messageHash.recoverAddress(senderSignature);

      if (sender != signer) {
        require(
          personalAccountRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber) ||
          externalAccountOwnerRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber),
          "PaymentRegistry: invalid sender signature"
        );
      }
    }

    require(
      _verifyGuardianSignature(messageHash, guardianSignature),
      "PaymentRegistry: invalid guardian signature"
    );

    hash = _computePaymentChannelHash(
      sender,
      recipient,
      token,
      uid
    );

    // calc payment value
    paymentValue = amount.sub(paymentChannels[hash].committedAmount);

    require(
      paymentValue != 0,
      "PaymentRegistry: invalid payment value"
    );

    paymentChannels[hash].committedAmount = amount;

    _verifyDepositExitOrDeployAccount(sender, token);

    depositAccount = deposits[sender].account;

    emit PaymentChannelCommitted(
      hash,
      sender,
      recipient,
      token,
      uid,
      amount
    );

    return (hash, depositAccount, paymentValue);
  }

  function _transferFromDeposit(
    address depositAccount,
    address to,
    address token,
    uint256 value
  )
    private
  {
    if (token == address(0)) {
      _executeAccountTransaction(
        depositAccount,
        to,
        value,
        new bytes(0)
      );
    } else {
      bytes memory response = _executeAccountTransaction(
        depositAccount,
        token,
        0,
        abi.encodeWithSelector(
          ERC20Token(token).transfer.selector,
          to,
          value
        )
      );

      if (response.length > 0) {
        require(
          abi.decode(response, (bool)),
          "PaymentRegistry: ERC20Token transfer reverted"
        );
      }
    }
  }

  function _transferSplitFromDeposit(
    address depositAccount,
    address to,
    address token,
    uint256 paymentValue,
    uint256 depositValue
  )
    private
  {
    require(
      depositValue > 0,
      "PaymentRegistry: invalid deposit value"
    );

    uint256 withdrawValue = paymentValue.sub(depositValue);

    require(
      withdrawValue > 0,
      "PaymentRegistry: invalid withdraw value"
    );

    _transferFromDeposit(
      depositAccount,
      to,
      token,
      withdrawValue
    );

    _transferFromDeposit(
      depositAccount,
      _computeDepositAccountAddress(to),
      token,
      depositValue
    );
  }

  // private functions (views)

  function _computeDepositAccountAddress(
    address owner
  )
    private
    view
    returns (address)
  {
    bytes32 salt = keccak256(
      abi.encodePacked(
        owner
      )
    );

    return _computeAccountAddress(salt);
  }

  // private functions (pure)

  function _computePaymentChannelHash(
    address sender,
    address recipient,
    address token,
    bytes32 uid
  )
    private
    pure
    returns (bytes32)
  {
    return keccak256(
      abi.encodePacked(
        sender,
        recipient,
        token,
        uid
      )
    );
  }

  function _hashTypedData(
    address owner,
    address token,
    uint256 amount
  )
    private
    pure
    returns (bytes32)
  {
    return keccak256(abi.encode(
      DEPOSIT_WITHDRAWAL_TYPE_HASH,
      owner,
      token,
      amount
    ));
  }

  function _hashTypedData(
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount
  )
    private
    pure
    returns (bytes32)
  {
    return keccak256(abi.encode(
        PAYMENT_CHANNEL_COMMIT_TYPE_HASH,
        sender,
        recipient,
        token,
        uid,
        blockNumber,
        amount
      ));
  }
}
