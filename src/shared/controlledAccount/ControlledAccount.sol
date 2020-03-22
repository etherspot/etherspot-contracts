pragma solidity 0.5.12;

import {IControlledAccount} from "./interfaces.sol";


/**
 * @title ControlledAccount
 */
contract ControlledAccount is IControlledAccount {
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
  constructor() public payable {
    controller = msg.sender;
  }

  // external access

  function() external payable {}

  function executeTransaction(
    address payable _to,
    uint256 _value,
    bytes calldata _data
  ) external onlyController {

    // solhint-disable-next-line avoid-low-level-calls
    (bool _succeeded, bytes memory _returnData) = _to.call.value(_value)(_data);

    require(_succeeded);

    if (_returnData.length > 0) {
      require(
        abi.decode(_returnData, (bool))
      );
    }
  }
}
