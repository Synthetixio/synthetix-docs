# PerpsV2Market

## Description

**Source:** [contracts/PerpsV2Market.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L83)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `_closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L226)</sub>

??? example "Details"

    **Signature**

    `_closePosition(uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L292)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L155)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L165)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L226)</sub>

??? example "Details"

    **Signature**

    `_closePosition(uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `_liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L246)</sub>

??? example "Details"

    **Signature**

    `_liquidatePosition(address account, address liquidator, uint256 price)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `_transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L114)</sub>

??? example "Details"

    **Signature**

    `_transferMargin(int256 marginDelta, uint256 price, address sender)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L217)</sub>

??? example "Details"

    **Signature**

    `closePosition(uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L222)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L177)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta, uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L185)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L99)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid price")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2Market.sol#L110)
