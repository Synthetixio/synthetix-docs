# IPerpsV2MarketDelayedIntent

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketDelayedIntent.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol)

## External Functions

### `submitCloseDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L9)</sub>

??? example "Details"

    **Signature**

    `submitCloseDelayedOrderWithTracking(uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitCloseOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L7)</sub>

??? example "Details"

    **Signature**

    `submitCloseOffchainDelayedOrderWithTracking(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L15)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrder(int256 sizeDelta, uint256 desiredTimeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L21)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrderWithTracking(int256 sizeDelta, uint256 desiredTimeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L28)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrder(int256 sizeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketDelayedIntent.sol#L30)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``
