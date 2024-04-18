# FuturesMarketBase

## Description

**Source:** [contracts/frozen/FuturesMarketBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol)

## Structs

### `TradeParams`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L155)</sub>

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `sizeDelta`    | `int256`  | TBA         |
| `price`        | `uint256` | TBA         |
| `takerFee`     | `uint256` | TBA         |
| `makerFee`     | `uint256` | TBA         |
| `trackingCode` | `bytes32` | TBA         |

## Variables

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L104)</sub>

**Type:** `bytes32`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L124)</sub>

**Type:** `uint32`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L125)</sub>

**Type:** `int128[]`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L101)</sub>

**Type:** `bytes32`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L107)</sub>

**Type:** `uint128`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L113)</sub>

**Type:** `int128`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L131)</sub>

**Type:** `mapping(address => struct IFuturesMarketBaseTypes.Position)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L165)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver, bytes32 _baseAsset, bytes32 _marketKey)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L624)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L194)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_abs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L577)</sub>

??? example "Details"

    **Signature**

    `_abs(int256 x) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L367)</sub>

??? example "Details"

    **Signature**

    `_accessibleMargin(struct IFuturesMarketBaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L316)</sub>

??? example "Details"

    **Signature**

    `_accruedFunding(struct IFuturesMarketBaseTypes.Position position, uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_applyDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L741)</sub>

??? example "Details"

    **Signature**

    `_applyDebtCorrection(struct IFuturesMarketBaseTypes.Position newPosition, struct IFuturesMarketBaseTypes.Position oldPosition)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_assetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L639)</sub>

??? example "Details"

    **Signature**

    `_assetPriceRequireSystemChecks() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L423)</sub>

??? example "Details"

    **Signature**

    `_canLiquidate(struct IFuturesMarketBaseTypes.Position position, uint256 price) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L947)</sub>

??? example "Details"

    **Signature**

    `_closePosition(bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L240)</sub>

??? example "Details"

    **Signature**

    `_currentFundingRate(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L432)</sub>

??? example "Details"

    **Signature**

    `_currentLeverage(struct IFuturesMarketBaseTypes.Position position, uint256 price, uint256 remainingMargin_) pure returns (int256 leverage)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L462)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRate() view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchangeCircuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L205)</sub>

??? example "Details"

    **Signature**

    `_exchangeCircuitBreaker() view returns (contract IExchangeCircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L209)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L598)</sub>

??? example "Details"

    **Signature**

    `_isError(enum IFuturesMarketBaseTypes.Status status) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_latestFundingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L466)</sub>

??? example "Details"

    **Signature**

    `_latestFundingIndex() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L964)</sub>

??? example "Details"

    **Signature**

    `_liquidatePosition(address account, address liquidator, uint256 price)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [PositionModified](#positionmodified)

    * [PositionLiquidated](#positionliquidated)

### `_liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L400)</sub>

??? example "Details"

    **Signature**

    `_liquidationFee(int256 positionSize, uint256 price) view returns (uint256 lFee)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L418)</sub>

??? example "Details"

    **Signature**

    `_liquidationMargin(int256 positionSize, uint256 price) view returns (uint256 lMargin)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L217)</sub>

??? example "Details"

    **Signature**

    `_manager() view returns (contract IFuturesMarketManagerInternal)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marginPlusProfitFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L328)</sub>

??? example "Details"

    **Signature**

    `_marginPlusProfitFunding(struct IFuturesMarketBaseTypes.Position position, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L726)</sub>

??? example "Details"

    **Signature**

    `_marketDebt(uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_max`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L581)</sub>

??? example "Details"

    **Signature**

    `_max(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_min`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L585)</sub>

??? example "Details"

    **Signature**

    `_min(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L920)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_netFundingPerUnit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L261)</sub>

??? example "Details"

    **Signature**

    `_netFundingPerUnit(uint256 startIndex, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextFundingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L257)</sub>

??? example "Details"

    **Signature**

    `_nextFundingEntry(uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L307)</sub>

??? example "Details"

    **Signature**

    `_notionalValue(int256 positionSize, uint256 price) pure returns (int256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L445)</sub>

??? example "Details"

    **Signature**

    `_orderFee(struct FuturesMarketBase.TradeParams params, uint256 dynamicFeeRate) view returns (uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_orderSizeTooLarge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L271)</sub>

??? example "Details"

    **Signature**

    `_orderSizeTooLarge(uint256 maxSize, int256 oldSize, int256 newSize) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_positionDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L694)</sub>

??? example "Details"

    **Signature**

    `_positionDebtCorrection(struct IFuturesMarketBaseTypes.Position position) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L470)</sub>

??? example "Details"

    **Signature**

    `_postTradeDetails(struct IFuturesMarketBaseTypes.Position oldPos, struct FuturesMarketBase.TradeParams params) view returns (struct IFuturesMarketBaseTypes.Position newPosition, uint256 fee, enum IFuturesMarketBaseTypes.Status tradeStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L311)</sub>

??? example "Details"

    **Signature**

    `_profitLoss(struct IFuturesMarketBaseTypes.Position position, uint256 price) pure returns (int256 pnl)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_proportionalSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L232)</sub>

??? example "Details"

    **Signature**

    `_proportionalSkew(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "price can't be zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L234)

    * [require(..., "skewScale is zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L236)

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L658)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(uint256 price) returns (uint256 lastIndex)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [FundingRecomputed](#fundingrecomputed)

### `_recomputeMarginWithDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L339)</sub>

??? example "Details"

    **Signature**

    `_recomputeMarginWithDelta(struct IFuturesMarketBaseTypes.Position position, uint256 price, int256 marginDelta) view returns (uint256 margin, enum IFuturesMarketBaseTypes.Status statusCode)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L360)</sub>

??? example "Details"

    **Signature**

    `_remainingMargin(struct IFuturesMarketBaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_revertIfError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L605)</sub>

??? example "Details"

    **Signature**

    `_revertIfError(bool isError, enum IFuturesMarketBaseTypes.Status status) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sameSide`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L591)</sub>

??? example "Details"

    **Signature**

    `_sameSide(int256 a, int256 b) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_settings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L221)</sub>

??? example "Details"

    **Signature**

    `_settings() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_signedAbs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L570)</sub>

??? example "Details"

    **Signature**

    `_signedAbs(int256 x) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L213)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_trade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L846)</sub>

??? example "Details"

    **Signature**

    `_trade(address sender, struct FuturesMarketBase.TradeParams params)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [PositionModified](#positionmodified)

### `_transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L747)</sub>

??? example "Details"

    **Signature**

    `_transferMargin(int256 marginDelta, uint256 price, address sender)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [MarginTransferred](#margintransferred)

    * [PositionModified](#positionmodified)

### `_unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L246)</sub>

??? example "Details"

    **Signature**

    `_unrecordedFunding(uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updatePositionMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L782)</sub>

??? example "Details"

    **Signature**

    `_updatePositionMargin(struct IFuturesMarketBaseTypes.Position position, uint256 price, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L938)</sub>

??? example "Details"

    **Signature**

    `closePosition()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L943)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1007)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L908)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L916)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L676)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid price")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L687)

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L828)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L838)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `FundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1040)</sub>

**Signature**: `FundingRecomputed(int256 funding, uint256 index, uint256 timestamp)`

### `FuturesTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1042)</sub>

**Signature**: `FuturesTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

### `MarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1018)</sub>

**Signature**: `MarginTransferred(address account, int256 marginDelta)`

### `PositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1031)</sub>

**Signature**: `PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)`

### `PositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/FuturesMarketBase.sol#L1020)</sub>

**Signature**: `PositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)`
