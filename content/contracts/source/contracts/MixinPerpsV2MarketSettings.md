# MixinPerpsV2MarketSettings

## Description

**Source:** [contracts/MixinPerpsV2MarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L60)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L64)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_delayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L107)</sub>

??? example "Details"

    **Signature**

    `_delayedOrderConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L69)</sub>

??? example "Details"

    **Signature**

    `_flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_keeperLiquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L187)</sub>

??? example "Details"

    **Signature**

    `_keeperLiquidationFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L167)</sub>

??? example "Details"

    **Signature**

    `_liquidationBufferRatio(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L179)</sub>

??? example "Details"

    **Signature**

    `_liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationPremiumMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L155)</sub>

??? example "Details"

    **Signature**

    `_liquidationPremiumMultiplier(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L83)</sub>

??? example "Details"

    **Signature**

    `_makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L91)</sub>

??? example "Details"

    **Signature**

    `_makerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L99)</sub>

??? example "Details"

    **Signature**

    `_makerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L139)</sub>

??? example "Details"

    **Signature**

    `_maxDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_maxFundingVelocity(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L175)</sub>

??? example "Details"

    **Signature**

    `_maxKeeperFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L119)</sub>

??? example "Details"

    **Signature**

    `_maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxLiquidationDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L159)</sub>

??? example "Details"

    **Signature**

    `_maxLiquidationDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L123)</sub>

??? example "Details"

    **Signature**

    `_maxMarketValue(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxPD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L163)</sub>

??? example "Details"

    **Signature**

    `_maxPD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L135)</sub>

??? example "Details"

    **Signature**

    `_minDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_minInitialMargin() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L171)</sub>

??? example "Details"

    **Signature**

    `_minKeeperFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L103)</sub>

??? example "Details"

    **Signature**

    `_nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainDelayedOrderMaxAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L115)</sub>

??? example "Details"

    **Signature**

    `_offchainDelayedOrderMaxAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainDelayedOrderMinAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L111)</sub>

??? example "Details"

    **Signature**

    `_offchainDelayedOrderMinAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `_offchainMarketKey(bytes32 _marketKey) view returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_offchainPriceDivergence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L151)</sub>

??? example "Details"

    **Signature**

    `_offchainPriceDivergence(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L75)</sub>

??? example "Details"

    **Signature**

    `_parameter(bytes32 _marketKey, bytes32 key) view returns (uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_skewScale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L127)</sub>

??? example "Details"

    **Signature**

    `_skewScale(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L79)</sub>

??? example "Details"

    **Signature**

    `_takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L87)</sub>

??? example "Details"

    **Signature**

    `_takerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinPerpsV2MarketSettings.sol#L95)</sub>

??? example "Details"

    **Signature**

    `_takerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
