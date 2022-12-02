# PerpsV2MarketViews

## Description

**Source:** [contracts/PerpsV2MarketViews.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L166)</sub>

??? example "Details"

    **Signature**

    `accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L149)</sub>

??? example "Details"

    **Signature**

    `accruedFunding(address account) view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L48)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L27)</sub>

??? example "Details"

    **Signature**

    `baseAsset() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L205)</sub>

??? example "Details"

    **Signature**

    `canLiquidate(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L100)</sub>

??? example "Details"

    **Signature**

    `currentFundingRate() view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L108)</sub>

??? example "Details"

    **Signature**

    `currentFundingVelocity() view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fillPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L52)</sub>

??? example "Details"

    **Signature**

    `fillPrice(int256 size) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L60)</sub>

??? example "Details"

    **Signature**

    `fundingLastRecomputed() view returns (uint32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L67)</sub>

??? example "Details"

    **Signature**

    `fundingSequence(uint256 index) view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L124)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L190)</sub>

??? example "Details"

    **Signature**

    `liquidationFee(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L178)</sub>

??? example "Details"

    **Signature**

    `liquidationPrice(address account) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L91)</sub>

??? example "Details"

    **Signature**

    `marketDebt() view returns (uint256 debt, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L22)</sub>

??? example "Details"

    **Signature**

    `marketKey() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L34)</sub>

??? example "Details"

    **Signature**

    `marketSize() view returns (uint128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L81)</sub>

??? example "Details"

    **Signature**

    `marketSizes() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L41)</sub>

??? example "Details"

    **Signature**

    `marketSkew() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L133)</sub>

??? example "Details"

    **Signature**

    `notionalValue(address account) view returns (int256 value, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L218)</sub>

??? example "Details"

    **Signature**

    `orderFee(int256 sizeDelta) view returns (uint256 fee, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L74)</sub>

??? example "Details"

    **Signature**

    `positions(address account) view returns (struct IPerpsV2MarketBaseTypes.Position)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L242)</sub>

??? example "Details"

    **Signature**

    `postTradeDetails(int256 sizeDelta, uint256 tradePrice, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, enum IPerpsV2MarketBaseTypes.Status status)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L141)</sub>

??? example "Details"

    **Signature**

    `profitLoss(address account) view returns (int256 pnl, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L157)</sub>

??? example "Details"

    **Signature**

    `remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L116)</sub>

??? example "Details"

    **Signature**

    `unrecordedFunding() view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_approxLiquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_approxLiquidationPrice(struct IPerpsV2MarketBaseTypes.Position position, uint256 currentPrice) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketViews.sol#L313)</sub>

??? example "Details"

    **Signature**

    `_marketDebt(uint256 price) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`