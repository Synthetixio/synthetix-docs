# PerpsV2MarketData

## Description

**Source:** [contracts/PerpsV2MarketData.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol)

## Structs

### `FeeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L64)</sub>

| Field                          | Type      | Description |
| ------------------------------ | --------- | ----------- |
| `takerFee`                     | `uint256` | TBA         |
| `makerFee`                     | `uint256` | TBA         |
| `takerFeeDelayedOrder`         | `uint256` | TBA         |
| `makerFeeDelayedOrder`         | `uint256` | TBA         |
| `takerFeeOffchainDelayedOrder` | `uint256` | TBA         |
| `makerFeeOffchainDelayedOrder` | `uint256` | TBA         |
| `overrideCommitFee`            | `uint256` | TBA         |

### `FundingDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L74)</sub>

| Field                   | Type      | Description |
| ----------------------- | --------- | ----------- |
| `currentFundingRate`    | `int256`  | TBA         |
| `unrecordedFunding`     | `int256`  | TBA         |
| `fundingLastRecomputed` | `uint256` | TBA         |

### `FundingParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L59)</sub>

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `maxFundingVelocity` | `uint256` | TBA         |
| `skewScale`          | `uint256` | TBA         |

### `FuturesGlobals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L16)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `minInitialMargin`       | `uint256` | TBA         |
| `liquidationFeeRatio`    | `uint256` | TBA         |
| `liquidationBufferRatio` | `uint256` | TBA         |
| `minKeeperFee`           | `uint256` | TBA         |

### `MarketData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L80)</sub>

| Field               | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| `market`            | `address`                                    | TBA         |
| `baseAsset`         | `bytes32`                                    | TBA         |
| `marketKey`         | `bytes32`                                    | TBA         |
| `feeRates`          | `struct PerpsV2MarketData.FeeRates`          | TBA         |
| `limits`            | `struct PerpsV2MarketData.MarketLimits`      | TBA         |
| `fundingParameters` | `struct PerpsV2MarketData.FundingParameters` | TBA         |
| `marketSizeDetails` | `struct PerpsV2MarketData.MarketSizeDetails` | TBA         |
| `priceDetails`      | `struct PerpsV2MarketData.PriceDetails`      | TBA         |

### `MarketLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L37)</sub>

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `maxLeverage`    | `uint256` | TBA         |
| `maxMarketValue` | `uint256` | TBA         |

### `MarketSizeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L47)</sub>

| Field        | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| `marketSize` | `uint256`                        | TBA         |
| `sides`      | `struct PerpsV2MarketData.Sides` | TBA         |
| `marketDebt` | `uint256`                        | TBA         |
| `marketSkew` | `int256`                         | TBA         |

### `MarketSummary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L23)</sub>

| Field                    | Type                                | Description |
| ------------------------ | ----------------------------------- | ----------- |
| `market`                 | `address`                           | TBA         |
| `asset`                  | `bytes32`                           | TBA         |
| `key`                    | `bytes32`                           | TBA         |
| `maxLeverage`            | `uint256`                           | TBA         |
| `price`                  | `uint256`                           | TBA         |
| `marketSize`             | `uint256`                           | TBA         |
| `marketSkew`             | `int256`                            | TBA         |
| `marketDebt`             | `uint256`                           | TBA         |
| `currentFundingRate`     | `int256`                            | TBA         |
| `currentFundingVelocity` | `int256`                            | TBA         |
| `feeRates`               | `struct PerpsV2MarketData.FeeRates` | TBA         |

### `PositionData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L91)</sub>

| Field                  | Type                                      | Description |
| ---------------------- | ----------------------------------------- | ----------- |
| `position`             | `struct IPerpsV2MarketBaseTypes.Position` | TBA         |
| `notionalValue`        | `int256`                                  | TBA         |
| `profitLoss`           | `int256`                                  | TBA         |
| `accruedFunding`       | `int256`                                  | TBA         |
| `remainingMargin`      | `uint256`                                 | TBA         |
| `accessibleMargin`     | `uint256`                                 | TBA         |
| `liquidationPrice`     | `uint256`                                 | TBA         |
| `canLiquidatePosition` | `bool`                                    | TBA         |

### `PriceDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L54)</sub>

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `price`   | `uint256` | TBA         |
| `invalid` | `bool`    | TBA         |

### `Sides`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L42)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

## Variables

### `resolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L104)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L108)</sub>

??? example "Details"

    **Signature**

    `constructor(contract IAddressResolver _resolverProxy)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L193)</sub>

??? example "Details"

    **Signature**

    `allMarketSummaries() view returns (struct PerpsV2MarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allProxiedMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L197)</sub>

??? example "Details"

    **Signature**

    `allProxiedMarketSummaries() view returns (struct PerpsV2MarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `globals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L128)</sub>

??? example "Details"

    **Signature**

    `globals() view returns (struct PerpsV2MarketData.FuturesGlobals)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L243)</sub>

??? example "Details"

    **Signature**

    `marketDetails(contract IPerpsV2MarketViews market) view returns (struct PerpsV2MarketData.MarketData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDetailsForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L247)</sub>

??? example "Details"

    **Signature**

    `marketDetailsForKey(bytes32 marketKey) view returns (struct PerpsV2MarketData.MarketData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L185)</sub>

??? example "Details"

    **Signature**

    `marketSummaries(address[] markets) view returns (struct PerpsV2MarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummariesForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L189)</sub>

??? example "Details"

    **Signature**

    `marketSummariesForKeys(bytes32[] marketKeys) view returns (struct PerpsV2MarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L139)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 marketKey) view returns (struct IPerpsV2MarketSettings.Parameters)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positionDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L303)</sub>

??? example "Details"

    **Signature**

    `positionDetails(contract IPerpsV2MarketViews market, address account) view returns (struct PerpsV2MarketData.PositionData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positionDetailsForMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L307)</sub>

??? example "Details"

    **Signature**

    `positionDetailsForMarketKey(bytes32 marketKey, address account) view returns (struct PerpsV2MarketData.PositionData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L279)</sub>

??? example "Details"

    **Signature**

    `_accessibleMargin(contract IPerpsV2MarketViews market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L269)</sub>

??? example "Details"

    **Signature**

    `_accruedFunding(contract IPerpsV2MarketViews market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_fundingParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L201)</sub>

??? example "Details"

    **Signature**

    `_fundingParameters(struct IPerpsV2MarketSettings.Parameters params) pure returns (struct PerpsV2MarketData.FundingParameters)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L114)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_futuresMarketSettings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketSettings() view returns (contract IPerpsV2MarketSettings)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L284)</sub>

??? example "Details"

    **Signature**

    `_liquidationPrice(contract IPerpsV2MarketViews market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L214)</sub>

??? example "Details"

    **Signature**

    `_marketDetails(contract IPerpsV2MarketViews market) view returns (struct PerpsV2MarketData.MarketData)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L209)</sub>

??? example "Details"

    **Signature**

    `_marketSizes(contract IPerpsV2MarketViews market) view returns (struct PerpsV2MarketData.Sides)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L147)</sub>

??? example "Details"

    **Signature**

    `_marketSummaries(address[] markets) view returns (struct PerpsV2MarketData.MarketSummary[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L259)</sub>

??? example "Details"

    **Signature**

    `_notionalValue(contract IPerpsV2MarketViews market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L143)</sub>

??? example "Details"

    **Signature**

    `_parameters(bytes32 marketKey) view returns (struct IPerpsV2MarketSettings.Parameters)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L251)</sub>

??? example "Details"

    **Signature**

    `_position(contract IPerpsV2MarketViews market, address account) view returns (struct IPerpsV2MarketBaseTypes.Position)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_positionDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L289)</sub>

??? example "Details"

    **Signature**

    `_positionDetails(contract IPerpsV2MarketViews market, address account) view returns (struct PerpsV2MarketData.PositionData)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L264)</sub>

??? example "Details"

    **Signature**

    `_profitLoss(contract IPerpsV2MarketViews market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/PerpsV2MarketData.sol#L274)</sub>

??? example "Details"

    **Signature**

    `_remainingMargin(contract IPerpsV2MarketViews market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
