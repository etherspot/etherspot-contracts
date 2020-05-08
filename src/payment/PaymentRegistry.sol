pragma solidity 0.5.15;

import "../relay/Relayed.sol";
import "../shared/AddressLib.sol";
import "../shared/SafeMathLib.sol";
import "../shared/controlledAccount/ControlledAccount.sol";
import "../shared/controlledAccount/ControlledAccountFactory.sol";
import "../shared/guarded/Guarded.sol";
import "../shared/initializable/Initializable.sol";
import "../shared/typedData/TypedData.sol";
import "../signature/SignatureValidator.sol";
import "../tokens/erc20/ERC20Token.sol";


/**
 * @title PaymentRegistry
 */
contract PaymentRegistry is Relayed, ControlledAccountFactory, Guarded, Initializable, TypedData {
  using AddressLib for address;
  using SafeMathLib for uint256;

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

  uint256 public depositWithdrawalLockPeriod;
  SignatureValidator private signatureValidator;
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
    uint256 depositWithdrawalLockPeriod_,
    SignatureValidator signatureValidator_,
    address relay_,
    bytes32 typedDataDomainNameHash,
    bytes32 typedDataDomainSalt
  )
    external
    onlyInitializer
  {
    if (depositWithdrawalLockPeriod_ == 0) {
      depositWithdrawalLockPeriod = DEFAULT_DEPOSIT_WITHDRAWAL_LOCK_PERIOD;
    } else {
      depositWithdrawalLockPeriod = depositWithdrawalLockPeriod_;
    }

    signatureValidator = signatureValidator_;

    // Relayed
    initializeRelayed(relay_);

    // TypedData
    initializeTypedData(
      typedDataDomainNameHash,
      typedDataDomainSalt
    );
  }

  function deployDepositAccount(
    address owner
  )
    external
    afterInitialization
  {
    privatelyDeployDepositAccount(owner);
  }

  function withdrawDeposit(
    address token
  )
    external
    afterInitialization
  {
    address owner = getSender();
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

      transferFromDeposit(
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
      // deploy deposit account if not deployed yet
      if (deposits[owner].account == address(0)) {
        privatelyDeployDepositAccount(owner);
      }

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
    afterInitialization
  {
    address recipient = getSender();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    transferFromDeposit(
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
    afterInitialization
  {
    address recipient = getSender();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    transferFromDeposit(
      depositAccount,
      privatelyComputeDepositAccountAddress(recipient),
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
    afterInitialization
  {
    address recipient = getSender();

    (bytes32 hash, address depositAccount, uint256 paymentValue) = commitPaymentChannel(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount,
      senderSignature,
      guardianSignature
    );

    transferFromDepositAndSplit(
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
    afterInitialization
    returns (address)
  {
    return privatelyComputeDepositAccountAddress(owner);
  }

  function isDepositAccountDeployed(
    address owner
  )
    external
    view
    afterInitialization
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
    afterInitialization
    returns (uint256)
  {
    return deposits[owner].withdrawalLockedUntil[token];
  }

  function getPaymentChannelCommittedAmount(
    bytes32 hash
  )
    external
    view
    afterInitialization
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
    return privatelyComputePaymentChannelHash(
      sender,
      recipient,
      token,
      uid
    );
  }

  // private functions

  function privatelyDeployDepositAccount(
    address owner
  )
    private
  {
    bytes32 salt = keccak256(
      abi.encodePacked(
        owner
      )
    );

    deposits[owner].account = createControlledAccount(salt);

    emit DepositAccountDeployed(deposits[owner].account, owner);
  }

  function commitPaymentChannel(
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
    bytes32 messageHash = hashPrimaryTypedData(
      hashTypedData(
        sender,
        recipient,
        token,
        uid,
        blockNumber,
        amount
      )
    );

    require(
      signatureValidator.verifySignatureAtBlock(
        messageHash,
        senderSignature,
        sender,
        blockNumber
      )
    );

    require(
      internallyVerifyGuardianSignature(messageHash, guardianSignature)
    );

    hash = privatelyComputePaymentChannelHash(
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

    // deploy deposit account if not deployed yet
    if (deposits[sender].account == address(0)) {
      privatelyDeployDepositAccount(sender);
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

  function transferFromDeposit(
    address depositAccount,
    address to,
    address token,
    uint256 value
  )
    private
  {
    if (token == address(0)) {
      executeControlledAccountTransaction(
        depositAccount.toPayable(),
        to.toPayable(),
        value,
        new bytes(0)
      );
    } else {
      executeControlledAccountTransaction(
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

  function transferFromDepositAndSplit(
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

    transferFromDeposit(
      depositAccount,
      to,
      token,
      withdrawValue
    );

    transferFromDeposit(
      depositAccount,
      privatelyComputeDepositAccountAddress(to),
      token,
      depositValue
    );
  }

  // private functions (views)

  function privatelyComputeDepositAccountAddress(
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

    return computeControlledAccountAddress(salt);
  }

  // private functions (pure)

  function privatelyComputePaymentChannelHash(
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

  function hashTypedData(
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
