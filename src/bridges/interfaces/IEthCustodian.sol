// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IEthCustodian {
    function depositToEVM(string memory ethRecipientOnNear, uint256 fee)
        external
        payable;
}
