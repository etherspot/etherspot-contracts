pragma solidity 0.5.15;

import "../common/account/AccountController.sol";
import "../common/libs/AddressLib.sol";
import "../common/libs/BlockLib.sol";
import "../common/libs/SafeMathLib.sol";
import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";
import "../gateway/GatewayRecipient.sol";


/**
 * @title PersonalAccountRegistry
 */
contract PersonalAccountRegistry is AccountController, Initializable, GatewayRecipient {
  using BlockLib for BlockLib.BlockRelated;
  using AddressLib for address;
  using SafeMathLib for uint256;

  struct Account {
    bool deployed;
    bytes32 salt;
    mapping(address => BlockLib.BlockRelated) owners;
  }

  mapping(address => Account) private accounts;

  // events

  event AccountDeployed(
    address account
  );

  event AccountOwnerAdded(
    address account,
    address owner
  );

  event AccountOwnerRemoved(
    address account,
    address owner
  );

  event AccountTransactionExecuted(
    address account,
    address to,
    uint256 value,
    bytes data
  );

  event AccountCallRefunded(
    address account,
    address beneficiary,
    address token,
    uint256 value
  );

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    address gateway_
  )
    external
    onlyInitializer
  {
    // GatewayRecipient
    _initializeGatewayRecipient(gateway_);
  }

  function addAccountOwner(
    address account,
    address owner
  )
    external
  {
    _verifySender(account);

    require(
      owner != address(0)
    );

    require(
      !accounts[account].owners[owner].verifyAtCurrentBlock()
    );

    accounts[account].owners[owner].added = true;
    accounts[account].owners[owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      account,
      owner
    );
  }

  function removeAccountOwner(
    address account,
    address owner
  )
    external
  {
    address sender = _verifySender(account);

    require(
      owner != sender
    );

    require(
      accounts[account].owners[owner].verifyAtCurrentBlock()
    );

    accounts[account].owners[owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      account,
      owner
    );
  }

  function executeAccountTransaction(
    address payable account,
    address payable to,
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
      data
    );

    emit AccountTransactionExecuted(
      account,
      to,
      value,
      data
    );
  }

  function refundAccountCall(
    address payable account,
    address payable token,
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
        new bytes(0)
      );
    } else {
      _executeAccountTransaction(
        account,
        token,
        0,
        abi.encodeWithSelector(
          ERC20Token(token).transfer.selector,
          tx.origin,
          value
        )
      );
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

  function computeAccountAddress(
    address saltOwner
  )
    external
    view
    returns (address)
  {
    return _computeAccountAddress(saltOwner);
  }

  function isAccountDeployed(
    address account
  )
    external
    view
    returns (bool)
  {
    return accounts[account].deployed;
  }

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

  // private functions

  function _verifySender(
    address account
  )
    private
    returns (address)
  {
    address sender = _getContextSender();

    if (!accounts[account].owners[sender].added) {
      require(
        accounts[account].salt == 0
      );

      bytes32 salt = keccak256(
        abi.encodePacked(sender)
      );

      require(
        account == _computeAccountAddress(salt)
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
        accounts[account].salt
      );

      accounts[account].deployed = true;

      emit AccountDeployed(
        account
      );
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
