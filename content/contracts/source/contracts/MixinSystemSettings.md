# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L43)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L61)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L108)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L82)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L92)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L100)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L96)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L104)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L87)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L65)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L69)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/MixinSystemSettings.sol#L38)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`
