# PerpsV2MarketDelayedOrdersBase

## Description

**Source:** [contracts/PerpsV2MarketDelayedOrdersBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L28)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L35)</sub>

??? example "Details"

    **Signature**

    `delayedOrders(address account) view returns (struct IPerpsV2MarketBaseTypes.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L130)</sub>

??? example "Details"

    **Signature**

    `_cancelDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_confirmCanCancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L211)</sub>

??? example "Details"

    **Signature**

    `_confirmCanCancel(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentRoundId)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L160)</sub>

??? example "Details"

    **Signature**

    `_executeDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentPrice, uint256 currentRoundId, uint256 takerFee, uint256 makerFee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_submitDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L41)</sub>

??? example "Details"

    **Signature**

    `_submitDelayedOrder(bytes32 marketKey, int256 sizeDelta, uint256 priceImpactDelta, uint256 desiredTimeDelta, bytes32 trackingCode, bool isOffchain)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "previous order exists")](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L50)

    * [require(..., "delay out of bounds")](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L58)

### `emitDelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L265)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderRemoved(address account, uint256 currentRoundId, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitDelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L232)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderSubmitted(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `DelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L252)</sub>

**Signature**: `DelayedOrderRemoved(address account, bool isOffchain, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

### `DelayedOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.1/contracts/PerpsV2MarketDelayedOrdersBase.sol#L218)</sub>

**Signature**: `DelayedOrderSubmitted(address account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 intentionTime, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`
