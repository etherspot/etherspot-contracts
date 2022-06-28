// SPDX-License-Identifier: MIT
// solhint-disable-next-line

pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IERC677Receiver is IERC20 {
    function onTokenTransfer(
        address _sender,
        uint256 _value,
        bytes memory _data
    ) external;
}
