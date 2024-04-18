# PerpsV2MarketProxyable

## Description

**Source:** [contracts/PerpsV2MarketProxyable.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Internal Functions

### `_applyDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L24)</sub>

??? example "Details"

    **Signature**

    `_applyDebtCorrection(struct IPerpsV2MarketBaseTypes.Position newPosition, struct IPerpsV2MarketBaseTypes.Position oldPosition)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_assertFillPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L98)</sub>

??? example "Details"

    **Signature**

    `_assertFillPrice(uint256 fillPrice, uint256 desiredFillPrice, int256 sizeDelta) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_assetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L73)</sub>

??? example "Details"

    **Signature**

    `_assetPriceRequireSystemChecks(bool checkOffchainMarket) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_positionDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L35)</sub>

??? example "Details"

    **Signature**

    `_positionDebtCorrection(struct IPerpsV2MarketBaseTypes.Position position) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L110)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(uint256 price) returns (uint256 lastIndex)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_trade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_trade(address sender, struct PerpsV2MarketBase.TradeParams params)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [notFlagged](#notflagged)

### `_updatePositionMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_updatePositionMargin(address account, struct IPerpsV2MarketBaseTypes.Position position, int256 orderSizeDelta, uint256 price, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressToBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L276)</sub>

??? example "Details"

    **Signature**

    `addressToBytes32(address input) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `emitFundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L318)</sub>

??? example "Details"

    **Signature**

    `emitFundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPerpsTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L330)</sub>

??? example "Details"

    **Signature**

    `emitPerpsTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L294)</sub>

??? example "Details"

    **Signature**

    `emitPositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee, int256 skew)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `flagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L342)</sub>

**Signature**: `flagged(address account)`

### `notFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L349)</sub>

**Signature**: `notFlagged(address account)`

## Events

### `FundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L315)</sub>

**Signature**: `FundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)`

### `PerpsTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L327)</sub>

**Signature**: `PerpsTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

### `PositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketProxyable.sol#L280)</sub>

**Signature**: `PositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee, int256 skew)`
