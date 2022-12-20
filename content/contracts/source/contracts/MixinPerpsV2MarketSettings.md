# MixinPerpsV2MarketSettings

## Description

**Source:** [contracts/MixinPerpsV2MarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L53)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L57)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_delayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L104)</sub>

??? example "Details"

    **Signature**

    `_delayedOrderConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L62)</sub>

??? example "Details"

    **Signature**

    `_flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L160)</sub>

??? example "Details"

    **Signature**

    `_liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `_liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L76)</sub>

??? example "Details"

    **Signature**

    `_makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L88)</sub>

??? example "Details"

    **Signature**

    `_makerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L96)</sub>

??? example "Details"

    **Signature**

    `_makerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_maxDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_maxFundingVelocity(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L116)</sub>

??? example "Details"

    **Signature**

    `_maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L120)</sub>

??? example "Details"

    **Signature**

    `_maxMarketValue(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `_minDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `_minInitialMargin() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L152)</sub>

??? example "Details"

    **Signature**

    `_minKeeperFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L100)</sub>

??? example "Details"

    **Signature**

    `_nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainDelayedOrderMaxAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L112)</sub>

??? example "Details"

    **Signature**

    `_offchainDelayedOrderMaxAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainDelayedOrderMinAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L108)</sub>

??? example "Details"

    **Signature**

    `_offchainDelayedOrderMinAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `_offchainMarketKey(bytes32 _marketKey) view returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainPriceDivergence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_offchainPriceDivergence(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_overrideCommitFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `_overrideCommitFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L68)</sub>

??? example "Details"

    **Signature**

    `_parameter(bytes32 _marketKey, bytes32 key) view returns (uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_skewScale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L124)</sub>

??? example "Details"

    **Signature**

    `_skewScale(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L72)</sub>

??? example "Details"

    **Signature**

    `_takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L84)</sub>

??? example "Details"

    **Signature**

    `_takerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.3/contracts/MixinPerpsV2MarketSettings.sol#L92)</sub>

??? example "Details"

    **Signature**

    `_takerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
