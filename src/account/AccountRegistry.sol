pragma solidity 0.5.15;

import "../metaTx/MetaTxRelayed.sol";
import "../shared/AddressLib.sol";
import "../shared/SafeMathLib.sol";
import "../shared/controlledAccount/ControlledAccountFactory.sol";
import "../shared/initializable/Initializable.sol";
import "../tokens/erc20/ERC20Token.sol";


/**
 * @title AccountRegistry
 */
contract AccountRegistry is MetaTxRelayed, ControlledAccountFactory, Initializable {
  using AddressLib for address;
  using SafeMathLib for uint256;

  struct Owner {
    bool added;
    uint256 removedAtBlockNumber;
  }

  struct Account {
    bool deployed;
    bytes32 salt;
    uint256 nonce;
    mapping(address => Owner) owners;
  }

  mapping(address => Account) private accounts;

  // events

  event AccountDeployed(
    address sender,
    address account
  );

  event AccountOwnerAdded(
    address sender,
    address account,
    address owner
  );

  event AccountOwnerRemoved(
    address sender,
    address account,
    address owner
  );

  event AccountTransactionExecuted(
    address sender,
    address account,
    address to,
    uint256 value,
    bytes data
  );

  event AccountCallRefunded(
    address sender,
    address account,
    address beneficiary,
    uint256 refundAmount,
    address refundToken
  );

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    address metaTxRelay_
  )
    external
    onlyInitializer
  {
    // MetaTxRelayed
    initializeMetaTxRelayed(metaTxRelay_);
  }

  function addAccountOwner(
    address account,
    uint256 nonce,
    address owner
  )
    external
    afterInitialization
  {
    require(
      owner != address(0)
    );

    require(
      !accounts[account].owners[owner].added ||
      accounts[account].owners[owner].removedAtBlockNumber > 0
    );

    address sender = verifySenderAndAccountNonce(account, nonce);

    accounts[account].owners[owner].added = true;
    accounts[account].owners[owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      sender,
      account,
      owner
    );
  }

  function removeAccountOwner(
    address account,
    uint256 nonce,
    address owner
  )
    external
    afterInitialization
  {
    address sender = verifySenderAndAccountNonce(account, nonce);

    require(
      owner != sender
    );

    require(
      accounts[account].owners[owner].added &&
      accounts[account].owners[owner].removedAtBlockNumber == 0
    );

    accounts[account].owners[owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      sender,
      account,
      owner
    );
  }

  function executeAccountTransaction(
    address payable account,
    uint256 nonce,
    address payable to,
    uint256 value,
    bytes calldata data
  )
    external
    afterInitialization
  {
    address sender = verifySenderAndAccountNonce(account, nonce);

    privatelyExecuteAccountTransaction(
      sender,
      account,
      to,
      value,
      data
    );

    emit AccountTransactionExecuted(
      sender,
      account,
      to,
      value,
      data
    );
  }

  function refundAccountCall(
    address payable account,
    uint256 nonce,
    address payable refundToken,
    uint256 refundAmount
  )
    external
    afterInitialization
  {
    address sender = verifySenderAndAccountNonce(account, nonce);

    /* solhint-disable avoid-tx-origin */
    if (refundToken == address(0)) {
      privatelyExecuteAccountTransaction(
        sender,
        account,
        tx.origin,
        refundAmount,
        new bytes(0)
      );
    } else {
      privatelyExecuteAccountTransaction(
        sender,
        account,
        refundToken,
        0,
        abi.encodeWithSelector(
          ERC20Token(refundToken).transfer.selector,
          tx.origin,
          refundAmount
        )
      );
    }

    emit AccountCallRefunded(
      sender,
      account,
      tx.origin,
      refundAmount,
      refundToken
    );
    /* solhint-enable avoid-tx-origin */
  }

  // external functions (views)

  function computeAccountAddress(
    address saltOwner
  )
    external
    view
    afterInitialization
    returns (address)
  {
    return privatelyComputeAccountAddress(saltOwner);
  }

  function isAccountDeployed(
    address account
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return accounts[account].deployed;
  }

  function getAccountNonce(
    address account
  )
    external
    view
    afterInitialization
    returns (uint256)
  {
    return accounts[account].nonce;
  }

  function isAccountOwner(
    address account,
    address owner
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return checkAccountOwner(account, owner);
  }

  function isAccountOwnerAtBlock(
    address account,
    address owner,
    uint256 blockNumber
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    bool result = false;

    if (checkAccountOwner(account, owner)) {
      result = true;
    } else if (accounts[account].owners[owner].added) {
      if (blockNumber == 0) {
        result = true;
      } else {
        result = accounts[account].owners[owner].removedAtBlockNumber > blockNumber;
      }
    }

    return result;
  }

  // private functions

  function verifySenderAndAccountNonce(
    address account,
    uint256 nonce
  )
    private
    returns (address)
  {
    address sender = getOriginalSenders();

    if (
      !accounts[account].owners[sender].added
    ) {
      require(
        accounts[account].salt == 0
      );

      bytes32 salt = keccak256(
        abi.encodePacked(sender)
      );

      require(
        account == computeControlledAccountAddress(salt)
      );

      accounts[account].salt = salt;
      accounts[account].owners[sender].added = true;

      emit AccountOwnerAdded(
        sender,
        account,
        sender
      );
    }

    require(
      accounts[account].nonce == nonce
    );

    accounts[account].nonce = accounts[account].nonce.add(1);

    return sender;
  }

  function privatelyExecuteAccountTransaction(
    address sender,
    address payable account,
    address payable to,
    uint256 value,
    bytes memory data
  )
    private
  {
    require(
      to != address(0)
    );

    require(
      to != address(this)
    );

    require(
      to != account
    );

    if (!accounts[account].deployed) {
      createControlledAccount(
        accounts[account].salt
      );

      accounts[account].deployed = true;

      emit AccountDeployed(
        sender,
        account
      );
    }

    executeControlledAccountTransaction(
      account,
      to,
      value,
      data
    );
  }

  // private functions (views)

  function checkAccountOwner(
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
      result = account == privatelyComputeAccountAddress(owner);
    }

    return result;
  }

  function privatelyComputeAccountAddress(
    address saltOwner
  )
    private
    view
    returns (address)
  {
    bytes32 salt = keccak256(
      abi.encodePacked(saltOwner)
    );

    return computeControlledAccountAddress(salt);
  }
}
