# IPerpsV2Market

## Description

**Source:** [contracts/interfaces/IPerpsV2Market.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol)

## External Functions

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L24)</sub>

??? example "Details"

    **Signature**

    `closePosition(uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L26)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L16)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L18)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L10)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L12)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2Market.sol#L14)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``
