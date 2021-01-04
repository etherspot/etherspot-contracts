// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";
import "../gateway/GatewayRecipient.sol";


/**
 * @title Wrapped wei token
 *
 * @notice One to one wei consumable ERC20 token
 *
 * @dev After transfer to consumer account token will be automatically burn and withdraw.
 *
 * Use `startConsuming` to become a consumer.
 *
 * @author Stanisław Głogowski <stan@pillarproject.io>
 */
contract WrappedWeiToken is Initializable, ERC20Token, GatewayRecipient {
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
      _mint(_getSender(), msg.value);
    }
  }

  /**
   * @notice Receive fallback
   */
  receive()
    external
    payable
  {
    _mint(_getSender(), msg.value);
  }

  // external functions

  /**
   * @notice Initialize `WrappedWeiToken` contract
   * @param consumers_ array of consumers addresses
   * @param gateway_ `Gateway` contract address
   */
  function initialize(
    address[] calldata consumers_,
    address gateway_
  )
    external
    onlyInitializer
  {
    if (consumers_.length == 0) {
      consumers[_getSender()] = true;
    } else {
      uint consumersLen = consumers_.length;
      for (uint i = 0; i < consumersLen; i++) {
        _addConsumer(consumers_[i]);
      }
    }

    _initializeGatewayRecipient(gateway_);
  }

  /**
   * @notice Starts consuming
   * @dev Add caller as a consumer
   */
  function startConsuming()
    external
  {
    _addConsumer(_getSender());
  }

  /**
   * @notice Stops consuming
   * @dev Remove caller from consumers
   */
  function stopConsuming()
    external
  {
    address consumer = _getSender();

    require(
      consumers[consumer],
      "WrappedWeiToken: consumer doesn't exist"
    );

    consumers[consumer] = false;

    emit ConsumerRemoved(consumer);
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
    _withdraw(_getSender(), _getSender(), value);
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
    _withdraw(_getSender(), to, value);
  }

  /**
   * @notice Withdraws all
   */
  function withdrawAll()
    external
  {
    address sender = _getSender();

    _withdraw(sender, sender, balances[sender]);
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
    address sender = _getSender();

    _withdraw(sender, to, balances[sender]);
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

  // internal functions (views)

  function _getSender()
    override
    internal
    view
    returns (address)
  {
    return _getContextAccount();
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
