pragma solidity 0.5.15;

import "../relay/Relayed.sol";
import "../shared/initializable/Initializable.sol";


/**
 * @title MessageHashRegistry
 */
contract MessageHashRegistry is Relayed, Initializable {
  struct SenderMessageHash {
    bool submitted;
    uint256 expiredAtBlockNumber;
  }

  mapping(address => mapping(bytes32 => SenderMessageHash)) private senderMessageHashes;

  // events

  event MessageHashSubmitted(
    address sender,
    bytes32 messageHash
  );

  event MessageHashExpired(
    address sender,
    bytes32 messageHash
  );

  /**
   * @dev public constructor
   */
  constructor() public Initializable() {}

  // external functions

  function initialize(
    address relay_
  )
    external
    onlyInitializer
  {
    // Relayed
    initializeRelayed(relay_);
  }

  function submitMessageHash(
    bytes32 messageHash
  )
    external
    afterInitialization
  {
    address sender = getSender();

    require(
      !privatelyVerifySenderMessageHashAtBlock(sender, messageHash, 0)
    );

    senderMessageHashes[sender][messageHash].submitted = true;
    senderMessageHashes[sender][messageHash].expiredAtBlockNumber = 0;

    emit MessageHashSubmitted(
      sender,
      messageHash
    );
  }

  function expireMessageHash(
    bytes32 messageHash
  )
    external
    afterInitialization
  {
    address sender = getSender();

    require(
      privatelyVerifySenderMessageHashAtBlock(sender, messageHash, 0)
    );

    senderMessageHashes[sender][messageHash].expiredAtBlockNumber = block.number;

    emit MessageHashExpired(
      sender,
      messageHash
    );
  }

  // external functions (views)

  function verifySenderMessageHash(
    address sender,
    bytes32 messageHash
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return privatelyVerifySenderMessageHashAtBlock(
      sender,
      messageHash,
      block.number
    );
  }

  function verifySenderMessageHashAtBlock(
    address sender,
    bytes32 messageHash,
    uint256 blockNumber
  )
    external
    view
    afterInitialization
    returns (bool)
  {
    return privatelyVerifySenderMessageHashAtBlock(
      sender,
      messageHash,
      blockNumber
    );
  }

  // private functions (views)

  function privatelyVerifySenderMessageHashAtBlock(
    address sender,
    bytes32 messageHash,
    uint256 blockNumber
  )
    private
    view
    returns (bool)
  {
    bool result = false;

    if (senderMessageHashes[sender][messageHash].submitted) {
      uint256 expiredAtBlockNumber = senderMessageHashes[sender][messageHash].expiredAtBlockNumber;

      if (expiredAtBlockNumber == 0) {
        result = true;
      } else if (blockNumber == 0) {
        result = true;
      } else {
        result = expiredAtBlockNumber < blockNumber;
      }
    }

    return result;
  }
}
