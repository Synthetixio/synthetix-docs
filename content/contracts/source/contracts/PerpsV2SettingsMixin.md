# PerpsV2SettingsMixin

## Description

**Source:** [contracts/PerpsV2SettingsMixin.sol](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L40)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L44)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_baseFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L59)</sub>

??? example "Details"

    **Signature**

    `_baseFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_baseFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L63)</sub>

??? example "Details"

    **Signature**

    `_baseFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L49)</sub>

??? example "Details"

    **Signature**

    `_flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L95)</sub>

??? example "Details"

    **Signature**

    `_liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L91)</sub>

??? example "Details"

    **Signature**

    `_liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L83)</sub>

??? example "Details"

    **Signature**

    `_maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L71)</sub>

??? example "Details"

    **Signature**

    `_maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxSingleSideValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L75)</sub>

??? example "Details"

    **Signature**

    `_maxSingleSideValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L99)</sub>

??? example "Details"

    **Signature**

    `_minInitialMargin() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L87)</sub>

??? example "Details"

    **Signature**

    `_minKeeperFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L67)</sub>

??? example "Details"

    **Signature**

    `_nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_parameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L55)</sub>

??? example "Details"

    **Signature**

    `_parameter(bytes32 _marketKey, bytes32 key) view returns (uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/PerpsV2SettingsMixin.sol#L79)</sub>

??? example "Details"

    **Signature**

    `_skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
