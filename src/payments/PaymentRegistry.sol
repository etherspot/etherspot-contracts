// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import "../common/access/Guarded.sol";
import "../common/libs/ECDSALib.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/signature/SignatureValidator.sol";
import "../common/token/ERC20Token.sol";
import "../external/ExternalAccountRegistry.sol";
import "../personal/PersonalAccountRegistry.sol";
import "../gateway/GatewayRecipient.sol";
import "./PaymentDepositAccount.sol";


/**
 * @title Payment registry
 *
 * @notice A registry for payment and payment channels
 *
 * @dev the `DepositExit` process can be used in a case operator (guardian) couldn't sign commit / withdrawal message.
 * Process will be rejected when any of senders channels will be committed.
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract PaymentRegistry is Guarded, Initializable, SignatureValidator, GatewayRecipient {
  using ECDSALib for bytes32;
  using SafeMathLib for uint256;

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

  bytes32 private constant HASH_PREFIX_DEPOSIT_WITHDRAWAL = keccak256(
    "DepositWithdrawal(address owner,address token,uint256 amount)"
  );
  bytes32 private constant HASH_PREFIX_PAYMENT_CHANNEL_COMMIT = keccak256(
    "PaymentChannelCommit(address sender,address recipient,address token,bytes32 uid,uint256 blockNumber,uint256 amount)"
  );

  ExternalAccountRegistry public externalAccountRegistry;
  PersonalAccountRegistry public personalAccountRegistry;

  uint256 public depositExitLockPeriod;

  mapping(address => Deposit) private deposits;
  mapping(bytes32 => PaymentChannel) private paymentChannels;

  // events

  /**
   * @dev Emitted when the deposit account is deployed
   * @param depositAccount deposit account address
   * @param owner owner address
   */
  event DepositAccountDeployed(
    address depositAccount,
    address owner
  );

  /**
   * @dev Emitted when the deposit exist is requested
   * @param depositAccount deposit account address
   * @param owner owner address
   * @param token token address
   * @param lockedUntil deposit exist locked util time
   */
  event DepositExitRequested(
    address depositAccount,
    address owner,
    address token,
    uint256 lockedUntil
  );

  /**
   * @dev Emitted when the deposit exist is completed
   * @param depositAccount deposit account address
   * @param owner owner address
   * @param token token address
   * @param amount deposit exist amount
   */
  event DepositExitCompleted(
    address depositAccount,
    address owner,
    address token,
    uint256 amount
  );

  /**
   * @dev Emitted when the deposit exist is rejected
   * @param depositAccount deposit account address
   * @param owner owner address
   * @param token token address
   */
  event DepositExitRejected(
    address depositAccount,
    address owner,
    address token
  );

  /**
   * @dev Emitted when the deposit has been withdrawn
   * @param depositAccount deposit account address
   * @param owner owner address
   * @param token token address
   * @param amount withdrawn amount
   */
  event DepositWithdrawn(
    address depositAccount,
    address owner,
    address token,
    uint256 amount
  );

  /**
   * @dev Emitted when the payment channel has been committed
   * @param hash channel hash
   * @param sender sender address
   * @param recipient recipient address
   * @param token token address
   * @param uid unique channel id
   * @param amount committed amount
   */
  event PaymentChannelCommitted(
    bytes32 hash,
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 amount
  );

  /**
   * @dev Emitted when the payment has been withdrawn
   * @param channelHash channel hash
   * @param value payment value
   */
  event PaymentWithdrawn(
    bytes32 channelHash,
    uint256 value
  );

  /**
   * @dev Emitted when the payment has been deposited
   * @param channelHash channel hash
   * @param value payment value
   */
  event PaymentDeposited(
    bytes32 channelHash,
    uint256 value
  );

  /**
   * @dev Emitted when the payment has been withdrawn and deposited (split)
   * @param channelHash channel hash
   * @param totalValue payment total value
   * @param depositValue payment deposited value
   */
  event PaymentSplit(
    bytes32 channelHash,
    uint256 totalValue,
    uint256 depositValue
  );

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() SignatureValidator() {}

  // external functions

  /**
   * @notice Initialize `PaymentRegistry` contract
   * @param externalAccountRegistry_ `ExternalAccountRegistry` contract address
   * @param personalAccountRegistry_ `PersonalAccountRegistry` contract address
   * @param depositExitLockPeriod_ deposit exit lock period
   * @param guardians_ array of guardians addresses
   * @param gateway_ `Gateway` contract address
   */
  function initialize(
    ExternalAccountRegistry externalAccountRegistry_,
    PersonalAccountRegistry personalAccountRegistry_,
    uint256 depositExitLockPeriod_,
    address[] calldata guardians_,
    address gateway_
  )
    external
    onlyInitializer
  {
    externalAccountRegistry = externalAccountRegistry_;
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
  }

  /**
   * @notice Deploys deposit account
   * @param owner owner address
   */
  function deployDepositAccount(
    address owner
  )
    external
  {
    _deployDepositAccount(owner);
  }

  /**
   * @notice Requests deposit exit
   * @param token token address
   */
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

  /**
   * @notice Processes deposit exit
   * @param token token address
   */
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

  /**
   * @notice Withdraws deposit
   * @param token token address
   * @param amount amount to withdraw
   * @param guardianSignature guardian signature
   */
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

    bytes32 messageHash = _hashDepositWithdrawal(
      owner,
      token,
      amount
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

  /**
   * @notice Commits payment channel and withdraw payment
   * @param sender sender address
   * @param token token address
   * @param uid unique channel id
   * @param blockNumber block number
   * @param amount amount to commit
   * @param senderSignature sender signature
   * @param guardianSignature guardian signature
   */
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

  /**
   * @notice Commits payment channel and deposit payment
   * @param sender sender address
   * @param token token address
   * @param uid unique channel id
   * @param blockNumber block number
   * @param amount amount to commit
   * @param senderSignature sender signature
   * @param guardianSignature guardian signature
   */
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

  /**
   * @notice Commits payment channel, withdraws and deposits (split) payment
   * @param sender sender address
   * @param token token address
   * @param uid unique channel id
   * @param blockNumber block number
   * @param amount amount to commit
   * @param depositPaymentValue amount to deposit
   * @param senderSignature sender signature
   * @param guardianSignature guardian signature
   */
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

  /**
   * @notice Computes deposit account address
   * @param owner owner address
   * @return deposit account address
   */
  function computeDepositAccountAddress(
    address owner
  )
    external
    view
    returns (address)
  {
    return _computeDepositAccountAddress(owner);
  }

  /**
   * @notice Checks if deposit account is deployed
   * @param owner owner address
   * @return true when deposit account is deployed
   */
  function isDepositAccountDeployed(
    address owner
  )
    external
    view
    returns (bool)
  {
    return deposits[owner].account != address(0);
  }

  /**
   * @notice Gets deposit exit locked until time
   * @param owner owner address
   * @param token token address
   * @return locked until time
   */
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

  /**
   * @notice Gets deposit withdrawn amount
   * @param owner owner address
   * @param token token address
   * @return withdrawn amount
   */
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

  /**
   * @notice Gets payment channel committed amount
   * @param hash payment channel hash
   * @return committed amount
   */
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

  /**
   * @notice Computes payment channel hash
   * @param sender sender address
   * @param recipient recipient address
   * @param token token address
   * @param uid unique channel id
   * @return hash
   */
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

  /**
   * @notice Hashes `DepositWithdrawal` message payload
   * @param depositWithdrawal struct
   * @return hash
   */
  function hashDepositWithdrawal(
    DepositWithdrawal memory depositWithdrawal
  )
    public
    view
    returns (bytes32)
  {
    return _hashDepositWithdrawal(
      depositWithdrawal.owner,
      depositWithdrawal.token,
      depositWithdrawal.amount
    );
  }

  /**
   * @notice Hashes `PaymentChannelCommit` message payload
   * @param paymentChannelCommit struct
   * @return hash
   */
  function hashPaymentChannelCommit(
    PaymentChannelCommit memory paymentChannelCommit
  )
    public
    view
    returns (bytes32)
  {
    return _hashPaymentChannelCommit(
      paymentChannelCommit.sender,
      paymentChannelCommit.recipient,
      paymentChannelCommit.token,
      paymentChannelCommit.uid,
      paymentChannelCommit.blockNumber,
      paymentChannelCommit.amount
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

      deposits[owner].account = address(new PaymentDepositAccount{salt: salt}());

      emit DepositAccountDeployed(
        deposits[owner].account,
        owner
      );
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
    bytes32 messageHash = _hashPaymentChannelCommit(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount
    );

    if (senderSignature.length == 0) {
      require(
        externalAccountRegistry.verifyAccountProofAtBlock(sender, messageHash, blockNumber),
        "PaymentRegistry: invalid guardian signature"
      );
    } else {
      address signer = messageHash.recoverAddress(senderSignature);

      if (sender != signer) {
        require(
          personalAccountRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber) ||
          externalAccountRegistry.verifyAccountOwnerAtBlock(sender, signer, blockNumber),
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

    /// @dev calc payment value
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
      PaymentDepositAccount(payable(depositAccount)).executeTransaction(
        to,
        value,
        new bytes(0)
      );
    } else {
      bytes memory response = PaymentDepositAccount(payable(depositAccount)).executeTransaction(
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

    bytes memory creationCode = type(PaymentDepositAccount).creationCode;

    bytes32 data = keccak256(
      abi.encodePacked(
        bytes1(0xff),
        address(this),
        salt,
        keccak256(creationCode)
      )
    );

    return address(uint160(uint256(data)));
  }

  function _hashDepositWithdrawal(
    address owner,
    address token,
    uint256 amount
  )
    private
    view
    returns (bytes32)
  {
    return _hashMessagePayload(HASH_PREFIX_DEPOSIT_WITHDRAWAL, abi.encode(
      owner,
      token,
      amount
    ));
  }

  function _hashPaymentChannelCommit(
    address sender,
    address recipient,
    address token,
    bytes32 uid,
    uint256 blockNumber,
    uint256 amount
  )
    private
    view
    returns (bytes32)
  {
    return _hashMessagePayload(HASH_PREFIX_PAYMENT_CHANNEL_COMMIT, abi.encode(
      sender,
      recipient,
      token,
      uid,
      blockNumber,
      amount
    ));
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
}
