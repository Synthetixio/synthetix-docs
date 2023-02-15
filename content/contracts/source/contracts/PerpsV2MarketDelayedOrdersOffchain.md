# PerpsV2MarketDelayedOrdersOffchain

## Description

**Source:** [contracts/PerpsV2MarketDelayedOrdersOffchain.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L28)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `cancelOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L85)</sub>

??? example "Details"

    **Signature**

    `cancelOffchainDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L89)

    * [require(..., "use onchain method")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L91)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `executeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L110)</sub>

??? example "Details"

    **Signature**

    `executeOffchainDelayedOrder(address account, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L114)

    * [require(..., "use onchain method")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L116)

    * [require(..., "price not updated")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L127)

    * [require(..., "too early")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L128)

    * [require(..., "too late")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L129)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `submitOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L54)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `submitOffchainDelayedOrderWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L62)</sub>

??? example "Details"

    **Signature**

    `submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

## Internal Functions

### `_confirmCanCancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L142)</sub>

??? example "Details"

    **Signature**

    `_confirmCanCancel(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentRoundId)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot cancel yet")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L147)

### `_offchainAssetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L155)</sub>

??? example "Details"

    **Signature**

    `_offchainAssetPriceRequireSystemChecks(uint256 maxAge) returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "invalid, price is 0")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L160)

    * [require(..., "price divergence too high")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L166)

### `_perpsV2ExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/PerpsV2MarketDelayedOrdersOffchain.sol#L35)</sub>

??? example "Details"

    **Signature**

    `_perpsV2ExchangeRate() view returns (contract IPerpsV2ExchangeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
