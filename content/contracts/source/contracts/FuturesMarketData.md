# FuturesMarketData

## Description

**Source:** [contracts/FuturesMarketData.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol)

## Structs

### `FeeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L63)</sub>

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `takerFee`          | `uint256` | TBA         |
| `makerFee`          | `uint256` | TBA         |
| `takerFeeNextPrice` | `uint256` | TBA         |
| `makerFeeNextPrice` | `uint256` | TBA         |

### `FundingDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L70)</sub>

| Field                   | Type      | Description |
| ----------------------- | --------- | ----------- |
| `currentFundingRate`    | `int256`  | TBA         |
| `unrecordedFunding`     | `int256`  | TBA         |
| `fundingLastRecomputed` | `uint256` | TBA         |

### `FundingParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L58)</sub>

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `maxFundingRate` | `uint256` | TBA         |
| `skewScaleUSD`   | `uint256` | TBA         |

### `FuturesGlobals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L16)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `minInitialMargin`       | `uint256` | TBA         |
| `liquidationFeeRatio`    | `uint256` | TBA         |
| `liquidationBufferRatio` | `uint256` | TBA         |
| `minKeeperFee`           | `uint256` | TBA         |

### `MarketData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L76)</sub>

| Field               | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| `market`            | `address`                                    | TBA         |
| `baseAsset`         | `bytes32`                                    | TBA         |
| `marketKey`         | `bytes32`                                    | TBA         |
| `feeRates`          | `struct FuturesMarketData.FeeRates`          | TBA         |
| `limits`            | `struct FuturesMarketData.MarketLimits`      | TBA         |
| `fundingParameters` | `struct FuturesMarketData.FundingParameters` | TBA         |
| `marketSizeDetails` | `struct FuturesMarketData.MarketSizeDetails` | TBA         |
| `priceDetails`      | `struct FuturesMarketData.PriceDetails`      | TBA         |

### `MarketLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L36)</sub>

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `maxLeverage`       | `uint256` | TBA         |
| `maxMarketValueUSD` | `uint256` | TBA         |

### `MarketSizeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L46)</sub>

| Field        | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| `marketSize` | `uint256`                        | TBA         |
| `sides`      | `struct FuturesMarketData.Sides` | TBA         |
| `marketDebt` | `uint256`                        | TBA         |
| `marketSkew` | `int256`                         | TBA         |

### `MarketSummary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L23)</sub>

| Field                | Type                                | Description |
| -------------------- | ----------------------------------- | ----------- |
| `market`             | `address`                           | TBA         |
| `asset`              | `bytes32`                           | TBA         |
| `key`                | `bytes32`                           | TBA         |
| `maxLeverage`        | `uint256`                           | TBA         |
| `price`              | `uint256`                           | TBA         |
| `marketSize`         | `uint256`                           | TBA         |
| `marketSkew`         | `int256`                            | TBA         |
| `marketDebt`         | `uint256`                           | TBA         |
| `currentFundingRate` | `int256`                            | TBA         |
| `feeRates`           | `struct FuturesMarketData.FeeRates` | TBA         |

### `PositionData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L87)</sub>

| Field                  | Type                                      | Description |
| ---------------------- | ----------------------------------------- | ----------- |
| `position`             | `struct IFuturesMarketBaseTypes.Position` | TBA         |
| `notionalValue`        | `int256`                                  | TBA         |
| `profitLoss`           | `int256`                                  | TBA         |
| `accruedFunding`       | `int256`                                  | TBA         |
| `remainingMargin`      | `uint256`                                 | TBA         |
| `accessibleMargin`     | `uint256`                                 | TBA         |
| `liquidationPrice`     | `uint256`                                 | TBA         |
| `canLiquidatePosition` | `bool`                                    | TBA         |

### `PriceDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L53)</sub>

| Field     | Type      | Description |
| --------- | --------- | ----------- |
| `price`   | `uint256` | TBA         |
| `invalid` | `bool`    | TBA         |

### `Sides`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L41)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

## Variables

### `resolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L100)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L104)</sub>

??? example "Details"

    **Signature**

    `constructor(contract IAddressResolver _resolverProxy)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L202)</sub>

??? example "Details"

    **Signature**

    `allMarketSummaries() view returns (struct FuturesMarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `globals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L124)</sub>

??? example "Details"

    **Signature**

    `globals() view returns (struct FuturesMarketData.FuturesGlobals)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L240)</sub>

??? example "Details"

    **Signature**

    `marketDetails(contract IFuturesMarket market) view returns (struct FuturesMarketData.MarketData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDetailsForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L244)</sub>

??? example "Details"

    **Signature**

    `marketDetailsForKey(bytes32 marketKey) view returns (struct FuturesMarketData.MarketData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L194)</sub>

??? example "Details"

    **Signature**

    `marketSummaries(address[] markets) view returns (struct FuturesMarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummariesForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L198)</sub>

??? example "Details"

    **Signature**

    `marketSummariesForKeys(bytes32[] marketKeys) view returns (struct FuturesMarketData.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L135)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 marketKey) view returns (struct IFuturesMarketSettings.Parameters)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positionDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L314)</sub>

??? example "Details"

    **Signature**

    `positionDetails(contract IFuturesMarket market, address account) view returns (struct FuturesMarketData.PositionData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positionDetailsForMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L318)</sub>

??? example "Details"

    **Signature**

    `positionDetailsForMarketKey(bytes32 marketKey, address account) view returns (struct FuturesMarketData.PositionData)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L290)</sub>

??? example "Details"

    **Signature**

    `_accessibleMargin(contract IFuturesMarket market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L280)</sub>

??? example "Details"

    **Signature**

    `_accruedFunding(contract IFuturesMarket market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_fundingParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L206)</sub>

??? example "Details"

    **Signature**

    `_fundingParameters(struct IFuturesMarketSettings.Parameters params) pure returns (struct FuturesMarketData.FundingParameters)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L110)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_futuresMarketSettings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L117)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketSettings() view returns (contract IFuturesMarketSettings)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L295)</sub>

??? example "Details"

    **Signature**

    `_liquidationPrice(contract IFuturesMarket market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L219)</sub>

??? example "Details"

    **Signature**

    `_marketDetails(contract IFuturesMarket market) view returns (struct FuturesMarketData.MarketData)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L214)</sub>

??? example "Details"

    **Signature**

    `_marketSizes(contract IFuturesMarket market) view returns (struct FuturesMarketData.Sides)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L165)</sub>

??? example "Details"

    **Signature**

    `_marketSummaries(address[] markets) view returns (struct FuturesMarketData.MarketSummary[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L270)</sub>

??? example "Details"

    **Signature**

    `_notionalValue(contract IFuturesMarket market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L139)</sub>

??? example "Details"

    **Signature**

    `_parameters(bytes32 marketKey) view returns (struct IFuturesMarketSettings.Parameters)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L248)</sub>

??? example "Details"

    **Signature**

    `_position(contract IFuturesMarket market, address account) view returns (struct IFuturesMarketBaseTypes.Position)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_positionDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L300)</sub>

??? example "Details"

    **Signature**

    `_positionDetails(contract IFuturesMarket market, address account) view returns (struct FuturesMarketData.PositionData)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L275)</sub>

??? example "Details"

    **Signature**

    `_profitLoss(contract IFuturesMarket market, address account) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketData.sol#L285)</sub>

??? example "Details"

    **Signature**

    `_remainingMargin(contract IFuturesMarket market, address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
