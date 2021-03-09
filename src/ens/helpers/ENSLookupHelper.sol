// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../../common/lifecycle/Initializable.sol";
import "../ENSRegistry.sol";

/**
 * @title ENS lookup helper
 *
 * @dev Base on https://github.com/ensdomains/ens/blob/ff0f41747c05f1598973b0fe7ad0d9e09565dfcd/contracts/ReverseRegistrar.sol
 */
contract ENSLookupHelper is Initializable {
  ENSRegistry public registry;

  /**
   * @dev Public constructor
   */
  constructor() public Initializable() {}

  // external functions

  /**
   * @notice Initializes `ENSLookupHelper` contract
   * @param registry_ ENS registry address
   */
  function initialize(
    ENSRegistry registry_
  )
    external
    onlyInitializer
  {
    registry = registry_;
  }
}
