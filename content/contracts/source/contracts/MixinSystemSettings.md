# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L38)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L49)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L122)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L63)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L126)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L138)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L130)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L134)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L110)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L84)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L79)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L94)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L102)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L75)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L89)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L67)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L71)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/MixinSystemSettings.sol#L40)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`
