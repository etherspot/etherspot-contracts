pragma solidity 0.5.15;

import "../shared/initializable/Initializable.sol";
import "../shared/AddressLib.sol";
import "./erc20/ERC20DetailedToken.sol";


/**
 * @title O2OToken
 */
contract O2OToken is Initializable, ERC20DetailedToken {
  using AddressLib for address;

  /**
   * @dev public constructor
   */
  constructor() public {
    name = "One to One";
    symbol = "O2O";
    decimals = 18;
  }

  /**
   * @dev fallback
   */
  function()
    external
    payable
  {
    internallyMint(msg.sender, msg.value);
  }

  // external functions

  function initialize(
    address relay_
  )
    external
    onlyInitializer
  {
    initializeRelayed(relay_);
  }

  function withdraw()
    external
  {
    address sender = getSender();
    uint256 senderBalance = balances[sender];

    require(
      senderBalance > 0
    );

    internallyBurn(sender, senderBalance);

    require(
      sender.toPayable().send(senderBalance)
    );
  }
}
