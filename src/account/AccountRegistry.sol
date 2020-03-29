pragma solidity 0.5.12;

import {ControlledAccountFactory} from "../shared/controlledAccount/ControlledAccountFactory.sol";
import {IControlledAccount} from "../shared/controlledAccount/interfaces.sol";
import {Initializable} from "../shared/initializable/Initializable.sol";
import {SafeMathLib} from "../shared/SafeMathLib.sol";
import {MetaTxRelayed} from "../metaTx/MetaTxRelayed.sol";
import {IERC20Token} from "../tokens/erc20/interfaces.sol";
import {IAccountRegistry} from "./interfaces.sol";


/**
 * @title AccountRegistry
 */
contract AccountRegistry is ControlledAccountFactory, Initializable, MetaTxRelayed, IAccountRegistry {
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

  // external access

  function initialize(
    address _metaTxRelay
  ) external onlyInitializer {
    _initializeMetaTxRelayed(_metaTxRelay);
  }

  function computeAccountAddress(
    address _saltOwner
  ) external view returns (address) {
    return _computeAccountAddress(_saltOwner);
  }

  function isAccountDeployed(
    address _account
  ) external view returns (bool) {
    return accounts[_account].deployed;
  }

  function getAccountNonce(
    address _account
  ) external view returns (uint256) {
    return accounts[_account].nonce;
  }

  function isAccountOwner(
    address _account,
    address _owner
  ) external view returns (bool) {
    return _isAccountOwner(_account, _owner);
  }

  function verifyAccountOwnerAtBlock(
    address _account,
    address _owner,
    uint256 _blockNumber
  ) external view returns (bool _result) {
    if (_isAccountOwner(_account, _owner)) {
      _result = true;
    } else if (accounts[_account].owners[_owner].added) {
      if (_blockNumber == 0) {
        _result = true;
      } else {
        _result = accounts[_account].owners[_owner].removedAtBlockNumber > _blockNumber;
      }
    }

    return _result;
  }

  function addAccountOwner(
    address _account,
    uint256 _nonce,
    address _owner
  ) external {
    address _sender = _verifySenderAndAccountNonce(_account, _nonce);

    require(
      _owner != address(0)
    );

    require(
      !accounts[_account].owners[_owner].added || accounts[_account].owners[_owner].removedAtBlockNumber > 0
    );

    accounts[_account].owners[_owner].added = true;
    accounts[_account].owners[_owner].removedAtBlockNumber = 0;

    emit AccountOwnerAdded(
      _sender,
      _account,
      _owner
    );
  }

  function removeAccountOwner(
    address _account,
    uint256 _nonce,
    address _owner
  ) external {
    address _sender = _verifySenderAndAccountNonce(_account, _nonce);

    require(
      _owner != _sender
    );

    require(
      accounts[_account].owners[_owner].added && accounts[_account].owners[_owner].removedAtBlockNumber == 0
    );

    accounts[_account].owners[_owner].removedAtBlockNumber = block.number;

    emit AccountOwnerRemoved(
      _sender,
      _account,
      _owner
    );
  }

  function executeAccountTransaction(
    address _account,
    uint256 _nonce,
    address payable _to,
    uint256 _value,
    bytes calldata _data
  ) external {
    address _sender = _verifySenderAndAccountNonce(_account, _nonce);

    _executeAccountTransaction(
      _sender,
      _account,
      _to,
      _value,
      _data
    );

    emit AccountTransactionExecuted(
      _sender,
      _account,
      _to,
      _value,
      _data
    );
  }

  function refundAccountCall(
    address _account,
    uint256 _nonce,
    address payable _refundToken,
    uint256 _refundAmount
  ) external {
    address _sender = _verifySenderAndAccountNonce(_account, _nonce);

    if (_refundToken == address(0)) {
      _executeAccountTransaction(
        _sender,
        _account,
        tx.origin,
        _refundAmount,
        new bytes(0)
      );
    } else {
      _executeAccountTransaction(
        _sender,
        _account,
        _refundToken,
        0,
        abi.encodeWithSelector(
          IERC20Token(_refundToken).transfer.selector,
          tx.origin,
          _refundAmount
        )
      );
    }

    emit AccountCallRefunded(
      _sender,
      _account,
      tx.origin,
      _refundAmount,
      _refundToken
    );
  }

  // private access

  function _computeAccountAddress(
    address _saltOwner
  ) private view returns (address) {
    bytes32 _salt = keccak256(
      abi.encodePacked(_saltOwner)
    );

    return _computeControlledAccountAddress(_salt);
  }

  function _isAccountOwner(
    address _account,
    address _owner
  ) private view returns (bool _result) {
    if (accounts[_account].owners[_owner].added) {
      _result = accounts[_account].owners[_owner].removedAtBlockNumber == 0;
    } else if (accounts[_account].salt == 0) {
      _result = _account == _computeAccountAddress(_owner);
    }

    return _result;
  }

  function _verifySenderAndAccountNonce(
    address _account,
    uint256 _nonce
  ) private returns (address) {
    address _sender = _getSender();

    if (!accounts[_account].owners[_sender].added) {
      require(
        accounts[_account].salt == 0
      );

      bytes32 _salt = keccak256(
        abi.encodePacked(_sender)
      );

      require(
        _account == _computeControlledAccountAddress(_salt)
      );

      accounts[_account].salt = _salt;
      accounts[_account].owners[_sender].added = true;

      emit AccountOwnerAdded(
        _sender,
        _account,
        _sender
      );
    }

    require(
      accounts[_account].nonce == _nonce
    );

    accounts[_account].nonce = accounts[_account].nonce.add(1);

    return _sender;
  }

  function _executeAccountTransaction(
    address _sender,
    address _account,
    address payable _to,
    uint256 _value,
    bytes memory _data
  ) private {
    require(
      _to != address(0)
    );

    require(
      _to != address(this)
    );

    require(
      _to != _account
    );

    if (!accounts[_account].deployed) {
      _createControlledAccount(
        accounts[_account].salt
      );

      accounts[_account].deployed = true;

      emit AccountDeployed(
        _sender,
        _account
      );
    }

    IControlledAccount(_account).executeTransaction(
      _to,
      _value,
      _data
    );
  }
}
