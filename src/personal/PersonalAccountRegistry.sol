// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/access/Guarded.sol";
import "../common/account/AccountController.sol";
import "../common/account/AccountRegistry.sol";
import "../common/libs/BlockLib.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/libs/SignatureLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";
import "../gateway/GatewayRecipient.sol";


/**
 * @title Personal account registry
 *
 * @notice A registry for personal (controlled by owners) accounts
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract PersonalAccountRegistry is Guarded, AccountController, AccountRegistry, Initializable, GatewayRecipient {
  using BlockLib for BlockLib.BlockRelated;
  using SafeMathLib for uint256;
  using SignatureLib for bytes32;
  using SignatureLib for bytes;

  struct Account {
    bool deployed;
    bytes32 salt;
    mapping(address => BlockLib.BlockRelated) owners;
  }

  mapping(address => Account) private accounts;

  // events

  /**
   * @dev Emitted when the new owner is added
   * @param account account address
   * @param owner owner address
   */
  event AccountOwnerAdded(
    address account,
    address owner
  );

  /**
   * @dev Emitted when the existing owner is removed
   * @param account account address
   * @param owner owner address
   */
  event AccountOwnerRemoved(
    address account,
    address owner
  );

  /**
   * @dev Emitted when the call is refunded
   * @param account account address
   * @param beneficiary beneficiary address
   * @param token token address
   * @param value value
   */
  event AccountCallRefunded(
    address account,
    address beneficiary,
    address token,
    uint256 value
  );

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `PersonalAccountRegistry` contract
   * @param guardians_ array of guardians addresses
   * @param accountImplementation_ account implementation address
   * @param gateway_ `Gateway` contract address
   */
  function initialize(
    address[] calldata guardians_,
    address accountImplementation_,
    address gateway_
  )
    external
    onlyInitializer
  {
    // Guarded
    _initializeGuarded(guardians_);

    // AccountController
    _initializeAccountController(address(this), accountImplementation_);

    // GatewayRecipient
    _initializeGatewayRecipient(gateway_);
  }

  /**
   * @notice Upgrades `PersonalAccountRegistry` contract
   * @param accountImplementation_ account implementation address
   */
  function upgrade(
    address accountImplementation_
  )
    external
    onlyGuardian
  {
    _setAccountImplementation(accountImplementation_, true);
  }

  /**
   * @notice Deploys account
   * @param account account address
   */
  function deployAccount(
    address account
  )
    external
  {
    _verifySender(account);
    _deployAccount(account);
  }

  /**
   * @notice Upgrades account
   * @param account account address
   */
  function upgradeAccount(
    address account
  )
    external
  {
    _verifySender(account);
    _upgradeAccount(account, true);
  }

  /**
   * @notice Adds a new account owner
   * @param account account address
   * @param owner owner address
   */
  function addAccountOwner(
    address account,
    address owner
  )
    external
  {
    _verifySender(account);

    require(
      owner != address(0),
      "PersonalAccountRegistry: cannot add 0x0 owner"
    );

    require(
      !accounts[account].owners[owner].verifyAtCurrentBlock(),
      "PersonalAccountRegistry: owner already exists"
    );

    accounts[account].owners[owner].added = true;
    accounts[account].owners[owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      account,
      owner
    );
  }

  /**
   * @notice Removes the existing account owner
   * @param account account address
   * @param owner owner address
   */
  function removeAccountOwner(
    address account,
    address owner
  )
    external
  {
    address sender = _verifySender(account);

    require(
      owner != sender,
      "PersonalAccountRegistry: cannot remove self"
    );

    require(
      accounts[account].owners[owner].verifyAtCurrentBlock(),
      "PersonalAccountRegistry: owner doesn't exist"
    );

    accounts[account].owners[owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      account,
      owner
    );
  }

  /**
   * @notice Executes account transaction
   * @dev Deploys an account if not deployed yet
   * @param account account address
   * @param to to address
   * @param value value
   * @param data data
   */
  function executeAccountTransaction(
    address account,
    address to,
    uint256 value,
    bytes calldata data
  )
    external
  {
    _verifySender(account);

    _deployAccount(account);

    _executeAccountTransaction(
      account,
      to,
      value,
      data,
      true
    );
  }

  /**
   * @notice Refunds account call
   * @dev Deploys an account if not deployed yet
   * @param account account address
   * @param token token address
   * @param value value
   */
  function refundAccountCall(
    address account,
    address token,
    uint256 value
  )
    external
  {
    _verifySender(account);

    _deployAccount(account);

    /* solhint-disable avoid-tx-origin */

    if (token == address(0)) {
      _executeAccountTransaction(
        account,
        tx.origin,
        value,
        new bytes(0),
        false
      );
    } else {
      bytes memory response = _executeAccountTransaction(
        account,
        token,
        0,
        abi.encodeWithSelector(
          ERC20Token(token).transfer.selector,
          tx.origin,
          value
        ),
        false
      );

      if (response.length > 0) {
        require(
          abi.decode(response, (bool)),
          "PersonalAccountRegistry: ERC20Token transfer reverted"
        );
      }
    }

    emit AccountCallRefunded(
      account,
      tx.origin,
      token,
      value
    );

    /* solhint-enable avoid-tx-origin */
  }

  // external functions (views)

  /**
   * @notice Computes account address
   * @param saltOwner salt owner address
   * @return account address
   */
  function computeAccountAddress(
    address saltOwner
  )
    external
    view
    returns (address)
  {
    return _computeAccountAddress(saltOwner);
  }

  /**
   * @notice Checks if account is deployed
   * @param account account address
   * @return true when account is deployed
   */
  function isAccountDeployed(
    address account
  )
    external
    view
    returns (bool)
  {
    return accounts[account].deployed;
  }

  /**
   * @notice Verifies the owner of the account at the current block
   * @param account account address
   * @param owner owner address
   * @return true on correct account owner
   */
  function verifyAccountOwner(
    address account,
    address owner
  )
    external
    view
    returns (bool)
  {
    return _verifyAccountOwner(account, owner);
  }

  /**
   * @notice Verifies the owner of the account at a specific block
   * @param account account address
   * @param owner owner address
   * @param blockNumber block number to verify
   * @return true on correct account owner
   */
  function verifyAccountOwnerAtBlock(
    address account,
    address owner,
    uint256 blockNumber
  )
    external
    view
    returns (bool)
  {
    bool result = false;

    if (_verifyAccountOwner(account, owner)) {
      result = true;
    } else {
      result = accounts[account].owners[owner].verifyAtBlock(blockNumber);
    }

    return result;
  }

  /**
   * @notice Verifies account signature
   * @param account account address
   * @param messageHash message hash
   * @param signature signature
   * @return magic hash if valid
   */
  function isValidAccountSignature(
    address account,
    bytes32 messageHash,
    bytes calldata signature
  )
    override
    external
    view
    returns (bool)
  {
    return _verifyAccountOwner(
      account,
      messageHash.recoverAddress(signature)
    );
  }

  /**
   * @notice Verifies account signature
   * @param account account address
   * @param message message
   * @param signature signature
   * @return magic hash if valid
   */
  function isValidAccountSignature(
    address account,
    bytes calldata message,
    bytes calldata signature
  )
    override
    external
    view
    returns (bool)
  {
    return _verifyAccountOwner(
      account,
      message.toEthereumSignedMessageHash().recoverAddress(signature)
    );
  }

  // private functions

  function _verifySender(
    address account
  )
    private
    returns (address)
  {
    address sender = _getContextSender();

    if (accounts[account].owners[sender].added) {
      require(
        accounts[account].owners[sender].removedAtBlockNumber == 0,
        "PersonalAccountRegistry: sender is not the account owner"
      );
    } else {
      require(
        accounts[account].salt == 0,
        "PersonalAccountRegistry: sender is not the account owner"
      );

      bytes32 salt = keccak256(
        abi.encodePacked(sender)
      );

      require(
        account == _computeAccountAddress(salt),
        "PersonalAccountRegistry: sender is not the account owner"
      );

      accounts[account].salt = salt;
      accounts[account].owners[sender].added = true;

      emit AccountOwnerAdded(
        account,
        sender
      );
    }

    return sender;
  }

  function _deployAccount(
    address account
  )
    internal
  {
    if (!accounts[account].deployed) {
      _deployAccount(
        accounts[account].salt,
        true
      );

      accounts[account].deployed = true;
    }
  }

  // private functions (views)

  function _computeAccountAddress(
    address saltOwner
  )
    private
    view
    returns (address)
  {
    bytes32 salt = keccak256(
      abi.encodePacked(saltOwner)
    );

    return _computeAccountAddress(salt);
  }

  function _verifyAccountOwner(
    address account,
    address owner
  )
    private
    view
    returns (bool)
  {
    bool result;

    if (accounts[account].owners[owner].added) {
      result = accounts[account].owners[owner].removedAtBlockNumber == 0;
    } else if (accounts[account].salt == 0) {
      result = account == _computeAccountAddress(owner);
    }

    return result;
  }
}
