// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./Account.sol";


/**
 * @title Account controller
 *
 * @dev Contract module which provides Account deployment mechanism
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract AccountController {
  address public accountRegistry;
  address public accountImplementation;

  // events

  /**
   * @dev Emitted when the account registry is updated
   * @param accountRegistry account registry address
   */
  event AccountRegistryUpdated(
    address accountRegistry
  );

  /**
   * @dev Emitted when the account implementation is updated
   * @param accountImplementation account implementation address
   */
  event AccountImplementationUpdated(
    address accountImplementation
  );

  /**
   * @dev Emitted when the account is deployed
   * @param account account address
   * @param accountImplementation account implementation address
   */
  event AccountDeployed(
    address account,
    address accountImplementation
  );

  /**
   * @dev Emitted when the account is upgraded
   * @param account account address
   * @param accountImplementation account implementation address
   */
  event AccountUpgraded(
    address account,
    address accountImplementation
  );

  /**
   * @dev Emitted when the transaction is executed
   * @param account account address
   * @param to to address
   * @param value value
   * @param data data
   * @param response response
   */
  event AccountTransactionExecuted(
    address account,
    address to,
    uint256 value,
    bytes data,
    bytes response
  );

  /**
   * @dev Internal constructor
   */
  constructor() internal {}

  // internal functions

  /**
   * @notice Initializes `AccountController` contract
   * @param accountRegistry_ account registry address
   * @param accountImplementation_ account implementation address
   */
  function _initializeAccountController(
    address accountRegistry_,
    address accountImplementation_
  )
    internal
  {
    _setAccountRegistry(accountRegistry_, false);
    _setAccountImplementation(accountImplementation_, false);
  }

  /**
   * @notice Sets account registry
   * @param accountRegistry_ account registry address
   * @param emitEvent it will emit event when flag is set to true
   */
  function _setAccountRegistry(
    address accountRegistry_,
    bool emitEvent
  )
    internal
  {
    require(
      accountRegistry_ != address(0),
      "AccountController: cannot set account registry to 0x0"
    );

    accountRegistry = accountRegistry_;

    if (emitEvent) {
      emit AccountRegistryUpdated(accountRegistry);
    }
  }

  /**
   * @notice Sets account implementation
   * @param accountImplementation_ account implementation address
   * @param emitEvent it will emit event when flag is set to true
   */
  function _setAccountImplementation(
    address accountImplementation_,
    bool emitEvent
  )
    internal
  {
    require(
      accountImplementation_ != address(0),
      "AccountController: cannot set account Implementation to 0x0"
    );

    accountImplementation = accountImplementation_;

    if (emitEvent) {
      emit AccountImplementationUpdated(accountImplementation);
    }
  }

  /**
   * @notice Deploys account
   * @param salt CREATE2 salt
   * @param emitEvent it will emit event when flag is set to true
   * @return account address
   */
  function _deployAccount(
    bytes32 salt,
    bool emitEvent
  )
    internal
    returns (address)
  {
    address account = address(new Account{salt: salt}(
      accountRegistry,
      accountImplementation
    ));

    if (emitEvent) {
      emit AccountDeployed(
        account,
        accountImplementation
      );
    }

    return account;
  }

  /**
   * @notice Upgrades account
   * @param account account address
   * @param emitEvent it will emit event when flag is set to true
   */
  function _upgradeAccount(
    address account,
    bool emitEvent
  )
    internal
  {
    require(
      Account(payable(account)).implementation() != accountImplementation,
      "AccountController: account already upgraded"
    );

    Account(payable(account)).setImplementation(accountImplementation);

    if (emitEvent) {
      emit AccountUpgraded(
        account,
        accountImplementation
      );
    }
  }

  /**
   * @notice Executes transaction from the account
   * @param account account address
   * @param to to address
   * @param value value
   * @param data data
   * @param emitEvent it will emit event when flag is set to true
   * @return transaction result
   */
  function _executeAccountTransaction(
    address account,
    address to,
    uint256 value,
    bytes memory data,
    bool emitEvent
  )
    internal
    returns (bytes memory)
  {
    require(
      to != address(0),
      "AccountController: cannot send to 0x0"
    );

    require(
      to != address(this),
      "AccountController: cannot send to controller"
    );

    require(
      to != account,
      "AccountController: cannot send to self"
    );

    bytes memory response = Account(payable(account)).executeTransaction(
      to,
      value,
      data
    );

    if (emitEvent) {
      emit AccountTransactionExecuted(
        account,
        to,
        value,
        data,
        response
      );
    }

    return response;
  }

  // internal functions (views)

  /**
   * @notice Computes account CREATE2 address
   * @param salt CREATE2 salt
   * @return account address
   */
  function _computeAccountAddress(
    bytes32 salt
  )
    internal
    view
    returns (address)
  {
    bytes memory creationCode = abi.encodePacked(
      type(Account).creationCode,
      bytes12(0),
      accountRegistry,
      bytes12(0),
      accountImplementation
    );

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
}
