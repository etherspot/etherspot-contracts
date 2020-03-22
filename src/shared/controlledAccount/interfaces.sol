pragma solidity 0.5.12;

/**
 * @title IControlledAccount
 */
interface IControlledAccount {
  function executeTransaction(
    address payable _to,
    uint256 _value,
    bytes calldata _data
  ) external;
}
