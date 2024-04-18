# IFuturesMarket

## Description

**Source:** [contracts/interfaces/IFuturesMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol)

## Views

### `accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L55)</sub>

??? example "Details"

    **Signature**

    `accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L51)</sub>

??? example "Details"

    **Signature**

    `accruedFunding(address account) view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L33)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L12)</sub>

??? example "Details"

    **Signature**

    `baseAsset() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L61)</sub>

??? example "Details"

    **Signature**

    `canLiquidate(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L39)</sub>

??? example "Details"

    **Signature**

    `currentFundingRate() view returns (int256 fundingRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L18)</sub>

??? example "Details"

    **Signature**

    `fundingLastRecomputed() view returns (uint32 timestamp)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L20)</sub>

??? example "Details"

    **Signature**

    `fundingSequence(uint256 index) view returns (int128 netFunding)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L43)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256 length)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L59)</sub>

??? example "Details"

    **Signature**

    `liquidationFee(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L57)</sub>

??? example "Details"

    **Signature**

    `liquidationPrice(address account) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L37)</sub>

??? example "Details"

    **Signature**

    `marketDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L10)</sub>

??? example "Details"

    **Signature**

    `marketKey() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L14)</sub>

??? example "Details"

    **Signature**

    `marketSize() view returns (uint128 size)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L35)</sub>

??? example "Details"

    **Signature**

    `marketSizes() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L16)</sub>

??? example "Details"

    **Signature**

    `marketSkew() view returns (int128 skew)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L47)</sub>

??? example "Details"

    **Signature**

    `notionalValue(address account) view returns (int256 value, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L63)</sub>

??? example "Details"

    **Signature**

    `orderFee(int256 sizeDelta) view returns (uint256 fee, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L22)</sub>

??? example "Details"

    **Signature**

    `positions(address account) view returns (uint64 id, uint64 fundingIndex, uint128 margin, uint128 lastPrice, int128 size)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L65)</sub>

??? example "Details"

    **Signature**

    `postTradeDetails(int256 sizeDelta, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, enum IFuturesMarketBaseTypes.Status status)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L49)</sub>

??? example "Details"

    **Signature**

    `profitLoss(address account) view returns (int256 pnl, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L53)</sub>

??? example "Details"

    **Signature**

    `remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L41)</sub>

??? example "Details"

    **Signature**

    `unrecordedFunding() view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `cancelNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L93)</sub>

??? example "Details"

    **Signature**

    `cancelNextPriceOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L97)</sub>

??? example "Details"

    **Signature**

    `closePosition()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L99)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `executeNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L95)</sub>

??? example "Details"

    **Signature**

    `executeNextPriceOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L101)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L85)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L87)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L79)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L89)</sub>

??? example "Details"

    **Signature**

    `submitNextPriceOrder(int256 sizeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitNextPriceOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L91)</sub>

??? example "Details"

    **Signature**

    `submitNextPriceOrderWithTracking(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L81)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarket.sol#L83)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``
