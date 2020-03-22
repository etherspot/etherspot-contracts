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

  function hasEverBeenAccountOwner(
    address _account,
    address _owner
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
}
