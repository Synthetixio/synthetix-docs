# PerpsV2Market

## Description

**Source:** [contracts/PerpsV2Market.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L100)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `_closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L252)</sub>

??? example "Details"

    **Signature**

    `_closePosition(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `_transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_transferMargin(int256 marginDelta, uint256 price, address sender)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [notFlagged](#notflagged)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L181)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L191)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

## Internal Functions

### `_closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L252)</sub>

??? example "Details"

    **Signature**

    `_closePosition(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `_transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_transferMargin(int256 marginDelta, uint256 price, address sender)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [notFlagged](#notflagged)

    * [onlyIfNotPendingOrder](#onlyifnotpendingorder)

### `emitMarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L277)</sub>

??? example "Details"

    **Signature**

    `emitMarginTransferred(address account, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L243)</sub>

??? example "Details"

    **Signature**

    `closePosition(uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L248)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L203)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta, uint256 desiredFillPrice)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L211)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, uint256 desiredFillPrice, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L115)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid price")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L126)

## Modifiers

### `onlyIfNotPendingOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L281)</sub>

## Events

### `MarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2Market.sol#L274)</sub>

**Signature**: `MarginTransferred(address account, int256 marginDelta)`
