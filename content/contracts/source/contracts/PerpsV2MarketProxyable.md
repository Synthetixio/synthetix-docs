# PerpsV2MarketProxyable

## Description

**Source:** [contracts/PerpsV2MarketProxyable.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Internal Functions

### `_applyDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L24)</sub>

??? example "Details"

    **Signature**

    `_applyDebtCorrection(struct IPerpsV2MarketBaseTypes.Position newPosition, struct IPerpsV2MarketBaseTypes.Position oldPosition)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_assertPriceImpact`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L99)</sub>

??? example "Details"

    **Signature**

    `_assertPriceImpact(uint256 price, uint256 fillPrice, uint256 priceImpactDelta, int256 sizeDelta) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_assetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L73)</sub>

??? example "Details"

    **Signature**

    `_assetPriceRequireSystemChecks() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_positionDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L35)</sub>

??? example "Details"

    **Signature**

    `_positionDebtCorrection(struct IPerpsV2MarketBaseTypes.Position position) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L113)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_trade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L179)</sub>

??? example "Details"

    **Signature**

    `_trade(address sender, struct PerpsV2MarketBase.TradeParams params)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_updatePositionMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_updatePositionMargin(address account, struct IPerpsV2MarketBaseTypes.Position position, uint256 price, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressToBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L265)</sub>

??? example "Details"

    **Signature**

    `addressToBytes32(address input) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `emitFundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L327)</sub>

??? example "Details"

    **Signature**

    `emitFundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitFuturesTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L339)</sub>

??? example "Details"

    **Signature**

    `emitFuturesTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitMarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L305)</sub>

??? example "Details"

    **Signature**

    `emitMarginTransferred(address account, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L313)</sub>

??? example "Details"

    **Signature**

    `emitPositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L282)</sub>

??? example "Details"

    **Signature**

    `emitPositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `FundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L324)</sub>

**Signature**: `FundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)`

### `FuturesTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L336)</sub>

**Signature**: `FuturesTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

### `MarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L302)</sub>

**Signature**: `MarginTransferred(address account, int256 marginDelta)`

### `PositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L309)</sub>

**Signature**: `PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)`

### `PositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketProxyable.sol#L269)</sub>

**Signature**: `PositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)`
