# PerpsV2MarketBase

## Description

**Source:** [contracts/PerpsV2MarketBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol)

## Structs

### `TradeParams`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L110)</sub>

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `sizeDelta`    | `int256`  | TBA         |
| `price`        | `uint256` | TBA         |
| `baseFee`      | `uint256` | TBA         |
| `trackingCode` | `bytes32` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L99)</sub>

**Type:** `bytes32`

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L54)</sub>

**Type:** `bytes32`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L74)</sub>

**Type:** `uint32`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L75)</sub>

**Type:** `int128[]`

### `lastPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L94)</sub>

**Type:** `uint64`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L51)</sub>

**Type:** `bytes32`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L57)</sub>

**Type:** `uint128`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L63)</sub>

**Type:** `int128`

### `positionIdOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L84)</sub>

**Type:** `mapping(uint256 => address)`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L81)</sub>

**Type:** `mapping(address => struct IPerpsV2BaseTypes.Position)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L119)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver, bytes32 _baseAsset, bytes32 _marketKey)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L573)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L148)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_abs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L526)</sub>

??? example "Details"

    **Signature**

    `_abs(int256 x) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L321)</sub>

??? example "Details"

    **Signature**

    `_accessibleMargin(struct IPerpsV2BaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L270)</sub>

??? example "Details"

    **Signature**

    `_accruedFunding(struct IPerpsV2BaseTypes.Position position, uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_applyDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L705)</sub>

??? example "Details"

    **Signature**

    `_applyDebtCorrection(struct IPerpsV2BaseTypes.Position newPosition, struct IPerpsV2BaseTypes.Position oldPosition)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_assetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L588)</sub>

??? example "Details"

    **Signature**

    `_assetPriceRequireSystemChecks(bool allowMarketPaused) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L377)</sub>

??? example "Details"

    **Signature**

    `_canLiquidate(struct IPerpsV2BaseTypes.Position position, uint256 price) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L911)</sub>

??? example "Details"

    **Signature**

    `_closePosition(bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L194)</sub>

??? example "Details"

    **Signature**

    `_currentFundingRate(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L386)</sub>

??? example "Details"

    **Signature**

    `_currentLeverage(struct IPerpsV2BaseTypes.Position position, uint256 price, uint256 remainingMargin_) pure returns (int256 leverage)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L411)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRate() view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchangeCircuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L159)</sub>

??? example "Details"

    **Signature**

    `_exchangeCircuitBreaker() view returns (contract IExchangeCircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L163)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_initPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L750)</sub>

??? example "Details"

    **Signature**

    `_initPosition(address account, struct IPerpsV2BaseTypes.Position position)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_isError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L547)</sub>

??? example "Details"

    **Signature**

    `_isError(enum IPerpsV2BaseTypes.Status status) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_latestFundingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L415)</sub>

??? example "Details"

    **Signature**

    `_latestFundingIndex() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L922)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L354)</sub>

??? example "Details"

    **Signature**

    `_liquidationFee(int256 positionSize, uint256 price) view returns (uint256 lFee)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L372)</sub>

??? example "Details"

    **Signature**

    `_liquidationMargin(int256 positionSize, uint256 price) view returns (uint256 lMargin)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L171)</sub>

??? example "Details"

    **Signature**

    `_manager() view returns (contract IFuturesMarketManagerInternal)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marginPlusProfitFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_marginPlusProfitFunding(struct IPerpsV2BaseTypes.Position position, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L690)</sub>

??? example "Details"

    **Signature**

    `_marketDebt(uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_max`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L530)</sub>

??? example "Details"

    **Signature**

    `_max(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_min`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L534)</sub>

??? example "Details"

    **Signature**

    `_min(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L890)</sub>

??? example "Details"

    **Signature**

    `_modifyPosition(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_netFundingPerUnit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L215)</sub>

??? example "Details"

    **Signature**

    `_netFundingPerUnit(uint256 startIndex, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextFundingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L211)</sub>

??? example "Details"

    **Signature**

    `_nextFundingEntry(uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L261)</sub>

??? example "Details"

    **Signature**

    `_notionalValue(int256 positionSize, uint256 price) pure returns (int256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L399)</sub>

??? example "Details"

    **Signature**

    `_orderFee(struct PerpsV2MarketBase.TradeParams params, uint256 dynamicFeeRate) pure returns (uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_orderSizeTooLarge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L225)</sub>

??? example "Details"

    **Signature**

    `_orderSizeTooLarge(uint256 maxSize, int256 oldSize, int256 newSize) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_positionDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L658)</sub>

??? example "Details"

    **Signature**

    `_positionDebtCorrection(struct IPerpsV2BaseTypes.Position position) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L419)</sub>

??? example "Details"

    **Signature**

    `_postTradeDetails(struct IPerpsV2BaseTypes.Position oldPos, struct PerpsV2MarketBase.TradeParams params) view returns (struct IPerpsV2BaseTypes.Position newPosition, uint256 fee, enum IPerpsV2BaseTypes.Status tradeStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L265)</sub>

??? example "Details"

    **Signature**

    `_profitLoss(struct IPerpsV2BaseTypes.Position position, uint256 price) pure returns (int256 pnl)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_proportionalSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L186)</sub>

??? example "Details"

    **Signature**

    `_proportionalSkew(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "price can't be zero")](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L188)

    * [require(..., "skewScale is zero")](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L190)

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L622)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L293)</sub>

??? example "Details"

    **Signature**

    `_recomputeMarginWithDelta(struct IPerpsV2BaseTypes.Position position, uint256 price, int256 marginDelta) view returns (uint256 margin, enum IPerpsV2BaseTypes.Status statusCode)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L314)</sub>

??? example "Details"

    **Signature**

    `_remainingMargin(struct IPerpsV2BaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_revertIfError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L554)</sub>

??? example "Details"

    **Signature**

    `_revertIfError(bool isError, enum IPerpsV2BaseTypes.Status status) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sameSide`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L540)</sub>

??? example "Details"

    **Signature**

    `_sameSide(int256 a, int256 b) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_settings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L175)</sub>

??? example "Details"

    **Signature**

    `_settings() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_signedAbs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L519)</sub>

??? example "Details"

    **Signature**

    `_signedAbs(int256 x) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L167)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_trade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L829)</sub>

??? example "Details"

    **Signature**

    `_trade(address sender, struct PerpsV2MarketBase.TradeParams params)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [PositionModified](#positionmodified)

### `_transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L711)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L200)</sub>

??? example "Details"

    **Signature**

    `_unrecordedFunding(uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updatePositionMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L761)</sub>

??? example "Details"

    **Signature**

    `_updatePositionMargin(struct IPerpsV2BaseTypes.Position position, uint256 price, int256 marginDelta)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L902)</sub>

??? example "Details"

    **Signature**

    `closePosition()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L907)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L966)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L878)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L886)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L640)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid price")](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L651)

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L808)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L821)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `FundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L999)</sub>

**Signature**: `FundingRecomputed(int256 funding, uint256 index, uint256 timestamp)`

### `MarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L977)</sub>

**Signature**: `MarginTransferred(address account, int256 marginDelta)`

### `PositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L990)</sub>

**Signature**: `PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)`

### `PositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L979)</sub>

**Signature**: `PositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)`

### `Tracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/PerpsV2MarketBase.sol#L1001)</sub>

**Signature**: `Tracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`
