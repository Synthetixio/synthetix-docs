# PerpsV2MarketDelayedOrdersBase

## Description

**Source:** [contracts/PerpsV2MarketDelayedOrdersBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L26)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L33)</sub>

??? example "Details"

    **Signature**

    `delayedOrders(address account) view returns (struct IPerpsV2MarketBaseTypes.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_cancelDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_confirmCanCancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L228)</sub>

??? example "Details"

    **Signature**

    `_confirmCanCancel(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentRoundId)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_delayedOrderCommitDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L237)</sub>

??? example "Details"

    **Signature**

    `_delayedOrderCommitDeposit(struct PerpsV2MarketBase.TradeParams params) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L168)</sub>

??? example "Details"

    **Signature**

    `_executeDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentPrice, uint256 currentRoundId, uint256 takerFee, uint256 makerFee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L39)</sub>

??? example "Details"

    **Signature**

    `_submitDelayedOrder(bytes32 marketKey, int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta, bytes32 trackingCode, bool isOffchain)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "previous order exists")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L48)

    * [require(..., "delay out of bounds")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L56)

### `emitDelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L295)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderRemoved(address account, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitDelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L263)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderSubmitted(address account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `DelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L283)</sub>

**Signature**: `DelayedOrderRemoved(address account, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

### `DelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2MarketDelayedOrdersBase.sol#L250)</sub>

**Signature**: `DelayedOrderSubmitted(address account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`
