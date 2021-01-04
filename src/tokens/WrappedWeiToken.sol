// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";


/**
 * @title Wrapped wei token
 *
 * @notice One to one wei consumable ERC20 token
 *
 * @dev After transfer to consumer account token will be automatically withdrawn.
 *
 * Use `startConsuming` to become a consumer.
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract WrappedWeiToken is Initializable, ERC20Token {
  mapping(address => bool) private consumers;

  // events

  /**
   * @dev Emitted when the new consumer is added
   * @param consumer consumer address
   */
  event ConsumerAdded(
    address consumer
  );

  /**
   * @dev Emitted when the existing consumer is removed
   * @param consumer consumer address
   */
  event ConsumerRemoved(
    address consumer
  );

  /**
   * @dev Public constructor
   */
  constructor()
    public
    payable
    Initializable()
  {
    name = "Wrapped Wei";
    symbol = "WWEI";

    if (msg.value > 0) {
      _mint(msg.sender, msg.value);
    }
  }

  /**
   * @notice Receive fallback
   */
  receive()
    external
    payable
  {
    _mint(msg.sender, msg.value);
  }

  // external functions

  /**
   * @notice Initialize `WrappedWeiToken` contract
   * @param consumers_ array of consumers addresses
   */
  function initialize(
    address[] calldata consumers_
  )
    external
    onlyInitializer
  {
    if (consumers_.length == 0) {
      consumers[msg.sender] = true;
    } else {
      uint consumersLen = consumers_.length;
      for (uint i = 0; i < consumersLen; i++) {
        _addConsumer(consumers_[i]);
      }
    }
  }

  /**
   * @notice Starts consuming
   * @dev Add `msg.sender` as a consumer
   */
  function startConsuming()
    external
  {
    _addConsumer(msg.sender);
  }

  /**
   * @notice Stops consuming
   * @dev Remove `msg.sender` from consumers
   */
  function stopConsuming()
    external
  {
    require(
      consumers[msg.sender],
      "WrappedWeiToken: consumer doesn't exist"
    );

    consumers[msg.sender] = false;

    emit ConsumerRemoved(msg.sender);
  }

  /**
   * @notice Deposits `msg.value` to address
   * @param to to address
   */
  function depositTo(
    address to
  )
    external
    payable
  {
    _mint(to, msg.value);
  }

  /**
   * @notice Withdraws
   * @param value value to withdraw
   */
  function withdraw(
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, msg.sender, value);
  }

  /**
   * @notice Withdraws to address
   * @param to to address
   * @param value value to withdraw
   */
  function withdrawTo(
    address to,
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, to, value);
  }

  /**
   * @notice Withdraws all
   */
  function withdrawAll()
    external
  {
    _withdraw(msg.sender, msg.sender, balances[msg.sender]);
  }

  /**
   * @notice Withdraws all to address
   * @param to to address
   */
  function withdrawAllTo(
    address to
  )
    external
  {
    _withdraw(msg.sender, to, balances[msg.sender]);
  }

  // external functions (views)

  /**
   * @notice Checks if consumer exists
   * @param consumer consumer address
   * @return true if consumer exists
   */
  function isConsumer(
    address consumer
  )
    external
    view
    returns (bool)
  {
    return consumers[consumer];
  }

  // internal functions

  function _transfer(
    address from,
    address to,
    uint256 value
  )
    override
    internal
  {
    if (consumers[to]) {
      _withdraw(from, to, value);
    } else {
      super._transfer(from, to, value);
    }
  }

  // private functions

  function _addConsumer(
    address consumer
  )
    private
  {
    require(
      !consumers[consumer],
      "WrappedWeiToken: consumer already exists"
    );

    consumers[consumer] = true;

    emit ConsumerAdded(consumer);
  }

  function _withdraw(
    address from,
    address to,
    uint256 value
  )
    private
  {
    _burn(from, value);

    require(
      // solhint-disable-next-line check-send-result
      payable(to).send(value),
      "WrappedWeiToken: transaction reverted"
    );
  }
}
