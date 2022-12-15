# IPerpsV2MarketConsolidated

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketConsolidated.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol)

## Structs

### `DelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L39)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `isOffchain`       | `bool`    | TBA         |
| `sizeDelta`        | `int128`  | TBA         |
| `priceImpactDelta` | `uint128` | TBA         |
| `targetRoundId`    | `uint128` | TBA         |
| `commitDeposit`    | `uint128` | TBA         |
| `keeperDeposit`    | `uint128` | TBA         |
| `executableAtTime` | `uint256` | TBA         |
| `intentionTime`    | `uint256` | TBA         |
| `trackingCode`     | `bytes32` | TBA         |

### `Position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L30)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `id`               | `uint64`  | TBA         |
| `lastFundingIndex` | `uint64`  | TBA         |
| `margin`           | `uint128` | TBA         |
| `lastPrice`        | `uint128` | TBA         |
| `size`             | `int128`  | TBA         |

## Views

### `accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L94)</sub>

??? example "Details"

    **Signature**

    `accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L90)</sub>

??? example "Details"

    **Signature**

    `accruedFunding(address account) view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `assetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L70)</sub>

??? example "Details"

    **Signature**

    `assetPrice() view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L56)</sub>

??? example "Details"

    **Signature**

    `baseAsset() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L100)</sub>

??? example "Details"

    **Signature**

    `canLiquidate(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L76)</sub>

??? example "Details"

    **Signature**

    `currentFundingRate() view returns (int256 fundingRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L78)</sub>

??? example "Details"

    **Signature**

    `currentFundingVelocity() view returns (int256 fundingVelocity)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L68)</sub>

??? example "Details"

    **Signature**

    `delayedOrders(address account) view returns (struct IPerpsV2MarketConsolidated.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L62)</sub>

??? example "Details"

    **Signature**

    `fundingLastRecomputed() view returns (uint32 timestamp)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L64)</sub>

??? example "Details"

    **Signature**

    `fundingSequence(uint256 index) view returns (int128 netFunding)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L82)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256 length)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L98)</sub>

??? example "Details"

    **Signature**

    `liquidationFee(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L96)</sub>

??? example "Details"

    **Signature**

    `liquidationPrice(address account) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L74)</sub>

??? example "Details"

    **Signature**

    `marketDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L54)</sub>

??? example "Details"

    **Signature**

    `marketKey() view returns (bytes32 key)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L58)</sub>

??? example "Details"

    **Signature**

    `marketSize() view returns (uint128 size)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L72)</sub>

??? example "Details"

    **Signature**

    `marketSizes() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L60)</sub>

??? example "Details"

    **Signature**

    `marketSkew() view returns (int128 skew)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L86)</sub>

??? example "Details"

    **Signature**

    `notionalValue(address account) view returns (int256 value, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L102)</sub>

??? example "Details"

    **Signature**

    `orderFee(int256 sizeDelta, enum IPerpsV2MarketBaseTypes.OrderType orderType) view returns (uint256 fee, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L66)</sub>

??? example "Details"

    **Signature**

    `positions(address account) view returns (struct IPerpsV2MarketConsolidated.Position)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L107)</sub>

??? example "Details"

    **Signature**

    `postTradeDetails(int256 sizeDelta, uint256 tradePrice, enum IPerpsV2MarketBaseTypes.OrderType orderType, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, enum IPerpsV2MarketConsolidated.Status status)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L88)</sub>

??? example "Details"

    **Signature**

    `profitLoss(address account) view returns (int256 pnl, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L92)</sub>

??? example "Details"

    **Signature**

    `remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L80)</sub>

??? example "Details"

    **Signature**

    `unrecordedFunding() view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L159)</sub>

??? example "Details"

    **Signature**

    `cancelDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `cancelOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L172)</sub>

??? example "Details"

    **Signature**

    `cancelOffchainDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L139)</sub>

??? example "Details"

    **Signature**

    `closePosition(uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closePositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L141)</sub>

??? example "Details"

    **Signature**

    `closePositionWithTracking(uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L161)</sub>

??? example "Details"

    **Signature**

    `executeDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `executeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L174)</sub>

??? example "Details"

    **Signature**

    `executeOffchainDelayedOrder(address account, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L143)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L131)</sub>

??? example "Details"

    **Signature**

    `modifyPosition(int256 sizeDelta, uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `modifyPositionWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L133)</sub>

??? example "Details"

    **Signature**

    `modifyPositionWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L125)</sub>

??? example "Details"

    **Signature**

    `recomputeFunding() returns (uint256 lastIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L146)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L152)</sub>

??? example "Details"

    **Signature**

    `submitDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L164)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L166)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L127)</sub>

??? example "Details"

    **Signature**

    `transferMargin(int256 marginDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawAllMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L129)</sub>

??? example "Details"

    **Signature**

    `withdrawAllMargin()`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `DelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L197)</sub>

**Signature**: `DelayedOrderRemoved(address account, bool isOffchain, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

### `DelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L208)</sub>

**Signature**: `DelayedOrderSubmitted(address account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 intentionTime, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

### `FundingRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L193)</sub>

**Signature**: `FundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)`

### `MarginTransferred`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L189)</sub>

**Signature**: `MarginTransferred(address account, int256 marginDelta)`

### `PerpsTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L195)</sub>

**Signature**: `PerpsTracking(bytes32 trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)`

### `PositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L191)</sub>

**Signature**: `PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)`

### `PositionModified`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/interfaces/IPerpsV2MarketConsolidated.sol#L178)</sub>

**Signature**: `PositionModified(uint256 id, address account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)`
