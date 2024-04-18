# IPerpsV2MarketViews

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketViews.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol)

## Views

### `accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L53)</sub>

??? example "Details"

    **Signature**

    `accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L49)</sub>

??? example "Details"

    **Signature**

    `accruedFunding(address account) view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L27)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L11)</sub>

??? example "Details"

    **Signature**

    `baseAsset() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L61)</sub>

??? example "Details"

    **Signature**

    `canLiquidate(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L35)</sub>

??? example "Details"

    **Signature**

    `currentFundingRate() view returns (int256 fundingRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L37)</sub>

??? example "Details"

    **Signature**

    `currentFundingVelocity() view returns (int256 fundingVelocity)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L25)</sub>

??? example "Details"

    **Signature**

    `delayedOrders(address account) view returns (struct IPerpsV2MarketBaseTypes.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fillPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L29)</sub>

??? example "Details"

    **Signature**

    `fillPrice(int256 sizeDelta) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L17)</sub>

??? example "Details"

    **Signature**

    `fundingLastRecomputed() view returns (uint32 timestamp)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L19)</sub>

??? example "Details"

    **Signature**

    `fundingRateLastRecomputed() view returns (int128 fundingRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L21)</sub>

??? example "Details"

    **Signature**

    `fundingSequence(uint256 index) view returns (int128 netFunding)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L41)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256 length)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L59)</sub>

??? example "Details"

    **Signature**

    `isFlagged(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L57)</sub>

??? example "Details"

    **Signature**

    `liquidationFee(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L55)</sub>

??? example "Details"

    **Signature**

    `liquidationPrice(address account) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L33)</sub>

??? example "Details"

    **Signature**

    `marketDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L9)</sub>

??? example "Details"

    **Signature**

    `marketKey() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L13)</sub>

??? example "Details"

    **Signature**

    `marketSize() view returns (uint128 size)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L31)</sub>

??? example "Details"

    **Signature**

    `marketSizes() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L15)</sub>

??? example "Details"

    **Signature**

    `marketSkew() view returns (int128 skew)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L45)</sub>

??? example "Details"

    **Signature**

    `notionalValue(address account) view returns (int256 value, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L63)</sub>

??? example "Details"

    **Signature**

    `orderFee(int256 sizeDelta, enum IPerpsV2MarketBaseTypes.OrderType orderType) view returns (uint256 fee, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L23)</sub>

??? example "Details"

    **Signature**

    `positions(address account) view returns (struct IPerpsV2MarketBaseTypes.Position)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L68)</sub>

??? example "Details"

    **Signature**

    `postTradeDetails(int256 sizeDelta, uint256 tradePrice, enum IPerpsV2MarketBaseTypes.OrderType orderType, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, enum IPerpsV2MarketBaseTypes.Status status)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L47)</sub>

??? example "Details"

    **Signature**

    `profitLoss(address account) view returns (int256 pnl, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L51)</sub>

??? example "Details"

    **Signature**

    `remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketViews.sol#L39)</sub>

??? example "Details"

    **Signature**

    `unrecordedFunding() view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
