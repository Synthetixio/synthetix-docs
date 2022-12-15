# IPerpsV2MarketDelayedOrders

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketDelayedOrders.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketDelayedOrders.sol)

## External Functions

### `cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketDelayedOrders.sol#L17)</sub>

??? example "Details"

    **Signature**

    `cancelDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketDelayedOrders.sol#L19)</sub>

??? example "Details"

    **Signature**

    `executeDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketDelayedOrders.sol#L4)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketDelayedOrders.sol#L10)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``
