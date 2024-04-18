# MixinFuturesNextPriceOrders

## Description

**Source:** [contracts/frozen/MixinFuturesNextPriceOrders.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol)

## Variables

### `nextPriceOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L20)</sub>

**Type:** `mapping(address => struct IFuturesMarketBaseTypes.NextPriceOrder)`

## Internal Functions

### `_confirmationWindowOver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L232)</sub>

??? example "Details"

    **Signature**

    `_confirmationWindowOver(uint256 currentRoundId, uint256 targetRoundId) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L238)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextPriceCommitDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L243)</sub>

??? example "Details"

    **Signature**

    `_nextPriceCommitDeposit(struct FuturesMarketBase.TradeParams params) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_submitNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L41)</sub>

??? example "Details"

    **Signature**

    `_submitNextPriceOrder(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "previous order exists")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L43)

    **Emits**

    * [PositionModified](#positionmodified)

    * [NextPriceOrderSubmitted](#nextpriceordersubmitted)

## External Functions

### `cancelNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L105)</sub>

??? example "Details"

    **Signature**

    `cancelNextPriceOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L109)

    **Emits**

    * [NextPriceOrderRemoved](#nextpriceorderremoved)

### `executeNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L164)</sub>

??? example "Details"

    **Signature**

    `executeNextPriceOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L168)

    * [require(..., "target roundId not reached")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L172)

    * [require(..., "order too old, use cancel")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L179)

    **Emits**

    * [PositionModified](#positionmodified)

    * [NextPriceOrderRemoved](#nextpriceorderremoved)

### `submitNextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L31)</sub>

??? example "Details"

    **Signature**

    `submitNextPriceOrder(int256 sizeDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `submitNextPriceOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L37)</sub>

??? example "Details"

    **Signature**

    `submitNextPriceOrderWithTracking(int256 sizeDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `NextPriceOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L265)</sub>

**Signature**: `NextPriceOrderRemoved(address account, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`

### `NextPriceOrderSubmitted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesNextPriceOrders.sol#L256)</sub>

**Signature**: `NextPriceOrderSubmitted(address account, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`
