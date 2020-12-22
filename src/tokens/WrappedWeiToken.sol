// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../common/lifecycle/Initializable.sol";
import "../common/token/ERC20Token.sol";

/**
 * @title WrappedWeiToken
 */
contract WrappedWeiToken is Initializable, ERC20Token {
  mapping(address => bool) private consumers;

  // events

  event ConsumerAdded(
    address consumer
  );

  event ConsumerRemoved(
    address consumer
  );

  /**
   * @dev public constructor
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
   * @dev receive
   */
  receive()
    external
    payable
  {
    _mint(msg.sender, msg.value);
  }

  // external functions

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

  function startConsuming()
    external
  {
    _addConsumer(msg.sender);
  }

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

  function depositTo(
    address to
  )
    external
    payable
  {
    _mint(to, msg.value);
  }

  function withdraw(
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, msg.sender, value);
  }

  function withdrawTo(
    address to,
    uint256 value
  )
    external
  {
    _withdraw(msg.sender, to, value);
  }

  function withdrawAll()
    external
  {
    _withdraw(msg.sender, msg.sender, balances[msg.sender]);
  }

  function withdrawAllTo(
    address to
  )
    external
  {
    _withdraw(msg.sender, to, balances[msg.sender]);
  }

  // external functions (views)

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
