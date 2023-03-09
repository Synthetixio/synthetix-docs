# PerpsV2MarketDelayedOrders

## Description

**Source:** [contracts/PerpsV2MarketDelayedOrders.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L24)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L84)</sub>

??? example "Details"

    **Signature**

    `cancelDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L88)

    * [require(..., "use offchain method")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L90)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L109)</sub>

??? example "Details"

    **Signature**

    `executeDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L113)

    * [require(..., "use offchain method")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L115)

    * [require(..., "executability not reached")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L119)

    * [require(..., "order too old, use cancel")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L129)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L47)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `submitDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L60)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

## Internal Functions

### `_confirmCanCancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L146)</sub>

??? example "Details"

    **Signature**

    `_confirmCanCancel(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentRoundId)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_confirmationWindowOver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/PerpsV2MarketDelayedOrders.sol#L169)</sub>

??? example "Details"

    **Signature**

    `_confirmationWindowOver(uint256 executableAtTime, uint256 currentRoundId, uint256 targetRoundId) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
