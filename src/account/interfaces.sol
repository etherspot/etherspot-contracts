pragma solidity 0.5.12;

/**
 * @title IAccountRegistry
 */
interface IAccountRegistry {
  function computeAccountAddress(
    address _saltOwner
  ) external view returns (address);

  function isAccountDeployed(
    address _account
  ) external view returns(bool);

  function getAccountNonce(
    address _account
  ) external view returns(uint256);

  function isAccountOwner(
    address _account,
    address _owner
  ) external view returns(bool);

  function verifyAccountOwnerAtBlock(
    address _account,
    address _owner,
    uint256 _blockNumber
  ) external view returns(bool);

  function addAccountOwner(
    address _account,
    uint256 _nonce,
    address _owner
  ) external;

  function removeAccountOwner(
    address _account,
    uint256 _nonce,
    address _owner
  ) external;

  function executeAccountTransaction(
    address _account,
    uint256 _nonce,
    address payable _to,
    uint256 _value,
    bytes calldata _data
  ) external;

  function refundAccountCall(
    address _account,
    uint256 _nonce,
    address payable _refundToken,
    uint256 _refundAmount
  ) external;
}
