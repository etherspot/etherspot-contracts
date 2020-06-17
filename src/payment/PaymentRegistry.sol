pragma solidity 0.5.15;
pragma experimental ABIEncoderV2;

import "../account/AccountOwnerRegistry.sol";
import "../account/AccountProofRegistry.sol";
import "../common/access/Guarded.sol";
import "../common/account/AccountController.sol";
import "../common/libs/AddressLib.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/libs/SignatureLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";
import "../common/typedData/TypedDataContainer.sol";
import "../personal/PersonalAccountRegistry.sol";
import "../gateway/GatewayRecipient.sol";


/**
 * @title PaymentRegistry
 */
contract PaymentRegistry is Guarded, AccountController, Initializable, TypedDataContainer, GatewayRecipient {
  using AddressLib for address;
  using SafeMathLib for uint256;
  using SignatureLib for bytes32;

  struct Deposit {
    address account;
    mapping(address => uint256) withdrawalLockedUntil;
  }

  struct PaymentChannel {
    uint256 committedAmount;
  }

  struct PaymentChannelCommit {
    address sender;
    address recipient;
    address token;
    bytes32 uid;
    uint256 blockNumber;
    uint256 amount;
  }

  bytes32 private constant PAYMENT_CHANNEL_COMMIT_TYPE_HASH = keccak256(
    "PaymentChannelCommit(address sender,address recipient,address token,bytes32 uid,uint256 blockNumber,uint256 amount)"
  );
  uint256 private constant DEFAULT_DEPOSIT_WITHDRAWAL_LOCK_PERIOD = 30 days;

  AccountOwnerRegistry public accountOwnerRegistry;
  AccountProofRegistry public accountProofRegistry;
  PersonalAccountRegistry public personalAccountRegistry;
  uint256 public depositWithdrawalLockPeriod;
  mapping(address => Deposit) private deposits;
  mapping(bytes32 => PaymentChannel) private paymentChannels;

  // events

  event DepositAccountDeployed(
    address depositAccount,
    address owner
  );

  event DepositWithdrawalRequested(
    address depositAccount,
    address owner,
    address token,
    uint256 lockedUntil
  );

  event DepositWithdrawalRejected(
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

  event PaymentSplitted(
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
    AccountOwnerRegistry accountOwnerRegistry_,
    AccountProofRegistry accountProofRegistry_,
    PersonalAccountRegistry personalAccountRegistry_,
    uint256 depositWithdrawalLockPeriod_,
    address[] calldata guardians_,
    address gateway_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    accountOwnerRegistry = accountOwnerRegistry_;
    accountProofRegistry = accountProofRegistry_;
    personalAccountRegistry = personalAccountRegistry_;

    if (depositWithdrawalLockPeriod_ == 0) {
      depositWithdrawalLockPeriod = DEFAULT_DEPOSIT_WITHDRAWAL_LOCK_PERIOD;
    } else {
      depositWithdrawalLockPeriod = depositWithdrawalLockPeriod_;
    }

    // Guarded
    _initializeGuarded(guardians_);

    // GatewayRecipient
    _initializeGatewayRecipient(gateway_);

    // TypedDataContainer
    _initializeTypedDataContainer(
      typedDataDomainNameHash,
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

  function withdrawDeposit(
    address token
  )
    external
  {
    address owner = _getContextAccount();
    uint256 lockedUntil = deposits[owner].withdrawalLockedUntil[token];

    /* solhint-disable not-rely-on-time */

    if (lockedUntil != 0 && lockedUntil <= now) {
      deposits[owner].withdrawalLockedUntil[token] = 0;

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

      emit DepositWithdrawn(
        depositAccount,
        owner,
        token,
        depositValue
      );
    } else {
      _deployDepositAccount(owner);

      lockedUntil = now.add(depositWithdrawalLockPeriod);

      deposits[owner].withdrawalLockedUntil[token] = lockedUntil;

      emit DepositWithdrawalRequested(
        deposits[owner].account,
        owner,
        token,
        lockedUntil
      );
    }
    /* solhint-enable not-rely-on-time */
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

    _transferSplittedFromDeposit(
      depositAccount,
      recipient,
      token,
      paymentValue,
      depositPaymentValue
    );

    emit PaymentSplitted(hash, paymentValue, depositPaymentValue);
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

  function getDepositWithdrawalLockedUntil(
    address owner,
    address token
  )
    external
    view
    returns (uint256)
  {
    return deposits[owner].withdrawalLockedUntil[token];
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
        accountProofRegistry.verifyAccountProofAtBlock(sender, messageHash, blockNumber)
      );
    } else {
      address signer = messageHash.recoverAddress(senderSignature);

      if (sender != signer) {
        require(
          personalAccountRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber) ||
          accountOwnerRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber)
        );
      }
    }

    require(
      _verifyGuardianSignature(messageHash, guardianSignature)
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
      paymentValue != 0
    );

    paymentChannels[hash].committedAmount = amount;

    if (deposits[sender].withdrawalLockedUntil[token] > 0) {
      deposits[sender].withdrawalLockedUntil[token] = 0;

      emit DepositWithdrawalRejected(
        deposits[sender].account,
        sender,
        token
      );
    } else {
      _deployDepositAccount(sender);
    }

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
        depositAccount.toPayable(),
        to.toPayable(),
        value,
        new bytes(0)
      );
    } else {
      _executeAccountTransaction(
        depositAccount.toPayable(),
        token.toPayable(),
        0,
        abi.encodeWithSelector(
          ERC20Token(token).transfer.selector,
          to,
          value
        )
      );
    }
  }

  function _transferSplittedFromDeposit(
    address depositAccount,
    address to,
    address token,
    uint256 paymentValue,
    uint256 depositValue
  )
    private
  {
    require(
      depositValue > 0
    );

    uint256 withdrawValue = paymentValue.sub(depositValue);

    require(
      withdrawValue > 0
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
