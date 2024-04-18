# PerpsV2MarketBase

## Description

**Source:** [contracts/PerpsV2MarketBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol)

## Structs

### `TradeParams`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L71)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `sizeDelta`        | `int256`  | TBA         |
| `oraclePrice`      | `uint256` | TBA         |
| `fillPrice`        | `uint256` | TBA         |
| `desiredFillPrice` | `uint256` | TBA         |
| `takerFee`         | `uint256` | TBA         |
| `makerFee`         | `uint256` | TBA         |
| `trackingCode`     | `bytes32` | TBA         |

## Variables

### `marketState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L55)</sub>

**Type:** `contract IPerpsV2MarketState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L83)</sub>

??? example "Details"

    **Signature**

    `constructor(address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L110)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_abs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L660)</sub>

??? example "Details"

    **Signature**

    `_abs(int256 x) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L336)</sub>

??? example "Details"

    **Signature**

    `_accessibleMargin(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L277)</sub>

??? example "Details"

    **Signature**

    `_accruedFunding(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (int256 funding)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L599)</sub>

??? example "Details"

    **Signature**

    `_assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L144)</sub>

??? example "Details"

    **Signature**

    `_baseAsset() view returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L433)</sub>

??? example "Details"

    **Signature**

    `_canLiquidate(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L182)</sub>

??? example "Details"

    **Signature**

    `_currentFundingRate() view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L166)</sub>

??? example "Details"

    **Signature**

    `_currentFundingVelocity() view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L442)</sub>

??? example "Details"

    **Signature**

    `_currentLeverage(struct IPerpsV2MarketBaseTypes.Position position, uint256 price, uint256 remainingMargin_) pure returns (int256 leverage)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_dynamicFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L492)</sub>

??? example "Details"

    **Signature**

    `_dynamicFeeRate() view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L123)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L127)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_fillPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L611)</sub>

??? example "Details"

    **Signature**

    `_fillPrice(int256 size, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L683)</sub>

??? example "Details"

    **Signature**

    `_isError(enum IPerpsV2MarketBaseTypes.Status status) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_latestFundingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L496)</sub>

??? example "Details"

    **Signature**

    `_latestFundingIndex() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L369)</sub>

??? example "Details"

    **Signature**

    `_liquidationFee(int256 positionSize, uint256 price) view returns (uint256 lFee)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L391)</sub>

??? example "Details"

    **Signature**

    `_liquidationMargin(int256 positionSize, uint256 price) view returns (uint256 lMargin)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationPremium`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L419)</sub>

??? example "Details"

    **Signature**

    `_liquidationPremium(int256 positionSize, uint256 currentPrice) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L135)</sub>

??? example "Details"

    **Signature**

    `_manager() view returns (contract IFuturesMarketManagerInternal)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marginPlusProfitFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L289)</sub>

??? example "Details"

    **Signature**

    `_marginPlusProfitFunding(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_marketKey() view returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_max`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L664)</sub>

??? example "Details"

    **Signature**

    `_max(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_min`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L668)</sub>

??? example "Details"

    **Signature**

    `_min(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_netFundingPerUnit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L222)</sub>

??? example "Details"

    **Signature**

    `_netFundingPerUnit(uint256 startIndex, uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextFundingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L218)</sub>

??? example "Details"

    **Signature**

    `_nextFundingEntry(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L268)</sub>

??? example "Details"

    **Signature**

    `_notionalValue(int256 positionSize, uint256 price) pure returns (int256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L455)</sub>

??? example "Details"

    **Signature**

    `_orderFee(struct PerpsV2MarketBase.TradeParams params, uint256 dynamicFeeRate) view returns (uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_orderSizeTooLarge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L232)</sub>

??? example "Details"

    **Signature**

    `_orderSizeTooLarge(uint256 maxSize, int256 oldSize, int256 newSize) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L500)</sub>

??? example "Details"

    **Signature**

    `_postTradeDetails(struct IPerpsV2MarketBaseTypes.Position oldPos, struct PerpsV2MarketBase.TradeParams params) view returns (struct IPerpsV2MarketBaseTypes.Position newPosition, uint256 fee, enum IPerpsV2MarketBaseTypes.Status tradeStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L272)</sub>

??? example "Details"

    **Signature**

    `_profitLoss(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) pure returns (int256 pnl)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_proportionalElapsed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L162)</sub>

??? example "Details"

    **Signature**

    `_proportionalElapsed() view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_proportionalSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L155)</sub>

??? example "Details"

    **Signature**

    `_proportionalSkew() view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeMarginWithDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L300)</sub>

??? example "Details"

    **Signature**

    `_recomputeMarginWithDelta(struct IPerpsV2MarketBaseTypes.Position position, uint256 price, int256 marginDelta) view returns (uint256 margin, enum IPerpsV2MarketBaseTypes.Status statusCode)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingLiquidatableMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L331)</sub>

??? example "Details"

    **Signature**

    `_remainingLiquidatableMargin(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L321)</sub>

??? example "Details"

    **Signature**

    `_remainingMargin(struct IPerpsV2MarketBaseTypes.Position position, uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_revertIfError`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L690)</sub>

??? example "Details"

    **Signature**

    `_revertIfError(bool isError, enum IPerpsV2MarketBaseTypes.Status status) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sameSide`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L676)</sub>

??? example "Details"

    **Signature**

    `_sameSide(int256 a, int256 b) pure returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_settings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L139)</sub>

??? example "Details"

    **Signature**

    `_settings() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_signedAbs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L653)</sub>

??? example "Details"

    **Signature**

    `_signedAbs(int256 x) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketBase.sol#L207)</sub>

??? example "Details"

    **Signature**

    `_unrecordedFunding(uint256 price) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
