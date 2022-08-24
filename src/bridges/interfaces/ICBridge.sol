// SPDX-License-Identifier: MIT
// solhint-disable-next-line
pragma solidity 0.8.4;

interface ICBridge {
    function send(
        address _receiver,
        address _token,
        uint256 _amount,
        uint64 _dstChinId,
        uint64 _nonce,
        uint32 _maxSlippage
    ) external;

    function sendNative(
        address _receiver,
        uint256 _amount,
        uint64 _dstChinId,
        uint64 _nonce,
        uint32 _maxSlippage
    ) external payable;

    function relay(
        bytes calldata _relayRequest,
        bytes[] calldata _sigs,
        address[] calldata _signers,
        uint256[] calldata _powers
    ) external;
}
