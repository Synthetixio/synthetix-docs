# IPerpsV2MarketOffchainOrders

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketOffchainOrders.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/interfaces/IPerpsV2MarketOffchainOrders.sol)

## External Functions

### `cancelOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/interfaces/IPerpsV2MarketOffchainOrders.sol#L13)</sub>

??? example "Details"

    **Signature**

    `cancelOffchainDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `executeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/interfaces/IPerpsV2MarketOffchainOrders.sol#L15)</sub>

??? example "Details"

    **Signature**

    `executeOffchainDelayedOrder(address account, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `submitOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/interfaces/IPerpsV2MarketOffchainOrders.sol#L5)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/interfaces/IPerpsV2MarketOffchainOrders.sol#L7)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``
