pragma solidity 0.5.15;


/**
 * @title ControlledAccount
 */
contract ControlledAccount {
  address public controller;

  // modifiers

  modifier onlyController() {
    require(
      msg.sender == controller
    );

    _;
  }

  /**
   * @dev public constructor
   */
  constructor()
    public
    payable
  {
    controller = msg.sender;
  }

  /**
   * @dev fallback
   */
  function()
    external
    payable
  {
    //
  }

  // external functions

  function executeTransaction(
    address payable to,
    uint256 value,
    bytes calldata data
  )
    external
    onlyController
  {
    // solhint-disable-next-line avoid-low-level-calls
    (bool succeeded, bytes memory returnData) = to.call.value(value)(data);

    require(
      succeeded
    );

    if (returnData.length > 0) {
      require(
        abi.decode(returnData, (bool))
      );
    }
  }
}
