# PerpsV2MarketDelayedIntent

## Description

**Source:** [contracts/PerpsV2MarketDelayedIntent.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L27)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `submitCloseDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L44)</sub>

??? example "Details"

    **Signature**

    `submitCloseDelayedOrderWithTracking(uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `submitCloseOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L36)</sub>

??? example "Details"

    **Signature**

    `submitCloseOffchainDelayedOrderWithTracking(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L71)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrder(int256 sizeDelta, uint256 desiredTimeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `submitDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L84)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrderWithTracking(int256 sizeDelta, uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `submitOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L109)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrder(int256 sizeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `submitOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L117)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

## Internal Functions

### `_submitCloseDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L130)</sub>

??? example "Details"

    **Signature**

    `_submitCloseDelayedOrder(uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode, enum IPerpsV2MarketBaseTypes.OrderType orderType)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "invalid order type")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L144)

### `_submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L156)</sub>

??? example "Details"

    **Signature**

    `_submitDelayedOrder(bytes32 marketKey, int256 sizeDelta, uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode, bool isOffchain)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "previous order exists")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L165)

    * [require(..., "delay out of bounds")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L173)

### `emitDelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L262)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderSubmitted(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `DelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedIntent.sol#L248)</sub>

**Signature**: `DelayedOrderSubmitted(address account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 intentionTime, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`
