pragma solidity 0.5.12;
pragma experimental ABIEncoderV2;

import {Chained} from "../shared/chained/Chained.sol";
import {NoFallback} from "../shared/noFallback/NoFallback.sol";
import {SignatureLib} from "../signature/SignatureLib.sol";
import {SignedMessageLib} from "../signedMessage/SignedMessageLib.sol";

/**
 * @title MetaTxRelay
 */
contract MetaTxRelay is Chained, NoFallback {
  using SignatureLib for bytes32;
  using SignedMessageLib for bytes;

  /**
   * @dev public constructor
   */
  constructor() public Chained() {}

  // external access

  function relayCalls(
    address _to,
    bytes[] calldata _calls,
    bytes calldata _senderSignature
  ) external {
    address _sender = abi.encode(
      chainId,
      address(this),
      _to,
      _calls,
      tx.gasprice
    )
    .toSignedMessageHash()
    .recoverAddress(_senderSignature);

    require(
      _sender != address(0)
    );

    bool _succeeded;

    for (uint256 i = 0; i < _calls.length; i++) {
      (_succeeded,) = _to.call(abi.encodePacked(_calls[i], _sender));

      require(
        _succeeded
      );
    }
  }
}
