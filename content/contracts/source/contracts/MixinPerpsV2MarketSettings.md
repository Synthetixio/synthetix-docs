# MixinPerpsV2MarketSettings

## Description

**Source:** [contracts/MixinPerpsV2MarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L42)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L46)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L51)</sub>

??? example "Details"

    **Signature**

    `_flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L105)</sub>

??? example "Details"

    **Signature**

    `_liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `_liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L65)</sub>

??? example "Details"

    **Signature**

    `_makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_makerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `_makerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L93)</sub>

??? example "Details"

    **Signature**

    `_maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L81)</sub>

??? example "Details"

    **Signature**

    `_maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxMarketValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L85)</sub>

??? example "Details"

    **Signature**

    `_maxMarketValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L109)</sub>

??? example "Details"

    **Signature**

    `_minInitialMargin() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L97)</sub>

??? example "Details"

    **Signature**

    `_minKeeperFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `_nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L57)</sub>

??? example "Details"

    **Signature**

    `_parameter(bytes32 _marketKey, bytes32 key) view returns (uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L89)</sub>

??? example "Details"

    **Signature**

    `_skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L61)</sub>

??? example "Details"

    **Signature**

    `_takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_takerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.2/contracts/MixinPerpsV2MarketSettings.sol#L69)</sub>

??? example "Details"

    **Signature**

    `_takerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`